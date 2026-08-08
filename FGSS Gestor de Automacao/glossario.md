# 📖 Glossário Técnico — FGSS Gestor de Automacao

> Dicionário de leitura fácil e concisa sobre **todos** os termos técnicos usados
> neste projeto: arquivos, conceitos de código, técnicas, infra, siglas,
> ecossistema CÉREBRO e termos gerais de automação.
>
> **Como usar:** procure o termo na tabela alfabética (§1) ou navegue por
> categoria no índice (§2). Cada entrada traz definição curta + onde aparece.

---

## §1 — Tabela Alfabética

| Termo | Categoria | Definição curta | Onde aparece |
|---|---|---|---|
| **AOF (Append Only File)** | Sigla/Infra | Log persistente do Redis que grava cada escrita em disco; sobrevive a reinícios. | `docker-compose.yml` (`--appendonly yes`), `findings.md` |
| **Append-only** | Técnica | Arquivo onde só se escreve no final; nunca se altera o que já foi gravado. Garante histórico imutável. | `dlq.js` (JSONL fallback), `progress.md` |
| **API** | Sigla | Interface de programação — contrato de como um software fala com outro. | `AGENTS.md`, `automation-manifest.json` (WhatsApp Cloud API) |
| **AST (Árvore de Sintaxe Abstrata)** | Sigla/Técnica | Representação em árvore do código-fonte após análise sintática; permite "entender" a estrutura sem ler linha a linha. | `FGSS_BRAIN_MASTER_PROTOCOL.md` (Graphify) |
| **ATUALIZACOES.md** | Arquivo | Registro cronológico do que foi concluído no ecossistema CÉREBRO. | `/CÉREBRO/ATUALIZACOES.md` |
| **Attempts / attemptsMade** | Código | Número de tentativas feitas vs. limite configurado de um job. | `worker.js`, `test_recovery_flow.js` |
| **Auditoria de integridade** | Técnica | Conferência pós-teste de que nada se perdeu, duplicou ou vazou. | `test_chaos_break.js`, `progress.md` |
| **automation-manifest.json** | Arquivo | Manifesto de metadados da automação (inputs, outputs, rate limits, contingência). | `integrations/aut-teste-contingencia/` |
| **automation-manifest-schema.json** | Arquivo | Esquema JSON que valida se todo manifesto está bem formado. | `ATUALIZACOES.md` |
| **Backoff (exponential)** | Código | Aumento progressivo do tempo entre retentativas (ex: 50ms, 100ms, 200ms...) para não sobrecarregar. | `test_recovery_flow.js`, `worker.js` |
| **Bíblia de Automação** | CÉREBRO | Repositório de playbooks e catálogos de oportunidades do projeto. | `docs/bible/`, `ATUALIZACOES.md` |
| **Bíblia G-T-M** | CÉREBRO | Catálogo de 100 oportunidades Go-To-Market (negócio). | `ATUALIZACOES.md` |
| **Bíblia H-I (High Intelligence)** | CÉREBRO | Catálogo de 100 oportunidades de Alta Inteligência técnica. | `ATUALIZACOES.md`, `package.json` (padrão H-I) |
| **BullMQ** | Código | Biblioteca Node.js para filas de processamento assíncrono baseada em Redis. | `worker.js`, `package.json` |
| **Cache** | Automação | Camada de guarda de resultados para não rebuscar o que já se tem. | `ATUALIZACOES.md` (cache de 5 min) |
| **Canal (channel)** | Automação | Meio por onde a automação entrega o resultado (ex: WhatsApp, email). | `automation-manifest.json` |
| **Chairman de Automação** | CÉREBRO | Persona do LLM que modela, audita e refatora automações neste repositório. | `AGENTS.md`, `README.md` |
| **Chaos Engineering** | Técnica | Testar derrubando de propósito partes do sistema para provar que ele sobrevive. | `test_chaos_break.js`, `progress.md` |
| **ChromaDB** | Infra | Banco de dados vetorial usado para memória semântica. | `FGSS_BRAIN_MASTER_PROTOCOL.md` (Claude Mem) |
| **CÉREBRO** | CÉREBRO | Ecossistema maior de inteligência e automação onde este projeto vive. | `AGENTS.md`, `README.md` |
| **Circuit breaker (disjuntor)** | Automação | Padrão que interrompe o fluxo quando um serviço falha demais, para evitar dano em cascata. Implícito no fallback. | `dlq.js` (fallback age como disjuntor) |
| **CLI (Command Line Interface)** | Sigla | Programa executado pelo terminal. | `scaffold_project.py`, `AGENTS.md` |
| **Cloud Functions** | Infra | Funções serverless (sem servidor dedicado) que rodam sob demanda. | `AGENTS.md` |
| **Code Graph RAG** | CÉREBRO | 5º lobo do FGSS Brain — "GPS" da arquitetura via grafo de código (MCP + Memgraph). | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Coletor** | CÉREBRO | Componente do MAIN BRAIN que captura eventos/telemetria de um projeto. | `ATUALIZACOES.md` (collector-loja-a) |
| **ConsString** | Infra | Estrutura interna do V8 para strings concatenadas; acumulada em volume, causa OOM. | `findings.md` |
| **Contêiner (container)** | Infra | Unidade isolada de software que empacota uma aplicação e suas deps. | `docker-compose.yml`, `findings.md` |
| **Custo unitário / cost_level** | Automação | Classificação do custo de rodar a automação (low/medium/high). | `automation-manifest.json`, `README.md` |
| **Demanda** | CÉREBRO | Solicitação de telemetria verificada e custada no MAIN BRAIN. | `ATUALIZACOES.md` |
| **DESCOBERTAS.md** | Arquivo | Registro de fatos novos com consequência no ecossistema CÉREBRO. | `/CÉREBRO/AGENTS.md` |
| **DLQ (Dead Letter Queue)** | Código | Fila onde vão os jobs que falharam definitivamente, após esgotar retentativas. | `worker.js`, `dlq.js`, `README.md` |
| **DLQ dual (Redis + JSONL)** | Técnica | DLQ que grava no Redis primeiro e, se ele cair, num arquivo JSONL local — sobrevive à queda física. | `dlq.js`, `progress.md`, `ATUALIZACOES.md` |
| **docker exec** | Infra | Comando que roda algo dentro de um contêiner em execução. | `test_chaos_break.js` |
| **docker start / docker stop** | Infra | Comandos para subir/derrubar contêineres. | `findings.md`, `test_chaos_break.js` |
| **Docker Compose** | Infra | Ferramenta que orquestra múltiplos contêineres via um YAML. | `docker-compose.yml`, `README.md` |
| **dlq.js** | Arquivo | Módulo da DLQ dual (Redis primário + JSONL fallback). | `integrations/aut-teste-contingencia/src/dlq.js` |
| **dlq_fallback.jsonl** | Arquivo | Arquivo local append-only onde a DLQ grava quando o Redis cai. | `.tmp/dlq_fallback.jsonl`, `dlq.js` |
| **Endpoint** | Automação | URL que recebe ou entrega dados (ex: `/webhooks/receber`). | `index.js`, `automation-manifest.json` |
| **Eventos imutáveis** | CÉREBRO | Eventos que, uma vez gravados, não podem ser alterados — só lidos. | `ATUALIZACOES.md` |
| **Exit code (0/1)** | Código | Código de saída do processo; 0 = sucesso, 1 = falha. | `test_recovery_flow.js`, `HANDOFF.md` |
| **Express** | Código | Framework Node.js para servir HTTP/webhooks. | `index.js`, `package.json` |
| **Fallback** | Técnica | Plano B automático quando o caminho principal falha. | `dlq.js`, `progress.md` |
| **fgss-brain.json** | Arquivo | Painel central do FGSS Brain — fonte da verdade operacional (níveis, rotas, limites). | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **FGSS Brain** | CÉREBRO | Núcleo de inteligência global que orquestra o desenvolvimento no CÉREBRO. 6 lobos. | `CÉREBRO/AGENTS.md`, `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **FGSS MAIN BRAIN** | CÉREBRO | Camada de observação/telemetria que valida e consolida evidências dos projetos. | `README.md`, `PENDENCIAS.md` |
| **FGSS Loop** | CÉREBRO | Fluxo de trabalho padrão do FGSS Brain para tarefas grandes (6 passos). | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Filtro Lógico e Óbvio** | CÉREBRO | Roteiro que força explicação simples → fatos → só aumentar complexidade se necessário. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Fila (Queue)** | Código | Estrutura onde jobs esperam ser processados pelo worker. | `worker.js`, `index.js` |
| **First Principles (primeiros princípios)** | Técnica | Pensar do fundamento, sem atalhos ou caixas-pretas. | `FGSS_BRAIN_MASTER_PROTOCOL.md` (Karpathy) |
| **Frontmatter** | Código | Bloco de metadados no topo de um arquivo Markdown (ex: `source: community`). | `ATUALIZACOES.md` |
| **Graceful Shutdown** | Código | Encerramento limpo que conclui jobs em andamento antes de sair. | `worker.js`, `README.md` |
| **Graphify** | CÉREBRO | 4º lobo do FGSS Brain — transforma código em AST para visão estrutural. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **HANDOFF.md** | Arquivo | Memória de transferência entre sessões: pendências, atualizações, descobertas. | `FGSS Gestor de Automacao/HANDOFF.md` |
| **Health Check** | Código | Rota que responde "estou vivo" para monitoramento. | `index.js` (`/healthz`), `docker-compose.yml` |
| **Heap (V8)** | Infra | Área de memória do Node onde objetos vivem; estoura = OOM. | `findings.md` |
| **HMAC-SHA256** | Sigla | Algoritmo de assinatura/autenticação de mensagens com chave secreta. | `ATUALIZACOES.md` (envelope do MAIN BRAIN) |
| **ioredis** | Código | Cliente Node.js para Redis, com reconexão e retentativas. | `dlq.js`, `package.json` |
| **Idempotência** | Técnica | Garantia de que processar o mesmo evento duas vezes gera o mesmo resultado (sem duplicar). | `index.js`, `docker-compose.yml` |
| **index.js** | Arquivo | Servidor Express + endpoint de webhook + inicializa o worker. | `integrations/aut-teste-contingencia/src/index.js` |
| **JSONL** | Sigla | JSON Lines — um objeto JSON por linha; ideal para logs append-only. | `dlq.js`, `progress.md` |
| **Job / Job ID** | Código | Unidade de trabalho na fila; tem identificador único. | `worker.js`, `test_recovery_flow.js` |
| **Karpathy Guidelines** | CÉREBRO | 2º lobo do FGSS Brain — disciplina de primeiros princípios e profundidade. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Kill mid-run** | Técnica | Derrubar infra no meio da execução para testar contingência. | `findings.md`, `test_chaos_break.js` |
| **Lâmina de Contingência** | CÉREBRO | Pilar 2 — mecanismos de tolerância a falhas: DLQ, retry, fallback. | `README.md`, `ATUALIZACOES.md` |
| **Lâmina de Execução** | CÉREBRO | 3º lobo do FGSS Brain — Ponytail (YAGNI radical, código enxuto). | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **LGPD** | Sigla | Lei Geral de Proteção de Dados brasileira; regra de privacidade. | `logger.js`, `progress.md` |
| **Limiter (BullMQ)** | Código | Controle de velocidade do worker (ex: 80 jobs/s). | `worker.js`, `test_chaos_break.js` |
| **Logger** | Código | Módulo que registra eventos com mascaramento LGPD. | `src/logger.js` |
| **Manychat** | Automação | Plataforma de automação de mensagens (WhatsApp/IG). | `automation-manifest.json`, `worker.js` |
| **MCP (Model Context Protocol)** | Sigla | Protocolo que dá aos LLMs acesso a ferramentas e fontes externas. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Memgraph** | Infra | Banco de dados em grafo usado pelo Code Graph RAG. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Monkey-patch** | Técnica | Alterar comportamento de função/objeto em tempo de execução, sem mudar a lib. | `test_chaos_break.js` (`Redis.prototype.duplicate`) |
| **moveToActive** | Código | Passo interno do BullMQ que move um job da espera para o processamento. | `findings.md` |
| **Network bridge** | Infra | Driver de rede do Docker que isola contêineres num mesmo host. | `docker-compose.yml` |
| **No-Code** | Automação | Construção de automações sem código (ex: n8n, Make). | `AGENTS.md` |
| **Noce / proteção contra repetição** | Código | Identificador único por evento que bloqueia replay (reenvio). | `ATUALIZACOES.md`, `PENDENCIAS.md` |
| **nodemon** | Código | Tool que reinicia o Node ao detectar mudança no código. | `package.json` |
| **npm** | Sigla | Gerenciador de pacotes do Node. | `README.md`, `package.json` |
| **Obliterate / drain** | Código | Comandos BullMQ para limpar fila (tudo ou só pendentes). | `test_chaos_break.js`, `findings.md` |
| **Offline Queue (enableOfflineQueue)** | Código | Enfileirar comandos quando o Redis está fora, ou rejeitar imediatamente. | `findings.md`, `dlq.js` |
| **OOM (Out of Memory)** | Sigla/Infra | Erro fatal quando o Node esgota a memória disponível. | `findings.md`, `progress.md` |
| **Outbox pattern** | Código | Padrão de garantir entrega gravando primeiro localmente, depois enviando. | `ATUALIZACOES.md` |
| **Payload** | Automação | Conteúdo de dados de uma mensagem/evento. | `worker.js`, `dlq.js` |
| **Pendências** | Arquivo | Lista de trabalho ainda aberto no ecossistema. | `/CÉREBRO/PENDENCIAS.md` |
| **PII (Personally Identifiable Information)** | Sigla | Dados pessoais que identificam um indivíduo (CPF, telefone...). | `logger.js`, `test_chaos_break.js` |
| **PII Masking** | Técnica | Substituir dados sensíveis por marcador antes de logar/gravar. | `logger.js`, `README.md` |
| **Ponytail** | CÉREBRO | 3º lobo do FGSS Brain — YAGNI radical, cortar tudo que não é necessário. | `AGENTS.md`, `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Política de observação** | CÉREBRO | Regra que define o que e como um projeto é monitorado no MAIN BRAIN. | `ATUALIZACOES.md` |
| **Poll / polling** | Código | Checar repetidamente um estado em intervalos. | `test_chaos_break.js` |
| **PostgreSQL / Postgres** | Infra | Banco de dados relacional open-source. | `ATUALIZACOES.md`, `progress.md` |
| **Preflight** | Técnica | Verificação pré-vôo — checar tudo antes de agir. | `AGENTS.md`, `test_chaos_break.js` (`preflightRedis`) |
| **Preflight Search** | CÉREBRO | Busca web dinâmica sobre stack/APIs antes de codar (versões, deprecations). | `AGENTS.md`, `README.md` |
| **Projeto piloto** | CÉREBRO | Primeiro projeto conectado ao MAIN BRAIN para observar 7 dias antes de expandir. | `PENDENCIAS.md` |
| **Quarentena** | CÉREBRO | Estado de rejeição sem armazenar o conteúdo rejeitado. | `ATUALIZACOES.md` |
| **Queue** | Código | Classe BullMQ que enfileira jobs. | `test_recovery_flow.js`, `test_chaos_break.js` |
| **QueueEvents** | Código | Classe BullMQ que emite eventos (completed/failed) para auditoria. | `test_recovery_flow.js` |
| **RAG (Retrieval-Augmented Generation)** | Sigla | Enriquecer respostas de LLM buscando em conhecimento externo. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Rate Limit / Rate Limiting** | Código | Limite de quantas requisições por janela de tempo. | `worker.js`, `automation-manifest.json` |
| **REDACT_LGPD_COMPLIANT** | Código | Marcador que substitui campo sensível mascarado. | `logger.js`, `test_chaos_break.js` |
| **Redis** | Infra | Banco em memória chave-valor, usado para filas e cache. | `worker.js`, `docker-compose.yml` |
| **redis-cli ping** | Infra | Comando que testa se o Redis responde. | `findings.md`, `test_chaos_break.js` |
| **Retry / retentativa** | Automação | Tentar de novo após falha. | `worker.js`, `ATUALIZACOES.md` |
| **Retry exponencial** | Técnica | Retentativas com espera crescente exponencialmente. | `ATUALIZACOES.md` |
| **retryStrategy** | Código | Função que define quanto esperar antes de reconectar ao Redis. | `dlq.js`, `test_chaos_break.js` |
| **RLS (Row Level Security)** | Sigla | Segurança por linha no PostgreSQL — cada linha visível só a quem pode. | `ATUALIZACOES.md` |
| **rpush / lrange / del / quit** | Código | Comandos Redis: empurrar para lista, ler intervalo, deletar, fechar conexão. | `dlq.js` |
| **Sandbox-First** | CÉREBRO | Pilar 3 — isolar chaves de teste (`_TEST`) das de produção (`_LIVE`). | `README.md` |
| **scaffold_project.py** | Arquivo | CLI que gera o esqueleto de uma nova automação. | `tools/scaffold/` |
| **Scaffold** | Técnica | Gerar a estrutura inicial de um projeto automaticamente. | `tools/scaffold/`, `README.md` |
| **Set (comparação por conjunto)** | Código | Estrutura que não admite duplicatas — usada para auditar DLQ. | `test_chaos_break.js` |
| **SIGTERM / SIGINT** | Sigla/Infra | Sinais do sistema que pedem encerramento (TERM = terminação, INT = interrupção/Ctrl+C). | `worker.js` |
| **Skill last30days** | CÉREBRO | Skill de pesquisa de novidades dos últimos 30 dias. | `ATUALIZACOES.md`, `PENDENCIAS.md` |
| **Snapshot cumulativo / delta** | CÉREBRO | Snapshot = foto de estado; cumulativo soma repetido (errado); delta = só a diferença (correto para custo). | `PENDENCIAS.md` |
| **scaffold_automation.py** | Arquivo | Nome alternativo referido para o CLI de scaffold. | `README.md` |
| **Stack trace** | Código | Rastro da pilha de chamadas quando um erro ocorre — mostra onde veio. | `dlq.js`, `logger.js` |
| **Stalled job / stalledInterval** | Código | Job que parou de progredir; BullMQ checa periodicamente e recupera. | `test_chaos_break.js` |
| **Stderr / stdout** | Infra | Saídas padrão: stderr = erros, stdout = saída normal. | `logger.js`, `findings.md` |
| **Stdlib (biblioteca padrão)** | Técnica | Conjunto de módulos nativos da linguagem (ex: `fs` no Node) — sem instalar nada. | `AGENTS.md`, `dlq.js` |
| **Supabase** | Infra | Backend-as-a-Service sobre PostgreSQL + Auth + Edge Functions. | `PENDENCIAS.md`, `ATUALIZACOES.md` |
| **Supabase Edge Functions** | Infra | Funções serverless que rodam na borda da Supabase. | `AGENTS.md` |
| **Tabela de Decisão** | CÉREBRO | Apresentação de trade-offs entre 2-3 abordagens para decisão. | `AGENTS.md` |
| **Telemetria** | CÉREBRO | Coleta automática de métricas de execução e custos. | `README.md`, `automation-manifest.json` |
| **test_chaos_break.js** | Arquivo | Teste de quebra física: envio massivo + `docker stop` Redis + auditoria + fallback JSONL. | `src/test_chaos_break.js` |
| **test_recovery_flow.js** | Arquivo | Teste de contingência: 1 job falha 3x → DLQ + máscara LGPD. | `src/test_recovery_flow.js` |
| **Timeout** | Código | Tempo máximo de espera antes de desistir. | `test_recovery_flow.js` |
| **Token** | Automação | Credencial secreta de acesso a uma API. | `logger.js`, `test_recovery_flow.js` |
| **Token Bucket** | Código | Algoritmo de rate limit com "tokens" que se replenam ao longo do tempo. | `worker.js` |
| **Tríade de Valor** | CÉREBRO | Equilíbrio entre Custo Operacional, Robustez e Simplicidade. | `AGENTS.md`, `README.md` |
| **unhandledRejection / uncaughtException** | Código | Promessas/erros sem handler; se não tratados, derrubam o Node. | `test_chaos_break.js` |
| **VLAEG** | Sigla/CÉREBRO | Constituição do FGSS Brain: Visão, Link, Arquitetura, Estilo, Gatilho. "Contrato antes de código." | `AGENTS.md`, `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Volume (docker)** | Infra | Armazenamento persistente do contêiner que sobrevive a reinícios. | `docker-compose.yml` (`redis_data`) |
| **VPS / Vercel** | Infra | Ambientes de deploy: VPS = servidor virtual, Vercel = plataforma serverless. | `HANDOFF.md`, `PENDENCIAS.md` |
| **Webhook** | Automação | URL que recebe notificações HTTP de eventos externos. | `index.js`, `automation-manifest.json` |
| **worker.js** | Arquivo | Trabalhador BullMQ que consome a fila e trata falhas via DLQ dual. | `src/worker.js` |
| **Worker** | Código | Processo que pega jobs da fila e executa. | `worker.js`, `test_recovery_flow.js` |
| **YAGNI** | Sigla | "You Aren't Gonna Need It" — não construir o que não foi pedido. | `AGENTS.md`, `FGSS_BRAIN_MASTER_PROTOCOL.md` |

---

## §2 — Índice por Categoria

### 📁 Arquivos / Módulos
`AGENTS.md` · `ATUALIZACOES.md` · `automation-manifest.json` · `automation-manifest-schema.json` · `DESCOBERTAS.md` · `dlq.js` · `dlq_fallback.jsonl` · `fgss-brain.json` · `HANDOFF.md` · `index.js` · `logger.js` · `PENDENCIAS.md` · `scaffold_project.py` · `scaffold_automation.py` · `test_chaos_break.js` · `test_recovery_flow.js` · `worker.js`

### 💻 Conceitos de Código
`Attempts` · `Backoff` · `BullMQ` · `DLQ` · `DLQ dual` · `Event Listener` · `Exit code` · `Express` · `Fila (Queue)` · `Frontmatter` · `Graceful Shutdown` · `Health Check` · `Idempotência` · `Job / Job ID` · `Limiter` · `moveToActive` · `Nonce` · `Obliterate / drain` · `Offline Queue` · `Outbox pattern` · `Payload` · `Poll / polling` · `Queue` · `QueueEvents` · `rpush / lrange / del / quit` · `retryStrategy` · `Set` · `Stalled job` · `Stack trace` · `Token Bucket` · `Worker`

### 🛠️ Técnicas
`Append-only` · `AST` · `Auditoria de integridade` · `Chaos Engineering` · `Circuit breaker` · `Contrato antes de código` · `Determinístico` · `Fallback` · `Fallback dual` · `First Principles` · `Idempotência` · `Kill mid-run` · `Monkey-patch` · `PII Masking` · `Preflight` · `Retry exponencial` · `Scaffold` · `Stdlib` · `YAGNI`

### 🏗️ Infra / DevOps
`AOF` · `ChromaDB` · `CLI` · `Cloud Functions` · `ConsString` · `Contêiner` · `Docker` · `Docker Compose` · `docker exec` · `docker start / stop` · `Healthcheck probe` · `Heap (V8)` · `ioredis` · `Liveness probe` · `MCP` · `Memgraph` · `Network bridge` · `nodemon` · `npm` · `OOM` · `PostgreSQL` · `redis-cli ping` · `redis-server` · `Redis` · `RLS` · `SIGTERM / SIGINT` · `SQLite` · `Stderr / stdout` · `Supabase` · `Supabase Edge Functions` · `Volume` · `VPS / Vercel`

### 🔤 Siglas / Protocolos
`AEOT` · `AOF` · `API` · `AST` · `CLI` · `DLQ` · `G-T-M` · `H-I` · `HMAC-SHA256` · `HTTP` · `H-I` · `JSONL` · `LGPD` · `MCP` · `npm` · `OOM` · `PII` · `RAG` · `REST` · `RLS` · `SIGINT` · `SIGTERM` · `SQL` · `URL` · `VLAEG` · `YAGNI`

### 🧠 Ecossistema CÉREBRO
`Bíblia de Automação` · `Bíblia G-T-M` · `Bíblia H-I` · `Chairman de Automação` · `CÉREBRO` · `Code Graph RAG` · `Coletor` · `Demanda` · `FGSS Brain` · `FGSS Loop` · `FGSS MAIN BRAIN` · `Filtro Lógico e Óbvio` · `Graphify` · `Karpathy Guidelines` · `Lâmina de Contingência` · `Lâmina de Execução` · `Painel do Admin` · `Ponytail` · `Política de observação` · `Preflight Search` · `Projeto piloto` · `Quarentena` · `Sandbox-First` · `Skill last30days` · `Snapshot / delta` · `Tabela de Decisão` · `Telemetria` · `Tríade de Valor` · `VLAEG`

### 📡 Termos Gerais de Automação
`Cache` · `Canal` · `Custo unitário` · `Endpoint` · `Eventos imutáveis` · `Fallback` · `Fila de processamento` · `Integração` · `Kiwify` · `Manychat` · `No-Code` · `n8n` · `Payload` · `Rate limit` · `Retry` · `Token` · `Webhook` · `WhatsApp Cloud API`

---

## §3 — Conceitos-chave para leitura rápida

> Para quem precisa entender o projeto em 2 minutos.

**O que o projeto faz:** Gere automações padronizadas (fila BullMQ + Redis) com
tolerância a falhas (DLQ dual) e conformidade LGPD (PII Masking), orquestradas
pelo ecossistema CÉREBRO e observadas pelo FGSS MAIN BRAIN.

**Fluxo padrão de uma automação:**
1. Webhook externo bate em `index.js` (Express) → enfileira job.
2. `worker.js` (BullMQ) pega o job da fila, processa com rate limit.
3. Se falha: retry com backoff exponencial.
4. Se falha definitivo: vai para DLQ dual (Redis → se Redis cair, JSONL).
5. Logs são mascarados (PII → `[REDACT_LGPD_COMPLIANT]`) em `logger.js`.

**Camada de contingência (Pilar 2):**
- **Retry:** tenta de novo com espera crescente.
- **DLQ dual:** se tudo falha, o payload sanitizado sobrevive (Redis + arquivo).
- **Fallback JSONL:** plano B quando o Redis próprio cai.

**Governança:**
- `automation-manifest.json` descreve cada automação (inputs, outputs, limites).
- `scaffold_project.py` gera novas automações já no padrão.
- `AGENTS.md` define como o LLM deve operar neste repositório.

---

> *Mantenha este glossário atualizado ao introduzir novos termos no projeto.
> Cada termo novo em código/arquitetura deve ganhar uma linha aqui.*
