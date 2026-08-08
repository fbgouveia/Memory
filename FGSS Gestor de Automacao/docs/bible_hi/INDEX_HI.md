# Bíblia High Intelligence (H-I Bible) — Índice e Mapeador de Rotas

Bem-vindo à Bíblia de Alta Inteligência e Engenharia do ecossistema [CÉREBRO](file:///Users/felipegouveia/Developer/C%C3%89REBRO/).

Este documento atua como o **Mapeador de Rotas H-I** para guiar decisões de infraestrutura robusta, código nativo e resiliência transacional, evitando processamento desnecessário de contexto.

---

## 🗺️ Capítulos Técnicos e Rotas de Pesquisa

Clique em qualquer capítulo abaixo para abrir o manual de engenharia avançada correspondente:

### 🗄️ [Capítulo 1: Arquitetura de Banco de Dados & Supabase](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/01_arquitetura_banco_dados.md)
* **Pooling de Conexões:** Configuração do Supavisor/PgBouncer, Portas 6543 (Transaction Mode) vs. Portas 5432 (Session Mode).
* **Segurança de Dados:** Criação de políticas de Row-Level Security (RLS) no PostgreSQL.
* **Tamanho do Pool:** Fórmulas de cálculo de concorrência e monitoramento de conexões ociosas.

### 🔄 [Capítulo 2: Lâmina de Contingência, Filas & BullMQ](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/02_contingencia_filas.md)
* **Controle de Retentativas:** Estratégia de Exponential Backoff com Jitter em BullMQ.
* **Segurança e Idempotência:** Implementação de Chaves de Idempotência em Redis/Postgres para evitar cobranças/ações duplicadas.
* **Fila de Erros (Dead Letter Queue):** Interceptação de falhas em trabalhadores e direcionamento para DLQ para inspeção técnica e reprocessamento.

### 🐳 [Capítulo 3: Infraestrutura Docker-First, Staging & CI/CD](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/03_docker_devops.md)
* **Ambiente Isolado:** Scaffolding de contêineres Docker Compose (Postgres, Redis, n8n, Backends locais).
* **Migração 2026 (n8n v3.0):** Eliminação de instalações npm/npx globais em favor de contêineres dedicados.
* **DevOps:** Fluxo Staging $\rightarrow$ Production e testes de integração automatizados.

### 🧠 [Capítulo 4: Inteligência Artificial Local & RAG Avançado](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/04_inteligencia_artificial_local.md)
* **Busca Vetorial:** pgvector com indexação HNSW, Matryoshka embeddings e halfvec quantization.
* **Orquestração LLM Local:** Conexão com Ollama, escolha de modelos (Llama 3.3 70B, nomic-embed-text) e limites de contexto.
* **Agentes de RAG Híbrido:** Roteamento de intenções, grading de relevância e ciclos de re-escrita de queries.

---

## 🎯 Tags de Pesquisa Rápida (Grep Search H-I Targets)

* `#SUPABASE-CONNECTION-PORTS` ➔ Diferenciação e portas de Transaction vs Session Mode.
* `#BULLMQ-DLQ-FLOW` ➔ Lógica e manipulador de eventos de erro para direcionamento ao DLQ.
* `#IDEMPOTENCY-KEY-CHECK` ➔ Código/lógica para checagem e bloqueio de concorrência via Redis.
* `#DOCKER-COMPOSE-SCAFFOLD` ➔ Modelo de arquivo compose para rodar a stack local de microsserviços.
* `#PGVECTOR-HNSW-INDEX` ➔ Comandos SQL para ativar a extensão e indexar vetores com HNSW.
