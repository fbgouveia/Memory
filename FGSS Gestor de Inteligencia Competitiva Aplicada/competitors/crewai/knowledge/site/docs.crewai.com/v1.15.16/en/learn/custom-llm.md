# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/custom-llm
- Raw SHA-256: `25c52769c351d859fb50b508a30cf2ff979eb8c78c0cba13cd2d0572534efb56`

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
Navigation Learn Custom LLM Implementation
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
Custom LLM Implementation
Copy page Copy page
Learn how to create custom LLM implementations in CrewAI.
Copy page Copy page
​ Overview
​ Quick Start
from crewai import BaseLLM from typing import Any, Dict, List, Optional, Union import requests class CustomLLM ( BaseLLM ): def __init__ ( self , model : str , api_key : str , endpoint : str , temperature : Optional[ float ] = None ): # IMPORTANT: Call super().__init__() with required parameters super (). __init__ ( model = model, temperature = temperature) self .api_key = api_key self .endpoint = endpoint def call ( self , messages : Union[ str , List[Dict[ str , str ]]], tools : Optional[List[ dict ]] = None , callbacks : Optional[List[Any]] = None , available_functions : Optional[Dict[ str , Any]] = None , ) -> Union[ str , Any]: """Call the LLM with the given messages.""" # Convert string to message format if needed if isinstance (messages, str ): messages = [{ "role" : "user" , "content" : messages}] # Prepare request payload = { "model" : self .model, "messages" : messages, "temperature" : self .temperature, } # Add tools if provided and supported if tools and self .supports_function_calling(): payload[ "tools" ] = tools # Make API call response = requests.post( self .endpoint, headers = { "Authorization" : f "Bearer { self .api_key } " , "Content-Type" : "application/json" }, json = payload, timeout = 30 ) response.raise_for_status() result = response.json() return result[ "choices" ][ 0 ][ "message" ][ "content" ] def supports_function_calling ( self ) -> bool : """Override if your LLM supports function calling.""" return True # Change to False if your LLM doesn't support tools def get_context_window_size ( self ) -> int : """Return the context window size of your LLM.""" return 8192 # Adjust based on your model's actual context window
​ Using Your Custom LLM
from crewai import Agent, Task, Crew # Assuming you have the CustomLLM class defined above # Create your custom LLM custom_llm = CustomLLM( model = "my-custom-model" , api_key = "your-api-key" , endpoint = "https://api.example.com/v1/chat/completions" , temperature = 0.7 ) # Use with an agent agent = Agent( role = "Research Assistant" , goal = "Find and analyze information" , backstory = "You are a research assistant." , llm = custom_llm ) # Create and execute tasks task = Task( description = "Research the latest developments in AI" , expected_output = "A comprehensive summary" , agent = agent ) crew = Crew( agents = [agent], tasks = [task]) result = crew.kickoff()
​ Required Methods
​ Constructor: __init__()
def __init__ ( self , model : str , api_key : str , temperature : Optional[ float ] = None ): # REQUIRED: Call parent constructor with model and temperature super (). __init__ ( model = model, temperature = temperature) # Your custom initialization self .api_key = api_key
​ Abstract Method: call()
Accept messages (string or list of dicts with ‘role’ and ‘content’)
Return a string response
Handle tools and function calling if supported
Raise appropriate exceptions for errors
​ Optional Methods
def supports_function_calling ( self ) -> bool : """Return True if your LLM supports function calling.""" return True # Default is True def supports_stop_words ( self ) -> bool : """Return True if your LLM supports stop sequences.""" return True # Default is True def get_context_window_size ( self ) -> int : """Return the context window size.""" return 4096 # Default is 4096
​ Common Patterns
​ Error Handling
import requests def call ( self , messages , tools = None , callbacks = None , available_functions = None ): try : response = requests.post( self .endpoint, headers = { "Authorization" : f "Bearer { self .api_key } " }, json = payload, timeout = 30 ) response.raise_for_status() return response.json()[ "choices" ][ 0 ][ "message" ][ "content" ] except requests.Timeout: raise TimeoutError ( "LLM request timed out" ) except requests.RequestException as e: raise RuntimeError ( f "LLM request failed: { str (e) } " ) except ( KeyError , IndexError ) as e: raise ValueError ( f "Invalid response format: { str (e) } " )
​ Custom Authentication
from crewai import BaseLLM from typing import Optional class CustomAuthLLM ( BaseLLM ): def __init__ ( self , model : str , auth_token : str , endpoint : str , temperature : Optional[ float ] = None ): super (). __init__ ( model = model, temperature = temperature) self .auth_token = auth_token self .endpoint = endpoint def call ( self , messages , tools = None , callbacks = None , available_functions = None ): headers = { "Authorization" : f "Custom { self .auth_token } " , # Custom auth format "Content-Type" : "application/json" } # Rest of implementation...
​ Stop Words Support
def call ( self , messages , tools = None , callbacks = None , available_functions = None ): payload = { "model" : self .model, "messages" : messages, "stop" : self .stop # Include stop words in API call } # Make API call... def supports_stop_words ( self ) -> bool : return True # Your LLM supports stop sequences
def call ( self , messages , tools = None , callbacks = None , available_functions = None ): response = self ._make_api_call(messages, tools) content = response[ "choices" ][ 0 ][ "message" ][ "content" ] # Manually truncate at stop words if self .stop: for stop_word in self .stop: if stop_word in content: content = content.split(stop_word)[ 0 ] break return content def supports_stop_words ( self ) -> bool : return False # Tell CrewAI we handle stop words manually
​ Function Calling
import json def call ( self , messages , tools = None , callbacks = None , available_functions = None ): # Convert string to message format if isinstance (messages, str ): messages = [{ "role" : "user" , "content" : messages}] # Make API call response = self ._make_api_call(messages, tools) message = response[ "choices" ][ 0 ][ "message" ] # Check for function calls if "tool_calls" in message and available_functions: return self ._handle_function_calls( message[ "tool_calls" ], messages, tools, available_functions ) return message[ "content" ] def _handle_function_calls ( self , tool_calls , messages , tools , available_functions ): """Handle function calling with proper message flow.""" for tool_call in tool_calls: function_name = tool_call[ "function" ][ "name" ] if function_name in available_functions: # Parse and execute function function_args = json.loads(tool_call[ "function" ][ "arguments" ]) function_result = available_functions[function_name]( ** function_args) # Add function call and result to message history messages.append({ "role" : "assistant" , "content" : None , "tool_calls" : [tool_call] }) messages.append({ "role" : "tool" , "tool_call_id" : tool_call[ "id" ], "name" : function_name, "content" : str (function_result) }) # Call LLM again with updated context return self .call(messages, tools, None , available_functions) return "Function call failed"
​ Troubleshooting
​ Common Issues
# ❌ Wrong - missing required parameters def __init__ ( self , api_key : str ): super (). __init__ () # ✅ Correct def __init__ ( self , model : str , api_key : str , temperature : Optional[ float ] = None ): super (). __init__ ( model = model, temperature = temperature)
Ensure supports_function_calling() returns True
Check that you handle tool_calls in the response
Verify available_functions parameter is used correctly
Verify API key format and permissions
Check authentication header format
Ensure endpoint URLs are correct
Validate response structure before accessing nested fields
Handle cases where content might be None
Add proper error handling for malformed responses
​ Testing Your Custom LLM
from crewai import Agent, Task, Crew def test_custom_llm (): llm = CustomLLM( model = "test-model" , api_key = "test-key" , endpoint = "https://api.test.com" ) # Test basic call result = llm.call( "Hello, world!" ) assert isinstance (result, str ) assert len (result) > 0 # Test with CrewAI agent agent = Agent( role = "Test Agent" , goal = "Test custom LLM" , backstory = "A test agent." , llm = llm ) task = Task( description = "Say hello" , expected_output = "A greeting" , agent = agent ) crew = Crew( agents = [agent], tasks = [task]) result = crew.kickoff() assert "hello" in result.raw.lower()
Was this page helpful?
Yes
No
