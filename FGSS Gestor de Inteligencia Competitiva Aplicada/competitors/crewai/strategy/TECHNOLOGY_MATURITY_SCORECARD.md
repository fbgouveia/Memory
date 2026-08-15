# Scorecard de maturidade tecnológica — CrewAI

> Baseline: captura GitHub `crewAIInc/crewAI` (commit
> `754d7323beb2fd042e33444a115ea2d5a47193f0`, 2026-08-13) + PyPI `crewai`
> + site `crewai.com`, 2026-08-15/16. Classificação em cada linha.

Escala: 0 ausente, 1 claim, 2 parcial/demo, 3 demonstrado no repo, 4 pronto
para produção com prova pública. A nota mede apenas evidência disponível.

| Dimensão | Nota | Evidência/limite |
| --- | ---: | --- |
| Clareza de produto | 4 | Crews/Flows bem definidas, README e docs coerentes `observation` |
| UX de demonstração | 3 | CLI, TUI, Studio visual (commercial); scaffolding em segundos `observation` |
| Modelagem de domínio | 4 | Agent/Task/Crew/Flow/Process/Memory/Knowledge/Skill com tipos Pydantic `observation` |
| Qualidade de código | 4 | 310 test files, mypy strict, ruff, bandit, pre-commit, commitizen `independent_signal` |
| CI/release | 4 | 412 versões PyPI, 40 estáveis em ~8 meses, ~5/mês, GH Actions `independent_signal` |
| Integrações | 4 | 9 LLM providers, 4 vector stores, MCP, A2A, 17+ observability backends `observation` |
| Agentes/autonomia | 3 | role-based, delegação, planning; comunidade relata "managed LLM calls" sem flags manuais `inference` |
| Conhecimento/memória | 3 | short/long/entity/unified memory + knowledge sources; governança de promoção não demonstrada `observation` |
| Autenticação/autorização | 2 | SSO Okta + RBAC no Enterprise; OSS framework não tem auth própria `observation` |
| Multi-tenancy | 2 | `project_id` liga OSS a enterprise (1.15.11); tenant isolation no tier pago `observation` |
| Supply chain | 3 | MIT no repo, pip-audit, bandit; `info.license=None` no PyPI `independent_signal` |
| Privacidade/consentimento | 2 | telemetria default-on com opt-out; policy de fórum retém IP por "[NUMBER OF DAYS]" `observation` |
| Observabilidade/SLO | 4 | OpenTelemetry nativo, 17+ backends (Datadog, Langfuse, Phoenix, MLflow...) `observation` |
| Backup/DR/rollback | 3 | checkpointing, replay tasks from latest kickoff, state `RuntimeState` `observation` |
| Acessibilidade | 1 | sem auditoria/critério público observado na docs `unknown` |
| Portabilidade | 4 | MIT, Python 3.10-<3.14, "download your agents as code", deploy cloud/VPC/on-prem `observation` |
| Segurança | 3 | sandbox escape resolvido (1.11.0rc1), GHSA bumps, CodeQL; threat model formal `unknown` `observation` |

**Leitura:** CrewAI é framework OSS maduro em código, testes, release e
integrações — significativamente acima do TheFounderOS em engenharia
produtiva. As lacunas observáveis estão em três frentes: (1) governança de
autonomia (orçamento, egresso, validação de claims) que o framework delega
ao usuário "bolts on"; (2) auth/tenant/consent como tier pago, não como
produto; (3) telemetria default-on com policy de retenção não preenchida.

O FGSS não deve competir em cadência de release nem em número de integrações.
Deve competir transformando as três lacunas em critérios de aceite do
produto: invariantes executáveis, capability registry com cinco estados,
auth/tenant/consent por padrão, cockpit de exceções com lineage e rollback.
A tangibilidade do `crewai create` deve ser igualada por um demo vertical
(F5) que abre proveniência de cada número — não por clonar o CLI.
