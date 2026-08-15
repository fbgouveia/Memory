# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/integrations/hubspot
- Raw SHA-256: `02b4f98cf035d05ff73d3ae5d62361abbe9300b45213a90b58127898dcf09ce6`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Integration Docs HubSpot Integration
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
HubSpot Integration
Copy page Copy page
Manage companies and contacts in HubSpot with CrewAI.
Copy page Copy page
​ Overview
​ Prerequisites
A CrewAI AMP account with an active subscription.
A HubSpot account with appropriate permissions.
Connected your HubSpot account through the Integrations page .
​ Setting Up HubSpot Integration
​ 1. Connect Your HubSpot Account
Navigate to CrewAI AMP Integrations .
Find HubSpot in the Authentication Integrations section.
Click Connect and complete the OAuth flow.
Grant the necessary permissions for company and contact management.
Copy your Enterprise Token from Integration Settings
​ 2. Install Required Package
uv add crewai-tools
​ 3. Environment Variable Setup
export CREWAI_PLATFORM_INTEGRATION_TOKEN = "your_enterprise_token"
CREWAI_PLATFORM_INTEGRATION_TOKEN=your_enterprise_token
​ Available Actions
hubspot/create_company
name (string, required): Name of the company.
domain (string, optional): Company Domain Name.
industry (string, optional): Industry. Must be one of the predefined values from HubSpot.
phone (string, optional): Phone Number.
hubspot_owner_id (string, optional): Company owner ID.
type (string, optional): Type of the company. Available values: PROSPECT , PARTNER , RESELLER , VENDOR , OTHER .
city (string, optional): City.
state (string, optional): State/Region.
zip (string, optional): Postal Code.
numberofemployees (number, optional): Number of Employees.
annualrevenue (number, optional): Annual Revenue.
timezone (string, optional): Time Zone.
description (string, optional): Description.
linkedin_company_page (string, optional): LinkedIn Company Page URL.
company_email (string, optional): Company Email.
first_name (string, optional): First Name of a contact at the company.
last_name (string, optional): Last Name of a contact at the company.
about_us (string, optional): About Us.
hs_csm_sentiment (string, optional): CSM Sentiment. Available values: at_risk , neutral , healthy .
closedate (string, optional): Close Date.
hs_keywords (string, optional): Company Keywords. Must be one of the predefined values.
country (string, optional): Country/Region.
hs_country_code (string, optional): Country/Region Code.
hs_employee_range (string, optional): Employee range.
facebook_company_page (string, optional): Facebook Company Page URL.
facebookfans (number, optional): Number of Facebook Fans.
hs_gps_coordinates (string, optional): GPS Coordinates.
hs_gps_error (string, optional): GPS Error.
googleplus_page (string, optional): Google Plus Page URL.
owneremail (string, optional): HubSpot Owner Email.
ownername (string, optional): HubSpot Owner Name.
hs_ideal_customer_profile (string, optional): Ideal Customer Profile Tier. Available values: tier_1 , tier_2 , tier_3 .
hs_industry_group (string, optional): Industry group.
is_public (boolean, optional): Is Public.
hs_last_metered_enrichment_timestamp (string, optional): Last Metered Enrichment Timestamp.
hs_lead_status (string, optional): Lead Status. Available values: NEW , OPEN , IN_PROGRESS , OPEN_DEAL , UNQUALIFIED , ATTEMPTED_TO_CONTACT , CONNECTED , BAD_TIMING .
lifecyclestage (string, optional): Lifecycle Stage. Available values: subscriber , lead , marketingqualifiedlead , salesqualifiedlead , opportunity , customer , evangelist , other .
linkedinbio (string, optional): LinkedIn Bio.
hs_linkedin_handle (string, optional): LinkedIn handle.
hs_live_enrichment_deadline (string, optional): Live enrichment deadline.
hs_logo_url (string, optional): Logo URL.
hs_analytics_source (string, optional): Original Traffic Source.
hs_pinned_engagement_id (number, optional): Pinned Engagement ID.
hs_quick_context (string, optional): Quick context.
hs_revenue_range (string, optional): Revenue range.
hs_state_code (string, optional): State/Region Code.
address (string, optional): Street Address.
address2 (string, optional): Street Address 2.
hs_is_target_account (boolean, optional): Target Account.
hs_target_account (string, optional): Target Account Tier. Available values: tier_1 , tier_2 , tier_3 .
hs_target_account_recommendation_snooze_time (string, optional): Target Account Recommendation Snooze Time.
hs_target_account_recommendation_state (string, optional): Target Account Recommendation State. Available values: DISMISSED , NONE , SNOOZED .
total_money_raised (string, optional): Total Money Raised.
twitterbio (string, optional): Twitter Bio.
twitterfollowers (number, optional): Twitter Followers.
twitterhandle (string, optional): Twitter Handle.
web_technologies (string, optional): Web Technologies used. Must be one of the predefined values.
website (string, optional): Website URL.
founded_year (string, optional): Year Founded.
hubspot/create_contact
email (string, required): Email address of the contact.
firstname (string, optional): First Name.
lastname (string, optional): Last Name.
phone (string, optional): Phone Number.
hubspot_owner_id (string, optional): Contact owner.
lifecyclestage (string, optional): Lifecycle Stage. Available values: subscriber , lead , marketingqualifiedlead , salesqualifiedlead , opportunity , customer , evangelist , other .
hs_lead_status (string, optional): Lead Status. Available values: NEW , OPEN , IN_PROGRESS , OPEN_DEAL , UNQUALIFIED , ATTEMPTED_TO_CONTACT , CONNECTED , BAD_TIMING .
annualrevenue (string, optional): Annual Revenue.
hs_buying_role (string, optional): Buying Role.
cc_emails (string, optional): CC Emails.
ch_customer_id (string, optional): Chargify Customer ID.
ch_customer_reference (string, optional): Chargify Customer Reference.
chargify_sites (string, optional): Chargify Site(s).
city (string, optional): City.
hs_facebook_ad_clicked (boolean, optional): Clicked Facebook ad.
hs_linkedin_ad_clicked (string, optional): Clicked LinkedIn Ad.
hs_clicked_linkedin_ad (string, optional): Clicked on a LinkedIn Ad.
closedate (string, optional): Close Date.
company (string, optional): Company Name.
company_size (string, optional): Company size.
country (string, optional): Country/Region.
hs_country_region_code (string, optional): Country/Region Code.
date_of_birth (string, optional): Date of birth.
degree (string, optional): Degree.
hs_email_customer_quarantined_reason (string, optional): Email address quarantine reason.
hs_role (string, optional): Employment Role. Must be one of the predefined values.
hs_seniority (string, optional): Employment Seniority. Must be one of the predefined values.
hs_sub_role (string, optional): Employment Sub Role. Must be one of the predefined values.
hs_employment_change_detected_date (string, optional): Employment change detected date.
hs_enriched_email_bounce_detected (boolean, optional): Enriched Email Bounce Detected.
hs_facebookid (string, optional): Facebook ID.
hs_facebook_click_id (string, optional): Facebook click id.
fax (string, optional): Fax Number.
field_of_study (string, optional): Field of study.
followercount (number, optional): Follower Count.
gender (string, optional): Gender.
hs_google_click_id (string, optional): Google ad click id.
graduation_date (string, optional): Graduation date.
owneremail (string, optional): HubSpot Owner Email (legacy).
ownername (string, optional): HubSpot Owner Name (legacy).
industry (string, optional): Industry.
hs_inferred_language_codes (string, optional): Inferred Language Codes. Must be one of the predefined values.
jobtitle (string, optional): Job Title.
hs_job_change_detected_date (string, optional): Job change detected date.
job_function (string, optional): Job function.
hs_journey_stage (string, optional): Journey Stage. Must be one of the predefined values.
kloutscoregeneral (number, optional): Klout Score.
hs_last_metered_enrichment_timestamp (string, optional): Last Metered Enrichment Timestamp.
hs_latest_source (string, optional): Latest Traffic Source.
hs_latest_source_timestamp (string, optional): Latest Traffic Source Date.
hs_legal_basis (string, optional): Legal basis for processing contact’s data.
linkedinbio (string, optional): LinkedIn Bio.
linkedinconnections (number, optional): LinkedIn Connections.
hs_linkedin_url (string, optional): LinkedIn URL.
hs_linkedinid (string, optional): Linkedin ID.
hs_live_enrichment_deadline (string, optional): Live enrichment deadline.
marital_status (string, optional): Marital Status.
hs_content_membership_email (string, optional): Member email.
hs_content_membership_notes (string, optional): Membership Notes.
message (string, optional): Message.
military_status (string, optional): Military status.
mobilephone (string, optional): Mobile Phone Number.
numemployees (string, optional): Number of Employees.
hs_analytics_source (string, optional): Original Traffic Source.
photo (string, optional): Photo.
hs_pinned_engagement_id (number, optional): Pinned engagement ID.
zip (string, optional): Postal Code.
hs_language (string, optional): Preferred language. Must be one of the predefined values.
associatedcompanyid (number, optional): Primary Associated Company ID.
hs_email_optout_survey_reason (string, optional): Reason for opting out of email.
relationship_status (string, optional): Relationship Status.
hs_returning_to_office_detected_date (string, optional): Returning to office detected date.
salutation (string, optional): Salutation.
school (string, optional): School.
seniority (string, optional): Seniority.
hs_feedback_show_nps_web_survey (boolean, optional): Should be shown an NPS web survey.
start_date (string, optional): Start date.
state (string, optional): State/Region.
hs_state_code (string, optional): State/Region Code.
hs_content_membership_status (string, optional): Status.
address (string, optional): Street Address.
tax_exempt (string, optional): Tax Exempt.
hs_timezone (string, optional): Time Zone. Must be one of the predefined values.
twitterbio (string, optional): Twitter Bio.
hs_twitterid (string, optional): Twitter ID.
twitterprofilephoto (string, optional): Twitter Profile Photo.
twitterhandle (string, optional): Twitter Username.
vat_number (string, optional): VAT Number.
ch_verified (string, optional): Verified for ACH/eCheck Payments.
website (string, optional): Website URL.
hs_whatsapp_phone_number (string, optional): WhatsApp Phone Number.
work_email (string, optional): Work email.
hs_googleplusid (string, optional): googleplus ID.
hubspot/create_deal
dealname (string, required): Name of the deal.
amount (number, optional): The value of the deal.
dealstage (string, optional): The pipeline stage of the deal.
pipeline (string, optional): The pipeline the deal belongs to.
closedate (string, optional): The date the deal is expected to close.
hubspot_owner_id (string, optional): The owner of the deal.
dealtype (string, optional): The type of deal. Available values: newbusiness , existingbusiness .
description (string, optional): A description of the deal.
hs_priority (string, optional): The priority of the deal. Available values: low , medium , high .
hubspot/create_record_engagements
engagementType (string, required): The type of engagement. Available values: NOTE , EMAIL , CALL , MEETING , TASK .
hubspot_owner_id (string, optional): The user the activity is assigned to.
hs_timestamp (string, optional): The date and time of the activity.
hs_note_body (string, optional): The body of the note. (Used for NOTE )
hs_task_subject (string, optional): The title of the task. (Used for TASK )
hs_task_body (string, optional): The notes for the task. (Used for TASK )
hs_task_status (string, optional): The status of the task. (Used for TASK )
hs_meeting_title (string, optional): The title of the meeting. (Used for MEETING )
hs_meeting_body (string, optional): The description for the meeting. (Used for MEETING )
hs_meeting_start_time (string, optional): The start time of the meeting. (Used for MEETING )
hs_meeting_end_time (string, optional): The end time of the meeting. (Used for MEETING )
hubspot/update_company
recordId (string, required): The ID of the company to update.
name (string, optional): Name of the company.
domain (string, optional): Company Domain Name.
industry (string, optional): Industry.
phone (string, optional): Phone Number.
city (string, optional): City.
state (string, optional): State/Region.
zip (string, optional): Postal Code.
numberofemployees (number, optional): Number of Employees.
annualrevenue (number, optional): Annual Revenue.
description (string, optional): Description.
hubspot/create_record_any
recordType (string, required): The object type ID of the custom object.
Additional parameters depend on the custom object’s schema.
hubspot/update_contact
recordId (string, required): The ID of the contact to update.
firstname (string, optional): First Name.
lastname (string, optional): Last Name.
email (string, optional): Email address.
phone (string, optional): Phone Number.
company (string, optional): Company Name.
jobtitle (string, optional): Job Title.
lifecyclestage (string, optional): Lifecycle Stage.
hubspot/update_deal
recordId (string, required): The ID of the deal to update.
dealname (string, optional): Name of the deal.
amount (number, optional): The value of the deal.
dealstage (string, optional): The pipeline stage of the deal.
pipeline (string, optional): The pipeline the deal belongs to.
closedate (string, optional): The date the deal is expected to close.
dealtype (string, optional): The type of deal.
hubspot/update_record_engagements
recordId (string, required): The ID of the engagement to update.
hs_note_body (string, optional): The body of the note.
hs_task_subject (string, optional): The title of the task.
hs_task_body (string, optional): The notes for the task.
hs_task_status (string, optional): The status of the task.
hubspot/update_record_any
recordId (string, required): The ID of the record to update.
recordType (string, required): The object type ID of the custom object.
Additional parameters depend on the custom object’s schema.
hubspot/list_companies
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/list_contacts
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/list_deals
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/get_records_engagements
objectName (string, required): The type of engagement to fetch (e.g., “notes”).
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/get_records_any
recordType (string, required): The object type ID of the custom object.
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/get_company
recordId (string, required): The ID of the company to retrieve.
hubspot/get_contact
recordId (string, required): The ID of the contact to retrieve.
hubspot/get_deal
recordId (string, required): The ID of the deal to retrieve.
hubspot/get_record_by_id_engagements
recordId (string, required): The ID of the engagement to retrieve.
hubspot/get_record_by_id_any
recordType (string, required): The object type ID of the custom object.
recordId (string, required): The ID of the record to retrieve.
hubspot/search_companies
filterFormula (object, optional): A filter in disjunctive normal form (OR of ANDs).
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/search_contacts
filterFormula (object, optional): A filter in disjunctive normal form (OR of ANDs).
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/search_deals
filterFormula (object, optional): A filter in disjunctive normal form (OR of ANDs).
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/search_records_engagements
engagementFilterFormula (object, optional): A filter for engagements.
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/search_records_any
recordType (string, required): The object type ID to search.
filterFormula (string, optional): The filter formula to apply.
paginationParameters (object, optional): Use pageCursor to fetch subsequent pages.
hubspot/delete_record_companies
recordId (string, required): The ID of the company to delete.
hubspot/delete_record_contacts
recordId (string, required): The ID of the contact to delete.
hubspot/delete_record_deals
recordId (string, required): The ID of the deal to delete.
hubspot/delete_record_engagements
recordId (string, required): The ID of the engagement to delete.
hubspot/delete_record_any
recordType (string, required): The object type ID of the custom object.
recordId (string, required): The ID of the record to delete.
hubspot/get_contacts_by_list_id
listId (string, required): The ID of the list to get contacts from.
paginationParameters (object, optional): Use pageCursor for subsequent pages.
hubspot/describe_action_schema
recordType (string, required): The object type ID (e.g., ‘companies’).
operation (string, required): The operation type (e.g., ‘CREATE_RECORD’).
​ Usage Examples
​ Basic HubSpot Agent Setup
from crewai import Agent, Task, Crew # Create an agent with HubSpot capabilities hubspot_agent = Agent( role = "CRM Manager" , goal = "Manage company and contact records in HubSpot" , backstory = "An AI assistant specialized in CRM management." , apps = [ 'hubspot' ] # All HubSpot actions will be available ) # Task to create a new company create_company_task = Task( description = "Create a new company in HubSpot with name 'Innovate Corp' and domain 'innovatecorp.com'." , agent = hubspot_agent, expected_output = "Company created successfully with confirmation" ) # Run the task crew = Crew( agents = [hubspot_agent], tasks = [create_company_task] ) crew.kickoff()
​ Filtering Specific HubSpot Tools
from crewai import Agent, Task, Crew # Create agent with specific HubSpot actions only contact_creator = Agent( role = "Contact Creator" , goal = "Create new contacts in HubSpot" , backstory = "An AI assistant that focuses on creating new contact entries in the CRM." , apps = [ 'hubspot/create_contact' ] # Only contact creation action ) # Task to create a contact create_contact = Task( description = "Create a new contact for 'John Doe' with email 'john.doe@example.com'." , agent = contact_creator, expected_output = "Contact created successfully in HubSpot." ) crew = Crew( agents = [contact_creator], tasks = [create_contact] ) crew.kickoff()
​ Contact Management
from crewai import Agent, Task, Crew # Create agent with HubSpot contact management capabilities crm_manager = Agent( role = "CRM Manager" , goal = "Manage and organize HubSpot contacts efficiently." , backstory = "An experienced CRM manager who maintains an organized contact database." , apps = [ 'hubspot' ] # All HubSpot actions including contact management ) # Task to manage contacts contact_task = Task( description = "Create a new contact for 'Jane Smith' at 'Global Tech Inc.' with email 'jane.smith@globaltech.com'." , agent = crm_manager, expected_output = "Contact database updated with the new contact." ) crew = Crew( agents = [crm_manager], tasks = [contact_task] ) crew.kickoff()
​ Getting Help
Need Help?
