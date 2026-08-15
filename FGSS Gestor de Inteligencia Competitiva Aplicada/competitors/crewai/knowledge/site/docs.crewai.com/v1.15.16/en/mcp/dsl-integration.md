# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/mcp/dsl-integration
- Raw SHA-256: `78a23d4354ebf124b9a3cc121b9346197b8947d25c0c52ebc294b0f283da160b`

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
Navigation MCP Integration MCP DSL Integration
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
MCP DSL Integration
Copy page Copy page
Learn how to use CrewAI’s simple DSL syntax to integrate MCP servers directly with your agents using the mcps field.
Copy page Copy page
​ Overview
​ Basic Usage
from crewai import Agent agent = Agent( role = "Research Assistant" , goal = "Help with research and analysis tasks" , backstory = "Expert assistant with access to advanced research tools" , mcps = [ "https://mcp.exa.ai/mcp?api_key=your_key&profile=research" ] ) # MCP tools are now automatically available! # No need for manual connection management or tool configuration
​ Supported Reference Formats
​ External MCP Remote Servers
# Basic HTTPS server "https://api.example.com/mcp" # Server with authentication "https://mcp.exa.ai/mcp?api_key=your_key&profile=your_profile" # Server with custom path "https://services.company.com/api/v1/mcp"
​ Specific Tool Selection
# Get only the forecast tool from weather server "https://weather.api.com/mcp#get_forecast" # Get only the search tool from Exa "https://mcp.exa.ai/mcp?api_key=your_key#web_search_exa"
​ Connected MCP Integrations
# Connected MCP with all tools "snowflake" # Specific tool from a connected MCP "stripe#list_invoices" # Multiple connected MCPs mcps = [ "snowflake" , "stripe" , "github" ]
​ Complete Example
from crewai import Agent, Task, Crew, Process # Create agent with multiple MCP sources multi_source_agent = Agent( role = "Multi-Source Research Analyst" , goal = "Conduct comprehensive research using multiple data sources" , backstory = """Expert researcher with access to web search, weather data, financial information, and academic research tools""" , mcps = [ # External MCP servers "https://mcp.exa.ai/mcp?api_key=your_exa_key&profile=research" , "https://weather.api.com/mcp#get_current_conditions" , # Connected MCPs from catalog "snowflake" , "stripe#list_invoices" , "github#search_repositories" ] ) # Create comprehensive research task research_task = Task( description = """Research the impact of AI agents on business productivity. Include current weather impacts on remote work, financial market trends, and recent academic publications on AI agent frameworks.""" , expected_output = """Comprehensive report covering: 1. AI agent business impact analysis 2. Weather considerations for remote work 3. Financial market trends related to AI 4. Academic research citations and insights 5. Competitive landscape analysis""" , agent = multi_source_agent ) # Create and execute crew research_crew = Crew( agents = [multi_source_agent], tasks = [research_task], process = Process.sequential, verbose = True ) result = research_crew.kickoff() print ( f "Research completed with { len (multi_source_agent.mcps) } MCP data sources" )
​ Tool Naming and Organization
# Original MCP server has tools: "search", "analyze" # CrewAI creates tools: "mcp_exa_ai_search", "mcp_exa_ai_analyze" agent = Agent( role = "Tool Organization Demo" , goal = "Show how tool naming works" , backstory = "Demonstrates automatic tool organization" , mcps = [ "https://mcp.exa.ai/mcp?api_key=key" , # Tools: mcp_exa_ai_* "https://weather.service.com/mcp" , # Tools: weather_service_com_* "snowflake" # Tools: snowflake_* ] ) # Each server's tools get unique prefixes based on the server name # This prevents naming conflicts between different MCP servers
​ Error Handling and Resilience
​ Graceful Server Failures
agent = Agent( role = "Resilient Researcher" , goal = "Research despite server issues" , backstory = "Experienced researcher who adapts to available tools" , mcps = [ "https://primary-server.com/mcp" , # Primary data source "https://backup-server.com/mcp" , # Backup if primary fails "https://unreachable-server.com/mcp" , # Will be skipped with warning "snowflake" # Connected MCP from catalog ] ) # Agent will: # 1. Successfully connect to working servers # 2. Log warnings for failing servers # 3. Continue with available tools # 4. Not crash or hang on server failures
​ Timeout Protection
Connection timeout : 10 seconds
Tool execution timeout : 30 seconds
Discovery timeout : 15 seconds
# These servers will timeout gracefully if unresponsive mcps = [ "https://slow-server.com/mcp" , # Will timeout after 10s if unresponsive "https://overloaded-api.com/mcp" # Will timeout if discovery takes > 15s ]
​ Performance Features
​ Automatic Caching
# First agent creation - discovers tools from server agent1 = Agent( role = "First" , goal = "Test" , backstory = "Test" , mcps = [ "https://api.example.com/mcp" ]) # Second agent creation (within 5 minutes) - uses cached tool schemas agent2 = Agent( role = "Second" , goal = "Test" , backstory = "Test" , mcps = [ "https://api.example.com/mcp" ]) # Much faster!
​ On-Demand Connections
# Agent creation is fast - no MCP connections made yet agent = Agent( role = "On-Demand Agent" , goal = "Use tools efficiently" , backstory = "Efficient agent that connects only when needed" , mcps = [ "https://api.example.com/mcp" ] ) # MCP connection is made only when a tool is actually executed # This minimizes connection overhead and improves startup performance
​ Integration with Existing Features
from crewai.tools import BaseTool class CustomTool ( BaseTool ): name: str = "custom_analysis" description: str = "Custom analysis tool" def _run ( self , ** kwargs ): return "Custom analysis result" agent = Agent( role = "Full-Featured Agent" , goal = "Use all available tool types" , backstory = "Agent with comprehensive tool access" , # All tool types work together tools = [CustomTool()], # Custom tools apps = [ "gmail" , "slack" ], # Platform integrations mcps = [ # MCP servers "https://mcp.exa.ai/mcp?api_key=key" , "snowflake" ], verbose = True , max_iter = 15 )
​ Best Practices
​ 1. Use Specific Tools When Possible
# Good - only get the tools you need mcps = [ "https://weather.api.com/mcp#get_forecast" ] # Less efficient - gets all tools from server mcps = [ "https://weather.api.com/mcp" ]
​ 2. Handle Authentication Securely
import os # Store API keys in environment variables exa_key = os.getenv( "EXA_API_KEY" ) exa_profile = os.getenv( "EXA_PROFILE" ) agent = Agent( role = "Secure Agent" , goal = "Use MCP tools securely" , backstory = "Security-conscious agent" , mcps = [ f "https://mcp.exa.ai/mcp?api_key= { exa_key } &profile= { exa_profile } " ] )
​ 3. Plan for Server Failures
# Always include backup options mcps = [ "https://primary-api.com/mcp" , # Primary choice "https://backup-api.com/mcp" , # Backup option "snowflake" # Connected MCP fallback ]
​ 4. Use Descriptive Agent Roles
agent = Agent( role = "Weather-Enhanced Market Analyst" , goal = "Analyze markets considering weather impacts" , backstory = "Financial analyst with access to weather data for agricultural market insights" , mcps = [ "https://weather.service.com/mcp#get_forecast" , "stripe#list_invoices" ] )
​ Troubleshooting
​ Common Issues
# Check your MCP server URL and authentication # Verify the server is running and accessible mcps = [ "https://mcp.example.com/mcp?api_key=valid_key" ]
# Server may be slow or overloaded # CrewAI will log warnings and continue with other servers # Check server status or try backup servers
# Verify API keys and credentials # Check server documentation for required parameters # Ensure query parameters are properly URL encoded
​ Advanced: MCPServerAdapter
Was this page helpful?
Yes
No
