/** Chemins d'images centralisés */

export const SITE_IMAGES = {
  hero: "/images/celine-portrait.png",
  heroAlt:
    "Céline Belin, praticienne Harmonie et Mieux-Être — soins énergétiques humains et animaux",
  about: "/images/celine-portrait.png",
  aboutAlt: "Céline Belin — Harmonie et Mieux-Être, soins énergétiques",
  portrait: "/images/celine-portrait.png",
  portraitAlt: "Portrait de Céline Belin, praticienne en soins énergétiques",
} as const;

export function blogCoverImage(slug: string) {
  return `/images/blog/${slug}-cover.svg`;
}

export function blogBodyImage(slug: string) {
  return `/images/blog/${slug}-corps.svg`;
}
