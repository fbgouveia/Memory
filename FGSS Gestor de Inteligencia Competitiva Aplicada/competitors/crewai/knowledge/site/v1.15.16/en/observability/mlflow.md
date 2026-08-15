# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/mlflow
- Raw SHA-256: `457e348b5b4fdca897ab493bf743c940adde5c8e84faeb6084b82595e7be4486`

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
Navigation Observability MLflow Integration
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
MLflow Integration
Copy page Copy page
Quickly start monitoring your Agents with MLflow.
Copy page Copy page
​ MLflow Overview
​ Features
Tracing Dashboard : Monitor activities of your crewAI agents with detailed dashboards that include inputs, outputs and metadata of spans.
Automated Tracing : A fully automated integration with crewAI, which can be enabled by running mlflow.crewai.autolog() .
Manual Trace Instrumentation with minor efforts : Customize trace instrumentation through MLflow’s high-level fluent APIs such as decorators, function wrappers and context managers.
OpenTelemetry Compatibility : MLflow Tracing supports exporting traces to an OpenTelemetry Collector, which can then be used to export traces to various backends such as Jaeger, Zipkin, and AWS X-Ray.
Package and Deploy Agents : Package and deploy your crewAI agents to an inference server with a variety of deployment targets.
Securely Host LLMs : Host multiple LLM from various providers in one unified endpoint through MFflow gateway.
Evaluation : Evaluate your crewAI agents with a wide range of metrics using a convenient API mlflow.evaluate() .
​ Setup Instructions
Install MLflow package
# The crewAI integration is available in mlflow>=2.19.0 pip install mlflow
Start MFflow tracking server
# This process is optional, but it is recommended to use MLflow tracking server for better visualization and broader features. mlflow server
Initialize MLflow in Your Application
import mlflow mlflow.crewai.autolog() # Optional: Set a tracking URI and an experiment name if you have a tracking server mlflow.set_tracking_uri( "http://localhost:5000" ) mlflow.set_experiment( "CrewAI" )
from crewai import Agent, Crew, Task from crewai.knowledge.source.string_knowledge_source import StringKnowledgeSource from crewai_tools import SerperDevTool, WebsiteSearchTool from textwrap import dedent content = "Users name is John. He is 30 years old and lives in San Francisco." string_source = StringKnowledgeSource( content = content, metadata = { "preference" : "personal" } ) search_tool = WebsiteSearchTool() class TripAgents : def city_selection_agent ( self ): return Agent( role = "City Selection Expert" , goal = "Select the best city based on weather, season, and prices" , backstory = "An expert in analyzing travel data to pick ideal destinations" , tools = [ search_tool, ], verbose = True , ) def local_expert ( self ): return Agent( role = "Local Expert at this city" , goal = "Provide the BEST insights about the selected city" , backstory = """A knowledgeable local guide with extensive information about the city, it's attractions and customs""" , tools = [search_tool], verbose = True , ) class TripTasks : def identify_task ( self , agent , origin , cities , interests , range ): return Task( description = dedent( f """ Analyze and select the best city for the trip based on specific criteria such as weather patterns, seasonal events, and travel costs. This task involves comparing multiple cities, considering factors like current weather conditions, upcoming cultural or seasonal events, and overall travel expenses. Your final answer must be a detailed report on the chosen city, and everything you found out about it, including the actual flight costs, weather forecast and attractions. Traveling from: { origin } City Options: { cities } Trip Date: { range } Traveler Interests: { interests } """ ), agent = agent, expected_output = "Detailed report on the chosen city including flight costs, weather forecast, and attractions" , ) def gather_task ( self , agent , origin , interests , range ): return Task( description = dedent( f """ As a local expert on this city you must compile an in-depth guide for someone traveling there and wanting to have THE BEST trip ever! Gather information about key attractions, local customs, special events, and daily activity recommendations. Find the best spots to go to, the kind of place only a local would know. This guide should provide a thorough overview of what the city has to offer, including hidden gems, cultural hotspots, must-visit landmarks, weather forecasts, and high level costs. The final answer must be a comprehensive city guide, rich in cultural insights and practical tips, tailored to enhance the travel experience. Trip Date: { range } Traveling from: { origin } Traveler Interests: { interests } """ ), agent = agent, expected_output = "Comprehensive city guide including hidden gems, cultural hotspots, and practical travel tips" , ) class TripCrew : def __init__ ( self , origin , cities , date_range , interests ): self .cities = cities self .origin = origin self .interests = interests self .date_range = date_range def run ( self ): agents = TripAgents() tasks = TripTasks() city_selector_agent = agents.city_selection_agent() local_expert_agent = agents.local_expert() identify_task = tasks.identify_task( city_selector_agent, self .origin, self .cities, self .interests, self .date_range, ) gather_task = tasks.gather_task( local_expert_agent, self .origin, self .interests, self .date_range ) crew = Crew( agents = [city_selector_agent, local_expert_agent], tasks = [identify_task, gather_task], verbose = True , memory = True , knowledge = { "sources" : [string_source], "metadata" : { "preference" : "personal" }, }, ) result = crew.kickoff() return result trip_crew = TripCrew( "California" , "Tokyo" , "Dec 12 - Dec 20" , "sports" ) result = trip_crew.run() print (result)
Visualize Activities of Agents
MLflow Tracing Dashboard
Was this page helpful?
Yes
No
