# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/concepts/skills
- Raw SHA-256: `0d1db199f349112cc0b7120eecee6b56cb914622a79afed1a26c77f7a6dc5b9a`

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
Navigation Core Concepts Skills
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
Skills
Copy page Copy page
Filesystem-based skill packages that inject domain expertise and instructions into agent prompts.
Copy page Copy page
​ Overview
Skills inject instructions and context into the agent’s prompt. They tell the agent how to think about a problem.
Tools give the agent callable functions to take action (search, read files, call APIs).
​ Quick Start
​ 1. Create a Skill with the CLI
crewai create skill code-review
skills/ └── code-review/ ├── SKILL.md # Required — instructions (pre-filled template) ├── references/ # Optional — reference docs ├── scripts/ # Optional — executable scripts └── assets/ # Optional — static files
​ 2. Write Your SKILL.md
--- name : code-review description : Guidelines for conducting thorough code reviews with focus on security and performance. metadata : author : your-team version : "1.0" --- ## Code Review Guidelines When reviewing code, follow this checklist: 1. **Security** : Check for injection vulnerabilities, auth bypasses, and data exposure 2. **Performance** : Look for N+1 queries, unnecessary allocations, and blocking calls 3. **Readability** : Ensure clear naming, appropriate comments, and consistent style 4. **Testing** : Verify adequate test coverage for new functionality ### Severity Levels - **Critical** : Security vulnerabilities, data loss risks → block merge - **Major** : Performance issues, logic errors → request changes - **Minor** : Style issues, naming suggestions → approve with comments
​ 3. Attach to an Agent
from crewai import Agent from crewai_tools import GithubSearchTool, FileReadTool reviewer = Agent( role = "Senior Code Reviewer" , goal = "Review pull requests for quality and security issues" , backstory = "Staff engineer with expertise in secure coding practices." , skills = [ "./skills" ], # Discovers review skills tools = [GithubSearchTool(), FileReadTool()], # Lets agent read code )
​ Skills + Tools: Working Together
​ Pattern 1: Skills Only (Domain Expertise, No Actions Needed)
agent = Agent( role = "Technical Writer" , goal = "Write clear API documentation" , backstory = "Expert technical writer" , skills = [ "./skills/api-docs-style" ], # Writing guidelines and templates # No tools needed — agent writes based on provided context )
​ Pattern 2: Tools Only (Actions, No Special Expertise)
from crewai_tools import SerperDevTool, ScrapeWebsiteTool agent = Agent( role = "Web Researcher" , goal = "Find information about a topic" , backstory = "Skilled at finding information online" , tools = [SerperDevTool(), ScrapeWebsiteTool()], # Can search and scrape # No skills needed — general research doesn't need special guidelines )
​ Pattern 3: Skills + Tools (Expertise AND Actions)
from crewai_tools import SerperDevTool, FileReadTool, CodeInterpreterTool analyst = Agent( role = "Security Analyst" , goal = "Audit infrastructure for vulnerabilities" , backstory = "Expert in cloud security and compliance" , skills = [ "./skills/security-audit" ], # Audit methodology and checklists tools = [ SerperDevTool(), # Research known vulnerabilities FileReadTool(), # Read config files CodeInterpreterTool(), # Run analysis scripts ], )
​ Pattern 4: Skills + MCPs
agent = Agent( role = "Data Analyst" , goal = "Analyze customer data and generate reports" , backstory = "Expert data analyst with strong statistical background" , skills = [ "./skills/data-analysis" ], # Analysis methodology mcps = [ "https://data-warehouse.example.com/sse" ], # Remote data access )
​ Pattern 5: Skills + Apps
agent = Agent( role = "Customer Support Agent" , goal = "Respond to customer inquiries professionally" , backstory = "Experienced support representative" , skills = [ "./skills/support-playbook" ], # Response templates and escalation rules apps = [ "gmail" , "zendesk" ], # Can send emails and update tickets )
​ Creating, Publishing, and Installing Skills
​ Create
crewai create skill my-skill
​ Publish
cd skills/my-skill crewai skill publish
​ Install
crewai skill install @acme/code-review
agent = Agent( role = "Senior Code Reviewer" , goal = "Review pull requests for quality and security issues" , backstory = "Staff engineer with expertise in secure coding practices." , skills = [ "@acme/code-review" ], # registry ref, resolved locally )
​ Pin a Version
agent = Agent( role = "Senior Code Reviewer" , goal = "Review pull requests for quality and security issues" , backstory = "Staff engineer with expertise in secure coding practices." , skills = [ "@acme/code-review@1.2.0" ], # pinned; a leading "v" also works )
​ List
crewai skill list
​ Crew-Level Skills
from crewai import Crew crew = Crew( agents = [researcher, writer, reviewer], tasks = [research_task, write_task, review_task], skills = [ "./skills" ], # All agents get these skills )
​ SKILL.md Format
--- name : my-skill description : Short description of what this skill does and when to use it. license : Apache-2.0 # optional compatibility : crewai>=0.1.0 # optional metadata : # optional author : your-name version : "1.0" allowed-tools : web-search file-read # optional, experimental --- Instructions for the agent go here. This markdown body is injected into the agent's prompt when the skill is activated.
​ Frontmatter Fields
​ Directory Structure
my-skill/ ├── SKILL.md # Required — frontmatter + instructions ├── scripts/ # Optional — executable scripts ├── references/ # Optional — reference documents └── assets/ # Optional — static files (configs, data)
​ Pre-loading Skills
from pathlib import Path from crewai.skills import discover_skills, activate_skill # Discover all skills in a directory skills = discover_skills(Path( "./skills" )) # Activate them (loads full SKILL.md body) activated = [activate_skill(s) for s in skills] # Pass to an agent agent = Agent( role = "Researcher" , goal = "Find relevant information" , backstory = "An expert researcher." , skills = activated, )
​ How Skills Are Loaded
​ Skills vs Knowledge
​ Common Questions
Do I need to set skills AND tools?
Skills alone : When the agent needs expertise but no external actions (e.g., writing with style guidelines)
Tools alone : When the agent needs actions but no special methodology (e.g., simple web search)
Both : When the agent needs expertise AND actions (e.g., security audit with specific checklists AND ability to scan code)
Do skills automatically provide tools?
What happens if I set the same skill on both an agent and its crew?
How large can a SKILL.md body be?
Was this page helpful?
Yes
No
