# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/deploy-to-amp
- Raw SHA-256: `b181f49ad0688b826a5c2bfa9d09e0617758bb1e6a392fe001556ae9af035884`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Deploy to AMP
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
Deploy to AMP
Copy page Copy page
Deploy your Crew or Flow to CrewAI AMP
Copy page Copy page
​ Prerequisites
Project Ready for Deployment
GitHub Repository
​ Option 1: Deploy Using CrewAI CLI
Install CrewAI CLI
pip install crewai[tools]
Authenticate with the Enterprise Platform
# If you already have a CrewAI AMP account, or want to create one: crewai login
Display a URL and a unique device code
Open your browser to the authentication page
Prompt you to confirm the device
Complete the authentication process
Create a Deployment
crewai deploy create
Detect your GitHub repository information
Identify environment variables in your local .env file
Securely transfer these variables to the Enterprise platform
Create a new deployment with a unique identifier
Deployment created successfully! Name: your_project_name Deployment ID: 01234567-89ab-cdef-0123-456789abcdef Current Status: Deploy Enqueued
Monitor Deployment Progress
crewai deploy status
crewai deploy logs
​ Additional CLI Commands
# List all your deployments crewai deploy list # Get the status of your deployment crewai deploy status # View the logs of your deployment crewai deploy logs # Push updates after code changes crewai deploy push # Remove a deployment crewai deploy remove < deployment_i d >
​ Option 2: Deploy Directly via Web Interface
Pushing to GitHub
Connecting GitHub to CrewAI AMP
Log in to CrewAI AMP
Click on the button “Connect GitHub”
Select the Repository
Set Environment Variables
You can add variables individually or in bulk
Enter your environment variables in KEY=VALUE format (one per line)
Deploy Your Crew
Click the “Deploy” button to start the deployment process
You can monitor the progress through the progress bar
The first deployment typically takes around 1 minute
Your crew’s unique URL
A Bearer token to protect your crew API
A “Delete” button if you need to remove the deployment
​ Option 3: Redeploy Using API (CI/CD Integration)
Get Your Personal Access Token
Go to app.crewai.com
Click on Settings → Account → Personal Access Token
Generate a new token and copy it securely
Store this token as a secret in your CI/CD system
Find Your Automation UUID
Go to Automations in your CrewAI AMP dashboard
Select your existing automation/crew
Click on Additional Details
Copy the UUID - this identifies your specific crew deployment
Trigger Redeployment via API
curl -i -X POST \ -H "Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN" \ https://app.crewai.com/crewai_plus/api/v1/crews/YOUR-AUTOMATION-UUID/deploy # HTTP/2 200 # content-type: application/json # # { # "uuid": "your-automation-uuid", # "status": "Deploy Enqueued", # "public_url": "https://your-crew-deployment.crewai.com", # "token": "your-bearer-token" # }
GitHub Actions Integration Example
name : Deploy CrewAI Automation on : push : branches : [ main ] pull_request : types : [ labeled ] release : types : [ published ] jobs : deploy : runs-on : ubuntu-latest if : | (github.event_name == 'push' && github.ref == 'refs/heads/main') || (github.event_name == 'pull_request' && contains(github.event.pull_request.labels.*.name, 'deploy')) || (github.event_name == 'release') steps : - name : Trigger CrewAI Redeployment run : | curl -X POST \ -H "Authorization: Bearer ${{ secrets.CREWAI_PAT }}" \ https://app.crewai.com/crewai_plus/api/v1/crews/${{ secrets.CREWAI_AUTOMATION_UUID }}/deploy
​ Interact with Your Deployed Automation
REST API : The platform generates a unique HTTPS endpoint with these key routes: /inputs : Lists the required input parameters /kickoff : Initiates an execution with provided inputs /status/{kickoff_id} : Checks the execution status
Web Interface : Visit app.crewai.com to access: Status tab : View deployment information, API endpoint details, and authentication token Run tab : Visual representation of your crew’s structure Executions tab : History of all executions Metrics tab : Performance analytics Traces tab : Detailed execution insights
​ Trigger an Execution
Click on your crew’s name to open its details
Select “Trigger Crew” from the management interface
Enter the required inputs in the modal that appears
Monitor progress as the execution moves through the pipeline
​ Monitoring and Analytics
Execution Management : Track active and completed runs
Traces : Detailed breakdowns of each execution
Metrics : Token usage, execution times, and costs
Timeline View : Visual representation of task sequences
​ Advanced Features
Environment Variables Management : Securely store and manage API keys
LLM Connections : Configure integrations with various LLM providers
Custom Tools Repository : Create, share, and install tools
Crew Studio : Build crews through a chat interface without writing code
​ Troubleshooting Deployment Failures
​ Build Failures
​ Missing uv.lock File
uv lock git add uv.lock git commit -m "Add uv.lock for deployment" git push
​ Wrong Project Structure
JSON-first Crews : Keep crew.jsonc or crew.json and agents/ at the project root
Classic Crews : Use src/project_name/main.py with a run() entry point
Flows : Use src/project_name/main.py with a kickoff() entry point
​ Missing CrewBase Decorator in a Classic Crew
from crewai.project import CrewBase, agent, crew, task @CrewBase # This decorator is REQUIRED class YourCrew (): """Your crew description""" @agent def my_agent ( self ) -> Agent: return Agent( config = self .agents_config[ 'my_agent' ], # type: ignore[index] verbose = True ) # ... rest of crew definition
​ Incorrect pyproject.toml Type
# For Crew projects: [ tool . crewai ] type = "crew" # For Flow projects: [ tool . crewai ] type = "flow"
​ Runtime Failures
​ LLM Connection Failures
Verify your LLM provider’s API key is correctly set in environment variables
Ensure the environment variable names match what your code expects
Test locally with the exact same environment variables before deploying
​ Crew Execution Errors
Check the execution logs in the AMP dashboard (Traces tab)
Verify all tools have required API keys configured
For JSON-first crews, validate crew.jsonc and the referenced files in agents/
For classic crews, ensure agents.yaml and tasks.yaml are valid
Need Help?
