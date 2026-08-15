# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/processes
- Raw SHA-256: `062344c00826feabc6a0d1fcda20eaf009593d7389523d06f98f5b5a6dadf7bc`

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
Navigation Core Concepts Processes
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
Processes
Copy page Copy page
Detailed guide on workflow management through processes in CrewAI, with updated implementation details.
Copy page Copy page
​ Overview
​ Process Implementations
Sequential : Executes tasks sequentially, ensuring tasks are completed in an orderly progression.
Hierarchical : Organizes tasks in a managerial hierarchy, where tasks are delegated and executed based on a structured chain of command. A manager language model ( manager_llm ) or a custom manager agent ( manager_agent ) must be specified in the crew to enable the hierarchical process, facilitating the creation and management of tasks by the manager.
​ The Role of Processes in Teamwork
​ Assigning Processes to a Crew
from crewai import Crew, Process # Example: Creating a crew with a sequential process crew = Crew( agents = my_agents, tasks = my_tasks, process = Process.sequential ) # Example: Creating a crew with a hierarchical process # Ensure to provide a manager_llm or manager_agent crew = Crew( agents = my_agents, tasks = my_tasks, process = Process.hierarchical, manager_llm = "gpt-4o" # or # manager_agent=my_manager_agent )
​ Sequential Process
​ Hierarchical Process
​ Process Class: Detailed Overview
​ Conclusion
Was this page helpful?
Yes
No
