# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/salesforce
- Raw SHA-256: `73df397d183c6c12d68ff8877ad72b46e8449f4c6f9b4968982ef0ca3fa87cfe`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs Salesforce Integration
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
Salesforce Integration
Copy page Copy page
CRM and sales automation with Salesforce integration for CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription
A Salesforce account with appropriate permissions
Connected your Salesforce account through the Integrations page
​ Setting Up Salesforce Integration
​ 1. Connect Your Salesforce Account
Navigate to CrewAI AMP Integrations .
Find Salesforce in the Authentication Integrations section.
Click Connect .
Package already installed: you’re taken straight to the Salesforce OAuth consent screen — approve it and you’re connected.
Package not installed yet: you’ll see an Install CrewAI in Salesforce page. Follow the one-time install steps below, then come back to CrewAI AMP and click Connect again.
Grant the necessary permissions for CRM and sales management.
Copy your Enterprise Token from Integration Settings .
​ One-time admin install (Salesforce admin only)
On the install page in CrewAI, click Install in Salesforce . (You can also share the page URL with your admin — the install link works for anyone who opens it.)
Sign in to Salesforce as an admin. For sandboxes, swap login.salesforce.com for test.salesforce.com in the URL before opening it.
Choose Install for All Users , acknowledge the third-party app prompt, and click Install .
In Salesforce Setup, search External Client App Manager → CrewAI App → open the Policies tab → Edit and set: Permitted Users: All users may self-authorize IP Relaxation: Relax IP restrictions Refresh Token Policy: Refresh token is valid until revoked
Save.
Return to CrewAI AMP and click Connect Salesforce again. OAuth will complete this time.
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Tools
​ Record Management
salesforce/create_record_contact
FirstName (string, optional): First Name
LastName (string, required): Last Name - This field is required
accountId (string, optional): Account ID - The Account that the Contact belongs to
Email (string, optional): Email address
Title (string, optional): Title of the contact, such as CEO or Vice President
Description (string, optional): A description of the Contact
additionalFields (object, optional): Additional fields in JSON format for custom Contact fields
salesforce/create_record_lead
FirstName (string, optional): First Name
LastName (string, required): Last Name - This field is required
Company (string, required): Company - This field is required
Email (string, optional): Email address
Phone (string, optional): Phone number
Website (string, optional): Website URL
Title (string, optional): Title of the contact, such as CEO or Vice President
Status (string, optional): Lead Status - Use Connect Portal Workflow Settings to select Lead Status
Description (string, optional): A description of the Lead
additionalFields (object, optional): Additional fields in JSON format for custom Lead fields
salesforce/create_record_opportunity
Name (string, required): The Opportunity name - This field is required
StageName (string, optional): Opportunity Stage - Use Connect Portal Workflow Settings to select stage
CloseDate (string, optional): Close Date in YYYY-MM-DD format - Defaults to 30 days from current date
AccountId (string, optional): The Account that the Opportunity belongs to
Amount (string, optional): Estimated total sale amount
Description (string, optional): A description of the Opportunity
OwnerId (string, optional): The Salesforce user assigned to work on this Opportunity
NextStep (string, optional): Description of next task in closing Opportunity
additionalFields (object, optional): Additional fields in JSON format for custom Opportunity fields
salesforce/create_record_task
whatId (string, optional): Related to ID - The ID of the Account or Opportunity this Task is related to
whoId (string, optional): Name ID - The ID of the Contact or Lead this Task is related to
subject (string, required): Subject of the task
activityDate (string, optional): Activity Date in YYYY-MM-DD format
description (string, optional): A description of the Task
taskSubtype (string, required): Task Subtype - Options: task, email, listEmail, call
Status (string, optional): Status - Options: Not Started, In Progress, Completed
ownerId (string, optional): Assigned To ID - The Salesforce user assigned to this Task
callDurationInSeconds (string, optional): Call Duration in seconds
isReminderSet (boolean, optional): Whether reminder is set
reminderDateTime (string, optional): Reminder Date/Time in ISO format
additionalFields (object, optional): Additional fields in JSON format for custom Task fields
salesforce/create_record_account
Name (string, required): The Account name - This field is required
OwnerId (string, optional): The Salesforce user assigned to this Account
Website (string, optional): Website URL
Phone (string, optional): Phone number
Description (string, optional): Account description
additionalFields (object, optional): Additional fields in JSON format for custom Account fields
salesforce/create_record_any
​ Record Updates
salesforce/update_record_contact
recordId (string, required): The ID of the record to update
FirstName (string, optional): First Name
LastName (string, optional): Last Name
accountId (string, optional): Account ID - The Account that the Contact belongs to
Email (string, optional): Email address
Title (string, optional): Title of the contact
Description (string, optional): A description of the Contact
additionalFields (object, optional): Additional fields in JSON format for custom Contact fields
salesforce/update_record_lead
recordId (string, required): The ID of the record to update
FirstName (string, optional): First Name
LastName (string, optional): Last Name
Company (string, optional): Company name
Email (string, optional): Email address
Phone (string, optional): Phone number
Website (string, optional): Website URL
Title (string, optional): Title of the contact
Status (string, optional): Lead Status
Description (string, optional): A description of the Lead
additionalFields (object, optional): Additional fields in JSON format for custom Lead fields
salesforce/update_record_opportunity
recordId (string, required): The ID of the record to update
Name (string, optional): The Opportunity name
StageName (string, optional): Opportunity Stage
CloseDate (string, optional): Close Date in YYYY-MM-DD format
AccountId (string, optional): The Account that the Opportunity belongs to
Amount (string, optional): Estimated total sale amount
Description (string, optional): A description of the Opportunity
OwnerId (string, optional): The Salesforce user assigned to work on this Opportunity
NextStep (string, optional): Description of next task in closing Opportunity
additionalFields (object, optional): Additional fields in JSON format for custom Opportunity fields
salesforce/update_record_task
recordId (string, required): The ID of the record to update
whatId (string, optional): Related to ID - The ID of the Account or Opportunity this Task is related to
whoId (string, optional): Name ID - The ID of the Contact or Lead this Task is related to
subject (string, optional): Subject of the task
activityDate (string, optional): Activity Date in YYYY-MM-DD format
description (string, optional): A description of the Task
Status (string, optional): Status - Options: Not Started, In Progress, Completed
ownerId (string, optional): Assigned To ID - The Salesforce user assigned to this Task
callDurationInSeconds (string, optional): Call Duration in seconds
isReminderSet (boolean, optional): Whether reminder is set
reminderDateTime (string, optional): Reminder Date/Time in ISO format
additionalFields (object, optional): Additional fields in JSON format for custom Task fields
salesforce/update_record_account
recordId (string, required): The ID of the record to update
Name (string, optional): The Account name
OwnerId (string, optional): The Salesforce user assigned to this Account
Website (string, optional): Website URL
Phone (string, optional): Phone number
Description (string, optional): Account description
additionalFields (object, optional): Additional fields in JSON format for custom Account fields
salesforce/update_record_any
​ Record Retrieval
salesforce/get_record_by_id_contact
recordId (string, required): Record ID of the Contact
salesforce/get_record_by_id_lead
recordId (string, required): Record ID of the Lead
salesforce/get_record_by_id_opportunity
recordId (string, required): Record ID of the Opportunity
salesforce/get_record_by_id_task
recordId (string, required): Record ID of the Task
salesforce/get_record_by_id_account
recordId (string, required): Record ID of the Account
salesforce/get_record_by_id_any
recordType (string, required): Record Type (e.g., “CustomObject__c”)
recordId (string, required): Record ID
​ Record Search
salesforce/search_records_contact
filterFormula (object, optional): Advanced filter in disjunctive normal form with field-specific operators
sortBy (string, optional): Sort field (e.g., “CreatedDate”)
sortDirection (string, optional): Sort direction - Options: ASC, DESC
includeAllFields (boolean, optional): Include all fields in results
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/search_records_lead
filterFormula (object, optional): Advanced filter in disjunctive normal form with field-specific operators
sortBy (string, optional): Sort field (e.g., “CreatedDate”)
sortDirection (string, optional): Sort direction - Options: ASC, DESC
includeAllFields (boolean, optional): Include all fields in results
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/search_records_opportunity
filterFormula (object, optional): Advanced filter in disjunctive normal form with field-specific operators
sortBy (string, optional): Sort field (e.g., “CreatedDate”)
sortDirection (string, optional): Sort direction - Options: ASC, DESC
includeAllFields (boolean, optional): Include all fields in results
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/search_records_task
filterFormula (object, optional): Advanced filter in disjunctive normal form with field-specific operators
sortBy (string, optional): Sort field (e.g., “CreatedDate”)
sortDirection (string, optional): Sort direction - Options: ASC, DESC
includeAllFields (boolean, optional): Include all fields in results
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/search_records_account
filterFormula (object, optional): Advanced filter in disjunctive normal form with field-specific operators
sortBy (string, optional): Sort field (e.g., “CreatedDate”)
sortDirection (string, optional): Sort direction - Options: ASC, DESC
includeAllFields (boolean, optional): Include all fields in results
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/search_records_any
recordType (string, required): Record Type to search
filterFormula (string, optional): Filter search criteria
includeAllFields (boolean, optional): Include all fields in results
paginationParameters (object, optional): Pagination settings with pageCursor
​ List View Retrieval
salesforce/get_record_by_view_id_contact
listViewId (string, required): List View ID
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/get_record_by_view_id_lead
listViewId (string, required): List View ID
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/get_record_by_view_id_opportunity
listViewId (string, required): List View ID
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/get_record_by_view_id_task
listViewId (string, required): List View ID
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/get_record_by_view_id_account
listViewId (string, required): List View ID
paginationParameters (object, optional): Pagination settings with pageCursor
salesforce/get_record_by_view_id_any
recordType (string, required): Record Type
listViewId (string, required): List View ID
paginationParameters (object, optional): Pagination settings with pageCursor
​ Custom Fields
salesforce/create_custom_field_contact
label (string, required): Field Label for displays and internal reference
type (string, required): Field Type - Options: Checkbox, Currency, Date, Email, Number, Percent, Phone, Picklist, MultiselectPicklist, Text, TextArea, LongTextArea, Html, Time, Url
defaultCheckboxValue (boolean, optional): Default value for checkbox fields
length (string, required): Length for numeric/text fields
decimalPlace (string, required): Decimal places for numeric fields
pickListValues (string, required): Values for picklist fields (separated by new lines)
visibleLines (string, required): Visible lines for multiselect/text area fields
description (string, optional): Field description
helperText (string, optional): Helper text shown on hover
defaultFieldValue (string, optional): Default field value
salesforce/create_custom_field_lead
label (string, required): Field Label for displays and internal reference
type (string, required): Field Type - Options: Checkbox, Currency, Date, Email, Number, Percent, Phone, Picklist, MultiselectPicklist, Text, TextArea, LongTextArea, Html, Time, Url
defaultCheckboxValue (boolean, optional): Default value for checkbox fields
length (string, required): Length for numeric/text fields
decimalPlace (string, required): Decimal places for numeric fields
pickListValues (string, required): Values for picklist fields (separated by new lines)
visibleLines (string, required): Visible lines for multiselect/text area fields
description (string, optional): Field description
helperText (string, optional): Helper text shown on hover
defaultFieldValue (string, optional): Default field value
salesforce/create_custom_field_opportunity
label (string, required): Field Label for displays and internal reference
type (string, required): Field Type - Options: Checkbox, Currency, Date, Email, Number, Percent, Phone, Picklist, MultiselectPicklist, Text, TextArea, LongTextArea, Html, Time, Url
defaultCheckboxValue (boolean, optional): Default value for checkbox fields
length (string, required): Length for numeric/text fields
decimalPlace (string, required): Decimal places for numeric fields
pickListValues (string, required): Values for picklist fields (separated by new lines)
visibleLines (string, required): Visible lines for multiselect/text area fields
description (string, optional): Field description
helperText (string, optional): Helper text shown on hover
defaultFieldValue (string, optional): Default field value
salesforce/create_custom_field_task
label (string, required): Field Label for displays and internal reference
type (string, required): Field Type - Options: Checkbox, Currency, Date, Email, Number, Percent, Phone, Picklist, MultiselectPicklist, Text, TextArea, Time, Url
defaultCheckboxValue (boolean, optional): Default value for checkbox fields
length (string, required): Length for numeric/text fields
decimalPlace (string, required): Decimal places for numeric fields
pickListValues (string, required): Values for picklist fields (separated by new lines)
visibleLines (string, required): Visible lines for multiselect fields
description (string, optional): Field description
helperText (string, optional): Helper text shown on hover
defaultFieldValue (string, optional): Default field value
salesforce/create_custom_field_account
label (string, required): Field Label for displays and internal reference
type (string, required): Field Type - Options: Checkbox, Currency, Date, Email, Number, Percent, Phone, Picklist, MultiselectPicklist, Text, TextArea, LongTextArea, Html, Time, Url
defaultCheckboxValue (boolean, optional): Default value for checkbox fields
length (string, required): Length for numeric/text fields
decimalPlace (string, required): Decimal places for numeric fields
pickListValues (string, required): Values for picklist fields (separated by new lines)
visibleLines (string, required): Visible lines for multiselect/text area fields
description (string, optional): Field description
helperText (string, optional): Helper text shown on hover
defaultFieldValue (string, optional): Default field value
salesforce/create_custom_field_any
​ Advanced Operations
salesforce/write_soql_query
query (string, required): SOQL Query (e.g., “SELECT Id, Name FROM Account WHERE Name = ‘Example’”)
salesforce/create_custom_object
label (string, required): Object Label for tabs, page layouts, and reports
pluralLabel (string, required): Plural Label (e.g., “Accounts”)
description (string, optional): A description of the Custom Object
recordName (string, required): Record Name that appears in layouts and searches (e.g., “Account Name”)
salesforce/describe_action_schema
recordType (string, required): Record Type to describe
operation (string, required): Operation Type (e.g., “CREATE_RECORD” or “UPDATE_RECORD”)
​ Usage Examples
​ Basic Salesforce Agent Setup
from crewai import Agent, Task, Crew from crewai import Agent, Task, Crew # Create an agent with Salesforce capabilities salesforce_agent = Agent( role = "CRM Manager" , goal = "Manage customer relationships and sales processes efficiently" , backstory = "An AI assistant specialized in CRM operations and sales automation." , apps = [ 'salesforce' ] # All Salesforce actions will be available ) # Task to create a new lead create_lead_task = Task( description = "Create a new lead for John Doe from Example Corp with email john.doe@example.com" , agent = salesforce_agent, expected_output = "Lead created successfully with lead ID" ) # Run the task crew = Crew( agents = [salesforce_agent], tasks = [create_lead_task] ) crew.kickoff()
​ Filtering Specific Salesforce Tools
sales_manager = Agent( role = "Sales Manager" , goal = "Manage leads and opportunities in the sales pipeline" , backstory = "An experienced sales manager who handles lead qualification and opportunity management." , apps = [ 'salesforce/create_record_lead' ] ) # Task to manage sales pipeline pipeline_task = Task( description = "Create a qualified lead and convert it to an opportunity with $50,000 value" , agent = sales_manager, expected_output = "Lead created and opportunity established successfully" ) crew = Crew( agents = [sales_manager], tasks = [pipeline_task] ) crew.kickoff()
​ Contact and Account Management
from crewai import Agent, Task, Crew account_manager = Agent( role = "Account Manager" , goal = "Manage customer accounts and maintain strong relationships" , backstory = "An AI assistant that specializes in account management and customer relationship building." , apps = [ 'salesforce' ] ) # Task to manage customer accounts account_task = Task( description = """ 1. Create a new account for TechCorp Inc. 2. Add John Doe as the primary contact for this account 3. Create a follow-up task for next week to check on their project status """ , agent = account_manager, expected_output = "Account, contact, and follow-up task created successfully" ) crew = Crew( agents = [account_manager], tasks = [account_task] ) crew.kickoff()
​ Advanced SOQL Queries and Reporting
from crewai import Agent, Task, Crew data_analyst = Agent( role = "Sales Data Analyst" , goal = "Generate insights from Salesforce data using SOQL queries" , backstory = "An analytical AI that excels at extracting meaningful insights from CRM data." , apps = [ 'salesforce' ] ) # Complex task involving SOQL queries and data analysis analysis_task = Task( description = """ 1. Execute a SOQL query to find all opportunities closing this quarter 2. Search for contacts at companies with opportunities over $100K 3. Create a summary report of the sales pipeline status 4. Update high-value opportunities with next steps """ , agent = data_analyst, expected_output = "Comprehensive sales pipeline analysis with actionable insights" ) crew = Crew( agents = [data_analyst], tasks = [analysis_task] ) crew.kickoff()
​ Getting Help
Need Help?
