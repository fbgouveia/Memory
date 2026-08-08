// Trabalhador de Fila BullMQ com Contingência e DLQ
// tag: #BULLMQ-DLQ-FLOW

const { Worker } = require('bullmq');
const logger = require('./logger');

const redisConnection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379')
};

// Instanciação do worker com Rate Limiting integrado (Token Bucket)
const worker = new Worker('aut-teste-contingencia_queue', async job => {
  logger.info(`Iniciando processamento da tarefa ${job.id}`, job.data);
  
  // Lógica de integração aqui
  // Exemplo: await enviarWhatsAppManychat(job.data);
  
}, {
  connection: redisConnection,
  limiter: {
    max: 80,         // Limite máximo de requisições
    duration: 1000   // Por 1 segundo
  }
});

// Event Listener para redirecionamento ao DLQ
worker.on('failed', async (job, err) => {
  if (job.attemptsMade >= job.opts.attempts) {
    logger.error(`Tarefa ${job.id} falhou definitivamente. Movendo para DLQ.`, err, job.data);
    
    // TODO: Gravar registro na tabela de Dead Letter Queue (Postgres/Supabase)
    // await db.insertDLQ(job.id, job.data, err.message);
  } else {
    logger.info(`Tarefa ${job.id} falhou. Tentativa ${job.attemptsMade}/${job.opts.attempts}. Erro: ${err.message}`);
  }
});

// Graceful Shutdown (Sinalização de desligamento limpo)
async function shutdown() {
  logger.info('Sinal de encerramento recebido. Fechando worker graciosamente...');
  await worker.close();
  logger.info('Worker encerrado com sucesso.');
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

logger.info('Worker do BullMQ inicializado com sucesso.');
module.exports = worker;
