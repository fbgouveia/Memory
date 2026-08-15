# Contrato de inteligência competitiva externa — CrewAI

## Objetivo

Ampliar o dossiê do domínio próprio para o ecossistema público que distribui,
qualifica, vende, demonstra e sustenta o CrewAI.

## Fontes autorizadas neste bloco

- Site público `crewai.com` e seus ativos same-origin;
- API pública e histórico Git do `crewAIInc/crewAI`;
- Documentação pública em `docs.crewai.com` se descoberta;
- Metadados públicos de PyPI (`crewai` package);
- Metadados públicos de Discord, Slack, GitHub Discussions se linked pelo site;
- LinkedIn apenas por superfície pública indexada, sem contornar HTTP 999;
- referências públicas a integrações (LangSmith, OpenAI, Anthropic, etc.),
  apenas como inventário salvo se forem third-party.

## Guardrails

- não enviar formulário, reservar chamada, ingressar em grupo ou criar lead;
- não contornar login, paywall, rate limit, robots ou proteção técnica;
- não arquivar imagens de plataformas quando a página declara `noimageindex`;
- não persistir cookies, tokens transitórios, headers `Set-Cookie`, fingerprints
  ou dados de visitantes;
- redigir chaves client-side encontradas em scripts antes de persistir o corpo;
- não baixar mídia third-party integral apenas por estar incorporada;
- não testar vulnerabilidade contra uma implantação pública;
- não tratar seguidores, estrelas, depoimentos ou receita alegada como prova de
  cliente pagante ou resultado financeiro;
- preservar URL, data, hash e diferença entre captura, extração, referência e
  bloqueio.

## Critério de aceite

1. Cada fonte allowlisted termina como `captured`, `captured_redacted`,
   `extracted`, `summarized_not_archived`, `external_reference`, `blocked` ou
   `error`.
2. Todo artefato persistido tem hash e tamanho reconciliados no audit.
3. Achados de segurança são validação passiva da fonte, nunca exploração.
4. Afirmações comerciais ficam num ledger separado de evidência independente.
