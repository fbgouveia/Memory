# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/litellm-removal-guide
- Raw SHA-256: `4078348ba19d7a9a48fb1928146e75ff364b61d2f02fc6b859500ca7f25f4b7c`

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
Navigation Learn Using CrewAI Without LiteLLM
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
Using CrewAI Without LiteLLM
Copy page Copy page
How to use CrewAI with native provider integrations and remove the LiteLLM dependency from your project.
Copy page Copy page
​ Overview
Native integrations — direct SDK connections to OpenAI, Anthropic, Google Gemini, Azure OpenAI, and AWS Bedrock
LiteLLM fallback — a translation layer that supports 100+ additional providers
​ Why Remove LiteLLM?
Reduced dependency surface — fewer packages means fewer potential supply-chain risks
Better performance — native SDKs communicate directly with provider APIs, eliminating a translation layer
Simpler debugging — one less abstraction layer between your code and the provider
Smaller install footprint — LiteLLM brings in many transitive dependencies
​ Native Providers (No LiteLLM Required)
OpenAI
uv add "crewai[openai]"
Anthropic
uv add "crewai[anthropic]"
Google Gemini
uv add "crewai[gemini]"
Azure OpenAI
uv add "crewai[azure]"
AWS Bedrock
uv add "crewai[bedrock]"
​ How to Check If You’re Using LiteLLM
​ Check your model strings
​ Check if LiteLLM is installed
# Using pip pip show litellm # Using uv uv pip show litellm
​ Check your dependencies
# If you see this, you have LiteLLM as a dependency dependencies = [ "crewai[litellm]>=0.100.0" , # ← Uses LiteLLM ] # Change to a native provider extra instead dependencies = [ "crewai[openai]>=0.100.0" , # ← Native, no LiteLLM ]
​ Migration Guide
​ Step 1: Identify your current provider
# Search your codebase for LLM model strings grep -r "LLM(" --include= "*.py" . grep -r "llm=" --include= "*.yaml" . grep -r "llm:" --include= "*.yaml" .
​ Step 2: Switch to a native provider
Switch to OpenAI
Switch to Anthropic
Switch to Gemini
Switch to Azure OpenAI
Switch to AWS Bedrock
from crewai import LLM # Before (LiteLLM): # llm = LLM(model="groq/llama-3.1-70b") # After (Native): llm = LLM( model = "openai/gpt-4o" )
# Install uv add "crewai[openai]" # Set your API key export OPENAI_API_KEY = "sk-..."
from crewai import LLM # Before (LiteLLM): # llm = LLM(model="together_ai/meta-llama/Meta-Llama-3.1-70B") # After (Native): llm = LLM( model = "anthropic/claude-sonnet-4-20250514" )
# Install uv add "crewai[anthropic]" # Set your API key export ANTHROPIC_API_KEY = "sk-ant-..."
from crewai import LLM # Before (LiteLLM): # llm = LLM(model="mistral/mistral-large-latest") # After (Native): llm = LLM( model = "gemini/gemini-2.0-flash" )
# Install uv add "crewai[gemini]" # Set your API key export GEMINI_API_KEY = "..."
from crewai import LLM # After (Native): llm = LLM( model = "azure/your-deployment-name" , api_key = "your-azure-api-key" , base_url = "https://your-resource.openai.azure.com" , api_version = "2024-06-01" )
# Install uv add "crewai[azure]"
from crewai import LLM # After (Native): llm = LLM( model = "bedrock/anthropic.claude-3-5-sonnet-20241022-v2:0" , aws_region_name = "us-east-1" )
# Install uv add "crewai[bedrock]" # Configure AWS credentials export AWS_ACCESS_KEY_ID = "..." export AWS_SECRET_ACCESS_KEY = "..." export AWS_DEFAULT_REGION = "us-east-1"
​ Step 3: Keep Ollama without LiteLLM
from crewai import LLM # Before (LiteLLM): # llm = LLM(model="ollama/llama3") # After (OpenAI-compatible mode, no LiteLLM needed): llm = LLM( model = "llama3" , custom_openai = True , base_url = "http://localhost:11434/v1" , api_key = "ollama" # Ollama doesn't require a real API key )
​ Step 4: Update your YAML configs
# Before (LiteLLM providers): researcher : role : Research Specialist goal : Conduct research backstory : A dedicated researcher llm : groq/llama-3.1-70b # ← LiteLLM # After (Native provider): researcher : role : Research Specialist goal : Conduct research backstory : A dedicated researcher llm : openai/gpt-4o # ← Native
​ Step 5: Remove LiteLLM
# Remove litellm from your project uv remove litellm # Or if using pip pip uninstall litellm # Update your pyproject.toml: change crewai[litellm] to your provider extra # e.g., crewai[openai], crewai[anthropic], crewai[gemini]
​ Step 6: Verify
# Run your crew crewai run # Or run your tests uv run pytest
​ Custom OpenAI-Compatible Endpoints
​ How it works
custom_openai=True forces CrewAI to use the native OpenAI SDK, regardless of the model name.
The model ID is passed to the endpoint without validation against OpenAI’s known-model list. This lets you use arbitrary model IDs your gateway expects (for example, anthropic/claude-sonnet-4-6 served behind an OpenAI-compatible proxy). An optional leading openai/ routing prefix is stripped.
A base URL is required . CrewAI resolves it, in order, from: base_url=... api_base=... OPENAI_BASE_URL environment variable OPENAI_API_BASE environment variable (legacy) If none are set, CrewAI raises a ValueError so misconfiguration fails fast instead of silently hitting api.openai.com .
from crewai import LLM llm = LLM( model = "anthropic/claude-sonnet-4-6" , # passed through as-is custom_openai = True , base_url = "https://your-gateway.example/v1" , api_key = "your-key" , )
​ Connect to common servers
Ollama
vLLM
LM Studio
Env vars
from crewai import LLM llm = LLM( model = "llama3.2:latest" , custom_openai = True , base_url = "http://localhost:11434/v1" , api_key = "ollama" , # Ollama ignores it, but the client requires a value )
from crewai import LLM llm = LLM( model = "meta-llama/Meta-Llama-3.1-8B-Instruct" , custom_openai = True , base_url = "http://localhost:8000/v1" , api_key = "not-needed" , )
from crewai import LLM llm = LLM( model = "your-loaded-model" , custom_openai = True , base_url = "http://localhost:1234/v1" , api_key = "lm-studio" , )
export OPENAI_BASE_URL = "https://your-gateway.example/v1" export OPENAI_API_KEY = "your-key"
from crewai import LLM # base_url is picked up from OPENAI_BASE_URL / OPENAI_API_BASE llm = LLM( model = "anthropic/claude-sonnet-4-6" , custom_openai = True )
​ Quick Reference: Model String Mapping
from crewai import LLM # ─── LiteLLM providers → Native alternatives ──────────────────── # Groq → OpenAI or Anthropic # llm = LLM(model="groq/llama-3.1-70b") llm = LLM( model = "openai/gpt-4o-mini" ) # Fast & affordable llm = LLM( model = "anthropic/claude-haiku-3-5" ) # Fast & affordable # Together AI → OpenAI or Gemini # llm = LLM(model="together_ai/meta-llama/Meta-Llama-3.1-70B") llm = LLM( model = "openai/gpt-4o" ) # High quality llm = LLM( model = "gemini/gemini-2.0-flash" ) # Fast & capable # Mistral → Anthropic or OpenAI # llm = LLM(model="mistral/mistral-large-latest") llm = LLM( model = "anthropic/claude-sonnet-4-20250514" ) # High quality # Ollama → OpenAI-compatible (keep using local models) # llm = LLM(model="ollama/llama3") llm = LLM( model = "llama3" , custom_openai = True , base_url = "http://localhost:11434/v1" , api_key = "ollama" )
​ FAQ
Do I lose any functionality by removing LiteLLM?
Can I use multiple native providers at the same time?
uv add "crewai[openai,anthropic,gemini]"
researcher = Agent( llm = "openai/gpt-4o" , ... ) writer = Agent( llm = "anthropic/claude-sonnet-4-20250514" , ... )
Is LiteLLM safe to use now?
What about environment variables like OPENAI_API_KEY?
How do I connect to Groq, Together AI, or other OpenAI-compatible providers without LiteLLM?
​ Related Resources
LLM Connections — Full guide to connecting CrewAI with any LLM
LLM Concepts — Understanding LLMs in CrewAI
LLM Selection Guide — Choosing the right model for your use case
Was this page helpful?
Yes
No
