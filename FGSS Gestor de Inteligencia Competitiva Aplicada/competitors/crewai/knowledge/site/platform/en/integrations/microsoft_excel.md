# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/microsoft_excel
- Raw SHA-256: `79fdb1298ed080579c0b2d075605b369809422c5208532bd3548121cb5035749`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Microsoft Excel Integration
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
Microsoft Excel Integration
Copy page Copy page
Workbook and data management with Microsoft Excel integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Microsoft 365 account with Excel and OneDrive/SharePoint access
Connected your Microsoft account through the Integrations page
​ Setting Up Microsoft Excel Integration
​ 1. Connect Your Microsoft Account
Navigate to CrewAI AMP Integrations
Find Microsoft Excel in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for files and Excel workbook access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
microsoft_excel/create_workbook
file_path (string, required): Path where to create the workbook (e.g., ‘MyWorkbook.xlsx’)
worksheets (array, optional): Initial worksheets to create [ { "name" : "Sheet1" }, { "name" : "Data" } ]
microsoft_excel/get_workbooks
select (string, optional): Select specific properties to return
filter (string, optional): Filter results using OData syntax
expand (string, optional): Expand related resources inline
top (integer, optional): Number of items to return. Minimum: 1, Maximum: 999
orderby (string, optional): Order results by specified properties
microsoft_excel/get_worksheets
file_id (string, required): The ID of the Excel file
select (string, optional): Select specific properties to return (e.g., ‘id,name,position’)
filter (string, optional): Filter results using OData syntax
expand (string, optional): Expand related resources inline
top (integer, optional): Number of items to return. Minimum: 1, Maximum: 999
orderby (string, optional): Order results by specified properties
microsoft_excel/create_worksheet
file_id (string, required): The ID of the Excel file
name (string, required): Name of the new worksheet
microsoft_excel/get_range_data
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
range (string, required): Range address (e.g., ‘A1:C10’)
microsoft_excel/update_range_data
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
range (string, required): Range address (e.g., ‘A1:C10’)
values (array, required): 2D array of values to set in the range [ [ "Name" , "Age" , "City" ], [ "John" , 30 , "New York" ], [ "Jane" , 25 , "Los Angeles" ] ]
microsoft_excel/add_table
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
range (string, required): Range for the table (e.g., ‘A1:D10’)
has_headers (boolean, optional): Whether the first row contains headers. Default: true
microsoft_excel/get_tables
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
microsoft_excel/add_table_row
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
table_name (string, required): Name of the table
values (array, required): Array of values for the new row [ "John Doe" , 35 , "Manager" , "Sales" ]
microsoft_excel/get_table_data
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
table_name (string, required): Name of the table
microsoft_excel/create_chart
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
chart_type (string, required): Type of chart (e.g., ‘ColumnClustered’, ‘Line’, ‘Pie’)
source_data (string, required): Range of data for the chart (e.g., ‘A1:B10’)
series_by (string, optional): How to interpret the data (‘Auto’, ‘Columns’, or ‘Rows’). Default: Auto
microsoft_excel/get_cell
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
row (integer, required): Row number (0-based)
column (integer, required): Column number (0-based)
microsoft_excel/get_used_range
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
microsoft_excel/get_used_range_metadata
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
microsoft_excel/list_charts
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
microsoft_excel/delete_worksheet
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet to delete
microsoft_excel/delete_table
file_id (string, required): The ID of the Excel file
worksheet_name (string, required): Name of the worksheet
table_name (string, required): Name of the table to delete
microsoft_excel/list_names
file_id (string, required): The ID of the Excel file
​ Usage Examples
​ Basic Excel Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Excel capabilities excel_agent = Agent( role = "Excel Data Manager" , goal = "Manage Excel workbooks and data efficiently" , backstory = "An AI assistant specialized in Excel data management and analysis." , apps = [ 'microsoft_excel' ] # All Excel actions will be available ) # Task to create and populate a workbook data_management_task = Task( description = "Create a new sales report workbook with data analysis and charts" , agent = excel_agent, expected_output = "Excel workbook created with sales data, analysis, and visualizations" ) # Run the task crew = Crew( agents = [excel_agent], tasks = [data_management_task] ) crew.kickoff()
​ Data Analysis and Reporting
from crewai import Agent, Task, Crew data_analyst = Agent( role = "Data Analyst" , goal = "Analyze data in Excel and create comprehensive reports" , backstory = "An AI assistant that specializes in data analysis and Excel reporting." , apps = [ 'microsoft_excel/get_workbooks' , 'microsoft_excel/get_range_data' , 'microsoft_excel/create_chart' , 'microsoft_excel/add_table' ] ) # Task to analyze existing data analysis_task = Task( description = "Analyze sales data in existing workbooks and create summary charts and tables" , agent = data_analyst, expected_output = "Data analyzed with summary charts and tables created" ) crew = Crew( agents = [data_analyst], tasks = [analysis_task] ) crew.kickoff()
​ Workbook Creation and Structure
from crewai import Agent, Task, Crew workbook_creator = Agent( role = "Workbook Creator" , goal = "Create structured Excel workbooks with multiple worksheets and data organization" , backstory = "An AI assistant that creates well-organized Excel workbooks for various business needs." , apps = [ 'microsoft_excel' ] ) # Task to create structured workbooks creation_task = Task( description = """ 1. Create a new quarterly report workbook 2. Add multiple worksheets for different departments 3. Create tables with headers for data organization 4. Set up charts for key metrics visualization """ , agent = workbook_creator, expected_output = "Structured workbook created with multiple worksheets, tables, and charts" ) crew = Crew( agents = [workbook_creator], tasks = [creation_task] ) crew.kickoff()
​ Data Manipulation and Updates
from crewai import Agent, Task, Crew data_manipulator = Agent( role = "Data Manipulator" , goal = "Update and manipulate data in Excel worksheets efficiently" , backstory = "An AI assistant that handles data updates, table management, and range operations." , apps = [ 'microsoft_excel' ] ) # Task to manipulate data manipulation_task = Task( description = """ 1. Get data from existing worksheets 2. Update specific ranges with new information 3. Add new rows to existing tables 4. Create additional charts based on updated data 5. Organize data across multiple worksheets """ , agent = data_manipulator, expected_output = "Data updated across worksheets with new charts and organized structure" ) crew = Crew( agents = [data_manipulator], tasks = [manipulation_task] ) crew.kickoff()
​ Advanced Excel Automation
from crewai import Agent, Task, Crew excel_automator = Agent( role = "Excel Automator" , goal = "Automate complex Excel workflows and data processing" , backstory = "An AI assistant that automates sophisticated Excel operations and data workflows." , apps = [ 'microsoft_excel' ] ) # Complex automation task automation_task = Task( description = """ 1. Scan all Excel workbooks for specific data patterns 2. Create consolidated reports from multiple workbooks 3. Generate charts and tables for trend analysis 4. Set up named ranges for easy data reference 5. Create dashboard worksheets with key metrics 6. Clean up unused worksheets and tables """ , agent = excel_automator, expected_output = "Automated Excel workflow completed with consolidated reports and dashboards" ) crew = Crew( agents = [excel_automator], tasks = [automation_task] ) crew.kickoff()
​ Financial Modeling and Analysis
from crewai import Agent, Task, Crew financial_modeler = Agent( role = "Financial Modeler" , goal = "Create financial models and analysis in Excel" , backstory = "An AI assistant specialized in financial modeling and analysis using Excel." , apps = [ 'microsoft_excel' ] ) # Task for financial modeling modeling_task = Task( description = """ 1. Create financial model workbooks with multiple scenarios 2. Set up input tables for assumptions and variables 3. Create calculation worksheets with formulas and logic 4. Generate charts for financial projections and trends 5. Add summary tables for key financial metrics 6. Create sensitivity analysis tables """ , agent = financial_modeler, expected_output = "Financial model created with scenarios, calculations, and analysis charts" ) crew = Crew( agents = [financial_modeler], tasks = [modeling_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Microsoft account has appropriate permissions for Excel and OneDrive/SharePoint
Verify that the OAuth connection includes required scopes (Files.Read.All, Files.ReadWrite.All)
Check that you have access to the specific workbooks you’re trying to modify
Verify that file IDs are correct and files exist in your OneDrive or SharePoint
Ensure file paths are properly formatted when creating new workbooks
Check that workbook files have the correct .xlsx extension
Verify that worksheet names exist in the specified workbook
Ensure range addresses are properly formatted (e.g., ‘A1:C10’)
Check that ranges don’t exceed worksheet boundaries
Ensure data values are properly formatted for Excel (strings, numbers, integers)
Verify that 2D arrays for ranges have consistent row and column counts
Check that table data includes proper headers when has_headers is true
Verify that chart types are supported (ColumnClustered, Line, Pie, etc.)
Ensure source data ranges contain appropriate data for the chart type
Check that the source data range exists and contains data
Ensure table names are unique within worksheets
Verify that table ranges don’t overlap with existing tables
Check that new row data matches the table’s column structure
Verify that row and column indices are 0-based for cell operations
Ensure ranges contain data when using get_used_range
Check that named ranges exist before referencing them
​ Getting Help
Need Help?
