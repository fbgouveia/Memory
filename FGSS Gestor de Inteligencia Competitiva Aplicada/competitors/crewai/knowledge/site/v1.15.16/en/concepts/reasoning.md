# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/reasoning
- Raw SHA-256: `00251e9baf5526adab59291fc2ea3909affde4e3a6c8a9443ea12c1777792e42`

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
Navigation Core Concepts Reasoning
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
Reasoning
Copy page Copy page
Learn how to enable and use agent reasoning to improve task execution.
Copy page Copy page
​ Overview
​ Usage
from crewai import Agent agent = Agent( role = "Data Analyst" , goal = "Analyze complex datasets and provide insights" , backstory = "You are an experienced data analyst with expertise in finding patterns in complex data." , reasoning = True , # Enable reasoning max_reasoning_attempts = 3 # Optional: Set a maximum number of reasoning attempts )
​ How It Works
Reflect on the task and create a detailed plan
Evaluate whether it’s ready to execute the task
Refine the plan as necessary until it’s ready or max_reasoning_attempts is reached
Inject the reasoning plan into the task description before execution
​ Configuration Options
reasoning
max_reasoning_attempts
​ Example
from crewai import Agent, Task, Crew # Create an agent with reasoning enabled analyst = Agent( role = "Data Analyst" , goal = "Analyze data and provide insights" , backstory = "You are an expert data analyst." , reasoning = True , max_reasoning_attempts = 3 # Optional: Set a limit on reasoning attempts ) # Create a task analysis_task = Task( description = "Analyze the provided sales data and identify key trends." , expected_output = "A report highlighting the top 3 sales trends." , agent = analyst ) # Create a crew and run the task crew = Crew( agents = [analyst], tasks = [analysis_task]) result = crew.kickoff() print (result)
​ Error Handling
from crewai import Agent, Task import logging # Set up logging to capture any reasoning errors logging.basicConfig( level = logging. INFO ) # Create an agent with reasoning enabled agent = Agent( role = "Data Analyst" , goal = "Analyze data and provide insights" , reasoning = True , max_reasoning_attempts = 3 ) # Create a task task = Task( description = "Analyze the provided sales data and identify key trends." , expected_output = "A report highlighting the top 3 sales trends." , agent = agent ) # Execute the task # If an error occurs during reasoning, it will be logged and execution will continue result = agent.execute_task(task)
​ Example Reasoning Output
Task: Analyze the provided sales data and identify key trends. Reasoning Plan: I'll analyze the sales data to identify the top 3 trends. 1. Understanding of the task: I need to analyze sales data to identify key trends that would be valuable for business decision-making. 2. Key steps I'll take: - First, I'll examine the data structure to understand what fields are available - Then I'll perform exploratory data analysis to identify patterns - Next, I'll analyze sales by time periods to identify temporal trends - I'll also analyze sales by product categories and customer segments - Finally, I'll identify the top 3 most significant trends 3. Approach to challenges: - If the data has missing values, I'll decide whether to fill or filter them - If the data has outliers, I'll investigate whether they're valid data points or errors - If trends aren't immediately obvious, I'll apply statistical methods to uncover patterns 4. Use of available tools: - I'll use data analysis tools to explore and visualize the data - I'll use statistical tools to identify significant patterns - I'll use knowledge retrieval to access relevant information about sales analysis 5. Expected outcome: A concise report highlighting the top 3 sales trends with supporting evidence from the data. READY: I am ready to execute the task.
Was this page helpful?
Yes
No
