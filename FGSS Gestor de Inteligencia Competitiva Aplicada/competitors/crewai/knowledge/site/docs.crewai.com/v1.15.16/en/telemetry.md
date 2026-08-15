# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/telemetry
- Raw SHA-256: `7d5f3d7bd7b2027c2bc742beee82ca15b430bb48c64717b7ae3a2574cf1fdc91`

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
Navigation Telemetry Telemetry
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
Copy page Copy page
Understanding the telemetry data collected by CrewAI and how it contributes to the enhancement of the library.
Copy page Copy page
​ Telemetry
​ Examples:
# Disable CrewAI telemetry only os.environ[ 'CREWAI_DISABLE_TELEMETRY' ] = 'true' # Disable all OpenTelemetry (including CrewAI) os.environ[ 'OTEL_SDK_DISABLED' ] = 'true'
​ Isolation from your own OpenTelemetry setup
Spans from other instrumented libraries in your process — web frameworks, database clients, HTTP clients — are never sent to CrewAI.
CrewAI’s telemetry spans are never sent to your observability backend, so they will not appear in Langfuse, Braintrust, Phoenix, or any other collector you configure.
​ Data Explanation:
​ Opt-In Further Telemetry Sharing
Was this page helpful?
Yes
No
