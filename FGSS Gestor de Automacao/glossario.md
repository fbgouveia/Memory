# 📖 Glossário Técnico — FGSS Gestor de Automacao

> Dicionário de leitura fácil e concisa sobre **todos** os termos técnicos usados
> neste projeto: arquivos, conceitos de código, técnicas, infra, siglas,
> ferramentas, ecossistema CÉREBRO, automação e negócio.
>
> **Como usar:** procure na tabela alfabética (§1) ou navegue por categoria (§2).
> Cada entrada traz definição curta + onde aparece no projeto.

---

## §1 — Tabela Alfabética

### A

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **AEOT** | Sigla/CÉREBRO | Protocolo de Adaptabilidade Estratégica e Otimização Tridimensional — diretriz-mestra de raciocínio do projeto. | `README.md` |
| **Agentic RAG** | Técnica | RAG com roteamento dinâmico baseado em grafo; LLM decide se precisa de retrieval. | `docs/bible_hi/04_inteligencia_artificial_local.md` |
| **Alucinação (LLM)** | Técnica | Quando o modelo inventa informação com aparência de confiança. | `prompt_engineering_bible.md` |
| **Ancoragem de Preço** | Negócio | Técnica de referência de valor na call para precificar. | `02_estrategia_comercial.md` |
| **ANVISA** | Sigla | Órgão regulador de saúde; aparece em mocking/isolamento de integrações. | `100_oportunidades_hi.md` |
| **AOF (Append Only File)** | Infra | Log persistente do Redis que grava cada escrita em disco. | `docker-compose.yml`, `findings.md` |
| **Append-only** | Técnica | Arquivo onde só se escreve no final; histórico imutável. | `dlq.js` (JSONL fallback) |
| **API** | Sigla | Interface de programação — contrato de comunicação entre softwares. | `AGENTS.md`, `automation-manifest.json` |
| **Aprovação tácita** | Negócio | Ausência de resposta = aprovação (cláusula contratual). | `02_estrategia_comercial.md` |
| **Asaas** | Plataforma | Gateway de cobrança brasileiro. | `make_advanced.md` |
| **AST (Árvore de Sintaxe Abstrata)** | Sigla/Téc | Representação em árvore do código após análise sintática. | `FGSS_BRAIN_MASTER_PROTOCOL.md` (Graphify) |
| **ATUALIZACOES.md** | Arquivo | Registro cronológico do que foi concluído no CÉREBRO. | `/CÉREBRO/ATUALIZACOES.md` |
| **Auth.uid()** | Código | Função Supabase que retorna o ID do usuário; usada em políticas RLS. | `01_arquitetura_banco_dados.md` |
| **Authentication Template** | Automação | Categoria de template WhatsApp Business API (login/2FA). | `api_oficial_descomplicado.md` |
| **Automation-manifest.json** | Arquivo | Manifesto de metadados da automação (inputs, outputs, limites, contingência). | `integrations/aut-teste-contingencia/` |
| **Automation-manifest-schema.json** | Arquivo | Esquema JSON que valida se o manifesto está bem formado. | `schemas/` |
| **AWS Lambda** | Infra | Função serverless da Amazon. | `01_arquitetura_banco_dados.md` |

### B

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **B2B** | Sigla | Business-to-Business — empresa vende para empresa. | `100_oportunidades_hi.md` |
| **B2C** | Sigla | Business-to-Consumer — empresa vende para consumidor final. | `100_oportunidades_hi.md` |
| **BACEN** | Sigla | Banco Central; aparece em isolamento de integrações reguladas. | `100_oportunidades_hi.md` |
| **Backoff (exponential)** | Código | Aumento progressivo do tempo entre retentativas. | `test_recovery_flow.js`, `worker.js` |
| **backoff.type: 'exponential'** | Código | Config do tipo de backoff no job BullMQ. | `02_contingencia_filas.md` |
| **Blueprint (Make)** | Automação | Export/import de cenário completo do Make. | `make_advanced.md` |
| **Bloco de Mensagens** | Automação | Unidade de fluxo no NicoChat. | `nicochat_whatsapp.md` |
| **Bloco Aleatório** | Automação | Bloco NicoChat que varia mensagens. | `nicochat_whatsapp.md` |
| **Bloco de Email** | Automação | Bloco NicoChat que envia email. | `nicochat_whatsapp.md` |
| **Boleto** | Negócio | Método de pagamento; recuperação de boleto gerado. | `04_playbooks_infoprodutos.md` |
| **BotConversa** | Plataforma | Plataforma de chatbots. | `claude_code_engineering.md` |
| **BSP (Business Solution Partner)** | Sigla | Provedor oficial de WhatsApp Business API. | `01_fundacoes_tecnicas.md` |
| **BullMQ** | Código | Biblioteca Node.js para filas assíncronas baseada em Redis. | `worker.js`, `package.json` |

