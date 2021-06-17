import { defineConfig } from '@midwayjs/hooks';

export default defineConfig({
  superjson: true,
  routes: [
    {
      baseDir: 'lambda',
      basePath: '/api',
    },
  ],
  build: {
    viteOutDir: null
  }
} as any);
