# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/github
- Raw SHA-256: `75555f4f51b0792eea8867c2ceba40d160fc8903d05a6b6ae38177b18297fb6d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs GitHub Integration
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
GitHub Integration
Copy page Copy page
Repository and issue management with GitHub integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A GitHub account with appropriate repository permissions
Connected your GitHub account through the Integrations page
​ Setting Up GitHub Integration
​ 1. Connect Your GitHub Account
Navigate to CrewAI AMP Integrations
Find GitHub in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for repository and issue management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
github/create_issue
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Issue. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Issue.
title (string, required): Issue Title - Specify the title of the issue to create.
body (string, optional): Issue Body - Specify the body contents of the issue to create.
assignees (string, optional): Assignees - Specify the assignee(s)’ GitHub login as an array of strings for this issue. (example: ["octocat"] ).
github/update_issue
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Issue. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Issue.
issue_number (string, required): Issue Number - Specify the number of the issue to update.
title (string, required): Issue Title - Specify the title of the issue to update.
body (string, optional): Issue Body - Specify the body contents of the issue to update.
assignees (string, optional): Assignees - Specify the assignee(s)’ GitHub login as an array of strings for this issue. (example: ["octocat"] ).
state (string, optional): State - Specify the updated state of the issue. Options: open , closed
github/get_issue_by_number
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Issue. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Issue.
issue_number (string, required): Issue Number - Specify the number of the issue to fetch.
github/lock_issue
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Issue. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Issue.
issue_number (string, required): Issue Number - Specify the number of the issue to lock.
lock_reason (string, required): Lock Reason - Specify a reason for locking the issue or pull request conversation. Options: off-topic , too heated , resolved , spam
github/search_issue
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Issue. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Issue.
filter (object, required): A filter in disjunctive normal form - OR of AND groups of single conditions. { "operator" : "OR" , "conditions" : [ { "operator" : "AND" , "conditions" : [ { "field" : "assignee" , "operator" : "$stringExactlyMatches" , "value" : "octocat" } ] } ] } Available fields: assignee , creator , mentioned , labels
github/create_release
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Release. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Release.
tag_name (string, required): Name - Specify the name of the release tag to be created. (example: “v1.0.0”).
target_commitish (string, optional): Target - Specify the target of the release. This can either be a branch name or a commit SHA. Defaults to the main branch. (example: “master”).
body (string, optional): Body - Specify a description for this release.
draft (string, optional): Draft - Specify whether the created release should be a draft (unpublished) release. Options: true , false
prerelease (string, optional): Prerelease - Specify whether the created release should be a prerelease. Options: true , false
discussion_category_name (string, optional): Discussion Category Name - If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository.
generate_release_notes (string, optional): Release Notes - Specify whether the created release should automatically create release notes using the provided name and body specified. Options: true , false
github/update_release
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Release. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Release.
id (string, required): Release ID - Specify the ID of the release to update.
tag_name (string, optional): Name - Specify the name of the release tag to be updated. (example: “v1.0.0”).
target_commitish (string, optional): Target - Specify the target of the release. This can either be a branch name or a commit SHA. Defaults to the main branch. (example: “master”).
body (string, optional): Body - Specify a description for this release.
draft (string, optional): Draft - Specify whether the created release should be a draft (unpublished) release. Options: true , false
prerelease (string, optional): Prerelease - Specify whether the created release should be a prerelease. Options: true , false
discussion_category_name (string, optional): Discussion Category Name - If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository.
generate_release_notes (string, optional): Release Notes - Specify whether the created release should automatically create release notes using the provided name and body specified. Options: true , false
github/get_release_by_id
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Release. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Release.
id (string, required): Release ID - Specify the release ID of the release to fetch.
github/get_release_by_tag_name
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Release. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Release.
tag_name (string, required): Name - Specify the tag of the release to fetch. (example: “v1.0.0”).
github/delete_release
owner (string, required): Owner - Specify the name of the account owner of the associated repository for this Release. (example: “abc”).
repo (string, required): Repository - Specify the name of the associated repository for this Release.
id (string, required): Release ID - Specify the ID of the release to delete.
​ Usage Examples
​ Basic GitHub Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Github capabilities github_agent = Agent( role = "Repository Manager" , goal = "Manage GitHub repositories, issues, and releases efficiently" , backstory = "An AI assistant specialized in repository management and issue tracking." , apps = [ 'github' ] # All Github actions will be available ) # Task to create a new issue create_issue_task = Task( description = "Create a bug report issue for the login functionality in the main repository" , agent = github_agent, expected_output = "Issue created successfully with issue number" ) # Run the task crew = Crew( agents = [github_agent], tasks = [create_issue_task] ) crew.kickoff()
​ Filtering Specific GitHub Tools
issue_manager = Agent( role = "Issue Manager" , goal = "Create and manage GitHub issues efficiently" , backstory = "An AI assistant that focuses on issue tracking and management." , apps = [ 'github/create_issue' ] ) # Task to manage issue workflow issue_workflow = Task( description = "Create a feature request issue and assign it to the development team" , agent = issue_manager, expected_output = "Feature request issue created and assigned successfully" ) crew = Crew( agents = [issue_manager], tasks = [issue_workflow] ) crew.kickoff()
​ Release Management
from crewai import Agent, Task, Crew release_manager = Agent( role = "Release Manager" , goal = "Manage software releases and versioning" , backstory = "An experienced release manager who handles version control and release processes." , apps = [ 'github' ] ) # Task to create a new release release_task = Task( description = """ Create a new release v2.1.0 for the project with: - Auto-generated release notes - Target the main branch - Include a description of new features and bug fixes """ , agent = release_manager, expected_output = "Release v2.1.0 created successfully with release notes" ) crew = Crew( agents = [release_manager], tasks = [release_task] ) crew.kickoff()
​ Issue Tracking and Management
from crewai import Agent, Task, Crew project_coordinator = Agent( role = "Project Coordinator" , goal = "Track and coordinate project issues and development progress" , backstory = "An AI assistant that helps coordinate development work and track project progress." , apps = [ 'github' ] ) # Complex task involving multiple GitHub operations coordination_task = Task( description = """ 1. Search for all open issues assigned to the current milestone 2. Identify overdue issues and update their priority labels 3. Create a weekly progress report issue 4. Lock resolved issues that have been inactive for 30 days """ , agent = project_coordinator, expected_output = "Project coordination completed with progress report and issue management" ) crew = Crew( agents = [project_coordinator], tasks = [coordination_task] ) crew.kickoff()
​ Getting Help
Need Help?
