import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoStaticPathsDiscovery: true,
    },
    pages: [
      { path: "/" },
      { path: "/storitve" },
      { path: "/o-nas" },
      { path: "/obvestila" },
      { path: "/poti-do-nas" },
      { path: "/ponudba" },
    ],
  },
});
