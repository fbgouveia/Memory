# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/using-annotations
- Raw SHA-256: `dc3c6b3a0986ef63a05b049a677d88ee7f70d1f90cc7b254b4a687b3fe0ba4b8`

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
Navigation Learn Using Annotations in crew.py
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
Using Annotations in crew.py
Copy page Copy page
Learn how to use classic Python annotations to structure agents, tasks, and components in CrewAI
Copy page Copy page
​ Introduction
​ Available Annotations
@CrewBase : Used to decorate the main crew class.
@agent : Decorates methods that define and return Agent objects.
@task : Decorates methods that define and return Task objects.
@crew : Decorates the method that creates and returns the Crew object.
@llm : Decorates methods that initialize and return Language Model objects.
@tool : Decorates methods that initialize and return Tool objects.
@callback : Used for defining callback methods.
@output_json : Used for methods that output JSON data.
@output_pydantic : Used for methods that output Pydantic models.
@cache_handler : Used for defining cache handling methods.
​ Usage Examples
​ 1. Crew Base Class
@CrewBase class LinkedinProfileCrew (): """LinkedinProfile crew""" agents_config = 'config/agents.yaml' tasks_config = 'config/tasks.yaml'
Configuration bootstrapping: looks for agents_config and tasks_config (defaulting to config/agents.yaml and config/tasks.yaml ) beside the class file, loads them at instantiation, and safely falls back to empty dicts if files are missing.
Decorator orchestration: keeps memoized references to every method marked with @agent , @task , @before_kickoff , or @after_kickoff so they are instantiated once per crew and executed in declaration order.
Hook wiring: automatically attaches the preserved kickoff hooks to the Crew object returned by the @crew method, making them run before and after .kickoff() .
MCP integration: when the class defines mcp_server_params , get_mcp_tools() lazily starts an MCP server adapter, hydrates the declared tools, and an internal after-kickoff hook stops the adapter. See MCP overview for adapter configuration details.
​ 2. Tool Definition
@tool def myLinkedInProfileTool ( self ): return LinkedInProfileTool()
​ 3. LLM Definition
@llm def groq_llm ( self ): api_key = os.getenv( 'api_key' ) return ChatGroq( api_key = api_key, temperature = 0 , model_name = "mixtral-8x7b-32768" )
​ 4. Agent Definition
@agent def researcher ( self ) -> Agent: return Agent( config = self .agents_config[ 'researcher' ] )
​ 5. Task Definition
@task def research_task ( self ) -> Task: return Task( config = self .tasks_config[ 'research_linkedin_task' ], agent = self .researcher() )
​ 6. Crew Creation
@crew def crew ( self ) -> Crew: """Creates the LinkedinProfile crew""" return Crew( agents = self .agents, tasks = self .tasks, process = Process.sequential, verbose = True )
​ Classic YAML Configuration
researcher : role : > LinkedIn Profile Senior Data Researcher goal : > Uncover detailed LinkedIn profiles based on provided name {name} and domain {domain} Generate a Dall-E image based on domain {domain} backstory : > You're a seasoned researcher with a knack for uncovering the most relevant LinkedIn profiles. Known for your ability to navigate LinkedIn efficiently, you excel at gathering and presenting professional information clearly and concisely. allow_delegation : False verbose : True llm : groq_llm tools : - myLinkedInProfileTool - mySerperDevTool - myDallETool
​ Best Practices
Consistent Naming : Use clear and consistent naming conventions for your methods. For example, agent methods could be named after their roles (e.g., researcher, reporting_analyst).
Environment Variables : Use environment variables for sensitive information like API keys.
Flexibility : Design your crew to be flexible by allowing easy addition or removal of agents and tasks.
YAML-Code Correspondence : In classic projects, ensure that the names and structures in your YAML files correspond correctly to the decorated methods in your Python code.
Was this page helpful?
Yes
No
