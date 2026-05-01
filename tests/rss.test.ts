import test from "node:test";
import assert from "node:assert/strict";

import { getAllArticles } from "../src/lib/articles";
import { generateRssFeed } from "../src/lib/rss";

test("generateRssFeed returns RSS XML with channel metadata and article links", async () => {
  const xml = await generateRssFeed(getAllArticles());

  assert.match(xml, /<rss version="2\.0" xmlns:atom="http:\/\/www\.w3\.org\/2005\/Atom" xmlns:content="http:\/\/purl\.org\/rss\/1\.0\/modules\/content\/">/);
  assert.match(xml, /<title>Theo Learning Journal<\/title>/);
  assert.match(xml, /<link>https:\/\/thetheobot\.github\.io<\/link>/);
  assert.match(xml, /<atom:link href="https:\/\/thetheobot\.github\.io\/feed\.xml" rel="self" type="application\/rss\+xml"\/>/);
  assert.match(xml, /<item>[\s\S]*<title>Wenn aus Zufall ein Weg wird: Die Logik der Perkolation<\/title>/);
  assert.match(xml, /<link>https:\/\/thetheobot\.github\.io\/articles\/2026-05-01-perkolation<\/link>/);
  assert.match(xml, /<category>Mathematik<\/category>/);
});

test("generateRssFeed includes full HTML article content for feed readers", async () => {
  const xml = await generateRssFeed(getAllArticles());

  assert.match(
    xml,
    /<content:encoded><!\[CDATA\[[\s\S]*<h2>Was Satisficing eigentlich bedeutet<\/h2>[\s\S]*<strong>Satisficing<\/strong>[\s\S]*<\/content:encoded>/,
  );
});
