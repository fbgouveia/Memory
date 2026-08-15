# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/microsoft_word
- Raw SHA-256: `0ded29692b6b53d747115b04f5bcab4ec0f397812f301f7a01294521ae7fa311`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Microsoft Word Integration
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
Microsoft Word Integration
Copy page Copy page
Document creation and management with Microsoft Word integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Microsoft account with Word and OneDrive/SharePoint access
Connected your Microsoft account through the Integrations page
​ Setting Up Microsoft Word Integration
​ 1. Connect Your Microsoft Account
Navigate to CrewAI AMP Integrations
Find Microsoft Word in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for file access
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
microsoft_word/get_documents
select (string, optional): Select specific properties to return.
filter (string, optional): Filter results using OData syntax.
expand (string, optional): Expand related resources inline.
top (integer, optional): Number of items to return (min 1, max 999).
orderby (string, optional): Order results by specified properties.
microsoft_word/create_text_document
file_name (string, required): Name of the text document (should end with .txt).
content (string, optional): Text content for the document. Default is “This is a new text document created via API.”
microsoft_word/get_document_content
file_id (string, required): The ID of the document.
microsoft_word/get_document_properties
file_id (string, required): The ID of the document.
microsoft_word/delete_document
file_id (string, required): The ID of the document to delete.
microsoft_word/copy_document
file_id (string, required): The ID of the document to copy
name (string, optional): New name for the copied document
parent_id (string, optional): The ID of the destination folder (defaults to root)
microsoft_word/move_document
file_id (string, required): The ID of the document to move
parent_id (string, required): The ID of the destination folder
name (string, optional): New name for the moved document
​ Usage Examples
​ Basic Microsoft Word Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Microsoft Word capabilities word_agent = Agent( role = "Document Manager" , goal = "Manage Word documents and text files efficiently" , backstory = "An AI assistant specialized in Microsoft Word document operations and content management." , apps = [ 'microsoft_word' ] # All Word actions will be available ) # Task to create a new text document create_doc_task = Task( description = "Create a new text document named 'meeting_notes.txt' with content 'Meeting Notes from January 2024: Key discussion points and action items.'" , agent = word_agent, expected_output = "New text document 'meeting_notes.txt' created successfully." ) # Run the task crew = Crew( agents = [word_agent], tasks = [create_doc_task] ) crew.kickoff()
​ Reading and Managing Documents
from crewai import Agent, Task, Crew # Create an agent focused on document operations document_reader = Agent( role = "Document Reader" , goal = "Retrieve and analyze document content and properties" , backstory = "An AI assistant skilled in reading and analyzing document content." , apps = [ 'microsoft_word/get_documents' , 'microsoft_word/get_document_content' , 'microsoft_word/get_document_properties' ] ) # Task to list and read documents read_docs_task = Task( description = "List all Word documents in my OneDrive, then get the content and properties of the first document found." , agent = document_reader, expected_output = "List of documents with content and properties of the first document." ) crew = Crew( agents = [document_reader], tasks = [read_docs_task] ) crew.kickoff()
​ Document Cleanup and Organization
from crewai import Agent, Task, Crew # Create an agent for document management document_organizer = Agent( role = "Document Organizer" , goal = "Organize and clean up document collections" , backstory = "An AI assistant that helps maintain organized document libraries." , apps = [ 'microsoft_word/get_documents' , 'microsoft_word/get_document_properties' , 'microsoft_word/delete_document' ] ) # Task to organize documents organize_task = Task( description = "List all documents, check their properties, and identify any documents that might be duplicates or outdated for potential cleanup." , agent = document_organizer, expected_output = "Analysis of document library with recommendations for organization." ) crew = Crew( agents = [document_organizer], tasks = [organize_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Microsoft account has the necessary permissions for file access (e.g., Files.Read.All , Files.ReadWrite.All ).
Verify that the OAuth connection includes all required scopes.
When creating text documents, ensure the file_name ends with .txt extension.
Verify that you have write permissions to the target location (OneDrive/SharePoint).
Double-check document IDs for correctness when accessing specific documents.
Ensure the referenced documents exist and are accessible.
Note that this integration works best with text files (.txt) for content operations.
The get_document_content action works best with text files (.txt).
For complex Word documents (.docx), consider using the document properties action to get metadata.
​ Getting Help
Need Help?
