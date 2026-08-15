# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/pii-trace-redactions
- Raw SHA-256: `a754798ab22de1490c8edb6e98c81157370c86dfff876ae4e5eedc3c0804109d`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Build PII Redaction for Traces
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
PII Redaction for Traces
Copy page Copy page
Automatically redact sensitive data from crew and flow execution traces
Copy page Copy page
​ Overview
​ Why PII Redaction Matters
Customer data from CRM integrations
Financial information from payment processors
Personal details from form submissions
Internal employee data
​ How It Works
Detect - Scan trace event data for known PII patterns
Classify - Identify the type of sensitive data (credit card, SSN, email, etc.)
Mask/Redact - Replace the sensitive data with masked values based on your configuration
Original: "Contact john.doe@company.com or call 555-123-4567" Redacted: "Contact <EMAIL_ADDRESS> or call <PHONE_NUMBER>"
​ Enabling PII Redaction
Navigate to Crew Settings
Enable PII Protection
Configure Entity Types
Save
​ Supported Entity Types
​ Global Entities
​ US-Specific Entities
​ Redaction Actions
​ Custom Recognizers
​ Recognizer Types
​ Creating a Custom Recognizer
Navigate to Custom Recognizers
Configure the Recognizer
Name : A descriptive name for the recognizer
Entity Type : The entity label that will appear in redacted output (e.g., EMPLOYEE_ID , SALARY )
Type : Choose between Regex Pattern or Deny List
Pattern/Values : Regex pattern or list of strings to match
Confidence Threshold : Minimum score (0.0-1.0) required for a match to trigger redaction. Higher values (e.g., 0.8) reduce false positives but may miss some matches. Lower values (e.g., 0.5) catch more matches but may over-redact. Default is 0.8.
Context Words (optional): Words that increase detection confidence when found nearby
Save
​ Understanding Entity Types
Entity Type: SALARY Pattern: salary:\s*\$\s*\d+ Input: "Employee salary: $50,000" Output: "Employee <SALARY>"
​ Using Context Words
Context Words: "project", "code", "internal" Entity Type: PROJECT_CODE Pattern: PRJ-\d{4}
​ Viewing Redacted Traces
Task Output: "Customer <PERSON> placed order #12345. Contact email: <EMAIL_ADDRESS>, phone: <PHONE_NUMBER>. Payment processed for card ending in <CREDIT_CARD>."
​ Best Practices
​ Performance Considerations
Enable Only Needed Entities
Use Specific Patterns
Leverage Context Words
​ Troubleshooting
PII Not Being Redacted
Entity type not enabled in configuration
Pattern doesn’t match the data format
Custom recognizer has syntax errors
Verify entity is enabled in Settings → Security
Test regex patterns with sample data
Check logs for configuration errors
Too Much Data Being Redacted
Overly broad entity types enabled (e.g., DATE_TIME catches dates everywhere)
Custom recognizer patterns are too general
Disable entities that cause false positives
Make custom patterns more specific
Add context words to improve accuracy
Performance Issues
Too many entities enabled
NLP-based entities ( PERSON , LOCATION , NRP ) are computationally expensive as they use machine learning models
Only enable entities you actually need
Consider using pattern-based alternatives where possible
Monitor trace processing times in the dashboard
​ Practical Example: Salary Pattern Matching
​ Use Case
salary: $50,000
salary: $125,000.00
salary:$1,500.50
​ Configuration
​ Regex Pattern Breakdown
​ Example Results
Original: "Employee record shows salary: $125,000.00 annually" Redacted: "Employee record shows <SALARY> annually" Original: "Base salary:$50,000 with bonus potential" Redacted: "Base <SALARY> with bonus potential"
​ Enable the Recognizer for Your Deployments
Navigate to Your Deployment
Select Custom Recognizers
Save Configuration
