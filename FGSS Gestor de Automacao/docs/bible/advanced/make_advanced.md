# Playbook Avançado de Make

Este playbook consolidado traz o conhecimento prático e os Primeiros Princípios extraídos das aulas do curso.

---

## 📘 01 Módulo 1 - Introdução ao Make/001 Aviso Importante

Aqui estão os princípios fundamentais do treinamento Make:

*   **Pré-requisitos:** Domínio de Manychat, BotConversa e ferramentas básicas. Visão estratégica e lógica de automações é essencial.
*   **Propósito do Treinamento:** Fornecer a base e as funcionalidades principais do Make para que você crie *suas próprias* automações.
*   **Escopo do Suporte:** Não haverá auxílio individualizado para demandas específicas de automação. A comunidade é o canal para casos não abordados.
*   **Make.com:** É uma ferramenta integradora que conecta mais de mil aplicativos, permitindo automações complexas e "impossíveis".
*   **Conteúdo do Treinamento:** Abrange a base fundamental para construir *qualquer* automação.
*   **Limitação de Exemplos Prontos:** Não serão fornecidas automações prontas para todas as necessidades específicas, devido à vasta gama de nichos e complexidades.
*   **Expectativa do Aluno:** Proatividade, pensamento estratégico e disposição para resolver desafios são esperados. Você deve ser capaz de construir suas próprias soluções.
*   **Novidades:** O instrutor compartilhará aplicações e novidades de seu próprio negócio e de clientes.

---

## 📘 01 Módulo 1 - Introdução ao Make/002 Mapa Mental

Aqui estão os fundamentos de Python destilados em Primeiros Princípios:

**1. Fundamentos da Linguagem**
*   **Python:** Linguagem de alto nível, interpretada, multiparadigma (OO, imperativa, funcional), tipagem dinâmica e forte. Prioriza legibilidade (indentação).
*   **Instalação:** Baixe de python.org. Adicione ao PATH. Verifique com `python --version`.
*   **Saída:** Use `print("mensagem")` para exibir informações.
*   **Entrada:** Use `input("prompt")` para ler texto do usuário.

**2. Variáveis e Tipos de Dados**
*   **Variáveis:** Nomes para armazenar valores (`nome = valor`). Devem começar com letra ou `_`, não com número. Case-sensitive.
*   **Tipos Essenciais:**
    *   `int`: Números inteiros (ex: `10`).
    *   `float`: Números decimais (ex: `3.14`).
    *   `str`: Textos (entre aspas simples ou duplas, ex: `"Olá"`).
    *   `bool`: Valores lógicos (`True`, `False`).
*   **Verificação de Tipo:** `type(variavel)` retorna o tipo.
*   **Conversão de Tipo (Casting):** `int()`, `float()`, `str()`, `bool()`.
*   **Operadores:**
    *   **Aritméticos:** `+`, `-`, `*`, `/`, `//` (divisão inteira), `%` (resto), `**` (potência).
    *   **Comparação:** `==`, `!=`, `>`, `<`, `>=`, `<=`. Retornam `bool`.
    *   **Lógicos:** `and`, `or`, `not`.

**3. Estruturas de Controle**
*   **Condicionais (`if`, `elif`, `else`):** Executam blocos de código baseados em condições booleanas. A indentação define o bloco.
    ```python
    if condicao1:
        # Bloco 1
    elif condicao2:
        # Bloco 2
    else:
        # Bloco 3
    ```
*   **Laços de Repetição:**
    *   **`for`:** Itera sobre sequências (listas, strings, `range`).
        ```python
        for item in sequencia:
            # Código
        for i in range(5): # 0, 1, 2, 3, 4
            # Código
        ```
    *   **`while`:** Repete enquanto uma condição for verdadeira.
        ```python
        while condicao:
            # Código
        ```
    *   **`break`:** Sai do laço imediatamente.
    *   **`continue`:** Pula para a próxima iteração do laço.

**4. Funções**
*   **Definição:** Blocos de código reutilizáveis.
    ```python
    def nome_funcao(parametro1, parametro2):
        """Docstring: Descreve a função."""
        # Código da função
        return resultado # Opcional
    ```
*   **Parâmetros:** Valores passados para a função.
*   **Retorno:** `return valor` envia um valor de volta. Se omitido, retorna `None`.
*   **Escopo:** Variáveis dentro da função são locais. Variáveis fora são globais. Evite `global`.

**5. Estruturas de Dados**
*   **Listas (`list`):** Coleção ordenada, mutável, permite duplicatas. `[item1, item2]`.
    *   Operações: `append()`, `insert()`, `remove()`, `pop()`, `len()`, `sort()`, `lista[indice]`, `lista[inicio:fim]`.
*   **Tuplas (`tuple`):** Coleção ordenada, imutável, permite duplicatas. `(item1, item2)`.
    *   Uso para dados fixos. Operações: `len()`, `tupla[indice]`, `tupla[inicio:fim]`.
*   **Dicionários (`dict`):** Coleção não ordenada, mutável, de pares `chave: valor`. Chaves únicas e imutáveis. `{chave1: valor1, chave2: valor2}`.
    *   Operações: `dicionario[chave]`, `dicionario[chave] = novo_valor`, `del dicionario[chave]`, `keys()`, `values()`, `items()`.
*   **Conjuntos (`set`):** Coleção não ordenada, mutável, de itens únicos. `{item1, item2}` ou `set()`.
    *   Uso para remover duplicatas, operações de conjunto (união, interseção). Operações: `add()`, `remove()`.

**6. Manipulação de Arquivos**
*   **Abertura:** `with open('arquivo.txt', 'modo') as f:`. O `with` garante o fechamento.
*   **Modos:**
    *   `'r'`: Leitura (padrão).
    *   `'w'`: Escrita (sobrescreve ou cria).
    *   `'a'`: Anexar (adiciona ao final).
    *   `'x'`: Criação exclusiva (erro se existir).
    *   `'t'`: Texto (padrão). `'b'`: Binário.
*   **Leitura:** `f.read()` (todo o conteúdo), `f.readline()` (uma linha), `f.readlines()` (lista de linhas). Iterar `for linha in f:`.
*   **Escrita:** `f.write(string)`.

**7. Tratamento de Erros**
*   **`try-except`:** Captura e lida com exceções.
    ```python
    try:
        # Código que pode falhar
    except TipoDeErro as e:
        # Lida com o erro 'e'
    except (Erro1, Erro2): # Múltiplos erros
        # Lida com Erro1 ou Erro2
    else: # Opcional
        # Executa se o try não tiver erro
    finally: # Opcional
        # Executa sempre, para limpeza
    ```
*   **`raise`:** Levanta uma exceção explicitamente. `raise ValueError("Mensagem")`.

**8. Módulos e Pacotes**
*   **Módulos:** Arquivos `.py` com código reutilizável.
*   **Importação:**
    *   `import modulo`: Acesso via `modulo.funcao()`.
    *   `import modulo as apelido`: Acesso via `apelido.funcao()`.
    *   `from modulo import funcao, variavel`: Acesso direto via `funcao()`.
*   **Pacotes:** Diretórios contendo módulos e um arquivo `__init__.py`.

**9. Programação Orientada a Objetos (POO)**
*   **Classe:** Molde para criar objetos. Define atributos (dados) e métodos (comportamentos).
    ```python
    class MinhaClasse:
        def __init__(self, atributo): # Construtor
            self.atributo = atributo
        def meu_metodo(self):
            return self.atributo
    ```
*   **Objeto (Instância):** Uma ocorrência de uma classe. `obj = MinhaClasse("valor")`.
*   **Atributos:** Variáveis de um objeto (`obj.atributo`).
*   **Métodos:** Funções de um objeto (`obj.meu_metodo()`).
*   **Herança:** Uma classe (filha) herda de outra (pai). `class Filha(Pai):`. Use `super().__init__()` no construtor da filha.
*   **Polimorfismo:** Objetos de classes diferentes podem responder ao mesmo método de formas distintas.
*   **Encapsulamento:** Restrição de acesso a componentes internos. Em Python, por convenção: `_atributo` (protegido), `__atributo` (quase privado). Use *getters* e *setters* para controle.

---

## 📘 01 Módulo 1 - Introdução ao Make/003 Introdução

Aqui estão os princípios fundamentais da aula sobre Make:

**1. Make: Plataforma de Automação Avançada**
*   **Definição:** Plataforma de integração de ferramentas para criar automações complexas.
*   **Nível de Dificuldade:** Não é para iniciantes absolutos; requer experiência prévia com ferramentas de automação mais simples (ex: ManyChat, BotConversas).
*   **Capacidade:** Permite criar automações de alta complexidade, consideradas "impossíveis" em outras plataformas.

**2. Planos e Precificação**
*   **Moeda:** Cobrança em Dólar Americano (USD).
*   **Modalidades:** Anual (mais barato) ou Mensal.
*   **Plano Gratuito:**
    *   Limite de 1000 operações por mês.
    *   Máximo de 2 cenários ativos.
    *   Ideal para aprendizado e automações pessoais.
*   **Plano "Core" (Exemplo de Pago):**
    *   Oferece cenários ativos ilimitados.
    *   10.000 operações por mês.
    *   Geralmente suficiente para projetos avançados.
*   **Unidade de Cobrança:** "Operações" (será detalhado posteriormente).
*   **Criação de Conta:** Inicie gratuitamente e faça upgrade dentro da plataforma.

**3. Gestão de Contas e Clientes**
*   **Flexibilidade:** Uma única conta Make pode gerenciar múltiplos clientes (organização por pastas).
*   **Melhor Prática (Recomendada):** Crie uma conta Make separada para cada cliente.
*   **Motivo:** Evitar que sua conta pague pelas operações dos clientes.
*   **Fluxo de Trabalho:** Desenvolva automações na sua conta e, após validação, migre e configure na conta específica do cliente.

**4. Configurações Iniciais Essenciais (Perfil)**
*   **Acesso:** Ícone de perfil (canto inferior esquerdo) > Profile.
*   **Preferências de E-mail:** Personalize notificações (ex: erros) por organização.
*   **Fuso Horário (Time Zone Options):**
    *   **Crucial:** Configure ambos os campos de fuso horário (exibição e análise/formatação de dados) para sua localização (ex: America/Sao_Paulo).
    *   Defina o País (ex: Brazil).
*   **Idioma:** Recomenda-se usar Inglês para consistência com a terminologia da plataforma e recursos de suporte.
*   **Outras Opções:** Conexão de APIs (até 5), Autenticação de Dois Fatores (2FA), Programa de Afiliados.

**5. Conexões (Integrações)**
*   **Função:** Gerenciar as integrações com serviços externos (ex: Gmail, Google Drive).
*   **Manutenção:** Algumas conexões (especialmente Google) exigem re-autorização periódica (aprox. a cada 7 dias).
*   **Solução de Problemas:** Se uma automação falhar, verifique e re-autorize as conexões.
*   **Gerenciamento:** Permite deletar conexões.

**6. Dashboard:**
*   Visão geral da tela inicial da plataforma (será abordado em detalhes na próxima aula).

---

## 📘 01 Módulo 1 - Introdução ao Make/004 Como enviar a sua dúvida sobre o make

Para reportar erros no Make de forma eficaz:

*   **Localize o Erro:**
    *   Procure indicadores vermelhos de "erro" nos logs ou no histórico da automação.
    *   Clique em "detalhes" para acessar as informações específicas do erro (ex: Erro 500, erro interno).
*   **Informações Essenciais para o Reporte:**
    *   **Log do Erro:** Sempre inclua o log completo do erro.
    *   **Localização:** Indique onde o erro ocorreu na automação.
    *   **Módulo Afetado:** Especifique qual módulo (ex: Google Sheets) gerou o erro.
*   **Objetivo:** Fornecer detalhes precisos acelera a resolução e a resposta.

---

## 📘 01 Módulo 1 - Introdução ao Make/005 Geral da Organization

Aqui estão os Primeiros Princípios da aula:

*   **Operações são a Moeda:** Cada ação executada em um cenário consome "operações".
*   **Monitoramento de Uso Essencial:**
    *   Planos definem limites mensais de operações e transferência de dados.
    *   Monitore o uso para evitar a interrupção de cenários.
    *   Cenários **param** quando o limite de operações é atingido; não há cobrança automática de excesso, a menos que configurado.
*   **Gestão de Operações:**
    *   **Compra de Operações Extras:** Adquira operações adicionais para picos de uso ou para estender a cobertura.
    *   **Compra Automática de Operações (Auto-Purchase):** Ative para garantir que os cenários não parem, comprando operações automaticamente ao atingir o limite do plano.
*   **Estrutura da Plataforma (Dashboard):**
    *   **Visão Geral:** Acompanhe o plano atual, preço, operações restantes, histórico de uso e transferência de dados.
    *   **Organização de Cenários:** Crie e gerencie cenários, organizando-os em pastas.
    *   **Gestão de Equipe:** Adicione usuários, defina funções (Admin, Membro) e convide novos membros.
    *   **Histórico de Pagamentos:** Acesse o registro completo de cobranças e compras de operações.
    *   **Recursos Adicionais:** Explore Templates (modelos prontos), Conexões (Webhooks, Devices) e Variáveis (para uso futuro).

---

## 📘 02 Módulo 2 - Módulos/001 Tipos de Módulos

Aqui estão os princípios fundamentais sobre os tipos de módulos no Make.com:

*   **Módulos Make.com:** Componentes que executam funções específicas dentro de um cenário de automação.

*   **Tipos de Módulos:**

    1.  **Ações (Actions):**
        *   **Princípio:** Executam uma operação específica em um serviço.
        *   **Uso:** Modificar dados, enviar informações, criar registros.
        *   **Exemplos:** Adicionar linha em planilha, enviar e-mail, criar relatório.

    2.  **Busca (Search):**
        *   **Princípio:** Localizam dados em um serviço com base em critérios definidos.
        *   **Uso:** Filtrar e recuperar informações para processamento posterior.
        *   **Exemplos:** Buscar linhas em planilha por intervalo de idade, procurar registros por estado.

    3.  **Gatilhos (Triggers):**
        *   **Princípio:** Iniciam a execução de um cenário em resposta a um evento.
        *   **Uso:** Ativar o fluxo de trabalho.
        *   **Característica:** Geralmente o primeiro módulo de um cenário.

    4.  **Iterador (Iterator):**
        *   **Princípio:** Desconstrói um "array" (conjunto de itens) em bundles individuais.
        *   **Uso:** Processar cada item de uma coleção separadamente.
        *   **Exemplo:** Separar múltiplos anexos de um e-mail para tratamento individual.

    5.  **Agregador (Aggregator):**
        *   **Princípio:** Combina múltiplos bundles individuais em um único array ou conjunto.
        *   **Uso:** Consolidar dados para uma ação final ou envio unificado.
        *   **Exemplo:** Juntar vários itens de compra em um único pacote para envio.

*   **Identificação de Módulos na Interface:**
    *   Ao selecionar um serviço (ex: Google Sheets), os tipos de módulos (Triggers, Actions, Searches) são listados abaixo do nome do serviço.
    *   O nome do módulo frequentemente indica sua função (ex: "Search Rows", "Add a Row").

---

## 📘 02 Módulo 2 - Módulos/002 Conectar e desconectar módulos

### Conectando e Desconectando Módulos em Cenários

*   **Conectar Módulos:**
    *   **Via Botão "+":** Clique no "+" (maizinho) para adicionar um novo módulo e conectá-lo ao anterior.
    *   **Via Proximidade (Arrastar e Soltar):** Arraste um módulo existente para perto de outro. A proximidade estabelece a conexão e o fluxo de informação.
*   **Desconectar Módulos:**
    *   **Via Proximidade (Arrastar e Soltar):** Afaste um módulo do outro para desconectá-lo.
    *   **Via Opção "Unlink":** Clique na opção "unlink" (anlímpque) para remover a conexão.
*   **Comportamento:**
    *   A conexão visual (proximidade) indica o fluxo de dados entre módulos.
    *   Erros podem surgir se módulos esperados para estarem conectados forem desconectados.
*   **Melhores Práticas / Preferências:**
    *   O uso do botão "+" é comum para iniciar novas conexões.
    *   Arrastar e soltar é eficiente para duplicar módulos e reorganizar rapidamente o fluxo.
    *   A escolha do método é uma questão de preferência pessoal e otimização do fluxo de trabalho.

---

## 📘 02 Módulo 2 - Módulos/003 Aviso dos módulos

Aqui estão os princípios fundamentais extraídos da aula:

*   **Feedback Visual de Erros:**
    *   **Vermelho (Erro Crítico):** Indica falhas que impedem a operação (ex: campo obrigatório vazio). Requer correção imediata para prosseguir.
    *   **Amarelo (Aviso/Configuração Incompleta):** Sinaliza um estado que pode causar problemas ou uma configuração pendente (ex: módulo desconectado). A operação pode continuar, mas a atenção é recomendada.
*   **Detalhamento de Erros:**
    *   A ferramenta fornece mensagens de erro específicas.
    *   Clique no ícone de erro (bolinha) para acessar informações detalhadas sobre o problema.
*   **Estratégias de Resolução:**
    *   Preencha campos vazios para resolver erros de validação.
    *   Conecte módulos para eliminar avisos de desconexão.
    *   Utilize ferramentas de tradução (Google Translate, ChatGPT) para compreender mensagens de erro em idiomas desconhecidos.
*   **Benefício do Erro Explícito:** O feedback visual, especialmente o vermelho, direciona o usuário ao ponto exato do problema, facilitando a depuração e correção.

---

## 📘 02 Módulo 2 - Módulos/004 Mapeamento de campos

*   **Mapeamento de Campos:** Essencial para configurar a transferência de dados entre módulos no Make.
*   **Bundles:**
    *   Estrutura de dados gerada pela execução de um módulo.
    *   Contém `input` (dados fornecidos ao módulo) e `output` (dados retornados pelo módulo).
    *   Representado visualmente por um ícone de círculo no módulo.
