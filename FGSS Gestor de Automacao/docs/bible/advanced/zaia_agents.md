# Orquestração de Agentes com Zaia

Este playbook consolidado traz o conhecimento prático e os Primeiros Princípios extraídos das aulas do curso.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/001 Criando sua conta, planos e visão geral da ferramenta

Aqui estão os Primeiros Princípios da aula:

**1. Criação e Acesso à Conta Zaia:**
*   Acesse a plataforma Zaia via link fornecido.
*   Crie/acesse a conta com e-mail; um link de validação é enviado.
*   **Melhor Prática:** Forneça nome e telefone para receber 5.000 créditos gratuitos (plano gratuito mencionado no vídeo não está mais disponível, mas créditos podem ser úteis).

**2. Estrutura do Workspace:**
*   **Workspace:** Ambiente principal.
*   **Configurações (Engrenagem):** Altere nome e adicione imagem ao Workspace.

**3. Planos e Faturamento:**
*   **Planos:** Visualize e faça upgrade (mensal/anual).
*   **Plano Starter (Gratuito):** Limites de uso (ex: 500 agentes, 5 tabelas).
*   **Faturamento:** Gerencie dados (CNPJ/CPF), método de pagamento (cartão de crédito) e histórico de cobranças.
*   **Consumo:** Monitore o uso de recursos (tabelas, linhas, execuções de agente) conforme o plano.

**4. Provedores e Conexões (Integrações):**
*   **Provedores:** Configure LLMs (Anthropic, Google AI, OpenAI).
*   **Opção:** Use créditos Zaia ou sua própria conta OpenAI (via chave API).
*   **Conexões:** Integrações nativas da plataforma.
*   **Chave de API:** Gerenciamento de chaves de API.

**5. Suporte e Ajuda:**
*   **Varinha Mágica (Roxa):** Ferramenta de Q&A para tirar dúvidas rápidas sobre a plataforma.
*   **Suporte Zaia:** Contato direto com a equipe de suporte.

**6. Analíticos (Dashboard):**
*   **Métricas:** Visualize usuários por canal, créditos por agente.
*   **Filtros:** Analise métricas por período.

**7. CRM (Atendimentos):**
*   **Visão Geral:** Monitore atendimentos (não respondidos, em andamento, finalizados).
*   **Filtros:** Filtre atendimentos por atendente.
*   **Histórico:** Visualize e exporte conversas.
*   **Canais:** Conecte canais de comunicação (Widget de site, WhatsApp API oficial/não oficial, Instagram, API genérica).
*   **Times:** Crie equipes de atendimento (ex: "Time de Suporte").
*   **Membros da Equipe:** Vincule atendentes aos times.
*   **Distribuição:** Configure a distribuição automática de conversas entre membros do time (ex: 50/50, randomizado).
*   **Disponibilidade:** Defina status de atendentes (disponível/indisponível).

**8. Builder (Construção de Agentes):**
*   **Tabelas:** Armazenamento de dados internos (similar a Excel/Supabase) para consulta por agentes.
*   **Base de Conhecimento:** Repositório de informações para consulta de agentes (ex: procedimentos de clínica).
*   **Workflow:** Ferramenta interna para criar fluxos de trabalho, fazer requisições Webhook e interagir com ferramentas do agente (similar a N8N).
*   **Componentes:** Definição de tipos de dados (texto, número, booleano).
*   **Schedules (Escalas):** Agrupamento de agentes para diferentes funções ou clientes (ex: Agente de Suporte, Financeiro, Logística para Empresa A). Útil para escalar.
*   **Agentes:** Onde os agentes de IA são criados e configurados (foco da próxima aula).

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/002 Visão geral do agente

Aqui estão os princípios fundamentais para a configuração de um agente de IA:

*   **Definição do Agente:** Um agente de IA é uma entidade configurável para executar tarefas específicas.
*   **Instruções (Prompt Engineering):**
    *   Defina o papel, comportamento e procedimentos do agente (ex: "assistente de IA para pré-atendimento").
    *   Utilize prompts claros e detalhados; a engenharia de prompts é crucial para a eficácia do agente.
*   **Credenciais:**
    *   Conecte provedores de IA (Anthropic, OpenAI) ou utilize os modelos da plataforma (Zaia).
    *   Insira chaves de API (tokens) para provedores externos.
*   **Modelo de Linguagem (LLM):**
    *   Escolha o modelo de IA (ex: Kimi, Cloud, GPT).
    *   Modelos como Cloud (Anthropic) podem ser preferíveis a outros para certas tarefas.
*   **Temperatura:**
    *   Controla a criatividade vs. aderência metódica do agente.
    *   **Baixa temperatura:** Menos criatividade, mais factual, reduz alucinações (ideal para contextos críticos como jurídico/médico).
    *   **Alta temperatura:** Mais criatividade.
*   **Esforço (Passos de Raciocínio):**
    *   Define quantos passos o agente pode dar antes de responder.
    *   Para agentes mais simples, 10 passos é um bom ponto de partida. Mais passos aumentam o tempo de resposta e a profundidade do raciocínio.
*   **Capacidades Extras:**
    *   **Planejamento:** Habilita a criação de um plano inicial para a tarefa (desativado para agentes simples).
    *   **Raciocínio:** Controla a profundidade do raciocínio (desativado para agentes simples).
    *   **Prompts Condicionais:** Adicione regras "se-então" para comportamentos específicos.
*   **Configurações Básicas:** Nome, foto e fuso horário do agente.
*   **Teste Contínuo:** Utilize o chat de teste para validar o comportamento do agente antes da produção.
*   **Ferramentas Essenciais:**
    *   **Criação de Ticket:** Para escalar atendimentos para humanos.
    *   **Memória Contextual:** Permite que o agente lembre interações anteriores (ativar na maioria dos casos).
    *   **Pesquisa:** Habilite pesquisa em base de conhecimento (PDF, texto, planilhas) e/ou na web.
    *   **Requisições HTTP:** Para interações com APIs externas.
*   **Conexões Externas (MCPs):**
    *   Integre facilmente com serviços como Google Calendar, Calendly, Superbase, Airtable, Google Sheets, Microsoft Teams via API.
*   **Bases de Dados:**
    *   **Tabelas Internas:** Crie tabelas para dados estruturados (ex: procedimentos).
    *   **Bases de Conhecimento:** Carregue documentos (Markdown, PDF) para consulta do agente.
    *   **Alternativa:** Superbase e Google Sheets são opções externas populares para dados.
*   **Workflows:** Construa fluxos de automação complexos (ex: gatilhos via Webhook).
*   **Componentes:** Utilize elementos pré-definidos (ex: formato de telefone) para ações específicas.
*   **Conexão de Canal:** Associe o agente a canais de atendimento específicos (ex: WhatsApp, site).
*   **Salvar:** Sempre salve as configurações após qualquer alteração.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/003 Criando seu agente na prática

Aqui estão os princípios fundamentais da aula, destilados:

**1. Definição do Agente IA (Identidade e Papel)**
*   **Nome Interno:** Para organização e identificação.
*   **Papel/Missão:** Defina claramente a função (ex: "assistente virtual de pré-atendimento", "tira dúvidas", "informa valores", "encaminha agendamentos").
*   **Identidade:** Nome do agente, missão principal (ex: "atender com simpatia, elegância e objetividade").

**2. Tom de Voz e Estilo de Comunicação**
*   **Características:** Simpático, elegante, direto, profissional, acolhedor.
*   **Uso de Emojis:** Com moderação, especifique quais (ex: ✨💆‍♀️💛).
*   **Anti-padrões:** Nunca robótico ou frio.

**3. Regras de Ouro (Constraints e Comportamento)**
*   **Proibições (O que NUNCA fazer):**
    *   Não pedir dados pessoais (nome, telefone) no início da conversa.
    *   Não inventar informações.
    *   Não forçar ou pressionar agendamento.
    *   Não oferecer procedimentos fora do escopo da clínica.
    *   Não detalhar procedimentos sem solicitação explícita do cliente.
*   **Obrigações (O que SEMPRE fazer):**
    *   Responder apenas o que foi perguntado.
    *   Ser objetivo e direto ao ponto.
    *   Consultar *sempre* as informações fornecidas no prompt (ou base de dados externa) antes de responder.

**4. Estrutura da Base de Conhecimento (Dados para o Agente)**
*   **Informações Gerais:** Descrição da clínica.
*   **Listagem de Serviços:**
    *   Quando perguntado "o que vocês fazem?", liste *apenas os nomes* dos procedimentos.
    *   Use formato claro (ex: lista simples).
*   **Detalhes de Serviços, Valores e Formas de Pagamento:**
    *   Forneça *somente se o cliente pedir especificamente*.
    *   Organize em formato de tabela ou lista estruturada para clareza (ex: `| Item | Informação |`).
    *   Especifique condições (ex: "Cartão de crédito em até 3x sem juros").
*   **Estratégia para Grandes Bases de Dados:** Para muitos procedimentos/informações, utilize ferramentas externas (Google Sheets, SuperBase, AirTable) ou tabelas internas da plataforma, em vez de embutir tudo no prompt.

**5. Fluxo de Agendamento (Processo Chave)**
*   **Gatilho para Oferta:** Oferecer agendamento *apenas* quando o cliente:
    *   Já tirou todas as dúvidas.
    *   Demonstrou interesse claro (ex: "entendi", "gostei", "quero fazer", "quanto custa").
