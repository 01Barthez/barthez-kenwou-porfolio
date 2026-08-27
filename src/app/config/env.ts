// Configuration des variables d'environnement typées
export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  NODE_ENV: import.meta.env.NODE_ENV,
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE || 'Frontend App',
  ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL as string | undefined,
  ADMIN_PASSWORD: import.meta.env.VITE_ADMIN_PASSWORD as string | undefined,
  ADMIN_USE_API: import.meta.env.VITE_ADMIN_USE_API === 'true',
} as const;

export type Env = typeof env;
