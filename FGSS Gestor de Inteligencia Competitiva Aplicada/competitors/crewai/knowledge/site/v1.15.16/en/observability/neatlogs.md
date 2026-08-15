# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/neatlogs
- Raw SHA-256: `d694074c951a90a7f385ffdb1d21a447f48be73be4ea19053718fe9414505ece`

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
Navigation Observability Neatlogs Integration
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
Neatlogs Integration
Copy page Copy page
Understand, debug, and share your CrewAI agent runs
Copy page Copy page
​ Introduction
​ Why use Neatlogs?
Follow the full decision path
Add feedback directly on steps
Chat with the trace using AI assistant
Share runs publicly for feedback
Turn insights into tasks
​ Core Features
Trace Viewer : Track thoughts, tools, and decisions in sequence
Inline Comments : Tag teammates on any trace step
Feedback & Evaluation : Mark outputs as correct or incorrect
Error Highlighting : Automatic flagging of API/tool failures
Task Conversion : Convert comments into assigned tasks
Ask the Trace (AI) : Chat with your trace using Neatlogs AI bot
Public Sharing : Publish trace links to your community
​ Quick Setup with CrewAI
Sign Up & Get API Key
Install SDK
pip install neatlogs
Initialize Neatlogs
import neatlogs neatlogs.init( "YOUR_PROJECT_API_KEY" )
​ Under the Hood
Captures thoughts, tool calls, responses, errors, and token stats
Supports AI-powered task generation and robust evaluation workflows
​ Watch It Work
​ 🔍 Full Demo (4 min)
​ ⚙️ CrewAI Integration (30 s)
​ Links & Support
📘 Neatlogs Docs
🔐 Dashboard & API Key
🐦 Follow on Twitter
📧 Contact: hello@neatlogs.com
🛠 GitHub SDK
​ TL;DR
pip install neatlogs import neatlogs neatlogs.init( "YOUR_API_KEY" ) You can now capture, understand, share, and act on your CrewAI agent runs in seconds. No setup overhead. Full trace transparency. Full team collaboration.
Was this page helpful?
Yes
No
