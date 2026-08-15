# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/traces
- Raw SHA-256: `2d09439984f8fe3e337824eccd57c863847325d5fff94e09bd51be4d8dbb4468`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Operate Traces
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
Traces
Copy page Copy page
Using Traces to monitor your Crews
Copy page Copy page
​ Overview
​ What are Traces?
Agent thoughts and reasoning
Task execution details
Tool usage and outputs
Token consumption metrics
Execution times
Cost estimates
​ Accessing Traces
Navigate to the Traces Tab
Select an Execution
​ Understanding the Trace Interface
​ 1. Execution Summary
Total Tokens : Number of tokens consumed across all tasks
Prompt Tokens : Tokens used in prompts to the LLM
Completion Tokens : Tokens generated in LLM responses
Requests : Number of API calls made
Execution Time : Total duration of the crew run
Estimated Cost : Approximate cost based on token usage
​ 2. Tasks & Agents
Task name and agent assignment
Agents and LLMs used for each task
Status (completed/failed)
Individual execution time of the task
​ 3. Final Output
​ 4. Execution Timeline
​ 5. Detailed Task View
Task Key : Unique identifier for the task
Task ID : Technical identifier in the system
Status : Current state (completed/running/failed)
Agent : Which agent performed the task
LLM : Language model used for this task
Start/End Time : When the task began and completed
Execution Time : Duration of this specific task
Task Description : What the agent was instructed to do
Expected Output : What output format was requested
Input : Any input provided to this task from previous tasks
Output : The actual result produced by the agent
​ Using Traces for Debugging
Identify Failure Points
Failed tasks
Unexpected agent decisions
Tool usage errors
Misinterpreted instructions
Optimize Performance
Tasks that took longer than expected
Excessive token usage
Redundant tool operations
Unnecessary API calls
Improve Cost Efficiency
Consider using smaller models for simpler tasks
Refine prompts to be more concise
Cache frequently accessed information
Structure tasks to minimize redundant operations
​ Performance and batching
A TraceBatchManager buffers events and sends them in batches via the Plus API client
Reduces network chatter and improves reliability on flaky connections
Automatically enabled in the default trace listener; no configuration needed
Need Help?
