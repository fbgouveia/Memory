# Pendências do ecossistema CÉREBRO

Atualizado em: 17 de agosto de 2026.

Este arquivo registra apenas trabalho ainda aberto relacionado ao `FGSS brain` e
ao `FGSS MAIN BRAIN`. Histórico concluído deve ir para `ATUALIZACOES.md`.
Constatações importantes devem ir para `DESCOBERTAS.md`.

## FGSS MAIN BRAIN — ativação

- [x] Preencher `SUPABASE_SERVICE_ROLE_KEY` somente no backend do Felipe
  Portfolio. (Confirmado: já estava preenchido no .env local.)
- [x] Gerar e preencher `FGSS_MAIN_BRAIN_SECRET` com pelo menos 32 caracteres.
  (Gerado segredo seguro de 32 bytes hex no .env local do Felipe Portfolio.)
- [ ] Configurar essas mesmas variáveis no ambiente real do Admin. O `.env`
  local não configura VPS, Vercel ou Docker automaticamente.
- [x] Conferir a identificação do projeto Supabase antes de qualquer alteração.
  (Confirmado o ID: aifgtfwiqodikqhytcuh para o Felipe Portfolio.)
- [x] Aplicar `FGSS MAIN BRAIN/supabase/001_fgss_main.sql`. (Aplicado com sucesso!)
- [ ] Validar `FGSS MAIN BRAIN/supabase/002_gauntlet_observability.sql` em um
  PostgreSQL descartável, confirmar novamente o projeto Supabase e somente então
  aplicar a migração; o Docker local estava desligado nesta implementação.
- [x] Executar `FGSS MAIN BRAIN/supabase/verify_fgss_main.sql`; todas as consultas
  devem retornar zero linhas. (Verificado: todas retornaram zero linhas.)
- [x] Registrar o primeiro projeto, coletor, demanda e política de observação.
  (Registrado loja-a e política correspondente localmente e no Supabase.)
- [x] Provar o fluxo ponta a ponta com evento válido, duplicado, adulterado,
  vencido, nonce repetido e campo não autorizado. (Testado localmente com 30
  testes passando, e testado no backend do portfolio com 11 testes passando.)
- [ ] Conectar apenas um subprojeto piloto e observar por sete dias antes de
  replicar para os demais.
- [ ] Definir retenção, agregação e alertas usando o volume real do piloto.
- [ ] Converter snapshots cumulativos de custo em deltas antes de tratá-los como
  custo canônico. Nunca somar snapshots repetidos.

## FGSS brain — Motor de Validação (anel 5)

- [ ] Decidir se o hook `Stop` entra no `~/.claude/settings.json`. Adiado
  deliberadamente em 20/08/2026: é a única peça que muda o comportamento de todas
  as sessões em todos os projetos. Hoje o motor só roda quando chamado à mão. Se
  entrar, exige prova em sessão NOVA, nunca na que o configurou.
- [ ] Usar o motor em trabalho real por alguns dias antes de apertar regras. Os
  invariantes atuais podem se mostrar barulhentos — em especial a exigência de
  aprovação para qualquer termo de `high_risk_terms`, que inclui "segurança".
- [ ] Reinstalar o plugin `fgss-brain` para os clientes lerem a `SKILL.md` nova.
  A cópia em `~/.claude/plugins/cache/fgss-brain/0.4.0/` ainda tem o texto antigo,
  que manda rodar só o `route_task.py`.
- [ ] Ligar os Gestores ao `fgss_collector.py`. O `verify` já emite telemetria
  sanitizada, mas continua sendo o único produtor de eventos do ecossistema.
- [x] ~~Registro de capacidades em dado, não em prosa (anel 4)~~ — **corrigido em 20/08:
  já existe.** `Felipe Portfolio/server/agentRegistry.js` declara 7 agentes com `manager`,
  `workflows`, `inputs`, `outputs`, `dependencies`, `limits` e `success`, e o
  `validateAgentRecord()` obriga todos os campos. Eu classifiquei isso como trabalho futuro
  sem ter procurado antes. O que falta não é o registro — é medir o `success` que ele já
  declara: os 7 estão em `state: 'discovered'`, ou seja, nenhum verificado. Spec da medição
  em `Felipe Portfolio/.agent/tasks/saude-dos-agentes-spec.md`.
- [ ] Anéis 3 e 4 do diagrama (políticas de acesso,
  roteamento de mensagens entre Gestores) permanecem não construídos, por decisão
  de escopo. Anéis 1 e 2 (topologia, contratos, consenso) seguem fora do horizonte.

