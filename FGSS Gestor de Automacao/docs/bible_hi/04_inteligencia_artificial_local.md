# Capítulo 4: Inteligência Artificial Local & RAG Avançado

O ecossistema CÉREBRO exige soberania de dados, privacidade e redução drástica de latência e custos. Em vez de depender exclusivamente de modelos SaaS proprietários (OpenAI/Anthropic), o padrão corporativo adota processamento local híbrido com Ollama e pgvector.

---

## 1. pgvector com Indexação HNSW — `#PGVECTOR-HNSW-INDEX`

A busca semântica em base de conhecimento volumosa (como manuais, bancos de prospecção e históricos) é processada no PostgreSQL através da extensão `pgvector` usando o índice HNSW (Hierarchical Navigable Small World).

### A. Ativação e Criação de Tabela:
```sql
-- Ativa a extensão pgvector
CREATE EXTENSION IF NOT EXISTS vector;

-- Cria a tabela de chunks e embeddings
CREATE TABLE chunks_conhecimento (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conteudo TEXT NOT NULL,
    metadata JSONB,
    embedding VECTOR(768) -- nomic-embed-text usa dimensão 768
);
```

### B. Criação do Índice HNSW:
O HNSW constrói um grafo de busca espacial multicamadas. É o índice mais eficiente para alta concorrência em 2026, superando o antigo IVFFlat (que requeria re-treinamento constante).
```sql
-- Criação do índice com métrica de distância cosseno
CREATE INDEX chunks_hnsw_idx ON chunks_conhecimento 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

---

## 2. Orquestração com Ollama Local

Para evitar o tráfego externo de dados corporativos confidenciais, a inferência é feita localmente:
* **Modelo de Embeddings padrão:** `nomic-embed-text` (Dimensão 768, excelente custo/benefício e tolerância de contexto).
* **Modelos de Linguagem padrões:** 
  * `llama3.1:8b` (Para processamento rápido, classificação de intenções e tarefas leves).
  * `llama3.3:70b` (Para tomadas de decisão complexas, geração de propostas e análises com raciocínio profundo).

---

## 3. Arquitetura de Agentic RAG

O RAG tradicional ( stuffing de chunks na janela ) gera alucinações. O padrão H-I adota o **Agentic RAG** (roteamento dinâmico baseado em grafos):

```text
               [ Prompt do Usuário ]
                         │
                         ▼
             [ Roteador de Intenções ]
             /                       \
            ▼                         ▼
   [ Busca Semântica ]         [ Resposta Direta ]
   (pgvector Cosine)
            │
            ▼
    [ Classificador ]
   (O chunk é útil?)
    /               \
 (Sim)              (Não) ──► Re-escreve Query e Repete Busca
   │
   ▼
[ Sintetizador LLM ]
```

### Framework de Execução (LangGraph-style):
1. **Roteador:** O LLM rápido (`llama3.1:8b`) avalia se o prompt precisa de dados externos.
2. **Retrieval:** Se sim, realiza a query de distância cosseno no PostgreSQL:
   ```sql
   SELECT conteudo, 1 - (embedding <=> :user_embedding) AS similaridade
   FROM chunks_conhecimento
   WHERE 1 - (embedding <=> :user_embedding) > 0.7
   ORDER BY similaridade DESC
   LIMIT 5;
   ```
3. **Grader:** O LLM avalia a relevância de cada chunk retornado. Chunks irrelevantes são filtrados para evitar poluição do prompt.
4. **Query Rewriter:** Se nenhum chunk for qualificado, a query original é reescrita e uma nova busca é feita.
5. **Generation:** O LLM consolidado (`llama3.3:70b`) formula a resposta baseado estritamente nas evidências encontradas.

---

## 4. Otimização Vetorial: Matryoshka Embeddings (MRL)

Para escalar buscas semânticas locais a milhões de registros com consumo de hardware mínimo, a Bíblia H-I adota a otimização de **Matryoshka Representation Learning (MRL)**.

### A. Conceito e Slicing Dinâmico:
Modelos treinados em MRL (como `text-embedding-3-large` da OpenAI ou os embeddings nativos mais modernos de 2026) concentram os conceitos semânticos mais densos nas primeiras dimensões do vetor. 
Podemos fatiar o vetor gerado (ex: de 3072 para 256 ou 512 dimensões), reduzindo o espaço de armazenamento e RAM em mais de **80%**, mantendo mais de **95%** da precisão da busca.

### B. Indexação da Fração Matryoshka no Postgres:
Configuramos a tabela do PostgreSQL para armazenar apenas a dimensão reduzida selecionada e aplicar o índice HNSW:
```sql
-- Cria a tabela otimizada para 256 dimensões
CREATE TABLE chunks_otimizados (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    conteudo TEXT NOT NULL,
    embedding_curto VECTOR(256) -- Fatia Matryoshka
);

-- Indexa apenas as 256 dimensões curtas
CREATE INDEX chunks_matryoshka_hnsw_idx ON chunks_otimizados 
USING hnsw (embedding_curto vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
```

### C. Normalização Obrigatória:
Ao fatiar um vetor no código cliente antes do envio ao banco, a normalização original do modelo de IA é quebrada. É obrigatório re-normalizar o vetor resultante para manter a fidelidade das buscas por distância cosseno:
```javascript
// Exemplo em Node.js de fatiamento e re-normalização
function obterMatryoshkaEmbedding(fullEmbedding, dimensoes = 256) {
  // 1. Fatia os primeiros 256 valores
  const sliced = fullEmbedding.slice(0, dimensoes);
  
  // 2. Calcula a norma Euclidiana
  const magnitude = Math.sqrt(sliced.reduce((sum, val) => sum + val * val, 0));
  
  // 3. Divide cada elemento pela magnitude para normalizar (comprimento = 1)
  return sliced.map(val => val / magnitude);
}
```
Com isso, a busca no banco roda em frações de milissegundos e exige muito menos memória ativa (RAM) do PostgreSQL em produção.