### C

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Cache** | Automação | Camada de guarda de resultados para não rebuscar. | `ATUALIZACOES.md` |
| **Cal.com / Calendly** | Plataforma | Ferramentas de agendamento. | `03_playbooks_negocios_locais.md` |
| **Canal (channel)** | Automação | Meio de entrega do resultado (WhatsApp, email, IG). | `automation-manifest.json` |
| **Card** | Automação | Item visual no pipeline/funil de CRM. | `crm_automated.md` |
| **Carrinho Abandonado** | Negócio | Recuperação de checkout não concluído. | `04_playbooks_infoprodutos.md` |
| **Chargeback** | Negócio | Disputa de cobrança no banco. | `05_playbooks_ecommerce_crm.md` |
| **Chairman de Automação** | CÉREBRO | Persona do LLM que modela, audita e refatora automações. | `AGENTS.md`, `README.md` |
| **Chaos Engineering** | Técnica | Testar derrubando partes do sistema para prover resiliência. | `test_chaos_break.js` |
| **Chatwoot** | Plataforma | Plataforma omnichannel de atendimento. | `metrics_dashboards.md` |
| **ChromaDB** | Infra | Banco vetorial para memória semântica. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Circuit Breaker** | Técnica | Padrão que interrompe fluxo quando serviço falha demais. | `05_resiliencia_seguranca_avancada.md` |
| **Circuit Breaker estados** | Técnica | Closed (normal) / Open (bloqueado) / Half-Open (teste). | `05_resiliencia_seguranca_avancada.md` |
| **CÉREBRO** | CÉREBRO | Ecossistema maior de inteligência e automação. | `AGENTS.md` |
| **Clint (Clint CRM)** | Plataforma | CRM com API. | `crm_automated.md` |
| **CLI (Command Line Interface)** | Sigla | Programa executado pelo terminal. | `scaffold_project.py` |
| **Cloud Functions** | Infra | Funções serverless sob demanda. | `AGENTS.md` |
| **Code Graph RAG** | CÉREBRO | 5º lobo do FGSS Brain — GPS da arquitetura via grafo. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Coletor** | CÉREBRO | Componente do MAIN BRAIN que captura eventos de um projeto. | `ATUALIZACOES.md` |
| **Concurrency (Worker)** | Código | Nº de jobs paralelos processados pelo worker. | `02_contingencia_filas.md` |
| **Condicionais** | Automação | Lógica de branch no fluxo. | `manychat_instagram.md` |
| **ConsString** | Infra | Estrutura interna V8 para strings concatenadas; em volume causa OOM. | `findings.md` |
| **Contratos Primeiro (VLAEG)** | CÉREBRO | Definir entradas/saídas/schema antes do código. | `AGENTS.md` |
| **Contêiner** | Infra | Unidade isolada que empacota app e deps. | `docker-compose.yml` |
| **Correios** | Plataforma | Rastreio logístico. | `05_playbooks_ecommerce_crm.md` |
| **Cosine distance** | Técnica | Métrica de similaridade vetorial (cosseno entre vetores). | `04_inteligencia_artificial_local.md` |
| **CoT (Chain of Thought)** | Técnica | Raciocínio passo a passo no prompt. | `prompt_engineering_bible.md` |
| **CPL1 (Aula 1)** | Negócio | Primeira aula do lançamento. | `04_playbooks_infoprodutos.md` |
| **CRM** | Sigla | Customer Relationship Management — gestão de relacionamento. | `05_playbooks_ecommerce_crm.md` |
| **Cross-sell** | Negócio | Oferta complementar pós-compra. | `04_playbooks_infoprodutos.md` |
| **Cursor** | Plataforma | IDE com IA. | `claude_code_engineering.md` |

### D

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **D2C** | Sigla | Direct-to-Consumer — marca vende direto. | `100_oportunidades_hi.md` |
| **Dead Letter Queue (DLQ)** | Código | Fila de jobs que falharam definitivamente. | `worker.js`, `dlq.js` |
| **Default Reply** | Automação | Resposta padrão do bot. | `manychat_instagem.md` |
| **defaultJobOptions** | Código | Config padrão de attempts/backoff/cleanup da fila. | `02_contingencia_filas.md` |
| **Delimitadores** | Técnica | Separadores visuais no prompt (XML, `---`, `\|`). | `prompt_engineering_bible.md` |
| **Demanda** | CÉREBRO | Solicitação de telemetria verificada e custada no MAIN BRAIN. | `ATUALIZACOES.md` |
| **DESCOBERTAS.md** | Arquivo | Registro de fatos novos com consequência no CÉREBRO. | `/CÉREBRO/AGENTS.md` |
| **Docker** | Infra | Plataforma de contêineres. | `docker-compose.yml` |
| **Docker Compose** | Infra | Orquestra múltiplos contêineres via YAML. | `docker-compose.yml` |
| **Docker Secrets** | Infra | Armazenamento seguro de credenciais em contêiner. | `100_oportunidades_hi.md` |
| **Docker-First** | Infra | Padrão de contêineres obrigatório em 2026. | `03_docker_devops.md` |
| **docker exec** | Infra | Roda comando dentro de contêiner em execução. | `test_chaos_break.js` |
| **docker start / stop** | Infra | Sobe/derruba contêiner. | `findings.md` |
| **dlq.js** | Arquivo | Módulo da DLQ dual (Redis + JSONL fallback). | `src/dlq.js` |
| **dlq_fallback.jsonl** | Arquivo | Arquivo local append-only da DLQ. | `.tmp/`, `dlq.js` |
| **Drizzle** | Plataforma | ORM TypeScript para Postgres. | `01_arquitetura_banco_dados.md` |

### E

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **EasyPanel** | Plataforma | Painel de deploy/self-host. | `n8n_advanced.md` |
| **eduZZ** | Plataforma | Plataforma de infoprodutos. | `04_playbooks_infoprodutos.md` |
| **EF Construction / m=16** | Código | Parâmetros de construção do índice HNSW. | `04_inteligencia_artificial_local.md` |
| **Endpoint** | Automação | URL que recebe ou entrega dados. | `index.js`, `manifest` |
| **ERP** | Sigla | Enterprise Resource Planning — planejamento de recursos. | `05_resiliencia_seguranca_avancada.md` |
| **Error Catching global** | Código | Captura de erro que alimenta telemetria do MAIN BRAIN. | `AGENTS.md` |
| **Estimativa_custo** | CÉREBRO | Campo do manifesto: custo unitário por chamada. | `README.md` |
| **Etapas (Pipeline)** | Negócio | Fases do funil visual de vendas. | `crm_automated.md` |
| **Eventos imutáveis** | CÉREBRO | Eventos que, uma vez gravados, não podem ser alterados. | `ATUALIZACOES.md` |
| **Evolution API** | Plataforma | API WhatsApp integrada ao Chatwoot. | `metrics_dashboards.md` |
| **Evergreen / Perpétuo** | Negócio | Vendas contínuas (não por lançamento). | `04_playbooks_infoprodutos.md` |
| **Exit code (0/1)** | Código | Código de saída do processo; 0 = sucesso, 1 = falha. | `test_recovery_flow.js` |
| **Express** | Código | Framework Node.js para HTTP/webhooks. | `index.js` |

### F

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Fila (Queue)** | Código | Estrutura onde jobs esperam ser processados. | `worker.js` |
| **Filter (Make)** | Automação | Módulo de filtro no Make. | `make_advanced.md` |
| **Filter node (n8n)** | Código | Node de filtro no n8n. | `n8n_advanced.md` |
| **First Principles** | Técnica | Pensar do fundamento, sem atalhos ou caixas-pretas. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Flyway** | Plataforma | Ferramenta de migration SQL. | `01_arquitetura_banco_dados.md` |
| **Few-Shot Prompting** | Técnica | Fornecer 1-5 exemplos entrada/saída no prompt. | `prompt_engineering_bible.md` |
| **Frontmatter** | Código | Bloco de metadados no topo de um Markdown. | `ATUALIZACOES.md` |
| **Function Flow (NicoChat)** | Automação | Tipo de fluxo com lógica no NicoChat. | `nicochat_whatsapp.md` |

