// Feature flags pour activer/désactiver des fonctionnalités
export const featureFlags = {
  ENABLE_ANALYTICS: true,
  ENABLE_DARK_MODE: false,
  ENABLE_ADMIN_DASHBOARD: true,
  ENABLE_CHECKOUT_PROCESS: false,
  ENABLE_SOCIAL_LOGIN: false,
} as const;

export type FeatureFlags = typeof featureFlags;
