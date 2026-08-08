# Criação de Assistentes com GPT Maker

Este playbook consolidado traz o conhecimento prático e os Primeiros Princípios extraídos das aulas do curso.

---

## 📘 01 Introdução/001 Como resgatar seus 30 dias grátis de GPT Maker (Plano Basic)

### Ativação de 30 Dias Grátis GPTMaker (Plano Basic)

1.  **Acesso Exclusivo:** Utilize o link oficial fornecido para registro: `https://app.gptmaker.ai/register?p=WMXVZA`. Não busque a ferramenta diretamente.
2.  **Criação de Conta:** Preencha seus dados pessoais e crie sua conta.
3.  **Seleção do Plano:** Após criar a conta, acesse "Upgrade to Pro" e selecione o plano "Basic".
4.  **Aplicação do Cupom:** Na tela de pagamento, insira o código promocional `LUCIANA100`. Isso zerará o valor dos primeiros 30 dias.
5.  **Dados de Pagamento:** Informe os dados de um cartão de crédito para concluir a inscrição. O valor devido hoje será R$0,00.
6.  **Cancelamento:** Para evitar cobranças após os 30 dias, solicite o cancelamento da assinatura diretamente pelo chat da GPT Maker antes do período de renovação.

---

## 📘 01 Introdução/002 Início

## Agentes de IA: Primeiros Princípios

*   **Definição:** Agentes de IA são ferramentas que automatizam e otimizam tarefas, simplificando operações.
*   **Benefícios Chave:**
    *   Agilizar tarefas diárias.
    *   Melhorar atendimento ao cliente.
    *   Aumentar vendas.
    *   Liberar tempo para foco em atividades estratégicas.
*   **Acessibilidade:** Qualquer pessoa pode criar agentes de IA úteis e eficientes, sem necessidade de programação.
*   **Ferramenta Recomendada:** GPT-Maker.
*   **Casos de Uso Exemplares (com GPT-Maker):**
    *   Atendente automático para sites.
    *   Vendedor digital 24 horas.
    *   Assistente para responder perguntas de clientes.
*   **Personalização:** Agentes podem ser configurados com a linguagem, estilo e objetivos específicos do seu negócio.
*   **Filosofia Central:** O valor da IA reside na resolução criativa e inteligente de problemas, não apenas no conhecimento tecnológico.

---

## 📘 01 Introdução/003 Metodologia e Objetivos

**Princípios Fundamentais para Construção de Agentes de IA:**

*   **Aprendizado Ativo:** Combine teoria e prática ("aprender fazendo") para construir agentes de IA eficazes.
*   **Foco em Negócios Reais:** Desenvolva agentes para cenários práticos (ex: cafeteria, salão de beleza, e-commerce), explorando diferentes canais e bases de conhecimento.
*   **Objetivo Claro:** A tecnologia de IA é uma ferramenta; defina objetivos claros para evitar ruídos e garantir valor.
*   **Desmistificação da IA:** Entenda o funcionamento dos agentes de IA, não como uma caixa preta, mas como uma ferramenta acessível, mesmo sem conhecimento técnico profundo.
*   **Aplicação Personalizada:** Identifique onde a IA pode resolver problemas reais *em sua própria realidade* (vendas, atendimento, organização, etc.), em vez de replicar soluções prontas.
*   **Início Seguro:** Conheça as ferramentas e os custos envolvidos para dar os primeiros passos com segurança e de forma sustentável.
*   **Progressão Gradual:** Comece com os primeiros cliques na ferramenta para familiarização e desenvolvimento passo a passo.

---

## 📘 01 Introdução/004 Definições e Organizações Estratégicas

Aqui estão os princípios fundamentais da aula sobre Agentes de IA:

*   **Definição de Agente de IA:**
    *   Sistema que recebe entrada (perguntas, mensagens).
    *   Processa via IA (LLMs + conhecimento adicional: documentos, sites, APIs, FAQs).
    *   Gera uma resposta.
    *   Fluxo: Usuário -> Pergunta -> Algoritmo (LLM + Conhecimento) -> Processamento -> Resposta.

*   **Pré-desenvolvimento:**
    *   **Defina o Problema:** Qual objetivo de negócio o agente resolverá? (Ex: vendas, suporte, agendamento).
    *   **Escolha da Plataforma:** Avalie facilidade de uso, integração, suporte e custo.

*   **Treinamento do Agente:**
    *   **Criação de Prompts:** Forneça exemplos de como o agente deve se comportar e responder.
    *   **Base de Conhecimento:** Treine com informações relevantes (sites, FAQs, documentos, APIs).
    *   **Integrações:** Conecte a outras plataformas via APIs.

*   **Melhores Práticas:**
    *   **Teste Exaustivamente:** A IA é imprevisível; teste rigorosamente a precisão das respostas.
    *   **Teste Externo:** Peça a outras pessoas para testar para identificar pontos cegos e falhas.
    *   **Comece Simples:** Inicie com funcionalidades básicas e adicione complexidade e conhecimento incrementalmente (abordagem em camadas).

---

## 📘 01 Introdução/005 Ferramentas e Custos

Aqui estão os princípios fundamentais da aula:

*   **Ferramentas de Criação de IA (Agentes/Chatbots):**
    *   **Diferenciação:** Grau de liberdade vs. Dificuldade. Mais liberdade = mais difícil.
    *   **Nível Básico:** GPT-Maker (foco do curso), Chatbase, User, Defile.
    *   **Nível Intermediário/Avançado:** Linkflow, Flowise, n8n, Botpress, Rasa, GPTs da OpenAI.

*   **Modelo de Custo do GPT-Maker:**
    *   **Base:** Por interação e por número de agentes.
    *   **Definição de Interação:** Soma da pergunta e da resposta.
    *   **Variação de Custo:** Modelos de IA mais avançados (ex: GPT-4) consomem mais créditos por interação.
        *   Ex: GPT-3.5 Turbo = 1 crédito/interação.
        *   Ex: GPT-4 = 5 créditos/interação.
    *   **Planos (Exemplos):**
        *   **Basic:** $17/mês, 2.500 créditos, 5 agentes.
        *   **Standard:** 10.000 créditos, 20 agentes.
        *   **Corporate:** 30.000 créditos, 50 agentes.
    *   **Drivers de Custo:** Quantidade de créditos de mensagem e número de assistentes/agentes que podem ser criados.

---

## 📘 02 Jornada Prática/001 Aula 1

**GPT Maker: Primeiros Passos e Estrutura Inicial**

*   **Objetivo:** Iniciar a jornada prática com o GPT Maker, focando na configuração inicial e compreensão da estrutura.
*   **Criação de Conta:**
    *   Acessar: `GPT Maker.AI`
    *   Selecionar: "Testes Grátis"
    *   Preencher: Dados pessoais
    *   Confirmar: "Criar Conta"
*   **Exploração da Plataforma (Próximos Passos):**
    *   **Funcionalidades:** Entender cada recurso e botão do GPT Maker.
    *   **Equipes:** Criar e configurar equipes, atribuindo funções e cargos específicos para cada uma.
    *   **Visão Geral:** Compreender a arquitetura completa da ferramenta antes de conceder acesso a usuários.
    *   **Atendimento:** Configurar a área de atendimento, designando responsáveis pela interação com clientes.

---

## 📘 02 Jornada Prática/002 Aula 2

### Gestão de Equipe e Papéis de Usuário

*   **Processo de Convite:**
    *   Acesse "Equipe" no menu lateral e clique em "Convidar Usuário".
    *   Selecione o papel desejado para o novo membro.
    *   Insira o e-mail da pessoa.
    *   O convidado deve acessar o e-mail, fazer o cadastro e, então, terá acesso à plataforma com as permissões do papel atribuído.

*   **Papéis e Permissões:**
    1.  **Gerente:**
        *   **Acesso:** Praticamente tudo.
        *   **Restrições:** Não pode gerenciar assinatura, comprar créditos ou trocar o plano.
        *   **Visibilidade:** Dashboards, Chat, Agentes, Equipe.
    2.  **Treinador:**
        *   **Foco:** Desenvolvimento e manutenção de agentes.
        *   **Acesso:** Dashboards, Chat, Agentes (criar, editar, manter).
        *   **Restrições:** Não gerencia equipe ou assinatura.
    3.  **Atendente:**
        *   **Foco:** Atendimento e acompanhamento de conversas em tempo real.
        *   **Acesso:** Dashboards, Chat de atendimento.
        *   **Restrições:** Não gerencia agentes, equipe ou assinatura.

*   **Melhor Prática:**
    *   Escolha o papel cuidadosamente, pois ele determina as ações que o membro pode realizar no workspace.

---

## 📘 02 Jornada Prática/003 Aula 3

Aqui estão os princípios fundamentais da plataforma GPT-Maker:

*   **Workspaces:**
    *   Organize projetos/empresas em espaços isolados.
    *   Cada workspace possui um plano e saldo de créditos independentes.

*   **Gestão de Créditos:**
    *   Créditos renovam mensalmente e não são cumulativos.
    *   Planeje o uso dentro do ciclo mensal.
    *   Monitore o saldo disponível.

*   **Navegação e Configurações Gerais:**
    *   **Busca:** Encontre agentes rapidamente pelo nome.
    *   **Notificações:** Receba alertas internos, novidades e respostas de chamados API.
    *   **Credenciais:** Acesse configurações básicas (idioma, tema, tutoriais, suporte) e configure integrações API.

*   **Dashboards (Painel de Desempenho):**
    *   **Métricas Chave:** Visualize atendimentos concluídos, engajamento e tempo médio de atendimento humano (se aplicável).
    *   **Consumo:** Gráficos de créditos por dia e gasto por modelo de IA (ex: GPT-3.5 vs. GPT-4).
    *   **Ranking:** Identifique os agentes mais utilizados e com melhor desempenho.
    *   **Filtros:** Analise dados por períodos (7, 14, 30 dias).

