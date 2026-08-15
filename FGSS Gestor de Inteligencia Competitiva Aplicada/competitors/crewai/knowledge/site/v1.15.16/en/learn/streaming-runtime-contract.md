# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/streaming-runtime-contract
- Raw SHA-256: `bbda8167722cbef550d96c1103f700ace77d74ee9489ce1a8c4b9e28dd9daec9`

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
Navigation Learn Streaming Runtime Contract
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
Streaming Runtime Contract
Copy page Copy page
Stream ordered runtime frames from Flows, direct LLM calls, and conversational turns.
Copy page Copy page
​ Overview
​ StreamFrame
from crewai.types.streaming import StreamFrame frame.id # unique frame id frame.seq # execution-local order, when available frame.type # source event type, such as "flow_started" frame.channel # "llm", "flow", "tools", "messages", "lifecycle", or "custom" frame.namespace # source/runtime namespace frame.timestamp # event timestamp frame.parent_id # parent event id, when available frame.previous_id # previous event id, when available frame.data # event payload frame.event # alias for frame.data frame.content # printable text for token-like frames, otherwise ""
​ Stream a Flow
from crewai.flow import Flow, start class ReportFlow ( Flow ): @start () def generate ( self ): return "done" flow = ReportFlow( stream = True ) stream = flow.kickoff() with stream: for chunk in stream: print (chunk.content, end = "" , flush = True ) if chunk.type == "tool_usage_started" : print (chunk.event[ "tool_name" ]) result = stream.result
​ Filter by Channel
stream = flow.stream_events() with stream: for frame in stream.llm: print (frame.content, end = "" , flush = True ) result = stream.result
​ Async Streaming
flow = ReportFlow() stream = flow.astream() async with stream: async for chunk in stream.events: print (chunk.channel, chunk.type, chunk.content) result = stream.result
​ Stream a Direct LLM Call
from crewai import LLM llm = LLM( model = "gpt-4o-mini" ) stream = llm.stream_events( messages = [ { "role" : "user" , "content" : "Explain CrewAI streaming in two short sentences." , } ] ) with stream: for chunk in stream: print (chunk.content, end = "" , flush = True ) result = stream.result
​ Conversational Turns
from crewai import Flow from crewai.experimental.conversational import ConversationConfig, ConversationState @ConversationConfig ( llm = "gpt-4o-mini" , defer_trace_finalization = True ) class ChatFlow (Flow[ConversationState]): conversational = True flow = ChatFlow() stream = flow.stream_turn( "What can you help me with?" , session_id = "session-1" ) with stream: for frame in stream.events: if frame.channel == "llm" and frame.type == "llm_stream_chunk" : print (frame.content, end = "" , flush = True ) reply = stream.result
​ Cleanup
stream = flow.stream_events() try : for frame in stream.events: print (frame.type) finally : if not stream.is_exhausted: stream.close()
​ Legacy Chunk Streaming
Was this page helpful?
Yes
No
