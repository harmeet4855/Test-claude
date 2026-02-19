# CLAUDE.md

This file provides guidance for AI assistants (such as Claude) working in this repository. It covers repository conventions, development workflows, and operational guidelines.

---

## Repository Overview

- **Repository:** `harmeet4855/Test-claude`
- **Status:** New / in initial setup
- **Purpose:** Development repository managed with Claude Code (Anthropic's AI-powered CLI tool)

This is a freshly initialized Git repository with no existing source code. All conventions and structure documented here represent the intended standards for future development.

---

## Git Workflow

### Branching

- All AI-assisted development must occur on a dedicated `claude/` branch.
- Branch naming convention: `claude/<short-description>-<session-id>`
  - Example: `claude/add-claude-documentation-7MODw`
- Never push directly to `main` or `master` without explicit approval.
- Create branches locally if they do not yet exist:
  ```bash
  git checkout -b claude/<branch-name>
  ```

### Committing

- Write clear, descriptive commit messages focused on *why* a change was made.
- Keep commits atomic — one logical change per commit.
- Always sign commits as configured (GPG/SSH signing is enabled in this repo).
- Message format:
  ```
  <type>: <short summary>

  <optional body explaining why the change was made>
  ```
- Valid types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`

### Pushing

- Always push with upstream tracking:
  ```bash
  git push -u origin <branch-name>
  ```
- Only push to `claude/` branches (pushes to other branches may be rejected with HTTP 403).
- If a push fails due to a network error, retry up to 4 times with exponential backoff (2s, 4s, 8s, 16s).

### Fetching / Pulling

- Prefer fetching specific branches:
  ```bash
  git fetch origin <branch-name>
  ```
- Pull with explicit branch reference:
  ```bash
  git pull origin <branch-name>
  ```
- Retry on network failure with exponential backoff (same as push).

---

## Development Conventions

### File Editing

- Always read a file before modifying it — never propose edits to unread files.
- Prefer editing existing files over creating new ones.
- Do not create documentation files (README, changelogs, etc.) unless explicitly requested.
- Remove unused code entirely rather than commenting it out or adding deprecation stubs.

### Code Style

- Keep solutions minimal: write only the code needed to satisfy the current requirement.
- Do not add extra error handling, fallbacks, or validation for scenarios that cannot occur.
- Do not introduce premature abstractions or helper utilities for one-off operations.
- Only add code comments where the logic is non-obvious; do not comment self-evident code.
- Do not add type annotations, docstrings, or tests to code you did not author/modify.

### Security

- Never introduce command injection, XSS, SQL injection, or other OWASP Top 10 vulnerabilities.
- Validate input only at system boundaries (user input, external APIs).
- Do not commit secrets, credentials, `.env` files, or sensitive configuration.
- If asked to assist with security testing, ensure there is clear authorization context (pentest engagement, CTF, defensive use case).

---

## AI Assistant Guidelines

### General Behavior

- Prioritize technical accuracy over agreement. Correct the user respectfully when they are wrong.
- Investigate before confirming assumptions — search the codebase when uncertain.
- Never generate or guess URLs unless confident they are relevant and correct.
- Do not give time estimates for tasks.
- Output only what is necessary; avoid verbose responses or excessive praise.

### Task Management

- Use the `TodoWrite` tool to plan and track multi-step tasks.
- Mark todos as `in_progress` before starting work, and `completed` immediately after finishing.
- Only one task should be `in_progress` at a time.
- Break large tasks into small, actionable steps with clear descriptions.

### Tool Usage

- Use specialized tools in preference to generic bash commands:
  - Read files with the `Read` tool, not `cat`/`head`/`tail`
  - Edit files with the `Edit` tool, not `sed`/`awk`
  - Write files with the `Write` tool, not `echo` redirection
  - Search files with `Grep`/`Glob`, not `grep`/`find` in bash
- Make independent tool calls in parallel whenever possible.
- For broad codebase exploration, use the `Explore` agent (Task tool).

### Pull Requests

- PR titles must be concise (under 70 characters).
- PR bodies should use the following structure:
  ```
  ## Summary
  - <bullet points describing what changed and why>

  ## Test plan
  - [ ] <manual or automated test steps>
  ```

---

## Project Setup (To Be Defined)

As this repository grows, update this section with:

- **Language / runtime:** e.g., Node.js 20, Python 3.12, Go 1.22
- **Package manager:** e.g., `npm`, `pnpm`, `pip`, `go mod`
- **Install dependencies:** e.g., `npm install`
- **Run development server:** e.g., `npm run dev`
- **Run tests:** e.g., `npm test`
- **Run linter:** e.g., `npm run lint`
- **Build:** e.g., `npm run build`

---

## Environment

| Property | Value |
|---|---|
| Platform | Linux |
| Git remote | `http://127.0.0.1:22196/git/harmeet4855/Test-claude` |
| Default AI branch prefix | `claude/` |
| Commit signing | SSH (GPG format) |

---

*This file was generated by Claude Code on 2026-02-19 and should be kept up to date as the project evolves.*
