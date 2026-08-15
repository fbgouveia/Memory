# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/capture_telemetry_logs
- Raw SHA-256: `26c6876b61df7eff747a07b80884d5d2c6b2c74faa6d090714eda29e925b1319`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides OpenTelemetry Export
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
OpenTelemetry Export
Copy page Copy page
Export traces and logs from your CrewAI AMP deployments to your own OpenTelemetry collector
Copy page Copy page
​ Prerequisites
CrewAI AMP account
OpenTelemetry collector
​ Setting up a collector
In CrewAI AMP, go to Settings > OpenTelemetry Collectors .
Click Add Collector .
Select an integration: OpenTelemetry Traces and OpenTelemetry Logs — export to any OTLP-compatible collector or backend. Datadog — send traces straight to Datadog’s OTLP intake, no separate collector or Datadog Agent required.
Configure the connection. The fields depend on the integration you selected:
OpenTelemetry Traces / Logs
Datadog
Endpoint — Your collector’s OTLP endpoint (e.g., https://otel-collector.example.com:4317 ).
Service Name — A name to identify this service in your observability platform.
Custom Headers (optional) — Add authentication or routing headers as key-value pairs.
Certificate (optional) — Provide a TLS certificate if your collector requires one.
(optional) Click Test Connection to verify CrewAI can reach the endpoint with the credentials you provided.
Click Save .
