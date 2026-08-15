# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/custom-mcp-server
- Raw SHA-256: `fe646d528200b443d0bcaf06d910f30b7a7c10156d311c8b939057853f8a256a`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Custom MCP Servers
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
Custom MCP Servers
Copy page Copy page
Connect your own MCP servers to CrewAI AMP with public access, API key authentication, or OAuth 2.0
Copy page Copy page
​ Prerequisites
CrewAI AMP Account
MCP Server URL
​ Adding a Custom MCP Server
Open Tools & Integrations
Start adding a Custom MCP Server
Fill in the basic information
Name (required): A descriptive name for your MCP server (e.g., “My Internal Tools Server”).
Description : An optional summary of what this MCP server provides.
Server URL (required): The full URL to your MCP server endpoint (e.g., https://my-server.example.com/mcp ).
Choose an authentication method
Add custom headers (optional)
Create the connection
​ Authentication Methods
​ No Authentication
​ Authentication Token
​ OAuth 2.0
​ Setting Up OAuth 2.0 Step by Step
Register the redirect URI
Enter endpoints and credentials
Configure token exchange method
Enable PKCE (recommended)
Create and authorize
​ Using Your Custom MCP Server
Assign tools to agents in your crews just like any other CrewAI tool.
Manage visibility to control which team members can use the server.
Edit or remove the connection at any time from the Connections list.
Need Help?
