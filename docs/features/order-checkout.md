# Order Checkout

Handles the checkout flow, order creation and payment orchestration.

Location: `src/features/order-checkout`

Key files:

- `model/checkout.service.ts` — payment and order creation APIs.
- `model/useOrderCheckout.ts` — orchestrates steps and side-effects.
- `ui/CheckoutForm.ui.tsx` — collects customer info and payment method.

Security:

- Never handle payment card details directly unless using a PCI-compliant integration (e.g. Stripe Elements).
