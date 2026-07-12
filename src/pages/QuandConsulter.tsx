import SiteLayout from "@/layouts/SiteLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

const motifsHumains = [
  "Stress, anxiété, épuisement",
  "Deuil, séparation, transitions de vie",
  "Blocages émotionnels",
  "Douleurs chroniques (en complément médical)",
  "Manque de confiance en soi",
  "Recherche de sens et d'harmonie intérieure",
];

const motifsAnimaux = [
  "Changement de comportement inexpliqué",
  "Anxiété, peur, hyperactivité",
  "Arrivée d'un nouveau compagnon ou bébé",
  "Déménagement ou changement d'environnement",
  "Convalescence ou fin de vie",
  "Renforcer le lien humain-animal",
];

export default function QuandConsulter() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Orientation"
            title="Quand consulter ?"
            subtitle="Si vous vous posez la question, c'est déjà un bon signe. Voici les situations où je peux vous accompagner."
            className="mb-12"
          />

          <ScrollReveal>
            <section className="mb-10 rounded-2xl border border-warm-border/60 bg-white/80 p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-ink mb-4">
                Pour les humains
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-warm-text-secondary marker:text-brand">
                {motifsHumains.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-warm-text-secondary">
                En cabinet à Bernissart, Silly ou Mons — ou à distance en visio pour
                certaines méthodes.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <section className="mb-10 rounded-2xl border border-warm-border/60 bg-white/80 p-8 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-ink mb-4">
                Pour les animaux
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-warm-text-secondary marker:text-brand">
                {motifsAnimaux.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-warm-text-secondary">
                Je privilégie les séances à distance : votre compagnon reste chez lui,
                détendu.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="rounded-2xl bg-gradient-to-r from-brand-dark via-brand to-lavender p-8 text-center">
              <p className="font-display text-lg text-white mb-6">
                Pas sûr(e) de la méthode adaptée ? Contactez-moi, on en parle
                ensemble.
              </p>
              <Button href="/contact" shine className="mx-auto">
                Me contacter
              </Button>
            </div>
          </ScrollReveal>

          <p className="mt-8 text-sm text-warm-text-secondary text-center">
            Besoin d&apos;un accompagnement psychologique ?{" "}
            <a
              href="https://www.celinebelin-psychologue.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Consultez mon site psychologie
            </a>
            .
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
