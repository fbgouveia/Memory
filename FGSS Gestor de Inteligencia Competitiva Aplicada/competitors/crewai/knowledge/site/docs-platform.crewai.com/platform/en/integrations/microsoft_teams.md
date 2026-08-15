# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/microsoft_teams
- Raw SHA-256: `c25bdc465c8430ceb7d76cdc6c6aaee050c9c5a0225bc5842e1578e529598e71`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Microsoft Teams Integration
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
Microsoft Teams Integration
Copy page Copy page
Team collaboration and communication with Microsoft Teams integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Microsoft account with Teams access
Connected your Microsoft account through the Integrations page
​ Setting Up Microsoft Teams Integration
​ 1. Connect Your Microsoft Account
Navigate to CrewAI AMP Integrations
Find Microsoft Teams in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for Teams access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
microsoft_teams/get_teams
No parameters required.
microsoft_teams/get_channels
team_id (string, required): The ID of the team.
microsoft_teams/send_message
team_id (string, required): The ID of the team.
channel_id (string, required): The ID of the channel.
message (string, required): The message content.
content_type (string, optional): Content type (html or text). Enum: html , text . Default is text .
microsoft_teams/get_messages
team_id (string, required): The ID of the team.
channel_id (string, required): The ID of the channel.
top (integer, optional): Number of messages to retrieve (max 50). Default is 20 .
microsoft_teams/create_meeting
subject (string, required): Meeting subject/title.
startDateTime (string, required): Meeting start time (ISO 8601 format with timezone).
endDateTime (string, required): Meeting end time (ISO 8601 format with timezone).
microsoft_teams/search_online_meetings_by_join_url
join_web_url (string, required): The join web URL of the meeting to search for.
microsoft_teams/search_online_meetings_by_meeting_id
join_meeting_id (string, required): The meeting ID (numeric code) that attendees use to join. This is the joinMeetingId shown in meeting invitations, not the Graph API meeting id.
microsoft_teams/get_meeting
meeting_id (string, required): The Graph API meeting ID (a long alphanumeric string). Obtain from create_meeting or search_online_meetings actions. Different from the numeric joinMeetingId.
microsoft_teams/get_team_members
team_id (string, required): The unique identifier of the team. Obtain from get_teams action.
top (integer, optional): Maximum number of members to retrieve per page (1-999). Default is 100 .
skip_token (string, optional): Pagination token from a previous response. When the response includes @odata.nextLink, extract the $skiptoken parameter value and pass it here to get the next page of results.
microsoft_teams/create_channel
team_id (string, required): The unique identifier of the team. Obtain from get_teams action.
display_name (string, required): Name of the channel as displayed in Teams. Must be unique within the team. Max 50 characters.
description (string, optional): Optional description explaining the channel’s purpose. Visible in channel details. Max 1024 characters.
membership_type (string, optional): Channel visibility. Enum: standard , private . “standard” = visible to all team members, “private” = visible only to specifically added members. Default is standard .
microsoft_teams/get_message_replies
team_id (string, required): The unique identifier of the team. Obtain from get_teams action.
channel_id (string, required): The unique identifier of the channel. Obtain from get_channels action.
message_id (string, required): The unique identifier of the parent message. Obtain from get_messages action.
top (integer, optional): Maximum number of replies to retrieve per page (1-50). Default is 50 .
skip_token (string, optional): Pagination token from a previous response. When the response includes @odata.nextLink, extract the $skiptoken parameter value and pass it here to get the next page of results.
microsoft_teams/reply_to_message
team_id (string, required): The unique identifier of the team. Obtain from get_teams action.
channel_id (string, required): The unique identifier of the channel. Obtain from get_channels action.
message_id (string, required): The unique identifier of the message to reply to. Obtain from get_messages action.
message (string, required): The reply content. For HTML, include formatting tags. For text, plain text only.
content_type (string, optional): Content format. Enum: html , text . “text” for plain text, “html” for rich text with formatting. Default is text .
microsoft_teams/update_meeting
meeting_id (string, required): The unique identifier of the meeting. Obtain from create_meeting or search_online_meetings actions.
subject (string, optional): New meeting title.
startDateTime (string, optional): New start time in ISO 8601 format with timezone. Example: “2024-01-20T10:00:00-08:00”.
endDateTime (string, optional): New end time in ISO 8601 format with timezone.
microsoft_teams/delete_meeting
meeting_id (string, required): The unique identifier of the meeting to delete. Obtain from create_meeting or search_online_meetings actions.
​ Usage Examples
​ Basic Microsoft Teams Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Microsoft Teams capabilities teams_agent = Agent( role = "Teams Coordinator" , goal = "Manage Teams communication and meetings efficiently" , backstory = "An AI assistant specialized in Microsoft Teams operations and team collaboration." , apps = [ 'microsoft_teams' ] # All Teams actions will be available ) # Task to list teams and channels explore_teams_task = Task( description = "List all teams I'm a member of and then get the channels for the first team." , agent = teams_agent, expected_output = "List of teams and channels displayed." ) # Run the task crew = Crew( agents = [teams_agent], tasks = [explore_teams_task] ) crew.kickoff()
​ Messaging and Communication
from crewai import Agent, Task, Crew # Create an agent focused on messaging messenger = Agent( role = "Teams Messenger" , goal = "Send and retrieve messages in Teams channels" , backstory = "An AI assistant skilled in team communication and message management." , apps = [ 'microsoft_teams/send_message' , 'microsoft_teams/get_messages' ] ) # Task to send a message and retrieve recent messages messaging_task = Task( description = "Send a message 'Hello team! This is an automated update from our AI assistant.' to the General channel of team 'your_team_id', then retrieve the last 10 messages from that channel." , agent = messenger, expected_output = "Message sent successfully and recent messages retrieved." ) crew = Crew( agents = [messenger], tasks = [messaging_task] ) crew.kickoff()
​ Meeting Management
from crewai import Agent, Task, Crew # Create an agent for meeting management meeting_scheduler = Agent( role = "Meeting Scheduler" , goal = "Create and manage Teams meetings" , backstory = "An AI assistant that handles meeting scheduling and organization." , apps = [ 'microsoft_teams/create_meeting' , 'microsoft_teams/search_online_meetings_by_join_url' ] ) # Task to create a meeting schedule_meeting_task = Task( description = "Create a Teams meeting titled 'Weekly Team Sync' scheduled for tomorrow at 10:00 AM lasting for 1 hour (use proper ISO 8601 format with timezone)." , agent = meeting_scheduler, expected_output = "Teams meeting created successfully with meeting details." ) crew = Crew( agents = [meeting_scheduler], tasks = [schedule_meeting_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Microsoft account has the necessary permissions for Teams access.
Required scopes include: Team.ReadBasic.All , Channel.ReadBasic.All , ChannelMessage.Send , ChannelMessage.Read.All , OnlineMeetings.ReadWrite , OnlineMeetings.Read .
Verify that the OAuth connection includes all required scopes.
Ensure you are a member of the teams you’re trying to access.
Double-check team IDs and channel IDs for correctness.
Team and channel IDs can be obtained using the get_teams and get_channels actions.
Ensure team_id , channel_id , and message are provided for send_message .
Verify that you have permissions to send messages to the specified channel.
Choose appropriate content_type (text or html) based on your message format.
Ensure subject , startDateTime , and endDateTime are provided.
Use proper ISO 8601 format with timezone for datetime fields (e.g., ‘2024-01-20T10:00:00-08:00’).
Verify that the meeting times are in the future.
The get_messages action can retrieve a maximum of 50 messages per request.
Messages are returned in reverse chronological order (newest first).
For search_online_meetings_by_join_url , ensure the join URL is exact and properly formatted.
The URL should be the complete Teams meeting join URL.
​ Getting Help
Need Help?
