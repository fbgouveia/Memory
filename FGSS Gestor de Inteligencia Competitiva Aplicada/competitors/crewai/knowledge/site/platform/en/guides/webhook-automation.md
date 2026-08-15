# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/webhook-automation
- Raw SHA-256: `27e68c61060f1a3862a76ddbd728500ff2ae48ae39396df28a76bda8134b785f`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Webhook Automation
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
Webhook Automation
Copy page Copy page
Automate CrewAI AMP workflows using webhooks with platforms like ActivePieces, Zapier, and Make.com
Copy page Copy page
​ Setting Up Webhooks
Accessing the Kickoff Interface
Navigate to the CrewAI AMP dashboard
Look for the /kickoff section, which is used to start the crew execution
Configuring the JSON Content
inputs : A JSON object containing: company : The name of the company (e.g., “tesla”) product_name : The name of the product (e.g., “crewai”) form_response : The type of response (e.g., “financial”) icp_description : A brief description of the Ideal Customer Profile product_description : A short description of the product taskWebhookUrl , stepWebhookUrl , crewWebhookUrl : URLs for various webhook endpoints (ActivePieces, Zapier, Make.com or another compatible platform)
Integrating with ActivePieces
Set up a new flow in ActivePieces
Add a trigger (e.g., Every Day schedule)
Add an HTTP action step Set the action to Send HTTP request Use POST as the method Set the URL to your CrewAI AMP kickoff endpoint Add necessary headers (e.g., Bearer Token ) In the body, include the JSON content as configured in step 2 The crew will then kickoff at the pre-defined time.
Setting Up the Webhook
Create a new flow in ActivePieces and name it
Add a webhook step as the trigger: Select Catch Webhook as the trigger type This will generate a unique URL that will receive HTTP requests and trigger your flow Configure the email to use crew webhook body text
​ Webhook Output Examples
Step Webhook
Task Webhook
Crew Webhook
{ "prompt" : "Research the financial industry for potential AI solutions" , "thought" : "I need to conduct preliminary research on the financial industry" , "tool" : "research_tool" , "tool_input" : "financial industry AI solutions" , "result" : "**Preliminary Research Report on the Financial Industry for crewai Enterprise Solution** \n 1. Industry Overview and Trends \n The financial industry in .... \n Conclusion: \n The financial industry presents a fertile ground for implementing AI solutions like crewai, particularly in areas such as digital customer engagement, risk management, and regulatory compliance. Further engagement with the lead is recommended to better tailor the crewai solution to their specific needs and scale." , "kickoff_id" : "97eba64f-958c-40a0-b61c-625fe635a3c0" , "meta" : { "requestId" : "travel-req-123" , "source" : "web-app" } }
{ "description" : "Using the information gathered from the lead's data, conduct preliminary research on the lead's industry, company background, and potential use cases for crewai. Focus on finding relevant data that can aid in scoring the lead and planning a strategy to pitch them crewai." , "name" : "Industry Research Task" , "expected_output" : "Detailed research report on the financial industry" , "summary" : "The financial industry presents a fertile ground for implementing AI solutions like crewai, particularly in areas such as digital customer engagement, risk management, and regulatory compliance. Further engagement with the lead is recommended to better tailor the crewai solution to their specific needs and scale." , "agent" : "Research Agent" , "output" : "**Preliminary Research Report on the Financial Industry for crewai Enterprise Solution** \n 1. Industry Overview and Trends \n The financial industry in .... \n Conclusion: \n The financial industry presents a fertile ground for implementing AI solutions like crewai, particularly in areas such as digital customer engagement, risk management, and regulatory compliance." , "output_json" : { "industry" : "financial" , "key_opportunities" : [ "digital customer engagement" , "risk management" , "regulatory compliance" ] }, "kickoff_id" : "97eba64f-958c-40a0-b61c-625fe635a3c0" , "meta" : { "requestId" : "travel-req-123" , "source" : "web-app" } }
{ "kickoff_id" : "97eba64f-958c-40a0-b61c-625fe635a3c0" , "result" : "**Final Analysis Report** \n\n Lead Score: Customer service enhancement and compliance are particularly relevant. \n\n Talking Points: \n - Highlight how crewai's AI solutions can transform customer service \n - Discuss crewai's potential for sustainability goals \n - Emphasize compliance capabilities \n - Stress adaptability for various operation scales" , "result_json" : { "lead_score" : "Customer service enhancement, and compliance are particularly relevant." , "talking_points" : [ "Highlight how crewai's AI solutions can transform customer service with automated, personalized experiences and 24/7 support, improving both customer satisfaction and operational efficiency." , "Discuss crewai's potential to help the institution achieve its sustainability goals through better data analysis and decision-making, contributing to responsible investing and green initiatives." , "Emphasize crewai's ability to enhance compliance with evolving regulations through efficient data processing and reporting, reducing the risk of non-compliance penalties." , "Stress the adaptability of crewai to support both extensive multinational operations and smaller, targeted projects, ensuring the solution grows with the institution's needs." ] }, "token_usage" : { "total_tokens" : 1250 , "prompt_tokens" : 800 , "completion_tokens" : 450 }, "meta" : { "requestId" : "travel-req-123" , "source" : "web-app" } }