*   **Agentes (Criação e Gestão de IA):**
    *   Crie, edite, teste e configure fluxos de agentes de IA.
    *   É o hub central para o desenvolvimento de IA.

*   **Chat (Monitoramento de Conversas):**
    *   Acompanhe em tempo real as interações entre agentes e usuários.
    *   Revise atendimentos para melhorar respostas e identificar dúvidas frequentes.

*   **Equipe (Colaboração e Permissões):**
    *   Adicione outros usuários ao workspace.
    *   Defina permissões, cargos e funcionalidades específicas para cada membro.

*   **Faturamento:**
    *   Acesse informações do plano, histórico de pagamentos e adicione créditos extras.

*   **Configurações (Perfil e Segurança):**
    *   Gerencie informações de perfil, detalhes do workspace, senha e segurança.

---

## 📘 02 Jornada Prática/004 Aula 4

Aqui estão os Primeiros Princípios da aula:

*   **Sistema de Atendimento Híbrido:** O sistema permite atendimento automatizado por um "agente" e atendimento manual por um operador humano.
*   **Interface de Chat Centralizada:** Todas as mensagens (agente e usuário) são exibidas em um único painel.
*   **Controle de Conversa:**
    *   **Limpar Mensagens:** Remove o histórico visual.
    *   **Bloquear Contato:** Impede futuras interações.
    *   **Apagar Conversa:** Exclui o histórico da conversa.
*   **Funcionalidades de Mensagem:**
    *   Envio de emojis.
    *   Anexo de documentos (tipos suportados serão listados).
    *   Envio de áudios.
*   **Transição de Atendimento (Agente ↔ Manual):**
    *   **"Assumir Atendimento":** Desativa o agente e transfere o controle para o operador humano (atendimento manual).
    *   **"Voltar para o Agente":** Reativa o agente, retornando o atendimento automatizado.
*   **Identificação do Atendente Manual:**
    *   Exibe nome, foto e assinatura do atendente.
    *   A assinatura pode ser removida para uma exibição mais limpa.
*   **Assinatura do Atendente:** Campo para identificar quem está prestando o atendimento.
*   **Filtros de Atendimento:**
    *   Filtragem de mensagens.
    *   Seleção e filtragem por agente (útil para múltiplos agentes).

---

## 📘 03 Agente XP I/001 Agente XP I

Aqui estão os princípios fundamentais da aula:

*   **Definição de Propósito do Agente:** Cada agente de IA deve ter um objetivo claro e específico (ex: suporte ao cliente, FAQ).
*   **Treinamento Contextual:** Alimente o agente com informações relevantes e precisas da empresa (ex: "Quem Somos", FAQs do site).
*   **Síntese de Informação:** Resuma descrições longas da empresa para se adequar aos limites de caracteres, mantendo a essência (use ferramentas como LLMs para isso).
*   **Atribuição de Função:** Defina uma função clara para o agente (ex: "Suporte") para guiar seu comportamento.
*   **Escalonamento Humano:** Configure o agente para oferecer e facilitar a transferência para um atendente humano quando solicitado ou necessário.
*   **Controle de Escopo:** Restrinja os tópicos de conversação do agente para evitar desvios e garantir foco nos assuntos da empresa.
*   **Otimização da Experiência do Usuário (UX):**
    *   Divida respostas longas em partes para melhorar a legibilidade.
    *   Utilize elementos como emojis para ajustar o tom da conversa e torná-la mais amigável.
*   **Estratégia de Implantação:** Planeje a integração do agente em plataformas existentes (ex: WordPress).
*   **Treinamento Iterativo:** O setup inicial é um pré-treinamento; um aprofundamento contínuo é essencial para aprimorar a performance do agente.

---

## 📘 03 Agente XP I/002 Agente XP I

Aqui estão os princípios fundamentais da aula sobre escolha de modelo, comunicação e engenharia de prompts:

### 1. Escolha do Modelo de IA

*   **Definição:** Modelos de IA são redes neurais artificiais que aprendem padrões em grandes conjuntos de dados (texto, linguagem).
*   **Variações:**
    *   **Complexidade/Velocidade:** Modelos mais simples/rápidos para tarefas básicas; modelos mais complexos para raciocínio avançado (tradução, resumo, geração de conteúdo).
    *   **Parâmetros:** Mais parâmetros = maior capacidade de entender detalhes, mas exige mais poder computacional e energia.
*   **Princípio de Escolha:** Selecione o modelo com base na complexidade e requisitos da tarefa (ex: modelo pequeno para chat simples, robusto para conversas humanas). A escolha é uma ferramenta para resolver um problema específico.

### 2. Definição da Comunicação do Agente

*   **Níveis de Formalidade:** Escolha como o agente interage com o cliente final:
    *   **Formal:** Para contextos que exigem seriedade.
    *   **Normal:** Equilibrado, para a maioria dos casos.
    *   **Descontraída:** Para ambientes informais.
*   **Princípio de Escolha:** Alinhe o tom de comunicação ao contexto do negócio e ao público-alvo.

### 3. Engenharia de Prompts (Comportamento do Agente)

*   **O que é um Prompt:** Uma instrução direta que define o comportamento do agente de IA.
*   **Natureza:** A construção de prompts é uma arte e ciência ("Prompt Engineering"), um processo iterativo de ajustes e testes contínuos.
*   **Ferramentas de Apoio:** Utilize ferramentas específicas (ex: GPTs como "Prompt Engineer" ou "Enlarge Your Prompts") para auxiliar na criação e otimização.
*   **Boas Práticas de Prompting:**
    *   **Seja Explícito:** Quanto mais detalhado e claro, menor a chance de erros ou comportamentos indesejados.
    *   **Defina o Tom e Persona:**
        *   Especifique o tom desejado (ex: "responda de forma descontraída com emojis", "use tom formal e técnico").
        *   Atribua uma persona (ex: "fale como um professor explicando").
    *   **Evite Ambiguidade:** Use linguagem precisa e evite frases genéricas para prevenir "alucinações" (respostas inventadas ou incorretas).
    *   **Defina Limites de Escopo:**
        *   Instrua o agente a recusar perguntas fora do tema e a explicar o motivo.
        *   Use delimitadores (ex: colchetes) para indicar o escopo específico (ex: "Só responda perguntas sobre [termo específico]").
    *   **Force Concisão:**
        *   Peça explicitamente por respostas curtas (ex: "Responda em até três frases", "dê uma resposta breve e objetiva").
        *   Combine limites de frases com clareza e direcionalidade (ex: "Resuma a ideia principal em no máximo duas frases claras e diretas").
    *   **Use Formatos Estruturados:** Peça formatos específicos (ex: lista numerada) para forçar concisão e organização das informações.
*   **Iteração Constante:** O prompt é a parte do agente que mais sofrerá alterações. Teste e ajuste repetidamente para otimizar o desempenho.

---

## 📘 03 Agente XP I/003 Agente XP I

Aqui estão os princípios fundamentais da aula:

**1. Treinamento do Agente (Base de Conhecimento)**

*   **Fontes de Treinamento:** Utilize texto, sites, vídeos ou documentos.
*   **Estratégias para Websites:**
    *   **URL Direta (ex: `dominio.com.br`):** O agente absorve *todo* o conteúdo textual do site.
    *   **Sitemap (ex: `dominio.com.br/sitemap.xml`):** Fornece a estrutura de páginas. Permite selecionar links específicos para treinamento, controlando o conhecimento do agente (conhecimento fracionado).
*   **Atualização Contínua:** Configure intervalos de atualização para sites com conteúdo dinâmico.
*   **Navegação em Subpáginas:** Opção para incluir todas as subpáginas no treinamento, similar à URL direta, mas com menos controle granular que o sitemap seletivo.

**2. Configurações de Conversa do Agente**

*   **Intervalo de Resposta Inicial:**
    *   **Propósito:** Defina um atraso (ex: 5 segundos) antes da primeira resposta.
    *   **Benefício:** Permite que o cliente termine de digitar perguntas fracionadas, consolidando o contexto para uma resposta única e coesa. Evita respostas múltiplas para uma única intenção fragmentada.
*   **Ações de Inatividade:**
    *   **Finalizar Atendimento:** Configure um tempo (ex: 5 minutos) para encerrar a conversa se o cliente não responder.
    *   **Interagir Proativamente:** Configure um tempo (ex: 2 minutos) para o agente interagir com o cliente inativo (ex: "Posso ajudar com algo mais?").

**3. Teste e Validação do Agente**

*   **Prioridade:** Treine o agente *primeiro* com informações oficiais e verificadas do negócio.
*   **Validação Inicial:** Após o treinamento, faça perguntas *diretamente relacionadas* ao negócio para validar a precisão do conhecimento.
*   **Mitigação de Alucinações:** Somente após validar o conhecimento oficial, teste com perguntas *não relacionadas* ao negócio para identificar e corrigir possíveis alucinações.
*   **Exemplos de Teste:** Perguntas sobre produtos, serviços, localização, promoções, horários de funcionamento, opções específicas do cardápio.

**4. Próximos Passos (Integração)**

*   Integre o agente como um chat de atendimento diretamente no site.

---

## 📘 03 Agente XP I/004 Agente XP I

Aqui estão os princípios fundamentais para a implantação e depuração de um agente de IA:

