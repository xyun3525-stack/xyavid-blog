import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("posts");
  const published = posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const data = published.map((p) => ({
    title: p.data.title,
    excerpt: p.data.excerpt,
    date: p.data.date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    tags: p.data.tags || [],
    url: `/posts/${p.id}/`,
  }));

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
