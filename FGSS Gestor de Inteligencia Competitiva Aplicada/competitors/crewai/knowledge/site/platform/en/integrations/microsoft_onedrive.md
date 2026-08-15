# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/microsoft_onedrive
- Raw SHA-256: `762888133942d9ce8f4a9308b3cc57f41151ca077c9e1756aa5311093d4b54f8`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Microsoft OneDrive Integration
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
Microsoft OneDrive Integration
Copy page Copy page
File and folder management with Microsoft OneDrive integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Microsoft account with OneDrive access
Connected your Microsoft account through the Integrations page
​ Setting Up Microsoft OneDrive Integration
​ 1. Connect Your Microsoft Account
Navigate to CrewAI AMP Integrations
Find Microsoft OneDrive in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for file access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
microsoft_onedrive/list_files
top (integer, optional): Number of items to retrieve (max 1000). Default is 50 .
orderby (string, optional): Order by field (e.g., “name asc”, “lastModifiedDateTime desc”). Default is “name asc”.
filter (string, optional): OData filter expression.
microsoft_onedrive/get_file_info
item_id (string, required): The ID of the file or folder.
microsoft_onedrive/download_file
item_id (string, required): The ID of the file to download.
microsoft_onedrive/upload_file
file_name (string, required): Name of the file to upload.
content (string, required): Base64 encoded file content.
microsoft_onedrive/create_folder
folder_name (string, required): Name of the folder to create.
microsoft_onedrive/delete_item
item_id (string, required): The ID of the file or folder to delete.
microsoft_onedrive/copy_item
item_id (string, required): The ID of the file or folder to copy.
parent_id (string, optional): The ID of the destination folder (optional, defaults to root).
new_name (string, optional): New name for the copied item (optional).
microsoft_onedrive/move_item
item_id (string, required): The ID of the file or folder to move.
parent_id (string, required): The ID of the destination folder.
new_name (string, optional): New name for the item (optional).
microsoft_onedrive/search_files
query (string, required): Search query string.
top (integer, optional): Number of results to return (max 1000). Default is 50 .
microsoft_onedrive/share_item
item_id (string, required): The ID of the file or folder to share.
type (string, optional): Type of sharing link. Enum: view , edit , embed . Default is view .
scope (string, optional): Scope of the sharing link. Enum: anonymous , organization . Default is anonymous .
microsoft_onedrive/get_thumbnails
item_id (string, required): The ID of the file.
microsoft_onedrive/list_files_by_path
folder_path (string, required): The folder path (e.g., ‘Documents/Reports’).
top (integer, optional): Number of items to retrieve (max 1000). Default is 50 .
orderby (string, optional): Order by field (e.g., “name asc”, “lastModifiedDateTime desc”). Default is “name asc”.
microsoft_onedrive/get_recent_files
top (integer, optional): Number of items to retrieve (max 200). Default is 25 .
microsoft_onedrive/get_shared_with_me
top (integer, optional): Number of items to retrieve (max 200). Default is 50 .
orderby (string, optional): Order by field. Default is “name asc”.
microsoft_onedrive/get_file_by_path
file_path (string, required): The file or folder path (e.g., ‘Documents/report.docx’).
microsoft_onedrive/download_file_by_path
file_path (string, required): The file path (e.g., ‘Documents/report.docx’).
​ Usage Examples
​ Basic Microsoft OneDrive Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Microsoft OneDrive capabilities onedrive_agent = Agent( role = "File Manager" , goal = "Manage files and folders in OneDrive efficiently" , backstory = "An AI assistant specialized in Microsoft OneDrive file operations and organization." , apps = [ 'microsoft_onedrive' ] # All OneDrive actions will be available ) # Task to list files and create a folder organize_files_task = Task( description = "List all files in my OneDrive root directory and create a new folder called 'Project Documents'." , agent = onedrive_agent, expected_output = "List of files displayed and new folder 'Project Documents' created." ) # Run the task crew = Crew( agents = [onedrive_agent], tasks = [organize_files_task] ) crew.kickoff()
​ File Upload and Management
from crewai import Agent, Task, Crew # Create an agent focused on file operations file_operator = Agent( role = "File Operator" , goal = "Upload, download, and manage files with precision" , backstory = "An AI assistant skilled in file handling and content management." , apps = [ 'microsoft_onedrive/upload_file' , 'microsoft_onedrive/download_file' , 'microsoft_onedrive/get_file_info' ] ) # Task to upload and manage a file file_management_task = Task( description = "Upload a text file named 'report.txt' with content 'This is a sample report for the project.' Then get information about the uploaded file." , agent = file_operator, expected_output = "File uploaded successfully and file information retrieved." ) crew = Crew( agents = [file_operator], tasks = [file_management_task] ) crew.kickoff()
​ File Organization and Sharing
from crewai import Agent, Task, Crew # Create an agent for file organization and sharing file_organizer = Agent( role = "File Organizer" , goal = "Organize files and create sharing links for collaboration" , backstory = "An AI assistant that excels at organizing files and managing sharing permissions." , apps = [ 'microsoft_onedrive/search_files' , 'microsoft_onedrive/move_item' , 'microsoft_onedrive/share_item' , 'microsoft_onedrive/create_folder' ] ) # Task to organize and share files organize_share_task = Task( description = "Search for files containing 'presentation' in the name, create a folder called 'Presentations', move the found files to this folder, and create a view-only sharing link for the folder." , agent = file_organizer, expected_output = "Files organized into 'Presentations' folder and sharing link created." ) crew = Crew( agents = [file_organizer], tasks = [organize_share_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Microsoft account has the necessary permissions for file access (e.g., Files.Read , Files.ReadWrite ).
Verify that the OAuth connection includes all required scopes.
Ensure file_name and content are provided for file uploads.
Content must be Base64 encoded for binary files.
Check that you have write permissions to OneDrive.
Double-check item IDs for correctness when accessing specific files or folders.
Item IDs are returned by other operations like list_files or search_files .
Ensure the referenced items exist and are accessible.
Use appropriate search terms for search_files operations.
For filter parameters, use proper OData syntax.
For move_item , ensure both item_id and parent_id are provided.
For copy_item , only item_id is required; parent_id defaults to root if not specified.
Verify that destination folders exist and are accessible.
Ensure the item exists before creating sharing links.
Choose appropriate type and scope based on your sharing requirements.
anonymous scope allows access without sign-in; organization requires organizational account.
​ Getting Help
Need Help?
