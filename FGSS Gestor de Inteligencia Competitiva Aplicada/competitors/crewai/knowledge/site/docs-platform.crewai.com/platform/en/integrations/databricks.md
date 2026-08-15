# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/databricks
- Raw SHA-256: `544aed45c330fdc7132c494282ed5e978779ecdc6732b459c4c187133b2baeb1`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Databricks Integration
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
Databricks Integration
Copy page Copy page
Connect CrewAI agents to Databricks Genie, SQL, Unity Catalog Functions, and Vector Search through Databricks managed MCP servers.
Copy page Copy page
​ Overview
​ Key Capabilities
Genie
Databricks SQL
Unity Catalog Functions
Vector Search
​ Prerequisites
A CrewAI AMP account with an active subscription
A Databricks workspace with the capabilities you want to expose (Genie Spaces, SQL warehouses, Unity Catalog functions, or Vector Search indexes)
Appropriate Unity Catalog privileges on the underlying objects
Your Databricks workspace hostname (e.g. your-workspace.cloud.databricks.com )
​ Databricks Managed MCP Servers
​ Connecting Databricks in CrewAI AMP
Open Tools & Integrations
Configure a server
Workspace Host — your Databricks workspace hostname (e.g. my-workspace.cloud.databricks.com ).
Genie — the Genie Space ID to query.
Unity Catalog Functions — the catalog and schema that contain your functions.
Vector Search — the catalog and schema that contain your index.
Databricks SQL — no additional identifiers; queries run against your workspace’s SQL warehouses.
Choose an authentication method
Use OAuth — Connect securely using OAuth 2.0. Each user authenticates individually, and Databricks issues tokens scoped to the capability ( genie , sql , unity-catalog , or vector-search ). CrewAI handles the authorization flow and refreshes tokens automatically.
Use personal access token — Authenticate with a Databricks personal access token . Use a least-privileged identity to limit exposure.
Authenticate
​ Using Databricks Tools in Your Crews
Assign tools to agents in your crews just like any other CrewAI tool.
Manage visibility to control which team members can use each connection.
Edit or remove any connection at any time from the Connections list.
​ Learn More
Databricks Managed MCP Servers
Custom MCP Servers in CrewAI
Need Help?
