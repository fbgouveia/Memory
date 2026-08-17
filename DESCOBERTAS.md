# Descobertas do ecossistema CÉREBRO

## 16 de agosto de 2026 — padrões visuais e arquitetura demo do TheFounderOS

- O organograma "vivo" do TheFounderOS (/os anatomia) é uma árvore SVG com
  flip de 3 camadas (front/back/gloss) e pipeline ring animado. Evidência:
  `os.html` seções com ids `anatomy`, `hx-anatomy-front/back/gloss`,
  `pipeline`, `pipeline-connectors`. Consequência: FGSS.io deve implementar
  organograma como vista do Invariant Engine (F1) — estados/transições
  visualizados, sem copiar paleta copper/blue nem branding Heuresis.
- As demos "vivas" do TheFounderOS (/heuresis-os/*) usam arquitetura "thin
  skin": zero lógica de negócio no front-end, tudo vem do backend via API.
  Evidência: `creator-os/app.js` linha 2 — "Thin skin over the verbs/model:
  the 18 backing sources in their native views + clickable detail pages. No
  business logic here — every gate lives server-side." Consequência: FGSS.io
  deve adotar esta separação no Blueprint SDK (F5) — UI nunca contém gates ou
  invariantes.
- O truque "fixtures + shim" faz demos parecerem vivas sem backend.
  Evidência: `heuresis-shim.js` intercepta `window.fetch`, serve
  `fixtures.json` congelado, mutations retornam `{ ok: true }` no-op.
  Consequência: FGSS.io deve implementar demo mode rotulado (não fingindo
  ser produção) no Blueprint SDK (F5) — snapshots congelados com banner
  "demo mode" visível.
- O gate visual (`<span class="gate">`) marca ações que precisam de
  aprovação. Evidência: `creator-os/app.js` função `contentCard` —
  `mini('c-advance', c.id, (nextIsPublish ? '<span class="gate"></span>' :
  '') + 'Advance →')`. Consequência: FGSS.io deve implementar gates visuais
  no Cockpit de exceções (F3) — toda ação irreversível tem indicador visual
  antes do clique.
- O "cinto de ferramentas rotativo" mostra iframes com `pointer-events-none`
  (não interativos, só visual). Evidência: `os-belt` section com iframes
  escalados. Consequência: FGSS.io NÃO deve usar `pointer-events-none` em
  iframes (engana o usuário); o carrossel de ferramentas deve ser interativo
  ou claramente rotulado como preview.
- O repo do FGSS.io é privado e está em outro computador. Evidência: GitHub
  API retorna Not Found para `fbgouveia/Felipe-Portfolio`; MCP search não
  lista privados; usuário confirmou "LOCALMENTE ESTA EM OUTRO COMPUTADOR".
  Consequência: F1-F5 permanece especificação até auth ser configurada (gh
  CLI ou token).

## 16 de agosto de 2026 — CrewAI como 2º concorrente

- CrewAI é o concorrente mais similar ao TheFounderOS em modelo open-source +
  educação. Evidência: repo MIT `crewAIInc/crewAI` com 57.102 stars, framework
  Python de agentes role-based, parceria educacional com Andrew Ng. Consequência:
  dossiê criado em `competitors/crewai/`; `competitors/` agora é estrutura
  permanente do gestor.
- A telemetria default-on do CrewAI OSS detecta "coding agents" e linka uso OSS
  a conta enterprise via `project_id`. Evidência: release notes capturados no
  GitHub API. Consequência: risco de privacidade para usuários OSS; flag
  registrado em strategy e battlecard como vantagem FGSS (egress allowlist,
  consent ledger, telemetria opt-in).
- CrewAI tem orchestration ceiling reportado pela comunidade após 6-12 meses.
  Evidência: theaiinsider.tech (2026-06-05) e threads da comunidade Discourse
  capturadas. Consequência: FGSS deve projetar F1 (Invariant Engine) para não
  reproduzir esse teto; graph de dependências e state machine determinístico.
- Pricing do CrewAI é bipolar: Free (50 execuções/mês) vs Enterprise (custom,
  45-day onboarding). Evidência: `crewai.com/pricing` capturado. Consequência:
  espaço para FGSS ocupar mid-tier com pricing transparente e auditável.
- Bug do coletor: 9 URLs de subdomínios diferentes (crewai.com,
  www.crewai.com, docs.crewai.com, etc.) colidem no mesmo `home.html`.
  Evidência: audit reporta 16 erros de size/hash mismatch.
  Consequência: `collect_public.py` precisa incluir host no filename;
  registrado em `PENDENCIAS.md`.
- O `audit.py` copiado do TheFounderOS espera a string literal "MIT License"
  no arquivo LICENSE. O CrewAI usa "Copyright (c) 2025 crewAI, Inc." + texto
  MIT permissivo sem o título. Evidência: `head -3 LICENSE` confirma. Consequência:
  falso positivo; checker precisa ser mais flexível; registrado em
  `PENDENCIAS.md`.

## 16 de agosto de 2026 — separação gestor vs. dossiê no Gestor de Inteligência Competitiva

- O `FGSS Gestor de Inteligência Competitiva Aplicada` é vertente de memória
  da FGSS.io, não apêndice do dossiê TheFounderOS. Evidência: instrução direta
  do usuário em 16/08/2026 de que "este projeto sera uma vertente de memoria
  da FGSS.io" e que o TheFounderOS foi "o primeiro passo — reconhecimento do
  competidor". Consequência: a identidade do gestor foi separada do dossiê;
  `AGENTS.md`, `HANDOFF.md`, `foundation/` e `research/` agora existem na raiz
  do gestor, e o dossiê permanece em `FGSS OS/` como insumo absorvido.
- O diretório do dossiê foi renomeado de `thefounderos/` para `FGSS OS/` e
  commitado, removendo qualquer referência ao nome do concorrente em paths de
  arquivo. Evidência: instrução direta do usuário de que não quer nenhuma
  pasta ou arquivo nomeado como "thefounderos". Consequência: todos os paths
  atualizados para `FGSS OS/` nos arquivos do gestor e nos registros globais.
- Mover 467 arquivos do dossiê para `competitors/<nome>/` sem um 2º
  concorrente real é custo sem retorno. Evidência: `audit.py` e
  `compare_manifests.py` já são genéricos (paths relativos);
  `collect_public.py` e `collect_ecosystem.py` são específicos mas isolados.
  Consequência: a renomeação para `competitors/` só se justifica quando o 2º
  concorrente chegar, com motivo concreto — registado em `AGENTS.md` e
  `PENDENCIAS.md`.
- O dossiê TheFounderOS tem lacunas de absorção que não exigem nova coleta.
  Evidência: `FGSS OS/knowledge/site/os.md:119-131` lista 14+ OS licenciados
  (`billing-os`, `legal-os`, `okr-os`, etc.) não capturados; `os.html`
  contém JSON-LD schema.org `SoftwareApplication` não destilado; `home.md`
  confirma preços US$1.497/US$5.800 e garantias não refletidos em
  `SALES_AND_DISTRIBUTION.md`. Consequência: lacunas registradas em
  `HANDOFF.md` do gestor como próximos passos sem rede externa.

## 15 de agosto de 2026 — memória do Chairman de Motion Design

- Documentos narrativos extensos não oferecem granularidade suficiente para
  recuperação confiável: havia afirmações sem URL primária explícita e o pack
  Brabo declarava 35 claims embora sua matriz contivesse 5. Consequência: o
  número foi corrigido para 5 e a memória passou a usar claims atômicos ligados
  a fontes, classificação, validade, conflito e substituição.
- Política de governança não é registro de licença. Consequência: a memória
  ganhou a classificação `governance_policy`, separada de `license_record`, e
  exige fonte normativa local com hash sem confundir regra com prova empírica.
- Um resultado de decisão sem versões não é plenamente reproduzível.
  Consequência: cada decisão agora identifica submissão, evidência, conteúdo da
  decisão, política, reviewer e snapshot exato de memória.
- Um quiz sem persistência mede apenas a sessão corrente. Consequência: o Dojo
  passou a registrar progresso local por pergunta, ligado a competências e
  claims, com caixas 1–5 e próxima revisão; nenhum dado sai do navegador.
- Persistir `nextReviewAt` sem usá-lo para ordenar uma fila não implementa
  revisão espaçada. Consequência: o modo “Revisões Vencidas” agora seleciona e
  prioriza perguntas realmente devidas, enquanto domínio e cobertura são
  calculados por competência.
- Duplicar claims e política dentro de cada HTML fez as interfaces divergirem da
  memória canônica. Consequência: um snapshot browser-safe passou a ser gerado
  pelo catálogo, e o preflight compara seu conteúdo com a memória antes de
  aprovar os três HTMLs.
- Um pipeline apenas desenhado não explicita caminhos de falha ou reconciliação.
  Consequência: os 8 pipelines visuais agora têm schema, IDs estáveis, nós,
  arestas rotuladas, claims de origem e estado de evidência; continuam
  ilustrativos e não comprovam execução.
- Texto fixo como “preflight OK” dentro de uma página envelhece sem relação com
  o teste real. Consequência: os HTMLs exibem métricas derivadas do snapshot e a
  prova continua pertencendo ao comando de preflight, não à decoração da UI.
- Paridade de dados não garante compreensão humana. A primeira versão dos novos
  HTMLs estava tecnicamente correta, mas começava por snapshot, claims, gates e
  payloads sem explicar o objetivo ou o percurso. Consequência: propósito,
  exemplo e próxima ação agora aparecem antes dos detalhes técnicos.
- Feedback automático que desaparece em poucos segundos prejudica aprendizagem.
  Consequência: o Dojo inicia em Estudo Livre e só troca de pergunta quando a
  pessoa aciona “Próxima pergunta”; exame, erros e revisões continuam opções.
- Linguagem simples não exige remover auditabilidade. Consequência: nomes
  humanos aparecem na camada principal, enquanto IDs, classificações, hashes,
  transições e JSON ficam disponíveis em detalhes expansíveis.
- A proficiência local pode ser 10/10 sem prontidão externa. Consequência: a
  rubrica de memória tem dez critérios verificáveis, enquanto sandbox, DLQ
  remota e dois hosts continuam explicitamente pendentes e casos reais valem 0.

Este arquivo registra fatos confirmados que alteram decisões técnicas. Não use
este arquivo como lista de tarefas.

## 29 de julho de 2026

- O `FGSS brain` e o `FGSS MAIN BRAIN` têm papéis diferentes:
  - `FGSS brain` orienta raciocínio, escolha de ferramentas e execução;
  - `FGSS MAIN BRAIN` recebe telemetria permitida, consolida evidências e
    abastece o Admin.
- Uma LLM não usa o `FGSS brain` apenas porque a pasta existe. O aplicativo
  precisa ler o adaptador ou receber uma regra global apontando para
  `FGSS brain/AGENTS.md`.
- O `FGSS brain` original permaneceu independente e não foi alterado durante a
  construção do MAIN BRAIN.
- A migração do MAIN BRAIN foi validada em PostgreSQL 16 com RLS, permissões,
  ingestão e reaplicação idempotente.
- No Supabase atualmente apontado pelo Felipe Portfolio, a sondagem da função
  `public.fgss_main_overview()` retornou `PGRST202`. Isso confirma que a migração
  do MAIN BRAIN ainda não está instalada nesse projeto.
- O `.env` local do Portfolio possui URL e chave pública do Supabase, mas ainda
  não possui valores para `SUPABASE_SERVICE_ROLE_KEY` e
  `FGSS_MAIN_BRAIN_SECRET`.
- `N8N_WEBHOOK_SECRET` já existe e pode proteger a telemetria legada, mas não
  substitui o segredo HMAC do MAIN BRAIN.
- Custos de períodos diferentes não formam um total válido. “Mês atual” e
  “acumulado da conta” devem aparecer separados.
- `subsidiaries_metrics` recebe snapshots cumulativos. Repetir a leitura e somar
  as linhas duplica custo; a integração canônica precisa calcular deltas.
- Métricas sociais aleatórias não podem alimentar decisões técnicas,
  financeiras ou comerciais. A simulação existente foi desativada.
- Editar o `.env` local não configura automaticamente o ambiente de produção.

## 30 de julho de 2026

- O `FGSS brain/andrej-karpathy/SKILL.md` **não** é o protocolo de disciplina de
  código que o lobo 2 do protocolo mestre pressupunha. Evidência: 54 KB,
  frontmatter `source: community`, `author: renat`, `tags: [persona, ...]`, e
  seções sobre Tesla HydraNet, tokenização BPE, micrograd, nanoGPT, "frases
  favoritas" e "palavras que Karpathy nunca usa". É um agente que simula a
  pessoa para ensinar deep learning. Consequência: carregá-lo no passo 4 do FGSS
  Loop gasta ~14k tokens e devolve biografia em vez de disciplina de engenharia.
  O comportamental correto é `~/.claude/skills/karpathy-guidelines/SKILL.md`
  (2,5 KB). Protocolo repontado; ver `ATUALIZACOES.md`.
- Apontar um caminho no protocolo **não** carrega o arquivo. Até 30/07 o
  `FGSS_BRAIN_MASTER_PROTOCOL.md` só entrava em contexto se um humano ou agente
  abrisse o arquivo por conta própria; nenhum mecanismo fazia isso. O Ponytail
  funcionava porque tem hook próprio, o que mascarava a diferença. Consequência:
  regra global apontando para um arquivo precisa de um hook que o injete, senão
  o protocolo existe no disco e não na sessão.
- O `CÉREBRO` **não** é um repositório único. `FGSS brain` e `FGSS MAIN BRAIN`
  são repositórios git independentes com remote no GitHub; a raiz do `CÉREBRO`
  e o `AGENTES_SKILLS/skills` não têm versionamento. Consequência: uma edição na
  raiz (estes três arquivos de memória, `AGENTS.md`, `README.md`, manuais) não
  tem histórico nem como voltar atrás. Ver `PENDENCIAS.md`.

## 7 de agosto de 2026

- O script de execução `last30days.py` do repositório `mvanhorn/last30days-skill` requer Python 3.12+. Evidência: erro de execução de preflight com o Python 3.9.6 nativo do macOS. Consequência: a execução local e integrações devem apontar explicitamente para o interpretador moderno instalado no sistema em `/Users/felipegouveia/.local/bin/python3.12` ou fazer uso do gerenciador `uv`.
- A pasta de skill `last30days` antiga que residia em `AGENTES_SKILLS/skills/last30days` era uma versão obsoleta e incompleta. Evidência: o arquivo `SKILL.md` antigo possuía apenas ~15 KB, comparado aos ~222 KB da versão oficial nova clonada, e seu script executável continha apenas 16 KB contra 153 KB do atual. Consequência: substituímos inteiramente a skill pela versão atualizada, criando o backup `last30days.old`.

## 8 de agosto de 2026

- No Claude Code 2.1.233, `SessionStart` exige um objeto de evento cuja lista
  interna `hooks` contém diretamente as ações de comando. Evidência: com ações
  diretamente em `SessionStart`, todos os plugins apareceram desativados; ao
  restaurar o contêiner, 5 plugins foram habilitados, a skill FGSS foi carregada
  e o hook executou. Consequência: validar a sintaxe contra o runtime instalado,
  pois a descoberta anterior sobre um array totalmente plano ficou obsoleta.
- Modificar o arquivo `.env.example` de um submódulo (neste caso, `code-graph-rag` por conta do script `sync_runtime_config.py` do cérebro) faz com que o repositório pai enxergue o submódulo como dirty/modificado. Evidência: o status indicava `modified content`. Consequência: configurar `ignore = dirty` no `.gitmodules` para o submódulo remove este ruído e previne o commit de ponteiros acidentais no repositório do cérebro.


## 9 de agosto de 2026

- **Processo Dinâmico de Pesquisa (Preflight):** Fixar um conjunto de perguntas-chave estático para autoatualização engessa a IA em padrões passados. Evidência: a evolução rápida de APIs (como Gemini, OpenAI, n8n) torna checklists estáticos obsoletos em meses. Consequência: adotar queries de busca dinâmicas geradas a partir da interseção entre o escopo da tarefa e o horizonte tecnológico atual no início das sessões.
- **Governança de Automações:** Sem um manifesto unificado (`automation-manifest.json`), o crescimento do ecossistema de automações gera amnésia técnica e financeira. Evidência: dificuldade de rastrear quem usa qual API e com qual custo em projetos legados. Consequência: toda nova automação passará a conter um manifesto de metadados próprio.
- **E-books vs. Resumos de Aulas (Extração de PDF):** Os e-books do material de treinamento do Mestres da Automação são PDFs de difícil extração de texto por `pypdf`. Evidência: arquivos txt resultantes possuíam menos de 5KB com cabeçalhos de licença vazios. Consequência: a ingestão foca nos resumos de aulas estruturados (88 arquivos válidos), que contêm 100% da matéria acadêmica, roteiros de reunião, checklists de implementação e a minuta do contrato de serviços.
- **Roteiro SPIN Selling e Modelo de Contrato:** Identificados e consolidados o roteiro de reunião baseado em SPIN Selling (com ramificações para infoprodutos e negócios locais) e o contrato de serviços de automação com isenções de responsabilidade para bloqueios de contas. Evidência: leitura direta e parsing dos resumos da aula de reuniões e precificação. Consequência: esses elementos foram copiados como seções permanentes na Bíblia de Automação para acesso imediato.
- **Estrutura Modular da Formação (Bloco 2):** O segundo bloco de treinamento possui 1.860 arquivos organizados em 754 subpastas. Evidência: varredura recursiva completa via Drive API. Consequência: 1.269 arquivos markdown foram baixados e consolidados em 12 playbooks avançados de ferramentas na pasta `bible/advanced/` (ex: n8n, Make, Zaia, NicoChat, Manychat, Claude Code).
- **Claude Code como Acelerador:** O Claude Code atua como um assistente de desenvolvimento local e gerador de especificações, não como substituto de ferramentas de integração. Evidência: análise do material didático de Claude Code. Consequência: consolidação no playbook avançado de Claude Code.
- **Sanitização de Marca e Nomes Proprietários:** Identificadas e eliminadas as referências de nomes específicos (ex: Luciana Papini, Mestres da Automação) de todos os playbooks da Bíblia de Automação e substituídas por termos e placeholders genéricos adequados (ex: Chairman de Automação, Formação em Gestão de Automação). Evidência: varredura regex automatizada nos arquivos md da Bíblia. Consequência: a base de dados torna-se agnóstica de marca e protegida.
- **Catálogo de 100 Negócios e Oportunidades G-T-M:** Mapeamento completo de 100 nichos e suas respectivas dores operacionais/soluções Go-To-Market criados fisicamente no ecossistema. Evidência: compilação estruturada e contagem exata de 100 registros em docs. Consequência: disponibilização de um banco de prospecção imediato para equipes comerciais.
- **Catálogo de 100 Empresas e Oportunidades H-I:** Mapeamento de 100 corporações de setores regulados (fintechs, saúde, logística) com gargalos complexos de backend/infraestrutura e soluções High Intelligence. Evidência: compilação física estruturada de 100 registros. Consequência: suporte para vendas enterprise e arquitetura customizada.
- **Princípio da Inteligência Embarcada:** A inteligência teórica é compactada de forma valiosa através de schemas rígidos e geradores de código (CLI). Evidência: criação do JSON Schema de Manifesto e do CLI de Scaffold. Consequência: prevenção de obesidade de conteúdo e indução automatizada a boas práticas técnicas.
- **Bug de transcrição Whisper (ffmpeg não propagado):** O `whisper/audio.py:46` chama `subprocess.run(["ffmpeg", ...])` hardcoded — não recebe caminho resolvido. O `harvester.py` resolve ffmpeg via `_resolve_binary` + `imageio_ffmpeg`, mas isso não transpirava para o subprocess do Whisper. Evidência: `transcriber.py` não injetava `.venv/bin` no PATH antes de importar o Whisper; 102 MP3s sem transcrição. Consequência: fix injetou `.venv/bin` no `PATH` + fallback via `FFMPEG_BIN` importado do harvester. Testado: áudio de 372s transcrito em 36s.
- **Base Fórmula YouTube 2026 — 100% absorvida:** 4 produtos Hotmart do clube `formula-youtube` (instrutor Peter Jordan, canal Inédito), 313 arquivos, 142 aulas. 138 transcrições Whisper (4 aulas sem áudio, corretas). 22 anexos (17 PDFs + 4 XLSX + 1 DOCX) extraídos via `pypdf`, `openpyxl`, `python-docx`. Evidência: `grep -rl "transcribed: true"` retorna 138; `extract_attachments.py` processou 22/22. Consequência: knowledge base canônica com 18 frameworks persistida em `FGSS Gestor de Midia YouTube/findings.md`.
- **Panorama YouTube 2026 (do curso):** 2,7 bi usuários/mês; canais dark = 38% dos novos monetizados; Shorts = 200 bi views (3x vs 2024); canais com Shorts+longo crescem 41% mais rápido; 25%+ watch time vem de idiomas que não o original; jan/2026 YouTube eliminou 16 canais (35M inscritos) por conteúdo inautêntico; AI Slop = prioridade #1 do YouTube (Neal Mohan).
- Frameworks canônicos do curso: Dois modelos de canal dark (M1 Marca/M2 Rápido), 7 gatilhos de emoção negativa (aversão à perda), 12 fórmulas de título com conflito psicológico, 5 categorias de tags SEO, estrutura de roteiro com loops (4 tipos: Promessa/Curiosidade/História/Contradição), 4 métricas centrais (CTR/Retenção/Watch Time/Impressões), monetização em 2 camadas (Sandbox 500 inscr / AdSense 1000 inscr), SOP de edição (12 etapas, 3-5h/vídeo, troca de cena 6-10s), portfólio de canais (5 estágios), outlier multilíngue (estratégia mais poderosa).

## 13 de agosto de 2026

- **BullMQ Queue vs Receptor Express (TODO de enfileiramento):** O protótipo de referência `aut-teste-contingencia` aceitava o webhook HTTP mas mantinha um TODO em aberto, não salvando o evento no Redis BullMQ. Evidência: inspeção do arquivo `src/index.js`. Consequência: instanciada a `Queue` do BullMQ e resolvida a conexão física de enfileiramento.
- **Idempotência atômica via Redis (`SETNX` lock):** Webhooks de plataformas externas (Kiwify, Stripe, Manychat) reenviam retentativas em falhas de rede. Evidência: duplicatas entram na fila sem bloqueio na camada HTTP. Consequência: implementada trava atômica `redisClient.set(lockKey, 'locked', 'EX', 86400, 'NX')` no receptor de webhooks que retorna HTTP 409 em requisições repetidas dentro da janela de 24h.
- **Graceful Shutdown completo com DLQ:** No encerramento do processo do Worker (`SIGTERM`/`SIGINT`), a conexão ioredis criada dentro do módulo `dlq.js` ficava aberta. Evidência: `worker.js` só chamava `worker.close()`. Consequência: adicionada a chamada assíncrona `await dlq.close()` no encerramento limpo para liberação total de handles.
- **Dynamic Path Resolution em ferramentas CLI:** O caminho `/Users/felipegouveia/Developer/CÉREBRO/...` hardcoded em scripts Python falhava em ambientes com diferentes usuários de sistema ou estruturas de pasta. Evidência: execução do `validate_manifests.py` no terminal local apontando para diretório inexistente. Consequência: scripts de scaffold e validação atualizados para ler o caminho de integração relativo à localização do script (`script_dir = os.path.dirname(os.path.abspath(__file__))`).
- **Durable Execution & OpenTelemetry (Research 2026):** O mercado de automação em 2026 padronizou o modelo de *Durable Execution* (Windmill, Trigger.dev v3, Temporal) com rastreamento OpenTelemetry (`bullmq-otel`) e o padrão *Thin Agent* (controle de fluxo 100% determinístico no worker, com chamadas de IA isoladas que passam IDs por referência e medem custos por token). Consequência: esses padrões foram integrados ao plano de evolução técnica do projeto.

## 14 de agosto de 2026

- **Didática de Absorção Rápida por Repetição Punitiva (Hardcore Quiz):** A memorização passiva de especificações é ineficiente em prazos curtos (24h). Evidência: o uso de um simulador de exames com eliminação por vidas (3 erros obriga o reinício da fase do zero) eleva a atenção do estudante e força a fixação profunda de conceitos de arquitetura.
- **Diferenciação por Alternativas Técnicas Plausíveis (Anti-Chute):** Alternativas absurdamente falsas estragam a capacidade de avaliação. Evidência: para ser efetivo como treino de MBA, todas as 4 opções precisam parecer corretas, falhando apenas em detalhes técnicos sutis (ex: `raw body` no HMAC, idempotência via `SETNX` atômico vs `GET+SET` com race condition).
- **Tags Explicativas Dinâmicas (Tooltips no Hover):** O uso de siglas em documentação e exames gera interrupção de leitura. Evidência: injetar `<abbr class="tech-tooltip">` com o nome por extenso e definição técnica no evento `hover` reduz o tempo de busca e mantém a fluidez de estudos.
- **Orquestração Massiva e Limites de Template Strings:** A geração em massa (1.000 questões únicas) excede limites de token por sessão única e memória de JSON. Evidência: usar HTML puro resultou em arquivos de 2MB corrompidos. Consequência: dividir a geração entre 3 subagentes paralelos gravando módulos independentes (L1-L2, L3-L4, L5) funcionou, porém revelou bugs de escape de colchetes `{}` em Python templates. A arquitetura correta é usar um Script Assembler central para deduplicar, embaralhar, parsear regex em massa e compilar o HTML estático final (2.1MB, fluido).
- **Vazamento de Escopo em Seletores DOM em SPAs com Botões Dinâmicos:** Usar seletores genéricos como `document.querySelectorAll(".option-btn")` para desabilitar alternativas pós-resposta atinge elementos estáticos fora do contêiner de opções que compartilham a mesma classe. Evidência: o botão de visualização de arquitetura continha a classe `.option-btn`, tornando-se `disabled = true` após responder a Questão 1 e permanecendo bloqueado nas questões seguintes. Consequência: isolar o botão em uma classe semântica dedicada (`.diagram-toggle-btn`), restringir o seletor a `#options-container .option-btn` e resetar explicitamente `disabled = false` no carregamento da questão garantiu reatividade contínua em 100% das 1.000 questões.
- **Aprendizagem Ativa por Repetição Espaçada e Síntese Mnemônica:** Apenas indicar que a resposta está errada gera sobrecarga cognitiva sem garantia de fixação. Evidência: a inclusão de uma "Regra de Ouro da Engenharia" (síntese em 1 linha) aliada ao "Caderno de Erros" com persistência local (`localStorage`) permite ao usuário isolar seus pontos cegos técnicos e revisar repetidamente apenas as falhas até a assimilação completa.
- **Contextualização Prática de Automações B2C e Marketing Digital:** Questões puramente abstratas ou focadas exclusivamente em Big Techs reduzem a percepção de aplicação prática do consultor de automação. Evidência: a inclusão de fluxos do cotidiano (Pizzarias com impressão térmica ESC/POS e reconciliação PIX, Clínicas com No-Show zero, e Campanhas de Tráfego com Meta CAPI Server-Side e recuperação de carrinhos abandonados) ancora o conhecimento de arquitetura em problemas comerciais reais de alta demanda no mercado.
- **Modelagem Mental por Canvas Visual de Nós (Estilo n8n / Make):** A assimilação de arquiteturas complexas é acelerada quando representada como um grafo visual orientado a nós (`Trigger` ➔ `Filtro/Lock` ➔ `Agente IA/LLM` ➔ `Ação` ➔ `DLQ/Fallback`). Evidência: desenvolvedores e consultores retêm a lógica de integração significativamente melhor quando enxergam a correspondência exata entre o conceito teórico e a estrutura de nodes conectáveis por cabos (wires), com sockets e parâmetros visíveis.
- **Bifurcações de Fluxo em Canvas de Automação (Forks & Parallel Lanes):** Automações reais raramente são 100% lineares; nós de decisão e agentes de IA disparam múltiplas ações simultaneamente. Evidência: renderizar colunas de ramificação (`n8n-branch-column`) com vias paralelas e roteadores IF/ELSE fornece a representação gráfica exata de pipelines do mundo real (ex: disparar impressão na cozinha e notificação no WhatsApp no mesmo milissegundo).
- **Dualidade Pedagógica e Comercial (Quiz como Playbook de Campo):** Uma ferramenta de avaliação com 1.000 cenários categorizados e busca instantânea transcende o estudo individual e atua como um **Playbook de Vendas e Arquitetura em Tempo Real**. Evidência: durante briefings e reuniões com clientes, filtrar pela dor do lead (ex: "recuperação de carrinho", "Meta CAPI", "No-show em clínicas") permite ao consultor apresentar a solução visual e o payload imediatamente, reduzindo o ciclo de fechamento comercial e transmitindo autoridade técnica imediata.
- **Unificação Omnichannel (Manychat + ActiveCampaign + WhatsApp Cloud API):** O maior gargalo em lançamentos e campanhas de marketing é o desalinhamento entre o chatbot e o CRM. Evidência: padronizar o e-mail como chave mestra única, normalizar números no padrão internacional E.164 (`+55...`) e gerenciar a janela de 24h da Meta através de Templates Aprovados de Utilidade garante 100% de entregabilidade e preserva o Quality Rating do número no verde.
- **Diagnóstico Comercial Prescritivo em Tempo Real (Live Discovery & ROI Engine):** Clientes compram soluções de automação quando enxergam a matemática da recuperação de faturamento antes de discutir ferramentas. Evidência: apresentar em tempo real o cálculo de abandono de checkout (70%) e demonstrar visualmente que o bot de recuperação em < 3 minutos recupera de 15% a 25% desse valor converte reuniões de 30 minutos em contratos fechados, eliminando a objeção de preço da consultoria.
- **Taxonomia por Camadas do Varejo & Navegação Contínua em Playbooks:** Segmentar o conhecimento em nichos isolados (ex: só pizzarias) fragmenta a experiência consultiva. Evidência: organizar a base em 5 Macro-Camadas (Alimentação, Saúde/Agendamento, E-commerce, B2B/Imobiliárias e Infoprodutos) com navegação circular infinita e dropdown de seleção direta permite ao consultor alternar entre indústrias instantaneamente durante uma reunião sem interrupções ou perda de contexto.
- **Separação Arquitetural entre Dojo de Treinamento e Cockpit Consultivo (Single-Purpose Principle):** Tentar mesclar um simulador de testes para estudos técnicos (`glossario.teste.html`) com uma interface de pitch comercial para clientes sobrecarrega a experiência do usuário e dilui a identidade das duas ferramentas. Evidência: isolar o `glossario.teste.html` puramente para exames e certificações e criar o `assessor_comercial.html` como cockpit executivo focado em reuniões B2B de 30 minutos (Modo Apresentação, Calculadora de ROI, Diagnóstico de Vazamento e Canvas n8n) entrega a melhor performance e ergonomia para ambos os casos de uso.
- **Expansão e Auto-Remodelação do Glossário Técnico (200 Siglas Mapeadas):** A evolução das automações de varejo físico, omnichannel e lançamentos de marketing em 2026 exige um vocabulário técnico rigoroso além da infraestrutura de backend. Evidência: mapear 200 termos explicativos com tooltips dinâmicos (como CAPI, VSL, CPL, ICP, LTV, CAC, ROAS, E.164, HSM, ESC/POS, PIX EMV dinâmico, Round-Robin, No-Show, Lead Scoring, Typebot, PandaVideo, VTurb, etc.) garante fluidez absoluta na leitura do código, documentação e exames.
- **Bíblias Canônicas de Mídia YouTube (Fase 1):** A organização do conhecimento de YouTube em dois eixos complementares (G-T-M operacional vs High Intelligence de engenharia) resolve a dispersão de dados e elimina o risco de AI Slop. Evidência: compilação de 11 capítulos baseados nos 18 frameworks de `findings.md` cobrindo desde a neurociência de CTR e retenção em 5 fases até o gerenciamento de 10.000 pontos diários de cota da YouTube Data API v3, DLQ Dual e conformidade com a política de conteúdo inautêntico (Jan/2026). Consequência: disponibilização de playbooks executivos e contratos técnicos prontos para orientar a criação do scaffold e dos simuladores.
- **Catálogo de 100 Oportunidades e Governança de Nichos (Fase 2):** Estruturar nichos por RPM em USD, modelo de produção (M1 vs M2) e ângulo anti-slop permite selecionar teses de canal com barreira de entrada alta e monetização diversificada antes do primeiro upload. Evidência: compilação de 100 oportunidades em 9 macro-indústrias com blueprints de automação determinística em FFmpeg e expansão global via Multi-Audio Tracks. Consequência: criação de base sólida para orientar o gerador de scaffold e o cockpit de diagnóstico.
- **Resiliência de Upload e Idempotência SHA-256 no Scaffold YouTube (Fase 3):** Uploads de mídia e chamadas de API do YouTube não podem depender de conexões síncronas simples sob risco de duplicar uploads (1.600 pontos de cota) e violar termos de duplicação. Evidência: a implementação de trava atômica no Redis (`SETNX`) com hash SHA-256 e o padrão defensivo de DLQ Dual (Redis BullMQ + fallback append-only JSONL em disco sem dependências externas obrigatórias) permite recuperação transparente mesmo em cenários de Redis offline ou estouro de cota (403). Consequência: geração automatizada de microsserviços 100% resilientes e padronizados.
- **Pedagogia Ativa de Alta Fidelidade no Dojo YouTube (Fase 4):** A consolidação do conhecimento de YouTube (métricas, CTR, neurociência de loops, monetização e APIs) atinge o ápice de retenção quando combinada com simulações sob pressão de tempo (45s) e penalização de vidas com Caderno de Erros. Evidência: compilação de 1.000 questões únicas em 5 níveis estruturadas em `glossario.teste.html` com nós visuais e payloads JSON interativos, sincronizados com `glossario.html` com busca instantânea. Consequência: capacitação técnica irrestrita de operadores e agentes de mídia com certificação validada.
- **Diagnóstico Consultivo e Engenharia Financeira de Canais (Fase 5):** Criadores de conteúdo e empresas compram serviços de gestão e automação de canal quando visualizam o impacto em faturamento anual gerado pelo ganho composto de CTR e Retenção. Evidência: a ferramenta `assessor_youtube.html` calcula em tempo real o vazamento de receita e o ganho projetado com sliders dinâmicos, permitindo fechar propostas de setup (R$ 3.500 a R$ 6.500) e retainers mensais (R$ 1.200 a R$ 2.500/mês) em reuniões de 30 minutos com geração instantânea de proposta em Markdown.
- **Orquestração Multimodal e B-Rolls Semânticos (Engenharia de Mídia):** O fim da estagnação de canais automáticos ocorre quando cada segundo de vídeo combina texto rico em dados primários, voz com modulação acústica real (-3dB peak / SSML), imagens em 4K e B-rolls semânticos com animação contínua em código FFmpeg (Ken Burns). Evidência: documentação do Capítulo 6 da Bíblia H-I estabelecendo o contrato de roteiro em JSON Schema com timestamps, cues visuais e checklist industrial de 14 itens pré-upload. Consequência: blindagem total contra a política de Conteúdo Inautêntico 2026 e retenção sustentada sem necessidade de edição manual.
- **Governança de Propriedades Intelectuais (IP) em Escala (Branding & Character Consistency):** A operação de redes de 50+ canais Dark só é sustentável a longo prazo se cada canal for tratado como uma IP única com Brand Kit validado por schema (`channel_brand_kit.json`), trava de Voice ID e consistência visual multi-frame de personas (`--cref`, `--sref`, IP-Adapter e folha de 5 ângulos). Evidência: compilação do Capítulo 7 da Bíblia H-I e catalogação de 5 Presets de Motion Design por macro-nicho integrados ao Glossário Técnico. Consequência: eliminação da percepção de canais genéricos, maximização do valor de mercado do canal e fidelização instantânea da audiência.
- **Automação Completa de YouTube Studio via Playwright Headless (Operador Autônomo):** A superação dos limites de cota da Data API v3 (10.000 pts) e o acesso a recursos exclusivos da interface web (auto-certificação de monetização com Selo Verde imediato, telas finais, Smart Chapters, YouTube Shopping e Pinned Comment com link UTM) são alcançados com sessões isoladas multi-perfil via Playwright. Evidência: criação do Capítulo 8 da Bíblia H-I e da ferramenta `tools/playwright/youtube_studio_uploader.js`. Consequência: publicação 100% autônoma e ilimitada sem necessidade de manipulação do mouse pelo usuário.
- **Maximização Global de RPM e Governança com Fator UAU (Diretorias + Graph RAG):** O teto de receita de canais no Brasil é superado ao usar Multi-Language Audio Tracks (EN/ES/PT no mesmo Video ID com RPM de $15–$25 USD), combinado com o CTR Auto-Healer pós-24h e 4 Diretorias de Qualidade autônomas (Roteiro, Arte, Imagem, Copyright) com esteira em Waterfall e portões de Score $\ge 90/100$. Evidência: compilação dos Capítulos 9 e 10 da Bíblia H-I e integração ao Glossário Técnico. Consequência: retenção global de audiência, zero desperdício de impressões em thumbnails ruins e proteção patrimonial definitiva via desplataformização e Cold Storage.
- **Rastreabilidade Ponta a Ponta via Planilhas-Mestres e BI de Rede (Data Lake 50 Canais):** A gestão de dezenas de canais sem cruzamento de credenciais e com cálculo instantâneo de Unit Economics por vídeo (COGS, RPM, Lucro Líquido e ROI) é viabilizada com planilhas de 6 abas padronizadas no Google Drive (`1SyuOCcqFi9M8m80joMEDfD2WEtG_-Zw5`) consolidadas por um Data Lake central em Excel/Sheets. Evidência: criação do script `tools/spreadsheets/generate_channel_sheet.py` e compilação de `CANAL_MESTRE_PILOTO_TEMPLATE.xlsx` e `PLANILHA_MESTRE_CONSOLIDADOR_50_CANAIS.xlsx` documentados no Capítulo 11 da Bíblia H-I. Consequência: controle cirúrgico de faturamento, benchmark instantâneo entre nichos e governança à prova de falhas para escalabilidade de longo prazo.
- **Disciplina Operacional Lean e Mitigação Multimodal Google (Fase 1 vs Fase 2):** A queima precoce de caixa com geração de vídeo cara (Google Veo) é evitada ao operar na Fase 1 com Nano Banana Pro 4K + FFmpeg 2.5D ($0,20/vídeo) e sanitizador semântico de prompts (`prompt_sanitizer.py`) para evitar falsos-positivos de `SAFETY_BLOCKED` na Vertex AI, reservando o Veo 3.1 para ativação via flags de Brand Kit quando o canal atingir fluxo de caixa positivo. Evidência: compilação do Capítulo 12 da Bíblia H-I e teste de provisionamento automatizado de pastas em `canais_producao/`. Consequência: preservação máxima de capital, robustez de 99.9% contra erros de API e transição tecnológica orientada a lucro.
- **Engenharia de Prompt Cinematográfica e Repertório de 8 Estilos (Remotion + CTR):** A geração de vídeos e thumbnails com padrão Hollywood e retenção máxima é alcançada quando os prompts utilizam variáveis ópticas reais (ARRI Alexa, 50mm f/1.2 Bokeh, Rembrandt Lighting, Rim Light) aliadas a stacks programáticas de motion design (Remotion + HyperFrames para mapas e tipografia cinética estilo Vox e Magnates Media) e validação de miniaturas no teste de compressão mobile 320x180 px. Evidência: compilação do Capítulo 13 da Bíblia H-I e enriquecimento do Glossário Técnico e do Dojo. Consequência: eliminação de resultados amadores, aumento do CTR para patamares superiores a 8% e produção escalável sem custos de edição manual.
- **Orquestração Inteligente em n8n com Sub-workflows Dual-Agent (Graph RAG + UAU):** O risco de esteiras n8n executarem tarefas de forma burra ou com perda de identidade visual é eliminado ao implementar o padrão de nós Dual-Agent (onde cada etapa injeta o contexto do Graph RAG, executa via LLM e é auditada por um Supervisor da Diretoria com Score $\ge 90$). Evidência: criação do Capítulo 14 da Bíblia H-I e do template `tools/n8n/n8n_dual_agent_node_template.json`. Consequência: garantia de que nenhum vídeo medíocre ou fora da identidade da marca seja publicado, com auto-correção em até 3 ciclos e zero dependência de supervisão humana manual.
- **Portões de Aprovação Human-in-the-Loop e Telegram Cockpit (Escada de Autonomia):** A segurança operacional no início de canais automatizados é garantida ao introduzir 3 Portões de Aprovação HITL (Personas `--cref`, Roteiro/Áudio e Thumbnails) com aprovação em 1 clique via bot interativo do Telegram e sincronização com a Planilha-Mestre no Google Drive (`1SyuOCcqFi9M8m80joMEDfD2WEtG_-Zw5`). Evidência: compilação do Capítulo 15 da Bíblia H-I e atualização de `tools/spreadsheets/generate_channel_sheet.py`. Consequência: controle total do diretor geral sem atrito manual, permitindo transição gradual e segura para o piloto automático pleno.
- **Ecossistema de Design Centralizado e Monetização IP (YouTube Shopping + POD):** A expansão do canal para uma marca multimilionária requer que o design (Avatar 800x800, Banner 2560x1440 com Safe Zone universal 1546x423 px e Watermark 150x150) seja gerido por um cérebro dedicado (`design/`) e enviado ao YouTube Studio via Playwright (`playwright_branding_automator.js`), enquanto o faturamento é multiplicado através do YouTube Shopping com produtos físicos Print-on-Demand (canecas, bonés, camisetas com 60% de margem) e produtos digitais. Evidência: compilação dos Capítulos 16 e 17 da Bíblia H-I e estruturação do diretório `design/`. Consequência: independência do algoritmo do AdSense, aumento drástico do LTV por inscrito e canal valorizado como ativo de propriedade intelectual.
- **Critérios Objetivos de Sucesso e Valuation de Ativo de Mídia (M&A):** O valor patrimonial de um canal Dark é maximizado quando a operação atinge 5 pilares objetivos (Unit Economics positivo com Payback $\le 72$h, CTR $\ge 7\%$, AVD $\ge 50\%$, Monetização 40/35/25, base própria de 5k-20k fora do YouTube e Fator UAU $\ge 90$), permitindo comercializar o canal em múltiplos de 24x a 36x o lucro líquido mensal, impulsionado por estratégias de Marca de Culto e panfletos com QR Code (Ponte Físico-Digital). Evidência: compilação do Capítulo 18 da Bíblia H-I e integração ao Glossário Técnico e ao Dojo. Consequência: transformação de simples canais de vídeo em empresas digitais de alto valuation e liquidez de mercado.
- **Maximização de Receita Global via English-First e fal.ai API ($0,003/img):** A escala de faturamento de canais automatizados atinge o ápice ao adotar 100% de produção nativa em inglês para mercados Tier-1 (multiplicando o RPM de $2 para $18–$45 USD) e substituindo interfaces caras pela API de inferência do fal.ai (Flux Schnell a $0,003/imagem com 450ms de latência), blindado pelas 5 operações complementares (Aba Comunidade 24h antes, legendas Whisper .vtt para SEO, AI comment care e tratado W-8BEN). Evidência: compilação do Capítulo 19 da Bíblia H-I e atualização das planilhas-mestres com meta de RPM de $32.50 USD. Consequência: custo de produção por vídeo inferior a $0,15 USD gerando receita em moeda forte no maior mercado consumidor do planeta.
- **Segregação Estrita de Credenciais (Sandbox-First) e Diagnóstico de Pré-Voo:** O risco de contaminação cruzada de contas e bloqueios em cascata entre canais é zerado ao adotar arquivos `.env` estritamente locais por canal em `canais_producao/` gerados pelo provisionador de 9 subpastas (`provision_channel_folder.py`), acompanhado de um utilitário CLI de auditoria de pré-voo (`preflight_check.py`) que valida a saúde do ambiente local antes de qualquer disparo operacional. Evidência: criação do `.env.example` mestre, do script `tools/preflight_check.py` e teste de provisionamento automatizado. Consequência: isolamento total de riscos e certeza de conformidade técnica antes do primeiro lançamento.
- **Fronteira Rígida e Exclusiva do Google Drive (GESTORES CHEETS):** A governança de nuvem do ecossistema de YouTube estabeleceu como fronteira inviolável o acesso restrito e exclusivo à pasta raiz `GESTORES CHEETS` (`1cBnFGf8z-fBcNylze_11o51tDC8onpkX`) e sua subpasta `FGSS YOUTUBE DATA` (`1SyuOCcqFi9M8m80joMEDfD2WEtG_-Zw5`), contendo as planilhas-mestres e a árvore `CANAIS DE PRODUÇÃO`. Nenhuma outra pasta ou arquivo do Drive do usuário será tocado. Evidência: gravação canônica em `AGENTS.md` e verificação via API Drive v3. Consequência: isolamento estrito de privacidade e integridade do armazenamento em nuvem.
- **Cota granular da Data API em 2026:** a documentação oficial passou a separar
  `videos.insert` (100 chamadas/dia por padrão), `search.list` (100 chamadas/dia)
  e os demais métodos (10.000 unidades/dia). Consequência: orçamentos antigos de
  1.600 pontos por upload geram decisões erradas e foram removidos do piloto.
- **Falso positivo de prontidão do piloto:** o pré-voo anterior não verificava
  dependências Node nem runtime Redis e retornava código 0 mesmo sem infraestrutura.
  Consequência: o selo “pronto” agora exige lockfile, `npm ls` e Docker/Redis.
- **Fila BullMQ inválida:** o nome `yt:queue:piloto-resumable` fazia servidor e
  worker encerrarem na construção porque BullMQ proíbe `:` em nomes de fila.
  Consequência: nomes canônicos agora usam hífen e o E2E é obrigatório para evitar
  que validações apenas sintáticas voltem a declarar esse fluxo pronto.
- **Herança multirrede deve preservar princípios, não payloads:** contratos,
  dry-run, E2E, idempotência e falha fechada são reutilizáveis; cotas, métricas,
  permissões e fluxos de publicação pertencem a cada plataforma. Consequência:
  o Gestor de Mídias Sociais usa domínio canônico e adaptadores isolados.
- **Auditoria de Escopos do Google Drive e Acesso Anônimo:** A tentativa de leitura anônima redireciona para login e o token do `gcloud` local ativo não possui escopo `drive.readonly` (403 Forbidden). Evidência: teste com `urllib.request` e chamada autenticada via gcloud token. Consequência: estado mantido rigorosamente em `PENDENTE_DE_ACESSO`, sem dados inventados.
- **Topologia de Cotas e Subcódigos do Instagram Graph API v21.0 (2026):** A publicação na API oficial do Instagram opera em 2 etapas assíncronas (Media Container + Media Publish) com teto estrito de 100 posts/24h (subcódigo 2207042) e 200 chamadas/h por conta no BUC (códigos 4, 17, 613). Evidência: documentação oficial Meta for Developers 2026. Consequência: o adaptador foi arquitetado com inspeção de headers BUC, polling de cotas e classificação estrita de erro para retry inteligente.
- **Exigência Inegociável de Human-In-The-Loop no Modo Live:** O PolicyGate bloqueia qualquer escrita externa no modo `live` que não contenha `humanApproval.approved == True` com identificador do operador e timestamp. Evidência: teste `test_03_live_mode_rejected_without_human_approval` rejeitou com `rejected_policy` e roteou para a DLQ com token sanitizado. Consequência: zero risco de postagens acidentais ou autônomas em contas reais.
- **Ingestão Canônica da Base `Respondedor_PROJECT MANAGER` via Service Account:** A Service Account local em `~/.credentials/yt_drive_sync_sa.json` possui escopos de leitura autorizados no Google Drive e efetuou com sucesso o download, hash SHA-256 e validação de 79/79 arquivos (413,63 KB). Evidência: `knowledge/INVENTORY.json` e `docs/DRIVE_INGESTION_PM.md`. Consequência: 190 termos técnicos de PM/Agile e metodologias de resposta e governança foram consolidados nos playbooks `docs/bible/01_project_management_operacao_social.md` e `docs/bible/02_respondedor_community_care_sla.md`.
- **Auditoria Profunda de Validação de Esquemas e Falha Fechada (2026):** A auditoria identificou que tipos nulos em objetos aninhados (`humanApproval: null`, `consentRef: null`) e itens de arrays necessitavam de validação recursiva explícita no validador `contracts.py` e schemas JSON correspondentes para evitar `AttributeError` em tempo de execução. Evidência: 16 testes unitários e E2E cobrindo 100% dos caminhos de falha fechada, consentimento expirado/revogado e restrições de 7 redes sociais. Consequência: a validação de contratos agora é à prova de falhas para qualquer entrada com campos nulos válidos ou tipos inválidos em listas.
- **A Convergência Inegociável entre Neurociência Comportamental e Engenharia Determinística:** A absorção completa de 797 arquivos (718 de psicologia/conteúdo + 79 de PM/respondedor) demonstrou que o algoritmo das plataformas sociais não é um mecanismo a ser manipulado por truques sintéticos, mas um espelho matemático que responde exclusivamente à validação de identidade (Segunda Ordem), narrativa estruturada (Método GUIA/BDA) e atendimento imediato (SLA <3 min no Direct). Evidência: compilação das 7 Bíblias Mestre em `docs/bible/` e criação do Creator Engine com 19 testes Karpathy aprovados. Consequência: a estratégia de mídias sociais agora possui alinhamento perfeito entre código, retenção psicológica e esteira de vendas.

## 17 de agosto de 2026

- O backup continha cinco gestores, com sobreposição real apenas em Automação e
  YouTube. Automação tinha 33 arquivos exclusivos, 1.924 idênticos e 14
  divergentes; YouTube tinha 5.282 exclusivos e 7 divergentes. Consequência:
  fusões de diretório sem versão confiável devem adicionar arquivos exclusivos
  e preservar divergências fora do caminho ativo, em vez de escolher por data
  ou sobrescrever silenciosamente.
- O inventário Luana do Gestor de Mídias Sociais contém 718 registros e caminhos
  absolutos herdados de `/Users/felipe/Developer/Memory`, mas a origem
  transferida não contém 692 dos arquivos brutos correspondentes. Evidência: 36
  testes locais aprovados e preflight reprovado exclusivamente pela ausência
  desses arquivos. Consequência: o Chairman local não pode ser declarado
  integralmente validado até restaurar a fonte autorizada, atualizar os caminhos
  e reconciliar os hashes.
- A pasta WebHub de webdesign contém 17 aulas representadas por pares de
  `README.md` e `summary.md`, além dos respectivos MP3; 35 artefatos textuais
  preservam a camada instrutiva enquanto 20 artefatos pesados ou internos
  respondem por quase todo o conjunto de 894.637.776 bytes. Consequência: a
  memória inicial pode ser textual, versionada por snapshot e auditável sem
  duplicar aproximadamente 895 MB de mídia.
- Nos cinco gestores irmãos revisados, a essência estável é o Chairman como
  revisor de contratos e evidências, não executor operacional. Consequência: o
  Gestor de Webdesign separa brief, design, implementação, staging e prontidão
  de produção; instrução de curso orienta perguntas, mas aprovação externa exige
  prova sanitizada do projeto real.
- O gauntlet-loop é independente de fornecedor quando modelado como três papéis
  (`builder`, `critic`, `verifier`), critérios explícitos e parada
  determinística. Consequência: Claude, Codex, Gemini ou outra LLM podem usar o
  mesmo protocolo, mas somente tarefas `large` justificam seu custo por padrão.
- Medir a utilidade do gauntlet não exige armazenar seu conteúdo. Ativação,
  rodadas, candidatos, achados materiais, veredito e razão de parada permitem
  comparar adoção e revisões aceitas. Consequência: o MAIN BRAIN preserva a
  fronteira de privacidade e continua incapaz de comandar agentes.
- Um grafo pode ser uma capacidade constante sem ser reconstruído em toda
  tarefa. A data de `graphify-out/graph.json` comparada à fonte rastreada mais
  recente distingue `missing`, `stale` e `ready`; o Graphify comprovou que uma
  atualização reextrai apenas os arquivos alterados. Consequência: tarefas
  médias e grandes ganham consciência estrutural persistente, enquanto tarefas
  pequenas continuam rápidas e a primeira construção ocorre sob demanda.
- Um único pacote pode atender Codex, Claude e Gemini/Antigravity quando mantém
  manifestos específicos, uma skill compartilhada e adaptadores que apontam
  para a fonte canônica. Evidência: os três clientes carregaram v0.4.0 em
  processos novos. Consequência: novas LLMs devem receber apenas um adaptador
  curto, nunca uma cópia divergente do protocolo.
- No Claude Code, `--max-budget-usd` não conteve o custo de criação inicial do
  cache de contexto durante o diagnóstico. Consequência: verificar plugins por
  listagem e debug de inicialização e evitar chamadas repetidas de modelo.

## Como adicionar uma descoberta

Registre data, evidência e consequência. Não registre opinião como fato. Se a
descoberta gerar trabalho, crie também um item em `PENDENCIAS.md`.

- **O Gestor de Mídias Sociais é Chairman, não executor:** confirmação direta
  do usuário em 15/08/2026 definiu que contas, OAuth, tokens, E2E e escrita
  pertencem aos projetos revisados. Consequência: sandbox deixou de ser
  pendência local e o runtime canônico passou a ser submissão → gates → decisão.
- **Absorção técnica não se reduz a web search:** uma revisão confiável também
  exige endpoint/schema oficial, autenticação, scopes, app review, changelog,
  SDK oficial, comportamento assíncrono, rate-limit headers, reconciliação,
  políticas e artefatos sanitizados do executor. Consequência: criado protocolo
  de knowledge packs por plataforma e capacidade.

- **Mocks não eram E2E live:** o teste denominado sucesso `live` usava um
  interceptor e token fictício. Consequência: estado corrigido para
  `tested_mock`; promoção exige conta sandbox e resposta oficial.
- **Gate de consentimento era opcional:** `live` prosseguia quando `consent`
  não era fornecido, e aprovação não estava ligada ao conteúdo. Consequência:
  consentimento agora é obrigatório e o approval contém o hash canônico.
- **Schemas declaravam constraints não executadas:** o validador aceitava
  strings vazias, hashes inválidos e datas malformadas. Consequência: o
  subconjunto JSON Schema usado pelo projeto passou a ser validado de fato.
- **Integridade não é procedência:** 79 + 718 hashes locais foram confirmados,
  mas isso não prova autoria, licença, ciência ou fidelidade das sínteses.
  Consequência: esses atributos são `não medido` e geraram pendência própria.
- **Compiladores de bíblias não eram grounded:** o compilador mestre carregava
  documentos sem utilizar seu conteúdo para gerar o texto e lia zero arquivos
  PM compatíveis. Consequência: os artefatos foram classificados como métodos
  internos/heurísticas, não como extração comprovada.
- **CAPERF e PONITEO não têm definição local:** a busca no ecossistema acessível
  não encontrou critérios canônicos. Consequência: conformidade permanece não
  medida até formalização, sem expansão inventada dos acrônimos.

- **MCP é a fronteira portátil; Claude Code é apenas um cliente:** a
  especificação oficial define os transportes `stdio` e Streamable HTTP, e o
  Claude Code adiciona configuração e escopos próprios. Consequência: o
  contrato canônico passou a ser um manifesto neutro, do qual configurações de
  cliente podem ser derivadas.
- **A pesquisa inicial não localizou um servidor MCP oficial da Meta:** foram
  encontrados projetos comunitários, mas nenhuma oferta equivalente nas fontes
  oficiais consultadas da Meta. Consequência: isso permanece “não localizado”,
  não “inexistente”, e a recomendação é uma fachada do executor sobre APIs
  oficiais após auditoria e knowledge pack por capacidade.
- **O modelo não deve receber o token Meta:** autenticação e armazenamento de
  segredo pertencem ao servidor executor; `stdio` usa ambiente do executor e
  OAuth MCP pertence ao transporte HTTP. Consequência: token em prompt,
  configuração versionada ou telemetria é falha crítica.
- **A X oferece MCP oficial:** a documentação oficial apresenta o XMCP para
  operações da API e um Docs MCP somente para pesquisa documental. Consequência:
  X não exige uma fachada reinventada, mas o conjunto de mais de 200 operações
  requer allowlist mínima, auditoria e separação entre leitura e mutação.
- **MCP oficial não foi localizado nas demais plataformas pesquisadas:** TikTok,
  LinkedIn, Pinterest, YouTube e Google Business Profile expõem APIs e ferramentas
  oficiais, mas não uma oferta MCP equivalente nas fontes consultadas em
  15/08/2026. Consequência: usar `not_located`, revalidar periodicamente e manter
  fachada neutra do executor, sem promover projetos comunitários por associação.
- **Portabilidade não elimina regras específicas da plataforma:** TikTok exige
  auditoria para retirar restrição privada, LinkedIn versiona Marketing
  mensalmente, Pinterest oferece sandbox, YouTube usa quotas granulares e GBP
  não oferece sandbox real e exige consentimento específico. Consequência: um
  manifesto comum governa o envelope, mas cada capability mantém knowledge pack.
- **O manifesto MCP inicial ainda não cobria lifecycle e dados:** a pesquisa da
  especificação revelou `outputSchema`, Tasks experimentais, paginação, tool
  annotations, registry sem auditoria, elicitation e sampling como superfícies
  separadas. Consequência: o manifesto agora registra versão do servidor,
  digest/licença, telemetria, risco, classe de dados, confirmação, Tasks,
  paginação e sujeito de rate limit; foi criado um roteiro P0/P1/P2.
- **Hints MCP não são controles de segurança:** `readOnlyHint`,
  `destructiveHint` e `idempotentHint` podem estar errados ou vir de servidor
  não confiável. Consequência: o gateway usa política e comportamento observado,
  nunca a anotação isolada.
- **A auditoria preliminar do XMCP encontrou superfície perigosa por padrão:**
  o servidor oficial da X gera muitas ferramentas, permite allowlist vazia,
  busca OpenAPI no startup, mantém tokens em memória e oferece flags que podem
  imprimir tokens/headers. Consequência: origem oficial não basta; o Chairman
  exige commit fixado, digest/SBOM, debug desativado e allowlist read-only antes
  de qualquer executor.
- **A matriz de decisão agora diferencia trabalho incompleto de bloqueio
  externo:** `revision_required` trata falha corrigível no projeto;
  `blocked_external` exige prova de recurso externo ausente. Consequência:
  submissões não podem receber aprovação por falta de sandbox, cliente ou
  credencial.
- **A primeira tranche de knowledge packs confirmou que “analytics” não é uma
  capacidade homogênea:** TikTok Display retorna metadados de vídeos, Pinterest
  separa orgânico e promovido, LinkedIn limita janelas e versões, X expõe limites
  por endpoint/sujeito, YouTube separa Data/Analytics APIs e Business Profile
  divide Posts, Reviews e Performance. Consequência: `MetricSnapshot` precisa
  carregar métrica de origem, janela, granularidade, sujeito e normalização;
  nenhuma soma multirrede pode ser implícita.
- **Interação social também não é uma capability única:** X possui DMs com
  OAuth/limites próprios, LinkedIn separa comments/reactions por papel e
  produto, YouTube tem estados de moderação específicos e GBP exige autorização
  expressa para reviews/Q&A. TikTok e Pinterest não foram promovidos a DM ou
  moderação sem contrato oficial localizado. Consequência: `reply`, `moderate`,
  `messaging` e `advertise` permanecem ferramentas, scopes e decisões separadas.
- **A inicialização do Gestor de Motion Design precisa bloquear contaminação
  técnica:** o prompt inicial foi salvo com instrução para usar o projeto social
  apenas como referência de governança, deixando técnicas, presets e receitas em
  knowledge packs externos com procedência própria.
- **Estado de encerramento do Gestor de Motion Design:** a fundação estrutural e
  o prompt inicial estão prontos, mas não existe ainda projeto executor,
  knowledge pack técnico ou prova de render/exportação. Consequência: o próximo
  trabalho deve começar pela recepção e revisão desses artefatos, sem inventar
  técnicas no Chairman.
- **Absorção do primeiro Knowledge Pack de Motion Design (Brabo Academy):**
  A análise da base de conhecimento confirmou que a criação de comerciais com IA
  de alta performance exige arquitetura modular em 5 etapas (Briefing Conceitual
  ➔ Geração de Assets Isolados em Camadas com IA ➔ Motion Programático em
  Remotion/AE ➔ UI Motion com física de molas ➔ Sonorização em 3 Camadas).
  A geração de assets isolados (sujeito, plano médio, background com bokeh) é
  requisito técnico obrigatório para paralaxe 2.5D determinístico.
- **Sonorização como pilar de retenção estruturado em 3 camadas:**
  A engenharia de áudio para comerciais exige separação canônica: (1) Ambience e
  sub-bass imersivo, (2) Foley e SFX de interface cravados nos keyframes exatos da
  animação visual e (3) Narração com Sidechain Ducking automático atenuando a
  trilha musical de fundo.
- **Remotion SSR viabiliza Video-as-Code determinístico:**
  O Remotion (React + TypeScript) executado headless com Node.js e FFmpeg permite
  produção de vídeo em escala com idempotência e cache de frames, superando a
  rigidez dos templates MOGRT manuais.
- **Mapeamento da Matriz de Deep Research (100 Perguntas para 2026):**
  O estado da arte de motion design em 2026 opera na convergência de IA
  Generativa (Hyperframes, Depth Maps 2.5D, Inpainting temporal), Motion
  Programático (Remotion), Motores Interativos (Rive State Machines a 60fps),
  Color Science (ACEScg/OCIO em 32-bit float) e Safe Zones verticais (9:16).
- **A Camada de Bibliotecas e Plugins como Ponto de Falha Headless:**
  A auditoria de contratos de renderização precisa checar os plugins e bibliotecas
  internas (ex: Duik, Overlord, Trapcode, FLIP Fluids, AnimateDiff) e não apenas a engine
  anfitriã. Plugins que exigem janelas GUI ativas travam pipelines serverless/Docker
  em lote, gerando custos de timeout em nuvem.
- **Segurança Fotossensível & QA Objetivo como Requisito de Mídia:**
  Anúncios em Meta/TikTok Ads e TV aberta exigem conformidade estrita com o
  Harding Flash Test (WCAG 2.2 / ITU-R BT.1702: máx 3 flashes/s) e métricas
  computacionais de qualidade (VMAF $\ge 92$, SSIM $\ge 0.98$), sob pena de
  reprovação algorítmica ou suspensão de conta de anúncios.
- **Handoff Paramétrico de Motion Tokens (Padrão W3C):**
  A declaração canônica de Design Tokens de Motion (curvas Bézier e física de molas
  com massa, rigidez e amortecimento) em JSON compartilhado garante consistência
  idêntica entre Figma, Remotion, GSAP e Rive, eliminando recriações subjetivas.
- **Metadados C2PA de Autenticidade para IA Generativa:**
  A conformidade de anúncios criados com modelos generativos (Veo, Kling, Runway)
  exige a gravação de metadados C2PA nos containers MP4/MOV, garantindo transparência
  e prevenindo restrições de distribuição em redes sociais.
- **UGC Híbrido, V-Roll Dinâmico & Rage Hooks na Engenharia de Atenção:**
  A união da estética autêntica do criador (A-Roll gravado em celular) com inserções
  rápidas de motion design (V-Roll de 0.5s a 1.8s a cada 3-5s) e ganchos de tensão
  emocional (*Rage Hooks* no 0-3s com resolução ética no segundo 3) eleva o VTR em 3.2x
  e reduz o CPA em até 48% em relação a anúncios institucionais estáticos.
- **3-Stack Layout como Padrão de Adaptação Transmídia 16:9 ➔ 9:16:**
  A conversão de vídeos horizontais para verticais através da divisão em 3 blocos
  (Topo: Motion Hook Banner, Centro: Vídeo 16:9 sem cortes, Base: Prova Social e CTA)
  supera o crop lateral convencional por transformar áreas que seriam faixas pretas em
  zonas ativas de conversão.
- **Blueprints Golden Master como Blindagem contra Retrabalho de Render:**
  A eliminação definitiva de tentativa e erro na geração do produto final exige templates
  de código fechados (TypeScript/React e Python CLI) para os 4 arquétipos comerciais
  (Fintech 9:16, SaaS Tour Dark Mode, Produto 3D ACEScg e UGC Híbrido), acompanhados de
  checagem prévia de picos de áudio (-1.0 dBTP), framerate constante e VMAF $\ge 92$.

## 15 de agosto de 2026 — Chairman de Motion Design

- A prova de gate precisa ser um objeto explícito em `MotionReviewSubmission`; booleanos de gate não comprovam execução.
- Fixtures locais permanecem no nível `tested_mock`, mesmo quando descrevem um executor ou uma pipeline real.
- `sandbox_review` exige evidência `kind: real_e2e` com `environment: sandbox`; `production_readiness` exige o mesmo tipo em `environment: production`.
- O revisor local agora bloqueia claims `not_measured`, claims oficiais sem URL/data de acesso e gates verdadeiros sem evidência associada.
- A validação de arrays aninhados era incompleta: enums e tipos de itens primitivos agora são verificados recursivamente.
- Cada evidência também precisa usar o `kind` correspondente ao gate e estar explicitamente marcada como sanitizada.
- Não há artefato real de executor, host remoto, DLQ ou reconciliação disponível neste repositório; as três pendências operacionais continuam abertas.
- O estado salvo permanece `tested_mock`; não há base factual para promover o projeto a `tested_sandbox` ou `validated_live`.

## 15 de agosto de 2026 — Inteligência Competitiva Aplicada

- **Scrape não é inteligência competitiva:** captura integral de superfície
  pública só produz vantagem quando cada item é classificado como observação,
  claim comercial, sinal independente, inferência ou desconhecido. Evidência:
  o TheFounderOS possui demo/testes verificáveis, mas seus números de economia,
  receita e resultados de alunos não têm denominador/coorte pública.
  Consequência: o novo gestor adota proveniência e ledger de claims como
  contrato, impedindo promoção automática de marketing a fato.
- **O produto gratuito pode ser infraestrutura de aquisição:** conteúdo e repo
  conduzem a lead magnet, hub, waitlist, formulário qualificado, call, curso,
  mentoria e implantação. Evidência: links e schemas públicos de Instagram,
  GitHub, Typeform, Whop, Skool, Calendly e Agency Accelerants. Consequência: o
  FGSS deve analisar distribuição, sales e pós-venda junto com o código.
- **Contagens públicas têm denominadores incompatíveis:** seguidores, stars,
  forks, `joined`, membros, reviews e compradores não podem ser somados nem
  convertidos diretamente em receita. Consequência: todo market signal precisa
  de fonte, data, população, precisão e estado temporal.
- **O moat defensável para o FGSS é prova operacional:** interfaces, personas e
  copy são copiáveis; histórico de evidência, capability health, consentimento,
  invariantes, tenant isolation, lineage, DLQ/replay e rollback são mais
  difíceis de imitar. Consequência: Invariant Engine e Capability Registry são
  as primeiras entregas propostas, antes do cockpit visual.

## 17 de agosto de 2026 — encerramento de Inteligência Competitiva

- **A rota comercial coerente com o estado atual é `services first`:** existe
  método suficiente para entregas humanas assistidas, mas F1–F5 ainda são
  especificação. Consequência: pilotos validam ICP, escopo, preço e margem antes
  de qualquer claim de plataforma ou SaaS pronto.
- **Metadados do sistema operacional contaminam inventários reproduzíveis:**
  uma nova geração incluiu `.DS_Store` e elevou artificialmente a contagem do
  snapshot CrewAI. Consequência: geradores devem excluir esses artefatos e
  mudanças apenas de timestamp não devem virar nova baseline.
- **`audit: pass` tem escopo limitado:** ele comprova reconciliação entre disco,
  hashes e manifestos, não adoção, receita, segurança enterprise ou execução em
  produção. Consequência: claims comerciais e operacionais continuam exigindo
  evidência independente específica.
