import SiteLayout from "@/layouts/SiteLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { SITE } from "@/data/site";

const steps = [
  {
    title: "1. Premier contact",
    content:
      "Par téléphone, email, WhatsApp ou le formulaire du site. Vous me décrivez votre situation et vos attentes. Je vous réponds sous 48 h en général.",
  },
  {
    title: "2. Échange et orientation",
    content:
      "Nous clarifions ensemble la méthode la plus adaptée : Reiki, Lahochi, communication animale, Fleurs de Bach… Je vous explique comment se déroule la séance.",
  },
  {
    title: "3. La séance",
    content:
      "Durée : 45 à 75 minutes selon la méthode. Pour les humains : en cabinet ou à distance. Pour les animaux : principalement à distance, avec une photo et quelques infos.",
  },
  {
    title: "4. Après la séance",
    content:
      "Je vous transmets mes observations et, si pertinent, des conseils pour prolonger les bienfaits (Fleurs de Bach, hygiène énergétique, etc.). Aucun engagement sur la durée.",
  },
];

export default function PremiereSeance() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Première fois"
            title="Comment se déroule une première séance ?"
            subtitle="Pas de stress : je vous accueille avec bienveillance, humains comme animaux."
            className="mb-12"
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-warm-border/60 bg-white/80 p-6 md:p-8 shadow-sm">
                  <h2 className="font-display text-lg font-semibold text-ink mb-3">
                    {step.title}
                  </h2>
                  <p className="text-warm-text-secondary leading-relaxed">{step.content}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-brand/20 bg-mist-soft/80 p-8 text-center">
              <p className="font-display text-lg text-ink mb-2">{SITE.pricingNote}</p>
              <p className="text-sm text-warm-text-secondary mb-6">
                Chaque accompagnement est personnalisé. Contactez-moi pour un devis
                adapté.
              </p>
              <Button href="/contact" shine className="mx-auto">
                Me contacter
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
