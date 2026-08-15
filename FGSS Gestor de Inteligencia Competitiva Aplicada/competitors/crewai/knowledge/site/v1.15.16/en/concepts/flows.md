# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/flows
- Raw SHA-256: `0e43b42f1b570bbd42f978796c3d1cb361a151488ae03b4a51f91b6f1c6c9a09`

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
Navigation Core Concepts Flows
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
Flows
Copy page Copy page
Learn how to create and manage AI workflows using CrewAI Flows.
Copy page Copy page
​ Overview
Simplified Workflow Creation : Easily chain together multiple Crews and tasks to create complex AI workflows.
State Management : Flows make it super easy to manage and share state between different tasks in your workflow.
Event-Driven Architecture : Built on an event-driven model, allowing for dynamic and responsive workflows.
Flexible Control Flow : Implement conditional logic, loops, and branching within your workflows.
​ Getting Started
from crewai.flow.flow import Flow, listen, start from dotenv import load_dotenv from litellm import completion load_dotenv() class ExampleFlow ( Flow ): model = "gpt-4o-mini" @start () def generate_city ( self ): print ( "Starting flow" ) # Each flow state automatically gets a unique ID print ( f "Flow State ID: { self .state[ 'id' ] } " ) response = completion( model = self .model, messages = [ { "role" : "user" , "content" : "Return the name of a random city in the world." , }, ], ) random_city = response[ "choices" ][ 0 ][ "message" ][ "content" ] # Store the city in our state self .state[ "city" ] = random_city print ( f "Random City: { random_city } " ) return random_city @listen (generate_city) def generate_fun_fact ( self , random_city ): response = completion( model = self .model, messages = [ { "role" : "user" , "content" : f "Tell me a fun fact about { random_city } " , }, ], ) fun_fact = response[ "choices" ][ 0 ][ "message" ][ "content" ] # Store the fun fact in our state self .state[ "fun_fact" ] = fun_fact return fun_fact flow = ExampleFlow() flow.plot() result = flow.kickoff() print ( f "Generated fun fact: { result } " )
Generate a unique ID for the flow state
Generate a random city and store it in the state
Generate a fun fact about that city and store it in the state
Print the results to the console
​ @start()
Declare multiple unconditional starts: @start()
Gate a start on a prior method or router label: @start("method_or_label")
Provide a callable condition to control when a start should fire
​ @listen()
​ Usage
Listening to a Method by Name : You can pass the name of the method you want to listen to as a string. When that method completes, the listener method will be triggered. Code @listen ( "generate_city" ) def generate_fun_fact ( self , random_city ): # Implementation
Listening to a Method Directly : You can pass the method itself. When that method completes, the listener method will be triggered. Code @listen (generate_city) def generate_fun_fact ( self , random_city ): # Implementation
​ Flow Output
​ Retrieving the Final Output
Code
Output
from crewai.flow.flow import Flow, listen, start class OutputExampleFlow ( Flow ): @start () def first_method ( self ): return "Output from first_method" @listen (first_method) def second_method ( self , first_output ): return f "Second method received: { first_output } " flow = OutputExampleFlow() flow.plot( "my_flow_plot" ) final_output = flow.kickoff() print ( "---- Final Output ----" ) print (final_output)
---- Final Output ---- Second method received: Output from first_method
​ Accessing and Updating State
Code
Output
from crewai.flow.flow import Flow, listen, start from pydantic import BaseModel class ExampleState ( BaseModel ): counter: int = 0 message: str = "" class StateExampleFlow (Flow[ExampleState]): @start () def first_method ( self ): self .state.message = "Hello from first_method" self .state.counter += 1 @listen (first_method) def second_method ( self ): self .state.message += " - updated by second_method" self .state.counter += 1 return self .state.message flow = StateExampleFlow() flow.plot( "my_flow_plot" ) final_output = flow.kickoff() print ( f "Final Output: { final_output } " ) print ( "Final State:" ) print (flow.state)
Final Output: Hello from first_method - updated by second_method Final State: counter=2 message='Hello from first_method - updated by second_method'
​ Flow Usage Metrics
from crewai import LLM from crewai.flow.flow import Flow, listen, start class UsageMetricsFlow ( Flow ): @start () def run_first_crew ( self ): self .state.first_result = FirstCrew().crew().kickoff() @listen (run_first_crew) def call_llm_directly ( self ): # Bare LLM call — still counted by flow.usage_metrics llm = LLM( model = "openai/gpt-4o-mini" ) self .state.summary = llm.call( "Summarize the key takeaways." ) @listen (call_llm_directly) def run_second_crew ( self ): self .state.second_result = SecondCrew().crew().kickoff() flow = UsageMetricsFlow() flow.kickoff() print (flow.usage_metrics) # UsageMetrics(total_tokens=8579, prompt_tokens=6210, completion_tokens=2369, # cached_prompt_tokens=0, reasoning_tokens=0, # cache_creation_tokens=0, successful_requests=5)
​ UsageMetrics field semantics
​ Flow State Management
​ Unstructured State Management
from crewai.flow.flow import Flow, listen, start class UnstructuredExampleFlow ( Flow ): @start () def first_method ( self ): # The state automatically includes an 'id' field print ( f "State ID: { self .state[ 'id' ] } " ) self .state[ 'counter' ] = 0 self .state[ 'message' ] = "Hello from structured flow" @listen (first_method) def second_method ( self ): self .state[ 'counter' ] += 1 self .state[ 'message' ] += " - updated" @listen (second_method) def third_method ( self ): self .state[ 'counter' ] += 1 self .state[ 'message' ] += " - updated again" print ( f "State after third_method: { self .state } " ) flow = UnstructuredExampleFlow() flow.plot( "my_flow_plot" ) flow.kickoff()
Flexibility: You can dynamically add attributes to self.state without predefined constraints.
Simplicity: Ideal for straightforward workflows where state structure is minimal or varies significantly.
​ Structured State Management
from crewai.flow.flow import Flow, listen, start from pydantic import BaseModel class ExampleState ( BaseModel ): # Note: 'id' field is automatically added to all states counter: int = 0 message: str = "" class StructuredExampleFlow (Flow[ExampleState]): @start () def first_method ( self ): # Access the auto-generated ID if needed print ( f "State ID: { self .state.id } " ) self .state.message = "Hello from structured flow" @listen (first_method) def second_method ( self ): self .state.counter += 1 self .state.message += " - updated" @listen (second_method) def third_method ( self ): self .state.counter += 1 self .state.message += " - updated again" print ( f "State after third_method: { self .state } " ) flow = StructuredExampleFlow() flow.kickoff()
Defined Schema: ExampleState clearly outlines the state structure, enhancing code readability and maintainability.
Type Safety: Leveraging Pydantic ensures that state attributes adhere to the specified types, reducing runtime errors.
Auto-Completion: IDEs can provide better auto-completion and error checking based on the defined state model.
​ Choosing Between Unstructured and Structured State Management
Use Unstructured State Management when: The workflow’s state is simple or highly dynamic. Flexibility is prioritized over strict state definitions. Rapid prototyping is required without the overhead of defining schemas.
Use Structured State Management when: The workflow requires a well-defined and consistent state structure. Type safety and validation are important for your application’s reliability. You want to leverage IDE features like auto-completion and type checking for better developer experience.
​ Flow Persistence
​ Class-Level Persistence
@persist # Using SQLiteFlowPersistence by default class MyFlow (Flow[MyState]): @start () def initialize_flow ( self ): # This method will automatically have its state persisted self .state.counter = 1 print ( "Initialized flow. State ID:" , self .state.id) @listen (initialize_flow) def next_step ( self ): # The state (including self.state.id) is automatically reloaded self .state.counter += 1 print ( "Flow state is persisted. Counter:" , self .state.counter)
​ Method-Level Persistence
class AnotherFlow (Flow[ dict ]): @persist # Persists only this method's state @start () def begin ( self ): if "runs" not in self .state: self .state[ "runs" ] = 0 self .state[ "runs" ] += 1 print ( "Method-level persisted runs:" , self .state[ "runs" ])
​ Forking Persisted State
kickoff(inputs={"id": <uuid>}) — resume : load the latest snapshot for the supplied UUID and continue writing under the same flow_uuid . The history extends.
kickoff(restore_from_state_id=<uuid>) — fork : load the latest snapshot for the supplied UUID, hydrate the new run’s state from it, and assign a fresh state.id (auto-generated, or inputs["id"] if pinned). The new run’s @persist writes land under the new state.id ; the source flow’s history is preserved.
from crewai.flow.flow import Flow, start from crewai.flow.persistence import persist from pydantic import BaseModel class CounterState ( BaseModel ): id : str = "" counter: int = 0 @persist class CounterFlow (Flow[CounterState]): @start () def step ( self ): self .state.counter += 1 print ( f "[id= { self .state.id } ] counter= { self .state.counter } " ) # Run 1: fresh state, counter 0 -> 1, persisted under flow_1.state.id flow_1 = CounterFlow() flow_1.kickoff() # Fork: hydrate from flow_1's latest snapshot, but use a NEW state.id flow_2 = CounterFlow() flow_2.kickoff( restore_from_state_id = flow_1.state.id) # flow_2.state.counter starts at 1 (hydrated), then step() bumps it to 2. # flow_2.state.id != flow_1.state.id; flow_1's history is unchanged.
​ How It Works
Unique State Identification Each flow state automatically receives a unique UUID The ID is preserved across state updates and method calls Supports both structured (Pydantic BaseModel) and unstructured (dictionary) states
Default SQLite Backend SQLiteFlowPersistence is the default storage backend States are automatically saved to a local SQLite database Robust error handling ensures clear messages if database operations fail
Error Handling Comprehensive error messages for database operations Automatic state validation during save and load Clear feedback when persistence operations encounter issues
​ Important Considerations
State Types : Both structured (Pydantic BaseModel) and unstructured (dictionary) states are supported
Automatic ID : The id field is automatically added if not present
State Recovery : Failed or restarted flows can automatically reload their previous state
Custom Implementation : You can provide your own FlowPersistence implementation for specialized storage needs
​ Technical Advantages
Precise Control Through Low-Level Access Direct access to persistence operations for advanced use cases Fine-grained control via method-level persistence decorators Built-in state inspection and debugging capabilities Full visibility into state changes and persistence operations
Enhanced Reliability Automatic state recovery after system failures or restarts Transaction-based state updates for data integrity Comprehensive error handling with clear error messages Robust validation during state save and load operations
Extensible Architecture Customizable persistence backend through FlowPersistence interface Support for specialized storage solutions beyond SQLite Compatible with both structured (Pydantic) and unstructured (dict) states Seamless integration with existing CrewAI flow patterns
​ Flow Control
​ Conditional Logic: or
Code
Output
from crewai.flow.flow import Flow, listen, or_, start class OrExampleFlow ( Flow ): @start () def start_method ( self ): return "Hello from the start method" @listen (start_method) def second_method ( self ): return "Hello from the second method" @listen (or_(start_method, second_method)) def logger ( self , result ): print ( f "Logger: { result } " ) flow = OrExampleFlow() flow.plot( "my_flow_plot" ) flow.kickoff()
Logger: Hello from the start method Logger: Hello from the second method
​ Conditional Logic: and
Code
Output
from crewai.flow.flow import Flow, and_, listen, start class AndExampleFlow ( Flow ): @start () def start_method ( self ): self .state[ "greeting" ] = "Hello from the start method" @listen (start_method) def second_method ( self ): self .state[ "joke" ] = "What do computers eat? Microchips." @listen (and_(start_method, second_method)) def logger ( self ): print ( "---- Logger ----" ) print ( self .state) flow = AndExampleFlow() flow.plot() flow.kickoff()
---- Logger ---- {'greeting': 'Hello from the start method', 'joke': 'What do computers eat? Microchips.'}
​ Router
Code
Output
import random from crewai.flow.flow import Flow, listen, router, start from pydantic import BaseModel class ExampleState ( BaseModel ): success_flag: bool = False class RouterFlow (Flow[ExampleState]): @start () def start_method ( self ): print ( "Starting the structured flow" ) random_boolean = random.choice([ True , False ]) self .state.success_flag = random_boolean @router (start_method) def second_method ( self ): if self .state.success_flag: return "success" else : return "failed" @listen ( "success" ) def third_method ( self ): print ( "Third method running" ) @listen ( "failed" ) def fourth_method ( self ): print ( "Fourth method running" ) flow = RouterFlow() flow.plot( "my_flow_plot" ) flow.kickoff()
Starting the structured flow Third method running Fourth method running
​ Human in the Loop (human feedback)
from crewai.flow.flow import Flow, start, listen from crewai.flow.human_feedback import human_feedback, HumanFeedbackResult class ReviewFlow ( Flow ): @start () @human_feedback ( message = "Do you approve this content?" , emit = [ "approved" , "rejected" , "needs_revision" ], llm = "gpt-4o-mini" , default_outcome = "needs_revision" , ) def generate_content ( self ): return "Content to be reviewed..." @listen ( "approved" ) def on_approval ( self , result : HumanFeedbackResult): print ( f "Approved! Feedback: { result.feedback } " ) @listen ( "rejected" ) def on_rejection ( self , result : HumanFeedbackResult): print ( f "Rejected. Reason: { result.feedback } " )
@start () @human_feedback ( message = "Any comments on this output?" ) def my_method ( self ): return "Output for review" @listen (my_method) def next_step ( self , result : HumanFeedbackResult): # Access feedback via result.feedback # Access original output via result.output pass
​ Adding Agents to Flows
import asyncio from typing import Any, Dict, List from crewai_tools import SerperDevTool from pydantic import BaseModel, Field from crewai.agent import Agent from crewai.flow.flow import Flow, listen, start # Define a structured output format class MarketAnalysis ( BaseModel ): key_trends: List[ str ] = Field( description = "List of identified market trends" ) market_size: str = Field( description = "Estimated market size" ) competitors: List[ str ] = Field( description = "Major competitors in the space" ) # Define flow state class MarketResearchState ( BaseModel ): product: str = "" analysis: MarketAnalysis | None = None # Create a flow class class MarketResearchFlow (Flow[MarketResearchState]): @start () def initialize_research ( self ) -> Dict[ str , Any]: print ( f "Starting market research for { self .state.product } " ) return { "product" : self .state.product} @listen (initialize_research) async def analyze_market ( self ) -> Dict[ str , Any]: # Create an Agent for market research analyst = Agent( role = "Market Research Analyst" , goal = f "Analyze the market for { self .state.product } " , backstory = "You are an experienced market analyst with expertise in " "identifying market trends and opportunities." , tools = [SerperDevTool()], verbose = True , ) # Define the research query query = f """ Research the market for { self .state.product } . Include: 1. Key market trends 2. Market size 3. Major competitors Format your response according to the specified structure. """ # Execute the analysis with structured output format result = await analyst.kickoff_async(query, response_format = MarketAnalysis) if result.pydantic: print ( "result" , result.pydantic) else : print ( "result" , result) # Return the analysis to update the state return { "analysis" : result.pydantic} @listen (analyze_market) def present_results ( self , analysis ) -> None : print ( " \n Market Analysis Results" ) print ( "=====================" ) if isinstance (analysis, dict ): # If we got a dict with 'analysis' key, extract the actual analysis object market_analysis = analysis.get( "analysis" ) else : market_analysis = analysis if market_analysis and isinstance (market_analysis, MarketAnalysis): print ( " \n Key Market Trends:" ) for trend in market_analysis.key_trends: print ( f "- { trend } " ) print ( f " \n Market Size: { market_analysis.market_size } " ) print ( " \n Major Competitors:" ) for competitor in market_analysis.competitors: print ( f "- { competitor } " ) else : print ( "No structured analysis data available." ) print ( "Raw analysis:" , analysis) # Usage example async def run_flow (): flow = MarketResearchFlow() flow.plot( "MarketResearchFlowPlot" ) result = await flow.kickoff_async( inputs = { "product" : "AI-powered chatbots" }) return result # Run the flow if __name__ == "__main__" : asyncio.run(run_flow())
Structured Output : Using Pydantic models to define the expected output format ( MarketAnalysis ) ensures type safety and structured data throughout the flow.
State Management : The flow state ( MarketResearchState ) maintains context between steps and stores both inputs and outputs.
Tool Integration : Agents can use tools (like WebsiteSearchTool ) to enhance their capabilities.
​ Adding Crews to Flows
crewai create flow name_of_flow
​ Folder Structure
​ Building Your Crews
config/agents.yaml : Defines the agents for the crew.
config/tasks.yaml : Defines the tasks for the crew.
poem_crew.py : Contains the crew definition, including agents, tasks, and the crew itself.
crews/ └── research_crew/ ├── agents/ │ └── researcher.jsonc └── crew.jsonc
from pathlib import Path from crewai.project import load_crew crew, default_inputs = load_crew( Path( __file__ ).parent / "crews" / "research_crew" / "crew.jsonc" ) result = crew.kickoff( inputs = { ** default_inputs, "topic" : "AI Agents" })
​ Connecting Crews in main.py
#!/usr/bin/env python from random import randint from pydantic import BaseModel from crewai.flow.flow import Flow, listen, start from .crews.poem_crew.poem_crew import PoemCrew class PoemState ( BaseModel ): sentence_count: int = 1 poem: str = "" class PoemFlow (Flow[PoemState]): @start () def generate_sentence_count ( self ): print ( "Generating sentence count" ) self .state.sentence_count = randint( 1 , 5 ) @listen (generate_sentence_count) def generate_poem ( self ): print ( "Generating poem" ) result = PoemCrew().crew().kickoff( inputs = { "sentence_count" : self .state.sentence_count}) print ( "Poem generated" , result.raw) self .state.poem = result.raw @listen (generate_poem) def save_poem ( self ): print ( "Saving poem" ) with open ( "poem.txt" , "w" ) as f: f.write( self .state.poem) def kickoff (): poem_flow = PoemFlow() poem_flow.kickoff() def plot (): poem_flow = PoemFlow() poem_flow.plot( "PoemFlowPlot" ) if __name__ == "__main__" : kickoff() plot()
​ Running the Flow
crewai install
source .venv/bin/activate
crewai run
uv run kickoff
​ Plot Flows
​ What are Plots?
​ How to Generate a Plot
​ Option 1: Using the plot() Method
# Assuming you have a flow instance flow.plot( "my_flow_plot" )
​ Option 2: Using the Command Line
crewai flow plot
​ Understanding the Plot
​ Conclusion
​ Next Steps
Email Auto Responder Flow : This example demonstrates an infinite loop where a background job continually runs to automate email responses. It’s a great use case for tasks that need to be performed repeatedly without manual intervention. View Example
Lead Score Flow : This flow showcases adding human-in-the-loop feedback and handling different conditional branches using the router. It’s an excellent example of how to incorporate dynamic decision-making and human oversight into your workflows. View Example
Write a Book Flow : This example excels at chaining multiple crews together, where the output of one crew is used by another. Specifically, one crew outlines an entire book, and another crew generates chapters based on the outline. Eventually, everything is connected to produce a complete book. This flow is perfect for complex, multi-step processes that require coordination between different tasks. View Example
Meeting Assistant Flow : This flow demonstrates how to broadcast one event to trigger multiple follow-up actions. For instance, after a meeting is completed, the flow can update a Trello board, send a Slack message, and save the results. It’s a great example of handling multiple outcomes from a single event, making it ideal for comprehensive task management and notification systems. View Example
​ Running Flows
​ Using the Flow API
flow = ExampleFlow() result = flow.kickoff()
​ Streaming Flow Execution
class StreamingFlow ( Flow ): stream = True # Enable streaming @start () def research ( self ): # Your flow implementation pass # Iterate over streaming output flow = StreamingFlow() streaming = flow.kickoff() for chunk in streaming: print (chunk.content, end = "" , flush = True ) # Access final result result = streaming.result
​ Memory in Flows
​ Built-in Methods
from crewai.flow.flow import Flow from crewai import Memory custom_memory = Memory( recency_weight = 0.5 , recency_half_life_days = 7 , embedder = { "provider" : "ollama" , "config" : { "model_name" : "mxbai-embed-large" }}, ) flow = MyFlow( memory = custom_memory)
​ Example: Research and Analyze Flow
from crewai.flow.flow import Flow, listen, start class ResearchAnalysisFlow ( Flow ): @start () def gather_data ( self ): # Simulate research findings findings = ( "PostgreSQL handles 10k concurrent connections with connection pooling. " "MySQL caps at around 5k. MongoDB scales horizontally but adds complexity." ) # Extract atomic facts and remember each one memories = self .extract_memories(findings) for mem in memories: self .remember(mem, scope = "/research/databases" ) return findings @listen (gather_data) def analyze ( self , raw_findings ): # Recall relevant past research (from this run or previous runs) past = self .recall( "database performance and scaling" , limit = 10 , depth = "shallow" ) context_lines = [ f "- { m.record.content } " for m in past] context = " \n " .join(context_lines) if context_lines else "No prior context." return { "new_findings" : raw_findings, "prior_context" : context, "total_memories" : len (past), } flow = ResearchAnalysisFlow() result = flow.kickoff() print (result)
​ Using the CLI
crewai run
Was this page helpful?
Yes
No
