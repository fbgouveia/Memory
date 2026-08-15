# Why Enterprises Need a New Agent Building Layer

- Source: https://crewai.com/blog/ai-agent-builders-divide
- Raw SHA-256: `3bc4bb47481f4bf38f33c119606b66147647eb58812233a3ea16e52d265f768c`

## Visible text

Why Enterprises Need a New Agent Building Layer
Resources
The People Who Understand Don't Build. The People Who Build Don't Understand.
Your company mapped 100 AI use cases and will ship 10. Maybe. That gap is a curse, and it only breaks free with a governed layer from day one.
Pedro Moura
Context
Last year I left one of the largest software companies in the world, Microsoft, for a company that is rewriting how AI agents get built. Hard decision? Not really, but it came with a lot of thinking. Around the same time, I started planning a move from Brazil to the United States.
Both things taught me the same lesson in different ways, and that lesson is what this piece is about. The highest cost in any system is not building it. It is crossing.
Crossing from idea to code. From pilot to production. From one country to another. From the person who understands the work to the person who can implement it. From the person who wants to make it happen to the person doing ten things at once to actually make it happen and earn their place.
At the big company, that cost had a name nobody said out loud: alignment. Alignment, alignment, T&E, training. In the move between countries, it has a different name: documents, and then more documents. In AI projects, it has a name I only learned after joining CrewAI. The translation tax.
The tax exists because every company operates under the same curse, one so old we stopped seeing it. The people who understand the work don't build it. The people who build it don't understand it. This piece is about what that sentence costs, and about the day it stops being true.
1. The problem is throughput
Run a use case inventory for agents at any company of size. The result is always the same kind of number. Twenty opportunities. A hundred. Sometimes eight hundred.
Now count the capacity of the AI team. That number is always similar too. Ten a year, being generous. Let me correct myself. Being very generous.
No budget closes that gap by addition. Double the team and you get to twenty a year. Stacking people doesn't solve the problem.
The whole market is stuck in that math, and the numbers from the major research houses show the size of the hole.
Finding
Number
Source
Companies using AI in at least one function
88%
McKinsey, State of AI, Nov 2025 [ 1 ]
Experimenting with or scaling agentic systems
62%
McKinsey, State of AI, Nov 2025 [ 1 ]
Scaling an agentic system somewhere in the company
23%
McKinsey, State of AI, Nov 2025 [ 1 ]
Have scaled agents with tangible value
under 10%
McKinsey, Jun 2025; reaffirmed Apr 2026 [ 2 ][ 3 ]
Report any EBIT impact (most of them under 5%)
39%
McKinsey, State of AI, Nov 2025 [ 1 ]
See no "significant" value despite having deployed
94%
McKinsey, Apr 2026, on State of AI data [ 4 ]
Agentic projects that will be cancelled by end of 2027
over 40%
Gartner, Jun 2025 [ 5 ]
AI initiatives with measurable ROI
1 in 5
Gartner, Oct 2025 [ 6 ]
From 88% adopting to under 10% capturing tangible value. Every step of that funnel drops more than half the people who reached it.
A note on method, for anyone who has run academic research. These percentages come from separate surveys. They show the order of magnitude of the drop, not a single cohort tracked over time.
What the funnel describes is an industry with an excellent adoption rate and a terrible crossing rate.
You can put it as an exchange rate. Eight hundred ideas go in, ten come out. A 1.25% conversion. Worse spread than an airport currency exchange, which I have been using a lot lately. The funny part is that nobody complains, because this rate never shows up on a statement.
2. The cause is a translation tax
The curse in the title is not rhetoric. It is an org chart. The people who understand the work sit in one building, one function, one system. The place where work turns into software is somewhere else.
That separation looks administrative. It is economic. Every step between the person who knows the process and the person who implements it charges a toll, in time, in fidelity, and in motivation. And because that toll never appears on a budget line, it gets underestimated every single time.
The symptom shows up in the talent data. Almost a third of companies cite talent and capability gaps, along with integration difficulty, as an obstacle to scaling agentic AI [ 7 ]. McKinsey is explicit when advising CEOs that execution will take longer than expected because of talent scarcity and organizational complexity [ 8 ].
Here is what customers ask us for most often. Features? Some. But mostly training. And not only technical training. Training that translates between the business and the engineering.
The dominant strategy today is to wait for more translators to show up. In a market where they are getting scarcer.
3. The two bad exits
Facing that bottleneck, the market offered two answers. Both solve half the problem.
The first is the canvas tool. Low floor. Anyone builds a flow in an afternoon. But the ceiling is low too. The prototype works in the demo and stalls on the first real case that needs serious integration, exception handling, scale. Then the project goes back into the engineering queue, paying the translation tax again, now with interest, because someone has to decode what the canvas meant.
The second is the development platform. High ceiling. You can build anything. But the door is narrow. Only engineers get in, and engineers are exactly the resource that does not scale by definition. It is the 800 to 10 math all over again. The people who understand the process stay outside, dictating requirements through documents, meetings, and tickets. Each one charges a toll, and both tolls are heavy.
Notice what the two exits have in common. Both preserve the separation between the people who understand the work and the people who build it. They only change which side of the wall the bottleneck sits on.
4. Breaking the curse with a low floor and a high ceiling
Both exits fail because they attack the symptom and preserve the curse. The right question is not how to make building easier, or how to give the engineer more power. It is this. What happens when the people who understand the work start building, without the ceiling collapsing?
There is a name for that property, and it did not come from software marketing. Low floor, high ceiling. Seymour Papert coined the phrase at MIT, working on teaching children to program. Low floor and high ceiling have always been treated as a trade-off. You pick ease or you pick power. That choice is what has to disappear.
This is what convinced me to cross over to CrewAI. Studio does not force the choice. The person who understands the business builds on a visual canvas, with blocks and connectors that already exist. The engineer exports clean, readable code, not a machine-generated black box. Code you can review, version, and extend. Both sides work on the same reusable blocks, so nothing starts from zero.
The operations person who knows the process end to end prototypes on their own. The engineer takes that exact artifact and hardens it for production. The translation tax is not reduced. The border where it used to be charged stops existing.
And there is one thing only the open source heritage makes possible. Those blocks carry patterns from more than 700,000 real use cases, learned from a community that was building agents before any platform existed. That is not a template invented on a whiteboard. It is the accumulated record of what already worked in the field, and it is a claim about scale that nobody else in this space can make.
5. Governed from day one
Here is the second half of the subtitle, and the part companies discover too late.
When the floor drops, more people build. That is the goal, and it is also the new risk. Opening the door to every possible builder without governance does not fix the funnel. It creates shadow IT for agents.
The common answer is to govern later, once the pilot works. Which is exactly why more than 40% of agentic projects will be cancelled by 2027. Escalating cost, uncertain value, inadequate risk controls [5].
Governance cannot be a retrofit. If business builders and engineers work in the same environment, the platform owner gets what they never had. One place to see, trust, and manage everything that goes to production. Who can publish what. Which connectors are approved. What each agent did, when, and with which data. Trust stops being a quarterly compliance meeting and becomes a property of the architecture.
I am not talking about personal copilots or individual productivity automation. I am talking about the agents that move the P&L. The use cases your company already inventoried and cannot get across.
6. The crossing
Back to where I started. Moving countries taught me that the crossing has a cost of its own, separate from the cost of living on either side. Nobody budgets the crossing. The crossing is where the plans die.
Robert Solow joked in 1987 that you could see the computer age everywhere except in the productivity statistics. McKinsey brought the joke back this year to describe AI. 88% of companies using it, 94% not seeing significant value [4]. The paradox was never in the technology. It lives in the crossing that nobody budgeted.
Your company's use cases do not need another inventory. They need a path where the curse in the title stops holding. Engineering raises the ceiling. Governance sees everything from day one. And the sentence that opened this piece turns into its own opposite.
The people who understand, build. The people who build, understand.
The companies that reach that sentence first will not ship ten a year. They will ship all eight hundred.
References
[1] McKinsey, The State of AI in 2025: Agents, innovation, and transformation (Nov 5, 2025). https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
[2] McKinsey, Seizing the agentic AI advantage (Jun 13, 2025). Origin of the "under 10% with tangible value" figure. https://www.mckinsey.com/capabilities/quantumblack/our-insights/seizing-the-agentic-ai-advantage
[3] McKinsey, Building the foundations for agentic AI at scale (Apr 2, 2026). Reaffirms the sub-10% figure. https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/building-the-foundations-for-agentic-ai-at-scale
[4] McKinsey, Where AI will create value and where it won't (Apr 2026). Source of the 94% figure. https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/where-ai-will-create-value-and-where-it-wont
[5] Gartner press release, Over 40% of agentic AI projects will be canceled by end of 2027 (Jun 25, 2025). https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
[6] Gartner press release, CHROs must become enterprise leaders (Oct 27, 2025). 1 in 5 with ROI, 1 in 50 with disruptive value. https://www.gartner.com/en/newsroom/press-releases/2025-10-27-gartner-says-chros-must-become-an-enterprise-leader-of-how-work-should-change-in-the-ai-era
[7] McKinsey, Global Tech Agenda 2026 (Feb 9, 2026). Roughly one third cite talent and capability gaps. https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/mckinsey-global-tech-agenda-2026
[8] McKinsey, The change agent: goals, decisions, and implications for CEOs in the agentic age (Oct 1, 2025). Execution will take longer because of talent scarcity and organizational complexity. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-change-agent-goals-decisions-and-implications-for-ceos-in-the-agentic-age
Contents
Context
1. The problem is throughput
2. The cause is a translation tax
3. The two bad exits
4. Breaking the curse with a low floor and a high ceiling
5. Governed from day one
6. The crossing
References
Intro to New Crew Studio
See the new automated agent builder that actually works in production in a live demo with Joao Moura(CEO) and Tom Haddock(Head of FDE). August 25 @ 10a PT
Related News
Crew AI Enterprise Crew Studio: The Automated Agent Builder Jesse Miller | July 28, 2026
Crew AI Enterprise Enterprises Need a New Agent Building Layer João (Joe) Moura | July 28, 2026
Crew AI Enterprise Stop giving your agents database credentials João (Joe) Moura | June 22, 2026
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
