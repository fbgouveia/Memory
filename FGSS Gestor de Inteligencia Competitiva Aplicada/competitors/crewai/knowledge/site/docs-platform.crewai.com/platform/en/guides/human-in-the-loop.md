# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/human-in-the-loop
- Raw SHA-256: `61d0e73a2b9201b9d96751d55e9e041f35e0cdd274fcb821a32ca7b17752b325`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides HITL Workflows
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
HITL Workflows
Copy page Copy page
Learn how to implement Human-In-The-Loop workflows in CrewAI for enhanced decision-making
Copy page Copy page
​ HITL Approaches in CrewAI
​ Flow-Based HITL with Enterprise Platform
Email-First Design
Dashboard Review
Flexible Routing
Auto-Response
​ Key Benefits
External responders : Anyone with an email can respond, even non-platform users
Dynamic assignment : Pull assignee email from flow state (e.g., account_owner_email )
Simple configuration : Email-based routing is easier to set up than user/role management
Deployment creator fallback : If no routing rule matches, the deployment creator is notified
​ Setting Up Webhook-Based HITL Workflows
Configure Your Task
Provide Webhook URL
Receive Webhook Notification
Execution ID
Task ID
Task output
Review Task Output
Submit Human Feedback
curl -X POST {BASE_URL}/resume \ -H "Authorization: Bearer YOUR_API_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "execution_id": "abcd1234-5678-90ef-ghij-klmnopqrstuv", "task_id": "research_task", "human_feedback": "Great work! Please add more details.", "is_approve": true, "taskWebhookUrl": "https://your-server.com/webhooks/task", "stepWebhookUrl": "https://your-server.com/webhooks/step", "crewWebhookUrl": "https://your-server.com/webhooks/crew" }'
All information in your feedback becomes part of the task’s context.
Irrelevant details may negatively influence it.
Concise, relevant feedback helps maintain task focus and efficiency.
Always review your feedback carefully before submission to ensure it contains only pertinent information that will positively guide the task’s execution.
Handle Negative Feedback
The crew will retry the task with added context from your feedback.
You’ll receive another webhook notification for further review.
Repeat steps 4-6 until satisfied.
Execution Continuation
​ Best Practices
Be Specific : Provide clear, actionable feedback that directly addresses the task at hand
Stay Relevant : Only include information that will help improve the task execution
Be Timely : Respond to HITL prompts promptly to avoid workflow delays
Review Carefully : Double-check your feedback before submitting to ensure accuracy
​ Common Use Cases
Quality assurance and validation
Complex decision-making scenarios
Sensitive or high-stakes operations
Creative tasks requiring human judgment
Compliance and regulatory reviews
​ Learn More
Flow HITL Management
Human Feedback in Flows
