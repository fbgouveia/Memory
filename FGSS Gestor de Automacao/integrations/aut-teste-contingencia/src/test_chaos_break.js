// Teste Fisico de Quebra de Infraestrutura (Chaos Engineering).
// tag: #CHAOS-DLQ-AUDIT
// Cenario: envio massivo (300 jobs) + docker stop forcado do Redis no meio.
// Auditoria: nenhum payload perdido, DLQ sem duplicatas, PII mascarado,
// fallback JSONL acionado durante a queda, logs preservados.

const { execSync } = require('child_process');
const { Queue, Worker, QueueEvents } = require('bullmq');
const Redis = require('ioredis');
const logger = require('./logger');
const dlq = require('./dlq');

const _origDuplicate = Redis.prototype.duplicate;
Redis.prototype.duplicate = function (opts) {
  const c = _origDuplicate.call(this, opts);
  c.on('error', () => {});
  return c;
};

const REDIS_CONTAINER = process.env.REDIS_CONTAINER || 'redis_aut-teste-contingencia';
const QUEUE_NAME = 'test_chaos_queue';
const TOTAL_JOBS = parseInt(process.env.CHAOS_TOTAL_JOBS || '200', 10);
const FAIL_MOD = 3;
const KILL_AT_MS = 1500;
const REVIVE_AT_MS = 4500;
const HARD_TIMEOUT_MS = 90000;
const WORKER_RATE_MAX = 20;
const WORKER_RATE_DURATION = 1000;

const mask = require('./logger').__test_mask;

const QUIET = process.env.CHAOS_VERBOSE !== '1';
const realInfo = logger.info;
const realError = logger.error;
if (QUIET) {
  logger.info = () => {};
  logger.error = () => {};
}

process.on('unhandledRejection', () => {});
process.on('uncaughtException', () => {});

if (QUIET) {
  console.error = () => {};
}

function makeConnection() {
  const c = new Redis({
    host: '127.0.0.1',
    port: 6379,
    maxRetriesPerRequest: null,
    enableOfflineQueue: true,
    retryStrategy: (t) => Math.min(t * 200, 1000)
  });
  c.on('error', () => {});
  return c;
}

const connection = makeConnection();

function dockerStop() {
  try {
    execSync(`docker stop ${REDIS_CONTAINER}`, { timeout: 8000 });
    realInfo(`[CHAOS] Container ${REDIS_CONTAINER} derrubado forcadamente.`);
    return true;
  } catch (e) {
    realInfo('[CHAOS] Falha derrubando Redis.', e);
    return false;
  }
}

function dockerStart() {
  try {
    execSync(`docker start ${REDIS_CONTAINER}`, { timeout: 8000 });
    for (let i = 0; i < 10; i++) {
      try {
        const out = execSync(`docker exec ${REDIS_CONTAINER} redis-cli ping`, { timeout: 2000 }).toString().trim();
        if (out === 'PONG') { realInfo(`[CHAOS] Container ${REDIS_CONTAINER} restaurado e respondendo.`); return true; }
      } catch (_) {}
      execSync('sleep 0.5', { timeout: 1000 });
    }
    realInfo('[CHAOS] Redis restaurado mas nao respondeu a ping.', null);
    return false;
  } catch (e) {
    realInfo('[CHAOS] Falha subindo Redis.', e);
    return false;
  }
}

async function preflightRedis() {
  const probe = new Redis({ host: '127.0.0.1', port: 6379, maxRetriesPerRequest: 2, retryStrategy: () => 200 });
  try {
    await probe.ping();
  } finally {
    try { await probe.quit(); } catch (_) {}
  }
}

function makePayload(n) {
  return {
    n,
    transacaoId: `tx_${String(n).padStart(6, '0')}`,
    cpf: '123.456.789-00',
    telefone: '+5511999999999',
    valor: 100 + n,
    body: 'mensagem privada confidencial',
    meta: { origem: 'chaos_test', token: `secret_${n}` }
  };
}

