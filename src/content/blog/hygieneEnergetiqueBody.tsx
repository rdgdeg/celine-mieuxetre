import {
  LireAussi,
  FaqItem,
  LinkPage,
  MaillagePagesSite,
  ArticleFigure,
} from "@/content/blog/articleUi";
import { blogBodyImage } from "@/data/images";

export default function HygieneEnergetiqueBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        L&apos;<strong>hygiène énergétique</strong>, ce sont les petits gestes du
        quotidien pour prendre soin de votre énergie — chez vous, au travail, après une
        journée difficile.
      </p>

      <ArticleFigure
        src={blogBodyImage("hygiene-energetique")}
        alt="Intérieur lumineux — hygiène énergétique"
        caption="Aérer, nettoyer, intentionner : des gestes simples et accessibles."
      />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Quelques réflexes simples
      </h2>
      <ul className="list-disc pl-6 space-y-2 marker:text-brand">
        <li>Aérer votre espace de vie régulièrement</li>
        <li>Prendre une douche ou se laver les mains après une situation chargée</li>
        <li>Visualiser une lumière qui vous entoure et vous protège</li>
        <li>Marcher dans la nature, pieds nus si possible</li>
        <li>Limiter les écrans avant le coucher</li>
      </ul>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Nettoyer un lieu
      </h2>
      <p>
        Après un conflit, une visite difficile ou une période de maladie, un
        « nettoyage » énergétique du lieu peut aider. Encens, son (bol tibétain),
        sel, intention… Je peux vous guider en séance ou à distance.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="hygiene-energetique" />

      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6 mt-10">
        <FaqItem question="Faut-il être 'sensible' à l'énergie ?">
          <p>
            Non. Même sans ressentir quoi que ce soit, ces gestes ont un effet apaisant
            sur le corps et l&apos;esprit.
          </p>
        </FaqItem>
      </div>

      <p className="mt-8 text-sm">
        <LinkPage to="/methodes/reiki">Reiki</LinkPage> ·{" "}
        <LinkPage to="/contact">Me contacter</LinkPage>
      </p>
    </>
  );
}
