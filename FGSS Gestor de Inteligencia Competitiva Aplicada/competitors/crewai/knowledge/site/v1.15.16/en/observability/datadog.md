# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/datadog
- Raw SHA-256: `57f31fe92ce8e517b52c96c15c0433fe66d71fa338a73a4f00221cd42b8071ab`

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
Navigation Observability Datadog Integration
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
Datadog Integration
Copy page Copy page
Learn how to integrate Datadog with CrewAI to submit LLM Observability traces to Datadog.
Copy page Copy page
​ Integrate Datadog with CrewAI
​ What is Datadog LLM Observability?
​ Getting Started
​ Install Dependencies
pip install ddtrace crewai crewai-tools
​ Set Environment Variables
export DD_API_KEY =< YOUR_DD_API_KEY > export DD_SITE =< YOUR_DD_SITE > export DD_LLMOBS_ENABLED = true export DD_LLMOBS_ML_APP =< YOUR_ML_APP_NAME > export DD_LLMOBS_AGENTLESS_ENABLED = true export DD_APM_TRACING_ENABLED = false
export OPENAI_API_KEY =< YOUR_OPENAI_API_KEY > export ANTHROPIC_API_KEY =< YOUR_ANTHROPIC_API_KEY > export GEMINI_API_KEY =< YOUR_GEMINI_API_KEY > ...
​ Create a CrewAI Agent Application
# crewai_agent.py from crewai import Agent, Task, Crew from crewai_tools import ( WebsiteSearchTool ) web_rag_tool = WebsiteSearchTool() writer = Agent( role = "Writer" , goal = "You make math engaging and understandable for young children through poetry" , backstory = "You're an expert in writing haikus but you know nothing of math." , tools = [web_rag_tool], ) task = Task( description = ( "What is {multiplication} ?" ), expected_output = ( "Compose a haiku that includes the answer." ), agent = writer ) crew = Crew( agents = [writer], tasks = [task], share_crew = False ) output = crew.kickoff( dict ( multiplication = "2 * 2" ))
​ Run the Application with Datadog Auto-Instrumentation
ddtrace-run python crewai_agent.py
​ View the Traces in Datadog
​ References
Datadog LLM Observability
Datadog LLM Observability CrewAI Auto-Instrumentation
Was this page helpful?
Yes
No