*   **Geração de Bundles para Teste:**
    *   Clique com o botão direito no módulo desejado.
    *   Selecione "Run this module only" para executar o módulo isoladamente e inspecionar seu bundle.
*   **Dados de Input:**
    *   Informações configuradas e enviadas para o módulo.
    *   Exemplo: Definir "Nova York" como local para um módulo de previsão do tempo.
*   **Dados de Output:**
    *   Resultados processados e retornados pelo módulo.
    *   Exemplo: Coordenadas, vento, temperatura, pressão e umidade para "Nova York".
    *   Estes são os "campos" que serão mapeados em módulos subsequentes (ex: adicionar uma linha em Google Sheets).
*   **Estrutura Interna dos Bundles:**
    *   Podem conter `collections` e `arrays`, que são estruturas de dados expansíveis.
    *   A prioridade é a identificação e uso prático dos campos, não a memorização das nomenclaturas.
*   **Objetivo:** Gerar e analisar bundles para entender os dados de output disponíveis, permitindo o mapeamento correto e a criação de automações.

---

## 📘 02 Módulo 2 - Módulos/005 Criando a sua primeira automação no make

Aqui estão os princípios fundamentais da aula:

**1. Pré-requisitos Essenciais:**
*   Conta Make.com ativa.
*   Conta Google para conexão com Google Sheets.

**2. Estrutura da Automação (Cenário Make.com):**
*   **Módulos:** Cada etapa da automação é um módulo (ex: "Weather", "Google Sheets").
*   **Fluxo:** Módulos se conectam, passando dados de um para o outro.

**3. Preparação do Google Sheets:**
*   Crie uma planilha (ex: "exercicio 1").
*   Crie uma aba específica (ex: "New York").
*   Defina cabeçalhos claros na primeira linha para cada coluna de dados (ex: "Cidade", "Temperatura Máxima", "Longitude", "Latitude", "Status").

**4. Módulo de Origem de Dados (Ex: Clima):**
*   **Seleção:** Adicione o módulo "Weather" e escolha a ação "Get Current Weather".
*   **Configuração:** Especifique a cidade (ex: "New York").
*   **Inspeção de Saída:** Execute o módulo individualmente (`Run this module only`) para visualizar os campos de dados disponíveis (output) antes de mapear.

**5. Módulo de Destino de Dados (Ex: Google Sheets):**
*   **Seleção:** Adicione o módulo "Google Sheets" e escolha a ação "Add a Row".
*   **Conexão Google:**
    *   Adicione/selecione sua conta Google.
    *   Autorize o Make.com a acessar suas planilhas.
*   **Identificação da Planilha:**
    *   **Método Preferencial (Robusto):** Use "Enter Manually" e cole o **ID da Planilha** (a longa sequência de caracteres na URL entre `/d/` e `/edit`).
    *   **Método Alternativo:** Pesquise a planilha no seu Google Drive.
*   **Identificação da Aba:** Insira o nome exato da aba (ex: "New York").
*   **Cabeçalhos:** Marque "Yes" para "Table contains headers" se sua planilha tiver cabeçalhos.

**6. Mapeamento de Campos (Core Skill):**
*   Conecte os campos de saída do módulo anterior (ex: "Weather") aos campos de entrada do módulo atual (ex: "Google Sheets").
*   Arraste ou clique nos campos desejados.
*   Valores estáticos podem ser digitados diretamente (ex: "New York" para a coluna "Cidade").

**7. Execução e Verificação:**
*   **Salvar Cenário:** Sempre salve seu cenário.
*   **Auto-alinhamento:** Use a ferramenta de auto-alinhamento (ícone de varinha mágica) para organizar visualmente os módulos.
*   **Executar uma Vez (`Run once`):** Teste a automação para enviar os dados.
*   **Verificação:** Confirme se os dados foram inseridos corretamente na sua planilha Google.

**8. Princípio da Automação:**
*   A automação é a conexão de módulos que executam ações sequenciais, transferindo e transformando dados entre serviços.
*   O mapeamento de campos é a habilidade fundamental para construir automações eficazes.

---

## 📘 03 Módulo 3 - Funcionalidades/001 Router

Aqui estão os princípios fundamentais sobre Roteadores (Routers):

*   **Propósito:** Distribuir dados para diferentes módulos ou caminhos de processamento, dependendo da necessidade ou de condições específicas.
*   **Funcionalidade Principal:**
    *   Recebe dados de um módulo anterior.
    *   Permite a criação de múltiplos caminhos de saída (branches).
    *   Pode enviar os *mesmos dados* para *múltiplos destinos* simultaneamente.
    *   Pode rotear dados *condicionalmente* para destinos específicos (geralmente em conjunto com filtros em cada branch).
*   **Casos de Uso Comuns:**
    *   **Distribuição Condicional:** Ex: Receber eventos de vendas (compra aprovada, carrinho abandonado, Pix gerado) e rotear cada tipo de evento para um fluxo diferente (ex: compra aprovada -> planilha; carrinho abandonado -> e-mail de recuperação).
    *   **Ações Múltiplas Simultâneas:** Ex: Após receber um e-mail, criar um cartão no Trello, enviar uma mensagem no Slack e fazer upload de um arquivo no Google Drive, tudo a partir do mesmo e-mail.
*   **Como Adicionar:**
    *   Clique no ícone "+" e selecione "Flow Control" -> "Routers".
    *   Ou, arraste o módulo "Router" da seção "Tools".
*   **Conexão:** Conecte o módulo de entrada ao roteador e, em seguida, conecte cada branch do roteador aos módulos de saída desejados.
*   **Ordem de Processamento (Crucial):**
    *   **Definição:** A ordem em que os branches conectados ao roteador serão executados.
    *   **Configuração:** Clique com o botão direito no roteador e selecione "Order Routes".
    *   **Reordenação:** Arraste e solte os branches para definir a sequência de execução. Clique em "Apply" para salvar.
    *   **Visualização:** Use o ícone de "aviãozinho" (Run Once/Explain Flow) para visualizar a ordem de execução numerada dos branches.
*   **Remoção:** Selecione o roteador (e/ou seus branches) com Shift + clique e pressione Backspace.
*   **Importância:** É um componente fundamental e amplamente utilizado em cenários de automação complexos, frequentemente combinado com filtros.

---

## 📘 03 Módulo 3 - Funcionalidades/002 Filter

**Filtros em Make.com (Integromat)**

1.  **Propósito Central:** Controlar o fluxo de dados entre módulos, permitindo ou bloqueando a passagem de informações com base em condições.

2.  **Criação de Filtros:**
    *   Adicione um filtro entre dois módulos.
    *   Clique na linha de conexão entre os módulos ou use o ícone de ferramenta "Setup a Filter".
    *   Atribua uma **etiqueta (label)** descritiva ao filtro para clareza.

3.  **Lógica `AND` vs. `OR`:**
    *   **`AND` (E):** Todas as condições devem ser verdadeiras para que os dados passem.
        *   *Exemplo:* Gênero é "Feminino" **E** Idade está entre 30 e 40 anos.
    *   **`OR` (OU):** Pelo menos uma das condições deve ser verdadeira para que os dados passem.
        *   *Exemplo:* Status da compra contém "Aprovado" (da plataforma Guru) **OU** Evento é "Purchase Approved" (da plataforma Hotmart). Essencial para combinar dados de diferentes fontes/campos.

4.  **Operadores Comuns:**
    *   **Texto:** `Equal to`, `Not equal to`, `Contains`, `Does not contain`, `Starts with`, `Ends with`, `Is empty`, `Is not empty`.
    *   **Numéricos:** `Equal to`, `Greater than`, `Less than`, `Between`, etc.
    *   **Data e Hora:** `Before`, `After`, `On or before`, `On or after`.
    *   **Existência:** `Exists`, `Does not exist`.
    *   **Case-Insensitive:** Opção para ignorar maiúsculas/minúsculas em comparações de texto.

5.  **Casos de Uso Essenciais:**
    *   **Prevenção de Duplicidade:**
        *   Verificar se um e-mail já existe em uma planilha antes de adicionar uma nova linha.
        *   Verificar se um evento de compra já foi processado.
    *   **Processamento Condicional:**
        *   Processar apenas compras aprovadas.
        *   Segmentar usuários por critérios demográficos (ex: gênero E idade).
        *   Filtrar mensagens para grupos específicos (ex: grupos de WhatsApp).

6.  **Melhores Práticas:**
    *   Sempre nomeie seus filtros com etiquetas claras que descrevam a condição.
    *   Use `OR` quando houver múltiplas maneiras de satisfazer uma condição (especialmente com dados de diferentes fontes).
    *   Use `AND` quando todas as condições forem obrigatórias.

---

## 📘 03 Módulo 3 - Funcionalidades/003 Scheduling

Aqui estão os princípios fundamentais sobre agendamento (scheduling) no Make:

1.  **Tipos de Agendamento:**
    *   **Polling (Agendado):** Executa o cenário em intervalos de tempo pré-definidos (ex: a cada 15 minutos, uma vez por dia, dias específicos).
        *   *Uso Comum:* Coleta de métricas diárias (ex: Instagram), tarefas de rotina que não exigem tempo real.
    *   **Instant (Instantâneo/Webhook):** Executa o cenário imediatamente quando um evento específico ocorre (ex: chegada de dados, preenchimento de formulário).
        *   *Uso Comum:* Eventos de compra aprovada, recuperação de vendas, notificações em tempo real, alimentação de planilhas por evento.

2.  **Custo de Operações:**
    *   **Regra Central:** Cada vez que um cenário é executado, ele consome operações. O Make cobra com base no número de operações.
    *   **Cálculo:** Multiplique o número de operações por execução pelo número de execuções no período desejado.
        *   *Exemplo:* Cenário com 2 operações/execução:
            *   Diário: 2 ops/dia * 30 dias = 60 ops/mês.
            *   A cada 15 minutos: (2 ops/execução * 4 execuções/hora) * 24 horas/dia = 192 ops/dia.
    *   **Melhor Prática:** Avalie a real necessidade da frequência de execução para otimizar o consumo de operações.

3.  **Configuração de Agendamento (Polling):**
    *   **Frequência:** Defina intervalos (minutos, horas, dias) ou horários e dias específicos.
    *   **Configurações Avançadas:**
        *   **Período:** Especifique uma data e hora de início e fim para que o agendamento esteja ativo. Fora desse período, o cenário não será executado.
    *   **Ativar/Desativar:** O cenário deve estar "ligado" para que o agendamento funcione. Desligá-lo impede a execução.

4.  **Conceito "ACID" (Avançado):**
    *   Indica que uma operação pode ser desfeita. Será abordado em detalhes posteriormente.

5.  **Melhores Práticas:**
    *   **Teste Massivamente:** Antes de agendar automações, especialmente as de grande volume, teste exaustivamente para garantir que o agendamento e a execução estejam corretos.
    *   **Uso Consciente:** Escolha o tipo e a frequência de agendamento com sabedoria, alinhando-os à necessidade real do negócio para economizar operações.
    *   **Flexibilidade:** Utilize uma combinação de agendamentos diários, semanais e instantâneos conforme a demanda de cada automação.

---

## 📘 03 Módulo 3 - Funcionalidades/004 Run Once e Run a module once

Aqui estão os princípios fundamentais da aula:

*   **Ativação/Desativação de Automações:**
    *   **Método 1 (Preferencial):** Use o toggle `On/Off` no canto inferior esquerdo da tela.
    *   **Método 2:** Acesse a seção "Cenários" e ative/desative a automação.

*   **`Run once` vs. `Run this module only`:**
    *   **`Run once`:**
        *   Executa o cenário completo a partir do trigger.
        *   **Consome operações** para cada módulo executado no fluxo.
    *   **`Run this module only`:**
        *   Executa **apenas o módulo selecionado** (clique direito no módulo).
        *   **Não consome operações** para módulos subsequentes.
        *   **Uso:** Ideal para depurar um módulo específico, testar entradas/saídas ou simular dados de entrada (ex: em um trigger, para testar o fluxo a partir daquele ponto).

*   **Desabilitar Rotas para Teste e Otimização de Custos:**
    *   **Problema:** Testar cenários complexos pode consumir muitas operações desnecessariamente.
    *   **Solução:** Desabilite rotas específicas para focar o teste em um caminho.
    *   **Como:** Clique no ícone de "chave de fenda" na linha da rota e selecione "Desabilitar rota".
    *   **Efeito:** Módulos na rota desabilitada não serão executados quando o cenário for rodado (`Run once`).
    *   **Benefício:** Economiza operações durante o desenvolvimento e teste, permitindo validar partes específicas do fluxo sem custos adicionais.
    *   **Melhor Prática:** Sempre desabilite rotas não relevantes para o teste atual para otimizar o consumo de operações.

---

## 📘 04 Módulo 4 - Operações, templates e blueprint/001 Sobre as Operações

Aqui estão os Primeiros Princípios sobre Operações:

*   **Operações são a Unidade de Custo:** Cada execução de um módulo em um cenário consome uma operação, sendo a base da cobrança da plataforma.
*   **Impacto Direto no Custo:** A eficiência na criação e agendamento de cenários reduz o consumo de operações e, consequentemente, os custos.
*   **Contagem de Operações:**
    *   Cada módulo executado dentro de um cenário conta como uma operação.
    *   Exemplo: Um cenário com 2 módulos (e.g., Tempo + Google Sheets) consome 2 operações por execução.
*   **Visualização do Consumo:**
    *   **Histórico do Cenário:** Detalha operações consumidas por cada execução individual.
    *   **Visão Geral do Cenário (inferior):** Mostra o total de operações e dados (MB) gastos pelo cenário.
    *   **Dashboard da Organização:** Exibe o consumo total de operações no mês para fins de faturamento.
*   **O que NÃO consome operações:**
    *   Filtros
    *   Roteadores
    *   Erros (a ocorrência de um erro não gera consumo adicional de operação para o módulo que falhou).
*   **Melhores Práticas para Otimização de Custos:**
    *   **Design Estratégico:** Elimine módulos desnecessários em suas automações.
    *   **Agendamento Otimizado:** Ajuste a frequência de execução dos cenários para o mínimo necessário (e.g., rodar uma previsão do tempo duas vezes ao dia em vez de a cada 15 minutos).
    *   **Previsibilidade:** Otimizar o agendamento permite prever e controlar o consumo de operações.
    *   **Compra de Operações Extras:** Adquira pacotes de operações adicionais se o uso mensal exceder o plano, evitando a necessidade de um upgrade de plano mais caro.

---

## 📘 04 Módulo 4 - Operações, templates e blueprint/002 Templates + BluePrint

Aqui estão os princípios fundamentais sobre Templates e Blueprints no Make.com:

**1. Templates (Modelos Pré-Configurados)**

*   **Localização:** Seção "Templates" na barra lateral esquerda.
*   **Propósito:** Fornecem cenários pré-construídos para integrações comuns e casos de uso frequentes.
*   **Exemplos:** Adicionar dados do Google Sheets via Webhook, salvar anexos do Gmail no Google Drive, enviar e-mails do Gmail de uma planilha.
*   **Uso:**
    *   Clique no template para ver a descrição e o guia.
    *   Crie um novo cenário baseado no template.
    *   **Ação Necessária:** Configure as conexões (ex: contas Google) e mapeie os valores específicos para seu caso.
*   **Busca:** Filtre templates por nome de aplicativo (ex: Active Campaign, HTTP).
*   **Benefício:** Acelera o desenvolvimento, oferecendo pontos de partida testados.

**2. Exportação de Blueprints (Cenários Personalizados)**

*   **Propósito:** Compartilhar um cenário customizado com outras pessoas ou para backup.
*   **Processo:**
    *   Dentro de um cenário existente, clique nos três pontos (...) na parte inferior.
    *   Selecione "Exportar blueprint".
*   **Formato:** O arquivo exportado será sempre `blueprint.json`.
*   **Conteúdo:** O blueprint contém a estrutura lógica do cenário e o mapeamento de dados, mas **não** inclui as configurações de conexão (ex: credenciais de API).
*   **Benefício:** Permite a reutilização e distribuição eficiente de lógicas complexas.

**3. Importação de Blueprints**

*   **Propósito:** Utilizar um cenário `blueprint.json` compartilhado.
*   **Processo:**
    *   Na interface principal, clique em "Importar blueprint".
    *   Escolha o arquivo `blueprint.json`.
    *   Salve o cenário importado.
*   **Ação Necessária:** Após a importação, você deve configurar as conexões (ex: conectar suas contas) e revisar o mapeamento de dados.
*   **Benefício:** Implantação rápida de cenários pré-construídos.

**4. Gerenciamento de Cenários (Básico)**

*   **Ativar/Desativar:** Cenários podem ser ligados ou desligados (ativados/desativados) conforme necessário.
*   **Excluir:** Opção para remover cenários.

---

## 📘 05 Módulo 5 - Cenários/001 Geralzão do cenário

Aqui estão os princípios fundamentais da aula sobre cenários de automação:

1.  **Cenários são o ambiente central de automação:**
    *   Crie novos cenários via "Create New Scenario".
    *   A interface inicial exibe todos os aplicativos disponíveis.

2.  **Estrutura de um Cenário:**
    *   Comece com um **Gatilho (Trigger)** (ex: Webhook).
    *   Conecte **Módulos** para processar e transferir dados.

3.  **Monitoramento e Depuração:**
    *   O diagrama do cenário exibe consumo de operações e dados transferidos.
    *   **Histórico de Transações:** Visualize ativações, edições e status (sucesso/erro).
    *   **Detalhamento de Erros:** Clique em "details" ou no ícone vermelho para ver a causa exata do erro (ex: "contato relacionado não existe").
    *   **Execuções Incompletas:** Serão listadas para revisão.

4.  **Configurações do Cenário:**
    *   **Status:** Ativo/Inativo.
    *   **Agendamento (Scheduling):** Imediato ou Intervalo Regular.
    *   **Executar uma vez:** Para testes.
    *   **Salvar Cenário.**
    *   **Notas:** Adicione notas a módulos (clique direito) para documentação.
    *   **Alinhamento Automático:** Use a "varinha mágica" para organizar o fluxo visualmente.
    *   **Explicação do Fluxo:** O ícone de avião mostra o caminho dos dados.
    *   **Blueprint:** Importe/Exporte para backup ou compartilhamento.
    *   **Controle de Versão:** Retorne a versões anteriores em caso de erro.

