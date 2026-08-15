# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/mcp/sse
- Raw SHA-256: `a42428d23126d3074057491349a0e81e996802462f483b8345c8fd30f87ce6b5`

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
Navigation MCP Integration SSE Transport
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
SSE Transport
Copy page Copy page
Learn how to connect CrewAI to remote MCP servers using Server-Sent Events (SSE) for real-time communication.
Copy page Copy page
​ Overview
​ Key Concepts
Remote Servers : SSE is suitable for MCP servers hosted remotely.
Unidirectional Stream : Typically, SSE is a one-way communication channel from server to client.
MCPServerAdapter Configuration : For SSE, you’ll provide the server’s URL and specify the transport type.
​ Connecting via SSE
​ 1. Fully Managed Connection (Recommended)
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter server_params = { "url" : "http://localhost:8000/sse" , # Replace with your actual SSE server URL "transport" : "sse" } # Using MCPServerAdapter with a context manager try : with MCPServerAdapter(server_params) as tools: print ( f "Available tools from SSE MCP server: { [tool.name for tool in tools] } " ) # Example: Using a tool from the SSE MCP server sse_agent = Agent( role = "Remote Service User" , goal = "Utilize a tool provided by a remote SSE MCP server." , backstory = "An AI agent that connects to external services via SSE." , tools = tools, reasoning = True , verbose = True , ) sse_task = Task( description = "Fetch real-time stock updates for 'AAPL' using an SSE tool." , expected_output = "The latest stock price for AAPL." , agent = sse_agent, markdown = True ) sse_crew = Crew( agents = [sse_agent], tasks = [sse_task], verbose = True , process = Process.sequential ) if tools: # Only kickoff if tools were loaded result = sse_crew.kickoff() # Add inputs={'stock_symbol': 'AAPL'} if tool requires it print ( " \n Crew Task Result (SSE - Managed): \n " , result) else : print ( "Skipping crew kickoff as tools were not loaded (check server connection)." ) except Exception as e: print ( f "Error connecting to or using SSE MCP server (Managed): { e } " ) print ( "Ensure the SSE MCP server is running and accessible at the specified URL." )
​ 2. Manual Connection Lifecycle
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter server_params = { "url" : "http://localhost:8000/sse" , # Replace with your actual SSE server URL "transport" : "sse" } mcp_server_adapter = None try : mcp_server_adapter = MCPServerAdapter(server_params) mcp_server_adapter.start() tools = mcp_server_adapter.tools print ( f "Available tools (manual SSE): { [tool.name for tool in tools] } " ) manual_sse_agent = Agent( role = "Remote Data Analyst" , goal = "Analyze data fetched from a remote SSE MCP server using manual connection management." , backstory = "An AI skilled in handling SSE connections explicitly." , tools = tools, verbose = True ) analysis_task = Task( description = "Fetch and analyze the latest user activity trends from the SSE server." , expected_output = "A summary report of user activity trends." , agent = manual_sse_agent ) analysis_crew = Crew( agents = [manual_sse_agent], tasks = [analysis_task], verbose = True , process = Process.sequential ) result = analysis_crew.kickoff() print ( " \n Crew Task Result (SSE - Manual): \n " , result) except Exception as e: print ( f "An error occurred during manual SSE MCP integration: { e } " ) print ( "Ensure the SSE MCP server is running and accessible." ) finally : if mcp_server_adapter and mcp_server_adapter.is_connected: print ( "Stopping SSE MCP server connection (manual)..." ) mcp_server_adapter.stop() # **Crucial: Ensure stop is called** elif mcp_server_adapter: print ( "SSE MCP server adapter was not connected. No stop needed or start failed." )
​ Security Considerations for SSE
MCP server implementations should validate Origin headers on incoming SSE connections.
When running local SSE MCP servers for development, bind only to localhost ( 127.0.0.1 ) rather than all network interfaces ( 0.0.0.0 ).
Implement proper authentication for all SSE connections if they expose sensitive tools or data.
Was this page helpful?
Yes
No
