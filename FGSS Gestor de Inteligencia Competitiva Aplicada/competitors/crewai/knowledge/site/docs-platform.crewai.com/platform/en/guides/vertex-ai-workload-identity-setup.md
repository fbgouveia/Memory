# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/guides/vertex-ai-workload-identity-setup
- Raw SHA-256: `5bd20b514a9a25bb097e86ad7441e5bb8646e942bed7c76a15de7f1a611544aa`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation How-To Guides Vertex AI with Workload Identity
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
Vertex AI with Workload Identity
Copy page Copy page
Connect Google Vertex AI to CrewAI AMP with no service account keys — credentials are minted per-execution via OIDC workload identity federation.
Copy page Copy page
​ Version requirements
​ Overview
No Google credentials stored in CrewAI AMP — no service account JSON keys, no API keys. AMP holds only the OIDC signing key it uses to mint tokens.
Trust is anchored in your GCP project. You decide which CrewAI organization can impersonate which service account.
The STS exchange happens inside the crew execution , not in AMP’s control plane. AMP only mints OIDC tokens; the Google credentials returned by GCP are never seen or persisted by AMP — they live and die inside a single execution.
Access tokens are refreshed automatically , and the underlying OIDC subject token is rotated before expiry — long-running crews are supported (with one edge case noted below).
​ How it works
​ Prerequisites
A GCP project with Vertex AI enabled ( aiplatform.googleapis.com ).
The gcloud CLI authenticated as a user with IAM admin on that project. See Appendix: minimum IAM for the specific roles required.
Your CrewAI organization UUID . Find it in CrewAI AMP at Settings → Organization (use the UUID, not the numeric ID).
Workload identity for LLM connections enabled on your AMP organization — contact CrewAI support.
https://app.crewai.com
​ Part 1 — GCP setup
Enable required APIs
gcloud services enable \ iam.googleapis.com \ iamcredentials.googleapis.com \ sts.googleapis.com \ aiplatform.googleapis.com \ --project=PROJECT_ID
Create a workload identity pool
gcloud iam workload-identity-pools create crewai-amp \ --project=PROJECT_ID \ --location=global \ --display-name= "CrewAI AMP"
Create the OIDC provider inside the pool
gcloud iam workload-identity-pools providers create-oidc crewai-amp-oidc \ --project=PROJECT_ID \ --location=global \ --workload-identity-pool=crewai-amp \ --issuer-uri= "https://app.crewai.com" \ --attribute-mapping= "google.subject=assertion.sub,attribute.organization=assertion.organization_id" \ --attribute-condition= "assertion.organization_id == 'YOUR_ORG_UUID'"
gcloud iam workload-identity-pools providers describe crewai-amp-oidc \ --project=PROJECT_ID \ --location=global \ --workload-identity-pool=crewai-amp \ --format= "value(name)" # projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/crewai-amp/providers/crewai-amp-oidc
Create a Vertex AI service account
gcloud iam service-accounts create crewai-vertex \ --project=PROJECT_ID \ --display-name= "CrewAI AMP — Vertex AI" gcloud projects add-iam-policy-binding PROJECT_ID \ --member= "serviceAccount:crewai-vertex@PROJECT_ID.iam.gserviceaccount.com" \ --role= "roles/aiplatform.user"
Allow the pool to impersonate the service account
gcloud iam service-accounts add-iam-policy-binding \ crewai-vertex@PROJECT_ID.iam.gserviceaccount.com \ --project=PROJECT_ID \ --role= "roles/iam.workloadIdentityUser" \ --member= "principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/crewai-amp/attribute.organization/YOUR_ORG_UUID"
​ Part 2 — CrewAI AMP setup
Create a Workload Identity Config
Attach the config to a Vertex LLM connection
Provider: Vertex
Workload Identity Config: the config from the previous step
GCP Service Account Email: the SA you created in Part 1 (e.g., crewai-vertex@PROJECT_ID.iam.gserviceaccount.com )
GOOGLE_CLOUD_LOCATION=global — recommended default. Vertex’s global endpoint provides higher availability and is supported by current Gemini 2.x and 3.x models. Set a specific region (e.g. us-central1 , europe-west4 ) if you need data residency (the global endpoint does not guarantee in-region processing) or if you plan to use Vertex features that don’t run on global (notably tuning , batch prediction for Anthropic / OpenMaaS models, and RAG corpus management — RAG requests still work on global). For chat/completion crews, global is the right choice.
Bind the connection to a crew or deployment
​ Runtime behavior
Fetches an OIDC token from AMP, signed with AMP’s private key and scoped to your organization (audience = your workload identity provider).
Writes the JWT to a temporary file in the execution environment.
Writes a Google Application Default Credentials (ADC) config of type external_account that references the JWT file, your STS audience, and (optionally) the service account impersonation URL.
Sets the following environment variables for the crew process: Env var Value GOOGLE_APPLICATION_CREDENTIALS Path to the temporary ADC external_account config file GOOGLE_CLOUD_PROJECT Your GCP project number, parsed from the workload identity provider resource name (Google Gen AI SDK accepts either the project ID or the project number) No GOOGLE_API_KEY and no GOOGLE_CLOUD_LOCATION are set automatically. Configure GOOGLE_CLOUD_LOCATION on your LLM connection in AMP (recommended default: global ).
From this point on, google-auth (used by the Google Gen AI SDK) does the STS exchange and SA impersonation transparently on the first Vertex API call, and caches/refreshes the resulting access token automatically.
​ Long-running crews
Vertex access tokens (1-hour TTL) are refreshed by google-auth in-process, transparently to your crew code.
The underlying OIDC subject token (also 1-hour TTL) is rotated before expiry on every kickoff entry point. The crew fetches a fresh OIDC JWT from AMP and rewrites the ADC token file; subsequent STS exchanges pick up the new JWT.
Crews that run for less than 1 hour never trigger a refresh — the initial token covers the whole execution.
Crews that run for multiple hours continue to function as long as kickoff entry points (sync hops, agent steps, etc.) fire during the execution; the refresh buffer ensures the OIDC token is rotated before STS rejects it.
If a single Vertex API call runs for more than 1 hour (very unusual — typical Gemini responses return in seconds), the OIDC token can expire mid-request and the call will fail. This is the one scenario where token refresh cannot help.
​ Verification
​ Inspecting on the GCP side
Service: sts.googleapis.com → method google.identity.sts.v1.SecurityTokenService.ExchangeToken
Service: iamcredentials.googleapis.com → method GenerateAccessToken
​ Troubleshooting
​ Security notes
The organization_id claim is your security boundary. Your GCP attribute condition must restrict to your organization UUID. Without it, any CrewAI AMP organization could exchange a token through your pool. The sub claim contains the same UUID prefixed with organization: — either could be used, but organization_id matches the bare-UUID form used in the attribute.organization mapping and principalSet binding.
Service account impersonation is the second boundary. The principalSet binding restricts impersonation to identities whose organization attribute matches your UUID. Use it even when the attribute condition is set — defense in depth.
Issuer trust is one-way. GCP fetches AMP’s public JWKS over HTTPS. AMP never receives any GCP credential.
​ Appendix: minimum IAM for setup
roles/iam.workloadIdentityPoolAdmin — create pools and providers
roles/iam.serviceAccountAdmin — create service accounts
roles/resourcemanager.projectIamAdmin — bind project-level roles
roles/serviceusage.serviceUsageAdmin — enable required APIs
​ Related
Single Sign-On (SSO) — Authentication for the AMP UI and CLI (separate system from LLM workload identity)
Azure OpenAI Setup — Static-key alternative for Azure OpenAI
GCP: Workload Identity Federation — Google’s reference docs
