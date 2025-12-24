# Error handling

Frontend should map HTTP errors to a structured `ApiError` type. Examples:

- Client error: show user-friendly message.
- Auth error: redirect to login or refresh token if possible.
- Server error: log to Sentry and show a generic message.

See `src/shared/api/client.ts` for the centralized mapping implementation.
