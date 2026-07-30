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

## Como adicionar uma descoberta

Registre data, evidência e consequência. Não registre opinião como fato. Se a
descoberta gerar trabalho, crie também um item em `PENDENCIAS.md`.