### G

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **G-T-M (Go-To-Market)** | Sigla | Categoria de estratégia de mercado; Bíblia G-T-M. | `ATUALIZACOES.md` |
| **GPT Maker** | Plataforma | Plataforma de criação de agentes de IA. | `gpt_maker.md` |
| **GDPR** | Sigla | Regulamento europeu de proteção de dados (equivalente LGPD). | implícito |
| **gen_random_uuid()** | Código | Função Postgres de geração de UUID. | `04_inteligencia_artificial_local.md` |
| **Google Calendar** | Plataforma | Integração de calendário. | `make_advanced.md` |
| **Google Drive / Gmail** | Plataforma | Integrações Google. | `make_advanced.md` |
| **Google Meu Negócio** | Plataforma | Google Business Profile — avaliações locais. | `03_playbooks_negocios_locais.md` |
| **Google Sheets** | Plataforma | Planilhas como destino de dados. | `05_playbooks_ecommerce_crm.md` |
| **Grader** | Técnica | Filtro de chunks irrelevantes no RAG. | `04_inteligencia_artificial_local.md` |
| **Graceful Shutdown** | Código | Encerramento limpo que conclui jobs antes de sair. | `worker.js` |
| **Graphify** | CÉREBRO | 4º lobo do FGSS Brain — código em AST. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |

### H

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **halfvec quantization** | Técnica | Quantização de vetores para reduzir memória. | `INDEX_HI.md` |
| **HANDOFF.md** | Arquivo | Memória de transferência entre sessões. | `FGSS Gestor de Automacao/` |
| **Health Check** | Código | Rota que responde "estou vivo". | `index.js` (`/healthz`) |
| **Heap (V8)** | Infra | Área de memória do Node; estoura = OOM. | `findings.md` |
| **H-I (High Intelligence)** | Sigla | Categoria técnica avançada; Bíblia H-I. | `ATUALIZACOES.md` |
| **HMAC-SHA256** | Sigla | Algoritmo de assinatura de mensagens com chave secreta. | `ATUALIZACOES.md` |
| **Hostinger / Hostgator** | Plataforma | Hospedagem n8n. | `n8n_advanced.md` |
| **HNSW** | Sigla | Hierarchical Navigable Small World — índice vetorial multicamadas. | `04_inteligencia_artificial_local.md` |
| **HubSpot** | Plataforma | CRM. | `05_playbooks_ecommerce_crm.md` |
| **HTTP** | Sigla | Protocolo de transferência web. | `index.js` |
| **HTTP Request (Make)** | Automação | Módulo de requisição HTTP no Make. | `make_advanced.md` |

### I

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **IA Generativa** | Técnica | IA que cria conteúdo novo. | `prompt_engineering_bible.md` |
| **ICP (Ideal Customer Profile)** | Sigla | Definição do cliente ideal. | `02_estrategia_comercial.md` |
| **Idempotência** | Técnica | Processar 2x o mesmo evento gera mesmo resultado. | `index.js`, `docker-compose.yml` |
| **Idempotency Key** | Técnica | Chave anti-duplicação com `SET NX EX` no Redis. | `02_contingencia_filas.md` |
| **index.js** | Arquivo | Servidor Express + webhook + inicializa worker. | `src/index.js` |
| **Index Warming** | Técnica | Aquecimento de índice HNSW com queries pré-produção. | `01_arquitetura_banco_dados.md` |
| **Iniciador de Conversa (IG)** | Automação | Gatilho de início no Instagram Direct. | `manychat_instagram.md` |
| **Infoproduto** | Negócio | Produto digital. | `04_playbooks_infoprodutos.md` |
| **ioredis** | Código | Cliente Node.js para Redis. | `dlq.js`, `package.json` |
| **Iterator (Make)** | Automação | Módulo que percorre arrays no Make. | `make_advanced.md` |
| **IVFFlat** | Sigla | Índice vetorial antigo (requer re-treinamento). | `04_inteligencia_artificial_local.md` |

### J

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Janela de 24 horas** | Automação | Janela de conversação do WhatsApp. | `04_playbooks_infoprodutos.md` |
| **Jitter** | Técnica | Variação aleatória no delay para evitar thundering herd. | `02_contingencia_filas.md` |
| **Job / Job ID** | Código | Unidade de trabalho na fila; identificador único. | `worker.js` |
| **JSONL** | Sigla | JSON Lines — um JSON por linha; ideal para logs append-only. | `dlq.js` |
| **JWT** | Sigla | JSON Web Token — token de sessão assinado. | `100_oportunidades_hi.md` |

### K

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Karpathy Guidelines** | CÉREBRO | 2º lobo do FGSS Brain — primeiros princípios. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Kill mid-run** | Técnica | Derrubar infra no meio da execução para testar contingência. | `findings.md` |
| **Kiwify** | Plataforma | Plataforma de infoprodutos/checkout. | `test_recovery_flow.js` |

### L

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Lâmina de Contingência** | CÉREBRO | Pilar 2 — DLQ, retry, fallback. | `README.md` |
| **Lâmina de Execução** | CÉREBRO | 3º lobo do FGSS Brain — Ponytail. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Lançamento (Launch Funnel)** | Negócio | Janela curta de vendas. | `04_playbooks_infoprodutos.md` |
| **LangGraph-style** | Técnica | Framework de execução de agentes em grafo. | `04_inteligencia_artificial_local.md` |
| **Leadlovers** | Plataforma | Automação de email marketing. | `make_advanced.md` |
| **LGPL/License** | — | — | — |
| **LGPD** | Sigla | Lei Geral de Proteção de Dados brasileira. | `logger.js` |
| **Limiter (BullMQ)** | Código | Controle de velocidade do worker. | `worker.js` |
| **Lista de Espera** | Negócio | Fila de leads para vaga. | `04_playbooks_infoprodutos.md` |
| **Liveness Probe** | Infra | Probe de reinício automático do contêiner. | `05_resiliencia_seguranca_avancada.md` |
| **LLM** | Sigla | Large Language Model — modelo de linguagem de grande escala. | `prompt_engineering_bible.md` |
| **logger.js** | Arquivo | Módulo de logging com mascaramento LGPD. | `src/logger.js` |
| **Luke** | Negócio | Agente SDR de IA. | `luke_sdr_agents.md` |

