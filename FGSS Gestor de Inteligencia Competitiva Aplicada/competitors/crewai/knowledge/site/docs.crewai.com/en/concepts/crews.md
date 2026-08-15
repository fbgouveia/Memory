# Documentation Index

- Source: https://docs.crewai.com/en/concepts/crews
- Raw SHA-256: `6ac0d3d8f7ab1e1b4b8eb1915fd713761084e5be8b24efb5e675d6f400c7b9b0`

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
Navigation Core Concepts Crews
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
Crews
Copy page Copy page
Understanding and utilizing crews in the crewAI framework with comprehensive attributes and functionalities.
Copy page Copy page
​ Overview
​ Crew Attributes
​ Creating Crews
​ JSONC Configuration (Recommended)
​ Example crew.jsonc
{ "name" : "Market Research Crew" , "agents" : [ "researcher" , "analyst" ], "tasks" : [ { "name" : "research" , "description" : "Research {topic} and collect the most relevant facts." , "expected_output" : "Structured research notes about {topic}." , "agent" : "researcher" }, { "name" : "analysis" , "description" : "Analyze the research and write a concise report." , "expected_output" : "A markdown report with findings and recommendations." , "agent" : "analyst" , "context" : [ "research" ], "output_file" : "output/report.md" } ], "process" : "sequential" , "verbose" : true , "memory" : true , "inputs" : { "topic" : "AI Agents" } }
{ "role" : "{topic} Senior Researcher" , "goal" : "Find accurate and current information about {topic}." , "backstory" : "You are a careful researcher who cites clear evidence." , "llm" : "openai/gpt-4o" , "tools" : [ "SerperDevTool" ] }
​ Classic Python/YAML Configuration
​ Direct Code Definition (Alternative)
from crewai import Agent, Crew, Task, Process from crewai_tools import YourCustomTool class YourCrewName : def agent_one ( self ) -> Agent: return Agent( role = "Data Analyst" , goal = "Analyze data trends in the market" , backstory = "An experienced data analyst with a background in economics" , verbose = True , tools = [YourCustomTool()] ) def agent_two ( self ) -> Agent: return Agent( role = "Market Researcher" , goal = "Gather information on market dynamics" , backstory = "A diligent researcher with a keen eye for detail" , verbose = True ) def task_one ( self ) -> Task: return Task( description = "Collect recent market data and identify trends." , expected_output = "A report summarizing key trends in the market." , agent = self .agent_one() ) def task_two ( self ) -> Task: return Task( description = "Research factors affecting market dynamics." , expected_output = "An analysis of factors influencing the market." , agent = self .agent_two() ) def crew ( self ) -> Crew: return Crew( agents = [ self .agent_one(), self .agent_two()], tasks = [ self .task_one(), self .task_two()], process = Process.sequential, verbose = True )
YourCrewName().crew().kickoff( inputs = {})
Agents and tasks are defined directly within the class without decorators.
We manually create and manage the list of agents and tasks.
This approach provides more control but can be less maintainable for larger projects.
​ Crew Output
​ Crew Output Attributes
​ Crew Output Methods and Properties
​ Accessing Crew Outputs
​ Example
# Example crew execution crew = Crew( agents = [research_agent, writer_agent], tasks = [research_task, write_article_task], verbose = True ) crew_output = crew.kickoff() # Accessing the crew output print ( f "Raw Output: { crew_output.raw } " ) if crew_output.json_dict: print ( f "JSON Output: { json.dumps(crew_output.json_dict, indent = 2 ) } " ) if crew_output.pydantic: print ( f "Pydantic Output: { crew_output.pydantic } " ) print ( f "Tasks Output: { crew_output.tasks_output } " ) print ( f "Token Usage: { crew_output.token_usage } " )
​ Accessing Crew Logs
# Save crew logs crew = Crew( output_log_file = True ) # Logs will be saved as logs.txt crew = Crew( output_log_file = file_name) # Logs will be saved as file_name.txt crew = Crew( output_log_file = file_name.txt) # Logs will be saved as file_name.txt crew = Crew( output_log_file = file_name.json) # Logs will be saved as file_name.json
​ Checkpointing
​ Quick Start
from crewai import Crew, Process crew = Crew( agents = [researcher, writer], tasks = [research_task, write_task], process = Process.sequential, checkpoint = True , # saves to .checkpoints/ after every task ) crew.kickoff( inputs = { "topic" : "AI trends" })
​ Full Control with CheckpointConfig
from crewai import Crew, Process from crewai.state.checkpoint_config import CheckpointConfig crew = Crew( agents = [researcher, writer], tasks = [research_task, write_task], process = Process.sequential, checkpoint = CheckpointConfig( location = "./.checkpoints" , # directory for JSON files (default) on_events = [ "task_completed" ], # trigger after each task (default) max_checkpoints = 5 , # keep only the 5 most recent checkpoints ), ) crew.kickoff( inputs = { "topic" : "AI trends" })
​ Resuming from a Checkpoint
# Resume from the most recent checkpoint crew = Crew.from_checkpoint( ".checkpoints/latest.json" ) crew.kickoff()
​ CheckpointConfig Attributes
​ Memory Utilization
​ Cache Utilization
​ Crew Usage Metrics
# Access the crew's usage metrics crew = Crew( agents = [agent1, agent2], tasks = [task1, task2]) crew.kickoff() print (crew.usage_metrics)
​ Crew Execution Process
Sequential Process : Tasks are executed one after another, allowing for a linear flow of work.
Hierarchical Process : A manager agent coordinates the crew, delegating tasks and validating outcomes before proceeding. Note : A manager_llm or manager_agent is required for this process and it’s essential for validating the process flow.
​ Kicking Off a Crew
# Start the crew's task execution result = my_crew.kickoff() print (result)
​ Different Ways to Kick Off a Crew
​ Synchronous Methods
kickoff() : Starts the execution process according to the defined process flow.
kickoff_for_each() : Executes tasks sequentially for each provided input event or item in the collection.
​ Asynchronous Methods
# Start the crew's task execution result = my_crew.kickoff() print (result) # Example of using kickoff_for_each inputs_array = [{ 'topic' : 'AI in healthcare' }, { 'topic' : 'AI in finance' }] results = my_crew.kickoff_for_each( inputs = inputs_array) for result in results: print (result) # Example of using native async with akickoff inputs = { 'topic' : 'AI in healthcare' } async_result = await my_crew.akickoff( inputs = inputs) print (async_result) # Example of using native async with akickoff_for_each inputs_array = [{ 'topic' : 'AI in healthcare' }, { 'topic' : 'AI in finance' }] async_results = await my_crew.akickoff_for_each( inputs = inputs_array) for async_result in async_results: print (async_result) # Example of using thread-based kickoff_async inputs = { 'topic' : 'AI in healthcare' } async_result = await my_crew.kickoff_async( inputs = inputs) print (async_result) # Example of using thread-based kickoff_for_each_async inputs_array = [{ 'topic' : 'AI in healthcare' }, { 'topic' : 'AI in finance' }] async_results = await my_crew.kickoff_for_each_async( inputs = inputs_array) for async_result in async_results: print (async_result)
​ Streaming Crew Execution
# Enable streaming crew = Crew( agents = [researcher], tasks = [task], stream = True ) # Iterate over streaming output streaming = crew.kickoff( inputs = { "topic" : "AI" }) for chunk in streaming: print (chunk.content, end = "" , flush = True ) # Access final result result = streaming.result
​ Replaying from a Specific Task
​ Replaying from a Specific Task Using the CLI
Open your terminal or command prompt.
Navigate to the directory where your CrewAI project is located.
Run the following command:
crewai log-tasks-outputs
crewai replay -t < task_i d >
Was this page helpful?
Yes
No
