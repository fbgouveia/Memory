# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/azure-openai-setup
- Raw SHA-256: `595f4e03e5ed192a7786b53b153f37df0fb76e95a77b19163e06d86244453397`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Azure OpenAI Setup
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
Azure OpenAI Setup
Copy page Copy page
Configure Azure OpenAI with Crew Studio for enterprise LLM connections
Copy page Copy page
​ Setup Process
Access Azure AI Foundry
In Azure, go to Azure AI Foundry > select your Azure OpenAI deployment.
On the left menu, click Deployments . If you don’t have one, create a deployment with your desired model.
Once created, select your deployment and locate the Target URI and Key on the right side of the page. Keep this page open, as you’ll need this information.
Configure CrewAI AMP Connection
In another tab, open CrewAI AMP > LLM Connections . Name your LLM Connection, select Azure as the provider, and choose the same model you selected in Azure.
On the same page, add environment variables from step 3: One named AZURE_DEPLOYMENT_TARGET_URL (using the Target URI). The URL should look like this: https://your-deployment.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-08-01-preview Another named AZURE_API_KEY (using the Key).
Click Add Connection to save your LLM Connection.
Set Default Configuration
In CrewAI AMP > Settings > Defaults > Crew Studio LLM Settings , set the new LLM Connection and model as defaults.
Configure Network Access
Ensure network access settings: In Azure, go to Azure OpenAI > select your deployment . Navigate to Resource Management > Networking . Ensure that Allow access from all networks is enabled. If this setting is restricted, CrewAI may be blocked from accessing your Azure OpenAI endpoint.
​ Verification
​ Troubleshooting
Verify the Target URI format matches the expected pattern
Check that the API key is correct and has proper permissions
Ensure network access is configured to allow CrewAI connections
Confirm the deployment model matches what you’ve configured in CrewAI