## FGSS brain

- [x] Verificar a integração global de Claude e Gemini nos clientes instalados.
  (Claude Code 2.1.233 e Gemini/Antigravity 1.1.12 comprovados em processos
  novos em 17/08/2026.)
- [x] Reinstalar/atualizar o plugin canônico `fgss-brain` v0.4.0 no Codex e
  revalidá-lo em sessão nova depois da adição do gauntlet-loop e da política
  persistente de grafos. (Concluído em 17/08/2026.)
- [ ] Revalidar numa próxima sessão nova o catálogo de skills do Codex: nesta
  sessão ele anunciou o caminho removido `fgss-brain/0.2.0`, embora a instalação
  ativa e íntegra esteja em `fgss-brain/0.4.0`. Corrigir o índice/cache se o
  caminho antigo voltar a ser anunciado.
- [ ] Manter `fgss-brain.json` como fonte única dos parâmetros e executar os
  validadores sempre que ele mudar.
- [x] Confirmar, numa sessão NOVA do Claude Code, que o hook `SessionStart` criado
  em 30/07 realmente injeta o protocolo mestre. (Validada no Claude Code
  2.1.233 a estrutura atual: evento `SessionStart` com contêiner aninhado
  `hooks` e ações internas; a sessão nova carregou o plugin e executou o hook.)
- [ ] Decidir se o `andrej-karpathy/SKILL.md` (persona, 54 KB) permanece no
  `FGSS brain` ou migra para as skills sob demanda. Hoje ele fica no repositório
  do cérebro mas está explicitamente fora do FGSS Loop.

## Versionamento do CÉREBRO

- [x] A raiz do `CÉREBRO` não é repositório git. (Confirmado: já existe um
  repositório git local funcional na raiz.)
- [x] `~/.claude` também não é versionado e agora contém o hook `SessionStart`
  do protocolo mestre. Exige `.gitignore` cuidadoso antes de qualquer
  versionamento — há credenciais no diretório. (Criado um arquivo .gitignore
  robusto em ~/.claude para proteger credenciais e cache.)
- [x] O submódulo `code-graph-rag` dentro de `FGSS brain` está `-dirty` (alterações
  não commitadas dentro dele). Origem desconhecida, anterior a 30/07. (Configurado
  `ignore = dirty` no .gitmodules para que o sync de runtime configs não suje a árvore.)

## Fonte detalhada do Portfolio

As pendências completas da integração com o Admin também estão registradas em:

`../Felipe Portfolio/.agent/tasks/HANDOFF_maquina-autonoma.md`, seção
“FGSS MAIN BRAIN — ativação e primeiro projeto”.

## Configuração do Last 30 Days

- [ ] (Opcional) Instalar utilitários CLI extras para ampliar canais de pesquisa da skill `last30days` (`arxiv-pp-cli`, `digg-pp-cli`, `techmeme-pp-cli`, `trustpilot-pp-cli`, `yt-dlp`).

## FGSS Gestor de Inteligência Competitiva Aplicada

- [x] Estabelecer a fundação do gestor como vertente de memória da FGSS.io,
  separando identidade do gestor do dossiê do concorrente. (Concluído em
  16/08/2026: `AGENTS.md`, `HANDOFF.md`, `foundation/AGENTS.md` e
  `research/AGENTS.md` criados na raiz do gestor.)
- [x] Renomear diretório do dossiê de `thefounderos/` para `FGSS OS/` em disco
  e no git, removendo qualquer referência ao nome do concorrente em paths de
  arquivo. (Concluído em 16/08/2026.)
- [x] Criar dossiê do 2º concorrente (CrewAI) sob `competitors/crewai/`.
  (Concluído em 16/08/2026: site 449 páginas, repo MIT 26.369 arquivos,
  ecossistema 10 records, 11 knowledge files, 6 strategy files, audit
  reportado, commits `a58d6a4` + `a3b0259` pushed.)
- [x] Corrigir bug do coletor `crewai/tools/collect_public.py`: 9 URLs
  colidiam no mesmo path `home.html` por ignorar host no filename. (Concluído
  em 16/08/2026: `local_path()` agora prepends host; `canonical()` normaliza
  scheme; site re-coletado; audit 0 erros.)
- [x] Corrigir `crewai/tools/audit.py` LICENSE check: aceita MIT via permission
  text OU título literal. (Concluído em 16/08/2026.)
