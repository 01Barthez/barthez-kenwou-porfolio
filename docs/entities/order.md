# Order entity

Order captures an intent to purchase. Key fields:

- `id: string`
- `items: Array<{dishId: string, qty: number, price: number}>`
- `total: number`
- `status: string` (e.g. `pending`, `paid`, `fulfilled`)

Keep mapping logic in `src/entities/order` using explicit types and DTOs.