### M

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Main Menu** | Automação | Menu principal do bot. | `manychat_instagram.md` |
| **Make (Integromat)** | Plataforma | Plataforma no-code de cenários. | `make_advanced.md` |
| **Manychat** | Plataforma | Plataforma de automação de mensagens. | `automation-manifest.json` |
| **Mapeamento de campos** | Automação | Vinculação de dados entre nodes. | `n8n_advanced.md` |
| **Marketing Template** | Automação | Categoria de template WhatsApp (promoções). | `api_oficial_descomplicado.md` |
| **mascararDadosSensiveis** | Código | Função recursiva de PII masking no logger. | `logger.js` |
| **Matryoshka Embeddings (MRL)** | Técnica | Fatiamento de vetor mantendo precisão. | `04_inteligencia_artificial_local.md` |
| **maxmemory-policy noeviction** | Código | Política obrigatória de Redis para BullMQ. | `02_contingencia_filas.md` |
| **maxRetriesPerRequest** | Código | Limite de retentativas por requisição no ioredis. | `worker.js`, `dlq.js` |
| **maxStalledCount** | Código | Limite de retomadas de stalled job antes de descartar. | `test_chaos_break.js` |
| **MCP (Model Context Protocol)** | Sigla | Protocolo que dá LLMs acesso a ferramentas externas. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **MCP (n8n, colisão)** | Sigla | Machine Code Programming — conexão Claude Code↔n8n. | `claude_code_engineering.md` |
| **Memgraph** | Infra | Banco de dados em grafo. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Metrics Dashboards** | Automação | Painéis de métricas no WhatsApp. | `metrics_dashboards.md` |
| **Monkey-patch** | Técnica | Alterar comportamento em tempo de execução. | `test_chaos_break.js` |
| **moveToActive** | Código | Passo interno BullMQ: espera → processamento. | `findings.md` |
| **MRL** | Sigla | Matryoshka Representation Learning. | `04_inteligencia_artificial_local.md` |

### N

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **N8N** | Plataforma | Plataforma de automação open-source self-host. | `n8n_advanced.md` |
| **N8N v3.0** | Plataforma | Versão que removeu npm global. | `03_docker_devops.md` |
| **Network bridge** | Infra | Driver de rede Docker que isola contêineres. | `docker-compose.yml` |
| **NicoChat** | Plataforma | Plataforma WhatsApp omnichannel. | `nicochat_whatsapp.md` |
| **NicoTools** | Plataforma | Extensões do NicoChat. | `nicochat_whatsapp.md` |
| **Nodemon** | Código | Tool que reinicia o Node ao detectar mudança. | `package.json` |
| **No-Code** | Automação | Construção sem código (n8n, Make). | `AGENTS.md` |
| **Nomic-embed-text** | Plataforma | Modelo de embeddings (768 dim). | `04_inteligencia_artificial_local.md` |
| **Noeviction** | Código | Política Redis que não despeja (obrigatória p/ BullMQ). | `02_contingencia_filas.md` |
| **Nonce** | Código | Identificador único por evento que bloqueia replay. | `ATUALIZACOES.md` |
| **npm** | Sigla | Gerenciador de pacotes do Node. | `package.json` |
| **NPS** | Sigla | Net Promoter Score — satisfação semanal. | `100_oportunidades_negocios.md` |
| **NullPool** | Código | Config de ORM que delega pooling ao Supavisor. | `100_oportunidades_hi.md` |
| **Nuvemshop** | Plataforma | Plataforma de e-commerce. | `05_playbooks_ecommerce_crm.md` |

### O

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **OAuth** | Sigla | Protocolo de autorização (credenciais Google p/ n8n). | `n8n_advanced.md` |
| **Obliterate / drain** | Código | Comandos BullMQ para limpar fila. | `test_chaos_break.js` |
| **Ollama** | Plataforma | Inferência LLM local. | `04_inteligencia_artificial_local.md` |
| **Offline Queue** | Código | Enfileirar comandos quando Redis está fora. | `findings.md` |
| **Onboarding** | Negócio | Fluxo de boas-vindas pós-compra. | `04_playbooks_infoprodutos.md` |
| **Omnichannel** | Automação | Atendimento multicanal. | `nicochat_whatsapp.md` |
| **OOM (Out of Memory)** | Sigla | Erro fatal ao esgotar memória. | `findings.md` |
| **OpenAI / ChatGPT** | Plataforma | Provedor LLM. | `prompt_engineering_bible.md` |
| **Opt-in (24h)** | Negócio | Autorização de envio de templates. | `04_playbooks_infoprodutos.md` |
| **ORM** | Sigla | Object-Relational Mapping — mapeia objetos a SQL. | `01_arquitetura_banco_dados.md` |
| **Outbox pattern** | Código | Gravar primeiro localmente, depois enviar. | `ATUALIZACOES.md` |

