# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/tools-and-integrations
- Raw SHA-256: `b8c3446eec6acdf0c8f2aba6a29eb844f81cfa9bc881c1ea1061d36cd0c4803d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Build Tools & Integrations
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
Tools & Integrations
Copy page Copy page
Connect external apps and manage internal tools your agents can use.
Copy page Copy page
​ Overview
​ Explore
Integrations
Internal Tools
​ Agent Apps (Integrations)
Connect
Configure
Use in Agents
​ Connect your Account
Go to Integrations
Click Connect on the desired service
Complete the OAuth flow and grant scopes
Copy your Enterprise Token from Integration Settings
​ Install Integration Tools
uv add crewai-tools
​ Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Usage Example
from crewai import Agent, Task, Crew # Create an agent with Gmail capabilities email_agent = Agent( role = "Email Manager" , goal = "Manage and organize email communications" , backstory = "An AI assistant specialized in email management and communication." , apps = [ 'gmail' , 'gmail/send_email' ] # Using canonical name 'gmail' ) # Task to send an email email_task = Task( description = "Draft and send a follow-up email to john@example.com about the project update" , agent = email_agent, expected_output = "Confirmation that email was sent successfully" ) # Run the task crew = Crew( agents = [email_agent], tasks = [email_task] ) # Run the crew crew.kickoff()
​ Filtering Tools
from crewai import Agent, Task, Crew # Create agent with specific Gmail actions only gmail_agent = Agent( role = "Gmail Manager" , goal = "Manage gmail communications and notifications" , backstory = "An AI assistant that helps coordinate gmail communications." , apps = [ 'gmail/fetch_emails' ] # Using canonical name with specific action ) notification_task = Task( description = "Find the email from john@example.com" , agent = gmail_agent, expected_output = "Email found from john@example.com" ) crew = Crew( agents = [gmail_agent], tasks = [notification_task] )
​ Scoped Deployments (multi‑user orgs)
​ Catalog
​ Communication & Collaboration
Gmail — Manage emails and drafts
Slack — Workspace notifications and alerts
Microsoft — Office 365 and Teams integration
​ Project Management
Jira — Issue tracking and project management
ClickUp — Task and productivity management
Asana — Team task and project coordination
Notion — Page and database management
Linear — Software project and bug tracking
GitHub — Repository and issue management
​ Customer Relationship Management
Salesforce — CRM account and opportunity management
HubSpot — Sales pipeline and contact management
Zendesk — Customer support ticket management
​ Business & Finance
Stripe — Payment processing and customer management
Shopify — E‑commerce store and product management
​ Productivity & Storage
Google Sheets — Spreadsheet data synchronization
Google Calendar — Event and schedule management
Box — File storage and document management
​ Internal Tools
Create
Publish
Install
Name and description
Visibility (Private / Public)
Required environment variables
Version history and downloads
Team and role access
​ Related
Tool Repository
Webhook Automation
