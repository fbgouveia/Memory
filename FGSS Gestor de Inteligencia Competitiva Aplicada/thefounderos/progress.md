# Progress — provas e decisões

## 2026-08-15

- Contrato de absorção criado antes da coleta.
- Coletor público executado do zero; rotas, iframes e ativos same-origin foram
  congelados. Links externos foram apenas inventariados.
- Auditor corrigido para classificar iframes HTML como páginas e detectar
  órfãos. Nova coleta e auditoria: `pass`, zero erros.
- Repositório público congelado na revisão
  `6b852ab77c2fb43133c55de52202f99a87585830`; `.git` e `node_modules` não foram
  incorporados, licença MIT foi preservada.
- Validação upstream:
  - `npm ci`: passou;
  - `npm test`: 101 arquivos, 888 testes, todos passaram;
  - `npm run typecheck`: passou;
  - `npm run build`: passou com acesso de rede para as fontes do Google; a
    primeira tentativa restrita falhou somente na resolução desse host;
  - seed isolado em `/tmp/thefounderos-demo.db`: passou, com seis departamentos,
    30 agentes, 36 ferramentas e 13 itens de roadmap.
- Graphify em ambiente isolado: 1.773 nós, 4.270 arestas, 90 comunidades, 99%
  de arestas extraídas, nenhum ciclo de importação reportado.
- Code Graph RAG não foi acionado: fonte, testes e grafo responderam às questões
  arquiteturais sem custo adicional.
- Dossiês de produto, técnica, ativos, concorrência e incorporação concluídos.
- Ecossistema externo allowlisted coletado: Agency Accelerants, Typeforms,
  Trakyo, GitHub e metadados mínimos de Instagram/Whop/Skool/Merydian/
  OperatorOS. Nenhum formulário, login, compra ou teste de alvo real ocorreu.
- Escada de valor, funil, qualificação, claims, voz do cliente, economia,
  segurança, supply chain, scorecard, battlecard e cenários consolidados.
- Monitor de deltas de manifestos criado; LinkedIn respeitado após HTTP 999 e
  usado apenas como evidência pública indexada.

## Estado terminal deste bloco

Cobertura pública: concluída conforme `CONTRACT.md`. Implementação no produto
FGSS.io: pendente da identificação/autorização do repositório do produto.
