# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/onedrive-trigger
- Raw SHA-256: `b9552d6cc0e78bef5ef5259d9308d1f58a847c5cc6a2c5c9a88bc8c87be27b6d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers OneDrive Trigger
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
OneDrive Trigger
Copy page Copy page
Automate responses to OneDrive file activity
Copy page Copy page
​ Overview
​ Enabling the OneDrive Trigger
Open your deployment in CrewAI AMP
Go to the Triggers tab
Locate OneDrive and switch the toggle to enable
Microsoft OneDrive trigger connection
​ Example: Audit file permissions
from onedrive_file_crew import OneDriveFileTrigger crew = OneDriveFileTrigger().crew() crew.kickoff({ "crewai_trigger_payload" : onedrive_payload, })
​ Testing Locally
# View all available triggers crewai triggers list # Simulate a OneDrive trigger with realistic payload crewai triggers run microsoft_onedrive/file_changed
​ Troubleshooting
Ensure the connected account has permission to read the file metadata included in the webhook
Test locally with crewai triggers run microsoft_onedrive/file_changed to see the exact payload structure
If the trigger fires but the payload is missing permissions , confirm the site-level sharing settings allow Graph to return this field
For large tenants, filter notifications upstream so the crew only runs on relevant directories
Remember: use crewai triggers run (not crewai run ) to simulate trigger execution
