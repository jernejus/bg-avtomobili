import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: false,
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
