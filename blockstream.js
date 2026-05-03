const axios = require('axios');

const BASE_URL = 'https://blockstream.info/api';

// Cache simples em memória
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function setCached(key, data) {
  cache.set(key, { data, timestamp: Date.now() });
}

// Retry com backoff exponencial
async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, { timeout: 10000 });
      return response.data;
    } catch (err) {
      const isLast = i === retries - 1;
      if (isLast) throw err;
      const isRateLimit = err.response?.status === 429;
      const waitTime = isRateLimit ? delay * (i + 1) * 2 : delay * (i + 1);
      console.log(`Retry ${i + 1}/${retries} para ${url} — aguardando ${waitTime}ms`);
      await new Promise(r => setTimeout(r, waitTime));
    }
  }
}

// Busca UTXOs de um endereço
async function getUTXOs(address) {
  const cacheKey = `utxos_${address}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const data = await fetchWithRetry(`${BASE_URL}/address/${address}/utxo`);
  setCached(cacheKey, data);
  return data;
}

// Busca detalhes de uma transação
async function getTransaction(txid) {
  const cacheKey = `tx_${txid}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const data = await fetchWithRetry(`${BASE_URL}/tx/${txid}`);
  setCached(cacheKey, data);
  return data;
}

// Busca histórico de transações de um endereço
async function getAddressHistory(address) {
  const cacheKey = `history_${address}`;
  const cached = getCached(cacheKey);
  if (cached) return cached;

  const data = await fetchWithRetry(`${BASE_URL}/address/${address}/txs`);
  setCached(cacheKey, data);
  return data;
}

module.exports = { getUTXOs, getTransaction, getAddressHistory };