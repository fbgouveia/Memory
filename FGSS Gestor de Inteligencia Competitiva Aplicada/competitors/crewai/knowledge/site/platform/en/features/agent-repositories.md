# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/agent-repositories
- Raw SHA-256: `a76808f588b0f3c84a6180c7c3643d7db05e310d8e40dbe00567466809b95b8f`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Build Agent Repositories
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
Agent Repositories
Copy page Copy page
Learn how to use Agent Repositories to share and reuse your agents across teams and projects
Copy page Copy page
​ Benefits of Agent Repositories
Standardization : Maintain consistent agent definitions across your organization
Reusability : Create an agent once and use it in multiple crews and projects
Governance : Implement organization-wide policies for agent configurations
Collaboration : Enable teams to share and build upon each other’s work
​ Creating and Use Agent Repositories
You must have an account at CrewAI, try the free plan .
Create agents with specific roles and goals for your workflows.
Configure tools and capabilities for each specialized assistant.
Deploy agents across projects via visual interface or API integration.
​ Loading Agents from Repositories
from crewai import Agent # Create an agent by loading it from a repository # The agent is loaded with all its predefined configurations researcher = Agent( from_repository = "market-research-agent" )
​ Overriding Repository Settings
researcher = Agent( from_repository = "market-research-agent" , goal = "Research the latest trends in AI development" , # Override the repository goal verbose = True # Add a setting not in the repository )
​ Example: Creating a Crew with Repository Agents
from crewai import Crew, Agent, Task # Load agents from repositories researcher = Agent( from_repository = "market-research-agent" ) writer = Agent( from_repository = "content-writer-agent" ) # Create tasks research_task = Task( description = "Research the latest trends in AI" , agent = researcher ) writing_task = Task( description = "Write a comprehensive report based on the research" , agent = writer ) # Create the crew crew = Crew( agents = [researcher, writer], tasks = [research_task, writing_task], verbose = True ) # Run the crew result = crew.kickoff()
​ Example: Using kickoff() with Repository Agents
from crewai import Agent from pydantic import BaseModel from typing import List # Define a structured output format class MarketAnalysis ( BaseModel ): key_trends: List[ str ] opportunities: List[ str ] recommendation: str # Load an agent from repository analyst = Agent( from_repository = "market-analyst-agent" , verbose = True ) # Get a free-form response result = analyst.kickoff( "Analyze the AI market in 2025" ) print (result.raw) # Access the raw response # Get structured output structured_result = analyst.kickoff( "Provide a structured analysis of the AI market in 2025" , response_format = MarketAnalysis ) # Access structured data print ( f "Key Trends: { structured_result.pydantic.key_trends } " ) print ( f "Recommendation: { structured_result.pydantic.recommendation } " )
​ Best Practices
Naming Convention : Use clear, descriptive names for your repository agents
Documentation : Include comprehensive descriptions for each agent
Tool Management : Ensure that tools referenced by repository agents are available in your environment
Access Control : Manage permissions to ensure only authorized team members can modify repository agents
​ Organization Management
# View current organization crewai org current # Switch to a different organization crewai org switch < org_i d > # List all available organizations crewai org list
