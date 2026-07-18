export type MethodSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export type MethodPricing = {
  amount: number;
  duration: string;
  note?: string;
};

export type Method = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string[];
  sections: MethodSection[];
  forHumans?: boolean;
  forAnimals?: boolean;
  distancePreferred?: boolean;
  image?: string;
  imageAlt?: string;
  pricing?: MethodPricing;
};

export function formatMethodPrice(pricing: MethodPricing): string {
  return `${pricing.amount}\u00a0€ · ${pricing.duration}`;
}

export const METHODS: Method[] = [
  {
    slug: "reiki",
    title: "Reiki",
    subtitle: "L'énergie universelle au service de votre bien-être",
    image: "/images/reiki.jpg",
    imageAlt:
      "Reiki — pierre gravée, cristaux améthyste et quartz rose, bougie et ambiance de soin énergétique",
    intro: [
      "Le Reiki est une technique japonaise de canalisation de l'énergie universelle. Je pose mes mains sur ou au-dessus de votre corps — ou de celui de votre animal — pour favoriser la détente, l'apaisement et l'harmonisation énergétique.",
      "C'est une approche douce, non invasive, qui complète un suivi médical ou vétérinaire sans jamais le remplacer.",
    ],
    forHumans: true,
    forAnimals: true,
    distancePreferred: true,
    pricing: { amount: 70, duration: "1 h" },
    sections: [
      {
        title: "Comment ça se passe ?",
        paragraphs: [
          "Vous restez habillé, allongé ou assis confortablement. Je travaille sur les principaux centres énergétiques (chakras) en laissant l'énergie circuler là où elle est nécessaire.",
          "Pour les animaux, je privilégie souvent les séances à distance : ils restent chez eux, dans leur environnement familier, ce qui limite le stress.",
        ],
      },
      {
        title: "Pour qui ?",
        list: [
          "Stress, anxiété, fatigue",
          "Douleurs chroniques (en complément médical)",
          "Périodes de transition ou de deuil",
          "Animaux stressés, anxieux ou en convalescence",
          "Soutien énergétique avant ou après une intervention",
        ],
      },
      {
        title: "Ce que j'observe en séance",
        paragraphs: [
          "Beaucoup de personnes — et d'animaux — s'endorment ou entrent dans un état de relaxation profonde. D'autres ressentent une chaleur, des picotements ou une sensation de légèreté.",
          "Les effets peuvent se manifester immédiatement ou dans les jours qui suivent. Chaque corps réagit à son rythme.",
        ],
      },
    ],
  },
  {
    slug: "lahochi",
    title: "Lahochi",
    subtitle: "Soins vibratoires pour rééquilibrer l'énergie vitale",
    intro: [
      "Le Lahochi est une technique de soin énergétique d'origine hawaïenne. Par des mouvements des mains au-dessus du corps, j'accompagne la circulation de l'énergie vitale pour favoriser la détente et le rééquilibrage.",
      "C'est particulièrement adapté aux personnes sensibles à l'énergie et aux animaux réceptifs.",
    ],
    forHumans: true,
    forAnimals: true,
    distancePreferred: true,
    pricing: { amount: 70, duration: "1 h" },
    sections: [
      {
        title: "Les principes du Lahochi",
        paragraphs: [
          "Le Lahochi travaille sur l'ensemble du champ énergétique, pas seulement sur les points précis. L'intention et la présence sont au cœur de la pratique.",
          "Je me connecte à votre énergie — ou à celle de votre animal — pour laisser circuler ce qui doit circuler et apaiser ce qui demande à l'être.",
        ],
      },
      {
        title: "Indications fréquentes",
        list: [
          "Épuisement et burn-out",
          "Blocages émotionnels",
          "Tensions musculaires sans cause mécanique évidente",
          "Soutien lors de changements de vie",
          "Animaux traumatisés ou en fin de vie",
        ],
      },
      {
        title: "En pratique",
        paragraphs: [
          "Une séance dure généralement environ une heure. Vous n'avez rien à faire : juste vous laisser porter.",
        ],
      },
    ],
  },
  {
    slug: "lahochi-13",
    title: "Lahochi 13",
    subtitle: "Protocole avancé pour un travail énergétique en profondeur",
    intro: [
      "Le Lahochi 13 est une évolution du Lahochi classique, avec un protocole structuré en 13 positions. Il permet un travail plus profond sur les centres énergétiques et le champ subtil.",
      "Je le propose lorsque le Lahochi classique a déjà été expérimenté, ou pour des situations qui demandent un accompagnement énergétique plus poussé.",
    ],
    forHumans: true,
    forAnimals: true,
    distancePreferred: true,
    pricing: { amount: 70, duration: "1 h" },
    sections: [
      {
        title: "En quoi diffère-t-il du Lahochi ?",
        paragraphs: [
          "Le protocole 13 suit une séquence précise qui couvre l'ensemble du corps et des centres énergétiques. L'intensité vibratoire peut être ressentie plus nettement.",
          "Ce n'est pas « plus fort » — c'est plus structuré, avec une intention de travail en profondeur.",
        ],
      },
      {
        title: "Quand le proposer ?",
        list: [
          "Après plusieurs séances de Lahochi classique",
          "Situations émotionnelles complexes",
          "Accompagnement de fin de vie (humains ou animaux)",
          "Travail sur des mémoires énergétiques profondes",
        ],
      },
      {
        title: "Cadre et durée",
        paragraphs: [
          "Comptez environ 60 à 75 minutes. Je vous explique toujours ce que je vais faire avant de commencer, et vous pouvez interrompre à tout moment.",
        ],
      },
    ],
  },
  {
    slug: "shiatsu",
    title: "Shiatsu",
    subtitle: "Des pressions harmonieuses le long des méridiens",
    intro: [
      "Le shiatsu est une technique japonaise qui utilise des pressions du pouce, de la paume ou du coude le long des méridiens énergétiques du corps. L'objectif : relâcher les tensions, stimuler la circulation de l'énergie et favoriser l'auto-guérison.",
      "Je pratique le shiatsu principalement sur les humains, en cabinet à Bernissart, Silly ou Mons.",
    ],
    forHumans: true,
    forAnimals: false,
    pricing: { amount: 65, duration: "1 h" },
    sections: [
      {
        title: "Déroulement d'une séance",
        paragraphs: [
          "Vous êtes habillé confortablement (idéalement en coton souple). Je travaille sur un futon ou une table, en adaptant les pressions à votre sensibilité.",
          "Une séance dure environ une heure. Il est préférable de ne pas manger lourd juste avant.",
        ],
      },
      {
        title: "Bienfaits recherchés",
        list: [
          "Tensions musculaires et dos",
          "Stress et troubles du sommeil",
          "Fatigue chronique",
          "Troubles digestifs fonctionnels",
          "Accompagnement émotionnel par le corps",
        ],
      },
      {
        title: "Contre-indications",
        paragraphs: [
          "Certaines situations médicales (fièvre, inflammation aiguë, grossesse à risque) nécessitent un avis médical préalable. N'hésitez pas à me signaler vos antécédents.",
        ],
      },
    ],
  },
  {
    slug: "kinesiologie",
    title: "Kinésiologie",
    subtitle: "Écouter le corps pour libérer les blocages",
    intro: [
      "La kinésiologie utilise le test musculaire comme langage du corps. En posant des questions et en testant la réponse musculaire, je peux identifier des stress, des blocages émotionnels ou des déséquilibres énergétiques.",
      "C'est un outil formidable pour mettre des mots — ou des ressentis — sur ce que vous traversez.",
    ],
    forHumans: true,
    forAnimals: true,
    distancePreferred: true,
    pricing: { amount: 70, duration: "1 h" },
    sections: [
      {
        title: "Comment fonctionne le test musculaire ?",
        paragraphs: [
          "Je vous demande de tendre un bras pendant que j'applique une légère pression. Selon votre réponse énergétique à une question ou un stimulus, le muscle reste fort ou s'affaiblit.",
          "Ce n'est pas de la magie : c'est une communication directe avec votre système nerveux autonome.",
        ],
      },
      {
        title: "Applications",
        list: [
          "Stress et anxiété",
          "Phobies et peurs",
          "Difficultés scolaires ou professionnelles",
          "Comprendre le comportement d'un animal",
          "Choix de fleurs de Bach personnalisées",
        ],
      },
      {
        title: "Correction des blocages",
        paragraphs: [
          "Une fois le blocage identifié, je propose des corrections adaptées : points neuro-lymphatiques, visualisation, respiration, EFT, ou autres techniques intégrées à ma pratique.",
        ],
      },
    ],
  },
  {
    slug: "communication-guides",
    title: "Communication avec les guides",
    subtitle: "Recevoir des messages bienveillants",
    intro: [
      "La communication avec les guides est une médiumnité bienveillante : je me mets en lien avec vos guides spirituels — entités de lumière, âmes bienveillantes — pour recevoir des messages qui peuvent vous éclairer sur votre chemin.",
      "Je ne prétends pas prédire l'avenir. L'objectif est de vous apporter des pistes de réflexion, du réconfort et parfois des confirmations sur des ressentis que vous aviez déjà.",
    ],
    forHumans: true,
    forAnimals: false,
    sections: [
      {
        title: "Comment se déroule une séance ?",
        paragraphs: [
          "Nous commençons par une intention : une question, un thème, une période de votre vie. Je me connecte en méditation et transmets ce que je reçois, avec mes propres mots.",
          "Vous pouvez poser des questions de clarification en cours de séance.",
        ],
      },
      {
        title: "Ce que vous pouvez en attendre",
        list: [
          "Messages de réconfort et d'encouragement",
          "Éclairages sur des situations bloquées",
          "Confirmation de ressentis intuitifs",
          "Pistes pour avancer sur votre chemin de vie",
        ],
      },
      {
        title: "Mon approche",
        paragraphs: [
          "Je reste ancrée, humble et transparente. Si je ne reçois rien de clair, je vous le dis. Ce n'est pas un spectacle — c'est un accompagnement.",
        ],
      },
    ],
  },
  {
    slug: "communication-animale",
    title: "Communication animale",
    subtitle: "Comprendre ce que ressentent vos compagnons",
    intro: [
      "La communication animale est un échange télépathique avec votre compagnon — chien, chat, cheval, NAC ou autre. Je me connecte à son énergie pour recevoir des images, des sensations et des messages qu'il souhaite transmettre.",
      "Je privilégie les séances à distance : l'animal reste chez lui, détendu, et moi je travaille depuis mon cabinet ou mon espace de soin.",
    ],
    forHumans: false,
    forAnimals: true,
    distancePreferred: true,
    sections: [
      {
        title: "Pourquoi consulter ?",
        list: [
          "Comprendre un changement de comportement",
          "Préparer une arrivée ou un départ (déménagement, nouveau compagnon)",
          "Accompagner une fin de vie",
          "Savoir si l'animal souffre ou va bien",
          "Renforcer le lien humain-animal",
        ],
      },
      {
        title: "Déroulement",
        paragraphs: [
          "Vous m'envoyez une photo récente de votre animal, son nom, son âge et votre question. Je me connecte à distance et vous transmets ce que je reçois par écrit ou en visio, selon votre préférence.",
          "Je ne remplace pas le vétérinaire : la communication animale est un complément, pas un diagnostic médical.",
        ],
      },
      {
        title: "Tous les animaux",
        paragraphs: [
          "Chiens, chats, chevaux, lapins, oiseaux, reptiles… Chaque espèce communique à sa manière. J'adapte mon approche et je vous dis honnêtement si je ne parviens pas à me connecter.",
        ],
      },
    ],
  },
  {
    slug: "fleurs-de-bach",
    title: "Fleurs de Bach",
    subtitle: "Rééquilibrer vos émotions naturellement",
    image: "/images/fleurs-de-bach.jpg",
    imageAlt:
      "Fleurs de Bach — flacons d'élixirs floraux pour l'équilibre émotionnel",
    intro: [
      "Les Fleurs de Bach sont 38 élixirs floraux développés par le Dr Edward Bach au XXe siècle. Chaque fleur correspond à un état émotionnel : peur, incertitude, solitude, épuisement…",
      "Je vous aide à composer un mélange personnalisé, en cabinet ou à distance, en m'appuyant sur l'écoute et parfois sur la kinésiologie.",
    ],
    forHumans: true,
    forAnimals: true,
    distancePreferred: true,
    sections: [
      {
        title: "Mon approche",
        paragraphs: [
          "Je ne promets pas de miracles. Les Fleurs de Bach sont un accompagnement émotionnel doux, qui peut compléter un suivi médical ou thérapeutique — jamais le remplacer.",
          "En séance, nous identifions ensemble les états émotionnels dominants et je compose un flacon sur mesure.",
        ],
      },
      {
        title: "Pour qui ?",
        list: [
          "Stress, anxiété, nervosité",
          "Deuil, tristesse, mélancolie",
          "Manque de confiance en soi",
          "Animaux stressés ou anxieux",
          "Transitions de vie (déménagement, séparation, retraite)",
        ],
      },
      {
        title: "Utilisation",
        paragraphs: [
          "Quelques gouttes, plusieurs fois par jour, directement dans la bouche ou diluées dans un verre d'eau. Pour les animaux, dans l'eau ou sur une friandise.",
          "Un flacon dure généralement 3 à 4 semaines. Nous faisons le point ensuite si besoin.",
        ],
      },
    ],
  },
  {
    slug: "eft",
    title: "EFT",
    subtitle: "Emotional Freedom Technique — libération émotionnelle",
    intro: [
      "L'EFT combine des tapotements doux sur des points d'acupuncture avec la focalisation sur une émotion ou un problème. C'est une technique simple que je peux vous apprendre pour l'utiliser en autonomie.",
      "Je l'intègre souvent à d'autres soins énergétiques ou en séance dédiée, pour humains comme pour animaux (à distance).",
    ],
    forHumans: true,
    forAnimals: true,
    distancePreferred: true,
    sections: [
      {
        title: "Comment ça marche ?",
        paragraphs: [
          "En tapotant certains points du corps tout en évoquant une émotion difficile, l'intensité émotionnelle diminue progressivement. Le protocole peut être répété jusqu'à ce que le ressenti s'apaise.",
          "Pour les animaux, je guide le propriétaire à distance ou j'utilise des techniques de projection énergétique.",
        ],
      },
      {
        title: "Indications",
        list: [
          "Stress et anxiété",
          "Phobies et peurs",
          "Traumatismes et chocs émotionnels",
          "Douleurs chroniques liées au stress",
          "Comportements anxieux chez l'animal",
        ],
      },
      {
        title: "En séance",
        paragraphs: [
          "Je vous guide pas à pas, en adaptant les formulations à votre situation. L'objectif est de réduire l'intensité émotionnelle pour retrouver plus de sérénité — et de vous donner les clés pour continuer seul.",
        ],
      },
    ],
  },
  {
    slug: "walking-therapy",
    title: "Walking therapy",
    subtitle: "Séances en nature, au rythme de la marche",
    intro: [
      "La walking therapy, ce sont des séances en extérieur — souvent en forêt — où l'on marche et l'on parle à un rythme doux. Moins demandées parfois, elles font pourtant beaucoup de bien : l'air, le silence, le mouvement aident à déposer ce qui pèse.",
      "Vous pouvez venir seul·e, ou avec votre animal (chien le plus souvent ; d'autres compagnons sont possibles au cas par cas, si le cadre le permet).",
    ],
    forHumans: true,
    forAnimals: true,
    pricing: {
      amount: 65,
      duration: "45 min",
      note: "Même tarif qu'une séance classique, en extérieur.",
    },
    sections: [
      {
        title: "Pourquoi en forêt ?",
        paragraphs: [
          "J'aime beaucoup accompagner en bois : on croise rarement quelqu'un, l'isolement sonore est réel, et le cadre invite naturellement à ralentir.",
          "Ce n'est pas une randonnée sportive. On avance à votre rythme, en laissant de la place à ce qui vient.",
        ],
      },
      {
        title: "Avec votre animal",
        paragraphs: [
          "Beaucoup de personnes apprécient de marcher avec leur chien. Certaines évoquent même leur chat ou un autre compagnon — on en discute ensemble pour voir si c'est adapté et sécurisant.",
          "L'animal fait partie de la séance : sa présence peut apaiser, ancrer, et ouvrir d'autres portes de dialogue.",
        ],
      },
      {
        title: "Pour qui ?",
        list: [
          "Envie de bouger plutôt que de rester assis en cabinet",
          "Stress, rumination, besoin d'air et de nature",
          "Personnes qui se sentent mieux en marchant pour parler",
          "Accompagnement avec son animal de compagnie",
        ],
      },
      {
        title: "Organisation pratique",
        paragraphs: [
          "Le lieu et le parcours se précisent lors de la prise de rendez-vous (accès, météo, niveau de marche). Prévoir des chaussures adaptées et une tenue confortable.",
          "En cas de mauvais temps, on peut reporter ou proposer une séance en cabinet.",
        ],
      },
    ],
  },
];

export function getMethod(slug: string | undefined): Method | undefined {
  if (!slug) return undefined;
  return METHODS.find((m) => m.slug === slug);
}

export function getAllMethods(): Method[] {
  return METHODS;
}
