# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/agents
- Raw SHA-256: `cb0b73166983cf5ee6528a0061c1af1ec250214692375bc0eef7dedbf87d1924`

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
Navigation Core Concepts Agents
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
Agents
Copy page Copy page
Detailed guide on creating and managing agents within the CrewAI framework.
Copy page Copy page
​ Overview of an Agent
Perform specific tasks
Make decisions based on its role and goal
Use tools to accomplish objectives
Communicate and collaborate with other agents
Maintain memory of interactions
Delegate tasks when allowed
Intuitive agent configuration with form-based interfaces
Real-time testing and validation
Template library with pre-configured agent types
Easy customization of agent attributes and behaviors
​ Agent Attributes
​ Creating Agents
​ JSONC Configuration (Recommended)
{ "role" : "{topic} Senior Data Researcher" , "goal" : "Uncover cutting-edge developments in {topic}" , "backstory" : "You find the most relevant information and present it clearly." , "llm" : "openai/gpt-4o" , "tools" : [ "SerperDevTool" ], "settings" : { "verbose" : true , "allow_delegation" : false , "max_iter" : 20 } }
{ "name" : "Research Crew" , "agents" : [ "researcher" ], "tasks" : [ { "name" : "research_task" , "description" : "Research {topic}" , "expected_output" : "A concise briefing about {topic}" , "agent" : "researcher" } ], "inputs" : { "topic" : "AI Agents" } }
​ Classic YAML Configuration
​ Direct Code Definition
from crewai import Agent from crewai_tools import SerperDevTool # Create an agent with all available parameters agent = Agent( role = "Senior Data Scientist" , goal = "Analyze and interpret complex datasets to provide actionable insights" , backstory = "With over 10 years of experience in data science and machine learning, " "you excel at finding patterns in complex datasets." , llm = "gpt-4" , # Default: OPENAI_MODEL_NAME or "gpt-4" function_calling_llm = None , # Optional: Separate LLM for tool calling verbose = False , # Default: False allow_delegation = False , # Default: False max_iter = 20 , # Default: 20 iterations max_rpm = None , # Optional: Rate limit for API calls max_execution_time = None , # Optional: Maximum execution time in seconds max_retry_limit = 2 , # Default: 2 retries on error allow_code_execution = False , # Default: False code_execution_mode = "safe" , # Default: "safe" (options: "safe", "unsafe") respect_context_window = True , # Default: True use_system_prompt = True , # Default: True multimodal = False , # Default: False inject_date = False , # Default: False date_format = "%Y-%m- %d " , # Default: ISO format reasoning = False , # Default: False max_reasoning_attempts = None , # Default: None tools = [SerperDevTool()], # Optional: List of tools knowledge_sources = None , # Optional: List of knowledge sources embedder = None , # Optional: Custom embedder configuration system_template = None , # Optional: Custom system prompt template prompt_template = None , # Optional: Custom prompt template response_template = None , # Optional: Custom response template step_callback = None , # Optional: Callback function for monitoring )
​ Basic Research Agent
research_agent = Agent( role = "Research Analyst" , goal = "Find and summarize information about specific topics" , backstory = "You are an experienced researcher with attention to detail" , tools = [SerperDevTool()], verbose = True # Enable logging for debugging )
​ Code Development Agent
dev_agent = Agent( role = "Senior Python Developer" , goal = "Write and debug Python code" , backstory = "Expert Python developer with 10 years of experience" , allow_code_execution = True , code_execution_mode = "safe" , # Uses Docker for safety max_execution_time = 300 , # 5-minute timeout max_retry_limit = 3 # More retries for complex code tasks )
​ Long-Running Analysis Agent
analysis_agent = Agent( role = "Data Analyst" , goal = "Perform deep analysis of large datasets" , backstory = "Specialized in big data analysis and pattern recognition" , memory = True , respect_context_window = True , max_rpm = 10 , # Limit API calls function_calling_llm = "gpt-4o-mini" # Cheaper model for tool calls )
​ Custom Template Agent
custom_agent = Agent( role = "Customer Service Representative" , goal = "Assist customers with their inquiries" , backstory = "Experienced in customer support with a focus on satisfaction" , system_template = """<|start_header_id|>system<|end_header_id|> {{ .System }} <|eot_id|>""" , prompt_template = """<|start_header_id|>user<|end_header_id|> {{ .Prompt }} <|eot_id|>""" , response_template = """<|start_header_id|>assistant<|end_header_id|> {{ .Response }} <|eot_id|>""" , )
​ Date-Aware Agent with Reasoning
strategic_agent = Agent( role = "Market Analyst" , goal = "Track market movements with precise date references and strategic planning" , backstory = "Expert in time-sensitive financial analysis and strategic reporting" , inject_date = True , # Automatically inject current date into the prompt date_format = "%B %d , %Y" , # Format as "May 21, 2025" reasoning = True , # Enable strategic planning max_reasoning_attempts = 2 , # Limit planning iterations verbose = True )
​ Reasoning Agent
reasoning_agent = Agent( role = "Strategic Planner" , goal = "Analyze complex problems and create detailed execution plans" , backstory = "Expert strategic planner who methodically breaks down complex challenges" , reasoning = True , # Enable reasoning and planning max_reasoning_attempts = 3 , # Limit reasoning attempts max_iter = 30 , # Allow more iterations for complex planning verbose = True )
​ Multimodal Agent
multimodal_agent = Agent( role = "Visual Content Analyst" , goal = "Analyze and process both text and visual content" , backstory = "Specialized in multimodal analysis combining text and image understanding" , multimodal = True , # Enable multimodal capabilities verbose = True )
​ Parameter Details
​ Critical Parameters
role , goal , and backstory are required and shape the agent’s behavior
llm determines the language model used (default: OpenAI’s GPT-4)
​ Memory and Context
memory : Enable to maintain conversation history
respect_context_window : Prevents token limit issues
knowledge_sources : Add domain-specific knowledge bases
​ Execution Control
max_iter : Maximum attempts before giving best answer
max_execution_time : Timeout in seconds
max_rpm : Rate limiting for API calls
max_retry_limit : Retries on error
​ Code Execution
allow_code_execution (deprecated) : Previously enabled built-in code execution via CodeInterpreterTool .
code_execution_mode (deprecated) : Previously controlled execution mode ( "safe" for Docker, "unsafe" for direct execution).
​ Advanced Features
multimodal : Enable multimodal capabilities for processing text and visual content
reasoning : Enable agent to reflect and create plans before executing tasks
inject_date : Automatically inject current date into the agents prompt
​ Templates
system_template : Defines agent’s core behavior
prompt_template : Structures input format
response_template : Formats agent responses
​ Agent Tools
CrewAI Toolkit
LangChain Tools
from crewai import Agent from crewai_tools import SerperDevTool, WikipediaTools # Create tools search_tool = SerperDevTool() wiki_tool = WikipediaTools() # Add tools to agent researcher = Agent( role = "AI Technology Researcher" , goal = "Research the latest AI developments" , tools = [search_tool, wiki_tool], verbose = True )
​ Agent Memory and Context
from crewai import Agent analyst = Agent( role = "Data Analyst" , goal = "Analyze and remember complex data patterns" , memory = True , # Enable memory verbose = True )
​ Context Window Management
​ How Context Window Management Works
Automatically summarize content (when respect_context_window=True )
Stop execution with an error (when respect_context_window=False )
​ Automatic Context Handling ( respect_context_window=True )
# Agent with automatic context management (default) smart_agent = Agent( role = "Research Analyst" , goal = "Analyze large documents and datasets" , backstory = "Expert at processing extensive information" , respect_context_window = True , # 🔑 Default: auto-handle context limits verbose = True )
⚠️ Warning message : "Context length exceeded. Summarizing content to fit the model context window."
🔄 Automatic summarization : CrewAI intelligently summarizes the conversation history
✅ Continued execution : Task execution continues seamlessly with the summarized context
📝 Preserved information : Key information is retained while reducing token count
​ Strict Context Limits ( respect_context_window=False )
# Agent with strict context limits strict_agent = Agent( role = "Legal Document Reviewer" , goal = "Provide precise legal analysis without information loss" , backstory = "Legal expert requiring complete context for accurate analysis" , respect_context_window = False , # ❌ Stop execution on context limit verbose = True )
❌ Error message : "Context length exceeded. Consider using smaller text or RAG tools from crewai_tools."
🛑 Execution stops : Task execution halts immediately
🔧 Manual intervention required : You need to modify your approach
​ Choosing the Right Setting
​ Use respect_context_window=True (Default) when:
Processing large documents that might exceed context limits
Long-running conversations where some summarization is acceptable
Research tasks where general context is more important than exact details
Prototyping and development where you want robust execution
# Perfect for document processing document_processor = Agent( role = "Document Analyst" , goal = "Extract insights from large research papers" , backstory = "Expert at analyzing extensive documentation" , respect_context_window = True , # Handle large documents gracefully max_iter = 50 , # Allow more iterations for complex analysis verbose = True )
​ Use respect_context_window=False when:
Precision is critical and information loss is unacceptable
Legal or medical tasks requiring complete context
Code review where missing details could introduce bugs
Financial analysis where accuracy is paramount
# Perfect for precision tasks precision_agent = Agent( role = "Code Security Auditor" , goal = "Identify security vulnerabilities in code" , backstory = "Security expert requiring complete code context" , respect_context_window = False , # Prefer failure over incomplete analysis max_retry_limit = 1 , # Fail fast on context issues verbose = True )
​ Alternative Approaches for Large Data
​ 1. Use RAG Tools
from crewai_tools import RagTool # Create RAG tool for large document processing rag_tool = RagTool() rag_agent = Agent( role = "Research Assistant" , goal = "Query large knowledge bases efficiently" , backstory = "Expert at using RAG tools for information retrieval" , tools = [rag_tool], # Use RAG instead of large context windows respect_context_window = True , verbose = True )
​ 2. Use Knowledge Sources
# Use knowledge sources instead of large prompts knowledge_agent = Agent( role = "Knowledge Expert" , goal = "Answer questions using curated knowledge" , backstory = "Expert at leveraging structured knowledge sources" , knowledge_sources = [your_knowledge_sources], # Pre-processed knowledge respect_context_window = True , verbose = True )
​ Context Window Best Practices
Monitor Context Usage : Enable verbose=True to see context management in action
Design for Efficiency : Structure tasks to minimize context accumulation
Use Appropriate Models : Choose LLMs with context windows suitable for your tasks
Test Both Settings : Try both True and False to see which works better for your use case
Combine with RAG : Use RAG tools for very large datasets instead of relying solely on context windows
​ Troubleshooting Context Issues
# Quick fix: Enable automatic handling agent.respect_context_window = True # Better solution: Use RAG tools for large data from crewai_tools import RagTool agent.tools = [RagTool()] # Alternative: Break tasks into smaller pieces # Or use knowledge sources instead of large prompts
# Disable auto-summarization and use RAG instead agent = Agent( role = "Detailed Analyst" , goal = "Maintain complete information accuracy" , backstory = "Expert requiring full context" , respect_context_window = False , # No summarization tools = [RagTool()], # Use RAG for large data verbose = True )
​ Direct Agent Interaction with kickoff()
​ How kickoff() Works
from crewai import Agent from crewai_tools import SerperDevTool # Create an agent researcher = Agent( role = "AI Technology Researcher" , goal = "Research the latest AI developments" , tools = [SerperDevTool()], verbose = True ) # Use kickoff() to interact directly with the agent result = researcher.kickoff( "What are the latest developments in language models?" ) # Access the raw response print (result.raw)
​ Parameters and Return Values
raw : String containing the raw output text
pydantic : Parsed Pydantic model (if a response_format was provided)
agent_role : Role of the agent that produced the output
usage_metrics : Token usage metrics for the execution
​ Structured Output
from pydantic import BaseModel from typing import List class ResearchFindings ( BaseModel ): main_points: List[ str ] key_technologies: List[ str ] future_predictions: str # Get structured output result = researcher.kickoff( "Summarize the latest developments in AI for 2025" , response_format = ResearchFindings ) # Access structured data print (result.pydantic.main_points) print (result.pydantic.future_predictions)
​ Multiple Messages
messages = [ { "role" : "user" , "content" : "I need information about large language models" }, { "role" : "assistant" , "content" : "I'd be happy to help with that! What specifically would you like to know?" }, { "role" : "user" , "content" : "What are the latest developments in 2025?" } ] result = researcher.kickoff(messages)
​ Async Support
import asyncio async def main (): result = await researcher.kickoff_async( "What are the latest developments in AI?" ) print (result.raw) asyncio.run(main())
​ Important Considerations and Best Practices
​ Security and Code Execution
​ Performance Optimization
Use respect_context_window: true to prevent token limit issues
Set appropriate max_rpm to avoid rate limiting
Enable cache: true to improve performance for repetitive tasks
Adjust max_iter and max_retry_limit based on task complexity
​ Memory and Context Management
Leverage knowledge_sources for domain-specific information
Configure embedder when using custom embedding models
Use custom templates ( system_template , prompt_template , response_template ) for fine-grained control over agent behavior
​ Advanced Features
Enable reasoning: true for agents that need to plan and reflect before executing complex tasks
Set appropriate max_reasoning_attempts to control planning iterations (None for unlimited attempts)
Use inject_date: true to provide agents with current date awareness for time-sensitive tasks
Customize the date format with date_format using standard Python datetime format codes
Enable multimodal: true for agents that need to process both text and visual content
​ Agent Collaboration
Enable allow_delegation: true when agents need to work together
Use step_callback to monitor and log agent interactions
Consider using different LLMs for different purposes: Main llm for complex reasoning function_calling_llm for efficient tool usage
​ Date Awareness and Reasoning
Use inject_date: true to provide agents with current date awareness for time-sensitive tasks
Customize the date format with date_format using standard Python datetime format codes
Valid format codes include: %Y (year), %m (month), %d (day), %B (full month name), etc.
Invalid date formats will be logged as warnings and will not modify the task description
Enable reasoning: true for complex tasks that benefit from upfront planning and reflection
​ Model Compatibility
Set use_system_prompt: false for older models that don’t support system messages
Ensure your chosen llm supports the features you need (like function calling)
​ Troubleshooting Common Issues
Rate Limiting : If you’re hitting API rate limits: Implement appropriate max_rpm Use caching for repetitive operations Consider batching requests
Context Window Errors : If you’re exceeding context limits: Enable respect_context_window Use more efficient prompts Clear agent memory periodically
Code Execution Issues : If code execution fails: Verify Docker is installed for safe mode Check execution permissions Review code sandbox settings
Memory Issues : If agent responses seem inconsistent: Check knowledge source configuration Review conversation history management
Was this page helpful?
Yes
No
