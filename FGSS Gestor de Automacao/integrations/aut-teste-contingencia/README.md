# 🔌 Integração de Teste de Fila (aut-teste-contingencia)

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
