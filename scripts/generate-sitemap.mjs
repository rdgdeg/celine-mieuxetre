import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const domain = "https://www.harmonie-et-mieux-etre.be";

const entries = [
  { path: "/", lastmod: "2026-07-12", changefreq: "weekly", priority: "1.00" },
  { path: "/methodes", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.95" },
  { path: "/quand-consulter", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.90" },
  { path: "/premiere-seance", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/ethique", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.80" },
  { path: "/a-propos", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.90" },
  { path: "/faq", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/contact", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.90" },
  { path: "/methodes/reiki", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/lahochi", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/lahochi-13", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/shiatsu", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/kinesiologie", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/communication-guides", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/communication-animale", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/fleurs-de-bach", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/eft", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.85" },
  { path: "/methodes/walking-therapy", lastmod: "2026-07-19", changefreq: "monthly", priority: "0.85" },
  { path: "/blog", lastmod: "2026-07-12", changefreq: "weekly", priority: "0.75" },
  { path: "/blog/fleurs-de-bach-animaux", lastmod: "2026-06-10", changefreq: "monthly", priority: "0.65" },
  { path: "/blog/soins-energetiques-distance-animaux", lastmod: "2026-05-28", changefreq: "monthly", priority: "0.65" },
  { path: "/blog/reiki-pour-animaux", lastmod: "2026-05-15", changefreq: "monthly", priority: "0.65" },
  { path: "/blog/tous-les-animaux", lastmod: "2026-05-02", changefreq: "monthly", priority: "0.65" },
  { path: "/blog/soins-energetiques-humains", lastmod: "2026-04-18", changefreq: "monthly", priority: "0.65" },
  { path: "/blog/hygiene-energetique", lastmod: "2026-04-05", changefreq: "monthly", priority: "0.65" },
  { path: "/plan-du-site", lastmod: "2026-07-12", changefreq: "monthly", priority: "0.30" },
  { path: "/mentions-legales", lastmod: "2026-07-12", changefreq: "yearly", priority: "0.20" },
  { path: "/politique-confidentialite", lastmod: "2026-07-12", changefreq: "yearly", priority: "0.20" },
];

const urls = entries
  .map(
    (e) =>
      `  <url><loc>${domain}${e.path}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

writeFileSync(join(root, "public/sitemap.xml"), xml, "utf8");
console.log("✓ sitemap.xml généré");
