# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/automation-triggers
- Raw SHA-256: `5d42ab65b66d5428a1cdd3e5e3b50ca30b82019d4d67b7e1318f164a0065387d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Triggers Triggers Overview
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
Triggers Overview
Copy page Copy page
Understand how CrewAI AMP triggers work, how to manage them, and where to find integration-specific playbooks
Copy page Copy page
​ Integration Playbooks
Gmail Trigger
Google Calendar Trigger
Google Drive Trigger
Outlook Trigger
OneDrive Trigger
Microsoft Teams Trigger
HubSpot Trigger
Salesforce Trigger
Slack Trigger
Zapier Trigger
​ Trigger Capabilities
Respond to real-time events - Automatically execute workflows when specific conditions are met
Integrate with external systems - Connect with platforms like Gmail, Outlook, OneDrive, JIRA, Slack, Stripe and more
Scale your automation - Handle high-volume events without manual intervention
Maintain context - Access trigger data within your crews and flows
​ Managing Triggers
​ Viewing Available Triggers
Navigate to your deployment in the CrewAI dashboard
Click on the Triggers tab to view all available trigger integrations
Example of available automation triggers for a Gmail deployment
​ Enabling and Disabling Triggers
Enable or disable triggers with toggle
Enabled (blue toggle) : The trigger is active and will automatically execute your deployment when the specified events occur
Disabled (gray toggle) : The trigger is inactive and will not respond to events
​ Monitoring Trigger Executions
List of executions triggered by automation
​ Building Trigger-Driven Automations
​ Trigger Setup Checklist
Connect the integration under Tools & Integrations and complete any OAuth or API key steps
Enable the trigger toggle on the deployment that should respond to events
Provide any required environment variables (API tokens, tenant IDs, shared secrets)
Create or update tasks that can parse the incoming payload within the first crew task or flow step
Decide whether to pass trigger context automatically using allow_crewai_trigger_context
Set up monitoring—webhook logs, CrewAI execution history, and optional external alerting
​ Testing Triggers Locally with CLI
​ List Available Triggers
crewai triggers list
Integration name and connection status
Available trigger types
Trigger names and descriptions
​ Simulate Trigger Execution
crewai triggers run < trigger_nam e >
crewai triggers run microsoft_onedrive/file_changed
Executes your crew locally
Passes a complete, realistic trigger payload
Simulates exactly how your crew will be called in production
Use crewai triggers run <trigger> to simulate trigger execution during development
Using crewai run will NOT simulate trigger calls and won’t pass the trigger payload
After deployment, your crew will be executed with the actual trigger payload
If your crew expects parameters that aren’t in the trigger payload, execution may fail
​ Triggers with Crew
@CrewBase class MyAutomatedCrew : @agent def researcher ( self ) -> Agent: return Agent( config = self .agents_config[ 'researcher' ], ) @task def parse_trigger_payload ( self ) -> Task: return Task( config = self .tasks_config[ 'parse_trigger_payload' ], agent = self .researcher(), ) @task def analyze_trigger_content ( self ) -> Task: return Task( config = self .tasks_config[ 'analyze_trigger_data' ], agent = self .researcher(), )
​ Integration with Flows
​ Accessing Trigger Payload
from crewai.flow import Flow, start, listen class MyAutomatedFlow ( Flow ): @start () def handle_trigger ( self , crewai_trigger_payload : dict = None ): """ This start method can receive trigger data """ if crewai_trigger_payload: # Process the trigger data trigger_id = crewai_trigger_payload.get( 'id' ) event_data = crewai_trigger_payload.get( 'payload' , {}) # Store in flow state for use by other methods self .state.trigger_id = trigger_id self .state.trigger_type = event_data return event_data # Handle manual execution return None @listen (handle_trigger) def process_data ( self , trigger_data ): """ Process the data from the trigger """ # ... process the trigger
​ Triggering Crews from Flows
@start () def delegate_to_crew ( self , crewai_trigger_payload : dict = None ): """ Delegate processing to a specialized crew """ crew = MySpecializedCrew() # Pass the trigger payload to the crew result = crew.crew().kickoff( inputs = { 'a_custom_parameter' : "custom_value" , 'crewai_trigger_payload' : crewai_trigger_payload }, ) return result
​ Troubleshooting
Verify the trigger is enabled in your deployment’s Triggers tab
Check integration connection status under Tools & Integrations
Ensure all required environment variables are properly configured
Check the execution logs for error details
Use crewai triggers run <trigger_name> to test locally and see the exact payload structure
Verify your crew can handle the crewai_trigger_payload parameter
Ensure your crew doesn’t expect parameters that aren’t included in the trigger payload
Always test with crewai triggers run <trigger> before deploying to see the complete payload
Remember that crewai run does NOT simulate trigger calls—use crewai triggers run instead
Use crewai triggers list to verify which triggers are available for your connected integrations
After deployment, your crew will receive the actual trigger payload, so test thoroughly locally first
