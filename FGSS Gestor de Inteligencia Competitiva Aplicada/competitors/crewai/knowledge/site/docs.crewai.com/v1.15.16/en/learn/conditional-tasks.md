# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/conditional-tasks
- Raw SHA-256: `73dd714119032cc92307e440d26791834a44cb672780bf674ee705f9246d0f68`

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
Navigation Learn Conditional Tasks
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
Conditional Tasks
Copy page Copy page
Learn how to use conditional tasks in a crewAI kickoff
Copy page Copy page
​ Introduction
​ Example Usage
from typing import List from pydantic import BaseModel from crewai import Agent, Crew from crewai.tasks.conditional_task import ConditionalTask from crewai.tasks.task_output import TaskOutput from crewai.task import Task from crewai_tools import SerperDevTool # Define a condition function for the conditional task # If false, the task will be skipped, if true, then execute the task. def is_data_missing ( output : TaskOutput) -> bool : return len (output.pydantic.events) < 10 # this will skip this task # Define the agents data_fetcher_agent = Agent( role = "Data Fetcher" , goal = "Fetch data online using Serper tool" , backstory = "Backstory 1" , verbose = True , tools = [SerperDevTool()] ) data_processor_agent = Agent( role = "Data Processor" , goal = "Process fetched data" , backstory = "Backstory 2" , verbose = True ) summary_generator_agent = Agent( role = "Summary Generator" , goal = "Generate summary from fetched data" , backstory = "Backstory 3" , verbose = True ) class EventOutput ( BaseModel ): events: List[ str ] task1 = Task( description = "Fetch data about events in San Francisco using Serper tool" , expected_output = "List of 10 things to do in SF this week" , agent = data_fetcher_agent, output_pydantic = EventOutput, ) conditional_task = ConditionalTask( description = """ Check if data is missing. If we have less than 10 events, fetch more events using Serper tool so that we have a total of 10 events in SF this week.. """ , expected_output = "List of 10 Things to do in SF this week" , condition = is_data_missing, agent = data_processor_agent, ) task3 = Task( description = "Generate summary of events in San Francisco from fetched data" , expected_output = "A complete report on the customer and their customers and competitors, including their demographics, preferences, market positioning and audience engagement." , agent = summary_generator_agent, ) # Create a crew with the tasks crew = Crew( agents = [data_fetcher_agent, data_processor_agent, summary_generator_agent], tasks = [task1, conditional_task, task3], verbose = True , planning = True ) # Run the crew result = crew.kickoff() print ( "results" , result)
Was this page helpful?
Yes
No
