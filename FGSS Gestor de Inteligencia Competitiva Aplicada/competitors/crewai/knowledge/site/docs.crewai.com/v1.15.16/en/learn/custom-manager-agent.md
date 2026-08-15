# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/custom-manager-agent
- Raw SHA-256: `9f3b29ca8f8e9e0f46f078b4ce5b24e22869315300e19ec206d4713deb488651`

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
Navigation Learn Custom Manager Agent
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
Custom Manager Agent
Copy page Copy page
Learn how to set a custom agent as the manager in CrewAI, providing more control over task management and coordination.
Copy page Copy page
​ Setting a Specific Agent as Manager in CrewAI
​ Using the manager_agent Attribute
​ Custom Manager Agent
​ Example
import os from crewai import Agent, Task, Crew, Process # Define your agents researcher = Agent( role = "Researcher" , goal = "Conduct thorough research and analysis on AI and AI agents" , backstory = "You're an expert researcher, specialized in technology, software engineering, AI, and startups. You work as a freelancer and are currently researching for a new client." , allow_delegation = False , ) writer = Agent( role = "Senior Writer" , goal = "Create compelling content about AI and AI agents" , backstory = "You're a senior writer, specialized in technology, software engineering, AI, and startups. You work as a freelancer and are currently writing content for a new client." , allow_delegation = False , ) # Define your task task = Task( description = "Generate a list of 5 interesting ideas for an article, then write one captivating paragraph for each idea that showcases the potential of a full article on this topic. Return the list of ideas with their paragraphs and your notes." , expected_output = "5 bullet points, each with a paragraph and accompanying notes." , ) # Define the manager agent manager = Agent( role = "Project Manager" , goal = "Efficiently manage the crew and ensure high-quality task completion" , backstory = "You're an experienced project manager, skilled in overseeing complex projects and guiding teams to success. Your role is to coordinate the efforts of the crew members, ensuring that each task is completed on time and to the highest standard." , allow_delegation = True , ) # Instantiate your crew with a custom manager crew = Crew( agents = [researcher, writer], tasks = [task], manager_agent = manager, process = Process.hierarchical, ) # Start the crew's work result = crew.kickoff()
​ Benefits of a Custom Manager Agent
Enhanced Control : Tailor the management approach to fit the specific needs of your project.
Improved Coordination : Ensure efficient task coordination and management by an experienced agent.
Customizable Management : Define managerial roles and responsibilities that align with your project’s goals.
​ Setting a Manager LLM
from crewai import LLM manager_llm = LLM( model = "gpt-4o" ) crew = Crew( agents = [researcher, writer], tasks = [task], process = Process.hierarchical, manager_llm = manager_llm )
Was this page helpful?
Yes
No
