import { lazy } from 'react';

// Helper to standardize lazy-loaded pages.
// Accepts a loader function that returns a dynamic import promise
// and an optional exported symbol name when the module doesn't default-export a component.
export function lazyPage(loader: () => Promise<any>, exportName?: string) {
  return lazy(() => loader().then((m) => ({ default: exportName ? m[exportName] : m.default })));
}