- [x] Destilar padrões visuais e de interação do TheFounderOS em
  `FGSS OS/knowledge/site/VISUAL_AND_INTERACTION_PATTERNS.md` (1053 linhas:
  organograma vivo, live map/brain graph, dashboards Kanban com gates, thin
  skin architecture, demo mode fixtures+shim, cinto de ferramentas rotativo).
  Mapeado a F1-F5. (Concluído em 16/08/2026.)
- [ ] Destilar lacunas de absorção do TheFounderOS identificadas em 16/08/2026:
  JSON-LD/SEO, preços/garantias, BENNETT OS/Heuresis, 4 workspaces/personas,
  14+ OS licenciados não capturados. Sem rede externa; usar HTMLs já em disco.
- [ ] **Implementar visuais interativos do TheFounderOS no FGSS.io** (F1-F5),
  adaptando princípios, não copiando expressão. Detalhado em
  `FGSS OS/knowledge/site/VISUAL_AND_INTERACTION_PATTERNS.md`:
  - **Organograma vivo** (F1 Invariant Engine): árvore da estrutura da
    empresa com estados/transições visualizados, flip de camadas, nós
    expandíveis. Não copiar paleta copper/blue nem branding Heuresis.
  - **Live map / brain graph** (F1): grafo de nós representando o
    conhecimento e estado do negócio, interativo.
  - **Dashboards Kanban com gates** (F3 Cockpit de exceções): board/lane
    com indicador visual de gate para ações que precisam de aprovação;
    toda métrica abre lineage.
  - **Arquitetura "thin skin"** (F5 Blueprint SDK): UI separada de lógica
    de negócio; zero gates no front, tudo vem do backend.
  - **Demo mode "fixtures + shim"** (F5): demos parecem vivas mas são
    snapshots congelados, **claramente rotuladas como demo**, não fingindo
    ser produção. Mutations no-op em demo mode.
  - **Cinto de ferramentas rotativo** (F5): carrossel horizontal mostrando
    as ferramentas/dispositivos disponíveis.
  - Bloqueado até repo `Felipe-Portfolio` acessível.
- [ ] Avançar F1-F5 como spec executável (schemas JSON + testes de contrato)
  pronto para importar quando repo `Felipe-Portfolio` acessível. (Detalhes em
  `foundation/AGENTS.md`.)
- [ ] Amplir allowlist do `FGSS OS/collect_public.py` para `/robots.txt`,
  `/sitemap.xml`, `/manifest.json`, `/.well-known/security.txt` e os 14
  `*-os` licenciados — somente na próxima coleta autorizada.
- [ ] Coletor `FGSS OS/collect_public.py` não recebeu as correções do CrewAI
  (path collision: host no filename; LICENSE check flexível). Bugs conhecidos.
- [ ] Excluir metadados do sistema operacional (`.DS_Store`, `Thumbs.db` e
  equivalentes) dos geradores de inventário dos dossiês antes da próxima
  regeneração; comparar o resultado com a baseline e não promover mudanças
  apenas de timestamp.
- [ ] Localizar e autorizar o repositório real do `FGSS.io`; então implementar
  primeiro o Invariant Engine e o Capability Registry, com testes de contrato,
  antes de qualquer reprodução de interface. **Repo localizado: é privado em
  `fbgouveia/Felipe-Portfolio` (GitHub), em outro computador. Precisa de
  auth via gh CLI ou token para ler conteúdo.**
- [ ] Iniciar primeira pesquisa original em `research/` (mercado, tecnologia,
  plano de negócios). Protocolo definido em `research/AGENTS.md`.
- [ ] Validar ICP, escopo, pricing e capacidade das quatro ofertas iniciais por
  três pilotos autorizados, com exemplos sanitizados, critérios de aceite,
  esforço, margem e decisões influenciadas; até lá são hipóteses comerciais.
- [ ] Definir contrato de confidencialidade, segregação entre clientes,
  retenção, descarte e SLA antes de receber evidência privada externa.
- [ ] Preservar a baseline TheFounderOS de 15/08/2026 antes de nova coleta e
  iniciar série temporal de commits, releases, issues, ofertas, preços, reviews
  e denominadores usando `FGSS OS/tools/compare_manifests.py`.
- [ ] Validar voz de cliente/economia somente com fontes legítimas e consentidas;
  não inferir receita por seguidores, stars, `joined` ou member count.
- [ ] Definir auth, tenant isolation, consent ledger, secrets, SBOM, SLO,
  evidence graph, DLQ/replay e rollback como gates do produto FGSS.