### P

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Palavra-chave** | Automação | Trigger por texto. | `manychat_instagram.md` |
| **Payload** | Automação | Conteúdo de dados de uma mensagem/evento. | `worker.js`, `dlq.js` |
| **PDV** | Sigla | Ponto de Venda. | `100_oportunidades_negocios.md` |
| **Persona canônica** | CÉREBRO | Perfis da Bíblia (Thiago, Mariana, Carlos, etc.). | `INDEX.md` |
| **Pg-promise** | Plataforma | Driver Postgres para Node. | `01_arquitetura_banco_dados.md` |
| **PgBouncer** | Infra | Pooler Postgres. | `01_arquitetura_banco_dados.md` |
| **PGP** | Sigla | Pretty Good Privacy — criptografia a nível de coluna. | `100_oportunidades_hi.md` |
| **pg_stat_activity** | Código | View Postgres de auditoria de conexões ativas. | `01_arquitetura_banco_dados.md` |
| **pgvector** | Plataforma | Extensão vetorial do Postgres. | `04_inteligencia_artificial_local.md` |
| **pgvector/pgvector:pg16** | Infra | Imagem Docker Postgres com pgvector. | `03_docker_devops.md` |
| **PII** | Sigla | Personally Identifiable Information — dados pessoais. | `logger.js` |
| **PII Masking** | Técnica | Substituir dados sensíveis por marcador antes de logar. | `logger.js` |
| **Pipedrive** | Plataforma | CRM. | `05_playbooks_ecommerce_crm.md` |
| **Pipeline** | Negócio | Funil visual de vendas. | `crm_automated.md` |
| **Plugins (Claude Code)** | Ferramenta | Pacotes de recursos/skills/hooks. | `claude_code_engineering.md` |
| **Poll / polling** | Código | Checar estado em intervalos. | `test_chaos_break.js` |
| **Política de observação** | CÉREBRO | Regra do que e como monitorar no MAIN BRAIN. | `ATUALIZACOES.md` |
| **Ponytail** | CÉREBRO | 3º lobo do FGSS Brain — YAGNI radical. | `AGENTS.md` |
| **Pool Size formula** | Técnica | (Cores × 2) + 2 — dimensionamento de pool. | `01_arquitetura_banco_dados.md` |
| **Pooling de Conexões** | Técnica | Gestão de pool via Supavisor/PgBouncer. | `01_arquitetura_banco_dados.md` |
| **PostgreSQL / Postgres** | Infra | Banco relacional open-source. | `ATUALIZACOES.md` |
| **P.R.O.M.P.T.** | Técnica | Framework Persona/Roteiro/Modelo/Panorama/Transformar. | `prompt_engineering_bible.md` |
| **Preflight** | Técnica | Verificação pré-vôo antes de agir. | `AGENTS.md` |
| **Preflight Search / Web Search** | CÉREBRO | Busca web sobre stack/APIs antes de codar. | `AGENTS.md`, `README.md` |
| **Prepared statements** | Código | SQL pré-compilado; proibido em Transaction Mode. | `01_arquitetura_banco_dados.md` |
| **Prisma** | Plataforma | ORM Node/TS. | `01_arquitetura_banco_dados.md` |
| **probe.ping()** | Código | Ping de preflight via cliente Node. | `test_chaos_break.js` |
| **processorPath** | Código | Path do processador sandboxed do Worker. | `02_contingencia_filas.md` |
| **Projeto piloto** | CÉREBRO | Primeiro projeto conectado ao MAIN BRAIN (7 dias). | `PENDENCIAS.md` |
| **Psycopg3** | Plataforma | Driver Postgres para Python. | `01_arquitetura_banco_dados.md` |

### Q

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Quarentena** | CÉREBRO | Rejeição sem armazenar o conteúdo. | `ATUALIZACOES.md` |
| **Queue** | Código | Classe BullMQ que enfileira jobs. | `test_recovery_flow.js` |
| **QueueEvents** | Código | Classe BullMQ que emite eventos (completed/failed). | `test_recovery_flow.js` |
| **Query Rewriter** | Técnica | Reescrita de query quando nenhum chunk qualifica. | `04_inteligencia_artificial_local.md` |

### R

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **RAG** | Sigla | Retrieval-Augmented Generation — enriquecer LLM com busca externa. | `FGSS_BRAIN_MASTER_PROTOCOL.md` |
| **Randomizador** | Automação | Variação aleatória de mensagens. | `manychat_instagram.md` |
| **Rate Limit** | Código | Limite de requisições por janela de tempo. | `worker.js` |
| **RDB (Redis)** | Infra | Snapshot binário do Redis. | `100_oportunidades_hi.md` |
| **REDACT_LGPD_COMPLIANT** | Código | Marcador que substitui campo sensível mascarado. | `logger.js` |
| **rede_cerebro** | Infra | Rede Docker isolada do ecossistema. | `03_docker_devops.md` |
| **Redis** | Infra | Banco em memória chave-valor. | `worker.js`, `docker-compose.yml` |
| **redis-cli ping** | Infra | Comando que testa se Redis responde. | `findings.md` |
| **Redis Lock distribuído** | Técnica | Trava transacional para concorrência. | `100_oportunidades_hi.md` |
| **redis:7-alpine** | Infra | Imagem Docker Redis leve. | `docker-compose.yml` |
| **REINDEX INDEX CONCURRENTLY** | Código | Reindexação sem downtime. | `01_arquitetura_banco_dados.md` |
| **Re-normalização vetorial** | Técnica | Re-normalização pós-fatia para fidelidade cosseno. | `04_inteligencia_artificial_local.md` |
| **removeOnComplete** | Código | Auto-limpeza de jobs concluídos (count/age). | `02_contingencia_filas.md` |
| **removeOnFail** | Código | Auto-limpeza de jobs falhos (count/age). | `02_contingencia_filas.md` |
| **Retainer** | Negócio | Mensalidade recorrente de manutenção. | `02_estrategia_comercial.md` |
| **Retry / retentativa** | Automação | Tentar de novo após falha. | `worker.js` |
| **Retry exponencial** | Técnica | Retentativas com espera crescente exponencialmente. | `ATUALIZACOES.md` |
| **retryStrategy** | Código | Função que define quanto esperar antes de reconectar. | `dlq.js` |
| **Router (Make)** | Automação | Módulo de roteamento no Make. | `make_advanced.md` |
| **Roteador de Intenções** | Técnica | LLM rápido que decide se precisa de retrieval. | `04_inteligencia_artificial_local.md` |
| **route_task.py** | Arquivo | Script de classificação de risco de tarefa. | `AGENTS.md` |
| **RLS (Row Level Security)** | Sigla | Segurança por linha no Postgres. | `ATUALIZACOES.md` |
| **Rolling update** | Infra | Deploy sem downtime via Docker. | `03_docker_devops.md` |
| **rpush / lrange / del / quit** | Código | Comandos Redis: lista push/ler/deletar/fechar. | `dlq.js` |

