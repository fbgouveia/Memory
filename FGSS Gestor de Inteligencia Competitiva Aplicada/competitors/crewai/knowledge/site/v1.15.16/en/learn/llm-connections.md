# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/llm-connections
- Raw SHA-256: `6a9725de5e4dccadabe88cb1199af4272b6b0575e6da1114231a15d0128da141`

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
Navigation Learn Connect to any LLM
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
Connect to any LLM
Copy page Copy page
Comprehensive guide on integrating CrewAI with various Large Language Models (LLMs) using LiteLLM, including supported providers and configuration options.
Copy page Copy page
​ Connect CrewAI to LLMs
​ Supported Providers
OpenAI
Anthropic
Google (Vertex AI, Gemini)
Azure OpenAI
AWS (Bedrock, SageMaker)
Cohere
VoyageAI
Hugging Face
Ollama
Mistral AI
Replicate
Together AI
AI21
Cloudflare Workers AI
DeepInfra
Groq
SambaNova
Nebius AI Studio
NVIDIA NIMs
And many more!
uv add 'crewai[litellm]'
​ Changing the LLM
Using a String Identifier
Using the LLM Class
Code
from crewai import Agent # Using OpenAI's GPT-4 openai_agent = Agent( role = 'OpenAI Expert' , goal = 'Provide insights using GPT-4' , backstory = "An AI assistant powered by OpenAI's latest model." , llm = 'gpt-4' ) # Using Anthropic's Claude claude_agent = Agent( role = 'Anthropic Expert' , goal = 'Analyze data using Claude' , backstory = "An AI assistant leveraging Anthropic's language model." , llm = 'claude-2' )
Code
from crewai import Agent, LLM llm = LLM( model = "gpt-4" , temperature = 0.7 , base_url = "https://api.openai.com/v1" , api_key = "your-api-key-here" ) agent = Agent( role = 'Customized LLM Expert' , goal = 'Provide tailored responses' , backstory = "An AI assistant with custom LLM settings." , llm = llm )
​ Configuration Options
​ Connecting to OpenAI-Compatible LLMs
Using Environment Variables
Using LLM Class Attributes
Generic
Google
import os os.environ[ "OPENAI_API_KEY" ] = "your-api-key" os.environ[ "OPENAI_API_BASE" ] = "https://api.your-provider.com/v1" os.environ[ "OPENAI_MODEL_NAME" ] = "your-model-name"
import os # Example using Gemini's OpenAI-compatible API. os.environ[ "OPENAI_API_KEY" ] = "your-gemini-key" # Should start with AIza... os.environ[ "OPENAI_API_BASE" ] = "https://generativelanguage.googleapis.com/v1beta/openai/" os.environ[ "OPENAI_MODEL_NAME" ] = "openai/gemini-2.0-flash" # Add your Gemini model here, under openai/
Generic
Google
llm = LLM( model = "custom-model-name" , api_key = "your-api-key" , base_url = "https://api.your-provider.com/v1" ) agent = Agent( llm = llm, ... )
# Example using Gemini's OpenAI-compatible API llm = LLM( model = "openai/gemini-2.0-flash" , base_url = "https://generativelanguage.googleapis.com/v1beta/openai/" , api_key = "your-gemini-key" , # Should start with AIza... ) agent = Agent( llm = llm, ... )
​ Using Local Models with Ollama
Download and install Ollama
Pull the desired model
Configure your agent
Code
agent = Agent( role = 'Local AI Expert' , goal = 'Process information using a local model' , backstory = "An AI assistant running on local hardware." , llm = LLM( model = "ollama/llama3.2" , base_url = "http://localhost:11434" ) )
​ Changing the Base API URL
llm = LLM( model = "custom-model-name" , base_url = "https://api.your-provider.com/v1" , api_key = "your-api-key" ) agent = Agent( llm = llm, ... )
​ Conclusion
Was this page helpful?
Yes
No
