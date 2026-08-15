# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/files
- Raw SHA-256: `732ea069de5f9f01421d9c8238f02507d54a9ee35a900517ae4b1783f383c388`

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
Navigation Core Concepts Files
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
On this page
Overview
File Types
File Sources From Path From URL From Bytes
Using Files With Crews With Tasks With Flows With Standalone Agents
File Precedence
Provider Support
How Files Are Sent Provider Transmission Methods
File Handling Modes
Provider Constraints OpenAI Anthropic Google Gemini AWS Bedrock
Referencing Files in Prompts
Files
Copy page Copy page
Pass images, PDFs, audio, video, and text files to your agents for multimodal processing.
Copy page Copy page
​ Overview
uv add 'crewai[file-processing]'
​ File Types
from crewai_files import File, ImageFile, PDFFile, AudioFile, VideoFile, TextFile image = ImageFile( source = "screenshot.png" ) pdf = PDFFile( source = "report.pdf" ) audio = AudioFile( source = "meeting.mp3" ) video = VideoFile( source = "demo.mp4" ) text = TextFile( source = "data.csv" ) file = File( source = "document.pdf" )
​ File Sources
​ From Path
from crewai_files import ImageFile image = ImageFile( source = "./images/chart.png" )
​ From URL
from crewai_files import ImageFile image = ImageFile( source = "https://example.com/image.png" )
​ From Bytes
from crewai_files import ImageFile, FileBytes image_bytes = download_image_from_api() image = ImageFile( source = FileBytes( data = image_bytes, filename = "downloaded.png" )) image = ImageFile( source = image_bytes)
​ Using Files
​ With Crews
from crewai import Crew from crewai_files import ImageFile crew = Crew( agents = [analyst], tasks = [analysis_task]) result = crew.kickoff( inputs = { "topic" : "Q4 Sales" }, input_files = { "chart" : ImageFile( source = "sales_chart.png" ), "report" : PDFFile( source = "quarterly_report.pdf" ), } )
​ With Tasks
from crewai import Task from crewai_files import ImageFile task = Task( description = "Analyze the sales chart and identify trends in {chart} " , expected_output = "A summary of key trends" , input_files = { "chart" : ImageFile( source = "sales_chart.png" ), } )
​ With Flows
from crewai.flow.flow import Flow, start from crewai_files import ImageFile class AnalysisFlow ( Flow ): @start () def analyze ( self ): return self .analysis_crew.kickoff() flow = AnalysisFlow() result = flow.kickoff( input_files = { "image" : ImageFile( source = "data.png" )} )
​ With Standalone Agents
from crewai import Agent from crewai_files import ImageFile agent = Agent( role = "Image Analyst" , goal = "Analyze images" , backstory = "Expert at visual analysis" , llm = "gpt-4o" , ) result = agent.kickoff( messages = "What's in this image?" , input_files = { "photo" : ImageFile( source = "photo.jpg" )}, )
​ File Precedence
Flow input_files < Crew input_files < Task input_files
​ Provider Support
​ How Files Are Sent
​ Provider Transmission Methods
​ File Handling Modes
from crewai_files import ImageFile, PDFFile image = ImageFile( source = "large.png" , mode = "strict" ) image = ImageFile( source = "large.png" , mode = "auto" ) image = ImageFile( source = "large.png" , mode = "warn" ) pdf = PDFFile( source = "large.pdf" , mode = "chunk" )
​ Provider Constraints
​ OpenAI
Images : Max 20 MB, up to 10 images per request
PDFs : Max 32 MB, up to 100 pages
Audio : Max 25 MB, up to 25 minutes
​ Anthropic
Images : Max 5 MB, max 8000x8000 pixels, up to 100 images
PDFs : Max 32 MB, up to 100 pages
​ Google Gemini
Images : Max 100 MB
PDFs : Max 50 MB
Audio : Max 100 MB, up to 9.5 hours
Video : Max 2 GB, up to 1 hour
​ AWS Bedrock
Images : Max 4.5 MB, max 8000x8000 pixels
PDFs : Max 3.75 MB, up to 100 pages
​ Referencing Files in Prompts
task = Task( description = """ Analyze the provided materials: 1. Review the chart in {sales_chart} 2. Cross-reference with data in {quarterly_report} 3. Summarize key findings """ , expected_output = "Analysis summary with key insights" , input_files = { "sales_chart" : ImageFile( source = "chart.png" ), "quarterly_report" : PDFFile( source = "report.pdf" ), } )
Was this page helpful?
Yes
No
