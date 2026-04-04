require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { getDb, query, run, get } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Auth middleware
function auth(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: 'Token inválido' });
  }
}

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'Roll & English MVP' });
});

// POST /auth/register
app.post('/auth/register', async (req, res) => {
  const { nome, email, senha, whatsapp } = req.body;
  if (!nome || !email || !senha) return res.status(400).json({ error: 'Preencha todos os campos' });
  await getDb();
  const existing = get('SELECT id FROM users WHERE email = ?', [email]);
  if (existing) return res.status(409).json({ error: 'Email já cadastrado' });
  const senhaHash = await bcrypt.hash(senha, 10);
  const id = uuidv4();
  run('INSERT INTO users (id,nome,email,senha_hash,whatsapp) VALUES (?,?,?,?,?)',
    [id, nome, email, senhaHash, whatsapp || null]);
  const token = jwt.sign({ id, email, nome }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.status(201).json({ token, user: { id, nome, email } });
});

// POST /auth/login
app.post('/auth/login', async (req, res) => {
  const { email, senha } = req.body;
  await getDb();
  const user = get('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });
  const ok = await bcrypt.compare(senha, user.senha_hash);
  if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });
  const token = jwt.sign({ id: user.id, email: user.email, nome: user.nome }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.json({ token, user: { id: user.id, nome: user.nome, email: user.email, streak_atual: user.streak_atual, pontos_totais: user.pontos_totais, badge_atual: user.badge_atual } });
});

// GET /content/daily
app.get('/content/daily', auth, async (req, res) => {
  await getDb();
  const rows = query(
    `SELECT * FROM content WHERE ativo = 1 AND id NOT IN
     (SELECT content_id FROM user_progress WHERE user_id = ? AND concluido = 1)
     ORDER BY ordem ASC LIMIT 1`, [req.user.id]
  );
  const content = rows[0];
  if (!content) return res.json({ content: null, cicloCompleto: true });
  content.vocabulario = JSON.parse(content.vocabulario || '[]');
  content.frases = JSON.parse(content.frases || '[]');
  content.quiz = JSON.parse(content.quiz || 'null');
  res.json({ content, cicloCompleto: false });
});

// GET /content/all
app.get('/content/all', auth, async (req, res) => {
  await getDb();
  const rows = query('SELECT * FROM content WHERE ativo = 1 ORDER BY ordem ASC', []);
  const userId = req.user.id;
  const progress = query('SELECT content_id, concluido, pontos_ganhos FROM user_progress WHERE user_id = ?', [userId]);
  const progressMap = {};
  progress.forEach(p => { progressMap[p.content_id] = p; });
  const contents = rows.map(c => ({
    ...c,
    vocabulario: JSON.parse(c.vocabulario || '[]'),
    frases: JSON.parse(c.frases || '[]'),
    quiz: JSON.parse(c.quiz || 'null'),
    progresso: progressMap[c.id] || { concluido: 0, pontos_ganhos: 0 }
  }));
  res.json({ contents });
});

// GET /content/vocab
app.get('/content/vocab', auth, async (req, res) => {
  await getDb();
  const rows = query('SELECT titulo, vocabulario, frases FROM content WHERE ativo = 1');
  const vocab = [];
  rows.forEach(c => {
    JSON.parse(c.vocabulario || '[]').forEach(p => vocab.push({ palavra: p, aula: c.titulo, tipo: 'palavra' }));
    JSON.parse(c.frases || '[]').forEach(f => vocab.push({ palavra: f, aula: c.titulo, tipo: 'frase' }));
  });
  res.json({ vocab });
});

// POST /content/checkin
app.post('/content/checkin', auth, async (req, res) => {
  const { content_id, quiz_acertos, quiz_total } = req.body;
  await getDb();
  const content = get('SELECT * FROM content WHERE id = ?', [content_id]);
  if (!content) return res.status(404).json({ error: 'Conteúdo não encontrado' });
  const user = get('SELECT * FROM users WHERE id = ?', [req.user.id]);
  const hoje = new Date().toISOString().split('T')[0];
  const checkinHoje = get('SELECT id FROM streak_logs WHERE user_id = ? AND data = ?', [req.user.id, hoje]);
  let streakAtual = user.streak_atual;
  if (!checkinHoje) {
    const ontem = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const checkinOntem = get('SELECT id FROM streak_logs WHERE user_id = ? AND data = ?', [req.user.id, ontem]);
    streakAtual = (checkinOntem || streakAtual === 0) ? streakAtual + 1 : 1;
    run('INSERT OR REPLACE INTO streak_logs (id,user_id,data,concluiu) VALUES (?,?,?,1)', [uuidv4(), req.user.id, hoje]);
  }
  const pontosGanhos = content.pontos + (quiz_acertos && quiz_total ? Math.round((quiz_acertos / quiz_total) * 5) : 0);
  const palavrasNovas = JSON.parse(content.vocabulario || '[]').length;
  run('INSERT OR REPLACE INTO user_progress (id,user_id,content_id,concluido,pontos_ganhos,quiz_acertos,quiz_total,concluido_em) VALUES (?,?,?,1,?,?,?,datetime("now"))',
    [uuidv4(), req.user.id, content_id, pontosGanhos, quiz_acertos || 0, quiz_total || 0]);
  const melhorStreak = Math.max(user.melhor_streak, streakAtual);
  run('UPDATE users SET streak_atual=?,melhor_streak=?,pontos_totais=pontos_totais+?,palavras_aprendidas=palavras_aprendidas+? WHERE id=?',
    [streakAtual, melhorStreak, pontosGanhos, palavrasNovas, req.user.id]);
  res.json({ success: true, pontosGanhos, streakAtual });
});

// GET /users/me
app.get('/users/me', auth, async (req, res) => {
  await getDb();
  const user = get('SELECT id,nome,email,whatsapp,streak_atual,melhor_streak,pontos_totais,palavras_aprendidas,badge_atual FROM users WHERE id=?', [req.user.id]);
  const totalAulas = get('SELECT COUNT(*) as total FROM content WHERE ativo=1').total;
  const aulasConcluidas = get('SELECT COUNT(*) as total FROM user_progress WHERE user_id=? AND concluido=1', [req.user.id]).total;
  res.json({ user, progresso: { totalAulas, aulasConcluidas, percentual: Math.round((aulasConcluidas / totalAulas) * 100) } });
});

// PUT /users/whatsapp
app.put('/users/whatsapp', auth, async (req, res) => {
  await getDb();
  run('UPDATE users SET whatsapp=? WHERE id=?', [req.body.whatsapp, req.user.id]);
  res.json({ success: true });
});

getDb().then(async () => {
  const { query } = require('./database');
  const total = query('SELECT COUNT(*) as total FROM content')[0]?.total || 0;
  if (total === 0) {
    console.log('Banco vazio - rodando seed...');
    const { execSync } = require('child_process');
    execSync('node src/seed.js', { stdio: 'inherit' });
  }
  app.listen(PORT, () => {
});