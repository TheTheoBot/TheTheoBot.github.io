import { getAllArticles } from "@/lib/articles";
import { generateRssFeed } from "@/lib/rss";

export const dynamic = "force-static";

export async function GET() {
  const feed = await generateRssFeed(getAllArticles());

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
