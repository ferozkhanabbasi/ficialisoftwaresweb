---
title: "How We Build Multi-Agent Systems with LangGraph and Claude"
description: "A technical deep-dive into how our team architects and ships multi-agent systems — covering orchestration with LangGraph, agent design patterns and tool use."
date: "2026-06-15"
author: "Feroz Khan"
tags: ["multi-agent ai", "langgraph", "langchain", "claude api", "ai agents", "agentic ai", "llm orchestration", "ai automation", "vibe coding", "ai-powered products"]
---

## Why multi-agent architecture?

Single-agent systems hit a ceiling fast. When a task is long, involves multiple distinct domains, or requires parallel workstreams, a single LLM call — no matter how capable the model — becomes a bottleneck.

Multi-agent architecture solves this by splitting complex tasks across specialized agents, each with a focused role, its own tools, and its own context window. An orchestrator coordinates them. The result is a system that is more reliable, easier to debug, and far more capable on complex real-world tasks than any single agent.

At our organization we have built multi-agent systems across four domains: web apps and APIs, AI-powered products, automation workflows, and data pipelines. Here is exactly how we do it.

---

## Our stack

| Layer | Tool |
|-------|------|
| Orchestration | LangGraph |
| LLM backbone | Claude (Anthropic) via API |
| Agent framework | LangChain |
| Models used | Claude Fable 5 (orchestrator), Claude Sonnet (workers), Claude Haiku (lightweight tasks) |
| Memory | LangGraph state + external vector store (pgvector) |
| Tools | Custom Python functions, REST APIs, database connectors |

---

## Core concepts we follow

Before diving into implementation, here are the architectural principles that guide every multi-agent system we build.

### 1. Separation of concerns per agent

Each agent has one job. We never build a "general agent" that does everything. Instead:

- An **orchestrator agent** breaks down the goal and routes subtasks
- **Specialist agents** execute specific subtasks (data fetcher, code writer, validator, summarizer)
- A **reviewer agent** checks outputs before they are returned or persisted

This makes agents independently testable and replaceable.

### 2. Explicit state management

All agents share a typed state object — a single source of truth for the entire graph. No agent communicates with another directly. They only read from and write to the shared state. This prevents drift and makes debugging straightforward.

### 3. Deterministic edges with conditional routing

We avoid fully autonomous routing wherever possible. LangGraph's conditional edges let us write explicit routing logic:

```python
def route_task(state: AgentState) -> str:
    if state["task_type"] == "data_fetch":
        return "data_agent"
    elif state["task_type"] == "code_generation":
        return "code_agent"
    elif state["task_type"] == "validation":
        return "validator_agent"
    else:
        return "orchestrator"
```

The LLM decides *what* to do. The graph decides *where to route it*. This separation is critical for reliability.

---

## How we structure a LangGraph multi-agent system

### Step 1 — Define the shared state

```python
from typing import TypedDict, Annotated, List
from langgraph.graph import StateGraph
import operator

class AgentState(TypedDict):
    goal: str
    task_type: str
    subtasks: List[str]
    completed: Annotated[List[str], operator.add]
    current_output: str
    errors: Annotated[List[str], operator.add]
    final_result: str
```

Every agent reads from and writes to this state. Nothing lives outside it.

### Step 2 — Build the orchestrator agent

The orchestrator uses Claude Fable 5. It receives the top-level goal, breaks it into subtasks, and assigns each one a `task_type` that maps to a specialist agent.

```python
from langchain_anthropic import ChatAnthropic
from langchain_core.messages import SystemMessage, HumanMessage

orchestrator_llm = ChatAnthropic(model="claude-fable-5")

def orchestrator_node(state: AgentState) -> AgentState:
    response = orchestrator_llm.invoke([
        SystemMessage(content="""
            You are an orchestrator. Given a goal, break it into
            subtasks. For each subtask assign one of:
            data_fetch, code_generation, validation, summarization.
            Return JSON only.
        """),
        HumanMessage(content=f"Goal: {state['goal']}")
    ])
    parsed = parse_json(response.content)
    return {
        **state,
        "subtasks": parsed["subtasks"],
        "task_type": parsed["subtasks"][0]["type"]
    }
```

### Step 3 — Build specialist agents

Each specialist agent uses a model matched to its complexity. Heavy reasoning tasks use Sonnet. Fast, structured tasks use Haiku.

