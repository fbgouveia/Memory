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

## Regra de manutenção

Cada atualização deve dizer o que mudou e como foi comprovada. Não declare
produção ativa quando algo foi validado apenas localmente.
