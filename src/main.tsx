import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRoot } from './app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
);

// Modular PWA registration: only attempt to register if the Vite env flag is enabled.
if ((import.meta as any).env?.VITE_ENABLE_PWA === 'true') {
  import('./app/config/pwa/registerServiceWorker')
    .then((m) => m.registerServiceWorker())
    .catch((e) => console.warn('[PWA] registration failed', e));
}
