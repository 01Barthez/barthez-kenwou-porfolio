const fs = require('fs');
const path = require('path');

const routesFile = path.resolve(__dirname, '../src/app/sitemapRoutes.json');
const outFile = path.resolve(__dirname, '../dist/sitemap.xml');

const baseUrl = process.env.SITE_URL || process.env.VITE_APP_URL || 'https://example.com';

function generate() {
  const raw = fs.readFileSync(routesFile, 'utf-8');
  const routes = JSON.parse(raw);

  const urls = routes
    .map((r) => {
      const loc = new URL(r.path, baseUrl).toString();
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${
        r.changefreq || 'monthly'
      }</changefreq>\n    <priority>${r.priority || 0.5}</priority>\n    <lastmod>${
        r.lastmod || new Date().toISOString().split('T')[0]
      }</lastmod>\n  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, sitemap, 'utf-8');
  console.log('Sitemap written to', outFile);
}

generate();
