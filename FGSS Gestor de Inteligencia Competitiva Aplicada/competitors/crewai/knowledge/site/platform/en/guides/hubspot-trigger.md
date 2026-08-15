# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/hubspot-trigger
- Raw SHA-256: `88038f1be476ed226a1a107ab9331dc95313f0fb9b20d4f14025736e862a2560`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers HubSpot Trigger
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
HubSpot Trigger
Copy page Copy page
Trigger CrewAI crews directly from HubSpot Workflows
Copy page Copy page
​ Prerequisites
A CrewAI AMP account
A HubSpot account with the HubSpot Workflows feature
​ Setup Steps
Connect your HubSpot account with CrewAI AMP
Log in to your CrewAI AMP account > Triggers - Select HubSpot from the list of available triggers - Choose the HubSpot account you want to connect with CrewAI AMP - Follow the on-screen prompts to authorize CrewAI AMP access to your HubSpot account - A confirmation message will appear once HubSpot is successfully connected with CrewAI AMP
Create a HubSpot Workflow
Log in to your HubSpot account > Automations > Workflows > New workflow
Select the workflow type that fits your needs (e.g., Start from scratch) - In the workflow builder, click the Plus (+) icon to add a new action. - Choose Integrated apps > CrewAI > Kickoff a Crew . - Select the Crew you want to initiate. - Click Save to add the action to your workflow
Use Crew results with other actions
After the Kickoff a Crew step, click the Plus (+) icon to add a new action. - For example, to send an internal email notification, choose Communications > Send internal email notification - In the Body field, click Insert data , select View properties or action outputs from > Action outputs > Crew Result to include Crew data in the email
Configure any additional actions as needed - Review your workflow steps to ensure everything is set up correctly - Activate the workflow
