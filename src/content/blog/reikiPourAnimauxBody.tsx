import {
  LireAussi,
  LinkBlog,
  LinkPage,
  MaillagePagesSite,
  ArticleFigure,
} from "@/content/blog/articleUi";
import { blogBodyImage } from "@/data/images";

export default function ReikiPourAnimauxBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Le <strong>Reiki</strong> pour animaux, c&apos;est l&apos;une des demandes les
        plus fréquentes que je reçois. Voici ce que j&apos;observe en séance — sans
        promesse miracle, avec honnêteté.
      </p>

      <ArticleFigure
        src={blogBodyImage("reiki-pour-animaux")}
        alt="Chien détendu — séance Reiki pour animaux"
        caption="Détente, sommeil, changement de posture : des signes que l'énergie circule."
      />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Signes de détente
      </h2>
      <p>
        Bâillements, léchage des lèvres, changement de position pour m&apos;offrir une
        zone, sommeil profond, ronronnement (chats) ou soupirs (chiens). Chaque animal
        a son langage.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Durée et fréquence
      </h2>
      <p>
        Une séance dure 30 à 45 minutes à distance. Parfois une séance suffit, parfois
        j&apos;en recommande plusieurs espacées. On en parle après chaque séance, sans
        engagement.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="reiki-pour-animaux" />

      <p className="mt-8 text-sm">
        <LinkPage to="/methodes/reiki">Page Reiki</LinkPage> ·{" "}
        <LinkBlog slug="tous-les-animaux">Tous les animaux</LinkBlog>
      </p>
    </>
  );
}
