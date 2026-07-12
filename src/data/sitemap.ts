import { BLOG_POSTS } from "@/data/blogPosts";
import { METHODS } from "@/data/methods";
import { SITE } from "@/data/site";

export type SitemapEntry = {
  path: string;
  label: string;
  section: "principal" | "methodes" | "blog" | "legal";
  priority: number;
  changefreq: "weekly" | "monthly" | "yearly";
  lastmod: string;
};

const LAST_SITE_UPDATE = "2026-07-12";

export const SITEMAP_ENTRIES: SitemapEntry[] = [
  { path: "/", label: "Accueil", section: "principal", priority: 1.0, changefreq: "weekly", lastmod: LAST_SITE_UPDATE },
  { path: "/methodes", label: "Méthodes", section: "principal", priority: 0.95, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/quand-consulter", label: "Quand consulter", section: "principal", priority: 0.9, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/premiere-seance", label: "Première séance", section: "principal", priority: 0.85, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/ethique", label: "Éthique & déontologie", section: "principal", priority: 0.8, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/a-propos", label: "À propos", section: "principal", priority: 0.9, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/faq", label: "FAQ", section: "principal", priority: 0.85, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/contact", label: "Contact", section: "principal", priority: 0.9, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  ...METHODS.map((m) => ({
    path: `/methodes/${m.slug}`,
    label: m.title,
    section: "methodes" as const,
    priority: 0.85,
    changefreq: "monthly" as const,
    lastmod: LAST_SITE_UPDATE,
  })),
  { path: "/blog", label: "Blog bien-être & soins énergétiques", section: "blog", priority: 0.75, changefreq: "weekly", lastmod: LAST_SITE_UPDATE },
  ...BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}`,
    label: post.title,
    section: "blog" as const,
    priority: 0.65,
    changefreq: "monthly" as const,
    lastmod: post.dateIso,
  })),
  { path: "/plan-du-site", label: "Plan du site", section: "legal", priority: 0.3, changefreq: "monthly", lastmod: LAST_SITE_UPDATE },
  { path: "/mentions-legales", label: "Mentions légales", section: "legal", priority: 0.2, changefreq: "yearly", lastmod: LAST_SITE_UPDATE },
  { path: "/politique-confidentialite", label: "Politique de confidentialité", section: "legal", priority: 0.2, changefreq: "yearly", lastmod: LAST_SITE_UPDATE },
];

export function sitemapSections() {
  return {
    principal: SITEMAP_ENTRIES.filter((e) => e.section === "principal"),
    methodes: SITEMAP_ENTRIES.filter((e) => e.section === "methodes"),
    blog: SITEMAP_ENTRIES.filter((e) => e.section === "blog"),
    legal: SITEMAP_ENTRIES.filter((e) => e.section === "legal"),
  };
}

export function buildSitemapXml(domain = SITE.domain) {
  const urls = SITEMAP_ENTRIES.map(
    (e) =>
      `  <url><loc>${domain}${e.path === "/" ? "/" : e.path}</loc><lastmod>${e.lastmod}</lastmod><changefreq>${e.changefreq}</changefreq><priority>${e.priority.toFixed(2)}</priority></url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