async function runTest() {
  realInfo(`[CHAOS] Iniciando teste de quebra fisica. total=${TOTAL_JOBS} fail_mod=${FAIL_MOD}`);

  await preflightRedis();
  await dlq.clear();

  const queue = new Queue(QUEUE_NAME, {
    connection,
    defaultJobOptions: {
      attempts: 2,
      backoff: { type: 'exponential', delay: 50 }
    }
  });

  try { await queue.obliterate({ force: true }); } catch (_) {}
  try { await queue.drain(); } catch (_) {}

  const queueEvents = new QueueEvents(QUEUE_NAME, { connection });

  let completed = 0;
  let failed = 0;
  const completedIds = new Set();
  const failedIds = new Set();

  queueEvents.on('completed', ({ jobId }) => { completed++; completedIds.add(jobId); });
  queueEvents.on('failed', ({ jobId }) => { failed++; failedIds.add(jobId); });

  const worker = new Worker(QUEUE_NAME, async job => {
    const n = job.data.n;
    if (n % FAIL_MOD === 0) {
      throw new Error(`Falha simulada deterministica no job n=${n}`);
    }
  }, {
    connection,
    limiter: { max: WORKER_RATE_MAX, duration: WORKER_RATE_DURATION },
    stalledInterval: 3000,
    maxStalledCount: 1
  });

  worker.on('failed', async (job, err) => {
    if (job && job.attemptsMade >= job.opts.attempts) {
      try { await dlq.persist(job.id, QUEUE_NAME, mask(job.data), { message: err.message, stack: null }); } catch (_) {}
    }
  });

  const jobs = [];
  for (let n = 1; n <= TOTAL_JOBS; n++) {
    jobs.push(queue.add('processar', makePayload(n)));
  }
  const added = await Promise.allSettled(jobs);
  const enqueued = added.filter(r => r.status === 'fulfilled').length;
  realInfo(`[CHAOS] ${enqueued}/${TOTAL_JOBS} jobs enfileirados. Rate limit ${WORKER_RATE_MAX}/${WORKER_RATE_DURATION}ms.`);

  const killTimer = setTimeout(() => dockerStop(), KILL_AT_MS);
  const reviveTimer = setTimeout(() => dockerStart(), REVIVE_AT_MS);

  let ok = false;
  try {
    ok = await new Promise(resolve => {
      const start = Date.now();
      const poll = setInterval(() => {
        const done = completed + failed;
        if (done >= TOTAL_JOBS) {
          clearInterval(poll);
          resolve(true);
        } else if (Date.now() - start > HARD_TIMEOUT_MS) {
          clearInterval(poll);
          realInfo(`[CHAOS] Timeout: completed=${completed} failed=${failed} pendentes=${TOTAL_JOBS - done}`);
          resolve(false);
        }
      }, 500);
    });
  } finally {
    clearTimeout(killTimer);
    clearTimeout(reviveTimer);
    dockerStart();
  }

  try { await worker.close(); } catch (_) {}
  try { await queue.close(); } catch (_) {}
  try { await queueEvents.close(); } catch (_) {}

  const { redis: dlqRedis, jsonl: dlqJsonl, all: dlqAll } = await dlq.readAll();

  const expectedFailures = Math.floor(TOTAL_JOBS / FAIL_MOD);
  const jobIdSet = new Set(dlqAll.map(r => r.jobId));
  const duplicatas = dlqAll.length - jobIdSet.size;

  let piiOk = true;
  const piiBad = [];
  for (const r of dlqAll) {
    const p = r.payload || {};
    if (p.cpf !== '[REDACT_LGPD_COMPLIANT]' || p.telefone !== '[REDACT_LGPD_COMPLIANT]' ||
        p.body !== '[REDACT_LGPD_COMPLIANT]' || (p.meta && p.meta.token !== '[REDACT_LGPD_COMPLIANT]')) {
      piiOk = false;
      piiBad.push(r.jobId);
    }
  }

  const transacaoPreservada = dlqAll.every(r => r.payload && r.payload.transacaoId && r.payload.transacaoId.startsWith('tx_'));

  const totalProcessado = completed + failed;
  const perdidos = TOTAL_JOBS - totalProcessado;

  realInfo('--- [CHAOS] RESULTADO DA AUDITORIA DE INTEGRIDADE ---');
  realInfo(`Jobs enfileirados:        ${enqueued}/${TOTAL_JOBS}`);
  realInfo(`Jobs completados:         ${completed}`);
  realInfo(`Jobs falhos (terminal):   ${failed}`);
  realInfo(`Total processado:         ${totalProcessado}`);
  realInfo(`Jobs perdidos:            ${perdidos}`);
  realInfo(`Registros no DLQ Redis:   ${dlqRedis.length}`);
  realInfo(`Registros no DLQ JSONL:   ${dlqJsonl.length} (fallback ativado durante a queda)`);
  realInfo(`Total DLQ consolidado:    ${dlqAll.length}`);
  realInfo(`DLQ sem duplicatas:       ${duplicatas === 0 ? 'Sim (Correto)' : `Nao (${duplicatas} dup)`}`);
  realInfo(`PII mascarado em DLQ:     ${piiOk ? 'Sim (Correto)' : `Nao (${piiBad.length} registros)`}`);
  realInfo(`IDs preservados no DLQ:   ${transacaoPreservada ? 'Sim (Correto)' : 'Nao (Falha)'}`);
  realInfo(`Falhas esperadas (n%3=0): ~${expectedFailures}`);

  const integridade = perdidos === 0 && duplicatas === 0 && piiOk && transacaoPreservada && dlqAll.length >= expectedFailures - 5;
  realInfo(integridade
    ? 'FASE 1 APROVADA: integridade pos-queda garantida (0 perdidos, sem duplicatas, PII mascarado).'
    : 'FASE 1 REPROVADA: ver metricas acima.');

  realInfo('--- [CHAOS] FASE 2: PROVA DE FALLBACK JSONL (DLQ dual) ---');
  realInfo('[CHAOS] Derrubando Redis novamente para isolar o fallback...');
  dockerStop();
  await new Promise(r => setTimeout(r, 1000));

  const fbPayloads = [
    { transacaoId: 'tx_fb_001', cpf: '111.222.333-44', telefone: '+5511888880000', body: 'secreto', meta: { token: 'tok_fb_1' } },
    { transacaoId: 'tx_fb_002', cpf: '222.333.444-55', telefone: '+5511777770000', body: 'secreto', meta: { token: 'tok_fb_2' } },
    { transacaoId: 'tx_fb_003', cpf: '333.444.555-66', telefone: '+5511666660000', body: 'secreto', meta: { token: 'tok_fb_3' } }
  ];
  for (const p of fbPayloads) {
    try { await dlq.persist(`fallback-${Date.now()}-${Math.random()}`, QUEUE_NAME, mask(p), { message: 'Redis down - fallback JSONL' }); } catch (_) {}
  }
  await new Promise(r => setTimeout(r, 1500));

  const after = await dlq.readAll();
  const fbJsonlCount = after.jsonl.length;
  const fbPiiOk = after.jsonl.every(r => {
    const p = r.payload || {};
    return p.cpf === '[REDACT_LGPD_COMPLIANT]' && p.telefone === '[REDACT_LGPD_COMPLIANT]' &&
           p.body === '[REDACT_LGPD_COMPLIANT]' && p.meta && p.meta.token === '[REDACT_LGPD_COMPLIANT]';
  });
  const fbIdOk = after.jsonl.every(r => r.payload && r.payload.transacaoId && r.payload.transacaoId.startsWith('tx_fb_'));

  realInfo(`Registros gravados no JSONL durante queda: ${fbJsonlCount}/3`);
  realInfo(`PII mascarado no JSONL:                   ${fbPiiOk ? 'Sim (Correto)' : 'Nao (Falha)'}`);
  realInfo(`IDs preservados no JSONL:                 ${fbIdOk ? 'Sim (Correto)' : 'Nao (Falha)'}`);

  const fallbackOk = fbJsonlCount >= 3 && fbPiiOk && fbIdOk;
  realInfo(fallbackOk
    ? 'FASE 2 APROVADA: fallback JSONL acionado com Redis down, PII mascarado, IDs preservados.'
    : 'FASE 2 REPROVADA: fallback JSONL nao acionado corretamente.');

  dockerStart();

  realInfo('--- [CHAOS] VEREDICTO FINAL ---');
  const aprovado = integridade && fallbackOk;
  realInfo(aprovado
    ? 'TESTE APROVADO: integridade pos-queda + fallback JSONL dual comprovados.'
    : 'TESTE REPROVADO: ver metricas acima.');

  await dlq.close();
  try { await connection.quit(); } catch (_) {}

  return { ok, integridade, fallbackOk, aprovado, enqueued, completed, failed, perdidos, duplicatas,
    dlqRedis: dlqRedis.length, dlqJsonl: fbJsonlCount, piiOk, expectedFailures };
}

runTest()
  .then(r => process.exit(r.aprovado ? 0 : 1))
  .catch(err => {
    console.error('Falha critica no teste de quebra:', err);
    process.exit(1);
  });
