import { SITE_IMAGES } from "@/data/images";
import { SITE } from "@/data/site";

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const DEFAULT_IMAGE = `${SITE.domain}${SITE_IMAGES.hero}`;

const DEFAULT_SEO: PageSeoConfig = {
  title: `${SITE.name} — Soins énergétiques & bien-être`,
  description:
    "Céline Belin, praticienne en soins énergétiques à Bernissart, Silly et Mons. Reiki, Lahochi, communication animale, Fleurs de Bach. Humains et animaux, à distance ou en cabinet.",
  path: "/",
  image: DEFAULT_IMAGE,
  type: "website",
};

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let el = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function upsertJsonLd(id: string, data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.domain}${normalized === "/" ? "/" : normalized}`;
}

export function applyPageSeo(config: Partial<PageSeoConfig>) {
  const seo: PageSeoConfig = { ...DEFAULT_SEO, ...config };
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? DEFAULT_IMAGE;

  document.title = seo.title;
  upsertMeta("name", "description", seo.description);
  upsertMeta(
    "name",
    "robots",
    seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
  );
  upsertLink("canonical", url);

  upsertMeta("property", "og:type", seo.type ?? "website");
  upsertMeta("property", "og:title", seo.title);
  upsertMeta("property", "og:description", seo.description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:locale", "fr_BE");
  upsertMeta("property", "og:site_name", SITE.name);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", seo.title);
  upsertMeta("name", "twitter:description", seo.description);
  upsertMeta("name", "twitter:image", image);

  if (seo.type === "article" && seo.publishedTime) {
    upsertMeta("property", "article:published_time", seo.publishedTime);
  }
  if (seo.type === "article" && seo.modifiedTime) {
    upsertMeta("property", "article:modified_time", seo.modifiedTime);
  }

  if (seo.jsonLd) {
    const payload = Array.isArray(seo.jsonLd)
      ? { "@context": "https://schema.org", "@graph": seo.jsonLd }
      : { "@context": "https://schema.org", ...seo.jsonLd };
    upsertJsonLd("page-jsonld", payload);
  } else {
    removeJsonLd("page-jsonld");
  }
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildArticleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@type": "BlogPosting",
    headline: title,
    description,
    image: [image],
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: SITE.practitioner,
      jobTitle: "Praticienne en soins énergétiques",
      url: SITE.domain,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.domain,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    inLanguage: "fr-BE",
  };
}

export function buildFaqJsonLd(
  items: { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
