# 001 — Architecture choice

Status: accepted

## Context

We need a frontend architecture that is easy to maintain and scale for multiple features.

## Decision

We adopt a feature-first structure with shared and entities folders, Vite for build, and a multi-stage Dockerfile for production.

## Consequences

- Easier team ownership per feature.
- Small shared surface to avoid coupling.
