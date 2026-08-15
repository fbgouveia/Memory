# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/sequential-process
- Raw SHA-256: `fcec3e68b7202e6b679de37df2567015455c2dcaefa8f487ee6a61feb263eaa2`

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
Navigation Learn Sequential Processes
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
Sequential Processes
Copy page Copy page
A comprehensive guide to utilizing the sequential processes for task execution in CrewAI projects.
Copy page Copy page
​ Introduction
​ Sequential Process Overview
​ Key Features
Linear Task Flow : Ensures orderly progression by handling tasks in a predetermined sequence.
Simplicity : Best suited for projects with clear, step-by-step tasks.
Easy Monitoring : Facilitates easy tracking of task completion and project progress.
​ Implementing the Sequential Process
from crewai import Crew, Process, Agent, Task, TaskOutput, CrewOutput # Define your agents researcher = Agent( role = 'Researcher' , goal = 'Conduct foundational research' , backstory = 'An experienced researcher with a passion for uncovering insights' ) analyst = Agent( role = 'Data Analyst' , goal = 'Analyze research findings' , backstory = 'A meticulous analyst with a knack for uncovering patterns' ) writer = Agent( role = 'Writer' , goal = 'Draft the final report' , backstory = 'A skilled writer with a talent for crafting compelling narratives' ) # Define your tasks research_task = Task( description = 'Gather relevant data...' , agent = researcher, expected_output = 'Raw Data' ) analysis_task = Task( description = 'Analyze the data...' , agent = analyst, expected_output = 'Data Insights' ) writing_task = Task( description = 'Compose the report...' , agent = writer, expected_output = 'Final Report' ) # Form the crew with a sequential process report_crew = Crew( agents = [researcher, analyst, writer], tasks = [research_task, analysis_task, writing_task], process = Process.sequential ) # Execute the crew result = report_crew.kickoff() # Accessing the type-safe output task_output: TaskOutput = result.tasks[ 0 ].output crew_output: CrewOutput = result.output
​ Note:
​ Workflow in Action
Initial Task : In a sequential process, the first agent completes their task and signals completion.
Subsequent Tasks : Agents pick up their tasks based on the process type, with outcomes of preceding tasks or directives guiding their execution.
Completion : The process concludes once the final task is executed, leading to project completion.
​ Advanced Features
​ Task Delegation
​ Asynchronous Execution
​ Memory and Caching
Memory : Enable by setting memory=True when creating the Crew. This allows agents to retain information across tasks.
Caching : By default, caching is enabled. Set cache=False to disable it.
​ Callbacks
task_callback : Executed after each task completion.
step_callback : Executed after each step in an agent’s execution.
​ Usage Metrics
​ Best Practices for Sequential Processes
Order Matters : Arrange tasks in a logical sequence where each task builds upon the previous one.
Clear Task Descriptions : Provide detailed descriptions for each task to guide the agents effectively.
Appropriate Agent Selection : Match agents’ skills and roles to the requirements of each task.
Use Context : Leverage the context from previous tasks to inform subsequent ones.
Was this page helpful?
Yes
No
