# Battlecard FGSS × CrewAI

## Enquadramento

CrewAI vende ao time de engenharia a velocidade de orquestrar agentes
autônomos em Python, e ao enterprise o lock-in de uma plataforma de
operação (AMP/AOP). O FGSS deve vender uma promessa mais difícil de copiar:
**cada conhecimento tem origem, cada capacidade tem estado real, cada ação
tem governança e cada resultado tem prova**.

## Quando o concorrente vence

- comprador é time Python/ML e quer framework OSS com 57k stars e 412
  versões PyPI;
- velocidade de scaffolding (`crewai create crew` em segundos) é decisiva;
- comunidade, courses e DeepLearning.ai reduzem curva de adoção;
- observability via OpenTelemetry + 17 backends é requisito e já existe;
- MCP e A2A como primitivas nativas são decisivas para integração;
- tier Enterprise com SSO Okta/RBAC/PII redaction já cobre compliance;
- cliente aceita "bolts on something external" para budget, egress e
  isolamento de credenciais.

## Quando o FGSS deve vencer

- empresa exige audit trail, aprovação, segregação de credenciais e rollback
  como produto, não como sidecar;
- várias fontes discordam e precisam de proveniência/validade de claims;
- orçamento compartilhado entre agentes é requisito — não "shared spend
  ceiling que ninguém respeita" (thread 7726);
- egress allowlist e isolamento de credenciais são gate, não optional;
- processo hierárquico precisa ser auditável e explicável, não opaco;
- cliente quer operar multi-tenant sem telemetria que liga OSS a contas
  enterprise via `project_id` sem consentimento;
- resultado precisa resistir a auditoria financeira, jurídica ou de
  segurança;
- times não-Python (TS/Go/Rust) precisam de orquestração transversal.

## Mensagens de contraste honestas

| Objeção | Resposta FGSS |
| --- | --- |
| "Eles têm 57k stars e 412 versões no PyPI." | "Adoção OSS é sinal de interesse, não de receita nem de retenção. No FGSS, cada versão traz invariantes testadas e证据 por evento, não só contagem." |
| "É Python-native e open source MIT." | "Respeitamos a escolha. O FGSS prioriza portabilidade: contratos multi-linguagem, exportação de contexto e governança no produto, não no tier pago." |
| "Eles têm Studio visual e AI copilot." | "Ótimo para prototipar. No FGSS, cada número do cockpit abre linhagem e cada escrita abre simulação, aprovação e trilha." |
| "Eles suportam MCP, A2A, 9 LLM providers e 17 backends de observability." | "Também valorizamos protocolos abertos. O FGSS acrescenta threat model por connector (prompt injection, SSRF, exfiltração) e capability registry que separa advertised de proven." |
| "Eles têm SSO, RBAC e PII redaction no Enterprise." | "No FGSS, auth por recurso, tenant isolation e consent ledger são do produto, não do tier pago. Não pedimos que você pague para ter governança." |
| "A telemetria é anônima e desativável." | "Respeitamos. O FGSS usa consent ledger com finalidade, retenção e exclusão por padrão — e não liga uso do framework a contas enterprise sem opt-in." |
| "Eles lançam ~5 releases por mês." | "Cadência é sinal de capacidade, não de estabilidade. 789 issues/PRs abertos. O FGSS distingue advertised de proven e mede saúde real." |

## Não dizer

- não afirmar que CrewAI viola privacidade, frauda métricas ou não tem
  clientes — `commercial_claim` não verificado não é prova negativa;
- não transformar a telemetria default-on em "espionagem" — é `observation`
  com opt-out, não incidente;
- não chamar usuários OSS de clientes pagantes (stars ≠ receita);
- não afirmar que o teto de orquestração é um bug — é uma fronteira de
  escopo que o próprio CrewAI reconhece ("CrewAI only owns the first
  problem");
- não afirmar superioridade multi-linguagem do FGSS antes de SDK não-Python
  existir — hoje é `unknown`;
- não prometer superioridade FGSS antes de os gates (F1-F5) existirem no
  produto.

## Prioridade de produto

1. Invariant Engine + claim/evidence ledger (F1, F4) — responde ao teto de
   orquestração com validação de claims entre agentes.
2. Capability Registry com cinco estados reais (F2) — responde ao
   "advertised vs proven" que CrewAI não separa no OSS.
3. Auth/tenant/secrets por padrão e approval gate (F3) — responde ao
   isolamento de credenciais e egress que a comunidade pede como sidecar.
4. Orçamento de autonomia compartilhado por crew (F2) — responde ao
   "runaway spend" sem shared ceiling (thread 7726).
5. Cockpit de exceções com lineage, replay e rollback (F3) — responde ao
   processo hierárquico opaco (thread 7629).
6. Consent ledger e privacidade-by-design (gates) — responde à telemetria
   default-on e `project_id` OSS→enterprise sem policy pública.
7. Demo vertical tão rápida quanto `crewai create`, mas alimentada por
   provas (F5).
