/**
 * Paste any common video URL - embed + thumbnail are derived automatically.
 * Supports YouTube (watch / youtu.be / shorts / embed / live) and Vimeo.
 */

export type VideoProvider = 'youtube' | 'vimeo';

export type ParsedVideo = {
  provider: VideoProvider;
  id: string;
  /** Privacy-friendly embed URL (no autoplay yet). */
  embedSrc: string;
  /** Best-effort public thumbnail. */
  thumbnailSrc: string;
  /** Shorts → portrait; classic YouTube / Vimeo → landscape. */
  aspect: 'portrait' | 'landscape';
  isShort: boolean;
};

const YT_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'music.youtube.com',
  'youtu.be',
  'www.youtu.be',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
]);

function hostOf(raw: string): string | null {
  try {
    return new URL(raw.trim()).hostname.toLowerCase();
  } catch {
    return null;
  }
}

/** Extract 11-char YouTube id from any usual link or bare id. */
export function extractYoutubeId(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;

  if (/^[\w-]{11}$/.test(raw)) return raw;

  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const id = url.pathname.split('/').filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host.endsWith('youtube.com') || host.endsWith('youtube-nocookie.com')) {
      const v = url.searchParams.get('v');
      if (v && /^[\w-]{11}$/.test(v)) return v;

      const parts = url.pathname.split('/').filter(Boolean);
      // /embed/ID | /shorts/ID | /live/ID | /v/ID
      const markers = new Set(['embed', 'shorts', 'live', 'v', 'e']);
      for (let i = 0; i < parts.length - 1; i += 1) {
        if (markers.has(parts[i]) && /^[\w-]{11}$/.test(parts[i + 1])) {
          return parts[i + 1];
        }
      }
    }
  } catch {
    // ignore
  }

  const fallback = raw.match(/(?:v=|\/embed\/|\/shorts\/|\/live\/|youtu\.be\/)([\w-]{11})/);
  return fallback?.[1] ?? null;
}

export function extractVimeoId(input: string): string | null {
  const raw = input.trim();
  if (!raw) return null;
  if (/^\d{6,12}$/.test(raw)) return raw;

  try {
    const url = new URL(raw);
    if (!url.hostname.includes('vimeo.com')) return null;
    const match = url.pathname.match(/\/(?:video\/)?(\d{6,12})/);
    return match?.[1] ?? null;
  } catch {
    const match = raw.match(/vimeo\.com\/(?:video\/)?(\d{6,12})/);
    return match?.[1] ?? null;
  }
}

function isYoutubeShort(input: string): boolean {
  try {
    return new URL(input.trim()).pathname.includes('/shorts/');
  } catch {
    return false;
  }
}

export function parseVideoUrl(input: string): ParsedVideo | null {
  const raw = input.trim();
  if (!raw) return null;

  const ytId = extractYoutubeId(raw);
  if (ytId) {
    const short = isYoutubeShort(raw);
    return {
      provider: 'youtube',
      id: ytId,
      embedSrc: `https://www.youtube-nocookie.com/embed/${ytId}`,
      // hqdefault is reliably available; maxresdefault 404s on some uploads
      thumbnailSrc: `https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`,
      aspect: short ? 'portrait' : 'landscape',
      isShort: short,
    };
  }

  const vimeoId = extractVimeoId(raw);
  if (vimeoId) {
    return {
      provider: 'vimeo',
      id: vimeoId,
      embedSrc: `https://player.vimeo.com/video/${vimeoId}`,
      thumbnailSrc: '',
      aspect: 'landscape',
      isShort: false,
    };
  }

  const host = hostOf(raw);
  if (host && YT_HOSTS.has(host)) return null;

  return null;
}

/** Build final iframe src with provider-correct query params. */
export function buildVideoEmbedSrc(embedBase: string, playing: boolean): string {
  try {
    const url = new URL(embedBase);
    const host = url.hostname.replace(/^www\./, '');

    if (host.includes('youtube') || host.includes('youtube-nocookie')) {
      url.searchParams.set('rel', '0');
      url.searchParams.set('modestbranding', '1');
      url.searchParams.set('playsinline', '1');
      url.searchParams.set('iv_load_policy', '3');
      if (playing) url.searchParams.set('autoplay', '1');
      else url.searchParams.delete('autoplay');
      return url.toString();
    }

    if (host.includes('vimeo')) {
      url.searchParams.set('title', '0');
      url.searchParams.set('byline', '0');
      url.searchParams.set('portrait', '0');
      url.searchParams.set('dnt', '1');
      if (playing) url.searchParams.set('autoplay', '1');
      else url.searchParams.delete('autoplay');
      return url.toString();
    }

    if (playing) url.searchParams.set('autoplay', '1');
    return url.toString();
  } catch {
    return embedBase;
  }
}
