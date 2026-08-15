# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/tasks
- Raw SHA-256: `8965c5f3e60af160ad69fa1829a515c6ec581db2e991a8898976bf361a06a5b2`

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
Navigation Core Concepts Tasks
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
Tasks
Copy page Copy page
Detailed guide on managing and creating tasks within the CrewAI framework.
Copy page Copy page
​ Overview
Drag-and-drop task creation
Visual task dependencies and flow
Real-time testing and validation
Easy sharing and collaboration
​ Task Execution Flow
Sequential : Tasks are executed in the order they are defined
Hierarchical : Tasks are assigned to agents based on their roles and expertise
crew = Crew( agents = [agent1, agent2], tasks = [task1, task2], process = Process.sequential # or Process.hierarchical )
​ Task Attributes
​ Creating Tasks
​ JSONC Configuration (Recommended)
{ "name" : "Research Crew" , "agents" : [ "researcher" , "reporting_analyst" ], "tasks" : [ { "name" : "research_task" , "description" : "Conduct thorough research about {topic}. Include current and relevant information." , "expected_output" : "A list of the most relevant information about {topic}." , "agent" : "researcher" }, { "name" : "reporting_task" , "description" : "Review the research and expand it into a detailed report." , "expected_output" : "A polished markdown report without fenced code blocks." , "agent" : "reporting_analyst" , "context" : [ "research_task" ], "markdown" : true , "output_file" : "report.md" } ], "inputs" : { "topic" : "AI Agents" } }
​ Classic YAML Configuration
​ Direct Code Definition (Alternative)
from crewai import Task research_task = Task( description = """ Conduct a thorough research about AI Agents. Make sure you find any interesting and relevant information given the current year is 2025. """ , expected_output = """ A list with 10 bullet points of the most relevant information about AI Agents """ , agent = researcher ) reporting_task = Task( description = """ Review the context you got and expand each topic into a full section for a report. Make sure the report is detailed and contains any and all relevant information. """ , expected_output = """ A fully fledge reports with the mains topics, each with a full section of information. """ , agent = reporting_analyst, markdown = True , # Enable markdown formatting for the final output output_file = "report.md" )
​ Task Output
​ Task Output Attributes
​ Task Methods and Properties
​ Accessing Task Outputs
​ Example
# Example task task = Task( description = 'Find and summarize the latest AI news' , expected_output = 'A bullet list summary of the top 5 most important AI news' , agent = research_agent, tools = [search_tool] ) # Execute the crew crew = Crew( agents = [research_agent], tasks = [task], verbose = True ) result = crew.kickoff() # Accessing the task output task_output = task.output print ( f "Task Description: { task_output.description } " ) print ( f "Task Summary: { task_output.summary } " ) print ( f "Raw Output: { task_output.raw } " ) if task_output.json_dict: print ( f "JSON Output: { json.dumps(task_output.json_dict, indent = 2 ) } " ) if task_output.pydantic: print ( f "Pydantic Output: { task_output.pydantic } " )
​ Markdown Output Formatting
​ Using Markdown Formatting
# Example task with markdown formatting enabled formatted_task = Task( description = "Create a comprehensive report on AI trends" , expected_output = "A well-structured report with headers, sections, and bullet points" , agent = reporter_agent, markdown = True # Enable automatic markdown formatting )
# for headers
**text** for bold text
*text* for italic text
- or * for bullet points
`code` for inline code
language ``` for code blocks
​ YAML Configuration with Markdown
analysis_task : description : > Analyze the market data and create a detailed report expected_output : > A comprehensive analysis with charts and key findings agent : analyst markdown : true # Enable markdown formatting output_file : analysis.md
​ Benefits of Markdown Output
Consistent Formatting : Ensures all outputs follow proper markdown conventions
Better Readability : Structured content with headers, lists, and emphasis
Documentation Ready : Output can be directly used in documentation systems
Cross-Platform Compatibility : Markdown is universally supported
​ Task Dependencies and Context
research_task = Task( description = "Research the latest developments in AI" , expected_output = "A list of recent AI developments" , agent = researcher ) analysis_task = Task( description = "Analyze the research findings and identify key trends" , expected_output = "Analysis report of AI trends" , agent = analyst, context = [research_task] # This task will wait for research_task to complete )
​ Task Guardrails
Function-based guardrails : Python functions with custom validation logic, giving you complete control over the validation process and ensuring reliable, deterministic results.
LLM-based guardrails : String descriptions that use the agent’s LLM to validate outputs based on natural language criteria. These are ideal for complex or subjective validation requirements.
​ Function-Based Guardrails
from typing import Tuple, Union, Dict, Any from crewai import TaskOutput def validate_blog_content ( result : TaskOutput) -> Tuple[ bool , Any]: """Validate blog content meets requirements.""" try : # Check word count word_count = len (result.raw.split()) if word_count > 200 : return ( False , "Blog content exceeds 200 words" ) # Additional validation logic here return ( True , result.raw.strip()) except Exception as e: return ( False , "Unexpected error during validation" ) blog_task = Task( description = "Write a blog post about AI" , expected_output = "A blog post under 200 words" , agent = blog_agent, guardrail = validate_blog_content # Add the guardrail function )
​ LLM-Based Guardrails (String Descriptions)
The task must have an agent assigned (the guardrail uses the agent’s LLM)
Provide a clear, descriptive string explaining the validation criteria
from crewai import Task # Single LLM-based guardrail blog_task = Task( description = "Write a blog post about AI" , expected_output = "A blog post under 200 words" , agent = blog_agent, guardrail = "The blog post must be under 200 words and contain no technical jargon" )
Complex validation logic that’s difficult to express programmatically
Subjective criteria like tone, style, or quality assessments
Natural language requirements that are easier to describe than code
Analyze the task output against your description
Return (True, output) if the output complies with the criteria
Return (False, feedback) with specific feedback if validation fails
research_task = Task( description = "Research the latest developments in quantum computing" , expected_output = "A comprehensive research report" , agent = researcher_agent, guardrail = """ The research report must: - Be at least 1000 words long - Include at least 5 credible sources - Cover both technical and practical applications - Be written in a professional, academic tone - Avoid speculation or unverified claims """ )
​ Multiple Guardrails
A list of guardrail functions or string descriptions
A single guardrail function or string (same as guardrail )
from typing import Tuple, Any from crewai import TaskOutput, Task def validate_word_count ( result : TaskOutput) -> Tuple[ bool , Any]: """Validate word count is within limits.""" word_count = len (result.raw.split()) if word_count < 100 : return ( False , f "Content too short: { word_count } words. Need at least 100 words." ) if word_count > 500 : return ( False , f "Content too long: { word_count } words. Maximum is 500 words." ) return ( True , result.raw) def validate_no_profanity ( result : TaskOutput) -> Tuple[ bool , Any]: """Check for inappropriate language.""" profanity_words = [ "badword1" , "badword2" ] # Example list content_lower = result.raw.lower() for word in profanity_words: if word in content_lower: return ( False , f "Inappropriate language detected: { word } " ) return ( True , result.raw) def format_output ( result : TaskOutput) -> Tuple[ bool , Any]: """Format and clean the output.""" formatted = result.raw.strip() # Capitalize first letter formatted = formatted[ 0 ].upper() + formatted[ 1 :] if formatted else formatted return ( True , formatted) # Apply multiple guardrails sequentially blog_task = Task( description = "Write a blog post about AI" , expected_output = "A well-formatted blog post between 100-500 words" , agent = blog_agent, guardrails = [ validate_word_count, # First: validate length validate_no_profanity, # Second: check content format_output # Third: format the result ], guardrail_max_retries = 3 )
validate_word_count checks the word count
validate_no_profanity checks for inappropriate language (using the output from step 1)
format_output formats the final result (using the output from step 2)
from typing import Tuple, Any from crewai import TaskOutput, Task def validate_word_count ( result : TaskOutput) -> Tuple[ bool , Any]: """Validate word count is within limits.""" word_count = len (result.raw.split()) if word_count < 100 : return ( False , f "Content too short: { word_count } words. Need at least 100 words." ) if word_count > 500 : return ( False , f "Content too long: { word_count } words. Maximum is 500 words." ) return ( True , result.raw) # Mix function-based and LLM-based guardrails blog_task = Task( description = "Write a blog post about AI" , expected_output = "A well-formatted blog post between 100-500 words" , agent = blog_agent, guardrails = [ validate_word_count, # Function-based: precise word count check "The content must be engaging and suitable for a general audience" , # LLM-based: subjective quality check "The writing style should be clear, concise, and free of technical jargon" # LLM-based: style validation ], guardrail_max_retries = 3 )
​ Guardrail Function Requirements
Function Signature : Must accept exactly one parameter (the task output) Should return a tuple of (bool, Any) Type hints are recommended but optional
Return Values : On success: it returns a tuple of (bool, Any) . For example: (True, validated_result) On Failure: it returns a tuple of (bool, str) . For example: (False, "Error message explain the failure")
​ Error Handling Best Practices
Structured Error Responses :
from crewai import TaskOutput, LLMGuardrail def validate_with_context ( result : TaskOutput) -> Tuple[ bool , Any]: try : # Main validation logic validated_data = perform_validation(result) return ( True , validated_data) except ValidationError as e: return ( False , f "VALIDATION_ERROR: { str (e) } " ) except Exception as e: return ( False , str (e))
Error Categories : Use specific error codes Include relevant context Provide actionable feedback
Validation Chain :
from typing import Any, Dict, List, Tuple, Union from crewai import TaskOutput def complex_validation ( result : TaskOutput) -> Tuple[ bool , Any]: """Chain multiple validation steps.""" # Step 1: Basic validation if not result: return ( False , "Empty result" ) # Step 2: Content validation try : validated = validate_content(result) if not validated: return ( False , "Invalid content" ) # Step 3: Format validation formatted = format_output(validated) return ( True , formatted) except Exception as e: return ( False , str (e))
​ Handling Guardrail Results
The error is sent back to the agent
The agent attempts to fix the issue
The process repeats until: The guardrail returns (True, result) Maximum retries are reached ( guardrail_max_retries )
from typing import Optional, Tuple, Union from crewai import TaskOutput, Task def validate_json_output ( result : TaskOutput) -> Tuple[ bool , Any]: """Validate and parse JSON output.""" try : # Try to parse as JSON data = json.loads(result) return ( True , data) except json.JSONDecodeError as e: return ( False , "Invalid JSON format" ) task = Task( description = "Generate a JSON report" , expected_output = "A valid JSON object" , agent = analyst, guardrail = validate_json_output, guardrail_max_retries = 3 # Limit retry attempts )
​ Getting Structured Consistent Outputs from Tasks
​ Using output_pydantic
import json from crewai import Agent, Crew, Process, Task from pydantic import BaseModel class Blog ( BaseModel ): title: str content: str blog_agent = Agent( role = "Blog Content Generator Agent" , goal = "Generate a blog title and content" , backstory = """You are an expert content creator, skilled in crafting engaging and informative blog posts.""" , verbose = False , allow_delegation = False , llm = "gpt-4o" , ) task1 = Task( description = """Create a blog title and content on a given topic. Make sure the content is under 200 words.""" , expected_output = "A compelling blog title and well-written content." , agent = blog_agent, output_pydantic = Blog, ) # Instantiate your crew with a sequential process crew = Crew( agents = [blog_agent], tasks = [task1], verbose = True , process = Process.sequential, ) result = crew.kickoff() # Option 1: Accessing Properties Using Dictionary-Style Indexing print ( "Accessing Properties - Option 1" ) title = result[ "title" ] content = result[ "content" ] print ( "Title:" , title) print ( "Content:" , content) # Option 2: Accessing Properties Directly from the Pydantic Model print ( "Accessing Properties - Option 2" ) title = result.pydantic.title content = result.pydantic.content print ( "Title:" , title) print ( "Content:" , content) # Option 3: Accessing Properties Using the to_dict() Method print ( "Accessing Properties - Option 3" ) output_dict = result.to_dict() title = output_dict[ "title" ] content = output_dict[ "content" ] print ( "Title:" , title) print ( "Content:" , content) # Option 4: Printing the Entire Blog Object print ( "Accessing Properties - Option 5" ) print ( "Blog:" , result)
A Pydantic model Blog is defined with title and content fields.
The task task1 uses the output_pydantic property to specify that its output should conform to the Blog model.
After executing the crew, you can access the structured output in multiple ways as shown.
​ Explanation of Accessing the Output
Dictionary-Style Indexing: You can directly access the fields using result[“field_name”]. This works because the CrewOutput class implements the getitem method.
Directly from Pydantic Model: Access the attributes directly from the result.pydantic object.
Using to_dict() Method: Convert the output to a dictionary and access the fields.
Printing the Entire Object: Simply print the result object to see the structured output.
​ Using output_json
import json from crewai import Agent, Crew, Process, Task from pydantic import BaseModel # Define the Pydantic model for the blog class Blog ( BaseModel ): title: str content: str # Define the agent blog_agent = Agent( role = "Blog Content Generator Agent" , goal = "Generate a blog title and content" , backstory = """You are an expert content creator, skilled in crafting engaging and informative blog posts.""" , verbose = False , allow_delegation = False , llm = "gpt-4o" , ) # Define the task with output_json set to the Blog model task1 = Task( description = """Create a blog title and content on a given topic. Make sure the content is under 200 words.""" , expected_output = "A JSON object with 'title' and 'content' fields." , agent = blog_agent, output_json = Blog, ) # Instantiate the crew with a sequential process crew = Crew( agents = [blog_agent], tasks = [task1], verbose = True , process = Process.sequential, ) # Kickoff the crew to execute the task result = crew.kickoff() # Option 1: Accessing Properties Using Dictionary-Style Indexing print ( "Accessing Properties - Option 1" ) title = result[ "title" ] content = result[ "content" ] print ( "Title:" , title) print ( "Content:" , content) # Option 2: Printing the Entire Blog Object print ( "Accessing Properties - Option 2" ) print ( "Blog:" , result)
A Pydantic model Blog is defined with title and content fields, which is used to specify the structure of the JSON output.
The task task1 uses the output_json property to indicate that it expects a JSON output conforming to the Blog model.
After executing the crew, you can access the structured JSON output in two ways as shown.
​ Explanation of Accessing the Output
Accessing Properties Using Dictionary-Style Indexing: You can access the fields directly using result[“field_name”]. This is possible because the CrewOutput class implements the getitem method, allowing you to treat the output like a dictionary. In this option, we’re retrieving the title and content from the result.
Printing the Entire Blog Object: By printing result, you get the string representation of the CrewOutput object. Since the str method is implemented to return the JSON output, this will display the entire output as a formatted string representing the Blog object.
​ Integrating Tools with Tasks
​ Creating a Task with Tools
import os os.environ[ "OPENAI_API_KEY" ] = "Your Key" os.environ[ "SERPER_API_KEY" ] = "Your Key" # serper.dev API key from crewai import Agent, Task, Crew from crewai_tools import SerperDevTool research_agent = Agent( role = 'Researcher' , goal = 'Find and summarize the latest AI news' , backstory = """You're a researcher at a large company. You're responsible for analyzing data and providing insights to the business.""" , verbose = True ) # to perform a semantic search for a specified query from a text's content across the internet search_tool = SerperDevTool() task = Task( description = 'Find and summarize the latest AI news' , expected_output = 'A bullet list summary of the top 5 most important AI news' , agent = research_agent, tools = [search_tool] ) crew = Crew( agents = [research_agent], tasks = [task], verbose = True ) result = crew.kickoff() print (result)
​ Referring to Other Tasks
# ... research_ai_task = Task( description = "Research the latest developments in AI" , expected_output = "A list of recent AI developments" , async_execution = True , agent = research_agent, tools = [search_tool] ) research_ops_task = Task( description = "Research the latest developments in AI Ops" , expected_output = "A list of recent AI Ops developments" , async_execution = True , agent = research_agent, tools = [search_tool] ) write_blog_task = Task( description = "Write a full blog post about the importance of AI and its latest news" , expected_output = "Full blog post that is 4 paragraphs long" , agent = writer_agent, context = [research_ai_task, research_ops_task] ) #...
​ Asynchronous Execution
#... list_ideas = Task( description = "List of 5 interesting ideas to explore for an article about AI." , expected_output = "Bullet point list of 5 ideas for an article." , agent = researcher, async_execution = True # Will be executed asynchronously ) list_important_history = Task( description = "Research the history of AI and give me the 5 most important events." , expected_output = "Bullet point list of 5 important events." , agent = researcher, async_execution = True # Will be executed asynchronously ) write_article = Task( description = "Write an article about AI, its history, and interesting ideas." , expected_output = "A 4 paragraph article about AI." , agent = writer, context = [list_ideas, list_important_history] # Will wait for the output of the two tasks to be completed ) #...
​ Callback Mechanism
# ... def callback_function ( output : TaskOutput): # Do something after the task is completed # Example: Send an email to the manager print ( f """ Task completed! Task: { output.description } Output: { output.raw } """ ) research_task = Task( description = 'Find and summarize the latest AI news' , expected_output = 'A bullet list summary of the top 5 most important AI news' , agent = research_agent, tools = [search_tool], callback = callback_function ) #...
​ Accessing a Specific Task Output
# ... task1 = Task( description = 'Find and summarize the latest AI news' , expected_output = 'A bullet list summary of the top 5 most important AI news' , agent = research_agent, tools = [search_tool] ) #... crew = Crew( agents = [research_agent], tasks = [task1, task2, task3], verbose = True ) result = crew.kickoff() # Returns a TaskOutput object with the description and results of the task print ( f """ Task completed! Task: { task1.output.description } Output: { task1.output.raw } """ )
​ Tool Override Mechanism
​ Error Handling and Validation Mechanisms
Ensuring only one output type is set per task to maintain clear output expectations.
Preventing the manual assignment of the id attribute to uphold the integrity of the unique identifier system.
​ Creating Directories when Saving Files
​ Default Behavior
# Default behavior - directories are created automatically report_task = Task( description = 'Generate a comprehensive market analysis report' , expected_output = 'A detailed market analysis with charts and insights' , agent = analyst_agent, output_file = 'reports/2025/market_analysis.md' , # Creates 'reports/2025/' if it doesn't exist markdown = True )
​ Disabling Directory Creation
# Strict mode - directory must already exist strict_output_task = Task( description = 'Save critical data that requires existing infrastructure' , expected_output = 'Data saved to pre-configured location' , agent = data_agent, output_file = 'secure/vault/critical_data.json' , create_directory = False # Will raise RuntimeError if 'secure/vault/' doesn't exist )
​ YAML Configuration
analysis_task : description : > Generate quarterly financial analysis expected_output : > A comprehensive financial report with quarterly insights agent : financial_analyst output_file : reports/quarterly/q4_2024_analysis.pdf create_directory : true # Automatically create 'reports/quarterly/' directory audit_task : description : > Perform compliance audit and save to existing audit directory expected_output : > A compliance audit report agent : auditor output_file : audit/compliance_report.md create_directory : false # Directory must already exist
​ Use Cases
Development and prototyping environments
Dynamic report generation with date-based folders
Automated workflows where directory structure may vary
Multi-tenant applications with user-specific folders
Production environments with strict file system controls
Security-sensitive applications where directories must be pre-configured
Systems with specific permission requirements
Compliance environments where directory creation is audited
​ Error Handling
try : result = crew.kickoff() except RuntimeError as e: # Handle missing directory error print ( f "Directory creation failed: { e } " ) # Create directory manually or use fallback location
​ Conclusion
Was this page helpful?
Yes
No
