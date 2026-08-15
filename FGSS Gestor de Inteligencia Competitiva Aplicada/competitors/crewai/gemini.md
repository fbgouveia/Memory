# Contexto operacional — CrewAI

## Objetivo

Congelar e destilar a superfície pública do CrewAI (site, repositório MIT,
ecossistema GitHub + PyPI), tratá-lo como concorrente do FGSS.io e produzir
uma especificação de incorporação original, auditável e juridicamente segura.

## Contrato

- Fonte comercial: `https://crewai.com/`.
- Código público: `crewAIInc/crewAI`, revisão
  `754d7323beb2fd042e33444a115ea2d5a47193f0`, licença MIT.
- Cobertura significa 100% da superfície pública descoberta e congelada, não
  100% da empresa, da comunidade ou do produto pago.
- Arquivos comerciais servem como evidência de pesquisa. Somente o snapshot do
  repositório tem licença MIT confirmada.
- Promessas comerciais, código open-source e capacidades efetivamente
  implementadas em produção por usuários permanecem categorias separadas.

## Hipótese central

O ativo diferenciador do CrewAI é o modelo "framework OSS → plataforma
enterprise": crews e flows como primitivos de orquestração, comunidade massiva
como topo de funil, telemetria que liga uso OSS a contas enterprise, e lock-in
via SSO/RBAC/AMP Suite. A melhor incorporação no FGSS não é um fork do
framework, mas um runtime governado por invariantes, evidência, aprovação,
execução e auditoria — onde o FGSS compete por governança e prova de valor,
não por quantidade de agentes ou cadência de release.

## Critérios de decisão

1. Verdade antes de apresentação: estados reais e conectores honestos.
2. Ações de escrita passam pelo Pivô, sandbox, aprovação e trilha de auditoria.
3. Conhecimento ingressa como fonte → sinal → hipótese/claim → fato aprovado →
   memória; material concorrente nunca vira verdade operacional automática.
4. Toda adaptação precisa de proprietário, risco, teste de aceite e rollback.
5. Graphify é suficiente para o próximo snapshot; Code Graph RAG só entra se
   uma futura pergunta não puder ser respondida pela fonte e pelo grafo
   persistido.

## Referências internas

- `CONTRACT.md`: limite e critério de conclusão.
- `ECOSYSTEM_CONTRACT.md`: fronteiras da coleta externa.
- `findings.md`: fatos e hipóteses.
- `HANDOFF.md`: estado operacional e pendências.
- `knowledge/`: destilação.
- `inventory/audit_report.json`: resultado da auditoria.
