// Lightweight route prefetch helper.
// Prefetch critical route bundles by importing their modules during idle time.

export function prefetchRoutes() {
  if (typeof window === 'undefined') return;

  const doPrefetch = () => {
    // Adjust the list below to include routes/pages you want eagerly preloaded.
    void import('@/pages/public/HomePage');
    void import('@/pages/public/MenuPage');
  };

  // Use requestIdleCallback when available otherwise setTimeout fallback.
  const rIC = (window as any).requestIdleCallback ?? function (cb: any) { return setTimeout(cb, 200); };
  rIC(doPrefetch, { timeout: 2000 });
}

export async function prefetchRoute(path: string) {
  // Map route to module dynamic import for on-demand prefetching (e.g. on hover)
  switch (path) {
    case '/':
      return import('@/pages/public/HomePage');
    case '/menu':
      return import('@/pages/public/MenuPage');
    case '/dashboard':
      return import('@/pages/app/Customer/DashboardPage');
    case '/admin':
      return import('@/pages/app/Admin/DashboardPage');
    default:
      return Promise.resolve();
  }
}
