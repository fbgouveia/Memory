# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/kickoff-for-each
- Raw SHA-256: `eb15463749dffc183e39f39096b2346cd9e74b0c184b63a0fd774b88c0ccc6b2`

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
Navigation Learn Kickoff Crew for Each
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
Kickoff Crew for Each
Copy page Copy page
Kickoff Crew for Each Item in a List
Copy page Copy page
​ Introduction
​ Kicking Off a Crew for Each Item
from crewai import Crew, Agent, Task # Create an agent with code execution enabled coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) # Create a task that requires code execution data_analysis_task = Task( description = "Analyze the given dataset and calculate the average age of participants. Ages: {ages} " , agent = coding_agent, expected_output = "The average age calculated from the dataset" ) # Create a crew and add the task analysis_crew = Crew( agents = [coding_agent], tasks = [data_analysis_task], verbose = True , memory = False ) datasets = [ { "ages" : [ 25 , 30 , 35 , 40 , 45 ] }, { "ages" : [ 20 , 25 , 30 , 35 , 40 ] }, { "ages" : [ 30 , 35 , 40 , 45 , 50 ] } ] # Execute the crew result = analysis_crew.kickoff_for_each( inputs = datasets)
Was this page helpful?
Yes
No
