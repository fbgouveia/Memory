# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/clickup
- Raw SHA-256: `8c07d67b04d9e7ee1db6e94e7a3d341b85430815259942beaea4edbf36133345`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs ClickUp Integration
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
ClickUp Integration
Copy page Copy page
Task and productivity management with ClickUp integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A ClickUp account with appropriate permissions
Connected your ClickUp account through the Integrations page
​ Setting Up ClickUp Integration
​ 1. Connect Your ClickUp Account
Navigate to CrewAI AMP Integrations
Find ClickUp in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for task and project management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
clickup/search_tasks
taskFilterFormula (object, optional): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "statuses%5B%5D" , "operator" : "$stringExactlyMatches" , "value" : "open" } ] } ] } Available fields: space_ids%5B%5D , project_ids%5B%5D , list_ids%5B%5D , statuses%5B%5D , include_closed , assignees%5B%5D , tags%5B%5D , due_date_gt , due_date_lt , date_created_gt , date_created_lt , date_updated_gt , date_updated_lt
clickup/get_task_in_list
listId (string, required): List - Select a List to get tasks from. Use Connect Portal User Settings to allow users to select a ClickUp List.
taskFilterFormula (string, optional): Search for tasks that match specified filters. For example: name=task1.
clickup/create_task
listId (string, required): List - Select a List to create this task in. Use Connect Portal User Settings to allow users to select a ClickUp List.
name (string, required): Name - The task name.
description (string, optional): Description - Task description.
status (string, optional): Status - Select a Status for this task. Use Connect Portal User Settings to allow users to select a ClickUp Status.
assignees (string, optional): Assignees - Select a Member (or an array of member IDs) to be assigned to this task. Use Connect Portal User Settings to allow users to select a ClickUp Member.
dueDate (string, optional): Due Date - Specify a date for this task to be due on.
additionalFields (string, optional): Additional Fields - Specify additional fields to include on this task as JSON.
clickup/update_task
taskId (string, required): Task ID - The ID of the task to update.
listId (string, required): List - Select a List to create this task in. Use Connect Portal User Settings to allow users to select a ClickUp List.
name (string, optional): Name - The task name.
description (string, optional): Description - Task description.
status (string, optional): Status - Select a Status for this task. Use Connect Portal User Settings to allow users to select a ClickUp Status.
assignees (string, optional): Assignees - Select a Member (or an array of member IDs) to be assigned to this task. Use Connect Portal User Settings to allow users to select a ClickUp Member.
dueDate (string, optional): Due Date - Specify a date for this task to be due on.
additionalFields (string, optional): Additional Fields - Specify additional fields to include on this task as JSON.
clickup/delete_task
taskId (string, required): Task ID - The ID of the task to delete.
clickup/get_list
spaceId (string, required): Space ID - The ID of the space containing the lists.
clickup/get_custom_fields_in_list
listId (string, required): List ID - The ID of the list to get custom fields from.
clickup/get_all_fields_in_list
listId (string, required): List ID - The ID of the list to get all fields from.
clickup/get_space
spaceId (string, optional): Space ID - The ID of the space to retrieve.
clickup/get_folders
spaceId (string, required): Space ID - The ID of the space containing the folders.
clickup/get_member
​ Usage Examples
​ Basic ClickUp Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Clickup capabilities clickup_agent = Agent( role = "Task Manager" , goal = "Manage tasks and projects in ClickUp efficiently" , backstory = "An AI assistant specialized in task management and productivity coordination." , apps = [ 'clickup' ] # All Clickup actions will be available ) # Task to create a new task create_task = Task( description = "Create a task called 'Review Q1 Reports' in the Marketing list with high priority" , agent = clickup_agent, expected_output = "Task created successfully with task ID" ) # Run the task crew = Crew( agents = [clickup_agent], tasks = [create_task] ) crew.kickoff()
​ Filtering Specific ClickUp Tools
task_coordinator = Agent( role = "Task Coordinator" , goal = "Create and manage tasks efficiently" , backstory = "An AI assistant that focuses on task creation and status management." , apps = [ 'clickup/create_task' ] ) # Task to manage task workflow task_workflow = Task( description = "Create a task for project planning and assign it to the development team" , agent = task_coordinator, expected_output = "Task created and assigned successfully" ) crew = Crew( agents = [task_coordinator], tasks = [task_workflow] ) crew.kickoff()
​ Advanced Project Management
from crewai import Agent, Task, Crew project_manager = Agent( role = "Project Manager" , goal = "Coordinate project activities and track team productivity" , backstory = "An experienced project manager who ensures projects are delivered on time." , apps = [ 'clickup' ] ) # Complex task involving multiple ClickUp operations project_coordination = Task( description = """ 1. Get all open tasks in the current space 2. Identify overdue tasks and update their status 3. Create a weekly report task summarizing project progress 4. Assign the report task to the team lead """ , agent = project_manager, expected_output = "Project status updated and weekly report task created and assigned" ) crew = Crew( agents = [project_manager], tasks = [project_coordination] ) crew.kickoff()
​ Task Search and Management
from crewai import Agent, Task, Crew task_analyst = Agent( role = "Task Analyst" , goal = "Analyze task patterns and optimize team productivity" , backstory = "An AI assistant that analyzes task data to improve team efficiency." , apps = [ 'clickup' ] ) # Task to analyze and optimize task distribution task_analysis = Task( description = """ Search for all tasks assigned to team members in the last 30 days, analyze completion patterns, and create optimization recommendations """ , agent = task_analyst, expected_output = "Task analysis report with optimization recommendations" ) crew = Crew( agents = [task_analyst], tasks = [task_analysis] ) crew.kickoff()
​ Getting Help
Need Help?
