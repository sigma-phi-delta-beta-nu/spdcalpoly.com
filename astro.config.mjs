import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// SITE_URL override lets us point sitemap.xml + canonical URLs at localhost
// during a local agent-readability audit run. Production builds leave it unset.
const site = process.env.SITE_URL ?? "https://spdcalpoly.com";

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "never",
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
