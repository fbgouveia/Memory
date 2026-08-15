# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/opik
- Raw SHA-256: `cb219b0e88e38f105da8140aa3915cef923746191ff0b8f2a4a7aee3b3e85114`

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
Navigation Observability Opik Integration
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
Opik Integration
Copy page Copy page
Learn how to use Comet Opik to debug, evaluate, and monitor your CrewAI applications with comprehensive tracing, automated evaluations, and production-ready dashboards.
Copy page Copy page
​ Opik Overview
Opik Agent Dashboard
Log Traces and Spans : Automatically track LLM calls and application logic to debug and analyze development and production systems. Manually or programmatically annotate, view, and compare responses across projects.
Evaluate Your LLM Application’s Performance : Evaluate against a custom test set and run built-in evaluation metrics or define your own metrics in the SDK or UI.
Test Within Your CI/CD Pipeline : Establish reliable performance baselines with Opik’s LLM unit tests, built on PyTest. Run online evaluations for continuous monitoring in production.
Monitor & Analyze Production Data : Understand your models’ performance on unseen data in production and generate datasets for new dev iterations.
​ Setup
Install required packages
pip install crewai crewai-tools opik --upgrade
Configure Opik
import opik opik.configure( use_local = False )
Prepare environment
import os import getpass if "OPENAI_API_KEY" not in os.environ: os.environ[ "OPENAI_API_KEY" ] = getpass.getpass( "Enter your OpenAI API key: " )
Using CrewAI
from crewai import Agent, Crew, Task, Process class YourCrewName : def agent_one ( self ) -> Agent: return Agent( role = "Data Analyst" , goal = "Analyze data trends in the market" , backstory = "An experienced data analyst with a background in economics" , verbose = True , ) def agent_two ( self ) -> Agent: return Agent( role = "Market Researcher" , goal = "Gather information on market dynamics" , backstory = "A diligent researcher with a keen eye for detail" , verbose = True , ) def task_one ( self ) -> Task: return Task( name = "Collect Data Task" , description = "Collect recent market data and identify trends." , expected_output = "A report summarizing key trends in the market." , agent = self .agent_one(), ) def task_two ( self ) -> Task: return Task( name = "Market Research Task" , description = "Research factors affecting market dynamics." , expected_output = "An analysis of factors influencing the market." , agent = self .agent_two(), ) def crew ( self ) -> Crew: return Crew( agents = [ self .agent_one(), self .agent_two()], tasks = [ self .task_one(), self .task_two()], process = Process.sequential, verbose = True , )
from opik.integrations.crewai import track_crewai track_crewai( project_name = "crewai-integration-demo" ) my_crew = YourCrewName().crew() result = my_crew.kickoff() print (result)
LLM traces, spans, and their metadata
Agent interactions and task execution flow
Performance metrics like latency and token usage
Evaluation metrics (built-in or custom)
​ Resources
🦉 Opik Documentation
👉 Opik + CrewAI Colab
🐦 X
💬 Slack
Was this page helpful?
Yes
No
