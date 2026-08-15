# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/planning
- Raw SHA-256: `fb343f2eadcba557d724582815f0fa1b6465fb41ae960e278fbe61a4165ff760`

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
Navigation Core Concepts Planning
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
Planning
Copy page Copy page
Learn how to add planning to your CrewAI Crew and improve their performance.
Copy page Copy page
​ Overview
​ Using the Planning Feature
Code
from crewai import Crew, Agent, Task, Process # Assemble your crew with planning capabilities my_crew = Crew( agents = self .agents, tasks = self .tasks, process = Process.sequential, planning = True , )
​ Planning LLM
Code
Result
from crewai import Crew, Agent, Task, Process # Assemble your crew with planning capabilities and custom LLM my_crew = Crew( agents = self .agents, tasks = self .tasks, process = Process.sequential, planning = True , planning_llm = "gpt-4o" ) # Run the crew my_crew.kickoff()
[ 2024-07-15 16:49:11 ][ INFO ]: Planning the crew execution **Step-by-Step Plan for Task Execution** **Task Number 1: Conduct a thorough research about AI LLMs** **Agent:** AI LLMs Senior Data Researcher **Agent Goal:** Uncover cutting-edge developments in AI LLMs **Task Expected Output:** A list with 10 bullet points of the most relevant information about AI LLMs **Task Tools:** None specified **Agent Tools:** None specified **Step-by-Step Plan:** 1. **Define Research Scope:** - Determine the specific areas of AI LLMs to focus on, such as advancements in architecture, use cases, ethical considerations, and performance metrics. 2. **Identify Reliable Sources:** - List reputable sources for AI research, including academic journals, industry reports, conferences (e.g., NeurIPS, ACL), AI research labs (e.g., OpenAI, Google AI), and online databases (e.g., IEEE Xplore, arXiv). 3. **Collect Data:** - Search for the latest papers, articles, and reports published in 2024 and early 2025. - Use keywords like "Large Language Models 2025", "AI LLM advancements", "AI ethics 2025", etc. 4. **Analyze Findings:** - Read and summarize the key points from each source. - Highlight new techniques, models, and applications introduced in the past year. 5. **Organize Information:** - Categorize the information into relevant topics (e.g., new architectures, ethical implications, real-world applications). - Ensure each bullet point is concise but informative. 6. **Create the List:** - Compile the 10 most relevant pieces of information into a bullet point list. - Review the list to ensure clarity and relevance. **Expected Output:** A list with 10 bullet points of the most relevant information about AI LLMs. --- **Task Number 2: Review the context you got and expand each topic into a full section for a report** **Agent:** AI LLMs Reporting Analyst **Agent Goal:** Create detailed reports based on AI LLMs data analysis and research findings **Task Expected Output:** A fully fledged report with the main topics, each with a full section of information. Formatted as markdown without '```' **Task Tools:** None specified **Agent Tools:** None specified **Step-by-Step Plan:** 1. **Review the Bullet Points:** - Carefully read through the list of 10 bullet points provided by the AI LLMs Senior Data Researcher. 2. **Outline the Report:** - Create an outline with each bullet point as a main section heading. - Plan sub-sections under each main heading to cover different aspects of the topic. 3. **Research Further Details:** - For each bullet point, conduct additional research if necessary to gather more detailed information. - Look for case studies, examples, and statistical data to support each section. 4. **Write Detailed Sections:** - Expand each bullet point into a comprehensive section. - Ensure each section includes an introduction, detailed explanation, examples, and a conclusion. - Use markdown formatting for headings, subheadings, lists, and emphasis. 5. **Review and Edit:** - Proofread the report for clarity, coherence, and correctness. - Make sure the report flows logically from one section to the next. - Format the report according to markdown standards. 6. **Finalize the Report:** - Ensure the report is complete with all sections expanded and detailed. - Double-check formatting and make any necessary adjustments. **Expected Output:** A fully fledged report with the main topics, each with a full section of information. Formatted as markdown without '```'.
Was this page helpful?
Yes
No