- [ ] Decidir estrutura quando o 2º concorrente chegar: hoje `FGSS OS/` abriga
  o dossiê do primeiro concorrente; futuros concorrentes podem virar pacotes
  sob `competitors/<nome>/`, sem alterar caminhos antes de atualizar manifestos
  e documentação.

## FGSS Gestor de Automacao
- [x] Criar o `README.md` explicativo da arquitetura na pasta `FGSS Gestor de Automacao`. (Concluído)
- [x] Criar o arquivo `AGENTS.md` definindo o comportamento do Chairman de Automação. (Concluído)
- [x] Definir o schema JSON padrão do `automation-manifest.json`. (Concluído)
- [x] Implementar a estrutura inicial para a Lâmina de Contingência (DLQ e erros). (Concluído)
- [x] Criar o utilitário CLI para scaffold de novas automações. (Concluído)
- [x] Construir testes de quebra de infraestrutura simulando quedas de banco e Redis para auditar a integridade de gravação no DLQ do worker. (Concluído em 09/08/2026: DLQ dual Redis+JSONL implementada; `test_chaos_break.js` aprova 200 jobs com `docker stop` forçado do Redis mid-run — 0 perdidos, 0 duplicatas, PII mascarado; fallback JSONL comprovado com Redis down. Prova em `ATUALIZACOES.md`.)
- [x] **Ajustes Críticos de Infraestrutura & Paths**:
  - [x] Corrigir caminhos hardcoded desatualizados em `tools/scaffold/scaffold_project.py` e `tools/validation/validate_manifests.py` (trocar `/Users/felipegouveia/Developer/CÉREBRO/...` pelo path dinâmico/correto `/Users/felipe/Developer/Memory/...`). (Concluído em 13/08/2026: resolvido dinamicamente via `os.path.abspath`).
  - [x] Conectar endpoint `/webhooks/receber` da integração `aut-teste-contingencia` à fila BullMQ em `src/index.js` (resolver TODO de enfileiramento). (Concluído em 13/08/2026: enfileiramento BullMQ + trava de idempotência Redis `SETNX`).
  - [x] Invocar `dlq.close()` durante o Graceful Shutdown do `src/worker.js`. (Concluído em 13/08/2026).
  - [x] Atualizar `validate_manifests.py` para usar `os.walk` em vez de `os.listdir` (permitindo varredura em sub-estruturas). (Concluído em 13/08/2026).
- [x] **Evolução Técnica 2026 (Durable Execution & Governança)**:
  - [x] Implementar middleware de **Idempotência por Chave (`X-Idempotency-Key` + Redis `SETNX`)** no webhook e propagar no scaffold. (Concluído em 13/08/2026).
  - [x] Construir ferramentas de absorção rápida de conhecimento, glossário estilizado em HTML e simulador de exames interativo por níveis. (Concluído em 14/08/2026: glossario.html e glossario.teste.html criados com 1.000 questões únicas, modo punitivo por vidas, 250+ tooltips explicativos, Canvas Visual n8n/Make com Multi-Branching e Paralelismo, Inspetor de Payload JSON, Áudio Sintetizado Web Audio API, Timer de Exame 45s, Atalhos de Teclado, Manual de Campo com busca instantânea por dores de clientes, Exportação Markdown e Certificado Digital).
  - [x] Implementar o **FGSS Assessor Consultivo & Copiloto Comercial (`assessor_comercial.html`)**: ferramenta executiva dedicada para reuniões de 30 minutos com clientes, contendo Comparador Antes/Depois (As-Is vs To-Be), Calculadora de ROI e Abandono de Checkout, Auditoria de Score de Maturidade (0 a 100), Exportador de Blueprints JSON para n8n/Make, Simulador de Carga/Stress Test e Gerador de Propostas Comerciais com precificação recomendada. (Concluído em 14/08/2026: gerado via `tools/build_assessor_comercial.py`).
  - [ ] Executar o **Protocolo de Auto-Remodelação Mensal (Vanguard Cycle)** no dia 14 de cada mês: auditar APIs integradas (Meta, iFood, WhatsApp, LLMs), atualizar o dicionário de siglas e re-pesquisar ferramentas no catálogo (`catalog/tools.json`).
  - [ ] Implementar padrão **Circuit Breaker** no `worker.js` para consumo seguro de APIs externas.
  - [ ] Incorporar suporte a **BullMQ Flows (`FlowProducer`)** no scaffold para sub-jobs ordenados e duráveis.
  - [ ] Integrar rastreamento **OpenTelemetry (`bullmq-otel`)** para propagação de `trace_id` do receptor HTTP até o worker.
  - [ ] Adicionar modelo de **Thin Agent Step** no CLI de scaffold (execução determinística com chamadas de IA isoladas, passagem por referência de IDs e log de consumo de tokens).
  - [x] Atualizar o CLI de scaffold para gerar `.env.example` e `.gitignore` por padrão em novas automações. (Concluído em 13/08/2026).

