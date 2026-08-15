# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/introduction
- Raw SHA-256: `41b11f070f99d6faf1d7928d51e1dd789234bccac318b7fc1b415ef8935e84ef`

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
Navigation Get Started Introduction
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
Introduction
Copy page Copy page
Build AI agent teams that work together to tackle complex tasks
Copy page Copy page
​ What is CrewAI?
CrewAI Flows : The backbone of your AI application. Flows allow you to create structured, event-driven workflows that manage state and control execution. They provide the scaffolding for your AI agents to work within.
CrewAI Crews : The units of work within your Flow. Crews are teams of autonomous agents that collaborate to solve specific tasks delegated to them by the Flow.
​ Watch: Building CrewAI Agents & Flows with Coding Agent Skills
​ The CrewAI Architecture
​ 1. Flows: The Backbone
CrewAI Framework Overview
State Management : Persist data across steps and executions.
Event-Driven Execution : Trigger actions based on events or external inputs.
Control Flow : Use conditional logic, loops, and branching.
​ 2. Crews: The Intelligence
CrewAI Framework Overview
Role-Playing Agents : Specialized agents with specific goals and tools.
Autonomous Collaboration : Agents work together to solve tasks.
Task Delegation : Tasks are assigned and executed based on agent capabilities.
​ How It All Works Together
The Flow triggers an event or starts a process.
The Flow manages the state and decides what to do next.
The Flow delegates a complex task to a Crew .
The Crew ’s agents collaborate to complete the task.
The Crew returns the result to the Flow .
The Flow continues execution based on the result.
​ Key Features
Production-Grade Flows
Autonomous Crews
Flexible Tools
Enterprise Security
​ When to Use Crews vs. Flows
Use a Flow to define the overall structure, state, and logic of your application.
Use a Crew within a Flow step when you need a team of agents to perform a specific, complex task that requires autonomy.
​ Why Choose CrewAI?
🧠 Autonomous Operation : Agents make intelligent decisions based on their roles and available tools
📝 Natural Interaction : Agents communicate and collaborate like human team members
🛠️ Extensible Design : Easy to add new tools, roles, and capabilities
🚀 Production Ready : Built for reliability and scalability in real-world applications
🔒 Security-Focused : Designed with enterprise security requirements in mind
💰 Cost-Efficient : Optimized to minimize token usage and API calls
​ Ready to Start Building?
Build Your First Flow
Build Your First Crew
Install CrewAI
Quick Start
Join the Community
Was this page helpful?
Yes
No
