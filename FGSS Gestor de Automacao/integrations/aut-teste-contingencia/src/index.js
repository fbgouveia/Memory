const express = require('express');
const logger = require('./logger');
// Inicializa o worker em segundo plano
require('./worker');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de Health Check exigida para liveness probe do Docker Compose
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Endpoint receptor de Webhook padrão
app.post('/webhooks/receber', (req, res) => {
  logger.info('Recebido evento via webhook externo', req.body);
  
  // TODO: Validar idempotência e enviar para a fila BullMQ
  
  res.status(202).json({ message: 'Evento aceito e enviado para fila de processamento.' });
});

app.listen(PORT, () => {
  logger.info(`Servidor da integração rodando na porta ${PORT}`);
});
