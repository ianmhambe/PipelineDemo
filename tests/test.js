import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("src/index.html", "utf8");
const css = readFileSync("src/styles.css", "utf8");
const app = readFileSync("src/app.js", "utf8");

assert.match(
  html,
  /<h1>[^<]+<\/h1>/i,
  "Homepage should include a primary heading",
);
assert.ok(html.includes("__BUILD_TIME__"), "Build script should replace the build timestamp placeholder");
assert.ok(css.includes(".pipeline"), "Pipeline styling should exist");
assert.ok(app.includes("Code") && app.includes("Deploy"), "App should mention pipeline stages");
assert.ok(existsSync(".github/workflows/ci-cd.yml"), "GitHub Actions workflow should exist");

console.log("All demo checks passed");
