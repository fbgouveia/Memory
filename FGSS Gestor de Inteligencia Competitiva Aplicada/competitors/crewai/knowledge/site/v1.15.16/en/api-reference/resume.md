# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/api-reference/resume
- Raw SHA-256: `2483982fbbbee5944393256e129b730c5f4cac23e706232e89dded9e3563b6ff`

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
Navigation Getting Started POST /resume
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
POST /resume
Copy page Copy page
Resume crew execution with human feedback
Copy page Copy page
Try it
cURL
approve_and_continue
curl --request POST \ --url https://your-actual-crew-name.crewai.com/resume \ --header 'Authorization: Bearer <token>' \ --header 'Content-Type: application/json' \ --data ' { "execution_id": "abcd1234-5678-90ef-ghij-klmnopqrstuv", "task_id": "research_task", "human_feedback": "Excellent research! Proceed to the next task.", "is_approve": true, "taskWebhookUrl": "https://api.example.com/webhooks/task", "stepWebhookUrl": "https://api.example.com/webhooks/step", "crewWebhookUrl": "https://api.example.com/webhooks/crew" } '
200
resumed
{ "status" : "resumed" , "message" : "Execution resumed successfully" }
Authorizations
📋 Reference Documentation - The tokens shown in examples are placeholders for reference only.
Use your actual Bearer Token or User Bearer Token from the CrewAI AMP dashboard for real API calls.
Bearer Token : Organization-level access for full crew operations User Bearer Token : User-scoped access with limited permissions
Body
The unique identifier for the crew execution (from kickoff)
"abcd1234-5678-90ef-ghij-klmnopqrstuv"
The ID of the task that requires human feedback
"research_task"
Your feedback on the task output. This will be incorporated as additional context for subsequent task executions.
"Great research! Please add more details about recent developments in the field."
Whether you approve the task output: true = positive feedback (continue), false = negative feedback (retry task)
true
Callback URL executed after each task completion. MUST be provided to continue receiving task notifications.
"https://your-server.com/webhooks/task"
Callback URL executed after each agent thought/action. MUST be provided to continue receiving step notifications.
"https://your-server.com/webhooks/step"
Callback URL executed when the crew execution completes. MUST be provided to receive completion notification.
"https://your-server.com/webhooks/crew"
Response
200
application/json
Execution resumed successfully
Status of the resumed execution
"resumed"
Human-readable message about the resume operation
"Execution resumed successfully"
Was this page helpful?
Yes
No