*   **Forma de Oferta:** Leve e natural (ex: "Quer que eu te ajude a marcar um horário para esse procedimento? 💆‍♀️✨").
*   **Coleta de Dados:** Se o cliente aceitar, peça *apenas* o nome completo e telefone (com DDD).
*   **Transferência Humana:**
    *   Após coletar os dados, confirme e informe que será encaminhado para um humano.
    *   **Ação Essencial:** Crie um ticket para transferência humana imediatamente.

**6. Situações Especiais (Tratamento de Exceções)**
*   **Procedimento Não Disponível:** Informar que não é oferecido e sugerir o que está disponível.
*   **Solicitação de Humano:** Transferir imediatamente para a equipe e criar um ticket.
*   **Cliente Indeciso:** Não pressionar; oferecer ajuda para futuras dúvidas.
*   **Informação Desconhecida:** Admitir a falta de informação e oferecer transferência para um humano.
*   **Ação Essencial:** Em casos de transferência, sempre criar um ticket.

**7. Configuração Técnica do Agente IA**
*   **Modelo de Linguagem:** Selecionar o modelo apropriado (ex: Dasaia, OpenAI).
*   **Temperatura:** Definir como "metódico" (baixa criatividade) para agentes que precisam ser factuais e seguir regras estritas, evitando alucinações.
*   **Esforço/Complexidade:** Ajustar conforme a complexidade do agente (ex: 10 passos para agentes mais simples).
*   **Ferramentas Essenciais:**
    *   **Criação de Ticket:** Para gerenciar transferências para atendimento humano, definindo a equipe de destino.
    *   **Memória Contextual:** Para armazenar e recuperar informações da conversa (ex: nome do cliente, procedimento de interesse).
    *   **Conexões Externas (MCP):** Para integrar com bases de dados externas (Google Sheets, etc.) para informações dinâmicas ou volumosas.

**8. Boas Práticas**
*   **Prompt Engineering:** Use seções claras (identidade, tom, regras, dados) e formatação (markdown) para estruturar o prompt.
*   **Testes Iterativos:** Testar o agente continuamente para refinar seu comportamento e respostas.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/004 Testando seu agente

Aqui estão os princípios fundamentais para testar seu agente de IA:

*   **Validação Inicial do Prompt:**
    *   Realize testes básicos para verificar se o prompt está funcionando corretamente e se o agente responde conforme o esperado.
    *   Confirme a saudação inicial e a autoapresentação do agente.

*   **Verificação de Conteúdo e Regras:**
    *   Teste a capacidade do agente de fornecer informações específicas (ex: serviços oferecidos, duração de procedimentos, frequência, preços, formas de pagamento).
    *   Compare as respostas do agente com a base de conhecimento configurada para garantir precisão.

*   **Teste de Compreensão Contextual (LLM):**
    *   Faça perguntas que exijam inferência ou sugestão baseada em sintomas (ex: "Estou enrugada, o que sugere?").
    *   Avalie a capacidade do agente de aplicar o conhecimento de forma inteligente, mesmo sem instruções diretas para cada cenário.

*   **Estresse e Robustez:**
    *   **Não economize em testes.**
    *   Faça perguntas "anormais" ou fora do escopo esperado para identificar falhas e garantir que o agente esteja bem treinado para lidar com desvios.
    *   Teste limites e restrições (ex: "É possível parcelar em 10x no Pix?"). O agente deve recusar graciosamente e aderir às regras configuradas.

*   **Engenharia de Prompt Contínua:**
    *   Se o agente "bugar" ou responder de forma inadequada, revise e ajuste o prompt para melhorar seu desempenho.

*   **Fluxo de Transferência para Atendimento Humano:**
    *   Teste o processo de solicitação de agendamento ou transferência para um atendente humano.
    *   Verifique se o agente coleta as informações necessárias (ex: nome, telefone) antes da transferência.
    *   Confirme que o contexto da conversa é passado para o atendente humano.

*   **Gestão de Atendimentos:**
    *   Utilize tags para categorizar atendimentos (ex: "Botox", "Interessados em X").
    *   Monitore os estados dos atendimentos (ex: "não respondidas", "finalizadas") para garantir o acompanhamento e a conclusão.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/005 CRM, times e atendentes

Aqui estão os princípios fundamentais da aula sobre CRM, times e atendentes:

*   **Propósito do CRM:** Gerenciar a transição de atendimentos de agentes de IA para humanos.
*   **Estrutura de Atendimento:**
    *   **Membros:** Usuários convidados para o workspace da plataforma.
    *   **Atendentes:** Membros designados para receber e gerenciar tickets de clientes.
    *   **Times:** Agrupamentos lógicos de atendentes (ex: Financeiro, Suporte Técnico, Fiscal).
*   **Fluxo de Configuração:**
    1.  Convidar usuários para serem membros do workspace.
    2.  Acessar a seção CRM > Atendentes.
    3.  Criar times conforme a necessidade da operação.
    4.  Vincular os membros (agora atendentes) aos times correspondentes.
    5.  Configurar a "distribuição automática" de tickets dentro de cada time.
*   **Handoff para Humano:**
    *   A transferência de um atendimento do agente de IA para um humano **exige** a configuração prévia de times e atendentes.
    *   Sem essa configuração, a criação de tickets e a notificação aos atendentes não ocorrerão.
*   **Distribuição de Tickets:**
    *   A "distribuição automática" randomiza o encaminhamento de tickets entre os atendentes **disponíveis** de um time.
*   **Status do Atendente:**
    *   Atendentes devem estar com o status "disponível" para receber tickets. O status é visível na plataforma.
*   **Monitoramento:**
    *   A seção "Atendimentos" permite filtrar conversas por atendente e status (ex: finalizados).
    *   Essencial para controlar as conversas, verificar o desempenho do agente de IA em produção e a qualidade do atendimento humano.
*   **Melhor Prática:** Sempre salvar as configurações após qualquer alteração.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/006 Conectando um canal

Aqui estão os princípios fundamentais para conectar um canal para agentes de IA:

*   **Objetivo:** Integrar o agente de IA a plataformas de comunicação para interação com usuários.
*   **Tipos de Canais Suportados:**
    *   **Widget (Site):** Para incorporar o agente diretamente em um website.
        *   **Processo:** Criar canal tipo "Widget", copiar e colar o código gerado no site (ex: WordPress).
    *   **WhatsApp (API Não Oficial):** Recomendado para testes e validações.
        *   **Processo:** Criar canal tipo "API Não Oficial", escanear o QR Code gerado com o WhatsApp Web/Desktop do número desejado.
    *   **WhatsApp (API Oficial):** Recomendado para produção, oferece maior robustez.
        *   **Processo:** Criar canal tipo "API Oficial", configurar a conexão (requer acesso ao Gerenciador de Negócios do Facebook - BM). É um processo mais complexo com regras específicas.
*   **Configurações do Agente no Canal:**
    *   **Divisão de Mensagens Longas:** Habilitar para que textos extensos sejam enviados em múltiplas mensagens.
    *   **Tempo de Resposta:** Definir o atraso (em segundos) antes do agente iniciar a resposta.
    *   **Uso de Voz:** Opção para o agente usar voz apenas em mensagens de áudio (não responder com voz a mensagens de texto).
    *   **Exibir Nome do Atendente:** Mostrar o nome do agente nas mensagens.
*   **Assumir Conversa (Human Takeover):**
    *   **Habilitar:** Permite que um atendente humano assuma a conversa manualmente.
    *   **Interrupção do Agente:** Ao assumir, as respostas do agente são interrompidas imediatamente.
    *   **Comandos de Retorno:** Utilizar reações ou comandos específicos (ex: emoji de coração) para que o agente retome o atendimento após a intervenção humana.
*   **Melhores Práticas:**
    *   Utilize a API Não Oficial do WhatsApp para testes e validações rápidas.
    *   Para produção, invista na conexão via API Oficial do WhatsApp, apesar da complexidade inicial.
    *   Ofereça a funcionalidade de "assumir conversa" como uma estratégia de atendimento híbrido.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/007 Tabela e base de conhecimento

Aqui estão os princípios fundamentais da aula sobre "Tabela e Base de Conhecimento" para agentes de IA:

*   **Fontes de Dados para Agentes de IA:** Agentes de IA podem expandir suas capacidades utilizando fontes de dados externas ao prompt principal:
    *   **Bases de Conhecimento (KB):** Para informações detalhadas e não estruturadas (ex: procedimentos, FAQs, descrições).
    *   **Tabelas:** Para dados estruturados e captura de informações específicas (ex: leads, agendamentos).

*   **Base de Conhecimento (KB):**
    *   **Propósito:** Armazenar grandes volumes de texto ou documentos (ex: PDFs) que o agente pode consultar.
    *   **Criação:** Defina um nome para a KB e adicione documentos (texto, PDF) que contêm as informações.
    *   **Integração:** Habilite a ferramenta "Pesquisa em base de conhecimento" no agente, vinculando-a à KB específica.
    *   **Controle via Prompt:** Use o prompt para instruir o agente *como* e *quando* consultar a KB e *como* apresentar as informações (ex: "nunca informe detalhes se o cliente não pedir").

*   **Tabelas para Captura de Dados:**
    *   **Propósito:** Estruturar e armazenar dados coletados durante a interação (ex: nome, telefone, interesse do cliente).
    *   **Criação:** Defina um nome para a tabela e adicione colunas para cada tipo de dado a ser capturado (ex: `Nome`, `Telefone`, `Interesse_procedimento`).
    *   **Integração:** Habilite a ferramenta "Inserir em linha de tabela" no agente, vinculando-a à tabela específica.
    *   **Automação:** O agente preenche automaticamente as linhas da tabela com base nas informações extraídas da conversa.

