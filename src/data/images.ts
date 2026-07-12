/** Chemins d'images centralisés */

export const SITE_IMAGES = {
  hero: "/images/celine-portrait.png",
  heroAlt:
    "Céline Belin, praticienne Harmonie et Mieux-Être — soins énergétiques humains et animaux",
  about: "/images/celine-portrait.png",
  aboutAlt: "Céline Belin — Harmonie et Mieux-Être, soins énergétiques",
  portrait: "/images/celine-portrait.png",
  portraitAlt: "Portrait de Céline Belin, praticienne en soins énergétiques",
  fleursDeBach: "/images/fleurs-de-bach.jpg",
  fleursDeBachAlt:
    "Fleurs de Bach — élixirs floraux et équilibre émotionnel, Harmonie et Mieux-Être",
  reiki: "/images/reiki.jpg",
  reikiAlt:
    "Reiki — pierre gravée, cristaux, bougie et ambiance apaisante pour les soins énergétiques",
} as const;

const BLOG_IMAGE_OVERRIDES: Record<string, { cover: string; body: string }> = {
  "fleurs-de-bach-animaux": {
    cover: "/images/blog/fleurs-de-bach-animaux-cover.jpg",
    body: "/images/blog/fleurs-de-bach-animaux-corps.jpg",
  },
  "reiki-pour-animaux": {
    cover: "/images/blog/reiki-pour-animaux-cover.jpg",
    body: "/images/blog/reiki-pour-animaux-corps.jpg",
  },
};

/** Image de couverture d'un article blog (cartes + en-tête). */
export function blogCoverImage(slug: string) {
  return BLOG_IMAGE_OVERRIDES[slug]?.cover ?? `/images/blog/${slug}-cover.svg`;
}

/** Image illustrative dans le corps d'un article blog. */
export function blogBodyImage(slug: string) {
  return BLOG_IMAGE_OVERRIDES[slug]?.body ?? `/images/blog/${slug}-corps.svg`;
}
