import { mkdirSync, copyFileSync, readFileSync, writeFileSync } from "node:fs";

mkdirSync("dist", { recursive: true });

const buildTime = new Date().toISOString();
const html = readFileSync("src/index.html", "utf8").replace("__BUILD_TIME__", buildTime);

writeFileSync("dist/index.html", html);
copyFileSync("src/styles.css", "dist/styles.css");
copyFileSync("src/app.js", "dist/app.js");

console.log(`Built static site into dist/ at ${buildTime}`);
