# Why Enterprises Need a New Agent Building Layer

- Source: https://crewai.com/blog/agent-harnesses-are-dead
- Raw SHA-256: `18bd87ee5f703c80acdc2527bd568a723e5b9ec8ae7826298fc53313456545d3`

## Visible text

Why Enterprises Need a New Agent Building Layer
Resources
Agent Harnesses are Dead, Long Live Agent Harnesses
Agent harnesses are becoming interchangeable. The future lies in systems that adapt, learn, and compound intelligence from real workflows.
João (Joe) Moura
I said it at a Dev Day 2025 ( DeepLearning.AI conference) last year:
Frameworks are cheap.
A few people in the audience looked uncomfortable. But I think the statement aged well.
Now it's not just frameworks. Harnesses are getting the same treatment, and the cycle is only getting faster. Building anything is getting cheaper by the month. Vibe-code an app over the weekend. Spin up an agent with a few API calls. The distance between idea and working prototype has collapsed to almost nothing, and will collapse to nothing faster than most expect.
And yet the industry is spending most of its energy debating what to call the building tools.
We built our harness back in 2023 when we launched, what people now all agree to be the right abstraction, of multi agentic opinionated agent abstractions and eventually exposed its internals (the framework, a.k.a. CrewAI Flows). The combination of Agents, Crews and Flows, allowed for a massive array of use cases and adoption across major enterprises.
We have seen the industry evolve and we keep on building towards the future. You can expect some launches soon, but I want to start introducing how we all got here and where the industry is going.
The vocabulary changes faster than the value
The industry has been cycling through terminology. Frameworks became scaffolds. Scaffolds became harnesses. The idea is that each generation is more opinionated. Harnesseses ship with planning, memory, file systems, and compaction built in.
But the underlying dynamic hasn't changed and meanwhile the building layer keeps getting cheaper.@garrytan put it well this last week: the harness should be thin. The harness is plumbing. Plumbing matters, but nobody builds an exciting defensible product on plumbing.
Meanwhile, some are arguing that harnesses are the new defensible layer, that frameworks are dead but harnesses will endure. I think that's wishful thinking. The same forces that commoditized frameworks are already starting to commoditize harnesses. Model providers keep absorbing the stack and every quarter, another primitive moves behind an API.We have a framework ourselves (CrewAI Flows) and a Harness (CrewAI Crews and Agents, with memory, tools, caching, context engineering, prompts, skills, mcp, etc.. you get it), so I'm not saying this from the sidelines, I'm on the front row watching it happen to a category I'm helping build. The entire conversation is furniture rearrangement. So if the harness is dying, what lives? The answer isn't another layer of tooling. It's something else entirely.The building is getting cheaper and that affects incumbent SaaS as much as it affects startups and enterprises, rearranging the furniture doesn't change that.
The things that compound
When building gets cheap, the value moves to the layers that can't be replicated overnight. Distribution. Proprietary data that took years to assemble. Products that capture intelligence as customers use them and get better over time. Trust earned through production. It’s usually a combination of these things that create separation between great and mediocre software nowadays.
You can't vibe-code the thousandth customer's accumulated patterns feeding back into the product. That flywheel is earned, not built.
Companies want to vibe-code their own tools
Here's something I've been thinking about a lot.
The reason companies are excited about building their own internal tools with AI isn't just cost, it's that they only use a fraction of every piece of software they buy. Every user in an enterprise runs a customized version of their tools in their heads. The three features they actually use, the workarounds they've built, the workflows that don't necessarily map to any vendor's assumptions.
So when building gets cheap, their first instinct is: I'll just build exactly what I need, and I won't say they're wrong to think that way.But I think the real opportunity is harder than vibe-coding, and potentially more valuable.
Entangled Software (Entangled Agentic Systems)
What if instead of customers building their own stripped-down versions of your product, the product itself adapted to each customer? Actually learned from how they work and reshaped itself around their behavior.
I've been calling this entangled software. The concept comes from physics, when two particles become entangled, the state of one instantly reflects the state of the other. In entangled software, the product and the customer influence each other. The customer's behavior shapes the software. The software shapes how the customer works and over time, they become inseparable.This is the opposite of how software has worked for thirty years. We've always built tools and asked humans to adapt to them. But entangled software flips that. The software adapts to behavior instead of behavior adapting to software. This is something that wouldn’t be possible without agents until recently but now opens the doors for completely user experiences.
This also applies to agentic systems, where they are now starting to evolve into entangled agentic systems, and those are in many ways fundamentally different.
A selected few are working towards this, us included, and I have many ideas about what the final version of this will look like for agents, especially CrewAI Agents. Once entangled agentic systems are truly deployed with a customer's processes, data, and way of working, they become fully entangled.
Entangled Software is the future of Agents, and we recently have been able to peek at what full entangled agentic systems look like and how transformative they can be. I'll be talking more about these soon.
The road, not the car
The framework and harness debate is about how to build the car. Important for sure, but the companies that win this era won't be the ones that built the best car, but the ones that built the road. The infrastructure of trust, data, and adaptation that every car needs to drive on. Harnesses as they were are dead. Yes, that is how fast things are moving. What they evolve into is what matters.
At CrewAI, we have built the car. Now we're perfecting the road.
Where CrewAI is going
We build both the framework (CrewAI Flows) and the Harness (CrewAI Crews and Agents). Now we're building what comes after both.CrewAI has long evolved and is now becoming a platform where agents don't just execute tasks, they learn from every customer's workflows, adapt to how each organization actually operates, and get better the more they're used. Not through configuration but through entanglement.
We're building toward a world where you don't set up agents, they emerge from how your team works. Your processes, your data, your patterns become the agent's intelligence. That's not a framework. That's not a harness. It's something new.I have never been more bullish in the agentic future.
Contents
The vocabulary changes faster than the value
The things that compound
Companies want to vibe-code their own tools
Entangled Software (Entangled Agentic Systems)
The road, not the car
Where CrewAI is going
Intro to New Crew Studio
See the new automated agent builder that actually works in production in a live demo with Joao Moura(CEO) and Tom Haddock(Head of FDE). August 25 @ 10a PT
Related News
Crew AI Enterprise The People Who Understand Don't Build. The People Who Build Don't Understand. Pedro Moura | August 14, 2026
Crew AI Enterprise Crew Studio: The Automated Agent Builder Jesse Miller | July 28, 2026
Crew AI Enterprise Enterprises Need a New Agent Building Layer João (Joe) Moura | July 28, 2026
Get Started
CrewAI supports any stage of your agentic journey
Starting out You're ready for agents. You need a solid foundation to start building. Try Now
Scaling up You've launched pilots. Now you need agents in production. Meet with us
At scale Agents are running. You need to manage the sprawl. Meet with us
Sign up for our monthly newsletter
Help
Chat with our docs
Blog
Privacy policy
Terms of service
Status
Explore
Meet with us
Careers
Resources
Documentation
Case Studies
Webinars
Events
Blog
GitHub project
Community forum
Security trust center
CrewAI © Copyright 2026.