### S

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **SAC** | Sigla | Serviço de Atendimento ao Consumidor. | `05_playbooks_ecommerce_crm.md` |
| **Sandboxed Processors** | Técnica | BullMQ rodando job em processo Node filho. | `02_contingencia_filas.md` |
| **Sandbox-First** | CÉREBRO | Pilar 3 — isolar chaves `_TEST` de `_LIVE`. | `README.md` |
| **scaffold_project.py** | Arquivo | CLI que gera esqueleto de nova automação. | `tools/scaffold/` |
| **Scheduling (Make)** | Automação | Agendamento no Make. | `make_advanced.md` |
| **SDR** | Sigla | Sales Development Rep — prospecção ativa. | `luke_sdr_agents.md` |
| **Self-Consistency** | Técnica | Gerar múltiplas versões e selecionar a mais consistente. | `prompt_engineering_bible.md` |
| **Sequências (Manychat)** | Automação | Sequências de automação. | `manychat_instagram.md` |
| **SET NX EX** | Código | Bloqueio atômico Redis com expiração p/ idempotência. | `02_contingencia_filas.md` |
| **Set (comparação)** | Código | Estrutura sem duplicatas — usada para auditar DLQ. | `test_chaos_break.js` |
| **Set Variable / Multiple / Sleep / Parse Phone** | Automação | Tools do Make. | `make_advanced.md` |
| **Shiny Object Syndrome** | Conceito | Dispersão entre novidades. | `claude_code_engineering.md` |
| **Shopify** | Plataforma | Plataforma de e-commerce. | `05_playbooks_ecommerce_crm.md` |
| **SIGINT / SIGTERM** | Sigla | Sinais de encerramento (Ctrl+C / terminação). | `worker.js` |
| **Skills (Claude Code)** | Ferramenta | Receitas reutilizáveis em `.md`. | `claude_code_engineering.md` |
| **Sintetizador LLM** | Técnica | Geração final baseada estritamente em evidências. | `04_inteligencia_artificial_local.md` |
| **Slicing dinâmico** | Técnica | Corte das primeiras N dimensões do vetor. | `04_inteligencia_artificial_local.md` |
| **Snapshot / delta** | CÉREBRO | Snapshot = foto; delta = diferença (correto p/ custo). | `PENDENCIAS.md` |
| **Soft-deletes via triggers** | Técnica | Exclusão lógica via trigger de banco. | `100_oportunidades_hi.md` |
| **SPIN Selling** | Negócio | Framework Situação/Problema/Implicação/Necessidade. | `02_estrategia_comercial.md` |
| **SQLite** | Infra | Banco relacional embutido. | `ATUALIZACOES.md` |
| **Stack trace** | Código | Rastro da pilha de chamadas em erro. | `dlq.js` |
| **Staged job / stalledInterval** | Código | Job que parou de progredir; BullMQ checa e recupera. | `test_chaos_break.js` |
| **Staging-First** | Infra | Pipeline Local → Staging → Production. | `03_docker_devops.md` |
| **Stderr / stdout** | Infra | Saídas padrão: erros / normal. | `logger.js` |
| **Stdlib** | Técnica | Biblioteca padrão da linguagem (ex: `fs` no Node). | `AGENTS.md` |
| **Story Trigger** | Automação | Gatilho por menção/resposta a story. | `manychat_instagram.md` |
| **Stripe** | Plataforma | Gateway de pagamento. | `04_playbooks_infoprodutos.md` |
| **Supabase** | Infra | Backend-as-a-Service sobre Postgres. | `PENDENCIAS.md` |
| **Supabase Edge Functions** | Infra | Funções serverless na borda da Supabase. | `AGENTS.md` |
| **Supavisor** | Infra | Pooler do Supabase. | `01_arquitetura_banco_dados.md` |
| **System Prompt** | Técnica | Define papel/tom/regras antes da resposta. | `prompt_engineering_bible.md` |
| **System Prompt** | — | — | — |

### T

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Tabela de Decisão** | CÉREBRO | Trade-offs entre 2-3 abordagens. | `AGENTS.md` |
| **Taxa de Implementação (Setup)** | Negócio | Cobrança única de implementação. | `02_estrategia_comercial.md` |
| **Telemetria** | CÉREBRO | Coleta automática de métricas e custos. | `README.md` |
| **Templates (Make)** | Automação | Export/import de cenários. | `make_advanced.md` |
| **Templates de Mensagem** | Automação | Modelos aprovados pela Meta (Utility/Marketing/Auth). | `api_oficial_descomplicado.md` |
| **Tenant / Tenant ID** | Código | Isolamento de cliente em multi-tenant. | `01_arquitetura_banco_dados.md` |
| **test_chaos_break.js** | Arquivo | Teste de quebra física massivo. | `src/test_chaos_break.js` |
| **test_recovery_flow.js** | Arquivo | Teste de contingência (1 job → DLQ + LGPD). | `src/test_recovery_flow.js` |
| **Text-embedding-3-large** | Plataforma | Modelo de embeddings OpenAI (MRL). | `04_inteligencia_artificial_local.md` |
| **Thundering herd** | Técnica | Quando muitos processos retomam ao mesmo tempo. | `02_contingencia_filas.md` |
| **Timeout** | Código | Tempo máximo de espera antes de desistir. | `test_recovery_flow.js` |
| **Token** | Automação | Credencial secreta de acesso a API. | `logger.js` |
| **Token Bucket** | Código | Algoritmo de rate limit com tokens que se replenam. | `worker.js` |
| **Tríade de Eficiência** | CÉREBRO | Custo Operacional × Qualidade × Robustez. | `README.md` |
| **Tríade de Valor** | CÉREBRO | Equilíbrio Custo vs Robustez vs Simplicidade. | `AGENTS.md` |
| **Trigger nodes (n8n)** | Código | Nodes que iniciam workflow. | `n8n_advanced.md` |
| **Twilio** | Plataforma | BSP/provedor cloud. | `01_fundacoes_tecnicas.md` |

### U

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **UNNICHAT** | Plataforma | Plataforma de fluxos/CRM WhatsApp. | `crm_automated.md` |
| **unhandledRejection / uncaughtException** | Código | Promessas/erros sem handler. | `test_chaos_break.js` |
| **Utility Template** | Automação | Categoria de template WhatsApp (notificações). | `api_oficial_descomplicado.md` |

### V

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **Variáveis com chaves (`{{var}}`)** | Técnica | Placeholders dinâmicos reutilizáveis. | `prompt_engineering_bible.md` |
| **Variáveis de Sistema (S) / Contato / Bot** | Automação | Tipos de variável NicoChat. | `nicochat_whatsapp.md` |
| **VECTOR(768) / VECTOR(256)** | Código | Tipo de coluna vetorial pgvector. | `04_inteligencia_artificial_local.md` |
| **vector_cosine_ops** | Código | Operador de distância cosseno no índice HNSW. | `04_inteligencia_artificial_local.md` |
| **VLAEG** | Sigla/CÉREBRO | Visão, Link, Arquitetura, Estilo, Gatilho. | `AGENTS.md` |
| **Volume (docker)** | Infra | Armazenamento persistente do contêiner. | `docker-compose.yml` |
| **VPS / Vercel** | Infra | Ambientes de deploy. | `HANDOFF.md` |
| **VS Code** | Plataforma | Editor + extensão Claude Code. | `claude_code_engineering.md` |

