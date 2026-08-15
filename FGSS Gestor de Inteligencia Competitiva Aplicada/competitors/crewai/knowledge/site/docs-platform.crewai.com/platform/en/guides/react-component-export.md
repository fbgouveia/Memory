# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/react-component-export
- Raw SHA-256: `b30a2dd0977bed07612c5fbd4ed503421b9652494f8452d2b9e6b3fdb88b8d62`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides React Component Export
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
React Component Export
Copy page Copy page
Learn how to export and integrate CrewAI AMP React components into your applications
Copy page Copy page
​ Exporting a React Component
Export the Component
​ Setting Up Your React Environment
Install Node.js
Download and install Node.js from the official website: https://nodejs.org/
Choose the LTS (Long Term Support) version for stability.
Create a new React project
Open Command Prompt or PowerShell
Navigate to the directory where you want to create your project
Run the following command to create a new React project: npx create-react-app my-crew-app
Change into the project directory: cd my-crew-app
Install necessary dependencies
npm install react-dom
Create the CrewLead component
Move the downloaded file CrewLead.jsx into the src folder of your project,
Modify your App.js to use the CrewLead component
Open src/App.js
Replace its contents with something like this:
import React from 'react' ; import CrewLead from './CrewLead' ; function App () { return ( < div className = "App" > < CrewLead baseUrl = "YOUR_API_BASE_URL" bearerToken = "YOUR_BEARER_TOKEN" /> </ div > ); } export default App ;
Replace YOUR_API_BASE_URL and YOUR_BEARER_TOKEN with the actual values for your API.
Start the development server
In your project directory, run: npm start
This will start the development server, and your default web browser should open automatically to http://localhost:3000 , where you’ll see your React app running.
​ Customization
​ Next Steps
Customize the component styling to match your application’s design
Add additional props for configuration
Integrate with your application’s state management
Add error handling and loading states
