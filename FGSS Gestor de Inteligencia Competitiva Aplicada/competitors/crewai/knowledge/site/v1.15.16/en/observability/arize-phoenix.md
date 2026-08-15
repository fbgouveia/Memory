# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/arize-phoenix
- Raw SHA-256: `cbc85496865e7aec7ae5dcbc944ad6ac12a8260e1abf1d40d1d775c8a7f20872`

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
Navigation Observability Arize Phoenix
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
Arize Phoenix
Copy page Copy page
Arize Phoenix integration for CrewAI with OpenTelemetry and OpenInference
Copy page Copy page
​ Arize Phoenix Integration
​ Get Started
​ Step 1: Install Dependencies
pip install openinference-instrumentation-crewai crewai crewai-tools arize-phoenix-otel
​ Step 2: Set Up Environment Variables
import os from getpass import getpass # Get your Phoenix Cloud credentials PHOENIX_API_KEY = getpass( "🔑 Enter your Phoenix Cloud API Key: " ) # Get API keys for services OPENAI_API_KEY = getpass( "🔑 Enter your OpenAI API key: " ) SERPER_API_KEY = getpass( "🔑 Enter your Serper API key: " ) # Set environment variables os.environ[ "PHOENIX_CLIENT_HEADERS" ] = f "api_key= { PHOENIX_API_KEY } " os.environ[ "PHOENIX_COLLECTOR_ENDPOINT" ] = "https://app.phoenix.arize.com" # Phoenix Cloud, change this to your own endpoint if you are using a self-hosted instance os.environ[ "OPENAI_API_KEY" ] = OPENAI_API_KEY os.environ[ "SERPER_API_KEY" ] = SERPER_API_KEY
​ Step 3: Initialize OpenTelemetry with Phoenix
from phoenix.otel import register tracer_provider = register( project_name = "crewai-tracing-demo" , auto_instrument = True , )
​ Step 4: Create a CrewAI Application
from crewai import Agent, Crew, Process, Task from crewai_tools import SerperDevTool from openinference.instrumentation.crewai import CrewAIInstrumentor from phoenix.otel import register # setup monitoring for your crew tracer_provider = register( endpoint = "http://localhost:6006/v1/traces" ) CrewAIInstrumentor().instrument( skip_dep_check = True , tracer_provider = tracer_provider) search_tool = SerperDevTool() # Define your agents with roles and goals researcher = Agent( role = "Senior Research Analyst" , goal = "Uncover cutting-edge developments in AI and data science" , backstory = """You work at a leading tech think tank. Your expertise lies in identifying emerging trends. You have a knack for dissecting complex data and presenting actionable insights.""" , verbose = True , allow_delegation = False , # You can pass an optional llm attribute specifying what model you wanna use. # llm=ChatOpenAI(model_name="gpt-3.5", temperature=0.7), tools = [search_tool], ) writer = Agent( role = "Tech Content Strategist" , goal = "Craft compelling content on tech advancements" , backstory = """You are a renowned Content Strategist, known for your insightful and engaging articles. You transform complex concepts into compelling narratives.""" , verbose = True , allow_delegation = True , ) # Create tasks for your agents task1 = Task( description = """Conduct a comprehensive analysis of the latest advancements in AI in 2024. Identify key trends, breakthrough technologies, and potential industry impacts.""" , expected_output = "Full analysis report in bullet points" , agent = researcher, ) task2 = Task( description = """Using the insights provided, develop an engaging blog post that highlights the most significant AI advancements. Your post should be informative yet accessible, catering to a tech-savvy audience. Make it sound cool, avoid complex words so it doesn't sound like AI.""" , expected_output = "Full blog post of at least 4 paragraphs" , agent = writer, ) # Instantiate your crew with a sequential process crew = Crew( agents = [researcher, writer], tasks = [task1, task2], verbose = 1 , process = Process.sequential ) # Get your crew to work! result = crew.kickoff() print ( "######################" ) print (result)
​ Step 5: View Traces in Phoenix
​ Version Compatibility Information
Python 3.8+
CrewAI >= 0.86.0
Arize Phoenix >= 7.0.1
OpenTelemetry SDK >= 1.31.0
​ References
Phoenix Documentation - Overview of the Phoenix platform.
CrewAI Documentation - Overview of the CrewAI framework.
OpenTelemetry Docs - OpenTelemetry guide
OpenInference GitHub - Source code for OpenInference SDK.
Was this page helpful?
Yes
No
