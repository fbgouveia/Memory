# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/gmail-trigger
- Raw SHA-256: `61acf297f0244ee1d1012ad9745e8c0764acfe1cb4e1c86f7d7fb5378a62dd28`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Gmail Trigger
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
Gmail Trigger
Copy page Copy page
Trigger automations when Gmail events occur (e.g., new emails, labels).
Copy page Copy page
​ Overview
​ Enabling the Gmail Trigger
Open your deployment in CrewAI AMP
Go to the Triggers tab
Locate Gmail and switch the toggle to enable
​ Example: Process new emails
@CrewBase class GmailProcessingCrew : @agent def parser ( self ) -> Agent: return Agent( config = self .agents_config[ 'parser' ], ) @task def parse_gmail_payload ( self ) -> Task: return Task( config = self .tasks_config[ 'parse_gmail_payload' ], agent = self .parser(), ) @task def act_on_email ( self ) -> Task: return Task( config = self .tasks_config[ 'act_on_email' ], agent = self .parser(), )
​ Testing Locally
# View all available triggers crewai triggers list # Simulate a Gmail trigger with realistic payload crewai triggers run gmail/new_email_received
​ Monitoring Executions
​ Troubleshooting
Ensure Gmail is connected in Tools & Integrations
Verify the Gmail Trigger is enabled on the Triggers tab
Test locally with crewai triggers run gmail/new_email_received to see the exact payload structure
Check the execution logs and confirm the payload is passed as crewai_trigger_payload
Remember: use crewai triggers run (not crewai run ) to simulate trigger execution
