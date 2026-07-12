import {
  LireAussi,
  LinkPage,
  MaillagePagesSite,
  ArticleFigure,
} from "@/content/blog/articleUi";
import { blogBodyImage } from "@/data/images";

export default function SoinsEnergetiquesHumainsBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Vous découvrez les <strong>soins énergétiques</strong> et vous ne savez pas par
        où commencer ? Voici comment je vous oriente en cabinet à Bernissart, Silly ou
        Mons.
      </p>

      <ArticleFigure
        src={blogBodyImage("soins-energetiques-humains")}
        alt="Personne détendue — soins énergétiques humains"
        caption="Reiki, Lahochi, shiatsu, kinésiologie : autant de portes d'entrée."
      />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Par où commencer ?
      </h2>
      <p>
        Pour le stress et la détente : Reiki ou Lahochi. Pour les tensions physiques :
        shiatsu. Pour comprendre un blocage : kinésiologie. Pour les émotions :
        Fleurs de Bach ou EFT. En séance, nous clarifions ensemble.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Cabinet ou distance ?
      </h2>
      <p>
        Pour les humains, je privilégie le cabinet quand c&apos;est possible — le contact
        direct enrichit le soin. Certaines méthodes (Fleurs de Bach, EFT) se prêtent aussi
        à la visio.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="soins-energetiques-humains" />

      <p className="mt-8 text-sm">
        <LinkPage to="/quand-consulter">Quand consulter ?</LinkPage> ·{" "}
        <LinkPage to="/premiere-seance">Première séance</LinkPage>
      </p>
    </>
  );
}
