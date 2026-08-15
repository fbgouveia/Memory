# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/microsoft_sharepoint
- Raw SHA-256: `9d91efe9f559058c8a74d1e077ca92be60fece7e6a859779ac896230e2ecdb53`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Microsoft SharePoint Integration
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
Microsoft SharePoint Integration
Copy page Copy page
Site, list, and document management with Microsoft SharePoint integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Microsoft 365 account with SharePoint access
Connected your Microsoft account through the Integrations page
​ Setting Up Microsoft SharePoint Integration
​ 1. Connect Your Microsoft Account
Navigate to CrewAI AMP Integrations
Find Microsoft SharePoint in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for SharePoint sites and content access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
microsoft_sharepoint/get_sites
search (string, optional): Search query to filter sites
select (string, optional): Select specific properties to return (e.g., ‘displayName,id,webUrl’)
filter (string, optional): Filter results using OData syntax
expand (string, optional): Expand related resources inline
top (integer, optional): Number of items to return. Minimum: 1, Maximum: 999
skip (integer, optional): Number of items to skip. Minimum: 0
orderby (string, optional): Order results by specified properties (e.g., ‘displayName desc’)
microsoft_sharepoint/get_site
site_id (string, required): The ID of the SharePoint site
select (string, optional): Select specific properties to return (e.g., ‘displayName,id,webUrl,drives’)
expand (string, optional): Expand related resources inline (e.g., ‘drives,lists’)
microsoft_sharepoint/get_drives
site_id (string, required): The full SharePoint site identifier from get_sites
top (integer, optional): Maximum number of drives to return per page (1-999). Default is 100
skip_token (string, optional): Pagination token from a previous response to fetch the next page of results
select (string, optional): Comma-separated list of properties to return (e.g., ‘id,name,webUrl,driveType’)
microsoft_sharepoint/get_site_lists
site_id (string, required): The ID of the SharePoint site
microsoft_sharepoint/get_list
site_id (string, required): The ID of the SharePoint site
list_id (string, required): The ID of the list
microsoft_sharepoint/get_list_items
site_id (string, required): The ID of the SharePoint site
list_id (string, required): The ID of the list
expand (string, optional): Expand related data (e.g., ‘fields’)
microsoft_sharepoint/create_list_item
site_id (string, required): The ID of the SharePoint site
list_id (string, required): The ID of the list
fields (object, required): The field values for the new item { "Title" : "New Item Title" , "Description" : "Item description" , "Status" : "Active" }
microsoft_sharepoint/update_list_item
site_id (string, required): The ID of the SharePoint site
list_id (string, required): The ID of the list
item_id (string, required): The ID of the item to update
fields (object, required): The field values to update { "Title" : "Updated Title" , "Status" : "Completed" }
microsoft_sharepoint/delete_list_item
site_id (string, required): The ID of the SharePoint site
list_id (string, required): The ID of the list
item_id (string, required): The ID of the item to delete
microsoft_sharepoint/upload_file_to_library
site_id (string, required): The ID of the SharePoint site
file_path (string, required): The path where to upload the file (e.g., ‘folder/filename.txt’)
content (string, required): The file content to upload
microsoft_sharepoint/list_files
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
folder_id (string, optional): The ID of the folder to list contents from. Use ‘root’ for the root folder, or provide a folder ID from a previous list_files call. Default is ‘root’
top (integer, optional): Maximum number of items to return per page (1-1000). Default is 50
skip_token (string, optional): Pagination token from a previous response to fetch the next page of results
orderby (string, optional): Sort order for results (e.g., ‘name asc’, ‘size desc’, ‘lastModifiedDateTime desc’). Default is ‘name asc’
filter (string, optional): OData filter to narrow results (e.g., ‘file ne null’ for files only, ‘folder ne null’ for folders only)
select (string, optional): Comma-separated list of fields to return (e.g., ‘id,name,size,folder,file,webUrl,lastModifiedDateTime’)
microsoft_sharepoint/delete_file
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the file or folder to delete. Obtain from list_files
microsoft_sharepoint/list_files_by_path
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
folder_path (string, required): The full path to the folder without leading/trailing slashes (e.g., ‘Documents’, ‘Reports/2024/Q1’)
top (integer, optional): Maximum number of items to return per page (1-1000). Default is 50
skip_token (string, optional): Pagination token from a previous response to fetch the next page of results
orderby (string, optional): Sort order for results (e.g., ‘name asc’, ‘size desc’). Default is ‘name asc’
select (string, optional): Comma-separated list of fields to return (e.g., ‘id,name,size,folder,file,webUrl,lastModifiedDateTime’)
microsoft_sharepoint/download_file
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the file to download. Obtain from list_files or list_files_by_path
microsoft_sharepoint/get_file_info
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the file or folder. Obtain from list_files or list_files_by_path
select (string, optional): Comma-separated list of properties to return (e.g., ‘id,name,size,createdDateTime,lastModifiedDateTime,webUrl,createdBy,lastModifiedBy’)
microsoft_sharepoint/create_folder
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
folder_name (string, required): Name for the new folder. Cannot contain: \ / : * ? ” < > |
parent_id (string, optional): The ID of the parent folder. Use ‘root’ for the document library root, or provide a folder ID from list_files. Default is ‘root’
microsoft_sharepoint/search_files
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
query (string, required): Search keywords (e.g., ‘report’, ‘budget 2024’). Wildcards like *.txt are not supported
top (integer, optional): Maximum number of results to return per page (1-1000). Default is 50
skip_token (string, optional): Pagination token from a previous response to fetch the next page of results
select (string, optional): Comma-separated list of fields to return (e.g., ‘id,name,size,folder,file,webUrl,lastModifiedDateTime’)
microsoft_sharepoint/copy_file
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the file or folder to copy. Obtain from list_files or search_files
destination_folder_id (string, required): The ID of the destination folder. Use ‘root’ for the root folder, or a folder ID from list_files
new_name (string, optional): New name for the copy. If not provided, the original name is used
microsoft_sharepoint/move_file
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the file or folder to move. Obtain from list_files or search_files
destination_folder_id (string, required): The ID of the destination folder. Use ‘root’ for the root folder, or a folder ID from list_files
new_name (string, optional): New name for the moved item. If not provided, the original name is kept
microsoft_sharepoint/get_excel_worksheets
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
select (string, optional): Comma-separated list of properties to return (e.g., ‘id,name,position,visibility’)
filter (string, optional): OData filter expression (e.g., “visibility eq ‘Visible’” to exclude hidden sheets)
top (integer, optional): Maximum number of worksheets to return. Minimum: 1, Maximum: 999
orderby (string, optional): Sort order (e.g., ‘position asc’ to return sheets in tab order)
microsoft_sharepoint/create_excel_worksheet
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
name (string, required): Name for the new worksheet. Maximum 31 characters. Cannot contain: \ / * ? : [ ]. Must be unique within the workbook
microsoft_sharepoint/get_excel_range_data
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet (tab) to read from. Obtain from get_excel_worksheets. Case-sensitive
range (string, required): Cell range in A1 notation (e.g., ‘A1:C10’, ‘A:C’, ‘1:5’, ‘A1’)
select (string, optional): Comma-separated list of properties to return (e.g., ‘address,values,formulas,numberFormat,text’)
microsoft_sharepoint/update_excel_range_data
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet (tab) to update. Obtain from get_excel_worksheets. Case-sensitive
range (string, required): Cell range in A1 notation where values will be written (e.g., ‘A1:C3’ for a 3x3 block)
values (array, required): 2D array of values (rows containing cells). Example for A1:B2: [[“Header1”, “Header2”], [“Value1”, “Value2”]]. Use null to clear a cell
microsoft_sharepoint/get_excel_used_range_metadata
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet (tab) to read. Obtain from get_excel_worksheets. Case-sensitive
microsoft_sharepoint/get_excel_used_range
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet (tab) to read. Obtain from get_excel_worksheets. Case-sensitive
select (string, optional): Comma-separated list of properties to return (e.g., ‘address,values,formulas,numberFormat,text,rowCount,columnCount’)
microsoft_sharepoint/get_excel_cell
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet (tab). Obtain from get_excel_worksheets. Case-sensitive
row (integer, required): 0-based row index (row 0 = Excel row 1). Valid range: 0-1048575
column (integer, required): 0-based column index (column 0 = A, column 1 = B). Valid range: 0-16383
select (string, optional): Comma-separated list of properties to return (e.g., ‘address,values,formulas,numberFormat,text’)
microsoft_sharepoint/add_excel_table
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet containing the data range. Obtain from get_excel_worksheets
range (string, required): Cell range to convert into a table, including headers and data (e.g., ‘A1:D10’ where A1:D1 contains column headers)
has_headers (boolean, optional): Set to true if the first row contains column headers. Default is true
microsoft_sharepoint/get_excel_tables
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet to get tables from. Obtain from get_excel_worksheets
microsoft_sharepoint/add_excel_table_row
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet containing the table. Obtain from get_excel_worksheets
table_name (string, required): Name of the table to add the row to (e.g., ‘Table1’). Obtain from get_excel_tables. Case-sensitive
values (array, required): Array of cell values for the new row, one per column in table order (e.g., [“John Doe”, “ john@example.com ”, 25])
microsoft_sharepoint/get_excel_table_data
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet containing the table. Obtain from get_excel_worksheets
table_name (string, required): Name of the table to get data from (e.g., ‘Table1’). Obtain from get_excel_tables. Case-sensitive
select (string, optional): Comma-separated list of properties to return (e.g., ‘address,values,formulas,numberFormat,text’)
microsoft_sharepoint/create_excel_chart
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet where the chart will be created. Obtain from get_excel_worksheets
chart_type (string, required): Chart type (e.g., ‘ColumnClustered’, ‘ColumnStacked’, ‘Line’, ‘LineMarkers’, ‘Pie’, ‘Bar’, ‘BarClustered’, ‘Area’, ‘Scatter’, ‘Doughnut’)
source_data (string, required): Data range for the chart in A1 notation, including headers (e.g., ‘A1:B10’)
series_by (string, optional): How data series are organized: ‘Auto’, ‘Columns’, or ‘Rows’. Default is ‘Auto’
microsoft_sharepoint/list_excel_charts
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet to list charts from. Obtain from get_excel_worksheets
microsoft_sharepoint/delete_excel_worksheet
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet to delete. Case-sensitive. All data, tables, and charts on this sheet will be permanently removed
microsoft_sharepoint/delete_excel_table
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
worksheet_name (string, required): Name of the worksheet containing the table. Obtain from get_excel_worksheets
table_name (string, required): Name of the table to delete (e.g., ‘Table1’). Obtain from get_excel_tables. The data in the cells will remain after table deletion
microsoft_sharepoint/list_excel_names
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Excel file in SharePoint. Obtain from list_files or search_files
microsoft_sharepoint/get_word_document_content
site_id (string, required): The full SharePoint site identifier from get_sites
drive_id (string, required): The ID of the document library. Call get_drives first to get valid drive IDs
item_id (string, required): The unique identifier of the Word document (.docx) in SharePoint. Obtain from list_files or search_files
​ Usage Examples
​ Basic SharePoint Agent Setup
from crewai import Agent, Task, Crew # Create an agent with SharePoint capabilities sharepoint_agent = Agent( role = "SharePoint Manager" , goal = "Manage SharePoint sites, lists, and documents efficiently" , backstory = "An AI assistant specialized in SharePoint content management and collaboration." , apps = [ 'microsoft_sharepoint' ] # All SharePoint actions will be available ) # Task to organize SharePoint content content_organization_task = Task( description = "List all accessible SharePoint sites and organize content by department" , agent = sharepoint_agent, expected_output = "SharePoint sites listed and content organized by department" ) # Run the task crew = Crew( agents = [sharepoint_agent], tasks = [content_organization_task] ) crew.kickoff()
​ List Management and Data Operations
from crewai import Agent, Task, Crew list_manager = Agent( role = "List Manager" , goal = "Manage SharePoint lists and data efficiently" , backstory = "An AI assistant that focuses on SharePoint list management and data operations." , apps = [ 'microsoft_sharepoint/get_site_lists' , 'microsoft_sharepoint/get_list_items' , 'microsoft_sharepoint/create_list_item' , 'microsoft_sharepoint/update_list_item' ] ) # Task to manage list data list_management_task = Task( description = "Get all lists from the project site, review items, and update status for completed tasks" , agent = list_manager, expected_output = "SharePoint lists reviewed and task statuses updated" ) crew = Crew( agents = [list_manager], tasks = [list_management_task] ) crew.kickoff()
​ Document Library Management
from crewai import Agent, Task, Crew document_manager = Agent( role = "Document Manager" , goal = "Manage SharePoint document libraries and files" , backstory = "An AI assistant that specializes in document organization and file management." , apps = [ 'microsoft_sharepoint' ] ) # Task to manage documents document_task = Task( description = """ 1. Get all files from the main document library 2. Upload new policy documents to the appropriate folders 3. Organize files by department and date 4. Remove outdated documents """ , agent = document_manager, expected_output = "Document library organized with new files uploaded and outdated files removed" ) crew = Crew( agents = [document_manager], tasks = [document_task] ) crew.kickoff()
​ Site Administration and Analysis
from crewai import Agent, Task, Crew site_administrator = Agent( role = "Site Administrator" , goal = "Administer and analyze SharePoint sites" , backstory = "An AI assistant that handles site administration and provides insights on site usage." , apps = [ 'microsoft_sharepoint' ] ) # Task for site administration admin_task = Task( description = """ 1. Get information about all accessible SharePoint sites 2. Analyze site structure and content organization 3. Identify sites with low activity or outdated content 4. Generate recommendations for site optimization """ , agent = site_administrator, expected_output = "Site analysis completed with optimization recommendations" ) crew = Crew( agents = [site_administrator], tasks = [admin_task] ) crew.kickoff()
​ Automated Content Workflows
from crewai import Agent, Task, Crew workflow_automator = Agent( role = "Workflow Automator" , goal = "Automate SharePoint content workflows and processes" , backstory = "An AI assistant that automates complex SharePoint workflows and content management processes." , apps = [ 'microsoft_sharepoint' ] ) # Complex workflow automation task automation_task = Task( description = """ 1. Monitor project lists across multiple sites 2. Create status reports based on list data 3. Upload reports to designated document libraries 4. Update project tracking lists with completion status 5. Archive completed project documents 6. Send notifications for overdue items """ , agent = workflow_automator, expected_output = "Automated workflow completed with status reports generated and project tracking updated" ) crew = Crew( agents = [workflow_automator], tasks = [automation_task] ) crew.kickoff()
​ Data Integration and Reporting
from crewai import Agent, Task, Crew data_integrator = Agent( role = "Data Integrator" , goal = "Integrate and analyze data across SharePoint sites and lists" , backstory = "An AI assistant that specializes in data integration and cross-site analysis." , apps = [ 'microsoft_sharepoint' ] ) # Task for data integration integration_task = Task( description = """ 1. Get data from multiple SharePoint lists across different sites 2. Consolidate information into comprehensive reports 3. Create new list items with aggregated data 4. Upload analytical reports to executive document library 5. Update dashboard lists with key metrics """ , agent = data_integrator, expected_output = "Data integrated across sites with comprehensive reports and updated dashboards" ) crew = Crew( agents = [data_integrator], tasks = [integration_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Microsoft account has appropriate permissions for SharePoint sites
Verify that the OAuth connection includes required scopes (Sites.Read.All, Sites.ReadWrite.All)
Check that you have access to the specific sites and lists you’re trying to access
Verify that site IDs and list IDs are correct and properly formatted
Ensure that sites and lists exist and are accessible to your account
Use the get_sites and get_site_lists actions to discover valid IDs
Ensure field names match exactly with the SharePoint list schema
Verify that required fields are included when creating or updating list items
Check that field types and values are compatible with the list column definitions
Ensure file paths are properly formatted and don’t contain invalid characters
Verify that you have write permissions to the target document library
Check that file content is properly encoded for upload
Use proper OData syntax for filter, select, expand, and orderby parameters
Verify that property names used in queries exist in the target resources
Test simple queries before building complex filter expressions
Use top and skip parameters appropriately for large result sets
Implement proper pagination for lists with many items
Consider using select parameters to return only needed properties
Ensure you have proper permissions for document library operations
Verify that drive item IDs are correct when deleting files or folders
Check that file paths don’t conflict with existing content
​ Getting Help
Need Help?