## FGSS Gestor de Mídias Sociais

- [ ] Restaurar de uma fonte autorizada os 692 arquivos brutos ausentes dos 718
  registros de `knowledge/INVENTORY_LUANA_ALL_TEXT.json`, atualizar os caminhos
  absolutos herdados de `/Users/felipe/Developer/Memory` e repetir
  `python3 tools/preflight_check.py`. Os 36 testes locais passam, mas a auditoria
  de hashes não pode aprovar enquanto os arquivos inventariados não existirem.

## FGSS Gestor de Webdesign

- [ ] Antes de revisar um projeto real, complementar o pack inicial com a
  documentação oficial atual da stack escolhida; o material WebHub foi
  classificado como instrução de curso, não como fonte oficial vigente.
- [ ] Executar os cinco gates no primeiro site irmão, anexando evidências
  sanitizadas de staging, formulários, consentimento/analytics, rollback,
  DNS/TLS, backup/restauração, monitoramento e aprovação humana.

Ao fechar um item, marque-o aqui e registre a prova em `ATUALIZACOES.md`.


## FGSS Gestor de Midia YouTube — Operação, Engenharia e Ferramentas 2026

- [x] Corrigir bug de transcrição Whisper (ffmpeg não propagado ao subprocess). (Concluído em 09/08/2026)
- [x] Transcrever 102 MP3s restantes (138/138 transcrições, zero erros). (Concluído em 09/08/2026)
- [x] Extrair texto dos 17 PDFs + 4 XLSX + 1 DOCX anexos (22/22 extraídos). (Concluído em 09/08/2026)
- [x] Consolidar knowledge base canônica em `findings.md` com 18 frameworks. (Concluído em 09/08/2026)
- [x] **Fase 1: Compilar as 2 Bíblias Canônicas de YouTube** (Concluído em 14/08/2026):
  - [x] Bíblia G-T-M (`docs/bible/`): `INDEX.md`, `01_modelos_canais_dark.md`, `02_pesquisa_nicho_outliers.md`, `03_roteirizacao_retencao_loops.md`, `04_titulos_thumbnails_ctr.md`, `05_edicao_sop_operacao.md`, `06_monetizacao_afiliados_shopping.md`.
  - [x] Bíblia High Intelligence (`docs/bible_hi/`): `INDEX_HI.md`, `01_algoritmo_politicas_anti_slop.md`, `02_youtube_data_api_quotas.md`, `03_youtube_analytics_reporting_api.md`, `04_contingencia_dlq_automacao.md`, `05_seguranca_direitos_autoriais_strikes.md`.