*   **Configuração de Ferramentas do Agente:**
    *   A funcionalidade de KB e Tabelas é ativada através de "Ferramentas" específicas no painel de configuração do agente.
    *   **"Pesquisa em base de conhecimento":** Permite ao agente buscar informações na KB. Pode ser configurado para "sempre executar" ou ser invocado contextualmente.
    *   **"Inserir em linha de tabela":** Permite ao agente registrar dados em uma tabela.

*   **Engenharia de Prompt para Fontes Externas:**
    *   **Delegação:** Em vez de incluir textos longos no prompt, instrua o agente a "consultar a base de conhecimento" para obter detalhes.
    *   **Regras de Comportamento:** Utilize o prompt para definir regras claras sobre a apresentação das informações da KB (ex: "só forneça detalhes se solicitado", "não informe valores a menos que perguntado").

*   **Processo de Teste e Refinamento:**
    *   **Validação:** Teste exaustivamente o agente para garantir que ele consulta a KB e insere dados na tabela corretamente.
    *   **Iteração:** Ajuste o prompt e as configurações das ferramentas com base nos resultados dos testes para otimizar a experiência do usuário e a precisão das respostas/capturas.
    *   **Verificação de Dados:** Confirme que os dados capturados (ex: leads) são corretamente registrados na tabela.

*   **Fluxo de Trabalho Integrado:**
    *   Agentes podem usar KBs para responder a perguntas, tabelas para coletar informações e, em seguida, transferir o atendimento para um humano com um resumo contextualizado da interação.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/008 Colocando o agente em produção (checklist)

Aqui está a destilação do conteúdo da aula em Primeiros Princípios para colocar um agente de IA em produção:

**Checklist para Colocar Agente de IA em Produção:**

1.  **Validação de Instruções e Procedimentos:**
    *   Assegurar que todas as instruções e fluxos do agente são claros e compreensíveis.
2.  **Teste de Credenciais e Modelos:**
    *   Confirmar que as credenciais do agente (ex: API keys) e o modelo de IA estão configurados e funcionando corretamente.
3.  **Testes Exaustivos e Cenários de Borda:**
    *   Realizar testes extensivos para cobrir todos os cenários de uso.
    *   Testar a capacidade do agente de lidar com alucinações e respostas inesperadas.
    *   Verificar funcionalidades práticas (ex: agendamentos, inclusão de dados em tabelas).
    *   Testar o comportamento do agente com entradas diversas (ex: emojis).
4.  **Conectividade e Habilitação de Ferramentas:**
    *   Verificar que todas as ferramentas e integrações externas (ex: calendários, CRM, MCP) estão conectadas e habilitadas.
5.  **Consulta à Base de Conhecimento:**
    *   Garantir que o agente consulta e utiliza a base de conhecimento de forma precisa.
6.  **Fluxo de Atendimento e Atribuição:**
    *   Confirmar que o direcionamento para equipes e a atribuição de atendimentos funcionam corretamente.
7.  **Registro de Histórico e Canais:**
    *   Verificar o registro do histórico das conversas.
    *   Assegurar que todos os canais de atendimento estão conectados e operacionais.
8.  **Monitoramento Pós-Produção:**
    *   Após o lançamento, monitorar ativamente o desempenho do agente via dashboards e análises.
    *   Acompanhar as conversas em tempo real para validar a precisão das informações e o comportamento do agente.
9.  **Conexão Final do Canal:**
    *   Conectar o canal de atendimento ao cliente somente após todas as validações e testes serem concluídos com sucesso.

---

## 📘 01 Módulo 1 - Construindo seus agentes de IA (nova versão)/009 Conectando seu provedor da OpenAI

**Conexão com Provedores LLM Externos**

*   **Propósito:** Integrar Large Language Models (LLMs) de provedores como OpenAI, Anthropic (Claude) ou Google AI diretamente na plataforma, utilizando suas próprias chaves de API e não os créditos internos da plataforma.
*   **Processo de Configuração:**
    1.  Acesse "Configurar Provedor" na plataforma.
    2.  Selecione ou insira o nome do provedor (ex: OpenAI).
    3.  Obtenha a **API Key** (também referida como "Tolkien" ou "Secret Key") diretamente na plataforma do provedor.
        *   **Para OpenAI:**
            *   Acesse: `https://platform.openai.com/settings/organization/api-keys`
            *   Clique em "Create New Secret Key".
            *   Nomeie a chave (ex: "AIA Projeto Padrão").
            *   Copie a chave gerada imediatamente (ela não será exibida novamente).
    4.  Cole a API Key no campo solicitado na configuração do provedor na plataforma.
    5.  Salve a configuração do provedor.
    6.  As LLMs do provedor configurado (ex: GPT-3.5, GPT-4 da OpenAI) estarão disponíveis para uso.
*   **Segurança da API Key:** API Keys são credenciais sensíveis. Trate-as como segredos e delete chaves de teste após o uso.
*   **Melhores Práticas:**
    *   **Avaliação Comparativa:** Inicialmente, utilize os créditos internos da plataforma para testar e comparar o desempenho de diferentes LLMs (ex: OpenAI vs. Claude) e identificar qual oferece as melhores respostas para seu caso de uso.
    *   **Otimização Contínua:** Continue testando e ajustando o uso de LLMs para garantir a melhor performance e custo-benefício.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/001 Cupom de desconto

**Ofertas Zaia:**

*   **Teste Grátis:**
    *   **Duração:** 14 dias.
    *   **Ação:** Cadastre-se via `https://zaia.app/embaixadores/lupapini?via=luciana`
*   **Desconto Primeiro Mês:**
    *   **Preço:** R$ 87.
    *   **Ação:** Use o cupom `luciana87`.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/002 Conceito

Aqui estão os princípios fundamentais para criar e gerenciar um funcionário de IA (agente autônomo):

*   **Modelo de Funcionário de IA:**
    *   Conceitue a criação e gestão de um agente de IA como o processo de contratação e integração de um funcionário humano.
    *   Isso facilita a compreensão das etapas e a estruturação do trabalho.

*   **1. Definição da Descrição da Vaga (Job Description):**
    *   **Propósito:** Declarar o que se espera do funcionário de IA.
    *   **Impacto:** Influencia diretamente o comportamento e as habilidades fundamentais do agente.
    *   **Ação:** Defina claramente o papel, responsabilidades e resultados esperados do agente.

*   **2. Onboarding (Integração na Empresa):**
    *   **Propósito:** Situar o agente no contexto da empresa.
    *   **Conteúdo:** Ensine sobre a empresa, suas ofertas de serviço, valores e como tratar clientes.
    *   **Impacto:** Fornece dados da empresa e personalidade ao "cérebro" do agente, alinhando-o com a cultura e o ambiente operacional.

*   **3. Ensino de Processos (Estágios/Instruções/Roteiros):**
    *   **Propósito:** Detalhar o dia a dia e o passo a passo das tarefas.
    *   **Conteúdo:** Determine a metodologia e os fluxos de trabalho específicos.
    *   **Impacto:** Direciona o que será inserido nos "estágios" ou "instruções e roteiros" do agente, definindo sua execução operacional.

*   **4. Validação Interna e Feedback:**
    *   **Propósito:** Testar o agente internamente antes da interação com clientes.
    *   **Processo:** Realize rodadas de validação e feedback para identificar e corrigir falhas.
    *   **Impacto:** Permite "lapidar" e "apertar parafusos" (ajustar configurações) do agente, garantindo que ele performe conforme o esperado.

*   **5. Atendimento a Clientes e Otimização Contínua:**
    *   **Propósito:** Integrar o agente em canais de atendimento (WhatsApp, Instagram, etc.).
    *   **Expectativa:** Reconheça que o desempenho inicial pode não ser perfeito; ajustes contínuos são cruciais.
    *   **Ação:** Monitore as interações e continue a refinar o agente com base na experiência real, pois a otimização é um processo contínuo.

*   **Localização do Comportamento:**
    *   **Comportamento Geral/Habilidades:** Definido na "Job Description".
    *   **Contexto da Empresa/Personalidade:** Inserido nos "dados da empresa" ou no "cérebro" do agente (onboarding).
    *   **Fluxos de Trabalho/Execução:** Configurado nos "estágios" ou "instruções e roteiros".
    *   **Ajustes de Performance:** Realizados durante a "validação interna" e "atendimento a clientes".

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/003 Job Description

Aqui estão os princípios fundamentais para a criação de agentes de IA:

**1. Agente de IA como Funcionário Digital:**
*   Um agente de IA é uma representação digital de um funcionário humano, possuindo:
    *   **Personalidade:** Define o comportamento e tom.
    *   **Cérebro:** O modelo de linguagem (LLM) que processa e gera respostas.
    *   **Habilidades:** Funções específicas que pode executar.
    *   **Visual:** Representação gráfica (opcional).
    *   **Local de Trabalho:** Contexto operacional.

**2. Caso de Uso Fundamental: Qualificação de Leads:**
*   Um agente qualificador de leads é um dos usos mais versáteis e solicitados.
*   **Objetivo:** Atender usuários de campanhas de marketing, qualificá-los e direcioná-los ao melhor caminho.

**3. Princípios de Configuração da Personalidade/Comportamento do Agente:**
*   **Menos é Mais (Conciseness):**
    *   Seja curto, direto e objetivo nas instruções de comportamento.
    *   Insira apenas o *crème de la crème* – a informação essencial.
*   **Persistência do Contexto:**
    *   Informações definidas nos "Dados do Agente" (personalidade, comportamento) são enviadas com *todas* as mensagens do usuário.
    *   Excesso de informação aqui confunde o LLM, gera redundância e atinge limites de token.
