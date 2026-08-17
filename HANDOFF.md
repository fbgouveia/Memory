# Handoff - FGSS Gestor de Automação

Documento de transição e histórico de decisões do projeto.

---

## 📅 9 de agosto de 2026

### 1. Pendências (Abertas)
- [x] Definir o schema JSON padrão do `automation-manifest.json`.
- [x] Implementar a estrutura inicial para a Lâmina de Contingência (DLQ e erros).
- [x] Criar o utilitário CLI para scaffold de novas automações.
- [ ] Construir o primeiro microsserviço de teste real no Docker testando quebras de fila.

### 2. Atualizações (Concluídas na sessão)
- **Definição da Função de Chairman:** Consolidado o papel estratégico do agente como "Chairman de Gestão de Automação" para todas as áreas e nichos de negócios.
- **Protocolo AEOT (Adaptabilidade Estratégica e Otimização Tridimensional):** Definidos os três eixos de tomada de decisão (Horizonte Tecnológico Ativo, Prospecção de Estratégias Alternativas e a Equação Custo x Qualidade x Robustez).
- **Proposta dos 4 Pilares do Cérebro:** Mapeados e alinhados os pilares de sustentação (Manifesto unificado de automações, Lâmina de contingência/Dead Letter Queue, Isolamento Sandbox-First e CLI de Scaffold).
- **Ingestão de Conhecimento e Download:** Criado e executado o script de raspagem scratch `download_and_extract.py` para baixar via HTTPS (autenticado por `gcloud`) e extrair textos de 88 arquivos do Google Drive.
- **Escrita da Bíblia de Automação G-T-M:** Desenvolvidos 5 capítulos temáticos e o `INDEX.md` mapeador de rotas dentro da pasta `FGSS Gestor de Automacao/docs/bible/`.
- **Governança Inicial do Projeto:** Criados os arquivos `README.md` (pilares e diagrama) e `AGENTS.md` (regras e persona do Chairman) na raiz do repositório `FGSS Gestor de Automação`.
- **Ingestão Avançada (Bloco 2):** Criados e executados os scripts scratch `count_gdrive_files.py` e `download_markdown.py` para varredura recursiva e download paralelo de 1.269 arquivos markdown (12.1MB) do segundo bloco do Drive.
- **Geração de Playbooks Avançados:** Processadas as lições individuais em 12 playbooks avançados específicos de ferramentas (como n8n, Make, Zaia, NicoChat, Manychat, Claude Code) salvos em `docs/bible/advanced/` e mapeados no `INDEX.md`.
- **Sanitização de Referências de Marca:** Criado e executado o script scratch `sanitize_and_synthesize.py` para remover referências proprietárias (ex: Luciana Papini, Mestres da Automação) e substituí-las por nomenclaturas genéricas (ex: Chairman de Automação, Formação em Gestão de Automação) em todos os md da Bíblia.
- **Catálogo de Oportunidades G-T-M:** Criado o documento `100_oportunidades_negocios.md` mapeando 100 nichos com dores e soluções baseadas na Bíblia Go-To-Market.
- **Escrita da Bíblia High Intelligence (H-I):** Desenvolvidos 5 capítulos temáticos avançados e o `INDEX_HI.md` mapeador dentro de `docs/bible_hi/`.
- **Catálogo de Oportunidades H-I:** Criado o documento `100_oportunidades_hi.md` mapeando 100 corporações/plataformas de escala com gargalos complexos de engenharia e soluções H-I.
- **Instrumentação do CLI de Scaffold e Schemas:** Criados o arquivo `automation-manifest-schema.json` na pasta `schemas/` e a ferramenta CLI `scaffold_project.py` na pasta `tools/scaffold/`. Instanciada a primeira integração de testes `aut-teste-contingencia` via terminal.

