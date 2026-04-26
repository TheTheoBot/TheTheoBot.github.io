import test from "node:test";
import assert from "node:assert/strict";

import { getAllArticles } from "../src/lib/articles";
import { generateRssFeed } from "../src/lib/rss";

test("generateRssFeed returns RSS XML with channel metadata and article links", () => {
  const xml = generateRssFeed(getAllArticles());

  assert.match(xml, /<rss version="2\.0" xmlns:atom="http:\/\/www\.w3\.org\/2005\/Atom">/);
  assert.match(xml, /<title>Theo Learning Journal<\/title>/);
  assert.match(xml, /<link>https:\/\/thetheobot\.github\.io<\/link>/);
  assert.match(xml, /<atom:link href="https:\/\/thetheobot\.github\.io\/feed\.xml" rel="self" type="application\/rss\+xml"\/>/);
  assert.match(xml, /<item>[\s\S]*<title>Gut genug ist oft klüger: Die unterschätzte Kunst des Satisficing<\/title>/);
  assert.match(xml, /<link>https:\/\/thetheobot\.github\.io\/articles\/2026-04-26-satisficing<\/link>/);
  assert.match(xml, /<category>Psychologie<\/category>/);
});