### W

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **WhatsApp Business API** | Automação | API oficial Meta. | `api_oficial_descomplicado.md` |
| **WhatsApp Cloud API** | Automação | Versão cloud da API oficial. | `automation-manifest.json` |
| **Webhook** | Automação | URL que recebe notificações HTTP de eventos. | `index.js` |
| **WooCommerce** | Plataforma | E-commerce WordPress. | `05_playbooks_ecommerce_crm.md` |
| **Workflow Flow (NicoChat)** | Automação | Tipo de fluxo principal no NicoChat. | `nicochat_whatsapp.md` |
| **WMS** | Sigla | Warehouse Management System. | `100_oportunidades_hi.md` |
| **Wati** | Plataforma | BSP de WhatsApp. | `01_fundacoes_tecnicas.md` |

### Y / Z

| Termo | Cat | Definição curta | Onde |
|---|---|---|---|
| **YAGNI** | Sigla | "You Aren't Gonna Need It" — não construir o não-pedido. | `AGENTS.md` |
| **Zaia** | Plataforma | Plataforma de agentes de IA. | `zaia_agents.md` |
| **Zero-Shot Prompting** | Técnica | Instrução direta sem exemplos. | `prompt_engineering_bible.md` |

---

## §2 — Índice por Categoria

### 📁 Arquivos / Módulos / Docs
`AGENTS.md` · `ATUALIZACOES.md` · `automation-manifest.json` · `automation-manifest-schema.json` · `DESCOBERTAS.md` · `dlq.js` · `dlq_fallback.jsonl` · `fgss-brain.json` · `HANDOFF.md` · `index.js` · `INDEX.md` · `INDEX_HI.md` · `logger.js` · `PENDENCIAS.md` · `scaffold_project.py` · `test_chaos_break.js` · `test_recovery_flow.js` · `worker.js` · `docs/bible/` (5 caps G-T-M) · `docs/bible/advanced/` (12 playbooks) · `docs/bible_hi/` (5 caps H-I) · `docs/100_oportunidades_*.md`

### 💻 Conceitos de Código
`Attempts` · `auth.uid()` · `Backoff` · `backoff.type` · `BullMQ` · `Concurrency` · `defaultJobOptions` · `DLQ` · `DLQ dual` · `Event Listener` · `Exit code` · `Express` · `Fila` · `gen_random_uuid()` · `Graceful Shutdown` · `Health Check` · `Idempotência` · `Job` · `Limiter` · `lock heartbeat` · `moveToActive` · `maxRetriesPerRequest` · `maxStalledCount` · `Noeviction` · `Nonce` · `NullPool` · `Obliterate` · `Offline Queue` · `Outbox pattern` · `Payload` · `Poll` · `prepared statements` · `processorPath` · `Queue` · `QueueEvents` · `REINDEX CONCURRENTLY` · `removeOnComplete/Fail` · `retryStrategy` · `rpush/lrange/del/quit` · `Sandboxed Processors` · `SET NX EX` · `Set` · `Stalled job` · `Stack trace` · `Token Bucket` · `VECTOR(n)` · `vector_cosine_ops` · `Worker`

### 🛠️ Técnicas / Padrões
`Agentic RAG` · `Alucinação` · `Append-only` · `AST` · `Auditoria de integridade` · `Chaos Engineering` · `Circuit Breaker` · `Circuit Breaker estados` · `Contrato antes de código` · `Cosine distance` · `CoT` · `Determinístico` · `Estímulo Direcional` · `Exponential Backoff with Jitter` · `Fallback` · `Fallback dual` · `Few-Shot` · `First Principles` · `Grader` · `Halfvec quantization` · `HNSW` · `Idempotency Key` · `Index Warming` · `IVFFlat` · `Jitter` · `Kill mid-run` · `LangGraph-style` · `Matryoshka/MRL` · `Monkey-patch` · `PII Masking` · `Pool Size formula` · `Pooling` · `P.R.O.M.P.T.` · `Preflight` · `Query Rewriter` · `Re-normalização vetorial` · `Redis Lock` · `Retry exponencial` · `Roteador de Intenções` · `Sandboxed Processors` · `Self-Consistency` · `Sintetizador LLM` · `Slicing dinâmico` · `Soft-deletes via triggers` · `Stdlib` · `System Prompt` · `Thundering herd` · `YAGNI` · `Zero-Shot`

### 🏗️ Infra / DevOps
`AOF` · `AWS Lambda` · `ChromaDB` · `CI/CD` · `CLI` · `Cloud Functions` · `ConsString` · `Contêiner` · `Docker` · `Docker Compose` · `Docker-First` · `Docker Secrets` · `docker exec/start/stop` · `EasyPanel` · `Heap (V8)` · `ioredis` · `Liveness Probe` · `MCP` · `Memgraph` · `Network bridge` · `nodemon` · `npm` · `NullPool` · `OOM` · `PgBouncer` · `pgvector:pg16` · `PostgreSQL` · `RDB` · `redis-cli ping` · `redis:7-alpine` · `rede_cerebro` · `RLS` · `Rolling update` · `Session Mode (5432)` · `SIGINT/SIGTERM` · `SQLite` · `Stderr/stdout` · `Staging-First` · `Supabase` · `Supabase Edge Functions` · `Supavisor` · `Transaction Mode (6543)` · `Volume` · `VPS/Vercel`

### 🔤 Siglas
`AEOT` · `AOF` · `ANVISA` · `API` · `AST` · `B2B` · `B2C` · `BACEN` · `BSP` · `CLI` · `CoT` · `CPL` · `CRM` · `D2C` · `DLQ` · `ERP` · `G-T-M` · `GDPR` · `H-I` · `HMAC-SHA256` · `HNSW` · `HTTP` · `IVFFlat` · `JSONL` · `JWT` · `LGPD` · `LLM` · `MCP` · `MRL` · `N8N` · `NPS` · `npm` · `NullPool` · `OAuth` · `OOM` · `ORM` · `PDV` · `PGP` · `PII` · `RAG` · `RDB` · `REST` · `RLS` · `SAC` · `SDR` · `SIGINT` · `SIGTERM` · `SQL` · `URL` · `VLAEG` · `WMS` · `YAGNI`

