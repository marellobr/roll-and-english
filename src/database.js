const { Pool } = require('pg');
require('dotenv').config();

let pool = null;

function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes('railway.internal')
        ? false
        : { rejectUnauthorized: false }
    });
  }
  return pool;
}

async function getDb() {
  const p = getPool();
  await initSchema(p);
  return p;
}

async function initSchema(p) {
  await p.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha_hash TEXT NOT NULL,
      whatsapp TEXT,
      streak_atual INTEGER DEFAULT 0,
      melhor_streak INTEGER DEFAULT 0,
      pontos_totais INTEGER DEFAULT 0,
      palavras_aprendidas INTEGER DEFAULT 0,
      badge_atual TEXT DEFAULT 'white_belt',
      ultimo_checkin TEXT,
      criado_em TEXT DEFAULT now()::text,
      atualizado_em TEXT DEFAULT now()::text
    );
    CREATE TABLE IF NOT EXISTS content (
      id TEXT PRIMARY KEY,
      titulo TEXT NOT NULL,
      tipo TEXT NOT NULL,
      categoria TEXT NOT NULL,
      transcricao TEXT,
      traducao TEXT,
      video_link TEXT,
      vocabulario TEXT,
      frases TEXT,
      quiz TEXT,
      dialogo TEXT,
      pontos INTEGER DEFAULT 10,
      ordem INTEGER DEFAULT 0,
      ativo INTEGER DEFAULT 1,
      criado_em TEXT DEFAULT now()::text
    );
    CREATE TABLE IF NOT EXISTS user_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id),
      content_id TEXT NOT NULL REFERENCES content(id),
      concluido INTEGER DEFAULT 0,
      pontos_ganhos INTEGER DEFAULT 0,
      quiz_acertos INTEGER DEFAULT 0,
      quiz_total INTEGER DEFAULT 0,
      concluido_em TEXT,
      UNIQUE(user_id, content_id)
    );
    CREATE TABLE IF NOT EXISTS streak_logs (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id),
      data TEXT NOT NULL,
      concluiu INTEGER DEFAULT 0,
      UNIQUE(user_id, data)
    );
    CREATE TABLE IF NOT EXISTS whatsapp_logs (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      telefone TEXT NOT NULL,
      mensagem TEXT NOT NULL,
      tipo TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      enviado_em TEXT,
      criado_em TEXT DEFAULT now()::text
    );
CREATE TABLE IF NOT EXISTS word_errors (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      palavra TEXT NOT NULL,
      aula TEXT,
      erros INTEGER DEFAULT 1,
      acertos INTEGER DEFAULT 0,
      ultima_vez TEXT DEFAULT now()::text,
      UNIQUE(user_id, palavra)
    );
  `);
  await p.query(`ALTER TABLE content ADD COLUMN IF NOT EXISTS dialogo TEXT;`).catch(() => {});
}

async function query(sql, params = []) {
  const p = getPool();
  let idx = 0;
  const sqlFinal = sql.replace(/\?/g, () => `$${++idx}`);
  const result = await p.query(sqlFinal, params);
  return result.rows;
}

async function run(sql, params = []) {
  const p = getPool();
  let idx = 0;
  const sqlFinal = sql.replace(/\?/g, () => `$${++idx}`);
  const sqlPg = sqlFinal
    .replace(/INSERT OR REPLACE/gi, 'INSERT')
    .replace(/OR REPLACE/gi, '')
    .replace(/datetime\('now'\)/gi, "now()::text")
    .replace(/datetime\("now"\)/gi, "now()::text");
  await p.query(sqlPg, params);
}

async function get(sql, params = []) {
  const rows = await query(sql, params);
  return rows[0] || null;
}

module.exports = { getDb, query, run, get };