5.  **Ferramentas Avançadas (Módulos Especiais):**
    *   **Repetidor (Repeater), Iterador (Iterator), Agregador de Array (Array Aggregator):** Para manipulação de coleções de dados.
    *   **Variáveis, Sleep, Agregador Numérico:** Para lógica e controle de fluxo.
    *   **Basic Trigger:** Gera um "bundle" ao informar o gatilho.

6.  **Interação com Módulos (Menu de Contexto - Botão Direito):**
    *   **Configurações do Módulo:** Acesse as opções específicas do módulo.
    *   **Executar Apenas Este Módulo:** Teste um módulo isoladamente sem consumir operações de todo o cenário.
    *   **Renomear Módulo:** Melhora a organização do fluxo (ex: "Gatilho Compra Aprovada").
    *   **Copiar/Colar/Clonar Módulo:** Agiliza a construção.
    *   **Adicionar Nota/Deletar Módulo.**

7.  **Controle de Fluxo:**
    *   **Filtros (Set Filter):** Condições para prosseguir (ex: "status do pedido é efetivado").
    *   **Roteadores (Routers):** Crie caminhos alternativos para diferentes condições.
    *   **Adicionar Módulo:** Insira novos passos no fluxo.

8.  **Mapeamento de Dados:**
    *   Ao configurar campos, o menu com a estrela exibe todos os dados disponíveis.
    *   **Origem dos Dados:** Campos são coloridos e agrupados por aplicativo/módulo de origem (ex: ActiveCampaign, MemberKit, Gatilho).
    *   **Colapsar/Expandir:** Organize a visualização dos campos.

9.  **Melhores Práticas:**
    *   Use notas para documentar módulos complexos.
    *   Renomeie módulos para clareza.
    *   Utilize o alinhamento automático para manter o cenário legível.
    *   Teste módulos individualmente para depuração eficiente.

---

## 📘 05 Módulo 5 - Cenários/002 Data type

Aqui estão os princípios fundamentais da aula:

*   **Acesso a Campos:**
    *   Todos os campos de módulos integrados são acessíveis via o ícone de "estrela".
    *   Campos são pesquisáveis por nome (ex: "status").

*   **Funções Gerais (`General Functions`):**
    *   Atuam como condicionais e permitem cálculos complexos.
    *   Essenciais para a lógica de automação.

*   **Funções Numéricas:**
    *   **Formatação:** Ajustar a exibição de números (ex: casas decimais).
    *   **Operações:** Realizar somas, encontrar mínimos/máximos.

*   **Funções de Data:**
    *   **Formatação (`Format Date`):** Exibir datas em formatos específicos (ex: `DD/MM/YYYY`).
    *   **Aritmética:** Adicionar ou subtrair unidades de tempo (dias, meses, anos) a uma data.
        *   *Exemplo:* `Data Atual + 365 dias` para calcular uma data de expiração.

*   **Funções de Texto:**
    *   `UPPER`: Converte todo o texto para maiúsculas.
    *   `LOWER`: Converte todo o texto para minúsculas.
    *   `StartCase` / `Capitalize`: Capitaliza a primeira letra de cada palavra (ex: "Gestão De Automação").
    *   `Split`: Divide uma string de texto com base em um delimitador.
    *   `Base64`: Mencionado para codificação/decodificação (uso futuro).

*   **Conceitos Avançados (Introdução):**
    *   **Arrays (`working with arrays`):** Funções para manipular coleções de dados (uso futuro).
    *   **Variáveis:** Armazenamento temporário de dados para uso em fluxos (uso futuro).

*   **Princípio de Uso:**
    *   Aprender a localizar e aplicar as funções corretas (numéricas, data, texto) é fundamental para manipular e transformar dados conforme a necessidade da automação.

---

## 📘 05 Módulo 5 - Cenários/003 Bora praticar as funções

Aqui estão os princípios fundamentais da aula:

**1. Manipulação de Texto:**
*   **`Starcase(texto)`**: Converte a primeira letra de cada palavra para maiúscula.
    *   Ex: `Starcase("nome sobrenome")` -> "Nome Sobrenome"
*   **`Upper(texto)`**: Converte todo o texto para maiúsculas.
    *   Ex: `Upper("nome sobrenome")` -> "NOME SOBRENOME"
*   **`Lower(texto)`**: Converte todo o texto para minúsculas.
    *   Ex: `Lower("Nome Sobrenome")` -> "nome sobrenome"
*   **`Capitalize(texto)`**: Converte apenas a primeira letra da primeira palavra para maiúscula.
    *   Ex: `Capitalize("nome sobrenome")` -> "Especialista fruque sobrenome"

**2. Manipulação de Datas:**
*   **`AddDays(data, dias)`**: Adiciona um número específico de dias a uma data.
    *   Ex: `AddDays(hoje, 10)` -> Data daqui a 10 dias.
*   **`FormatDate(data, formato)`**: Formata uma data para um padrão de string específico.
    *   Ex: `FormatDate(hoje, "dd/mm/yyyy")` -> "24/05/2023"
*   **Melhor Prática**: Combine `AddDays` e `FormatDate` para obter uma data futura já formatada.
    *   Ex: `FormatDate(AddDays(hoje, 10), "dd/mm/yyyy")`

**3. Manipulação de Números:**
*   **`FormatNumber(numero, casas_decimais, separador_decimal, separador_milhar)`**: Formata um número com casas decimais e separadores.
    *   Ex: `FormatNumber(15000, 2, ",", ".")` -> "15.000,00"
    *   Note: A ordem dos separadores (decimal vs. milhar) é crucial e pode variar por localidade/função.

**4. Princípios Gerais e Melhores Práticas:**
*   **Padronização de Dados**: Utilize essas funções para padronizar nomes, datas e números em planilhas, garantindo consistência.
*   **Integração de Dados**: Dados padronizados são essenciais para integrações (ex: APIs, onde formatos específicos são exigidos, como adicionar "55" a números de telefone).
*   **Exploração Ativa**: Pratique e experimente as funções para solidificar o aprendizado.

---

## 📘 06 Módulo 6 - Conceitos intermediários/001 Conceitos

Aqui estão os Primeiros Princípios da aula sobre Parse JSON:

*   **JSON (JavaScript Object Notation):**
    *   Padrão de formatação de dados para troca de informações entre sistemas.
    *   Objetivo: Estruturar dados de forma padronizada.

*   **Parse JSON:**
    *   Processo de analisar, entender e organizar dados.
    *   Função: Transformar uma estrutura de dados desorganizada (geralmente uma string JSON) em dados estruturados e utilizáveis.
    *   Permite extrair e manipular informações de forma eficiente.

*   **Aplicação Prática (Exemplo Make.com):**
    *   Módulo: "Parse JSON" (encontrado na categoria "JSON").
    *   Entrada: Uma "JSON string" (dados brutos, não estruturados).
    *   Saída: Dados organizados e separados em campos acessíveis.
    *   Ação: Utilize o template fornecido no Make.com, execute o módulo ("Run this module only") para visualizar a transformação de dados desorganizados em estruturados.

*   **Benefício Central:**
    *   Viabiliza o trabalho e a manipulação de dados complexos para automações avançadas.

---

## 📘 07 Módulo 7 - Iterator e Aggregator/001 Iterator

### Iterator: Princípios Fundamentais

1.  **Conceito Central:** O Iterator é uma ferramenta para processar elementos individuais dentro de uma coleção (array) de dados, tratando cada item separadamente.

2.  **Mecanismo:**
    *   Recebe um array (lista de itens) como entrada.
    *   Quebra esse array em "bundles" (pacotes) individuais, onde cada bundle representa um único elemento do array original.
    *   Permite que módulos subsequentes no fluxo de trabalho processem cada um desses bundles de forma isolada.

3.  **Casos de Uso Comuns:**
    *   Separar múltiplos anexos de um e-mail para processamento individual.
    *   Processar cada linha de uma planilha, cada item de uma lista de produtos, ou cada registro de um banco de dados.

4.  **Implementação (Exemplo Make.com):**
    *   **Localização:** Módulo `Iterator` (geralmente encontrado em `Flow Control`).
    *   **Configuração:**
        *   Conectar o Iterator a um módulo que produz um array de dados (ex: um módulo Google Sheets que lê várias linhas, um módulo de API que retorna uma lista de objetos).
        *   Selecionar o array específico que o Iterator deve processar.
    *   **Fluxo de Exemplo:**
        1.  **Módulo de Origem:** Google Sheets - "Read a Row(s)" (retorna um array de linhas).
        2.  **Módulo de Processamento:** Iterator (recebe o array do Google Sheets).
        3.  **Módulo de Destino:** Google Sheets - "Add a Row" (recebe cada bundle individual do Iterator e adiciona uma nova linha para cada um).
    *   **Mapeamento de Campos:** Ao configurar módulos após o Iterator, mapeie os campos diretamente da saída do Iterator (ex: `Iterator.Nome`, `Iterator.Preferência Alimentar`).

5.  **Benefício Chave:** Habilita a manipulação granular de dados, permitindo aplicar ações específicas a cada item de uma coleção, em vez de tratar a coleção como um todo.

---

## 📘 07 Módulo 7 - Iterator e Aggregator/002 Aggregator Text

Aqui estão os princípios fundamentais da aula:

*   **Iterator:**
    *   **Propósito:** Processar cada item de uma coleção (bundle) individualmente.
    *   **Saída:** Bundles separados, cada um contendo todos os campos originais.
    *   **Uso:** Ponto de partida para manipular listas de dados.

*   **Array Aggregator:**
    *   **Propósito:** Selecionar e agrupar campos *específicos* da saída de um Iterator em uma nova estrutura de array.
    *   **Configuração:** Escolher o módulo de origem (ex: Iterator) e os campos desejados (ex: nome, preferência de dieta).
    *   **Saída:** Um array contendo apenas os dados dos campos selecionados para cada item.
    *   **Uso:** Filtrar e extrair um subconjunto de dados (colunas) de uma lista maior.

*   **Text Aggregator:**
    *   **Propósito:** Combinar múltiplos campos de texto em uma única string formatada.
    *   **Configuração:** Escolher o módulo de origem, definir a estrutura do texto (ex: `nome` + `-` + `preferência musical`) e especificar a separação de linhas (ex: `New Row`).
    *   **Saída:** Uma única string de texto onde os dados agregados são formatados conforme especificado, frequentemente com cada item em uma nova linha.
    *   **Uso:** Criar resumos, listas formatadas ou mensagens personalizadas concatenando diferentes pontos de dados.

*   **Lógica de Fluxo:**
    *   **Iterator:** Organiza as informações em itens individuais.
    *   **Array Aggregator:** Separa e agrupa apenas os dados desejados de cada item.
    *   **Text Aggregator:** Junta e formata textos de múltiplos itens em uma única saída.

*   **Melhor Prática:**
    *   Sempre "clique nos bundles" para visualizar a saída de cada módulo e entender a lógica do fluxo de dados.

---

## 📘 07 Módulo 7 - Iterator e Aggregator/003 Aggregator Numeric

Aqui estão os princípios fundamentais da aula:

*   **Objetivo:** Obter a média da temperatura máxima diária de uma cidade e registrá-la em uma planilha Google Sheets.

*   **Módulos Essenciais e Funções:**
    *   **Módulo de Previsão do Tempo (ex: `Get Daily Weather Forecast`):**
        *   **Função:** Coletar dados de temperatura para uma cidade específica (ex: Londres).
        *   **Saída:** Gera múltiplos "bundles" (pacotes de dados), cada um contendo informações como temperatura máxima.
    *   **`Numeric Aggregator`:**
        *   **Função:** Calcular uma agregação numérica (ex: média) a partir de múltiplos bundles de dados.
        *   **Configuração:**
            *   `Source Model`: O output do módulo de previsão do tempo.
            *   `Function`: `Average` (Média).
            *   `Value`: O campo numérico a ser agregado (ex: `Maximum Temperature`).
        *   **Princípio:** Consolida múltiplos valores em um único resultado agregado.
    *   **`Google Sheets Add a Row`:**
        *   **Função:** Adicionar uma nova linha a uma planilha Google Sheets.
        *   **Configuração:** Requer a seleção da conta Google, link da planilha e nome da aba.
    *   **`Format Date`:**
        *   **Função:** Formatar uma data para um padrão específico.
        *   **Configuração:**
            *   `Input`: Data a ser formatada (ex: `Now` para a data atual).
            *   `Format`: Padrão desejado (ex: `DD/MM/YYYY`).
    *   **`Format Number`:**
        *   **Função:** Formatar um número com casas decimais e separador específico.
        *   **Configuração:**
            *   `Input`: O número a ser formatado (ex: o resultado do `Numeric Aggregator`).
            *   `Decimal Places`: Número de casas decimais (ex: 2).
            *   `Decimal Separator`: Caractere separador (ex: vírgula `,`).

*   **Fluxo de Trabalho e Mapeamento de Dados:**
    1.  **Coleta:** Obtenha os dados de temperatura diária.
    2.  **Agregação:** Calcule a média da temperatura máxima usando o `Numeric Aggregator` sobre os bundles recebidos.
    3.  **Formatação:**
        *   Formate a data atual.
        *   Formate o resultado da média da temperatura (2 casas decimais, separador de vírgula).
    4.  **Escrita:** Mapeie os dados formatados para as colunas corretas na planilha Google Sheets (ex: Coluna A para Data, Coluna B para Média da Temperatura).
    5.  **Validação:** Sempre execute o cenário para verificar erros e a saída correta na planilha.

*   **Princípios Chave:**
    *   **Bundles de Dados:** Entender que módulos podem gerar múltiplos bundles e como agregadores os processam é fundamental.
    *   **Mapeamento Explícito:** Sempre mapeie explicitamente os campos de entrada e saída para evitar erros.
    *   **Transformação de Dados:** Utilize módulos de formatação para garantir que os dados estejam no formato correto para o destino final.
    *   **Input/Output:** Compreender o que cada módulo recebe como entrada e o que ele produz como saída é crucial para construir fluxos complexos.

---

## 📘 08 Módulo 8 - Bugando a mente com as funções/001 Replace

### Fórmulas e Funções Essenciais: `Replace`

*   **Princípio:** Fórmulas otimizam processos, reduzem o número de operações e manipulam dados de forma eficiente.
*   **Função:** `Replace` (Substituir).
*   **Propósito:** Trocar uma substring específica dentro de uma string por outra.
*   **Sintaxe:** `Replace(texto_original, texto_a_substituir, novo_texto)`
    *   `texto_original`: A string onde a substituição será feita.
    *   `texto_a_substituir`: A substring que se deseja encontrar e substituir.
    *   `novo_texto`: A substring que substituirá o `texto_a_substituir`.
*   **Exemplos de Uso:**
    *   `Replace("Oi, mundo", "Oi", "Olá")` resulta em `"Olá, mundo"`.
    *   `Replace("15.000", ".", ",")` resulta em `"15,000"` (útil para padronização de decimais).
*   **Benefícios/Melhores Práticas:**
    *   **Correção de Dados:** Padronizar e corrigir inconsistências em dados de planilhas (ex: delimitadores, erros de digitação).
    *   **Manipulação de Strings:** Transformar formatos de texto conforme a necessidade do processo.
    *   **Eficiência:** Evita múltiplas operações manuais ou lógicas complexas para substituições simples.
    *   **Analogia:** Funciona de forma similar à função "Localizar e Substituir" de softwares como Excel.

---

## 📘 08 Módulo 8 - Bugando a mente com as funções/002 Split + Get

Aqui estão os princípios fundamentais da aula:

*   **Função `SPLIT`:**
    *   **Propósito:** Dividir (quebrar) uma string em múltiplas partes.
    *   **Mecanismo:** Utiliza um `delimitador` para identificar os pontos de quebra.
    *   **Delimitadores Comuns:** Vírgula (`,`), espaço (` `).
    *   **Resultado:** Gera uma lista ou conjunto de partes da string original.
    *   **Exemplo:** `SPLIT("John,George,Paul", ",")` resulta em "John", "George", "Paul".
    *   **Exemplo:** `SPLIT("Nome Sobrenome", " ")` resulta em "Especialista", "Fluki", "Sobrenome".

*   **Combinando `SPLIT` com `GET`:**
    *   **Propósito:** Acessar diretamente uma parte específica do resultado do `SPLIT` sem etapas intermediárias.
    *   **Sintaxe (conceitual):** `GET(SPLIT(string, delimitador), posição)`
    *   **Posição:** Indica qual parte do resultado você deseja (ex: `1` para a primeira, `2` para a segunda).
    *   **Exemplo:** Para obter "Especialista" de "Nome Sobrenome": `GET(SPLIT("Nome Sobrenome", " "), 1)`.
    *   **Exemplo:** Para obter "Sobrenome": `GET(SPLIT("Nome Sobrenome", " "), 3)`.

*   **Melhor Prática e Economia de Dados:**
    *   Combinar `SPLIT` e `GET` em uma única operação otimiza o processamento.
    *   Evita a necessidade de criar uma lista intermediária completa e depois selecionar um item, economizando recursos e operações.

---

## 📘 08 Módulo 8 - Bugando a mente com as funções/003 Sort + Get

Aqui estão os princípios fundamentais da aula:

*   **Funções Essenciais de Manipulação de Dados:**
    *   `Sort()`: Ordena coleções de dados (arrays de objetos).
    *   `Get()`: Extrai um valor específico de uma coleção ou objeto.
    *   `Split()`: (Revisão) Divide uma string em partes para extração.

*   **Dot Notation (`.`) para Acesso a Propriedades:**
    *   Utilizado para acessar propriedades aninhadas dentro de objetos em uma coleção (ex: `item.price`, `item.name`).
    *   **Regra Crítica:** É *case-sensitive*. Erros de maiúsculas/minúsculas causarão falha.