*   **Controle de Variáveis:**
    *   Evite sobrecarregar o agente com muitas informações iniciais.
    *   Isso dificulta a depuração: se o agente responder de forma inesperada, você não saberá qual instrução específica causou o comportamento.
    *   Comece com o básico e evolua conforme a necessidade.
*   **Generalização vs. Especialização:**
    *   Busque criar comportamentos genéricos que possam ser reutilizados em diversos casos de uso (ex: qualificar usuário, direcionar ao melhor caminho).
    *   Especifique o comportamento apenas quando for estritamente necessário para o contexto.
*   **Tom e Contexto:**
    *   Defina o tom do agente (ex: respeitoso, não formal) de acordo com a situação do usuário e o ambiente de atuação (ex: clínica médica).

**4. Escolha do Modelo de Linguagem (LLM):**
*   **GPT-4o:** Recomendado para melhor desempenho e obediência.
*   **Llama 3:** Mais rápido e barato, mas menos "obediente" às instruções.
*   **GPT-4 Turbo (Legado):** Pior desempenho e mais caro que o GPT-4o.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/004 Onboarding na Empresa

Aqui estão os Primeiros Princípios da aula:

*   **Fase Atual:** Onboarding de colaboradores.
*   **Objetivo do Onboarding:** Imersão completa do novo colaborador na empresa.
*   **Componente "Dados da Empresa":** Primeira funcionalidade (simples) para o onboarding.
    *   **Propósito:** Fornecer a essência da empresa para o agente de IA.
    *   **Dados Essenciais:** Nome da empresa, Site da empresa.
    *   **Geração de Descrição:** Utilizar IA (ex: ChatGPT) com o prompt "cria uma descrição resumida da empresa em um parágrafo" para obter um resumo conciso.
*   **Princípio de Conteúdo para "Dados da Empresa":**
    *   **Concisão é Crítica:** Incluir apenas o resumo sucinto da essência da empresa.
    *   **Foco na Essência:** Informações que permitam ao agente inferir e compreender o contexto geral.
    *   **Evitar Detalhes Excessivos:** Não detalhar produtos, serviços ou verticais aqui. Isso sobrecarrega o agente e prejudica sua performance e capacidade de inferência.
    *   **Motivo:** Os "Dados da Empresa" são inseridos em todas as mensagens/inferências do agente, portanto, devem ser enxutos e altamente relevantes.
*   **Próximo Passo:** Abordar a funcionalidade "Cérebro" (parte complexa).

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/005 Onboarding da Empresa

Aqui estão os princípios fundamentais da aula:

*   **Objetivo do Agente:**
    *   Qualificar leads para direcionamento a closers humanos.
    *   Capacitar o agente com informações completas da empresa *antes* da interação humana ("inversão").

*   **Mecanismos de Alimentação de Dados (Conhecimento):**
    *   **Dados do Agente / Dados da Empresa:** Informações gerais e de personalidade, presentes em *todas* as interações.
    *   **Cérebro:**
        *   Armazena grande volume de dados.
        *   Recupera informações *seletivamente* com base no contexto da pergunta.
        *   Prioriza 4 trechos de 1000 caracteres que mais se relacionam ao contexto para gerar respostas.
    *   **Arquivos:**
        *   **Melhor prática:** TXT. Permite dados estruturados, fácil edição e organização por tema.
        *   PDFs são aceitáveis, mas TXT é superior para formatação e controle.
    *   **Websites (Scraping):**
        *   Pode ler páginas específicas ou todo o domínio.
        *   **Cuidado:** Dados podem vir desestruturados ("sujeira" de HTML, anúncios), exigindo tratamento.
    *   **Perguntas e Respostas (Q&A):** Inserção direta de pares pergunta-resposta.
    *   **API:** Permite integração para dados estáticos e dinâmicos.

*   **Tipos de Dados:**
    *   **Dados Estáticos:** Informações fixas da empresa (ex: onboarding, produtos). Alimentados via "Dados da Empresa", "Arquivos", "Websites", "Q&A".
    *   **Dados Dinâmicos:** Informações variáveis e em tempo real (ex: dados do lead, histórico do cliente, status de assinatura).
        *   Obtidos de outros sistemas (CRM, bancos de dados) via API.
        *   Processados na seção de "Processo ou Acessos a Ferramentas", não no "onboarding" inicial da empresa.

*   **Processo de Treinamento:**
    *   Fluxo: "Treinando" -> "Pronto para Treinar" -> "Treinando" -> "Pronto".
    *   Treinamento é rápido e em tempo real.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/006 Estabelecer Processos

Aqui estão os princípios fundamentais para configurar o escalonamento de conversas do agente de IA para um humano:

*   **Propósito do Escalonamento:** Otimizar o tempo do agente humano, permitindo que a IA qualifique leads ou resolva interações iniciais, passando para o humano apenas em condições específicas (ex: lead de alto valor, problema complexo, sentimento negativo).

*   **Ativação Condicional:** O escalonamento é sempre acionado por condições específicas, não por padrão.
    *   **Configuração:** Selecione "Ativar encaminhamento pro humano mediante condições".

*   **Dados para Condições:** As decisões de escalonamento são baseadas em um conjunto rico de dados contextuais:
    *   Mensagem do usuário.
    *   Histórico da conversa.
    *   Dados do agente e da empresa.
    *   Dados do CRM (se integrado).
    *   Análise de NLU (Processamento de Linguagem Natural) e sentimento.
    *   Estágio atual da interação.

*   **Lógica de Qualificação Customizável:**
    *   Evite a qualificação genérica baseada apenas na IA para processos críticos.
    *   Defina condições explícitas para o que constitui um lead "qualificado" ou uma situação que exige intervenção humana (ex: "usuário confirmou interesse em falar com especialista").
    *   Utilize operadores lógicos (ex: "OU") para combinar múltiplas condições de gatilho.
    *   Considere a análise de sentimento para escalonar conversas negativas.

*   **Mecanismos de Redirecionamento (Handover):** Escolha como o humano assumirá a conversa:
    1.  **Humano Assume na Plataforma:** O agente humano assume a conversa diretamente dentro da plataforma.
        *   A IA para de responder.
        *   O usuário permanece no mesmo canal (ex: WhatsApp).
        *   **Melhor Prática:** Recomendado para maior controle e funcionalidades.
    2.  **Notificação por WhatsApp:** Envia uma mensagem de WhatsApp para um número específico (do especialista) notificando sobre o lead aguardando contato.
    3.  **Redirecionamento para URL:** Fornece ao usuário um link (ex: Calendly, link de WhatsApp direto, link de chamada) para que ele inicie o contato com o especialista.

*   **Experiência do Usuário Transparente:**
    *   Configure uma mensagem de transição para informar o usuário sobre o escalonamento (ex: "Nossa equipe entrará em contato em breve...").
    *   Garanta que o usuário não precise mudar de canal, mantendo a continuidade da interação.

*   **Casos de Uso Estratégicos:**
    *   **Suporte:** Escalonar problemas complexos (Nível 1 para Nível 2/3).
    *   **Vendas:** Qualificar leads de alto valor antes do engajamento humano, economizando tempo do vendedor.

*   **Salvamento:** Sempre salve as alterações após a configuração.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/007 Validar o Trabalho

Aqui estão os princípios fundamentais da aula sobre validação de agentes de IA:

*   **Validação Interna é Essencial:** Teste o agente em um ambiente controlado antes da produção para identificar e corrigir falhas.
*   **Teste Iterativo:** Após cada alteração (novo estágio, frase, palavra, arquivo, habilidade), teste imediatamente o agente.
*   **Fluxos e Estágios:**
    *   Agentes seguem fluxos definidos por estágios.
    *   Configure estágios para guiar a conversa e coletar informações.
    *   O agente pode buscar informações no "cérebro" (base de conhecimento) quando não há um estágio específico para a pergunta.
*   **Funcionalidade "Passar para o Humano":**
    *   Configure-a para coletar dados essenciais (ex: número de telefone, horário) antes de transferir.
    *   Pode ser integrada a CRMs ou outras plataformas para notificação.
*   **Ferramenta "Inspecionar Resposta" (Debugging):**
    *   **Idioma Detectado:** Verifica o idioma do usuário.
    *   **Estágio Selecionado:** Confirma qual estágio foi ativado, crucial para validar condições.
    *   **Fonte de Dados (Cérebro):** Mostra os blocos de informação brutos recuperados da base de conhecimento.
    *   **Re-ranqueamento:** Exibe os blocos de informação do "cérebro" priorizados e organizados pela IA com base no contexto da conversa. Foco principal para entender o que a IA usou.
    *   Use-a para depurar transições de estágio, recuperação de dados e relevância das respostas.
*   **Ferramenta "Revisar Resposta" (Treinamento):**
    *   Utilize quando a resposta do agente for insatisfatória.
    *   Permite ajustar a resposta e "treinar" o agente, criando um par de pergunta/resposta no "cérebro".
*   **Histórico de Conversas:**
    *   Para agentes em produção, acesse em "Habilidades > Histórico de Conversas".
    *   Permite inspecionar e revisar interações reais para melhoria contínua.
*   **Melhores Práticas de Validação:**
    *   **Casos de Uso Reais:** Estresse o agente com "10 atendimentos legados" (interações reais passadas) para cobrir cenários diversos.
    *   **Feedback do Usuário:** Implemente mecanismos para o usuário avaliar o atendimento (bom/ruim) para melhoria contínua.
    *   **Automação (Avançado):** Considere criar um "agente usuário" para conversar automaticamente com seu agente e analisar as respostas.
