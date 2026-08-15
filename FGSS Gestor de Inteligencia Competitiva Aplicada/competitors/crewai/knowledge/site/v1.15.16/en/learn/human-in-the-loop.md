# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/human-in-the-loop
- Raw SHA-256: `301b6e42e720e44b0e5d7e0b838a9b91863df4326a4255d08428f38f78db8e11`

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
Navigation Learn Human-in-the-Loop (HITL) Workflows
Website
Forum
Blog
CrewGPT
Get Started
Introduction
Build with AI
Skills
Installation
Quickstart
Guides
Strategy
Agents
Crews
Flows
Frontend
Tools
Coding Tools
Advanced
Migration
Core Concepts
Agents
Agent Capabilities
Tasks
Crews
Flows
Streaming
Production Architecture
Knowledge
Skills
LLMs
Files
Processes
Collaboration
Training
Memory
Reasoning
Planning
Testing
CLI
Tools
Event Listeners
Checkpointing
MCP Integration
MCP Servers as Tools in CrewAI
MCP DSL Integration
Stdio Transport
SSE Transport
Streamable HTTP Transport
Connecting to Multiple MCP Servers
MCP Security Considerations
Tools
Tools Overview
File & Document
Web Scraping & Browsing
Search & Research
Database & Data
AI & Machine Learning
Cloud & Storage
Integrations
Automation
Observability
CrewAI Tracing
Overview
Arize Phoenix
Braintrust
Datadog Integration
Galileo
LangDB Integration
Langfuse Integration
Langtrace Integration
Maxim Integration
MLflow Integration
Neatlogs Integration
OpenLIT Integration
Opik Integration
Patronus AI Evaluation
Portkey Integration
Weave Integration
TrueFoundry Integration
Learn
Overview
Strategic LLM Selection Guide
Conditional Tasks
Coding Agents
Create Custom Tools
Custom LLM Implementation
Custom Manager Agent
Customize Agents
Image Generation with DALL-E
Force Tool Output as Result
Hierarchical Process
Human Input on Execution
Human-in-the-Loop (HITL) Workflows
Human Feedback in Flows
Kickoff Crew Asynchronously
Kickoff Crew for Each
Streaming Runtime Contract
Consuming Streams
Connect to any LLM
Using CrewAI Without LiteLLM
Using Multimodal Agents
Replay Tasks from Latest Crew Kickoff
Sequential Processes
Using Annotations in crew.py
Execution Hooks
Telemetry
Human-in-the-Loop (HITL) Workflows
Copy page Copy page
Learn how to implement Human-in-the-Loop workflows in CrewAI for enhanced decision-making
Copy page Copy page
​ Choosing Your HITL Approach
​ Setting Up Webhook-Based HITL Workflows
Configure Your Task
Provide Webhook URL
curl -X POST {BASE_URL}/kickoff \ -H "Authorization: Bearer YOUR_API_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "inputs": { "topic": "AI Research" }, "humanInputWebhook": { "url": "https://your-webhook.com/hitl", "authentication": { "strategy": "bearer", "token": "your-webhook-secret-token" } } }'
curl -X POST {BASE_URL}/kickoff \ -H "Authorization: Bearer YOUR_API_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "inputs": { "topic": "AI Research" }, "humanInputWebhook": { "url": "https://your-webhook.com/hitl", "authentication": { "strategy": "basic", "username": "your-username", "password": "your-password" } } }'
Receive Webhook Notification
Execution ID
Task ID
Task output
Review Task Output
Submit Human Feedback
curl -X POST {BASE_URL}/resume \ -H "Authorization: Bearer YOUR_API_TOKEN" \ -H "Content-Type: application/json" \ -d '{ "execution_id": "abcd1234-5678-90ef-ghij-klmnopqrstuv", "task_id": "research_task", "human_feedback": "Great work! Please add more details.", "is_approve": true, "taskWebhookUrl": "https://your-server.com/webhooks/task", "stepWebhookUrl": "https://your-server.com/webhooks/step", "crewWebhookUrl": "https://your-server.com/webhooks/crew" }'
All information in your feedback becomes part of the task’s context.
Irrelevant details may negatively influence it.
Concise, relevant feedback helps maintain task focus and efficiency.
Always review your feedback carefully before submission to ensure it contains only pertinent information that will positively guide the task’s execution.
Handle Negative Feedback
The crew will retry the task with added context from your feedback.
You’ll receive another webhook notification for further review.
Repeat steps 4-6 until satisfied.
Execution Continuation
​ Best Practices
Be Specific : Provide clear, actionable feedback that directly addresses the task at hand
Stay Relevant : Only include information that will help improve the task execution
Be Timely : Respond to HITL prompts promptly to avoid workflow delays
Review Carefully : Double-check your feedback before submitting to ensure accuracy
​ Common Use Cases
Quality assurance and validation
Complex decision-making scenarios
Sensitive or high-stakes operations
Creative tasks requiring human judgment
Compliance and regulatory reviews
​ Enterprise Features
Flow HITL Management Platform
Was this page helpful?
Yes
No
