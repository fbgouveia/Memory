# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/monorepo-deployments
- Raw SHA-256: `60509c0851c6d9ae094eb809fed9e33268af292a7aae8b232c040108745d5e80`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Monorepo Deployments
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
Monorepo Deployments
Copy page Copy page
Deploy a Crew or Flow from a subfolder in a larger repository
Copy page Copy page
​ When to Use This
company-ai/ |-- uv.lock |-- packages/ | `-- shared_tools/ `-- crews/ |-- support_agent/ | |-- pyproject.toml | |-- crew.jsonc | `-- agents/ | `-- support_agent.jsonc `-- research_flow/ |-- pyproject.toml `-- src/ `-- research_flow/ `-- main.py
crews/support_agent
​ What the Working Directory Controls
Project validation, including pyproject.toml , JSON crew files, and any classic Crew or Flow entry point
Dependency installation with uv
The running process working directory
The CREW_ROOT_DIR environment variable
​ Supported Sources
A connected GitHub repository
A Git repository configured in AMP
A ZIP upload
​ Configure a New Deployment
Open Deploy from Code
Select the repository, branch, or ZIP file
Open Advanced settings
Enter the working directory
crews/support_agent
Deploy
​ Configure an Existing Deployment
Open the deployment settings
Turn off auto-deploy if needed
Set the working directory
crews/support_agent
Redeploy
​ Path Rules
​ Lock Files and UV Workspaces
JSON-first crew: crew.jsonc or crew.json , plus agents/
Classic crew or Flow: src/ with the expected Python entry point
Project lock file
Workspace lock file
company-ai/ `-- crews/ `-- support_agent/ |-- pyproject.toml |-- uv.lock |-- crew.jsonc `-- agents/ `-- support_agent.jsonc
company-ai/ |-- uv.lock |-- packages/ | `-- shared_tools/ `-- crews/ `-- support_agent/ |-- pyproject.toml |-- crew.jsonc `-- agents/ `-- support_agent.jsonc
​ Troubleshooting
​ Working Directory Not Found
​ Missing pyproject.toml
​ Missing uv.lock or poetry.lock
​ Auto-Deploy Is Unavailable
Deploy to AMP
