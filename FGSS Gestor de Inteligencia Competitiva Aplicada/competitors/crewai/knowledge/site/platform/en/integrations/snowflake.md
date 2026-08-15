# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/snowflake
- Raw SHA-256: `6ffbea4fade5ac20ca1ebc65e6d92902a1581f8fe5c84687fd4d1583b196a41a`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Snowflake Integration
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
Snowflake Integration
Copy page Copy page
Connect CrewAI agents to Snowflake Cortex Analyst, Cortex Search, and SQL execution through the Snowflake-managed MCP server.
Copy page Copy page
​ Overview
​ Key Capabilities
Cortex Analyst
Cortex Search
SQL Execution
​ Prerequisites
A CrewAI AMP account with an active subscription
A Snowflake account with access to Cortex AI features
A Snowflake-managed MCP server configured with the tools you want to expose
Appropriate Snowflake privileges (USAGE/SELECT) on the MCP server and its underlying objects
​ Setting Up the Snowflake MCP Server
CREATE MCP SERVER my_mcp_server FROM SPECIFICATION $$ tools: - name : "sales_analyst" type : "CORTEX_ANALYST" identifier: "MY_DATABASE.MY_SCHEMA.sales_semantic_view" description : "Answer questions about sales metrics" - name : "docs_search" type : "CORTEX_SEARCH_SERVICE_QUERY" identifier: "MY_DATABASE.MY_SCHEMA.support_docs_search" description : "Search internal support documentation" - name : "run_sql" type : "SQL_EXECUTION" description : "Execute read-only SQL queries" $$;
​ Connecting Snowflake in CrewAI AMP
Open Tools & Integrations
Provide connection details
Choose an authentication method
Use OAuth — Connect securely using OAuth 2.0 for token-based authentication without sharing your credentials. CrewAI handles the full authorization flow and refreshes tokens automatically. Copy the Redirect URI shown in the form ( https://oauth.crewai.com/oauth/add ) and register it as an authorized redirect URI in your Snowflake OAuth security integration .
Use personal access token — Authenticate using a programmatic access token generated from your Snowflake account settings. Assign a least-privileged role to the token to limit exposure.
Authenticate
​ Using Snowflake Tools in Your Crews
Assign tools to agents in your crews just like any other CrewAI tool.
Manage visibility to control which team members can use the connection.
Edit or remove the connection at any time from the Connections list.
​ Learn More
Snowflake-managed MCP Server
Custom MCP Servers in CrewAI
Need Help?
