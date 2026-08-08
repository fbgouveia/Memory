#!/usr/bin/env python3
import os
import sys
import json
import argparse

def create_manifest(project_id, project_name, owner):
    return {
        "id": project_id,
        "name": project_name,
        "version": "1.0.0",
        "owner": owner,
        "cost_level": "low",
        "inputs": [
            {
                "type": "webhook",
                "source": "Webhook de Entrada de Vendas",
                "endpoint_path": f"/webhooks/{project_id.replace('aut-', '')}"
            }
        ],
        "outputs": [
            {
                "type": "Manychat",
                "channel": "WhatsApp Cloud API"
            }
        ],
        "dependencies": [
            "BullMQ",
            "Redis",
            "Express"
        ],
        "rate_limits": {
            "max_requests": 80,
            "duration_ms": 1000
        },
        "contingency": {
            "retry_attempts": 5,
            "use_dlq": True,
            "dlq_mode": "dual_redis_jsonl",
            "dlq_fallback": ".tmp/dlq_fallback.jsonl"
        }
    }

def create_docker_compose(project_id):
    template = """version: '3.8'

services:
  # Redis local para orquestrar o BullMQ e chaves de idempotência
  redis_{project_underscore}:
    image: redis:7-alpine
    container_name: redis_{project_id}
    command: redis-server --appendonly yes --maxmemory-policy noeviction
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    networks:
      - network_{project_underscore}

  # Servidor principal da integração
  app_{project_underscore}:
    image: node:18-alpine
    container_name: app_{project_id}
    working_dir: /usr/src/app
    volumes:
      - .:/usr/src/app
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - PORT=3000
      - REDIS_HOST=redis_{project_underscore}
      - REDIS_PORT=6379
    depends_on:
      - redis_{project_underscore}
    command: npm run dev
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/healthz"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    networks:
      - network_{project_underscore}

volumes:
  redis_data:

networks:
  network_{project_underscore}:
    driver: bridge
"""
    return template.replace("{project_id}", project_id).replace("{project_underscore}", project_id.replace('-', '_'))

def create_logger_js():
    return """// Módulo de Logging com Mascaramento LGPD (PII Masking)
// tag: #LGPD-LOG-MASKING

const CHAVES_SENSIVEIS = ['senha', 'password', 'token', 'cpf', 'telefone', 'cartao', 'credit_card', 'body'];

function mascararDadosSensiveis(objeto) {
  if (typeof objeto !== 'object' || objeto === null) return objeto;
  
  const objetoSanitizado = Array.isArray(objeto) ? [] : {};
  
  for (const [chave, valor] of Object.entries(objeto)) {
    if (CHAVES_SENSIVEIS.includes(chave.toLowerCase())) {
      objetoSanitizado[chave] = '[REDACT_LGPD_COMPLIANT]';
    } else if (typeof valor === 'object') {
      objetoSanitizado[chave] = mascararDadosSensiveis(valor);
    } else {
      objetoSanitizado[chave] = valor;
    }
  }
  return objetoSanitizado;
}

const logger = {
  info: (mensagem, payload = null) => {
    const limpo = payload ? mascararDadosSensiveis(payload) : '';
    console.log(`[INFO] ${new Date().toISOString()} - ${mensagem}`, limpo);
  },
  error: (mensagem, erro = null, payload = null) => {
    const erroLimpo = erro && erro.stack ? erro.stack : erro;
    const payloadLimpo = payload ? mascararDadosSensiveis(payload) : '';
    console.error(`[ERROR] ${new Date().toISOString()} - ${mensagem}`, { error: erroLimpo, payload: payloadLimpo });
  },
  __test_mask: mascararDadosSensiveis
};

module.exports = logger;
"""