*   **Implantação em Produção:** Após treinamento e validação do agente, o próximo passo é a integração e colocação em produção.
*   **Canais de Integração:** Para integrar o agente a um site, utilize a funcionalidade "Canais" e selecione "WebChat".
*   **Códigos de Embed:** A plataforma fornecerá dois códigos de embed:
    *   Um para exibição do chat em tela cheia.
    *   Um para um balão de chat flutuante (geralmente no canto inferior direito).
    *   **Melhor Prática:** Para uma integração discreta, utilize o código do balão de chat.
*   **Inserção do Código:** Copie o código de embed do balão de chat e cole-o na seção `<head>` (cabeçalho) do seu site (ex: em um tema WordPress).
*   **Verificação e Teste:** Após a inserção do código, atualize a página do site para confirmar a aparição do chat. Realize testes de interação com perguntas variadas (texto e áudio) para validar o funcionamento.
*   **Rastreamento de Fonte (Depuração):**
    *   Utilize a funcionalidade de rastreamento de fonte (geralmente um ícone "i" ao lado da resposta do agente na plataforma de gerenciamento) para identificar de onde o agente extraiu cada informação.
    *   **Propósito:** Este recurso é essencial para depurar respostas incorretas, identificar lacunas na base de conhecimento e refinar o conteúdo de treinamento.
    *   **Ação:** Se uma informação não for encontrada, isso indica que ela não está presente na base de dados treinada.

---

## 📘 03 Agente XP I/005 Agente XP I

Aqui estão os princípios fundamentais da aula:

*   **Configuração de WebChat (Plataforma "ChatGround" ou similar):**
    *   **Personalização Visual:**
        *   **Avatar:** Upload de imagem (para branding) ou geração.
        *   **Layout/Cores:** Ajuste de cores do cabeçalho, fundo e outros elementos via "Canais > Configurações".
    *   **Mensagens:**
        *   **Mensagem Inicial:** Edição do texto de boas-vindas.
        *   **Mensagens Sugeridas:** Criação de opções de clique rápido para o usuário (ex: "Quanto custa?").
    *   **Controle de Acesso:**
        *   **Público:** Acesso irrestrito para qualquer visitante do site.
        *   **Privado:** Acesso restrito a usuários específicos.
    *   **Informações Básicas:**
        *   **Finalidade:** Definir o propósito do chat (ex: "Suporte").
        *   **Dados da Empresa:** Nome e descrição da empresa.
    *   **Comportamento:**
        *   **Modo de Comunicação:** Configuração do estilo de interação (ex: "normal").
        *   **Tempo de Resposta:** Ajuste do tempo de resposta do chat.
        *   **Ações de Inatividade:** Definição de ações para períodos sem interação.
*   **Treinamento do Chatbot:**
    *   **Fonte de Dados:** Utilização de conteúdo de um website oficial para treinamento.
*   **Escopo Futuro (Módulos 2 e 3):**
    *   Intenções.
    *   Integrações (sistema-a-sistema).
    *   Webhooks (WebRux).
    *   Regras de Transferência.

---

## 📘 04 Agente XP II/001 Agente XP II

**Criação de Agente de Agendamento para Salão de Beleza**

*   **Objetivo:** Desenvolver um agente robusto e inteligente para agendamento de horários em salão de beleza.
*   **Integrações Essenciais:**
    *   Google Agenda (para gerenciamento de horários).
    *   Eleven Labs (provável integração de voz/áudio, a ser detalhada).
    *   Webhook (para métricas de atendimento: nome, telefone, horário).
    *   Instagram (para integração da plataforma).
*   **Configurações Iniciais do Agente (`bela-supra`):**
    *   **Nome do Agente:** `bela-supra`.
    *   **Objetivo:** Vendas (Divendas).
    *   **Nome da Empresa:** Beleza Suprema.
    *   **Descrição da Empresa:** Utilizar descrição pré-definida.
*   **Configurações de Comportamento:**
    *   **Solicitar Ajuda Humana:** Habilitar opção para direcionar usuários a um atendente humano.
    *   **Emojis na Resposta:** Utilizar emojis para tornar a comunicação mais natural.
    *   **Restringir Temas Proibidos:** Limitar conversas aos tópicos da empresa/negócio.
    *   **Dividir Respostas:** Fragmentar respostas longas para evitar tom robótico.
*   **Próximos Passos (Desenvolvimento Futuro):**
    *   Treinamento do modelo.
    *   Seleção do modelo de IA.
    *   Criação de Webhook.
    *   Definição de regras de transferência.
    *   Implementação de ação de inatividade.

---

## 📘 04 Agente XP II/002 Agente XP II

Aqui estão os princípios fundamentais da aula:

*   **Configuração do Agente IA:**
    *   **Modelo Base:** Selecionar o modelo de IA (ex: GPT4.1 mini).
    *   **Estilo de Comunicação:** Definir o tom do agente (ex: descontraído).
    *   **Comportamento Inicial:** Configurar um prompt de comportamento pré-definido.
    *   **Treinamento:** Inserir dados para treinar o agente.

*   **Regras de Transferência:**
    *   **Destino:** Definir para quem o atendimento será transferido (humano ou outro agente).
    *   **Atribuição:** Selecionar o membro da equipe responsável pela transferência.
    *   **Retorno ao Agente:** Habilitar o retorno automático do atendimento ao agente após a finalização pelo humano.
    *   **Condição de Disparo:** Estabelecer a instrução que aciona a transferência (ex: "Passar para o atendente caso solicitado").

*   **Ações de Inatividade:**
    *   **Mensagem de Inatividade:** Configurar o envio de uma mensagem automática após um período de inatividade (ex: 10 minutos).
    *   **Finalização de Atendimento:** Definir o encerramento automático do atendimento após um período prolongado de inatividade (ex: 30 minutos).

*   **Webhooks (Integrações):**
    *   **Eventos de Disparo:** Configurar webhooks para enviar dados em eventos específicos:
        *   Recebimento de mensagem.
        *   Agente não souber responder.
        *   Transferência de atendimento.
        *   Finalização de atendimento.
    *   **Fluxo de Dados:** Enviar informações do agente (GPT-Maker) para aplicativos integradores (ex: Maker, N8N).
    *   **Caso de Uso:** Registrar dados do atendimento (nome, telefone, necessidade de atendente humano) em uma planilha para métricas e auditoria.
    *   **Configuração:** Definir o endpoint (URL) do webhook para a integração.

---

## 📘 04 Agente XP II/003 Agente XP II

Aqui estão os princípios fundamentais da aula:

**1. Aprimoramento do Conhecimento do Agente:**
*   **Adição de Documentos:** Carregue tabelas de preços e outros dados relevantes para enriquecer a base de conhecimento do agente, permitindo respostas mais precisas.

**2. Integração ElevenLabs (Voz Humanizada):**
*   **Propósito:** Gerar respostas em áudio com voz clonada ou pré-definida para humanizar a interação.
*   **Configuração:**
    *   Obtenha uma API Key do ElevenLabs.
    *   Ative a integração no GPT-Maker e insira a API Key.
*   **Regras de Negócio:**
    *   Defina quando o agente deve responder em áudio (ex: apenas quando o cliente envia áudio, ou sempre).
    *   Escolha um modelo de voz (pré-definido ou voz clonada).
    *   Ajuste parâmetros de estabilidade e similaridade da voz (padrão geralmente funciona bem).

**3. Integração Google Calendar (Agendamento):**
*   **Propósito:** Gerenciar agendamentos, verificar disponibilidade e criar eventos.
*   **Configuração:**
    *   Ative a integração no GPT-Maker e conecte a conta Google.
    *   Selecione ou crie uma agenda específica (ex: "Agenda Beleza Suprens").
*   **Regras de Negócio Essenciais:**
    *   **Horário de Funcionamento:** Defina os dias e horários de atendimento (ex: Seg-Sex 9h-19h, Sáb 9h-17h, Dom Fechado).
    *   **Antecedência Mínima:** Permita ou restrinja agendamentos de última hora (ex: sem limite para flexibilidade).
    *   **Janela de Visibilidade:** Determine por quanto tempo o agente pode ver e oferecer horários disponíveis (ex: 2 semanas).
    *   **Duração Padrão:** Defina a duração máxima de um agendamento (ex: 1 hora).
    *   **Agendamentos Simultâneos:** Permita ou proíba múltiplos agendamentos no mesmo horário (ex: proibir se houver apenas um profissional).
    *   **Consulta de Horários:** Mantenha a opção de consulta de horários disponíveis habilitada para o agente.
    *   **Restrição de Horários:** Escolha entre horários flexíveis (ex: 9h15, 9h30) ou apenas horários cheios (ex: 9h, 10h).
    *   **Distribuição Inteligente (Múltiplas Agendas):** Se houver mais de uma agenda (ex: cabelo e unha), use a distribuição inteligente para o agente selecionar a mais apropriada com base na conversa.
*   **Campos Obrigatórios para Agendamento:**
    *   **Sempre solicitar:** Nome do usuário.
    *   **Opcionais/Variáveis:** Assunto, Duração do agendamento, E-mail do cliente.
    *   **Confirmação:** Sempre enviar um resumo do agendamento.

---

## 📘 04 Agente XP II/004 Agente XP II

Aqui estão os princípios fundamentais da aula:

**1. Integração com Instagram:**
*   **Pré-requisito:** Conta do Instagram configurada como "Conta Empresarial".
*   **Processo:** Acessar "Canais" > "Instagram" > "Conectar Grátis" no GPT Maker, autenticar com as credenciais da conta empresarial.

**2. Capacidades do Chatbot (GPT Maker):**
*   **Interação Conversacional:** Gerencia diálogos complexos para agendamento de serviços, consulta de preços, disponibilidade e informações gerais.
*   **Coleta de Dados:** Solicita e registra informações do cliente (nome, telefone, e-mail) durante a conversa.
*   **Agendamento:** Permite agendar múltiplos serviços e horários, validando a disponibilidade e sugerindo alternativas.
*   **Flexibilidade:** Adapta-se a diferentes solicitações e cenários de agendamento (ex: serviços distintos em dias diferentes).

