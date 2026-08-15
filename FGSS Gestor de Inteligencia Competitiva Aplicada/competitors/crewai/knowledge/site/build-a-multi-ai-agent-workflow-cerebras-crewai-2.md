# Home

- Source: https://blog.crewai.com/build-a-multi-ai-agent-workflow-cerebras-crewai-2/
- Raw SHA-256: `cad5e1aec366abc684db2f253850565e0277941c70dbe3964ca6520ef560a84f`

## Visible text

Home
Docs
Open Source
Enterprise
Build a Multi-AI Agent Workflow with Cerebras and CrewAI
Build multi-ai agent workflows with CrewAI and Cerebras' fast inference speed
João (Joe) Moura
In this tutorial, we'll create a simple multi-ai agent workflow where an agent researches emerging technologies in a given field or topic using CrewAI and Cerebras.
About Cerebras
Cerebras inference is the fastest in the world, and we’re powering the next generation of AI applications. With the Cerebras Inference API, you can run Llama3.1 8B and Llama3.1 70B 10x faster than on GPUs. Our inference runs on the Wafer Scale Engine 3 (WSE3), Cerebras’s custom hardware designed for AI.
Come join us in building next-level, innovative applications with an inference speed never seen before. Get started with Cerebras here: cloud.cerebras.ai
Additional links:
Inference API
Docs
Fellows Program
About CrewAI
CrewAI is an open-source framework for building and orchestrating multi-agent AI workflows. It allows developers to define autonomous agents with specific roles, goals, and backstories. These agents can utilize tools, process tasks, and interact with each other to accomplish complex objectives.
Powered by language models (LLMs), CrewAI simplifies the development of AI applications that require coordination between multiple agents, making it easier to build sophisticated and scalable AI systems.
Prerequisites
Ensure you have the following before getting started:
Python 3.7 or higher
A Cerebras Inference API key. Set it in your .env file as such:
CEREBRAS_API_KEY=csk-*************************************
Install crewai and crewai-tools packages. Install them using this command:
pip install crewai crewai_tools
Configuring Cerebras LLMs within CrewAI
from crewai import LLM import os # Configure the LLM to use Cerebras cerebras_llm = LLM( model="cerebras/llama3.1-70b", # Replace with your chosen Cerebras model name, e.g., "cerebras/llama3.1-8b" api_key=os.environ.get("CEREBRAS_API_KEY"), # Your Cerebras API key base_url="https://api.cerebras.ai/v1", temperature=0.5, # Optional parameters: # top_p=1, # max_completion_tokens=8192, # Max tokens for the response # response_format={"type": "json_object"} # Ensures the response is in JSON format )
Defining an Agent
In CrewAI, an agent is an autonomous entity that performs tasks based on a defined role, goal, and backstory. Agents can utilize tools and are powered by language models (LLMs).
from crewai import Agent from crewai_tools import SerperDevTool # Agent definition researcher = Agent( role='{topic} Senior Researcher', goal='Uncover groundbreaking technologies in {topic} for the year 2024', backstory='Driven by curiosity, you explore and share the latest innovations.', tools=[SerperDevTool()], llm=cerebras_llm )
Role: Defines the agent's position, using {topic} as a placeholder for fine grained dynamic assignment.
Goal: What the agent aims to achieve.
Backstory: Adds depth to the agent, influencing its behavior.
Tools: External tools the agent can utilize (e.g., web search using SerperDevTool ).
LLM: CrewAI class that specifies the language model to be used by agents, in this case, Cerebras.
Defining a Task
A Task in CrewAI represents a unit of work assigned to an agent.
from crewai import Task # Define a research task for the Senior Researcher agent research_task = Task( description='Identify the next big trend in {topic} with pros and cons.', expected_output='A 3-paragraph report on emerging {topic} technologies.', agent=researcher )
Description: Details what the task entails.
Expected Output: Specifies the desired result.
Agent: Assigns the task to the defined agent.
Executing the Workflow
Now, let's set up the Crew and run the process.
What is a Crew?
A Crew is a collection of agents and tasks that work together to execute a process. It serves as the orchestrator, managing the flow of tasks among agents according to a specified process pattern.
By forming a crew, you can:
Organize Agents and Tasks: Group related agents and their corresponding tasks into a cohesive unit.
Control Execution Flow: Define how and in what order tasks are executed (e.g., sequentially or in parallel).
Manage Inputs and Outputs: Pass dynamic inputs to agents and collect their outputs.
Setting up the Crew
from crewai import Crew, Process def main(): # Forming the crew and kicking off the process crew = Crew( agents=[researcher], tasks=[research_task], process=Process.sequential, verbose=True # Enables detailed logging ) result = crew.kickoff(inputs={'topic': 'AI Agents'}) print(result) if __name__ == "__main__": main()
Crew: Agents: A list of agents involved in the workflow. Tasks: A list of tasks to be executed. Process: Defines the execution strategy. Process.sequential means tasks are executed one after another. Verbose: When set to True , provides detailed output during execution.
kickoff(): Starts the execution of the crew's tasks, optionally accepting dynamic inputs to replace placeholders like {topic} .
Full Example Code
You can find the complete code combining all the steps in this GitHub Repository .
from crewai import Agent, Task, Crew, Process, LLM from crewai_tools import SerperDevTool import os # Configure the LLM to use Cerebras cerebras_llm = LLM( model="cerebras/llama3.1-70b", # Replace with your chosen Cerebras model name api_key=os.environ.get("CEREBRAS_API_KEY"), # Your Cerebras API key base_url="https://api.cerebras.ai/v1", temperature=0.5, ) # Agent definition researcher = Agent( role='{topic} Senior Researcher', goal='Uncover groundbreaking technologies in {topic} for the year 2024', backstory='Driven by curiosity, you explore and share the latest innovations.', tools=[SerperDevTool()], llm=cerebras_llm ) # Define a research task for the Senior Researcher agent research_task = Task( description='Identify the next big trend in {topic} with pros and cons.', expected_output='A 3-paragraph report on emerging {topic} technologies.', agent=researcher ) def main(): # Forming the crew and kicking off the process crew = Crew( agents=[researcher], tasks=[research_task], process=Process.sequential, verbose=True ) result = crew.kickoff(inputs={'topic': 'AI Agents'}) print(result) if __name__ == "__main__": main()
Running the Agent Script
To run the script:
Ensure all prerequisites are met.
Save the script to a file, e.g., crewai_cerebras_integration.py .
Run the script:
python crewai_cerebras_integration_demo.py
Expected Output
The output will be a 3-paragraph report on emerging AI agent technologies for 2024, generated by the researcher agent using the Cerebras LLM.
Example Output:
# Emerging AI Agents Technologies: A 3-Paragraph Report The year 2024 is expected to be a significant year for AI Agents technologies. According to various sources, including Forbes, CNBC, and PCG, AI Agents are going to revolutionize the way businesses operate. These agents are expected to autonomously manage supply chains, optimize inventory levels, forecast demand, and even handle complex logistics planning. Moreover, AI Agents will transform business processes, increase automation in workflows, improve customer service and satisfaction, and provide cost savings by reducing operational costs. However, there are also concerns about the pros and cons of AI Agents. Some of the cons include issues like ethics and dependency on technology. Furthermore, there are risks associated with the use of AI Agents, such as new security risks and the potential for job displacement. Despite these concerns, many experts believe that the benefits of AI Agents outweigh the drawbacks. As Agentic AI becomes more prevalent, it is expected to change the tech stack, HR practices, and the way of getting things done. In conclusion, AI Agents are going to play a significant role in shaping the future of businesses. With their ability to autonomously manage tasks and processes, they are expected to bring about increased efficiency, accuracy, and cost savings. However, it is essential to be aware of the potential risks and challenges associated with the use of AI Agents and to take steps to mitigate them. As the technology continues to evolve, it will be interesting to see how AI Agents transform various industries and revolutionize the way we work.
You can also watch a full video tutorial of the same code here:
Conclusion
By integrating Cerebras's lightning-fast inference with CrewAI's flexible multi-agent framework, developers can build sophisticated AI applications that perform complex tasks efficiently. This combination is particularly powerful for research-intensive applications where speed and scalability are crucial.
Next Steps
Experiment with Different Models: Try using different Cerebras models like "cerebras/llama3.1-8b" to see how it affects performance.
Add More Agents: Introduce additional agents to handle other tasks, such as data analysis or content generation.
Enhance Tasks: Make tasks more complex by adding subtasks or integrating more tools.
References
Cerebras Cloud Platform
CrewAI Documentation
Read next
Build your First CrewAI Agents
Enhancing CrewAI with CopilotKit Integration
Configuring Azure OpenAI with CrewAI: A Comprehensive Guide
Comments ( )
Subscribe to CrewAI
Subscribe now
