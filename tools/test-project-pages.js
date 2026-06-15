import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const mainJs = readFileSync(join(root, "assets/js/main.js"), "utf8");
const detailUrls = [...mainJs.matchAll(/detailUrl:\s*"([^"]+)"/g)].map((match) => match[1]);

if (detailUrls.length !== 3) {
  throw new Error(`Expected 3 project detailUrl entries, found ${detailUrls.length}.`);
}

for (const url of detailUrls) {
  const filePath = join(root, url.replaceAll("/", "\\"));
  if (!existsSync(filePath)) {
    throw new Error(`Missing project detail page: ${url}`);
  }

  const html = readFileSync(filePath, "utf8");
  if (!html.includes("assets/css/style.css") && !html.includes("../assets/css/style.css")) {
    throw new Error(`Detail page does not load compiled CSS: ${url}`);
  }

  if (!html.includes("Kembali ke Beranda")) {
    throw new Error(`Detail page is missing back navigation: ${url}`);
  }
}

console.log(`Verified ${detailUrls.length} project detail pages.`);