### 3. Descobertas
- **Processo Dinâmico de Pesquisa (Preflight):** Fixar um conjunto de perguntas-chave estático para autoatualização engessa a IA em padrões passados. A evolução rápida de APIs (como Gemini, OpenAI, n8n) exige queries de busca dinâmicas baseadas na interseção entre o escopo da tarefa e o horizonte tecnológico atual no início das sesões.
- **Governança de Automações:** Sem um manifesto unificado (`automation-manifest.json`), o crescimento do ecossistema de automações gera amnésia técnica e financeira. Toda nova automação passará a conter um manifesto de metadados próprio.
- **E-books vs. Resumos de Aulas (Extração de PDF):** Os e-books do material de treinamento do Mestres da Automação são PDFs de difícil extração de texto por `pypdf`. A ingestão foca nos resumos de aulas estruturados (88 arquivos válidos), que contêm 100% da matéria acadêmica, roteiros de reunião, checklists de implementação e a minuta do contrato de serviços.
- **Roteiro SPIN Selling e Modelo de Contrato:** Identificados e consolidados o roteiro de reunião baseado em SPIN Selling (com ramificações para infoprodutos e negócios locais) e o contrato de serviços de automação com isenções de responsabilidade para bloqueios de contas. Copiados como seções permanentes na Bíblia de Automação para acesso imediato.
- **Estrutura Modular da Formação (Bloco 2):** O segundo bloco de treinamento possui 1.860 arquivos organizados em 754 subpastas. Evidência: varredura recursiva completa via Drive API. Consequência: 1.269 arquivos markdown foram baixados e consolidados em 12 playbooks avançados de ferramentas na pasta `bible/advanced/` (ex: n8n, Make, Zaia, NicoChat, Manychat, Claude Code).
- **Claude Code como Acelerador:** O Claude Code atua como um assistente de desenvolvimento local e gerador de especificações, não como substituto de ferramentas de integração. Evidência: análise do material didático de Claude Code. Consequência: consolidação no playbook avançado de Claude Code.
- **Sanitização de Marca e Nomes Proprietários:** Identificadas e eliminadas as referências de nomes específicos (ex: Luciana Papini, Mestres da Automação) de todos os playbooks da Bíblia de Automação e substituídas por termos e placeholders genéricos adequados (ex: Chairman de Automação, Formação em Gestão de Automação). Evidência: varredura regex automatizada nos arquivos md da Bíblia. Consequência: a base de dados torna-se agnóstica de marca e protegida.
- **Catálogo de 100 Negócios e Oportunidades G-T-M:** Mapeamento completo de 100 nichos e suas respectivas dores operacionais/soluções Go-To-Market criados fisicamente no ecossistema. Evidência: compilação estruturada e contagem exata de 100 registros em docs. Consequência: disponibilização de um banco de prospecção imediato para equipes comerciais.
- **Catálogo de 100 Empresas e Oportunidades H-I:** Mapeamento de 100 corporações de setores regulados (fintechs, saúde, logística) com gargalos complexos de backend/infraestrutura e soluções High Intelligence. Evidência: compilação física estruturada de 100 registros. Consequência: suporte para vendas enterprise e arquitetura customizada.
- **Requisitos de n8n v3.0 (2026):** n8n descontinuará instalação via npm/npx global, tornando obrigatório o deploy conteinerizado via Docker. Todos os scaffolds futuros devem nascer baseados em contêineres.
- **Requisitos de Memória do Redis (BullMQ):** BullMQ requer obrigatoriamente a política `maxmemory-policy noeviction` no Redis para evitar a perda silenciosa de chaves de travas ou metadados de jobs ativos, necessitando de limpeza explícita no código cliente via `removeOnComplete` / `removeOnFail`.
- **Matryoshka Embeddings (MRL):** Busca vetorial local pode ser otimizada fatiando os vetores para 256/512 dimensões com re-normalização euclidiana no cliente, reduzindo o consumo de RAM em mais de 80% no Postgres/pgvector.
- **Princípio da Inteligência Embarcada:** A documentação teórica da agência é condensada ativamente através de validadores de schemas rígidos (JSON Schema) e automatização de pastas estruturadas (CLI de Scaffold), garantindo que as melhores práticas de resiliência e LGPD sejam seguidas por padrão sem inflar o volume de leitura (obesidade de conteúdo).

---

## 17 de agosto de 2026 — estado do ecossistema FGSS

### 1. Pendências abertas

