import {
  LireAussi,
  FaqItem,
  LinkBlog,
  LinkPage,
  MaillagePagesSite,
  ArticleFigure,
} from "@/content/blog/articleUi";
import { blogBodyImage } from "@/data/images";

export default function SoinsEnergetiquesDistanceAnimauxBody() {
  return (
    <>
      <p className="lead text-lg text-warm-text">
        Pour les animaux, je privilégie largement les <strong>soins à distance</strong>.
        Votre compagnon reste chez lui, détendu — et moi, je me connecte à son énergie
        depuis mon espace de travail.
      </p>

      <ArticleFigure
        src={blogBodyImage("soins-energetiques-distance-animaux")}
        alt="Animal paisible à la maison — soins énergétiques à distance"
        caption="Pas besoin de transport ni de cage : l'animal reste dans son confort."
      />

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Pourquoi à distance ?
      </h2>
      <p>
        Un animal stressé par le transport ou l&apos;inconnu du cabinet ne reçoit pas
        l&apos;énergie de la même manière. Chez lui, il peut s&apos;allonger, s&apos;endormir,
        accepter le soin naturellement.
      </p>

      <h2 className="mt-10 font-display text-xl font-semibold text-ink md:text-2xl">
        Comment ça se passe concrètement ?
      </h2>
      <p>
        Vous m&apos;envoyez une photo récente, le nom, l&apos;âge et votre question. Nous
        fixons un créneau. Pendant la séance, vous pouvez rester avec lui ou vaquer à vos
        occupations — beaucoup de propriétaires me disent que leur animal s&apos;endort
        pile au moment prévu.
      </p>

      <MaillagePagesSite />

      <LireAussi excludeSlug="soins-energetiques-distance-animaux" />

      <div className="rounded-xl border border-warm-border/70 bg-white/80 px-4 md:px-6 mt-10">
        <FaqItem question="L'animal doit-il être éveillé ?">
          <p>
            Non. Endormi ou actif, l&apos;énergie circule. Certains réagissent en se
            calmant, d&apos;autres en changeant de position.
          </p>
        </FaqItem>
      </div>

      <p className="mt-8 text-sm">
        En savoir plus :{" "}
        <LinkPage to="/methodes/reiki">Reiki</LinkPage>,{" "}
        <LinkBlog slug="reiki-pour-animaux">Reiki pour animaux</LinkBlog>.
      </p>
    </>
  );
}
