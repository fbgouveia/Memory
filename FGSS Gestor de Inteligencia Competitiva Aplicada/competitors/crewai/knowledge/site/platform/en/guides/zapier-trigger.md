# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/zapier-trigger
- Raw SHA-256: `3195930a565c2b4d80bb461cad21587ee6c98fe3f64d6ec73dba68f13b90b832`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Zapier Trigger
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
Zapier Trigger
Copy page Copy page
Trigger CrewAI crews from Zapier workflows to automate cross-app workflows
Copy page Copy page
​ Prerequisites
A CrewAI AMP account
A Zapier account
A Slack account (for this specific example)
​ Step-by-Step Setup
Set Up the Slack Trigger
In Zapier, create a new Zap.
Choose Slack as your trigger app
Select New Pushed Message as the Trigger Event.
Connect your Slack account if you haven’t already.
Configure the CrewAI AMP Action
Add a new action step to your Zap.
Choose CrewAI+ as your action app and Kickoff as the Action Event
Connect your CrewAI AMP account
Connect your CrewAI AMP account.
Select the appropriate Crew for your workflow.
Configure the inputs for the Crew using the data from the Slack message.
Format the CrewAI AMP Output
Add another action step to format the text output from CrewAI AMP.
Use Zapier’s formatting tools to convert the Markdown output to HTML.
Send the Output via Email
Add a final action step to send the formatted output via email.
Choose your preferred email service (e.g., Gmail, Outlook).
Configure the email details, including recipient, subject, and body.
Insert the formatted CrewAI AMP output into the email body.
Kick Off the crew from Slack
Enter the text in your Slack channel
Select the 3 ellipsis button and then chose Push to Zapier
Select the crew and then Push to Kick Off
​ Tips for Success
Ensure that your CrewAI AMP inputs are correctly mapped from the Slack message.
Test your Zap thoroughly before turning it on to catch any potential issues.
Consider adding error handling steps to manage potential failures in the workflow.
