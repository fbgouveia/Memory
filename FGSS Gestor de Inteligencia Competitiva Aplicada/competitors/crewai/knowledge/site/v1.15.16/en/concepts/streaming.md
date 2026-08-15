# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/streaming
- Raw SHA-256: `337906b4fe217ecebd4af761c4bb103f846feff91b78fb1abe4b448b9c2e19e0`

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
Navigation Core Concepts Streaming
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
Streaming
Copy page Copy page
Understand CrewAI’s streaming model for Flows, direct LLM calls, tools, and conversational turns.
Copy page Copy page
​ Overview
​ StreamFrame
frame.id # unique frame id frame.seq # execution-local order, when available frame.type # source event type, such as "llm_stream_chunk" frame.channel # "llm", "flow", "tools", "messages", "lifecycle", or "custom" frame.namespace # source/runtime namespace frame.timestamp # event timestamp frame.parent_id # parent event id, when available frame.previous_id # previous event id, when available frame.data # structured event payload frame.event # alias for frame.data frame.content # printable text for token-like frames, otherwise ""
​ Channels
​ Stream Sessions
stream = flow.stream_events( inputs = { "topic" : "AI agents" })
with stream: for frame in stream: print (frame.content, end = "" , flush = True ) result = stream.result
​ Channel Projections
with flow.stream_events( inputs = { "topic" : "AI agents" }) as stream: for frame in stream.llm: print (frame.content, end = "" , flush = True ) result = stream.result
​ Entrypoints
​ Related Guides
Consuming Streams
Streaming Runtime Contract
Streaming Flow Execution
Streaming Crew Execution
Was this page helpful?
Yes
No
