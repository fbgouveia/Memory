# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/maxim
- Raw SHA-256: `d08d01ffe6c3249201aa97f637cf04eb92621bce4cb637bc3d18c921ddf49116`

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
Navigation Observability Maxim Integration
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
Maxim Integration
Copy page Copy page
Start Agent monitoring, evaluation, and observability
Copy page Copy page
​ Maxim Overview
​ Features
​ Prompt Management
Prompt Playground
Prompt Versions
Prompt Comparisons
​ Why use Prompt comparison?
Model comparison : Evaluate the performance of different models on the same Prompt.
Prompt optimization : Compare different versions of a Prompt to identify the most effective formulation.
Cross-Model consistency : Ensure consistent outputs across various models for the same Prompt.
Performance benchmarking : Analyze metrics like latency, cost, and token count across different models and Prompts.
​ Observability & Evals
Agent Tracing
Analytics + Evals
Alerting
Dashboards
Multi-step interactions and granular trace analysis
Session Level Evaluations
Simulations for real-world testing
Auto Evals on Logs
Evaluate captured logs automatically from the UI based on filters and sampling
Human Evals on Logs
Use human evaluation or rating to assess the quality of your logs and evaluate them.
Node Level Evals
Evaluate any component of your trace or log to gain insights into your agent’s behavior.
​ Getting Started
​ Prerequisites
Python version >=3.10
A Maxim account ( sign up here )
Generate Maxim API Key
A CrewAI project
​ Installation
pip install maxim - py
maxim-py
​ Basic Setup
​ 1. Set up environment variables
### Environment Variables Setup # Create a `.env` file in your project root: # Maxim API Configuration MAXIM_API_KEY = your_api_key_here MAXIM_LOG_REPO_ID = your_repo_id_here
​ 2. Import the required packages
from crewai import Agent, Task, Crew, Process from maxim import Maxim from maxim.logger.crewai import instrument_crewai
​ 3. Initialise Maxim with your API key
# Instrument CrewAI with just one line instrument_crewai(Maxim().logger())
​ 4. Create and run your CrewAI application as usual
# Create your agent researcher = Agent( role = 'Senior Research Analyst' , goal = 'Uncover cutting-edge developments in AI' , backstory = "You are an expert researcher at a tech think tank..." , verbose = True , llm = llm ) # Define the task research_task = Task( description = "Research the latest AI advancements..." , expected_output = "" , agent = researcher ) # Configure and run the crew crew = Crew( agents = [researcher], tasks = [research_task], verbose = True ) try : result = crew.kickoff() finally : maxim.cleanup() # Ensure cleanup happens even if errors occur
​ Viewing Your Traces
Log in to your Maxim Dashboard
Navigate to your repository
View detailed agent traces, including: Agent conversations Tool usage patterns Performance metrics Cost analytics
​ Troubleshooting
​ Common Issues
No traces appearing : Ensure your API key and repository ID are correct
Ensure you’ve called instrument_crewai() before running your crew. This initializes logging hooks correctly.
Set debug=True in your instrument_crewai() call to surface any internal errors: instrument_crewai(logger, debug = True )
Configure your agents with verbose=True to capture detailed logs: agent = CrewAgent( ... , verbose = True )
Double-check that instrument_crewai() is called before creating or executing agents. This might be obvious, but it’s a common oversight.
​ Resources
CrewAI Docs
Maxim Docs
Maxim Github
Was this page helpful?
Yes
No
