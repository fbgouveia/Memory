# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/coding-agents
- Raw SHA-256: `e97b9028b61eaaba60f301ea9edd75a8a21526c270fe9b92650b76f849819303`

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
Navigation Learn Coding Agents
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
Coding Agents
Copy page Copy page
Learn how to enable your CrewAI Agents to write and execute code, and explore advanced features for enhanced functionality.
Copy page Copy page
​ Introduction
​ Enabling Code Execution
from crewai import Agent coding_agent = Agent( role = "Senior Python Developer" , goal = "Craft well-designed and thought-out code" , backstory = "You are a senior Python developer with extensive experience in software architecture and best practices." , allow_code_execution = True )
​ Important Considerations
Model Selection : It is strongly recommended to use more capable models like Claude 3.5 Sonnet and GPT-4 when enabling code execution. These models have a better understanding of programming concepts and are more likely to generate correct and efficient code.
Error Handling : The code execution feature includes error handling. If executed code raises an exception, the agent will receive the error message and can attempt to correct the code or provide alternative solutions. The max_retry_limit parameter, which defaults to 2, controls the maximum number of retries for a task.
Dependencies : To use the code execution feature, you need to install the crewai_tools package. If not installed, the agent will log an info message: “Coding tools not available. Install crewai_tools.”
​ Code Execution Process
Task Analysis
Code Formulation
Code Execution
Result Interpretation
​ Example Usage
from crewai import Agent, Task, Crew # Create an agent with code execution enabled coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True ) # Create a task that requires code execution data_analysis_task = Task( description = "Analyze the given dataset and calculate the average age of participants." , agent = coding_agent ) # Create a crew and add the task analysis_crew = Crew( agents = [coding_agent], tasks = [data_analysis_task] ) # Execute the crew result = analysis_crew.kickoff() print (result)
Was this page helpful?
Yes
No
