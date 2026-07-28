/**
 * Warm the browser HTTP cache for skill logo URLs.
 * Failures are tolerated — UI must not block forever on a single CDN miss.
 */
export async function preloadSkillIcons(
  urls: string[],
  options?: { concurrency?: number; timeoutMs?: number },
): Promise<{ loaded: number; failed: number }> {
  const unique = Array.from(new Set(urls.filter((u) => u.startsWith('http'))));
  if (unique.length === 0) {
    return { loaded: 0, failed: 0 };
  }

  const concurrency = Math.max(1, options?.concurrency ?? 10);
  const timeoutMs = options?.timeoutMs ?? 10_000;
  let loaded = 0;
  let failed = 0;
  let cursor = 0;

  const loadOne = (url: string) =>
    new Promise<void>((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      let settled = false;
      const settle = (ok: boolean) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timer);
        if (ok) loaded += 1;
        else failed += 1;
        resolve();
      };

      const timer = window.setTimeout(() => settle(false), timeoutMs);
      img.onload = () => settle(true);
      img.onerror = () => settle(false);
      img.src = url;

      if (img.complete && img.naturalWidth > 0) {
        settle(true);
      }
    });

  const workers = Array.from({ length: Math.min(concurrency, unique.length) }, async () => {
    while (cursor < unique.length) {
      const index = cursor;
      cursor += 1;
      await loadOne(unique[index]);
    }
  });

  await Promise.all(workers);
  return { loaded, failed };
}
