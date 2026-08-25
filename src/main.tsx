import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRoot } from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);

// PWA only in production builds - Vite dev has no sw.js (SPA fallback returns HTML).
if (import.meta.env.PROD && import.meta.env.VITE_ENABLE_PWA === 'true') {
  import('./app/config/pwa/registerServiceWorker')
    .then((m) => m.registerServiceWorker())
    .catch((e) => console.warn('[PWA] registration failed', e));
}
