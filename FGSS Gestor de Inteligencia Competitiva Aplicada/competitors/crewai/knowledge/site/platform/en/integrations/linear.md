# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/linear
- Raw SHA-256: `8e3c2da19e0e3e5eacdf59c2f900c66cb0e2fb0ce87764472d0a421de6c70bc3`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Linear Integration
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
Linear Integration
Copy page Copy page
Software project and bug tracking with Linear integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Linear account with appropriate workspace permissions
Connected your Linear account through the Integrations page
​ Setting Up Linear Integration
​ 1. Connect Your Linear Account
Navigate to CrewAI AMP Integrations
Find Linear in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for issue and project management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
linear/create_issue
teamId (string, required): Team ID - Specify the Team ID of the parent for this new issue. Use Connect Portal Workflow Settings to allow users to select a Team ID. (example: “a70bdf0f-530a-4887-857d-46151b52b47c”).
title (string, required): Title - Specify a title for this issue.
description (string, optional): Description - Specify a description for this issue.
statusId (string, optional): Status - Specify the state or status of this issue.
priority (string, optional): Priority - Specify the priority of this issue as an integer.
dueDate (string, optional): Due Date - Specify the due date of this issue in ISO 8601 format.
cycleId (string, optional): Cycle ID - Specify the cycle associated with this issue.
additionalFields (object, optional): Additional Fields. { "assigneeId" : "a70bdf0f-530a-4887-857d-46151b52b47c" , "labelIds" : [ "a70bdf0f-530a-4887-857d-46151b52b47c" ] }
linear/update_issue
issueId (string, required): Issue ID - Specify the Issue ID of the issue to update. (example: “90fbc706-18cd-42c9-ae66-6bd344cc8977”).
title (string, optional): Title - Specify a title for this issue.
description (string, optional): Description - Specify a description for this issue.
statusId (string, optional): Status - Specify the state or status of this issue.
priority (string, optional): Priority - Specify the priority of this issue as an integer.
dueDate (string, optional): Due Date - Specify the due date of this issue in ISO 8601 format.
cycleId (string, optional): Cycle ID - Specify the cycle associated with this issue.
additionalFields (object, optional): Additional Fields. { "assigneeId" : "a70bdf0f-530a-4887-857d-46151b52b47c" , "labelIds" : [ "a70bdf0f-530a-4887-857d-46151b52b47c" ] }
linear/get_issue_by_id
issueId (string, required): Issue ID - Specify the record ID of the issue to fetch. (example: “90fbc706-18cd-42c9-ae66-6bd344cc8977”).
linear/get_issue_by_issue_identifier
externalId (string, required): External ID - Specify the human-readable Issue identifier of the issue to fetch. (example: “ABC-1”).
linear/search_issue
queryTerm (string, required): Query Term - The search term to look for.
issueFilterFormula (object, optional): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "title" , "operator" : "$stringContains" , "value" : "bug" } ] } ] } Available fields: title , number , project , createdAt Available operators: $stringExactlyMatches , $stringDoesNotExactlyMatch , $stringIsIn , $stringIsNotIn , $stringStartsWith , $stringDoesNotStartWith , $stringEndsWith , $stringDoesNotEndWith , $stringContains , $stringDoesNotContain , $stringGreaterThan , $stringLessThan , $numberGreaterThanOrEqualTo , $numberLessThanOrEqualTo , $numberGreaterThan , $numberLessThan , $dateTimeAfter , $dateTimeBefore
linear/delete_issue
issueId (string, required): Issue ID - Specify the record ID of the issue to delete. (example: “90fbc706-18cd-42c9-ae66-6bd344cc8977”).
linear/archive_issue
issueId (string, required): Issue ID - Specify the record ID of the issue to archive. (example: “90fbc706-18cd-42c9-ae66-6bd344cc8977”).
linear/create_sub_issue
parentId (string, required): Parent ID - Specify the Issue ID for the parent of this new issue.
teamId (string, required): Team ID - Specify the Team ID of the parent for this new sub-issue. Use Connect Portal Workflow Settings to allow users to select a Team ID. (example: “a70bdf0f-530a-4887-857d-46151b52b47c”).
title (string, required): Title - Specify a title for this issue.
description (string, optional): Description - Specify a description for this issue.
additionalFields (object, optional): Additional Fields. { "lead" : "linear_user_id" }
linear/create_project
teamIds (object, required): Team ID - Specify the team ID(s) this project is associated with as a string or a JSON array. Use Connect Portal User Settings to allow your user to select a Team ID. [ "a70bdf0f-530a-4887-857d-46151b52b47c" , "4ac7..." ]
projectName (string, required): Project Name - Specify the name of the project. (example: “My Linear Project”).
description (string, optional): Project Description - Specify a description for this project.
additionalFields (object, optional): Additional Fields. { "state" : "planned" , "description" : "" }
linear/update_project
projectId (string, required): Project ID - Specify the ID of the project to update. (example: “a6634484-6061-4ac7-9739-7dc5e52c796b”).
projectName (string, optional): Project Name - Specify the name of the project to update. (example: “My Linear Project”).
description (string, optional): Project Description - Specify a description for this project.
additionalFields (object, optional): Additional Fields. { "state" : "planned" , "description" : "" }
linear/get_project_by_id
projectId (string, required): Project ID - Specify the Project ID of the project to fetch. (example: “a6634484-6061-4ac7-9739-7dc5e52c796b”).
linear/delete_project
projectId (string, required): Project ID - Specify the Project ID of the project to delete. (example: “a6634484-6061-4ac7-9739-7dc5e52c796b”).
linear/search_teams
teamFilterFormula (object, optional): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "name" , "operator" : "$stringContains" , "value" : "Engineering" } ] } ] } Available fields: id , name
​ Usage Examples
​ Basic Linear Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Linear capabilities linear_agent = Agent( role = "Development Manager" , goal = "Manage Linear issues and track development progress efficiently" , backstory = "An AI assistant specialized in software development project management." , apps = [ 'linear' ] # All Linear actions will be available ) # Task to create a bug report create_bug_task = Task( description = "Create a high-priority bug report for the authentication system and assign it to the backend team" , agent = linear_agent, expected_output = "Bug report created successfully with issue ID" ) # Run the task crew = Crew( agents = [linear_agent], tasks = [create_bug_task] ) crew.kickoff()
​ Filtering Specific Linear Tools
issue_manager = Agent( role = "Issue Manager" , goal = "Create and manage Linear issues efficiently" , backstory = "An AI assistant that focuses on issue creation and lifecycle management." , apps = [ 'linear/create_issue' ] ) # Task to manage issue workflow issue_workflow = Task( description = "Create a feature request issue and update the status of related issues to reflect current progress" , agent = issue_manager, expected_output = "Feature request created and related issues updated" ) crew = Crew( agents = [issue_manager], tasks = [issue_workflow] ) crew.kickoff()
​ Project and Team Management
from crewai import Agent, Task, Crew project_coordinator = Agent( role = "Project Coordinator" , goal = "Coordinate projects and teams in Linear efficiently" , backstory = "An experienced project coordinator who manages development cycles and team workflows." , apps = [ 'linear' ] ) # Task to coordinate project setup project_coordination = Task( description = """ 1. Search for engineering teams in Linear 2. Create a new project for Q2 feature development 3. Associate the project with relevant teams 4. Create initial project milestones as issues """ , agent = project_coordinator, expected_output = "Q2 project created with teams assigned and initial milestones established" ) crew = Crew( agents = [project_coordinator], tasks = [project_coordination] ) crew.kickoff()
​ Issue Hierarchy and Sub-task Management
from crewai import Agent, Task, Crew task_organizer = Agent( role = "Task Organizer" , goal = "Organize complex issues into manageable sub-tasks" , backstory = "An AI assistant that breaks down complex development work into organized sub-tasks." , apps = [ 'linear' ] ) # Task to create issue hierarchy hierarchy_task = Task( description = """ 1. Search for large feature issues that need to be broken down 2. For each complex issue, create sub-issues for different components 3. Update the parent issues with proper descriptions and links to sub-issues 4. Assign sub-issues to appropriate team members based on expertise """ , agent = task_organizer, expected_output = "Complex issues broken down into manageable sub-tasks with proper assignments" ) crew = Crew( agents = [task_organizer], tasks = [hierarchy_task] ) crew.kickoff()
​ Automated Development Workflow
from crewai import Agent, Task, Crew workflow_automator = Agent( role = "Workflow Automator" , goal = "Automate development workflow processes in Linear" , backstory = "An AI assistant that automates repetitive development workflow tasks." , apps = [ 'linear' ] ) # Complex workflow automation task automation_task = Task( description = """ 1. Search for issues that have been in progress for more than 7 days 2. Update their priorities based on due dates and project importance 3. Create weekly sprint planning issues for each team 4. Archive completed issues from the previous cycle 5. Generate project status reports as new issues """ , agent = workflow_automator, expected_output = "Development workflow automated with updated priorities, sprint planning, and status reports" ) crew = Crew( agents = [workflow_automator], tasks = [automation_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Linear account has necessary permissions for the target workspace
Verify that the OAuth connection includes required scopes for Linear API
Check if you have create/edit permissions for issues and projects in the workspace
Double-check team IDs, issue IDs, and project IDs for correct UUID format
Ensure referenced entities (teams, projects, cycles) exist and are accessible
Verify that issue identifiers follow the correct format (e.g., “ABC-1”)
Use LINEAR_SEARCH_TEAMS to get valid team IDs before creating issues or projects
Ensure teams exist and are active in your workspace
Verify that team IDs are properly formatted as UUIDs
Check that status IDs reference valid workflow states for the team
Ensure priority values are within the valid range for your Linear configuration
Verify that custom fields and labels exist before referencing them
Use ISO 8601 format for due dates and timestamps
Ensure time zones are handled correctly for due date calculations
Verify that date values are valid and in the future for due dates
Ensure search queries are properly formatted and not empty
Use valid field names in filter formulas: title , number , project , createdAt
Test simple filters before building complex multi-condition queries
Verify that operator types match the data types of the fields being filtered
Ensure parent issue IDs are valid and accessible
Verify that the team ID for sub-issues matches or is compatible with the parent issue’s team
Check that parent issues are not already archived or deleted
​ Getting Help
Need Help?