- [x] **Fase 2: Catálogo de 100 Oportunidades de Canais** (Concluído em 14/08/2026: 100 nichos com RPMs, modelos e estratégias anti-slop em `docs/100_oportunidades_canais.md` e blueprint de engenharia em `docs/100_oportunidades_canais_hi.md`).
- [x] **Fase 3: CLI de Scaffold de Automações YouTube** (Concluído em 14/08/2026: `tools/scaffold/scaffold_yt.py` e `tools/validation/validate_manifests.py` gerando microsserviços com DLQ Dual, Rate Limiting, Idempotência SHA-256 e teste de resiliência aprovado na integração piloto `aut-yt-piloto-resumable`).
- [x] **Fase 4: Glossário Técnico e Dojo de Treinamento Técnico com Simulador de Exames** (Concluído em 14/08/2026: `glossario.html` e `glossario.teste.html` compilados via `tools/build_quiz_youtube.py` com 1.000 questões únicas balanceadas em 5 níveis, 3 vidas, timer de 45s, canvas visual, inspetor de nós e certificado).
- [x] **Fase 5: Cockpit do Assessor Estratégico de Canais YouTube** (Concluído em 14/08/2026: `assessor_youtube.html` compilado via `tools/build_assessor_youtube.py` para diagnósticos As-Is vs. To-Be, Calculadora de ROI e Vazamento de Visualizações, Scorecard 0-100 e exportação de proposta em 1 clique).
- [x] **Engenharia Multimodal & Assinatura Criativa** (Concluído em 14/08/2026: `docs/bible_hi/06_pipeline_multimodal_automacao_video.md` com matriz de ferramentas por especialidade, calibração acústica a -3dB, Ken Burns determinístico em FFmpeg e SOP de montagem).
- [x] **Branding Guidelines, Character Sheets & Presets de Motion Design** (Concluído em 14/08/2026: `schemas/channel-brand-kit-schema.json` e `docs/bible_hi/07_branding_guidelines_character_sheets_motion.md` com consistência visual `--cref`, Voice Identity Locking e 5 presets de motion por macro-nicho).
- [x] **Automação de Browser Playwright no YouTube Studio** (Concluído em 14/08/2026: `docs/bible_hi/08_automacao_browser_playwright_youtube_studio.md` e `tools/playwright/youtube_studio_uploader.js` com upload headless, Ad Suitability / Selo Verde, Smart Chapters, Telas Finais, YouTube Shopping e Pinned Comment com UTM).
- [x] **Governança Avançada, Multi-Áudio, CTR Auto-Healer & Disaster Recovery** (Concluído em 14/08/2026: `docs/bible_hi/09_governanca_avancada_multi_audio_ctr_healer_disaster_recovery.md` com faixas multi-idioma EN/ES/PT no mesmo Video ID, A/B Test Swapper automático pós-24h, Aba Comunidade, AI Community Care e Cold Storage).
- [x] **Diretorias Especializadas de Qualidade, Graph RAG & O Fator UAU Canônico** (Concluído em 14/08/2026: `docs/bible_hi/10_diretorias_qualidade_graph_rag_fator_uau.md` com 4 Diretores autônomos, Memória Relacional em Grafo e esteira Waterfall com Quality Gates Score $\ge 90/100$).
- [x] **Planilhas-Mestres por Canal & Data Lake Consolidador de 50+ Canais** (Concluído em 14/08/2026: `tools/spreadsheets/generate_channel_sheet.py` gerando `templates/CANAL_MESTRE_PILOTO_TEMPLATE.xlsx` com 6 abas completas e `templates/PLANILHA_MESTRE_CONSOLIDADOR_50_CANAIS.xlsx` com 3 abas de BI para a pasta do Google Drive `1SyuOCcqFi9M8m80joMEDfD2WEtG_-Zw5`, documentado no Capítulo 11 da Bíblia H-I).
- [x] **Arquitetura Multimodal Google, Mitigação de Riscos & Operação Lean** (Concluído em 14/08/2026: `docs/bible_hi/12_arquitetura_multimodal_google_mitigacao_riscos_lean.md`, `tools/multimodal/prompt_sanitizer.py` e `tools/spreadsheets/provision_channel_folder.py` com sanitizador semântico anti-bloqueio, provisionador de árvore completa de canal no Google Drive e governança de escala Lean em 2 fases).
- [x] **Dicionário de Cinematografia, Repertório de Estilos Visuais & Engenharia de Thumbnails** (Concluído em 14/08/2026: `docs/bible_hi/13_dicionario_cinematografia_prompts_visuais_thumbnails.md` documentando os 8 estilos visuais consagrados no YouTube, matriz óptica de sensores/lentes/luzes, automação de motion em código React via Remotion/HyperFrames e as 7 regras de CTR científico de thumbnails).
- [x] **Sub-workflows n8n com Arquitetura Dual-Agent & Graph RAG** (Concluído em 14/08/2026: `docs/bible_hi/14_n8n_subworkflows_dual_agent_graph_rag_fator_uau.md` e `tools/n8n/n8n_dual_agent_node_template.json` implementando o padrão de nó Executor + Supervisor com injeção de Graph RAG por canal, loops de auto-refinamento e Quality Gate Fator UAU $\ge 90$).
- [x] **Portões de Aprovação Human-in-the-Loop (HITL), Telegram Cockpit & Planilhas** (Concluído em 14/08/2026: `docs/bible_hi/15_human_in_the_loop_approval_gates_telegram_cockpit.md` e atualização de `tools/spreadsheets/generate_channel_sheet.py` com colunas de portões HITL, estilos de cinematografia, DRE e regeneração dos templates `.xlsx` para o Google Drive `1SyuOCcqFi9M8m80joMEDfD2WEtG_-Zw5`).
- [x] **Cérebro de Design, Mineração de Outliers & Engenharia Comercial de YouTube Shopping** (Concluído em 14/08/2026: criação da pasta `design/` com especificações técnicas e automação de branding no YouTube Studio via Playwright `design/playwright/playwright_branding_automator.js`, Capítulo 16 de Outliers/Shorts Reframe e Capítulo 17 de YouTube Shopping / Print-on-Demand).
- [x] **Critérios Canônicos de Sucesso, Valuation de Canal & Marca de Culto** (Concluído em 14/08/2026: `docs/bible_hi/18_criterios_sucesso_canal_valuation_cult_brand.md` documentando os 5 pilares canônicos de saúde operacional/financeira, estratégia de Marca de Culto com mineração de bordões, Ponte Físico-Digital com panfletos QR Code e metodologia de Valuation para M&A de 24x a 36x lucro líquido).
- [x] **Estratégia English-First Global, Stack fal.ai (Flux) & Operações Avançadas** (Concluído em 14/08/2026: `docs/bible_hi/19_stack_fal_ai_english_first_operacoes_avancadas.md` estabelecendo o foco 100% em mercados Tier-1 com RPM de $18–$45 USD, integração da API do fal.ai Flux Schnell a $0,003/imagem, postagens na Aba Comunidade 24h antes, legendas Whisper .vtt, AI comment care nas primeiras 2h e tratado W-8BEN).
- [x] **Auditoria de Pré-Voo, Segregação de `.env` & Provisionador Expandido** (Concluído em 14/08/2026: criação do `.env.example` mestre, CLI de diagnóstico `tools/preflight_check.py` auditando schemas/templates/binários e atualização de `tools/spreadsheets/provision_channel_folder.py` com 9 subpastas e isolamento Sandbox-First).
- [x] **Piloto YouTube 15/08/2026 — dry-run:** Redis 7.2.5 local com AOF instalado
  e fluxo HTTP → BullMQ → worker comprovado, incluindo autenticação e duplicata.
