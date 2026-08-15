# Documentation Index

- Source: https://docs-platform.crewai.com/platform/en/features/hallucination-guardrail
- Raw SHA-256: `2502414986d7aed11b7b1d611b6c5578a9441d24a75520ac92949ec72bbd0e6b`

## Visible text

Documentation Index
Fetch the complete documentation index at: /llms.txt
Use this file to discover all available pages before exploring further.
English
Search... ⌘ K
Start Cloud Trial
crewAIInc/crewAI
Search...
Navigation Operate Hallucination Guardrail
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
Hallucination Guardrail
Copy page Copy page
Prevent and detect AI hallucinations in your CrewAI tasks
Copy page Copy page
​ Overview
​ What are Hallucinations?
Comparing outputs against reference context
Evaluating faithfulness to source material
Providing detailed feedback on problematic content
Supporting custom thresholds for validation strictness
​ Basic Usage
​ Setting Up the Guardrail
from crewai.tasks.hallucination_guardrail import HallucinationGuardrail from crewai import LLM # Basic usage - will use task's expected_output as context guardrail = HallucinationGuardrail( llm = LLM( model = "gpt-4o-mini" ) ) # With explicit reference context context_guardrail = HallucinationGuardrail( context = "AI helps with various tasks including analysis and generation." , llm = LLM( model = "gpt-4o-mini" ) )
​ Adding to Tasks
from crewai import Task # Create your task with the guardrail task = Task( description = "Write a summary about AI capabilities" , expected_output = "A factual summary based on the provided context" , agent = my_agent, guardrail = guardrail # Add the guardrail to validate output )
​ Advanced Configuration
​ Custom Threshold Validation
# Strict guardrail requiring high faithfulness score strict_guardrail = HallucinationGuardrail( context = "Quantum computing uses qubits that exist in superposition states." , llm = LLM( model = "gpt-4o-mini" ), threshold = 8.0 # Requires score >= 8 to pass validation )
​ Including Tool Response Context
# Guardrail with tool response context weather_guardrail = HallucinationGuardrail( context = "Current weather information for the requested location" , llm = LLM( model = "gpt-4o-mini" ), tool_response = "Weather API returned: Temperature 22°C, Humidity 65%, Clear skies" )
​ How It Works
​ Validation Process
Context Analysis : The guardrail compares task output against the provided reference context
Faithfulness Scoring : Uses an internal evaluator to assign a faithfulness score (0-10)
Verdict Determination : Determines if content is faithful or contains hallucinations
Threshold Checking : If a custom threshold is set, validates against that score
Feedback Generation : Provides detailed reasons when validation fails
​ Validation Logic
Default Mode : Uses verdict-based validation (FAITHFUL vs HALLUCINATED)
Threshold Mode : Requires faithfulness score to meet or exceed the specified threshold
Error Handling : Gracefully handles evaluation errors and provides informative feedback
​ Guardrail Results
# Example of guardrail result structure { "valid" : False , "feedback" : "Content appears to be hallucinated (score: 4.2/10, verdict: HALLUCINATED). The output contains information not supported by the provided context." }
​ Result Properties
valid : Boolean indicating whether the output passed validation
feedback : Detailed explanation when validation fails, including: Faithfulness score Verdict classification Specific reasons for failure
​ Integration with Task System
​ Automatic Validation
# Task output validation flow task_output = agent.execute_task(task) validation_result = guardrail(task_output) if validation_result.valid: # Task completes successfully return task_output else : # Task fails with validation feedback raise ValidationError(validation_result.feedback)
​ Event Tracking
Validation Started : When guardrail evaluation begins
Validation Completed : When evaluation finishes with results
Validation Failed : When technical errors occur during evaluation
​ Best Practices
​ Context Guidelines
Provide Comprehensive Context
context = """ Company XYZ was founded in 2020 and specializes in renewable energy solutions. They have 150 employees and generated $50M revenue in 2023. Their main products include solar panels and wind turbines. """
Keep Context Relevant
# Good: Focused context context = "The current weather in New York is 18°C with light rain." # Avoid: Unrelated information context = "The weather is 18°C. The city has 8 million people. Traffic is heavy."
Update Context Regularly
​ Threshold Selection
Start with Default Validation
Adjust Based on Requirements
High-stakes content : Use threshold 8-10 for maximum accuracy
General content : Use threshold 6-7 for balanced validation
Creative content : Use threshold 4-5 or default verdict-based validation
Monitor and Iterate
​ Performance Considerations
​ Impact on Execution Time
Validation Overhead : Each guardrail adds ~1-3 seconds per task
LLM Efficiency : Choose efficient models for evaluation (e.g., gpt-4o-mini)
​ Cost Optimization
Model Selection : Use smaller, efficient models for guardrail evaluation
Context Size : Keep reference context concise but comprehensive
Caching : Consider caching validation results for repeated content
​ Troubleshooting
Validation Always Fails
Context is too restrictive or unrelated to task output
Threshold is set too high for the content type
Reference context contains outdated information
Review and update context to match task requirements
Lower threshold or use default verdict-based validation
Ensure context is current and accurate
False Positives (Valid Content Marked Invalid)
Threshold too high for creative or interpretive tasks
Context doesn’t cover all valid aspects of the output
Evaluation model being overly conservative
Lower threshold or use default validation
Expand context to include broader acceptable content
Test with different evaluation models
Evaluation Errors
Network connectivity issues
LLM model unavailable or rate limited
Malformed task output or context
Check network connectivity and LLM service status
Implement retry logic for transient failures
Validate task output format before guardrail evaluation
Need Help?