*   **Validação Contínua:**
    *   A validação é um processo contínuo, não um evento único.
    *   Após a implantação em produção, monitore e faça ajustes constantes ("apertar o parafuso") com base nas interações reais dos clientes.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/008 Dar Acesso aos Canais de Atendimento

Aqui estão os princípios para colocar seu agente de IA para trabalhar:

1.  **Limpeza de Histórico:** Sempre limpe o histórico do agente antes de iniciar um novo teste.

2.  **Integração Web (Script):**
    *   Copie e cole o script JavaScript fornecido no HTML do seu site (WordPress, Wix, Webflow, código customizado).
    *   **Regra Essencial:** Autorize o(s) domínio(s) do seu site na plataforma para que o script funcione. Sem autorização, o widget não aparecerá.

3.  **Configuração Visual:**
    *   A aba "Visual" controla a aparência do widget (bolinha, iframe) em sites.
    *   Não afeta a integração com WhatsApp ou Instagram.

4.  **Integração WhatsApp:**
    *   **WhatsApp Comum:** Conecte via QR Code (similar ao WhatsApp Web) para uso básico, ideal para pré-venda.
    *   **WhatsApp Cloud API:** Integração avançada e complexa. Para simplificar, considere usar plataformas como ManyChat ou outros brokers.

5.  **Integração Instagram:**
    *   **Mensagens Diretas (DMs):** Utilize o ManyChat para que o agente responda às DMs do Instagram.
    *   **Comentários:** Utilize o Make (Integromat) para que o agente responda aos comentários do Instagram.

6.  **Make (Orquestração No-Code):**
    *   Plataforma no-code para criar integrações e orquestrações complexas.
    *   Permite que o agente interaja com diversas plataformas, como responder a comentários do Instagram.

7.  **ManyChat:**
    *   Ferramenta chave para gerenciar respostas a DMs do Instagram, contornando a burocracia da API direta do Meta.

8.  **API (Avançado):**
    *   Acesse a documentação da API para integrações personalizadas.
    *   Utilize "Chaves Globais" para controle avançado.
    *   Ignore a "API Legado" para novas implementações.

9.  **Compartilhar Agente:**
    *   Gere uma URL única para compartilhar o agente.
    *   Ideal para testes internos, coleta de feedback ou demonstrações para clientes/leads.

10. **Webhooks (Web Universal):**
    *   Permite que sistemas externos acionem o agente de IA.
    *   **Caso de Uso:** Recuperação de carrinho abandonado. Um evento externo (ex: falha de pagamento) dispara o agente, que envia uma mensagem proativa via WhatsApp ao usuário.

11. **Plugin WordPress:**
    *   Disponível um plugin específico para facilitar a integração do agente em sites WordPress, como alternativa à inserção manual do script.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/009 (BÔNUS)

Aqui estão os princípios para monetizar agentes autônomos de IA:

**1. Estratégia Básica (Anúncios Diretos):**
*   Crie anúncios direcionados para ofertas de automação de suporte.
*   Use o agente de IA para qualificar leads.
*   Finalize a venda com atendimento humano.

**2. Estratégia "Cliente Oculto":**
*   **Identificação:** Liste 30 negócios com atendimento online (ex: WhatsApp).
*   **Avaliação:** Contate-os como cliente, catalogando em planilha: tempo de resposta, qualidade do atendimento, resolução de problemas.
*   **Priorização:** Selecione os 10 negócios com os piores atendimentos.
*   **Desenvolvimento:** Crie um agente de IA *básico e genérico* (apenas com dados do site, mínima configuração).
*   **Abordagem:** Apresente-se ao responsável do negócio (alguém que se incomode com mau atendimento).
*   **Demonstração:** Mostre a experiência de mau atendimento que você teve e apresente o agente de IA como solução.
*   **Expectativa:** Alta taxa de conversão (ex: 8 de 10 vendas).

**3. Estratégia de Upsell para Clientes Existentes:**
*   **Público-alvo:** Gestores de tráfego, agências com carteira de clientes.
*   **Implementação Inicial:** Implemente o agente de IA em *um* cliente existente para criar um caso de uso.
*   **Teste Gratuito:** Ofereça um período de teste (15-30 dias).
*   **Incentivo à Indicação:** Se o cliente gostar e continuar, ofereça um desconto por cada novo cliente fechado que ele indicar (ex: 3 indicações, 1 fechamento = desconto).
*   **Benefício Mútuo:** Cliente reduz custos, você adquire novos clientes.

**4. Princípios de Precificação:**
*   Comece com preços menores e teste o mercado.
*   Ajuste o preço conforme a região e a flexibilidade de integração com os sistemas do cliente.

**5. Melhores Práticas:**
*   Valide e teste suas ofertas no mercado.
*   Aprenda na prática, criando e vendendo agentes de IA.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/010 Imersão Prática de Agentes de Inteligência Artificial

Aqui estão os Primeiros Princípios da aula sobre Agentes de IA:

---

### Oportunidade de Mercado e Carreira

*   **Definição de Agente de IA:** Software que interage com sistemas e humanos (texto, voz, imagem) para realizar ações, não apenas fornecer conhecimento, sem necessidade de programação.
*   **Mudança de Paradigma:** De "executar tarefas" para "medir resultados" de agentes de IA.
*   **Impacto e Oportunidade:**
    *   Agentes de IA especializados superam IAs genéricas (ex: ChatGPT) em tarefas específicas.
    *   Redução drástica de custos (ex: 150x menor custo por lead, $0.01 para documentos jurídicos/imagens).
    *   Criação de uma nova força de trabalho na intersecção entre SaaS e trabalho humano.
    *   Mercado global de $5.1 bilhões (2024) para $50 bilhões (2030) – crescimento de 10x.
    *   Atendimento ao cliente e vendas representam 30% desse mercado ($15-20 bilhões).
*   **Carreira "Gestor de Automação em IA":** Posição emergente com alta demanda e baixa oferta (281 no LinkedIn vs. 26.000 "Gestores de Tráfego"). Alta margem de lucro para serviços.

### Monetização e Casos de Uso

*   **Modelo de Precificação:**
    *   **Setup:** R$1.000-R$5.000 (PMEs), R$20.000+ (Grandes Empresas), com casos de R$75.000.
    *   **Gestão Mensal:** R$1.000-R$3.000 (PMEs), R$10.000+ (Grandes Empresas).
    *   **Observação:** Os valores escalam com o volume de mensagens do cliente.
*   **Casos de Uso Comuns:**
    *   Agendamento de reuniões automatizado e humanizado (outbound/inbound).
    *   Suporte ao cliente automatizado (site, WhatsApp, Instagram).
    *   Consulta de manuais internos (ex: manual de vendas para equipes de campo).
    *   Indicação de produtos (personal shopper para e-commerce).
    *   Especialistas em IA para educação de clientes/comunidades (infoprodutores).
*   **Clientes Alvo:** Negócios com alto volume de contato (infoprodutos, SaaS, e-commerce, imobiliárias, clínicas, hotéis, restaurantes, políticos).
*   **Canais Principais:** WhatsApp (API Business), Website, Instagram.
*   **Ferramenta de Vendas:** Use Gamma App para gerar apresentações de vendas rapidamente.

### Fundamentos de Agentes de IA (Zaya)

*   **Agentes de IA vs. Chatbots Tradicionais:**
    *   **Agente de IA:** Conversa humanizada, entende texto amplo, treinado com histórico de conversas.
    *   **Chatbot Tradicional:** Conversa robotizada, entende texto fechado, treinado com árvores de decisão.
*   **Componentes de um Agente Zaya:**
    *   **Comportamento:** Define o papel, tom de voz e regras gerais do agente (ex: "nunca informar preço do procedimento, apenas da consulta").
    *   **Estágios de Conversa:** Script sequencial que o agente segue (ex: Identificar Usuário, Diagnosticar Necessidade, Consultar Agenda, Fazer Agendamento, Avaliar Atendimento).
    *   **Variáveis:** Informações capturadas durante a conversa (ex: nome, e-mail, necessidade, data.start, data.end).
    *   **Condições:** Regras para acionar um estágio (ex: "se o usuário já informou o nome e perguntou sobre a agenda").
    *   **Instruções:** O que o agente deve dizer ou fazer (ex: "peça para o usuário escolher uma das opções de horário").
    *   **Ações (API):** Chamadas a sistemas externos (ex: Make, Google Calendar).

### Construindo um Agente de Agendamento (Exemplo Prático)

**Ferramentas:** Zaya, Make (Integromat), Google Calendar.

1.  **Configuração Google Calendar:**
    *   Crie uma nova agenda para testes (ex: "Test 3").
    *   Defina formato de data (DD/MM/YYYY) e hora (24h).
    *   Marque horários ocupados (ex: 18h-18h diariamente, fins de semana 8h-18h).
    *   Marque horários livres (ex: Seg-Sex 8h-18h). *Essencial para o Make identificar disponibilidade.*

2.  **Configuração Make (Cenários e Webhooks):**
    *   Importe 3 blueprints (disponíveis no material):
        *   **Cenário 1: Consultar Eventos:**
            *   Integre Google Calendar, selecione "Test 3".
            *   Crie um Webhook (ex: "ConsultarEvent").
            *   Configure o módulo "Iterator" para mapear os horários "ocupados" do Google Calendar.
        *   **Cenário 2: Agendamento de Reunião:**
            *   Integre Google Calendar, selecione "Test 3".
            *   Crie um Webhook (ex: "AgendarEvent").
            *   Configure e-mails dos participantes (cliente, agente).
            *   Mapeie campos como nome, e-mail, data/hora de início e fim.
        *   **Cenário 3: Lembrete de Evento:**
            *   Integre Google Calendar, selecione "Test 3".
            *   Defina o intervalo de datas para buscar eventos (ex: 1-3 dias à frente).
            *   **Integração OpenAI (Opcional):** Para correção de datas (ou use formatação nativa do Make).
            *   **Temporizador:** Adicione um atraso (ex: 21 segundos) entre mensagens para evitar bloqueios no WhatsApp.
            *   **Zaya Webhook:** Conecte o módulo de envio de mensagem ao Webhook Universal da Zaya.

