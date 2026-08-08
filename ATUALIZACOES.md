# Atualizações do ecossistema CÉREBRO

Registro cronológico das mudanças concluídas. Pendências abertas ficam somente
em `PENDENCIAS.md`.

## 29 de julho de 2026

### FGSS MAIN BRAIN

- Criada a central independente em `FGSS MAIN BRAIN/`.
- Implementados registro de projetos, coletores, demandas e políticas.
- Implementados eventos imutáveis, validação de campos e deduplicação.
- Implementado envelope HMAC-SHA256 com chave derivada por coletor, timestamp,
  nonce e proteção contra repetição.
- Implementados gateway HTTP local, limites de corpo/frequência e quarentena sem
  armazenamento do conteúdo rejeitado.
- Implementado coletor Python com outbox, retry exponencial e dead-letter.
- Implementada fundação PostgreSQL/Supabase com oito tabelas, três views, RLS e
  funções estreitas para o backend.
- Implementadas classificação de qualidade dos dados e exclusão de custos não
  confiáveis das visões financeiras.
- Criados gateway e painel do MAIN BRAIN no Admin do Felipe Portfolio.
- Protegida a telemetria legada de custos com segredo e confirmação
  `gravado:true`.
- Adicionado cache de cinco minutos à leitura de provedores de custo.
- Separados custos por período para impedir totais enganosos.
- Desativada a geração de métricas sociais aleatórias.
- Validação concluída: 30 testes do motor, 8 testes da integração e build de
  produção do Portfolio.

### Commits do Felipe Portfolio

- `f970a4a` — protege telemetria de custos e separa períodos.
- `1987939` — registra o roteiro de ativação do MAIN BRAIN.

### Documentação

- Atualizado `FGSS MAIN BRAIN/docs/PORTFOLIO-INTEGRATION.md` com o gateway real e
  as condições de ativação.
- Criados, na raiz de `CÉREBRO`, registros separados de pendências, descobertas,
  atualizações e manuais de uso.
- Criados `AGENTS.md` e `README.md` na raiz para que pessoas e LLMs encontrem a
  ordem de leitura e escolham o cérebro correto sem duplicar protocolos.

## 30 de julho de 2026

### FGSS brain — carregamento efetivo do protocolo

- O lobo 2 do `FGSS_BRAIN_MASTER_PROTOCOL.md` foi repontado de `andrej-karpathy/`
  para `~/.claude/skills/karpathy-guidelines/SKILL.md`. O antigo alvo é um agente
  de persona, não um protocolo de disciplina de código (ver `DESCOBERTAS.md`).
  Adicionado bloco "Não confundir" no próprio protocolo para o erro não se repetir.
  Comprovação: leitura dos dois arquivos e do frontmatter (`source: community`,
  `name: andrej-karpathy`) do arquivo de 54 KB.
- Criado hook `SessionStart` em `~/.claude/settings.json` que injeta o
  `FGSS_BRAIN_MASTER_PROTOCOL.md` em toda sessão do Claude Code. Antes disso, o
  protocolo só entrava em contexto se alguém abrisse o arquivo manualmente.
  Comprovação: comando do hook executado isoladamente devolveu 5.970 bytes com
  exit 0. Ainda **não** foi observado disparando numa sessão nova — a confirmação
  real é a próxima sessão exibir o protocolo junto do aviso do Ponytail.
- Backup do arquivo alterado em `~/.claude/settings.json.bak-20260730`.

## 7 de agosto de 2026

### Instalação da skill Last 30 Days
- Clonado o repositório oficial `mvanhorn/last30days-skill` no diretório `/Users/felipegouveia/Developer/CÉREBRO/last30days-skill`.
- Realizada a análise e a instalação cirúrgica da skill dentro do ecossistema CÉREBRO copiando a pasta `/skills/last30days` para `/Users/felipegouveia/Developer/CÉREBRO/AGENTES_SKILLS/skills/last30days`.
- Criado backup seguro da versão anterior obsoleta em `/Users/felipegouveia/Developer/CÉREBRO/AGENTES_SKILLS/skills/last30days.old`.
- Comprovação: Executado o preflight do script Python 3.12 `/Users/felipegouveia/Developer/CÉREBRO/AGENTES_SKILLS/skills/last30days/scripts/last30days.py` usando o interpretador do sistema `/Users/felipegouveia/.local/bin/python3.12`, retornando `Status: Ready to research with safe defaults` e exit code 0.

## 8 de agosto de 2026

