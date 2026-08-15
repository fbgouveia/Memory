# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/google_drive
- Raw SHA-256: `54070f92f3fcfa42c081bcdab708dd4fe86fcbab39f36bace76ad110a55e4c57`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Google Drive Integration
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
Google Drive Integration
Copy page Copy page
File storage and management with Google Drive integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Google account with Google Drive access
Connected your Google account through the Integrations page
​ Setting Up Google Drive Integration
​ 1. Connect Your Google Account
Navigate to CrewAI AMP Integrations
Find Google Drive in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for file and folder management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
google_drive/get_file
file_id (string, required): The ID of the file to retrieve.
google_drive/list_files
q (string, optional): Query string to filter files (example: “name contains ‘report’”).
page_size (integer, optional): Maximum number of files to return (default: 100, max: 1000).
page_token (string, optional): Token for retrieving the next page of results.
order_by (string, optional): Sort order (example: “name”, “createdTime desc”, “modifiedTime”).
spaces (string, optional): Comma-separated list of spaces to query (drive, appDataFolder, photos).
google_drive/upload_file
name (string, required): Name of the file to create.
content (string, required): Content of the file to upload.
mime_type (string, optional): MIME type of the file (example: “text/plain”, “application/pdf”).
parent_folder_id (string, optional): ID of the parent folder where the file should be created.
description (string, optional): Description of the file.
google_drive/download_file
file_id (string, required): The ID of the file to download.
mime_type (string, optional): MIME type for export (required for Google Workspace documents).
google_drive/create_folder
name (string, required): Name of the folder to create.
parent_folder_id (string, optional): ID of the parent folder where the new folder should be created.
description (string, optional): Description of the folder.
google_drive/delete_file
file_id (string, required): The ID of the file to delete.
google_drive/share_file
file_id (string, required): The ID of the file to share.
role (string, required): The role granted by this permission (reader, writer, commenter, owner).
type (string, required): The type of the grantee (user, group, domain, anyone).
email_address (string, optional): The email address of the user or group to share with (required for user/group types).
domain (string, optional): The domain to share with (required for domain type).
send_notification_email (boolean, optional): Whether to send a notification email (default: true).
email_message (string, optional): A plain text custom message to include in the notification email.
google_drive/update_file
file_id (string, required): The ID of the file to update.
name (string, optional): New name for the file.
content (string, optional): New content for the file.
mime_type (string, optional): New MIME type for the file.
description (string, optional): New description for the file.
add_parents (string, optional): Comma-separated list of parent folder IDs to add.
remove_parents (string, optional): Comma-separated list of parent folder IDs to remove.
​ Usage Examples
​ Basic Google Drive Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Google Drive capabilities drive_agent = Agent( role = "File Manager" , goal = "Manage files and folders in Google Drive efficiently" , backstory = "An AI assistant specialized in document and file management." , apps = [ 'google_drive' ] # All Google Drive actions will be available ) # Task to organize files organize_files_task = Task( description = "List all files in the root directory and organize them into appropriate folders" , agent = drive_agent, expected_output = "Summary of files organized with folder structure" ) # Run the task crew = Crew( agents = [drive_agent], tasks = [organize_files_task] ) crew.kickoff()
​ Filtering Specific Google Drive Tools
from crewai import Agent, Task, Crew # Create agent with specific Google Drive actions only file_manager_agent = Agent( role = "Document Manager" , goal = "Upload and manage documents efficiently" , backstory = "An AI assistant that focuses on document upload and organization." , apps = [ 'google_drive/upload_file' , 'google_drive/create_folder' , 'google_drive/share_file' ] # Specific Google Drive actions ) # Task to upload and share documents document_task = Task( description = "Upload the quarterly report and share it with the finance team" , agent = file_manager_agent, expected_output = "Document uploaded and sharing permissions configured" ) crew = Crew( agents = [file_manager_agent], tasks = [document_task] ) crew.kickoff()
​ Advanced File Management
from crewai import Agent, Task, Crew file_organizer = Agent( role = "File Organizer" , goal = "Maintain organized file structure and manage permissions" , backstory = "An experienced file manager who ensures proper organization and access control." , apps = [ 'google_drive' ] ) # Complex task involving multiple Google Drive operations organization_task = Task( description = """ 1. List all files in the shared folder 2. Create folders for different document types (Reports, Presentations, Spreadsheets) 3. Move files to appropriate folders based on their type 4. Set appropriate sharing permissions for each folder 5. Create a summary document of the organization changes """ , agent = file_organizer, expected_output = "Files organized into categorized folders with proper permissions and summary report" ) crew = Crew( agents = [file_organizer], tasks = [organization_task] ) crew.kickoff()
