import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

import type { Article, ArticleFrontmatter } from "@/types/article";

const articlesDirectory = join(process.cwd(), "content", "articles");

function ensureTags(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((entry): entry is string => typeof entry === "string");
}

function ensureSources(value: unknown): ArticleFrontmatter["sources"] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((entry): entry is Record<string, unknown> => typeof entry === "object" && entry !== null)
    .map((entry) => ({
      title: String(entry.title ?? ""),
      url: String(entry.url ?? ""),
      trust: String(entry.trust ?? ""),
    }));
}

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return String(value ?? "1970-01-01");
}

function normalizeFrontmatter(data: Record<string, unknown>): ArticleFrontmatter {
  return {
    title: String(data.title ?? "Ohne Titel"),
    date: normalizeDate(data.date),
    teaser: String(data.teaser ?? ""),
    topic: String(data.topic ?? "Allgemein"),
    readingTime: String(data.readingTime ?? "5 min"),
    tags: ensureTags(data.tags),
    sources: ensureSources(data.sources),
    furtherReading: ensureSources(data.furtherReading),
  };
}

export function getArticleSlugs(): string[] {
  return fs.readdirSync(articlesDirectory).filter((entry) => entry.endsWith(".md"));
}

export function getArticleBySlug(slug: string): Article {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = normalizeFrontmatter(data);

  return {
    slug: realSlug,
    content,
    ...frontmatter,
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => b.date.localeCompare(a.date));
}
