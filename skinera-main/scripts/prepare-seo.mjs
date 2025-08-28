import { mkdirSync, copyFileSync, existsSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcLogo = join(root, "Images", "Header", "logo.png");
const publicDir = join(root, "public");
const publicLogo = join(publicDir, "logo.png");
const robotsFile = join(publicDir, "robots.txt");
const sitemapFile = join(publicDir, "sitemap.xml");

try {
  mkdirSync(publicDir, { recursive: true });
  if (existsSync(srcLogo)) {
    copyFileSync(srcLogo, publicLogo);
    console.log("[prepare-seo] Copied logo to public/logo.png");
  } else {
    console.warn("[prepare-seo] Source logo not found:", srcLogo);
  }

  const siteUrl = process.env.VITE_SITE_URL || "https://example.com";
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl.replace(
    /\/$/,
    ""
  )}/sitemap.xml\n`;
  writeFileSync(robotsFile, robots, "utf8");
  console.log("[prepare-seo] Wrote public/robots.txt");

  // Basic sitemap from known routes
  const pages = ["/", "/about", "/service", "/contact"];
  const urls = pages
    .map(
      (p) =>
        `  <url>\n    <loc>${siteUrl.replace(
          /\/$/,
          ""
        )}${p}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${
          p === "/" ? "1.0" : "0.8"
        }</priority>\n  </url>`
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(sitemapFile, sitemap, "utf8");
  console.log("[prepare-seo] Wrote public/sitemap.xml");
} catch (err) {
  console.error("[prepare-seo] Error:", err);
  process.exit(0); // don't fail the build if this step fails
}
