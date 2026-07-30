# Pendências do ecossistema CÉREBRO

Atualizado em: 30 de julho de 2026.

Este arquivo registra apenas trabalho ainda aberto relacionado ao `FGSS brain` e
ao `FGSS MAIN BRAIN`. Histórico concluído deve ir para `ATUALIZACOES.md`.
Constatações importantes devem ir para `DESCOBERTAS.md`.

## FGSS MAIN BRAIN — ativação

- [ ] Preencher `SUPABASE_SERVICE_ROLE_KEY` somente no backend do Felipe
  Portfolio. O nome já existe no `.env` local, mas o valor está vazio.
- [ ] Gerar e preencher `FGSS_MAIN_BRAIN_SECRET` com pelo menos 32 caracteres.
  O nome já existe no `.env` local, mas o valor está vazio.
- [ ] Configurar essas mesmas variáveis no ambiente real do Admin. O `.env`
  local não configura VPS, Vercel ou Docker automaticamente.
- [ ] Conferir a identificação do projeto Supabase antes de qualquer alteração.
- [ ] Aplicar `FGSS MAIN BRAIN/supabase/001_fgss_main.sql`.
- [ ] Executar `FGSS MAIN BRAIN/supabase/verify_fgss_main.sql`; todas as consultas
  devem retornar zero linhas.
- [ ] Registrar o primeiro projeto, coletor, demanda e política de observação.
- [ ] Provar o fluxo ponta a ponta com evento válido, duplicado, adulterado,
  vencido, nonce repetido e campo não autorizado.
- [ ] Conectar apenas um subprojeto piloto e observar por sete dias antes de
  replicar para os demais.
- [ ] Definir retenção, agregação e alertas usando o volume real do piloto.
- [ ] Converter snapshots cumulativos de custo em deltas antes de tratá-los como
  custo canônico. Nunca somar snapshots repetidos.

## FGSS brain

- [ ] Verificar a integração global de Claude e Gemini em cada ambiente antes de
  declarar que todas as LLMs usam o cérebro automaticamente.
- [ ] Revalidar o plugin do Codex em sessão nova depois de qualquer mudança no
  adaptador.
- [ ] Manter `fgss-brain.json` como fonte única dos parâmetros e executar os
  validadores sempre que ele mudar.
- [ ] Confirmar, numa sessão NOVA do Claude Code, que o hook `SessionStart` criado
  em 30/07 realmente injeta o protocolo mestre. Até agora só o comando do hook foi
  executado isoladamente; o disparo em sessão real não foi observado.
- [ ] Decidir se o `andrej-karpathy/SKILL.md` (persona, 54 KB) permanece no
  `FGSS brain` ou migra para as skills sob demanda. Hoje ele fica no repositório
  do cérebro mas está explicitamente fora do FGSS Loop.

## Versionamento do CÉREBRO

- [ ] A raiz do `CÉREBRO` não é repositório git. `PENDENCIAS.md`,
  `DESCOBERTAS.md`, `ATUALIZACOES.md`, `AGENTS.md`, `README.md` e os manuais são
  a constituição do ecossistema e não têm histórico nem backup. Qualquer agente
  pode sobrescrevê-los sem como voltar atrás. Decidir entre `git init` local ou
  rotina de backup versionado.
- [ ] `~/.claude` também não é versionado e agora contém o hook `SessionStart`
  do protocolo mestre. Exige `.gitignore` cuidadoso antes de qualquer
  versionamento — há credenciais no diretório.
- [ ] O submódulo `code-graph-rag` dentro de `FGSS brain` está `-dirty` (alterações
  não commitadas dentro dele). Origem desconhecida, anterior a 30/07. Investigar
  antes que alguém commite o ponteiro por engano.

## Fonte detalhada do Portfolio

As pendências completas da integração com o Admin também estão registradas em:

`../Felipe Portfolio/.agent/tasks/HANDOFF_maquina-autonoma.md`, seção
“FGSS MAIN BRAIN — ativação e primeiro projeto”.

Ao fechar um item, marque-o aqui e registre a prova em `ATUALIZACOES.md`.
