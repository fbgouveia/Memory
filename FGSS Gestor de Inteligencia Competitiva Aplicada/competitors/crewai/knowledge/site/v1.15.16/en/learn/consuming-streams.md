# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/consuming-streams
- Raw SHA-256: `09415fd8312c907269c662ae476b615cde0b2e63a2bcf1ac7a2a28387d99485f`

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
Navigation Learn Consuming Streams
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
Consuming Streams
Copy page Copy page
Print LLM chunks, observe tool events, and read final results from CrewAI streams.
Copy page Copy page
​ Overview
stream = flow.stream_events( inputs = { "topic" : "AI agents" }) with stream: for frame in stream: ... result = stream.result
​ Print LLM Output
stream = flow.stream_events( inputs = { "topic" : "AI agents" }) with stream: for frame in stream.llm: print (frame.content, end = "" , flush = True ) print () result = stream.result
with flow.stream_events( inputs = { "topic" : "AI agents" }) as stream: for frame in stream.events: if frame.channel == "llm" and frame.content: print (frame.content, end = "" , flush = True ) result = stream.result
​ Print Tool Activity
with flow.stream_events( inputs = { "topic" : "AI agents" }) as stream: for frame in stream.events: if frame.channel == "llm" and frame.content: print (frame.content, end = "" , flush = True ) if frame.channel == "tools" and frame.type == "tool_usage_started" : print ( f " \n Tool started: { frame.event.get( 'tool_name' ) } " ) if frame.channel == "tools" and frame.type == "tool_usage_finished" : print ( f " \n Tool finished: { frame.event.get( 'tool_name' ) } " ) result = stream.result
​ Watch Flow Progress
with flow.stream_events( inputs = { "topic" : "AI agents" }) as stream: for frame in stream.flow: print (frame.type, frame.namespace) result = stream.result
​ Interleave Selected Channels
with flow.stream_events( inputs = { "topic" : "AI agents" }) as stream: for frame in stream.interleave([ "llm" , "tools" ]): if frame.channel == "llm" : print (frame.content, end = "" , flush = True ) elif frame.type == "tool_usage_started" : print ( f " \n Tool: { frame.event.get( 'tool_name' ) } " ) result = stream.result
​ Stream a Direct LLM Call
from crewai import LLM llm = LLM( model = "gpt-4o-mini" ) stream = llm.stream_events( "Explain streaming in one sentence." ) with stream: for frame in stream.llm: print (frame.content, end = "" , flush = True ) print () result = stream.result
​ Stream a Conversational Turn
stream = flow.stream_turn( "What can you help me with?" , session_id = "session-1" , ) with stream: for frame in stream.interleave([ "llm" , "messages" ]): if frame.channel == "llm" : print (frame.content, end = "" , flush = True ) elif frame.channel == "messages" : print ( f " \n { frame.event.get( 'role' ) } : { frame.event.get( 'content' ) } " ) reply = stream.result
​ Async Consumers
stream = flow.astream( inputs = { "topic" : "AI agents" }) async with stream: async for frame in stream.llm: print (frame.content, end = "" , flush = True ) result = stream.result
​ Cleanup
stream = flow.stream_events( inputs = { "topic" : "AI agents" }) try : for frame in stream.events: print (frame.content, end = "" , flush = True ) finally : if not stream.is_exhausted: stream.close()
​ See Also
Streaming
Streaming Runtime Contract
Streaming Flow Execution
Streaming Crew Execution
Was this page helpful?
Yes
No
