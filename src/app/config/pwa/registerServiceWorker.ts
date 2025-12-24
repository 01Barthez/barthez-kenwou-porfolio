/*
  Modular service worker registration helper.
  It registers the service worker produced by `vite-plugin-pwa` when
  `import.meta.env.VITE_ENABLE_PWA === 'true'`.
  This file is intentionally minimal and can be removed to "detransform" the app.
*/
export async function registerServiceWorker(): Promise<void> {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

  try {
    const reg = await navigator.serviceWorker.register('/sw.js');
    // optional: listen for updates
    reg.addEventListener?.('updatefound', () => {
      const newWorker = reg.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed') {
          // new content available
          console.log('[PWA] Service worker installed/updated');
        }
      });
    });
    console.log('[PWA] Service worker registered', reg.scope);
  } catch (err) {
    console.warn('[PWA] Service worker registration failed', err);
  }
}

export async function unregisterServiceWorker(): Promise<void> {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  const regs = await navigator.serviceWorker.getRegistrations();
  await Promise.all(regs.map((r) => r.unregister()));
}

// Keep named exports only (avoid default export per lint rules)
