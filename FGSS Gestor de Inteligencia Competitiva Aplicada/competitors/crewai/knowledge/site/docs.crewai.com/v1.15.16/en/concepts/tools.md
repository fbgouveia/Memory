# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/tools
- Raw SHA-256: `75064c452522a5690a821384ae602246514445beb1d95550a8d4a124e3a2e092`

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
Navigation Core Concepts Tools
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
Tools
Copy page Copy page
Understanding and leveraging tools within the CrewAI framework for agent collaboration and task execution.
Copy page Copy page
​ Overview
​ What is a Tool?
Pre-built connectors for popular enterprise systems
Custom tool creation interface
Version control and sharing capabilities
Security and compliance features
​ Key Characteristics of Tools
Utility : Crafted for tasks such as web searching, data analysis, content generation, and agent collaboration.
Integration : Boosts agent capabilities by seamlessly integrating tools into their workflow.
Customizability : Provides the flexibility to develop custom tools or utilize existing ones, catering to the specific needs of agents.
Error Handling : Incorporates robust error handling mechanisms to ensure smooth operation.
Caching Mechanism : Features intelligent caching to optimize performance and reduce redundant operations.
Asynchronous Support : Handles both synchronous and asynchronous tools, enabling non-blocking operations.
Typed Outputs : Uses optional Pydantic models to give agents clear JSON fields while direct Python calls still receive the tool’s normal return value.
​ Using CrewAI Tools
pip install 'crewai[tools]'
import os from crewai import Agent, Task, Crew # Importing crewAI tools from crewai_tools import ( DirectoryReadTool, FileReadTool, SerperDevTool, WebsiteSearchTool ) # Set up API keys os.environ[ "SERPER_API_KEY" ] = "Your Key" # serper.dev API key os.environ[ "OPENAI_API_KEY" ] = "Your Key" # Instantiate tools docs_tool = DirectoryReadTool( directory = './blog-posts' ) file_tool = FileReadTool() search_tool = SerperDevTool() web_rag_tool = WebsiteSearchTool() # Create agents researcher = Agent( role = 'Market Research Analyst' , goal = 'Provide up-to-date market analysis of the AI industry' , backstory = 'An expert analyst with a keen eye for market trends.' , tools = [search_tool, web_rag_tool], verbose = True ) writer = Agent( role = 'Content Writer' , goal = 'Craft engaging blog posts about the AI industry' , backstory = 'A skilled writer with a passion for technology.' , tools = [docs_tool, file_tool], verbose = True ) # Define tasks research = Task( description = 'Research the latest trends in the AI industry and provide a summary.' , expected_output = 'A summary of the top 3 trending developments in the AI industry with a unique perspective on their significance.' , agent = researcher ) write = Task( description = 'Write an engaging blog post about the AI industry, based on the research analyst' s summary. Draw inspiration from the latest blog posts in the directory. ', expected_output = 'A 4-paragraph blog post formatted in markdown with engaging, informative, and accessible content, avoiding complex jargon.' , agent = writer, output_file = 'blog-posts/new_post.md' # The final blog post will be saved here ) # Assemble a crew with planning enabled crew = Crew( agents = [researcher, writer], tasks = [research, write], verbose = True , planning = True , # Enable planning feature ) # Execute tasks crew.kickoff()
​ Available CrewAI Tools
Error Handling : All tools are built with error handling capabilities, allowing agents to gracefully manage exceptions and continue their tasks.
Caching Mechanism : All tools support caching, enabling agents to efficiently reuse previously obtained results, reducing the load on external resources and speeding up the execution time. You can also define finer control over the caching mechanism using the cache_function attribute on the tool.
​ Creating your own Tools
​ Subclassing BaseTool
from crewai.tools import BaseTool from pydantic import BaseModel, Field class MyToolInput ( BaseModel ): """Input schema for MyCustomTool.""" argument: str = Field( ... , description = "Description of the argument." ) class MyCustomTool ( BaseTool ): name: str = "Name of my tool" description: str = "What this tool does. It's vital for effective utilization." args_schema: Type[BaseModel] = MyToolInput def _run ( self , argument : str ) -> str : # Your tool's logic here return "Tool's result"
​ Typed Tool Outputs
from crewai.tools import BaseTool from pydantic import BaseModel class InventoryResult ( BaseModel ): sku: str quantity: int needs_reorder: bool class InventoryTool ( BaseTool ): name: str = "Inventory Check" description: str = "Checks current stock for a product SKU." def _run ( self , sku : str ) -> InventoryResult: quantity = { "SKU-123" : 14 , "SKU-456" : 0 }.get(sku, 0 ) return InventoryResult( sku = sku, quantity = quantity, needs_reorder = quantity < 5 ) tool = InventoryTool() # Direct calls receive the raw Pydantic object. result = tool.run( sku = "SKU-123" ) print (result.quantity)
class InventoryTool ( BaseTool ): name: str = "Inventory Check" description: str = "Checks current stock for a product SKU." def _run ( self , sku : str ) -> InventoryResult: quantity = { "SKU-123" : 14 , "SKU-456" : 0 }.get(sku, 0 ) return InventoryResult( sku = sku, quantity = quantity, needs_reorder = quantity < 5 ) def format_output_for_agent ( self , raw_result : object ) -> str : result = InventoryResult.model_validate(raw_result) status = "reorder needed" if result.needs_reorder else "stock is healthy" return f " { result.sku } : { result.quantity } units. { status } ."
​ Asynchronous Tool Support
​ Creating Async Tools
​ 1. Using the tool Decorator with Async Functions
from crewai.tools import tool @tool ( "fetch_data_async" ) async def fetch_data_async ( query : str ) -> str : """Asynchronously fetch data based on the query.""" # Simulate async operation await asyncio.sleep( 1 ) return f "Data retrieved for { query } "
​ 2. Implementing Async Methods in Custom Tool Classes
from crewai.tools import BaseTool class AsyncCustomTool ( BaseTool ): name: str = "async_custom_tool" description: str = "An asynchronous custom tool" async def _run ( self , query : str = "" ) -> str : """Asynchronously run the tool""" # Your async implementation here await asyncio.sleep( 1 ) return f "Processed { query } asynchronously"
​ Using Async Tools
# In standard Crew agent = Agent( role = "researcher" , tools = [async_custom_tool]) # In Flow class MyFlow ( Flow ): @start () async def begin ( self ): crew = Crew( agents = [agent]) result = await crew.kickoff_async() return result
​ Utilizing the tool Decorator
from crewai.tools import tool @tool ( "Name of my tool" ) def my_tool ( question : str ) -> str : """Clear description for what this tool is useful for, your agent will need this information to use it.""" # Function logic here return "Result from your custom tool"
​ Custom Caching Mechanism
from crewai.tools import tool @tool def multiplication_tool ( first_number : int , second_number : int ) -> str : """Useful for when you need to multiply two numbers together.""" return first_number * second_number def cache_func ( args , result ): # In this case, we only cache the result if it's a multiple of 2 cache = result % 2 == 0 return cache multiplication_tool.cache_function = cache_func writer1 = Agent( role = "Writer" , goal = "You write lessons of math for kids." , backstory = "You're an expert in writing and you love to teach kids but you know nothing of math." , tools = [multiplication_tool], allow_delegation = False , ) #...
​ Reporting Tool Failures
from typing import Any from crewai.tools import BaseTool from crewai.tools.tool_failure import ToolFailure class SendSlackMessage ( BaseTool ): name: str = "send_slack_message" description: str = "Post a message to a Slack channel." def _run ( self , channel : str , text : str ) -> Any: payload = slack.post( channel = channel, text = text) if not payload[ "ok" ]: return ToolFailure( message = f "Slack rejected the message: { payload[ 'error' ] } " , code = payload[ "error" ], retryable = payload[ "error" ] == "rate_limited" , ) return payload
​ Choosing a Failure Policy
from crewai import Agent, Crew, Task from crewai.tools.tool_failure import ToolFailurePolicy agent = Agent( role = "Slack Messenger" , goal = "Post the report to Slack" , backstory = "..." , tools = [SendSlackMessage()], tool_failure_policy = ToolFailurePolicy. WARN , ) # Tighten a single high-stakes task without changing the agent. task = Task( description = "Post the final report to #engineering" , expected_output = "Confirmation the message was posted" , agent = agent, tool_failure_policy = ToolFailurePolicy. RAISE , ) # Or set a baseline once for every agent in the crew. crew = Crew( agents = [agent], tasks = [task], tool_failure_policy = ToolFailurePolicy. WARN , )
​ Inspecting Failures
result = crew.kickoff() if result.has_tool_failures: for record in result.tool_failures: print (record.tool_name) # "send_slack_message" print (record.failure.code) # "channel_not_found" print (record.failure.reason) # ToolFailureReason.TOOL_REPORTED print (record.summary())
from crewai.events import ToolFailureDetectedEvent from crewai.events.event_bus import crewai_event_bus @crewai_event_bus.on (ToolFailureDetectedEvent) def on_tool_failure ( source , event ): print ( f " { event.tool_name } failed: { event.failure.message } ( { event.policy } )" )
​ Conclusion
Was this page helpful?
Yes
No
