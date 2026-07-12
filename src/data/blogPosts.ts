import { blogBodyImage, blogCoverImage } from "@/data/images";

export type BlogPostCategory = "article";

export type BlogFaqItem = {
  question: string;
  answer: string;
};

type BlogPostInput = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  date: string;
  dateIso: string;
  readTime: string;
  imageAlt: string;
  inlineImageAlt: string;
  category: BlogPostCategory;
  authorName: string;
  topics: string[];
  faq?: BlogFaqItem[];
};

export type BlogPostMeta = BlogPostInput & {
  image: string;
  inlineImage: string;
};

const BLOG_POSTS_INPUT: BlogPostInput[] = [
  {
    slug: "fleurs-de-bach-animaux",
    title: "Fleurs de Bach pour les animaux : comment je m'en sers",
    excerpt:
      "Rescue, personnalisation et limites : mes repères pour accompagner émotionnellement chiens, chats et compagnons.",
    metaDescription:
      "Fleurs de Bach pour animaux : conseils de Céline Belin, praticienne en soins énergétiques. Rescue, mélanges personnalisés, à distance en Belgique.",
    date: "10 juin 2026",
    dateIso: "2026-06-10",
    readTime: "7 min",
    imageAlt: "Fleurs de Bach — élixirs floraux pour l'équilibre émotionnel",
    inlineImageAlt: "Flacons Fleurs de Bach et fleurs sauvages — équilibre émotionnel",
    category: "article",
    authorName: "Céline Belin, praticienne en soins énergétiques",
    topics: ["Fleurs de Bach", "Animaux", "Émotions"],
    faq: [
      {
        question: "Rescue Remedy convient-il à tous les animaux ?",
        answer:
          "C'est un mélange d'urgence très utilisé, mais je préfère composer un flacon sur mesure après avoir identifié l'état émotionnel dominant.",
      },
    ],
  },
  {
    slug: "soins-energetiques-distance-animaux",
    title: "Soins énergétiques à distance pour les animaux",
    excerpt:
      "Pourquoi je privilégie le travail à distance avec les animaux, et comment se déroule concrètement une séance.",
    metaDescription:
      "Soins énergétiques à distance pour animaux : Reiki, Lahochi, communication. Céline Belin, praticienne à Bernissart et en Belgique.",
    date: "28 mai 2026",
    dateIso: "2026-05-28",
    readTime: "8 min",
    imageAlt: "Animal paisible à la maison — soins énergétiques à distance",
    inlineImageAlt: "Connexion énergétique à distance avec un compagnon animal",
    category: "article",
    authorName: "Céline Belin, praticienne en soins énergétiques",
    topics: ["Reiki", "Distance", "Animaux"],
    faq: [
      {
        question: "L'animal doit-il être éveillé pendant la séance ?",
        answer:
          "Pas nécessairement. Beaucoup s'endorment ou se détendent naturellement pendant que je travaille.",
      },
    ],
  },
  {
    slug: "reiki-pour-animaux",
    title: "Reiki pour les animaux : ce que j'observe en séance",
    excerpt:
      "Signes de détente, durée, fréquence : mon retour d'expérience avec chiens, chats et autres compagnons.",
    metaDescription:
      "Reiki pour animaux : déroulement, effets observés, séances à distance. Céline Belin, praticienne Reiki en Hainaut et Belgique.",
    date: "15 mai 2026",
    dateIso: "2026-05-15",
    readTime: "7 min",
    imageAlt: "Reiki — pierre gravée, cristaux et bougie pour les soins énergétiques",
    inlineImageAlt: "Ambiance Reiki — pierre gravée, cristaux et lumière douce",
    category: "article",
    authorName: "Céline Belin, praticienne en soins énergétiques",
    topics: ["Reiki", "Animaux", "Bien-être"],
  },
  {
    slug: "tous-les-animaux",
    title: "Tous les animaux peuvent-ils recevoir des soins ?",
    excerpt:
      "Chiens, chats, chevaux, NAC, oiseaux… Ce que je peux accompagner et ce que je vous dis honnêtement si ce n'est pas adapté.",
    metaDescription:
      "Soins énergétiques et communication animale pour toutes les espèces. Céline Belin, praticienne en Belgique — chiens, chats, chevaux, NAC.",
    date: "2 mai 2026",
    dateIso: "2026-05-02",
    readTime: "6 min",
    imageAlt: "Divers compagnons animaux — soins énergétiques toutes espèces",
    inlineImageAlt: "Chien, chat et nature — accompagnement multi-espèces",
    category: "article",
    authorName: "Céline Belin, praticienne en soins énergétiques",
    topics: ["Animaux", "Communication animale", "Reiki"],
  },
  {
    slug: "soins-energetiques-humains",
    title: "Soins énergétiques pour les humains : par où commencer ?",
    excerpt:
      "Reiki, Lahochi, shiatsu, kinésiologie… Je vous aide à choisir la méthode qui vous correspond.",
    metaDescription:
      "Soins énergétiques humains : Reiki, Lahochi, shiatsu, kinésiologie à Bernissart, Silly, Mons. Céline Belin, praticienne bien-être.",
    date: "18 avril 2026",
    dateIso: "2026-04-18",
    readTime: "8 min",
    imageAlt: "Personne détendue — soins énergétiques humains",
    inlineImageAlt: "Séance de soin énergétique en cabinet apaisant",
    category: "article",
    authorName: "Céline Belin, praticienne en soins énergétiques",
    topics: ["Reiki", "Lahochi", "Humains"],
  },
  {
    slug: "hygiene-energetique",
    title: "Hygiène énergétique : protéger et nettoyer son espace",
    excerpt:
      "Quelques gestes simples pour prendre soin de votre énergie au quotidien, chez vous ou au travail.",
    metaDescription:
      "Hygiène énergétique : conseils pratiques pour nettoyer et protéger son espace. Céline Belin, praticienne en soins énergétiques.",
    date: "5 avril 2026",
    dateIso: "2026-04-05",
    readTime: "7 min",
    imageAlt: "Intérieur lumineux et apaisé — hygiène énergétique",
    inlineImageAlt: "Espace de vie harmonieux, illustration hygiène énergétique",
    category: "article",
    authorName: "Céline Belin, praticienne en soins énergétiques",
    topics: ["Bien-être", "Énergie", "Conseils"],
    faq: [
      {
        question: "Faut-il être 'sensible' à l'énergie pour que ça marche ?",
        answer:
          "Non. Même sans ressentir quoi que ce soit, les soins et les rituels d'hygiène énergétique peuvent avoir un effet apaisant.",
      },
    ],
  },
];

function enrichPost(post: BlogPostInput): BlogPostMeta {
  return {
    ...post,
    image: blogCoverImage(post.slug),
    inlineImage: blogBodyImage(post.slug),
  };
}

export const BLOG_POSTS: BlogPostMeta[] = BLOG_POSTS_INPUT.map(enrichPost);

export function getBlogPost(slug: string | undefined): BlogPostMeta | undefined {
  if (!slug) return undefined;
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogPosts(): BlogPostMeta[] {
  return BLOG_POSTS;
}
