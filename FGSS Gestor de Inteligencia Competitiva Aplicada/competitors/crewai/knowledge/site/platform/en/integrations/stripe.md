# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/stripe
- Raw SHA-256: `f152a95b3d56c3752adcb0cfc102a0ed4f8b727f884b2543f1ea53a60bb667d7`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Stripe Integration
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
Stripe Integration
Copy page Copy page
Payment processing and subscription management with Stripe integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Stripe account with appropriate API permissions
Connected your Stripe account through the Integrations page
​ Setting Up Stripe Integration
​ 1. Connect Your Stripe Account
Navigate to CrewAI AMP Integrations
Find Stripe in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for payment processing
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Tools
​ Customer Management
stripe/create_customer
emailCreateCustomer (string, required): Customer’s email address
name (string, optional): Customer’s full name
description (string, optional): Customer description for internal reference
metadataCreateCustomer (object, optional): Additional metadata as key-value pairs (e.g., {"field1": 1, "field2": 2} )
stripe/get_customer_by_id
idGetCustomer (string, required): The Stripe customer ID to retrieve
stripe/get_customers
emailGetCustomers (string, optional): Filter customers by email address
createdAfter (string, optional): Filter customers created after this date (Unix timestamp)
createdBefore (string, optional): Filter customers created before this date (Unix timestamp)
limitGetCustomers (string, optional): Maximum number of customers to return (defaults to 10)
stripe/update_customer
customerId (string, required): The ID of the customer to update
emailUpdateCustomer (string, optional): Updated email address
name (string, optional): Updated customer name
description (string, optional): Updated customer description
metadataUpdateCustomer (object, optional): Updated metadata as key-value pairs
​ Subscription Management
stripe/create_subscription
customerIdCreateSubscription (string, required): The customer ID for whom the subscription will be created
plan (string, required): The plan ID for the subscription - Use Connect Portal Workflow Settings to allow users to select a plan
metadataCreateSubscription (object, optional): Additional metadata for the subscription
stripe/get_subscriptions
customerIdGetSubscriptions (string, optional): Filter subscriptions by customer ID
subscriptionStatus (string, optional): Filter by subscription status - Options: incomplete, incomplete_expired, trialing, active, past_due, canceled, unpaid
limitGetSubscriptions (string, optional): Maximum number of subscriptions to return (defaults to 10)
​ Product Management
stripe/create_product
productName (string, required): The product name
description (string, optional): Product description
metadataProduct (object, optional): Additional product metadata as key-value pairs
stripe/get_product_by_id
productId (string, required): The Stripe product ID to retrieve
stripe/get_products
createdAfter (string, optional): Filter products created after this date (Unix timestamp)
createdBefore (string, optional): Filter products created before this date (Unix timestamp)
limitGetProducts (string, optional): Maximum number of products to return (defaults to 10)
​ Financial Operations
stripe/get_balance_transactions
balanceTransactionType (string, optional): Filter by transaction type - Options: charge, refund, payment, payment_refund
paginationParameters (object, optional): Pagination settings pageCursor (string, optional): Page cursor for pagination
stripe/get_plans
isPlanActive (boolean, optional): Filter by plan status - true for active plans, false for inactive plans
paginationParameters (object, optional): Pagination settings pageCursor (string, optional): Page cursor for pagination
​ Usage Examples
​ Basic Stripe Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Stripe capabilities stripe_agent = Agent( role = "Payment Manager" , goal = "Manage customer payments, subscriptions, and billing operations efficiently" , backstory = "An AI assistant specialized in payment processing and subscription management." , apps = [ 'stripe' ] # All Stripe actions will be available ) # Task to create a new customer create_customer_task = Task( description = "Create a new premium customer John Doe with email john.doe@example.com" , agent = stripe_agent, expected_output = "Customer created successfully with customer ID" ) # Run the task crew = Crew( agents = [stripe_agent], tasks = [create_customer_task] ) crew.kickoff()
​ Filtering Specific Stripe Tools
billing_manager = Agent( role = "Billing Manager" , goal = "Handle customer billing, subscriptions, and payment processing" , backstory = "An experienced billing manager who handles subscription lifecycle and payment operations." , apps = [ 'stripe' ] ) # Task to manage billing operations billing_task = Task( description = "Create a new customer and set up their premium subscription plan" , agent = billing_manager, expected_output = "Customer created and subscription activated successfully" ) crew = Crew( agents = [billing_manager], tasks = [billing_task] ) crew.kickoff()
​ Subscription Management
from crewai import Agent, Task, Crew subscription_manager = Agent( role = "Subscription Manager" , goal = "Manage customer subscriptions and optimize recurring revenue" , backstory = "An AI assistant that specializes in subscription lifecycle management and customer retention." , apps = [ 'stripe' ] ) # Task to manage subscription operations subscription_task = Task( description = """ 1. Create a new product "Premium Service Plan" with advanced features 2. Set up subscription plans with different tiers 3. Create customers and assign them to appropriate plans 4. Monitor subscription status and handle billing issues """ , agent = subscription_manager, expected_output = "Subscription management system configured with customers and active plans" ) crew = Crew( agents = [subscription_manager], tasks = [subscription_task] ) crew.kickoff()
​ Financial Analytics and Reporting
from crewai import Agent, Task, Crew financial_analyst = Agent( role = "Financial Analyst" , goal = "Analyze payment data and generate financial insights" , backstory = "An analytical AI that excels at extracting insights from payment and subscription data." , apps = [ 'stripe' ] ) # Complex task involving financial analysis analytics_task = Task( description = """ 1. Retrieve balance transactions for the current month 2. Analyze customer payment patterns and subscription trends 3. Identify high-value customers and subscription performance 4. Generate monthly financial performance report """ , agent = financial_analyst, expected_output = "Comprehensive financial analysis with payment insights and recommendations" ) crew = Crew( agents = [financial_analyst], tasks = [analytics_task] ) crew.kickoff()
​ Subscription Status Reference
incomplete - Subscription requires payment method or payment confirmation
incomplete_expired - Subscription expired before payment was confirmed
trialing - Subscription is in trial period
active - Subscription is active and current
past_due - Payment failed but subscription is still active
canceled - Subscription has been canceled
unpaid - Payment failed and subscription is no longer active
​ Metadata Usage
{ "customer_segment" : "enterprise" , "acquisition_source" : "google_ads" , "lifetime_value" : "high" , "custom_field_1" : "value1" }
