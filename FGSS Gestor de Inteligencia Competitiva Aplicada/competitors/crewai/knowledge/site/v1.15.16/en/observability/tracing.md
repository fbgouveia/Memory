# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/tracing
- Raw SHA-256: `6160c0ead201529b0897869c41a8f044e00317cf45de6e7fd33f58e832915064`

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
Navigation Observability CrewAI Tracing
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
CrewAI Tracing
Copy page Copy page
Built-in tracing for CrewAI Crews and Flows with the CrewAI AMP platform
Copy page Copy page
​ CrewAI Built-in Tracing
​ Prerequisites
CrewAI AMP Account : Sign up for a free account at app.crewai.com
CLI Authentication : Use the CrewAI CLI to authenticate your local environment
crewai login
​ Setup Instructions
​ Step 1: Create Your CrewAI AMP Account
​ Step 2: Install CrewAI CLI and Authenticate
uv add 'crewai[tools]'
crewai login
Open your browser to the authentication page
Prompt you to enter a device code
Authenticate your local environment with your CrewAI AMP account
Enable tracing capabilities for your local development
​ Step 3: Enable Tracing in Your Crew
from crewai import Agent, Crew, Process, Task from crewai_tools import SerperDevTool # Define your agents researcher = Agent( role = "Senior Research Analyst" , goal = "Uncover cutting-edge developments in AI and data science" , backstory = """You work at a leading tech think tank. Your expertise lies in identifying emerging trends. You have a knack for dissecting complex data and presenting actionable insights.""" , verbose = True , tools = [SerperDevTool()], ) writer = Agent( role = "Tech Content Strategist" , goal = "Craft compelling content on tech advancements" , backstory = """You are a renowned Content Strategist, known for your insightful and engaging articles. You transform complex concepts into compelling narratives.""" , verbose = True , ) # Create tasks for your agents research_task = Task( description = """Conduct a comprehensive analysis of the latest advancements in AI in 2024. Identify key trends, breakthrough technologies, and potential industry impacts.""" , expected_output = "Full analysis report in bullet points" , agent = researcher, ) writing_task = Task( description = """Using the insights provided, develop an engaging blog post that highlights the most significant AI advancements. Your post should be informative yet accessible, catering to a tech-savvy audience.""" , expected_output = "Full blog post of at least 4 paragraphs" , agent = writer, ) # Enable tracing in your crew crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], process = Process.sequential, tracing = True , # Enable built-in tracing verbose = True ) # Execute your crew result = crew.kickoff()
​ Step 4: Enable Tracing in Your Flow
from crewai.flow.flow import Flow, listen, start from pydantic import BaseModel class ExampleState ( BaseModel ): counter: int = 0 message: str = "" class ExampleFlow (Flow[ExampleState]): def __init__ ( self ): super (). __init__ ( tracing = True ) # Enable tracing for the flow @start () def first_method ( self ): print ( "Starting the flow" ) self .state.counter = 1 self .state.message = "Flow started" return "continue" @listen ( "continue" ) def second_method ( self ): print ( "Continuing the flow" ) self .state.counter += 1 self .state.message = "Flow continued" return "finish" @listen ( "finish" ) def final_method ( self ): print ( "Finishing the flow" ) self .state.counter += 1 self .state.message = "Flow completed" # Create and run the flow with tracing enabled flow = ExampleFlow( tracing = True ) result = flow.kickoff()
​ Step 5: View Traces in the CrewAI AMP Dashboard
​ Alternative: Environment Variable Configuration
export CREWAI_TRACING_ENABLED = true
CREWAI_TRACING_ENABLED=true
​ Viewing Your Traces
​ Access the CrewAI AMP Dashboard
Visit app.crewai.com and log in to your account
Navigate to your project dashboard
Click on the Traces tab to view execution details
​ What You’ll See in Traces
Agent Decisions : See how agents reason through tasks and make decisions
Task Execution Timeline : Visual representation of task sequences and dependencies
Tool Usage : Monitor which tools are called and their results
LLM Calls : Track all language model interactions, including prompts and responses
Performance Metrics : Execution times, token usage, and costs
Error Tracking : Detailed error information and stack traces
​ Trace Features
Execution Timeline : Click through different stages of execution
Detailed Logs : Access comprehensive logs for debugging
Performance Analytics : Analyze execution patterns and optimize performance
Export Capabilities : Download traces for further analysis
​ Authentication Issues
Ensure you’re logged in: crewai login
Check your internet connection
Verify your account at app.crewai.com
​ Traces Not Appearing
Confirm tracing=True is set in your Crew/Flow
Check that CREWAI_TRACING_ENABLED=true if using environment variables
Ensure you’re authenticated with crewai login
Verify your crew/flow is actually executing
Was this page helpful?
Yes
No
