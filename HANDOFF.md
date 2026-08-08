# Handoff - FGSS Gestor de Automação

Documento de transição e histórico de decisões do projeto.

---

## 📅 9 de agosto de 2026

### 1. Pendências (Abertas)
- [ ] Definir o schema JSON padrão do `automation-manifest.json`.
- [ ] Implementar a estrutura inicial para a Lâmina de Contingência (DLQ e erros).
- [ ] Criar o utilitário CLI para scaffold de novas automações.

### 2. Atualizações (Concluídas na sessão)
- **Definição da Função de Chairman:** Consolidado o papel estratégico do agente como "Chairman de Gestão de Automação" para todas as áreas e nichos de negócios.
- **Protocolo AEOT (Adaptabilidade Estratégica e Otimização Tridimensional):** Definidos os três eixos de tomada de decisão (Horizonte Tecnológico Ativo, Prospecção de Estratégias Alternativas e a Equação Custo x Qualidade x Robustez).
- **Proposta dos 4 Pilares do Cérebro:** Mapeados e alinhados os pilares de sustentação (Manifesto unificado de automações, Lâmina de contingência/Dead Letter Queue, Isolamento Sandbox-First e CLI de Scaffold).
- **Ingestão de Conhecimento e Download:** Criado e executado o script de raspagem scratch `download_and_extract.py` para baixar via HTTPS (autenticado por `gcloud`) e extrair textos de 88 arquivos do Google Drive.
- **Escrita da Bíblia de Automação G-T-M:** Desenvolvidos 5 capítulos temáticos e o `INDEX.md` mapeador de rotas dentro da pasta `FGSS Gestor de Automacao/docs/bible/`.
- **Governança Inicial do Projeto:** Criados os arquivos `README.md` (pilares e diagrama) e `AGENTS.md` (regras e persona do Chairman) na raiz do repositório `FGSS Gestor de Automação`.
- **Ingestão Avançada (Bloco 2):** Criados e executados os scripts scratch `count_gdrive_files.py` e `download_markdown.py` para varredura recursiva e download paralelo de 1.269 arquivos markdown (12.1MB) do segundo bloco do Drive.
- **Geração de Playbooks Avançados:** Processadas as lições individuais em 12 playbooks avançados específicos de ferramentas (como n8n, Make, Zaia, NicoChat, Manychat, Claude Code) salvos em `docs/bible/advanced/` e mapeados no `INDEX.md`.
- **Sanitização de Referências de Marca:** Criado e executado o script scratch `sanitize_and_synthesize.py` para remover referências proprietárias (ex: Luciana Papini, Mestres da Automação) e substituí-las por nomenclaturas genéricas (ex: Chairman de Automação, Formação em Gestão de Automação) em todos os md da Bíblia.
- **Catálogo de Oportunidades G-T-M:** Criado o documento `100_oportunidades_negocios.md` mapeando 100 nichos com dores e soluções baseadas na Bíblia Go-To-Market.
- **Escrita da Bíblia High Intelligence (H-I):** Desenvolvidos 4 capítulos temáticos avançados e o `INDEX_HI.md` mapeador dentro de `docs/bible_hi/`.
- **Catálogo de Oportunidades H-I:** Criado o documento `100_oportunidades_hi.md` mapeando 100 corporações/plataformas de escala com gargalos complexos de engenharia e soluções H-I.

### 3. Descobertas
- **Processo Dinâmico de Pesquisa (Preflight):** Fixar um conjunto de perguntas-chave estático para autoatualização engessa a IA em padrões passados. A evolução rápida de APIs (como Gemini, OpenAI, n8n) exige queries de busca dinâmicas baseadas na interseção entre o escopo da tarefa e o horizonte tecnológico atual no início das sessões.
- **Governança de Automações:** Sem um manifesto unificado (`automation-manifest.json`), o crescimento do ecossistema de automações gera amnésia técnica e financeira. Toda nova automação passará a conter um manifesto de metadados próprio.
- **E-books vs. Resumos de Aulas (Extração de PDF):** Os e-books do material de treinamento do Mestres da Automação são PDFs de difícil extração de texto por `pypdf`. A ingestão foca nos resumos de aulas estruturados (88 arquivos válidos), que contêm 100% da matéria acadêmica, roteiros de reunião, checklists de implementação e a minuta do contrato de serviços.
- **Roteiro SPIN Selling e Modelo de Contrato:** Identificados e consolidados o roteiro de reunião baseado em SPIN Selling (com ramificações para infoprodutos e negócios locais) e o contrato de serviços de automação com isenções de responsabilidade para bloqueios de contas. Copiados como seções permanentes na Bíblia de Automação para acesso imediato.
- **Estrutura Modular da Formação (Bloco 2):** O segundo bloco de treinamento possui 1.860 arquivos organizados em 754 subpastas. Evidência: varredura recursiva completa via Drive API. Consequência: 1.269 arquivos markdown foram baixados e consolidados em 12 playbooks avançados de ferramentas na pasta `bible/advanced/` (ex: n8n, Make, Zaia, NicoChat, Manychat, Claude Code).
- **Claude Code como Acelerador:** O Claude Code atua como um assistente de desenvolvimento local e gerador de especificações, não como substituto de ferramentas de integração. Evidência: análise do material didático de Claude Code. Consequência: consolidação no playbook avançado de Claude Code.
- **Sanitização de Marca e Nomes Proprietários:** Identificadas e eliminadas as referências de nomes específicos (ex: Luciana Papini, Mestres da Automação) de todos os playbooks da Bíblia de Automação e substituídas por termos e placeholders genéricos adequados (ex: Chairman de Automação, Formação em Gestão de Automação). Evidência: varredura regex automatizada nos arquivos md da Bíblia. Consequência: a base de dados torna-se agnóstica de marca e protegida.
- **Catálogo de 100 Negócios e Oportunidades G-T-M:** Mapeamento completo de 100 nichos e suas respectivas dores operacionais/soluções Go-To-Market criados fisicamente no ecossistema. Evidência: compilação estruturada e contagem exata de 100 registros em docs. Consequência: disponibilização de um banco de prospecção imediato para equipes comerciais.
- **Catálogo de 100 Empresas e Oportunidades H-I:** Mapeamento de 100 corporações de setores regulados (fintechs, saúde, logística) com gargalos complexos de backend/infraestrutura e soluções High Intelligence. Evidência: compilação física estruturada de 100 registros. Consequência: suporte para vendas enterprise e arquitetura customizada.
- **Requisitos de n8n v3.0 (2026):** n8n descontinuará instalação via npm/npx global, tornando obrigatório o deploy conteinerizado via Docker. Todos os scaffolds futuros devem nascer baseados em contêineres.
- **Requisitos de Memória do Redis (BullMQ):** BullMQ requer obrigatoriamente a política `maxmemory-policy noeviction` no Redis para evitar a perda silenciosa de chaves de travas ou metadados de jobs ativos, necessitando de limpeza explícita no código cliente via `removeOnComplete` / `removeOnFail`.
- **Matryoshka Embeddings (MRL):** Busca vetorial local pode ser otimizada fatiando os vetores para 256/512 dimensões com re-normalização euclidiana no cliente, reduzindo o consumo de RAM em mais de 80% no Postgres/pgvector.
