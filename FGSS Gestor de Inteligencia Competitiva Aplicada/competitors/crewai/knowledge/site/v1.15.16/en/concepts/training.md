# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/training
- Raw SHA-256: `7797383ea784d8ef59f95b3174d1eb0bf99a334c3f6beb1adee40f3bfec63e82`

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
Navigation Core Concepts Training
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
Training
Copy page Copy page
Learn how to train your CrewAI agents by giving them feedback early on and get consistent results.
Copy page Copy page
​ Overview
​ Training Your Crew Using the CLI
Open your terminal or command prompt.
Navigate to the directory where your CrewAI project is located.
Run the following command:
crewai train -n < n_iteration s > -f < filename.pk l >
​ Training your Crew programmatically
Define the number of iterations for training.
Specify the input parameters for the training process.
Execute the training command within a try-except block to handle potential errors.
n_iterations = 2 inputs = { "topic" : "CrewAI Training" } filename = "your_model.pkl" try : YourCrewName_Crew().crew().train( n_iterations = n_iterations, inputs = inputs, filename = filename ) except Exception as e: raise Exception ( f "An error occurred while training the crew: { e } " )
​ How trained data is used by agents
​ Training data flow
​ During training runs
On each iteration, the system records for every agent: initial_output : the agent’s first answer human_feedback : your inline feedback when prompted improved_output : the agent’s follow-up answer after feedback
This data is stored in a working file named training_data.pkl keyed by the agent’s internal ID and iteration.
While training is active, the agent automatically appends your prior human feedback to its prompt to enforce those instructions on subsequent attempts within the training session. Training is interactive: tasks set human_input = true , so running in a non-interactive environment will block on user input.
​ After training completes
When train(...) finishes, CrewAI evaluates the collected training data per agent and produces a consolidated result containing: suggestions : clear, actionable instructions distilled from your feedback and the difference between initial/improved outputs quality : a 0–10 score capturing improvement final_summary : a step-by-step set of action items for future tasks
These consolidated results are saved to the filename you pass to train(...) (default via CLI is trained_agents_data.pkl ). Entries are keyed by the agent’s role so they can be applied across sessions.
During normal (non-training) execution, each agent automatically loads its consolidated suggestions and appends them to the task prompt as mandatory instructions. This gives you consistent improvements without changing your agent definitions.
​ File summary
training_data.pkl (ephemeral, per-session): Structure: agent_id -> { iteration_number: { initial_output, human_feedback, improved_output } } Purpose: capture raw data and human feedback during training Location: saved in the current working directory (CWD)
trained_agents_data.pkl (or your custom filename): Structure: agent_role -> { suggestions: string[], quality: number, final_summary: string } Purpose: persist consolidated guidance for future runs Location: written to the CWD by default; use -f to set a custom (including absolute) path
​ Small Language Model Considerations
​ Limitations of Small Models in Training Evaluation
JSON Output Accuracy
Evaluation Quality
Instruction Following
Consistency
​ Recommendations for Training
Best Practice
Small Model Usage
from crewai import Agent, Crew, Task, LLM # Recommended minimum for training evaluation llm = LLM( model = "mistral/open-mistral-7b" ) # Better options for reliable training evaluation llm = LLM( model = "anthropic/claude-3-sonnet-20240229-v1:0" ) llm = LLM( model = "gpt-4o" ) # Use this LLM with your agents agent = Agent( role = "Training Evaluator" , goal = "Provide accurate training feedback" , llm = llm )
# Using a smaller model (expect some limitations) llm = LLM( model = "huggingface/microsoft/Phi-3-mini-4k-instruct" )
​ Key Points to Note
Positive Integer Requirement: Ensure that the number of iterations ( n_iterations ) is a positive integer. The code will raise a ValueError if this condition is not met.
Filename Requirement: Ensure that the filename ends with .pkl . The code will raise a ValueError if this condition is not met.
Error Handling: The code handles subprocess errors and unexpected exceptions, providing error messages to the user.
Trained guidance is applied at prompt time; it does not modify your Python/YAML agent configuration.
Agents automatically load trained suggestions from a file named trained_agents_data.pkl located in the current working directory. If you trained to a different filename, pass that path with Crew(trained_agents_file="my_custom_trained.pkl") , set CREWAI_TRAINED_AGENTS_FILE , or use crewai run -f my_custom_trained.pkl .
You can change the output filename when calling crewai train with -f/--filename . Absolute paths are supported if you want to save outside the CWD.
Was this page helpful?
Yes
No
