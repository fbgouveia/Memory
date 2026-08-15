# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/truefoundry
- Raw SHA-256: `c68a67345b7fc47df184ff66df96b4e3e6ff56bfb6b7df06c0414faf5449f392`

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
Navigation Observability TrueFoundry Integration
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
TrueFoundry Integration
Copy page Copy page
Unified API Access : Connect to 250+ LLMs (OpenAI, Claude, Gemini, Groq, Mistral) through one API
Low Latency : Sub-3ms internal latency with intelligent routing and load balancing
Enterprise Security : SOC 2, HIPAA, GDPR compliance with RBAC and audit logging
Quota and cost management : Token-based quotas, rate limiting, and comprehensive usage tracking
Observability : Full request/response logging, metrics, and traces with customizable retention
​ How TrueFoundry Integrates with CrewAI
​ Installation & Setup
Install CrewAI
pip install crewai
Get TrueFoundry Access Token
Sign up for a TrueFoundry account
Follow the steps here in Quick start
Configure CrewAI with TrueFoundry
from crewai import LLM # Create an LLM instance with TrueFoundry AI Gateway truefoundry_llm = LLM( model = "openai-main/gpt-4o" , # Similarly, you can call any model from any provider base_url = "your_truefoundry_gateway_base_url" , api_key = "your_truefoundry_api_key" ) # Use in your CrewAI agents from crewai import Agent @agent def researcher ( self ) -> Agent: return Agent( config = self .agents_config[ 'researcher' ], llm = truefoundry_llm, verbose = True )
​ Complete CrewAI Example
from crewai import Agent, Task, Crew, LLM # Configure LLM with TrueFoundry llm = LLM( model = "openai-main/gpt-4o" , base_url = "your_truefoundry_gateway_base_url" , api_key = "your_truefoundry_api_key" ) # Create agents researcher = Agent( role = 'Research Analyst' , goal = 'Conduct detailed market research' , backstory = 'Expert market analyst with attention to detail' , llm = llm, verbose = True ) writer = Agent( role = 'Content Writer' , goal = 'Create comprehensive reports' , backstory = 'Experienced technical writer' , llm = llm, verbose = True ) # Create tasks research_task = Task( description = 'Research AI market trends for 2024' , agent = researcher, expected_output = 'Comprehensive research summary' ) writing_task = Task( description = 'Create a market research report' , agent = writer, expected_output = 'Well-structured report with insights' , context = [research_task] ) # Create and execute crew crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], verbose = True ) result = crew.kickoff()
​ Observability and Governance
Performance Metrics : Track key latency metrics like Request Latency, Time to First Token (TTFS), and Inter-Token Latency (ITL) with P99, P90, and P50 percentiles
Cost and Token Usage : Gain visibility into your application’s costs with detailed breakdowns of input/output tokens and the associated expenses for each model
Usage Patterns : Understand how your application is being used with detailed analytics on user activity, model distribution, and team-based usage
Rate limit and Load balancing : You can set up rate limiting, load balancing and fallback for your models
​ Tracing
pip install traceloop-sdk
from traceloop.sdk import Traceloop # Initialize enhanced tracing Traceloop.init( api_endpoint = "https://your-truefoundry-endpoint/api/tracing" , headers = { "Authorization" : f "Bearer { your_truefoundry_pat_token } " , "TFY-Tracing-Project" : "your_project_name" , }, )
Was this page helpful?
Yes
No