*   **Cenário de Uso (Exemplo Prático):**
    *   **Objetivo:** Ordenar itens de um carrinho de compras por preço (decrescente) e, em seguida, identificar o nome do item mais caro.

*   **Fluxo de Implementação (Passos Acionáveis):**
    1.  **Preparação de Dados:** Utilize um módulo `Parse JSON` para converter strings JSON em objetos manipuláveis.
    2.  **Ordenação de Dados (`Sort`):**
        *   **Módulo:** `Set Multiple Variables`.
        *   **Sintaxe:** `Sort(colecao_de_itens, 'direcao_ordenacao', 'propriedade.para.ordenar')`
        *   **Exemplo:** `Sort(items, 'desc', 'item.price')` para ordenar a coleção `items` em ordem decrescente pelo campo `price` de cada `item`.
    3.  **Extração de Valor (`Get`):**
        *   **Módulo:** `Set Multiple Variables`.
        *   **Sintaxe:** `Get(colecao_ordenada, 'propriedade.a.extrair')`
        *   **Exemplo:** `Get(sorted_items, 'item.name')` para obter o `name` do primeiro item da `colecao_ordenada` (que, após o `Sort` decrescente por preço, será o item mais caro).

*   **Melhores Práticas:**
    *   Compreender a estrutura dos dados de entrada (JSON) é fundamental para aplicar corretamente o `Sort` e o `Get`.
    *   A prática com exercícios é crucial para solidificar o entendimento e a aplicação dessas funções.

---

## 📘 08 Módulo 8 - Bugando a mente com as funções/004 Map

Aqui estão os princípios fundamentais da aula:

*   **Prática Essencial:** A prática imediata é crucial para fixar o conhecimento e evitar erros.
*   **Função `MAP` (ou `MEP`):** Utilizada para filtrar e extrair dados específicos de uma coleção (array de objetos).
*   **Objetivo:** Selecionar itens de uma coleção que atendam a uma condição específica.
*   **Sintaxe da Função `MAP` (Conceitual):**
    *   `MAP(coleção; campo_para_extrair; campo_para_filtrar; valor_do_filtro)`
    *   **`coleção`**: A variável contendo a lista de itens.
    *   **`campo_para_extrair`**: A propriedade de cada item que se deseja retornar (ex: `item_name`).
    *   **`campo_para_filtrar`**: A propriedade de cada item a ser usada para a condição de filtro (ex: `item_color`).
    *   **`valor_do_filtro`**: O valor que a propriedade de filtro deve corresponder (ex: `"black"`).
*   **Notação de Ponto (`.`):** Use para acessar propriedades de objetos dentro da coleção (ex: `item_name`, `item_color`).
*   **Aplicação:** Fundamental para construir automações que exigem manipulação, filtragem e transformação de dados em listas ou arrays.
*   **Lógica:** Compreender a lógica de iteração e filtragem é mais importante do que memorizar a sintaxe exata.

---

## 📘 08 Módulo 8 - Bugando a mente com as funções/005 Sum

### Conceitos Centrais: Soma de Valores

*   **Propósito:** Realizar a adição de um ou mais valores numéricos.
*   **Função/Operador:**
    *   Utiliza-se a função `SUM` (SOMA).
    *   Alternativamente, pode-se usar o operador `+` para adição direta.

### Sintaxe e Exemplos:

*   **Sintaxe da Função `SUM`:** `SUM(valor1, valor2, ...)`
    *   Os valores a serem somados são passados como argumentos dentro de parênteses.
*   **Exemplos Práticos:**
    *   `SUM(1, 1, 1)` resulta em `3`.
    *   `SUM(2, 2)` resulta em `4`.
    *   `SUM(5, 10)` resulta em `15`.

### Casos de Uso:

*   **Soma de Itens Individuais:** Adicionar valores específicos.
*   **Soma de Colunas:** Calcular a soma total de todos os valores em uma coluna (análogo à funcionalidade do Excel).

### Boas Práticas:

*   Sempre utilize parênteses para delimitar os argumentos da função `SUM`.

---

## 📘 09 Módulo 9 - Tools/001 Set variable + Set Multiple Variable

Aqui estão os princípios fundamentais da aula:

*   **`Set Variable` e `Set Multiple Variables`:** Módulos para manipular e formatar dados no início de uma automação.
*   **Propósito Central:**
    *   **Reusabilidade:** Definir e formatar variáveis complexas uma única vez (ex: `formatDate(now; "DD/MM/YYYY")` para uma variável `data`).
    *   **Manutenibilidade:** Centralizar a lógica de formatação. Alterações futuras são feitas em um só lugar, propagando-se para todos os módulos subsequentes que usam essa variável.
*   **Melhor Prática:** Sempre usar `Set Multiple Variables`.
    *   **Flexibilidade:** Permite adicionar múltiplas variáveis facilmente, mesmo que inicialmente você precise apenas de uma. Evita a necessidade de trocar de módulo se a complexidade aumentar.
*   **Exemplos de Uso:**
    *   `data`: `formatDate(now; "DD/MM/YYYY HH:mm")`
    *   `nome`: `capitalizeFirstLetter(nomeOriginal)`
    *   `faturamento_medio`: `formatNumber(valor; "currency")`
*   **Posicionamento:** Geralmente colocados no início do cenário de automação.
*   **Benefício Geral:** Simplifica automações complexas, reduz a duplicação de fórmulas, minimiza erros e facilita a manutenção.

---

## 📘 09 Módulo 9 - Tools/002 Sleep

*   **Conceito Central:** `eSleep` é uma função para introduzir um atraso inteligente (pausa) na execução de um fluxo ou cenário.
*   **Propósito:** Aguardar um período definido entre a execução de um módulo/cenário e o próximo.
*   **Parâmetro:** O atraso é especificado em segundos.
*   **Regra de Negócio:** O valor do atraso deve ser um número entre 1 e 300 segundos.
*   **Aplicação para Atrasos Maiores:** Para atrasos superiores a 300 segundos, encadeie múltiplos módulos `eSleep` ou use lógica para multiplicar o tempo (ex: 20 minutos = 4x `eSleep` de 300 segundos).
*   **Melhores Práticas/Casos de Uso:**
    *   Compensar o tempo de processamento de sistemas externos (ex: recuperação de vendas, processamento de pagamentos Pix que podem levar até 20 minutos).
    *   Garantir que dados estejam atualizados antes de prosseguir, evitando informações incorretas.
*   **Analogia:** Funciona como o "atraso inteligente" encontrado em plataformas como ManyChat ou Versa.

---

## 📘 10 Módulo 10 - Parse phone/001 Parse phone

Aqui estão os princípios fundamentais para a manipulação e padronização de números de telefone em automações:

*   **Problema Central: Inconsistência de Formatos.**
    *   Diferentes plataformas (ex: Hotmart) enviam números de telefone em múltiplos formatos (ex: `999999999`, `(11) 9876-5432`, `+55 11 9876-5432`).
    *   Essa diversidade impede o uso direto em sistemas automatizados e APIs.

*   **Solução: Módulo de Parseamento de Telefone.**
    *   Utilize ferramentas ou módulos dedicados (ex: "parse phone number" em plataformas de automação) para normalizar os números.
    *   **Processo:**
        1.  **Entrada:** Forneça o número de telefone bruto.
        2.  **Configuração:** Especifique o país de origem (ex: "Brasil") para o parseamento correto.
        3.  **Saída:** Receba o número formatado em um padrão universal.

*   **Padrão Recomendado: E.164.**
    *   **Formato:** `+ [Código do País] [DDD] [Número]` (ex: `+5511987654321`).
    *   **Propósito:** É o padrão global para telecomunicações, essencial para:
        *   Disparos de API oficiais (WhatsApp Business API, SMS).
        *   Integração com CRMs e sistemas de comunicação.
        *   Armazenamento em bancos de dados e planilhas (ex: Google Sheets) para uso automatizado.

*   **Benefícios Essenciais:**
    *   **Consistência de Dados:** Garante um formato único e utilizável para todos os números.
    *   **Prontidão para Automação:** Prepara os dados para integração direta com APIs e sistemas de disparo, eliminando a necessidade de manipulação manual.
    *   **Redução de Erros:** Minimiza falhas em comunicações automatizadas causadas por formatos inválidos.
    *   **Eficiência Operacional:** Simplifica o fluxo de trabalho, removendo a necessidade de fórmulas complexas ou limpeza manual de dados.
    *   **Qualidade dos Dados:** Aumenta a confiabilidade das informações de contato para comunicação e análise.

---

## 📘 11 Módulo 11 - HTTP e API/001 HTTP + API

Aqui estão os conceitos destilados:

*   **HTTP (Hypertext Transfer Protocol):**
    *   Protocolo fundamental para transferência de dados na web.
    *   **Uso no Make:** Quando um aplicativo não possui integração nativa no Make, o módulo HTTP é usado para configurar automações e conectar sistemas.
    *   Exemplo: Conectar o Make ao "Bot Conversa" via HTTP, pois não há um aplicativo direto no Make.

*   **API (Application Programming Interface):**
    *   Conjunto de regras que permite a comunicação entre diferentes softwares/aplicações.
    *   Define métodos e dados que um programa pode usar para solicitar informações de outro.
    *   **Função:** Atua como uma "linguagem" ou "tradutor" para que aplicações distintas (ex: LinkedIn, Mailchimp) possam interagir, mesmo que falem "linguagens" diferentes.
    *   Exemplo: Um aplicativo de clima usa uma API para obter dados meteorológicos de um serviço externo.

*   **API Endpoint:**
    *   Uma URL específica que serve como "porta" para um serviço ou recurso particular dentro de uma API.
    *   Cada Endpoint permite um tipo específico de solicitação (ex: obter temperatura atual).
    *   **Regra:** Se uma API possui um Endpoint, é possível conectar ferramentas a ela.
    *   **Conexão com HTTP:** Quando um aplicativo não está no Make, mas possui uma API com Endpoints, o módulo HTTP do Make é utilizado para se conectar a esses Endpoints.

*   **Resumo da Conexão:**
    1.  **HTTP** é o protocolo de transporte de dados.
    2.  **API** define as regras de comunicação entre aplicações.
    3.  **API Endpoint** é o endereço específico (URL) para acessar um serviço da API.
    4.  No Make, se uma integração direta não existe, use o módulo HTTP para interagir com os API Endpoints de um serviço.

*   **Melhor Prática:**
    *   Concentre-se na função e no que cada conceito conecta, não apenas nas terminologias técnicas.
    *   Se houver dúvidas, seja proativo e pesquise (Google, ChatGPT).

---

## 📘 11 Módulo 11 - HTTP e API/002 HTTP Request

## Primeiros Princípios: Tipos de Requisições HTTP

*   **HTTP Request Types:** Métodos para interagir com recursos em um servidor web.
*   **GET:**
    *   **Propósito:** Obter/recuperar informações de um recurso.
    *   **Uso:** Solicitar dados (ex: tempo, detalhes de um produto).
    *   **Característica:** Não deve ter efeitos colaterais no servidor (idempotente e seguro).
*   **POST:**
    *   **Propósito:** Enviar dados para um recurso, geralmente para criar ou atualizar.
    *   **Uso:** Submeter formulários, enviar mensagens, criar novos registros.
    *   **Característica:** Pode ter efeitos colaterais no servidor (modifica o estado).
*   **Outros Métodos (Mencionados):**
    *   **PUT:** Atualizar um recurso existente ou criar um novo se não existir, com um URI específico.
    *   **DELETE:** Remover um recurso específico.
*   **Foco Prático:** GET e POST são os tipos mais comuns e essenciais para a maioria das interações.

---

## 📘 11 Módulo 11 - HTTP e API/003 HTTP Request

Aqui estão os princípios fundamentais da aula:

1.  **Objetivo Central:** Automatizar o envio de cupons de desconto por e-mail para assinantes de newsletter, registrando o sucesso da operação em uma planilha.

2.  **Fonte de Dados (Google Sheets):**
    *   **Estrutura:** Planilha com colunas `Nome`, `Sobrenome`, `Email`, `Inscrito na Newsletter`, `Sucesso`.
    *   **Módulo `Search Rows`:** Usado para buscar dados.
    *   **Filtro Essencial:** Filtrar linhas onde `Inscrito na Newsletter` é igual a "Sim" (case-insensitive) para processar apenas assinantes.

3.  **Estrutura de Dados Padronizada (JSON):**
    *   **Módulo `Create JSON`:** Define um formato de saída consistente para os dados.
    *   **Finalidade:** Garante que os módulos subsequentes recebam os dados no formato esperado (ex: `primeiro nome`, `sobrenome`, `email`).
    *   **Mapeamento:** Conectar os campos do Google Sheets aos campos definidos na estrutura JSON.

4.  **Integração com Sistemas Externos (HTTP/Webhook):**
    *   **Módulo `HTTP - Make a request`:** Usado para enviar dados para um endpoint externo (neste caso, um `Webhooks - Custom Webhook`).
    *   **Configuração:** Método `POST`, `Body Type` `Raw` com `JSON`, enviando a `JSON String` gerada anteriormente.
    *   **`Webhooks - Custom Webhook`:** Pode atuar como um receptor de dados para outro cenário ou sistema.
    *   **Melhor Prática:** No Webhook, usar `Redetermine data structure` para garantir que ele entenda corretamente o formato dos dados recebidos.

5.  **Registro de Status (Google Sheets - Update a Row):**
    *   **Módulo `Update a Row`:** Atualiza a linha original na planilha.
    *   **Campo de Atualização:** Coluna `Sucesso`.
    *   **Valor:** O `Status Code` da requisição HTTP (ex: `200` para sucesso, `400` para erro) é mapeado para esta coluna, indicando o resultado da operação.

6.  **Envio de E-mail Personalizado:**
    *   **Módulo `Email - Send an email`:** Conectado a uma conta Google.
    *   **Destinatário:** Mapear o campo `email` da estrutura de dados.
    *   **Assunto:** Título claro (ex: "Você ganhou um desconto de 20%").
    *   **Corpo (HTML):**
        *   Permite formatação rica e personalização.
        *   Usar tags `<p>` para parágrafos.
        *   Personalizar com campos mapeados (ex: `Oi, {{primeiro nome}}`).
        *   Incluir o cupom de desconto e mensagem de encerramento.

7.  **Códigos de Status HTTP Essenciais:**
    *   `200`: Sucesso (requisição processada com êxito).
    *   `404`: Not Found (recurso não encontrado).
    *   Conhecer esses códigos é fundamental para depuração e registro de sucesso/falha.

---

## 📘 12 Módulo 12 - Webhooks/001 Webhook

Aqui estão os princípios fundamentais sobre Webhooks:

*   **Webhook:** Método para receber notificações de outra aplicação *assim que um evento ocorre*.
    *   Natureza: Push-based (a aplicação remetente "empurra" a notificação).
*   **Contraste com HTTP (Solicitação-Resposta):**
    *   **HTTP:** Cliente *faz* uma solicitação ao servidor e espera uma resposta.
    *   **Webhook:** Aplicação *recebe* solicitações/notificações de outra aplicação. É o inverso do fluxo tradicional de "fazer" solicitações HTTP.
*   **Modos de Notificação:**
    *   **Instant (Webhook):** Recebe dados em tempo real, imediatamente após o evento.
    *   **Polling (Alternativa):** Verificação em intervalos definidos (ex: diário, quinzenal). Webhooks são a implementação do modo "Instant".
*   **Tipos/Funcionalidades:**
    *   **Custom Webhook:** Cria uma URL única para a qual qualquer dado pode ser enviado.
    *   **Response Webhook:** (Mencionado para uso prático, implica capacidade de resposta).
*   **Exemplo Prático:** Hotmart envia um Webhook para o Make, permitindo que o Make receba dados de eventos da Hotmart em tempo real.

---

## 📘 12 Módulo 12 - Webhooks/002 Webhook

Aqui estão os princípios fundamentais da aula:

**1. Estrutura de Dados (Google Sheets):**
*   Crie uma planilha "Desconto" com as colunas:
    *   `código promocional` (texto)
    *   `percentual de desconto` (número)
    *   `ativo` (Sim/Não)
*   Popule com dados de exemplo, incluindo cupons ativos e inativos.

**2. Gatilho de Entrada (Webhook Customizado - Make):**
*   Use o módulo "Custom Webhook" no Make.
*   Nomeie o webhook (ex: "Desconto").
*   O Make aguardará uma requisição para determinar a estrutura dos dados de entrada.
*   **Ação:** Envie uma requisição de teste para a URL do webhook com parâmetros na query string (ex: `?codigo_promocional=Verao50&cor=azul`) para que o Make aprenda a estrutura.

**3. Busca de Dados (Google Sheets - Search Rows):**
*   Conecte ao Google Sheets.
*   Use a ação "Search Rows".
*   Selecione a planilha "Desconto" e a aba correta.
*   Marque "Has headers".
*   **Filtro:** Configure para que a coluna `código promocional` da planilha seja `igual a` o `código promocional` recebido pelo Webhook.

**4. Lógica Condicional (Router):**
*   Adicione um módulo "Router" após a busca no Google Sheets para criar caminhos diferentes com base nas condições.

**5. Caminho 1: Cupom Ativo (Sucesso):**
*   **Filtro na rota:** `ativo` (do Google Sheets) `igual a` `Sim`.
*   **Ação (Webhook Response):**
    *   Status: `200` (OK).
    *   Corpo da Resposta: Mensagem de sucesso, incluindo dinamicamente o `código promocional` e o `percentual de desconto` encontrados na planilha.
    *   Ex: "O código promocional [código promocional] está ativo e seu desconto é de [percentual de desconto]%."

**6. Caminho 2: Cupom Inativo (Erro Cliente):**
*   **Filtro na rota:** `ativo` (do Google Sheets) `igual a` `Não`.
*   **Ação (Webhook Response):**
    *   Status: `400` (Bad Request).
    *   Corpo da Resposta: Mensagem de erro informando que o cupom não está mais ativo.
    *   Ex: "Desculpe, este código promocional não está mais ativo."

