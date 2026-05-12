import type { APIRoute, GetStaticPaths } from "astro";
import { pageMarkdown } from "../lib/page-markdown";

export const getStaticPaths: GetStaticPaths = () => {
  return Object.keys(pageMarkdown).map((slug) => ({ params: { slug } }));
};

export const GET: APIRoute = ({ params }) => {
  const slug = (params.slug ?? "index") as keyof typeof pageMarkdown;
  const md = pageMarkdown[slug];
  if (!md) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(md(), {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
};
