# API conventions

- Use consistent base path: `/api`.
- Resource names: plural where appropriate (`/api/orders`).
- Use HTTP status codes semantically: `200` for OK, `201` for created, `400` for client errors, `401/403` for auth, `500` for server errors.
- Return JSON payloads with a stable envelope when possible:

```json
{
  "data": {...},
  "error": null
}
```
