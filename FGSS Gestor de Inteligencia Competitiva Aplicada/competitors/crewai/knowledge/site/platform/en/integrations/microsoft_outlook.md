# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/microsoft_outlook
- Raw SHA-256: `ea300160956f5a60f70f6be26e9650eb1c49e4c389a9a880248c795dd66cf87b`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Microsoft Outlook Integration
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
Microsoft Outlook Integration
Copy page Copy page
Email, calendar, and contact management with Microsoft Outlook integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Microsoft account with Outlook access
Connected your Microsoft account through the Integrations page
​ Setting Up Microsoft Outlook Integration
​ 1. Connect Your Microsoft Account
Navigate to CrewAI AMP Integrations
Find Microsoft Outlook in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for mail, calendar, and contact access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
microsoft_outlook/get_messages
top (integer, optional): Number of messages to retrieve (max 1000). Default is 10 .
filter (string, optional): OData filter expression (e.g., “isRead eq false”).
search (string, optional): Search query string.
orderby (string, optional): Order by field (e.g., “receivedDateTime desc”). Default is “receivedDateTime desc”.
select (string, optional): Select specific properties to return.
expand (string, optional): Expand related resources inline.
microsoft_outlook/send_email
to_recipients (array, required): Array of recipient email addresses.
cc_recipients (array, optional): Array of CC recipient email addresses.
bcc_recipients (array, optional): Array of BCC recipient email addresses.
subject (string, required): Email subject.
body (string, required): Email body content.
body_type (string, optional): Body content type. Enum: Text , HTML . Default is HTML .
importance (string, optional): Message importance level. Enum: low , normal , high . Default is normal .
reply_to (array, optional): Array of reply-to email addresses.
save_to_sent_items (boolean, optional): Whether to save the message to Sent Items folder. Default is true .
microsoft_outlook/get_calendar_events
top (integer, optional): Number of events to retrieve (max 1000). Default is 10 .
skip (integer, optional): Number of events to skip. Default is 0 .
filter (string, optional): OData filter expression (e.g., “start/dateTime ge ‘2024-01-01T00:00:00Z’”).
orderby (string, optional): Order by field (e.g., “start/dateTime asc”). Default is “start/dateTime asc”.
microsoft_outlook/create_calendar_event
subject (string, required): Event subject/title.
body (string, optional): Event body/description.
start_datetime (string, required): Start date and time in ISO 8601 format (e.g., ‘2024-01-20T10:00:00’).
end_datetime (string, required): End date and time in ISO 8601 format.
timezone (string, optional): Time zone (e.g., ‘Pacific Standard Time’). Default is UTC .
location (string, optional): Event location.
attendees (array, optional): Array of attendee email addresses.
microsoft_outlook/get_contacts
top (integer, optional): Number of contacts to retrieve (max 1000). Default is 10 .
skip (integer, optional): Number of contacts to skip. Default is 0 .
filter (string, optional): OData filter expression.
orderby (string, optional): Order by field (e.g., “displayName asc”). Default is “displayName asc”.
microsoft_outlook/create_contact
displayName (string, required): Contact’s display name.
givenName (string, optional): Contact’s first name.
surname (string, optional): Contact’s last name.
emailAddresses (array, optional): Array of email addresses. Each item is an object with address (string) and name (string).
businessPhones (array, optional): Array of business phone numbers.
homePhones (array, optional): Array of home phone numbers.
jobTitle (string, optional): Contact’s job title.
companyName (string, optional): Contact’s company name.
microsoft_outlook/get_message
message_id (string, required): The unique identifier of the message. Obtain from get_messages action.
select (string, optional): Comma-separated list of properties to return. Example: “id,subject,body,from,receivedDateTime”. Default is “id,subject,body,from,toRecipients,receivedDateTime”.
microsoft_outlook/reply_to_email
message_id (string, required): The unique identifier of the message to reply to. Obtain from get_messages action.
comment (string, required): The reply message content. Can be plain text or HTML. The original message will be quoted below this content.
microsoft_outlook/forward_email
message_id (string, required): The unique identifier of the message to forward. Obtain from get_messages action.
to_recipients (array, required): Array of recipient email addresses to forward to. Example: [“ john@example.com ”, “ jane@example.com ”].
comment (string, optional): Optional message to include above the forwarded content. Can be plain text or HTML.
microsoft_outlook/mark_message_read
message_id (string, required): The unique identifier of the message. Obtain from get_messages action.
is_read (boolean, required): Set to true to mark as read, false to mark as unread.
microsoft_outlook/delete_message
message_id (string, required): The unique identifier of the message to delete. Obtain from get_messages action.
microsoft_outlook/update_event
event_id (string, required): The unique identifier of the event. Obtain from get_calendar_events action.
subject (string, optional): New subject/title for the event.
start_time (string, optional): New start time in ISO 8601 format (e.g., “2024-01-20T10:00:00”). REQUIRED: Must also provide start_timezone when using this field.
start_timezone (string, optional): Timezone for start time. REQUIRED when updating start_time. Examples: “Pacific Standard Time”, “Eastern Standard Time”, “UTC”.
end_time (string, optional): New end time in ISO 8601 format. REQUIRED: Must also provide end_timezone when using this field.
end_timezone (string, optional): Timezone for end time. REQUIRED when updating end_time. Examples: “Pacific Standard Time”, “Eastern Standard Time”, “UTC”.
location (string, optional): New location for the event.
body (string, optional): New body/description for the event. Supports HTML formatting.
microsoft_outlook/delete_event
event_id (string, required): The unique identifier of the event to delete. Obtain from get_calendar_events action.
​ Usage Examples
​ Basic Microsoft Outlook Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Microsoft Outlook capabilities outlook_agent = Agent( role = "Email Assistant" , goal = "Manage emails, calendar events, and contacts efficiently" , backstory = "An AI assistant specialized in Microsoft Outlook operations and communication management." , apps = [ 'microsoft_outlook' ] # All Outlook actions will be available ) # Task to send an email send_email_task = Task( description = "Send an email to 'colleague@example.com' with subject 'Project Update' and body 'Hi, here is the latest project update. Best regards.'" , agent = outlook_agent, expected_output = "Email sent successfully to colleague@example.com" ) # Run the task crew = Crew( agents = [outlook_agent], tasks = [send_email_task] ) crew.kickoff()
​ Email Management and Search
from crewai import Agent, Task, Crew # Create an agent focused on email management email_manager = Agent( role = "Email Manager" , goal = "Retrieve, search, and organize email messages" , backstory = "An AI assistant skilled in email organization and management." , apps = [ 'microsoft_outlook/get_messages' ] ) # Task to search and retrieve emails search_emails_task = Task( description = "Get the latest 20 unread emails and provide a summary of the most important ones." , agent = email_manager, expected_output = "Summary of the most important unread emails with key details." ) crew = Crew( agents = [email_manager], tasks = [search_emails_task] ) crew.kickoff()
​ Calendar and Contact Management
from crewai import Agent, Task, Crew # Create an agent for calendar and contact management scheduler = Agent( role = "Calendar and Contact Manager" , goal = "Manage calendar events and maintain contact information" , backstory = "An AI assistant that handles scheduling and contact organization." , apps = [ 'microsoft_outlook/create_calendar_event' , 'microsoft_outlook/get_calendar_events' , 'microsoft_outlook/create_contact' ] ) # Task to create a meeting and add a contact schedule_task = Task( description = "Create a calendar event for tomorrow at 2 PM titled 'Team Meeting' with location 'Conference Room A', and create a new contact for 'John Smith' with email 'john.smith@example.com' and job title 'Project Manager'." , agent = scheduler, expected_output = "Calendar event created and new contact added successfully." ) crew = Crew( agents = [scheduler], tasks = [schedule_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Microsoft account has the necessary permissions for mail, calendar, and contact access.
Required scopes include: Mail.Read , Mail.Send , Calendars.Read , Calendars.ReadWrite , Contacts.Read , Contacts.ReadWrite .
Verify that the OAuth connection includes all required scopes.
Ensure to_recipients , subject , and body are provided for send_email .
Check that email addresses are properly formatted.
Verify that the account has Mail.Send permissions.
Ensure subject , start_datetime , and end_datetime are provided.
Use proper ISO 8601 format for datetime fields (e.g., ‘2024-01-20T10:00:00’).
Verify timezone settings if events appear at incorrect times.
For create_contact , ensure displayName is provided as it’s required.
When providing emailAddresses , use the proper object format with address and name properties.
Use proper OData syntax for filter parameters.
For date filters, use ISO 8601 format (e.g., “receivedDateTime ge ‘2024-01-01T00:00:00Z’”).
​ Getting Help
Need Help?
