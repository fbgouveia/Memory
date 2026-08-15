# Documentation Index

- Source: https://docs.crewai.com/en/concepts/memory
- Raw SHA-256: `6f35ea36da51f17f3b7ec5e892bd007df126d0a5049bc56121d5ec21d5080d53`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
v1.15.16
English
Search... ⌘ K
Ask Assistant
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Core Concepts Memory
Website
Forum
Blog
CrewGPT
Get Started
Introduction
Build with AI
Skills
Installation
Quickstart
Guides
Strategy
Agents
Crews
Flows
Frontend
Tools
Coding Tools
Advanced
Migration
Core Concepts
Agents
Agent Capabilities
Tasks
Crews
Flows
Streaming
Production Architecture
Knowledge
Skills
LLMs
Files
Processes
Collaboration
Training
Memory
Reasoning
Planning
Testing
CLI
Tools
Event Listeners
Checkpointing
MCP Integration
MCP Servers as Tools in CrewAI
MCP DSL Integration
Stdio Transport
SSE Transport
Streamable HTTP Transport
Connecting to Multiple MCP Servers
MCP Security Considerations
Tools
Tools Overview
File & Document
Web Scraping & Browsing
Search & Research
Database & Data
AI & Machine Learning
Cloud & Storage
Integrations
Automation
Observability
CrewAI Tracing
Overview
Arize Phoenix
Braintrust
Datadog Integration
Galileo
LangDB Integration
Langfuse Integration
Langtrace Integration
Maxim Integration
MLflow Integration
Neatlogs Integration
OpenLIT Integration
Opik Integration
Patronus AI Evaluation
Portkey Integration
Weave Integration
TrueFoundry Integration
Learn
Overview
Strategic LLM Selection Guide
Conditional Tasks
Coding Agents
Create Custom Tools
Custom LLM Implementation
Custom Manager Agent
Customize Agents
Image Generation with DALL-E
Force Tool Output as Result
Hierarchical Process
Human Input on Execution
Human-in-the-Loop (HITL) Workflows
Human Feedback in Flows
Kickoff Crew Asynchronously
Kickoff Crew for Each
Streaming Runtime Contract
Consuming Streams
Connect to any LLM
Using CrewAI Without LiteLLM
Using Multimodal Agents
Replay Tasks from Latest Crew Kickoff
Sequential Processes
Using Annotations in crew.py
Execution Hooks
Telemetry
Memory
Copy page Copy page
Leveraging the unified memory system in CrewAI to enhance agent capabilities.
Copy page Copy page
​ Overview
​ Quick Start
from crewai import Memory memory = Memory() # Store -- the LLM infers scope, categories, and importance memory.remember( "We decided to use PostgreSQL for the user database." ) # Retrieve -- results ranked by composite score (semantic + recency + importance) matches = memory.recall( "What database did we choose?" ) for m in matches: print ( f "[ { m.score :.2f} ] { m.record.content } " ) # Tune scoring for a fast-moving project memory = Memory( recency_weight = 0.5 , recency_half_life_days = 7 ) # Forget memory.forget( scope = "/project/old" ) # Explore the self-organized scope tree print (memory.tree()) print (memory.info( "/" ))
​ Four Ways to Use Memory
​ Standalone
from crewai import Memory memory = Memory() # Build up knowledge memory.remember( "The API rate limit is 1000 requests per minute." ) memory.remember( "Our staging environment uses port 8080." ) memory.remember( "The team agreed to use feature flags for all new releases." ) # Later, recall what you need matches = memory.recall( "What are our API limits?" , limit = 5 ) for m in matches: print ( f "[ { m.score :.2f} ] { m.record.content } " ) # Extract atomic facts from a longer text raw = """Meeting notes: We decided to migrate from MySQL to PostgreSQL next quarter. The budget is $50k. Sarah will lead the migration.""" facts = memory.extract_memories(raw) # ["Migration from MySQL to PostgreSQL planned for next quarter", # "Database migration budget is $50k", # "Sarah will lead the database migration"] for fact in facts: memory.remember(fact)
​ With Crews
from crewai import Crew, Agent, Task, Process, Memory # Option 1: Default memory crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], process = Process.sequential, memory = True , verbose = True , ) # Option 2: Custom memory with tuned scoring memory = Memory( recency_weight = 0.4 , semantic_weight = 0.4 , importance_weight = 0.2 , recency_half_life_days = 14 , ) crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], memory = memory, )
​ With Agents
from crewai import Agent, Memory memory = Memory() # Researcher gets a private scope -- only sees /agent/researcher researcher = Agent( role = "Researcher" , goal = "Find and analyze information" , backstory = "Expert researcher with attention to detail" , memory = memory.scope( "/agent/researcher" ), ) # Writer uses crew shared memory (no agent-level memory set) writer = Agent( role = "Writer" , goal = "Produce clear, well-structured content" , backstory = "Experienced technical writer" , # memory not set -- uses crew._memory when crew has memory enabled )
​ With Flows
from crewai.flow.flow import Flow, listen, start class ResearchFlow ( Flow ): @start () def gather_data ( self ): findings = "PostgreSQL handles 10k concurrent connections. MySQL caps at 5k." self .remember(findings, scope = "/research/databases" ) return findings @listen (gather_data) def write_report ( self , findings ): # Recall past research to provide context past = self .recall( "database performance benchmarks" ) context = " \n " .join( f "- { m.record.content } " for m in past) return f "Report: \n New findings: { findings } \n Previous context: \n { context } "
​ Hierarchical Scopes
​ What Scopes Are
/ /company /company/engineering /company/product /project /project/alpha /project/beta /agent /agent/researcher /agent/writer
​ How Scope Inference Works
memory = Memory() # LLM infers scope from content memory.remember( "We chose PostgreSQL for the user database." ) # -> might be placed under /project/decisions or /engineering/database # You can also specify scope explicitly memory.remember( "Sprint velocity is 42 points" , scope = "/team/metrics" )
​ Visualizing the Scope Tree
print (memory.tree()) # / (15 records) # /project (8 records) # /project/alpha (5 records) # /project/beta (3 records) # /agent (7 records) # /agent/researcher (4 records) # /agent/writer (3 records) print (memory.info( "/project/alpha" )) # ScopeInfo(path='/project/alpha', record_count=5, # categories=['architecture', 'database'], # oldest_record=datetime(...), newest_record=datetime(...), # child_scopes=[])
​ MemoryScope: Subtree Views
memory = Memory() # Create a scope for a specific agent agent_memory = memory.scope( "/agent/researcher" ) # Everything is relative to /agent/researcher agent_memory.remember( "Found three relevant papers on LLM memory." ) # -> stored under /agent/researcher agent_memory.recall( "relevant papers" ) # -> searches only under /agent/researcher # Narrow further with subscope project_memory = agent_memory.subscope( "project-alpha" ) # -> /agent/researcher/project-alpha
​ Best Practices for Scope Design
Start flat, let the LLM organize. Don’t over-engineer your scope hierarchy upfront. Begin with memory.remember(content) and let the LLM’s scope inference create structure as content accumulates.
Use /{entity_type}/{identifier} patterns. Natural hierarchies emerge from patterns like /project/alpha , /agent/researcher , /company/engineering , /customer/acme-corp .
Scope by concern, not by data type. Use /project/alpha/decisions rather than /decisions/project/alpha . This keeps related content together.
Keep depth shallow (2-3 levels). Deeply nested scopes become too sparse. /project/alpha/architecture is good; /project/alpha/architecture/decisions/databases/postgresql is too deep.
Use explicit scopes when you know, let the LLM infer when you don’t. If you’re storing a known project decision, pass scope="/project/alpha/decisions" . If you’re storing freeform agent output, omit the scope and let the LLM figure it out.
​ Use Case Examples
memory = Memory() # Each project gets its own branch memory.remember( "Using microservices architecture" , scope = "/project/alpha/architecture" ) memory.remember( "GraphQL API for client apps" , scope = "/project/beta/api" ) # Recall across all projects memory.recall( "API design decisions" ) # Or within a specific project memory.recall( "API design" , scope = "/project/beta" )
memory = Memory() # Researcher has private findings researcher_memory = memory.scope( "/agent/researcher" ) # Writer can read from both its own scope and shared company knowledge writer_view = memory.slice( scopes = [ "/agent/writer" , "/company/knowledge" ], read_only = True , )
memory = Memory() # Each customer gets isolated context memory.remember( "Prefers email communication" , scope = "/customer/acme-corp" ) memory.remember( "On enterprise plan, 50 seats" , scope = "/customer/acme-corp" ) # Shared product docs are accessible to all agents memory.remember( "Rate limit is 1000 req/min on enterprise plan" , scope = "/product/docs" )
​ Memory Slices
​ What Slices Are
​ When to Use Slices vs Scopes
Scope : Use when an agent or code block should be restricted to a single subtree. Example: an agent that only sees /agent/researcher .
Slice : Use when you need to combine context from multiple branches. Example: an agent that reads from its own scope plus shared company knowledge.
​ Read-Only Slices
memory = Memory() # Agent can recall from its own scope AND company knowledge, # but cannot write to company knowledge agent_view = memory.slice( scopes = [ "/agent/researcher" , "/company/knowledge" ], read_only = True , ) matches = agent_view.recall( "company security policies" , limit = 5 ) # Searches both /agent/researcher and /company/knowledge, merges and ranks results agent_view.remember( "new finding" ) # Raises PermissionError (read-only)
​ Read-Write Slices
view = memory.slice( scopes = [ "/team/alpha" , "/team/beta" ], read_only = False ) # Must specify scope when writing view.remember( "Cross-team decision" , scope = "/team/alpha" , categories = [ "decisions" ])
​ Composite Scoring
composite = semantic_weight * similarity + recency_weight * decay + importance_weight * importance
similarity = 1 / (1 + distance) from the vector index (0 to 1)
decay = 0.5^(age_days / half_life_days) — exponential decay (1.0 for today, 0.5 at half-life)
importance = the record’s importance score (0 to 1), set at encoding time
# Sprint retrospective: favor recent memories, short half-life memory = Memory( recency_weight = 0.5 , semantic_weight = 0.3 , importance_weight = 0.2 , recency_half_life_days = 7 , ) # Architecture knowledge base: favor important memories, long half-life memory = Memory( recency_weight = 0.1 , semantic_weight = 0.5 , importance_weight = 0.4 , recency_half_life_days = 180 , )
​ LLM Analysis Layer
On save — When you omit scope, categories, or importance, the LLM analyzes the content and suggests scope, categories, importance, and metadata (entities, dates, topics).
On recall — For deep/auto recall, the LLM analyzes the query (keywords, time hints, suggested scopes, complexity) to guide retrieval.
Extract memories — extract_memories(content) breaks raw text (e.g. task output) into discrete memory statements. Agents use this before calling remember() on each statement so that atomic facts are stored instead of one large blob.
​ Memory Consolidation
keep — The existing record is still accurate and not redundant.
update — The existing record should be updated with new information (LLM provides the merged content).
delete — The existing record is outdated, superseded, or contradicted.
insert_new — Whether the new content should also be inserted as a separate record.
​ Intra-batch Dedup
# Only 2 records are stored (the third is a near-duplicate of the first) memory.remember_many([ "CrewAI supports complex workflows." , "Python is a great language." , "CrewAI supports complex workflows." , # dropped by intra-batch dedup ])
​ Non-blocking Saves
# Returns immediately -- save happens in background memory.remember_many([ "Fact A." , "Fact B." , "Fact C." ]) # recall() automatically waits for pending saves before searching matches = memory.recall( "facts" ) # sees all 3 records
​ Read Barrier
​ Crew Shutdown
​ Standalone Usage
memory = Memory() memory.remember_many([ "Fact A." , "Fact B." ]) # Option 1: Wait for pending saves memory.drain_writes() # Option 2: Drain and shut down the background pool memory.close()
​ Source and Privacy
​ Source Tracking
# Tag memories with their origin memory.remember( "User prefers dark mode" , source = "user:alice" ) memory.remember( "System config updated" , source = "admin" ) memory.remember( "Agent found a bug" , source = "agent:debugger" ) # Recall only memories from a specific source matches = memory.recall( "user preferences" , source = "user:alice" )
​ Private Memories
# Store a private memory memory.remember( "Alice's API key is sk-..." , source = "user:alice" , private = True ) # This recall sees the private memory (source matches) matches = memory.recall( "API key" , source = "user:alice" ) # This recall does NOT see it (different source) matches = memory.recall( "API key" , source = "user:bob" ) # Admin access: see all private records regardless of source matches = memory.recall( "API key" , include_private = True )
​ RecallFlow (Deep Recall)
depth="shallow" — Direct vector search with composite scoring. Fast (~200ms), no LLM calls.
depth="deep" (default) — Runs a multi-step RecallFlow: query analysis, scope selection, parallel vector search, confidence-based routing, and optional recursive exploration when confidence is low.
# Shallow: pure vector search, no LLM matches = memory.recall( "What did we decide?" , limit = 10 , depth = "shallow" ) # Deep (default): intelligent retrieval with LLM analysis for long queries matches = memory.recall( "Summarize all architecture decisions from this quarter" , limit = 10 , depth = "deep" , )
memory = Memory( confidence_threshold_high = 0.9 , # Only synthesize when very confident confidence_threshold_low = 0.4 , # Explore deeper more aggressively exploration_budget = 2 , # Allow up to 2 exploration rounds query_analysis_threshold = 200 , # Skip LLM for queries shorter than this )
​ Embedder Configuration
​ Passing to Memory Directly
from crewai import Memory # As a config dict memory = Memory( embedder = { "provider" : "openai" , "config" : { "model_name" : "text-embedding-3-large" }}) # As a pre-built callable from crewai.rag.embeddings.factory import build_embedder embedder = build_embedder({ "provider" : "ollama" , "config" : { "model_name" : "mxbai-embed-large" }}) memory = Memory( embedder = embedder)
​ Via Crew Embedder Config
from crewai import Crew crew = Crew( agents = [ ... ], tasks = [ ... ], memory = True , embedder = { "provider" : "openai" , "config" : { "model_name" : "text-embedding-3-large" }}, )
​ Provider Examples
OpenAI (default)
memory = Memory( embedder = { "provider" : "openai" , "config" : { "model_name" : "text-embedding-3-large" , # "api_key": "sk-...", # or set OPENAI_API_KEY env var }, })
Ollama (local, private)
memory = Memory( embedder = { "provider" : "ollama" , "config" : { "model_name" : "mxbai-embed-large" , "url" : "http://localhost:11434/api/embeddings" , }, })
Azure OpenAI
memory = Memory( embedder = { "provider" : "azure" , "config" : { "deployment_id" : "your-embedding-deployment" , "api_key" : "your-azure-api-key" , "api_base" : "https://your-resource.openai.azure.com" , "api_version" : "2024-02-01" , }, })
Google AI
memory = Memory( embedder = { "provider" : "google-generativeai" , "config" : { "model_name" : "gemini-embedding-001" , # "api_key": "...", # or set GOOGLE_API_KEY env var }, })
Google Vertex AI
memory = Memory( embedder = { "provider" : "google-vertex" , "config" : { "model_name" : "gemini-embedding-001" , "project_id" : "your-gcp-project-id" , "location" : "us-central1" , }, })
Cohere
memory = Memory( embedder = { "provider" : "cohere" , "config" : { "model_name" : "embed-english-v3.0" , # "api_key": "...", # or set COHERE_API_KEY env var }, })
VoyageAI
memory = Memory( embedder = { "provider" : "voyageai" , "config" : { "model" : "voyage-3" , # "api_key": "...", # or set VOYAGE_API_KEY env var }, })
AWS Bedrock
memory = Memory( embedder = { "provider" : "amazon-bedrock" , "config" : { "model_name" : "amazon.titan-embed-text-v1" , # Uses default AWS credentials (boto3 session) }, })
Hugging Face
memory = Memory( embedder = { "provider" : "huggingface" , "config" : { "model_name" : "sentence-transformers/all-MiniLM-L6-v2" , }, })
Jina
memory = Memory( embedder = { "provider" : "jina" , "config" : { "model_name" : "jina-embeddings-v2-base-en" , # "api_key": "...", # or set JINA_API_KEY env var }, })
IBM WatsonX
memory = Memory( embedder = { "provider" : "watsonx" , "config" : { "model_id" : "ibm/slate-30m-english-rtrvr" , "api_key" : "your-watsonx-api-key" , "project_id" : "your-project-id" , "url" : "https://us-south.ml.cloud.ibm.com" , }, })
Custom Embedder
# Pass any callable that takes a list of strings and returns a list of vectors def my_embedder ( texts : list[ str ]) -> list[list[ float ]]: # Your embedding logic here return [[ 0.1 , 0.2 , ... ] for _ in texts] memory = Memory( embedder = my_embedder)
​ Provider Reference
​ LLM Configuration
from crewai import Memory, LLM # Default: gpt-4o-mini memory = Memory() # Use a different OpenAI model memory = Memory( llm = "gpt-4o" ) # Use Anthropic memory = Memory( llm = "anthropic/claude-3-haiku-20240307" ) # Use Ollama for fully local/private analysis memory = Memory( llm = "ollama/llama3.2" ) # Use Google Gemini memory = Memory( llm = "gemini/gemini-2.0-flash" ) # Pass a pre-configured LLM instance with custom settings llm = LLM( model = "gpt-4o" , temperature = 0 ) memory = Memory( llm = llm)
memory = Memory( llm = "ollama/llama3.2" , embedder = { "provider" : "ollama" , "config" : { "model_name" : "mxbai-embed-large" }}, )
​ Storage Backend
Default : LanceDB, stored under ./.crewai/memory (or $CREWAI_STORAGE_DIR/memory if the env var is set, or the path you pass as storage="path/to/dir" ).
Custom backend : Implement the StorageBackend protocol (see crewai.memory.storage.backend ) and pass an instance to Memory(storage=your_backend) .
​ Discovery
memory.tree() # Formatted tree of scopes and record counts memory.tree( "/project" , max_depth = 2 ) # Subtree view memory.info( "/project" ) # ScopeInfo: record_count, categories, oldest/newest memory.list_scopes( "/" ) # Immediate child scopes memory.list_categories() # Category names and counts memory.list_records( scope = "/project/alpha" , limit = 20 ) # Records in a scope, newest first
​ Failure Behavior
Save analysis — A warning is logged and the memory is still stored with default scope / , empty categories, and importance 0.5 .
Extract memories — The full content is stored as a single memory so nothing is dropped.
Query analysis — Recall falls back to simple scope selection and vector search so you still get results.
​ Privacy Note
​ Memory Events
from crewai.events import BaseEventListener, MemoryQueryCompletedEvent class MemoryMonitor ( BaseEventListener ): def setup_listeners ( self , crewai_event_bus ): @crewai_event_bus.on (MemoryQueryCompletedEvent) def on_done ( source , event ): if getattr (event, "source_type" , None ) == "unified_memory" : print ( f "Query ' { event.query } ' completed in { event.query_time_ms :.0f} ms" )
​ Troubleshooting
Ensure the storage path is writable (default ./.crewai/memory ). Pass storage="./your_path" to use a different directory, or set the CREWAI_STORAGE_DIR environment variable.
When using a crew, confirm memory=True or memory=Memory(...) is set.
Use depth="shallow" for routine agent context. Reserve depth="deep" for complex queries.
Increase query_analysis_threshold to skip LLM analysis for more queries.
Memory still saves/recalls with safe defaults. Check API keys, rate limits, and model availability if you want full LLM analysis.
Memory saves run in a background thread. Errors are emitted as MemorySaveFailedEvent but don’t crash the agent. Check logs for the root cause (usually LLM or embedder connection issues).
Existing local memory stores may have been created with a different embedding model. The default OpenAI memory embedder is now text-embedding-3-large (3072 dimensions), while older stores commonly used 1536-dimensional embeddings. For local testing, run crewai reset-memories -m , delete the local memory storage directory, or configure the previous embedder model explicitly.
LanceDB operations are serialized with a shared lock and retried automatically on conflict. This handles multiple Memory instances pointing at the same database (e.g. agent memory + crew memory). No action needed.
crewai memory # Opens the TUI browser crewai memory --storage-path ./my_memory # Point to a specific directory
crew.reset_memories( command_type = "memory" ) # Resets unified memory # Or on a Memory instance: memory.reset() # All scopes memory.reset( scope = "/project/old" ) # Only that subtree
​ Configuration Reference
Was this page helpful?
Yes
No
