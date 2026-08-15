# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/langdb
- Raw SHA-256: `61f83ffc9730a4874c89404b129bfd6c4b32d8723f402a949b3825b9b22eb2f4`

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
Navigation Observability LangDB Integration
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
LangDB Integration
Copy page Copy page
Govern, secure, and optimize your CrewAI workflows with LangDB AI Gateway—access 350+ models, automatic routing, cost optimization, and full observability.
Copy page Copy page
​ Introduction
LangDB CrewAI Trace Example
​ Features
​ AI Gateway Capabilities
Access to 350+ LLMs : Connect to all major language models through a single integration
Virtual Models : Create custom model configurations with specific parameters and routing rules
Virtual MCP : Enable compatibility and integration with MCP (Model Context Protocol) systems for enhanced agent communication
Guardrails : Implement safety measures and compliance controls for agent behavior
​ Observability & Tracing
Automatic Tracing : Single init() call captures all CrewAI interactions
End-to-End Visibility : Monitor agent workflows from start to finish
Tool Usage Tracking : Track which tools agents use and their outcomes
Model Call Monitoring : Detailed insights into LLM interactions
Performance Analytics : Monitor latency, token usage, and costs
Debugging Support : Step-through execution for troubleshooting
Real-time Monitoring : Live traces and metrics dashboard
​ Setup Instructions
Install LangDB
pip install 'pylangdb[crewai]'
Set Environment Variables
export LANGDB_API_KEY = "<your_langdb_api_key>" export LANGDB_PROJECT_ID = "<your_langdb_project_id>" export LANGDB_API_BASE_URL = 'https://api.us-east-1.langdb.ai'
Initialize Tracing
from pylangdb.crewai import init # Initialize LangDB init()
Configure CrewAI with LangDB
from crewai import Agent, Task, Crew, LLM import os # Configure LLM with LangDB headers llm = LLM( model = "openai/gpt-4o" , # Replace with the model you want to use api_key = os.getenv( "LANGDB_API_KEY" ), base_url = os.getenv( "LANGDB_API_BASE_URL" ), extra_headers = { "x-project-id" : os.getenv( "LANGDB_PROJECT_ID" )} )
​ Quick Start Example
import os from pylangdb.crewai import init from crewai import Agent, Task, Crew, LLM # Initialize LangDB before any CrewAI imports init() def create_llm ( model ): return LLM( model = model, api_key = os.environ.get( "LANGDB_API_KEY" ), base_url = os.environ.get( "LANGDB_API_BASE_URL" ), extra_headers = { "x-project-id" : os.environ.get( "LANGDB_PROJECT_ID" )} ) # Define your agent researcher = Agent( role = "Research Specialist" , goal = "Research topics thoroughly" , backstory = "Expert researcher with skills in finding information" , llm = create_llm( "openai/gpt-4o" ), # Replace with the model you want to use verbose = True ) # Create a task task = Task( description = "Research the given topic and provide a comprehensive summary" , agent = researcher, expected_output = "Detailed research summary with key findings" ) # Create and run the crew crew = Crew( agents = [researcher], tasks = [task]) result = crew.kickoff() print (result)
​ Complete Example: Research and Planning Agent
​ Prerequisites
pip install crewai 'pylangdb[crewai]' crewai_tools setuptools python-dotenv
​ Environment Setup
# LangDB credentials export LANGDB_API_KEY = "<your_langdb_api_key>" export LANGDB_PROJECT_ID = "<your_langdb_project_id>" export LANGDB_API_BASE_URL = 'https://api.us-east-1.langdb.ai' # Additional API keys (optional) export SERPER_API_KEY = "<your_serper_api_key>" # For web search capabilities
​ Complete Implementation
#!/usr/bin/env python3 import os import sys from pylangdb.crewai import init init() # Initialize LangDB before any CrewAI imports from dotenv import load_dotenv from crewai import Agent, Task, Crew, Process, LLM from crewai_tools import SerperDevTool load_dotenv() def create_llm ( model ): return LLM( model = model, api_key = os.environ.get( "LANGDB_API_KEY" ), base_url = os.environ.get( "LANGDB_API_BASE_URL" ), extra_headers = { "x-project-id" : os.environ.get( "LANGDB_PROJECT_ID" )} ) class ResearchPlanningCrew : def researcher ( self ) -> Agent: return Agent( role = "Research Specialist" , goal = "Research topics thoroughly and compile comprehensive information" , backstory = "Expert researcher with skills in finding and analyzing information from various sources" , tools = [SerperDevTool()], llm = create_llm( "openai/gpt-4o" ), verbose = True ) def planner ( self ) -> Agent: return Agent( role = "Strategic Planner" , goal = "Create actionable plans based on research findings" , backstory = "Strategic planner who breaks down complex challenges into executable plans" , reasoning = True , max_reasoning_attempts = 3 , llm = create_llm( "openai/anthropic/claude-3.7-sonnet" ), verbose = True ) def research_task ( self ) -> Task: return Task( description = "Research the topic thoroughly and compile comprehensive information" , agent = self .researcher(), expected_output = "Comprehensive research report with key findings and insights" ) def planning_task ( self ) -> Task: return Task( description = "Create a strategic plan based on the research findings" , agent = self .planner(), expected_output = "Strategic execution plan with phases, goals, and actionable steps" , context = [ self .research_task()] ) def crew ( self ) -> Crew: return Crew( agents = [ self .researcher(), self .planner()], tasks = [ self .research_task(), self .planning_task()], verbose = True , process = Process.sequential ) def main (): topic = sys.argv[ 1 ] if len (sys.argv) > 1 else "Artificial Intelligence in Healthcare" crew_instance = ResearchPlanningCrew() # Update task descriptions with the specific topic crew_instance.research_task().description = f "Research { topic } thoroughly and compile comprehensive information" crew_instance.planning_task().description = f "Create a strategic plan for { topic } based on the research findings" result = crew_instance.crew().kickoff() print (result) if __name__ == "__main__" : main()
​ Running the Example
python main.py "Sustainable Energy Solutions"
​ Viewing Traces in LangDB
LangDB Trace Dashboard
​ What You’ll See
Agent Interactions : Complete flow of agent conversations and task handoffs
Tool Usage : Which tools were called, their inputs, and outputs
Model Calls : Detailed LLM interactions with prompts image.pngand responses
Performance Metrics : Latency, token usage, and cost tracking
Execution Timeline : Step-by-step view of the entire workflow
​ Troubleshooting
​ Common Issues
No traces appearing : Ensure init() is called before any CrewAI imports
Authentication errors : Verify your LangDB API key and project ID
​ Resources
LangDB Documentation
LangDB Guides
GitHub Examples
LangDB Dashboard
Model Catalog
Enterprise Features
​ Next Steps
Virtual Models : Create custom model configurations with routing strategies
Guardrails & Safety : Implement content filtering and compliance controls
Production Deployment : Configure fallbacks, retries, and load balancing
Was this page helpful?
Yes
No
