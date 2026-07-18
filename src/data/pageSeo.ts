import { SITE } from "@/data/site";
import { SITE_IMAGES } from "@/data/images";
import { formatMethodPrice, METHODS } from "@/data/methods";
import { FAQ_ITEMS } from "@/data/faq";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type PageSeoConfig,
} from "@/lib/seo";

const base = "Praticienne en soins énergétiques";

export const HOME_SEO: PageSeoConfig = {
  title: `${SITE.name} — Soins énergétiques & bien-être | Céline Belin`,
  description: `Soins énergétiques pour humains et animaux par Céline Belin : Reiki, Lahochi, shiatsu, kinésiologie, walking therapy, communication animale, Fleurs de Bach. Bernissart, Silly, Mons et à distance.`,
  path: "/",
  image: `${SITE.domain}${SITE_IMAGES.hero}`,
};

const methodSeoEntries = Object.fromEntries(
  METHODS.map((m) => {
    const priceBit = m.pricing
      ? ` Tarif : ${formatMethodPrice(m.pricing)}.`
      : " Tarifs sur demande.";
    return [
      `/methodes/${m.slug}`,
      {
        title: `${m.title} — ${base} | ${SITE.name}`,
        description: `${m.subtitle}. ${m.intro[0]} Soins à Bernissart, Silly, Mons et à distance.${priceBit}`,
        path: `/methodes/${m.slug}`,
        jsonLd: buildBreadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Méthodes", path: "/methodes" },
          { name: m.title, path: `/methodes/${m.slug}` },
        ]),
      } satisfies PageSeoConfig,
    ];
  })
);

export const STATIC_PAGE_SEO: Record<string, PageSeoConfig> = {
  ...methodSeoEntries,
  "/methodes": {
    title: `Méthodes de soins énergétiques — ${SITE.name}`,
    description: `Découvrez mes 10 méthodes : Reiki, Lahochi, shiatsu, kinésiologie, walking therapy, communication animale, Fleurs de Bach, EFT. Humains et animaux, en cabinet, en nature ou à distance.`,
    path: "/methodes",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Méthodes", path: "/methodes" },
    ]),
  },
  "/quand-consulter": {
    title: `Quand consulter ? — ${SITE.name}`,
    description: `Motifs de consultation en soins énergétiques : stress, anxiété, deuil, comportements animaux, transitions de vie. Céline Belin, praticienne à Bernissart et en Belgique.`,
    path: "/quand-consulter",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Quand consulter", path: "/quand-consulter" },
    ]),
  },
  "/premiere-seance": {
    title: `Première séance — ${SITE.name}`,
    description: `Comment se déroule une première séance de soins énergétiques ? Échange, méthode adaptée, durée. Tarifs indiqués sur chaque page méthode — Céline Belin.`,
    path: "/premiere-seance",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Première séance", path: "/premiere-seance" },
    ]),
  },
  "/ethique": {
    title: `Éthique & déontologie — ${SITE.name}`,
    description: `Mon cadre éthique en soins énergétiques : limites, complémentarité médicale, transparence. Céline Belin, praticienne en Belgique.`,
    path: "/ethique",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Éthique", path: "/ethique" },
    ]),
  },
  "/a-propos": {
    title: `À propos — ${base} Céline Belin`,
    description: `Céline Belin, praticienne en soins énergétiques et bien-être. Humains et animaux, à Bernissart et à distance. Découvrez mon parcours et ma philosophie.`,
    path: "/a-propos",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "À propos", path: "/a-propos" },
    ]),
  },
  "/faq": {
    title: `FAQ — ${SITE.name}`,
    description: `Questions fréquentes sur les soins énergétiques, les séances à distance pour animaux, les tarifs et la prise de rendez-vous.`,
    path: "/faq",
    jsonLd: [
      buildBreadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "FAQ", path: "/faq" },
      ]),
      buildFaqJsonLd(FAQ_ITEMS),
    ],
  },
  "/contact": {
    title: `Contact — ${SITE.name}`,
    description: `Contactez Céline Belin : 0479 46 24 29, harmonieetmieuxetre@gmail.com. Cabinet à Bernissart, Silly, Mons. Soins à distance pour animaux.`,
    path: "/contact",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  },
  "/blog": {
    title: `Blog bien-être & soins énergétiques — ${SITE.name}`,
    description: `Articles sur les soins énergétiques, la communication animale, les Fleurs de Bach et l'hygiène énergétique. Par Céline Belin, praticienne en Belgique.`,
    path: "/blog",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Blog", path: "/blog" },
    ]),
  },
  "/plan-du-site": {
    title: `Plan du site — ${SITE.name}`,
    description: `Plan du site Harmonie et Mieux-Être : méthodes, blog, FAQ, contact. Céline Belin, praticienne en soins énergétiques.`,
    path: "/plan-du-site",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Plan du site", path: "/plan-du-site" },
    ]),
  },
  "/mentions-legales": {
    title: `Mentions légales — ${SITE.name}`,
    description: `Mentions légales du site Harmonie et Mieux-Être, Céline Belin, praticienne en soins énergétiques en Belgique.`,
    path: "/mentions-legales",
    noindex: true,
  },
  "/politique-confidentialite": {
    title: `Politique de confidentialité — ${SITE.name}`,
    description: `Politique de confidentialité et traitement des données sur le site Harmonie et Mieux-Être.`,
    path: "/politique-confidentialite",
    noindex: true,
  },
};

export function getStaticPageSeo(pathname: string): PageSeoConfig | undefined {
  return STATIC_PAGE_SEO[pathname];
}

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.domain}/#practitioner`,
      name: SITE.practitioner,
      jobTitle: "Praticienne en soins énergétiques",
      description: SITE.tagline,
      email: SITE.email,
      telephone: SITE.phoneTel,
      url: SITE.domain,
      image: absoluteUrl(SITE_IMAGES.hero),
      areaServed: [
        "Bernissart",
        "Silly",
        "Mons",
        "Ath",
        "Enghien",
        "Lessines",
        "Péruwelz",
        "Saint-Ghislain",
        "La Louvière",
      ],
      knowsAbout: [
        "Reiki",
        "Lahochi",
        "Shiatsu",
        "Kinésiologie",
        "Walking therapy",
        "Communication animale",
        "Fleurs de Bach",
        "EFT",
      ],
      sameAs: [SITE.facebook, SITE.psyUrl],
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": `${SITE.domain}/#business`,
      name: SITE.name,
      url: SITE.domain,
      telephone: SITE.phoneTel,
      email: SITE.email,
      description: SITE.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2 rue des Iguanodons",
        postalCode: "7320",
        addressLocality: "Bernissart",
        addressCountry: "BE",
      },
      areaServed: ["Bernissart", "Silly", "Mons", "Belgique"],
      priceRange: "Sur demande",
      potentialAction: {
        "@type": "CommunicateAction",
        target: `mailto:${SITE.email}`,
        name: "Me contacter",
      },
    },
  ],
};
