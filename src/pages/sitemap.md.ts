import type { APIRoute } from "astro";
import { site } from "../data/site";

const pages = [
  { url: "/", title: "Home", desc: "Chapter overview, links to all pages." },
  { url: "/about", title: "About", desc: "Principles, history, pledge-class timeline." },
  { url: "/recruitment", title: "Recruitment", desc: "Winter Rush 2026 schedule, eligibility." },
  { url: "/brothers", title: "Brothers", desc: "Executive board and roster." },
  { url: "/contact", title: "Contact", desc: "Officer contacts." },
];

export const GET: APIRoute = () => {
  const lines = [
    `# Sitemap — ${site.fullName}`,
    ``,
    `Last updated: ${site.lastUpdated}`,
    ``,
    `Canonical URL: ${site.url}`,
    ``,
    `## Pages`,
    ``,
    ...pages.map(
      (p) =>
        `- [${p.title}](${site.url}${p.url}) — ${p.desc} — [markdown mirror](${site.url}${p.url === "/" ? "/index" : p.url}.md)`,
    ),
    ``,
    `## Machine-readable references`,
    ``,
    `- [llms.txt](${site.url}/llms.txt)`,
    `- [robots.txt](${site.url}/robots.txt)`,
    `- [sitemap.xml](${site.url}/sitemap-index.xml)`,
    ``,
  ].join("\n");
  return new Response(lines, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
