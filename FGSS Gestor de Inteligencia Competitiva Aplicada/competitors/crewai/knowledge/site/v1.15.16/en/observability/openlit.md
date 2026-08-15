# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/openlit
- Raw SHA-256: `18a3aa0abdaaa30765f22ebeccd5f98ca27e7a64636ab7107fe5ef7d45140732`

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
Navigation Observability OpenLIT Integration
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
OpenLIT Integration
Copy page Copy page
Quickly start monitoring your Agents in just a single line of code with OpenTelemetry.
Copy page Copy page
​ OpenLIT Overview
OpenLIT Dashboard
​ Features
Analytics Dashboard : Monitor your Agents health and performance with detailed dashboards that track metrics, costs, and user interactions.
OpenTelemetry-native Observability SDK : Vendor-neutral SDKs to send traces and metrics to your existing observability tools like Grafana, DataDog and more.
Cost Tracking for Custom and Fine-Tuned Models : Tailor cost estimations for specific models using custom pricing files for precise budgeting.
Exceptions Monitoring Dashboard : Quickly spot and resolve issues by tracking common exceptions and errors with a monitoring dashboard.
Compliance and Security : Detect potential threats such as profanity and PII leaks.
Prompt Injection Detection : Identify potential code injection and secret leaks.
API Keys and Secrets Management : Securely handle your LLM API keys and secrets centrally, avoiding insecure practices.
Prompt Management : Manage and version Agent prompts using PromptHub for consistent and easy access across Agents.
Model Playground Test and compare different models for your CrewAI agents before deployment.
​ Setup Instructions
Deploy OpenLIT
Git Clone OpenLIT Repository
git clone git@github.com:openlit/openlit.git
Start Docker Compose
docker compose up -d
Install OpenLIT SDK
pip install openlit
Initialize OpenLIT in Your Application
Setup using function arguments
Setup using Environment Variables
import openlit openlit.init( otlp_endpoint = "http://127.0.0.1:4318" )
from crewai import Agent, Task, Crew, Process import openlit openlit.init( disable_metrics = True ) # Define your agents researcher = Agent( role = "Researcher" , goal = "Conduct thorough research and analysis on AI and AI agents" , backstory = "You're an expert researcher, specialized in technology, software engineering, AI, and startups. You work as a freelancer and are currently researching for a new client." , allow_delegation = False , llm = 'command-r' ) # Define your task task = Task( description = "Generate a list of 5 interesting ideas for an article, then write one captivating paragraph for each idea that showcases the potential of a full article on this topic. Return the list of ideas with their paragraphs and your notes." , expected_output = "5 bullet points, each with a paragraph and accompanying notes." , ) # Define the manager agent manager = Agent( role = "Project Manager" , goal = "Efficiently manage the crew and ensure high-quality task completion" , backstory = "You're an experienced project manager, skilled in overseeing complex projects and guiding teams to success. Your role is to coordinate the efforts of the crew members, ensuring that each task is completed on time and to the highest standard." , allow_delegation = True , llm = 'command-r' ) # Instantiate your crew with a custom manager crew = Crew( agents = [researcher], tasks = [task], manager_agent = manager, process = Process.hierarchical, ) # Start the crew's work result = crew.kickoff() print (result)
import openlit openlit.init()
export OTEL_EXPORTER_OTLP_ENDPOINT = "http://127.0.0.1:4318"
import asyncio from crewai import Crew, Agent, Task import openlit openlit.init( otlp_endpoint = "http://127.0.0.1:4318" ) # Create an agent with code execution enabled coding_agent = Agent( role = "Python Data Analyst" , goal = "Analyze data and provide insights using Python" , backstory = "You are an experienced data analyst with strong Python skills." , allow_code_execution = True , llm = "command-r" ) # Create a task that requires code execution data_analysis_task = Task( description = "Analyze the given dataset and calculate the average age of participants. Ages: {ages} " , agent = coding_agent, expected_output = "5 bullet points, each with a paragraph and accompanying notes." , ) # Create a crew and add the task analysis_crew = Crew( agents = [coding_agent], tasks = [data_analysis_task] ) # Async function to kickoff the crew asynchronously async def async_crew_execution (): result = await analysis_crew.kickoff_async( inputs = { "ages" : [ 25 , 30 , 35 , 40 , 45 ]}) print ( "Crew Result:" , result) # Run the async function asyncio.run(async_crew_execution())
Visualize and Analyze
Email : user@openlit.io
Password : openlituser
OpenLIT Dashboard
Was this page helpful?
Yes
No
