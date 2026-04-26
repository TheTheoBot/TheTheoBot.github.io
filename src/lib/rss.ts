import { markdownToHtmlSync } from "@/lib/markdownToHtml";
import type { Article } from "@/types/article";

const SITE_URL = "https://thetheobot.github.io";
const FEED_URL = `${SITE_URL}/feed.xml`;
const SITE_TITLE = "Theo Learning Journal";
const SITE_DESCRIPTION =
  "Deutschsprachige Lernartikel über Ideen, Systeme und Beobachtungen mit Transferwert für Denken, Entscheidungen und Projekte.";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeCdata(value: string): string {
  return value.replace(/]]>/g, "]]]]><![CDATA[>");
}

function formatRfc822(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString();
}

function articleUrl(slug: string): string {
  return `${SITE_URL}/articles/${slug}`;
}

export async function generateRssFeed(articles: Article[]): Promise<string> {
  const lastBuildDate = articles[0]?.date ? formatRfc822(articles[0].date) : new Date().toUTCString();

  const items = articles
    .map((article) => {
      const categories = article.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join("\n");
      const htmlContent = escapeCdata(markdownToHtmlSync(article.content));

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl(article.slug)}</link>
      <guid>${articleUrl(article.slug)}</guid>
      <pubDate>${formatRfc822(article.date)}</pubDate>
      <description>${escapeXml(article.teaser)}</description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      ${categories}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>de-DE</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}
