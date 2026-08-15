# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/resources/frequently-asked-questions
- Raw SHA-256: `52c683b30785defb2b9e4fa7384b20ae094491f08687127ec8af0117fbccdc11`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Resources FAQs
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
Copy page Copy page
Frequently asked questions about CrewAI AMP
Copy page Copy page
How is task execution handled in the hierarchical process?
Where can I get the latest CrewAI documentation?
What are the key differences between Hierarchical and Sequential Processes in CrewAI?
​ Hierarchical Process:
Tasks are delegated and executed based on a structured chain of command
A manager language model ( manager_llm ) must be specified for the manager agent
Manager agent oversees task execution, planning, delegation, and validation
Tasks are not pre-assigned; the manager allocates tasks to agents based on their capabilities
​ Sequential Process:
Tasks are executed one after another, ensuring tasks are completed in an orderly progression
Output of one task serves as context for the next
Task execution follows the predefined order in the task list
​ Which Process is Better for Complex Projects?
Dynamic task allocation and delegation : Manager agent can assign tasks based on agent capabilities
Structured validation and oversight : Manager agent reviews task outputs and ensures completion
Complex task management : Precise control over tool availability at the agent level
What are the benefits of using memory in the CrewAI framework?
Adaptive Learning : Crews become more efficient over time, adapting to new information and refining their approach to tasks
Enhanced Personalization : Memory enables agents to remember user preferences and historical interactions, leading to personalized experiences
Improved Problem Solving : Access to a rich memory store aids agents in making more informed decisions, drawing on past learnings and contextual insights
What is the purpose of setting a maximum RPM limit for an agent?
What role does human input play in the execution of tasks within a CrewAI crew?
What advanced customization options are available for tailoring and enhancing agent behavior and capabilities in CrewAI?
Language Model Customization : Agents can be customized with specific language models ( llm ) and function-calling language models ( function_calling_llm )
Performance and Debugging Settings : Adjust an agent’s performance and monitor its operations
Verbose Mode : Enables detailed logging of an agent’s actions, useful for debugging and optimization
RPM Limit : Sets the maximum number of requests per minute ( max_rpm )
Maximum Iterations : The max_iter attribute allows users to define the maximum number of iterations an agent can perform for a single task
Delegation and Autonomy : Control an agent’s ability to delegate or ask questions with the allow_delegation attribute (default: True)
Human Input Integration : Agents can request additional information or clarification when necessary
In what scenarios is human input particularly useful in agent execution?
Agents require additional information or clarification : When agents encounter ambiguity or incomplete data
Agents need to make complex or sensitive decisions : Human input can assist in ethical or nuanced decision-making
Oversight and validation of agent output : Human input can help validate results and prevent errors
Customizing agent behavior : Human input can provide feedback to refine agent responses over time
Identifying and resolving errors or limitations : Human input helps address agent capability gaps
What are the different types of memory that are available in crewAI?
Short-term memory : Temporary storage for immediate context
Long-term memory : Persistent storage for learned patterns and information
Entity memory : Focused storage for specific entities and their attributes
Contextual memory : Memory that maintains context across interactions
How do I use Output Pydantic in a Task?
Define a Pydantic model
from pydantic import BaseModel class User ( BaseModel ): name: str age: int
Create a task with Output Pydantic
from crewai import Task, Crew, Agent from my_models import User task = Task( description = "Create a user with the provided name and age" , expected_output = User, # This is the Pydantic model agent = agent, tools = [tool1, tool2] )
Set the output_pydantic attribute in your agent
from crewai import Agent from my_models import User agent = Agent( role = 'User Creator' , goal = 'Create users' , backstory = 'I am skilled in creating user accounts' , tools = [tool1, tool2], output_pydantic = User )
How can I create custom tools for my CrewAI agents?
How can you control the maximum number of requests per minute that the entire crew can perform?
