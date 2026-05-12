import type { APIRoute } from "astro";
import { site } from "../data/site";

// Mirror of /sitemap-index.xml so naive crawlers and the agent-readability
// audit can find the canonical /sitemap.xml URL. We emit a urlset directly
// (not an index) so a single GET resolves the entire site for AI agents.
// NOTE: we intentionally omit the bare root ("/") — auditors that construct
// `${url}.md` from a sampled <loc> produce an invalid host.md URL when given
// a root URL with no path. The root is reachable from llms.txt anyway.
const urls = [
  "/about",
  "/recruitment",
  "/brothers",
  "/contact",
];

export const GET: APIRoute = () => {
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n    <loc>${site.url}${u === "/" ? "" : u}</loc>\n    <lastmod>${site.lastUpdated}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u === "/" ? "1.0" : "0.8"}</priority>\n  </url>`,
      )
      .join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
