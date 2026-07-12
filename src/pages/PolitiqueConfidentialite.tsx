import { Link } from "react-router";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE } from "@/data/site";

export default function PolitiqueConfidentialite() {
  return (
    <LegalPageLayout title="Politique de confidentialité">
      <p>
        Cette page décrit comment sont traitées les données personnelles dans le cadre
        de la consultation de ce site web statique.
      </p>
      <p>
        <strong className="text-warm-text">Responsable du traitement :</strong> Céline
        Belin — {SITE.name} —{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="font-medium text-brand underline-offset-2 hover:underline"
        >
          {SITE.email}
        </a>
        .
      </p>
      <p>
        <strong className="text-warm-text">Formulaire de contact :</strong> lorsque vous
        utilisez le formulaire sur la page{" "}
        <Link to="/contact" className="font-medium text-brand underline-offset-2 hover:underline">
          Contact
        </Link>
        , votre messagerie s&apos;ouvre avec un message prérempli ; aucune donnée du
        formulaire n&apos;est enregistrée sur les serveurs de ce site.
      </p>
      <p>
        <strong className="text-warm-text">Prise de rendez-vous :</strong> la prise de
        contact se fait par email, téléphone ou WhatsApp. Les échanges sont traités de
        manière confidentielle.
      </p>
      <p>
        <strong className="text-warm-text">Cookies :</strong> ce site utilise un cookie
        technique (stocké localement) pour mémoriser votre choix concernant la bannière
        cookies. Aucun cookie de mesure d&apos;audience ni traceur tiers n&apos;est
        intégré.
      </p>
      <p>
        <strong className="text-warm-text">Vos droits :</strong> vous disposez d&apos;un
        droit d&apos;accès, de rectification, d&apos;effacement et de limitation du
        traitement de vos données. Pour exercer ces droits, contactez{" "}
        <a
          href={`mailto:${SITE.email}`}
          className="text-brand hover:underline"
        >
          {SITE.email}
        </a>
        . Réclamation possible auprès de l&apos;APD (Belgique) —{" "}
        <a
          href="https://www.autoriteprotectiondonnees.be"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand hover:underline"
        >
          www.autoriteprotectiondonnees.be
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
