# Research — protocolo de pesquisa

Cada pesquisa segue: **fonte → snapshot → hash → claim → proveniência**.

## Fontes legítimas

- Sites públicos (sem login, bypass, paywall).
- Repositórios públicos (Git, npm, PyPI).
- APIs públicas (GitHub, etc.).
- Documentação oficial (Meta, Google, OpenAI, etc.).
- Reviews verificados de terceiros.
- Cases identificados com permissão.
- Entrevistas voluntárias autorizadas.

## Guardrails

- Não fazer login, compra, formulário, DM, ingressar comunidade.
- Não contornar rate limit, robots, proteção técnica.
- Não coletar credenciais, PII, cookies, tokens, fingerprints.
- Não arquivar imagens/mídia de plataformas com `noimageindex`.
- Não inferir receita por seguidores, stars, `joined`, reviews.
- Preservar URL, data, hash, tamanho antes de nova captura.
- Separar `observation` / `commercial_claim` / `independent_signal` /
  `inference` / `unknown`.
- Claims promocionais jamais viram fatos sem evidência independente.

## Estrutura por pesquisa

```
research/<tema>/
├── AGENTS.md          # Entrada da pesquisa
├── HANDOFF.md         # Estado e proveniência
├── inventory/         # Manifestos com hash SHA-256
├── raw/               # Evidência congelada
├── knowledge/         # Destilação
└── findings.md        # Verdades da pesquisa
```

## Proveniência

Todo claim tem URL, data, hash SHA-256 e classificação. Sem proveniência,
é `unknown`. Coletores regeneram diretórios — sempre salvar o manifesto
anterior como baseline datado antes de nova captura.

## Comandos genéricos

`audit.py` e `compare_manifests.py` (atualmente em `FGSS OS/tools/`) são
genéricos e operam sobre manifestos relativos. Quando o 2º concorrente
chegar, subir para `tools/` na raiz do gestor.
