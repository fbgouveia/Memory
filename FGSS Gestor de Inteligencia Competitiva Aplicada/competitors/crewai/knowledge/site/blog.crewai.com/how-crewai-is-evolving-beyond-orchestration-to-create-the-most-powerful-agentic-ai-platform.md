# Home

- Source: https://blog.crewai.com/how-crewai-is-evolving-beyond-orchestration-to-create-the-most-powerful-agentic-ai-platform/
- Raw SHA-256: `d5d6a10c37c56a7d6b68e4fb7a443727c38e6c2fe1119a92b2ad347be347c838`

## Visible text

Home
Docs
Open Source
Enterprise
How CrewAI is evolving beyond orchestration to create the most powerful Agentic AI platform
João (Joe) Moura
Day 2 of CrewAI Launch Week 01 (May 2025)
There are a handful of well-known agent frameworks and platforms, and you know what? They can all demonstrate the value of agents with a simple proof of concept. They all support agent planning, orchestration, memory management and tool use – the building blocks of agentic workflows. And yes, they’re all opinionated frameworks. However, the differences in how they’ve implemented these building blocks are not what matters most.
It’s one thing to support a proof of concept. It’s another to support 100s, let alone 1000s, of agentic workflows running in production. And this is what matters, the ability to grow from performing a simple task via agent collaboration to effectively supporting every role and department via autonomous agents handling complex, critical tasks – or in CrewAI language, becoming agent-native.
MCP (model context protocol)
MCP has successfully standardized how agents call tools and access data sources, with 1,000s of servers available for everything from cloud services and developer tools to file systems and security platforms. With support for MCP, it’s easier than ever to build powerful agentic workflows that determine which tools to access and when.
Build agents that can:
Find data in a Neon database
Retrieve knowledge from Qdrant or Weaviate
Send Slack messages and reply to threads
Update issues in Linear
Create Docker containers
And a whole lot more!
serverparams = {"url": "http://localhost:8000/sse"} with MCPServerAdapter(serverparams) as tools: # tools is now a list of CrewAI Tools matching 1:1 with the MCP server's tools agent = Agent(..., tools=tools) task = Task(...) crew = Crew(..., agents=[agent], tasks=[task]) crew.kickoff(...)
MCP documentation
That’s not all.
CrewAI Enterprise now includes bidirectional MCP support, meaning crews and flows can be accessed by remote MC clients, whether desktop applications, web applications and servers or even remote agents – allowing customers to fully integrate CrewAI Enterprise with existing infrastructure and systems, and become fully agent native.
Tools repository
As enterprises look to expand their use agents and become agent native, a centralized means of deploying and managing custom tools which can be accessed by different agents in different workflows will be necessary to scale.
CrewAI Enterprise now supports private tool repositories for customers, and in keeping with high security standards, access to tools is managed via role-based access control. Whereas public tools are available to anyone in an organization building agents, private tools require explicit permission – as does the ability to publish tools to the repository.
Guardrails
AI assistants and copilots shouldn’t be deployed to production without guardrails, and neither should agents. They’re often overlooked when experimenting with agents and building simple prototypes, but they’re necessary to ensure the automation of critical business processes via agents can be relied upon – both in terms of correctness as well as behaviour.
CrewAI allows developers to add guardrails via functions or LLM-as-a–Judge prompts. For example, a function to check the output length (e.g., too long) or see if the output contains specific keywords or phrases (e.g., competitor mentions). And for more subjective checks, you can specify a prompt, and optionally, the LLM (e.g., Llama Guard 3).
blog_task = Task( description="Write a blog post about AI", expected_output="A blog post under 200 words", agent=blog_agent, guardrail=TaskGuardrail( description="Ensure the blog is less than 200 words", llm=LLM(model="gpt-4o-mini"), ) )
Guardrail documentation
CrewAI Enterprise provides customers with an advanced, out-of-the-box guardrail for hallucination detection as well.
Events and webhooks
A powerful eventing system is required for any infrastructure platform, and provides developers with much needed support for extending it with everything from custom debugging and monitoring to advanced integration with other platforms and services. In addition, events and webhooks can be used to add evaluation capabilities or to integrate with external evaluation platforms.
CrewAI now includes an event bus, allowing developers to create listeners which run when any of the following events are emitted:
Crew kickoff– started, completed and failed
Crew train – started, completed and failed
Crew test – started, completed and failed
Agent – started, completed, error
Task – started, completed, failed, evaluation
Tool use – started, finished, error
Tool validation, execution and selection – error
LLM call – started, completed and failed
LLM streaming – chunk received
CrewAI Enterprise customers can register webhooks with authentication tokens for any of these events, making it even easier to integrate with other platforms and services.
{ "inputs": { "foo": "bar"}, "taskWebhookUrl": "", // unchanged for compatibility "stepWebhookUrl": "", // unchanged for compatibility "crewWebhookUrl": "", // unchanged for compatibility "webhooks": { "events": ["crew_kickoff_started", "llm_call_started"], // list of events to subscribe to "url": "https://webhook.test/foo/bar", // url to send events to "authentication": { "strategy": "bearer", "token": "de82dc64-8e4c-4270-81fb-ac9668a79f5e" // sent in every webhook request over headers } } }
Event documentation
Agentic RAG
With the introduction of retrieval augmented generation (RAG) in 2020 by researchers at Meta, external knowledge has played a critical role – especially within enterprise AI applications. However, RAG is now giving way to agentic RAG, with agents determining which knowledge base to access and how.
CrewAI has added a number of features to not support agentic RAG, but to provide developers with greater flexibility.
Query rewriting allows the agent to transform the original prompt into one optimized for searching a knowledge base. For example, modifying a prompt with a use query to focus on the most relevant keywords, incorporate relevant context and remove unnecessary statements such as instructions and output format.
Qdrant joins a growing list of vector databases which can be natively searched by CrewAI agents, including Amazon Bedrock Knowledge Bases, MySQL, Pinecone (coming soon), PostgreSQL and Weaviate.
Embedding functions allow developers to bypass the default embedding model to customize how embeddings are generated, often with a separate embedding model.
# Original task prompt task_prompt = "Answer the following questions about the user's favorite movies: What movie did John watch last week? Format your answer in JSON." # Behind the scenes, this might be rewritten as: rewritten_query = "What movies did John watch last week?"
Qdrant documentation
The time for Agentic AI is now
CrewAI is the most powerful Agentic AI platform available, but more importantly, it’s a platform enterprises can rely on and trust to power their AI transformation. The team at CrewAI is driven by a passionate desire to unlock the full potential of Agentic AI. However, it requires much more than building new APIs. It requires a commitment to delivering the features and capabilities organizations need to succeed with it.
CrewAI's first launch week has gotten off to a great start, but we have a lot more to share.
Sign up for our webinar this Thursday, and discover what’s possible with Agentic AI today!
Read next
Creating a center of gravity for the Agentic AI ecosystem
Enabling domain experts to build and deploy agentic workflows without the need to write code
Unlocking agent-native transformation with CrewAI Factory and NVIDIA
Comments ( )
Subscribe to CrewAI
Subscribe now
