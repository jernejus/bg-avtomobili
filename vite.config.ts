import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        crawlLinks: false,
      },
    },
    prerender: {
      crawlLinks: false,
      autoStaticPathsDiscovery: true,
      failOnError: false,
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
