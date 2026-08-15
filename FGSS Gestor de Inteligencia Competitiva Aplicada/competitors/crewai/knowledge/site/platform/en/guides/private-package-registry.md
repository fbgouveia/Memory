# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/private-package-registry
- Raw SHA-256: `54d748a358071709c5b0acfc39747b9b57a45771546537cbcfdcb5e8a5892713`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Private Package Registries
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
Private Package Registries
Copy page Copy page
Install private Python packages from authenticated PyPI registries in CrewAI AMP
Copy page Copy page
​ When You Need This
Tell UV where to find the package (an index URL)
Tell UV which packages come from that index (a source mapping)
Provide credentials so UV can authenticate during install
​ Step 1: Configure pyproject.toml
​ 1a. Declare the dependency
[ project ] dependencies = [ "crewai[tools]>=0.100.1,<1.0.0" , "my-private-package>=1.2.0" , ]
​ 1b. Define the index
[[ tool . uv . index ]] name = "my-private-registry" url = "https://pkgs.dev.azure.com/my-org/_packaging/my-feed/pypi/simple/" explicit = true
​ 1c. Map the package to the index
[ tool . uv . sources ] my-private-package = { index = "my-private-registry" }
​ Complete example
[ project ] name = "my-crew-project" version = "0.1.0" requires-python = ">=3.10,<=3.13" dependencies = [ "crewai[tools]>=0.100.1,<1.0.0" , "my-private-package>=1.2.0" , ] [ tool . crewai ] type = "crew" [[ tool . uv . index ]] name = "my-private-registry" url = "https://pkgs.dev.azure.com/my-org/_packaging/my-feed/pypi/simple/" explicit = true [ tool . uv . sources ] my-private-package = { index = "my-private-registry" }
uv lock
​ Step 2: Set Authentication Credentials
UV_INDEX_{UPPER_NAME}_USERNAME UV_INDEX_{UPPER_NAME}_PASSWORD
​ Registry Provider Reference
​ Setting Environment Variables in AMP
Web Interface
CLI Deployment
Log in to CrewAI AMP
Navigate to your automation
Open the Environment Variables tab
Add each variable ( UV_INDEX_*_USERNAME and UV_INDEX_*_PASSWORD ) with its value
# .env OPENAI_API_KEY = sk-... UV_INDEX_MY_PRIVATE_REGISTRY_USERNAME = token UV_INDEX_MY_PRIVATE_REGISTRY_PASSWORD = your-pat-here
crewai deploy create
​ How It All Fits Together
Build starts
UV resolves dependencies
UV authenticates
Packages install
Automation runs
​ Troubleshooting
​ Authentication Errors During Build
The UV_INDEX_* environment variable names match your index name exactly (uppercased, hyphens → underscores)
Credentials are set in AMP environment variables, not just in a local .env
Your token/PAT has the required read permissions for the package feed
The token hasn’t expired (especially relevant for AWS CodeArtifact)
​ Package Not Found
The index URL in pyproject.toml ends with /simple/
The [tool.uv.sources] entry maps the correct package name to the correct index name
The package is actually published to your private registry
Run uv lock locally with the same credentials to verify resolution works
​ Lock File Conflicts
export UV_INDEX_MY_PRIVATE_REGISTRY_USERNAME = token export UV_INDEX_MY_PRIVATE_REGISTRY_PASSWORD = your-pat uv lock
​ Related Guides
Prepare for Deployment
Deploy to AMP
Update Your Crew