**3. Integração com Webhook para Automação (GPT Maker + Make.com + OpenAI + Planilha):**
*   **Gatilho do Webhook:** "Finalização de Atendimento" no GPT Maker.
    *   **Configuração:** Definir um tempo limite de inatividade (ex: 2 minutos) para considerar o atendimento finalizado e disparar o webhook.
*   **Fluxo no Make.com:**
    1.  **Webhook (GPT Maker):** Recebe os dados brutos da conversa finalizada.
    2.  **Chamada API (GPT Maker):** Solicita um resumo completo da conversa ao próprio GPT Maker (enriquecimento de dados).
    3.  **Chamada API (OpenAI):**
        *   **Entrada:** Utiliza o resumo da conversa obtido do GPT Maker.
        *   **Prompt:** Instrução para extrair informações específicas (ex: nome, telefone, serviço agendado, necessidade de atendente humano).
        *   **Estrutura de Saída:** Define os parâmetros e tipos de dados a serem extraídos (ex: `nome` como texto, `telefone` como texto, `serviço` como texto).
        *   **Modelo:** Pode usar um modelo OpenAI mais simples para otimizar custos e desempenho na extração.
    4.  **Integração (Planilha/Google Sheets):** Armazena os dados estruturados extraídos para análise, gestão ou follow-up.
*   **Objetivo:** Automatizar a extração e organização de informações cruciais das conversas para uso posterior (ex: CRM, marketing, relatórios).

---

## 📘 04 Agente XP II/005 Agente XP II

Aqui estão os princípios fundamentais da aula:

*   **Definição do Agente:**
    *   Nomeie o agente.
    *   Defina seu estilo de comunicação e comportamento.
    *   Estabeleça uma finalidade clara (ex: vendas, agendamento).
    *   Forneça contexto detalhado sobre o produto/serviço e a empresa.
*   **Base de Conhecimento:**
    *   Treine o agente com dados estruturados (ex: tabelas de preços).
    *   Treine o agente com dados não estruturados (ex: documentos de texto gerais).
*   **Integrações Essenciais:**
    *   Conecte o agente a ferramentas externas para funcionalidades específicas (ex: Google Agenda para agendamento, Elevand Labs para outras integrações).
    *   Integre-o aos canais de comunicação desejados (ex: Instagram).
*   **Fluxo de Trabalho Pós-Atendimento:**
    *   Configure um mecanismo (ex: webhook router) para processar dados após a finalização de um atendimento.
    *   Direcione os dados para um sistema de coleta (ex: planilha) para análise.
*   **Monitoramento de Performance:**
    *   Utilize os dados coletados para criar métricas e gráficos.
    *   Acompanhe o desempenho do agente para otimização contínua.
*   **Seleção do Modelo:**
    *   Escolha um modelo de linguagem apropriado para a tarefa (ex: GPT-4o mini).
*   **Arquitetura Multi-Agente (Próximo Passo):**
    *   Planeje a criação de múltiplos agentes trabalhando em sincronia para tarefas mais complexas.

---

## 📘 05 Agente XP III/001 Agente XP III

*   **Agente XP3:** Desenvolvimento de um sistema de agentes robusto e alinhado às práticas de mercado.
*   **Contexto de Negócio:** Loja de departamentos "Multilar".
*   **Arquitetura de Agentes (Multilar):**
    *   **Atendente:** Interação direta com o cliente.
    *   **Divendas:** Gestão e estratégia de vendas.
    *   **Suporte à Vendas:** Apoio operacional e informativo.
*   **Integrações Essenciais:**
    *   **Banco de Dados:** Acesso a informações de estoque e vendas em tempo real.
    *   **WhatsApp:** Canal de comunicação externo.
*   **Capacidades Fundamentais do Sistema:**
    *   **Comunicação Inter-Agentes:** Agentes devem interagir entre si para resolver tarefas complexas.
    *   **Consulta de Dados em Tempo Real:** Agentes acessam e utilizam dados atualizados de estoque e vendas.
    *   **Gestão de Informações Dinâmicas:** Capacidade de lidar com dados que mudam constantemente (estoque, vendas).
*   **Processo de Desenvolvimento (Etapas):**
    *   **Configuração Básica:** Definir nome, descrição e comportamento de cada agente.
    *   **Integração de Banco de Dados:** Conectar agentes à fonte de dados.
    *   **Integração de Canal:** Conectar o sistema ao WhatsApp.
*   **Princípio de Configuração:** Cada ajuste na configuração impacta diretamente o desempenho e o resultado final do agente.

---

## 📘 05 Agente XP III/002 Agente XP III

Aqui estão os princípios fundamentais da configuração de agentes de IA:

**1. Estrutura de Agentes Hierárquica:**
*   **Agente Inicial (Milu - Atendente):** Atua como roteador primário.
    *   **Função:** Suporte geral.
    *   **Modelo:** GPT-4 Medium (geral).
    *   **Conhecimento:** Documentos gerais.
    *   **Regras de Transferência:**
        *   Para Humano: Solicitação de atendimento humano.
        *   Para Suporte (Lar): Dúvidas sobre status de pedido/produto.
        *   Para Vendas (Tito): Interesse em comprar produtos.

**2. Agentes Especializados:**
*   **Agente de Suporte (Lar):**
    *   **Função:** Suporte técnico e informações pós-venda.
    *   **Modelo:** GPT-4o (otimizado para consulta a banco de dados).
    *   **Conhecimento:** Informações gerais, base de conhecimento, entrega, políticas e procedimentos.
    *   **Regras de Transferência:** Para Humano (solicitação explícita).
*   **Agente de Vendas (Tito):**
    *   **Função:** Vendas e informações de produto.
    *   **Modelo:** GPT-4o (otimizado para consulta a banco de dados).
    *   **Comunicação:** Descontraída.
    *   **Conhecimento:** Cadastro, preços, produtos.
    *   **Regras de Transferência:** Para Humano (solicitação explícita).

**3. Configurações Comuns e Melhores Práticas:**
*   **Nome e Função:** Definir claramente o papel de cada agente.
*   **Marca e Descrição:** Contextualizar o agente para a empresa.
*   **Configurações Iniciais:**
    *   **Solicitar Ajuda Humana:** Habilitar para escalonamento.
    *   **Emojis/Restrições/Divisão de Respostas:** Ajustar para a experiência do usuário.
    *   **Tempo de Resposta:** Padrão de 5 segundos para agilidade.
    *   **Limite de Interações:** Opção para controle de custos (deixado sem limite para flexibilidade).
*   **Ações de Inatividade:**
    *   **Interação:** Mensagem após X minutos (ex: "Ainda está aí?", "Posso te ajudar com mais alguma coisa?").
    *   **Finalização:** Encerrar atendimento após Y minutos de inatividade (ex: 5, 15, 30 minutos).
*   **Webhooks para Feedback:**
    *   **Propósito:** Registrar interações não respondidas em uma planilha (via Make.com) para identificar lacunas de conhecimento e aprimorar os agentes.
    *   **Aplicação:** Configurado para todos os agentes.
*   **Comportamento (Prompt):** Utilizar prompts predefinidos para guiar a personalidade e o estilo de resposta do agente.
*   **Documentação:** Carregar documentos específicos e relevantes para a função de cada agente.
*   **Regras de Transferência:** Essenciais para direcionar o cliente ao agente ou humano mais adequado com base na intenção.

**Próximo Passo:** Configuração de "Intenções" para refinar o reconhecimento e roteamento das solicitações dos clientes.

---

## 📘 05 Agente XP III/003 Agente XP III

Aqui estão os princípios fundamentais da aula:

*   **Objetivo:** Criar agentes de IA (chatbots) para consultar dados em um banco de dados externo.
*   **Agentes e Funções:**
    *   **Suporte:** Consulta tabela `transações` usando CPF para dados de compra.
    *   **Vendas:** Consulta tabela de produtos para encontrar produto, marca, estoque e preço.
*   **Configuração de Intenção (Exemplo: Agente de Vendas - Buscar Produto):**
    1.  **Abrir Agente:** Selecionar o agente desejado (ex: "Tito, o vendedor").
    2.  **Cadastrar Intenção:** Criar uma nova intenção.
    3.  **Descrever Intenção (Item 1):** Definir o objetivo do usuário (ex: "Procurar pelo nome do produto").
    4.  **Coletar Informações (Item 2 - Campos):**
        *   **Adicionar Campo:** Definir o dado necessário (ex: `produto`).
        *   **Descrição:** Explicar a finalidade (ex: "utilizado para reconhecer ou encontrar o produto").
        *   **Tipo:** Especificar o tipo de dado (ex: `texto`).
    5.  **Configurar Conexão API:**
        *   **Método:** `GET` (para consulta de dados).
        *   **Endpoint:** URL da API para consulta ao banco de dados.
        *   **Chave de Autorização:** Credencial de acesso à API.
        *   **Parâmetros:** Habilitar "gerar automaticamente" para que o agente capture o valor do campo (ex: nome do produto) da conversa e o adicione ao endpoint da API.
        *   **Body:** Não aplicável para requisições `GET`.
    6.  **Salvar Intenção.**
*   **Teste da Intenção:**
    *   Inserir um valor de teste para o campo (ex: nome do produto).
    *   Executar o teste para verificar a comunicação e o retorno dos dados da API.
*   **Próximos Passos:** Integração com plataformas de comunicação (ex: WhatsApp) para testes em ambiente real.

---

## 📘 05 Agente XP III/004 Agente XP III

Aqui estão os princípios da aula:

