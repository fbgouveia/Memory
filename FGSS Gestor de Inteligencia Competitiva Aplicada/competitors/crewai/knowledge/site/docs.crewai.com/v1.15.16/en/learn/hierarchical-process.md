# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/hierarchical-process
- Raw SHA-256: `4a9f73866d8a427784adaac4e91553eb7a1ed8025e4e4b0074c6098b61c79b7a`

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
Navigation Learn Hierarchical Process
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
Hierarchical Process
Copy page Copy page
A comprehensive guide to understanding and applying the hierarchical process within your CrewAI projects, updated to reflect the latest coding practices and functionalities.
Copy page Copy page
​ Introduction
​ Hierarchical Process Overview
​ Key Features
Task Delegation : A manager agent allocates tasks among crew members based on their roles and capabilities.
Result Validation : The manager evaluates outcomes to ensure they meet the required standards.
Efficient Workflow : Emulates corporate structures, providing an organized approach to task management.
System Prompt Handling : Optionally specify whether the system should use predefined prompts.
Stop Words Control : Optionally specify whether stop words should be used, supporting various models including the o1 models.
Context Window Respect : Prioritize important context by enabling respect of the context window, which is now the default behavior.
Delegation Control : Delegation is now disabled by default to give users explicit control.
Max Requests Per Minute : Configurable option to set the maximum number of requests per minute.
Max Iterations : Limit the maximum number of iterations for obtaining a final answer.
​ Implementing the Hierarchical Process
from crewai import Crew, Process, Agent # Agents are defined with attributes for backstory, cache, and verbose mode researcher = Agent( role = 'Researcher' , goal = 'Conduct in-depth analysis' , backstory = 'Experienced data analyst with a knack for uncovering hidden trends.' , ) writer = Agent( role = 'Writer' , goal = 'Create engaging content' , backstory = 'Creative writer passionate about storytelling in technical domains.' , ) # Establishing the crew with a hierarchical process and additional configurations project_crew = Crew( tasks = [ ... ], # Tasks to be delegated and executed under the manager's supervision agents = [researcher, writer], manager_llm = "gpt-4o" , # Specify which LLM the manager should use process = Process.hierarchical, planning = True , )
​ Using a Custom Manager Agent
# Define a custom manager agent manager = Agent( role = "Project Manager" , goal = "Efficiently manage the crew and ensure high-quality task completion" , backstory = "You're an experienced project manager, skilled in overseeing complex projects and guiding teams to success." , allow_delegation = True , ) # Use the custom manager in your crew project_crew = Crew( tasks = [ ... ], agents = [researcher, writer], manager_agent = manager, # Use your custom manager agent process = Process.hierarchical, planning = True , )
​ Workflow in Action
Task Assignment : The manager assigns tasks strategically, considering each agent’s capabilities and available tools.
Execution and Review : Agents complete their tasks with the option for asynchronous execution and callback functions for streamlined workflows.
Sequential Task Progression : Despite being a hierarchical process, tasks follow a logical order for smooth progression, facilitated by the manager’s oversight.
​ Conclusion
Was this page helpful?
Yes
No
