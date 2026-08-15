# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/gmail
- Raw SHA-256: `db25b07b9776d39c3d4da6aa9203071d4df801c7b92ffc6769da63a0256d354f`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Gmail Integration
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
Gmail Integration
Copy page Copy page
Email and contact management with Gmail integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Gmail account with appropriate permissions
Connected your Gmail account through the Integrations page
​ Setting Up Gmail Integration
​ 1. Connect Your Gmail Account
Navigate to CrewAI AMP Integrations
Find Gmail in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for email and contact management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
gmail/fetch_emails
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
q (string, optional): Search query to filter messages (e.g., ‘from: someone@example.com is:unread’).
maxResults (integer, optional): Maximum number of messages to return (1-500). (default: 100)
pageToken (string, optional): Page token to retrieve a specific page of results.
labelIds (array, optional): Only return messages with labels that match all of the specified label IDs.
includeSpamTrash (boolean, optional): Include messages from SPAM and TRASH in the results. (default: false)
gmail/send_email
to (string, required): Recipient email address.
subject (string, required): Email subject line.
body (string, required): Email message content.
userId (string, optional): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
cc (string, optional): CC email addresses (comma-separated).
bcc (string, optional): BCC email addresses (comma-separated).
from (string, optional): Sender email address (if different from authenticated user).
replyTo (string, optional): Reply-to email address.
threadId (string, optional): Thread ID if replying to an existing conversation.
gmail/delete_email
userId (string, required): The user’s email address or ‘me’ for the authenticated user.
id (string, required): The ID of the message to delete.
gmail/create_draft
userId (string, required): The user’s email address or ‘me’ for the authenticated user.
message (object, required): Message object containing the draft content. raw (string, required): Base64url encoded email message.
gmail/get_message
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
id (string, required): The ID of the message to retrieve.
format (string, optional): The format to return the message in. Options: “full”, “metadata”, “minimal”, “raw”. (default: “full”)
metadataHeaders (array, optional): When given and format is METADATA, only include headers specified.
gmail/get_attachment
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
messageId (string, required): The ID of the message containing the attachment.
id (string, required): The ID of the attachment to retrieve.
gmail/fetch_thread
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
id (string, required): The ID of the thread to retrieve.
format (string, optional): The format to return the messages in. Options: “full”, “metadata”, “minimal”. (default: “full”)
metadataHeaders (array, optional): When given and format is METADATA, only include headers specified.
gmail/modify_thread
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
id (string, required): The ID of the thread to modify.
addLabelIds (array, optional): A list of IDs of labels to add to this thread.
removeLabelIds (array, optional): A list of IDs of labels to remove from this thread.
gmail/trash_thread
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
id (string, required): The ID of the thread to trash.
gmail/untrash_thread
userId (string, required): The user’s email address or ‘me’ for the authenticated user. (default: “me”)
id (string, required): The ID of the thread to untrash.
​ Usage Examples
​ Basic Gmail Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Gmail capabilities gmail_agent = Agent( role = "Email Manager" , goal = "Manage email communications and messages efficiently" , backstory = "An AI assistant specialized in email management and communication." , apps = [ 'gmail' ] # All Gmail actions will be available ) # Task to send a follow-up email send_email_task = Task( description = "Send a follow-up email to john@example.com about the project update meeting" , agent = gmail_agent, expected_output = "Email sent successfully with confirmation" ) # Run the task crew = Crew( agents = [gmail_agent], tasks = [send_email_task] ) crew.kickoff()
​ Filtering Specific Gmail Tools
from crewai import Agent, Task, Crew # Create agent with specific Gmail actions only email_coordinator = Agent( role = "Email Coordinator" , goal = "Coordinate email communications and manage drafts" , backstory = "An AI assistant that focuses on email coordination and draft management." , apps = [ 'gmail/send_email' , 'gmail/fetch_emails' , 'gmail/create_draft' ] ) # Task to prepare and send emails email_coordination = Task( description = "Search for emails from the marketing team, create a summary draft, and send it to stakeholders" , agent = email_coordinator, expected_output = "Summary email sent to stakeholders" ) crew = Crew( agents = [email_coordinator], tasks = [email_coordination] ) crew.kickoff()
​ Email Search and Analysis
from crewai import Agent, Task, Crew # Create agent with Gmail search and analysis capabilities email_analyst = Agent( role = "Email Analyst" , goal = "Analyze email patterns and provide insights" , backstory = "An AI assistant that analyzes email data to provide actionable insights." , apps = [ 'gmail/fetch_emails' , 'gmail/get_message' ] # Specific actions for email analysis ) # Task to analyze email patterns analysis_task = Task( description = """ Search for all unread emails from the last 7 days, categorize them by sender domain, and create a summary report of communication patterns """ , agent = email_analyst, expected_output = "Email analysis report with communication patterns and recommendations" ) crew = Crew( agents = [email_analyst], tasks = [analysis_task] ) crew.kickoff()
​ Thread Management
from crewai import Agent, Task, Crew # Create agent with Gmail thread management capabilities thread_manager = Agent( role = "Thread Manager" , goal = "Organize and manage email threads efficiently" , backstory = "An AI assistant that specializes in email thread organization and management." , apps = [ 'gmail/fetch_thread' , 'gmail/modify_thread' , 'gmail/trash_thread' ] ) # Task to organize email threads thread_task = Task( description = """ 1. Fetch all threads from the last month 2. Apply appropriate labels to organize threads by project 3. Archive or trash threads that are no longer relevant """ , agent = thread_manager, expected_output = "Email threads organized with appropriate labels and cleanup completed" ) crew = Crew( agents = [thread_manager], tasks = [thread_task] ) crew.kickoff()
​ Getting Help
Need Help?
