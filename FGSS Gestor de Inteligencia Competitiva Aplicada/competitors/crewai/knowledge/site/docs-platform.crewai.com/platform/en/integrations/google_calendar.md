# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/google_calendar
- Raw SHA-256: `4e53f43b1e0cb58c620449136a54966851dd4bc8f6807074008c4ccb62882188`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Google Calendar Integration
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
Google Calendar Integration
Copy page Copy page
Event and schedule management with Google Calendar integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Google account with Google Calendar access
Connected your Google account through the Integrations page
​ Setting Up Google Calendar Integration
​ 1. Connect Your Google Account
Navigate to CrewAI AMP Integrations
Find Google Calendar in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for calendar access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
google_calendar/get_availability
timeMin (string, required): Start time (RFC3339 format)
timeMax (string, required): End time (RFC3339 format)
items (array, required): Calendar IDs to check [ { "id" : "calendar_id" } ]
timeZone (string, optional): Time zone used in the response. The default is UTC.
groupExpansionMax (integer, optional): Maximal number of calendar identifiers to be provided for a single group. Maximum: 100
calendarExpansionMax (integer, optional): Maximal number of calendars for which FreeBusy information is to be provided. Maximum: 50
google_calendar/create_event
calendarId (string, required): Calendar ID (use ‘primary’ for main calendar)
summary (string, required): Event title/summary
start_dateTime (string, required): Start time in RFC3339 format (e.g., 2024-01-20T10:00:00-07:00)
end_dateTime (string, required): End time in RFC3339 format
description (string, optional): Event description
timeZone (string, optional): Time zone (e.g., America/Los_Angeles)
location (string, optional): Geographic location of the event as free-form text.
attendees (array, optional): List of attendees for the event. [ { "email" : "attendee@example.com" , "displayName" : "Attendee Name" , "optional" : false } ]
reminders (object, optional): Information about the event’s reminders. { "useDefault" : true , "overrides" : [ { "method" : "email" , "minutes" : 15 } ] }
conferenceData (object, optional): The conference-related information, such as details of a Google Meet conference. { "createRequest" : { "requestId" : "unique-request-id" , "conferenceSolutionKey" : { "type" : "hangoutsMeet" } } }
visibility (string, optional): Visibility of the event. Options: default, public, private, confidential. Default: default
transparency (string, optional): Whether the event blocks time on the calendar. Options: opaque, transparent. Default: opaque
google_calendar/view_events
calendarId (string, required): Calendar ID (use ‘primary’ for main calendar)
timeMin (string, optional): Lower bound for events (RFC3339)
timeMax (string, optional): Upper bound for events (RFC3339)
maxResults (integer, optional): Maximum number of events (default 10). Minimum: 1, Maximum: 2500
orderBy (string, optional): The order of the events returned in the result. Options: startTime, updated. Default: startTime
singleEvents (boolean, optional): Whether to expand recurring events into instances and only return single one-off events and instances of recurring events. Default: true
showDeleted (boolean, optional): Whether to include deleted events (with status equals cancelled) in the result. Default: false
showHiddenInvitations (boolean, optional): Whether to include hidden invitations in the result. Default: false
q (string, optional): Free text search terms to find events that match these terms in any field.
pageToken (string, optional): Token specifying which result page to return.
timeZone (string, optional): Time zone used in the response.
updatedMin (string, optional): Lower bound for an event’s last modification time (RFC3339) to filter by.
iCalUID (string, optional): Specifies an event ID in the iCalendar format to be provided in the response.
google_calendar/update_event
calendarId (string, required): Calendar ID
eventId (string, required): Event ID to update
summary (string, optional): Updated event title
description (string, optional): Updated event description
start_dateTime (string, optional): Updated start time
end_dateTime (string, optional): Updated end time
google_calendar/delete_event
calendarId (string, required): Calendar ID
eventId (string, required): Event ID to delete
google_calendar/view_calendar_list
maxResults (integer, optional): Maximum number of entries returned on one result page. Minimum: 1
pageToken (string, optional): Token specifying which result page to return.
showDeleted (boolean, optional): Whether to include deleted calendar list entries in the result. Default: false
showHidden (boolean, optional): Whether to show hidden entries. Default: false
minAccessRole (string, optional): The minimum access role for the user in the returned entries. Options: freeBusyReader, owner, reader, writer
​ Usage Examples
​ Basic Calendar Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Google Calendar capabilities calendar_agent = Agent( role = "Schedule Manager" , goal = "Manage calendar events and scheduling efficiently" , backstory = "An AI assistant specialized in calendar management and scheduling coordination." , apps = [ 'google_calendar' ] # All Google Calendar actions will be available ) # Task to create a meeting create_meeting_task = Task( description = "Create a team standup meeting for tomorrow at 9 AM with the development team" , agent = calendar_agent, expected_output = "Meeting created successfully with Google Meet link" ) # Run the task crew = Crew( agents = [calendar_agent], tasks = [create_meeting_task] ) crew.kickoff()
​ Filtering Specific Calendar Tools
meeting_coordinator = Agent( role = "Meeting Coordinator" , goal = "Coordinate meetings and check availability" , backstory = "An AI assistant that focuses on meeting scheduling and availability management." , apps = [ 'google_calendar/create_event' , 'google_calendar/get_availability' ] ) # Task to schedule a meeting with availability check schedule_meeting = Task( description = "Check availability for next week and schedule a project review meeting with stakeholders" , agent = meeting_coordinator, expected_output = "Meeting scheduled after checking availability of all participants" ) crew = Crew( agents = [meeting_coordinator], tasks = [schedule_meeting] ) crew.kickoff()
​ Event Management and Updates
from crewai import Agent, Task, Crew event_manager = Agent( role = "Event Manager" , goal = "Manage and update calendar events efficiently" , backstory = "An experienced event manager who handles event logistics and updates." , apps = [ 'google_calendar' ] ) # Task to manage event updates event_management = Task( description = """ 1. List all events for this week 2. Update any events that need location changes to include video conference links 3. Check availability for upcoming meetings """ , agent = event_manager, expected_output = "Weekly events updated with proper locations and availability checked" ) crew = Crew( agents = [event_manager], tasks = [event_management] ) crew.kickoff()
​ Availability and Calendar Management
from crewai import Agent, Task, Crew availability_coordinator = Agent( role = "Availability Coordinator" , goal = "Coordinate availability and manage calendars for scheduling" , backstory = "An AI assistant that specializes in availability management and calendar coordination." , apps = [ 'google_calendar' ] ) # Task to coordinate availability availability_task = Task( description = """ 1. Get the list of available calendars 2. Check availability for all calendars next Friday afternoon 3. Create a team meeting for the first available 2-hour slot 4. Include Google Meet link and send invitations """ , agent = availability_coordinator, expected_output = "Team meeting scheduled based on availability with all team members invited" ) crew = Crew( agents = [availability_coordinator], tasks = [availability_task] ) crew.kickoff()
​ Automated Scheduling Workflows
from crewai import Agent, Task, Crew scheduling_automator = Agent( role = "Scheduling Automator" , goal = "Automate scheduling workflows and calendar management" , backstory = "An AI assistant that automates complex scheduling scenarios and calendar workflows." , apps = [ 'google_calendar' ] ) # Complex scheduling automation task automation_task = Task( description = """ 1. List all upcoming events for the next two weeks 2. Identify any scheduling conflicts or back-to-back meetings 3. Suggest optimal meeting times by checking availability 4. Create buffer time between meetings where needed 5. Update event descriptions with agenda items and meeting links """ , agent = scheduling_automator, expected_output = "Calendar optimized with resolved conflicts, buffer times, and updated meeting details" ) crew = Crew( agents = [scheduling_automator], tasks = [automation_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Google account has the necessary permissions for calendar access
Verify that the OAuth connection includes all required scopes for Google Calendar API
Check if calendar sharing settings allow the required access level
Verify that time formats are correct (RFC3339 format)
Ensure attendee email addresses are properly formatted
Check that the target calendar exists and is accessible
Verify time zones are correctly specified
Use proper RFC3339 format for time ranges when checking availability
Ensure time zones are consistent across all operations
Verify that calendar IDs are correct when checking multiple calendars
Verify that event IDs are correct and events exist
Ensure you have edit permissions for the events
Check that calendar ownership allows modifications
​ Getting Help
Need Help?
