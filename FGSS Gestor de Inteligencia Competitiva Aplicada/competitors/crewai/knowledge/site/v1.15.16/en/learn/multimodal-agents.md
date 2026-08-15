# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/multimodal-agents
- Raw SHA-256: `68b0dba2c9344e9ab5569250453af42c521822d39bd012727a5c92b857f9e04e`

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
Navigation Learn Using Multimodal Agents
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
Using Multimodal Agents
Copy page Copy page
Learn how to enable and use multimodal capabilities in your agents for processing images and other non-text content within the CrewAI framework.
Copy page Copy page
​ Using Multimodal Agents
​ Enabling Multimodal Capabilities
from crewai import Agent agent = Agent( role = "Image Analyst" , goal = "Analyze and extract insights from images" , backstory = "An expert in visual content interpretation with years of experience in image analysis" , multimodal = True # This enables multimodal capabilities )
​ Working with Images
from crewai import Agent, Task, Crew # Create a multimodal agent image_analyst = Agent( role = "Product Analyst" , goal = "Analyze product images and provide detailed descriptions" , backstory = "Expert in visual product analysis with deep knowledge of design and features" , multimodal = True ) # Create a task for image analysis task = Task( description = "Analyze the product image at https://example.com/product.jpg and provide a detailed description" , expected_output = "A detailed description of the product image" , agent = image_analyst ) # Create and run the crew crew = Crew( agents = [image_analyst], tasks = [task] ) result = crew.kickoff()
​ Advanced Usage with Context
from crewai import Agent, Task, Crew # Create a multimodal agent for detailed analysis expert_analyst = Agent( role = "Visual Quality Inspector" , goal = "Perform detailed quality analysis of product images" , backstory = "Senior quality control expert with expertise in visual inspection" , multimodal = True # AddImageTool is automatically included ) # Create a task with specific analysis requirements inspection_task = Task( description = """ Analyze the product image at https://example.com/product.jpg with focus on: 1. Quality of materials 2. Manufacturing defects 3. Compliance with standards Provide a detailed report highlighting any issues found. """ , expected_output = "A detailed report highlighting any issues found" , agent = expert_analyst ) # Create and run the crew crew = Crew( agents = [expert_analyst], tasks = [inspection_task] ) result = crew.kickoff()
​ Tool Details
class AddImageToolSchema : image_url: str # Required: The URL or path of the image to process action: Optional[ str ] = None # Optional: Additional context or specific questions about the image
Access images via URLs or local file paths
Process image content with optional context or specific questions
Provide analysis and insights based on the visual information and task requirements
​ Best Practices
Image Access Ensure your images are accessible via URLs that the agent can reach For local images, consider hosting them temporarily or using absolute file paths Verify that image URLs are valid and accessible before running tasks
Task Description Be specific about what aspects of the image you want the agent to analyze Include clear questions or requirements in the task description Consider using the optional action parameter for focused analysis
Resource Management Image processing may require more computational resources than text-only tasks Some language models may require base64 encoding for image data Consider batch processing for multiple images to optimize performance
Environment Setup Verify that your environment has the necessary dependencies for image processing Ensure your language model supports multimodal capabilities Test with small images first to validate your setup
Error Handling Implement proper error handling for image loading failures Have fallback strategies for when image processing fails Monitor and log image processing operations for debugging
Was this page helpful?
Yes
No
