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

---

## 👥 Público-Alvo e Personas (Bíblia High Intelligence / Enterprise)

Esta segunda Bíblia é focada em perfis técnicos avançados e arquitetos de software:

### A. Público-Alvo Geral
* **Engenheiros de Automação e Backend:** Desenvolvedores focados em escrever códigos nativos resilientes, microsserviços e estruturar bancos de dados relacionais.
* **CTOs e Líderes Técnicos:** Responsáveis pela tomada de decisão de arquitetura, otimização de custos de nuvem e segurança de dados.
* **Engenheiros de IA & Desenvolvedores RAG:** Especialistas focados em implementar agentes inteligentes locais e busca vetorial de alta performance.

### B. Personas Canônicas
1. **Henrique (34 anos) — O Desenvolvedor Backend / CTO da Agência**
   * **Perfil:** Sólida experiência em Node.js, Docker e bancos de dados relacionais (Postgres).
   * **Dor Principal:** Sobrecarga e perda de dados (webhooks de vendas) em picos de tráfego, dependência excessiva de ferramentas no-code caras e falta de segurança nas integrações.
   * **Uso da Bíblia:** Utiliza o [Capítulo 2: Lâmina de Contingência](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/02_contingencia_filas.md) para implementar BullMQ e idempotência, e o [Capítulo 3: Docker & DevOps](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/03_docker_devops.md) para subir microsserviços conteinerizados locais e em produção.
2. **Beatriz (29 anos) — A Engenheira de IA e RAG**
   * **Perfil:** Especialista em processamento de linguagem natural e IA generativa.
   * **Dor Principal:** Custos elevados com chamadas de APIs proprietárias (OpenAI/Anthropic), latência alta de rede e alucinações de modelos de linguagem em base de conhecimento corporativa.
   * **Uso da Bíblia:** Utiliza o [Capítulo 4: IA Local & RAG](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/04_inteligencia_artificial_local.md) para configurar buscas semânticas eficientes com pgvector (HNSW) e fatiamento Matryoshka para otimização de memória do Postgres.
3. **Roberto (45 anos) — O Gerente de TI Corporativo (Cliente Enterprise)**
   * **Perfil:** Líder de TI em uma fintech ou empresa de grande porte.
   * **Dor Principal:** Rigidez de compliance de dados (LGPD/GDPR) que proíbe trafegar dados de clientes por plataformas SaaS estrangeiras sem controle de privacidade.
   * **Uso da Bíblia:** Utiliza o [Capítulo 1: Arquitetura de Banco de Dados](file:///Users/felipegouveia/Developer/C%C3%89REBRO/FGSS%20Gestor%20de%20Automacao/docs/bible_hi/01_arquitetura_banco_dados.md) para configurar Row-Level Security (RLS) estrito e connection pooling seguro para isolar os dados de cada cliente.

