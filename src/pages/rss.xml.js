import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  const publishedPosts = posts.filter((post) => !post.data.draft);

  return rss({
    title: "Myblog",
    description: "个人博客，记录所学所想",
    site: context.site,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/posts/${post.id}`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
