# Capítulo 3: Infraestrutura Docker-First, Staging & CI/CD

Com as atualizações tecnológicas de 2026 (destacando-se a remoção de suporte a instalações npm globais na versão n8n v3.0), o uso de contêineres Docker tornou-se o padrão obrigatório para desenvolvimento e deploy de integrações no ecossistema CÉREBRO.

---

## 1. Scaffold de Microsserviços local — `#DOCKER-COMPOSE-SCAFFOLD`

Este arquivo `docker-compose.yml` serve como modelo base para rodar o ecossistema local do Gestor de Automação de forma isolada e portável:

```yaml
version: '3.8'

services:
  # Banco de dados local para desenvolvimento (PostgreSQL com pgvector)
  postgres_local:
    image: pgvector/pgvector:pg16
    container_name: postgres_local
    environment:
      POSTGRES_USER: cerebro_admin
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: gestor_automacao
    ports:
      - "5433:5432" # Redireciona a porta padrão para não conflitar com banco global
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - rede_cerebro

  # Redis para controle de filas (BullMQ) e cache de idempotência
  redis_contingencia:
    image: redis:7-alpine
    container_name: redis_contingencia
    command: redis-server --appendonly yes
    ports:
      - "6380:6379"
    volumes:
      - redisdata:/data
    networks:
      - rede_cerebro

  # n8n rodando no padrão Docker exigido em 2026
  n8n_integrator:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n_integrator
    environment:
      - N8N_PORT=5678
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=${N8N_PASS}
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres_local
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=gestor_automacao
      - DB_POSTGRESDB_USER=cerebro_admin
      - DB_POSTGRESDB_PASSWORD=${DB_PASSWORD}
    ports:
      - "5678:5678"
    depends_on:
      - postgres_local
    networks:
      - rede_cerebro

volumes:
  pgdata:
  redisdata:

networks:
  rede_cerebro:
    driver: bridge
```

---

## 2. Isolamento de Ambientes (Staging-First)

Toda alteração de fluxo ou código de automação deve obrigatoriamente seguir a linha de pipeline:

```text
    ┌──────────────┐          ┌──────────────┐          ┌──────────────┐
    │  Local Dev   │ ───────► │   Staging    │ ───────► │  Production  │
    │  (Sandbox)   │          │  (Sandbox)   │          │    (Live)    │
    └──────────────┘          └──────────────┘          └──────────────┘
```

* **Sandbox-First:** É proibido conectar chaves de API reais de produção no ambiente Local Dev. Deve-se usar chaves de teste (ex: Kiwify Sandbox, Stripe Test Mode, número de WhatsApp de homologação).
* **Workflow Export (n8n):** O backup e controle de versão de fluxos n8n devem ser exportados via CLI e versionados no repositório Git:
  ```bash
  n8n export:workflow --all --output=./workflows/
  ```

---

## 3. DevOps e Pipeline de CI/CD

O deploy em servidores de produção utiliza ações Git automáticas que garantem:
1. Execução de testes de integração na Lâmina de Homologação.
2. Build e atualização dos contêineres via Docker sem downtime (rolling update).
3. Notificação automática de versão atualizada enviada ao MAIN BRAIN.
