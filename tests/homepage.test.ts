import test from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";

import HomePage from "../src/app/page";

test("home page renders a visible RSS link", async () => {
  const markup = renderToStaticMarkup(await HomePage());

  assert.match(markup, /href="\/feed\.xml"/);
  assert.match(markup, /RSS abonnieren/);
});
