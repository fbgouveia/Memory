# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/a2a-agent-delegation
- Raw SHA-256: `2866237a99282ac39250e0181269e91c8fa42e41d7019f31e19ce1ba309b1bd5`

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
Navigation Agent-to-Agent (A2A) Protocol
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
Agent-to-Agent (A2A) Protocol
Copy page Copy page
Agents delegate tasks to remote A2A agents and/or operate as A2A-compliant server agents.
Copy page Copy page
​ A2A Agent Delegation
​ How It Works
The Agent analyzes each task
It decides to either: Handle the task directly using its own capabilities Delegate to a remote A2A agent for specialized handling
If delegating, the agent communicates with the remote A2A agent through the protocol
Results are returned to the CrewAI workflow
​ Basic Configuration
from crewai import Agent, Crew, Task from crewai.a2a import A2AClientConfig agent = Agent( role = "Research Coordinator" , goal = "Coordinate research tasks efficiently" , backstory = "Expert at delegating to specialized research agents" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://example.com/.well-known/agent-card.json" , timeout = 120 , max_turns = 10 ) ) task = Task( description = "Research the latest developments in quantum computing" , expected_output = "A comprehensive research report" , agent = agent ) crew = Crew( agents = [agent], tasks = [task], verbose = True ) result = crew.kickoff()
​ Client Configuration Options
endpoint
auth
timeout
max_turns
response_model
fail_fast
trust_remote_completion_status
updates
accepted_output_modes
extensions
client_extensions
transport
transport_protocol
supported_transports
​ Authentication
Bearer Token
API Key
OAuth2
HTTP Basic
from crewai.a2a import A2AClientConfig from crewai.a2a.auth import BearerTokenAuth agent = Agent( role = "Secure Coordinator" , goal = "Coordinate tasks with secured agents" , backstory = "Manages secure agent communications" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://secure-agent.example.com/.well-known/agent-card.json" , auth = BearerTokenAuth( token = "your-bearer-token" ), timeout = 120 ) )
from crewai.a2a import A2AClientConfig from crewai.a2a.auth import APIKeyAuth agent = Agent( role = "API Coordinator" , goal = "Coordinate with API-based agents" , backstory = "Manages API-authenticated communications" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://api-agent.example.com/.well-known/agent-card.json" , auth = APIKeyAuth( api_key = "your-api-key" , location = "header" , # or "query" or "cookie" name = "X-API-Key" ), timeout = 120 ) )
from crewai.a2a import A2AClientConfig from crewai.a2a.auth import OAuth2ClientCredentials agent = Agent( role = "OAuth Coordinator" , goal = "Coordinate with OAuth-secured agents" , backstory = "Manages OAuth-authenticated communications" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://oauth-agent.example.com/.well-known/agent-card.json" , auth = OAuth2ClientCredentials( token_url = "https://auth.example.com/oauth/token" , client_id = "your-client-id" , client_secret = "your-client-secret" , scopes = [ "read" , "write" ] ), timeout = 120 ) )
from crewai.a2a import A2AClientConfig from crewai.a2a.auth import HTTPBasicAuth agent = Agent( role = "Basic Auth Coordinator" , goal = "Coordinate with basic auth agents" , backstory = "Manages basic authentication communications" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://basic-agent.example.com/.well-known/agent-card.json" , auth = HTTPBasicAuth( username = "your-username" , password = "your-password" ), timeout = 120 ) )
​ Multiple A2A Agents
from crewai.a2a import A2AClientConfig from crewai.a2a.auth import BearerTokenAuth agent = Agent( role = "Multi-Agent Coordinator" , goal = "Coordinate with multiple specialized agents" , backstory = "Expert at delegating to the right specialist" , llm = "gpt-4o" , a2a = [ A2AClientConfig( endpoint = "https://research.example.com/.well-known/agent-card.json" , timeout = 120 ), A2AClientConfig( endpoint = "https://data.example.com/.well-known/agent-card.json" , auth = BearerTokenAuth( token = "data-token" ), timeout = 90 ) ] )
​ Error Handling
from crewai.a2a import A2AClientConfig # Fail immediately on connection errors (default) agent = Agent( role = "Research Coordinator" , goal = "Coordinate research tasks" , backstory = "Expert at delegation" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://research.example.com/.well-known/agent-card.json" , fail_fast = True ) ) # Continue with available agents agent = Agent( role = "Multi-Agent Coordinator" , goal = "Coordinate with multiple agents" , backstory = "Expert at working with available resources" , llm = "gpt-4o" , a2a = [ A2AClientConfig( endpoint = "https://primary.example.com/.well-known/agent-card.json" , fail_fast = False ), A2AClientConfig( endpoint = "https://backup.example.com/.well-known/agent-card.json" , fail_fast = False ) ] )
If some agents fail, the LLM is informed which agents are unavailable and can delegate to working agents
If all agents fail, the LLM receives a notice about unavailable agents and handles the task directly
Connection errors are captured and included in the context for better decision-making
​ Update Mechanisms
Streaming (Default)
Polling
Push Notifications
from crewai.a2a import A2AClientConfig from crewai.a2a.updates import StreamingConfig agent = Agent( role = "Research Coordinator" , goal = "Coordinate research tasks" , backstory = "Expert at delegation" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://research.example.com/.well-known/agent-card.json" , updates = StreamingConfig() ) )
from crewai.a2a import A2AClientConfig from crewai.a2a.updates import PollingConfig agent = Agent( role = "Research Coordinator" , goal = "Coordinate research tasks" , backstory = "Expert at delegation" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://research.example.com/.well-known/agent-card.json" , updates = PollingConfig( interval = 2.0 , timeout = 300.0 , max_polls = 100 ) ) )
from crewai.a2a import A2AClientConfig from crewai.a2a.updates import PushNotificationConfig agent = Agent( role = "Research Coordinator" , goal = "Coordinate research tasks" , backstory = "Expert at delegation" , llm = "gpt-4o" , a2a = A2AClientConfig( endpoint = "https://research.example.com/.well-known/agent-card.json" , updates = PushNotificationConfig( url = " {base_url} /a2a/callback" , token = "your-validation-token" , timeout = 300.0 ) ) )
​ Exposing Agents as A2A Servers
​ Server Configuration
from crewai import Agent from crewai.a2a import A2AServerConfig agent = Agent( role = "Data Analyst" , goal = "Analyze datasets and provide insights" , backstory = "Expert data scientist with statistical analysis skills" , llm = "gpt-4o" , a2a = A2AServerConfig( url = "https://your-server.com" ) )
​ Server Configuration Options
name
description
version
skills
capabilities
default_input_modes
default_output_modes
url
protocol_version
provider
documentation_url
icon_url
additional_interfaces
security
security_schemes
supports_authenticated_extended_card
extended_skills
signing_config
server_extensions
push_notifications
transport
auth
preferred_transport
signatures
​ Combined Client and Server
from crewai import Agent from crewai.a2a import A2AClientConfig, A2AServerConfig agent = Agent( role = "Research Coordinator" , goal = "Coordinate research and serve analysis requests" , backstory = "Expert at delegation and analysis" , llm = "gpt-4o" , a2a = [ A2AClientConfig( endpoint = "https://specialist.example.com/.well-known/agent-card.json" , timeout = 120 ), A2AServerConfig( url = "https://your-server.com" ) ] )
​ File Inputs and Structured Output
​ Best Practices
Set Appropriate Timeouts
Limit Conversation Turns
Use Resilient Error Handling
Secure Your Credentials
Monitor Delegation Decisions
​ Supported Authentication Methods
Bearer Token - Simple token-based authentication
OAuth2 Client Credentials - OAuth2 flow for machine-to-machine communication
OAuth2 Authorization Code - OAuth2 flow requiring user authorization
API Key - Key-based authentication (header, query param, or cookie)
HTTP Basic - Username/password authentication
HTTP Digest - Digest authentication (requires httpx-auth package)
​ Learn More
A2A Protocol Documentation
A2A Sample Implementations
A2A Python SDK
Was this page helpful?
Yes
No
