# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/shopify
- Raw SHA-256: `f853e88c3bcdc7f3ddaf850c6cfcfc729d3b0cb312952d706177243d03630dba`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Shopify Integration
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
Shopify Integration
Copy page Copy page
E-commerce and online store management with Shopify integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Shopify store with appropriate admin permissions
Connected your Shopify store through the Integrations page
​ Setting Up Shopify Integration
​ 1. Connect Your Shopify Store
Navigate to CrewAI AMP Integrations
Find Shopify in the Authentication Integrations section
Click Connect and complete the OAuth flow
Grant the necessary permissions for store and product management
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Tools
​ Customer Management
shopify/get_customers
customerIds (string, optional): Comma-separated list of customer IDs to filter by (example: “207119551, 207119552”)
createdAtMin (string, optional): Only return customers created after this date (ISO or Unix timestamp)
createdAtMax (string, optional): Only return customers created before this date (ISO or Unix timestamp)
updatedAtMin (string, optional): Only return customers updated after this date (ISO or Unix timestamp)
updatedAtMax (string, optional): Only return customers updated before this date (ISO or Unix timestamp)
limit (string, optional): Maximum number of customers to return (defaults to 250)
shopify/search_customers
filterFormula (object, optional): Advanced filter in disjunctive normal form with field-specific operators
limit (string, optional): Maximum number of customers to return (defaults to 250)
shopify/create_customer
firstName (string, required): Customer’s first name
lastName (string, required): Customer’s last name
email (string, required): Customer’s email address
company (string, optional): Company name
streetAddressLine1 (string, optional): Street address
streetAddressLine2 (string, optional): Street address line 2
city (string, optional): City
state (string, optional): State or province code
country (string, optional): Country
zipCode (string, optional): Zip code
phone (string, optional): Phone number
tags (string, optional): Tags as array or comma-separated list
note (string, optional): Customer note
sendEmailInvite (boolean, optional): Whether to send email invitation
metafields (object, optional): Additional metafields in JSON format
shopify/update_customer
customerId (string, required): The ID of the customer to update
firstName (string, optional): Customer’s first name
lastName (string, optional): Customer’s last name
email (string, optional): Customer’s email address
company (string, optional): Company name
streetAddressLine1 (string, optional): Street address
streetAddressLine2 (string, optional): Street address line 2
city (string, optional): City
state (string, optional): State or province code
country (string, optional): Country
zipCode (string, optional): Zip code
phone (string, optional): Phone number
tags (string, optional): Tags as array or comma-separated list
note (string, optional): Customer note
sendEmailInvite (boolean, optional): Whether to send email invitation
metafields (object, optional): Additional metafields in JSON format
​ Order Management
shopify/get_orders
orderIds (string, optional): Comma-separated list of order IDs to filter by (example: “450789469, 450789470”)
createdAtMin (string, optional): Only return orders created after this date (ISO or Unix timestamp)
createdAtMax (string, optional): Only return orders created before this date (ISO or Unix timestamp)
updatedAtMin (string, optional): Only return orders updated after this date (ISO or Unix timestamp)
updatedAtMax (string, optional): Only return orders updated before this date (ISO or Unix timestamp)
limit (string, optional): Maximum number of orders to return (defaults to 250)
shopify/create_order
email (string, required): Customer email address
lineItems (object, required): Order line items in JSON format with title, price, quantity, and variant_id
sendReceipt (boolean, optional): Whether to send order receipt
fulfillmentStatus (string, optional): Fulfillment status - Options: fulfilled, null, partial, restocked
financialStatus (string, optional): Financial status - Options: pending, authorized, partially_paid, paid, partially_refunded, refunded, voided
inventoryBehaviour (string, optional): Inventory behavior - Options: bypass, decrement_ignoring_policy, decrement_obeying_policy
note (string, optional): Order note
shopify/update_order
orderId (string, required): The ID of the order to update
email (string, optional): Customer email address
lineItems (object, optional): Updated order line items in JSON format
sendReceipt (boolean, optional): Whether to send order receipt
fulfillmentStatus (string, optional): Fulfillment status - Options: fulfilled, null, partial, restocked
financialStatus (string, optional): Financial status - Options: pending, authorized, partially_paid, paid, partially_refunded, refunded, voided
inventoryBehaviour (string, optional): Inventory behavior - Options: bypass, decrement_ignoring_policy, decrement_obeying_policy
note (string, optional): Order note
shopify/get_abandoned_carts
createdWithInLast (string, optional): Restrict results to checkouts created within specified time
createdAfterId (string, optional): Restrict results to after the specified ID
status (string, optional): Show checkouts with given status - Options: open, closed (defaults to open)
createdAtMin (string, optional): Only return carts created after this date (ISO or Unix timestamp)
createdAtMax (string, optional): Only return carts created before this date (ISO or Unix timestamp)
limit (string, optional): Maximum number of carts to return (defaults to 250)
​ Product Management (REST API)
shopify/get_products
productIds (string, optional): Comma-separated list of product IDs to filter by (example: “632910392, 632910393”)
title (string, optional): Filter by product title
productType (string, optional): Filter by product type
vendor (string, optional): Filter by vendor
status (string, optional): Filter by status - Options: active, archived, draft
createdAtMin (string, optional): Only return products created after this date (ISO or Unix timestamp)
createdAtMax (string, optional): Only return products created before this date (ISO or Unix timestamp)
updatedAtMin (string, optional): Only return products updated after this date (ISO or Unix timestamp)
updatedAtMax (string, optional): Only return products updated before this date (ISO or Unix timestamp)
limit (string, optional): Maximum number of products to return (defaults to 250)
shopify/create_product
title (string, required): Product title
productType (string, required): Product type/category
vendor (string, required): Product vendor
productDescription (string, optional): Product description (accepts plain text or HTML)
tags (string, optional): Product tags as array or comma-separated list
price (string, optional): Product price
inventoryPolicy (string, optional): Inventory policy - Options: deny, continue
imageUrl (string, optional): Product image URL
isPublished (boolean, optional): Whether product is published
publishToPointToSale (boolean, optional): Whether to publish to point of sale
shopify/update_product
productId (string, required): The ID of the product to update
title (string, optional): Product title
productType (string, optional): Product type/category
vendor (string, optional): Product vendor
productDescription (string, optional): Product description (accepts plain text or HTML)
tags (string, optional): Product tags as array or comma-separated list
price (string, optional): Product price
inventoryPolicy (string, optional): Inventory policy - Options: deny, continue
imageUrl (string, optional): Product image URL
isPublished (boolean, optional): Whether product is published
publishToPointToSale (boolean, optional): Whether to publish to point of sale
​ Product Management (GraphQL)
shopify/get_products_graphql
productFilterFormula (object, optional): Advanced filter in disjunctive normal form with support for fields like id, title, vendor, status, handle, tag, created_at, updated_at, published_at
shopify/create_product_graphql
title (string, required): Product title
productType (string, required): Product type/category
vendor (string, required): Product vendor
productDescription (string, optional): Product description (accepts plain text or HTML)
tags (string, optional): Product tags as array or comma-separated list
media (object, optional): Media objects with alt text, content type, and source URL
additionalFields (object, optional): Additional product fields like status, requiresSellingPlan, giftCard
shopify/update_product_graphql
productId (string, required): The GraphQL ID of the product to update (e.g., “gid://shopify/Product/913144112”)
title (string, optional): Product title
productType (string, optional): Product type/category
vendor (string, optional): Product vendor
productDescription (string, optional): Product description (accepts plain text or HTML)
tags (string, optional): Product tags as array or comma-separated list
media (object, optional): Updated media objects with alt text, content type, and source URL
additionalFields (object, optional): Additional product fields like status, requiresSellingPlan, giftCard
​ Usage Examples
​ Basic Shopify Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Shopify capabilities shopify_agent = Agent( role = "E-commerce Manager" , goal = "Manage online store operations and customer relationships efficiently" , backstory = "An AI assistant specialized in e-commerce operations and online store management." , apps = [ 'shopify' ] # All Shopify actions will be available ) # Task to create a new customer create_customer_task = Task( description = "Create a new VIP customer Jane Smith with email jane.smith@example.com and phone +1-555-0123" , agent = shopify_agent, expected_output = "Customer created successfully with customer ID" ) # Run the task crew = Crew( agents = [shopify_agent], tasks = [create_customer_task] ) crew.kickoff()
​ Filtering Specific Shopify Tools
store_manager = Agent( role = "Store Manager" , goal = "Manage customer orders and product catalog" , backstory = "An experienced store manager who handles customer relationships and inventory management." , apps = [ 'shopify/create_customer' ] ) # Task to manage store operations store_task = Task( description = "Create a new customer and process their order for 2 Premium Coffee Mugs" , agent = store_manager, expected_output = "Customer created and order processed successfully" ) crew = Crew( agents = [store_manager], tasks = [store_task] ) crew.kickoff()
​ Product Management with GraphQL
from crewai import Agent, Task, Crew product_manager = Agent( role = "Product Manager" , goal = "Manage product catalog and inventory with advanced GraphQL capabilities" , backstory = "An AI assistant that specializes in product management and catalog optimization." , apps = [ 'shopify' ] ) # Task to manage product catalog catalog_task = Task( description = """ 1. Create a new product "Premium Coffee Mug" from Coffee Co vendor 2. Add high-quality product images and descriptions 3. Search for similar products from the same vendor 4. Update product tags and pricing strategy """ , agent = product_manager, expected_output = "Product created and catalog optimized successfully" ) crew = Crew( agents = [product_manager], tasks = [catalog_task] ) crew.kickoff()
​ Order and Customer Analytics
from crewai import Agent, Task, Crew analytics_agent = Agent( role = "E-commerce Analyst" , goal = "Analyze customer behavior and order patterns to optimize store performance" , backstory = "An analytical AI that excels at extracting insights from e-commerce data." , apps = [ 'shopify' ] ) # Complex task involving multiple operations analytics_task = Task( description = """ 1. Retrieve recent customer data and order history 2. Identify abandoned carts from the last 7 days 3. Analyze product performance and inventory levels 4. Generate recommendations for customer retention """ , agent = analytics_agent, expected_output = "Comprehensive e-commerce analytics report with actionable insights" ) crew = Crew( agents = [analytics_agent], tasks = [analytics_task] ) crew.kickoff()
​ Getting Help
Need Help?
