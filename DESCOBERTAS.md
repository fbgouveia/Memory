# Descobertas do ecossistema CÉREBRO

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

- A sintaxe correta do hook `SessionStart` no Claude Code requer que a chave mapeie diretamente para um array plano de objetos de ação de comando (`{"type": "command", "command": "..."}`). Evidência: o formato anteriormente configurado aninhado sob `{ "hooks": [ ... ] }` impedia que os comandos fossem executados no início das sessões. Consequência: simplificamos a estrutura em `~/.claude/settings.json`, corrigindo o disparo automático do protocolo mestre.
- Modificar o arquivo `.env.example` de um submódulo (neste caso, `code-graph-rag` por conta do script `sync_runtime_config.py` do cérebro) faz com que o repositório pai enxergue o submódulo como dirty/modificado. Evidência: o status indicava `modified content`. Consequência: configurar `ignore = dirty` no `.gitmodules` para o submódulo remove este ruído e previne o commit de ponteiros acidentais no repositório do cérebro.


## 9 de agosto de 2026

- **Processo Dinâmico de Pesquisa (Preflight):** Fixar um conjunto de perguntas-chave estático para autoatualização engessa a IA em padrões passados. Evidência: a evolução rápida de APIs (como Gemini, OpenAI, n8n) torna checklists estáticos obsoletos em meses. Consequência: adotar queries de busca dinâmicas geradas a partir da interseção entre o escopo da tarefa e o horizonte tecnológico atual no início das sessões.
- **Governança de Automações:** Sem um manifesto unificado (`automation-manifest.json`), o crescimento do ecossistema de automações gera amnésia técnica e financeira. Evidência: dificuldade de rastrear quem usa qual API e com qual custo em projetos legados. Consequência: toda nova automação passará a conter um manifesto de metadados próprio.
- **E-books vs. Resumos de Aulas (Extração de PDF):** Os e-books do material de treinamento do Mestres da Automação são PDFs de difícil extração de texto por `pypdf`. Evidência: arquivos txt resultantes possuíam menos de 5KB com cabeçalhos de licença vazios. Consequência: a ingestão foca nos resumos de aulas estruturados (88 arquivos válidos), que contêm 100% da matéria acadêmica, roteiros de reunião, checklists de implementação e a minuta do contrato de serviços.
- **Roteiro SPIN Selling e Modelo de Contrato:** Identificados e consolidados o roteiro de reunião baseado em SPIN Selling (com ramificações para infoprodutos e negócios locais) e o contrato de serviços de automação com isenções de responsabilidade para bloqueios de contas. Evidência: leitura direta e parsing dos resumos da aula de reuniões e precificação. Consequência: esses elementos foram copiados como seções permanentes na Bíblia de Automação para acesso imediato.

## Como adicionar uma descoberta

Registre data, evidência e consequência. Não registre opinião como fato. Se a
descoberta gerar trabalho, crie também um item em `PENDENCIAS.md`.