3.  **Configuração Zaya (Agente SDR Clínica Odontológica):**
    *   **Crie o Agente:** Defina nome (ex: "Lú da Superdente") e comportamento (ex: "consultiva, nunca vendedora", "nunca perguntar melhor dia/horário").
    *   **Variáveis:** Crie `data.start` e `data.end` para armazenar data e hora de início/fim da consulta.
    *   **Estágio "Consultar Agenda":**
        *   **Condição:** `se o usuário já informou o nome, entende a necessidade dele e ele perguntou sobre a agenda`.
        *   **Instrução:** `Peça para os usuários escolher uma das opções de horário enviadas no seguinte formato: Traga três dias diferentes e maior disponível em cada dia.`
        *   **Ação (API):**
            *   **URL:** Webhook do Make do cenário "Consultar Eventos".
            *   **Método:** `GET` (para buscar informações).
            *   **Body:** `{"days": 5, "duration": 1}` (buscar 5 dias, slots de 1 hora).
            *   **Formato de Resposta:** JSON com os horários disponíveis.
            *   **Header:** `Content-Type: application/json`.
    *   **Estágio "Fazer Agendamento":**
        *   **Pré-condição:** Variável `data.email` capturada.
        *   **Condição:** `se o usuário já informou o nome, entende a necessidade dele, ele perguntou sobre a agenda e já informou o e-mail e a data e hora de início e fim da consulta`.
        *   **Instrução:** `Perfeito! Agendei sua consulta para o dia {data.start} às {data.start}. Você receberá um e-mail de confirmação.`
        *   **Ação (API):**
            *   **URL:** Webhook do Make do cenário "Agendar Evento".
            *   **Método:** `POST` (para criar um evento).
            *   **Body:** JSON com `nome`, `email`, `whatsapp`, `data.start`, `data.end`.
            *   **Status de Resposta:** `200` (sucesso).
    *   **Lembrete (Zaya Webhook Universal):**
        *   Crie um Webhook Universal na Zaya (ex: "Lembrete").
        *   Defina a mensagem: `Oi, {nome}. Sua consulta amanhã, {data}. Estamos preparando tudo para receber você maravilhosamente bem em nosso consultório.`
        *   Use a URL deste Webhook no cenário "Lembrete de Evento" do Make.

4.  **Integração WhatsApp:**
    *   Conecte o agente Zaya ao WhatsApp (via API Business oficial ou WhatsApp comum para testes).
    *   **Dica de Troubleshooting:** Erros comuns incluem ID de calendário incorreto, campos não mapeados no Make, sessão do WhatsApp não encontrada (reconectar), URLs de Webhook erradas, lógica de encaminhamento para humano ativada indevidamente.

### Próximos Passos da Zaya (Roadmap)

*   **Próximos 3 Meses:**
    *   **Integrações Nativas:** Instagram e Google Calendar (simplificando o uso do Make).
    *   **Novas Ações:**
        *   **Follow-up:** Mensagens automáticas após X tempo.
        *   **Envio de Arquivos:** Áudios, imagens, PDFs.
        *   **Passar para Outro Agente:** Transferir conversas entre agentes especializados.
        *   **Passar para Humano:** Integrar o encaminhamento para humano diretamente no fluxo de conversas.
*   **Primeiro Trimestre de 2025:**
    *   **Funil de Vendas com IA:** CRM com estágios de conversa como colunas (Kanban), com follow-ups automáticos para avançar clientes.
    *   **Marketplace de Templates:** Usuários poderão criar e compartilhar modelos de agentes.
    *   **Busca de Site em Tempo Real:** O cérebro da IA se atualiza automaticamente com mudanças no site (e-commerce, imobiliárias).
    *   **Fazer e Receber Ligações com IA:** Integração com APIs de voz (ex: ChatGPT Voice) para conversas telefônicas humanizadas.

### Perguntas e Respostas (Tópicos Chave)

*   **Cancelamento/Reagendamento:** Segue a mesma lógica de agendamento, atualizando o Google Calendar e enviando novas informações.
*   **Multi-idioma:** Zaya suporta múltiplos idiomas (configurável, com detecção automática).
*   **Suporte a Alunos (Infoprodutos):**
    *   **Conteúdo:** Carregue FAQs, documentos ou vídeos do YouTube para o "cérebro" da IA.
    *   **Integração:** Incorpore o agente Zaya em plataformas (ex: Memberkit) via código embed.
    *   **Mensagens Proativas:** Use Make para monitorar dados da plataforma (ex: aluno inativo por X dias) e disparar Webhooks da Zaya.
    *   **Alto Volume:** Use a API oficial do WhatsApp Business (integrada na Zaya) para evitar bloqueios.
*   **Clínicas Multi-especialidade e LGPD:**
    *   **Integração com Sistemas Legados:** Se o sistema tiver API aberta, o Make pode integrar via módulos HTTP (lógica similar ao Google Calendar).
    *   **LGPD/Dados Sensíveis:** Zaya possui termos e políticas de privacidade robustos. Conversas são armazenadas no banco de dados da Zaya e não são usadas para treinar modelos de forma cruzada. Para LLMs, considere usar modelos open-source (ex: Llama 3.1) ou verificar as políticas de privacidade do provedor (ex: OpenAI afirma não usar dados de clientes para treinamento).
    *   **Menu de Atendimento:** Zaya usa "estágios" para o fluxo de conversa, que podem simular menus pedindo ao usuário para digitar opções (ex: "1 para Odonto, 2 para Dermato").
*   **Múltiplos Usuários/Cadeiras:** Contas de agência na Zaya permitem adicionar múltiplos membros com diferentes perfis (suporte, designer, gerente, admin) por R$49/cadeira/mês.
*   **White Label:** R$997/mês para remover a marca Zaya (URL e logo personalizados). Cada cliente ainda precisa de um plano Zaya (ex: R$249/mês para o plano Aceleração).
*   **Múltiplos WhatsApps:** Cada agente Zaya pode ser conectado a um número de WhatsApp diferente (ex: 10 agentes = 10 WhatsApps no plano Aceleração).
*   **Assistente Financeiro (Hotmart):**
    *   Use Webhooks Universais da Zaya para criar mensagens (ex: "Pix gerado").
    *   Integre Webhooks da Hotmart (ex: "aguardando pagamento") para disparar mensagens da Zaya.
    *   Para ações complexas (ex: consultar parcelas em atraso, negociar): Use Make para buscar dados (ex: de planilhas atualizadas pela Hotmart) e então acionar Webhooks da Zaya. A Zaya não puxa dados complexos da Hotmart diretamente.
*   **Agentes em Grupos de WhatsApp:**
    *   Conecte o agente Zaya ao WhatsApp e adicione-o ao grupo.
    *   Para interagir, `@mencione` o agente no grupo.
    *   Para mensagens proativas (ex: "saldo baixo na conta de anúncios"): Use Make para monitorar dados da plataforma (ex: Meta Ads) e disparar Webhooks da Zaya para o grupo.

---

## 📘 02 Módulo 2 - Construindo agentes de IA com a Zaia (Versão antiga)/011 A Ferramenta de IA que Vai Revolucionar Seu Trabalho Como Gestor de Automação

Aqui está a destilação do conteúdo da aula em Primeiros Princípios:

---

### Zaia: Agentes de IA para Automação e Vendas

**1. Conceitos Fundamentais de Agentes de IA:**
*   **Agente de IA:** Entidade que percebe o ambiente para atingir objetivos específicos (reativa ou proativa).
*   **Diferença para Chatbots Tradicionais:**
    *   **Agente de IA:** Conversa humanizada, aceita contextos abertos (entende sinônimos), usa "estágios de conversa" (fluxo não-linear).
    *   **Chatbot Tradicional:** Conversa robotizada, aceita contextos fechados (botões), usa "árvores de decisão" (fluxo linear).
*   **Agente de IA Personalizado vs. ChatGPT:**
    *   **Agente Personalizado:** Limita-se a informações da empresa, evita assuntos não relacionados.
    *   **ChatGPT:** Conhecimento geral, não responde sobre a empresa sem treinamento específico.
*   **IA Generativa:** Essencial para conversas humanizadas em atendimento, vendas e suporte.

**2. Oportunidade de Mercado e Monetização:**
*   **Produtividade:** Empresas exigem menos pessoas para gerar $1M de receita (2024: 2 pessoas), IA acelerará isso.
*   **Futuro:** Empresas serão "clusters de agentes de IA" interagindo para objetivos de venda.
*   **Monetização para Gestores de Automação:**
    *   **Setup/Criação:** Cobrar R$500 a R$20.000+ (dependendo da complexidade e integração via API).
        *   Sugestão: Começar com R$500 ou grátis para o primeiro cliente para construir portfólio.
    *   **Gestão Mensal:** Cobrar R$1.000 a R$2.000/mês (PMEs) ou R$10.000+/mês (grandes empresas).
        *   Justificativa: Agentes exigem melhoria contínua (mudanças de mercado, testes de Q&A, otimização de conversão).
