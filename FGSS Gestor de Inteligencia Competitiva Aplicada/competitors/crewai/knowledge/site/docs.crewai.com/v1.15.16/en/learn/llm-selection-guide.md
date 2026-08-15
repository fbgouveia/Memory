# Documentation Index

- Source: https://docs.crewai.com/v1.15.16/en/learn/llm-selection-guide
- Raw SHA-256: `2e2177eab0b65c040d7d6a9f743c7e2331f423f9b8c82fbfcd13082f487eb64e`

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
Navigation Learn Strategic LLM Selection Guide
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
Strategic LLM Selection Guide
Copy page Copy page
Strategic framework for choosing the right LLM for your CrewAI AI agents and writing effective task and agent definitions
Copy page Copy page
​ The CrewAI Approach to LLM Selection
​ Quick Decision Framework
Analyze Your Tasks
Map Model Capabilities
Consider Constraints
Test and Iterate
​ Core Selection Framework
​ a. Task-First Thinking
Reasoning Complexity
Output Requirements
Context Needs
Simple Tasks represent the majority of everyday AI work and include basic instruction following, straightforward data processing, and simple formatting operations. These tasks typically have clear inputs and outputs with minimal ambiguity. The cognitive load is low, and the model primarily needs to follow explicit instructions rather than engage in complex reasoning.
Complex Tasks require multi-step reasoning, strategic thinking, and the ability to handle ambiguous or incomplete information. These might involve analyzing multiple data sources, developing comprehensive strategies, or solving problems that require breaking down into smaller components. The model needs to maintain context across multiple reasoning steps and often must make inferences that aren’t explicitly stated.
Creative Tasks demand a different type of cognitive capability focused on generating novel, engaging, and contextually appropriate content. This includes storytelling, marketing copy creation, and creative problem-solving. The model needs to understand nuance, tone, and audience while producing content that feels authentic and engaging rather than formulaic.
Structured Data tasks require precision and consistency in format adherence. When working with JSON, XML, or database formats, the model must reliably produce syntactically correct output that can be programmatically processed. These tasks often have strict validation requirements and little tolerance for format errors, making reliability more important than creativity.
Creative Content outputs demand a balance of technical competence and creative flair. The model needs to understand audience, tone, and brand voice while producing content that engages readers and achieves specific communication goals. Quality here is often subjective and requires models that can adapt their writing style to different contexts and purposes.
Technical Content sits between structured data and creative content, requiring both precision and clarity. Documentation, code generation, and technical analysis need to be accurate and comprehensive while remaining accessible to the intended audience. The model must understand complex technical concepts and communicate them effectively.
Short Context scenarios involve focused, immediate tasks where the model needs to process limited information quickly. These are often transactional interactions where speed and efficiency matter more than deep understanding. The model doesn’t need to maintain extensive conversation history or process large documents.
Long Context requirements emerge when working with substantial documents, extended conversations, or complex multi-part tasks. The model needs to maintain coherence across thousands of tokens while referencing earlier information accurately. This capability becomes crucial for document analysis, comprehensive research, and sophisticated dialogue systems.
Very Long Context scenarios push the boundaries of what’s currently possible, involving massive document processing, extensive research synthesis, or complex multi-session interactions. These use cases require models specifically designed for extended context handling and often involve trade-offs between context length and processing speed.
​ b. Model Capability Mapping
Reasoning Models
General Purpose Models
Fast & Efficient Models
Creative Models
Open Source Models
​ Strategic Configuration Patterns
​ a. Multi-Model Approach
from crewai import Agent, Task, Crew, LLM # High-capability reasoning model for strategic planning manager_llm = LLM( model = "gemini-2.5-flash-preview-05-20" , temperature = 0.1 ) # Creative model for content generation content_llm = LLM( model = "claude-3-5-sonnet-20241022" , temperature = 0.7 ) # Efficient model for data processing processing_llm = LLM( model = "gpt-4o-mini" , temperature = 0 ) research_manager = Agent( role = "Research Strategy Manager" , goal = "Develop comprehensive research strategies and coordinate team efforts" , backstory = "Expert research strategist with deep analytical capabilities" , llm = manager_llm, # High-capability model for complex reasoning verbose = True ) content_writer = Agent( role = "Research Content Writer" , goal = "Transform research findings into compelling, well-structured reports" , backstory = "Skilled writer who excels at making complex topics accessible" , llm = content_llm, # Creative model for engaging content verbose = True ) data_processor = Agent( role = "Data Analysis Specialist" , goal = "Extract and organize key data points from research sources" , backstory = "Detail-oriented analyst focused on accuracy and efficiency" , llm = processing_llm, # Fast, cost-effective model for routine tasks verbose = True ) crew = Crew( agents = [research_manager, content_writer, data_processor], tasks = [ ... ], # Your specific tasks manager_llm = manager_llm, # Manager uses the reasoning model verbose = True )
​ b. Component-Specific Selection
Manager LLM
Function Calling LLM
Agent-Specific Overrides
​ Task Definition Framework
​ a. Focus on Clarity Over Complexity
Effective Task Descriptions
Expected Output Guidelines
​ b. Task Sequencing Strategy
Sequential Dependencies
Parallel Execution
​ Optimizing Agent Configuration for LLM Performance
​ a. Role-Driven LLM Selection
# ✅ Specific role - clear LLM requirements specific_agent = Agent( role = "SaaS Revenue Operations Analyst" , # Clear domain expertise needed goal = "Analyze recurring revenue metrics and identify growth opportunities" , backstory = "Specialist in SaaS business models with deep understanding of ARR, churn, and expansion revenue" , llm = LLM( model = "gpt-4o" ) # Reasoning model justified for complex analysis )
“Research Analyst” → Reasoning model (GPT-4o, Claude Sonnet) for complex analysis
“Content Editor” → Creative model (Claude, GPT-4o) for writing quality
“Data Processor” → Efficient model (GPT-4o-mini, Gemini Flash) for structured tasks
“API Coordinator” → Function-calling optimized model (GPT-4o, Claude) for tool usage
​ b. Backstory as Model Context Amplifier
# Context amplifies model effectiveness domain_expert = Agent( role = "B2B SaaS Marketing Strategist" , goal = "Develop comprehensive go-to-market strategies for enterprise software" , backstory = """ You have 10+ years of experience scaling B2B SaaS companies from Series A to IPO. You understand the nuances of enterprise sales cycles, the importance of product-market fit in different verticals, and how to balance growth metrics with unit economics. You've worked with companies like Salesforce, HubSpot, and emerging unicorns, giving you perspective on both established and disruptive go-to-market strategies. """ , llm = LLM( model = "claude-3-5-sonnet" , temperature = 0.3 ) # Balanced creativity with domain knowledge ) # This context enables Claude to perform like a domain expert # Without it, even it would produce generic marketing advice
Domain Experience : “10+ years in enterprise SaaS sales”
Specific Expertise : “Specializes in technical due diligence for Series B+ rounds”
Working Style : “Prefers data-driven decisions with clear documentation”
Quality Standards : “Insists on citing sources and showing analytical work”
​ c. Holistic Agent-LLM Optimization
# Example: Technical Documentation Agent tech_writer = Agent( role = "API Documentation Specialist" , # Specific role for clear LLM requirements goal = "Create comprehensive, developer-friendly API documentation" , backstory = """ You're a technical writer with 8+ years documenting REST APIs, GraphQL endpoints, and SDK integration guides. You've worked with developer tools companies and understand what developers need: clear examples, comprehensive error handling, and practical use cases. You prioritize accuracy and usability over marketing fluff. """ , llm = LLM( model = "claude-3-5-sonnet" , # Excellent for technical writing temperature = 0.1 # Low temperature for accuracy ), tools = [code_analyzer_tool, api_scanner_tool], verbose = True )
✅ Role Specificity : Clear domain and responsibilities
✅ LLM Match : Model strengths align with role requirements
✅ Backstory Depth : Provides domain context the LLM can leverage
✅ Tool Integration : Tools support the agent’s specialized function
✅ Parameter Tuning : Temperature and settings optimize for role needs
​ Practical Implementation Checklist
Audit Your Current Setup
Are all agents using the same LLM by default?
Which agents handle the most complex reasoning tasks?
Which agents primarily do data processing or formatting?
Are any agents heavily tool-dependent?
Implement Crew-Level Strategy
# Start with a reliable default for the crew default_crew_llm = LLM( model = "gpt-4o-mini" ) # Cost-effective baseline crew = Crew( agents = [ ... ], tasks = [ ... ], memory = True )
Optimize High-Impact Agents
# Manager or coordination agents manager_agent = Agent( role = "Project Manager" , llm = LLM( model = "gemini-2.5-flash-preview-05-20" ), # Premium for coordination # ... rest of config ) # Creative or customer-facing agents content_agent = Agent( role = "Content Creator" , llm = LLM( model = "claude-3-5-sonnet" ), # Best for writing # ... rest of config )
Validate with Enterprise Testing
Use CrewAI AMP platform to A/B test your model selections
Run multiple iterations with real inputs to measure consistency and performance
Compare cost vs. performance across your optimized setup
Share results with your team for collaborative decision-making
​ When to Use Different Model Types
Reasoning Models
Creative Models
Efficient Models
Open Source Models
​ Common CrewAI Model Selection Pitfalls
The 'One Model Fits All' Trap
# Strategic agent gets premium model manager = Agent( role = "Strategy Manager" , llm = LLM( model = "gpt-4o" )) # Processing agent gets efficient model processor = Agent( role = "Data Processor" , llm = LLM( model = "gpt-4o-mini" ))
Ignoring Crew-Level vs Agent-Level LLM Hierarchy
crew = Crew( agents = [agent1, agent2], tasks = [task1, task2], manager_llm = LLM( model = "gpt-4o" ), # For crew coordination process = Process.hierarchical # When using manager_llm ) # Agents inherit crew LLM unless specifically overridden agent1 = Agent( llm = LLM( model = "claude-3-5-sonnet" )) # Override for specific needs
Function Calling Model Mismatch
# For agents that use many tools tool_agent = Agent( role = "API Integration Specialist" , tools = [search_tool, api_tool, data_tool], llm = LLM( model = "gpt-4o" ), # Excellent function calling # OR llm = LLM( model = "claude-3-5-sonnet" ) # Also strong with tools )
Premature Optimization Without Testing
# Start with this crew = Crew( agents = [ ... ], tasks = [ ... ], llm = LLM( model = "gpt-4o-mini" )) # Test performance, then optimize specific agents as needed # Use Enterprise platform testing to validate improvements
Overlooking Context and Memory Limitations
​ Testing and Iteration Strategy
Start Simple
Measure What Matters
Iterate Based on Results
Consider Total Cost
​ Enterprise-Grade Model Validation
Multi-Model Comparison : Test multiple LLMs simultaneously across the same tasks and inputs. Compare performance between GPT-4o, Claude, Llama, Groq, Cerebras, and other leading models in parallel to identify the best fit for your specific use case.
Statistical Rigor : Configure multiple iterations with consistent inputs to measure reliability and performance variance. This helps identify models that not only perform well but do so consistently across runs.
Real-World Validation : Use your actual crew inputs and scenarios rather than synthetic benchmarks. The platform allows you to test with your specific industry context, company information, and real use cases for more accurate evaluation.
Comprehensive Analytics : Access detailed performance metrics, execution times, and cost analysis across all tested models. This enables data-driven decision making rather than relying on general model reputation or theoretical capabilities.
Team Collaboration : Share testing results and model performance data across your team, enabling collaborative decision-making and consistent model selection strategies across projects.
​ Key Principles Summary
Task-Driven Selection
Capability Matching
Strategic Consistency
Practical Testing
Iterative Improvement
Operational Balance
​ Current Model Landscape (June 2025)
​ Leading Models by Category
Reasoning & Planning
Coding & Technical
Speed & Efficiency
Balanced Performance
​ Selection Framework for Current Models
High-Performance Crews
Cost-Conscious Crews
Specialized Workflows
Enterprise & Privacy
​ Key Considerations for Model Selection
Performance Trends : The current landscape shows strong competition between reasoning-focused models (o3, Gemini 2.5 Pro) and balanced models (Claude 4, GPT-4.1). Specialized models like DeepSeek R1 offer excellent cost-performance ratios.
Speed vs. Intelligence Trade-offs : Models like Llama 4 Scout prioritize speed (2,600 tokens/s) while maintaining reasonable intelligence, whereas models like o3 maximize reasoning capability at the cost of speed and price.
Open Source Viability : The gap between open-source and proprietary models continues to narrow, with models like Llama 4 Maverick and DeepSeek V3 offering competitive performance at attractive price points. Fast inference providers particularly shine with open-source models, often delivering better speed-to-cost ratios than proprietary alternatives.
​ Practical Implementation Strategy
Start with Proven Models
Identify Specialized Needs
Implement Multi-Model Strategy
Monitor and Optimize
Was this page helpful?
Yes
No
