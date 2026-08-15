# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/replay-tasks-from-latest-crew-kickoff
- Raw SHA-256: `92b718bde33c4cff21125b00f61ed418b5452b13ee0b181269dadf5f60fb296c`

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
Navigation Learn Replay Tasks from Latest Crew Kickoff
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
Replay Tasks from Latest Crew Kickoff
Copy page Copy page
Replay tasks from the latest crew.kickoff(…)
Copy page Copy page
​ Introduction
​ Replaying from Specific Task Using the CLI
Open your terminal or command prompt.
Navigate to the directory where your CrewAI project is located.
Run the following commands:
crewai log-tasks-outputs
crewai replay -t < task_i d >
​ Replaying from a Task Programmatically
Specify the `task_id` and input parameters for the replay process.
Execute the replay command within a try-except block to handle potential errors.
Code
def replay (): """ Replay the crew execution from a specific task. """ task_id = '<task_id>' inputs = { "topic" : "CrewAI Training" } # This is optional; you can pass in the inputs you want to replay; otherwise, it uses the previous kickoff's inputs. try : YourCrewName_Crew().crew().replay( task_id = task_id, inputs = inputs) except subprocess.CalledProcessError as e: raise Exception ( f "An error occurred while replaying the crew: { e } " ) except Exception as e: raise Exception ( f "An unexpected error occurred: { e } " )
​ Conclusion
Was this page helpful?
Yes
No
