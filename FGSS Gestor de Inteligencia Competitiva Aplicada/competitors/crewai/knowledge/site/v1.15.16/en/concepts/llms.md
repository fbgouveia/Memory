# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/llms
- Raw SHA-256: `f4aacddf604fe1ad40ffc53d2d805cf8b2cbda9f615b5707faa8e17e58a31293`

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
Navigation Core Concepts LLMs
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
LLMs
Copy page Copy page
A comprehensive guide to configuring and using Large Language Models (LLMs) in your CrewAI projects
Copy page Copy page
​ Overview
​ What are LLMs?
LLM Basics
Context Window
Temperature
Provider Selection
​ Setting up your LLM
1. Environment Variables
2. YAML Configuration
3. Direct Code
MODEL = provider/model-id # e.g. openai/gpt-5.6-terra # Be sure to set your API keys here too. See the Provider # section below.
researcher : role : Research Specialist goal : Conduct comprehensive research and analysis backstory : A dedicated research professional with years of experience verbose : true llm : provider/model-id # e.g. anthropic/claude-sonnet-4-6 # (see provider configuration examples below for more)
Version control your agent settings
Easily switch between different models
Share configurations across team members
Document model choices and their purposes
from crewai import LLM # Basic configuration llm = LLM( model = "provider/model-id" ) # e.g. gemini/gemini-3.6-flash # Advanced configuration with detailed parameters llm = LLM( model = "provider/model-id" , timeout = 120 , max_tokens = 4000 , response_format = { "type" : "json" }, # For structured outputs )
timeout : Maximum wait time for response
max_tokens : Limits response length
response_format : Specifies output structure
uv add 'crewai[litellm]'
​ Provider Configuration Examples
OpenAI
# Required OPENAI_API_KEY =s k-... # Optional OPENAI_BASE_URL =< custom-base-url>
from crewai import LLM llm = LLM( model = "openai/gpt-5.6-terra" , api_key = "your-api-key" , # Or set OPENAI_API_KEY reasoning_effort = "medium" , max_completion_tokens = 4000 )
from crewai import LLM llm = LLM( model = "anthropic/claude-sonnet-4-6" , custom_openai = True , base_url = "https://your-gateway.example.com/v1" , api_key = "your-gateway-api-key" , )
from crewai import LLM llm = LLM( model = "openai/gpt-5.6-terra" , api_key = "your-api-key" , base_url = "https://api.openai.com/v1" , # Optional custom endpoint organization = "org-..." , # Optional organization ID project = "proj_..." , # Optional project ID max_completion_tokens = 4000 , reasoning_effort = "medium" , stream = True , # Enable streaming timeout = 60.0 , # Request timeout in seconds max_retries = 3 # Maximum retry attempts )
from pydantic import BaseModel from crewai import LLM class ResponseFormat ( BaseModel ): name: str age: int summary: str llm = LLM( model = "openai/gpt-5.6-terra" , )
OPENAI_API_KEY : Your OpenAI API key (required)
OPENAI_BASE_URL : Custom base URL for OpenAI API (optional)
Native function calling support
Structured outputs with JSON schema
Streaming support for real-time responses
Token usage tracking
Provider-specific generation controls
Log probabilities for token-level insights
Reasoning effort control for supported models
from crewai import LLM # Use the Responses API instead of Chat Completions llm = LLM( model = "openai/gpt-4o" , api = "responses" , # Enable Responses API store = True , # Store responses for multi-turn (optional) auto_chain = True , # Auto-chain for reasoning models (optional) )
api : Set to "responses" to use the Responses API (default: "completions" )
instructions : System-level instructions (Responses API only)
store : Whether to store responses for multi-turn conversations
previous_response_id : ID of previous response for multi-turn
include : Additional data to include in response (e.g., ["reasoning.encrypted_content"] )
builtin_tools : List of OpenAI built-in tools: "web_search" , "file_search" , "code_interpreter" , "computer_use"
parse_tool_outputs : Return structured ResponsesAPIResult with parsed built-in tool outputs
auto_chain : Automatically track and use response IDs for multi-turn conversations
auto_chain_reasoning : Track encrypted reasoning items for ZDR (Zero Data Retention) compliance
uv add "crewai[openai]"
Meta-Llama
# Meta Llama API Key Configuration LLAMA_API_KEY =L LM|your_api_key_here
from crewai import LLM # Initialize Meta Llama LLM llm = LLM( model = "meta_llama/Llama-4-Scout-17B-16E-Instruct-FP8" , temperature = 0.8 , stop = [ "END" ], seed = 42 )
uv add 'crewai[litellm]'
Snowflake Cortex
# Required SNOWFLAKE_PAT =< your-programmatic-access-token> SNOWFLAKE_ACCOUNT_URL =h ttps://<account-identifier>.snowflakecomputing.com # Alternative account configuration SNOWFLAKE_ACCOUNT =< account-identifier>
from crewai import LLM llm = LLM( model = "snowflake/openai-gpt-4.1" , temperature = 0.7 , max_completion_tokens = 1024 , )
from crewai import LLM llm = LLM( model = "snowflake/claude-sonnet-4-5" , max_completion_tokens = 1024 , stream = True , )
SNOWFLAKE_PAT , SNOWFLAKE_TOKEN , or SNOWFLAKE_JWT : token used as the Bearer credential
SNOWFLAKE_ACCOUNT_URL : full Snowflake account URL
SNOWFLAKE_ACCOUNT , SNOWFLAKE_ACCOUNT_ID , or SNOWFLAKE_ACCOUNT_IDENTIFIER : account identifier used to build the account URL
Native provider selection with model="snowflake/<model-name>"
Streaming and non-streaming Chat Completions only; api="responses" is not supported
Token usage tracking
Function calling for Snowflake-hosted OpenAI and Claude models
Automatic removal of invalid trailing assistant prefill for Snowflake Claude models
Anthropic
# Required ANTHROPIC_API_KEY =s k-ant-...
from crewai import LLM llm = LLM( model = "anthropic/claude-sonnet-4-6" , api_key = "your-api-key" , # Or set ANTHROPIC_API_KEY max_tokens = 4096 # Required for Anthropic )
from crewai import LLM llm = LLM( model = "anthropic/claude-sonnet-4-6" , api_key = "your-api-key" , base_url = "https://api.anthropic.com" , # Optional custom endpoint max_tokens = 4096 , # Required parameter stop_sequences = [ "END" , "STOP" ], # Anthropic uses stop_sequences stream = True , # Enable streaming timeout = 60.0 , # Request timeout in seconds max_retries = 3 # Maximum retry attempts )
from crewai import LLM # Enable extended thinking with default settings llm = LLM( model = "anthropic/claude-sonnet-4-6" , thinking = { "type" : "enabled" }, max_tokens = 10000 ) # Configure thinking with budget control llm = LLM( model = "anthropic/claude-sonnet-4-6" , thinking = { "type" : "enabled" , "budget_tokens" : 5000 # Limit thinking tokens }, max_tokens = 10000 )
type : Set to "enabled" to activate extended thinking mode
budget_tokens (optional): Maximum tokens to use for thinking (helps control costs)
Complex reasoning and multi-step problem solving
Mathematical calculations and proofs
Code analysis and debugging
Strategic planning and decision making
Research and analytical tasks
ANTHROPIC_API_KEY : Your Anthropic API key (required)
Native tool use support for Claude 3+ models
Extended Thinking support for compatible Claude models
Streaming support for real-time responses
Automatic system message handling
Stop sequences for controlled output
Token usage tracking
Multi-turn tool use conversations
usage = llm.get_token_usage_summary() # total_tokens == prompt_tokens + completion_tokens # prompt_tokens includes cache read + cache write for Anthropic
max_tokens is a required parameter for all Anthropic models
Claude uses stop_sequences instead of stop
System messages are handled separately from conversation messages
First message must be from the user (automatically handled)
Messages must alternate between user and assistant
uv add "crewai[anthropic]"
Google (Gemini API)
# Required (one of the following) GOOGLE_API_KEY =< your-api-key> GEMINI_API_KEY =< your-api-key> # For Vertex AI Express mode (API key authentication) GOOGLE_GENAI_USE_VERTEXAI = true GOOGLE_API_KEY =< your-api-key> # For Vertex AI with service account GOOGLE_CLOUD_PROJECT =< your-project-id> GOOGLE_CLOUD_LOCATION =< location> # Defaults to us-central1
from crewai import LLM llm = LLM( model = "gemini/gemini-3.6-flash" , api_key = "your-api-key" , # Or set GOOGLE_API_KEY/GEMINI_API_KEY )
from crewai import LLM llm = LLM( model = "gemini/gemini-3.6-flash" , api_key = "your-api-key" , max_output_tokens = 8192 , stop_sequences = [ "END" , "STOP" ], stream = True , # Enable streaming safety_settings = { "HARM_CATEGORY_HARASSMENT" : "BLOCK_NONE" , "HARM_CATEGORY_HATE_SPEECH" : "BLOCK_NONE" } )
GOOGLE_GENAI_USE_VERTEXAI = true GOOGLE_API_KEY =< your-api-key>
from crewai import LLM llm = LLM( model = "gemini/gemini-3.6-flash" )
New Google Cloud users: Get an express mode API key
Existing Google Cloud users: Get a Google Cloud API key bound to a service account
from crewai import LLM llm = LLM( model = "gemini/gemini-3.6-flash" , project = "your-gcp-project-id" , location = "us-central1" # GCP region )
GOOGLE_API_KEY or GEMINI_API_KEY : Your Google API key (required for Gemini API and Vertex AI Express mode)
GOOGLE_GENAI_USE_VERTEXAI : Set to true to use Vertex AI (required for Express mode)
GOOGLE_CLOUD_PROJECT : Google Cloud project ID (for Vertex AI with service account)
GOOGLE_CLOUD_LOCATION : GCP location (defaults to us-central1 )
Native function calling support for compatible Gemini models
Streaming support for real-time responses
Multimodal capabilities (text, images, video)
Safety settings configuration
Support for both Gemini API and Vertex AI
Automatic system instruction handling
Token usage tracking
uv add "crewai[google-genai]"
Google (Vertex AI)
GOOGLE_GENAI_USE_VERTEXAI = true GOOGLE_CLOUD_PROJECT =< your-project-id> GOOGLE_CLOUD_LOCATION =< location>
from crewai import LLM llm = LLM( model = "gemini/gemini-3.6-flash" )
uv add "crewai[google-genai]"
Azure
# Required AZURE_API_KEY =< your-api-key> AZURE_ENDPOINT =< your-endpoint-url> # Optional AZURE_API_VERSION =< api-version> # Defaults to 2024-06-01
https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>
https://<resource-name>.inference.azure.com
llm = LLM( model = "azure/gpt-4" , api_key = "<your-api-key>" , # Or set AZURE_API_KEY endpoint = "<your-endpoint-url>" , api_version = "2024-06-01" )
llm = LLM( model = "azure/gpt-4o" , temperature = 0.7 , max_tokens = 4000 , top_p = 0.9 , frequency_penalty = 0.0 , presence_penalty = 0.0 , stop = [ "END" ], stream = True , timeout = 60.0 , max_retries = 3 )
AZURE_API_KEY : Your Azure API key (required)
AZURE_ENDPOINT : Your Azure endpoint URL (required, also checks AZURE_OPENAI_ENDPOINT and AZURE_API_BASE )
AZURE_API_VERSION : API version (optional, defaults to 2024-06-01 )
Native function calling support for Azure OpenAI models (gpt-4, gpt-4o, gpt-3.5-turbo, etc.)
Streaming support for real-time responses
Automatic endpoint URL validation and correction
Comprehensive error handling with retry logic
Token usage tracking
uv add "crewai[azure-ai-inference]"
AWS Bedrock
# Required AWS_ACCESS_KEY_ID =< your-access-key> AWS_SECRET_ACCESS_KEY =< your-secret-key> # Optional AWS_SESSION_TOKEN =< your-session-token> # For temporary credentials AWS_DEFAULT_REGION =< your-region> # Defaults to us-east-1 AWS_REGION_NAME =< your-region> # Alternative configuration for backwards compatibility with LiteLLM. Defaults to us-east-1
from crewai import LLM llm = LLM( model = "bedrock/us.anthropic.claude-sonnet-4-6" , region_name = "us-east-1" )
from crewai import LLM llm = LLM( model = "bedrock/us.anthropic.claude-sonnet-4-6" , aws_access_key_id = "your-access-key" , # Or set AWS_ACCESS_KEY_ID aws_secret_access_key = "your-secret-key" , # Or set AWS_SECRET_ACCESS_KEY aws_session_token = "your-session-token" , # For temporary credentials region_name = "us-east-1" , temperature = 0.7 , max_tokens = 4096 , top_p = 0.9 , top_k = 250 , # For Claude models stop_sequences = [ "END" , "STOP" ], stream = True , # Enable streaming guardrail_config = { # Optional content filtering "guardrailIdentifier" : "your-guardrail-id" , "guardrailVersion" : "1" }, additional_model_request_fields = { # Model-specific parameters "top_k" : 250 } )
AWS_ACCESS_KEY_ID : AWS access key (required)
AWS_SECRET_ACCESS_KEY : AWS secret key (required)
AWS_SESSION_TOKEN : AWS session token for temporary credentials (optional)
AWS_DEFAULT_REGION : AWS region (defaults to us-east-1 )
AWS_REGION_NAME : AWS region (defaults to us-east-1 ). Alternative configuration for backwards compatibility with LiteLLM
Native tool calling support via Converse API
Streaming and non-streaming responses
Comprehensive error handling with retry logic
Guardrail configuration for content filtering
Model-specific parameters via additional_model_request_fields
Token usage tracking and stop reason logging
Support for all Bedrock foundation models
Automatic conversation format handling
Uses the modern Converse API for unified model access
Automatic handling of model-specific conversation requirements
System messages are handled separately from conversation
First message must be from user (automatically handled)
Some models (like Cohere) require conversation to end with user message
uv add "crewai[bedrock]"
Amazon SageMaker
AWS_ACCESS_KEY_ID =< your-access-key> AWS_SECRET_ACCESS_KEY =< your-secret-key> AWS_DEFAULT_REGION =< your-region>
llm = LLM( model = "sagemaker/<my-endpoint>" )
uv add 'crewai[litellm]'
Mistral
MISTRAL_API_KEY =< your-api-key>
llm = LLM( model = "mistral/mistral-large-latest" , temperature = 0.7 )
uv add 'crewai[litellm]'
Nvidia NIM
NVIDIA_API_KEY =< your-api-key>
llm = LLM( model = "nvidia_nim/nvidia/nvidia-nemotron-3-ultra-550b-a55b" , temperature = 0.7 )
uv add 'crewai[litellm]'
NVIDIA Nemotron
NVIDIA_API_KEY =< your-api-key>
from crewai import LLM llm = LLM( model = "nvidia_nim/nvidia/nvidia-nemotron-3-ultra-550b-a55b" , temperature = 0.2 , max_tokens = 4096 , )
from crewai import LLM llm = LLM( model = "openai/nvidia-nemotron-3-ultra-550b-a55b-nvfp4" , base_url = "https://your-nemotron-endpoint.example.com/v1" , api_key = "your-api-key" , temperature = 0.2 , max_tokens = 4096 , )
uv add 'crewai[litellm]'
Local NVIDIA NIM Deployed using WSL2
Follow installation instructions from NVIDIA Website
Install the local model. For Llama 3.1-8b follow instructions
Configure your crewai local models:
from crewai.llm import LLM local_nvidia_nim_llm = LLM( model = "openai/meta/llama-3.1-8b-instruct" , # it's an openai-api compatible model base_url = "http://localhost:8000/v1" , api_key = "<your_api_key|any text if you have not configured it>" , # api_key is required, but you can use any text ) # Then you can use it in your crew: @CrewBase class MyCrew (): # ... @agent def researcher ( self ) -> Agent: return Agent( config = self .agents_config[ 'researcher' ], # type: ignore[index] llm = local_nvidia_nim_llm ) # ...
uv add 'crewai[litellm]'
Groq
GROQ_API_KEY =< your-api-key>
llm = LLM( model = "groq/qwen/qwen3.6-27b" , temperature = 0.7 )
uv add 'crewai[litellm]'
IBM watsonx.ai
# Required WATSONX_URL =< your-url> WATSONX_APIKEY =< your-apikey> WATSONX_PROJECT_ID =< your-project-id> # Optional WATSONX_TOKEN =< your-token> WATSONX_DEPLOYMENT_SPACE_ID =< your-space-id>
llm = LLM( model = "watsonx/meta-llama/llama-3-1-70b-instruct" , base_url = "https://api.watsonx.ai/v1" )
uv add 'crewai[litellm]'
Ollama (Local LLMs)
Install Ollama: ollama.ai
Run a model: ollama run llama3
Configure:
llm = LLM( model = "ollama/llama3:70b" , base_url = "http://localhost:11434" )
uv add 'crewai[litellm]'
Fireworks AI
FIREWORKS_API_KEY =< your-api-key>
llm = LLM( model = "fireworks_ai/accounts/fireworks/models/llama-v3-70b-instruct" , temperature = 0.7 )
uv add 'crewai[litellm]'
Perplexity AI
PERPLEXITY_API_KEY =< your-api-key>
llm = LLM( model = "perplexity/sonar-pro" )
uv add 'crewai[litellm]'
Hugging Face
HF_TOKEN =< your-api-key>
llm = LLM( model = "huggingface/meta-llama/Meta-Llama-3.1-8B-Instruct" )
uv add 'crewai[litellm]'
SambaNova
SAMBANOVA_API_KEY =< your-api-key>
llm = LLM( model = "sambanova/Meta-Llama-3.3-70B-Instruct" , temperature = 0.7 )
uv add 'crewai[litellm]'
Cerebras
# Required CEREBRAS_API_KEY =< your-api-key>
llm = LLM( model = "cerebras/gpt-oss-120b" , temperature = 0.7 , max_tokens = 8192 )
Fast inference speeds
Competitive pricing
Good balance of speed and quality
Support for long context windows
uv add 'crewai[litellm]'
Open Router
OPENROUTER_API_KEY =< your-api-key>
llm = LLM( model = "openrouter/deepseek/deepseek-r1" , base_url = "https://openrouter.ai/api/v1" , api_key = OPENROUTER_API_KEY )
openrouter/deepseek/deepseek-r1
openrouter/deepseek/deepseek-chat
uv add 'crewai[litellm]'
Nebius AI Studio
NEBIUS_API_KEY =< your-api-key>
llm = LLM( model = "nebius/Qwen/Qwen3-30B-A3B" )
Large collection of open source models
Higher rate limits
Competitive pricing
Good balance of speed and quality
uv add 'crewai[litellm]'
​ Streaming Responses
Basic Setup
Event Handling
Agent & Task Tracking
from crewai import LLM # Create an LLM with streaming enabled llm = LLM( model = "openai/gpt-5.6-terra" , stream = True # Enable streaming )
from crewai.events import ( LLMStreamChunkEvent ) from crewai.events import BaseEventListener class MyCustomListener ( BaseEventListener ): def setup_listeners ( self , crewai_event_bus ): @crewai_event_bus.on (LLMStreamChunkEvent) def on_llm_stream_chunk ( self , event : LLMStreamChunkEvent): # Process each chunk as it arrives print ( f "Received chunk: { event.chunk } " ) my_listener = MyCustomListener()
from crewai import LLM , Agent, Task, Crew from crewai.events import LLMStreamChunkEvent from crewai.events import BaseEventListener class MyCustomListener ( BaseEventListener ): def setup_listeners ( self , crewai_event_bus ): @crewai_event_bus.on (LLMStreamChunkEvent) def on_llm_stream_chunk ( source , event ): if researcher.id == event.agent_id: print ( " \n ============== \n Got event:" , event, " \n ============== \n " ) my_listener = MyCustomListener() llm = LLM( model = "openai/gpt-5.6-terra" , stream = True ) researcher = Agent( role = "About User" , goal = "You know everything about the user." , backstory = """You are a master at understanding people and their preferences.""" , llm = llm, ) search = Task( description = "Answer the following questions about the user: {question} " , expected_output = "An answer to the question." , agent = researcher, ) crew = Crew( agents = [researcher], tasks = [search]) result = crew.kickoff( inputs = { "question" : "..." } )
Debugging specific agent behaviors
Logging LLM usage by task type
Auditing which agents are making what types of LLM calls
Performance monitoring of specific tasks
​ Async LLM Calls
Basic Usage
With Streaming
import asyncio from crewai import LLM async def main (): llm = LLM( model = "openai/gpt-4o" ) # Single async call response = await llm.acall( "What is the capital of France?" ) print (response) asyncio.run(main())
import asyncio from crewai import LLM async def stream_async (): llm = LLM( model = "openai/gpt-4o" , stream = True ) response = await llm.acall( "Write a short story about AI" ) print (response) asyncio.run(stream_async())
​ Structured LLM Calls
from crewai import LLM class Dog ( BaseModel ): name: str age: int breed: str llm = LLM( model = "openai/gpt-5.6-terra" , response_format = Dog) response = llm.call( "Analyze the following messages and return the name, age, and breed. " "Meet Kona! She is 3 years old and is a black german shepherd." ) print (response) # Output: # Dog(name='Kona', age=3, breed='black german shepherd')
​ Advanced Features and Optimization
Context Window Management
from crewai import LLM # CrewAI automatically handles: # 1. Token counting and tracking # 2. Content summarization when needed # 3. Task splitting for large contexts llm = LLM( model = "openai/gpt-5.6-terra" , max_completion_tokens = 4000 , # Limit response length )
Choose models with appropriate context windows
Pre-process long inputs when possible
Use chunking for large documents
Monitor token usage to optimize costs
Performance Optimization
Token Usage Optimization
Small tasks (up to 4K tokens): Standard models
Medium tasks (between 4K-32K): Enhanced models
Large tasks (over 32K): Large context models
# Configure model with appropriate settings llm = LLM( model = "openai/gpt-5.6-terra" , reasoning_effort = "medium" , max_completion_tokens = 4096 , timeout = 300 )
Best Practices
Monitor token usage
Implement rate limiting
Use caching when possible
Set appropriate max_tokens limits
Drop Additional Parameters
from crewai import LLM import os os.environ[ "OPENAI_API_KEY" ] = "<api-key>" o3_llm = LLM( model = "o3" , drop_params = True , additional_drop_params = [ "stop" ] )
Transport Interceptors
✅ OpenAI
✅ Anthropic
import httpx from crewai import LLM from crewai.llms.hooks import BaseInterceptor class CustomInterceptor (BaseInterceptor[httpx.Request, httpx.Response]): """Custom interceptor to modify requests and responses.""" def on_outbound ( self , request : httpx.Request) -> httpx.Request: """Print request before sending to the LLM provider.""" print (request) return request def on_inbound ( self , response : httpx.Response) -> httpx.Response: """Process response after receiving from the LLM provider.""" print ( f "Status: { response.status_code } " ) print ( f "Response time: { response.elapsed } " ) return response # Use the interceptor with an LLM llm = LLM( model = "openai/gpt-4o" , interceptor = CustomInterceptor() )
Both methods must return the received object or type of object.
Modifying received objects may result in unexpected behavior or application crashes.
Not all providers support interceptors - check the supported providers list above
Message transformation and filtering
Debugging API interactions
​ Common Issues and Solutions
Authentication
Model Names
Context Length
# OpenAI OPENAI_API_KEY = sk-... # Anthropic ANTHROPIC_API_KEY = sk-ant-...
# Correct llm = LLM( model = "openai/gpt-4" ) # Incorrect llm = LLM( model = "gpt-4" )
# Large context model llm = LLM( model = "openai/gpt-4o" ) # 128K tokens
Was this page helpful?
Yes
No
