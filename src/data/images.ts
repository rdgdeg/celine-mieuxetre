/** Chemins d'images centralisés — placeholders nature en attendant les photos définitives. */

export const SITE_IMAGES = {
  hero: "/images/hero.svg",
  heroAlt:
    "Paysage naturel apaisant — Harmonie et Mieux-Être, soins énergétiques par Céline Belin",
  about: "/images/about.svg",
  aboutAlt: "Céline Belin, praticienne en soins énergétiques et bien-être",
  portrait: "/images/about.svg",
  portraitAlt: "Céline Belin — Harmonie et Mieux-Être",
} as const;

/** Image de couverture d'un article blog (cartes + en-tête). */
export function blogCoverImage(slug: string) {
  return `/images/blog/${slug}-cover.svg`;
}

/** Image illustrative dans le corps d'un article blog. */
export function blogBodyImage(slug: string) {
  return `/images/blog/${slug}-corps.svg`;
}
