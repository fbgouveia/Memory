# Graph Report - /tmp/thefounderos-graph  (2026-08-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1773 nodes · 4270 edges · 90 communities (78 shown, 12 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 31 edges (avg confidence: 0.69)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1f625119`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57
- Community 58
- Community 59
- Community 60
- Community 61
- Community 62
- Community 63
- Community 64
- Community 65
- Community 66
- Community 67
- Community 68
- Community 69
- Community 70
- Community 71
- Community 73
- Community 74
- Community 75
- Community 76
- Community 77
- Community 78
- Community 79
- Community 80

## God Nodes (most connected - your core abstractions)
1. `getDb()` - 95 edges
2. `openDb()` - 50 edges
3. `KnowledgeGraph()` - 32 edges
4. `FounderDb` - 27 edges
5. `ConnectorStatus` - 26 edges
6. `resolveCred()` - 24 edges
7. `FunnelPage()` - 23 edges
8. `seedDatabase()` - 23 edges
9. `SocialPage()` - 21 edges
10. `Agent` - 21 edges

## Surprising Connections (you probably didn't know these)
- `audienceGrowthPct()` --indirect_call--> `series()`  [INFERRED]
  lib/social.ts → tests/social-chart.test.ts
- `GET()` --calls--> `getDb()`  [EXTRACTED]
  app/api/agents/broadcast/route.ts → lib/data.ts
- `GET()` --calls--> `getDb()`  [EXTRACTED]
  app/api/agents/work/route.ts → lib/data.ts
- `PATCH()` --calls--> `getDb()`  [EXTRACTED]
  app/api/agents/work/route.ts → lib/data.ts
- `LeadMagnetsPage()` --calls--> `getDb()`  [EXTRACTED]
  app/content/lead-magnets/page.tsx → lib/data.ts

## Import Cycles
- None detected.

## Communities (90 total, 12 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (61): pdfToText(), POST(), POST(), ago(), FinancesPage(), usd(), BusinessIncomeChart(), fmtMonth() (+53 more)

