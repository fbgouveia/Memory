# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/conversational-flow-chat
- Raw SHA-256: `513e09ae79b99284826d164d90f67ae3f33e5ab91cf3731164dd750a7bebaae7`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Conversational Flow Chat API
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
Conversational Flow Chat API
Copy page Copy page
Use the deployment chat endpoints to run multi-turn conversational Flows on CrewAI AMP
Copy page Copy page
​ Overview
​ Prerequisites
Deploy a Flow automation that implements conversational turns ( handle_turn ).
Copy the bearer token from the automation Status tab (same token used for /kickoff ).
Confirm chat is enabled via /inspect (below).
Authorization: Bearer YOUR_FLOW_TOKEN
​ Discover chat capability
curl -X GET \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ https://your-flow-url.crewai.com/inspect
{ "flow" : { "chat" : { "conversational" : true , "handle_turn" : true , "transports" : [ "webhook" ], "experimental" : true } } }
​ End-to-end chat loop
Start a session
curl -X POST \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "completedTurnWebhookUrl": "https://your-server.com/webhooks/completed-turn", "webhooks": { "url": "https://your-server.com/webhooks/events", "events": ["*"], "realtime": false, "authentication": { "strategy": "bearer", "token": "my-secret-token" } } }' \ https://your-flow-url.crewai.com/chat/start
{ "session_id" : "11111111-2222-3333-4444-555555555555" }
Send a user message
curl -X POST \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "message": "Where is my order?", "stream": true }' \ https://your-flow-url.crewai.com/chat/11111111-2222-3333-4444-555555555555/message
{ "session_id" : "11111111-2222-3333-4444-555555555555" , "kickoff_id" : "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" , "status" : "queued" }
Wait for the turn to finish
curl -X GET \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ https://your-flow-url.crewai.com/status/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
{ "detail" : { "code" : "session_busy" , "kickoff_id" : "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" } }
Read session history
curl -X GET \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ https://your-flow-url.crewai.com/chat/11111111-2222-3333-4444-555555555555/history
{ "session_id" : "11111111-2222-3333-4444-555555555555" , "messages" : [ { "role" : "user" , "content" : "Where is my order?" }, { "role" : "assistant" , "content" : "Your order is on the way." } ], "active_kickoff_id" : null }
​ Streaming a turn
​ Option A: HTTP message + SSE attach
POST /chat/{session_id}/message with "stream": true .
Attach to the active turn:
curl -N \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ "https://your-flow-url.crewai.com/chat/11111111-2222-3333-4444-555555555555/stream/events?events=*&last_event_id=0-0"
​ Option B: WebSocket (attach or send)
wss://your-flow-url.crewai.com/chat/{session_id}/stream?token=YOUR_FLOW_TOKEN&events=*&last_event_id=0-0
Active turn already running — the socket attaches and first emits turn_started with data.status: "attached" , then streams frames until a terminal type.
No active turn — send a JSON message to queue a turn, then consume the stream:
{ "message" : "Where is my order?" , "messageHistory" : [], "events" : "*" , "lastEventId" : "0-0" }
​ Example stream frames
{ "type" : "turn_started" , "kickoff_id" : "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" , "session_id" : "11111111-2222-3333-4444-555555555555" , "data" : { "status" : "queued" } }
{ "type" : "token" , "kickoff_id" : "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" , "session_id" : "11111111-2222-3333-4444-555555555555" , "data" : { "content" : "Your order" } }
{ "type" : "turn_completed" , "kickoff_id" : "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee" , "session_id" : "11111111-2222-3333-4444-555555555555" , "data" : {} }
​ HITL inside a chat session
curl -X POST \ -H "Authorization: Bearer YOUR_FLOW_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "flow_id": "FLOW_OR_SESSION_ID", "feedback": "approved" }' \ https://your-flow-url.crewai.com/resume_feedback
​ API reference
​ Common errors
​ Related
Conversational Flows
Kickoff Crew / Flow
Webhook Streaming
Flow HITL Management
