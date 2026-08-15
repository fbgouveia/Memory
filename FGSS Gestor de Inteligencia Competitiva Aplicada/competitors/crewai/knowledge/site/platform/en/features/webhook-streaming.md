# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/webhook-streaming
- Raw SHA-256: `d32e1a54cc50940dbe760d1e00f2c7b7a666fbefa59fce14d3d50470d6b2ef0c`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Operate Webhook Streaming
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
Webhook Streaming
Copy page Copy page
Using Webhook Streaming to stream events to your webhook
Copy page Copy page
​ Overview
​ Usage
{ "inputs" : { "foo" : "bar" }, "webhooks" : { "events" : [ "crew_kickoff_started" , "llm_call_started" ], "url" : "https://your.endpoint/webhook" , "realtime" : false , "authentication" : { "strategy" : "bearer" , "token" : "my-secret-token" } } }
​ Webhook Format
{ "events" : [ { "id" : "event-id" , "execution_id" : "crew-run-id" , "timestamp" : "2025-02-16T10:58:44.965Z" , "type" : "llm_call_started" , "data" : { "model" : "gpt-4" , "messages" : [ { "role" : "system" , "content" : "You are an assistant." }, { "role" : "user" , "content" : "Summarize this article." } ] } } ] }
​ Supported Events
​ Flow Events:
flow_created
flow_started
flow_finished
flow_plot
method_execution_started
method_execution_finished
method_execution_failed
​ Agent Events:
agent_execution_started
agent_execution_completed
agent_execution_error
lite_agent_execution_started
lite_agent_execution_completed
lite_agent_execution_error
agent_logs_started
agent_logs_execution
agent_evaluation_started
agent_evaluation_completed
agent_evaluation_failed
​ Crew Events:
crew_kickoff_started
crew_kickoff_completed
crew_kickoff_failed
crew_train_started
crew_train_completed
crew_train_failed
crew_test_started
crew_test_completed
crew_test_failed
crew_test_result
​ Task Events:
task_started
task_completed
task_failed
task_evaluation
​ Tool Usage Events:
tool_usage_started
tool_usage_finished
tool_usage_error
tool_validate_input_error
tool_selection_error
tool_execution_error
​ LLM Events:
llm_call_started
llm_call_completed
llm_call_failed
llm_stream_chunk
​ LLM Guardrail Events:
llm_guardrail_started
llm_guardrail_completed
​ Memory Events:
memory_query_started
memory_query_completed
memory_query_failed
memory_save_started
memory_save_completed
memory_save_failed
memory_retrieval_started
memory_retrieval_completed
​ Knowledge Events:
knowledge_search_query_started
knowledge_search_query_completed
knowledge_search_query_failed
knowledge_query_started
knowledge_query_completed
knowledge_query_failed
​ Reasoning Events:
agent_reasoning_started
agent_reasoning_completed
agent_reasoning_failed
GitHub
Need Help?
