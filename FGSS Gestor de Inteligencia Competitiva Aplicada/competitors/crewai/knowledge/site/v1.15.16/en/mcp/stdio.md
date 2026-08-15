# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/mcp/stdio
- Raw SHA-256: `f3cea4a0f196f352928c6120a5cf9dbad32a2dee8fe0f6a8f3ff346badbf3d1d`

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
Navigation MCP Integration Stdio Transport
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
Stdio Transport
Copy page Copy page
Learn how to connect CrewAI to local MCP servers using the Stdio (Standard Input/Output) transport mechanism.
Copy page Copy page
​ Overview
​ Key Concepts
Local Execution : Stdio transport manages a locally running process for the MCP server.
StdioServerParameters : This class from the mcp library is used to configure the command, arguments, and environment variables for launching the Stdio server.
​ Connecting via Stdio
​ 1. Fully Managed Connection (Recommended)
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter from mcp import StdioServerParameters import os # Create a StdioServerParameters object server_params = StdioServerParameters( command = "python3" , args = [ "servers/your_stdio_server.py" ], env = { "UV_PYTHON" : "3.12" , ** os.environ}, ) with MCPServerAdapter(server_params) as tools: print ( f "Available tools from Stdio MCP server: { [tool.name for tool in tools] } " ) # Example: Using the tools from the Stdio MCP server in a CrewAI Agent research_agent = Agent( role = "Local Data Processor" , goal = "Process data using a local Stdio-based tool." , backstory = "An AI that leverages local scripts via MCP for specialized tasks." , tools = tools, reasoning = True , verbose = True , ) processing_task = Task( description = "Process the input data file 'data.txt' and summarize its contents." , expected_output = "A summary of the processed data." , agent = research_agent, markdown = True ) data_crew = Crew( agents = [research_agent], tasks = [processing_task], verbose = True , process = Process.sequential ) result = data_crew.kickoff() print ( " \n Crew Task Result (Stdio - Managed): \n " , result)
​ 2. Manual Connection Lifecycle
from crewai import Agent, Task, Crew, Process from crewai_tools import MCPServerAdapter from mcp import StdioServerParameters import os # Create a StdioServerParameters object stdio_params = StdioServerParameters( command = "python3" , args = [ "servers/your_stdio_server.py" ], env = { "UV_PYTHON" : "3.12" , ** os.environ}, ) mcp_server_adapter = MCPServerAdapter( server_params = stdio_params) try : mcp_server_adapter.start() # Manually start the connection and server process tools = mcp_server_adapter.tools print ( f "Available tools (manual Stdio): { [tool.name for tool in tools] } " ) # Example: Using the tools with your Agent, Task, Crew setup manual_agent = Agent( role = "Local Task Executor" , goal = "Execute a specific local task using a manually managed Stdio tool." , backstory = "An AI proficient in controlling local processes via MCP." , tools = tools, verbose = True ) manual_task = Task( description = "Execute the 'perform_analysis' command via the Stdio tool." , expected_output = "Results of the analysis." , agent = manual_agent ) manual_crew = Crew( agents = [manual_agent], tasks = [manual_task], verbose = True , process = Process.sequential ) result = manual_crew.kickoff() # Actual inputs depend on your tool print ( " \n Crew Task Result (Stdio - Manual): \n " , result) except Exception as e: print ( f "An error occurred during manual Stdio MCP integration: { e } " ) finally : if mcp_server_adapter and mcp_server_adapter.is_connected: # Check if connected before stopping print ( "Stopping Stdio MCP server connection (manual)..." ) mcp_server_adapter.stop() # **Crucial: Ensure stop is called** elif mcp_server_adapter: # If adapter exists but not connected (e.g. start failed) print ( "Stdio MCP server adapter was not connected. No stop needed or start failed." )
Was this page helpful?
Yes
No
