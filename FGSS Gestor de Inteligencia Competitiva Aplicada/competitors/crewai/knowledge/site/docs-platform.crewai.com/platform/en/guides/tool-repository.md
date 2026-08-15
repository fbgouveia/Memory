# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/tool-repository
- Raw SHA-256: `5cc1441552d7067d3c9573123bd88bc1bc8299b57457ac922dfbeca19ba0df9f`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Tool Repository
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
Tool Repository
Copy page Copy page
Using the Tool Repository to manage your tools
Copy page Copy page
​ Overview
Private : accessible only within your organization (default)
Public : accessible to all CrewAI users if published with the --public flag
​ Prerequisites
A CrewAI AMP account
CrewAI CLI installed
uv>=0.5.0 installed. Check out how to upgrade
Git installed and configured
Access permissions to publish or install tools in your CrewAI AMP organization
​ Installing Tools
crewai tool install < tool-nam e >
from your_tool.tool import YourTool custom_tool = YourTool() researcher = Agent( role = 'Market Research Analyst' , goal = 'Provide up-to-date market analysis of the AI industry' , backstory = 'An expert analyst with a keen eye for market trends.' , tools = [custom_tool], verbose = True )
​ Adding other packages after installing a tool
crewai tool install my-tool
crewai uv add requests
crewai uv sync
crewai uv remove requests
​ Creating and Publishing Tools
crewai tool create < tool-nam e >
git init git add . git commit -m "Initial version"
crewai tool publish
crewai tool publish --public
​ Updating Tools
Modify the tool locally
Update the version in pyproject.toml (e.g., from 0.1.0 to 0.1.1 )
Commit the changes and publish
git commit -m "Update version to 0.1.1" crewai tool publish
​ Deleting Tools
Go to CrewAI AMP
Navigate to Tools
Select the tool
Click Delete
​ Security Checks
Need Help?