- [ ] **Piloto YouTube 15/08/2026 — criar canal sandbox:** ainda não existe nenhum
  canal criado. Criar manualmente um canal exclusivo para testes, registrar seu
  ID (`UC...`) e confirmar explicitamente o alvo antes de configurar OAuth ou
  realizar um único upload privado. Não usar canal pessoal ou de produção.

## FGSS Gestor de Mídias Sociais

- [x] Copiar e verificar a integridade da base `Respondedor_PROJECT MANAGER` (`1GZdTjlFHqTZ5-iwJ-eGRxtyzfoLmHozV`). (Concluído em 14/08/2026: 79/79 arquivos locais com SHA-256 válido; isso não comprova licença nem fidelidade das sínteses.)
- [x] Copiar e verificar a integridade textual da base `knowledge_base_luana` (`1ySpu1rKqlklzc8Cxy3SO0_6PpoZW3XDC`). (Concluído em 14/08/2026: 718/718 arquivos textuais com SHA-256 válido; binários, licença e procedência por afirmação não estão comprovados.)
- [x] Implementação do Creator Engine & Roteirizador Multirrede 2026 (`src/creator/content_generator.py` e `tools/generate_campaign.py`). (Concluído em 14/08/2026: geração automatizada de pacotes de Reels 15s com Safe Zone 670px e áudio -14 LUFS, Carrossel 4:5, TikTok SEO, YouTube Shorts, LinkedIn PDF 1080x1080, Pinterest 2:3, X Thread e Sequência SPE em 5 passos).
- [x] Atualização e Sincronização Total das 3 Aplicações HTML (`assessor_midias_sociais.html`, `glossario.html` com 48 termos e `glossario.teste.html` com 1.000 questões em 5 níveis). (Concluído em 14/08/2026).
- [x] Revalidar documentação oficial da plataforma escolhida e implementar um
  único adaptador em dry-run antes de criar fila ou abstração multirrede.
  (Concluído localmente em 14/08/2026: fontes oficiais rastreadas em
  `docs/RESEARCH_2026.md`; adaptador Instagram implementado e testado apenas
  com mock. Versão, OAuth, cotas e resposta real aguardam piloto sandbox.)
- [x] Definir política de consentimento e aprovação humana para publicação.
  (Concluído localmente em 14/08/2026: consentimento obrigatório no `live`,
  restrição de ambiente e aprovação vinculada ao hash exato do payload.)
- [ ] Produzir knowledge packs separados por plataforma e capacidade para
  publicação, analytics, respostas, DMs, moderação e anúncios, sempre com
  documentação primária, lifecycle e critérios de prova para o executor.
