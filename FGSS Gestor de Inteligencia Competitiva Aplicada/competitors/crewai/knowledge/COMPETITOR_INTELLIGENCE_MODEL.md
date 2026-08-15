# Modelo integral de inteligência do concorrente — CrewAI

Adaptado do modelo usado para TheFounderOS. “Scrape” é só a camada de
aquisição. Um dossiê útil separa o que o concorrente **publica**, o que ele
**implementa**, o que o mercado **confirma** e o que ainda é **hipótese**.
Cada camada traz a pergunta, a evidência desejada e o **Estado atual**
preenchido apenas com o que é verificável nos dados de ecossistema
(GitHub `crewAIInc/crewAI` + PyPI `crewai`), capturados em 2026-08-15.

> Captura-base: `inventory/ecosystem_manifest.json`,
> `captured_at` 2026-08-15T14:40:45.594018+00:00, 10 registros, 0 erros.
> Classificação: `observation`, `commercial_claim`, `independent_signal`,
> `inference`, `unknown`. Ausência de prova é `unknown`.

| Camada | Pergunta | Evidência desejada | Estado atual |
| --- | --- | --- | --- |
| Identidade | Quem controla marca, empresa, domínios e contratos? | entidades legais, termos, marcas | `parcial` — org GitHub `crewAIInc` (Organization, criada 2024-05-23), blog `https://crewai.com`, localização “United States of America”, Twitter `crewaiinc`. Entidade legal formal, registros de marca e domínios `crewai.com` são `unknown` nestes dados. |
| Categoria | Qual problema, comprador e alternativa ele substitui? | copy, demos, entrevistas | `forte na oferta OSS` — descrição: “Framework for orchestrating role-playing, autonomous AI agents… collaborative intelligence”. Comprador real (desenvolvedor vs. empresa) é `inference` (enterprise signals sugerem ambos), não verificado. |
| Produto | O que existe, está configurado e funciona? | código, testes, build, uso real | `forte no repo público` — framework Python MIT, `requires_python <3.14,>=3.10`, 412 versões no PyPI, versão 1.15.16 publicada 2026-08-14 sincronizada com GitHub. Uso em produção pelos usuários é `unknown`. |
| Tecnologia | Arquitetura, dados, modelos, integrações e dívida | snapshot, grafo, SBOM, issues | `forte na superfície` — Python, MIT, topics `agents/ai/ai-agents/aiagentframework/llms`; 100 commits capturados; issues/PRs ativos (789 abertos). SBOM, grafo de dependências e dívida técnica detalhada exigem análise do código-fonte (bloco próprio). |
| Segurança | Auth, tenant, segredos, supply chain, incidentes | threat model, audit, pentest autorizado | `parcial` — release notes citam “resolve code interpreter sandbox escape issue” (1.11.0rc1), bumps de `aiohttp`/`cryptography`/`idna` para limpar GHSA, “Clear CodeQL incomplete URL substring sanitization alerts” (1.15.11). Indicam processo de segurança ativo, mas threat model e audit formais são `unknown`. |
| Conhecimento | Ontologia, método, prompts, invariantes e teoria | documentação e comportamento | `parcial` — conceitos públicos (Crew, Agent, Task, Tool, Flow, Skill, Memory, A2A) aparecem em release notes; documentação detalhada (`docs.crewai.com`) é bloco separado, não capturada aqui. |
| Experiência | Jornada, ativação, tempo até valor, acessibilidade | walkthrough e métricas | `parcial` — repositórios de onboarding visíveis (`crewAI-quickstarts`, `crewAI-examples` 6.132 stars, `awesome-crewai`, `template_*`). Tempo até valor e métricas de ativação são `unknown`. |
| Oferta | Packaging, preço, garantia, contrato e upsells | checkout, termos, páginas públicas | `moderado no sinal` — existe tier Enterprise/Plus (SSO Okta, RBAC, A2A enterprise, “Plus API token”) via O1–O8, mas **preço, limites e contrato são `unknown`** (estão em `crewai.com`, fora deste bloco). |
| Vendas | ICP, qualificação, objeções, call e follow-up | formulário, CRM, mensagens | `fraco nestes dados` — nenhum formulário/CRM/checkout em GitHub/PyPI. ICP só inferido (desenvolvedor + enterprise). Execução interna de vendas é `unknown`. |
| Distribuição | Conteúdo, SEO, comunidade, afiliados e loops | canais e séries temporais | `forte no desenho OSS` — 57.102 stars, 8.152 forks, 34 repos públicos, 2.221 followers da org, exemplos/quickstarts/awesome-list como topo de funil. Histórico temporal curto (uma captura); SEO e afiliados são `unknown`. |
| Cliente | Resultado, retenção, churn, NPS, suporte, reembolso | reviews verificadas e coortes | `fraco` — `companies-powered-by-crewai` é `commercial_claim` (showcase, não prova). NPS, churn, retenção e reembolso são `unknown`. |
| Economia | Receita, CAC, LTV, margem, payback e concentração | contas/relatórios ou sinais auditáveis | `não verificável publicamente` — downloads PyPI = `-1` (`unknown`), receita/MRR/ARR não expostos. Nenhum sinal auditável de economia nestes dados. |
| Operação | Equipe, parceiros, capacidade, SLA e implantação | vagas, organograma, contratos, cases | `parcial` — top contribuidores visíveis (joaomdmoura 646, greysonlalonde 522, lorenzejay 251, lucasgomide 167, bhancockio 145); ≥100 contribuidores. Equipe formal, SLA, implantação e parceiros são `unknown`. |
| Ecossistema | Plataformas, dependências, parceiros e poder de canal | integrações e termos de terceiros | `forte na superfície` — 34 repos cobrindo core, tools, examples, quickstarts, enterprise, templates; integrações referenciadas (Bedrock, Db2, Qdrant, Okta, MCP). Termos de terceiros e poder de canal são `unknown`. |
| Legal/ética | Privacidade, consentimento, IP, claims e jurisdição | políticas, DPIA, licenças | `parcial` — licença MIT confirmada no repo (`independent_signal`); `info.license=None` no PyPI (`observation`). Política de privacidade, DPIA, jurisdição e telemetria (release 1.15.11: “detect coding agents in telemetry”, “Add project_id to link OSS usage to an enterprise account”) levantam questão de privacidade a aprofundar. |
| Velocidade | Roadmap, releases, mudanças e resposta a falhas | deltas versionados | `baseline criado` — 40 estáveis em ~8 meses (1.7.2→1.15.16), ~5/mês, com pré-releases intercalados; 11 estáveis em ~6 semanas em jul–ago/2026. Linhagem completa v0.x→v1.x (tags). Resposta a falhas de segurança rápida (sandbox escape, GHSA bumps). |
| Moat | O que continua valioso se código/copy forem copiados? | retenção, dados, distribuição, processo | `hipótese: distribuição + comunidade + enterprise lock-in` — 57k stars e 34 repos formam distribuição OSS; enterprise tier (SSO/RBAC/A2A) cria lock-in; telemetria que liga uso OSS a contas enterprise sugere dados como moat. Tudo `inference` até prova de retenção/coorte. |
| Resposta | Como ele reagiria ao FGSS? | cenários, preço, bundling, narrativa | `modelado, não observado` — produto enterprise maduro, cadência de release agressiva e telemetria integrada sugerem resposta por aceleração de release, bundling enterprise e narrativa de “framework padrão”. A confirmar com dados de site e comunidade. |

