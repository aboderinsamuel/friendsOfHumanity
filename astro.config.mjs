import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  server: {
    host: true, // Listen on all addresses
    port: 4321,
  },
  vite: {
    server: {
      hmr: {
        protocol: 'wss',
        clientPort: 443,
        path: '/hmr/',
      },
      // Allow all hosts - this is safe since ngrok generates random subdomains
      cors: true,
      strictPort: true,
      allowedHosts: 'all',
    }
  }
});