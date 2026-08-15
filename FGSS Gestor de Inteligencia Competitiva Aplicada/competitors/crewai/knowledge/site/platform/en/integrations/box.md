# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/box
- Raw SHA-256: `6dbd0bdbada033eafd14c1e1d3bbab5760ded1cf088853dc5921d7df7339fc22`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Box Integration
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
Box Integration
Copy page Copy page
File storage and document management with Box integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Box account with appropriate permissions
Connected your Box account through the Integrations page
​ Setting Up Box Integration
​ 1. Connect Your Box Account
Navigate to CrewAI AMP Integrations
Find Box in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for file and folder management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
box/save_file
fileAttributes (object, required): Attributes - File metadata including name, parent folder, and timestamps. { "content_created_at" : "2012-12-12T10:53:43-08:00" , "content_modified_at" : "2012-12-12T10:53:43-08:00" , "name" : "qwerty.png" , "parent" : { "id" : "1234567" } }
file (string, required): File URL - Files must be smaller than 50MB in size. (example: “ https://picsum.photos/200/300 ”).
box/save_file_from_object
file (string, required): File - Accepts a File Object containing file data. Files must be smaller than 50MB in size.
fileName (string, required): File Name (example: “qwerty.png”).
folder (string, optional): Folder - Use Connect Portal Workflow Settings to allow users to select the File’s Folder destination. Defaults to the user’s root folder if left blank.
box/get_file_by_id
fileId (string, required): File ID - The unique identifier that represents a file. (example: “12345”).
box/list_files
folderId (string, required): Folder ID - The unique identifier that represents a folder. (example: “0”).
filterFormula (object, optional): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "direction" , "operator" : "$stringExactlyMatches" , "value" : "ASC" } ] } ] }
box/create_folder
folderName (string, required): Name - The name for the new folder. (example: “New Folder”).
folderParent (object, required): Parent Folder - The parent folder where the new folder will be created. { "id" : "123456" }
box/move_folder
folderId (string, required): Folder ID - The unique identifier that represents a folder. (example: “0”).
folderName (string, required): Name - The name for the folder. (example: “New Folder”).
folderParent (object, required): Parent Folder - The new parent folder destination. { "id" : "123456" }
box/get_folder_by_id
folderId (string, required): Folder ID - The unique identifier that represents a folder. (example: “0”).
box/search_folders
folderId (string, required): Folder ID - The folder to search within.
filterFormula (object, optional): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "sort" , "operator" : "$stringExactlyMatches" , "value" : "name" } ] } ] }
box/delete_folder
folderId (string, required): Folder ID - The unique identifier that represents a folder. (example: “0”).
recursive (boolean, optional): Recursive - Delete a folder that is not empty by recursively deleting the folder and all of its content.
​ Usage Examples
​ Basic Box Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Box capabilities box_agent = Agent( role = "Document Manager" , goal = "Manage files and folders in Box efficiently" , backstory = "An AI assistant specialized in document management and file organization." , apps = [ 'box' ] # All Box actions will be available ) # Task to create a folder structure create_structure_task = Task( description = "Create a folder called 'Project Files' in the root directory and upload a document from URL" , agent = box_agent, expected_output = "Folder created and file uploaded successfully" ) # Run the task crew = Crew( agents = [box_agent], tasks = [create_structure_task] ) crew.kickoff()
​ Filtering Specific Box Tools
from crewai import Agent, Task, Crew # Create agent with specific Box actions only file_organizer_agent = Agent( role = "File Organizer" , goal = "Organize and manage file storage efficiently" , backstory = "An AI assistant that focuses on file organization and storage management." , apps = [ 'box/create_folder' , 'box/save_file' , 'box/list_files' ] # Specific Box actions ) # Task to organize files organization_task = Task( description = "Create a folder structure for the marketing team and organize existing files" , agent = file_organizer_agent, expected_output = "Folder structure created and files organized" ) crew = Crew( agents = [file_organizer_agent], tasks = [organization_task] ) crew.kickoff()
​ Advanced File Management
from crewai import Agent, Task, Crew file_manager = Agent( role = "File Manager" , goal = "Maintain organized file structure and manage document lifecycle" , backstory = "An experienced file manager who ensures documents are properly organized and accessible." , apps = [ 'box' ] ) # Complex task involving multiple Box operations management_task = Task( description = """ 1. List all files in the root folder 2. Create monthly archive folders for the current year 3. Move old files to appropriate archive folders 4. Generate a summary report of the file organization """ , agent = file_manager, expected_output = "Files organized into archive structure with summary report" ) crew = Crew( agents = [file_manager], tasks = [management_task] ) crew.kickoff()
