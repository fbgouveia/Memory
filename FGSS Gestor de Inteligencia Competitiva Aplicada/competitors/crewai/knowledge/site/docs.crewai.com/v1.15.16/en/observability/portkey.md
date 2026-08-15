# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/portkey
- Raw SHA-256: `3661185c895a0c4c0a05eacd8387c4e6a05f5d59aefe283525238423854c58f8`

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
Navigation Observability Portkey Integration
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
Portkey Integration
Copy page Copy page
How to use Portkey with CrewAI
Copy page Copy page
​ Introduction
Complete observability of every agent step, tool use, and interaction
Built-in reliability with fallbacks, retries, and load balancing
Cost tracking and optimization to manage your AI spend
Access to 200+ LLMs through a single integration
Guardrails to keep agent behavior safe and compliant
Version-controlled prompts for consistent agent performance
​ Installation & Setup
Install the required packages
pip install -U crewai portkey-ai
Generate API Key
Configure CrewAI with Portkey
from crewai import LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Create an LLM instance with Portkey integration gpt_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , # We are using a Virtual key, so this is a placeholder extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_LLM_VIRTUAL_KEY" , trace_id = "unique-trace-id" , # Optional, for request tracing ) ) #Use them in your Crew Agents like this: @agent def lead_market_analyst ( self ) -> Agent: return Agent( config = self .agents_config[ 'lead_market_analyst' ], verbose = True , memory = False , llm = gpt_llm )
​ Production Features
​ 1. Enhanced Observability
Traces
Logs
Metrics & Dashboards
Metadata Filtering
# Add trace_id to enable hierarchical tracing in Portkey portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" , trace_id = "unique-session-id" # Add unique trace ID ) )
Complete request and response payloads
Latency and token usage metrics
Cost calculations
Tool calls and function executions
Track cost and token usage across all crew runs
Analyze performance metrics like latency and success rates
Identify bottlenecks in your agent workflows
Compare different crew configurations and LLMs
portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" , metadata = { "crew_type" : "research_crew" , "environment" : "production" , "_user" : "user_123" , # Special _user field for user analytics "request_source" : "mobile_app" } ) )
​ 2. Reliability - Keep Your Crews Running Smoothly
from crewai import LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Create LLM with fallback configuration portkey_llm = LLM( model = "gpt-4o" , max_tokens = 1000 , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , config = { "strategy" : { "mode" : "fallback" }, "targets" : [ { "provider" : "openai" , "api_key" : "YOUR_OPENAI_API_KEY" , "override_params" : { "model" : "gpt-4o" } }, { "provider" : "anthropic" , "api_key" : "YOUR_ANTHROPIC_API_KEY" , "override_params" : { "model" : "claude-3-opus-20240229" } } ] } ) ) # Use this LLM configuration with your agents
Automatic Retries
Request Timeouts
Conditional Routing
Fallbacks
Load Balancing
​ 3. Prompting in CrewAI
Manage prompts in Portkey's Prompt Library
Prompt Playground
Using Prompt Templates
Prompt Versioning
Mustache Templating for variables
Iteratively develop prompts before using them in your agents
Test prompts with different variables and models
Compare outputs between different prompt versions
Collaborate with team members on prompt development
from crewai import Agent, LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL , Portkey # Initialize Portkey admin client portkey_admin = Portkey( api_key = "YOUR_PORTKEY_API_KEY" ) # Retrieve prompt using the render API prompt_data = portkey_client.prompts.render( prompt_id = "YOUR_PROMPT_ID" , variables = { "agent_role" : "Senior Research Scientist" , } ) backstory_agent_prompt = prompt_data.data.messages[ 0 ][ "content" ] # Set up LLM with Portkey integration portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" ) ) # Create agent using the rendered prompt researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = backstory_agent, # Use the rendered prompt verbose = True , llm = portkey_llm )
Create multiple versions of the same prompt
Compare performance between versions
Roll back to previous versions if needed
Specify which version to use in your code:
# Use a specific prompt version prompt_data = portkey_admin.prompts.render( prompt_id = "YOUR_PROMPT_ID@version_number" , variables = { "agent_role" : "Senior Research Scientist" , "agent_goal" : "Discover groundbreaking insights" } )
You are a {{agent_role}} with expertise in {{domain}}. Your mission is to {{agent_goal}} by leveraging your knowledge and experience in the field. Always maintain a {{tone}} tone and focus on providing {{focus_area}}.
prompt_data = portkey_admin.prompts.render( prompt_id = "YOUR_PROMPT_ID" , variables = { "agent_role" : "Senior Research Scientist" , "domain" : "artificial intelligence" , "agent_goal" : "discover groundbreaking insights" , "tone" : "professional" , "focus_area" : "practical applications" } )
Prompt Engineering Studio
​ 4. Guardrails for Safe Crews
Generating harmful or inappropriate content
Leaking sensitive information like PII
Hallucinating incorrect information
Generating outputs in incorrect formats
from crewai import Agent, LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Create LLM with guardrails portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" , config = { "input_guardrails" : [ "guardrails-id-xxx" , "guardrails-id-yyy" ], "output_guardrails" : [ "guardrails-id-zzz" ] } ) ) # Create agent with guardrailed LLM researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = "You are an expert researcher with deep domain knowledge." , verbose = True , llm = portkey_llm )
Detect and redact PII in both inputs and outputs
Filter harmful or inappropriate content
Validate response formats against schemas
Check for hallucinations against ground truth
Apply custom business logic and rules
Learn More About Guardrails
​ 5. User Tracking with Metadata
from crewai import Agent, LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Configure LLM with user tracking portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" , metadata = { "_user" : "user_123" , # Special _user field for user analytics "user_tier" : "premium" , "user_company" : "Acme Corp" , "session_id" : "abc-123" } ) ) # Create agent with tracked LLM researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = "You are an expert researcher with deep domain knowledge." , verbose = True , llm = portkey_llm )
Filter analytics by user
Per-user cost tracking and budgeting
Personalized user analytics
Team or organization-level metrics
Environment-specific monitoring (staging vs. production)
Learn More About Metadata
​ 6. Caching for Efficient Crews
Simple Caching
Semantic Caching
from crewai import Agent, LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Configure LLM with simple caching portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" , config = { "cache" : { "mode" : "simple" } } ) ) # Create agent with cached LLM researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = "You are an expert researcher with deep domain knowledge." , verbose = True , llm = portkey_llm )
from crewai import Agent, LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Configure LLM with semantic caching portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" , config = { "cache" : { "mode" : "semantic" } } ) ) # Create agent with semantically cached LLM researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = "You are an expert researcher with deep domain knowledge." , verbose = True , llm = portkey_llm )
​ 7. Model Interoperability
from crewai import Agent, LLM from portkey_ai import createHeaders, PORTKEY_GATEWAY_URL # Set up LLMs with different providers openai_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_OPENAI_VIRTUAL_KEY" ) ) anthropic_llm = LLM( model = "claude-3-5-sonnet-latest" , max_tokens = 1000 , base_url = PORTKEY_GATEWAY_URL , api_key = "dummy" , extra_headers = createHeaders( api_key = "YOUR_PORTKEY_API_KEY" , virtual_key = "YOUR_ANTHROPIC_VIRTUAL_KEY" ) ) # Choose which LLM to use for each agent based on your needs researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = "You are an expert researcher with deep domain knowledge." , verbose = True , llm = openai_llm # Use anthropic_llm for Anthropic )
OpenAI (GPT-4o, GPT-4 Turbo, etc.)
Anthropic (Claude 3.5 Sonnet, Claude 3 Opus, etc.)
Mistral AI (Mistral Large, Mistral Medium, etc.)
Google Vertex AI (Gemini 1.5 Pro, etc.)
Cohere (Command, Command-R, etc.)
AWS Bedrock (Claude, Titan, etc.)
Local/Private Models
Supported Providers
​ Set Up Enterprise Governance for CrewAI
Cost Management : Controlling and tracking AI spending across teams
Access Control : Managing which teams can use specific models
Usage Analytics : Understanding how AI is being used across the organization
Security & Compliance : Maintaining enterprise security standards
Reliability : Ensuring consistent service across all users
Create Virtual Key
Budget limits for API usage
Rate limiting capabilities
Secure API key storage
Create Default Config
Go to Configs in Portkey dashboard
Create new config with: { "virtual_key" : "YOUR_VIRTUAL_KEY_FROM_STEP1" , "override_params" : { "model" : "gpt-4o" // Your preferred model name } }
Save and note the Config name for the next step
Configure Portkey API Key
Go to API Keys in Portkey and Create new API key
Select your config from Step 2
Generate and save your API key
Connect to CrewAI
from crewai import Agent, LLM from portkey_ai import PORTKEY_GATEWAY_URL # Configure LLM with your API key portkey_llm = LLM( model = "gpt-4o" , base_url = PORTKEY_GATEWAY_URL , api_key = "YOUR_PORTKEY_API_KEY" ) # Create agent with Portkey-enabled LLM researcher = Agent( role = "Senior Research Scientist" , goal = "Discover groundbreaking insights about the assigned topic" , backstory = "You are an expert researcher with deep domain knowledge." , verbose = True , llm = portkey_llm )
Step 1: Implement Budget Controls & Rate Limits
​ Step 1: Implement Budget Controls & Rate Limits
Set up budget limits
Prevent unexpected usage spikes using Rate limits
Track departmental spending
​ Setting Up Department-Specific Controls:
Navigate to Virtual Keys in Portkey dashboard
Create new Virtual Key for each department with budget limits and rate limits
Configure department-specific limits
Step 2: Define Model Access Rules
​ Step 2: Define Model Access Rules
​ Access Control Features:
Model Restrictions : Limit access to specific models
Data Protection : Implement guardrails for sensitive data
Reliability Controls : Add fallbacks and retry logic
​ Example Configuration:
{ "strategy" : { "mode" : "single" }, "targets" : [ { "virtual_key" : "YOUR_OPENAI_VIRTUAL_KEY" , "override_params" : { "model" : "gpt-4o" } } ] }
Step 3: Implement Access Controls
​ Step 3: Implement Access Controls
Track usage per user/team with the help of virtual keys
Apply appropriate configs to route requests
Collect relevant metadata to filter logs
Enforce access permissions
from portkey_ai import Portkey portkey = Portkey( api_key = "YOUR_ADMIN_API_KEY" ) api_key = portkey.api_keys.create( name = "engineering-team" , type = "organisation" , workspace_id = "YOUR_WORKSPACE_ID" , defaults = { "config_id" : "your-config-id" , "metadata" : { "environment" : "production" , "department" : "engineering" } }, scopes = [ "logs.view" , "configs.read" ] )
Step 4: Deploy & Monitor
​ Step 4: Deploy & Monitor
Cost tracking by department
Model usage patterns
Request volumes
Error rates
​ Enterprise Features Now Available
Departmental budget controls
Model access governance
Usage tracking & attribution
Security guardrails
Reliability features
​ Frequently Asked Questions
How does Portkey enhance CrewAI?
Can I use Portkey with existing CrewAI applications?
Does Portkey work with all CrewAI features?
Can I track usage across multiple agents in a crew?
How do I filter logs and traces for specific crew runs?
Can I use my own API keys with Portkey?
​ Resources
CrewAI Docs
Official CrewAI documentation
Book a Demo
Get personalized guidance on implementing this integration
Was this page helpful?
Yes
No
