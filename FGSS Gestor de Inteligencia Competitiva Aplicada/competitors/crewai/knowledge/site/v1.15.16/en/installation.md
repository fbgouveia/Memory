# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/installation
- Raw SHA-256: `f601fc02c0fb976a5d0d5c1623b63dda48bd2372ce645bdc32cdf1e11ca07b49`

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
Navigation Get Started Installation
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
Installation
Copy page Copy page
Get started with CrewAI - Install, configure, and build your first AI crew
Copy page Copy page
Coding agent setup
​ Set up CrewAI in your coding agent
Copy a ready-to-paste setup prompt for Claude Code, Codex, Cursor, or any coding agent. It installs the official CrewAI skills, checks the CLI, and points the agent at the right docs before it edits code.
Copy agent setup prompt
​ Watch: Building CrewAI Agents & Flows with Coding Agent Skills
​ Video Tutorial
​ Text Tutorial
python3 --version
Install uv
On macOS/Linux: Use curl to download the script and execute it with sh : curl -LsSf https://astral.sh/uv/install.sh | sh If your system doesn’t have curl , you can use wget : wget -qO- https://astral.sh/uv/install.sh | sh
On Windows: Use irm to download the script and iex to execute it: powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex" If you run into any issues, refer to UV’s installation guide for more information.
Install CrewAI 🚀
Run the following command to install crewai CLI: uv tool install crewai If you encounter a PATH warning, run this command to update your shell: uv tool update-shell If you encounter the chroma-hnswlib==0.7.6 build error ( fatal error C1083: Cannot open include file: 'float.h' ) on Windows, install Visual Studio Build Tools with Desktop development with C++ .
To verify that crewai is installed, run: uv tool list
You should see something like: crewai v0.102.0 - crewai
If you need to update crewai , run: uv tool install crewai --upgrade
​ Creating a CrewAI Project
Generate Project Scaffolding
Run the crewai CLI command: crewai create crew < your_project_nam e >
This creates a new project with the following structure: my_project/ ├── .gitignore ├── .env ├── agents/ │ └── researcher.jsonc ├── crew.jsonc ├── knowledge/ ├── pyproject.toml ├── README.md ├── skills/ └── tools/
If you need the older Python/YAML scaffold with crew.py , config/agents.yaml , and config/tasks.yaml , run: crewai create crew < your_project_nam e > --classic
Customize Your Project
Your project will contain these essential files: File Purpose crew.jsonc Configure the crew, task order, process, and input defaults agents/*.jsonc Define each agent’s role, goal, backstory, LLM, tools, and behavior .env Store API keys and environment variables tools/ Optional Python files for custom:<name> tools knowledge/ Optional knowledge files for agents skills/ Optional skill files applied to the crew
Start by editing crew.jsonc and the files in agents/ to define your crew’s behavior.
Use {placeholder} values in agent and task text, then set defaults in crew.jsonc under inputs . When you run crewai run , the CLI prompts for any missing values.
Keep sensitive information like API keys in .env .
Run your Crew
Before you run your crew, make sure to run: crewai install
If you need to install additional packages, use: uv add < package-nam e > As a supply-chain security measure, CrewAI’s internal packages use exclude-newer = "3 days" in their pyproject.toml files. This means transitive dependencies pulled in by CrewAI won’t resolve packages released less than 3 days ago. Your own direct dependencies are not affected by this policy. If you notice a transitive dependency is behind, you can pin the version you want explicitly in your project’s dependencies.
To run your crew, execute the following command in the root of your project: crewai run
​ Enterprise Installation Options
​ CrewAI AMP (SaaS)
Zero installation required - just sign up for free at app.crewai.com
Automatic updates and maintenance
Managed infrastructure and scaling
Build Crews with no Code
​ CrewAI Factory (Self-hosted)
Containerized deployment for your infrastructure
Supports any hyperscaler including on prem deployments
Integration with your existing security systems
Explore Enterprise Options
​ Next Steps
Quickstart: Flow + agent
Join the Community
Was this page helpful?
Yes
No
