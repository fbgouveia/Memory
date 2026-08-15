# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/api-reference/kickoff
- Raw SHA-256: `8c485a5219fe272a6bd9ba21f5df1aaf81f7781957ecf0184f47400c53279538`

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
Navigation Getting Started POST /kickoff
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
POST /kickoff
Copy page Copy page
Start a crew execution
Copy page Copy page
Try it
cURL
travel_planning
curl --request POST \ --url https://your-actual-crew-name.crewai.com/kickoff \ --header 'Authorization: Bearer <token>' \ --header 'Content-Type: application/json' \ --data ' { "inputs": { "budget": "1000 USD", "interests": "games, tech, ai, relaxing hikes, amazing food", "duration": "7 days", "age": "35" }, "meta": { "requestId": "travel-req-123", "source": "web-app" } } '
200
400
401
422
500
{ "kickoff_id" : "abcd1234-5678-90ef-ghij-klmnopqrstuv" }
{ "error": "Authentication Error", "message": "Invalid bearer token provided" }
{ "error": "Unauthorized", "message": "Invalid or missing bearer token" }
{ "error": "Validation Error", "message": "Missing required inputs", "details": { "missing_inputs": [ "budget", "interests" ] } }
{ "error": "Internal Server Error", "message": "An unexpected error occurred" }
Authorizations
📋 Reference Documentation - The tokens shown in examples are placeholders for reference only.
Use your actual Bearer Token or User Bearer Token from the CrewAI AMP dashboard for real API calls.
Bearer Token : Organization-level access for full crew operations User Bearer Token : User-scoped access with limited permissions
Body
Key-value pairs of all required inputs for your crew
Show child attributes
{ "budget" : "1000 USD" , "interests" : "games, tech, ai, relaxing hikes, amazing food" , "duration" : "7 days" , "age" : "35" }
Additional metadata to pass to the crew
{ "requestId" : "user-request-12345" , "source" : "mobile-app" }
Callback URL executed after each task completion
"https://your-server.com/webhooks/task"
Callback URL executed after each agent thought/action
"https://your-server.com/webhooks/step"
Callback URL executed when the crew execution completes
"https://your-server.com/webhooks/crew"
Response
200
application/json
Crew execution started successfully
Unique identifier for tracking this execution
"abcd1234-5678-90ef-ghij-klmnopqrstuv"
Was this page helpful?
Yes
No