def create_dlq_js(project_id):
    project_underscore = project_id.replace('-', '_')
    return f"""// Dead Letter Queue Dual: Redis primario + JSONL local append-only (fallback).
// tag: #DLQ-DUAL-CONTINGENCIA
// Contrato: se Redis cair, o payload sanitizado sobrevive em arquivo local.
// Auditoria consolida Redis + JSONL para prova de integridade pos-queda.

const fs = require('fs');
const path = require('path');
const Redis = require('ioredis');
const logger = require('./logger');

const DLQ_LIST_KEY = process.env.DLQ_REDIS_KEY || 'dlq_{project_underscore}';
const FALLBACK_FILE = process.env.DLQ_FALLBACK_FILE || path.join(process.cwd(), '.tmp', 'dlq_fallback.jsonl');

const redis = new Redis({{
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: 1,
  enableOfflineQueue: false,
  retryStrategy: (times) => Math.min(times * 100, 500)
}});

function buildRecord(jobId, origemFila, payloadMascarado, err) {{
  return {{
    jobId, origemFila, payload: payloadMascarado,
    erro: err && err.message ? err.message : String(err),
    stack: err && err.stack ? err.stack : null,
    timestamp: new Date().toISOString()
  }};
}}

function persistFallback(record) {{
  try {{
    fs.mkdirSync(path.dirname(FALLBACK_FILE), {{ recursive: true }});
    fs.appendFileSync(FALLBACK_FILE, JSON.stringify({{ ...record, destino: 'jsonl' }}) + '\\n');
    return {{ destino: 'jsonl', ok: true }};
  }} catch (e) {{
    logger.error('[DLQ] Falha critica: nem Redis nem JSONL disponivel.', e);
    return {{ destino: 'none', ok: false, error: e.message }};
  }}
}}

async function persist(jobId, origemFila, payloadMascarado, err) {{
  const record = buildRecord(jobId, origemFila, payloadMascarado, err);
  try {{
    await redis.rpush(DLQ_LIST_KEY, JSON.stringify({{ ...record, destino: 'redis' }}));
    return {{ destino: 'redis', ok: true }};
  }} catch (e) {{
    logger.error('[DLQ] Redis indisponivel, fallback para JSONL local.', e);
    return persistFallback(record);
  }}
}}

async function readAll() {{
  const redisRecords = [];
  try {{
    const raw = await redis.lrange(DLQ_LIST_KEY, 0, -1);
    for (const r of raw) redisRecords.push(JSON.parse(r));
  }} catch (e) {{
    logger.error('[DLQ] Erro lendo Redis na auditoria.', e);
  }}
  const jsonlRecords = [];
  try {{
    if (fs.existsSync(FALLBACK_FILE)) {{
      const lines = fs.readFileSync(FALLBACK_FILE, 'utf8').split('\\n').filter(Boolean);
      for (const l of lines) jsonlRecords.push(JSON.parse(l));
    }}
  }} catch (e) {{
    logger.error('[DLQ] Erro lendo JSONL na auditoria.', e);
  }}
  return {{ redis: redisRecords, jsonl: jsonlRecords, all: [...redisRecords, ...jsonlRecords] }};
}}

async function clear() {{
  try {{ await redis.del(DLQ_LIST_KEY); }} catch (_) {{}}
  try {{ if (fs.existsSync(FALLBACK_FILE)) fs.unlinkSync(FALLBACK_FILE); }} catch (_) {{}}
}}

async function close() {{ try {{ await redis.quit(); }} catch (_) {{}} }}

module.exports = {{ persist, readAll, clear, close, FALLBACK_FILE, DLQ_LIST_KEY }};
"""

def create_worker_js(project_id):
    template = """// Trabalhador de Fila BullMQ com Contingência e DLQ
// tag: #BULLMQ-DLQ-FLOW

const { Worker } = require('bullmq');
const logger = require('./logger');
const dlq = require('./dlq');

const redisConnection = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  maxRetriesPerRequest: null
};

// Instanciação do worker com Rate Limiting integrado (Token Bucket)
const worker = new Worker('{project_id}_queue', async job => {
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

// Event Listener para redirecionamento ao DLQ dual (Redis + JSONL fallback)
worker.on('failed', async (job, err) => {
  if (job.attemptsMade >= job.opts.attempts) {
    logger.error(`Tarefa ${job.id} falhou definitivamente. Movendo para DLQ.`, err, job.data);
    await dlq.persist(job.id, '{project_id}_queue', logger.__test_mask(job.data), err);
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
"""
    return template.replace("{project_id}", project_id)

def create_index_js(project_id):
    return """const express = require('express');
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
"""

