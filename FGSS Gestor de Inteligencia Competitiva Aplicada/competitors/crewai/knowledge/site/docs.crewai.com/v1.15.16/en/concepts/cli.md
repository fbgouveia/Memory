# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/cli
- Raw SHA-256: `69d90eee2fc10c60ac7d0aa4971fec73e277d2186cccbfc22971d2493fe470ed`

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
Navigation Core Concepts CLI
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
CLI
Copy page Copy page
Learn how to use the CrewAI CLI to interact with CrewAI.
Copy page Copy page
​ Overview
​ Installation
pip install crewai
​ Basic Usage
crewai [COMMAND] [OPTIONS] [ARGUMENTS]
​ Available Commands
​ 1. Create
crewai create [OPTIONS] TYPE NAME
TYPE : crew , flow , tool , skill , or template
NAME : Name of the project, tool handle, skill, or template
​ Crew
crewai create crew my_new_crew crewai create crew my_new_crew --classic
​ Flow
crewai create flow my_new_flow crewai create flow my_new_flow --declarative
​ Tool
crewai create tool my_tool
​ Skill
crewai create skill my-skill crewai create skill my-skill --no-project
​ Template
crewai create template my-template crewai create template my-template --output-dir custom_dir
​ Deprecated create aliases
​ Deprecated flag aliases
​ 2. Version
crewai version [OPTIONS]
--tools : (Optional) Show the installed version of CrewAI tools
crewai version crewai version --tools
​ 3. Train
crewai train [OPTIONS]
-n, --n-iterations INTEGER : Number of iterations to train the crew (default: 5)
-f, --filename TEXT : Path to a custom file for training (default: “trained_agents_data.pkl”)
crewai train -n 10 -f my_training_data.pkl
​ 4. Replay
crewai replay [OPTIONS]
-t, --task-id TEXT : Replay the crew from this task ID, including all subsequent tasks
crewai replay -t task_123456
​ 5. Log-tasks-outputs
crewai log-tasks-outputs
​ 6. Reset-memories
crewai reset-memories [OPTIONS]
-l, --long : Reset LONG TERM memory
-s, --short : Reset SHORT TERM memory
-e, --entities : Reset ENTITIES memory
-k, --kickoff-outputs : Reset LATEST KICKOFF TASK OUTPUTS
-kn, --knowledge : Reset KNOWLEDGE storage
-akn, --agent-knowledge : Reset AGENT KNOWLEDGE storage
-a, --all : Reset ALL memories
crewai reset-memories --long --short crewai reset-memories --all
​ 7. Test
crewai test [OPTIONS]
-n, --n-iterations INTEGER : Number of iterations to test the crew (default: 3)
-m, --model TEXT : LLM Model to run the tests on the Crew (default: “gpt-4o-mini”)
crewai test -n 5 -m gpt-3.5-turbo
​ 8. Run
crewai run
​ 9. Chat
crewai chat
{ "name" : "My Crew" , "agents" : [ "researcher" ], "tasks" : [], "chat_llm" : "openai/gpt-4o" }
@crew def crew ( self ) -> Crew: return Crew( agents = self .agents, tasks = self .tasks, process = Process.sequential, verbose = True , chat_llm = "gpt-4o" , # LLM for chat orchestration )
​ 10. Deploy
Authentication : You need to be authenticated to deploy to CrewAI AMP. You can login or create an account with: Terminal crewai login
Create a deployment : Once you are authenticated, you can create a deployment for your crew or flow from the root of your localproject. Terminal crewai deploy create Reads your local project configuration. Prompts you to confirm the environment variables (like OPENAI_API_KEY , SERPER_API_KEY ) found locally. These will be securely stored with the deployment on the Enterprise platform. Ensure your sensitive keys are correctly configured locally (e.g., in a .env file) before running this.
​ 11. Organization Management
crewai org [COMMAND] [OPTIONS]
​ Commands:
list : List all organizations you belong to
crewai org list
current : Display your currently active organization
crewai org current
switch : Switch to a specific organization
crewai org switch < organization_i d >
Create a deployment (continued): Links the deployment to the corresponding remote GitHub repository (it usually detects this automatically).
Deploy the Crew : Once you are authenticated, you can deploy your crew or flow to CrewAI AMP. Terminal crewai deploy push Initiates the deployment process on the CrewAI AMP platform. Upon successful initiation, it will output the Deployment created successfully! message along with the Deployment Name and a unique Deployment ID (UUID).
Deployment Status : You can check the status of your deployment with: Terminal crewai deploy status This fetches the latest deployment status of your most recent deployment attempt (e.g., Building Images for Crew , Deploy Enqueued , Online ).
Deployment Logs : You can check the logs of your deployment with: Terminal crewai deploy logs This streams the deployment logs to your terminal.
List deployments : You can list all your deployments with: Terminal crewai deploy list This lists all your deployments.
Delete a deployment : You can delete a deployment with: Terminal crewai deploy remove This deletes the deployment from the CrewAI AMP platform.
Help Command : You can get help with the CLI with: Terminal crewai deploy --help This shows the help message for the CrewAI Deploy CLI.
​ 11. Login
crewai login
A verification URL and short code are displayed in your terminal
Your browser opens to the verification URL
Enter/confirm the code to complete authentication
The OAuth2 provider and domain are configured via crewai config (defaults use login.crewai.com )
After successful login, the CLI also attempts to authenticate to the Tool Repository automatically
If you reset your configuration, run crewai login again to re-authenticate
​ 12. API Keys
​ Available LLM Providers
OpenAI
Groq
Anthropic
Google Gemini
SambaNova
​ Other Options
LiteLLM Providers
​ 13. Configuration Management
crewai config [COMMAND] [OPTIONS]
​ Commands:
list : Display all CLI configuration parameters
crewai config list
set : Set a CLI configuration parameter
crewai config set < ke y > < valu e >
reset : Reset all CLI configuration parameters to default values
crewai config reset
​ Available Configuration Parameters
enterprise_base_url : Base URL of the CrewAI AMP instance
oauth2_provider : OAuth2 provider used for authentication (e.g., workos, okta, auth0)
oauth2_audience : OAuth2 audience value, typically used to identify the target API or resource
oauth2_client_id : OAuth2 client ID issued by the provider, used during authentication requests
oauth2_domain : OAuth2 provider’s domain (e.g., your-org.auth0.com) used for issuing tokens
​ Examples
crewai config list
crewai config set enterprise_base_url https://my-enterprise.crewai.com
crewai config set oauth2_provider auth0
crewai config set oauth2_domain my-company.auth0.com
crewai config reset
​ 14. Trace Management
crewai traces [COMMAND]
​ Commands:
enable : Enable trace collection for crew/flow executions
crewai traces enable
disable : Disable trace collection for crew/flow executions
crewai traces disable
status : Show current trace collection status
crewai traces status
​ How Tracing Works
Explicit flag in code (highest priority - can enable OR disable): crew = Crew( agents = [ ... ], tasks = [ ... ], tracing = True ) # Always enable crew = Crew( agents = [ ... ], tasks = [ ... ], tracing = False ) # Always disable crew = Crew( agents = [ ... ], tasks = [ ... ]) # Check lower priorities (default) tracing=True will always enable tracing (overrides everything) tracing=False will always disable tracing (overrides everything) tracing=None or omitted will check lower priority settings
Environment variable (second priority): CREWAI_TRACING_ENABLED=true Checked only if tracing is not explicitly set to True or False in code Set to true or 1 to enable tracing
User preference (lowest priority): Terminal crewai traces enable Checked only if tracing is not set in code and CREWAI_TRACING_ENABLED is not set to true Running crewai traces enable is sufficient to enable tracing by itself
Set tracing=True in your Crew/Flow code, OR
Add CREWAI_TRACING_ENABLED=true to your .env file, OR
Run crewai traces enable
Set tracing=False in your Crew/Flow code (overrides everything), OR
Remove or set to false the CREWAI_TRACING_ENABLED env var, OR
Run crewai traces disable
Was this page helpful?
Yes
No
