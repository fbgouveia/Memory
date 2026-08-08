# Pendências do ecossistema CÉREBRO

Atualizado em: 30 de julho de 2026.

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

## FGSS brain

- [ ] Verificar a integração global de Claude e Gemini em cada ambiente antes de
  declarar que todas as LLMs usam o cérebro automaticamente.
- [ ] Revalidar o plugin do Codex em sessão nova depois de qualquer mudança no
  adaptador.
- [ ] Manter `fgss-brain.json` como fonte única dos parâmetros e executar os
  validadores sempre que ele mudar.
- [x] Confirmar, numa sessão NOVA do Claude Code, que o hook `SessionStart` criado
  em 30/07 realmente injeta o protocolo mestre. (Corrigida a estrutura aninhada
  de hooks no settings.json do Claude para execução direta.)
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

## FGSS Gestor de Automacao
- [x] Criar o `README.md` explicativo da arquitetura na pasta `FGSS Gestor de Automacao`. (Concluído)
- [x] Criar o arquivo `AGENTS.md` definindo o comportamento do Chairman de Automação. (Concluído)
- [x] Definir o schema JSON padrão do `automation-manifest.json`. (Concluído)
- [x] Implementar a estrutura inicial para a Lâmina de Contingência (DLQ e erros). (Concluído)
- [x] Criar o utilitário CLI para scaffold de novas automações. (Concluído)
- [x] Construir testes de quebra de infraestrutura simulando quedas de banco e Redis para auditar a integridade de gravação no DLQ do worker. (Concluído em 09/08/2026: DLQ dual Redis+JSONL implementada; `test_chaos_break.js` aprova 200 jobs com `docker stop` forçado do Redis mid-run — 0 perdidos, 0 duplicatas, PII mascarado; fallback JSONL comprovado com Redis down. Prova em `ATUALIZACOES.md`.)

Ao fechar um item, marque-o aqui e registre a prova em `ATUALIZACOES.md`.