### 🧠 Ecossistema CÉREBRO
`4 Pilares` · `AEOT (3 Eixos)` · `Bíblia de Automação` · `Bíblia G-T-M` · `Bíblia H-I` · `Chairman de Automação` · `CÉREBRO` · `Classificação de Risco` · `Code Graph RAG` · `Coletor` · `Contratos Primeiro` · `Demanda` · `estimativa_custo` · `FGSS Brain` · `FGSS Loop` · `FGSS MAIN BRAIN` · `Filtro Lógico e Óbvio` · `Graphify` · `identificacao` · `Karpathy Guidelines` · `Lâmina de Contingência` · `Lâmina de Execução` · `Manifesto Unificado` · `Painel do Admin` · `Persona canônica` · `Ponytail` · `Política de observação` · `Preflight Search` · `Projeto piloto` · `Quarentena` · `route_task.py` · `Sandbox-First` · `Skill last30days` · `Snapshot/delta` · `Tabela de Decisão` · `Telemetria` · `Tríade de Eficiência` · `Tríade de Valor` · `VLAEG`

### 🔌 Ferramentas / Plataformas
`ActiveCampaign` · `Anthropic` · `Antigravity` · `Asaas` · `BotConversa` · `Cal.com/Calendly` · `Chatwoot` · `Clint` · `Cursor` · `Drizzle` · `EasyPanel` · `Eduzz` · `Evolution API` · `Flyway` · `Gemini` · `Google Calendar/Drive/Gmail/Sheets/Meu Negócio` · `GPT Maker` · `Hostinger/Hostgator` · `Hotmart` · `HubSpot` · `iFood` · `Leadlovers` · `Llama 3.1/3.3` · `Make` · `Manychat` · `n8n` · `NicoChat` · `NicoTools` · `Nomic-embed-text` · `Nuvemshop` · `Ollama` · `OpenAI/ChatGPT` · `pgvector` · `PgBouncer` · `Pipedrive` · `Prisma` · `psycopg3/pg-promise` · `Shopify` · `Stripe` · `Supavisor` · `Text-embedding-3-large` · `Twilio` · `UNNICHAT` · `Uchat` · `VS Code` · `Wati` · `WooCommerce` · `Zaia`

### 💼 Negócio / Automação
`Ancoragem` · `Aprovação tácita` · `Boleto` · `Carrinho Abandonado` · `Chargeback` · `Churn` · `Cross-sell` · `Default Reply` · `Disparo em Massa` · `Etiqueta/Tag` · `Evergreen` · `FAQ automatizado` · `ICP` · `Infoproduto` · `Iniciador de Conversa` · `Lançamento` · `Lista de Espera` · `Main Menu` · `NPS` · `Onboarding` · `Opt-in` · `Palavra-chave` · `PDV` · `Pipeline` · `Pix Copia e Cola` · `Retainer` · `Régua de acompanhamento` · `SAC` · `SDR` · `Sequências` · `SPIN Selling` · `Story Trigger` · `Taxa de Implementação` · `Templates de Mensagem` · `Tenant` · `Upsell` · `User Input` · `Webhook` · `WhatsApp Business API` · `Janela 24h`

### 🏷️ Tags de Pesquisa (grep targets)
`#BULLMQ-DLQ-FLOW` · `#CHAOS-DLQ-AUDIT` · `#CIRCUIT-BREAKER-PATTERN` · `#CLAUDE-CODE-COMMANDS` · `#CONTRATO-TEMPLATE` · `#CARRINHO-ABANDONADO` · `#DLQ-DUAL-CONTINGENCIA` · `#DOCKER-COMPOSE-SCAFFOLD` · `#IDEMPOTENCY-KEY-CHECK` · `#LGPD-LOG-MASKING` · `#MAKE-ROUTING-FILTERS` · `#N8N-CONTROL-NODES` · `#PGVECTOR-HNSW-INDEX` · `#PROMPT-STRUCTURE-PROMPT` · `#SPIN-SELLING-*` · `#SUPABASE-CONNECTION-PORTS` · `#ANCORAGEM-PITCH` · `#PIX-BOLETO-FOLLOWUP`

---

## §3 — Conceitos-chave para leitura rápida

> Para quem precisa entender o projeto em 2 minutos.

**O que o projeto faz:** Gere automações padronizadas (fila BullMQ + Redis) com
tolerância a falhas (DLQ dual) e conformidade LGPD (PII Masking), orquestradas
pelo ecossistema CÉREBRO e observadas pelo FGSS MAIN BRAIN.

**Diretriz-mestra (AEOT):**
1. **Horizonte Tecnológico Ativo** — Preflight Web Search por estado da arte.
2. **Prospecção de Estratégias Alternativas** — múltiplos caminhos arquiteturais.
3. **Equacionamento da Tríade** — Custo × Qualidade × Robustez.

**4 Pilares:**
1. **Manifesto Unificado** (`automation-manifest.json`) — metadados da automação.
2. **Lâmina de Contingência** — DLQ, retry, fallback (nada falha silenciosamente).
3. **Sandbox-First** — chaves `_TEST` vs `_LIVE` separadas.
4. **CLI de Scaffold** — `scaffold_project.py` gera novas automações no padrão.

**Fluxo padrão de uma automação:**
1. Webhook externo bate em `index.js` (Express) → enfileira job.
2. `worker.js` (BullMQ) consome a fila com rate limit (Token Bucket).
3. Se falha: retry com backoff exponencial + jitter.
4. Se falha definitivo: vai para DLQ dual (Redis → JSONL se Redis cair).
5. Logs são mascarados (PII → `[REDACT_LGPD_COMPLIANT]`) em `logger.js`.

**As 2 Bíblias:**
- **G-T-M (Go-To-Market):** playbooks de negócio (fundações, estratégia, locais, infoprodutos, ecommerce/CRM) + 12 avançados (n8n, Make, Manychat, NicoChat, Zaia, GPT Maker, CRM, API WhatsApp, métricas, SDR, Claude Code, prompts).
- **H-I (High Intelligence):** caps técnicos profundos (banco/pgvector, contingência/filas, Docker/DevOps, IA local, resiliência/segurança).

---

> *Mantenha este glossário atualizado ao introduzir novos termos. Cada termo
> novo em código/arquitetura/playbook deve ganhar uma linha aqui.*
