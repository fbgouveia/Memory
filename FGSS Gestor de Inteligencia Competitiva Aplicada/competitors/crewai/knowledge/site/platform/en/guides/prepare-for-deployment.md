# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/prepare-for-deployment
- Raw SHA-256: `401450cf7372d7ff6ba781804c427ce557277362cb731c8484fa98fc88eba920`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Prepare for Deployment
Getting Started
CrewAI AMP
Build
Automations
Studio
Marketplace
Agent Repositories
Tools & Integrations
PII Redaction for Traces
A2A on AMP
Operate
Traces
Webhook Streaming
Hallucination Guardrail
Flow HITL Management
Manage
Single Sign-On (SSO)
Role-Based Access Control (RBAC)
Secrets Manager
Integration Docs
Asana Integration
Box Integration
ClickUp Integration
Databricks Integration
GitHub Integration
Gmail Integration
Google Calendar Integration
Google Contacts Integration
Google Docs Integration
Google Drive Integration
Google Sheets Integration
Google Slides Integration
HubSpot Integration
Jira Integration
Linear Integration
Microsoft Excel Integration
Microsoft OneDrive Integration
Microsoft Outlook Integration
Microsoft SharePoint Integration
Microsoft Teams Integration
Microsoft Word Integration
Notion Integration
Salesforce Integration
Shopify Integration
Slack Integration
Snowflake Integration
Stripe Integration
Zendesk Integration
Triggers
Triggers Overview
Gmail Trigger
Google Calendar Trigger
Google Drive Trigger
Outlook Trigger
OneDrive Trigger
Microsoft Teams Trigger
Slack Trigger
HubSpot Trigger
Salesforce Trigger
Zapier Trigger
How-To Guides
Build Crew
Prepare for Deployment
Deploy to AMP
Monorepo Deployments
Private Package Registries
Kickoff Crew
Conversational Flow Chat API
Update Crew
Enable Crew Studio
OpenTelemetry Export
Datadog Integration
Azure OpenAI Setup
Vertex AI with Workload Identity
Tool Repository
Custom MCP Servers
React Component Export
Team Management
HITL Workflows
Webhook Automation
Resources
FAQs
Prepare for Deployment
Copy page Copy page
Ensure your Crew or Flow is ready for deployment to CrewAI AMP
Copy page Copy page
​ Understanding Automations
A Crew : A standalone team of AI agents working together on tasks
A Flow : An orchestrated workflow that can combine multiple crews, direct LLM calls, and procedural logic
​ Crews vs Flows: Key Differences
Crew Projects
Flow Projects
​ Project Structure Reference
​ Crew Project Structure
my_crew/ ├── .gitignore ├── pyproject.toml # Must have type = "crew" ├── README.md ├── .env ├── uv.lock # REQUIRED for deployment ├── crew.jsonc # Crew settings, tasks, process, inputs ├── agents/ │ └── researcher.jsonc # Agent definitions ├── tools/ # Optional custom:<name> tools ├── knowledge/ └── skills/
​ Flow Project Structure
my_flow/ ├── .gitignore ├── pyproject.toml # Must have type = "flow" ├── README.md ├── .env ├── uv.lock # REQUIRED for deployment └── src/ └── my_flow/ ├── __init__.py ├── main.py # Entry point with kickoff() function + Flow class ├── crews/ # Embedded crews folder │ └── poem_crew/ │ ├── __init__.py │ ├── poem_crew.py # Crew with @CrewBase decorator │ └── config/ │ ├── agents.yaml │ └── tasks.yaml └── tools/ ├── __init__.py └── custom_tool.py
​ Pre-Deployment Checklist
​ 1. Verify pyproject.toml Configuration
For Crews
For Flows
[ tool . crewai ] type = "crew"
[ tool . crewai ] type = "flow"
​ 2. Ensure uv.lock File Exists
# Generate or update the lock file uv lock # Verify it exists ls -la uv.lock
uv lock git add uv.lock git commit -m "Add uv.lock for deployment" git push
​ 3. Validate the Crew Definition
JSON-first Crews
Classic Python/YAML Crews
{ "name" : "Research Crew" , "agents" : [ "researcher" ], "tasks" : [ { "name" : "research_task" , "description" : "Research {topic}." , "expected_output" : "A concise report." , "agent" : "researcher" } ], "inputs" : { "topic" : "AI Agents" } }
from crewai import Agent, Crew, Process, Task from crewai.project import CrewBase, agent, crew, task from crewai.agents.agent_builder.base_agent import BaseAgent from typing import List @CrewBase class MyCrew (): """My crew description""" agents: List[BaseAgent] tasks: List[Task] @agent def my_agent ( self ) -> Agent: return Agent( config = self .agents_config[ 'my_agent' ], # type: ignore[index] verbose = True ) @task def my_task ( self ) -> Task: return Task( config = self .tasks_config[ 'my_task' ] # type: ignore[index] ) @crew def crew ( self ) -> Crew: return Crew( agents = self .agents, tasks = self .tasks, process = Process.sequential, verbose = True , )
​ 4. Check Project Entry Points
JSON-first Crews
Classic Crews
For Flows
crewai run
# src/my_crew/main.py from my_crew.crew import MyCrew def run (): """Run the crew.""" inputs = { 'topic' : 'AI in Healthcare' } result = MyCrew().crew().kickoff( inputs = inputs) return result if __name__ == "__main__" : run()
# src/my_flow/main.py from crewai.flow import Flow, listen, start from my_flow.crews.poem_crew.poem_crew import PoemCrew class MyFlow ( Flow ): @start () def begin ( self ): # Flow logic here result = PoemCrew().crew().kickoff( inputs = { ... }) return result def kickoff (): """Run the flow.""" MyFlow().kickoff() if __name__ == "__main__" : kickoff()
​ 5. Prepare Environment Variables
LLM API keys ready (OpenAI, Anthropic, Google, etc.)
Tool API keys if using external tools (Serper, etc.)
​ Quick Validation Commands
# 1. Check project type in pyproject.toml grep -A2 "\[tool.crewai\]" pyproject.toml # 2. Verify uv.lock exists ls -la uv.lock || echo "ERROR: uv.lock missing! Run 'uv lock'" # 3. For JSON-first crews, verify crew.jsonc and agents/ exist ([ -f crew.jsonc ] || [ -f crew.json ]) || echo "No crew.jsonc or crew.json found" test -d agents || echo "No agents/ directory found" # 4. For classic Crews - verify crew.py exists ls -la src/ * /crew.py 2> /dev/null || echo "No crew.py (expected for Crews)" # 5. For Flows - verify crews/ folder exists ls -la src/ * /crews/ 2> /dev/null || echo "No crews/ folder (expected for Flows)" # 6. For classic Python crews - check for CrewBase usage grep -r "@CrewBase" . --include= "*.py"
​ Common Setup Mistakes
​ Next Steps
Deploy to AMP
