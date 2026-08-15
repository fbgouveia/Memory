# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/customizing-agents
- Raw SHA-256: `f785880a4199e003cfdb19b249e7785bc880e3b090a8fc67ea99d831d23bb807`

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
Navigation Learn Customize Agents
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
Customize Agents
Copy page Copy page
A comprehensive guide to tailoring agents for specific roles, tasks, and advanced customizations within the CrewAI framework.
Copy page Copy page
​ Customizable Attributes
​ Key Attributes for Customization
​ Advanced Customization Options
​ Language Model Customization
​ Performance and Debugging Settings
​ Verbose Mode and RPM Limit
Verbose Mode : Enables detailed logging of an agent’s actions, useful for debugging and optimization. Specifically, it provides insights into agent execution processes, aiding in the optimization of performance.
RPM Limit : Sets the maximum number of requests per minute ( max_rpm ). This attribute is optional and can be set to None for no limit, allowing for unlimited queries to external services if needed.
​ Maximum Iterations for Task Execution
​ Customizing Agents and Tools
pip install 'crewai[tools]'
​ Example: Assigning Tools to an Agent
import os from crewai import Agent from crewai_tools import SerperDevTool # Set API keys for tool initialization os.environ[ "OPENAI_API_KEY" ] = "Your Key" os.environ[ "SERPER_API_KEY" ] = "Your Key" # Initialize a search tool search_tool = SerperDevTool() # Initialize the agent with advanced options agent = Agent( role = 'Research Analyst' , goal = 'Provide up-to-date market analysis' , backstory = 'An expert analyst with a keen eye for market trends.' , tools = [search_tool], memory = True , # Enable memory verbose = True , max_rpm = None , # No limit on requests per minute max_iter = 25 , # Default value for maximum iterations )
​ Delegation and Autonomy
​ Example: Disabling Delegation for an Agent
agent = Agent( role = 'Content Writer' , goal = 'Write engaging content on market trends' , backstory = 'A seasoned writer with expertise in market analysis.' , allow_delegation = True # Enabling delegation )
​ Conclusion
Was this page helpful?
Yes
No
