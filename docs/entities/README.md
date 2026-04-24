# 📦 Entities

Entities are the core business domain models of the portfolio. They define the data structures and contracts used across the application.

## Core Entities

- [**Project**](./project.md) — Portrays the technical works and products.
- [**Blog**](./blog.md) — Articles, snippets, and educational content.
- [**Skill**](./skill.md) — Technical competencies and tools.
- [**Service**](./service.md) — Professional offerings (DevOps, Cloud, Development).

## General Rules

1. **Schema Validation**: All entities must define a Zod schema for runtime validation (especially for data coming from Velite).
2. **Type Safety**: Entities should export TypeScript types derived from their Zod schemas.
3. **Mappers**: If the raw data from the content layer doesn't match the UI requirements, provide a small mapper in the entity slice.
