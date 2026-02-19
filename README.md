# Open Context Vault

Portable, open, and model-agnostic memory standard for humans and AI apps.

## Why this exists

People lose context across chat apps, docs, emails, and tools. Open Context Vault gives a simple, portable format to keep memory structured and reusable across products.

## What you can do today

- Define memory entries in `examples/memory.json`.
- Validate with a local CLI (`npm run validate`).
- Track product decisions in `docs/DECISIONS.md`.
- Keep roadmap and experiments in Git from day one.

## Core concept

A memory entry has:

- `id`: stable identifier.
- `source`: where the memory came from.
- `kind`: event, preference, task, or knowledge.
- `content`: atomic human-readable text.
- `tags`: retrieval hints.
- `createdAt` / `updatedAt`: ISO timestamps.
- `sensitivity`: low, medium, high.

## Quick start

```bash
npm install
npm run validate
```

## Product roadmap

- v0.1: JSON schema + local validator CLI.
- v0.2: adapters (Notion export, Markdown notes, chat logs).
- v0.3: encrypted vault format + sync strategy.
- v0.4: SDKs (TS/Python) + retrieval benchmark.

## Vision

Make personal and team context portable, durable, and vendor-independent.
