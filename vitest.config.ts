import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    threads: false,
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      // Broken under current Vitest/Vite SSR interop — re-enable after Image test rewrite
      '**/Image/Image.test.tsx',
    ],
    passWithNoTests: true,
  },
  plugins: [tsconfigPaths()],
});
