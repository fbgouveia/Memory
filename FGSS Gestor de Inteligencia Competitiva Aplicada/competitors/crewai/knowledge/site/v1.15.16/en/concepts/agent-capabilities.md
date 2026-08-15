# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/agent-capabilities
- Raw SHA-256: `aad18c89f4dfe02c8d21d714292ff77cb9ee7e90fc293010c951621102b5e357`

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
Navigation Core Concepts Agent Capabilities
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
Agent Capabilities
Copy page Copy page
Understand the five ways to extend CrewAI agents: Tools, MCPs, Apps, Skills, and Knowledge.
Copy page Copy page
​ Overview
Tools
MCP Servers
Apps
Skills
Knowledge
​ The Key Distinction
​ Action Capabilities (Tools, MCPs, Apps)
from crewai import Agent from crewai_tools import SerperDevTool, FileReadTool agent = Agent( role = "Researcher" , goal = "Find and compile market data" , backstory = "Expert market analyst" , tools = [SerperDevTool(), FileReadTool()], # Local tools mcps = [ "https://mcp.example.com/sse" ], # Remote MCP server tools apps = [ "gmail" , "google_sheets" ], # Platform integrations )
​ Context Capabilities (Skills, Knowledge)
from crewai import Agent agent = Agent( role = "Security Auditor" , goal = "Audit cloud infrastructure for vulnerabilities" , backstory = "Expert in cloud security with 10 years of experience" , skills = [ "./skills/security-audit" ], # Domain instructions knowledge_sources = [pdf_source, url_source], # Retrieved facts )
​ When to Use What
​ Combining Capabilities
from crewai import Agent from crewai_tools import SerperDevTool, FileReadTool, CodeInterpreterTool # A fully-equipped research agent researcher = Agent( role = "Senior Research Analyst" , goal = "Produce comprehensive market analysis reports" , backstory = "Expert analyst with deep industry knowledge" , # ACTION: What the agent can DO tools = [ SerperDevTool(), # Search the web FileReadTool(), # Read local files CodeInterpreterTool(), # Run Python code for analysis ], mcps = [ "https://data-api.example.com/sse" ], # Access remote data API apps = [ "google_sheets" ], # Write to Google Sheets # CONTEXT: What the agent KNOWS skills = [ "./skills/research-methodology" ], # How to conduct research knowledge_sources = [company_docs], # Company-specific data )
​ Comparison Table
​ Deep Dives
Tools
MCP Integration
Skills
Knowledge
Was this page helpful?
Yes
No
