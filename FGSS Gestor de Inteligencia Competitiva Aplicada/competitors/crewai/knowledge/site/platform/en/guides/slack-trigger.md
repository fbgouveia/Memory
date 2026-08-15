# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/slack-trigger
- Raw SHA-256: `2b7ab3c92f0c9d05cc9e2dd907ad2422370b0e69eb548c1fa4bf2057cdfe361b`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Slack Trigger
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
Slack Trigger
Copy page Copy page
Trigger CrewAI crews directly from Slack using slash commands
Copy page Copy page
​ Prerequisites
CrewAI Slack trigger installed and connected to your Slack workspace
At least one crew configured in CrewAI
​ Setup Steps
Ensure the CrewAI Slack trigger is set up
Open your Slack channel
Navigate to the channel where you want to kickoff the crew.
Type the slash command “ /kickoff ” to initiate the crew kickoff process.
You should see a “ Kickoff crew ” appear as you type:
Press Enter or select the “ Kickoff crew ” option. A dialog box titled “ Kickoff an AI Crew ” will appear.
Select the crew you want to start
In the dropdown menu labeled “ Select of the crews online: ”, choose the crew you want to start.
In the example below, “ prep-for-meeting ” is selected:
If your crew requires any inputs, click the “ Add Inputs ” button to provide them. The “ Add Inputs ” button is shown in the example above but is not yet clicked.
Click Kickoff and wait for the crew to complete
Once you’ve selected the crew and added any necessary inputs, click “ Kickoff ” to start the crew.
The crew will start executing and you will see the results in the Slack channel.
​ Tips
Make sure you have the necessary permissions to use the /kickoff command in your Slack workspace.
If you don’t see your desired crew in the dropdown, ensure it’s properly configured and online in CrewAI.
