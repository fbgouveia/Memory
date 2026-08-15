# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/google_slides
- Raw SHA-256: `16cbe6d2613fa83e8189858be5718967801d1eaae4480f99e2a2ca7a93c0d5ed`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Google Slides Integration
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
Google Slides Integration
Copy page Copy page
Presentation creation and management with Google Slides integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Google account with Google Slides access
Connected your Google account through the Integrations page
​ Setting Up Google Slides Integration
​ 1. Connect Your Google Account
Navigate to CrewAI AMP Integrations
Find Google Slides in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for presentations, spreadsheets, and drive access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
google_slides/create_blank_presentation
title (string, required): The title of the presentation.
google_slides/get_presentation_metadata
presentationId (string, required): The ID of the presentation to retrieve.
google_slides/get_presentation_text
presentationId (string, required): The ID of the presentation.
google_slides/get_presentation
presentationId (string, required): The ID of the presentation to retrieve.
fields (string, optional): The fields to include in the response. Use this to improve performance by only returning needed data.
google_slides/batch_update_presentation
presentationId (string, required): The ID of the presentation to update.
requests (array, required): A list of updates to apply to the presentation. [ { "insertText" : { "objectId" : "slide_id" , "text" : "Your text content here" } } ]
writeControl (object, optional): Provides control over how write requests are executed. { "requiredRevisionId" : "revision_id_string" }
google_slides/get_slide_text
presentationId (string, required): The ID of the presentation.
pageObjectId (string, required): The ID of the slide/page to get text from.
google_slides/get_page
presentationId (string, required): The ID of the presentation.
pageObjectId (string, required): The ID of the page to retrieve.
google_slides/get_thumbnail
presentationId (string, required): The ID of the presentation.
pageObjectId (string, required): The ID of the page for thumbnail generation.
google_slides/create_slide
presentationId (string, required): The ID of the presentation.
insertionIndex (integer, optional): Where to insert the slide (0-based). If omitted, adds at the end.
google_slides/create_slide_with_layout
presentationId (string, required): The ID of the presentation.
layout (string, required): Layout type. One of: BLANK , TITLE , TITLE_AND_BODY , TITLE_AND_TWO_COLUMNS , TITLE_ONLY , SECTION_HEADER , ONE_COLUMN_TEXT , MAIN_POINT , BIG_NUMBER . TITLE_AND_BODY is best for title+description. TITLE for title-only slides. SECTION_HEADER for section dividers.
insertionIndex (integer, optional): Where to insert (0-based). Omit to add at end.
google_slides/create_text_box
presentationId (string, required): The ID of the presentation.
slideId (string, required): The ID of the slide to add the text box to.
text (string, required): The text content for the text box.
x (integer, optional): X position in EMU (914400 = 1 inch). Default: 914400 (1 inch from left).
y (integer, optional): Y position in EMU (914400 = 1 inch). Default: 914400 (1 inch from top).
width (integer, optional): Width in EMU. Default: 7315200 (~8 inches).
height (integer, optional): Height in EMU. Default: 914400 (~1 inch).
google_slides/delete_slide
presentationId (string, required): The ID of the presentation.
slideId (string, required): The object ID of the slide to delete. Get from get_presentation.
google_slides/duplicate_slide
presentationId (string, required): The ID of the presentation.
slideId (string, required): The object ID of the slide to duplicate. Get from get_presentation.
google_slides/move_slides
presentationId (string, required): The ID of the presentation.
slideIds (array of strings, required): Array of slide IDs to move. Must be in current presentation order.
insertionIndex (integer, required): Target position (0-based). 0 = beginning, slide count = end.
google_slides/insert_youtube_video
presentationId (string, required): The ID of the presentation.
slideId (string, required): The ID of the slide to add the video to. Get from get_presentation.
videoId (string, required): The YouTube video ID (the value after v= in the URL).
google_slides/insert_drive_video
presentationId (string, required): The ID of the presentation.
slideId (string, required): The ID of the slide to add the video to. Get from get_presentation.
fileId (string, required): The Google Drive file ID of the video.
google_slides/set_slide_background_image
presentationId (string, required): The ID of the presentation.
slideId (string, required): The ID of the slide to set the background for. Get from get_presentation.
imageUrl (string, required): Publicly accessible URL of the image to use as background.
google_slides/create_table
presentationId (string, required): The ID of the presentation.
slideId (string, required): The ID of the slide to add the table to. Get from get_presentation.
rows (integer, required): Number of rows in the table.
columns (integer, required): Number of columns in the table.
google_slides/create_table_with_content
presentationId (string, required): The ID of the presentation.
slideId (string, required): The ID of the slide to add the table to. Get from get_presentation.
rows (integer, required): Number of rows in the table.
columns (integer, required): Number of columns in the table.
content (array, required): Table content as 2D array. Each inner array is a row. Example: [[“Year”, “Revenue”], [“2023”, “$10M”]].
google_slides/import_data_from_sheet
presentationId (string, required): The ID of the presentation.
sheetId (string, required): The ID of the Google Sheet to import from.
dataRange (string, required): The range of data to import from the sheet.
google_slides/upload_file_to_drive
file (string, required): The file data to upload.
presentationId (string, required): The ID of the presentation to link the uploaded file.
google_slides/link_file_to_presentation
presentationId (string, required): The ID of the presentation.
fileId (string, required): The ID of the file to link.
google_slides/get_all_presentations
pageSize (integer, optional): The number of presentations to return per page.
pageToken (string, optional): A token for pagination.
google_slides/delete_presentation
presentationId (string, required): The ID of the presentation to delete.
​ Usage Examples
​ Basic Google Slides Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Google Slides capabilities slides_agent = Agent( role = "Presentation Manager" , goal = "Create and manage presentations efficiently" , backstory = "An AI assistant specialized in presentation creation and content management." , apps = [ 'google_slides' ] # All Google Slides actions will be available ) # Task to create a presentation create_presentation_task = Task( description = "Create a new presentation for the quarterly business review with key slides" , agent = slides_agent, expected_output = "Quarterly business review presentation created with structured content" ) # Run the task crew = Crew( agents = [slides_agent], tasks = [create_presentation_task] ) crew.kickoff()
​ Presentation Content Management
from crewai import Agent, Task, Crew content_manager = Agent( role = "Content Manager" , goal = "Manage presentation content and updates" , backstory = "An AI assistant that focuses on content creation and presentation updates." , apps = [ 'google_slides/create_blank_presentation' , 'google_slides/batch_update_presentation' , 'google_slides/get_presentation' ] ) # Task to create and update presentations content_task = Task( description = "Create a new presentation and add content slides with charts and text" , agent = content_manager, expected_output = "Presentation created with updated content and visual elements" ) crew = Crew( agents = [content_manager], tasks = [content_task] ) crew.kickoff()
​ Data Integration and Visualization
from crewai import Agent, Task, Crew data_visualizer = Agent( role = "Data Visualizer" , goal = "Create presentations with data imported from spreadsheets" , backstory = "An AI assistant that specializes in data visualization and presentation integration." , apps = [ 'google_slides' ] ) # Task to create data-driven presentations visualization_task = Task( description = """ 1. Create a new presentation for monthly sales report 2. Import data from the sales spreadsheet 3. Create charts and visualizations from the imported data 4. Generate thumbnails for slide previews """ , agent = data_visualizer, expected_output = "Data-driven presentation created with imported spreadsheet data and visualizations" ) crew = Crew( agents = [data_visualizer], tasks = [visualization_task] ) crew.kickoff()
​ Presentation Library Management
from crewai import Agent, Task, Crew library_manager = Agent( role = "Presentation Library Manager" , goal = "Manage and organize presentation libraries" , backstory = "An AI assistant that manages presentation collections and file organization." , apps = [ 'google_slides' ] ) # Task to manage presentation library library_task = Task( description = """ 1. List all existing presentations 2. Generate thumbnails for presentation previews 3. Upload supporting files to Drive and link to presentations 4. Organize presentations by topic and date """ , agent = library_manager, expected_output = "Presentation library organized with thumbnails and linked supporting files" ) crew = Crew( agents = [library_manager], tasks = [library_task] ) crew.kickoff()
​ Automated Presentation Workflows
from crewai import Agent, Task, Crew presentation_automator = Agent( role = "Presentation Automator" , goal = "Automate presentation creation and management workflows" , backstory = "An AI assistant that automates complex presentation workflows and content generation." , apps = [ 'google_slides' ] ) # Complex presentation automation task automation_task = Task( description = """ 1. Create multiple presentations for different departments 2. Import relevant data from various spreadsheets 3. Update existing presentations with new content 4. Generate thumbnails for all presentations 5. Link supporting documents from Drive 6. Create a master index presentation with links to all others """ , agent = presentation_automator, expected_output = "Automated presentation workflow completed with multiple presentations and organized structure" ) crew = Crew( agents = [presentation_automator], tasks = [automation_task] ) crew.kickoff()
​ Template and Content Creation
from crewai import Agent, Task, Crew template_creator = Agent( role = "Template Creator" , goal = "Create presentation templates and standardized content" , backstory = "An AI assistant that creates consistent presentation templates and content standards." , apps = [ 'google_slides' ] ) # Task to create templates template_task = Task( description = """ 1. Create blank presentation templates for different use cases 2. Add standard layouts and content placeholders 3. Create sample presentations with best practices 4. Generate thumbnails for template previews 5. Upload template assets to Drive and link appropriately """ , agent = template_creator, expected_output = "Presentation templates created with standardized layouts and linked assets" ) crew = Crew( agents = [template_creator], tasks = [template_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Google account has appropriate permissions for Google Slides
Verify that the OAuth connection includes required scopes for presentations, spreadsheets, and drive access
Check that presentations are shared with the authenticated account
Verify that presentation IDs are correct and presentations exist
Ensure you have access permissions to the presentations you’re trying to modify
Check that presentation IDs are properly formatted
Ensure batch update requests are properly formatted according to Google Slides API specifications
Verify that object IDs for slides and elements exist in the presentation
Check that write control revision IDs are current if using optimistic concurrency
Verify that Google Sheet IDs are correct and accessible
Ensure data ranges are properly specified using A1 notation
Check that you have read permissions for the source spreadsheets
Ensure file data is properly encoded for upload
Verify that Drive file IDs are correct when linking files
Check that you have appropriate Drive permissions for file operations
Verify that page object IDs exist in the specified presentation
Ensure presentations have content before attempting to generate thumbnails
Check that page structure is valid for thumbnail generation
Use appropriate page sizes for listing presentations
Implement proper pagination using page tokens for large result sets
Handle empty result sets gracefully
​ Getting Help
Need Help?
