# Documentation Index

- Source: https://docs.crewai.com/en/quickstart
- Raw SHA-256: `e85851cb6e9fa15753f56d3fe0fa0816bcfd97a8ecc49260b95ae797659b8306`

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
Navigation Get Started Quickstart
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
Quickstart
Copy page Copy page
Build your first CrewAI Flow in minutes — orchestration, state, and an agent crew that produces a real report.
Copy page Copy page
​ Watch: Building CrewAI Agents & Flows with Coding Agent Skills
​ Prerequisites
Python environment and the CrewAI CLI (see installation )
An LLM configured with the right API keys — see LLMs
A Serper.dev API key ( SERPER_API_KEY ) for web search in this tutorial
​ Build your first Flow
Create a Flow project
Terminal
crewai create flow latest-ai-flow cd latest_ai_flow
Configure one agent in JSONC
{ "role" : "{topic} Senior Data Researcher" , "goal" : "Uncover cutting-edge developments in {topic}" , "backstory" : "You're a seasoned researcher who finds relevant information and presents it clearly." , "tools" : [ "SerperDevTool" ], "settings" : { "verbose" : true } }
Configure the crew in `crew.jsonc`
{ "name" : "Research Crew" , "agents" : [ "researcher" ], "tasks" : [ { "name" : "research_task" , "description" : "Conduct thorough research about {topic}. Use web search to find recent, credible information." , "expected_output" : "A markdown report with clear sections: key trends, notable tools or companies, and implications. Aim for 800-1200 words. No fenced code blocks around the whole document." , "agent" : "researcher" , "output_file" : "output/report.md" , "markdown" : true } ], "process" : "sequential" , "verbose" : true }
Load the JSON crew (`content_crew.py`)
# src/latest_ai_flow/crews/content_crew/content_crew.py from pathlib import Path from crewai.project import load_crew def kickoff_content_crew ( inputs : dict ): crew, default_inputs = load_crew(Path( __file__ ).with_name( "crew.jsonc" )) return crew.kickoff( inputs = { ** default_inputs, ** inputs})
Define the Flow in `main.py`
# src/latest_ai_flow/main.py from pydantic import BaseModel from crewai.flow import Flow, listen, start from latest_ai_flow.crews.content_crew.content_crew import kickoff_content_crew class ResearchFlowState ( BaseModel ): topic: str = "" report: str = "" class LatestAiFlow (Flow[ResearchFlowState]): @start () def prepare_topic ( self , crewai_trigger_payload : dict | None = None ): if crewai_trigger_payload: self .state.topic = crewai_trigger_payload.get( "topic" , "AI Agents" ) else : self .state.topic = "AI Agents" print ( f "Topic: { self .state.topic } " ) @listen (prepare_topic) def run_research ( self ): result = kickoff_content_crew( inputs = { "topic" : self .state.topic}) self .state.report = result.raw print ( "Research crew finished." ) @listen (run_research) def summarize ( self ): print ( "Report path: output/report.md" ) def kickoff (): LatestAiFlow().kickoff() def plot (): LatestAiFlow().plot() if __name__ == "__main__" : kickoff()
Set environment variables
SERPER_API_KEY — from Serper.dev
Your model provider keys as required — see LLM setup
Install and run
Terminal
crewai install crewai run
Check the output
output/report.md
# AI Agents: Recent Landscape and Trends ## Executive summary … ## Key trends - **Tool use and orchestration** — … - **Enterprise adoption** — … ## Implications …
​ How this run fits together
Flow — LatestAiFlow runs prepare_topic first, then run_research , then summarize . State ( topic , report ) lives on the Flow.
Crew — kickoff_content_crew loads crew.jsonc and runs one task with one agent: the researcher uses Serper to search the web, then writes the structured report.
Artifact — The task’s output_file writes the report under output/report.md .
​ Naming consistency
agents: ["researcher"] loads agents/researcher.jsonc
tasks[].agent: "researcher" assigns the task to that agent
​ Deploying
Authenticate
Create deployment
Check status & logs
Ship updates after you change code
List or remove deployments
crewai login
crewai deploy create
crewai deploy status crewai deploy logs
crewai deploy push
crewai deploy list crewai deploy remove < deployment_i d >
Deploy guide
Join the Community
Was this page helpful?
Yes
No
