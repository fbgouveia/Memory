// Dead Letter Queue Dual: Redis primario + JSONL local append-only (fallback).
// tag: #DLQ-DUAL-CONTINGENCIA
// Contrato: se Redis cair, o payload sanitizado sobrevive em arquivo local.
// Auditoria consolida Redis + JSONL para prova de integridade pos-queda.

const fs = require('fs');
const path = require('path');
const Redis = require('ioredis');
const logger = require('./logger');

const DLQ_LIST_KEY = process.env.DLQ_REDIS_KEY || 'aut_teste_dlq';
const FALLBACK_FILE = process.env.DLQ_FALLBACK_FILE || path.join(process.cwd(), '.tmp', 'dlq_fallback.jsonl');

const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: 1,
  enableOfflineQueue: false,
  retryStrategy: (times) => Math.min(times * 100, 500)
});

function buildRecord(jobId, origemFila, payloadMascarado, err) {
  return {
    jobId,
    origemFila,
    payload: payloadMascarado,
    erro: err && err.message ? err.message : String(err),
    stack: err && err.stack ? err.stack : null,
    timestamp: new Date().toISOString()
  };
}

function persistFallback(record) {
  try {
    fs.mkdirSync(path.dirname(FALLBACK_FILE), { recursive: true });
    fs.appendFileSync(FALLBACK_FILE, JSON.stringify({ ...record, destino: 'jsonl' }) + '\n');
    return { destino: 'jsonl', ok: true };
  } catch (e) {
    logger.error('[DLQ] Falha critica: nem Redis nem JSONL disponivel.', e);
    return { destino: 'none', ok: false, error: e.message };
  }
}

async function persist(jobId, origemFila, payloadMascarado, err) {
  const record = buildRecord(jobId, origemFila, payloadMascarado, err);
  try {
    await redis.rpush(DLQ_LIST_KEY, JSON.stringify({ ...record, destino: 'redis' }));
    return { destino: 'redis', ok: true };
  } catch (e) {
    logger.error(`[DLQ] Redis indisponivel, fallback para JSONL local.`, e);
    return persistFallback(record);
  }
}

async function readAll() {
  const redisRecords = [];
  try {
    const raw = await redis.lrange(DLQ_LIST_KEY, 0, -1);
    for (const r of raw) redisRecords.push(JSON.parse(r));
  } catch (e) {
    logger.error('[DLQ] Erro lendo Redis na auditoria.', e);
  }

  const jsonlRecords = [];
  try {
    if (fs.existsSync(FALLBACK_FILE)) {
      const lines = fs.readFileSync(FALLBACK_FILE, 'utf8').split('\n').filter(Boolean);
      for (const l of lines) jsonlRecords.push(JSON.parse(l));
    }
  } catch (e) {
    logger.error('[DLQ] Erro lendo JSONL na auditoria.', e);
  }

  return { redis: redisRecords, jsonl: jsonlRecords, all: [...redisRecords, ...jsonlRecords] };
}

async function clear() {
  try { await redis.del(DLQ_LIST_KEY); } catch (_) {}
  try { if (fs.existsSync(FALLBACK_FILE)) fs.unlinkSync(FALLBACK_FILE); } catch (_) {}
}

async function close() {
  try { await redis.quit(); } catch (_) {}
}

module.exports = { persist, readAll, clear, close, FALLBACK_FILE, DLQ_LIST_KEY };
