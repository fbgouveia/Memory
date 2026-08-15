# Arquitetura técnica destilada

## Forma do sistema

O demo é um monólito modular Next.js 14. A interface usa App Router e server
components; rotas API chamam uma camada de repositórios; SQLite armazena dados
semeados; Zod valida registros na saída. Agentes e conectores vivem em módulos
tipados. Essa forma dá uma demo local rica sem chaves e permite substituir a
origem sem reescrever a interface.

```text
UI (20 páginas)
  → API (38 handlers)
    → repositórios + Zod
      → SQLite semeado
    → agentes/runtime
      → conectores honestos
    → G-Brain/knowledge (stub + fallback local)
```

## Dados e domínio

O seed medido criou seis departamentos e 30 agentes. O banco inclui domínio
organizacional, tarefas, skills, workflows, funil, social, comunicação,
finanças, pessoas, personas, métricas, roadmap e logs de execução. Tabelas de
runs e broadcasts começam vazias, coerentes com uma instalação não executada.

Os conectores realmente presentes incluem calendário, email/IMAP, WhatsApp,
Slack, pagamentos, Attio, Notion, Obsidian, G-Brain, LLM, ManyChat, Zernio,
Beehiiv, WebinarJam, Wispr, Miro, GHL, Meta Ads e stack local. O catálogo visual
pode mencionar mais marcas; elas não devem ser contadas como implementação.

## Conhecimento e agentes

G-Brain declara Markdown como fonte de verdade, recuperação híbrida e fallback
para grep. O “Optimal Engine” introduz a sequência:

`Source → Signal → Claim → Fact → Memory`

Claims precisam de promoção antes de virarem fatos. Essa é uma excelente
fronteira de confiança, embora a infraestrutura produtiva completa seja uma
descrição no demo, não uma prova de implantação externa.

Cada agente semeado tem runtime e pode persistir execução. O chat, porém, é
explicitamente read-only e instruído a não fingir efeitos externos. Broadcast
faz fan-out paralelo. O contrato do conector usa `connected`,
`not_configured` ou `error`, evitando uma falsa luz verde.

## Grafo estrutural

Graphify mediu 1.773 nós, 4.270 arestas e 90 comunidades. Os maiores “god
nodes” são `getDb()` (95 arestas), `openDb()` (50), `KnowledgeGraph()` (32),
`FounderDb` (27) e `ConnectorStatus` (26). Isso confirma que persistência,
grafo e status de integração são as articulações centrais — e também pontos a
desacoplar em uma arquitetura multi-tenant.

## Qualidades e débitos

Pontos fortes: dados vivos sem credenciais, testes amplos, tipos, schemas,
repository layer, estados honestos e regras de domínio visíveis na UX.

Limites: SQLite/singleton local, ausência de prova multi-tenant, acoplamento em
`getDb`, build dependente de Google Fonts, observabilidade/SLOs discretos e
superfície insuficiente sobre RBAC, consentimento, retenção, criptografia,
residência de dados, recuperação e acessibilidade.
