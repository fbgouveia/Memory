# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/human-input-on-execution
- Raw SHA-256: `5d1850908cf4fdc64a9fded6c5279fa74dc030790f7402a159193f62cb38df3b`

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
Navigation Learn Human Input on Execution
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
Human Input on Execution
Copy page Copy page
Integrating CrewAI with human input during execution in complex decision-making processes and leveraging the full capabilities of the agent’s attributes and tools.
Copy page Copy page
​ Human input in agent execution
​ Using human input with CrewAI
​ Example:
pip install crewai
import os from crewai import Agent, Task, Crew from crewai_tools import SerperDevTool os.environ[ "SERPER_API_KEY" ] = "Your Key" # serper.dev API key os.environ[ "OPENAI_API_KEY" ] = "Your Key" # Loading Tools search_tool = SerperDevTool() # Define your agents with roles, goals, tools, and additional attributes researcher = Agent( role = 'Senior Research Analyst' , goal = 'Uncover cutting-edge developments in AI and data science' , backstory = ( "You are a Senior Research Analyst at a leading tech think tank. " "Your expertise lies in identifying emerging trends and technologies in AI and data science. " "You have a knack for dissecting complex data and presenting actionable insights." ), verbose = True , allow_delegation = False , tools = [search_tool] ) writer = Agent( role = 'Tech Content Strategist' , goal = 'Craft compelling content on tech advancements' , backstory = ( "You are a renowned Tech Content Strategist, known for your insightful and engaging articles on technology and innovation. " "With a deep understanding of the tech industry, you transform complex concepts into compelling narratives." ), verbose = True , allow_delegation = True , tools = [search_tool], cache = False , # Disable cache for this agent ) # Create tasks for your agents task1 = Task( description = ( "Conduct a comprehensive analysis of the latest advancements in AI in 2025. " "Identify key trends, breakthrough technologies, and potential industry impacts. " "Compile your findings in a detailed report. " "Make sure to check with a human if the draft is good before finalizing your answer." ), expected_output = 'A comprehensive full report on the latest AI advancements in 2025, leave nothing out' , agent = researcher, human_input = True ) task2 = Task( description = ( "Using the insights from the researcher \' s report, develop an engaging blog post that highlights the most significant AI advancements. " "Your post should be informative yet accessible, catering to a tech-savvy audience. " "Aim for a narrative that captures the essence of these breakthroughs and their implications for the future." ), expected_output = 'A compelling 3 paragraphs blog post formatted as markdown about the latest AI advancements in 2025' , agent = writer, human_input = True ) # Instantiate your crew with a sequential process crew = Crew( agents = [researcher, writer], tasks = [task1, task2], verbose = True , memory = True , planning = True # Enable planning feature for the crew ) # Get your crew to work! result = crew.kickoff() print ( "######################" ) print (result)
Was this page helpful?
Yes
No
