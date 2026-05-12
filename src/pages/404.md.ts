import type { APIRoute } from "astro";
import { site } from "../data/site";

// 200-response markdown for unknown URLs — AI agents discard 404 bodies,
// so we return 200 + a navigable markdown index instead. Vercel rewrites
// (in vercel.json) point unmatched paths here.
export const GET: APIRoute = () => {
  const body =
    `---\n` +
    `title: "Page not found — ${site.fullName}"\n` +
    `description: "The requested page does not exist on the ${site.chapter} website. Use the links below to reach the main pages."\n` +
    `canonical_url: "${site.url}/404"\n` +
    `last_updated: "${site.lastUpdated}"\n` +
    `---\n\n` +
    `# Page not found\n\n` +
    `The page you requested does not exist on the ${site.fullName} site. Here is the canonical index of pages:\n\n` +
    `- [Home](${site.url}/) — chapter overview ([markdown](${site.url}/index.md))\n` +
    `- [About](${site.url}/about) — principles, history, pledge classes ([markdown](${site.url}/about.md))\n` +
    `- [Recruitment](${site.url}/recruitment) — Winter Rush 2026 schedule + eligible majors ([markdown](${site.url}/recruitment.md))\n` +
    `- [Brothers](${site.url}/brothers) — exec board + active roster ([markdown](${site.url}/brothers.md))\n` +
    `- [Contact](${site.url}/contact) — officer contacts ([markdown](${site.url}/contact.md))\n\n` +
    `For machine-readable references see [/llms.txt](${site.url}/llms.txt) and [/sitemap.md](${site.url}/sitemap.md).\n`;
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
