# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/google_sheets
- Raw SHA-256: `445d3656952fefd636947646d6e973576803de3b6587d197ee0b0ebf8b61c88e`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Google Sheets Integration
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
Google Sheets Integration
Copy page Copy page
Spreadsheet data synchronization with Google Sheets integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Google account with Google Sheets access
Connected your Google account through the Integrations page
Spreadsheets with proper column headers for data operations
​ Setting Up Google Sheets Integration
​ 1. Connect Your Google Account
Navigate to CrewAI AMP Integrations
Find Google Sheets in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for spreadsheet access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
google_sheets/get_spreadsheet
spreadsheetId (string, required): The ID of the spreadsheet to retrieve.
ranges (array, optional): The ranges to retrieve from the spreadsheet.
includeGridData (boolean, optional): True if grid data should be returned. Default: false
fields (string, optional): The fields to include in the response. Use this to improve performance by only returning needed data.
google_sheets/get_values
spreadsheetId (string, required): The ID of the spreadsheet to retrieve data from.
range (string, required): The A1 notation or R1C1 notation of the range to retrieve values from.
valueRenderOption (string, optional): How values should be represented in the output. Options: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA. Default: FORMATTED_VALUE
dateTimeRenderOption (string, optional): How dates, times, and durations should be represented in the output. Options: SERIAL_NUMBER, FORMATTED_STRING. Default: SERIAL_NUMBER
majorDimension (string, optional): The major dimension that results should use. Options: ROWS, COLUMNS. Default: ROWS
google_sheets/update_values
spreadsheetId (string, required): The ID of the spreadsheet to update.
range (string, required): The A1 notation of the range to update.
values (array, required): The data to be written. Each array represents a row. [ [ "Value1" , "Value2" , "Value3" ], [ "Value4" , "Value5" , "Value6" ] ]
valueInputOption (string, optional): How the input data should be interpreted. Options: RAW, USER_ENTERED. Default: USER_ENTERED
google_sheets/append_values
spreadsheetId (string, required): The ID of the spreadsheet to update.
range (string, required): The A1 notation of a range to search for a logical table of data.
values (array, required): The data to append. Each array represents a row. [ [ "Value1" , "Value2" , "Value3" ], [ "Value4" , "Value5" , "Value6" ] ]
valueInputOption (string, optional): How the input data should be interpreted. Options: RAW, USER_ENTERED. Default: USER_ENTERED
insertDataOption (string, optional): How the input data should be inserted. Options: OVERWRITE, INSERT_ROWS. Default: INSERT_ROWS
google_sheets/create_spreadsheet
title (string, required): The title of the new spreadsheet.
sheets (array, optional): The sheets that are part of the spreadsheet. [ { "properties" : { "title" : "Sheet1" } } ]
​ Usage Examples
​ Basic Google Sheets Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Google Sheets capabilities sheets_agent = Agent( role = "Data Manager" , goal = "Manage spreadsheet data and track information efficiently" , backstory = "An AI assistant specialized in data management and spreadsheet operations." , apps = [ 'google_sheets' ] ) # Task to add new data to a spreadsheet data_entry_task = Task( description = "Add a new customer record to the customer database spreadsheet with name, email, and signup date" , agent = sheets_agent, expected_output = "New customer record added successfully to the spreadsheet" ) # Run the task crew = Crew( agents = [sheets_agent], tasks = [data_entry_task] ) crew.kickoff()
​ Filtering Specific Google Sheets Tools
from crewai import Agent, Task, Crew # Create agent with specific Google Sheets actions only data_collector = Agent( role = "Data Collector" , goal = "Collect and organize data in spreadsheets" , backstory = "An AI assistant that focuses on data collection and organization." , apps = [ 'google_sheets/get_values' , 'google_sheets/update_values' ] ) # Task to collect and organize data data_collection = Task( description = "Retrieve current inventory data and add new product entries to the inventory spreadsheet" , agent = data_collector, expected_output = "Inventory data retrieved and new products added successfully" ) crew = Crew( agents = [data_collector], tasks = [data_collection] ) crew.kickoff()
​ Data Analysis and Reporting
from crewai import Agent, Task, Crew data_analyst = Agent( role = "Data Analyst" , goal = "Analyze spreadsheet data and generate insights" , backstory = "An experienced data analyst who extracts insights from spreadsheet data." , apps = [ 'google_sheets' ] ) # Task to analyze data and create reports analysis_task = Task( description = """ 1. Retrieve all sales data from the current month's spreadsheet 2. Analyze the data for trends and patterns 3. Create a summary report in a new row with key metrics """ , agent = data_analyst, expected_output = "Sales data analyzed and summary report created with key insights" ) crew = Crew( agents = [data_analyst], tasks = [analysis_task] ) crew.kickoff()
​ Spreadsheet Creation and Management
from crewai import Agent, Task, Crew spreadsheet_manager = Agent( role = "Spreadsheet Manager" , goal = "Create and manage spreadsheets efficiently" , backstory = "An AI assistant that specializes in creating and organizing spreadsheets." , apps = [ 'google_sheets' ] ) # Task to create and set up new spreadsheets setup_task = Task( description = """ 1. Create a new spreadsheet for quarterly reports 2. Set up proper headers and structure 3. Add initial data and formatting """ , agent = spreadsheet_manager, expected_output = "New quarterly report spreadsheet created and properly structured" ) crew = Crew( agents = [spreadsheet_manager], tasks = [setup_task] ) crew.kickoff()
​ Automated Data Updates
from crewai import Agent, Task, Crew data_updater = Agent( role = "Data Updater" , goal = "Automatically update and maintain spreadsheet data" , backstory = "An AI assistant that maintains data accuracy and updates records automatically." , apps = [ 'google_sheets' ] ) # Task to update data based on conditions update_task = Task( description = """ 1. Get spreadsheet properties and structure 2. Read current data from specific ranges 3. Update values in target ranges with new data 4. Append new records to the bottom of the sheet """ , agent = data_updater, expected_output = "Spreadsheet data updated successfully with new values and records" ) crew = Crew( agents = [data_updater], tasks = [update_task] ) crew.kickoff()
​ Complex Data Management Workflow
from crewai import Agent, Task, Crew workflow_manager = Agent( role = "Data Workflow Manager" , goal = "Manage complex data workflows across multiple spreadsheets" , backstory = "An AI assistant that orchestrates complex data operations across multiple spreadsheets." , apps = [ 'google_sheets' ] ) # Complex workflow task workflow_task = Task( description = """ 1. Get all customer data from the main customer spreadsheet 2. Create a new monthly summary spreadsheet 3. Append summary data to the new spreadsheet 4. Update customer status based on activity metrics 5. Generate reports with proper formatting """ , agent = workflow_manager, expected_output = "Monthly customer workflow completed with new spreadsheet and updated data" ) crew = Crew( agents = [workflow_manager], tasks = [workflow_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Google account has edit access to the target spreadsheets
Verify that the OAuth connection includes required scopes for Google Sheets API
Check that spreadsheets are shared with the authenticated account
Ensure worksheets have proper column headers before creating or updating rows
Verify that range notation (A1 format) is correct for the target cells
Check that the specified spreadsheet ID exists and is accessible
Ensure data values match the expected format for each column
Use proper date formats for date columns (ISO format recommended)
Verify that numeric values are properly formatted for number columns
Use proper A1 notation for ranges (e.g., “A1:C10”, “Sheet1!A1:B5”)
Ensure range references don’t exceed the actual spreadsheet dimensions
Verify that sheet names in range references match actual sheet names
Choose appropriate valueInputOption (RAW vs USER_ENTERED) for your data
Select proper valueRenderOption based on how you want data formatted
Consider dateTimeRenderOption for consistent date/time handling
Ensure spreadsheet titles are unique and follow naming conventions
Verify that sheet properties are properly structured when creating sheets
Check that you have permissions to create new spreadsheets in your account
​ Getting Help
Need Help?
