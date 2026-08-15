# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/outlook-trigger
- Raw SHA-256: `1e83c9f2b32d44d9d1a30200c70811a2aa7e9f7fa61583f87f384e6c480ade12`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Outlook Trigger
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
Outlook Trigger
Copy page Copy page
Launch automations from Outlook emails and calendar updates
Copy page Copy page
​ Overview
​ Enabling the Outlook Trigger
Open your deployment in CrewAI AMP
Go to the Triggers tab
Locate Outlook and switch the toggle to enable
Microsoft Outlook trigger connection
​ Example: Summarize a new email
from outlook_message_crew import OutlookMessageTrigger crew = OutlookMessageTrigger().crew() crew.kickoff({ "crewai_trigger_payload" : outlook_payload, })
​ Testing Locally
# View all available triggers crewai triggers list # Simulate an Outlook trigger with realistic payload crewai triggers run microsoft_outlook/email_received
​ Troubleshooting
Verify the Outlook connector is still authorized; the subscription must be renewed periodically
Test locally with crewai triggers run microsoft_outlook/email_received to see the exact payload structure
If attachments are missing, confirm the webhook subscription includes the includeResourceData flag
Review execution logs when events fail to match—cancellation payloads lack attendee lists by design and the crew should account for that
Remember: use crewai triggers run (not crewai run ) to simulate trigger execution
