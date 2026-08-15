# Documentation Index

- Source: https://docs.crewai.com/en/guides/migration/upgrading-crewai
- Raw SHA-256: `2108ff2dce98e912a028ef7fdb56b1ad58f4a1439b4ded6f3394c02a28072966`

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
Navigation Migration Upgrading CrewAI
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
Migration Moving from LangGraph to CrewAI: A Practical Guide for Engineers Upgrading CrewAI
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
On this page
Overview
The Two Things You Might Want to Upgrade
Why crewai install Alone Doesn’t Upgrade
How to Upgrade Your Project
Upgrading the Global CLI
Verify Both Are in Sync
Breaking Changes & Migration Notes Import paths: tools and BaseTool Agent parameter changes Crew parameters Task structured output Memory & embedder config
Upgrading CrewAI
Copy page Copy page
How to upgrade CrewAI in your project and adapt to breaking changes between versions.
Copy page Copy page
​ Overview
​ The Two Things You Might Want to Upgrade
​ Why crewai install Alone Doesn’t Upgrade
Update the version constraint in pyproject.toml
Re-solve the lock file
Sync the venv
​ How to Upgrade Your Project
# Bump the constraint and re-lock in one command uv add "crewai[tools]>=1.14.4" # Sync the venv (crewai install calls uv sync under the hood) crewai install # Verify uv pip show crewai # → Version: 1.14.4
​ Upgrading the Global CLI
uv tool install crewai --upgrade
uv tool update-shell
​ Verify Both Are in Sync
# Global CLI version crewai --version # Project venv version uv pip show crewai | grep Version
​ Breaking Changes & Migration Notes
​ Import paths: tools and BaseTool
# Before from crewai_tools import BaseTool from crewai.agents.tools import tool # After from crewai.tools import BaseTool, tool
​ Agent parameter changes
from crewai import Agent agent = Agent( role = "Researcher" , goal = "Find authoritative sources on {topic} " , backstory = "You are a careful, source-driven researcher." , llm = "gpt-4o-mini" , # string model name OR an LLM object verbose = True , # bool, not an int level max_iter = 15 , # default has changed across versions — set explicitly allow_delegation = False , )
llm accepts either a string model name (resolved via the configured provider) or an LLM object for fine-grained control.
verbose is a plain bool . Passing an integer no longer toggles log levels.
max_iter defaults have shifted between releases. If your agent silently stops looping after the first tool call, set max_iter explicitly.
​ Crew parameters
from crewai import Crew, Process crew = Crew( agents = [ ... ], tasks = [ ... ], process = Process.sequential, # or Process.hierarchical memory = True , cache = True , embedder = { "provider" : "openai" , "config" : { "model" : "text-embedding-3-large" }}, )
process=Process.hierarchical requires either manager_llm= or manager_agent= . Without one, kickoff raises at validation time.
memory=True with a non-default embedding provider needs an embedder dict — see Memory & embedder config below.
​ Task structured output
from pydantic import BaseModel from crewai import Task class Article ( BaseModel ): title: str body: str write = Task( description = "Write an article about {topic} " , expected_output = "A short article with a title and body" , agent = writer, output_pydantic = Article, # the class, NOT an instance output_file = "output/article.md" , )
​ Memory & embedder config
crew = Crew( agents = [ ... ], tasks = [ ... ], memory = True , embedder = { "provider" : "ollama" , "config" : { "model" : "nomic-embed-text" }, }, )
Was this page helpful?
Yes
No
