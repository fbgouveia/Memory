# Contrato de inteligência competitiva externa

## Objetivo

Ampliar o dossiê do domínio próprio para o ecossistema público que distribui,
qualifica, vende, demonstra e sustenta o TheFounderOS.

## Fontes autorizadas neste bloco

- Agency Accelerant e seus ativos públicos same-origin;
- formulários Typeform públicos ligados pelas páginas, sem submissão;
- metadados públicos do perfil Instagram ligado pelo site;
- API pública e histórico Git do `Bennettxai/FounderOS-DEMO`;
- script público Trakyo carregado pelo site;
- metadados públicos de Whop, Skool, Merydian e OperatorOS, sem perfis de
  membros, comentários, imagens ou HTML integral;
- LinkedIn apenas por superfície pública indexada, sem contornar HTTP 999;
- referências públicas a Calendly, WebinarJam, Telegram, Vidalytics, Meta Pixel
  e demais ferramentas, apenas como inventário salvo se forem third-party.

## Guardrails

- não enviar formulário, reservar chamada, ingressar em grupo ou criar lead;
- não contornar login, paywall, rate limit, robots ou proteção técnica;
- não arquivar imagens do Instagram quando a página declara `noimageindex`;
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

1. Cada fonte allowlisted termina como `captured`, `captured_redacted`, `extracted`,
   `summarized_not_archived`, `external_reference`, `blocked` ou `error`.
2. Todo artefato persistido tem hash e tamanho reconciliados no audit.
3. Typeforms são reduzidos a schema, lógica e mensagens públicas, sem respostas.
4. Instagram é reduzido a metadados públicos e não tem HTML/imagens arquivados.
5. Plataformas de comunidade/comércio são reduzidas a metadados editoriais.
6. Achados de segurança são validação passiva da fonte, nunca exploração.
7. Afirmações comerciais ficam num ledger separado de evidência independente.
