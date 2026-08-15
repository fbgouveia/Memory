# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/mcp/streamable-http
- Raw SHA-256: `bfd342062baa134e3d721effefe266977d3dedae3685bbe96dc1a2bb7d2dae0e`

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
Navigation MCP Integration Streamable HTTP Transport
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
Streamable HTTP Transport
Copy page Copy page
Learn how to connect CrewAI to remote MCP servers using the flexible Streamable HTTP transport.
Copy page Copy page
​ Overview
​ Key Concepts
Remote Servers : Designed for MCP servers hosted remotely.
Flexibility : Can support more complex interaction patterns than plain SSE, potentially including bi-directional communication if the server implements it.
MCPServerAdapter Configuration : You’ll need to provide the server’s base URL for MCP communication and specify "streamable-http" as the transport type.
​ Connecting via Streamable HTTP
​ 1. Fully Managed Connection (Recommended)
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter server_params = { "url" : "http://localhost:8001/mcp" , # Replace with your actual Streamable HTTP server URL "transport" : "streamable-http" } try : with MCPServerAdapter(server_params) as tools: print ( f "Available tools from Streamable HTTP MCP server: { [tool.name for tool in tools] } " ) http_agent = Agent( role = "HTTP Service Integrator" , goal = "Utilize tools from a remote MCP server via Streamable HTTP." , backstory = "An AI agent adept at interacting with complex web services." , tools = tools, verbose = True , ) http_task = Task( description = "Perform a complex data query using a tool from the Streamable HTTP server." , expected_output = "The result of the complex data query." , agent = http_agent, ) http_crew = Crew( agents = [http_agent], tasks = [http_task], verbose = True , process = Process.sequential ) result = http_crew.kickoff() print ( " \n Crew Task Result (Streamable HTTP - Managed): \n " , result) except Exception as e: print ( f "Error connecting to or using Streamable HTTP MCP server (Managed): { e } " ) print ( "Ensure the Streamable HTTP MCP server is running and accessible at the specified URL." )
​ 2. Manual Connection Lifecycle
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter server_params = { "url" : "http://localhost:8001/mcp" , # Replace with your actual Streamable HTTP server URL "transport" : "streamable-http" } mcp_server_adapter = None try : mcp_server_adapter = MCPServerAdapter(server_params) mcp_server_adapter.start() tools = mcp_server_adapter.tools print ( f "Available tools (manual Streamable HTTP): { [tool.name for tool in tools] } " ) manual_http_agent = Agent( role = "Advanced Web Service User" , goal = "Interact with an MCP server using manually managed Streamable HTTP connections." , backstory = "An AI specialist in fine-tuning HTTP-based service integrations." , tools = tools, verbose = True ) data_processing_task = Task( description = "Submit data for processing and retrieve results via Streamable HTTP." , expected_output = "Processed data or confirmation." , agent = manual_http_agent ) data_crew = Crew( agents = [manual_http_agent], tasks = [data_processing_task], verbose = True , process = Process.sequential ) result = data_crew.kickoff() print ( " \n Crew Task Result (Streamable HTTP - Manual): \n " , result) except Exception as e: print ( f "An error occurred during manual Streamable HTTP MCP integration: { e } " ) print ( "Ensure the Streamable HTTP MCP server is running and accessible." ) finally : if mcp_server_adapter and mcp_server_adapter.is_connected: print ( "Stopping Streamable HTTP MCP server connection (manual)..." ) mcp_server_adapter.stop() # **Crucial: Ensure stop is called** elif mcp_server_adapter: print ( "Streamable HTTP MCP server adapter was not connected. No stop needed or start failed." )
​ Security Considerations
Use HTTPS : Always prefer HTTPS (HTTP Secure) for your MCP server URLs to encrypt data in transit.
Authentication : Implement robust authentication mechanisms if your MCP server exposes sensitive tools or data.
Input Validation : Ensure your MCP server validates all incoming requests and parameters.
Was this page helpful?
Yes
No
