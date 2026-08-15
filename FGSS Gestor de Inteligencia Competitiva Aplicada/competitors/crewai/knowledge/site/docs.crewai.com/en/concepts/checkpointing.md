# Documentation Index

- Source: https://docs.crewai.com/en/concepts/checkpointing
- Raw SHA-256: `9e362b5f881b568b1ac73a18afc779d30fe6e582bbc0b8fd952dd7c467550f65`

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
Navigation Core Concepts Checkpointing
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
Checkpointing
Copy page Copy page
Automatically save execution state so crews, flows, and agents can resume after failures.
Copy page Copy page
Explanation
Tutorial
How-to guides
Reference
​ Explanation
​ What a checkpoint is
​ When checkpoints are written
​ Storage
JsonProvider writes one file per checkpoint. Human-readable and easy to inspect.
SqliteProvider writes to a single SQLite database. Better for high-frequency checkpointing.
​ Inheritance model
​ Tutorial: Resume a failing crew
Create the crew with checkpointing enabled
from crewai import Agent, Crew, Task researcher = Agent( role = "Researcher" , goal = "Research" , backstory = "Expert" ) writer = Agent( role = "Writer" , goal = "Write" , backstory = "Expert" ) crew = Crew( agents = [researcher, writer], tasks = [ Task( description = "Research AI trends" , agent = researcher, expected_output = "bullets" ), Task( description = "Write a summary" , agent = writer, expected_output = "paragraph" ), ], checkpoint = True , )
Run it and interrupt after the first task
result = crew.kickoff()
Resume from the checkpoint
from crewai import CheckpointConfig result = crew.kickoff( from_checkpoint = CheckpointConfig( restore_from = "./.checkpoints/<timestamp>_<uuid>.json" , ), )
​ How-to guides
Enable checkpointing with defaults
crew = Crew( agents = [ ... ], tasks = [ ... ], checkpoint = True )
Customize storage and frequency
from crewai import Crew, CheckpointConfig crew = Crew( agents = [ ... ], tasks = [ ... ], checkpoint = CheckpointConfig( location = "./my_checkpoints" , on_events = [ "task_completed" , "crew_kickoff_completed" ], max_checkpoints = 5 , ), )
Choose a storage provider
JsonProvider
SqliteProvider
from crewai import Crew, CheckpointConfig from crewai.state import JsonProvider crew = Crew( agents = [ ... ], tasks = [ ... ], checkpoint = CheckpointConfig( location = "./my_checkpoints" , provider = JsonProvider(), max_checkpoints = 5 , ), )
from crewai import Crew, CheckpointConfig from crewai.state import SqliteProvider crew = Crew( agents = [ ... ], tasks = [ ... ], checkpoint = CheckpointConfig( location = "./.checkpoints.db" , provider = SqliteProvider(), max_checkpoints = 50 , ), )
Opt one agent out
crew = Crew( agents = [ Agent( role = "Researcher" , ... ), Agent( role = "Writer" , ... , checkpoint = False ), ], tasks = [ ... ], checkpoint = True , )
Fork into a new branch
config = CheckpointConfig( restore_from = "./my_checkpoints/<file>.json" ) crew = Crew.fork(config, branch = "experiment-a" ) result = crew.kickoff( inputs = { "strategy" : "aggressive" })
Checkpoint a Crew, Flow, or Agent
Crew
Flow
Agent
crew = Crew( agents = [researcher, writer], tasks = [research_task, write_task, review_task], checkpoint = CheckpointConfig( location = "./crew_cp" ), )
from crewai.flow.flow import Flow, start, listen from crewai import CheckpointConfig class MyFlow ( Flow ): @start () def step_one ( self ): return "data" @listen (step_one) def step_two ( self , data ): return process(data) flow = MyFlow( checkpoint = CheckpointConfig( location = "./flow_cp" , on_events = [ "method_execution_finished" ], ), ) result = flow.kickoff()
agent = Agent( role = "Researcher" , goal = "Research topics" , backstory = "Expert researcher" , checkpoint = CheckpointConfig( location = "./agent_cp" , on_events = [ "lite_agent_execution_completed" ], ), ) result = agent.kickoff( messages = [{ "role" : "user" , "content" : "Research AI trends" }])
Write a checkpoint manually
Sync
Async
from __future__ import annotations from typing import TYPE_CHECKING , Any from crewai.events.event_bus import crewai_event_bus from crewai.events.types.llm_events import LLMCallCompletedEvent if TYPE_CHECKING : from crewai.state.runtime import RuntimeState @crewai_event_bus.on (LLMCallCompletedEvent) def on_llm_done ( source : Any, event : LLMCallCompletedEvent, state : RuntimeState) -> None : path = state.checkpoint( "./my_checkpoints" ) print ( f "Saved checkpoint: { path } " )
from __future__ import annotations from typing import TYPE_CHECKING , Any from crewai.events.event_bus import crewai_event_bus from crewai.events.types.llm_events import LLMCallCompletedEvent if TYPE_CHECKING : from crewai.state.runtime import RuntimeState @crewai_event_bus.on (LLMCallCompletedEvent) async def on_llm_done_async ( source : Any, event : LLMCallCompletedEvent, state : RuntimeState) -> None : path = await state.acheckpoint( "./my_checkpoints" ) print ( f "Saved checkpoint: { path } " )
Browse, resume, and fork from the CLI
crewai checkpoint crewai checkpoint --location ./my_checkpoints crewai checkpoint --location ./.checkpoints.db
Checkpoint tree — branches and forks nest under their parent.
Overview tab — metadata, entity state, and run summary.
Inputs — original kickoff inputs, pre-filled and editable.
Task outputs — outputs of completed tasks. Editing an output and hitting Fork invalidates downstream tasks so they re-run against the modified context.
Fork view — confirm a new branch from the selected checkpoint.
Inspect checkpoints without the TUI
crewai checkpoint list ./my_checkpoints crewai checkpoint info ./my_checkpoints/ < fil e > .json crewai checkpoint info ./.checkpoints.db
​ Reference
​ CheckpointConfig
location
on_events
provider
max_checkpoints
restore_from
​ checkpoint field values
None
True
False
CheckpointConfig(...)
​ Event types
Show All supported events
Task — task_started , task_completed , task_failed , task_evaluation
Crew — crew_kickoff_started , crew_kickoff_completed , crew_kickoff_failed , crew_train_started , crew_train_completed , crew_train_failed , crew_test_started , crew_test_completed , crew_test_failed , crew_test_result
Agent — agent_execution_started , agent_execution_completed , agent_execution_error , lite_agent_execution_started , lite_agent_execution_completed , lite_agent_execution_error , agent_evaluation_started , agent_evaluation_completed , agent_evaluation_failed
Flow — flow_created , flow_started , flow_finished , flow_paused , method_execution_started , method_execution_finished , method_execution_failed , method_execution_paused , human_feedback_requested , human_feedback_received , flow_input_requested , flow_input_received
LLM — llm_call_started , llm_call_completed , llm_call_failed , llm_stream_chunk , llm_thinking_chunk
LLM Guardrail — llm_guardrail_started , llm_guardrail_completed , llm_guardrail_failed
Tool — tool_usage_started , tool_usage_finished , tool_usage_error , tool_validate_input_error , tool_selection_error , tool_execution_error
Memory — memory_save_started , memory_save_completed , memory_save_failed , memory_query_started , memory_query_completed , memory_query_failed , memory_retrieval_started , memory_retrieval_completed , memory_retrieval_failed
Knowledge — knowledge_search_query_started , knowledge_search_query_completed , knowledge_query_started , knowledge_query_completed , knowledge_query_failed , knowledge_search_query_failed
Reasoning — agent_reasoning_started , agent_reasoning_completed , agent_reasoning_failed
MCP — mcp_connection_started , mcp_connection_completed , mcp_connection_failed , mcp_tool_execution_started , mcp_tool_execution_completed , mcp_tool_execution_failed , mcp_config_fetch_failed
Observation — step_observation_started , step_observation_completed , step_observation_failed , plan_refinement , plan_replan_triggered , goal_achieved_early
Skill — skill_discovery_started , skill_discovery_completed , skill_loaded , skill_activated , skill_load_failed
Logging — agent_logs_started , agent_logs_execution
A2A — a2a_delegation_started , a2a_delegation_completed , a2a_conversation_started , a2a_conversation_completed , a2a_message_sent , a2a_response_received , a2a_polling_started , a2a_polling_status , a2a_push_notification_registered , a2a_push_notification_received , a2a_push_notification_sent , a2a_push_notification_timeout , a2a_streaming_started , a2a_streaming_chunk , a2a_agent_card_fetched , a2a_authentication_failed , a2a_artifact_received , a2a_connection_error , a2a_server_task_started , a2a_server_task_completed , a2a_server_task_canceled , a2a_server_task_failed , a2a_parallel_delegation_started , a2a_parallel_delegation_completed , a2a_transport_negotiated , a2a_content_type_negotiated , a2a_context_created , a2a_context_expired , a2a_context_idle , a2a_context_completed , a2a_context_pruned
System signals — SIGTERM , SIGINT , SIGHUP , SIGTSTP , SIGCONT
Wildcard — "*" matches every event.
​ Storage providers
JsonProvider
SqliteProvider
​ CLI
Was this page helpful?
Yes
No
