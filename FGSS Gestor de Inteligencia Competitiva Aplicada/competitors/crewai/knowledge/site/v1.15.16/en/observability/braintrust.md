# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/observability/braintrust
- Raw SHA-256: `107ed237d521783f0fb8004c35bf3031f7867b2eb3913c1ea6bb0d76a6d6f906`

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
Navigation Observability Braintrust
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
Braintrust
Copy page Copy page
Braintrust integration for CrewAI with OpenTelemetry tracing and evaluation
Copy page Copy page
​ Braintrust Integration
​ Get Started
​ Step 1: Install Dependencies
uv add braintrust[otel] crewai crewai-tools opentelemetry-instrumentation-openai opentelemetry-instrumentation-crewai python-dotenv
​ Step 2: Set Up Environment Variables
import os from getpass import getpass # Get your Braintrust credentials BRAINTRUST_API_KEY = getpass( "🔑 Enter your Braintrust API Key: " ) # Get API keys for services OPENAI_API_KEY = getpass( "🔑 Enter your OpenAI API key: " ) # Set environment variables os.environ[ "BRAINTRUST_API_KEY" ] = BRAINTRUST_API_KEY os.environ[ "BRAINTRUST_PARENT" ] = "project_name:crewai-demo" os.environ[ "OPENAI_API_KEY" ] = OPENAI_API_KEY
​ Step 3: Initialize OpenTelemetry with Braintrust
import os from typing import Any, Dict from braintrust.otel import BraintrustSpanProcessor from crewai import Agent, Crew, Task from crewai.llm import LLM from opentelemetry import trace from opentelemetry.instrumentation.crewai import CrewAIInstrumentor from opentelemetry.instrumentation.openai import OpenAIInstrumentor from opentelemetry.sdk.trace import TracerProvider def setup_tracing () -> None : """Setup OpenTelemetry tracing with Braintrust.""" current_provider = trace.get_tracer_provider() if isinstance (current_provider, TracerProvider): provider = current_provider else : provider = TracerProvider() trace.set_tracer_provider(provider) provider.add_span_processor(BraintrustSpanProcessor()) CrewAIInstrumentor().instrument( tracer_provider = provider) OpenAIInstrumentor().instrument( tracer_provider = provider) setup_tracing()
​ Step 4: Create a CrewAI Application
from crewai import Agent, Crew, Process, Task from crewai_tools import SerperDevTool def create_crew () -> Crew: """Create a crew with multiple agents for comprehensive tracing.""" llm = LLM( model = "gpt-4o-mini" ) search_tool = SerperDevTool() # Define agents with specific roles researcher = Agent( role = "Senior Research Analyst" , goal = "Uncover cutting-edge developments in AI and data science" , backstory = """You work at a leading tech think tank. Your expertise lies in identifying emerging trends. You have a knack for dissecting complex data and presenting actionable insights.""" , verbose = True , allow_delegation = False , llm = llm, tools = [search_tool], ) writer = Agent( role = "Tech Content Strategist" , goal = "Craft compelling content on tech advancements" , backstory = """You are a renowned Content Strategist, known for your insightful and engaging articles. You transform complex concepts into compelling narratives.""" , verbose = True , allow_delegation = True , llm = llm, ) # Create tasks for your agents research_task = Task( description = """Conduct a comprehensive analysis of the latest advancements in {topic} . Identify key trends, breakthrough technologies, and potential industry impacts.""" , expected_output = "Full analysis report in bullet points" , agent = researcher, ) writing_task = Task( description = """Using the insights provided, develop an engaging blog post that highlights the most significant {topic} advancements. Your post should be informative yet accessible, catering to a tech-savvy audience. Make it sound cool, avoid complex words so it doesn't sound like AI.""" , expected_output = "Full blog post of at least 4 paragraphs" , agent = writer, context = [research_task], ) # Instantiate your crew with a sequential process crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], verbose = True , process = Process.sequential ) return crew def run_crew (): """Run the crew and return results.""" crew = create_crew() result = crew.kickoff( inputs = { "topic" : "AI developments" }) return result # Run your crew if __name__ == "__main__" : # Instrumentation is already initialized above in this module result = run_crew() print (result)
​ Step 5: View Traces in Braintrust
Trace
Timeline
Thread
​ Step 6: Evaluate via SDK (Experiments)
# eval_crew.py from braintrust import Eval from autoevals import Levenshtein def evaluate_crew_task ( input_data ): """Task function that wraps our crew for evaluation.""" crew = create_crew() result = crew.kickoff( inputs = { "topic" : input_data[ "topic" ]}) return str (result) Eval( "AI Research Crew" , # Project name { "data" : lambda : [ { "topic" : "artificial intelligence trends 2024" }, { "topic" : "machine learning breakthroughs" }, { "topic" : "AI ethics and governance" }, ], "task" : evaluate_crew_task, "scores" : [Levenshtein], }, )
export BRAINTRUST_API_KEY = "YOUR_API_KEY" braintrust eval eval_crew.py
​ Key Features of Braintrust Integration
Comprehensive Tracing : Track all agent interactions, tool usage, and LLM calls
Performance Monitoring : Monitor execution times, token usage, and success rates
Experiment Tracking : Compare different crew configurations and models
Automated Evaluation : Set up custom evaluation metrics for crew outputs
Error Tracking : Monitor and debug failures across your crew executions
Cost Analysis : Track token usage and associated costs
​ Version Compatibility Information
Python 3.8+
CrewAI >= 0.86.0
Braintrust >= 0.1.0
OpenTelemetry SDK >= 1.31.0
​ References
Braintrust Documentation - Overview of the Braintrust platform
Braintrust CrewAI Integration - Official CrewAI integration guide
Braintrust Eval SDK - Run experiments via the SDK
CrewAI Documentation - Overview of the CrewAI framework
OpenTelemetry Docs - OpenTelemetry guide
Braintrust GitHub - Source code for Braintrust SDK
Was this page helpful?
Yes
No
