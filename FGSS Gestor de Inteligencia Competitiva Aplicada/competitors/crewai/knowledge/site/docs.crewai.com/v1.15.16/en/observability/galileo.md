# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/galileo
- Raw SHA-256: `a05249a7eb2a41067e477007eba15b286fd03a32956fcc51ad88b8b6f04d6738`

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
Navigation Observability Galileo
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
Galileo
Copy page Copy page
Galileo integration for CrewAI tracing and evaluation
Copy page Copy page
​ Overview
​ Getting started
​ Step 1: Install dependencies
uv add galileo
​ Step 2: Add to the .env file from the CrewAI quickstart
# Your Galileo API key GALILEO_API_KEY = "your-galileo-api-key" # Your Galileo project name GALILEO_PROJECT = "your-galileo-project-name" # The name of the Log stream you want to use for logging GALILEO_LOG_STREAM = "your-galileo-log-stream "
​ Step 3: Add the Galileo event listener
from galileo.handlers.crewai.handler import CrewAIEventListener
def run (): # Create the event listener CrewAIEventListener() # The rest of your existing code goes here
​ Step 4: Run your crew
crewai run
​ Step 5: View the traces in Galileo
​ Understanding the Galileo Integration
​ Understanding the event listener
Automatically registers itself with CrewAI
Reads Galileo configuration from environment variables
Logs all run data to the Galileo project and log stream specified by GALILEO_PROJECT and GALILEO_LOG_STREAM
Was this page helpful?
Yes
No
