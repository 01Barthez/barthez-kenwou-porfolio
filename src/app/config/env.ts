// Configuration des variables d'environnement typées
export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  NODE_ENV: import.meta.env.NODE_ENV,
  VITE_APP_TITLE: import.meta.env.VITE_APP_TITLE || 'Frontend App',
  // Ajouter d'autres variables d'environnement selon les besoins
} as const;

export type Env = typeof env;
