# User entity

Defines the user data contract used across the application.

Fields (example):

- `id: string`
- `email: string`
- `displayName?: string`
- `roles?: string[]`

Keep validation in `entities/user/model` (zod / yup / io-ts) and map API DTOs to domain shapes using small mappers.
