# Home

- Source: https://blog.crewai.com/creating-a-center-of-gravity-for-the-agentic-ai-ecosystem/
- Raw SHA-256: `e0d11ac7620212737e5cb7b5b44bb4ace267f93c62ffe8e6783c15fd5e0746ff`

## Visible text

Home
Docs
Open Source
Enterprise
Creating a center of gravity for the Agentic AI ecosystem
João (Joe) Moura
First things first, thank you to everyone who attended our very first launch week webinar !
It was absolutely incredible to see 2,600+ people register for a webinar in a matter of days, and even more so to see everyone immediately introducing themselves, connecting with other community members and asking our speakers both technical and non-technical questions. It was a testament to the excitement and enthusiasm we all share.
It would be the understatement of the century to say there is a lot going on when it comes to agents. There are a lot of frameworks, tools and platforms for everything from orchestration and memory to monitoring and evaluation – and everything in between for that matter.
At CrewAI, we want to help by creating a center of gravity for everyone who is participating in the world of Agentic AI – including alternative agent frameworks and competitors. We're all have the same goal, to help individuals and organizations alike benefit by deriving meaningful value from AI agents.
Here are a few of the ways we're doing this.
Adding native tools
The CrewAI toolbox is getting larger with every release. This week we added a tool for Stagehand , equipping agents with browser automation. Specifically, it enables agents to:
Act: Perform actions like clicking, typing, or navigating
Extract: Extract structured data from web pages
Observe: Identify and analyze elements on the page
# Perform an action (default behavior) result = stagehand_tool.run( instruction="Click the login button", url="https://example.com", command_type="act" # Default, so can be omitted ) # Extract all product information result = stagehand_tool.run( instruction="Extract all product names, prices, and descriptions", url="https://example.com/products", command_type="extract" ) # Identify form fields result = stagehand_tool.run( instruction="Identify all the input fields in the registration form", url="https://example.com/register", command_type="observe", selector="#registration-form" )
It joins a long list of native tools for everything from Amazon Bedrock Knowledge Bases and vector databases such as Qdrant and Weaviate , to Serper and Firecrawl for searching and scraping websites – and over 250+ tools via Composio .
Expanding framework interoperability
We love open source, and we’re champions of interoperability. That's why, in addition to native tools, CrewAI supports the use of tools from LlamaIndex and LangChain – making 100s of additional tools available to CrewAI agents.
# Initialize from LlamaHub Tools wolfram_spec = WolframAlphaToolSpec(app_id="your_app_id") wolfram_tools = wolfram_spec.to_tool_list() tools = [LlamaIndexTool.from_tool(t) for t in wolfram_tools]
You can even embed a LlamaIndex query engine within an agent.
# Load documents documents = SimpleDirectoryReader("./data").load_data() # Create an index index = VectorStoreIndex.from_documents(documents) # Create a query engine query_engine = index.as_query_engine() # Create a LlamaIndexTool from the query engine query_tool = LlamaIndexTool.from_query_engine( query_engine, name="Company Data Query Tool", description="Use this tool to lookup information in company documents" )
A little while back, we added support for Amazon Bedrock Agents too. This enables CrewAI agents to call Amazon Bedrock agents as tools.
Supporting platform integrations
The CrewAI is working as fast as possible with our partners to add native integration with every other part of the Agentic AI ecosystem. This week we added support for Comet Optik , a platform for evaluating AI systems.
And it couldn’t be any easier.
track_crewai(project_name="crewai-integration-demo") my_crew = YourCrewName().crew() result = my_crew.kickoff()
Keeping up with the latest models
We added support for OpenAI GPT-4.1, Google Gemini-2.0 and Google Gemini-2.5 Pro, collaborated with NVIDIA to support models via NVIDIA NIM microservices and added Hugging Face as a provider in the CrewAI CLI.
And yes, now we need to add support for Claude 4 models!
Accelerating the pace of announcements
Expect a lot more posts like the ones we've published this week, and soon. Both CrewAI OSS and CrewAI Enterprise benefit from new features and improvements on a weekly basis, and we're going to work harder on making sure everyone in the community up to date on the latest improvements and releases.
In fact, we'll have more to share next week!
Read next
CrewAI OSS 1.0 - We are going GA
Enabling domain experts to build and deploy agentic workflows without the need to write code
How CrewAI is evolving beyond orchestration to create the most powerful Agentic AI platform
Comments ( )
Subscribe to CrewAI
Subscribe now