*   **Princípio de Atribuição de Canal:** Integre o canal de comunicação inicial (ex: WhatsApp) ao agente responsável pelo primeiro contato e triagem de dúvidas comuns.
    *   *Exemplo:* Agente "Milúrguer" para atendimento geral.
*   **Processo de Integração WhatsApp Web:**
    1.  Acesse o agente.
    2.  Navegue para "Canais".
    3.  Clique em "Novo Canal".
    4.  Selecione "WhatsApp Web".
    5.  Conclua a conexão escaneando o QR Code.
*   **Configurações Padrão de Comportamento do Agente (WhatsApp):**
    *   **Feedback Visual:** Simular digitação (melhora a experiência do usuário).
    *   **Leitura de Mensagens:** Padrão (processar todas as mensagens).
    *   **Interação por Áudio:** Apenas responder a mensagem (não iniciar áudio).
    *   **Participação na Conversa:** Todo momento (agente sempre ativo).
    *   **Saída da Conversa:** Nunca (agente não abandona a conversa proativamente).
    *   **Grupos:** Ignorar (evitar interações indesejadas).
    *   **Ligações:** Rejeitar e enviar mensagem padrão (agente não é atendente de voz).
    *   **Assunção de Atendimento (Mobile):** Não permitir que o agente assuma o atendimento se o cliente estiver usando o celular (regra específica da plataforma).
*   **Melhor Prática:** Mantenha as configurações padrão, a menos que haja uma necessidade específica de alteração.

---

## 📘 05 Agente XP III/005 Agente XP III

Aqui estão os princípios fundamentais da aula:

*   **Arquitetura Multi-Agente:** Implementação de um sistema de IA com múltiplos agentes especializados para diferentes funções de atendimento.
*   **Agente Orquestrador (Milu):**
    *   **Função:** Atendimento inicial e geral, roteamento de conversas.
    *   **Modelo:** `4.1min` (sugere um modelo mais leve/rápido para triagem).
    *   **Capacidades:** Responde a perguntas gerais (localização, horário) e identifica a intenção do usuário para transferir.
*   **Agente de Suporte (Lar):**
    *   **Função:** Suporte pós-venda.
    *   **Modelo:** `4O` (sugere um modelo mais robusto para tarefas específicas).
    *   **Capacidades:** Consulta status de compras via CPF, acessando dados de um "banco" (base de dados).
*   **Agente de Vendas (Tito):**
    *   **Função:** Vendas de produtos.
    *   **Modelo:** `4O` (sugere um modelo mais robusto para tarefas específicas).
    *   **Capacidades:** Consulta e recomenda produtos (smartphones, tablets), informa marcas e preços, acessando dados de um "banco".
*   **Fluxo de Interação:**
    1.  Usuário inicia conversa com Milu.
    2.  Milu identifica a intenção (ex: "comprar" ou "consultar pedido").
    3.  Milu transfere a conversa para o agente especializado (Tito para compras, Lar para suporte).
*   **Integração de Dados:** Agentes especializados (Lar, Tito) são capazes de consultar e apresentar informações dinâmicas de um "banco" (ex: status de pedido, catálogo de produtos).
*   **Limitação Observada:** O sistema atual não possui uma "rota de retorno" entre agentes, exigindo o reinício da conversa para mudar de tópico após uma transferência.
*   **Melhor Prática:** Especialização de agentes melhora a precisão e eficiência em tarefas complexas, enquanto um agente orquestrador centraliza o ponto de entrada e direciona o fluxo.

---

## 📘 06 Troubleshooting e Considerações Finais/001 Depurações e Erros Comuns

Aqui estão os princípios fundamentais da aula:

*   **Modo de Depuração do Agente:**
    *   Ativação: Clique na "bolinha verde" e depois em "treinamento".
    *   Funcionalidade: Permite ajustar respostas do agente em tempo real no chat.
    *   Ações:
        *   **Aprovar:** Aceita a resposta atual.
        *   **Treinar:** Salva a alteração e a usa para futuros treinamentos.
        *   **Remover:** Exclui a mensagem.
        *   **Reprocessar:** Gera uma nova resposta após ajustes.
    *   Benefício: Permite refinar cada resposta para melhorar a qualidade e o tom.

*   **Erros Comuns e Soluções:**
    *   **Bot não responde:**
        *   Causa: Integração mal configurada (canal inativo ou desvinculado).
        *   Solução: Verificar e ativar o canal de integração.
    *   **Bot responde com texto genérico:**
        *   Causa: Prompt mal definido ou incompleto.
        *   Solução: Revisar e refinar as instruções do prompt.
    *   **Bot não entende perguntas básicas:**
        *   Causa: Falta de treinamento ou dados insuficientes.
        *   Solução: Adicionar mais treinamento e dados relevantes.
    *   **Bot demora muito para responder:**
        *   Causa: Modelo pesado ou problema na conexão/chamada de API.
        *   Solução: Otimizar o modelo ou verificar a performance da API.
    *   **Bot mantém a mesma pose/inatividade:**
        *   Causa: Falta de regras de inatividade.
        *   Solução: Implementar regras claras para gerenciar a inatividade.
    *   **Bot não transfere corretamente:**
        *   Causa: Regras de transição ausentes ou mal escritas.
        *   Solução: Detalhar as regras de transferência para humano ou outro agente.
    *   **Tom da resposta frio/robótico:**
        *   Causa: Modelo inadequado ou prompt tangencial.
        *   Solução: Testar outros modelos (ex: GPT-4.0, outros fornecedores) e ajustar o prompt para guiar o tom.

---

## 📘 06 Troubleshooting e Considerações Finais/002 Troubleshooting e Considerações Finais

**Acesso e Documentação da API GPT-MICER:**
*   **Chave de API:** Acessar via canto superior direito > "Chave de API".
*   **Documentação:** Acessar via canto superior direito > "Chave de API" > "Referência de API" para listar chamadas disponíveis.

**Conformidade com LGPD e Privacidade de Dados:**
*   **Regra Fundamental:** Sempre consultar e validar a política de privacidade da empresa.
*   **Dados Sensíveis:** Bots não podem armazenar ou processar dados sensíveis (ex: CPF).
*   **Transparência:** Informar claramente o motivo da solicitação de informações ao usuário.

**Desenvolvimento de Agentes (Checklist):**
*   **Metodologia:** Utilizar um checklist para acompanhar e validar cada etapa do desenvolvimento do agente (ex: cadastro, prompt, integração).

**Recursos da Aula:**
*   **Materiais:** Todas as ferramentas e links utilizados serão disponibilizados em um PDF na aula.

---

## 📘 07 Conteúdos complementares - GPT Maker/001 Como criar um agente de IA que qualifica leads e automatiza seu CRM em minutos com Miranda

Aqui estão os princípios fundamentais da aula sobre GPT-Maker e integração com CRM:

**1. GPT-Maker: Agente de IA como Funcionário Digital**
*   **Analogia:** Pense no agente de IA como um funcionário.
*   **Criação:**
    *   Defina um **cargo/setor** (ex: Vendas, Suporte).
    *   Defina um **objetivo** (ex: Qualificação de leads, Agendamento).
    *   Dê um **nome** e uma **descrição breve da empresa** (não é treinamento, é contexto inicial).
    *   Escolha se o agente fará o atendimento **ponta a ponta** ou se terá **transferência para humano**.

**2. Treinamento vs. Comportamento: A Base do Conhecimento**
*   **Treinamento:** É a **base de conhecimento** do agente.
    *   **Onde:** Informações que o agente usará para gerar respostas (ex: detalhes de imóveis, produtos, FAQs).
    *   **Melhor Prática:** Prefira treinamento manual ou dados estruturados (planilhas, DB) a websites inteiros para evitar "sujeira" (anúncios, irrelevâncias) e alucinações. A qualidade da resposta depende da qualidade do treinamento.
*   **Comportamento:** São as **regras, fluxo de conversa e ações** que o agente deve seguir.
    *   **Onde:** Instruções sobre como se portar (ex: "Não fale sobre concorrentes", "Seu objetivo é apresentar opções com base na necessidade do cliente").
    *   **Insight:** Modelos de IA mais avançados (ex: Cloud) são subjetivos; um prompt de comportamento bem definido pode fazer o agente inferir a necessidade de fazer perguntas qualificatórias.

**3. Teste e Modelos de IA**
*   **Teste Suíte:** Sempre teste o agente exaustivamente no ambiente de teste antes de conectar a canais reais.
*   **Consistência:** O comportamento e as respostas do agente são consistentes em todos os canais (WhatsApp, Instagram, site).
*   **Flexibilidade:** Alterne entre diferentes modelos de IA (OpenAI, Cloud) com um clique, sem necessidade de retreinar o agente.

**4. Intenções: Conectando o Agente ao Mundo Real (APIs)**
*   **Definição:** Intenções dão ao agente a capacidade de se conectar e interagir com **qualquer plataforma que possua uma API de integração**.
*   **Estrutura da Intenção:**
    *   **Nome:** Sempre um verbo de ação (ex: `cadastrar_lead`, `registrar_interesse`).
    *   **Descrição:** Quando a intenção deve ser executada (ex: "Ao iniciar o atendimento", "Quando identificar interesse").
    *   **Prompt de Comportamento:** Instruções específicas para a execução (ex: "Seja sutil e não informe diretamente sobre o cadastro").
    *   **Campos:** Dados que o agente precisa coletar ou enviar.
        *   **Variáveis:** Use variáveis para armazenar informações já coletadas (ex: `telefone_do_contato`) e evitar repetições.
        *   **Preenchimento Automático:** Use para campos que o agente deve inferir da conversa (ex: `imovel` interessado).
