# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/dalle-image-generation
- Raw SHA-256: `46f2ddd7249ba12cc7e690d1e709e2d0906bf4442c7e6f42d559b2844a353f96`

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
Navigation Learn Image Generation with DALL-E
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
Image Generation with DALL-E
Copy page Copy page
Learn how to use DALL-E for AI-powered image generation in your CrewAI projects
Copy page Copy page
​ Prerequisites
crewAI installed (latest version)
OpenAI API key with access to DALL-E
​ Setting Up the DALL-E Tool
Import the DALL-E tool
from crewai_tools import DallETool
Add the DALL-E tool to your agent configuration
@agent def researcher ( self ) -> Agent: return Agent( config = self .agents_config[ 'researcher' ], tools = [SerperDevTool(), DallETool()], # Add DallETool to the list of tools allow_delegation = False , verbose = True )
​ Using the DALL-E Tool
​ Example Agent Configuration
role : > LinkedIn Profile Senior Data Researcher goal : > Uncover detailed LinkedIn profiles based on provided name {name} and domain {domain} Generate a Dall-e image based on domain {domain} backstory : > You're a seasoned researcher with a knack for uncovering the most relevant LinkedIn profiles. Known for your ability to navigate LinkedIn efficiently, you excel at gathering and presenting professional information clearly and concisely.
​ Expected Output
​ Best Practices
Be specific in your image generation prompts to get the best results.
Consider generation time - Image generation can take some time, so factor this into your task planning.
Follow usage policies - Always comply with OpenAI’s usage policies when generating images.
​ Troubleshooting
Check API access - Ensure your OpenAI API key has access to DALL-E.
Version compatibility - Check that you’re using the latest version of crewAI and crewai-tools.
Tool configuration - Verify that the DALL-E tool is correctly added to the agent’s tool list.
Was this page helpful?
Yes
No
