# Documentation Index

- Source: https://docs.crewai.com/en/guides/advanced/customizing-prompts
- Raw SHA-256: `4245024b7ad1a50187d151e969eaf73b5c364d103c1e4f41a9fb25d3f0289d8f`

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
Navigation Advanced Customizing Prompts
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
Advanced Customizing Prompts Fingerprinting
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
Customizing Prompts
Copy page Copy page
Dive deeper into low-level prompt customization for CrewAI, enabling super custom and complex use cases for different models and languages.
Copy page Copy page
​ Why Customize Prompts?
Optimize for specific LLMs – Different models (such as GPT-4, Claude, or Llama) thrive with prompt formats tailored to their unique architectures.
Change the language – Build agents that operate exclusively in languages beyond English, handling nuances with precision.
Specialize for complex domains – Adapt prompts for highly specialized industries like healthcare, finance, or legal.
Adjust tone and style – Make agents more formal, casual, creative, or analytical.
Support super custom use cases – Utilize advanced prompt structures and formatting to meet intricate, project-specific requirements.
​ Understanding CrewAI’s Prompt System
Agent templates – Govern each agent’s approach to their assigned role.
Prompt slices – Control specialized behaviors such as tasks, tool usage, and output structure.
Error handling – Direct how agents respond to failures, exceptions, or timeouts.
Tool-specific prompts – Define detailed instructions for how tools are invoked or utilized.
​ Understanding Default System Instructions
​ What CrewAI Automatically Injects
​ For Agents Without Tools
"I MUST use these formats, my job depends on it!"
​ For Agents With Tools
"IMPORTANT: Use the following format in your response: Thought: you should always think about what to do Action: the action to take, only one name of [tool_names] Action Input: the input to the action, just a simple JSON object...
​ For Structured Outputs (JSON/Pydantic)
"Ensure your final answer contains only the content in the following format: {output_format} Ensure the final output does not include any code block markers like ```json or ```python."
​ Viewing the Complete System Prompt
from crewai import Agent, Crew, Task from crewai.utilities.prompts import Prompts # Create your agent agent = Agent( role = "Data Analyst" , goal = "Analyze data and provide insights" , backstory = "You are an expert data analyst with 10 years of experience." , verbose = True ) # Create a sample task task = Task( description = "Analyze the sales data and identify trends" , expected_output = "A detailed analysis with key insights and trends" , agent = agent ) # Create the prompt generator prompt_generator = Prompts( agent = agent, has_tools = len (agent.tools) > 0 , use_system_prompt = agent.use_system_prompt ) # Generate and inspect the actual prompt generated_prompt = prompt_generator.task_execution() # Print the complete system prompt that will be sent to the LLM if "system" in generated_prompt: print ( "=== SYSTEM PROMPT ===" ) print (generated_prompt[ "system" ]) print ( " \n === USER PROMPT ===" ) print (generated_prompt[ "user" ]) else : print ( "=== COMPLETE PROMPT ===" ) print (generated_prompt[ "prompt" ]) # You can also see how the task description gets formatted print ( " \n === TASK CONTEXT ===" ) print ( f "Task Description: { task.description } " ) print ( f "Expected Output: { task.expected_output } " )
​ Overriding Default Instructions
​ Option 1: Custom Templates (Recommended)
from crewai import Agent # Define your own system template without default instructions custom_system_template = """You are {role} . {backstory} Your goal is: {goal} Respond naturally and conversationally. Focus on providing helpful, accurate information.""" custom_prompt_template = """Task: {input} Please complete this task thoughtfully.""" agent = Agent( role = "Research Assistant" , goal = "Help users find accurate information" , backstory = "You are a helpful research assistant." , system_template = custom_system_template, prompt_template = custom_prompt_template, use_system_prompt = True # Use separate system/user messages )
​ Option 2: Custom Prompt File
{ "slices" : { "no_tools" : " \n Provide your best answer in a natural, conversational way." , "tools" : " \n You have access to these tools: {tools} \n\n Use them when helpful, but respond naturally." , "formatted_task_instructions" : "Format your response as: {output_format}" } }
crew = Crew( agents = [agent], tasks = [task], prompt_file = "custom_prompts.json" , verbose = True )
from crewai.utilities.i18n import get_i18n i18n = get_i18n( "custom_prompts.json" ) format_slice = i18n.slice( "format" ) tool_prompt = i18n.tools( "ask_question" )
​ Option 3: Disable System Prompts for o1 Models
agent = Agent( role = "Analyst" , goal = "Analyze data" , backstory = "Expert analyst" , use_system_prompt = False # Disables system prompt separation )
​ Debugging with Observability Tools
​ Best Practices for Production
Always inspect generated prompts before deploying to production
Use custom templates when you need full control over prompt content
Integrate observability tools for ongoing prompt monitoring (see Observability docs )
Test with different LLMs as default instructions may work differently across models
Document your prompt customizations for team transparency
​ Best Practices for Managing Prompt Files
Keep files separate – Store your customized prompts in dedicated JSON files outside your main codebase.
Version control – Track changes within your repository, ensuring clear documentation of prompt adjustments over time.
Organize by model or language – Use naming schemes like prompts_llama.json or prompts_es.json to quickly identify specialized configurations.
Document changes – Provide comments or maintain a README detailing the purpose and scope of your customizations.
Minimize alterations – Only override the specific slices you genuinely need to adjust, keeping default functionality intact for everything else.
​ The Simplest Way to Customize Prompts
Craft a JSON file with your updated prompt slices.
Reference that file via the prompt_file parameter in your Crew.
​ Example: Basic Prompt Customization
{ "slices" : { "format" : "When responding, follow this structure: \n\n THOUGHTS: Your step-by-step thinking \n ACTION: Any tool you're using \n RESULT: Your final answer or conclusion" } }
from crewai import Agent, Crew, Task, Process # Create agents and tasks as normal researcher = Agent( role = "Research Specialist" , goal = "Find information on quantum computing" , backstory = "You are a quantum physics expert" , verbose = True ) research_task = Task( description = "Research quantum computing applications" , expected_output = "A summary of practical applications" , agent = researcher ) # Create a crew with your custom prompt file crew = Crew( agents = [researcher], tasks = [research_task], prompt_file = "path/to/custom_prompts.json" , verbose = True ) # Run the crew result = crew.kickoff()
​ Optimizing for Specific Models
​ Example: Llama 3.3 Prompting Template
from crewai import Agent, Crew, Task, Process from crewai_tools import DirectoryReadTool, FileReadTool # Define templates for system, user (prompt), and assistant (response) messages system_template = """<|begin_of_text|><|start_header_id|>system<|end_header_id|> {{ .System }} <|eot_id|>""" prompt_template = """<|start_header_id|>user<|end_header_id|> {{ .Prompt }} <|eot_id|>""" response_template = """<|start_header_id|>assistant<|end_header_id|> {{ .Response }} <|eot_id|>""" # Create an Agent using Llama-specific layouts principal_engineer = Agent( role = "Principal Engineer" , goal = "Oversee AI architecture and make high-level decisions" , backstory = "You are the lead engineer responsible for critical AI systems" , verbose = True , llm = "groq/llama-3.3-70b-versatile" , # Using the Llama 3 model system_template = system_template, prompt_template = prompt_template, response_template = response_template, tools = [DirectoryReadTool(), FileReadTool()] ) # Define a sample task engineering_task = Task( description = "Review AI implementation files for potential improvements" , expected_output = "A summary of key findings and recommendations" , agent = principal_engineer ) # Create a Crew for the task llama_crew = Crew( agents = [principal_engineer], tasks = [engineering_task], process = Process.sequential, verbose = True ) # Execute the crew result = llama_crew.kickoff() print (result.raw)
​ Conclusion
Was this page helpful?
Yes
No
