# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/api-reference/introduction
- Raw SHA-256: `6faf341fef4b0e37cc9d013269f03981d530d8be1cbd2fa8838887b7fc323161`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
v1.15.16
English
Search... ⌘ K
Ask Assistant
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Getting Started Introduction
Website
Forum
Blog
CrewGPT
Getting Started
Introduction
GET GET /inputs
POST POST /kickoff
POST POST /resume
GET GET /status/{kickoff_id}
Introduction
Copy page Copy page
Complete reference for the CrewAI AMP REST API
Copy page Copy page
​ CrewAI AMP API
​ Quick Start
Get Your API Credentials
Discover Required Inputs
Start a Crew Execution
Monitor Progress
​ Authentication
curl -H "Authorization: Bearer YOUR_CREW_TOKEN" \ https://your-crew-url.crewai.com/inputs
​ Token Types
​ Base URL
https://your-crew-name.crewai.com
​ Typical Workflow
Discovery : Call GET /inputs to understand what your crew needs
Execution : Submit inputs via POST /kickoff to start processing
Monitoring : Poll GET /status/{kickoff_id} until completion
Results : Extract the final output from the completed response
​ Error Handling
​ Interactive Testing
✅ Exact request format with all parameters
✅ Response examples for success and error cases
✅ Code samples in multiple languages (cURL, Python, JavaScript, etc.)
✅ Authentication examples with proper Bearer token format
​ To Test Your Actual API:
Copy cURL Examples
Use Postman/Insomnia
Copy this cURL example from any endpoint page
Replace your-actual-crew-name.crewai.com with your real crew URL
Replace the Bearer token with your real token from the dashboard
Run the request in your terminal or API client
​ Need Help?
Enterprise Support
Enterprise Dashboard
Was this page helpful?
Yes
No
