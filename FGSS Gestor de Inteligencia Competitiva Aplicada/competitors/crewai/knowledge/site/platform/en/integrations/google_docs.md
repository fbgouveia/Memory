# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/google_docs
- Raw SHA-256: `29961bd416c2a7d8bc40d88b826ee13dbf0754284691aa50aebfaa1e1694300b`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Google Docs Integration
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
Google Docs Integration
Copy page Copy page
Document creation and editing with Google Docs integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Google account with Google Docs access
Connected your Google account through the Integrations page
​ Setting Up Google Docs Integration
​ 1. Connect Your Google Account
Navigate to CrewAI AMP Integrations
Find Google Docs in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for document access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
google_docs/create_document
title (string, optional): The title for the new document.
google_docs/get_document
documentId (string, required): The ID of the document to retrieve.
includeTabsContent (boolean, optional): Whether to include tab content. Default is false .
suggestionsViewMode (string, optional): The suggestions view mode to apply to the document. Enum: DEFAULT_FOR_CURRENT_ACCESS , PREVIEW_SUGGESTIONS_ACCEPTED , PREVIEW_WITHOUT_SUGGESTIONS . Default is DEFAULT_FOR_CURRENT_ACCESS .
google_docs/batch_update
documentId (string, required): The ID of the document to update.
requests (array, required): A list of updates to apply to the document. Each item is an object representing a request.
writeControl (object, optional): Provides control over how write requests are executed. Contains requiredRevisionId (string) and targetRevisionId (string).
google_docs/insert_text
documentId (string, required): The ID of the document to update.
text (string, required): The text to insert.
index (integer, optional): The zero-based index where to insert the text. Default is 1 .
google_docs/replace_text
documentId (string, required): The ID of the document to update.
containsText (string, required): The text to find and replace.
replaceText (string, required): The text to replace it with.
matchCase (boolean, optional): Whether the search should respect case. Default is false .
google_docs/delete_content_range
documentId (string, required): The ID of the document to update.
startIndex (integer, required): The start index of the range to delete.
endIndex (integer, required): The end index of the range to delete.
google_docs/insert_page_break
documentId (string, required): The ID of the document to update.
index (integer, optional): The zero-based index where to insert the page break. Default is 1 .
google_docs/create_named_range
documentId (string, required): The ID of the document to update.
name (string, required): The name for the named range.
startIndex (integer, required): The start index of the range.
endIndex (integer, required): The end index of the range.
google_docs/create_document_with_content
title (string, required): The title for the new document. Appears at the top of the document and in Google Drive.
content (string, optional): The text content to insert into the document. Use \n for new paragraphs.
google_docs/append_text
documentId (string, required): The document ID from create_document response or URL.
text (string, required): Text to append at the end of the document. Use \n for new paragraphs.
google_docs/set_text_bold
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to format.
endIndex (integer, required): End position of text to format (exclusive).
bold (boolean, required): Set true to make bold, false to remove bold.
google_docs/set_text_italic
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to format.
endIndex (integer, required): End position of text to format (exclusive).
italic (boolean, required): Set true to make italic, false to remove italic.
google_docs/set_text_underline
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to format.
endIndex (integer, required): End position of text to format (exclusive).
underline (boolean, required): Set true to underline, false to remove underline.
google_docs/set_text_strikethrough
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to format.
endIndex (integer, required): End position of text to format (exclusive).
strikethrough (boolean, required): Set true to add strikethrough, false to remove.
google_docs/set_font_size
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to format.
endIndex (integer, required): End position of text to format (exclusive).
fontSize (number, required): Font size in points. Common sizes: 10, 11, 12, 14, 16, 18, 24, 36.
google_docs/set_text_color
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to format.
endIndex (integer, required): End position of text to format (exclusive).
red (number, required): Red component (0-1). Example: 1 for full red.
green (number, required): Green component (0-1). Example: 0.5 for half green.
blue (number, required): Blue component (0-1). Example: 0 for no blue.
google_docs/create_hyperlink
documentId (string, required): The document ID.
startIndex (integer, required): Start position of text to make into a link.
endIndex (integer, required): End position of text to make into a link (exclusive).
url (string, required): The URL the link should point to. Example: "https://example.com" .
google_docs/apply_heading_style
documentId (string, required): The document ID.
startIndex (integer, required): Start position of paragraph(s) to style.
endIndex (integer, required): End position of paragraph(s) to style.
style (string, required): The style to apply. Enum: NORMAL_TEXT , TITLE , SUBTITLE , HEADING_1 , HEADING_2 , HEADING_3 , HEADING_4 , HEADING_5 , HEADING_6 .
google_docs/set_paragraph_alignment
documentId (string, required): The document ID.
startIndex (integer, required): Start position of paragraph(s) to align.
endIndex (integer, required): End position of paragraph(s) to align.
alignment (string, required): Text alignment. Enum: START (left), CENTER , END (right), JUSTIFIED .
google_docs/set_line_spacing
documentId (string, required): The document ID.
startIndex (integer, required): Start position of paragraph(s).
endIndex (integer, required): End position of paragraph(s).
lineSpacing (number, required): Line spacing as percentage. 100 = single, 115 = 1.15x, 150 = 1.5x, 200 = double.
google_docs/create_paragraph_bullets
documentId (string, required): The document ID.
startIndex (integer, required): Start position of paragraphs to convert to list.
endIndex (integer, required): End position of paragraphs to convert to list.
bulletPreset (string, required): Bullet/numbering style. Enum: BULLET_DISC_CIRCLE_SQUARE , BULLET_DIAMONDX_ARROW3D_SQUARE , BULLET_CHECKBOX , BULLET_ARROW_DIAMOND_DISC , BULLET_STAR_CIRCLE_SQUARE , NUMBERED_DECIMAL_ALPHA_ROMAN , NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS , NUMBERED_DECIMAL_NESTED , NUMBERED_UPPERALPHA_ALPHA_ROMAN , NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL .
google_docs/delete_paragraph_bullets
documentId (string, required): The document ID.
startIndex (integer, required): Start position of list paragraphs.
endIndex (integer, required): End position of list paragraphs.
google_docs/insert_table_with_content
documentId (string, required): The document ID.
rows (integer, required): Number of rows in the table.
columns (integer, required): Number of columns in the table.
index (integer, optional): Position to insert the table. If not provided, the table is inserted at the end of the document.
content (array, required): Table content as a 2D array. Each inner array is a row. Example: [["Year", "Revenue"], ["2023", "$43B"], ["2024", "$45B"]] .
google_docs/insert_table_row
documentId (string, required): The document ID.
tableStartIndex (integer, required): The start index of the table. Get from get_document.
rowIndex (integer, required): Row index (0-based) of reference cell.
columnIndex (integer, optional): Column index (0-based) of reference cell. Default is 0 .
insertBelow (boolean, optional): If true , insert below the reference row. If false , insert above. Default is true .
google_docs/insert_table_column
documentId (string, required): The document ID.
tableStartIndex (integer, required): The start index of the table.
rowIndex (integer, optional): Row index (0-based) of reference cell. Default is 0 .
columnIndex (integer, required): Column index (0-based) of reference cell.
insertRight (boolean, optional): If true , insert to the right. If false , insert to the left. Default is true .
google_docs/delete_table_row
documentId (string, required): The document ID.
tableStartIndex (integer, required): The start index of the table.
rowIndex (integer, required): Row index (0-based) to delete.
columnIndex (integer, optional): Column index (0-based) of any cell in the row. Default is 0 .
google_docs/delete_table_column
documentId (string, required): The document ID.
tableStartIndex (integer, required): The start index of the table.
rowIndex (integer, optional): Row index (0-based) of any cell in the column. Default is 0 .
columnIndex (integer, required): Column index (0-based) to delete.
google_docs/merge_table_cells
documentId (string, required): The document ID.
tableStartIndex (integer, required): The start index of the table.
rowIndex (integer, required): Starting row index (0-based) for the merge.
columnIndex (integer, required): Starting column index (0-based) for the merge.
rowSpan (integer, required): Number of rows to merge.
columnSpan (integer, required): Number of columns to merge.
google_docs/unmerge_table_cells
documentId (string, required): The document ID.
tableStartIndex (integer, required): The start index of the table.
rowIndex (integer, required): Row index (0-based) of the merged cell.
columnIndex (integer, required): Column index (0-based) of the merged cell.
rowSpan (integer, required): Number of rows the merged cell spans.
columnSpan (integer, required): Number of columns the merged cell spans.
google_docs/insert_inline_image
documentId (string, required): The document ID.
uri (string, required): Public URL of the image. Must be accessible without authentication.
index (integer, optional): Position to insert the image. If not provided, the image is inserted at the end of the document. Default is 1 .
google_docs/insert_section_break
documentId (string, required): The document ID.
index (integer, required): Position to insert the section break.
sectionType (string, required): The type of section break. Enum: CONTINUOUS (stays on same page), NEXT_PAGE (starts a new page).
google_docs/create_header
documentId (string, required): The document ID.
type (string, optional): Header type. Enum: DEFAULT . Default is DEFAULT .
google_docs/create_footer
documentId (string, required): The document ID.
type (string, optional): Footer type. Enum: DEFAULT . Default is DEFAULT .
google_docs/delete_header
documentId (string, required): The document ID.
headerId (string, required): The header ID to delete. Get from get_document response.
google_docs/delete_footer
documentId (string, required): The document ID.
footerId (string, required): The footer ID to delete. Get from get_document response.
​ Usage Examples
​ Basic Google Docs Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Google Docs capabilities docs_agent = Agent( role = "Document Creator" , goal = "Create and manage Google Docs documents efficiently" , backstory = "An AI assistant specialized in Google Docs document creation and editing." , apps = [ 'google_docs' ] # All Google Docs actions will be available ) # Task to create a new document create_doc_task = Task( description = "Create a new Google Document titled 'Project Status Report'" , agent = docs_agent, expected_output = "New Google Document 'Project Status Report' created successfully" ) # Run the task crew = Crew( agents = [docs_agent], tasks = [create_doc_task] ) crew.kickoff()
​ Text Editing and Content Management
from crewai import Agent, Task, Crew # Create an agent focused on text editing text_editor = Agent( role = "Document Editor" , goal = "Edit and update content in Google Docs documents" , backstory = "An AI assistant skilled in precise text editing and content management." , apps = [ 'google_docs/insert_text' , 'google_docs/replace_text' , 'google_docs/delete_content_range' ] ) # Task to edit document content edit_content_task = Task( description = "In document 'your_document_id', insert the text 'Executive Summary: ' at the beginning, then replace all instances of 'TODO' with 'COMPLETED'." , agent = text_editor, expected_output = "Document updated with new text inserted and TODO items replaced." ) crew = Crew( agents = [text_editor], tasks = [edit_content_task] ) crew.kickoff()
​ Advanced Document Operations
from crewai import Agent, Task, Crew # Create an agent for advanced document operations document_formatter = Agent( role = "Document Formatter" , goal = "Apply advanced formatting and structure to Google Docs" , backstory = "An AI assistant that handles complex document formatting and organization." , apps = [ 'google_docs/batch_update' , 'google_docs/insert_page_break' , 'google_docs/create_named_range' ] ) # Task to format document format_doc_task = Task( description = "In document 'your_document_id', insert a page break at position 100, create a named range called 'Introduction' for characters 1-50, and apply batch formatting updates." , agent = document_formatter, expected_output = "Document formatted with page break, named range, and styling applied." ) crew = Crew( agents = [document_formatter], tasks = [format_doc_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Google account has the necessary permissions for Google Docs access.
Verify that the OAuth connection includes all required scopes ( https://www.googleapis.com/auth/documents ).
Double-check document IDs for correctness.
Ensure the document exists and is accessible to your account.
Document IDs can be found in the Google Docs URL.
When using insert_text or delete_content_range , ensure index positions are valid.
Remember that Google Docs uses zero-based indexing.
The document must have content at the specified index positions.
When using batch_update , ensure the requests array is correctly formatted according to the Google Docs API documentation.
Complex updates require specific JSON structures for each request type.
For replace_text , ensure the containsText parameter exactly matches the text you want to replace.
Use matchCase parameter to control case sensitivity.
​ Getting Help
Need Help?