*   **Integração com CRM (Exemplo: Clint CRM):**
    *   **Webhooks:** A maioria dos CRMs oferece Webhooks ou APIs para receber e enviar dados.
    *   **Mapeamento de Campos:** Conecte os campos do GPT-Maker (ex: `nome_cliente`) aos campos correspondentes no CRM (ex: `nome_contato`).
    *   **Atualização de Etapas:** Use as intenções para mover o lead entre as etapas do funil no CRM (ex: Base -> Interessados -> Agendamento).
*   **Integração com Google Calendar:**
    *   **Agendamento:** Ative a integração nativa para gerenciar agendas.
    *   **Configuração:** Defina horários de atendimento, duração padrão de eventos, assunto da reunião (pode usar variáveis do cliente).
    *   **Consulta de Horários:** O agente pode consultar a agenda para verificar disponibilidade.
    *   **Reagendamento/Cancelamento:** O agente pode gerenciar alterações de agendamento, atualizando o calendário e o CRM.

**5. Benefícios da Integração IA + CRM**
*   **Visibilidade:** Tenha um painel claro do status de cada lead (qualificado, interessado, agendado).
*   **Retrabalho de Leads:** Identifique leads que demonstraram interesse, mas não agendaram, para campanhas de reengajamento.
*   **Aumento de Conversão:** Otimize o funil de vendas e melhore as taxas de conversão.
*   **Relatórios:** Gere relatórios de desempenho de vendas e agendamentos.

**6. Conectando Canais de Atendimento**
*   **Facilidade:** Após treinar e testar, conectar canais é simples.
*   **Opções:** WhatsApp (Meta Oficial - gratuito para receptivo; ZAPI - pago por instância), Instagram, Website (widget embedável), SMS (via Twilio).

**7. Ferramentas de Debug e Treinamento**
*   **Inspecionar Resposta:** Ferramenta essencial para depurar o agente, visualizar intenções executadas, créditos consumidos, treinamentos usados e respostas de API.
*   **Modo Treinamento (Laranja):** O agente gera a resposta, mas um humano precisa aprová-la antes de enviar ao cliente. Ideal para fases iniciais de treinamento e para construir confiança.

**8. Créditos e Planos**
*   **Consumo:** Créditos são consumidos por mensagem respondida. O custo varia conforme o modelo de IA selecionado (modelos mais simples consomem menos, modelos mais avançados consomem mais, mas seguem instruções com maior precisão).

**9. Horários de Funcionamento do Agente (Workaround)**
*   **Não Nativo:** Atualmente, não há uma função nativa para definir horários de funcionamento do agente. A filosofia é priorizar a IA.
*   **Solução:** Use ferramentas de automação (N8N, Make) para chamar a API do GPT-Maker para ativar/desativar o agente em horários específicos.

**10. Acesso Gratuito ao GPT-Maker**
*   **Link Lumpro:** Crie sua conta através do link da Lumpro.
*   **Cupom:** No plano Basic, use o cupom `Luciana100` para 100% de desconto no primeiro mês. Lembre-se de cancelar se não for continuar.

---

## 📘 07 Conteúdos complementares - GPT Maker/002 Criando um agente de pré-atendimento e qualificação na prática (Agente SDR)

Aqui está a destilação do conteúdo da aula em Primeiros Princípios:

---

**Agente SDR (Sales Development Representative) - Pré-Atendimento e Qualificação**

**1. Definição e Objetivo do Agente SDR:**
*   Assistente automatizado para pré-venda.
*   **Objetivo:** Qualificar leads, entender perfil, identificar potencial de compra.
*   Filtra, qualifica e direciona leads para o time comercial.
*   **Benefícios:** Economiza tempo do vendedor, aumenta taxa de conversão, padroniza atendimento.

**2. Fluxo Essencial do Agente SDR:**
*   Lead inicia contato (WhatsApp, site, anúncio, etc.).
*   Agente responde (primeira interação).
*   Faz perguntas de qualificação (ex: metodologia BANT).
*   Classifica o lead (qualificado, não qualificado, morno).
*   **Ação:** Encaminha leads qualificados para o humano (vendedor/corretor); leads não qualificados para banco de dados/nutrição.

**3. Dores de Negócio Resolvidas:**
*   **Demora no Atendimento:** Resposta imediata 24/7.
*   **Desorganização de Leads:** Centraliza e organiza atendimentos de múltiplos canais.
*   **Vendedores com Curiosos:** Filtra, entregando apenas leads com potencial.
*   **Falta de Padrão:** Garante script consistente, reduzindo erros e perdas.

**4. Metodologia de Qualificação (BANT Adaptado):**
*   **BANT:** Budget (Orçamento), Authority (Autoridade), Need (Necessidade), Time (Tempo).
*   **Adaptação (Ex: Imobiliária):**
    *   **B:** Faixa de investimento, forma de pagamento, % de entrada.
    *   **A:** Quem decide a compra (cliente, cônjuge, chefe).
    *   **N:** Tipo de imóvel, objetivo (morar/investir), localização, quartos, lazer.
    *   **T:** Prazo para decisão (imediato, 3/6 meses, pesquisando).

**5. Estrutura de Conversa do Agente SDR:**
*   **Abertura:** Boas-vindas, apresentação, confirmação de interesse.
*   **Descoberta:** Perguntas sobre tipo de imóvel, objetivo, localização, orçamento.
*   **Qualificação:** Perguntas específicas (pagamento, decisão, investimento).
*   **Classificação:** Define se o lead é quente, morno ou frio.
*   **Encaminhamento:** Ação baseada na classificação (agendamento, nutrição, registro).

**6. Classificação de Leads:**
*   **Qualificado (Quente):** Intenção de compra clara, orçamento definido/aproximado, prazo até 6 meses, região definida.
*   **Morno:** Pesquisando, prazo indefinido.
*   **Não Qualificado (Frio):** Curioso, sem intenção, fora da área de atuação, orçamento muito abaixo.

**7. Ações do Agente por Classificação:**
*   **Lead Quente:**
    *   Avisar corretor/vendedor.
    *   Oferecer agendamento.
    *   Enviar materiais compatíveis (fotos, vídeos, plantas).
    *   **Regra:** NUNCA encaminhar antes de oferecer materiais.
*   **Lead Morno:**
    *   Enviar opções na faixa de interesse.
    *   Tentar extrair mais informações.
    *   Iniciar fluxo de nutrição (futuros lançamentos).
*   **Lead Não Qualificado:**
    *   Agradecer educadamente.
    *   Explicar limites (ex: "nossos imóveis começam a partir de X").
    *   Oferecer registro de contato para futuras oportunidades.
    *   Registrar contato em banco de dados/planilha.

**8. Engenharia de Prompts (Instruções para o Agente):**
*   **Identidade:** Definir claramente o papel do agente (ex: "Você é Malu, consultora de negócios da Luxor Imóveis...").
*   **Objetivo da Conversa:** Listar passos sequenciais (cumprimentar, entender, 3 perguntas, apresentar opções, oferecer materiais, encaminhar).
*   **Tom de Voz:** Amigável, profissional, consultivo.
*   **Mensagem Inicial:** Padronizar (ex: "Olá, [WhatsApp Name], seja bem-vindo(a)...").
*   **Perguntas de Qualificação:** Fazer uma por vez, aguardando resposta. Usar variáveis (`[Lista de Bairros]`).
*   **Critérios de Qualificação/Desqualificação:** Definir regras claras para o agente classificar o lead (ex: "qualificado se investimento >= X").
*   **Ações Pós-Qualificação:** Detalhar o que fazer para cada tipo de lead.
*   **Regras Importantes:**
    *   "SEMPRE fazer as 3 perguntas antes de mostrar imóveis."
    *   "NUNCA inventar informações" (evitar alucinações).
    *   "CITAR apenas imóveis presentes na base de conhecimento."
    *   "Usar mensagens curtas e conversacionais."
    *   "Destacar pontos importantes em negrito."
*   **Estilo de Resposta:** Definir formatação (ex: negrito para nomes, bairros).

**9. Treinamento do Agente (GPT-Maker):**
*   **Perfil do Agente:** Nome, nome da empresa, descrição (resumida em 500 caracteres, usar IA para isso).
*   **Objetivo do Agente:** Definir ações (transferir qualificado, registrar desqualificado).
*   **Configurações:** Habilitar transferência para humano, uso de emojis, divisão de respostas.
*   **Base de Conhecimento ("Trabalho" e "Treinamento"):**
    *   **Texto:** Cadastrar informações da empresa e detalhes dos produtos/serviços como afirmações claras.
    *   **Sites:** Conectar URLs para o agente pesquisar. Configurar intervalo de atualização (hora/dia/mês).
    *   **Documentos:** Subir PDFs, TXTs (catálogos, manuais).
    *   **NÃO USAR VÍDEOS:** Transcrição geralmente ruim e limitada.
*   **LLM (Large Language Model):** Modelos mais caros (mais créditos) são mais inteligentes e exigem menos instruções detalhadas no prompt. Testar diferentes LLMs (OpenAI, Claude).

**10. Intenções e Automações:**
*   **Intenções:** Ativam ações específicas com base na conversa (ex: "criar contato na planilha quando lead for desqualificado").
*   **Configuração da Ação:**
    *   Coletar dados (nome, email, telefone, valor).
    *   Usar Webhooks (Make, Zapier) para enviar dados a outras ferramentas (Google Sheets, Trello, CRM).
    *   Pode enviar e-mails automáticos.
    *   **Regra:** A frase da intenção deve ser EXATAMENTE igual à instrução no prompt.

