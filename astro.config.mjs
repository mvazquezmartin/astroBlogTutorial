import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://mvazquezmartin.github.io/',
  base: 'astroBlogTutorial',
  integrations: [preact()],
});
