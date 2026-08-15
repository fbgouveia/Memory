# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/sso
- Raw SHA-256: `48f260b660871abe78dae66ecb562d68d759177acc9bed62946f28d5feae1fa1`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Manage Single Sign-On (SSO)
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
On this page
Overview Supported Providers Key Capabilities
SaaS SSO Default Authentication Enterprise Custom SSO CLI Defaults (SaaS)
Factory SSO Setup Microsoft Entra ID (Azure AD) Okta Keycloak WorkOS Auth0
CLI Authentication Quick Setup Manual CLI Configuration CLI Configuration Reference How Device Authorization Works
Role-Based Access Control (RBAC) Permission Model Resources Roles Factory Admin Access
Troubleshooting Invalid Redirect URI CLI Login Fails (Device Authorization) Token Validation Errors Admin Consent Not Granted (Entra ID) 403 Forbidden After Login CLI Can’t Reach Factory Instance
Environment Variables Reference Common Microsoft Entra ID Okta WorkOS Auth0 Keycloak
Next Steps
Single Sign-On (SSO)
Copy page Copy page
Configure enterprise SSO authentication for CrewAI Platform — SaaS and Factory
Copy page Copy page
​ Overview
​ Supported Providers
​ Key Capabilities
SAML 2.0 and OAuth 2.0 / OIDC protocol support
Device Authorization Grant flow for CLI authentication
Role-Based Access Control (RBAC) with custom roles and per-resource permissions
MFA enforcement delegated to your identity provider
User provisioning through IdP assignment (users/groups)
​ SaaS SSO
​ Default Authentication
​ Enterprise Custom SSO
Your team members authenticate through your organization’s IdP
Access control and MFA policies are enforced by your IdP
The CrewAI CLI automatically detects your SSO configuration via crewai enterprise configure
​ CLI Defaults (SaaS)
​ Factory SSO Setup
​ Microsoft Entra ID (Azure AD)
Register an Application
Go to portal.azure.com → Microsoft Entra ID → App registrations → New registration
Configure: Name: CrewAI (or your preferred name) Supported account types: Accounts in this organizational directory only Redirect URI: Select Web , enter https://<your-domain>/auth/entra_id/callback
Click Register
Collect Credentials
Application (client) ID → ENTRA_ID_CLIENT_ID
Directory (tenant) ID → ENTRA_ID_TENANT_ID
Create Client Secret
Navigate to Certificates & Secrets → New client secret
Add a description and select expiration period
Copy the secret value immediately (it won’t be shown again) → ENTRA_ID_CLIENT_SECRET
Grant Admin Consent
Go to Enterprise applications → select your app
Under Security → Permissions , click Grant admin consent
Ensure Microsoft Graph → User.Read is granted
Configure App Roles (Recommended)
Assign Users
Under Properties , set Assignment required? to Yes
Under Users and groups , assign users/groups with the appropriate role
Set Environment Variables
envVars : AUTH_PROVIDER : "entra_id" secrets : ENTRA_ID_CLIENT_ID : "<Application (client) ID>" ENTRA_ID_CLIENT_SECRET : "<Client Secret>" ENTRA_ID_TENANT_ID : "<Directory (tenant) ID>"
Enable CLI Support (Optional)
Under Authentication → Advanced settings , enable Allow public client flows
Under Expose an API , add an Application ID URI (e.g., api://crewai-cli )
Add a scope (e.g., read ) with Admins and users consent
Under Manifest , set accessTokenAcceptedVersion to 2
Add environment variables:
secrets : ENTRA_ID_DEVICE_AUTHORIZATION_CLIENT_ID : "<Application (client) ID>" ENTRA_ID_CUSTOM_OPENID_SCOPE : "<scope URI, e.g. api://crewai-cli/read>"
​ Okta
Create App Integration
Open Okta Admin Console → Applications → Create App Integration
Select OIDC - OpenID Connect → Web Application → Next
Configure: App integration name: CrewAI SSO Sign-in redirect URI: https://<your-domain>/auth/okta/callback Sign-out redirect URI: https://<your-domain> Assignments: Choose who can access (everyone or specific groups)
Click Save
Collect Credentials
Client ID → OKTA_CLIENT_ID
Client Secret → OKTA_CLIENT_SECRET
Okta URL (top-right corner, under your username) → OKTA_SITE
Configure Authorization Server
Navigate to Security → API
Select your authorization server (default: default )
Under Access Policies , add a policy and rule: In the rule, under Scopes requested , select The following scopes → OIDC default scopes
Note the Name and Audience of the authorization server
Set Environment Variables
envVars : AUTH_PROVIDER : "okta" secrets : OKTA_CLIENT_ID : "<Okta app client ID>" OKTA_CLIENT_SECRET : "<Okta client secret>" OKTA_SITE : "https://your-domain.okta.com" OKTA_AUTHORIZATION_SERVER : "default" OKTA_AUDIENCE : "api://default"
Enable CLI Support (Optional)
Create a new app integration: OIDC → Native Application
Enable Device Authorization and Refresh Token grant types
Allow everyone in your organization to access
Add environment variable:
secrets : OKTA_DEVICE_AUTHORIZATION_CLIENT_ID : "<Native app client ID>"
​ Keycloak
Create a Client
Open Keycloak Admin Console → navigate to your realm
Clients → Create client : Client type: OpenID Connect Client ID: crewai-factory (suggested)
Capability config: Client authentication: On Standard flow: Checked
Login settings: Root URL: https://<your-domain> Valid redirect URIs: https://<your-domain>/auth/keycloak/callback Valid post logout redirect URIs: https://<your-domain>
Click Save
Collect Credentials
Client ID → KEYCLOAK_CLIENT_ID
Under Credentials tab: Client secret → KEYCLOAK_CLIENT_SECRET
Realm name → KEYCLOAK_REALM
Keycloak server URL → KEYCLOAK_SITE
Set Environment Variables
envVars : AUTH_PROVIDER : "keycloak" secrets : KEYCLOAK_CLIENT_ID : "<client ID>" KEYCLOAK_CLIENT_SECRET : "<client secret>" KEYCLOAK_SITE : "https://keycloak.yourdomain.com" KEYCLOAK_REALM : "<realm name>" KEYCLOAK_AUDIENCE : "account" # Only set if using a custom base path (pre-v17 migrations): # KEYCLOAK_BASE_URL: "/auth"
Enable CLI Support (Optional)
Create a second client: Client type: OpenID Connect Client ID: crewai-factory-cli (suggested) Client authentication: Off (Device Authorization requires a public client) Authentication flow: Check only OAuth 2.0 Device Authorization Grant
Add environment variable:
secrets : KEYCLOAK_DEVICE_AUTHORIZATION_CLIENT_ID : "<CLI client ID>"
​ WorkOS
Configure in WorkOS Dashboard
Create an application in the WorkOS Dashboard
Configure the redirect URI: https://<your-domain>/auth/workos/callback
Note the Client ID and AuthKit domain
Set up organizations in the WorkOS dashboard
Set Environment Variables
envVars : AUTH_PROVIDER : "workos" secrets : WORKOS_CLIENT_ID : "<WorkOS client ID>" WORKOS_AUTHKIT_DOMAIN : "<your-authkit-domain.authkit.com>"
​ Auth0
Create Application
In the Auth0 Dashboard , create a new Regular Web Application
Configure: Allowed Callback URLs: https://<your-domain>/auth/auth0/callback Allowed Logout URLs: https://<your-domain>
Note the Domain , Client ID , and Client Secret
Set Environment Variables
envVars : AUTH_PROVIDER : "auth0" secrets : AUTH0_CLIENT_ID : "<Auth0 client ID>" AUTH0_CLIENT_SECRET : "<Auth0 client secret>" AUTH0_DOMAIN : "<your-tenant.auth0.com>"
Enable CLI Support (Optional)
Create a Native application in Auth0 for Device Authorization
Enable the Device Authorization grant type under application settings
Configure the CLI with the appropriate audience and client ID
​ CLI Authentication
​ Quick Setup
crewai enterprise configure https://your-factory-url.app
crewai login
​ Manual CLI Configuration
# Set the provider crewai config set oauth2_provider okta # Set provider-specific values crewai config set oauth2_domain your-domain.okta.com crewai config set oauth2_client_id your-client-id crewai config set oauth2_audience api://default # Set the enterprise base URL crewai config set enterprise_base_url https://your-factory-url.app
​ CLI Configuration Reference
crewai config list
​ How Device Authorization Works
Run crewai login — the CLI requests a device code from your IdP
A verification URL and code are displayed in your terminal
Your browser opens to the verification URL
Enter the code and authenticate with your IdP credentials
The CLI receives an access token and stores it locally
​ Role-Based Access Control (RBAC)
​ Permission Model
​ Resources
Usage Dashboard — Platform usage metrics and analytics
Automations Dashboard — Crew and flow management
Environment Variables — Secret and configuration management
Individual Automations — Per-automation access control
​ Roles
Predefined roles come out of the box with standard permission sets
Custom roles can be created with any combination of permissions
Per-resource assignment — limit specific automations to individual users or roles
​ Factory Admin Access
Assign the factory-admin role to users who need admin panel access
Assign the member role for standard platform access
Roles are communicated via JWT claims — no additional configuration needed after IdP setup
​ Troubleshooting
​ Invalid Redirect URI
​ CLI Login Fails (Device Authorization)
Verify that Device Authorization Grant is enabled in your IdP
For Okta: ensure you have a Native Application (not Web) with Device Authorization grant
For Entra ID: ensure Allow public client flows is enabled
For Keycloak: ensure the CLI client has Client authentication: Off and only Device Authorization Grant enabled
Check that *_DEVICE_AUTHORIZATION_CLIENT_ID environment variable is set on the server
​ Token Validation Errors
Okta: Verify OKTA_AUTHORIZATION_SERVER and OKTA_AUDIENCE match the authorization server’s Name and Audience exactly
Entra ID: Ensure accessTokenAcceptedVersion is set to 2 in the app manifest
Keycloak: Verify KEYCLOAK_AUDIENCE matches the audience in your access tokens (default: account )
​ Admin Consent Not Granted (Entra ID)
​ 403 Forbidden After Login
Check that the user is assigned to the application in your IdP
For Entra ID with Assignment required = Yes : ensure the user has a role assignment (Member or Factory Admin)
For Okta: verify the user or their group is assigned under the app’s Assignments tab
​ CLI Can’t Reach Factory Instance
Verify the Factory URL is reachable from your machine
Check that enterprise_base_url is set correctly: crewai config list
Ensure TLS certificates are valid and trusted
​ Environment Variables Reference
​ Common
​ Microsoft Entra ID
​ Okta
​ WorkOS
​ Auth0
​ Keycloak
​ Next Steps
Installation Guide — Get started with CrewAI
Quickstart — Build your first crew
RBAC Setup — Detailed role and permission management
