import { createAppStore } from '@/shared/state/createStore';
import { imageIcon } from '../api/mocks/skillsData.mocks';
import { preloadSkillIcons } from '../lib/preloadSkillIcons';

type SkillIconsStatus = 'idle' | 'loading' | 'ready';

type SkillIconsState = {
  status: SkillIconsStatus;
  failed: number;
  /** Idempotent: warms browser cache once per session, then resolves instantly. */
  ensureLoaded: () => Promise<void>;
};

let inflight: Promise<void> | null = null;

/**
 * Session-scoped readiness for skill logos.
 * Stores only status (not blobs) - the browser HTTP cache holds the bytes.
 */
export const useSkillIconsStore = createAppStore<SkillIconsState>(
  (set, get) => ({
    status: 'idle',
    failed: 0,
    ensureLoaded: () => {
      if (get().status === 'ready') {
        return Promise.resolve();
      }

      if (inflight) {
        return inflight;
      }

      set({ status: 'loading' });

      inflight = preloadSkillIcons(imageIcon)
        .then(({ failed }) => {
          set({ status: 'ready', failed });
        })
        .catch(() => {
          // Never trap the page behind a dead loader.
          set({ status: 'ready', failed: imageIcon.length });
        })
        .finally(() => {
          inflight = null;
        });

      return inflight;
    },
  }),
  { name: 'skill-icons', enablePersist: false },
);
