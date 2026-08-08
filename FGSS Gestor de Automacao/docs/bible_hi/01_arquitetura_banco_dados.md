# Capítulo 1: Arquitetura de Banco de Dados & Supabase

A persistência de dados em nível profissional exige o abandono de planilhas do Google Sheets ou bancos de dados internos de ferramentas no-code em favor de um banco de dados relacional de alta performance. O PostgreSQL, orquestrado via Supabase, é o padrão adotado no ecossistema CÉREBRO.

---

## 1. Pooling de Conexões (Supavisor / PgBouncer)

Para evitar a exaustão de conexões em ambientes serverless ou APIs com picos de tráfego, o Supabase disponibiliza duas portas e modos de conexão específicos. A seleção adequada é mandatória:

```text
                               ┌───────────────────────────┐
                               │     Supabase Database     │
                               └─────────────┬─────────────┘
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       ▼                                           ▼
             Porta 6543 (Transaction)                     Porta 5432 (Session)
             - Ideal para Serverless                      - Ideal para Migrações
             - Libera conexões rapidamente                - Mantém conexão presa
             - Proibido Prepared Statements               - Permite Tabelas Temporárias
```

### A. Modo Transacional (Porta 6543) — `#SUPABASE-CONNECTION-PORTS`
* **Como funciona:** O pooler (Supavisor) intercepta a conexão e a atribui ao cliente apenas durante a execução de uma transação ou query específica, liberando-a imediatamente após a resposta.
* **Caso de uso:** Obrigatório em funções serverless (Vercel, AWS Lambda, Supabase Edge Functions) ou nós de requisição de n8n/Make que fazem chamadas esporádicas.
* **Cuidado crítico:** É **proibido** utilizar prepared statements neste modo. Como a conexão física muda entre queries subsequentes, prepared statements armazenados na conexão antiga gerarão erro. O driver ou ORM (ex: Prisma, pg-promise, psycopg3) deve ter a opção de cache de statements configurada como `0` ou `disabled`.

### B. Modo Sessão (Porta 5432)
* **Como funciona:** O pooler garante uma conexão física direta e exclusiva para o cliente durante toda a sua duração.
* **Caso de uso:** Execução de scripts de migração estrutural (Drizzle, Prisma Migrations, Flyway), comandos de criação de tabelas temporárias ou scripts administrativos de longa duração.

---

## 2. Row-Level Security (RLS)

A segurança estrita de dados determina que nenhuma tabela deve ser acessada sem políticas ativas de RLS para evitar o vazamento de informações entre múltiplos clientes (Tenants).

### Exemplo de SQL para Ativação e Política de RLS:
```sql
-- Habilita RLS na tabela de logs de automações
ALTER TABLE log_automacoes ENABLE ROW LEVEL SECURITY;

-- Cria política que permite apenas o cliente autenticado ler seus próprios logs
CREATE POLICY select_logs_cliente ON log_automacoes
    FOR SELECT
    USING (auth.uid() = id_cliente);
```

---

## 3. Dimensionamento e Monitoramento do Pool

### A. Cálculo do Tamanho do Pool
O tamanho padrão do pool de conexões do Supavisor deve seguir a equação de estabilidade:

$$\text{Pool Size} = (\text{Cores do CPU} \times 2) + 2$$

Garantir que a alocação máxima do pool no Supabase Dashboard não exceda **80%** do total de conexões disponíveis no PostgreSQL para deixar margem para conexões administrativas locais (como CLI de desenvolvimento e ferramentas de visualização).

### B. Monitoramento de Conexões Ativas
Use a query abaixo para auditar conexões e identificar conexões presas (leaks):
```sql
SELECT pid, usename, client_addr, state, query
FROM pg_stat_activity
WHERE state != 'idle';
```

---

## 4. Manutenção e Aquecimento de Índices HNSW (pgvector) — `#PGVECTOR-HNSW-INDEX`

Embora os índices HNSW do pgvector sejam dinâmicos (atualizando-se sozinhos em inserts e deletes), alta taxa de fragmentação por atualização frequente exige cuidados operacionais.

### A. Reindexação Sem Downtime:
Caso o tempo de busca semântica aumente devido à fragmentação do grafo HNSW, execute a reconstrução do índice de forma concorrente para evitar o travamento de escritas e leituras na tabela de produção:
```sql
REINDEX INDEX CONCURRENTLY chunks_hnsw_idx;
```

### B. Aquecimento do Índice (Index Warming):
Após a criação inicial de um índice HNSW ou reindexação, o grafo reside no disco físico ("índice frio"). Fazer consultas imediatas causará picos drásticos de latência (p95/p99) enquanto a estrutura do grafo é carregada na memória cache do banco.
* **Boa Prática:** Execute uma série de 10 a 20 queries de aquecimento programadas antes de direcionar o tráfego ativo de produção para o novo índice.