**7. Tratamento de Erro/Fallback (Cupom Não Encontrado):**
*   Para lidar com cupons que não existem na planilha, uma rota adicional ou um fallback no router pode ser configurado.
*   **Melhor Prática:** Um filtro para `Total number of bundles` (do módulo Google Sheets Search Rows) `igual a` `0` indicaria que nenhum cupom foi encontrado. Esta rota também poderia retornar um `400` com uma mensagem apropriada (ex: "Código promocional inválido."). (A aula demonstra uma abordagem mais fluida para este ponto, mas esta é a prática recomendada).

**8. Teste e Validação:**
*   Ative o cenário no Make.
*   Envie requisições para o Webhook com diferentes códigos promocionais (ativos, inativos, inexistentes) para testar todos os caminhos.
*   Observe as respostas HTTP e o conteúdo das mensagens.

**Princípios Chave:**
*   **Webhooks:** Ponto de entrada para automações acionadas externamente.
*   **Google Sheets como DB Simples:** Armazenamento eficaz para dados estruturados.
*   **Filtros:** Essenciais para direcionar o fluxo de dados com base em condições.
*   **Routers:** Permitem ramificações lógicas complexas em cenários.
*   **Webhook Response:** Módulo para enviar feedback personalizado ao sistema que acionou o webhook.
*   **Códigos de Status HTTP:** Use `200` para sucesso e `400` (ou `404`) para erros do cliente/dados não encontrados.
*   **Mapeamento de Dados:** Use variáveis de módulos anteriores para criar respostas dinâmicas.

---

## 📘 13 As automações/001 Enviando mensagem de whatsapp através de um formulário de cadastro do Facebook Ads

Aqui estão os princípios fundamentais da automação apresentada:

*   **Gatilho de Evento Externo:** A automação inicia com um webhook do Facebook Lead Ads, capturando dados de formulários preenchidos em anúncios.
*   **Preparação do Ambiente:**
    *   **Planilha Google Sheets:** Utilize uma planilha modelo para registrar os dados dos leads.
    *   **Blueprint Make:** Importe um blueprint pré-configurado no Make para acelerar a criação do cenário.
*   **Validação e Formatação de Dados:**
    *   **Telefone:** Valide e formate números de telefone (ex: adicionar código de país, DDD, e o '9' para celulares brasileiros) para garantir a usabilidade em sistemas de comunicação.
    *   **Nome:** Parseie nomes completos para extrair primeiro nome e sobrenome separadamente.
*   **Gerenciamento de Variáveis:** Defina variáveis no Make para armazenar dados processados (DDD, telefone formatado, nome, sobrenome, data) e credenciais (API Key do Bot Conversa), facilitando a reutilização e organização.
*   **Persistência de Dados:**
    *   **Google Sheets:** Registre todos os dados do lead (nome, telefone, e-mail, detalhes da campanha, etc.) em uma linha da planilha para histórico e análise.
*   **Gestão de Contatos (Opcional):**
    *   **Google Contacts:** Adicione o lead aos seus contatos Google, podendo atribuí-lo a grupos específicos (ex: "lançamento zero").
*   **Integração com Plataforma de Comunicação:**
    *   **Bot Conversa (WhatsApp API):** Adicione o lead como contato na plataforma.
    *   **Busca de ID:** Recupere o ID único do lead no Bot Conversa, essencial para ações subsequentes.
    *   **Envio de Fluxo:** Envie um fluxo de mensagens WhatsApp pré-definido para o lead, utilizando o ID recuperado e o ID do fluxo desejado.
*   **Robustez e Tratamento de Erros:** Utilize módulos "Commit" para garantir que o cenário continue a execução mesmo em caso de erros específicos em módulos intermediários (ex: falha ao adicionar contato), evitando a interrupção completa da automação.
*   **Ativação:** Ative o cenário no Make para que a automação seja executada automaticamente a cada novo lead.

---

## 📘 13 As automações/002 Como integrar o Manychat com a Leadlovers

Aqui estão os princípios fundamentais para a integração ManyChat com LeadLovers:

### 1. Objetivo Central
*   Capturar leads no ManyChat e enviá-los automaticamente para o LeadLovers.

### 2. Configuração no ManyChat
*   **Fluxo:** Crie um fluxo normal no ManyChat.
*   **Opt-in:** Adicione um bloco de "Opt-in do Instagram" (ou outro canal de sua escolha).
*   **Coleta de Dados:**
    *   Solicite o e-mail do usuário.
    *   **Campo Personalizado:** Salve o e-mail coletado em um campo personalizado do ManyChat (ex: `lovers_email`). Este campo será usado para mapear os dados.
*   **Ação Externa:** Adicione um bloco de "Requisição Externa" (External Request) após a coleta do e-mail.

### 3. Integração com LeadLovers (Requisição Externa)
*   **Método HTTP:** `POST`.
*   **Endpoint da API (URL):**
    *   **Estrutura:** `https://[SEU_DOMINIO_LEADLOVERS]/webapi/Lead?token=[SEU_TOKEN_LEADLOVERS]`
    *   **Domínio:** Substitua `[SEU_DOMINIO_LEADLOVERS]` pelo seu domínio específico (ex: `minhalista.leadlovers.com`).
    *   **Caminho Relativo:** `/webapi/Lead` é o caminho para inserir um novo lead, conforme documentação do LeadLovers.
    *   **Autenticação (Token):** O `[SEU_TOKEN_LEADLOVERS]` é um token gerado dentro da sua conta LeadLovers (geralmente em "Minha Conta" > "Integrações"). Ele é passado como parâmetro de query (`?token=`).
*   **Corpo da Requisição (JSON Payload):**
    *   **Formato:** `application/json`.
    *   **Estrutura Mínima Obrigatória:**
        ```json
        {
          "Email": "[LOVERS][EMAIL]",
          "MachineCode": 15,
          "EmailSequenceCode": 15,
          "SequenceLevelCode": 7
        }
        ```
    *   **Mapeamento de Dados:**
        *   `"Email": "[LOVERS][EMAIL]"`: Substitua `[LOVERS][EMAIL]` pela referência do campo personalizado do ManyChat que armazena o e-mail (ex: `{{lovers_email}}`).
    *   **Campos Específicos LeadLovers:**
        *   `MachineCode`, `EmailSequenceCode`, `SequenceLevelCode` são códigos específicos da sua conta LeadLovers (máquina, sequência de e-mails e nível da sequência). Obtenha esses valores diretamente do seu painel LeadLovers.
    *   **Regra JSON:** A última chave-valor de um objeto JSON não deve ter vírgula no final. Remova campos não obrigatórios ou não utilizados para manter o payload limpo.

### 4. Teste e Verificação
*   **Teste no ManyChat:** Use a funcionalidade de teste do ManyChat (ex: via celular) para simular a interação.
*   **Validação:**
    *   Confirme que o e-mail é coletado e salvo no campo personalizado do ManyChat.
    *   Verifique se a requisição externa é disparada.
    *   (Idealmente) Verifique no LeadLovers se o lead foi cadastrado com sucesso.

### 5. Princípios Gerais de Integração via API
*   **Documentação da API:** Sempre consulte a documentação da API do serviço externo (LeadLovers, neste caso) para entender:
    *   Endpoints disponíveis.
    *   Métodos HTTP (GET, POST, PUT, DELETE).
    *   Parâmetros obrigatórios e opcionais (query, path, body).
    *   Formato do corpo da requisição (JSON, XML, form-data).
    *   Métodos de autenticação (tokens via query, headers, OAuth).
*   **Headers:** Algumas APIs exigem cabeçalhos específicos (ex: `Content-Type: application/json`, `Authorization: Bearer <token>`). O LeadLovers, neste caso, usa o token na URL.
*   **Mapeamento de Campos:** Garanta que os dados coletados no ManyChat correspondam aos campos esperados pela API externa.

---

## 📘 13 As automações/003 Confirmação de agendamento usando o Google Calendar

Aqui estão os princípios fundamentais da aula:

**1. Extração e Transformação de Dados de Eventos do Google Calendar:**
*   **Gatilho:** Evento confirmado no Google Calendar (filtrado por status "Confirmado" e data "a partir de hoje").
*   **Desafio:** Dados do participante (nome, e-mail, telefone) vêm como uma única string desestruturada no campo `Description` do evento, frequentemente separados por quebras de linha (`\n`).
*   **Solução:**
    *   **Padronização:** Use o módulo `JSON > Transform to JSON` para converter a string `Description` em um formato JSON, facilitando a manipulação.
    *   **Decomposição:** Utilize a função `split(texto, delimitador)` para quebrar a string em partes menores.
        *   Ex: `split(Description, '\n')` para separar por linhas.
        *   Ex: `split(nome_completo, ' ')` para separar nome e sobrenome por espaço.
    *   **Acesso:** Use a função `get(array, índice)` para acessar elementos específicos de um array resultante do `split`.
        *   Ex: `get(split(Description, '\n'), 3)` para obter a 3ª linha (e-mail).
    *   **Formatação:** Aplique funções como `capitalize(texto)` (primeira letra maiúscula) e `lowercase(texto)` (tudo minúsculo) para padronizar os dados extraídos.
    *   **Melhor Prática:** Construa e teste as fórmulas de extração passo a passo usando o módulo `Set Multiple Variables` para inspecionar o resultado de cada etapa.

**2. Criação de Reuniões no Zoom:**
*   **Integração:** Use o módulo nativo `Zoom > Create a Meeting`.
*   **Mapeamento:**
    *   `User ID`: ID do usuário Zoom.
    *   `Summary` (Título da Reunião): Combine texto fixo com dados extraídos (Ex: "Mentoria Individual {{nome_extraido}}").
    *   `Start Date/Time`: Use a data e hora de início do evento do Google Calendar.

**3. Envio de Confirmação via WhatsApp (BotConversa):**
*   **Integração Customizada:** Como BotConversa não tem integração nativa, use o módulo `HTTP > Make a request`.
*   **Método:** `POST` (para enviar dados).
*   **URL:** Webhook de automação do BotConversa.
*   **Corpo da Requisição:** `Raw` com `Content Type: JSON`.
*   **Payload JSON:** Envie os dados extraídos (nome, telefone, link da reunião Zoom, data) em um objeto JSON.
    *   Ex: `{"nome": "{{nome_extraido}}", "telefone": "{{telefone_extraido}}", "link_zoom": "{{zoom_link}}", "data": "{{data_mentoria}}"}`
*   **Configuração BotConversa (Implícita):**
    *   Crie uma automação que receba o webhook.
    *   Mapeie os campos JSON recebidos para variáveis do BotConversa.
    *   Crie um fluxo de WhatsApp que utilize essas variáveis para enviar a mensagem de confirmação.

**4. Metodologia de Desenvolvimento de Automações:**
*   **Não Copie, Recrie:** Use templates como base, mas recrie a automação passo a passo para entender cada módulo e fórmula.
*   **Teste Incremental:** Execute o cenário após cada etapa significativa (ex: após extração de dados, após criação do Zoom) para verificar a saída e depurar erros.
*   **Fórmulas:** Entenda as funções de manipulação de texto (`split`, `get`, `capitalize`, `lowercase`) para otimizar o uso de operações e processar dados de forma eficiente.

---

## 📘 13 As automações/004 Eventos de compra por API não oficial

Aqui estão os princípios fundamentais da aula sobre automação de eventos de compra:

**1. Objetivo Central:**
*   Automatizar a comunicação com clientes baseada em eventos de compra (Hotmart) usando Make, Google Sheets e BotConversa.

**2. Ferramentas Essenciais:**
*   **Hotmart:** Fonte dos eventos de compra (via Webhook).
*   **Make (Integromat):** Orquestrador da automação, conectando Hotmart, Google Sheets e BotConversa.
*   **Google Sheets:** Base de dados para rastrear e gerenciar o status dos eventos (compras aprovadas, recuperação de vendas, reembolsos/chargebacks).
*   **BotConversa:** Plataforma de mensagens para disparar comunicações automatizadas (WhatsApp).

**3. Fluxo da Automação (Make):**
*   **Gatilho (Webhook Hotmart):** Recebe dados de eventos de compra (aprovada, aguardando pagamento, boleto/pix gerado, cancelada, abandono de carrinho, reembolso, chargeback).
*   **Processamento Inicial:**
    *   `Parse Phone Number`: Padroniza o número de telefone.
    *   `Set Multiple Variables`: Extrai e padroniza dados como nome, email, telefone, tipo de evento, data e ID da transação.
*   **Roteamento Condicional (Filtros):** Direciona o fluxo com base no tipo de evento:
    *   **Recuperação de Vendas:** Para eventos como abandono de carrinho, boleto/pix gerado, aguardando pagamento, compra cancelada.
    *   **Reembolso/Chargeback:** Para eventos de reembolso ou chargeback.
    *   **Compra Aprovada:** Para eventos de compra aprovada.
*   **Integração Google Sheets:**
    *   `Add a Row`: Adiciona dados do evento à aba correspondente na planilha (e.g., "Recuperação de Vendas", "Reembolso/Chargeback", "Compra Aprovada").
    *   `Search Rows`: Para reembolso/chargeback, busca o e-mail na aba "Compra Aprovada" para verificar compra anterior.
    *   `Delete a Row`: Se um reembolso/chargeback for encontrado para uma compra aprovada, a linha correspondente é deletada da aba "Compra Aprovada".
    *   `Update a Row`: Para compra aprovada, se o cliente estava na aba "Recuperação de Vendas", atualiza a coluna "Comprou" para indicar a conversão.
*   **Integração BotConversa (HTTP Request):** Envia dados do cliente (telefone, nome, email, tipo de evento) para um Webhook do BotConversa.

**4. Estrutura da Planilha Google Sheets:**
*   **Aba "Compra Aprovada":** `Data`, `Transaction ID`, `Nome`, `Email`, `Telefone`.
*   **Aba "Recuperação de Vendas":** `Data`, `Transaction ID`, `Nome`, `Email`, `Telefone`, `Evento de Compra`, `Comprou` (campo para indicar se converteu).
*   **Aba "Reembolso/Chargeback":** `Data`, `Transaction ID`, `Nome`, `Email`, `Telefone`, `Evento`.
*   **ID da Planilha:** Essencial para a conexão com Make, encontrado na URL da planilha.

**5. Fluxo da Automação (BotConversa):**
*   **Gatilho (Webhook):** Recebe dados do Make.
*   **Mapeamento de Dados:** Mapeia os dados recebidos para campos do usuário (e.g., `telefone` para WhatsApp, `nome` para Nome do Contato, `evento_compra` para um campo personalizado como `status_compra_gt`).
*   **Fluxos Condicionais:**
    *   **Compra Aprovada:** Se `status_compra_gt` for "purchase_approved", envia mensagem de boas-vindas e adiciona etiqueta "IDA_Compra_Aprovada".
    *   **Recuperação de Vendas (Pix/Boleto/Abandono):**
        *   `Atraso Inteligente` (e.g., 10 minutos): Aguarda para permitir a compensação do pagamento.
        *   `Condição`: Verifica se o cliente *não* possui a etiqueta "IDA_Compra_Aprovada" (evita mensagens de recuperação para quem já comprou).
        *   Se não comprou, envia mensagem de recuperação específica (Pix, Boleto, Abandono) e adiciona etiqueta relevante (e.g., "IDA_Pix", "IDA_Boleto", "IDA_RAC").
    *   **Reembolso/Chargeback:** Envia mensagem informando sobre a solicitação.
*   **Etiquetagem:** Utiliza etiquetas (`IDA_Compra_Aprovada`, `IDA_Pix`, `IDA_Boleto`, `IDA_RAC`) para segmentação e para evitar o envio de mensagens duplicadas ou irrelevantes.

**6. Melhores Práticas e Conceitos Chave:**
*   **Padronização de Dados:** Sempre padronize os dados no início do fluxo Make para consistência.
*   **Lógica Condicional:** Use filtros no Make e BotConversa para direcionar eventos e evitar comunicações inadequadas.
*   **Google Sheets como CRM Simples:** A planilha serve como um painel visual para o status do cliente e ações de vendas/recuperação.
*   **Flag "Comprou" na Recuperação:** Essencial para equipes de vendas ou automações subsequentes não contatarem clientes que já converteram.
*   **Atrasos Estratégicos:** Implemente atrasos (e.g., 10 minutos) antes de enviar mensagens de recuperação para permitir a compensação de pagamentos.
*   **Modularidade:** A estrutura da automação é adaptável para diferentes APIs (oficiais/não oficiais) e plataformas de mensagens.
*   **Blueprints:** Utilize os modelos fornecidos para Make e BotConversa para agilizar a implementação.

---

## 📘 13 As automações/005 Instagram

**Destilação da Aula: Automação de Acompanhamento de Seguidores do Instagram**

**Conceito Central:**
*   Automatizar a coleta diária de métricas de seguidores do Instagram e o envio de relatórios via WhatsApp, com registro em planilha.

**Ferramentas Essenciais:**
*   **Make (Integromat):** Plataforma de automação.
*   **Instagram:** Fonte dos dados (via módulo "Get Public User Info").
*   **Google Sheets:** Armazenamento e histórico dos dados.
*   **ZAPI (ou API de WhatsApp similar):** Envio de notificações.

**Fluxo da Automação (Primeiros Princípios):**

1.  **Obtenção de Dados do Instagram:**
    *   Módulo: `Get Public User Info` (Make).
    *   Configuração: Conectar conta Instagram, informar `User Name` do perfil a ser monitorado.
    *   Dados extraídos: `Followers Count`, `Posts Count`, `Bio`, `Following Count`, `Profile Name`, `Profile Picture URL`, `Website Link in Bio`, etc.

2.  **Registro em Planilha (Google Sheets):**
    *   Módulo: `Add a Row` (Make para Google Sheets).
    *   Planilha: Criar uma nova planilha com colunas para `Data` e `Número de Seguidores`.
    *   Mapeamento: Inserir a data atual e o `Followers Count` obtido do Instagram.

