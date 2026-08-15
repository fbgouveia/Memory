# Documentation Index

- Source: https://docs.crewai.com/en/learn/human-feedback-in-flows
- Raw SHA-256: `3f505c3c18d4f544724ef11c4ef44f64e4b12b8ae173f2078311e9e43a902c88`

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
Navigation Learn Human Feedback in Flows
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
Human Feedback in Flows
Copy page Copy page
Learn how to integrate human feedback directly into your CrewAI Flows using the @human_feedback decorator
Copy page Copy page
​ Overview
Quality assurance : Review AI-generated content before it’s used downstream
Decision gates : Let humans make critical decisions in automated workflows
Approval workflows : Implement approve/reject/revise patterns
Interactive refinement : Collect feedback to improve outputs iteratively
​ Quick Start
from crewai.flow.flow import Flow, start, listen from crewai.flow.human_feedback import human_feedback class SimpleReviewFlow ( Flow ): @start () @human_feedback ( message = "Please review this content:" ) def generate_content ( self ): return "This is AI-generated content that needs review." @listen (generate_content) def process_feedback ( self , result ): print ( f "Content: { result.output } " ) print ( f "Human said: { result.feedback } " ) flow = SimpleReviewFlow() flow.kickoff()
Execute generate_content and return the string
Display the output to the user with the request message
Wait for the user to type feedback (or press Enter to skip)
Pass a HumanFeedbackResult object to process_feedback
​ The @human_feedback Decorator
​ Parameters
​ Basic Usage (No Routing)
@start () @human_feedback ( message = "What do you think of this analysis?" ) def analyze_data ( self ): return "Analysis results: Revenue up 15%, costs down 8%" @listen (analyze_data) def handle_feedback ( self , result ): # result is a HumanFeedbackResult print ( f "Analysis: { result.output } " ) print ( f "Feedback: { result.feedback } " )
​ Routing with emit
from crewai.flow.flow import Flow, start, listen, or_ from crewai.flow.human_feedback import human_feedback class ReviewFlow ( Flow ): @start () def generate_content ( self ): return "Draft blog post content here..." @human_feedback ( message = "Do you approve this content for publication?" , emit = [ "approved" , "rejected" , "needs_revision" ], llm = "gpt-4o-mini" , default_outcome = "needs_revision" , ) @listen (or_( "generate_content" , "needs_revision" )) def review_content ( self ): return "Draft blog post content here..." @listen ( "approved" ) def publish ( self , result ): print ( f "Publishing! User said: { result.feedback } " ) @listen ( "rejected" ) def discard ( self , result ): print ( f "Discarding. Reason: { result.feedback } " )
​ HumanFeedbackResult
from crewai.flow.human_feedback import HumanFeedbackResult @dataclass class HumanFeedbackResult : output: Any # The original method output shown to the human feedback: str # The raw feedback text from the human outcome: str | None # The collapsed outcome (if emit was specified) timestamp: datetime # When the feedback was received method_name: str # Name of the decorated method metadata: dict # Any metadata passed to the decorator
​ Accessing in Listeners
@listen ( "approved" ) def on_approval ( self , result : HumanFeedbackResult): print ( f "Original output: { result.output } " ) print ( f "User feedback: { result.feedback } " ) print ( f "Outcome: { result.outcome } " ) # "approved" print ( f "Received at: { result.timestamp } " )
​ Accessing Feedback History
​ last_human_feedback
@listen (some_method) def check_feedback ( self ): if self .last_human_feedback: print ( f "Last feedback: { self .last_human_feedback.feedback } " )
​ human_feedback_history
@listen (final_step) def summarize ( self ): print ( f "Total feedback collected: { len ( self .human_feedback_history) } " ) for i, fb in enumerate ( self .human_feedback_history): print ( f " { i + 1 } . { fb.method_name } : { fb.outcome or 'no routing' } " )
​ Complete Example: Content Approval Workflow
Code
Output
from crewai.flow.flow import Flow, start, listen, or_ from crewai.flow.human_feedback import human_feedback, HumanFeedbackResult from pydantic import BaseModel class ContentState ( BaseModel ): draft: str = "" revision_count: int = 0 status: str = "pending" class ContentApprovalFlow (Flow[ContentState]): """A flow that generates content and loops until the human approves.""" @start () def generate_draft ( self ): self .state.draft = "# AI Safety \n\n This is a draft about AI Safety..." return self .state.draft @human_feedback ( message = "Please review this draft. Approve, reject, or describe what needs changing:" , emit = [ "approved" , "rejected" , "needs_revision" ], llm = "gpt-4o-mini" , default_outcome = "needs_revision" , ) @listen (or_( "generate_draft" , "needs_revision" )) def review_draft ( self ): self .state.revision_count += 1 return f " { self .state.draft } (v { self .state.revision_count } )" @listen ( "approved" ) def publish_content ( self , result : HumanFeedbackResult): self .state.status = "published" print ( f "Content approved and published! Reviewer said: { result.feedback } " ) return "published" @listen ( "rejected" ) def handle_rejection ( self , result : HumanFeedbackResult): self .state.status = "rejected" print ( f "Content rejected. Reason: { result.feedback } " ) return "rejected" flow = ContentApprovalFlow() result = flow.kickoff() print ( f " \n Flow completed. Status: { flow.state.status } , Reviews: { flow.state.revision_count } " )
================================================== OUTPUT FOR REVIEW: ================================================== # AI Safety This is a draft about AI Safety... (v1) ================================================== Please review this draft. Approve, reject, or describe what needs changing: (Press Enter to skip, or type your feedback) Your feedback: Needs more detail on alignment research ================================================== OUTPUT FOR REVIEW: ================================================== # AI Safety This is a draft about AI Safety... (v2) ================================================== Please review this draft. Approve, reject, or describe what needs changing: (Press Enter to skip, or type your feedback) Your feedback: Looks good, approved! Content approved and published! Reviewer said: Looks good, approved! Flow completed. Status: published, Reviews: 2
​ Combining with Other Decorators
# One-shot review at the start of a flow (no self-loop) @start () @human_feedback ( message = "Review this:" , emit = [ "approved" , "rejected" ], llm = "gpt-4o-mini" ) def my_start_method ( self ): return "content" # Linear review on a listener (no self-loop) @listen (other_method) @human_feedback ( message = "Review this too:" , emit = [ "good" , "bad" ], llm = "gpt-4o-mini" ) def my_listener ( self , data ): return f "processed: { data } " # Self-loop: review that can loop back for revisions @human_feedback ( message = "Approve or revise?" , emit = [ "approved" , "revise" ], llm = "gpt-4o-mini" ) @listen (or_( "upstream_method" , "revise" )) def review_with_loop ( self ): return "content for review"
​ Self-loop pattern
@start () def generate ( self ): return "initial draft" @human_feedback ( message = "Approve or request changes?" , emit = [ "revise" , "approved" ], llm = "gpt-4o-mini" , default_outcome = "approved" , ) @listen (or_( "generate" , "revise" )) def review ( self ): return "content" @listen ( "approved" ) def publish ( self ): return "published"
​ Chained routers
@start () def generate ( self ): return "draft content" @human_feedback ( message = "First review:" , emit = [ "approved" , "rejected" ], llm = "gpt-4o-mini" ) @listen ( "generate" ) def first_review ( self ): return "draft content" @human_feedback ( message = "Final review:" , emit = [ "publish" , "hold" ], llm = "gpt-4o-mini" ) @listen ( "approved" ) def final_review ( self , prev ): return "final content" @listen ( "publish" ) def on_publish ( self , prev ): return "published" @listen ( "hold" ) def on_hold ( self , prev ): return "held for later"
​ Limitations
@start() methods run once : A @start() method cannot self-loop. If you need a revision cycle, use a separate @start() method as the entry point and put the @human_feedback on a @listen() method.
No @start() + @listen() on the same method : This is a Flow framework constraint. A method is either a start point or a listener, not both.
​ Best Practices
​ 1. Write Clear Request Messages
# ✅ Good - clear and actionable @human_feedback ( message = "Does this summary accurately capture the key points? Reply 'yes' or explain what's missing:" ) # ❌ Bad - vague @human_feedback ( message = "Review this:" )
​ 2. Choose Meaningful Outcomes
# ✅ Good - natural language outcomes emit = [ "approved" , "rejected" , "needs_more_detail" ] # ❌ Bad - technical or unclear emit = [ "state_1" , "state_2" , "state_3" ]
​ 3. Always Provide a Default Outcome
@human_feedback ( message = "Approve? (press Enter to request revision)" , emit = [ "approved" , "needs_revision" ], llm = "gpt-4o-mini" , default_outcome = "needs_revision" , # Safe default )
​ 4. Use Feedback History for Audit Trails
@listen (final_step) def create_audit_log ( self ): log = [] for fb in self .human_feedback_history: log.append({ "step" : fb.method_name, "outcome" : fb.outcome, "feedback" : fb.feedback, "timestamp" : fb.timestamp.isoformat(), }) return log
​ 5. Handle Both Routed and Non-Routed Feedback
​ Async Human Feedback (Non-Blocking)
​ The Provider Abstraction
from crewai.flow import Flow, start, human_feedback, HumanFeedbackProvider, HumanFeedbackPending, PendingFeedbackContext class WebhookProvider ( HumanFeedbackProvider ): """Provider that pauses flow and waits for webhook callback.""" def __init__ ( self , webhook_url : str ): self .webhook_url = webhook_url def request_feedback ( self , context : PendingFeedbackContext, flow : Flow) -> str : # Notify external system (e.g., send Slack message, create ticket) self .send_notification(context) # Pause execution - framework handles persistence automatically raise HumanFeedbackPending( context = context, callback_info = { "webhook_url" : f " { self .webhook_url } / { context.flow_id } " } ) class ReviewFlow ( Flow ): @start () @human_feedback ( message = "Review this content:" , emit = [ "approved" , "rejected" ], llm = "gpt-4o-mini" , provider = WebhookProvider( "https://myapp.com/api" ), ) def generate_content ( self ): return "AI-generated content..." @listen ( "approved" ) def publish ( self , result ): return "Published!"
​ Handling Paused Flows
flow = ReviewFlow() result = flow.kickoff() if isinstance (result, HumanFeedbackPending): # Flow is paused, state is automatically persisted print ( f "Waiting for feedback at: { result.callback_info[ 'webhook_url' ] } " ) print ( f "Flow ID: { result.context.flow_id } " ) else : # Normal completion print ( f "Flow completed: { result } " )
​ Resuming a Paused Flow
# Sync handler: def handle_feedback_webhook ( flow_id : str , feedback : str ): flow = ReviewFlow.from_pending(flow_id) result = flow.resume(feedback) return result # Async handler (FastAPI, aiohttp, etc.): async def handle_feedback_webhook ( flow_id : str , feedback : str ): flow = ReviewFlow.from_pending(flow_id) result = await flow.resume_async(feedback) return result
​ Key Types
​ PendingFeedbackContext
@dataclass class PendingFeedbackContext : flow_id: str # Unique identifier for this flow execution flow_class: str # Fully qualified class name method_name: str # Method that triggered feedback method_output: Any # Output shown to the human message: str # The request message emit: list[ str ] | None # Possible outcomes for routing default_outcome: str | None metadata: dict # Custom metadata llm: str | None # LLM for outcome collapsing requested_at: datetime
​ Complete Async Flow Example
from crewai.flow import ( Flow, start, listen, human_feedback, HumanFeedbackProvider, HumanFeedbackPending, PendingFeedbackContext ) class SlackNotificationProvider ( HumanFeedbackProvider ): """Provider that sends Slack notifications and pauses for async feedback.""" def __init__ ( self , channel : str ): self .channel = channel def request_feedback ( self , context : PendingFeedbackContext, flow : Flow) -> str : # Send Slack notification (implement your own) slack_thread_id = self .post_to_slack( channel = self .channel, message = f "Review needed: \n\n { context.method_output } \n\n { context.message } " , ) # Pause execution - framework handles persistence automatically raise HumanFeedbackPending( context = context, callback_info = { "slack_channel" : self .channel, "thread_id" : slack_thread_id, } ) class ContentPipeline ( Flow ): @start () @human_feedback ( message = "Approve this content for publication?" , emit = [ "approved" , "rejected" ], llm = "gpt-4o-mini" , default_outcome = "rejected" , provider = SlackNotificationProvider( "#content-reviews" ), ) def generate_content ( self ): return "AI-generated blog post content..." @listen ( "approved" ) def publish ( self , result ): print ( f "Publishing! Reviewer said: { result.feedback } " ) return { "status" : "published" } @listen ( "rejected" ) def archive ( self , result ): print ( f "Archived. Reason: { result.feedback } " ) return { "status" : "archived" } # Starting the flow (will pause and wait for Slack response) def start_content_pipeline (): flow = ContentPipeline() result = flow.kickoff() if isinstance (result, HumanFeedbackPending): return { "status" : "pending" , "flow_id" : result.context.flow_id} return result # Resuming when Slack webhook fires (sync handler) def on_slack_feedback ( flow_id : str , slack_message : str ): flow = ContentPipeline.from_pending(flow_id) result = flow.resume(slack_message) return result # If your handler is async (FastAPI, aiohttp, Slack Bolt async, etc.) async def on_slack_feedback_async ( flow_id : str , slack_message : str ): flow = ContentPipeline.from_pending(flow_id) result = await flow.resume_async(slack_message) return result
​ Best Practices for Async Feedback
Check the return type : kickoff() returns HumanFeedbackPending when paused—no try/except needed
Use the right resume method : Use resume() in sync code, await resume_async() in async code
Store callback info : Use callback_info to store webhook URLs, ticket IDs, etc.
Implement idempotency : Your resume handler should be idempotent for safety
Automatic persistence : State is automatically saved when HumanFeedbackPending is raised and uses SQLiteFlowPersistence by default
Custom persistence : Pass a custom persistence instance to from_pending() if needed
​ Learning from Feedback
​ How It Works
After feedback : The LLM extracts generalizable lessons from the output + feedback and stores them in memory with source="hitl" . If the feedback is just approval (e.g. “looks good”), nothing is stored.
Before next review : Past HITL lessons are recalled from memory and applied by the LLM to improve the output before the human sees it.
​ Example
class ArticleReviewFlow ( Flow ): @start () def generate_article ( self ): return self .crew.kickoff( inputs = { "topic" : "AI Safety" }).raw @human_feedback ( message = "Review this article draft:" , emit = [ "approved" , "needs_revision" ], llm = "gpt-4o-mini" , learn = True , # enable HITL learning ) @listen (or_( "generate_article" , "needs_revision" )) def review_article ( self ): return self .last_human_feedback.output if self .last_human_feedback else "article draft" @listen ( "approved" ) def publish ( self ): print ( f "Publishing: { self .last_human_feedback.output } " )
​ Configuration
​ Key Design Decisions
Same LLM for everything : The llm parameter on the decorator is shared by outcome collapsing, lesson distillation, and pre-review. No need to configure multiple models.
Structured output : Both distillation and pre-review use function calling with Pydantic models when the LLM supports it, falling back to text parsing otherwise.
Non-blocking storage : Lessons are stored via remember_many() which runs in a background thread — the flow continues immediately.
Graceful degradation : If the LLM fails during distillation, nothing is stored. If it fails during pre-review, the raw output is shown. Neither failure blocks the flow.
No scope/categories needed : When storing lessons, only source is passed. The encoding pipeline infers scope, categories, and importance automatically.
​ Related Documentation
Flows Overview - Learn about CrewAI Flows
Flow State Management - Managing state in flows
Flow Persistence - Persisting flow state
Routing with @router - More about conditional routing
Human Input on Execution - Task-level human input
Memory - The unified memory system used by HITL learning
Was this page helpful?
Yes
No