- [x] Executar a tranche inicial de knowledge packs para leitura/analytics e
  publicação em Meta, TikTok, LinkedIn, X, Pinterest, YouTube e Google Business
  Profile. (Matriz salva em
  `docs/KNOWLEDGE_PACKS_READ_ANALYTICS_PUBLISH_2026.md`; respostas, DMs,
  moderação e anúncios continuam abertas.)
- [x] Executar a tranche inicial de knowledge packs para respostas, DMs,
  moderação e anúncios. (Matriz salva em
  `docs/KNOWLEDGE_PACKS_REPLY_DM_MODERATION_ADS_2026.md`; fechamento por produto,
  versão e acesso do executor continua aberto.)
- [ ] Validar `ReviewSubmission` e `ReviewDecision` com submissões sanitizadas
  de pelo menos dois projetos executores reais antes de criar novas abstrações.
- [ ] Validar o manifesto MCP neutro com um servidor sintético sem Meta em pelo
  menos dois clientes independentes; `.mcp.json` do Claude Code é adaptador,
  não contrato canônico.
- [ ] Produzir knowledge packs oficiais separados para Meta Graph API e Meta
  Marketing API por capacidade, incluindo permissões, app review, versões,
  rate limits, webhooks e política de dados antes de avaliar acesso real.
- [ ] Auditar código, licença, dependências, telemetria e superfície de
  ferramentas de qualquer servidor comunitário “Meta MCP” antes de permitir
  instalação em um projeto executor.
- [ ] Concluir a auditoria do repositório oficial XMCP da X: fixar
  commit/dependências, gerar digest/SBOM e provar allowlist somente de leitura.
- [ ] Revalidar periodicamente se TikTok, LinkedIn, Pinterest, YouTube e Google
  Business Profile passaram a oferecer MCP oficial; hoje o estado é apenas
  “não localizado na pesquisa oficial de 15/08/2026”.
- [ ] Fechar a prova externa da auditoria P0 do MCP: negociação de versão em
  dois hosts, schemas de entrada/saída com respostas reais, quota/custo e
  reconciliação por capability. O threat model, classificação de dados,
  paginação e política de confirmação já foram documentados localmente.
- [ ] Pesquisar P1 antes de produção: upload de mídia, webhooks com replay,
  retenção/residência/deleção, lifecycle/rollback e teste de carga em dois hosts.
- [x] Definir matriz de risco e política de decisão do Chairman por gate e
  capacidade, incluindo critérios de `blocked_external` e rejeição. (Salvo em
  `docs/CHAIRMAN_RISK_DECISION_MATRIX.md`.)
- [ ] **P0 — 15/08/2026:** Registrar autoria, licença/direitos de uso e rastreabilidade por afirmação
  das sínteses derivadas dos dois acervos.
- [x] **P1 — 15/08/2026:** Restaurar/corrigir o caminho do
  `FGSS brain/tools/route_task.py`. (Reconciliado em 17/08/2026: o roteador
  existe no caminho canônico, responde a `--help` e integra a suíte de 28 testes
  aprovada do FGSS Brain v4.)

## FGSS Gestor de Motion Design

- [x] Criar fundação mínima de Chairman com missão, arquitetura, contratos,
  protocolo, revisor e preflight. (Concluído em 15/08/2026; técnicas de motion
  permanecem fora do repositório.)
- [x] Receber e estruturar knowledge packs externos e a proficiência da memória.
  (Concluído em 15/08/2026: 3 packs, 34 claims, 21 fontes, 7 competências, 36
  perguntas com cobertura integral, 20 avaliações de recuperação, 8 pipelines
  estruturados, paridade canônica e camada explicativa humano-primeiro nos 3
  HTMLs; rubrica local 10/10 e preflight com 11 schemas e 28 testes.)
- [ ] Receber submissão sanitizada de executor real. **Aceite:**
  `targetGate: sandbox_review`, `realE2EProven: true`, evidência
  `kind: real_e2e` em `environment: sandbox`, artefato identificável,
  `executorRef`, timestamp, SHA-256 e `sanitized: true`.
- [ ] Validar recuperação de falha em host remoto. **Aceite:** falha
  reproduzida, retry classificado, entrada em DLQ/quarentena e reconciliação sem
  duplicar o job.
- [ ] Confirmar dois hosts/agentes antes de abstrair o fluxo. **Aceite:** duas
  submissões independentes, com `executorRef` distintos e decisões hashadas.
- [x] Criar prompt inicial autocontido para a primeira sessão do gestor.
  (Salvo em `FGSS Gestor de Motion Design/PROMPT_INICIAL.md`.)