## O que costumamos esquecer (adaptado a CrewAI)

1. **Denominadores.** Stars (57.102), forks (8.152), subscribers (390),
   followers da org (2.221) e versões PyPI (412) não são a mesma população.
   Cada métrica precisa dizer quem está sendo contado; nunca somar.
2. **Tempo.** Esta captura é fotografia (2026-08-15). Crescimento de stars,
   churn de forks e resposta competitiva exigem série temporal
   reproduzível — ainda não existe.
3. **Capacidade de entrega.** Cadência de ~5 releases estáveis/mês com 60
   pré-releases é sinal de capacidade de engenharia, mas pode gerar
   atrito de manutenção para usuários enterprise que precisam de estabilidade.
4. **Pós-venda.** Onboarding (quickstarts/examples) é visível, mas suporte,
   renovação, comunidade ativa, refunds e expansão são `unknown` —
   normalmente determinam o negócio mais que o repo.
5. **Economia real.** Stars não revelam CAC; followers não revelam MRR;
   412 versões PyPI não revelam receita; showcase de empresas não revela
   coorte. Tudo `unknown` onde a API não expõe.
6. **Dependência de pessoa-chave.** `joaomdmoura` (João Moura, criador do
   CrewAI) tem 646 commits — concentração de autoridade técnica e de
   canal que cria risco de pessoa-chave (análogo ao risco Bennett no
   TheFounderOS, mas aqui em código/framework, não em mentoria).
7. **Poder das plataformas.** PyPI (distribuição do pacote), GitHub (repo,
   stars, issues) e os provedores de LLM/integração (Bedrock, OpenAI,
   Anthropic, etc.) controlam partes do funil e podem mudar termos,
   alcance ou dados. PyPI já descontinuou contagens de download (`-1`).
8. **Privacidade e telemetria.** Release notes revelam telemetria que
   “detect coding agents”, “link OSS usage to an enterprise account” e
   “project_id” — fingerprinting de uso e propagação de identificadores
   entre OSS e enterprise exigem análise de finalidade, consentimento,
   retenção e exclusão. É o ponto legal/ético mais quente destes dados.
9. **Prova negativa.** “Não encontrado” (preço, NPS, receita) não significa
   “não existe”; significa que não foi demonstrado na superfície
   autorizada (GitHub/PyPI). O site `crewai.com` é o próximo bloco.
10. **Resposta do concorrente.** Toda vantagem copiável (cadência, exemplos,
    enterprise features) deve ser tratada como temporária. A defesa do
    FGSS precisa estar em evidência acumulada, governança, dados do
    cliente e execução confiável — não em clonar o framework OSS.

## Regra de incorporação no FGSS

O FGSS pode absorver princípios, padrões e fatos públicos com proveniência.
Não deve copiar marca, texto, layout, imagens, comunidades, dados pessoais
ou ativos com licença incerta. Cada item entra como `observation`,
`commercial_claim`, `independent_signal`, `inference` ou `unknown`; apenas
observações provadas podem promover estado de produto.

Itens verificáveis já classificados neste bloco: stars/forks/contadores
(`independent_signal`), existência de tier enterprise (`observation`→
`inference`), cadência de releases (`inference`). Pendentes de prova
externa: lista de clientes (C1–C2 `commercial_claim`), preço/tiers
(U3–U4 `unknown`), downloads/receita (U1–U2 `unknown`).
