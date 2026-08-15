# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/rbac
- Raw SHA-256: `68db58afe2a6371688dd097aadd8bf45cc7d718ae5b3f36be9a37d015d0eb833`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Manage Role-Based Access Control (RBAC)
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
Role-Based Access Control (RBAC)
Copy page Copy page
Control access to crews, tools, and data with roles, scopes, and granular permissions.
Copy page Copy page
​ Overview
Feature permissions — control what each role can do across the platform (manage, read, or no access)
Entity-level permissions — fine-grained access on individual automations, environment variables, LLM connections, and Git repositories
​ Users and Roles
Use predefined roles (Owner, Member)
Create custom roles tailored to specific permissions
Assign roles at any time through the settings panel
Open Roles settings
Choose a role type
Assign to members
​ Predefined Roles
​ Configuration summary
​ Feature Permissions Matrix
Manage — full read/write access (create, edit, delete)
Read — view-only access
No access — feature is hidden/inaccessible
​ Deploying from GitHub or Zip
​ Deploy from GitHub
crews_dashboards : at least Read — required to access the automations dashboard where deployments are created
Git repository access (if entity-level RBAC for Git repositories is enabled): the user’s role must be granted access to the specific Git repository via entity-level permissions
studio_projects : Manage — if building the crew in Studio before deploying
​ Deploy from Zip
crews_dashboards : at least Read — required to access the automations dashboard
Zip deployments enabled : the organization must not have disabled zip deployments in organization settings
​ Quick Reference: Minimum Permissions for Deployment
​ Automation‑level Access Control (Entity Permissions)
​ Automation Visibility
Keeping sensitive or experimental automations private
Managing visibility across large teams or external collaborators
Testing automations in isolated contexts
Open Visibility tab
Set visibility
Whitelist access
Save and verify
​ Private visibility: access outcomes
​ Deployment Permission Types
​ Entity-level RBAC for Other Resources
​ Common Role Patterns
​ Developer Role
​ Viewer / Stakeholder Role
​ Ops / Platform Admin Role
Need Help?
