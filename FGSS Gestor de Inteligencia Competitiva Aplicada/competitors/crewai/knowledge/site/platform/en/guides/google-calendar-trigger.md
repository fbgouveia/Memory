# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/google-calendar-trigger
- Raw SHA-256: `abfaf8c6549bdb4378870ee0d87964f20d6a660e7c0e6260e0ba962ddab2d82f`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Google Calendar Trigger
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
Google Calendar Trigger
Copy page Copy page
Kick off crews when Google Calendar events are created, updated, or cancelled
Copy page Copy page
​ Overview
​ Enabling the Google Calendar Trigger
Open your deployment in CrewAI AMP
Go to the Triggers tab
Locate Google Calendar and switch the toggle to enable
​ Example: Summarize meeting details
from calendar_event_crew import GoogleCalendarEventTrigger crew = GoogleCalendarEventTrigger().crew() result = crew.kickoff({ "crewai_trigger_payload" : calendar_payload, }) print (result.raw)
​ Testing Locally
# View all available triggers crewai triggers list # Simulate a Google Calendar trigger with realistic payload crewai triggers run google_calendar/event_changed
​ Monitoring Executions
​ Troubleshooting
Ensure the correct Google account is connected and the trigger is enabled
Test locally with crewai triggers run google_calendar/event_changed to see the exact payload structure
Confirm your workflow handles all-day events (payloads use start.date and end.date instead of timestamps)
Check execution logs if reminders or attendee arrays are missing—calendar permissions can limit fields in the payload
Remember: use crewai triggers run (not crewai run ) to simulate trigger execution