*   **Casos de Uso Mais Vendidos:**
    *   Agendamento de reuniões automatizado (outbound/inbound).
    *   Suporte e atendimento ao cliente humanizado (site, WhatsApp, Instagram).
    *   Consulta de manuais internos (para grandes empresas).
    *   Indicação de produtos/especialistas.
    *   Educação de clientes/comunidade (ex: IA treinada com aulas de infoprodutos).
*   **Tipos de Clientes:** Infoprodutos, lançamentos, SaaS, e-commerce, imobiliárias, clínicas, hospitais, restaurantes, políticos, negócios com alto volume de contato.
*   **Canais de Integração:** WhatsApp (comum e API oficial), Widget de site, Instagram (via Make/ManyChat).

**3. Plataforma Zaia: Visão Geral e Funcionalidades:**
*   **Créditos:** Consumo de mensagens por mês (1 crédito = 1 resposta do agente com Llama3).
*   **Agentes:** Gerencie agentes criados e acesse agentes pré-configurados (psicólogo, copywriter).
*   **Conversas:** Visualize histórico de interações e faça "transbordo" para atendimento humano.
*   **Workspaces:**
    *   Crie ambientes separados para cada cliente.
    *   Adicione perfis de usuários (clientes/equipe) com acesso restrito (ex: apenas suporte a um agente específico).
    *   **White-label:** Personalize o workspace com a logo da sua agência (URL permanece Zaia).
    *   Custo adicional por perfil de usuário no workspace (R$49/mês).
*   **Planos Zaia:**
    *   Todos com 7 dias grátis.
    *   Plano "Aceleração" (R$249/mês): 10 agentes, 5.000 créditos de mensagem (recomendado para começar a vender).
    *   **Regra de Créditos:** Ao atingir o limite, o agente envia uma mensagem padrão de "não posso responder" (futuro: personalizável). Atualmente, exige upgrade de plano (não há compra avulsa de créditos).

**4. Criação de Agentes de IA na Prática:**
*   **Passos Comuns:**
    1.  **Personalidade:**
        *   Nome do Agente.
        *   **Modelo:** Llama3 (padrão, mais barato, 1 crédito/resposta) ou GPT-4 (para complexidade, 10-20 créditos/resposta).
        *   **Comportamento:** Defina o perfil (ex: "atendente da empresa", "usa emojis", "nunca menciona concorrentes"). Limite a 10-15 pontos para foco.
        *   Tom de Voz (ex: Casual).
        *   Mensagem Inicial.
    2.  **Dados da Empresa:** Nome e descrição da empresa.
    3.  **Cérebro (Treinamento):**
        *   **Fontes:** Upload de arquivos (.pdf, .docx, .txt) ou URLs de sites.
        *   **Leitura:** "Ler somente esta página" (para sites, até 50k caracteres no plano gratuito).
        *   **Perguntas e Respostas:** Treine respostas específicas para perguntas exatas (prioriza sobre o treinamento geral).
        *   **APIs de Dados Dinâmicos:** Conecte a sistemas externos para informações em tempo real (ex: saldo, imóveis, estoque).
*   **Exemplo 1: Agente FAQ para Landing Page:**
    *   Treinado com o site da empresa.
    *   Responde a dúvidas comuns, reduzindo suporte e aumentando conversão.
*   **Exemplo 2: Agente de Suporte para Aulas/Cursos:**
    *   **Método:** Use um transcritor de YouTube (ex: `yt-scribe.com`) para converter vídeos em texto. Salve como PDF/TXT e suba no "Cérebro".
    *   Agente responde a dúvidas sobre o conteúdo das aulas.
*   **Exemplo 3: Agente de Vendas com Estágios de Conversa:**
    *   **Construções e Roteiro (Estágios):** Defina um fluxo de vendas (ex: Introdução, Análise de Necessidade, Apresentação da Solução, CTA, Dúvidas Gerais).
    *   Para cada estágio, defina:
        *   **Condição:** O que o cliente deve dizer/fazer para acionar este estágio.
        *   **Objetivo:** O que o agente deve fazer/perguntar neste estágio.
    *   **Fluxo Não-Linear:** O agente pode pular estágios se a intenção do cliente for clara (ex: "Quero comprar" vai direto para o checkout).
    *   **Ferramenta de Inspeção:** Analise a resposta do agente (idioma, estágio detectado, "pensamento" da IA, fontes de dados) para depurar e otimizar.

**5. Habilidades e Integrações:**
*   **Histórico de Conversas:** Visualize todas as interações.
*   **Transbordo para Humano:**
    *   Assuma a conversa a qualquer momento (IA para de responder, humano assume).
    *   Defina condições para transbordo (ex: "lead qualificado", "conversa negativa", "usuário pede para falar com humano").
    *   Direcione para a plataforma Zaia, outro número de WhatsApp, ou URL externa.
    *   **Melhor Prática:** Direcionar para o mesmo número de WhatsApp para transição fluida.
*   **Captura de Leads:** Configure o agente para pedir nome, e-mail, WhatsApp; dados são salvos em CRM/Excel.
*   **Recuperação de Carrinho Abandonado:**
    *   Crie um webhook na Zaia.
    *   Defina a mensagem proativa.
    *   Conecte o WhatsApp.
    *   Integre o webhook na plataforma de e-commerce (ex: Hotmart, WordPress) para disparar a mensagem após o abandono.
*   **Campanhas Proativas:** Envie mensagens em massa via WhatsApp comum para listas de leads.
*   **Resposta em Áudio:** Agente responde por áudio (voz feminina/masculina) se o usuário enviar áudio.
    *   Voz atual: GPT-4o (levemente robótica). Futuro: Integração com ElevenLabs para vozes personalizadas.
*   **Integrações Nativas:** WhatsApp (comum e API oficial), Widget de site (WordPress plugin ou código embed), Make (Integromat), ManyChat.
*   **Instagram:** Via Make/ManyChat (não nativo).
*   **API:** Documentação completa para desenvolvedores.

**6. Melhores Práticas:**
*   **Treinamento Contínuo:** A IA precisa ser constantemente treinada e ajustada para evitar "alucinações" e otimizar respostas.
*   **Testar Exaustivamente:** "Fussar muito" na ferramenta, criar cenários de perguntas e respostas para garantir que a IA se comporte como esperado.
*   **Começar Simples:** Inicie com um agente FAQ e adicione complexidade gradualmente.
*   **Contratos:** Tenha contratos claros com clientes sobre implementação, mensalidade e acesso em caso de cancelamento.
*   **Estimativa de Volume:** Use o histórico de interações do cliente para estimar o volume de mensagens e escolher o plano Zaia adequado.

**7. Oferta Exclusiva:**
*   **Cupom:** `MASTERTRIM`
*   **Benefício:** 30 dias grátis adicionais (total de 37 dias) no plano "Aceleração" (R$249/mês, 10 agentes, 5.000 créditos).
*   **Validade:** Até sexta-feira, 23:59.
*   **Suporte:** Comunidade Discord da Zaia.

---

## 📘 03 Conteúdos complementares da Zaia/001 Montando um agente de IA de atendimento na pratica com a Zaia

Aqui estão os princípios fundamentais da aula sobre construção de agentes de IA para atendimento:

**1. Oportunidade de Mercado para Agentes de IA:**
*   **Demanda Elevada:** Grandes corporações e PMEs estão "perdidas" em IA e precisam de soluções simples.
*   **Lacuna de API:** Muitas empresas, inclusive grandes, não possuem APIs para integração, criando uma oportunidade para soluções que gerenciem dados de outras formas.
*   **Valor Agregado:** Agentes de IA podem substituir ou complementar o atendimento humano, gerando economia e melhorando a experiência do cliente.
*   **Recorrência:** Foque em modelos de negócio com recorrência (ex: R$1.700/mês) para sustentabilidade e escalabilidade.
*   **Nicho:** Clínicas (dentistas, estética) são um nicho promissor para agendamento e qualificação de leads, com alto valor de ticket.

**2. Fundamentos da Plataforma Zaia (e Agentes de IA em Geral):**
*   **Zaia como Acelerador:** Facilita a criação, mas a produção em larga escala exige dedicação.
*   **Estrutura do Agente:**
    *   **Personalidade:** Define o comportamento geral do agente.
    *   **Instruções Gerais:** Aplicadas em *todas* as interações (ex: tom de voz, regras básicas).
    *   **Instruções Específicas (Estágios):** Ativadas por *condições* específicas na conversa (ex: início da conversa, usuário não informou nome, necessidade diagnosticada, solução apresentada, atendimento finalizado). Apenas uma instrução específica é ativa por vez.
    *   **Regra 80/20:** 80% do tempo de gerenciamento de um agente é gasto ajustando instruções gerais e específicas.
*   **Cérebro (Base de Conhecimento):**
    *   **Objetivo:** Evitar alucinações da IA, restringindo as respostas aos seus dados.
    *   **Técnica:** RAG (Retrieval Augmented Generation) – a Zaia utiliza essa técnica.
    *   **Fontes de Dados:**
        *   **Arquivos (TXT, PDF, etc.):** **Melhor opção** para controle, organização e precisão. Permite padronização (Contexto, Pergunta, Resposta).
        *   **Sites:** Útil para pré-venda/demonstração rápida, mas **não recomendado para produção** devido à "sujeira" (HTML, conteúdo irrelevante) que dificulta o controle e aumenta o risco de alucinação.
        *   **Outros:** Vídeos do YouTube, Perguntas e Respostas, API.
    *   **Organização:** Mantenha um padrão na organização dos arquivos (ex: `Cliente-Tema.txt`) para facilitar a gestão em escala.
