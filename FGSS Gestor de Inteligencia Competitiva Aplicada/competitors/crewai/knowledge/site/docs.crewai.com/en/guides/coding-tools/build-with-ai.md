# Documentation Index

- Source: https://docs.crewai.com/en/guides/coding-tools/build-with-ai
- Raw SHA-256: `870319fe8108745d2fca8c3afa2db325268d2930b15fea877cc8a1b0ad961081`

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
Navigation Get Started Build with AI
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
Coding Tools Coding Tools Build with AI
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
Build with AI
Copy page Copy page
Everything AI coding agents need to build, deploy, and scale with CrewAI — skills, machine-readable docs, deployment, and enterprise features.
Copy page Copy page
​ Build with AI
​ Supported Coding Agents
Claude Code
Cursor
Codex
Windsurf
Gemini CLI
​ 1. Skills — Teach Your Agent CrewAI
Claude Code (Plugin Marketplace)
npx (Any Agent)
/plugin marketplace add crewAIInc/skills /plugin install crewai-skills@crewai-plugins /reload-plugins
npx skills add crewaiinc/skills
Install the official skill pack
Your agent gets instant CrewAI expertise
Flows — stateful apps, steps, and crew kickoffs
Crews & Agents — JSON-first patterns ( crew.jsonc , agents/*.jsonc ), roles, tasks, delegation
Tools & Integrations — search, APIs, MCP servers, and common CrewAI tools
Project layout — CLI scaffolds and repo conventions
Up-to-date patterns — tracks current CrewAI docs and best practices
Start building
Skills concept
Skills landing page
AGENTS.md & coding tools
Skills registry (skills.sh)
​ 2. llms.txt — Machine-Readable Docs
https://docs.crewai.com/llms.txt
What is llms.txt?
How to use it
Why it matters
Fetch https://docs.crewai.com/llms.txt for CrewAI documentation.
No scraping required — clean, structured content in one request
Always up-to-date — served directly from docs.crewai.com
Optimized for LLMs — formatted for context windows, not browsers
Complements skills — skills teach patterns, llms.txt provides reference
​ 3. Deploy to Enterprise
Build locally
crewai create crew my_crew cd my_crew crewai run
Prepare for deployment
crewai deploy --prepare
Deploy to AMP
crewai deploy
Access via API
curl -X POST https://app.crewai.com/api/v1/crews/ < crew-i d > /kickoff \ -H "Authorization: Bearer $CREWAI_API_KEY " \ -H "Content-Type: application/json" \ -d '{"inputs": {"topic": "AI agents"}}'
Deploy to AMP
AMP introduction
​ 4. Enterprise Features
Observability
Crew Studio
Webhook Streaming
Team Management
Tool Repository
Factory (Self-Hosted)
Who is AMP for?
What deployment options are available?
Cloud (app.crewai.com) — managed by CrewAI, fastest path to production
Factory (self-hosted) — run on your own infrastructure for full data control
Hybrid — mix cloud and self-hosted based on sensitivity requirements
Explore CrewAI AMP →
Was this page helpful?
Yes
No
