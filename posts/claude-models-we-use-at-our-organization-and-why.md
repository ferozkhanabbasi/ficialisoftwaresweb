---
title: "Claude Models We Use at Our Organization — and Why"
description: "We use multiple Claude models for different tasks in our vibe coding workflow. Here is a practical breakdown of Haiku, Sonnet, and Opus."
date: "2026-06-15"
author: "Feroz Khan"
tags: ["Claude", "Anthropic", "AI models", "vibe coding", "development", "claude-ai", "anthropic", "claude-sonnet", "claude-opus", "claude-haiku", "claude-vs-chatgpt", "ai-coding-assistant", "llm", "vibe-coding", "claude-api"]
---

## A quick background

In our previous post we talked about how we use vibe coding to build complex projects. One question we get asked a lot is: *which Claude model do you actually use?*

The honest answer is — all of them. Different models shine in different situations, and knowing which one to reach for is a skill in itself. Here is how we think about it.

## The Claude model family

Anthropic offers three tiers of Claude models, each with a different balance of speed, cost, and capability:

| Model | Best for | Speed | Cost |
|-------|----------|-------|------|
| Claude Haiku | Fast, simple tasks | Fastest | Lowest |
| Claude Sonnet | Everyday dev work | Balanced | Mid |
| Claude Opus | Complex reasoning | Slower | Highest |

Let us walk through how each one fits into our workflow.

---

## Claude Haiku — our workhorse for quick tasks

Haiku is the lightest and fastest model in the Claude family. We use it constantly throughout the day for tasks that do not require deep reasoning.

**What we use Haiku for:**
- Autocomplete suggestions inside our editor (via API)
- Writing and formatting commit messages
- Generating boilerplate code (CRUD endpoints, config files)
- Answering quick "how do I do X in Python" questions
- Reformatting or linting code snippets
- First-pass documentation drafts

Haiku is surprisingly capable for its size. When speed matters more than depth — and that is most of the time — Haiku is the right choice. It keeps our flow uninterrupted.

---

## Claude Sonnet — our daily driver for real development

Sonnet sits in the sweet spot between capability and speed. It is the model we use most for actual coding tasks in our vibe coding workflow.

**What we use Sonnet for:**
- Writing new features and modules from a description
- Debugging complex errors with full context
- Reviewing pull requests and suggesting improvements
- Designing database schemas and API structures
- Explaining unfamiliar codebases to new team members
- Claude Code sessions for agentic terminal tasks

Sonnet handles multi-file context well, reasons through tradeoffs clearly, and produces code that rarely needs major rework. For most of our vibe coding sessions, Sonnet is what we have open.

---

## Claude Opus — our heavy lifter for hard problems

Opus is Anthropic's most powerful model. We do not use it for everything — that would be overkill — but when we hit a genuinely hard problem, Opus is where we turn.

**What we use Opus for:**
- Architecting systems from scratch (data models, microservice boundaries, auth flows)
- Reviewing security-sensitive code before production deployment
- Solving bugs that have stumped the whole team
- Reasoning through complex business logic with many edge cases
- Evaluating architectural tradeoffs across multiple approaches
- Writing technical specs and RFCs that require deep thinking

Opus takes a bit longer and costs more per token, but for decisions that affect the whole system, the quality difference is worth it.

---

## How we decide which model to use

We follow a simple rule of thumb internally:

> **Haiku** for anything under 30 seconds of thinking. **Sonnet** for anything that needs a solid, working answer. **Opus** for anything that could break production if we get it wrong.

Over time, this intuition becomes second nature. Junior developers on our team now naturally reach for the right model without thinking about it.

## A note on Claude Code

Beyond the chat interface, we also use **Claude Code** — Anthropic's CLI tool — for agentic coding tasks. Claude Code can read files, run commands, edit multiple files, and work autonomously through a task while you review its progress.

We use Claude Code for:
- Refactoring large codebases
- Running migrations with validation steps
- Setting up new project scaffolding end-to-end
- Automating repetitive multi-step dev tasks

Claude Code uses Sonnet by default and is one of the most powerful additions to our workflow.

---

## Final thoughts

The biggest shift in our team's thinking was moving away from "which AI tool should we use" to "which model is right for this specific task." The Claude model family gives us that flexibility — a fast model for quick work, a smart model for daily development, and a powerful model for the hard stuff.

If you are just getting started with Claude in your organization, our advice is simple: start with Sonnet for everything, then learn when Haiku saves you time and when Opus earns its cost.

---

*This is part of our ongoing series on vibe coding and AI-assisted development. Read the previous post: [How We Use Vibe Coding to Build Complex Projects at Scale](#)*
