# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/langfuse
- Raw SHA-256: `40fdc38bee1b33374fa5e1b7ec28ba25d85b58f917c559498c7ab3c33d7ede32`

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
Navigation Observability Langfuse Integration
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
Langfuse Integration
Copy page Copy page
Learn how to integrate Langfuse with CrewAI via OpenTelemetry using OpenLit
Copy page Copy page
​ Integrate Langfuse with CrewAI
​ Get Started
​ Step 1: Install Dependencies
% pip install langfuse openlit crewai crewai_tools
​ Step 2: Set Up Environment Variables
import os # Get keys for your project from the project settings page: https://cloud.langfuse.com os.environ[ "LANGFUSE_PUBLIC_KEY" ] = "pk-lf-..." os.environ[ "LANGFUSE_SECRET_KEY" ] = "sk-lf-..." os.environ[ "LANGFUSE_HOST" ] = "https://cloud.langfuse.com" # 🇪🇺 EU region # os.environ["LANGFUSE_HOST"] = "https://us.cloud.langfuse.com" # 🇺🇸 US region # Your OpenAI key os.environ[ "OPENAI_API_KEY" ] = "sk-proj-..."
from langfuse import get_client langfuse = get_client() # Verify connection if langfuse.auth_check(): print ( "Langfuse client is authenticated and ready!" ) else : print ( "Authentication failed. Please check your credentials and host." )
​ Step 3: Initialize OpenLit
import openlit openlit.init()
​ Step 4: Create a Simple CrewAI Application
from crewai import Agent, Task, Crew from crewai_tools import ( WebsiteSearchTool ) web_rag_tool = WebsiteSearchTool() writer = Agent( role = "Writer" , goal = "You make math engaging and understandable for young children through poetry" , backstory = "You're an expert in writing haikus but you know nothing of math." , tools = [web_rag_tool], ) task = Task( description = ( "What is {multiplication} ?" ), expected_output = ( "Compose a haiku that includes the answer." ), agent = writer) crew = Crew( agents = [writer], tasks = [task], share_crew = False )
​ Step 5: See Traces in Langfuse
​ References
Langfuse OpenTelemetry Docs
Was this page helpful?
Yes
No