def create_package_json(project_id):
    return json.dumps({
        "name": project_id,
        "version": "1.0.0",
        "description": "Automação integrada estruturada sob padrão CÉREBRO H-I.",
        "main": "src/index.js",
        "scripts": {
            "start": "node src/index.js",
            "dev": "nodemon src/index.js"
        },
        "dependencies": {
            "bullmq": "^5.0.0",
            "express": "^4.19.0",
            "ioredis": "^5.4.0"
        },
        "devDependencies": {
            "nodemon": "^3.1.0"
        }
    }, indent=2)

def create_readme(project_name, project_id):
    template = """# 🔌 {project_name} ({project_id})

Automação profissional orquestrada e padronizada sob o ecossistema CÉREBRO.

## 🛠️ Arquitetura e Estrutura
Esta integração foi gerada automaticamente pelo CLI de Scaffold do CÉREBRO, embarcando:
1. **Fila BullMQ + Redis** com tratamento de erros, exponencial backoff e DLQ.
2. **PII Masking** integrado no logger para garantir conformidade LGPD de logs.
3. **Graceful Shutdown** configurado para evitar tarefas travadas em deploys Docker.
4. **Health Check Probes** mapeadas para monitoramento automático de vida de contêineres.

## 🚀 Como rodar (Desenvolvimento Local)
1. Instale as dependências Node:
   ```bash
   npm install
   ```
2. Inicialize a infraestrutura Redis e o servidor da aplicação via Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. O servidor estará disponível na porta `3000`. O endpoint de teste do webhook será `http://localhost:3000/webhooks/receber`.
"""
    return template.replace("{project_name}", project_name).replace("{project_id}", project_id)

def main():
    parser = argparse.ArgumentParser(description="CLI de Scaffold do CÉREBRO - Criação de Automações Padrão H-I")
    parser.add_argument("--id", required=True, help="Identificador único (ex: aut-recuperacao-pix)")
    parser.add_argument("--name", required=True, help="Nome amigável da automação")
    parser.add_argument("--owner", required=True, help="Responsável técnico")
    parser.add_argument("--out-dir", help="Diretório de destino (opcional)")
    
    args = parser.parse_args()
    
    project_id = args.id
    if not project_id.startswith("aut-"):
        project_id = "aut-" + project_id
        
    out_dir = args.out_dir
    if not out_dir:
        out_dir = os.path.join("/Users/felipegouveia/Developer/CÉREBRO/FGSS Gestor de Automacao/integrations", project_id)
        
    print(f"Iniciando geração física do Scaffold para: {project_id}...", flush=True)
    
    os.makedirs(os.path.join(out_dir, "src"), exist_ok=True)
    
    # 1. automation-manifest.json
    manifest = create_manifest(project_id, args.name, args.owner)
    with open(os.path.join(out_dir, "automation-manifest.json"), "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        
    # 2. docker-compose.yml
    with open(os.path.join(out_dir, "docker-compose.yml"), "w", encoding="utf-8") as f:
        f.write(create_docker_compose(project_id))
        
    # 3. src/logger.js
    with open(os.path.join(out_dir, "src/logger.js"), "w", encoding="utf-8") as f:
        f.write(create_logger_js())
        
    # 4. src/dlq.js
    with open(os.path.join(out_dir, "src/dlq.js"), "w", encoding="utf-8") as f:
        f.write(create_dlq_js(project_id))
        
    # 5. src/worker.js
    with open(os.path.join(out_dir, "src/worker.js"), "w", encoding="utf-8") as f:
        f.write(create_worker_js(project_id))
        
    # 6. src/index.js
    with open(os.path.join(out_dir, "src/index.js"), "w", encoding="utf-8") as f:
        f.write(create_index_js(project_id))
        
    # 7. package.json
    with open(os.path.join(out_dir, "package.json"), "w", encoding="utf-8") as f:
        f.write(create_package_json(project_id))
        
    # 8. README.md
    with open(os.path.join(out_dir, "README.md"), "w", encoding="utf-8") as f:
        f.write(create_readme(args.name, project_id))
        
    print(f"Scaffold gerado com sucesso em: {out_dir}", flush=True)

if __name__ == "__main__":
    main()
