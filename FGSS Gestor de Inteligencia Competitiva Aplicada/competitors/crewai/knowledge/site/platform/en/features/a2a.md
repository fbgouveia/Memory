# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/a2a
- Raw SHA-256: `5e2103648e54fd9e784ff1da84fd4b45c34e32b152641f1cafce77888c021d91`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Build A2A on AMP
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
A2A on AMP
Copy page Copy page
Production-grade Agent-to-Agent communication with distributed state and multi-scheme authentication
Copy page Copy page
​ Overview
​ Usage
from crewai import Agent, Crew, Task from crewai.a2a import A2AServerConfig from crewai.a2a.auth import EnterpriseTokenAuth agent = Agent( role = "Data Analyst" , goal = "Analyze datasets and provide insights" , backstory = "Expert data scientist with statistical analysis skills" , llm = "gpt-4o" , a2a = A2AServerConfig( auth = EnterpriseTokenAuth() ) ) task = Task( description = "Analyze the provided dataset" , expected_output = "Statistical summary with key insights" , agent = agent ) crew = Crew( agents = [agent], tasks = [task])
Crew-level : an aggregate agent card at /.well-known/agent-card.json where each agent with A2AServerConfig is listed as a skill, with a JSON-RPC endpoint at /a2a
Per-agent : isolated agent cards and JSON-RPC endpoints mounted at /a2a/agents/{role}/ , each with its own tenancy
​ File Inputs and Structured Output
​ What AMP Adds
Distributed State
Enterprise Authentication
gRPC Transport
Context Lifecycle
Signed Webhooks
Multi-Transport
​ Distributed State Management
​ Storage Layers
​ Enterprise Authentication
​ Extended Agent Cards
Public agents that expose basic skills to anyone, with advanced skills available to authenticated clients
Internal agents that advertise different capabilities based on the caller’s identity
​ gRPC Transport
TLS termination with configurable certificate and key paths
gRPC reflection for debugging with tools like grpcurl
Authentication using the same schemes available for HTTP
Extension validation ensuring clients support required protocol extensions
Version negotiation across A2A protocol versions 0.2 and 0.3
​ Context Lifecycle Management
​ Lifecycle States
​ Signed Push Notifications
​ Signature Headers
​ Security Properties
Integrity : payload cannot be modified without invalidating the signature
Replay protection : signatures are timestamp-bound with a configurable tolerance window
Retry with backoff : failed deliveries retry with exponential backoff
​ Distributed Event Streaming
​ Multi-Transport Endpoints
​ Version and Extension Negotiation
​ Version Negotiation
Clients send the A2A-Version header with their preferred version
AMP validates against supported versions (0.2, 0.3) and falls back to 0.3 if unspecified
The negotiated version is returned in the response headers
​ Extension Validation
Clients declare supported extensions via the X-A2A-Extensions header
AMP validates that clients support all extensions the agent requires
Requests from clients missing required extensions receive an UnsupportedExtensionError
​ Next Steps
A2A Agent Delegation — A2A protocol fundamentals and configuration
A2UI — Interactive UI rendering over A2A
Deploy to AMP — General deployment guide
Webhook Streaming — Event streaming for deployed automations
