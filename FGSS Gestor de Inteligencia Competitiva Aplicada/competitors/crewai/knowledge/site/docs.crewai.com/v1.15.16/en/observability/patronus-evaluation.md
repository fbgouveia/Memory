# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/patronus-evaluation
- Raw SHA-256: `8d54ef3406bdb294846c30c4d2330f1e40534b929c1f185fd59491ce4a47e24a`

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
Navigation Observability Patronus AI Evaluation
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
Patronus AI Evaluation
Copy page Copy page
Monitor and evaluate CrewAI agent performance using Patronus AI’s comprehensive evaluation platform for LLM outputs and agent behaviors.
Copy page Copy page
​ Patronus AI Evaluation
​ Overview
​ Key Features
Automated Evaluation : Real-time assessment of agent outputs and behaviors
Custom Criteria : Define specific evaluation criteria tailored to your use cases
Performance Monitoring : Track agent performance metrics over time
Quality Assurance : Ensure consistent output quality across different scenarios
Safety & Compliance : Monitor for potential issues and policy violations
​ Evaluation Tools
PatronusEvalTool : Allows agents to select the most appropriate evaluator and criteria for the evaluation task.
PatronusPredefinedCriteriaEvalTool : Uses predefined evaluator and criteria specified by the user.
PatronusLocalEvaluatorTool : Uses custom function evaluators defined by the user.
​ Installation
uv add patronus
export PATRONUS_API_KEY = "your_patronus_api_key"
​ Steps to Get Started
Install Patronus : Install the Patronus package using the command above.
Set Up API Key : Set your Patronus API key as an environment variable.
Choose the Right Tool : Select the appropriate Patronus evaluation tool based on your needs.
Configure the Tool : Configure the tool with the necessary parameters.
​ Examples
​ Using PatronusEvalTool
from crewai import Agent, Task, Crew from crewai_tools import PatronusEvalTool # Initialize the tool patronus_eval_tool = PatronusEvalTool() # Define an agent that uses the tool coding_agent = Agent( role = "Coding Agent" , goal = "Generate high quality code and verify that the output is code" , backstory = "An experienced coder who can generate high quality python code." , tools = [patronus_eval_tool], verbose = True , ) # Example task to generate and evaluate code generate_code_task = Task( description = "Create a simple program to generate the first N numbers in the Fibonacci sequence. Select the most appropriate evaluator and criteria for evaluating your output." , expected_output = "Program that generates the first N numbers in the Fibonacci sequence." , agent = coding_agent, ) # Create and run the crew crew = Crew( agents = [coding_agent], tasks = [generate_code_task]) result = crew.kickoff()
​ Using PatronusPredefinedCriteriaEvalTool
from crewai import Agent, Task, Crew from crewai_tools import PatronusPredefinedCriteriaEvalTool # Initialize the tool with predefined criteria patronus_eval_tool = PatronusPredefinedCriteriaEvalTool( evaluators = [{ "evaluator" : "judge" , "criteria" : "contains-code" }] ) # Define an agent that uses the tool coding_agent = Agent( role = "Coding Agent" , goal = "Generate high quality code" , backstory = "An experienced coder who can generate high quality python code." , tools = [patronus_eval_tool], verbose = True , ) # Example task to generate code generate_code_task = Task( description = "Create a simple program to generate the first N numbers in the Fibonacci sequence." , expected_output = "Program that generates the first N numbers in the Fibonacci sequence." , agent = coding_agent, ) # Create and run the crew crew = Crew( agents = [coding_agent], tasks = [generate_code_task]) result = crew.kickoff()
​ Using PatronusLocalEvaluatorTool
from crewai import Agent, Task, Crew from crewai_tools import PatronusLocalEvaluatorTool from patronus import Client, EvaluationResult import random # Initialize the Patronus client client = Client() # Register a custom evaluator @client.register_local_evaluator ( "random_evaluator" ) def random_evaluator ( ** kwargs ): score = random.random() return EvaluationResult( score_raw = score, pass_ = score >= 0.5 , explanation = "example explanation" , ) # Initialize the tool with the custom evaluator patronus_eval_tool = PatronusLocalEvaluatorTool( patronus_client = client, evaluator = "random_evaluator" , evaluated_model_gold_answer = "example label" , ) # Define an agent that uses the tool coding_agent = Agent( role = "Coding Agent" , goal = "Generate high quality code" , backstory = "An experienced coder who can generate high quality python code." , tools = [patronus_eval_tool], verbose = True , ) # Example task to generate code generate_code_task = Task( description = "Create a simple program to generate the first N numbers in the Fibonacci sequence." , expected_output = "Program that generates the first N numbers in the Fibonacci sequence." , agent = coding_agent, ) # Create and run the crew crew = Crew( agents = [coding_agent], tasks = [generate_code_task]) result = crew.kickoff()
​ Parameters
​ PatronusEvalTool
​ PatronusPredefinedCriteriaEvalTool
evaluators : Required. A list of dictionaries containing the evaluator and criteria to use. For example: [{"evaluator": "judge", "criteria": "contains-code"}] .
​ PatronusLocalEvaluatorTool
patronus_client : Required. The Patronus client instance.
evaluator : Optional. The name of the registered local evaluator to use. Default is an empty string.
evaluated_model_gold_answer : Optional. The gold answer to use for evaluation. Default is an empty string.
​ Usage
evaluated_model_input : The agent’s task description in simple text.
evaluated_model_output : The agent’s output of the task.
evaluated_model_retrieved_context : The agent’s context.
​ Conclusion
Was this page helpful?
Yes
No
