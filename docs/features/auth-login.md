# Auth Login

This feature manages user authentication flows (login form, token handling).

Location: `src/features/auth-login`

Key files:

- `model/login.service.ts` — low-level API calls.
- `model/useLogin.ts` — hook to orchestrate login and update stores.
- `ui/LoginForm.ui.tsx` — presentational form component.

Guidelines:

- Do not store sensitive token logic in UI components. Keep token persistence in a single store or service.
- Use `apiClient` to perform auth requests.
