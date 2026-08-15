# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/kickoff-async
- Raw SHA-256: `adebcf64a54cd83767de49c2aa3a7da6be57952a4f32753a1328243b3f9813c4`

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
Navigation Learn Kickoff Crew Asynchronously
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
Kickoff Crew Asynchronously
Copy page Copy page
Kickoff a Crew Asynchronously
Copy page Copy page
​ Introduction
​ Native Async Execution with akickoff()
​ Method Signature
async def akickoff ( self , inputs : dict ) -> CrewOutput:
​ Parameters
inputs (dict): A dictionary containing the input data required for the tasks.
​ Returns
CrewOutput : An object representing the result of the crew execution.
​ Example: Native Async Crew Execution
import asyncio from crewai import Crew, Agent, Task # Create an agent coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) # Create a task data_analysis_task = Task( description = "Analyze the given dataset and calculate the average age of participants. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) # Create a crew analysis_crew = Crew( agents = [coding_agent], tasks = [data_analysis_task] ) # Native async execution async def main (): result = await analysis_crew.akickoff( inputs = { "ages" : [ 25 , 30 , 35 , 40 , 45 ]}) print ( "Crew Result:" , result) asyncio.run(main())
​ Example: Multiple Native Async Crews
import asyncio from crewai import Crew, Agent, Task coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) task_1 = Task( description = "Analyze the first dataset and calculate the average age. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) task_2 = Task( description = "Analyze the second dataset and calculate the average age. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) crew_1 = Crew( agents = [coding_agent], tasks = [task_1]) crew_2 = Crew( agents = [coding_agent], tasks = [task_2]) async def main (): results = await asyncio.gather( crew_1.akickoff( inputs = { "ages" : [ 25 , 30 , 35 , 40 , 45 ]}), crew_2.akickoff( inputs = { "ages" : [ 20 , 22 , 24 , 28 , 30 ]}) ) for i, result in enumerate (results, 1 ): print ( f "Crew { i } Result:" , result) asyncio.run(main())
​ Example: Native Async for Multiple Inputs
import asyncio from crewai import Crew, Agent, Task coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) data_analysis_task = Task( description = "Analyze the dataset and calculate the average age. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) analysis_crew = Crew( agents = [coding_agent], tasks = [data_analysis_task] ) async def main (): datasets = [ { "ages" : [ 25 , 30 , 35 , 40 , 45 ]}, { "ages" : [ 20 , 22 , 24 , 28 , 30 ]}, { "ages" : [ 30 , 35 , 40 , 45 , 50 ]} ] results = await analysis_crew.akickoff_for_each(datasets) for i, result in enumerate (results, 1 ): print ( f "Dataset { i } Result:" , result) asyncio.run(main())
​ Thread-Based Async with kickoff_async()
​ Method Signature
async def kickoff_async ( self , inputs : dict ) -> CrewOutput:
​ Parameters
inputs (dict): A dictionary containing the input data required for the tasks.
​ Returns
CrewOutput : An object representing the result of the crew execution.
​ Example: Thread-Based Async Execution
import asyncio from crewai import Crew, Agent, Task coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) data_analysis_task = Task( description = "Analyze the given dataset and calculate the average age of participants. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) analysis_crew = Crew( agents = [coding_agent], tasks = [data_analysis_task] ) async def async_crew_execution (): result = await analysis_crew.kickoff_async( inputs = { "ages" : [ 25 , 30 , 35 , 40 , 45 ]}) print ( "Crew Result:" , result) asyncio.run(async_crew_execution())
​ Example: Multiple Thread-Based Async Crews
import asyncio from crewai import Crew, Agent, Task coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) task_1 = Task( description = "Analyze the first dataset and calculate the average age of participants. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) task_2 = Task( description = "Analyze the second dataset and calculate the average age of participants. Ages: {ages} " , agent = coding_agent, expected_output = "The average age of the participants." ) crew_1 = Crew( agents = [coding_agent], tasks = [task_1]) crew_2 = Crew( agents = [coding_agent], tasks = [task_2]) async def async_multiple_crews (): result_1 = crew_1.kickoff_async( inputs = { "ages" : [ 25 , 30 , 35 , 40 , 45 ]}) result_2 = crew_2.kickoff_async( inputs = { "ages" : [ 20 , 22 , 24 , 28 , 30 ]}) results = await asyncio.gather(result_1, result_2) for i, result in enumerate (results, 1 ): print ( f "Crew { i } Result:" , result) asyncio.run(async_multiple_crews())
​ Async Streaming
import asyncio from crewai import Crew, Agent, Task agent = Agent( role = "Researcher" , goal = "Research and summarize topics" , backstory = "You are an expert researcher." ) task = Task( description = "Research the topic: {topic} " , agent = agent, expected_output = "A comprehensive summary of the topic." ) crew = Crew( agents = [agent], tasks = [task], stream = True # Enable streaming ) async def main (): streaming_output = await crew.akickoff( inputs = { "topic" : "AI trends in 2024" }) # Async iteration over streaming chunks async for chunk in streaming_output: print ( f "Chunk: { chunk.content } " ) # Access final result after streaming completes result = streaming_output.result print ( f "Final result: { result.raw } " ) asyncio.run(main())
​ Potential Use Cases
Parallel Content Generation : Kickoff multiple independent crews asynchronously, each responsible for generating content on different topics. For example, one crew might research and draft an article on AI trends, while another crew generates social media posts about a new product launch.
Concurrent Market Research Tasks : Launch multiple crews asynchronously to conduct market research in parallel. One crew might analyze industry trends, while another examines competitor strategies, and yet another evaluates consumer sentiment.
Independent Travel Planning Modules : Execute separate crews to independently plan different aspects of a trip. One crew might handle flight options, another handles accommodation, and a third plans activities.
​ Choosing Between akickoff() and kickoff_async()
Was this page helpful?
Yes
No
