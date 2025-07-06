// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  output: "static",

  // This must match your repo name
  base: "/fontend-blogs/",
  site: 'https://iamharshad.github.io/fontend-blogs', // ✅ Required for sitemap

  vite: {
    plugins: [tailwindcss(), sitemap()],
  },

  integrations: [sitemap()],
});