3.  **Notificação via WhatsApp:**
    *   Módulo: `Send Message` (Make para ZAPI ou API de WhatsApp).
    *   Mensagem: Personalizar com "Crescimento do Instagram [Data de Hoje]. Seu número atual de seguidores é [Followers Count]".
    *   Formatação: Utilizar função `now` para a data atual.
    *   Destinatários: Definir números de telefone para receber o alerta.

**Regras de Negócio Estruturais:**
*   **Frequência:** Automação configurada para rodar diariamente (ex: 00:01).
*   **Propósito:** Monitoramento de crescimento para social media, clientes, e análise de custo por seguidor em campanhas.

**Melhores Práticas:**
*   Manter um registro histórico em planilha para análise de tendências.
*   Personalizar a mensagem de notificação para clareza e relevância.
*   Utilizar templates fornecidos para agilizar a implementação.

---

## 📘 13 As automações/006 Lembrete de aniversário

Aqui estão os princípios fundamentais para a automação de lembretes de aniversário:

**1. Objetivo Central:**
*   Enviar mensagens de aniversário personalizadas via WhatsApp (BotConversa) para contatos de uma planilha, no dia do aniversário.

**2. Ferramentas Essenciais:**
*   **Make (Integromat):** Orquestrador da automação.
*   **BotConversa:** Plataforma de envio de mensagens WhatsApp via API.
*   **Google Sheets:** Fonte de dados dos contatos (nome, data de nascimento, telefone).
*   **Swagger UI (BotConversa):** Documentação interativa da API para entender endpoints e parâmetros.

**3. Estrutura da Planilha de Dados (Google Sheets):**
*   **Colunas Mínimas:** `nome`, `data_nascimento`, `telefone`.
*   **Formato do Telefone:** `55DDDNumero` (ex: `5511987654321`).
*   **Recomendação:** Usar nomes de colunas sem acentos e com underline (ex: `primeiro_nome`).

**4. Lógica do Fluxo no Make:**

*   **Gatilho (Schedule):** Execução diária da automação.
*   **Leitura da Planilha (Google Sheets):**
    *   Obter todas as linhas da planilha de contatos.
*   **Filtro de Aniversário (Crucial):**
    *   **Condição:** `data_nascimento` (da planilha, formatada para `DD/MM`) **igual** à `data_atual` (de hoje, formatada para `DD/MM`).
    *   **Propósito:** Garantir que a mensagem seja enviada apenas no dia correto, ignorando o ano.
*   **Formatação de Telefone:**
    *   Garantir que o número esteja no formato `55DDDNumero` para compatibilidade com a API do BotConversa.
*   **Integração BotConversa (Módulo HTTP):**
    *   **API Key:** Obter em BotConversa > Configurações > Integrações > Webhook.
    *   **Variáveis Globais (Set Multiple Variables):** Armazenar a API Key do BotConversa para reutilização e fácil atualização em todo o fluxo.
    *   **Roteador (Router):**
        *   **Caminho 1: Contato Existe?**
            *   **Ação:** HTTP GET para `/api/v1/webhook/subscriber` (buscar contato pelo telefone).
            *   **Filtro:** `status code = 200` (sucesso) E `ID do contato existe` (no retorno da API).
            *   **Se existe:** Atualizar contato (nome, campos personalizados) e enviar fluxo de aniversário.
        *   **Caminho 2: Contato Não Existe (Fallback):**
            *   **Ação:** HTTP POST para `/api/v1/webhook/subscriber` (criar novo contato).
            *   **Se não existe:** Criar contato e enviar fluxo de aniversário.
    *   **Campos Personalizados (Custom Fields):**
        *   Para mapear dados como `nome` ou `data_nascimento` para campos personalizados no BotConversa, é necessário obter o `id_campo` (ID do campo).
        *   **Como obter:** Use o Swagger UI do BotConversa (`create a subscriber`), crie um contato de teste e inspecione a resposta para encontrar os IDs dos campos.
    *   **Envio do Fluxo (Send Flow):**
        *   **Ação:** HTTP POST para `/api/v1/webhook/subscriber/send-flow`.
        *   **Parâmetros:** `subscriber_id` (ID do contato obtido/criado) e `flow_id` (ID do fluxo de aniversário no BotConversa).
        *   **Como obter `flow_id`:** O ID do fluxo está na URL do fluxo dentro do BotConversa (ex: `https://app.botconversa.com.br/constructor/SEU_ID_DO_FLUXO`).
*   **Atrasos (Sleep):** Inserir módulos `Sleep` de 3 segundos entre chamadas de API para evitar sobrecarga e garantir processamento sequencial.

**5. Boas Práticas e Debugging:**
*   **Status Code 200:** Indica sucesso nas chamadas de API. Qualquer outro código (ex: 400, 500) indica erro.
*   **Swagger UI:** Ferramenta essencial para testar endpoints da API do BotConversa e entender os parâmetros esperados.
*   **Templates:** Utilize os templates fornecidos (fluxo Make, fluxo BotConversa) como ponto de partida, mas personalize-os.
*   **Atualizações Necessárias:**
    *   Conectar sua própria planilha Google Sheets.
    *   Inserir sua API Key do BotConversa.
    *   Atualizar os `id_campo` dos campos personalizados (se necessário, obtidos via Swagger).
    *   Atualizar o `flow_id` do fluxo de aniversário do seu BotConversa.
*   **Aprendizado:** Entender a lógica dos "bundles" (pacotes de dados) no Make é fundamental para depurar e mapear dados corretamente. Errar é parte do processo.

---

## 📘 13 As automações/007 Cobrança mensal automática usando o Asaas

Aqui estão os princípios fundamentais da automação de cobrança mensal usando Asaas, Make e BotConversa:

**1. Objetivo Central:**
*   Automatizar lembretes de cobrança mensal via WhatsApp para clientes, utilizando dados de pagamentos e atualizando o status da próxima cobrança.

**2. Ferramentas Essenciais:**
*   **Asaas:** Gateway de pagamento para gestão de clientes e cobranças.
    *   **Sandbox:** Ambiente de teste (`sandbox.asaas.com`) para simular operações sem impactar dados reais.
    *   **API Key (Token):** Obtida em `Minha Conta` > `Integração` no Asaas. Essencial para conectar o Make.
*   **Make (Integromat):** Plataforma de automação para integrar Asaas, Google Sheets e BotConversa.
    *   Utiliza o aplicativo Asaas nativo para conexão simplificada.
*   **Google Sheets:** Planilha para armazenar dados dos clientes e a data da próxima cobrança.
*   **BotConversa:** Plataforma de comunicação via WhatsApp para envio dos lembretes.
    *   Recebe dados via Webhook.
    *   Requer campos personalizados para armazenar informações dinâmicas.

**3. Estrutura da Planilha (Google Sheets):**
*   `Nome`
*   `Sobrenome`
*   `Telefone` (sempre com `55` no início)
*   `Email`
*   `ID do Cliente (Asaas)`: Identificador único do cliente no Asaas.
*   `Data da Próxima Cobrança`: Data em que o lembrete deve ser enviado.

**4. Lógica da Automação (Fluxo no Make):**
*   **1. Leitura da Planilha:** O Make lê todas as linhas da planilha Google Sheets.
*   **2. Filtro de Data (Planilha):**
    *   **Condição:** `Data da Próxima Cobrança` (da planilha) é igual à data de hoje.
    *   **Propósito:** Processar apenas os clientes com cobrança agendada para o dia atual.
*   **3. Listar Clientes Asaas:**
    *   Busca o cliente no Asaas usando o `ID do Cliente (Asaas)` da planilha.
*   **4. Listar Cobranças Asaas:**
    *   Busca todas as cobranças associadas ao `ID do Cliente` encontrado.
*   **5. Filtro de Cobrança (Asaas):**
    *   **Condição 1:** `Data de Vencimento` (da cobrança Asaas) é igual à data de hoje.
    *   **Condição 2:** `Status` (da cobrança Asaas) é `PENDING` (pendente).
    *   **Propósito:** Garantir que apenas cobranças pendentes e com vencimento no dia sejam processadas.
*   **6. Definir Variáveis (Set Multiple Variables):**
    *   **Melhor Prática:** Centralizar a extração e formatação de dados em variáveis (ex: `telefone_formatado`, `url_boleto`, `valor_cobranca`, `descricao_cobranca`).
    *   **Benefício:** Facilita o mapeamento em módulos futuros e a manutenção do fluxo.
*   **7. Envio para BotConversa (Módulo HTTP):**
    *   **Método:** `POST`
    *   **URL:** Webhook do BotConversa.
    *   **Corpo:** `Raw` (JSON).
    *   **Conteúdo JSON:** Mapeia as variáveis definidas no passo 6 para os campos personalizados do BotConversa (ex: `{"phone": "{{telefone_formatado}}", "value": "{{valor_cobranca}}"}`).
*   **8. Atualização da Planilha (Google Sheets):**
    *   Atualiza a `Data da Próxima Cobrança` na planilha para o próximo mês (ex: se venceu em 26/08, atualiza para 26/09).
    *   **Propósito:** Preparar para o próximo ciclo de cobrança e evitar envios duplicados.

**5. Configuração do BotConversa:**
*   **1. Criar Campos Personalizados:**
    *   Em `Configurações` > `Campos`, crie campos que correspondem aos dados enviados pelo Make (ex: `asas_data`, `asas_valor`, `asas_descricao`, `asas_url_boleto`).
*   **2. Criar Webhook:**
    *   Em `Automação` > `Webhook`, crie um novo webhook e copie sua URL.
*   **3. Mapear Dados do Webhook:**
    *   Execute o cenário no Make para enviar dados ao webhook. No BotConversa, mapeie os dados recebidos (JSON) para os campos personalizados criados.
*   **4. Criar Fluxo de Automação:**
    *   **Gatilho:** Ativação do Webhook.
    *   **Ações:**
        *   `Atualizar campo do usuário`: Preenche os campos personalizados com os dados recebidos do webhook.
        *   `Enviar fluxo`: Seleciona o fluxo de mensagens pré-configurado para o lembrete de cobrança.
*   **5. Template de Mensagem:**
    *   Crie uma mensagem dinâmica usando os campos personalizados (ex: "Olá {{primeiro_nome}}, sua parcela de {{asas_valor}} vence hoje. Link: {{asas_url_boleto}}").

**6. Melhores Práticas e Dicas:**
*   **Testar no Sandbox:** Sempre utilize o ambiente Sandbox do Asaas para testes iniciais.
*   **Filtros Robustos:** Use filtros rigorosos no Make para garantir que as mensagens sejam enviadas apenas para as cobranças corretas e pendentes.
*   **Formatação de Dados:** Garanta que números de telefone e datas estejam no formato esperado por cada plataforma.
*   **Valor da Automação:** Esta automação é um serviço de alto valor, podendo ser cobrada a partir de R$5.000.

---

## 📘 13 As automações/008 Automatizando Relatórios Como Usar o Make para Enviar Resultados Direto no WhatsApp do Cliente

Aqui estão os Primeiros Princípios da aula sobre automação de relatórios diários:

**1. Objetivo Central:**
*   Automatizar o envio diário de relatórios de lançamento (ou perpétuo) via WhatsApp para gestores e equipes, fornecendo métricas chave sem intervenção manual.
*   Gerar valor para o cliente, oferecendo insights rápidos e acessíveis.

**2. Estrutura de Dados (Google Sheets - "Central de Lançamento"):**
*   **Centralização:** Consolidar todos os dados relevantes em uma única planilha Google Sheets com guias específicas.
*   **Guias Essenciais:**
    *   **UTM Links:** Geração de links com UTMs para rastreamento preciso de fontes de tráfego.
    *   **Captação:** Registro de todos os leads (origem, dados de contato).
    *   **Pesquisa:** Dados de pesquisas (ex: Google Forms) vinculados.
    *   **Compra Aprovada:** Registros de vendas (ex: Hotmart).
    *   **Recuperação de Carrinho:** Dados de carrinhos abandonados (pix, boleto).
    *   **Grupos:** Rastreamento de entrada/saída de leads em grupos (WhatsApp/Telegram).
        *   **Mecanismo:** Webhooks (ex: ZAPI) para capturar eventos de entrada/saída.
        *   **Lógica:** Fórmulas para identificar o *último status* de cada número (entrou/saiu).
        *   **Normalização:** Fórmulas para padronizar formatos de telefone.
        *   **Agregação:** Uso da função `QUERY` (similar a SQL `SELECT`) para sumarizar dados de grupos (telefone único, último status).
    *   **Tráfego:** Dados de investimento em tráfego (ex: Facebook Ads, Google Ads).
    *   **Relatório:** Guia final que agrega e calcula as métricas para o relatório.

**3. Métricas Chave do Relatório:**
*   **Investimento:** Total gasto em tráfego.
*   **Total de Inscritos:** Número total de leads captados.
*   **Taxa de Traqueamento:** % de leads com UTMs preenchidos (indica eficácia do rastreamento).
*   **Leads nos Grupos:** Número de leads que estão ativamente nos grupos (baseado no último status).
*   **Taxa de Grupos:** % de inscritos que entraram nos grupos.
*   **Pesquisas Respondidas:** Número de leads que responderam às pesquisas.
*   **Taxa de Pesquisa:** % de inscritos que responderam às pesquisas.
*   **Link do Dashboard:** Acesso rápido a um dashboard detalhado (ex: Looker Studio).

**4. Automação (Make.com):**
*   **Ferramenta:** Make (anteriormente Integromat) para orquestrar o fluxo.
*   **Módulos:**
    *   **Google Sheets - Get a Cell:** Para obter a mensagem do relatório (ex: célula B1 da guia "Relatório").
    *   **Google Sheets - Get Range Values:** Para obter a lista de telefones dos destinatários (ex: A19:A41 da guia "Relatório").
    *   **ZAPI - Send a Text Message:** Para enviar a mensagem via WhatsApp.
*   **Configuração ZAPI:** Requer credenciais (Instância, Token, Client Secret).
*   **Mapeamento:** Conectar o telefone do módulo "Get Range Values" e a mensagem do módulo "Get a Cell" ao módulo ZAPI.
*   **Agendamento:**
    *   Definir execução diária em horário específico (ex: 8:30 AM).
    *   **Melhor Prática:** Evitar o agendamento padrão de 15 minutos para economizar operações.
*   **Operações:** Cada envio consome 3 operações (1 para mensagem, 1 para range de telefones, 1 para ZAPI).
*   **Blueprint:** Cenário pré-configurado para importação e fácil setup.

**5. Valor e Oportunidades:**
*   **Eficiência:** Elimina a necessidade de coleta e análise manual diária.
*   **Insights Rápidos:** Permite que a equipe reaja rapidamente a mudanças nas métricas (ex: queda na taxa de grupos).
*   **Remarketing:** Identificar leads que não entraram em grupos para campanhas de engajamento.
*   **Monetização:** Oferecer a configuração completa da planilha e automação como serviço de alto valor (ex: R$3.000).
*   **Manutenção Zero:** Uma vez configurado, o sistema roda sem necessidade de intervenção.

---

## 📘 13 As automações/009 Como integrar Make e Manychat e enviar mensagens via api oficial

Aqui estão os princípios fundamentais para a integração Make e Manychat via API oficial:

**1. Objetivo Central:**
*   Enviar mensagens via API oficial do Manychat, gerenciando diferentes estados de contato (novo, ativo, inativo) para automações como recuperação de vendas, confirmação de compra, etc.

**2. Ferramentas Essenciais:**
*   **Make (Integromat):** Plataforma de automação.
*   **Manychat:** Plataforma de marketing conversacional (WhatsApp).

**3. Pré-requisitos:**
*   Conhecimento básico de Make (criação de cenários, mapeamento de dados).
*   Conhecimento básico de Manychat (criação de fluxos, aprovação de templates WhatsApp).

**4. Desafio Principal (API Manychat):**
*   A API oficial do Manychat está desatualizada, limitando módulos nativos do Make.
*   **Solução:** Utilizar módulos `HTTP Request` no Make para interagir diretamente com a API do Manychat, contornando as limitações.

**5. Configuração Essencial no Manychat:**
*   **API Key:** Obter em `Configurações > API & Integrações`.
*   **Automação de Envio:** Criar um fluxo no Manychat que envia a mensagem desejada, com gatilho de `Tag Atribuída` (ex: "MDA test aula").
*   **Automação de Exclusão:** Criar um fluxo no Manychat com gatilho de `Tag Atribuída` (ex: "Excluir Contato") e a ação `Excluir Contato`.

**6. Cenários de Contato e Lógica no Make:**

*   **Cenário 1: Contato NÃO existe no Manychat.**
    *   **Ação:**
        *   Criar contato (via `HTTP Request`).
        *   Adicionar tag desejada (via `HTTP Request`).

*   **Cenário 2: Contato EXISTE e está ATIVO (Subscribed).**
    *   **Ação:**
        *   Verificar e, se necessário, atualizar o número de telefone (via `HTTP Request`).
        *   Adicionar tag desejada (via `HTTP Request`).

*   **Cenário 3: Contato EXISTE, mas está INATIVO (Unsubscribed).**
    *   **Desafio:** A API não permite reativar ou atualizar diretamente um contato inativo.
    *   **Workaround (Pulo do Gato):**
        1.  Adicionar a tag "Excluir Contato" ao usuário existente (via `HTTP Request`).
        2.  Utilizar um módulo `Sleep` (aguardar 2-4 segundos) para permitir que o Manychat processe a exclusão via automação.
        3.  Criar um NOVO contato com as informações atualizadas (via `HTTP Request`).
        4.  Adicionar a tag desejada ao novo contato (via `HTTP Request`).

