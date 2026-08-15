# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/zendesk
- Raw SHA-256: `fbd968e2c0ea1f20d31fa616b09492d961c6606e6ad4f3d3c8757a937b13f83d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Zendesk Integration
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
Zendesk Integration
Copy page Copy page
Customer support and helpdesk management with Zendesk integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Zendesk account with appropriate API permissions
Connected your Zendesk account through the Integrations page
​ Setting Up Zendesk Integration
​ 1. Connect Your Zendesk Account
Navigate to CrewAI AMP Integrations
Find Zendesk in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for ticket and user management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Tools
​ Ticket Management
zendesk/create_ticket
ticketSubject (string, required): Ticket subject line (e.g., “Help, my printer is on fire!”)
ticketDescription (string, required): First comment that appears on the ticket (e.g., “The smoke is very colorful.”)
requesterName (string, required): Name of the user requesting support (e.g., “Jane Customer”)
requesterEmail (string, required): Email of the user requesting support (e.g., “ jane@example.com ”)
assigneeId (string, optional): Zendesk Agent ID assigned to this ticket - Use Connect Portal Workflow Settings to allow users to select an assignee
ticketType (string, optional): Ticket type - Options: problem, incident, question, task
ticketPriority (string, optional): Priority level - Options: urgent, high, normal, low
ticketStatus (string, optional): Ticket status - Options: new, open, pending, hold, solved, closed
ticketDueAt (string, optional): Due date for task-type tickets (ISO 8601 timestamp)
ticketTags (string, optional): Array of tags to apply (e.g., ["enterprise", "other_tag"] )
ticketExternalId (string, optional): External ID to link tickets to local records
ticketCustomFields (object, optional): Custom field values in JSON format
zendesk/update_ticket
ticketId (string, required): ID of the ticket to update (e.g., “35436”)
ticketSubject (string, optional): Updated ticket subject
requesterName (string, required): Name of the user who requested this ticket
requesterEmail (string, required): Email of the user who requested this ticket
assigneeId (string, optional): Updated assignee ID - Use Connect Portal Workflow Settings
ticketType (string, optional): Updated ticket type - Options: problem, incident, question, task
ticketPriority (string, optional): Updated priority - Options: urgent, high, normal, low
ticketStatus (string, optional): Updated status - Options: new, open, pending, hold, solved, closed
ticketDueAt (string, optional): Updated due date (ISO 8601 timestamp)
ticketTags (string, optional): Updated tags array
ticketExternalId (string, optional): Updated external ID
ticketCustomFields (object, optional): Updated custom field values
zendesk/get_ticket_by_id
ticketId (string, required): The ticket ID to retrieve (e.g., “35436”)
zendesk/add_comment_to_ticket
ticketId (string, required): ID of the ticket to add comment to (e.g., “35436”)
commentBody (string, required): Comment message (accepts plain text or HTML, e.g., “Thanks for your help!”)
isInternalNote (boolean, optional): Set to true for internal notes instead of public replies (defaults to false)
isPublic (boolean, optional): True for public comments, false for internal notes
zendesk/search_tickets
ticketSubject (string, optional): Filter by text in ticket subject
ticketDescription (string, optional): Filter by text in ticket description and comments
ticketStatus (string, optional): Filter by status - Options: new, open, pending, hold, solved, closed
ticketType (string, optional): Filter by type - Options: problem, incident, question, task, no_type
ticketPriority (string, optional): Filter by priority - Options: urgent, high, normal, low, no_priority
requesterId (string, optional): Filter by requester user ID
assigneeId (string, optional): Filter by assigned agent ID
recipientEmail (string, optional): Filter by original recipient email address
ticketTags (string, optional): Filter by ticket tags
ticketExternalId (string, optional): Filter by external ID
createdDate (object, optional): Filter by creation date with operator (EQUALS, LESS_THAN_EQUALS, GREATER_THAN_EQUALS) and value
updatedDate (object, optional): Filter by update date with operator and value
dueDate (object, optional): Filter by due date with operator and value
sort_by (string, optional): Sort field - Options: created_at, updated_at, priority, status, ticket_type
sort_order (string, optional): Sort direction - Options: asc, desc
​ User Management
zendesk/create_user
name (string, required): User’s full name
email (string, optional): User’s email address (e.g., “ jane@example.com ”)
phone (string, optional): User’s phone number
role (string, optional): User role - Options: admin, agent, end-user
externalId (string, optional): Unique identifier from another system
details (string, optional): Additional user details
notes (string, optional): Internal notes about the user
zendesk/update_user
userId (string, required): ID of the user to update
name (string, optional): Updated user name
email (string, optional): Updated email (adds as secondary email on update)
phone (string, optional): Updated phone number
role (string, optional): Updated role - Options: admin, agent, end-user
externalId (string, optional): Updated external ID
details (string, optional): Updated user details
notes (string, optional): Updated internal notes
zendesk/get_user_by_id
userId (string, required): The user ID to retrieve
zendesk/search_users
name (string, optional): Filter by user name
email (string, optional): Filter by user email (e.g., “ jane@example.com ”)
role (string, optional): Filter by role - Options: admin, agent, end-user
externalId (string, optional): Filter by external ID
sort_by (string, optional): Sort field - Options: created_at, updated_at
sort_order (string, optional): Sort direction - Options: asc, desc
​ Administrative Tools
zendesk/get_ticket_fields
paginationParameters (object, optional): Pagination settings pageCursor (string, optional): Page cursor for pagination
zendesk/get_ticket_audits
ticketId (string, optional): Get audits for specific ticket (if empty, retrieves audits for all non-archived tickets, e.g., “1234”)
paginationParameters (object, optional): Pagination settings pageCursor (string, optional): Page cursor for pagination
​ Custom Fields
[ { "id" : 27642 , "value" : "745" }, { "id" : 27648 , "value" : "yes" } ]
​ Ticket Priority Levels
urgent - Critical issues requiring immediate attention
high - Important issues that should be addressed quickly
normal - Standard priority for most tickets
low - Minor issues that can be addressed when convenient
​ Ticket Status Workflow
new - Recently created, not yet assigned
open - Actively being worked on
pending - Waiting for customer response or external action
hold - Temporarily paused
solved - Issue resolved, awaiting customer confirmation
closed - Ticket completed and closed
​ Usage Examples
​ Basic Zendesk Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Zendesk capabilities zendesk_agent = Agent( role = "Support Manager" , goal = "Manage customer support tickets and provide excellent customer service" , backstory = "An AI assistant specialized in customer support operations and ticket management." , apps = [ 'zendesk' ] # All Zendesk actions will be available ) # Task to create a new support ticket create_ticket_task = Task( description = "Create a high-priority support ticket for John Smith who is unable to access his account after password reset" , agent = zendesk_agent, expected_output = "Support ticket created successfully with ticket ID" ) # Run the task crew = Crew( agents = [zendesk_agent], tasks = [create_ticket_task] ) crew.kickoff()
​ Filtering Specific Zendesk Tools
from crewai import Agent, Task, Crew # Create agent with specific Zendesk actions only support_agent = Agent( role = "Customer Support Agent" , goal = "Handle customer inquiries and resolve support issues efficiently" , backstory = "An experienced support agent who specializes in ticket resolution and customer communication." , apps = [ 'zendesk/create_ticket' ] # Specific Zendesk actions ) # Task to manage support workflow support_task = Task( description = "Create a ticket for login issues, add troubleshooting comments, and update status to resolved" , agent = support_agent, expected_output = "Support ticket managed through complete resolution workflow" ) crew = Crew( agents = [support_agent], tasks = [support_task] ) crew.kickoff()
​ Advanced Ticket Management
from crewai import Agent, Task, Crew ticket_manager = Agent( role = "Ticket Manager" , goal = "Manage support ticket workflows and ensure timely resolution" , backstory = "An AI assistant that specializes in support ticket triage and workflow optimization." , apps = [ 'zendesk' ] ) # Task to manage ticket lifecycle ticket_workflow = Task( description = """ 1. Create a new support ticket for account access issues 2. Add internal notes with troubleshooting steps 3. Update ticket priority based on customer tier 4. Add resolution comments and close the ticket """ , agent = ticket_manager, expected_output = "Complete ticket lifecycle managed from creation to resolution" ) crew = Crew( agents = [ticket_manager], tasks = [ticket_workflow] ) crew.kickoff()
​ Support Analytics and Reporting
from crewai import Agent, Task, Crew support_analyst = Agent( role = "Support Analyst" , goal = "Analyze support metrics and generate insights for team performance" , backstory = "An analytical AI that excels at extracting insights from support data and ticket patterns." , apps = [ 'zendesk' ] ) # Complex task involving analytics and reporting analytics_task = Task( description = """ 1. Search for all open tickets from the last 30 days 2. Analyze ticket resolution times and customer satisfaction 3. Identify common issues and support patterns 4. Generate weekly support performance report """ , agent = support_analyst, expected_output = "Comprehensive support analytics report with performance insights and recommendations" ) crew = Crew( agents = [support_analyst], tasks = [analytics_task] ) crew.kickoff()
