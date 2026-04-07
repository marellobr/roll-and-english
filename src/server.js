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

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'Roll & English MVP' });
});

app.post('/auth/register', async (req, res) => {
  try {
    const { nome, email, senha, whatsapp } = req.body;
    if (!nome || !email || !senha) return res.status(400).json({ error: 'Preencha todos os campos' });
    await getDb();
    const existing = await get('SELECT id FROM users WHERE email = ?', [email]);
    if (existing) return res.status(409).json({ error: 'Email já cadastrado' });
    const senhaHash = await bcrypt.hash(senha, 10);
    const id = uuidv4();
    await run('INSERT INTO users (id,nome,email,senha_hash,whatsapp) VALUES (?,?,?,?,?)', [id, nome, email, senhaHash, whatsapp || null]);
    const token = jwt.sign({ id, email, nome }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.status(201).json({ token, user: { id, nome, email } });
  } catch (err) {
    console.error('Erro register:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    await getDb();
    const user = await get('SELECT * FROM users WHERE email = ?', [email]);
    if (!user) return res.status(401).json({ error: 'Credenciais inválidas' });
    const ok = await bcrypt.compare(senha, user.senha_hash);
    if (!ok) return res.status(401).json({ error: 'Credenciais inválidas' });
    const token = jwt.sign({ id: user.id, email: user.email, nome: user.nome }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, user: { id: user.id, nome: user.nome, email: user.email, streak_atual: user.streak_atual, pontos_totais: user.pontos_totais, badge_atual: user.badge_atual } });
  } catch (err) {
    console.error('Erro login:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.get('/content/daily', auth, async (req, res) => {
  try {
    await getDb();
    const userRow = await get('SELECT pontos_totais FROM users WHERE id = ?', [req.user.id]);
const pontos = userRow?.pontos_totais || 0;
const rows = await query(
  `SELECT * FROM content WHERE ativo = 1 
   AND nivel_minimo <= $2
   AND id NOT IN
   (SELECT content_id FROM user_progress WHERE user_id = $1 AND concluido = 1)
   ORDER BY ordem ASC LIMIT 1`, [req.user.id, pontos]
);
    const content = rows[0];
    if (!content) return res.json({ content: null, cicloCompleto: true });
    content.vocabulario = JSON.parse(content.vocabulario || '[]');
    content.frases = JSON.parse(content.frases || '[]');
    content.quiz = JSON.parse(content.quiz || 'null');
    content.dialogo = JSON.parse(content.dialogo || 'null');
    res.json({ content, cicloCompleto: false });
  } catch (err) {
    console.error('Erro daily:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.get('/content/all', auth, async (req, res) => {
  try {
    await getDb();
    const rows = await query('SELECT * FROM content WHERE ativo = 1 ORDER BY ordem ASC', []);
    const progress = await query('SELECT content_id, concluido, pontos_ganhos FROM user_progress WHERE user_id = ?', [req.user.id]);
    const progressMap = {};
    progress.forEach(p => { progressMap[p.content_id] = p; });
    const userRow = await get('SELECT pontos_totais FROM users WHERE id = ?', [req.user.id]);
const pontosUser = userRow?.pontos_totais || 0;
const contents = rows.map(c => ({
  ...c,
  vocabulario: JSON.parse(c.vocabulario || '[]'),
  frases: JSON.parse(c.frases || '[]'),
  quiz: JSON.parse(c.quiz || 'null'),
  dialogo: JSON.parse(c.dialogo || 'null'),
  progresso: progressMap[c.id] || { concluido: 0, pontos_ganhos: 0 },
  bloqueada: (c.nivel_minimo || 0) > pontosUser,
}));
    res.json({ contents });
  } catch (err) {
    console.error('Erro all:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.get('/content/vocab', auth, async (req, res) => {
  try {
    await getDb();
    const rows = await query('SELECT titulo, vocabulario, frases FROM content WHERE ativo = 1');
    const vocab = [];
    rows.forEach(c => {
      JSON.parse(c.vocabulario || '[]').forEach(p => vocab.push({ palavra: p, aula: c.titulo, tipo: 'palavra' }));
      JSON.parse(c.frases || '[]').forEach(f => vocab.push({ palavra: f, aula: c.titulo, tipo: 'frase' }));
    });
    res.json({ vocab });
  } catch (err) {
    console.error('Erro vocab:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.post('/content/checkin', auth, async (req, res) => {
  try {
    const { content_id, quiz_acertos, quiz_total } = req.body;
    await getDb();
    const content = await get('SELECT * FROM content WHERE id = ?', [content_id]);
    if (!content) return res.status(404).json({ error: 'Conteúdo não encontrado' });
    const user = await get('SELECT * FROM users WHERE id = ?', [req.user.id]);
    const hoje = new Date().toISOString().split('T')[0];
    const checkinHoje = await get('SELECT id FROM streak_logs WHERE user_id = ? AND data = ?', [req.user.id, hoje]);
    let streakAtual = user.streak_atual;
    if (!checkinHoje) {
      const ontem = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      const checkinOntem = await get('SELECT id FROM streak_logs WHERE user_id = ? AND data = ?', [req.user.id, ontem]);
      streakAtual = (checkinOntem || streakAtual === 0) ? streakAtual + 1 : 1;
      await run('INSERT INTO streak_logs (id,user_id,data,concluiu) VALUES (?,?,?,1) ON CONFLICT (user_id,data) DO NOTHING', [uuidv4(), req.user.id, hoje]);
    }
    const pontosGanhos = content.pontos + (quiz_acertos && quiz_total ? Math.round((quiz_acertos / quiz_total) * 5) : 0);
    const palavrasNovas = JSON.parse(content.vocabulario || '[]').length;
    await run(
      'INSERT INTO user_progress (id,user_id,content_id,concluido,pontos_ganhos,quiz_acertos,quiz_total,concluido_em) VALUES (?,?,?,1,?,?,?,now()::text) ON CONFLICT (user_id,content_id) DO UPDATE SET concluido=1,pontos_ganhos=EXCLUDED.pontos_ganhos',
      [uuidv4(), req.user.id, content_id, pontosGanhos, quiz_acertos || 0, quiz_total || 0]
    );
    const melhorStreak = Math.max(user.melhor_streak, streakAtual);
    await run('UPDATE users SET streak_atual=?,melhor_streak=?,pontos_totais=pontos_totais+?,palavras_aprendidas=palavras_aprendidas+? WHERE id=?',
      [streakAtual, melhorStreak, pontosGanhos, palavrasNovas, req.user.id]);
    res.json({ success: true, pontosGanhos, streakAtual });
  } catch (err) {
    console.error('Erro checkin:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.get('/users/me', auth, async (req, res) => {
  try {
    await getDb();
    const user = await get('SELECT id,nome,email,whatsapp,streak_atual,melhor_streak,pontos_totais,palavras_aprendidas,badge_atual FROM users WHERE id=?', [req.user.id]);
    const totalRow = await get('SELECT COUNT(*) as total FROM content WHERE ativo=1', []);
    const concluidoRow = await get('SELECT COUNT(*) as total FROM user_progress WHERE user_id=? AND concluido=1', [req.user.id]);
    const totalAulas = parseInt(totalRow?.total || 0);
    const aulasConcluidas = parseInt(concluidoRow?.total || 0);
    res.json({ user, progresso: { totalAulas, aulasConcluidas, percentual: totalAulas > 0 ? Math.round((aulasConcluidas / totalAulas) * 100) : 0 } });
  } catch (err) {
    console.error('Erro me:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.put('/users/whatsapp', auth, async (req, res) => {
  try {
    await getDb();
    await run('UPDATE users SET whatsapp=? WHERE id=?', [req.body.whatsapp, req.user.id]);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.post('/words/error', auth, async (req, res) => {
  try {
    await getDb();
    const { palavra, aula } = req.body;
    await run(
      `INSERT INTO word_errors (id,user_id,palavra,aula,erros,acertos)
       VALUES (?,?,?,?,1,0)
       ON CONFLICT (user_id,palavra)
       DO UPDATE SET erros=word_errors.erros+1, ultima_vez=now()::text`,
      [uuidv4(), req.user.id, palavra, aula || '']
    );
    res.json({ success: true });
  } catch (err) {
    console.error('Erro word error:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.post('/words/correct', auth, async (req, res) => {
  try {
    await getDb();
    const { palavra } = req.body;
    await run(
      `INSERT INTO word_errors (id,user_id,palavra,erros,acertos)
       VALUES (?,?,?,0,1)
       ON CONFLICT (user_id,palavra)
       DO UPDATE SET acertos=word_errors.acertos+1, ultima_vez=now()::text`,
      [uuidv4(), req.user.id, palavra]
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno' });
  }
});

app.get('/words/weak', auth, async (req, res) => {
  try {
    await getDb();
    const words = await query(
      `SELECT palavra, aula, erros, acertos,
       ROUND(acertos::numeric / NULLIF(erros + acertos, 0) * 100) as taxa
       FROM word_errors
       WHERE user_id = ? AND erros > 0
       ORDER BY erros DESC, taxa ASC
       LIMIT 20`,
      [req.user.id]
    );
    res.json({ words });
  } catch (err) {
    res.status(500).json({ error: 'Erro interno' });
  }
});

async function inicializar() {
  await getDb();
  const total = await get('SELECT COUNT(*) as total FROM content', []);
  const totalAulas = parseInt(total?.total || 0);
  if (totalAulas === 0) {
    console.log('Banco vazio - rodando seed...');
    const { execSync } = require('child_process');
    execSync('node src/seed.js', { stdio: 'inherit' });
  }
  app.listen(PORT, () => {
    console.log('\n🥋 Roll & English — MVP Backend');
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
}

app.get('/ranking/semanal', auth, async (req, res) => {
  try {
    await getDb();
    const inicioSemana = new Date();
    inicioSemana.setDate(inicioSemana.getDate() - inicioSemana.getDay());
    inicioSemana.setHours(0, 0, 0, 0);
    const dataInicio = inicioSemana.toISOString();
    const ranking = await query(`
      SELECT
        u.id,
        u.nome,
        u.badge_atual,
        u.pontos_totais,
        COUNT(up.id) as aulas_semana,
        COALESCE(SUM(up.pontos_ganhos), 0) as pontos_semana,
        ROW_NUMBER() OVER (ORDER BY COALESCE(SUM(up.pontos_ganhos), 0) DESC) as posicao
      FROM users u
      LEFT JOIN user_progress up ON up.user_id = u.id
        AND up.concluido_em >= $1
      GROUP BY u.id, u.nome, u.badge_atual, u.pontos_totais
      ORDER BY pontos_semana DESC
      LIMIT 10
    `, [dataInicio]);
    const minha = await get(`
      SELECT
        COALESCE(SUM(up.pontos_ganhos), 0) as pontos_semana,
        COUNT(up.id) as aulas_semana
      FROM user_progress up
      WHERE up.user_id = $1 AND up.concluido_em >= $2
    `, [req.user.id, dataInicio]);
    res.json({ ranking, minha });
  } catch (err) {
    console.error('Erro ranking:', err.message);
    res.status(500).json({ error: 'Erro interno' });
  }
});

inicializar().catch(console.error);