**7. Estrutura da Automação no Make:**
*   **Webhook:** Ponto de entrada para dados (Hotmart, ActiveCampaign, etc.).
*   **Formatação de Telefone:** Padronizar números (ex: adicionar "55").
*   **Set Multiple Variables:** Armazenar a API Key do Manychat centralizadamente para reutilização.
*   **Manychat API (Find by System Field):** Buscar contato por e-mail para identificar o cenário.
*   **Router/Filtros:** Direcionar o fluxo para o cenário de contato apropriado.
*   **Módulos `HTTP Request`:** Usados para todas as interações com a API do Manychat (criar, atualizar, adicionar/remover tags).
*   **Módulo `Sleep`:** Essencial para o cenário de contato inativo.

**8. Melhores Práticas:**
*   **Mapeamento:** Atenção aos campos transparentes no Make; eles indicam que o campo não está mapeado e precisa ser corrigido.
*   **Consistência de Tags:** As tags usadas no Make devem ser idênticas às configuradas no Manychat.
*   **Testes:** Testar exaustivamente todos os cenários, especialmente o de contato inativo.
*   **Blueprint:** O blueprint do Make será fornecido para facilitar a implementação.

---

## 📘 13 As automações/010 Como conectar o google drivegmail no make

### Conectando Google Drive Pessoal ao Make (Integromat) via Google Cloud Console

**Objetivo:** Autorizar o Make (antigo Integromat) a acessar uma conta pessoal do Google Drive.

**Pré-requisitos:**
*   Conta Google pessoal (não G Suite/profissional).
*   Conhecimento de que "Integromat" é o nome antigo de "Make".

---

**Passos Essenciais:**

1.  **Acessar Google Cloud Console:**
    *   Navegue para `https://cloud.google.com/cloud-console`.
    *   **Primeiro Acesso:** Clique em "Start Free", conecte sua conta Google, selecione o país (Brasil) e preencha os dados (Individual/Organization - CPF/CNPJ).

2.  **Criar um Novo Projeto:**
    *   No Console, clique no seletor de projetos (ícone de caixa no topo).
    *   Selecione "Novo Projeto".
    *   Defina um nome para o projeto (ex: "Make").
    *   Clique em "Criar".

3.  **Habilitar Google Drive API:**
    *   No menu sanduíche (canto superior esquerdo) > "APIs & Services" > "Enabled APIs & Services".
    *   Clique em "Enable APIs and Services".
    *   Pesquise por "Google Drive API".
    *   Selecione a API e clique em "Enable".

4.  **Configurar Tela de Consentimento OAuth (OAuth Consent Screen):**
    *   No menu sanduíche > "APIs & Services" > "OAuth Consent Screen".
    *   Selecione "External" e clique em "Create".
    *   **App Name:** "Integromat" ou "Make" (ou nome identificador).
    *   **User support email:** Seu e-mail.
    *   **Authorized domains:**
        *   `integromat.com`
        *   `make.com`
    *   **Developer contact information:** Seu e-mail.
    *   Clique em "Save and Continue".

5.  **Adicionar Escopos (Scopes):**
    *   Na tela de consentimento, vá para "Add or Remove Scopes".
    *   Pesquise por "auth drive".
    *   Selecione os seguintes escopos:
        *   `.../auth/drive` (Permite ver, editar, criar e deletar *todos* os arquivos do Google Drive).
        *   `.../auth/drive.readonly` (Permite ver e baixar arquivos).
    *   Clique em "Update".
    *   Clique em "Save and Continue".

6.  **Adicionar Usuários de Teste:**
    *   Na tela de consentimento, vá para "Add Users".
    *   Adicione o e-mail da conta Google Drive que será conectada.
    *   Clique em "Save and Continue".

7.  **Criar Credenciais OAuth Client ID:**
    *   No menu sanduíche > "APIs & Services" > "Credentials".
    *   Clique em "Create Credentials" > "OAuth client ID".
    *   **Application type:** "Web application".
    *   **Name:** "Integromat" ou "Make".
    *   **Authorized redirect URIs:** Adicione as seguintes URLs (essencial para o redirecionamento pós-autenticação):
        *   `https://integromat.com/oauth/cb/google-restricted`
        *   `https://www.integromat.com/oauth/cb/google-restricted`
        *   `https://make.com/oauth/cb/google-restricted`
        *   `https://www.make.com/oauth/cb/google-restricted`
    *   Clique em "Create".
    *   **Anotar:** Copie o `Client ID` e o `Client Secret` exibidos.

8.  **Conectar no Make (Integromat):**
    *   No Make, crie um novo cenário.
    *   Adicione um módulo do Google Drive (ex: "Get a file").
    *   Clique em "Add" para adicionar uma nova conexão.
    *   Nomeie a conexão (ex: "Drive Pessoal").
    *   Clique em "Show advanced settings".
    *   Cole o `Client ID` e o `Client Secret` obtidos no Google Cloud.
    *   Clique em "Sign in with Google".
    *   Selecione a conta Google Drive a ser conectada.
    *   **Aviso de Segurança:** Se aparecer "Google hasn't verified this app", clique em "Continue" ou "Go back to safety" e depois "Continue".
    *   Autorize todas as permissões solicitadas pelo Make (selecione tudo).
    *   Clique em "Continue".
    *   Verifique a conexão e clique em "OK".

---

**Melhores Práticas e Alertas de Segurança:**

*   **Confidencialidade:** O `Client ID` e o `Client Secret` são credenciais sensíveis. **NUNCA os compartilhe.**
*   **Permissões:** O escopo `.../auth/drive` concede ao Make controle total sobre seus arquivos do Google Drive. Compreenda o impacto de segurança antes de autorizar.

---

## 📘 13 As automações/011 Como verificar se um número do WhatsApp é válido

**Validação de Números WhatsApp com Z-API**

**Objetivo Central:** Verificar a validade de um número de WhatsApp para garantir a qualidade dos dados e otimizar disparos futuros.

**Ferramentas Necessárias:**
*   **Z-API:** Plataforma de API para WhatsApp.
*   **ManyChat:** Plataforma de chatbot (exemplo de implementação).
*   **Make (anteriormente Integromat):** Plataforma de automação (mencionado como alternativa).

**1. Configuração Z-API:**
*   **Contratação:** Adquira o serviço Z-API.
*   **Credenciais:**
    *   Obtenha `Instance ID` (ID da Instância).
    *   Obtenha `Instance Token` (Token da Instância).
    *   Gere `Client Token` (Token de Segurança da Conta, necessário no header de todas as chamadas).
*   **Melhor Prática:** Armazene `Instance ID`, `Instance Token` e `Client Token` como "Bot Fields" (ManyChat) ou variáveis globais para reuso e segurança.

**2. Endpoint de Validação Z-API:**
*   **Método HTTP:** `GET`
*   **URL Base:** `https://api.z-api.io/instances/{{instanceId}}/token/{{instanceToken}}/contacts/get-iswhatsapp`
    *   Substitua `{{instanceId}}` e `{{instanceToken}}` pelos seus valores.
*   **Parâmetro de Consulta (Query Parameter):**
    *   `phone`: O número de telefone a ser validado, incluindo o código do país (ex: `5511999999999`).
*   **Header da Requisição:**
    *   `Client-Token: {{clientToken}}`
    *   Substitua `{{clientToken}}` pelo seu valor.
*   **Resposta (Exemplo):**
    ```json
    {
      "isWhatsapp": true
    }
    ```
    *   `isWhatsapp`: Retorna `true` se o número for válido no WhatsApp, `false` caso contrário.
*   **Status HTTP:** `200 OK` indica sucesso na requisição.

**3. Implementação no ManyChat:**
*   **Campos Personalizados (User Fields):**
    *   Crie um campo de texto para armazenar o número de telefone digitado pelo usuário (ex: `fone`).
    *   Crie um campo do tipo "True/False" (Boolean) para armazenar o resultado da validação (ex: `WhatsApp é válido`).
*   **Coleta do Número:**
    *   Use um bloco "User Input" para solicitar o número de celular ao usuário e salve-o no campo `fone`.
*   **Requisição Externa (External Request):**
    *   Adicione uma ação "External Request".
    *   **Método:** `GET`
    *   **URL:** Construa a URL do endpoint Z-API usando os Bot Fields para as credenciais e o User Field `fone` para o número.
        *   Ex: `https://api.z-api.io/instances/{{bot_field_ZAPI_INSTANCIA}}/token/{{bot_field_ZAPI_TOKEN}}/contacts/get-iswhatsapp?phone={{user_field_fone}}`
    *   **Headers:** Adicione o header `Client-Token` usando o Bot Field correspondente.
        *   Ex: `Client-Token: {{bot_field_ZAPI_CLIENT_TOKEN}}`
    *   **Salvar Resposta:** Mapeie o campo `isWhatsapp` da resposta JSON para o User Field `WhatsApp é válido`.
*   **Lógica Condicional:**
    *   Use um bloco "Condition" para verificar o valor do campo `WhatsApp é válido`.
    *   **Se `WhatsApp é válido` for `true`:** Continue o fluxo principal.
    *   **Se `WhatsApp é válido` for `false`:** Informe ao usuário que o número é inválido e solicite que digite novamente.

**4. Implementação no Make (Integromat) - Conceito:**
*   Utilize um módulo HTTP para fazer a requisição `GET` ao endpoint Z-API.
*   Configure os parâmetros de URL e headers com as credenciais e o número de telefone.
*   Analise a resposta JSON para obter o valor de `isWhatsapp` e use-o em sua lógica de fluxo.

**5. Melhores Práticas:**
*   **Reusabilidade:** Configure as credenciais Z-API como variáveis globais (Bot Fields/Data Stores) para evitar repetição e facilitar a manutenção.
*   **Feedback ao Usuário:** Sempre forneça feedback claro ao usuário sobre a validade do número.
*   **Qualidade de Dados:** A validação prévia dos números garante que apenas contatos válidos sejam armazenados, otimizando campanhas futuras (ex: disparos via API oficial).

---

## 📘 13 As automações/012 Aviso de limite de pagamento da conta de anúncios (Meta Ads)

Aqui estão os princípios fundamentais para configurar notificações de limite de pagamento do Meta Ads:

**Objetivo Central:** Automatizar notificações sobre o saldo devedor da conta de anúncios Meta Ads para evitar interrupções.

**Ferramentas Essenciais:**
*   **Meta Developers:** Para criar e gerenciar aplicativos Meta.
*   **Meta Business Manager (BM):** Para gerenciar ativos e usuários de sistema.
*   **Make.com (anteriormente Integromat):** Plataforma de automação para orquestrar o fluxo de dados e notificações.
*   **Conta de Anúncios Meta Ads:** Fonte dos dados de saldo.

---

**Configuração no Ecossistema Meta (Meta Developers & Business Manager):**

1.  **Criar Aplicativo Meta:**
    *   Acesse `developers.facebook.com/apps` ou vá para Configurações do Negócio (BM) > Apps.
    *   Crie um novo aplicativo do tipo "Business".
    *   **Copie o ID do Aplicativo** gerado.
    *   No BM, conecte este ID do Aplicativo (Configurações do Negócio > Apps > Conectar ID do APP).

2.  **Criar Usuário do Sistema:**
    *   No BM, vá para Usuários > Usuários de Sistema.
    *   Adicione um novo usuário com a função de "Administrador".

3.  **Atribuir Ativos ao Usuário do Sistema:**
    *   Selecione o Usuário do Sistema recém-criado.
    *   Atribua o aplicativo Meta criado a este usuário.
    *   Conceda a permissão "Gerenciar APP" ao usuário para este aplicativo.

4.  **Gerar Token de Acesso:**
    *   Com o Usuário do Sistema selecionado, clique em "Gerar Novo Token".
    *   Selecione o aplicativo Meta criado.
    *   **Defina a expiração do token como "Nunca"** para automação contínua.
    *   **Selecione a permissão `ads_management`**.
    *   **Copie o token gerado imediatamente.** Ele não será exibido novamente.
    *   **AVISO:** Este token é sensível. Armazene-o com segurança e não o compartilhe.

5.  **Obter ID da Conta de Anúncios:**
    *   Acesse sua conta de anúncios no Gerenciador de Anúncios Meta.
    *   Na URL do navegador, localize `act=` e **copie o número subsequente**. Este é o ID da sua conta de anúncios.

---

**Configuração no Make.com:**

1.  **Módulo HTTP Request (GET):**
    *   Configure uma requisição GET para a API do Meta para buscar o saldo da conta de anúncios.
    *   **Endpoint:** `graph.facebook.com/vXX.X/act_<ACCOUNT_ID>/adaccounts?fields=balance` (substitua `XX.X` pela versão da API e `<ACCOUNT_ID>` pelo ID da sua conta de anúncios).
    *   **Autenticação:** Use o token de acesso gerado no Meta Developers como `access_token` nos parâmetros ou no header `Authorization: Bearer <TOKEN>`.

2.  **Módulo Parse JSON:**
    *   Conecte-o ao output do módulo HTTP Request para extrair o valor do saldo da resposta JSON.

3.  **Módulo Set Multiple Variables:**
    *   Mapeie o valor do saldo extraído para uma variável (ex: `saldoDevedor`).
    *   Mapeie o ID da conta de anúncios para outra variável (ex: `idContaAnuncios`).

4.  **Módulo Filter:**
    *   Adicione um filtro após o `Set Multiple Variables`.
    *   Defina a condição para acionar a notificação (ex: `saldoDevedor` `menor que` `100` para notificar quando o saldo for inferior a R$100).

5.  **Módulo de Notificação (ex: Make App Notification):**
    *   Configure a mensagem da notificação, incluindo as variáveis mapeadas (ex: "Saldo devedor: {{saldoDevedor}}. Fique de olho!").
    *   **Conecte o aplicativo Make no seu dispositivo móvel** (via `Devices` no Make.com e leitura de QR Code no app Make).

---

**Melhores Práticas:**
*   **Segurança:** Mantenha o token de acesso em sigilo absoluto.
*   **Testes:** Realize testes completos do cenário para garantir que o filtro e a notificação funcionem conforme o esperado.
*   **Extensibilidade:** A automação pode ser expandida para enviar notificações via outros canais (WhatsApp, e-mail, Slack, etc.) usando outros módulos do Make.com.

---

## 📘 13 As automações/013 Gerenciamento automático de grupos do telegram

Aqui estão os princípios fundamentais da aula sobre automação de gestão de acesso a grupos de Telegram:

**1. Problema Central:**
*   Gestão manual de acesso a grupos de suporte no Telegram é ineficiente e insegura.
*   Dificuldade em identificar e remover usuários que cancelaram ou nunca pagaram.
*   Pessoas não-pagantes acessam suporte, gerando custos e sobrecarga.

**2. Objetivo da Automação:**
*   Automatizar a gestão de entrada e saída de usuários em grupos de suporte do Telegram.
*   Garantir que apenas clientes pagantes tenham acesso.
*   Remover automaticamente usuários que cancelaram ou cujo plano expirou.

**3. Ferramentas Essenciais:**
*   **Telegram:** Plataforma do grupo e bot.
*   **Make (ou N8N):** Plataforma de automação para orquestrar o fluxo.
*   **Google Sheets (ou Banco de Dados):** Armazenar dados de clientes, transações e IDs do Telegram.

**4. Configuração Inicial (Passos Fundamentais):**

*   **4.1. Criar Bot no Telegram:**
    *   Acessar `@BotFather` no Telegram.
    *   Comando `/newbot`.
    *   Definir `Nome` (exibição) e `Nome de Usuário` (deve terminar com `bot`, único).
    *   **Salvar o `Bot Token`** (chave de acesso à API).
    *   **Salvar o link do bot** (`t.me/<username_do_bot>`).

*   **4.2. Configurar Grupo do Telegram:**
    *   Adicionar o bot criado ao grupo de suporte.
    *   Promover o bot a **Administrador** com todas as permissões.
    *   **Observação:** Se o grupo virar "Supergrupo" (ID começa com `-100`), re-promova o bot a administrador.

*   **4.3. Obter ID do Grupo:**
    *   Enviar uma mensagem no grupo (com o bot já como admin).
    *   Acessar `https://api.telegram.org/bot<SEU_BOT_TOKEN>/getUpdates` no navegador.
    *   Localizar e **salvar o `chat_id`** do grupo (será um número negativo, ex: `-100...`).

*   **4.4. Estruturar Google Sheets (ou DB):**
    *   Colunas mínimas: `código da transação` (ex: `HP...` da Hotmart), `evento` (ex: `compra aprovada`, `compra cancelada`), `id_telegram`, `usuario_telegram`, `nome_telegram`, `link_expira`.
    *   **Regra de Negócio:** Integrar com a plataforma de vendas (ex: Hotmart) para que eventos de `compra aprovada` preencham os dados iniciais na planilha.

**5. Automação de Entrada (Blueprint "Controle de Entrada"):**

*   **Gatilho:** Usuário interage com o bot (`/start` ou "acesso").
*   **Fluxo:**
    1.  **Boas-Vindas:** Envia mensagem solicitando o `código da transação`.
    2.  **Validação:**
        *   Busca o `código da transação` na planilha.
        *   **Filtro Crucial:** Verifica se o `evento` associado é `compra aprovada` (impede reentrada de cancelados).
    3.  **Cenário 1: Código Inválido/Não Encontrado/Cancelado:**
        *   Envia mensagem de "código não encontrado".
        *   Oferece botão "Chamar Suporte" (link para WhatsApp).
    4.  **Cenário 2: Código Válido e Compra Aprovada:**
        *   **Gera Link de Convite:** Usa a API do Telegram (`createChatInviteLink`).
            *   `chat_id`: ID do grupo.
            *   `expire_date`: Data de expiração (configurável, ex: 3 dias).
            *   `member_limit`: **1** (o link funciona apenas uma vez, mesmo se compartilhado).
        *   **Atualiza Planilha:** Registra `id_telegram`, `usuario_telegram`, `nome_telegram` e `link_expira` na linha da transação.
        *   **Envia Link:** Mensagem com o link de acesso e instruções sobre validade e uso único.

**6. Automação de Remoção (Blueprint "Remoção"):**

