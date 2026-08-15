# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/microsoft-teams-trigger
- Raw SHA-256: `434f945b7dc72287f901ccd8a87d20a441110d42f9c844d1ec457f4ef20fb116`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Microsoft Teams Trigger
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
Microsoft Teams Trigger
Copy page Copy page
Kick off crews from Microsoft Teams chat activity
Copy page Copy page
​ Overview
​ Enabling the Microsoft Teams Trigger
Open your deployment in CrewAI AMP
Go to the Triggers tab
Locate Microsoft Teams and switch the toggle to enable
Microsoft Teams trigger connection
​ Example: Summarize a new chat thread
from teams_chat_created_crew import MicrosoftTeamsChatTrigger crew = MicrosoftTeamsChatTrigger().crew() result = crew.kickoff({ "crewai_trigger_payload" : teams_payload, }) print (result.raw)
​ Testing Locally
# View all available triggers crewai triggers list # Simulate a Microsoft Teams trigger with realistic payload crewai triggers run microsoft_teams/teams_message_created
​ Troubleshooting
Ensure the Teams connection is active; it must be refreshed if the tenant revokes permissions
Test locally with crewai triggers run microsoft_teams/teams_message_created to see the exact payload structure
Confirm the webhook subscription in Microsoft 365 is still valid if payloads stop arriving
Review execution logs for payload shape mismatches—Graph notifications may omit fields when a chat is private or restricted
Remember: use crewai triggers run (not crewai run ) to simulate trigger execution