**11. Integrações e Canais:**
*   **Integrações:** Conectar o agente a outras ferramentas (ex: ElevenLabs para áudio, Google Calendar para agendamentos).
*   **Canais:** Definir onde o agente atende (WhatsApp, Telegram, Instagram, WebChat, SMS).
*   **WebChat:** Ideal para testes internos antes de conectar canais externos.
*   **Conexão WhatsApp:**
    *   Via QR Code.
    *   **Regra CRÍTICA:** NUNCA conectar o WhatsApp do cliente antes de testar exaustivamente o agente.

**12. Configurações Adicionais:**
*   **Transferência:** Habilitar resumo ao transferir, assinar nome do agente.
*   **Comportamento:** Restringir/dividir respostas, registrar lembretes, busca inteligente no treinamento.
*   **Tempo de Resposta:** Imediato (para testes) ou com delay (mais natural).
*   **Inatividade:** Configurar ações (chamar cliente, finalizar atendimento).
*   **Horário de Atendimento:** Definir disponibilidade.
*   **Regras de Transferência:** Interligar múltiplos agentes (suporte -> vendas -> agendamento) com base em intenções.

**13. Testes e Refinamento Contínuo:**
*   **Modo Treinamento:** Usar o chat interno da plataforma para testar, aprovar/reprovar respostas e ajustar o agente.
*   **Limpar Conversa:** Sempre limpar o histórico para novos testes.
*   **Inspecionar Respostas:** Usar ferramentas de depuração para entender o raciocínio do agente e ações executadas.
*   **Cenários de Teste:** Simular leads qualificados, não qualificados, perguntas fora do escopo e "clientes loucos".
*   **Recorrência:** Manter contato com o cliente para otimização constante do agente, garantindo previsibilidade de caixa e melhoria contínua.

---

## 📘 07 Conteúdos complementares - GPT Maker/003 Agente de vendas com atendimento

Aqui estão os princípios fundamentais para a criação de um agente de vendas com atendimento e agendamento:

**1. Objetivo Central do Agente:**
    *   **Não é fechar a venda diretamente**, mas sim **conduzir o lead para um agendamento** (reunião, demonstração, avaliação).
    *   Ideal para vendas consultivas e de alto ticket, onde a conversão por mensagem é baixa.
    *   A reunião aumenta drasticamente a taxa de conversão.

**2. Metodologia de Vendas: Spin Selling:**
    *   Utilize a técnica Spin Selling para conduzir a conversa de forma estratégica.
    *   **Situação:** Entender o contexto atual do cliente (ex: "Qual seu custo médio de energia?").
    *   **Problema:** Identificar dificuldades e dores (ex: "Sente que esse custo tem aumentado?").
    *   **Implicação:** Fazer o cliente perceber o impacto do problema e o custo de não resolvê-lo (ex: "Como isso impacta seu orçamento a longo prazo?").
    *   **Necessidade:** Conectar o problema à solução e conduzir ao agendamento (ex: "Pelo que comentou, vale a pena uma análise gratuita.").

**3. Configuração Essencial do Agente (Prompt Engineering):**
    *   **Identidade:** Defina claramente o papel do agente (ex: "Você é [Nome], consultor da [Empresa], especializada em [Nicho]").
    *   **Objetivo:** Reitere o objetivo principal (ex: "Seu objetivo é entender o cenário do cliente e conduzir a conversa para o agendamento de uma análise gratuita").
    *   **Tom de Voz:** Especifique o tom (ex: "Consultivo, amigável e profissional").
    *   **Regras de Conversa:**
        *   Respostas curtas (máximo 3 linhas).
        *   Uma pergunta por vez.
        *   Não repetir perguntas já respondidas.
        *   Ser consultivo, não agressivo.
        *   Sempre guiar para o agendamento.
    *   **Fluxo Inicial:** Defina a saudação e a primeira pergunta (ex: "Olá, sou [Nome]. Ajudamos a [Benefício]. Já pesquisou sobre isso?").
    *   **Aplicação do Spin Selling no Prompt:** Estruture as perguntas do agente seguindo as fases do Spin Selling, com exemplos adaptados ao nicho.
    *   **Condução ao Agendamento:**
        *   Proponha a reunião de forma clara e com benefício (ex: "Posso verificar um horário para uma análise rápida de 20 minutos?").
        *   **Sugira horários específicos** (ex: "Tenho hoje às 17h ou amanhã às 10h. Qual prefere?"). Evite "Quando você pode?".
    *   **Confirmação:** Instrua o agente a confirmar o agendamento, informar sobre o link/local e registrar dados.
    *   **Tratamento de Objeções:** Inclua exemplos de como o agente deve lidar com objeções comuns (ex: "Estou só pesquisando", "Não tenho tempo").

**4. Integração com Calendário (Google Calendar):**
    *   **Autorização:** Conecte a conta do Google Calendar ao sistema do agente.
    *   **Disponibilidade:**
        *   Defina dias e horários de atendimento.
        *   Configure tempo mínimo de antecedência para agendamentos (ex: 12h, 24h).
        *   Defina distância máxima permitida para agendamentos (ex: até 1 semana).
        *   Permita ou não agendamentos simultâneos, conforme a capacidade da equipe.
    *   **Google Meet:** Habilite a criação automática de links do Google Meet para reuniões online.
    *   **Coleta de Dados:** Configure quais informações o agente deve coletar para o agendamento (Nome, E-mail, Telefone).
    *   **Duração:** Especifique a duração padrão da reunião no calendário (ex: 15, 30 minutos).
    *   **Resumo do Evento:** Personalize o título do evento no calendário (ex: "Análise Energética - @NomeDoUsuario").

**5. Integração com CRM:**
    *   **Registro de Contatos:** Configure o agente para criar ou atualizar contatos no CRM após o agendamento.
    *   **Dados Automáticos:** O agente deve usar informações já disponíveis (ex: telefone do WhatsApp) para preencher o CRM, evitando repetição de perguntas.
    *   **Pipeline:** Vincule o agendamento a uma etapa específica do pipeline de vendas no CRM.

**6. Treinamento e Conhecimento:**
    *   Forneça ao agente documentos ou websites com informações detalhadas sobre o produto/serviço para que ele possa responder a dúvidas e contextualizar a solução.

**7. Testes e Depuração:**
    *   **Teste exaustivamente** o agente com diferentes cenários e tipos de respostas (positivas, negativas, evasivas).
    *   Verifique se as integrações (calendário, CRM) estão funcionando corretamente.
    *   Ajuste o prompt e as configurações com base nos resultados dos testes.

---

## 📘 07 Conteúdos complementares - GPT Maker/004 Criando um Agente de Suporte

Aqui estão os princípios fundamentais para a criação de um Agente de Suporte:

**1. Propósito e Valor do Agente de Suporte:**
*   **Problemas Resolvidos:** Grande volume de perguntas repetidas, demora no atendimento, sobrecarga da equipe, atendimento limitado ao horário comercial.
*   **Benefícios:** Atendimento imediato, respostas rápidas e padronizadas, redução de custos, equipe focada em casos complexos, 80% das dúvidas resolvidas automaticamente.

**2. Estrutura Lógica de Atendimento:**
*   **Recepção:** Mensagem inicial de boas-vindas.
*   **Identificação:** Entender a necessidade do cliente.
*   **Conhecimento:** Consultar base de dados (FAQ, documentos).
*   **Resolução:** Fornecer resposta automática.
*   **Escala:** Encaminhar para atendimento humano quando necessário.

**3. Construção do Prompt (Instruções do Agente):**
*   **Identidade:** Definir claramente quem o agente é (ex: "Você é a Luma, agente de suporte da Formação Mestres da Automação.").
*   **Função e Objetivo:** "Seu objetivo é ajudar clientes com dúvidas e orientações."
*   **Restrição Crucial:** "Use APENAS as informações disponíveis na sua base de conhecimento. Não invente respostas."
*   **Tópicos de Auxílio:** Listar explicitamente os temas que o agente pode abordar (garantia, suporte, recuperação de senha, acesso, renovação, etc.).
*   **Tom de Voz:** "Responda sempre de forma educada, clara e objetiva." (Evitar ser consultivo, ser direto).

**4. Regras de Negócio e Comportamento:**
*   **Reclamações:**
    *   Informar que são tratadas pelo SAC (fornecer e-mail de contato).
    *   Explicar que um especialista analisará o caso.
*   **Transferência para Atendimento Humano (Condições):**
    *   Cliente demonstra insatisfação/frustração.
    *   Problema não resolvível com base de conhecimento.
    *   Cliente solicita falar com atendente humano.
*   **Processo de Transferência:**
    *   Solicitar e-mail de compra para registro.
    *   Informar que a solicitação será encaminhada a um especialista.
    *   Comunicar horário de atendimento da equipe humana.
    *   Se cliente não informar e-mail: Responder educadamente que a transferência não é possível sem a informação.

**5. Base de Conhecimento (Treinamento):**
*   **Fontes:** Páginas de FAQ, documentos de texto com informações específicas (atualizações, pagamentos, notas fiscais, recuperação de senha, etc.), sites.
*   **Conteúdo:** Deve ser abrangente e cobrir todos os tópicos listados no prompt.
*   **Avançado:** Integrar com bancos de dados (ex: ActiveCampaign) para verificar status do aluno (ativo, curso, etiquetas) e personalizar o atendimento ou a permissão de suporte.

**6. Integrações e Canais:**
*   **Canais:** Conectar a plataformas de comunicação (ex: WhatsApp Business).
*   **Sistemas Externos:** Integrar com CRMs ou outras ferramentas para consulta de dados do cliente.

