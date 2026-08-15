# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/asana
- Raw SHA-256: `7403e3a18d50fe0086c58eb8e6a127d219db9c404944b1f0c4f224e1dbca836b`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Asana Integration
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
Asana Integration
Copy page Copy page
Team task and project coordination with Asana integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
An Asana account with appropriate permissions
Connected your Asana account through the Integrations page
​ Setting Up Asana Integration
​ 1. Connect Your Asana Account
Navigate to CrewAI AMP Integrations
Find Asana in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for task and project management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
asana/create_comment
task (string, required): Task ID - The ID of the Task the comment will be added to. The comment will be authored by the currently authenticated user.
text (string, required): Text (example: “This is a comment.”).
asana/create_project
name (string, required): Name (example: “Stuff to buy”).
workspace (string, required): Workspace - Use Connect Portal Workflow Settings to allow users to select which Workspace to create Projects in. Defaults to the user’s first Workspace if left blank.
team (string, optional): Team - Use Connect Portal Workflow Settings to allow users to select which Team to share this Project with. Defaults to the user’s first Team if left blank.
notes (string, optional): Notes (example: “These are things we need to purchase.”).
asana/get_projects
archived (string, optional): Archived - Choose “true” to show archived projects, “false” to display only active projects, or “default” to show both archived and active projects. Options: default , true , false
asana/get_project_by_id
projectFilterId (string, required): Project ID.
asana/create_task
name (string, required): Name (example: “Task Name”).
workspace (string, optional): Workspace - Use Connect Portal Workflow Settings to allow users to select which Workspace to create Tasks in. Defaults to the user’s first Workspace if left blank..
project (string, optional): Project - Use Connect Portal Workflow Settings to allow users to select which Project to create this Task in.
notes (string, optional): Notes.
dueOnDate (string, optional): Due On - The date on which this task is due. Cannot be used together with Due At. (example: “YYYY-MM-DD”).
dueAtDate (string, optional): Due At - The date and time (ISO timestamp) at which this task is due. Cannot be used together with Due On. (example: “2019-09-15T02:06:58.147Z”).
assignee (string, optional): Assignee - The ID of the Asana user this task will be assigned to. Use Connect Portal Workflow Settings to allow users to select an Assignee.
gid (string, optional): External ID - An ID from your application to associate this task with. You can use this ID to sync updates to this task later.
asana/update_task
taskId (string, required): Task ID - The ID of the Task that will be updated.
completeStatus (string, optional): Completed Status. Options: true , false
name (string, optional): Name (example: “Task Name”).
notes (string, optional): Notes.
dueOnDate (string, optional): Due On - The date on which this task is due. Cannot be used together with Due At. (example: “YYYY-MM-DD”).
dueAtDate (string, optional): Due At - The date and time (ISO timestamp) at which this task is due. Cannot be used together with Due On. (example: “2019-09-15T02:06:58.147Z”).
assignee (string, optional): Assignee - The ID of the Asana user this task will be assigned to. Use Connect Portal Workflow Settings to allow users to select an Assignee.
gid (string, optional): External ID - An ID from your application to associate this task with. You can use this ID to sync updates to this task later.
asana/get_tasks
workspace (string, optional): Workspace - The ID of the Workspace to filter tasks on. Use Connect Portal Workflow Settings to allow users to select a Workspace.
project (string, optional): Project - The ID of the Project to filter tasks on. Use Connect Portal Workflow Settings to allow users to select a Project.
assignee (string, optional): Assignee - The ID of the assignee to filter tasks on. Use Connect Portal Workflow Settings to allow users to select an Assignee.
completedSince (string, optional): Completed since - Only return tasks that are either incomplete or that have been completed since this time (ISO or Unix timestamp). (example: “2014-04-25T16:15:47-04:00”).
asana/get_tasks_by_id
taskId (string, required): Task ID.
asana/get_task_by_external_id
gid (string, required): External ID - The ID that this task is associated or synced with, from your application.
asana/add_task_to_section
sectionId (string, required): Section ID - The ID of the section to add this task to.
taskId (string, required): Task ID - The ID of the task. (example: “1204619611402340”).
beforeTaskId (string, optional): Before Task ID - The ID of a task in this section that this task will be inserted before. Cannot be used with After Task ID. (example: “1204619611402340”).
afterTaskId (string, optional): After Task ID - The ID of a task in this section that this task will be inserted after. Cannot be used with Before Task ID. (example: “1204619611402340”).
asana/get_teams
workspace (string, required): Workspace - Returns the teams in this workspace visible to the authorized user.
asana/get_workspaces
​ Usage Examples
​ Basic Asana Agent Setup
from crewai import Agent, Task, Crew # Create an agent with Asana capabilities asana_agent = Agent( role = "Project Manager" , goal = "Manage tasks and projects in Asana efficiently" , backstory = "An AI assistant specialized in project management and task coordination." , apps = [ 'asana' ] # All Asana actions will be available ) # Task to create a new project create_project_task = Task( description = "Create a new project called 'Q1 Marketing Campaign' in the Marketing workspace" , agent = asana_agent, expected_output = "Confirmation that the project was created successfully with project ID" ) # Run the task crew = Crew( agents = [asana_agent], tasks = [create_project_task] ) crew.kickoff()
​ Filtering Specific Asana Tools
from crewai import Agent, Task, Crew # Create agent with specific Asana actions only task_manager_agent = Agent( role = "Task Manager" , goal = "Create and manage tasks efficiently" , backstory = "An AI assistant that focuses on task creation and management." , apps = [ 'asana/create_task' , 'asana/update_task' , 'asana/get_tasks' ] # Specific Asana actions ) # Task to create and assign a task task_management = Task( description = "Create a task called 'Review quarterly reports' and assign it to the appropriate team member" , agent = task_manager_agent, expected_output = "Task created and assigned successfully" ) crew = Crew( agents = [task_manager_agent], tasks = [task_management] ) crew.kickoff()
​ Advanced Project Management
from crewai import Agent, Task, Crew project_coordinator = Agent( role = "Project Coordinator" , goal = "Coordinate project activities and track progress" , backstory = "An experienced project coordinator who ensures projects run smoothly." , apps = [ 'asana' ] ) # Complex task involving multiple Asana operations coordination_task = Task( description = """ 1. Get all active projects in the workspace 2. For each project, get the list of incomplete tasks 3. Create a summary report task in the 'Management Reports' project 4. Add comments to overdue tasks to request status updates """ , agent = project_coordinator, expected_output = "Summary report created and status update requests sent for overdue tasks" ) crew = Crew( agents = [project_coordinator], tasks = [coordination_task] ) crew.kickoff()
