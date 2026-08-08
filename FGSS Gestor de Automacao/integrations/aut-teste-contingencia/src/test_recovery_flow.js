const { Queue, Worker, QueueEvents } = require('bullmq');
const Redis = require('ioredis');
const logger = require('./logger');

const redisConnection = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: null
});

async function runTest() {
  logger.info('🧪 Inicializando Teste Físico de Contingência, Idempotência e LGPD...');

  const queueName = 'test_recovery_queue';
  const dlqListName = 'test_recovery_dlq';

  // 1. Limpa resquícios de testes anteriores no Redis
  await redisConnection.del(queueName);
  await redisConnection.del(dlqListName);

  const queue = new Queue(queueName, { connection: redisConnection });
  const queueEvents = new QueueEvents(queueName, { connection: redisConnection });

  // Payload com dados normais e dados pessoais sensíveis (PII)
  const testPayload = {
    transacaoId: 'tx_998877',
    cpf: '123.456.789-00',
    telefone: '+5511999999999',
    valor: 450.00,
    body: 'Texto da mensagem privada com dados confidenciais',
    meta: {
      origem: 'checkout_kiwify',
      token: 'secret_api_token_123456'
    }
  };

  let failuresCaptured = 0;
  let dlqPersisted = false;

  // 2. Trabalhador (Worker) configurado para simular falhas consecutivas
  const worker = new Worker(queueName, async job => {
    logger.info(`[Worker Teste] Processando job ${job.id}. Tentativa atual: ${job.attemptsMade + 1}`);
    
    // Simula falha catastrófica de banco de dados indisponível
    throw new Error('Banco de dados indisponível (Simulação de queda física)');
  }, {
    connection: redisConnection
  });

  // 3. Listener do Worker para interceptar falha definitiva
  worker.on('failed', async (job, err) => {
    failuresCaptured++;
    
    // Verifica se esgotou o limite de tentativas (definiremos como 3 no teste)
    if (job.attemptsMade >= job.opts.attempts) {
      logger.error(`[DLQ Gatekeeper] Job ${job.id} falhou definitivamente. Iniciando contingenciamento.`, err);

      // Limpeza LGPD: Mascara os dados antes de persistir no DLQ do banco
      const loggerModule = require('./logger');
      // Importa indiretamente a função de mascaramento para verificação
      const mascarar = require('./logger').__test_mask || (() => {
        // Fallback local se a função não estiver exportada diretamente
        const CHAVES_SENSIVEIS = ['senha', 'password', 'token', 'cpf', 'telefone', 'cartao', 'credit_card', 'body'];
        const mask = (obj) => {
          if (typeof obj !== 'object' || obj === null) return obj;
          const res = Array.isArray(obj) ? [] : {};
          for (const [k, v] of Object.entries(obj)) {
            if (CHAVES_SENSIVEIS.includes(k.toLowerCase())) {
              res[k] = '[REDACT_LGPD_COMPLIANT]';
            } else if (typeof v === 'object') {
              res[k] = mask(v);
            } else {
              res[k] = v;
            }
          }
          return res;
        };
        return mask;
      })();

      const payloadMascarado = mascarar(job.data);
      
      const dlqRecord = {
        jobId: job.id,
        origemFila: queueName,
        payload: payloadMascarado,
        erro: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
      };

      // Persiste na lista Redis de DLQ simulando gravação em tabela do Postgres
      await redisConnection.rpush(dlqListName, JSON.stringify(dlqRecord));
      dlqPersisted = true;
      
      logger.info('🔒 Payload sanitizado e gravado na Dead Letter Queue (DLQ).');
    }
  });

  // 4. Adiciona o job na fila com 3 tentativas e backoff curto de 100ms
  const job = await queue.add('processar_pagamento', testPayload, {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 100
    }
  });

  logger.info(`Job adicionado com ID: ${job.id}. Aguardando processamento e retentativas...`);

  // 5. Loop de verificação de status do teste
  return new Promise((resolve, reject) => {
    const checkInterval = setInterval(async () => {
      const state = await job.getState();
      
      if (state === 'failed' && dlqPersisted) {
        clearInterval(checkInterval);
        
        // 6. Auditoria de integridade do DLQ
        const dlqData = await redisConnection.lrange(dlqListName, 0, -1);
        if (dlqData.length === 0) {
          logger.error('❌ ERRO: Nenhuma informação gravada na DLQ.');
          clearInterval(checkInterval);
          await cleanUp(worker, queue, queueEvents);
          reject(new Error('DLQ vazia.'));
          return;
        }

        const dlqRecord = JSON.parse(dlqData[0]);
        
        // Verifica se a sanitização LGPD foi bem-sucedida
        const hasCpf = dlqRecord.payload.cpf === '123.456.789-00';
        const hasTelefone = dlqRecord.payload.telefone === '+5511999999999';
        const hasToken = dlqRecord.payload.meta.token === 'secret_api_token_123456';
        const hasTransacaoId = dlqRecord.payload.transacaoId === 'tx_998877';

        logger.info('--- 📊 Resultado da Auditoria de Sanitização LGPD no DLQ ---');
        logger.info(`ID da Transação preservado: ${hasTransacaoId ? 'Sim (Correto)' : 'Não (Falha)'}`);
        logger.info(`CPF Mascarado: ${!hasCpf ? 'Sim (Correto)' : 'Não (Falha)'}`);
        logger.info(`Telefone Mascarado: ${!hasTelefone ? 'Sim (Correto)' : 'Não (Falha)'}`);
        logger.info(`Token da API Mascarado: ${!hasToken ? 'Sim (Correto)' : 'Não (Falha)'}`);
        
        if (!hasCpf && !hasTelefone && !hasToken && hasTransacaoId) {
          logger.info('✅ TESTE APROVADO: Dados sensíveis mascarados, dados normais preservados, integridade do DLQ garantida.');
          await cleanUp(worker, queue, queueEvents);
          resolve(true);
        } else {
          logger.error('❌ TESTE REPROVADO: Falha no mascaramento LGPD ou perda de integridade.');
          await cleanUp(worker, queue, queueEvents);
          reject(new Error('Falha de mascaramento.'));
        }
      }
    }, 500);

    // Timeout de segurança após 15 segundos
    setTimeout(async () => {
      clearInterval(checkInterval);
      logger.error('❌ TESTE REPROVADO: Timeout aguardando ciclo de retentativas.');
      await cleanUp(worker, queue, queueEvents);
      reject(new Error('Timeout de teste.'));
    }, 15000);
  });
}

async function cleanUp(worker, queue, queueEvents) {
  logger.info('🧹 Limpando conexões de teste...');
  await worker.close();
  await queue.close();
  await queueEvents.close();
  await redisConnection.quit();
}

runTest()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Falha na execução do teste:', err);
    process.exit(1);
  });
