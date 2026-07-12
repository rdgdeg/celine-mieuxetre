export const SITE = {
  name: "Harmonie et Mieux-Être",
  practitioner: "Céline Belin",
  title: "Soins énergétiques & bien-être",
  tagline: "Retrouver l'harmonie, pour vous et vos animaux",
  domain: "https://www.harmonie-et-mieux-etre.be",
  email: "harmonieetmieuxetre@gmail.com",
  phone: "0479 46 24 29",
  phoneTel: "+32479462429",
  whatsapp: "https://wa.me/32479462429",
  facebook:
    "https://www.facebook.com/C%C3%A9line-Belin-Psychologue-Coach-de-vie-253918965132820/",
  psyUrl: "https://www.celinebelin-psychologue.be",
  github: "https://github.com/rdgdeg/celine-mieuxetre",
  pricingNote: "Tarifs sur demande",
} as const;

export const SEO_AREAS = [
  "Bernissart",
  "Silly",
  "Mons",
  "Ath",
  "Enghien",
  "Lessines",
  "Péruwelz",
  "Saint-Ghislain",
  "La Louvière",
  "Tournai",
] as const;

export type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  schedule?: string;
  forHumans?: boolean;
  forAnimals?: boolean;
};

export const LOCATIONS: Location[] = [
  {
    id: "bernissart",
    name: "Cabinet Bernissart",
    address: "2 rue des Iguanodons",
    city: "Bernissart",
    postalCode: "7320",
    schedule: "Sur rendez-vous",
    forHumans: true,
    forAnimals: true,
  },
  {
    id: "silly",
    name: "Le Trait d'Union",
    address: "Rue de la Station 34/1",
    city: "Silly",
    postalCode: "7830",
    forHumans: true,
  },
  {
    id: "mons",
    name: "Résidence Patria",
    address: "Places Charles Simonet 5",
    city: "Mons",
    postalCode: "7000",
    forHumans: true,
  },
];

export const CONSULTATION_MODES = [
  "En cabinet (humains)",
  "À distance (animaux privilégié)",
  "Visioconférence",
] as const;

export const HERO_LOCATIONS = ["Bernissart", "Silly", "Mons", "À distance"] as const;

export const HERO_TAGS = [
  "Reiki",
  "Lahochi",
  "Shiatsu",
  "Kinésiologie",
  "Communication animale",
  "Fleurs de Bach",
] as const;

export type MethodPreview = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export const METHODS_PREVIEW: MethodPreview[] = [
  {
    title: "Reiki",
    description: "Canaliser l'énergie universelle pour apaiser corps et esprit.",
    href: "/methodes/reiki",
    icon: "Sparkles",
  },
  {
    title: "Lahochi",
    description: "Soins vibratoires doux pour rééquilibrer vos centres énergétiques.",
    href: "/methodes/lahochi",
    icon: "Hand",
  },
  {
    title: "Lahochi 13",
    description: "Protocole avancé Lahochi pour un travail énergétique en profondeur.",
    href: "/methodes/lahochi-13",
    icon: "Zap",
  },
  {
    title: "Shiatsu",
    description: "Pressions harmonieuses le long des méridiens pour relâcher les tensions.",
    href: "/methodes/shiatsu",
    icon: "Heart",
  },
  {
    title: "Kinésiologie",
    description: "Écouter le corps pour identifier et libérer les blocages.",
    href: "/methodes/kinesiologie",
    icon: "Activity",
  },
  {
    title: "Communication guides",
    description: "Recevoir des messages bienveillants de vos guides spirituels.",
    href: "/methodes/communication-guides",
    icon: "MessageCircle",
  },
  {
    title: "Communication animale",
    description: "Comprendre ce que ressentent et expriment vos compagnons.",
    href: "/methodes/communication-animale",
    icon: "PawPrint",
  },
  {
    title: "Fleurs de Bach",
    description: "Élixirs floraux pour rééquilibrer vos émotions naturellement.",
    href: "/methodes/fleurs-de-bach",
    icon: "Flower2",
  },
  {
    title: "EFT",
    description: "Libération émotionnelle par tapotements sur les méridiens.",
    href: "/methodes/eft",
    icon: "HandHeart",
  },
];

export const METHOD_LINKS = METHODS_PREVIEW.map(({ title, href }) => ({
  label: title,
  href,
}));
