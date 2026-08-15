# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/create-custom-tools
- Raw SHA-256: `5d41bf8860d38ae655f26fc9a0eb79ac25fb74b4d4170d6eb1ddcb9fbce27e4b`

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
Navigation Learn Create Custom Tools
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
Create Custom Tools
Copy page Copy page
Comprehensive guide on crafting, using, and managing custom tools within the CrewAI framework, including new functionalities and error handling.
Copy page Copy page
​ Creating and Utilizing Tools in CrewAI
​ Subclassing BaseTool
from typing import Type from crewai.tools import BaseTool from pydantic import BaseModel, Field class MyToolInput ( BaseModel ): """Input schema for MyCustomTool.""" argument: str = Field( ... , description = "Description of the argument." ) class MyCustomTool ( BaseTool ): name: str = "Name of my tool" description: str = "What this tool does. It's vital for effective utilization." args_schema: Type[BaseModel] = MyToolInput def _run ( self , argument : str ) -> str : # Your tool's logic here return "Tool's result"
​ Using the tool Decorator
from crewai.tools import tool @tool ( "Tool Name" ) def my_simple_tool ( question : str ) -> str : """Tool description for clarity.""" # Tool logic here return "Tool output"
​ Best Practice: Define Typed Outputs
​ Return a Pydantic Model
from crewai.tools import BaseTool from pydantic import BaseModel, Field class InventoryResult ( BaseModel ): sku: str = Field( description = "The product SKU." ) quantity: int = Field( description = "Units available." ) needs_reorder: bool = Field( description = "Whether the item should be reordered." ) class InventoryTool ( BaseTool ): name: str = "Inventory Check" description: str = "Check current stock for a product SKU." def _run ( self , sku : str ) -> InventoryResult: quantity = { "SKU-123" : 14 , "SKU-456" : 0 }.get(sku, 0 ) return InventoryResult( sku = sku, quantity = quantity, needs_reorder = quantity < 5 ) tool = InventoryTool() result = tool.run( sku = "SKU-123" ) # Direct Python calls receive the raw Pydantic object. print (result.quantity)
{ "sku" : "SKU-123" , "quantity" : 14 , "needs_reorder" : false }
​ Use result_schema with Dictionary Results
from crewai.tools import tool from pydantic import BaseModel, Field class ProductResult ( BaseModel ): sku: str = Field( description = "The product SKU." ) name: str = Field( description = "The product name." ) in_stock: bool = Field( description = "Whether the product is available." ) @tool ( "Product Lookup" , result_schema = ProductResult) def product_lookup ( sku : str ) -> dict[ str , object ]: """Look up product availability by SKU.""" catalog = { "SKU-123" : ( "Noise-canceling headset" , True ), "SKU-456" : ( "USB-C dock" , False ), } name, in_stock = catalog.get(sku, ( "Unknown product" , False )) return { "sku" : sku, "name" : name, "in_stock" : in_stock, }
​ Customize the Text Sent to the Agent
from crewai.tools import BaseTool from pydantic import BaseModel, Field class InventoryResult ( BaseModel ): sku: str = Field( description = "The product SKU." ) quantity: int = Field( description = "Units available." ) needs_reorder: bool = Field( description = "Whether the item should be reordered." ) class InventoryTool ( BaseTool ): name: str = "Inventory Check" description: str = "Check current stock for a product SKU." def _run ( self , sku : str ) -> InventoryResult: quantity = { "SKU-123" : 14 , "SKU-456" : 0 }.get(sku, 0 ) return InventoryResult( sku = sku, quantity = quantity, needs_reorder = quantity < 5 ) def format_output_for_agent ( self , raw_result : object ) -> str : result = InventoryResult.model_validate(raw_result) status = "reorder needed" if result.needs_reorder else "stock is healthy" return f " { result.sku } : { result.quantity } units. { status } ." tool = InventoryTool() result = tool.run( sku = "SKU-123" ) # Direct Python calls receive the raw Pydantic object. print (result.quantity)
​ Defining a Cache Function for the Tool
@tool ( "Tool with Caching" ) def cached_tool ( argument : str ) -> str : """Tool functionality description.""" return "Cacheable result" def my_cache_strategy ( arguments : dict , result : str ) -> bool : # Define custom caching logic return True if some_condition else False cached_tool.cache_function = my_cache_strategy
​ Creating Async Tools
​ Using the @tool Decorator with Async Functions
import aiohttp from crewai.tools import tool @tool ( "Async Web Fetcher" ) async def fetch_webpage ( url : str ) -> str : """Fetch content from a webpage asynchronously.""" async with aiohttp.ClientSession() as session: async with session.get(url) as response: return await response.text()
​ Subclassing BaseTool with Async Support
import requests import aiohttp from crewai.tools import BaseTool from pydantic import BaseModel, Field class WebFetcherInput ( BaseModel ): """Input schema for WebFetcher.""" url: str = Field( ... , description = "The URL to fetch" ) class WebFetcherTool ( BaseTool ): name: str = "Web Fetcher" description: str = "Fetches content from a URL" args_schema: type[BaseModel] = WebFetcherInput def _run ( self , url : str ) -> str : """Synchronous implementation.""" return requests.get(url).text async def _arun ( self , url : str ) -> str : """Asynchronous implementation for non-blocking I/O.""" async with aiohttp.ClientSession() as session: async with session.get(url) as response: return await response.text()
Was this page helpful?
Yes
No
