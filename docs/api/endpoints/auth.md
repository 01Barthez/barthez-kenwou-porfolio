# Auth endpoints

- `POST /api/auth/login` — body: `{ email, password }` — returns `{ token, user }`.
- `POST /api/auth/refresh` — refresh token flow if implemented.

Client: use `apiClient.post('/auth/login', { email, password })`.
