# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/kickoff-crew
- Raw SHA-256: `fbea2ba790ee7736f2a36071501dc1d886b05e3d2bfff4ca34f27996bea9863c`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Kickoff Crew
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
Kickoff Crew
Copy page Copy page
Kickoff a Crew on CrewAI AMP
Copy page Copy page
​ Overview
​ Method 1: Using the Web Interface
​ Step 1: Navigate to Your Deployed Crew
Log in to CrewAI AMP
Click on the crew name from your projects list
You’ll be taken to the crew’s detail page
​ Step 2: Initiate Execution
​ Option A: Quick Kickoff
Click the Kickoff link in the Test Endpoints section
Enter the required input parameters for your crew in the JSON editor
Click the Send Request button
​ Option B: Using the Visual Interface
Click the Run tab in the crew detail page
Enter the required inputs in the form fields
Click the Run Crew button
​ Step 3: Monitor Execution Progress
You’ll receive a response containing a kickoff_id - copy this ID
This ID is essential for tracking your execution
​ Step 4: Check Execution Status
Click the “Status” endpoint in the Test Endpoints section
Paste the kickoff_id into the designated field
Click the “Get Status” button
Current execution state ( running , completed , etc.)
Details about which tasks are in progress
Any outputs produced so far
​ Step 5: View Final Results
The status will change to completed
You can view the full execution results and outputs
For a more detailed view, check the Executions tab in the crew detail page
​ Method 2: Using the API
​ Authentication
curl -H "Authorization: Bearer YOUR_CREW_TOKEN" https://your-crew-url.crewai.com
​ Checking Crew Health
curl -H "Authorization: Bearer YOUR_CREW_TOKEN" https://your-crew-url.crewai.com
Healthy%
​ Step 1: Retrieve Required Inputs
curl -X GET \ -H "Authorization: Bearer YOUR_CREW_TOKEN" \ https://your-crew-url.crewai.com/inputs
{ "inputs" : [ "topic" , "current_year" ] }
​ Step 2: Kickoff Execution
curl -X POST \ -H "Content-Type: application/json" \ -H "Authorization: Bearer YOUR_CREW_TOKEN" \ -d '{"inputs": {"topic": "AI Agent Frameworks", "current_year": "2025"}}' \ https://your-crew-url.crewai.com/kickoff
{ "kickoff_id" : "abcd1234-5678-90ef-ghij-klmnopqrstuv" }
​ Step 3: Check Execution Status
curl -X GET \ -H "Authorization: Bearer YOUR_CREW_TOKEN" \ https://your-crew-url.crewai.com/status/abcd1234-5678-90ef-ghij-klmnopqrstuv
​ Handling Executions
​ Long-Running Executions
Consider implementing a polling mechanism to check status periodically
Use webhooks (if available) for notification when execution completes
Implement error handling for potential timeouts
​ Execution Context
Inputs provided at kickoff
Environment variables configured during deployment
Any state maintained between tasks
​ Debugging Failed Executions
Check the “Executions” tab for detailed logs
Review the “Traces” tab for step-by-step execution details
Look for LLM responses and tool usage in the trace details
Need Help?