- Configurar e validar o ambiente real do Admin para o MAIN BRAIN antes de
  qualquer ativação externa.
- Validar e aplicar conscientemente a migração
  `FGSS MAIN BRAIN/supabase/002_gauntlet_observability.sql`; ela ainda não foi
  aplicada em produção.
- Conectar somente um projeto piloto, observá-lo por sete dias e então definir
  retenção, agregação, alertas e conversão de snapshots de custo em deltas.
- Decidir o destino da persona extensa de Karpathy e manter
  `fgss-brain.json` como fonte única dos parâmetros de execução.
- Restaurar a fonte autorizada dos arquivos brutos ausentes do Gestor de
  Mídias Sociais e executar os gates reais no primeiro projeto de Webdesign.

### 2. Atualizações concluídas

- FGSS Brain v4 passou a manter grafos incrementais por projeto, disponíveis
  continuamente e executados de forma proporcional ao tamanho e ao impacto da
  tarefa.
- O gauntlet-loop condicional foi integrado ao Brain e sua telemetria
  sanitizada foi adicionada ao MAIN BRAIN, sem enviar prompts, código ou
  conteúdo das rodadas.
- O plugin canônico `fgss-brain` v0.4.0 foi instalado e comprovado em sessões
  novas do Codex, Claude Code e Gemini/Antigravity.
- Validação final: 28 testes aprovados no Brain e 39 testes aprovados no MAIN
  BRAIN, além dos validadores de configuração e dos manifestos Claude/Gemini.

### 3. Descobertas com consequência

- Disponibilidade constante de grafo não significa reconstrução constante: o
  estado `missing`, `stale` ou `ready` permite atualizar somente quando o
  roteamento justificar.
- Um pacote compartilhado pode atender diferentes LLMs se cada cliente tiver
  apenas seu manifesto/adaptador e todos apontarem para uma skill canônica.
- No Claude Code 2.1.233, `SessionStart` usa um contêiner de evento com a lista
  interna `hooks`; a prova deve sempre ser feita em processo novo.
- O MAIN BRAIN pode medir o gauntlet por métricas e vereditos sanitizados sem
  ultrapassar sua fronteira de observação nem comandar os agentes.

### 4. Versionamento e prova

- `FGSS brain`: commits `746e1c6` e `25a038f` — grafos persistentes, gauntlet,
  plugin multiplataforma e manifesto nativo do Claude.
- `FGSS MAIN BRAIN`: commit `b39f74c` — observabilidade sanitizada do
  gauntlet-loop.
- Nenhum `.env`, token, senha ou conteúdo de execução foi incluído nos commits.

---

## 17 de agosto de 2026 — encerramento de Inteligência Competitiva

### Pendências

- Excluir metadados do sistema operacional dos geradores de inventário antes
  da próxima regeneração e preservar a baseline ao comparar.
- Validar ICP, escopo, pricing e capacidade das ofertas por pilotos autorizados.
- Definir confidencialidade, segregação entre clientes, retenção, descarte e
  SLA antes de receber evidência privada externa.

### Atualizações

- Consolidado o posicionamento `services first`, o catálogo de serviços, quatro
  ofertas iniciais, roadmap e métricas de piloto do gestor.
- Handoff e plano CrewAI reconciliados com audit `pass`, seis entregas de
  estratégia, bugs históricos corrigidos e 2.318 referências externas.
- Fundação FGSS.io corrigida para declarar o repo privado como localizado, mas
  ainda não acessível neste ambiente; F1–F5 permanecem especificação.

### Descobertas

- `.DS_Store` alterou artificialmente um inventário regenerado; metadados do
  sistema operacional não podem compor evidência canônica.
- `audit: pass` prova consistência do snapshot, não capacidade em produção nem
  resultado comercial.
- O caminho comercial atual é serviço assistido seguido de pilotos; SaaS e
  plataforma dependem de implementação e prova.

### Prova

- Nenhuma coleta externa, login, banco, produção ou código de produto foi
  alterado neste encerramento.
- Commit documental: `9638a2d` — estratégia, handoffs e registros canônicos
  consolidados.
