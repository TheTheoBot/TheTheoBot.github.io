import test from "node:test";
import assert from "node:assert/strict";

import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
} from "@/lib/articles";

test("getArticleSlugs returns markdown files from the content directory", () => {
  const slugs = getArticleSlugs();

  assert.ok(slugs.includes("2026-04-26-satisficing.md"));
});

test("getArticleBySlug normalizes the slug and reads frontmatter", () => {
  const article = getArticleBySlug("2026-04-26-satisficing.md");

  assert.equal(article.slug, "2026-04-26-satisficing");
  assert.equal(article.title, "Gut genug ist oft klüger: Die unterschätzte Kunst des Satisficing");
  assert.equal(article.date, "2026-04-26");
  assert.equal(article.tags[0], "Psychologie");
  assert.equal(article.sources.length, 4);
});

test("getAllArticles sorts newest entries first", () => {
  const articles = getAllArticles();

  assert.equal(articles[0]?.slug, "2026-04-29-staedtische-waermeinsel");
  assert.equal(articles[1]?.slug, "2026-04-28-dendrochronologie");
});
