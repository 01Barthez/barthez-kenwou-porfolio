/**
 * Fixed EUR → XAF (FCFA) peg — BCEAO / BEAC since 1999.
 * 1 EUR = 655.957 XAF (exact legal rate).
 */
export const EUR_TO_XAF = 655.957;

export type DisplayCurrency = 'EUR' | 'XAF';

export function eurToXaf(amountEur: number): number {
  return Math.round(amountEur * EUR_TO_XAF);
}

export function formatServicePrice(
  amountEur: number,
  currency: DisplayCurrency,
  options?: { hourly?: boolean; locale?: 'fr' | 'en' },
): string {
  const hourly = options?.hourly ?? false;
  const locale = options?.locale ?? 'fr';

  if (currency === 'EUR') {
    const formatted = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(amountEur);
    return hourly ? `${formatted}/h` : formatted;
  }

  const xaf = eurToXaf(amountEur);
  const formatted = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    maximumFractionDigits: 0,
  }).format(xaf);
  return hourly ? `${formatted} FCFA/h` : `${formatted} FCFA`;
}
