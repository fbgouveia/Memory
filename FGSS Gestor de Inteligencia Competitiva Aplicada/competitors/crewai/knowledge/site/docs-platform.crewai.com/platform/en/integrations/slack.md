# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/slack
- Raw SHA-256: `ab6ff4dc2ed9de33f4a1ebee8c23919caa06ec60375e52f823d79b25e5724db7`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Slack Integration
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
Slack Integration
Copy page Copy page
Team communication and collaboration with Slack integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Slack workspace with appropriate permissions
Connected your Slack workspace through the Integrations page
​ Setting Up Slack Integration
​ 1. Connect Your Slack Workspace
Navigate to CrewAI AMP Integrations
Find Slack in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for team communication
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Tools
​ User Management
slack/list_members
No parameters required - retrieves all channel members
slack/get_user_by_email
email (string, required): The email address of a user in the workspace
slack/get_users_by_name
name (string, required): User’s real name to search for
displayName (string, required): User’s display name to search for
paginationParameters (object, optional): Pagination settings pageCursor (string, optional): Page cursor for pagination
​ Channel Management
slack/list_channels
No parameters required - retrieves all accessible channels
​ Messaging
slack/send_message
channel (string, required): Channel name or ID - Use Connect Portal Workflow Settings to allow users to select a channel, or enter a channel name to create a new channel
message (string, required): The message text to send
botName (string, required): The name of the bot that sends this message
botIcon (string, required): Bot icon - Can be either an image URL or an emoji (e.g., “:dog:”)
blocks (object, optional): Slack Block Kit JSON for rich message formatting with attachments and interactive elements
authenticatedUser (boolean, optional): If true, message appears to come from your authenticated Slack user instead of the application (defaults to false)
slack/send_direct_message
memberId (string, required): Recipient user ID - Use Connect Portal Workflow Settings to allow users to select a workspace member
message (string, required): The message text to send
botName (string, required): The name of the bot that sends this message
botIcon (string, required): Bot icon - Can be either an image URL or an emoji (e.g., “:dog:”)
blocks (object, optional): Slack Block Kit JSON for rich message formatting with attachments and interactive elements
authenticatedUser (boolean, optional): If true, message appears to come from your authenticated Slack user instead of the application (defaults to false)
​ Search & Discovery
slack/search_messages
query (string, required): Search query using Slack search syntax to find messages that match specified criteria
"project update" - Search for messages containing “project update”
from:@john in:#general - Search for messages from John in the #general channel
has:link after:2023-01-01 - Search for messages with links after January 1, 2023
in:@channel before:yesterday - Search for messages in a specific channel before yesterday
​ Block Kit Integration
​ Simple Text with Attachment
[ { "text" : "I am a test message" , "attachments" : [ { "text" : "And here's an attachment!" } ] } ]
​ Rich Formatting with Sections
[ { "type" : "section" , "text" : { "type" : "mrkdwn" , "text" : "*Project Update* \n Status: ✅ Complete" } }, { "type" : "divider" }, { "type" : "section" , "text" : { "type" : "plain_text" , "text" : "All tasks have been completed successfully." } } ]
​ Usage Examples
​ Basic Slack Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Slack capabilities slack_agent = Agent( role = "Team Communication Manager" , goal = "Facilitate team communication and coordinate collaboration efficiently" , backstory = "An AI assistant specialized in team communication and workspace coordination." , apps = [ 'slack' ] # All Slack actions will be available ) # Task to send project updates update_task = Task( description = "Send a project status update to the #general channel with current progress" , agent = slack_agent, expected_output = "Project update message sent successfully to team channel" ) # Run the task crew = Crew( agents = [slack_agent], tasks = [update_task] ) crew.kickoff()
​ Filtering Specific Slack Tools
from crewai import Agent, Task, Crew # Create agent with specific Slack actions only communication_manager = Agent( role = "Communication Coordinator" , goal = "Manage team communications and ensure important messages reach the right people" , backstory = "An experienced communication coordinator who handles team messaging and notifications." , apps = [ 'slack/send_message' , 'slack/send_direct_message' , 'slack/search_messages' ] # Using canonical action names from canonical_integrations.yml ) # Task to coordinate team communication coordination_task = Task( description = "Send task completion notifications to team members and update project channels" , agent = communication_manager, expected_output = "Team notifications sent and project channels updated successfully" ) crew = Crew( agents = [communication_manager], tasks = [coordination_task] ) crew.kickoff()
​ Advanced Messaging with Block Kit
from crewai import Agent, Task, Crew # Create agent with Slack messaging capabilities notification_agent = Agent( role = "Notification Manager" , goal = "Create rich, interactive notifications and manage workspace communication" , backstory = "An AI assistant that specializes in creating engaging team notifications and updates." , apps = [ 'slack/send_message' ] # Specific action for sending messages ) # Task to send rich notifications notification_task = Task( description = """ 1. Send a formatted project completion message to #general with progress charts 2. Send direct messages to team leads with task summaries 3. Create interactive notification with action buttons for team feedback """ , agent = notification_agent, expected_output = "Rich notifications sent with interactive elements and formatted content" ) crew = Crew( agents = [notification_agent], tasks = [notification_task] ) crew.kickoff()
​ Message Search and Analytics
from crewai import Agent, Task, Crew # Create agent with Slack search and user management capabilities analytics_agent = Agent( role = "Communication Analyst" , goal = "Analyze team communication patterns and extract insights from conversations" , backstory = "An analytical AI that excels at understanding team dynamics through communication data." , apps = [ 'slack/search_messages' , 'slack/get_user_by_email' , 'slack/list_members' ] # Using canonical action names from canonical_integrations.yml ) # Complex task involving search and analysis analysis_task = Task( description = """ 1. Search for recent project-related messages across all channels 2. Find users by email to identify team members 3. Analyze communication patterns and response times 4. Generate weekly team communication summary """ , agent = analytics_agent, expected_output = "Comprehensive communication analysis with team insights and recommendations" ) crew = Crew( agents = [analytics_agent], tasks = [analysis_task] ) crew.kickoff()
​ Contact Support
Need Help?
