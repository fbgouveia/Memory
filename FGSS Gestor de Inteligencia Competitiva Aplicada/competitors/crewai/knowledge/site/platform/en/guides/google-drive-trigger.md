# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/google-drive-trigger
- Raw SHA-256: `0bdcd78b1df63961f34f85db67b3ea3679555a3b2f5c876b2bfbd4ef3153c171`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Google Drive Trigger
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
Google Drive Trigger
Copy page Copy page
Respond to Google Drive file events with automated crews
Copy page Copy page
​ Overview
​ Enabling the Google Drive Trigger
Open your deployment in CrewAI AMP
Go to the Triggers tab
Locate Google Drive and switch the toggle to enable
​ Example: Summarize file activity
from drive_file_crew import GoogleDriveFileTrigger crew = GoogleDriveFileTrigger().crew() crew.kickoff({ "crewai_trigger_payload" : drive_payload, })
​ Testing Locally
# View all available triggers crewai triggers list # Simulate a Google Drive trigger with realistic payload crewai triggers run google_drive/file_changed
​ Monitoring Executions
​ Troubleshooting
Verify Google Drive is connected and the trigger toggle is enabled
Test locally with crewai triggers run google_drive/file_changed to see the exact payload structure
If a payload is missing permission data, ensure the connected account has access to the file or folder
The trigger sends file IDs only; use the Drive API if you need to fetch binary content during the crew run
Remember: use crewai triggers run (not crewai run ) to simulate trigger execution
