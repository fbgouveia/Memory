# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/production-architecture
- Raw SHA-256: `a2d318cd9a6f281676cb05d48919471c55b58a3386ab4037540b3a80a1c9062b`

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
Navigation Core Concepts Production Architecture
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
Production Architecture
Copy page Copy page
Best practices for building production-ready AI applications with CrewAI
Copy page Copy page
​ The Flow-First Mindset
​ Why Flows?
State Management : Flows provide a built-in way to manage state across different steps of your application. This is crucial for passing data between Crews, maintaining context, and handling user inputs.
Control : Flows allow you to define precise execution paths, including loops, conditionals, and branching logic. This is essential for handling edge cases and ensuring your application behaves predictably.
Observability : Flows provide a clear structure that makes it easier to trace execution, debug issues, and monitor performance. We recommend using CrewAI Tracing for detailed insights. Simply run crewai login to enable free observability features.
​ The Architecture
​ 1. The Flow Class
from crewai.flow.flow import Flow, listen, start from pydantic import BaseModel class AppState ( BaseModel ): user_input: str = "" research_results: str = "" final_report: str = "" class ProductionFlow (Flow[AppState]): @start () def gather_input ( self ): # ... logic to get input ... pass @listen (gather_input) def run_research_crew ( self ): # ... trigger a Crew ... pass
​ 2. State Management
Keep it minimal : Store only what you need to persist between steps.
Use structured data : Avoid unstructured dictionaries when possible.
​ 3. Crews as Units of Work
Don’t over-engineer Crews : Keep them focused.
Pass state explicitly : Pass the necessary data from the Flow state to the Crew inputs.
@listen (gather_input) def run_research_crew ( self ): crew = ResearchCrew() result = crew.kickoff( inputs = { "topic" : self .state.user_input}) self .state.research_results = result.raw
​ Control Primitives
​ 1. Task Guardrails
def validate_content ( result : TaskOutput) -> Tuple[ bool , Any]: if len (result.raw) < 100 : return ( False , "Content is too short. Please expand." ) return ( True , result.raw) task = Task( ... , guardrail = validate_content )
​ 2. Structured Outputs
class ResearchResult ( BaseModel ): summary: str sources: List[ str ] task = Task( ... , output_pydantic = ResearchResult )
​ 3. LLM Hooks
@before_llm_call def log_request ( context ): print ( f "Agent { context.agent.role } is calling the LLM..." )
​ Deployment Patterns
​ CrewAI Enterprise
crewai deploy create
​ Async Execution
​ Persistence
@persist class ProductionFlow (Flow[AppState]): # ...
flow.kickoff( restore_from_state_id = "<previous-run-state-id>" )
​ Summary
Start with a Flow.
Define a clear State.
Use Crews for complex tasks.
Deploy with an API and persistence.
Was this page helpful?
Yes
No