*   **Gatilho:** Webhook acionado pela plataforma de vendas (ex: Hotmart) em eventos de `compra cancelada` ou `reembolso`.
*   **Fluxo:**
    1.  **Recebe Evento:** Captura o `código da transação` do webhook.
    2.  **Busca na Planilha:** Localiza a transação pelo código.
    3.  **Atualiza Planilha:** Altera o `evento` para `compra cancelada` e registra a `data_cancelamento`.
    4.  **Remove Usuário:** Usa a API do Telegram (`kickChatMember`).
        *   `chat_id`: ID do grupo.
        *   `user_id`: ID do Telegram obtido da planilha.
        *   `ignore_errors`: Ativar para evitar que a automação pare se o usuário já não estiver no grupo.
    5.  **Opcional (Teste/Reentrada):** `unbanChatMember` para permitir que o usuário entre novamente no futuro (útil para testes, mas `kickChatMember` por padrão bane o usuário).

**7. Melhores Práticas e Valor Agregado:**
*   **Centralização de Dados:** Associa o ID do Telegram ao código de compra, permitindo controle total.
*   **Eficiência:** Elimina a necessidade de gestão manual, economizando tempo da equipe de suporte.
*   **Segurança:** Garante acesso exclusivo a clientes pagantes, evitando "usuários fantasmas".
*   **Escalabilidade:** Facilmente adaptável para múltiplos grupos ou produtos.
*   **Configurabilidade:** Uso de variáveis no Make para facilitar a personalização de mensagens e prazos.
*   **Alto Valor para Infoprodutores:** Resolve um problema crítico de gestão, justificando um alto valor de serviço.

---

## 📘 13 As automações/014 Agendamento + lembrete 24 horas antes

Aqui estão os princípios fundamentais da aula sobre automação de vendas High Ticket:

**1. O que é High Ticket e Por Que Automatizar:**
*   **Definição:** Produtos/serviços de alto valor (mentorias, consultorias, procedimentos médicos/jurídicos caros).
*   **Necessidade:** Exige estrutura de vendas mais robusta, focada em qualificação de leads.
*   **Vantagem:** Clientes high-ticket pagam bem por automação (uma venda do cliente pode cobrir o custo do serviço de automação).
*   **Impacto:** Automações bem-feitas podem gerar faturamento de 7 dígitos.

**2. Ferramentas Essenciais:**
*   **Captação/Qualificação:** ManyChat, Typebot, Typeform (preferenciais pelo visual e usabilidade), Google Forms (funciona, mas visual inferior).
*   **Integração/Automação:** Make (principal), N8N (alternativa).
*   **Armazenamento de Dados:** Google Sheets.
*   **Agendamento:** Google Calendar (exemplo), Calendly, Zoom, Google Meet.
*   **Comunicação WhatsApp:** ZAPI (API não oficial, custo acessível), Bot Conversa.
*   **CRM:** ClickUp (exemplo), ActiveCampaign, RD Station, Pipedrive (qualquer CRM integrável).

**3. Fluxo de Automação High Ticket (Visão Geral):**
*   **Captação Qualificada:** Atrair leads com perfil e poder de investimento.
*   **Qualificação Profunda:** Filtrar leads para não perder tempo com quem não tem dinheiro ou perfil.
*   **Integração CRM:** Enviar dados qualificados para o CRM para o time comercial.
*   **Agendamento Estratégico:** Permitir que leads qualificados agendem uma sessão estratégica.
*   **Lembretes Automatizados:** Enviar confirmações e lembretes para reduzir no-shows.

**4. Automação de Qualificação e CRM (ManyChat + ClickUp):**
*   **Fluxo ManyChat:**
    *   Coletar dados básicos (Nome, E-mail, Telefone).
    *   Fazer perguntas qualificatórias (ex: faturamento, capacidade de investimento).
    *   Salvar respostas em `User Fields`.
    *   Definir status de qualificação (`qualificado` ou `desqualificado`).
*   **Integração ClickUp:**
    *   Configurar integração ManyChat no ClickUp (via API ou Webhook).
    *   Mapear todos os `User Fields` do ManyChat para campos correspondentes no ClickUp (Nome, E-mail, Telefone, Faturamento, Qualificação, **Link da Conversa ManyChat**).
    *   Adicionar tags no ClickUp (ex: "MDA Pro Qualificado").
    *   Enviar dados via `External Request` (POST) no ManyChat para o webhook do ClickUp.
*   **Tratamento de Leads:**
    *   **Qualificados:** Mensagem de aprovação e botão para agendar reunião (link do Google Calendar/Calendly).
    *   **Desqualificados:** Oferecer um "down-sell" (ex: link para um produto de entrada ou formação inicial).

**5. Automação de Agendamento e Lembretes (Make + Google Calendar/Sheets/Meet + ZAPI):**
*   **Módulo 1: Google Calendar - Search Events:**
    *   Buscar eventos agendados (ex: "Reunião Individual de Análise") no Google Calendar.
    *   Filtrar por data de início (a partir de "agora") e limitar a 1 resultado por execução.
*   **Módulo 2: JSON - Parse JSON:**
    *   Transformar o campo `description` do evento (que contém nome, e-mail, telefone em um bloco de texto) em um objeto JSON.
    *   Identificar o delimitador `\n` (nova linha) para separar os dados.
*   **Módulo 3: Tools - Set Multiple Variables:**
    *   **Melhor Prática:** Usar este módulo para extrair e formatar dados do JSON uma única vez, economizando operações e simplificando fórmulas nos módulos seguintes.
    *   **Fórmulas de Exemplo:**
        *   `Nome:` `startCase(get(split(get(split(JSON.string; '\n'); 2); ' '); 1))` (quebra por `\n`, pega a 2ª linha, quebra por espaço, pega a 1ª parte, capitaliza a 1ª letra).
        *   `E-mail:` `get(split(JSON.string; '\n'); 3)`
        *   `Telefone:` `substring(get(split(JSON.string; '\n'); 4); 0; 11)` (extrai 11 dígitos).
*   **Módulo 4: Google Sheets - Search Rows:**
    *   Verificar se o lead já existe na planilha de agendamentos (ex: pelo e-mail) para evitar duplicidade.
    *   **Filtro:** Conectar este módulo ao próximo com a condição "se a linha não existe".
*   **Módulo 5: Google Sheets - Add a Row:**
    *   Adicionar uma nova linha na planilha com os dados do agendamento.
    *   Mapear Nome, E-mail, Telefone (das variáveis Make).
    *   Formatar datas e horários: `formatDate(GoogleCalendar.Start; "DD/MM/YYYY")`, `formatDate(GoogleCalendar.Start; "HH:mm")`.
    *   Calcular `Data Disparo 24h Antes`: `formatDate(addDays(GoogleCalendar.Start; -1); "DD/MM/YYYY")`.
*   **Módulo 6: Google Meet - Create a Meeting:**
    *   Criar a reunião no Google Meet com base nos dados do evento do Google Calendar.
*   **Módulo 7: Google Calendar - Update an Event:**
    *   Atualizar o evento original no Google Calendar com o link da reunião gerado pelo Google Meet.
*   **Módulo 8: Google Sheets - Update a Row:**
    *   Atualizar a linha correspondente na planilha com o link da reunião.
*   **Módulo 9: ZAPI - Send a Text Message (Confirmação):**
    *   Enviar mensagem de confirmação via WhatsApp com Nome, Data, Horário e Link da Reunião.

**6. Automação de Lembrete 24 Horas (Make + Google Sheets + ZAPI):**
*   **Módulo 1: Google Sheets - Search Rows:**
    *   Buscar na planilha agendamentos que precisam de lembrete.
    *   **Filtros:**
        *   `Telefone` `exists`.
        *   `Data Disparo 24h Antes` `equal to` `formatDate(now; "DD/MM/YYYY")` (data de disparo é hoje).
        *   `Executado` `does not exist` (para evitar envios duplicados).
*   **Módulo 2: ZAPI - Send a Text Message (Lembrete):**
    *   Enviar mensagem de lembrete 24 horas antes da reunião, incluindo Nome, Data, Horário e Link da Reunião.
    *   Pode incluir botões (ex: "Confirmar Presença", "Não Poderei").
*   **Módulo 3: Google Sheets - Update a Row:**
    *   Atualizar a linha na planilha, marcando o campo `Executado` como "Sim" após o envio do lembrete.
    *   (Captura de resposta de botão requer lógica adicional e será abordada em aula futura).

**7. Melhores Práticas e Dicas de Make:**
*   **Teste Constante:** Execute e teste cada módulo individualmente para entender o fluxo e depurar erros. Não tenha medo de errar.
*   **Economia de Operações:** Otimize o uso de módulos. `Set Multiple Variables` é crucial para evitar repetir fórmulas.
*   **Lógica Detalhada:** Pense nos mínimos detalhes do processo. Qual dado preciso, onde ele está, como formatá-lo e para onde enviá-lo.
*   **Replicabilidade:** Crie uma estrutura robusta uma vez e use roteadores para adaptá-la a diferentes clientes (ex: Google Meet vs. Zoom, Calendly vs. Google Calendar), desabilitando as rotas não utilizadas.
*   **Padronização:** Se possível, padronize as ferramentas que seus clientes usarão para otimizar seu trabalho.
*   **Paciência:** Make pode apresentar bugs e problemas de conexão (especialmente com Google Sheets). Persistência e depuração são chave.
*   **Recursos:** Use a documentação do Make, Google e ChatGPT para auxiliar na criação de fórmulas e na resolução de problemas.
*   **Nível Avançado:** Dominar a manipulação de dados (JSON, `split`, `get`, `substring`, `startCase`) é o que diferencia e permite criar automações complexas.

---

## 📘 14 Conteúdos complementares - Make/001 Como Integrar Gmail, GDrive, Sheets e Docs no Make — Guia Prático e Descomplicado

Para conectar serviços Google (Gmail, Drive, Sheets, Docs) ao Make (anteriormente Integromat), é necessário configurar um aplicativo na Google Cloud Platform (GCP).

**1. Configuração na Google Cloud Platform (GCP)**

*   **Acesso:** Utilize uma conta Google (Gmail pessoal funciona; contas empresariais podem ter restrições). Acesse o Console da Google Cloud Platform.
*   **Criação de Projeto:**
    *   Crie um novo projeto (ex: "Tutoria Make").
    *   **Nota:** O uso é gratuito para contas `@gmail.com`, mas sujeito a cotas de requisições mensais e de velocidade. As cotas são geralmente altas para uso pessoal.
*   **Habilitação de APIs:**
    *   No menu "APIs e Serviços", selecione "APIs e Serviços Ativados".
    *   Clique em "Ativar APIs e Serviços".
    *   Busque e habilite as APIs específicas que você deseja usar (ex: "Gmail API", "Google Drive API", "Google Sheets API", "Google Docs API").
    *   **Melhor Prática:** Habilite apenas as APIs necessárias para o seu caso de uso, especialmente em projetos de clientes, por segurança.
*   **Tela de Consentimento OAuth:**
    *   Configure a tela de consentimento OAuth.
    *   **Tipo de Usuário:**
        *   **Interno/Teste:** Para uso pessoal ou dentro da mesma organização/domínio. Não requer verificação do Google.
        *   **Externo:** Para aplicativos públicos. Requer verificação do Google (logo, política de privacidade, etc.).
    *   **Melhor Prática:** Para integrações com Make, o modo "Interno" ou "Teste" é geralmente suficiente, pois você está conectando sua própria conta ou a de um cliente específico, não criando um aplicativo público.
    *   Adicione "Usuários de Teste" (seu e-mail) se estiver no modo "Teste".
    *   Preencha o nome do aplicativo, e-mail de suporte e informações de contato do desenvolvedor.
*   **Definição de Escopos:**
    *   Escopos são as permissões que seu aplicativo terá (ex: ler, escrever, enviar e-mails, gerenciar arquivos).
    *   Consulte a documentação do Google para encontrar os escopos específicos de cada API (ex: `https://www.googleapis.com/auth/gmail.send`).
    *   **Melhor Prática:** Para testes, habilitar todos os escopos pode ser conveniente. Para produção ou projetos de clientes, habilite *apenas* os escopos estritamente necessários para o princípio do menor privilégio.
*   **Criação de Credenciais (ID do Cliente OAuth):**
    *   No menu "APIs e Serviços", selecione "Credenciais".
    *   Clique em "Criar Credenciais" e escolha "ID do cliente OAuth".
    *   Selecione "Aplicativo da Web" como tipo de aplicativo.
    *   Dê um nome ao cliente (ex: "Tutoria Make Google Apps").
    *   **URIs de Redirecionamento Autorizados (CRÍTICO):** Adicione as URLs para onde o Google enviará a resposta de autenticação.
        *   `https://www.integromat.com/oauth/cb/google-restricted` (domínio antigo do Integromat)
        *   `https://www.make.com/oauth/cb/google-restricted` (domínio atual do Make)
        *   Adicione ambos para compatibilidade.
    *   Após a criação, você receberá um **ID do Cliente** e um **Segredo do Cliente**. Guarde-os.

**2. Conexão no Make**

*   **Adicionar Conexão:** No Make, ao adicionar um módulo de serviço Google (ex: Google Sheets), clique em "Add" para criar uma nova conexão.
*   **Configurações Avançadas:**
    *   Dê um nome à conexão.
    *   Clique em "Show advanced settings" (Mostrar configurações avançadas).
    *   Insira o **ID do Cliente** e o **Segredo do Cliente** obtidos na GCP.
*   **Autorização:** Clique em "Sign in with Google" e autorize a conexão usando a conta Google associada ao projeto GCP (ou um usuário de teste configurado).

**3. Melhores Práticas e Solução de Problemas**

*   **Tradução:** Nunca use a tradução automática do navegador na interface do Make ou da Google Cloud Platform ao lidar com termos técnicos como URIs, pois isso pode causar erros. Use a tradução apenas para documentação.
*   **Cotas:** Monitore o uso das cotas em GCP ("Cotas") e solicite aumento se necessário.
*   **E-mail para Automação:** Para automações de envio de e-mail, considere criar um e-mail dedicado para evitar problemas de spam ou bloqueio de contas importantes.
*   **Múltiplas Automações/Clientes:** Para várias automações ou clientes usando a *mesma* conta Google/projeto GCP, você pode criar múltiplos "IDs de Cliente OAuth" (clientes) dentro de um único projeto GCP. Cada cliente pode ter suas próprias URIs de redirecionamento. Não é necessário criar um novo projeto para cada automação se a conta Google subjacente for a mesma.
*   **Problemas de Conexão:**
    *   Verifique se a conta Google correta está logada ao autorizar no Make.
    *   Confirme se as "URIs de Redirecionamento Autorizados" estão exatamente corretas na GCP.
    *   Verifique o tipo de usuário da "Tela de Consentimento OAuth" (Interno/Externo) e os "Usuários de Teste". Se for "Externo" e não verificado, a conexão falhará.
    *   Certifique-se de que todas as APIs necessárias estão habilitadas e os escopos corretos foram adicionados.

---

## 📘 14 Conteúdos complementares - Make/002 Como Integrar Gmail, GDrive, Sheets e Docs no Make — Guia Prático e Descomplicado

Para conectar aplicativos Google (Sheets, Docs, Gmail, Drive) ao Make.com via Google Cloud, siga estes princípios essenciais:

1.  **Ativar APIs e Serviços no Google Cloud:**
    *   Acesse o Google Cloud Console (`console.cloud.google.com`).
    *   Crie ou selecione um projeto.
    *   Vá em "Biblioteca de APIs" e ative as APIs específicas dos serviços Google que você pretende usar (ex: Google Sheets API, Google Drive API, Gmail API).

2.  **Configurar a Tela de Consentimento OAuth:**
    *   Acesse "APIs e Serviços" > "Tela de consentimento OAuth".
    *   **Escopos (Scopes):** Adicione todos os escopos necessários para os serviços Google. Consulte a documentação do Make.com para cada serviço para obter os escopos corretos (ex: para Google Sheets, pode ser necessário `https://www.googleapis.com/auth/spreadsheets` e `https://www.googleapis.com/auth/drive`).
    *   **Usuários de Teste:** Se o aplicativo não for publicado (status "Teste"), adicione os e-mails de todos os usuários que precisarão acessar o aplicativo na seção "Usuários de Teste". Apenas esses e-mails terão permissão para autenticar.
    *   **Informações do Desenvolvedor:** Preencha o e-mail de contato do desenvolvedor.

3.  **Criar Credenciais (ID do Cliente OAuth):**
    *   Acesse "APIs e Serviços" > "Credenciais".
    *   Crie um "ID do cliente OAuth".
    *   **Tipo de Aplicativo:** Selecione sempre "Aplicativo da Web".
    *   **URIs de Redirecionamento Autorizadas (Authorized redirect URIs):** Cadastre a URI de callback **exata** fornecida pela documentação do Make.com para o serviço Google específico. Uma URI incorreta ou ausente resultará em erro de conexão ("Acesso bloqueado: A solicitação desse API é inválida").
        *   Exemplos de URIs para Make.com:
            *   Google Sheets: `https://www.make.com/oauth/cb/google-sheets`
            *   Google Docs: `https://www.make.com/oauth/cb/google-docs`
            *   Gmail: `https://www.make.com/oauth/cb/google-restricted`
            *   Google Drive: `https://www.make.com/oauth/cb/google-drive`
    *   Após a criação, anote o `Client ID` e o `Client Secret`.

4.  **Conectar no Make.com:**
    *   No Make.com, ao configurar a conexão com o serviço Google, utilize o `Client ID` e o `Client Secret` obtidos.
    *   Durante o processo de autenticação, conceda todas as permissões solicitadas.

**Pontos de Atenção e Solução de Problemas:**
*   **Erros de Conexão:** Verifique sempre a URI de redirecionamento e os escopos. São as causas mais comuns de falha.
*   **Acesso Negado:** Certifique-se de que o e-mail do usuário está cadastrado em "Usuários de Teste" se o app não estiver em produção.
*   **Publicação do App:** Para uso interno ou em fase de testes, a publicação do app não é obrigatória. A publicação para uso público exige um processo de verificação do Google (política de privacidade, link da página inicial, etc.).

---

