# Documentation Index

- Source: https://docs.crewai.com/en/guides/crews/first-crew
- Raw SHA-256: `a99e538484f7025bb16ba66121da6ff20066a397354ecbaffbd33e75e7ade7e3`

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
Navigation Crews Build Your First Crew
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
Crews Build Your First Crew
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
Build Your First Crew
Copy page Copy page
Step-by-step tutorial to create a collaborative AI team with JSON-first crew configuration.
Copy page Copy page
​ Build a Research Crew
​ Prerequisites
Installed CrewAI following the installation guide
Set up your LLM API key following the LLM setup guide
A Serper.dev API key if you want the researcher to use web search
​ Step 1: Create a New Crew
crewai create crew research_crew cd research_crew
research_crew/ ├── .gitignore ├── .env ├── agents/ │ └── researcher.jsonc ├── crew.jsonc ├── knowledge/ ├── pyproject.toml ├── README.md ├── skills/ └── tools/
​ Step 2: Define Your Agents
{ "role" : "Senior Research Specialist for {topic}" , "goal" : "Find comprehensive and accurate information about {topic}, with a focus on recent developments and key insights." , "backstory" : "You are an experienced research specialist who organizes complex information into clear, useful notes." , // Replace with your model, for example "openai/gpt-4o". "llm" : "provider/model-id" , "tools" : [ "SerperDevTool" ], "settings" : { "verbose" : true , "allow_delegation" : false } }
{ "role" : "Report Analyst for {topic}" , "goal" : "Turn research findings into a clear, well-structured report." , "backstory" : "You are a careful analyst with strong technical writing skills and a talent for extracting useful insights." , // Replace with your model, for example "openai/gpt-4o". "llm" : "provider/model-id" , "settings" : { "verbose" : true , "allow_delegation" : false } }
​ Step 3: Define Tasks and Crew Settings
{ "name" : "Research Crew" , "agents" : [ "researcher" , "analyst" ], "tasks" : [ { "name" : "research_task" , "description" : "Conduct thorough research on {topic}. Focus on key concepts, recent developments, major challenges, notable applications, and future outlook." , "expected_output" : "A comprehensive research document with organized sections, specific facts, and useful examples about {topic}." , "agent" : "researcher" }, { "name" : "analysis_task" , "description" : "Analyze the research findings and create a polished report on {topic}. Include an executive summary, key insights, trend analysis, and recommendations." , "expected_output" : "A professional markdown report with clear headings, a concise summary, main findings, and recommendations." , "agent" : "analyst" , "context" : [ "research_task" ], "output_file" : "output/report.md" , "markdown" : true } ], "process" : "sequential" , "verbose" : true , "memory" : true , "inputs" : { "topic" : "Artificial Intelligence in Healthcare" } }
​ Step 4: Set Environment Variables
SERPER_API_KEY = your_serper_api_key # Add your model provider API key here too.
​ Step 5: Install and Run
crewai install crewai run
​ How It Works
crew.jsonc defines the crew, task order, process, memory, and runtime inputs.
agents/researcher.jsonc and agents/analyst.jsonc define the agents.
The researcher runs first.
The analyst runs second with context: ["research_task"] .
The final task writes output/report.md .
​ Extending Your Crew
More agents by creating new agents/<name>.jsonc files and listing them in crew.jsonc
More tasks by appending objects to the tasks array
Built-in tools by adding tool class names such as "FileReadTool" or "SerperDevTool"
Custom tools with "custom:<name>" , which loads tools/<name>.py
Hierarchical execution with "process": "hierarchical" and a manager_llm or manager_agent
Was this page helpful?
Yes
No
