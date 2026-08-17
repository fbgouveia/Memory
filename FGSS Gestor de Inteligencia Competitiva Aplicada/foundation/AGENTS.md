# Foundation — modelagem FGSS.io

Especificação viva da fundação do produto FGSS.io, derivada de princípios
absorvidos do dossiê TheFounderOS e de pesquisas futuras.

## Estado

**PRÉ-IMPLEMENTAÇÃO.** O repo real do FGSS.io foi localizado como privado em
`fbgouveia/Felipe-Portfolio`, mas está em outro computador e não ficou
acessível nesta sessão (ver `PENDENCIAS.md` global). Tudo aqui é especificação,
não código em produção. Sem abrir e mapear o repo real, F1/F2 são specs; não
declarar implementação.

## Backlog canônico (F1–F5)

1. **F1 Invariant Engine** — schema de estados, transições, pré-condições,
   severidade, teste e explicação de recusa. Um sistema só é "encoded" se
   suas invariantes forem executáveis, não apenas documentadas.
2. **F2 Capability Registry** — `advertised` / `implemented` / `configured` /
   `healthy` / `proven` para cada capacidade. Owner, credencial, risco,
   idempotência e rollback. Presença visual não equivale a integração
   operacional.
3. **F3 Cockpit de exceções** — toda métrica abre lineage; toda escrita
   abre simulação, aprovação e trilha. Decisões são logadas, não
   invisíveis.
4. **F4 Memory Promotion** — `source → signal → claim → fact → memory`;
   confiança, validade, conflito, revisão e supersessão. Conhecimento
   ingressa classificado; só vira fato com prova independente.
5. **F5 Blueprint SDK** — domínios originais versionados, fixtures, wizard,
   modo demo claramente rotulado e troca de provider sem alterar UI.

## Gates do produto FGSS

Auth por recurso, tenant isolation, consent ledger, secrets/rotação, SBOM,
SLO, evidence graph, DLQ/replay, rollback, egress allowlist, quotas, kill
switch, threat model (SSRF, prompt injection, webhook replay, exfiltração
por connector, confused deputy), DPIA, build provenance, backup/restore.

## Princípio de originalidade

O FGSS.io supera por **governança, evidence graph, execução comprovada e
valor auditável** — não por quantidade de agentes, logos ou claims.

- Cada conhecimento tem origem.
- Cada capacidade tem estado real.
- Cada ação tem governança.
- Cada resultado tem prova.

## O que NÃO fazer

- Não copiar layout, marca, imagens, personas ou copy do TheFounderOS.
- Não presumir que a arquitetura demo do concorrente serve como arquitetura
  FGSS.
- Não implementar F1/F2 sem o repo real localizado e autorizado.
- Não declarar integração global sem validar sessão nova.

## Próximo passo

Abrir e autorizar o repo real do FGSS.io no outro computador, ler suas
instruções e mapear os componentes atuais antes de editar. Até isso ocorrer,
F1/F2 permanecem especificação. Começar por F1 (Invariant Engine) e F2
(Capability Registry) com testes de contrato — nunca pela interface.
