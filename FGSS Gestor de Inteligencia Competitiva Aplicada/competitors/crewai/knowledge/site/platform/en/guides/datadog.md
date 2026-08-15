# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/datadog
- Raw SHA-256: `47adda8e9f9bf6f1164cd53118654aeeacf1dfafeb57e11eb1c490e08cb9a13d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Datadog Integration
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
Datadog Integration
Copy page Copy page
Monitor self-hosted CrewAI AMP deployments in Datadog via the Datadog Agent or Datadog’s OTLP intake — either path lands the same structured facets so you can import the ready-made operations dashboard.
Copy page Copy page
​ Choose a path
Datadog Agent
Datadog OTLP intake
Run the Datadog Agent next to your CrewAI containers — see Datadog’s deployment docs for Kubernetes, ECS, or VM setup. Enable log collection ( logs_enabled: true ) and container log collection ( logs_config.container_collect_all: true ).
Confirm logs arrive in Datadog Logs with the JSON fields parsed — see Verify ingestion .
In CrewAI AMP, go to Settings → OpenTelemetry Collectors → Add Collector and pick Datadog .
Configure the connection: Datadog Site Domain — your Datadog site’s OTLP host only, no protocol or path. CrewAI builds the full HTTPS OTLP endpoint for you. Use the host that matches your Datadog site : otlp.datadoghq.com (US1) otlp.us3.datadoghq.com (US3) otlp.us5.datadoghq.com (US5) otlp.datadoghq.eu (EU1) otlp.ap1.datadoghq.com (AP1) API Key — your Datadog API key. See how to create one .
The Datadog template provisions both signals at once — when you save, AMP creates a traces collector at /v1/traces and a logs collector at /v1/logs , both sharing the same Datadog OTLP host and API key. You’ll see them as two separate rows in your OTel collectors list.
(optional) Click Test Connection to verify CrewAI can reach the endpoint with the credentials you provided. Then click Save — both collectors are created in one step.
​ Log schema reference
​ Why JSON output
Lower ingestion cost
Structured search
APM ↔ logs correlation
Stable contract
​ Example events
{ "schema" : "v1" , "ts" : "2026-06-17T16:14:23.482914Z" , "level" : "INFO" , "logger" : "crewai_enterprise.utilities.pii_redaction" , "crewai_version" : "1.14.7" , "msg" : "PII tracking state reset (engines preserved)" , "automation_id" : "12" , "task_id" : "0843a930-b306-464b-89c8-bfafa78cc711" , "kickoff_id" : "0843a930-b306-464b-89c8-bfafa78cc711" , "execution_id" : "0843a930-b306-464b-89c8-bfafa78cc711" , "automation_name" : "research_flow" }
{ "schema" : "v1" , "ts" : "2026-06-17T16:14:31.218450Z" , "level" : "ERROR" , "logger" : "api.tasks.flow_run_task" , "crewai_version" : "1.14.7" , "msg" : "Flow execution failed" , "automation_id" : "12" , "kickoff_id" : "0843a930-b306-464b-89c8-bfafa78cc711" , "execution_id" : "0843a930-b306-464b-89c8-bfafa78cc711" , "automation_name" : "research_flow" , "exception" : { "type" : "ValueError" , "message" : "Topic cannot be empty" , "stacktrace" : "Traceback (most recent call last): \n File \" /app/flow.py \" , line 42, in summarize \n ... \n ValueError: Topic cannot be empty \n " } }
​ Schema v1 fields
​ Stability promise
Never removing a field that customers may have built queries or dashboards against.
Never renaming a field in place — renames happen via a schema bump (e.g. v2 ), with the old name kept as a deprecated alias for at least one release cycle.
Adding new fields at any time. Consumers should ignore unknown top-level keys.
​ Prerequisite: promote facets
Search for a CrewAI log
Promote each field
automation_id , automation_name , execution_id , kickoff_id , task_id
crewai_version , model_id
exception.type , exception.message
​ Import the dashboard
Download the dashboard JSON
Open the import dialog in Datadog
Paste or upload the JSON
​ What you get
$automation — filter to a single automation by name.
$version — filter to a single crewai SDK version (useful for comparing pre- and post-upgrade behavior).
$service — filter to a specific Datadog service tag (useful when multiple CrewAI deployments share one Datadog account).
​ Verify ingestion
Datadog Agent
Datadog OTLP intake
​ Customize
​ Add a Recent Errors log stream
Edit the dashboard and click + Add Widgets inside the Drill-Down group.
Drag in a Log Stream widget.
Set the filter query to status:error $automation $version $service .
Choose columns: @timestamp , @automation_name , @exception.type , @exception.message , @execution_id .
Sort by most recent, limit to 25 entries.
​ Add p95 latency
From APM traces — if you also export OTLP traces to Datadog, add a Timeseries widget with data source Traces , query service:crewai* , aggregation p95 of @duration . Datadog APM auto-tracks span duration.
From metric extraction — extract a flow.duration_ms metric from logs via Datadog’s log-to-metric pipeline , then chart it like any other metric. Useful if you don’t run APM.
​ Re-scope to multiple deployments
​ Troubleshooting
​ Next steps
OpenTelemetry Export
Datadog Log Search Syntax
