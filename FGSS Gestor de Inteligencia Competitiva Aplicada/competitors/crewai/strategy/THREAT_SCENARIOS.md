# Cenários competitivos e respostas — CrewAI × FGSS

> Baseline: captura 2026-08-15/16. Probabilidade e impacto são `inference`
> baseados em sinais observáveis (cadência, telemetria, enterprise signals,
> comunidade). Não são previsões — são hipóteses com gatilho de detecção.

| Cenário | Probabilidade | Impacto | Sinal antecipado | Resposta FGSS |
| --- | --- | --- | --- | --- |
| CrewAI acelera cadência e adiciona budget/egress nativos | média/alta | alto | release notes citam "shared budget", "egress allowlist", "credential broker" | acelerar moat de evidence graph, invariantes e capability proven; não competir em feature parity |
| CrewAI abre auth/tenant para o OSS (reduz split comercial) | baixa/média | alto | SSO/RBAC entram no framework MIT, não só no AMP | diferenciar em consent ledger, evidence graph e dados históricos — não em "tem SSO" |
| CrewAI transforma AOP em "OS de agentes" padrão de categoria | alta | médio/alto | parcerias (Nvidia, PwC, AWS, Cloudera, HPE), "IA Enablers List", Enterprise Tech 30 | interoperar/importar conceitos via MCP/A2A; diferenciar em governança e prova |
| CrewAI comprime preço via tier mid-tier self-serve | média | médio | aparece plano pago entre Free e Enterprise no pricing | separar self-serve, assisted e governed; valor FGSS em evidência, não em preço |
| Incidente de segurança/reputação (sandbox, prompt injection, vazamento) | média | categoria inteira | issues, advisories, status.crewai.com, reclamações no fórum | não explorar o incidente; publicar baseline verificável, threat model e transparência |
| Telemetria/default-on vira questão regulatória | média | alto | enforcement GDPR/AI Act sobre fingerprinting, `project_id` OSS→enterprise | privacy-by-design, consent ledger, GPC, claim substantiation como produto |
| Dependência de pessoa-chave (joaomdmoura, 646 commits) | baixa/média | alto para eles | menor cadência, fork hostil, saída anunciada | FGSS com método institucional, certificação e partners — não herói individual |
| Concorrente copia linguagem FGSS (governance, provenance, evidence) | alta | baixo | claims de "provenance" e "evidence graph" no site/blog | evidência executável, certificações e histórico não são copiáveis por copy |
| Comunidade CrewAI constrói sidecar de governança open source | média | médio | repo "crewai-governance", "crewai-budget", "crewai-egress" aparece na org | absorver como referência; competir em integração nativa e SLA, não em plugin |
| Plataforma (PyPI/GitHub) muda termos ou corta alcance | baixa | médio | queda de distribuição, mudanças de API, rate limit | canais próprios, consented first-party data, atribuição resiliente |
| CrewAI lança SDK em TS/Go/Rust (quebra limitação Python) | baixa/média | médio | monorepo adiciona `lib/crewai-ts` ou pacote npm | FGSS mantém contratos multi-linguagem e portabilidade real como moat |
| CrewAI adquire ou absorve concorrente de governança | baixa | médio | anúncio de aquisição, repo movido | FGSS mantém independência, evidence graph e execução comprovada como diferenciais |

## Kill criteria

Reavaliar a tese competitiva se: CrewAI lançar budget compartilhado, egress
allowlist e credential broker nativos no OSS; auth/tenant/SLO comprovados
entrarem no framework MIT; surgirem cases verificáveis com coorte e retenção
enterprise (não showcase `commercial_claim`); `joaomdmoura` transferir
autoria ou a org mudar de controle; ou o FGSS local revelar produto já
equivalente em governança. Esses eventos invalidam partes materiais do
scorecard e exigem nova captura, não edição silenciosa da história.

## Princípio de resposta

Não competir em cadência de release, número de integrações ou stars OSS.
Competir em governança, evidence graph, execução comprovada e valor
auditável. Toda vantagem copiável (cadência, exemplos, enterprise features,
telemetria) deve ser tratada como temporária. A defesa do FGSS está em
evidência acumulada, invariantes executáveis e consent ledger — não em
clonar o framework OSS.
