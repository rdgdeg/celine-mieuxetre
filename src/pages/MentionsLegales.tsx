import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE } from "@/data/site";

export default function MentionsLegales() {
  return (
    <LegalPageLayout title="Mentions légales">
      <p>
        Les présentes mentions légales encadrent l&apos;utilisation du site vitrine de
        Harmonie et Mieux-Être, activité de soins énergétiques et bien-être exercée par
        Céline Belin.
      </p>
      <p>
        <strong className="text-warm-text">Éditeur du site :</strong> Céline Belin —
        {SITE.name} — contact :{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-brand underline-offset-2 hover:underline"
        >
          {SITE.email}
        </a>
        , téléphone {SITE.phone}.
      </p>
      <p>
        <strong className="text-warm-text">Adresse :</strong> 2 rue des Iguanodons, 7320
        Bernissart (Belgique). Consultations également à Silly et Mons pour les humains.
      </p>
      <p>
        <strong className="text-warm-text">Hébergement :</strong> Netlify, Inc. — 2325 3rd
        Street, Suite 296, San Francisco, California 94107, États-Unis.
      </p>
      <p>
        <strong className="text-warm-text">Propriété intellectuelle :</strong> les
        contenus textes et visuels publiés sur ce site sont destinés à l&apos;information
        du public. Toute reproduction non autorisée peut constituer une contrefaçon.
      </p>
      <p>
        <strong className="text-warm-text">Responsabilité :</strong> les informations
        publiées ont une vocation informative et ne remplacent pas un avis médical ou
        vétérinaire. En cas d&apos;urgence, contactez le 112 ou les services d&apos;urgence
        de votre région.
      </p>
    </LegalPageLayout>
  );
}
