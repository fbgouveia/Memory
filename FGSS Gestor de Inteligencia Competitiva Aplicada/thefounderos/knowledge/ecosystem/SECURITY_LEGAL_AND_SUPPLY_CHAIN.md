# Segurança, privacidade, legal e supply chain

## Conclusão executiva

O demo é tecnicamente mais substancial que uma landing page: testes, typecheck,
build e seed passam. Isso não equivale a prontidão para produção. A combinação
de rotas mutáveis, credenciais de integrações e ausência de middleware de acesso
no snapshot atual torna a implantação pública seguindo o README um risco alto.

## Autenticação e histórico

A issue pública #2 relata que instâncias implantadas servem todas as rotas sem
autenticação. A PR #1, que adicionava token/middleware, está marcada como merged
pela API em 02/08/2026. Contudo, `middleware.ts`, `lib/auth.ts` e a referência
`FOUNDER_OS_ACCESS_TOKEN` não existem no snapshot corrente, e o merge não está
nos cinco commits do histórico atual. Isso é compatível com reescrita ou remoção,
mas a causa exata não foi provada.

Nenhuma instância real foi sondada ou explorada. A recomendação é passiva:
retirar deploy público do README ou adicionar auth antes de qualquer bind de
rede; negar por padrão; segregar secrets por tenant; proteger todas as APIs e
webhooks; testar autorização por objeto; rotacionar qualquer segredo exposto.

## Dependências

`npm audit --omit=dev --json` em 15/08/2026 reportou oito pacotes com severidade
agregada alta e correções disponíveis: axios, form-data, imapflow, ip-address,
nanoid, Next.js, nodemailer e postcss. Next.js e imapflow são dependências
diretas; as demais incluem transitivas. O relatório contém classes de DoS,
SSRF, path traversal, XSS, request smuggling e prototype pollution.

Advisory instalado não prova rota explorável. A triagem correta exige versão,
uso, runtime e input controlado por atacante. Mesmo assim, um sistema destinado
a emails, integrações e agentes deve atualizar o lockfile, rodar testes de
regressão e gerar SBOM antes de produção. O resumo reproduzível está em
`inventory/security_validation.json`.

## Licenças e propriedade intelectual

O código do repo está sob MIT e o aviso deve acompanhar cópias/derivações. Dos
264 pacotes instalados inspecionados, 214 declaram MIT, 21 ISC, 17 Apache-2.0 e
12 outras licenças permissivas/Creative Commons; nenhum ficou sem campo de
licença. Isso não resolve automaticamente atribuições de ícones/ativos CC.

O site, marca, copy, fotos, vídeos, comunidade, base de alunos e demais ativos
comerciais não herdam a licença MIT do repo. Para o FGSS: aprender o padrão,
reespecificar o requisito e implementar interface/código/linguagem originais.

## Privacidade e contratos

O funil cruza dados de perfil, renda/orçamento, telefone, email, calendário,
UTMs e fingerprint entre várias plataformas. O Typeform declara integração de
respostas parciais. O Trakyo reconhece GPC e opt-out, mas não foi observada prova
suficiente de consentimento granular, mapa de controlador/processador, retenção,
deleção ou residência de dados.

Os termos públicos da Agency Accelerants identificam OS ACCELERATOR LLC,
descrevem consultoria/treinamento/desenvolvimento de negócio, tornam fees não
reembolsáveis após o início/acesso, preservam IP da empresa, permitem até dez
SMS/mês, excluem garantia de renda e limitam responsabilidade ao valor pago.
Isso reduz risco contratual do vendedor, mas não prova conformidade em cada
jurisdição nem qualidade do serviço.

## Gates mínimos para o FGSS

1. Auth obrigatória e autorização por recurso antes de qualquer deploy.
2. Capability registry separando `advertised`, `implemented`, `configured`,
   `healthy` e `proven`.
3. Threat model para SSRF, prompt injection, webhook replay, email/file access,
   exfiltração por connector e confused deputy.
4. Secrets em vault, escopo mínimo, rotação, redaction e logs sem PII.
5. Tenant isolation, egress allowlist, rate limits, quotas e kill switch.
6. Consent ledger, GPC, finalidade, retenção, export/delete e DPIA quando aplicável.
7. SBOM, license notice, pinning, provenance de build e política de advisories.
8. SLO, backup/restore testado, audit trail imutável, DLQ, replay e rollback.
