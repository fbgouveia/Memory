# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/langtrace
- Raw SHA-256: `5b73ea8fee2e3929107777102df7618d8426b0c03c91f7d335e988496186320d`

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
Navigation Observability Langtrace Integration
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
Langtrace Integration
Copy page Copy page
How to monitor cost, latency, and performance of CrewAI Agents using Langtrace, an external observability tool.
Copy page Copy page
​ Langtrace Overview
​ Setup Instructions
Sign up for Langtrace
Create a project
Install Langtrace in your CrewAI project
pip install langtrace-python-sdk
Import Langtrace
from langtrace_python_sdk import langtrace langtrace.init( api_key = '<LANGTRACE_API_KEY>' ) # Now import CrewAI modules from crewai import Agent, Task, Crew
​ Features and Their Application to CrewAI
LLM Token and Cost Tracking Monitor the token usage and associated costs for each CrewAI agent interaction.
Trace Graph for Execution Steps Visualize the execution flow of your CrewAI tasks, including latency and logs. Useful for identifying bottlenecks in your agent workflows.
Dataset Curation with Manual Annotation Create datasets from your CrewAI task outputs for future training or evaluation.
Prompt Versioning and Management Keep track of different versions of prompts used in your CrewAI agents. Useful for A/B testing and optimizing agent performance.
Prompt Playground with Model Comparisons Test and compare different prompts and models for your CrewAI agents before deployment.
Testing and Evaluations Set up automated tests for your CrewAI agents and tasks.
Was this page helpful?
Yes
No
