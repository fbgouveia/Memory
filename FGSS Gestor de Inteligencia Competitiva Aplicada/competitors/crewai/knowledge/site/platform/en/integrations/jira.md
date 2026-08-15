# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/jira
- Raw SHA-256: `d2c81e03c0b6676d3e557c8a89bf7e46e7b91cc0a5122e9767c0bbb7d5b89c14`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Jira Integration
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
Jira Integration
Copy page Copy page
Issue tracking and project management with Jira integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Jira account with appropriate project permissions
Connected your Jira account through the Integrations page
​ Setting Up Jira Integration
​ 1. Connect Your Jira Account
Navigate to CrewAI AMP Integrations
Find Jira in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for issue and project management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
jira/create_issue
summary (string, required): Summary - A brief one-line summary of the issue. (example: “The printer stopped working”).
project (string, optional): Project - The project which the issue belongs to. Defaults to the user’s first project if not provided. Use Connect Portal Workflow Settings to allow users to select a Project.
issueType (string, optional): Issue type - Defaults to Task if not provided.
jiraIssueStatus (string, optional): Status - Defaults to the project’s first status if not provided.
assignee (string, optional): Assignee - Defaults to the authenticated user if not provided.
descriptionType (string, optional): Description Type - Select the Description Type. Options: description , descriptionJSON
description (string, optional): Description - A detailed description of the issue. This field appears only when ‘descriptionType’ = ‘description’.
additionalFields (string, optional): Additional Fields - Specify any other fields that should be included in JSON format. Use Connect Portal Workflow Settings to allow users to select which Issue Fields to update. { "customfield_10001" : "value" }
jira/update_issue
issueKey (string, required): Issue Key (example: “TEST-1234”).
summary (string, optional): Summary - A brief one-line summary of the issue. (example: “The printer stopped working”).
issueType (string, optional): Issue type - Use Connect Portal Workflow Settings to allow users to select an Issue Type.
jiraIssueStatus (string, optional): Status - Use Connect Portal Workflow Settings to allow users to select a Status.
assignee (string, optional): Assignee - Use Connect Portal Workflow Settings to allow users to select an Assignee.
descriptionType (string, optional): Description Type - Select the Description Type. Options: description , descriptionJSON
description (string, optional): Description - A detailed description of the issue. This field appears only when ‘descriptionType’ = ‘description’.
additionalFields (string, optional): Additional Fields - Specify any other fields that should be included in JSON format.
jira/get_issue_by_key
issueKey (string, required): Issue Key (example: “TEST-1234”).
jira/filter_issues
jqlQuery (object, optional): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "status" , "operator" : "$stringExactlyMatches" , "value" : "Open" } ] } ] } Available operators: $stringExactlyMatches , $stringDoesNotExactlyMatch , $stringIsIn , $stringIsNotIn , $stringContains , $stringDoesNotContain , $stringGreaterThan , $stringLessThan
limit (string, optional): Limit results - Limit the maximum number of issues to return. Defaults to 10 if left blank.
jira/search_by_jql
jqlQuery (string, required): JQL Query (example: “project = PROJECT”).
paginationParameters (object, optional): Pagination parameters for paginated results. { "pageCursor" : "cursor_string" }
jira/update_issue_any
jira/describe_action_schema
issueTypeId (string, required): Issue Type ID.
projectKey (string, required): Project key.
operation (string, required): Operation Type value, for example CREATE_ISSUE or UPDATE_ISSUE.
jira/get_projects
paginationParameters (object, optional): Pagination Parameters. { "pageCursor" : "cursor_string" }
jira/get_issue_types_by_project
project (string, required): Project key.
jira/get_issue_types
jira/get_issue_status_by_project
project (string, required): Project key.
jira/get_all_assignees_by_project
project (string, required): Project key.
​ Usage Examples
​ Basic Jira Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Jira capabilities jira_agent = Agent( role = "Issue Manager" , goal = "Manage Jira issues and track project progress efficiently" , backstory = "An AI assistant specialized in issue tracking and project management." , apps = [ 'jira' ] # All Jira actions will be available ) # Task to create a bug report create_bug_task = Task( description = "Create a bug report for the login functionality with high priority and assign it to the development team" , agent = jira_agent, expected_output = "Bug report created successfully with issue key" ) # Run the task crew = Crew( agents = [jira_agent], tasks = [create_bug_task] ) crew.kickoff()
​ Filtering Specific Jira Tools
issue_coordinator = Agent( role = "Issue Coordinator" , goal = "Create and manage Jira issues efficiently" , backstory = "An AI assistant that focuses on issue creation and management." , apps = [ 'jira' ] ) # Task to manage issue workflow issue_workflow = Task( description = "Create a feature request issue and update the status of related issues" , agent = issue_coordinator, expected_output = "Feature request created and related issues updated" ) crew = Crew( agents = [issue_coordinator], tasks = [issue_workflow] ) crew.kickoff()
​ Project Analysis and Reporting
from crewai import Agent, Task, Crew project_analyst = Agent( role = "Project Analyst" , goal = "Analyze project data and generate insights from Jira" , backstory = "An experienced project analyst who extracts insights from project management data." , apps = [ 'jira' ] ) # Task to analyze project status analysis_task = Task( description = """ 1. Get all projects and their issue types 2. Search for all open issues across projects 3. Analyze issue distribution by status and assignee 4. Create a summary report issue with findings """ , agent = project_analyst, expected_output = "Project analysis completed with summary report created" ) crew = Crew( agents = [project_analyst], tasks = [analysis_task] ) crew.kickoff()
​ Automated Issue Management
from crewai import Agent, Task, Crew automation_manager = Agent( role = "Automation Manager" , goal = "Automate issue management and workflow processes" , backstory = "An AI assistant that automates repetitive issue management tasks." , apps = [ 'jira' ] ) # Task to automate issue management automation_task = Task( description = """ 1. Search for all unassigned issues using JQL 2. Get available assignees for each project 3. Automatically assign issues based on workload and expertise 4. Update issue priorities based on age and type 5. Create weekly sprint planning issues """ , agent = automation_manager, expected_output = "Issues automatically assigned and sprint planning issues created" ) crew = Crew( agents = [automation_manager], tasks = [automation_task] ) crew.kickoff()
​ Advanced Schema-Based Operations
from crewai import Agent, Task, Crew schema_specialist = Agent( role = "Schema Specialist" , goal = "Handle complex Jira operations using dynamic schemas" , backstory = "An AI assistant that can work with dynamic Jira schemas and custom issue types." , apps = [ 'jira' ] ) # Task using schema-based operations schema_task = Task( description = """ 1. Get all projects and their custom issue types 2. For each custom issue type, describe the action schema 3. Create issues using the dynamic schema for complex custom fields 4. Update issues with custom field values based on business rules """ , agent = schema_specialist, expected_output = "Custom issues created and updated using dynamic schemas" ) crew = Crew( agents = [schema_specialist], tasks = [schema_task] ) crew.kickoff()
​ Troubleshooting
​ Common Issues
Ensure your Jira account has necessary permissions for the target projects
Verify that the OAuth connection includes required scopes for Jira API
Check if you have create/edit permissions for issues in the specified projects
Double-check project keys and issue keys for correct format (e.g., “PROJ-123”)
Ensure projects exist and are accessible to your account
Verify that issue keys reference existing issues
Use JIRA_GET_ISSUE_TYPES_BY_PROJECT to get valid issue types for a project
Use JIRA_GET_ISSUE_STATUS_BY_PROJECT to get valid statuses
Ensure issue types and statuses are available in the target project
Test JQL queries in Jira’s issue search before using in API calls
Ensure field names in JQL are spelled correctly and exist in your Jira instance
Use proper JQL syntax for complex queries
Use JIRA_DESCRIBE_ACTION_SCHEMA to get the correct schema for complex issue types
Ensure custom field IDs are correct (e.g., “customfield_10001”)
Verify that custom fields are available in the target project and issue type
Ensure filter formulas follow the correct JSON structure for disjunctive normal form
Use valid field names that exist in your Jira configuration
Test simple filters before building complex multi-condition queries
​ Getting Help
Need Help?
