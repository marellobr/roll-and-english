const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '../database.sqlite');

let db = null;
let SQL = null;

async function getDb() {
  if (db) return db;

  SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const fileBuffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(fileBuffer);
  } else {
    db = new SQL.Database();
  }

  initSchema();
  save();
  return db;
}

function save() {
  const data = db.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

function initSchema() {
  db.run(`
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
      criado_em TEXT DEFAULT (datetime('now')),
      atualizado_em TEXT DEFAULT (datetime('now'))
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
      pontos INTEGER DEFAULT 10,
      ordem INTEGER DEFAULT 0,
      ativo INTEGER DEFAULT 1,
      criado_em TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS user_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      content_id TEXT NOT NULL,
      concluido INTEGER DEFAULT 0,
      pontos_ganhos INTEGER DEFAULT 0,
      quiz_acertos INTEGER DEFAULT 0,
      quiz_total INTEGER DEFAULT 0,
      concluido_em TEXT,
      UNIQUE(user_id, content_id)
    );
    CREATE TABLE IF NOT EXISTS streak_logs (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
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
      criado_em TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS badges (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      badge_id TEXT NOT NULL,
      badge_nome TEXT NOT NULL,
      conquistado_em TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, badge_id)
    );
  `);
}

// Helpers para simular a API do better-sqlite3
function query(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

function run(sql, params = []) {
  db.run(sql, params);
  save();
}

function get(sql, params = []) {
  const rows = query(sql, params);
  return rows[0] || null;
}

module.exports = { getDb, query, run, get, save };