```python
worker_llm = ChatAnthropic(model="claude-sonnet-4-6")
fast_llm   = ChatAnthropic(model="claude-haiku-4-5-20251001")

def code_agent_node(state: AgentState) -> AgentState:
    response = worker_llm.invoke([
        SystemMessage(content="You are an expert Python developer."),
        HumanMessage(content=f"Write code for: {state['subtasks'][0]}")
    ])
    return {**state, "current_output": response.content}

def data_agent_node(state: AgentState) -> AgentState:
    response = worker_llm.invoke([
        SystemMessage(content="You are a data retrieval specialist."),
        HumanMessage(content=f"Fetch and structure: {state['subtasks'][0]}")
    ])
    return {**state, "current_output": response.content}

def validator_node(state: AgentState) -> AgentState:
    response = fast_llm.invoke([
        SystemMessage(content="Validate this output. Return PASS or FAIL with reason."),
        HumanMessage(content=state["current_output"])
    ])
    return {**state, "current_output": response.content}
```

### Step 4 — Wire the graph

```python
from langgraph.graph import StateGraph, END

graph = StateGraph(AgentState)

graph.add_node("orchestrator", orchestrator_node)
graph.add_node("code_agent",   code_agent_node)
graph.add_node("data_agent",   data_agent_node)
graph.add_node("validator",    validator_node)

graph.set_entry_point("orchestrator")

graph.add_conditional_edges(
    "orchestrator",
    route_task,
    {
        "code_generation": "code_agent",
        "data_fetch":      "data_agent",
    }
)

graph.add_edge("code_agent", "validator")
graph.add_edge("data_agent", "validator")
graph.add_edge("validator",  END)

app = graph.compile()
```

### Step 5 — Run it

```python
result = app.invoke({
    "goal": "Build a REST API endpoint that fetches user orders and returns a summary",
    "task_type": "",
    "subtasks": [],
    "completed": [],
    "current_output": "",
    "errors": [],
    "final_result": ""
})

print(result["current_output"])
```

---

## Patterns we use in production

### Pattern 1 — Supervisor + workers (most common)

One orchestrator delegates to N workers. Works well for tasks that can be parallelized across independent subtasks — e.g. processing multiple data sources simultaneously.

```
Orchestrator
├── Data Agent (fetches from API)
├── Data Agent (fetches from DB)
└── Aggregator Agent (merges results)
```

### Pattern 2 — Sequential pipeline

Agents form a chain where each passes its output to the next. We use this for data pipelines — extract → transform → validate → load.

```
Extractor → Transformer → Validator → Loader
```

### Pattern 3 — Critic loop

A worker agent produces output, a critic agent reviews it, and if it fails the review it loops back. We use this for code generation and API response formatting where quality must meet a strict standard.

```
Code Agent → Critic Agent
     ↑              |
     └── FAIL ──────┘
                    |
                   PASS → END
```

---

## How we apply this across our domains

**Web apps and APIs** — We use the supervisor pattern to generate endpoint code, write tests, validate against an OpenAPI spec, and produce documentation in one automated flow.

**AI-powered products** — Multi-agent pipelines power our RAG (retrieval-augmented generation) products. One agent retrieves, one re-ranks, one synthesizes, one formats the final response.

**Automation workflows** — Complex automation tasks (e.g. processing incoming data, triggering actions, notifying stakeholders) are modeled as sequential pipelines with critic loops at validation steps.

**Data pipelines** — We run fully agentic ETL pipelines where agents handle schema inference, transformation logic, error recovery, and output validation without human intervention.

---

## Lessons from production

**1. Always define state types strictly.** Untyped state causes silent bugs that are very hard to trace. Use `TypedDict` and validate on every node transition.

**2. Log every node transition.** LangGraph supports callbacks — use them. You want a full trace of what each agent received and returned for every run.

**3. Match model to task, not preference.** Using Fable 5 for every agent is wasteful and slow. Haiku handles validation and formatting. Sonnet handles generation. Fable handles orchestration and hard reasoning. This keeps cost and latency under control.

**4. Design for failure.** Every agent node should handle exceptions and write to `state["errors"]`. The orchestrator should check the error list before proceeding. Never let a silent failure propagate silently through the graph.

**5. Human-in-the-loop checkpoints matter.** For high-stakes workflows, add `interrupt_before` checkpoints in LangGraph so a human can review before the graph continues. This is non-negotiable in production.

---

## Final thoughts

Multi-agent development with LangGraph and Claude is the most powerful pattern we have used in our vibe coding workflow. It lets small teams tackle problems that would have required large engineering departments just two years ago.

The learning curve is real — getting state management, routing logic, and agent scoping right takes practice. But once you internalize the patterns, you will find yourself reaching for multi-agent architecture instinctively for any sufficiently complex task.

We are continuing to expand our multi-agent systems across new domains. Expect more posts in this series covering memory management, tool use, and running multi-agent workflows in production at scale.

---

*Part of our vibe coding series: [How We Use Vibe Coding](#) | [Claude Models We Use](#) | [Claude Fable 5 & Mythos 5](#) | [AI Tools We Use](#)*