### Ativação do FGSS MAIN BRAIN e Ajustes de Configuração
- **FGSS MAIN BRAIN & Supabase:**
  - Gerado um segredo criptográfico seguro de 32 bytes hex (`ce731ddf...`) e configurada a variável `FGSS_MAIN_BRAIN_SECRET` no `.env` local do Felipe Portfolio.
  - Aplicada a migração SQL do Supabase [`001_fgss_main.sql`](file:///Users/felipegouveia/Developer/CÉREBRO/FGSS MAIN BRAIN/supabase/001_fgss_main.sql) no projeto de produção do Felipe Portfolio (`aifgtfwiqodikqhytcuh`).
  - Executadas com sucesso as consultas do validador SQL [`verify_fgss_main.sql`](file:///Users/felipegouveia/Developer/CÉREBRO/FGSS MAIN BRAIN/supabase/verify_fgss_main.sql) na instância Supabase, retornando zero linhas/anomalias.
  - Cadastrado localmente (SQLite) e no banco remoto (Supabase) o contrato do primeiro projeto piloto (`loja-a`), contendo coletor (`collector-loja-a`), demanda (`custo-verificado`) e a política de observação (`policy-loja-a-custo`).
  - Comprovado o fluxo localmente rodando 30 testes unitários e de integração de telemetria no motor do MAIN BRAIN (exit 0) e 11 testes unitários (`test:main-brain`) no repositório do Felipe Portfolio (exit 0).
- **Ajuste de Hooks do Claude:**
  - Corrigido o aninhamento inválido de hooks no arquivo [`~/.claude/settings.json`](file:///Users/felipegouveia/.claude/settings.json), movendo os comandos `cat` diretamente para o array de `SessionStart`, garantindo que a injeção automática do protocolo mestre funcione nas próximas sessões.
- **Segurança e Versionamento:**
  - Criado arquivo `.gitignore` robusto no diretório de configuração do Claude (`~/.claude/`) para ignorar credenciais, histórico de sessão e caches caso o diretório seja versionado.
  - Adicionado `ignore = dirty` no arquivo `.gitmodules` do cérebro para evitar que o sync de parâmetros dinamizados suje a árvore do git de submódulos como o `code-graph-rag`.

## 9 de agosto de 2026

### Alinhamento e Definição de Arquitetura do Chairman de Automação
- **Definição da Função de Chairman:** Consolidado o papel estratégico do agente como "Chairman de Gestão de Automação" para todas as áreas e nichos de negócios.
- **Protocolo AEOT (Adaptabilidade Estratégica e Otimização Tridimensional):** Definidos os três eixos de tomada de decisão (Horizonte Tecnológico Ativo, Prospecção de Estratégias Alternativas e a Equação Custo x Qualidade x Robustez).
- **Proposta dos 4 Pilares do Cérebro:** Mapeados e alinhados os pilares de sustentação (Manifesto unificado de automações, Lâmina de contingência/Dead Letter Queue, Isolamento Sandbox-First e CLI de Scaffold).
- **Ingestão de Conhecimento e Download:** Criado e executado o script de raspagem scratch `download_and_extract.py` para baixar via HTTPS (autenticado por `gcloud`) e extrair textos de 88 arquivos do Google Drive.
- **Escrita da Bíblia de Automação:** Desenvolvidos 5 capítulos temáticos e o `INDEX.md` mapeador de rotas dentro da pasta `FGSS Gestor de Automacao/docs/bible/`.
- **Governança Inicial do Projeto:** Criados os arquivos `README.md` (pilares e diagrama) e `AGENTS.md` (regras e persona do Chairman) na raiz do repositório `FGSS Gestor de Automacao`.
- **Ingestão Avançada (Bloco 2):** Criados e executados os scripts scratch `count_gdrive_files.py` e `download_markdown.py` para varredura recursiva e download paralelo de 1.269 arquivos markdown (12.1MB) do segundo bloco do Drive.
- **Geração de Playbooks Avançados:** Processadas as lições individuais em 12 playbooks avançados específicos de ferramentas (como n8n, Make, Zaia, NicoChat, Manychat, Claude Code) salvos em `docs/bible/advanced/` e mapeados no `INDEX.md`.
- **Sanitização de Referências de Marca:** Criado e executado o script scratch `sanitize_and_synthesize.py` para remover referências proprietárias (ex: Luciana Papini, Mestres da Automação) e substituí-las por nomenclaturas genéricas (ex: Chairman de Automação, Formação em Gestão de Automação) em todos os md da Bíblia.
- **Comprovação:** Ingestão concluída com sucesso via tarefas de background paralelas (exit code 0), playbooks gerados, sanitizados via script python regex local, e integridade de conteúdo livre de termos proprietários comprovada por `grep`.

## Regra de manutenção

Cada atualização deve dizer o que mudou e como foi comprovada. Não declare
produção ativa quando algo foi validado apenas localmente.