*   **Variáveis (Coleta de Dados Dinâmicos):**
    *   **Função:** Coletar e armazenar informações específicas do usuário (nome, e-mail, necessidade, avaliação).
    *   **Configuração:** Defina tipo (string, number, boolean) e, crucialmente, a **descrição da variável**, que serve como instrução para a IA sobre como coletar e usar aquele dado (ex: "Pergunte o nome de forma educada e não responda antes de obtê-lo").
    *   **Exemplos:** Use exemplos na descrição para guiar a IA sobre o formato desejado (ex: "Avalie de 1 a 3").

**3. Gerenciamento e Otimização de Agentes:**
*   **Testes Massivos:** Teste o agente exaustivamente, simulando a forma como os usuários reais perguntam.
*   **Inspeção de Respostas:** Use a ferramenta de inspeção para entender a origem dos dados e o estágio da conversa, identificando alucinações ou respostas incorretas.
*   **Histórico de Conversas:** Monitore constantemente o histórico para identificar inconsistências e ajustar as instruções.
*   **Handoff Humano:**
    *   Configure condições claras para a transferência para um atendente humano (ex: usuário pede supervisor, sentimento negativo).
    *   Notifique o atendente via plataforma ou WhatsApp.
    *   O atendente pode "assumir" a conversa na plataforma.
*   **Manutenção Contínua:** Agentes de IA são como colaboradores; exigem treinamento, feedback e ajustes constantes. O negócio do cliente se atualiza, e a IA precisa ser treinada com novos dados.

**4. Integrações e Implantação:**
*   **Compartilhamento:** Use links para testes internos ou com clientes.
*   **Widget no Site:** Insira o agente como um widget no site do cliente via script HTML.
*   **WhatsApp (Produção):** **Use a API oficial da Meta (Cloud API)** via Make.com, MiniChat ou aplicativo customizado.
*   **WhatsApp (Pré-venda/Teste):** O QR code para WhatsApp Web é uma "gambiarra" e **não deve ser usado em produção** (viola políticas da Meta, risco de banimento, instabilidade).
*   **Make.com:** Para automações avançadas (ex: responder comentários/DMs do Instagram, Telegram, webhooks).
*   **MiniChat:** Para DMs (complementa Make.com, pois cada um pode ter endpoints diferentes).
*   **Webhooks:** Conecte o agente a sistemas externos (ex: Hotmart para recuperação de pagamentos).
*   **SheetAI:** Transforme Google Sheets em APIs para consultar dados dinâmicos (ex: imóveis, produtos) em tempo real.
*   **HTTP Request:** Dentro das instruções específicas, configure chamadas a APIs externas para buscar dados em tempo real (ex: notícias, cotações, detalhes de produtos).

**5. Estratégias de Venda e Posicionamento:**
*   **White-label (IT Labo):** Use o recurso de marca branca para apresentar a plataforma Zaia como sua própria ferramenta ao cliente, aumentando a percepção de valor e segurança.
*   **Valorize seu Trabalho:** Agentes de IA resolvem problemas complexos e economizam custos significativos para o cliente. Não subestime seu preço.
*   **Qualificação de Clientes:** Evite clientes que choram por preço; eles tendem a dar mais dor de cabeça e pagar menos. Busque quem valoriza a solução.
*   **Foco no Básico:** Muitas empresas precisam de soluções simples e eficazes. Não complique desnecessariamente.
*   **Crescimento Profissional:** A gestão de agentes de IA aprimora suas habilidades como líder/gestor, focando na clareza das instruções e feedback.

---

## 📘 03 Conteúdos complementares da Zaia/002 [ATUALIZAÇÃO] Imersão Nova Zaia o próximo nível dos agentes (V2)

Aqui estão os Primeiros Princípios da aula sobre Zaia V2:

**1. Problema Central da Zaia V1 (e Ferramentas Legadas):**
*   Agentes limitados em flexibilidade e capacidade.
*   Necessidade de integrar múltiplas ferramentas externas (N8N, Make, bancos de dados, planilhas) para agentes complexos.
*   Alto custo e complexidade de manutenção e gestão de agentes em escala.
*   Dificuldade em atualizar múltiplos agentes idênticos para diferentes clientes/franquias.

**2. Zaia V2: Nova Arquitetura e Visão "All-in-One":**
*   **Reconstrução Total:** Plataforma completamente nova, não um update.
*   **Objetivo:** Ser uma ferramenta "all-in-one" para construção e gestão de agentes de IA, eliminando a dependência de sistemas externos.
*   **Foco:** Flexibilidade, poder e escalabilidade para gestores de automação.

**3. Agent Builder (Construtor de Agentes) - O Coração da V2:**
*   **Workflows Nativos:** Crie lógicas complexas diretamente na Zaia.
*   **Tabelas Nativas:** Bancos de dados internos para armazenamento e consulta de dados.
*   **Squads de Agentes:** Múltiplos agentes trabalhando em conjunto de forma nativa.
*   **LLM Flexível e Custo Reduzido:**
    *   Use sua própria chave de API de LLMs (OpenAI, Google, etc.).
    *   Zaia cobra apenas pelo builder, não pelos créditos de LLM.
    *   Redução significativa de custos operacionais.
*   **Agentes Inteligentes (Fim dos "Estágios"):**
    *   Agentes tomam decisões baseadas em instruções e ferramentas disponíveis, não em fluxos rígidos.
    *   **Retentativas:** Agentes podem tentar novamente ações (ex: chamadas de API com erro) até o sucesso ou falha definitiva.
    *   **Temperatura:** Controle a criatividade/metodicidade das respostas.
    *   **Iterações:** Defina quantas vezes o agente pode "pensar", executar uma ferramenta e reavaliar.
    *   **Planejamento (Opcional):** Agente cria um checklist antes de agir, simplificando prompts.
    *   **Raciocínio (Opcional):** Agente reflete sobre suas ações, compara com instruções e se autocorrige.

**4. Ferramentas (Tools) para Agentes:**
*   **Diversidade:** Execução de código, follow-ups, chamadas de API, consulta/inserção em CRMs, interação com tabelas, buscas na web, criação de tickets de atendimento humano, execução de workflows nativos.
*   **Seleção Semântica:** Agentes escolhem a ferramenta certa com base na descrição da ferramenta e na instrução do prompt, sem necessidade de vinculação manual complexa.
*   **MCPs (Multi-Channel Providers / Integrações Pré-construídas):**
    *   Pacotes de ferramentas para serviços comuns (Gmail, Google Calendar, HubSpot).
    *   Conecte uma vez (ex: autorize o Gmail), e o agente pode usar a funcionalidade via prompt.

**5. Recursos Compartilhados:**
*   **Tabelas Nativas:** Bancos de dados para produtos, FAQs, etc., acessíveis por múltiplos agentes.
*   **Cérebros (Bases de Conhecimento):** Documentação e informações compartilhadas entre agentes. Atualizações em um cérebro refletem em todos os agentes que o utilizam.
*   **Workflows Nativos:** Construtor de automações similar ao N8N/Make, com triggers por webhook ou execução de agente.

**6. Verticalização e Escala (Próxima Etapa do Roadmap):**
*   **Publicação de Agentes:** Crie e venda cópias do seu agente.
*   **Variáveis Configuráveis:** Defina o que o cliente pode personalizar (preços, serviços, conexões).
*   **Formulário de Onboarding:** Clientes preenchem um formulário simples para configurar sua instância do agente.
*   **Gestão de Pagamentos:** Vincule o uso do agente ao pagamento do cliente; se não pagar, o agente pode parar de responder.
*   **Atualizações Centralizadas:** Atualize o agente "matriz" e todas as instâncias dos clientes recebem as atualizações automaticamente.
*   **Recorrência:** Facilita a cobrança e gestão de serviços recorrentes.

**7. Canais de Comunicação:**
*   **Multi-Canal:** Instagram, WhatsApp (API oficial), Web Widget, API, Teams, etc.
*   **Personalização por Canal:** Adapte o tom e estilo de resposta do agente para cada canal.
*   **Squads em Canais:** Conecte uma squad de agentes a um único canal; a squad direciona a conversa para o agente especialista adequado.

**8. Precificação e Acesso:**
*   **Plano Gratuito Generoso:**
    *   1000 execuções de agente.
    *   10.000 créditos Zaia.
    *   Execuções ilimitadas de Workflows.
    *   Possibilidade de conectar sua própria chave de API de LLM para reduzir custos.
    *   Criação ilimitada de agentes.
*   **Planos Pagos:** Oferecem execuções ilimitadas de agentes com sua própria chave de API.
*   **Acesso:** Atualmente via convite (sistema "Member Get Member").
*   **Migração V1 para V2:** V1 continuará ativa, mas sem grandes evoluções. Um assistente de migração será disponibilizado. V2 é a oportunidade para otimizar e aprimorar agentes existentes.

**9. Suporte e Auditoria:**
*   **Agente de Suporte Interno:** A própria Zaia usa uma squad de agentes para suporte.
*   **Comunidade:** Para bugs e sugestões de features.
*   **Auditoria Detalhada:** Histórico completo de conversas e execuções de ferramentas em um só lugar para fácil diagnóstico de problemas.
*   **Agente de Diagnóstico:** Um agente de IA que pode analisar a configuração do seu agente e explicar o porquê de certas respostas ou erros.

**Ações Recomendadas:**
*   Crie sua conta Zaia V2 (via link de convite).
*   Explore o Agent Builder, workflows e tabelas nativas.
*   Conecte sua chave de API de LLM para otimizar custos.
*   Considere a criação de squads de agentes para funcionalidades complexas.
*   Prepare-se para a verticalização e venda de agentes.

---

