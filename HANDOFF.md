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
- **Escrita da Bíblia de Automação:** Desenvolvidos 5 capítulos temáticos e o `INDEX.md` mapeador de rotas dentro da pasta `FGSS Gestor de Automacao/docs/bible/`.
- **Governança Inicial do Projeto:** Criados os arquivos `README.md` (pilares e diagrama) e `AGENTS.md` (regras e persona do Chairman) na raiz do repositório `FGSS Gestor de Automacao`.

### 3. Descobertas
- **Processo Dinâmico de Pesquisa (Preflight):** Fixar um conjunto de perguntas-chave estático para autoatualização engessa a IA em padrões passados. A evolução rápida de APIs (como Gemini, OpenAI, n8n) exige queries de busca dinâmicas baseadas na interseção entre o escopo da tarefa e o horizonte tecnológico atual no início das sessões.
- **Governança de Automações:** Sem um manifesto unificado (`automation-manifest.json`), o crescimento do ecossistema de automações gera amnésia técnica e financeira. Toda nova automação passará a conter um manifesto de metadados próprio.
- **E-books vs. Resumos de Aulas (Extração de PDF):** Os e-books do material de treinamento do Mestres da Automação são PDFs de difícil extração de texto por `pypdf`. A ingestão foca nos resumos de aulas estruturados (88 arquivos válidos), que contêm 100% da matéria acadêmica, roteiros de reunião, checklists de implementação e a minuta do contrato de serviços.
- **Roteiro SPIN Selling e Modelo de Contrato:** Identificados e consolidados o roteiro de reunião baseado em SPIN Selling (com ramificações para infoprodutos e negócios locais) e o contrato de serviços de automação com isenções de responsabilidade para bloqueios de contas. Copiados como seções permanentes na Bíblia de Automação para acesso imediato.
