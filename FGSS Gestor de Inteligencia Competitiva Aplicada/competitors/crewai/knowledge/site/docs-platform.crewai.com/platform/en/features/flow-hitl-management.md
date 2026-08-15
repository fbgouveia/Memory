# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/flow-hitl-management
- Raw SHA-256: `3652ec5ac7edf9c6be972433c041969ba5d19c0b72c14f67321c652a1cf9edbc`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Operate Flow HITL Management
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
Flow HITL Management
Copy page Copy page
Enterprise-grade human review for Flows with email-first notifications, routing rules, and auto-response capabilities
Copy page Copy page
​ Overview
Email-First Design
Flexible Routing
Auto-Response
​ Key Benefits
Simple mental model : Email addresses are universal; no need to manage platform users or roles
External responders : Anyone with an email can respond, even non-platform users
Dynamic assignment : Pull assignee email directly from flow state (e.g., sales_rep_email )
Reduced configuration : Fewer settings to configure, faster time to value
Email as primary channel : Most users prefer responding via email over logging into a dashboard
​ Setting Up Human Review Points in Flows
from crewai.flow.flow import Flow, start, listen, or_ from crewai.flow.human_feedback import human_feedback, HumanFeedbackResult class ContentApprovalFlow ( Flow ): @start () def generate_content ( self ): return "Generated marketing copy for Q1 campaign..." @human_feedback ( message = "Please review this content for brand compliance:" , emit = [ "approved" , "rejected" , "needs_revision" ], ) @listen (or_( "generate_content" , "needs_revision" )) def review_content ( self ): return "Marketing copy for review..." @listen ( "approved" ) def publish_content ( self , result : HumanFeedbackResult): print ( f "Publishing approved content. Reviewer notes: { result.feedback } " ) @listen ( "rejected" ) def archive_content ( self , result : HumanFeedbackResult): print ( f "Content rejected. Reason: { result.feedback } " )
​ Decorator Parameters
​ Platform Configuration
​ Email Notifications
​ SLA Target
​ Email Notifications & Responses
​ How Email Responses Work
Notification Sent
Reply-To Address
User Replies
Token Validation
Flow Resumes
​ Response Format
Emit option : If the reply matches an emit option (e.g., “approved”), it’s used directly
Free-form text : Any text response is passed to the flow as feedback
Plain text : The first line of the reply body is used as feedback
​ Confirmation Emails
​ Email Token Security
Tokens are cryptographically signed for security
Tokens expire after 7 days
Sender email must match the token’s authorized email
Confirmation/error emails are sent after processing
​ Routing Rules
​ Rule Structure
{ "name" : "Approvals to Finance" , "match" : { "method_name" : "approve_*" }, "assign_to_email" : "finance@company.com" , "assign_from_input" : "manager_email" }
​ Matching Patterns
​ Assignment Priority
Dynamic assignment ( assign_from_input ): If configured, pulls email from flow state
Static email ( assign_to_email ): Falls back to configured email
Deployment creator : If no rule matches, the deployment creator’s email is used
​ Dynamic Assignment Example
{ "name" : "Route to Sales Rep" , "match" : { "method_name" : "review_*" }, "assign_from_input" : "sales_rep_email" }
​ Auto-Response
​ Configuration
​ Use Cases
SLA compliance : Ensure flows don’t hang indefinitely
Default approval : Auto-approve low-risk requests after timeout
Graceful degradation : Continue with a safe default when reviewers are unavailable
​ Review Process
​ Dashboard Interface
Markdown Rendering : Rich formatting for review content with syntax highlighting
Context Panel : View flow state, execution history, and related information
Feedback Input : Provide detailed feedback and comments with your decision
Quick Actions : One-click emit option buttons with optional comments
​ Response Methods
​ History & Audit Trail
Decision history (approve/reject/revise)
Reviewer identity and timestamp
Feedback and comments provided
Response method (email/dashboard/API)
Response time metrics
​ Analytics & Monitoring
​ Performance Dashboard
Response Times
Volume Trends
Decision Distribution
SLA Tracking
​ Audit & Compliance
Complete decision history with timestamps
Reviewer identity verification
Immutable audit logs
Export capabilities for compliance reporting
​ Common Use Cases
Security Reviews
AI generates responses to security questionnaires
Security team reviews and validates accuracy via email
Approved responses are compiled into final submission
Full audit trail for compliance
Content Approval
AI generates marketing copy or social media content
Route to brand team email for voice/tone review
Automatic publishing upon approval
Financial Approvals
AI pre-processes and categorizes financial requests
Route based on amount thresholds using dynamic assignment
Maintain complete audit trail for financial compliance
Dynamic Assignment from CRM
Flow fetches account owner email from CRM
Store email in flow state (e.g., account_owner_email )
Use assign_from_input to route to the right person automatically
Quality Assurance
AI generates customer-facing content or responses
QA team reviews via email notification
Feedback loops improve AI performance over time
​ Webhooks API
Building custom approval UIs
Integrating with internal tools (Jira, ServiceNow, custom dashboards)
Routing approvals to third-party systems
Mobile app notifications
Automated decision systems
​ Configuring Webhooks
Navigate to Settings
Expand Webhooks Section
Add Your Webhook URL
Save Configuration
​ Webhook Events
​ Webhook Payload
{ "event" : "new_request" , "request" : { "id" : "550e8400-e29b-41d4-a716-446655440000" , "flow_id" : "flow_abc123" , "method_name" : "review_article" , "message" : "Please review this article for publication." , "emit_options" : [ "approved" , "rejected" , "request_changes" ], "state" : { "article_id" : 12345 , "author" : "john@example.com" , "category" : "technology" }, "metadata" : {}, "created_at" : "2026-01-14T12:00:00Z" }, "deployment" : { "id" : 456 , "name" : "Content Review Flow" , "organization_id" : 789 }, "callback_url" : "https://api.crewai.com/..." , "assigned_to_email" : "reviewer@company.com" }
​ Responding to Requests
POST {callback_url} Content-Type : application/json { "feedback" : "Approved. Great article!" , "source" : "my_custom_app" }
​ Security
​ Webhook Security
HMAC-SHA256 signatures : Every webhook includes a cryptographic signature
Per-webhook secrets : Each webhook has its own unique signing secret
Encrypted at rest : Signing secrets are encrypted in our database
Timestamp verification : Prevents replay attacks
​ Signature Headers
​ Verification
import hmac import hashlib expected = hmac.new( signing_secret.encode(), f " { timestamp } . { payload } " .encode(), hashlib.sha256 ).hexdigest() if hmac.compare_digest(expected, signature): # Valid signature
​ Error Handling
​ Security & RBAC
​ Dashboard Access
​ Email Response Authorization
The reply-to token encodes the authorized email
Sender email must match the token’s email
Token must not be expired (7-day default)
Request must still be pending
​ Audit Trail
Request creation
Assignment changes
Response submission (with source: dashboard/email/API)
Flow resume status
​ Troubleshooting
​ Emails Not Sending
Check “Email Notifications” is enabled in configuration
Verify routing rules match the method name
Verify assignee email is valid
Check deployment creator fallback if no routing rules match
​ Email Replies Not Processing
Check token hasn’t expired (7-day default)
Verify sender email matches assigned email
Ensure request is still pending (not already responded)
​ Flow Not Resuming
Check request status in dashboard
Verify callback URL is accessible
Ensure deployment is still running
​ Best Practices
Use Dynamic Assignment : Pull assignee emails from your flow state for flexible routing.
Configure Auto-Response : Set up a fallback for non-critical reviews to prevent flows from hanging.
Monitor Response Times : Use analytics to identify bottlenecks and optimize your review process.
Keep Review Messages Clear : Write clear, actionable messages in the @human_feedback decorator.
Test Email Flow : Send test requests to verify email delivery before going to production.
​ Related Resources
Human Feedback in Flows
Flow HITL Workflow Guide
RBAC Configuration
Webhook Streaming
