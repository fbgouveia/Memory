# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/mcp/multiple-servers
- Raw SHA-256: `37eed33da34fddab8368d3662c345df972b62451fd8bcdf96828924934611eb4`

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
Navigation MCP Integration Connecting to Multiple MCP Servers
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
Connecting to Multiple MCP Servers
Copy page Copy page
Learn how to use MCPServerAdapter in CrewAI to connect to multiple MCP servers simultaneously and aggregate their tools.
Copy page Copy page
​ Overview
​ Configuration
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter from mcp import StdioServerParameters # Needed for Stdio example # Define parameters for multiple MCP servers server_params_list = [ # Streamable HTTP Server { "url" : "http://localhost:8001/mcp" , "transport" : "streamable-http" }, # SSE Server { "url" : "http://localhost:8000/sse" , "transport" : "sse" }, # StdIO Server StdioServerParameters( command = "python3" , args = [ "servers/your_stdio_server.py" ], env = { "UV_PYTHON" : "3.12" , ** os.environ}, ) ] try : with MCPServerAdapter(server_params_list) as aggregated_tools: print ( f "Available aggregated tools: { [tool.name for tool in aggregated_tools] } " ) multi_server_agent = Agent( role = "Versatile Assistant" , goal = "Utilize tools from local Stdio, remote SSE, and remote HTTP MCP servers." , backstory = "An AI agent capable of leveraging a diverse set of tools from multiple sources." , tools = aggregated_tools, # All tools are available here verbose = True , ) ... # Your other agent, tasks, and crew code here except Exception as e: print ( f "Error connecting to or using multiple MCP servers (Managed): { e } " ) print ( "Ensure all MCP servers are running and accessible with correct configurations." )
​ Connection Management
Was this page helpful?
Yes
No
