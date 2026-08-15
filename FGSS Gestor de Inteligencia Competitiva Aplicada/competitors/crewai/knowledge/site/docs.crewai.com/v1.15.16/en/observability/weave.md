# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/weave
- Raw SHA-256: `870883ed804180806feb351524825e156fd1e4b429f7884d1d3308a70583089c`

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
Navigation Observability Weave Integration
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
Weave Integration
Copy page Copy page
Learn how to use Weights & Biases (W&B) Weave to track, experiment with, evaluate, and improve your CrewAI applications.
Copy page Copy page
​ Weave Overview
Tracing & Monitoring : Automatically track LLM calls and application logic to debug and analyze production systems
Systematic Iteration : Refine and iterate on prompts, datasets, and models
Evaluation : Use custom or pre-built scorers to systematically assess and enhance agent performance
Guardrails : Protect your agents with pre- and post-safeguards for content moderation and prompt safety
​ Setup Instructions
Install required packages
pip install crewai weave
Set up W&B Account
Initialize Weave in Your Application
import weave # Initialize Weave with your project name weave.init( project_name = "crewai_demo" )
Create your Crews/Flows
from crewai import Agent, Task, Crew, LLM , Process # Create an LLM with a temperature of 0 to ensure deterministic outputs llm = LLM( model = "gpt-4o" , temperature = 0 ) # Create agents researcher = Agent( role = 'Research Analyst' , goal = 'Find and analyze the best investment opportunities' , backstory = 'Expert in financial analysis and market research' , llm = llm, verbose = True , allow_delegation = False , ) writer = Agent( role = 'Report Writer' , goal = 'Write clear and concise investment reports' , backstory = 'Experienced in creating detailed financial reports' , llm = llm, verbose = True , allow_delegation = False , ) # Create tasks research_task = Task( description = 'Deep research on the {topic} ' , expected_output = 'Comprehensive market data including key players, market size, and growth trends.' , agent = researcher ) writing_task = Task( description = 'Write a detailed report based on the research' , expected_output = 'The report should be easy to read and understand. Use bullet points where applicable.' , agent = writer ) # Create a crew crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], verbose = True , process = Process.sequential, ) # Run the crew result = crew.kickoff( inputs = { "topic" : "AI in material science" }) print (result)
View Traces in Weave
LLM calls and their metadata
Agent interactions and task execution flow
Performance metrics like latency and token usage
Any errors or issues that occurred during execution
Weave Tracing Dashboard
​ Features
Weave automatically captures all CrewAI operations: agent interactions and task executions; LLM calls with metadata and token usage; tool usage and results.
The integration supports all CrewAI execution methods: kickoff() , kickoff_for_each() , kickoff_async() , and kickoff_for_each_async() .
Automatic tracing of all crewAI-tools .
Flow feature support with decorator patching ( @start , @listen , @router , @or_ , @and_ ).
Track custom guardrails passed to CrewAI Task with @weave.op() .
​ Resources
📘 Weave Documentation
📊 Example Weave x CrewAI dashboard
🐦 X
Was this page helpful?
Yes
No