**7. Metodologia de Testes:**
*   **Cenários Diversos:** Testar o agente em situações extremas (cliente frustrado, insatisfeito, com raiva).
*   **Variáveis:** Testar todas as possíveis interações e perguntas.
*   **Ambiente Real:** Preferir testar no WhatsApp Business para simular o uso real, em vez de apenas no chat de teste da plataforma.
*   **Limpeza de Conversa:** Iniciar novos testes com a conversa limpa para evitar contaminação de contexto.
*   **Não Aceitação de Mídia:** Se configurado para não aceitar imagens/PDFs, testar o comportamento.
*   **Iteração:** "Fussar", testar, ajustar o prompt e o treinamento continuamente.

**8. Melhores Práticas e Advertências:**
*   **Simplicidade Inicial:** Começar com um agente simples e adicionar complexidade gradualmente (evitar múltiplos bancos de dados e lógicas complexas no início).
*   **Consistência:** Ajustar o prompt para garantir mensagens iniciais e de boas-vindas consistentes.
*   **Segurança:** Nunca conectar o WhatsApp pessoal para testes; usar um número Business ou apenas o chat da plataforma.
*   **Foco:** O maior tempo de desenvolvimento será dedicado ao treinamento da base de conhecimento.

---

## 📘 07 Conteúdos complementares - GPT Maker/005 Agente de IA de agendamento para clínica + criação de sistema + confirmação de agendamento (gravação do Implementation day)

Aqui estão os princípios fundamentais e as melhores práticas destiladas da aula:

**1. Proposta de Valor e Posicionamento:**
*   **Valor da Solução:** Um sistema de automação para negócios locais (pré-atendimento, agendamento, CRM) pode ser cobrado entre R$5.000-R$6.000 pela implementação, mais R$800-R$1.200/mês de recorrência. Para lançamentos, R$5.000-R$7.000/mês fixo.
*   **Foco no Básico Bem Feito:** Profissionais que entregam o básico com qualidade e atenção aos detalhes são raros e valiosos.
*   **Qualidade do Cliente:** Busque clientes que valorizam a solução e não peçam descontos excessivos.

**2. Ferramentas Essenciais:**
*   **Lovable:** Para construir sistemas web (CRM, dashboards) sem código (no-code).
*   **GPT-Maker:** Para criar e gerenciar agentes de IA (chatbots) com integração a LLMs.
*   **N8N:** Para orquestrar automações e integrar diferentes sistemas via Webhooks e APIs.
*   **Google Calendar:** Para gerenciar agendas de forma integrada.
*   **Google Sheets:** Para armazenamento secundário ou relatórios (evitar como banco de dados primário).
*   **BotConversa:** Para envio de mensagens de confirmação via WhatsApp (API não oficial).

**3. Construção do Sistema (CRM no Lovable):**
*   **Prompting para Criação:** Use prompts detalhados para o Lovable gerar a estrutura inicial do sistema. Ex: "Preciso criar um sistema para uma clínica médica chamada Viver Bem que atende duas especialidades (Cardiologia e Dermatologia). Quero visualizar clientes, armazenar nome, e-mail, telefone, preferência de consulta e especialidade."
*   **Banco de Dados:**
    *   Ative o banco de dados (Lovable Cloud ou Supabase) *antes* de qualquer alteração para evitar perda de dados.
    *   Evite Google Sheets como banco de dados primário devido a limitações de volume e erros.
*   **Estrutura do CRM:** Inclua tabelas para pacientes (ID, nome, e-mail, telefone, preferência, especialidade, data de criação/atualização) e um dashboard.
*   **Funcionalidades Adicionais:** Adicione campos para histórico do paciente e prepare o sistema para receber dados via Webhook do N8N.
*   **Autenticação:** Crie telas de login e perfis de usuário (recepcionista, médico, administrador) para acesso seguro ao sistema.

**4. Engenharia de Prompts para Agentes de IA (GPT-Maker):**
*   **LLM (Large Language Model):** Prefira Claude (Anthropic) para instruções complexas, pois tende a ser mais "inteligente" e eficiente em créditos que GPT para essa finalidade.
*   **Configurações do Agente:**
    *   **Transferência Humana:** Habilite e defina regras claras para quando o agente deve transferir.
    *   **Tempo de Resposta:** Ajuste para o ambiente real (e.g., 5-10 segundos) para permitir que o agente entenda o contexto completo da mensagem.
    *   **Restrição de Tópicos:** Limite os temas para evitar alucinações.
    *   **Inatividade:** Defina ações para conversas inativas (e.g., finalizar após 10 minutos).
*   **Prompt de Comportamento (Perfil):**
    *   **Identidade Clara:** "Você é Rebeca, a assistente virtual da Clínica Viver Bem."
    *   **Função Detalhada:** "Sua função é realizar o pré-atendimento, identificar a necessidade do paciente e agendar consultas com eficiência, clareza e cordialidade."
    *   **Mensagem Inicial Padrão:** Sempre inicie com uma saudação específica e formatada (e.g., negrito).
    *   **Diretrizes de Comportamento:** "Seja educada, objetiva e acolhedora. Faça uma pergunta de cada vez. Evite respostas longas. Não repita perguntas. Sempre conduza o paciente ao agendamento ou transferência."
    *   **Fluxo de Atendimento:**
        1.  Identificar motivo.
        2.  Direcionar para especialidade (mapear sintomas a especialidades).
        3.  Confirmar especialidade.
        4.  Direcionar para agendamento ou transferência.
        5.  Solicitar dados (nome completo, e-mail, telefone com DDD).
        6.  Perguntar preferência (online/presencial).
        7.  Consultar agenda (Google Calendar) e oferecer poucas opções de horário.
        8.  Confirmar agendamento.
        9.  Após confirmação: Gerar resumo, criar/atualizar contato no CRM, enviar confirmação via WhatsApp/e-mail (via N8N).
    *   **Regras de Segurança/Ética:**
        *   "Nunca inventar, supor ou preencher informações não fornecidas."
        *   "Nunca dar diagnóstico médico."
        *   "Nunca falar da concorrência."
        *   "Se não tiver informação obrigatória, solicitar."
        *   "Se não tiver acesso à agenda/dados, informar e encaminhar para humano."
        *   "Nunca fale que é um robô."
        *   "Em caso de urgência, orientar a procurar hospital."
        *   "Se o paciente fugir do escopo, estiver confuso, mal-educado, oferecer transferência."
    *   **Objetivo Final:** "Garantir atendimento rápido, organizado e que finalize agendamento ou encaminhamento humano."
*   **Treinamento (Base de Conhecimento):**
    *   Use afirmações claras: "O endereço da clínica é X." "Não atendemos planos de saúde."
    *   Forneça valores de consulta, formas de pagamento e horários de atendimento.
    *   Contextualize as especialidades com sintomas para direcionamento correto.
    *   Integre calendários de feriados nacionais e instrua o agente a não agendar nesses dias.

**5. Integração de Agendas (Google Calendar):**
*   **Agendas Separadas:** Crie agendas distintas no Google Calendar para cada especialidade (e.g., "Dermatologia", "Cardiologia").
*   **Configurações de Agendamento:**
    *   Tempo mínimo de antecedência (e.g., 24h).
    *   Distância máxima permitida para agendamento (e.g., 2 semanas).
    *   Duração do agendamento (e.g., 1 hora).
    *   Horários de Atendimento: Configure horários específicos para cada médico/especialidade, incluindo intervalos (use o "+" para adicionar blocos de horário).
    *   Agendamento Simultâneo: Permita apenas se for para especialidades diferentes.
    *   Distribuição Inteligente: Deixe o agente selecionar a agenda mais apropriada.
    *   Integração com Google Meet para consultas online.

**6. Automação com N8N:**
*   **Webhooks:** Use Webhooks (POST method) como gatilho para receber dados do GPT-Maker.
*   **Intenções no GPT-Maker:** Crie uma intenção específica (e.g., "Enviar dados do paciente para o CRM") que o agente ativará após a confirmação do agendamento.
*   **Fluxo de Dados:**
    1.  **Webhook (N8N):** Recebe dados do GPT-Maker (nome, e-mail, telefone, especialidade, tipo de consulta, data, horário).
    2.  **Edit Fields (N8N):** Formate os dados (e.g., minúsculas para especialidade/tipo de consulta, formatação de telefone com DDI). Isso pode exigir código JavaScript.
    3.  **HTTP Request (N8N):** Envia os dados formatados para o Webhook do CRM no Lovable.
    4.  **Google Sheets (N8N):** Adiciona os dados a uma planilha Google para registro secundário.
    5.  **BotConversa (N8N):**
        *   Crie campos no BotConversa para receber os dados.
        *   Crie um fluxo de confirmação de agendamento no BotConversa.
        *   Use um HTTP Request no N8N para enviar os dados para o Webhook do BotConversa e acionar o fluxo de confirmação via WhatsApp.
    6.  **Gmail (N8N):** Envia um e-mail de confirmação personalizado.
*   **Debugging:** Use os logs de execução do N8N e os logs de intenção do GPT-Maker para identificar e corrigir erros.

**7. Testes e Iteração:**
*   **Teste Exaustivo:** Teste todos os cenários possíveis (diferentes especialidades, online/presencial, datas válidas/inválidas, feriados, transferências).
*   **Iteração Contínua:** Prompts e automações raramente funcionam perfeitamente na primeira vez. Esteja preparado para ajustar e refinar constantemente.
*   **MVP:** Comece com a funcionalidade mínima viável e adicione complexidade gradualmente.

**8. Canais de Atendimento:**
*   **Web Chat:** Para testes e integração em sites.
*   **Telegram Bot:** Fácil de configurar para testes e uso.
*   **WhatsApp Business API:** Para uso oficial e escalável (requer API oficial).
*   **Assumir Atendimento:** Configure a opção para humanos assumirem conversas via aplicativo móvel, com comandos de controle (e.g., `/encerrar`, `/voltar`).

---