### Community 1 - "Community 1"
Cohesion: 0.05
Nodes (55): DumpSchema, POST(), GET(), GET(), GET(), BrainProvider, BrainSearchResult, BrainStatus (+47 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (45): BrainPage(), CHECK_DOT, clientRoster(), memoryConstellation(), relativeTime(), BrainCore(), CHECK_DOT, Doctor (+37 more)

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (52): greeting(), HomePage(), relativeTime(), TONE_CLASS, AudienceConsistency(), AudPoint, ChartPair(), colorFor() (+44 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (42): GET(), OrgChartPage(), STATUS_DOT, VentureDots(), ConductorCard(), ConductorChat(), Turn, ConductorEmblem() (+34 more)

### Community 5 - "Community 5"
Cohesion: 0.04
Nodes (53): rowToAgent(), QuarterGroup, AgentMessageRole, AgentMessageRoleSchema, AgentSchema, AgentStatusSchema, AgentTier, AgentTierSchema (+45 more)

### Community 6 - "Community 6"
Cohesion: 0.08
Nodes (32): GET(), POST(), POST(), POST(), ChatResult, chatWithAgent(), systemPromptFor(), ConductorResult (+24 more)

### Community 7 - "Community 7"
Cohesion: 0.07
Nodes (37): AgentRow, FounderDb, migrateAgentsTable(), migrateFunnelContactsTable(), migrateLeadMagnetsTable(), migrateSkillsTable(), openDb(), AgentCronSchema (+29 more)

### Community 8 - "Community 8"
Cohesion: 0.09
Nodes (28): buildCommands(), fontMono, metadata, NAV_COMMANDS, RootLayout(), CommandPalette(), OsMark(), Sidebar() (+20 more)

### Community 9 - "Community 9"
Cohesion: 0.08
Nodes (28): ACTIVE_STAGES, AgentHarnessCard(), AgentLite, ClientLite, ClientRosterCard(), DeptLite, GraphHumanDetailCard(), isActiveClient() (+20 more)

### Community 10 - "Community 10"
Cohesion: 0.06
Nodes (33): SocialDm, SocialDmSnapshot, agents, agentTasks, departments, DM_TARGETS, domains, emailListBaseline (+25 more)

### Community 11 - "Community 11"
Cohesion: 0.06
Nodes (35): dom, dom.iterable, esnext, .next-4100/types/**/*.ts, .next-4101/types/**/*.ts, .next-4123/types/**/*.ts, .next-build/types/**/*.ts, .next-daylight/types/**/*.ts (+27 more)

### Community 12 - "Community 12"
Cohesion: 0.08
Nodes (23): buildKnowledgeGraph(), DirectoryRow, GRAPH_DEPT_ORDER, graphDeptRank(), KGEdge, KGEdgeKind, KGNode, KGNodeKind (+15 more)

### Community 13 - "Community 13"
Cohesion: 0.10
Nodes (25): assignLinkClusters(), BrainGraphSlice, cameraRect(), CameraState, distillMemoryGraph(), forceLayout(), frameOn(), hashId() (+17 more)

### Community 14 - "Community 14"
Cohesion: 0.17
Nodes (28): bandRadius(), FunnelRadial(), orbitTarget(), polar(), Pos, replayPos(), RING, staggerMs() (+20 more)

### Community 15 - "Community 15"
Cohesion: 0.12
Nodes (24): branchPath(), branchWidth(), cyclicDeltaF(), cyclicDist(), DEPTH_FRAC, edgeArc(), focusWheel, Pt (+16 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (22): GET(), ConnectionsPage(), ConnectFlow(), ConnectionCard(), IntegrationCategory(), BrandLogo(), HANDMADE, hasBrandMark() (+14 more)

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (27): GET(), GET(), mergeSeriesSum(), SocialDashboardSchema, SocialPlatform, SocialPlatformDetailSchema, allTimeDelta(), allTimeGrowthPct() (+19 more)

### Community 18 - "Community 18"
Cohesion: 0.16
Nodes (21): agoDays(), AttentionRow(), FunnelPage(), JourneyTableRows(), RELATIONSHIP_VAR, usd(), VENTURE_TABS, ventureColor() (+13 more)

### Community 19 - "Community 19"
Cohesion: 0.13
Nodes (21): AnalyticsPage(), barsFor(), fmtCount(), fmtShort(), MetricCard(), PLATFORM_ICONS, sparkFor(), tileValue() (+13 more)

### Community 20 - "Community 20"
Cohesion: 0.15
Nodes (22): BeehiivDashboardPage(), fmt(), pct(), dateLabel(), fmt(), NewsletterList(), pct(), beehiivPosts() (+14 more)

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (19): GET(), DELETE(), GET(), POST(), RemoveSchema, GET(), GET(), GET() (+11 more)

### Community 22 - "Community 22"
Cohesion: 0.11
Nodes (23): agoDays(), FunnelNodeCard(), LastMsg, RELATIONSHIP_COLOR, useLastMessage(), CHANNEL_GLYPHS, FunnelSpaceNode, acquisitionFor() (+15 more)

### Community 23 - "Community 23"
Cohesion: 0.12
Nodes (20): AgentRosterCard(), AgentsPage(), brightness(), emblemShade(), GET(), AgentActivityFeed(), clock(), KIND (+12 more)

### Community 24 - "Community 24"
Cohesion: 0.14
Nodes (21): GET(), SkillsPage(), truncate(), GROUP_ORDER, inline(), Markdown(), SkillCard, skillIcon() (+13 more)

### Community 25 - "Community 25"
Cohesion: 0.15
Nodes (19): SocialPlatformPage(), AudiencePie(), FollowerBarChart(), arcPath(), rad(), SharePie(), SLICE_VARS, formatFollowers() (+11 more)

### Community 26 - "Community 26"
Cohesion: 0.12
Nodes (20): groupThreads(), initials(), InstagramDmInbox(), relativeTime(), dateMinusDays(), fmtNum(), fmtPct(), growthOf() (+12 more)

### Community 27 - "Community 27"
Cohesion: 0.12
Nodes (23): agoLabel(), CAT, EDGE_COLOR, fixedLabel(), FOCUS_WHEEL, hashStr(), HEX_PTS_CACHE, hexPts() (+15 more)

### Community 28 - "Community 28"
Cohesion: 0.13
Nodes (16): LeadMagnetsPage(), PersonasPage(), ReferencePage(), STATUS_BADGE, WorkflowsPage(), NewLeadMagnet(), PageHeader(), Badge() (+8 more)

### Community 29 - "Community 29"
Cohesion: 0.14
Nodes (21): GraphDirectory(), GROUP_COLOR, GROUP_ICON, hashStr(), hoverKind(), NeuralGraph(), SHIMMER, sparkPts() (+13 more)

### Community 30 - "Community 30"
Cohesion: 0.21
Nodes (17): GET(), agoFrom(), PLATFORM_ICONS, platformLabel(), RECENT_POSTS, SocialPage(), AudienceConsistencyLazy, buildEmailList() (+9 more)

### Community 31 - "Community 31"
Cohesion: 0.18
Nodes (19): CommsPage(), SOURCE_ICON, annotatePriorities(), CAL_COLORS, CalAccount, caldavAccounts(), calendarStatus(), compact() (+11 more)

### Community 32 - "Community 32"
Cohesion: 0.09
Nodes (23): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, tsx, @types/better-sqlite3, @types/node (+15 more)

### Community 33 - "Community 33"
Cohesion: 0.10
Nodes (21): ai, better-sqlite3, d3-force, lucide-react, node-ical, nodemailer, dependencies, ai (+13 more)

### Community 34 - "Community 34"
Cohesion: 0.16
Nodes (18): GET(), zernioRun(), CONFIG_PATH, FollowerMap, parseHistory(), parseLiveAccounts(), parsePostDays(), pickFollowers() (+10 more)

### Community 35 - "Community 35"
Cohesion: 0.18
Nodes (17): CommsGravity(), Node, relativeTime(), SelectedMessage(), SOURCE_ICON, TIER_BANDS, tierColor(), CommsSource (+9 more)

### Community 36 - "Community 36"
Cohesion: 0.16
Nodes (16): Account, CommsTabs(), Tab, Account, dayKey(), EventBlock(), fmtHour(), fmtTime() (+8 more)

### Community 37 - "Community 37"
Cohesion: 0.26
Nodes (12): ghlStatus(), CHECKS, metaAdsStatus(), miroStatus(), countMarkdown(), obsidianStatus(), trakyoStatus(), ConnectorKind (+4 more)

### Community 38 - "Community 38"
Cohesion: 0.25
Nodes (16): ConnectBody, DELETE(), DisconnectBody, entryFor(), POST(), envLocalPath(), extractMcpEnvKey(), HOME (+8 more)

### Community 39 - "Community 39"
Cohesion: 0.20
Nodes (13): EmailListSummary, syncBeehiivEmail(), dateMs(), growthAllTime(), growthOver(), GrowthPoint, windowDelta(), EmailListSnapshotSchema (+5 more)

### Community 40 - "Community 40"
Cohesion: 0.17
Nodes (15): ATTIO_STAGE_MAP, AttioCompanyRecord, AttioContacts, AttioDeal, AttioPersonRecord, AttioPersonSlice, classifyVenture(), day() (+7 more)

### Community 41 - "Community 41"
Cohesion: 0.20
Nodes (9): StepCard(), usd(), WorkflowMap(), Workflow, WorkflowStep, workflowStats, TOOL_BRANDS, toolBrand (+1 more)

### Community 42 - "Community 42"
Cohesion: 0.17
Nodes (14): whatsappRun(), boundedRead(), calibratedDate(), ChatRow, CORE_DATA_EPOCH_MS, ReadFail, recentChats(), RecentRead (+6 more)

### Community 43 - "Community 43"
Cohesion: 0.18
Nodes (14): BrainDoc, buildBrainDocs(), DocsInput, fm(), link(), pillarSlugOf(), toolSlug(), writeBrainDocs() (+6 more)

### Community 44 - "Community 44"
Cohesion: 0.18
Nodes (15): ACTION_AGENTS, ACTION_LENSES, ALL_LENSES, CORE_DEPTS, ENABLING_DEPTS, ENTITY_LENSES, FUNCTION_LENSES, idSet() (+7 more)

### Community 45 - "Community 45"
Cohesion: 0.28
Nodes (8): GET(), GET(), CommsItem, gatherCommsFeed(), inboundLast24h(), mergeFeed(), lastMessageFor(), ContactTag

### Community 46 - "Community 46"
Cohesion: 0.22
Nodes (11): day(), ghlFunnelJourneys(), GhlOpportunity, GhlPipeline, mapGhlOpportunities(), stageFor(), FunnelJourneySchema, NOW (+3 more)

### Community 47 - "Community 47"
Cohesion: 0.19
Nodes (12): CreateSchema, DELETE(), DeleteSchema, GET(), PATCH(), PatchSchema, POST(), describeCron() (+4 more)

### Community 48 - "Community 48"
Cohesion: 0.26
Nodes (11): ENV_LOCAL, GET(), POST(), SetKeySchema, ApiKeys(), KEY_SLOTS, KeySlot, KeyStatus (+3 more)

### Community 49 - "Community 49"
Cohesion: 0.23
Nodes (11): DELETE(), PATCH(), PatchSchema, CreateSchema, GET(), POST(), slugify(), LeadMagnetStatusSchema (+3 more)

### Community 50 - "Community 50"
Cohesion: 0.23
Nodes (10): POST(), ReplySchema, slackRun(), sendEmailReply(), client(), recentMessages(), sendSlackMessage(), SlackMessage (+2 more)

### Community 51 - "Community 51"
Cohesion: 0.29
Nodes (9): GET(), attioFunnelJourneys(), mergeTrakyoTouches(), norm(), TrakyoEvent, trakyoTouches(), FunnelJourney, FunnelVenture (+1 more)

### Community 52 - "Community 52"
Cohesion: 0.22
Nodes (8): arcadsRun(), stripeSalesRun(), arcadsStatus(), client(), NotionPage, notionStatus(), recentPages(), stripeSnapshot

### Community 53 - "Community 53"
Cohesion: 0.26
Nodes (9): POST(), ReplySchema, base, ManyChatPageInfo, ManyChatSendResult, manychatStatus(), parseManyChatPageInfo(), NOTE: ManyChat's API cannot list DMs/conversations. The live DM inbox on (+1 more)

### Community 54 - "Community 54"
Cohesion: 0.29
Nodes (10): GET(), POST(), runSync(), zernioAccounts(), zernioLiveAccounts(), FollowerMap, LiveSyncOpts, syncFromZernioLive() (+2 more)

### Community 55 - "Community 55"
Cohesion: 0.24
Nodes (9): CopyLink(), LeadMagnetRowActions(), STATUSES, CAPTURES, dateLabel(), host(), LeadMagnets(), STATUS (+1 more)

### Community 56 - "Community 56"
Cohesion: 0.23
Nodes (6): PersonaOrgChart(), trunc(), PersonasViewer(), PERSONAS, Persona, PersonaSchema

### Community 57 - "Community 57"
Cohesion: 0.30
Nodes (11): imapflow, gmailRun(), emailStatus(), imapClientOptions(), InboxConfig, InboxUnread, latestEmails(), parseInboxConfigs() (+3 more)

### Community 58 - "Community 58"
Cohesion: 0.29
Nodes (8): AgentCard(), agoFrom(), ContentPage(), platformLabel(), prettyTool(), Dot(), contentAgents(), Agent

### Community 59 - "Community 59"
Cohesion: 0.20
Nodes (7): SocialDmMessage, seedDatabase(), skillDoc(), db, contextFromSeed(), seeded(), withSalesDept()

### Community 60 - "Community 60"
Cohesion: 0.44
Nodes (7): GET(), ALL_NAV, describeFunnelContext(), funnelContext(), FunnelContextInput, screenContextFor(), screenTitleFor()

### Community 61 - "Community 61"
Cohesion: 0.22
Nodes (9): scripts, brain:docs, build, dev, seed, start, test, test:watch (+1 more)

### Community 62 - "Community 62"
Cohesion: 0.46
Nodes (5): Fetch, form(), listRegistrants(), resolveKey(), webinarjamStatus()

### Community 63 - "Community 63"
Cohesion: 0.52
Nodes (5): attioClients(), AttioClientsResult, mapAttioDeals(), RosterClient, RosterClientSchema

### Community 64 - "Community 64"
Cohesion: 0.43
Nodes (6): binExists(), Check, HOME, localStackStatus(), ping(), tmuxSessions()

### Community 65 - "Community 65"
Cohesion: 0.50
Nodes (3): TasksPage(), COLUMNS, TaskBoard()

### Community 66 - "Community 66"
Cohesion: 0.50
Nodes (4): fmtWhen(), PLATFORMS, PostComposer(), SocialPost

### Community 68 - "Community 68"
Cohesion: 0.40
Nodes (4): description, name, private, version

## Knowledge Gaps
- **418 isolated node(s):** `PLATFORM_ICONS`, `CreateSchema`, `PatchSchema`, `ReplySchema`, `ENV_LOCAL` (+413 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **12 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `getDb()` connect `Community 21` to `Community 2`, `Community 3`, `Community 4`, `Community 6`, `Community 7`, `Community 8`, `Community 17`, `Community 18`, `Community 19`, `Community 23`, `Community 24`, `Community 25`, `Community 28`, `Community 30`, `Community 31`, `Community 47`, `Community 49`, `Community 51`, `Community 52`, `Community 53`, `Community 54`, `Community 58`, `Community 59`, `Community 60`, `Community 65`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 33` to `Community 68`, `Community 73`, `Community 75`, `Community 76`, `Community 77`, `Community 78`, `Community 57`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Why does `imapflow` connect `Community 57` to `Community 33`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `PLATFORM_ICONS`, `CreateSchema`, `PatchSchema` to the rest of the system?**
  _418 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.05679974034404414 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.05060882800608828 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.052403846153846155 - nodes in this community are weakly interconnected._