import {
  LireAussi,
  FaqItem,
  LinkBlog,
  LinkPage,
  MaillagePagesSite,
  ArticleFigure,
} from "@/content/blog/articleUi";
import { blogBodyImage } from "@/data/images";

export default function FleursDeBachAnimauxBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Les <strong>Fleurs de Bach</strong> ne sont pas réservées aux humains. Avec un
        protocole adapté, je les utilise aussi pour accompagner émotionnellement chiens,
        chats et autres compagnons — toujours en complément d&apos;un suivi vétérinaire.
      </p>

      <ArticleFigure
        src={blogBodyImage("fleurs-de-bach-animaux")}
        alt="Flacons Fleurs de Bach et fleurs sauvages — équilibre émotionnel pour animaux"
        caption="Les élixirs floraux accompagnent le bien-être émotionnel de votre compagnon."
      />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Rescue et mélanges personnalisés
      </h2>
      <p>
        Rescue Remedy est le mélange le plus connu — utile en situation d&apos;urgence
        émotionnelle (visite chez le véto, orage, déménagement). Mais je préfère souvent
        composer un flacon sur mesure après avoir identifié l&apos;état dominant : peur,
        anxiété, agitation, tristesse…
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Comment les administrer ?
      </h2>
      <p>
        Quelques gouttes dans l&apos;eau, sur une friandise ou directement sur les
        lèvres/pattes selon l&apos;animal. La kinésiologie peut m&apos;aider à tester la
        fleur la plus adaptée à distance.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="fleurs-de-bach-animaux" />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Questions fréquentes
      </h2>
      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6">
        <FaqItem question="Les Fleurs de Bach remplacent-elles un traitement vétérinaire ?">
          <p>
            Non. Elles accompagnent le bien-être émotionnel, pas un diagnostic ni un
            traitement médical.
          </p>
        </FaqItem>
      </div>

      <p className="mt-8 text-sm">
        Page dédiée :{" "}
        <LinkPage to="/methodes/fleurs-de-bach">Fleurs de Bach</LinkPage>. Autre lecture :{" "}
        <LinkBlog slug="soins-energetiques-distance-animaux">
          soins à distance pour animaux
        </LinkBlog>
        .
      </p>
    </>
  );
}
