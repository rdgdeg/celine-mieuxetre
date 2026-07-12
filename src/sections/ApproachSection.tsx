import { Link } from "react-router";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { SITE } from "@/data/site";

export default function ApproachSection() {
  return (
    <section id="approche" className="py-24 bg-cream-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <SectionHeader
              label="Philosophie"
              title="Une approche naturelle et bienveillante"
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 text-warm-text-secondary leading-relaxed">
              <p>
                Je crois que chaque être — humain ou animal — possède en lui les ressources
                pour retrouver l&apos;équilibre. Mon rôle : créer un espace sécurisant où
                l&apos;énergie peut circuler librement.
              </p>
              <p>
                Pas de promesses miracles, pas de diagnostic médical. Juste un
                accompagnement honnête, à votre rythme, avec les outils qui vous
                correspondent.
              </p>
              <p className="text-sm">
                {SITE.pricingNote} —{" "}
                <Link to="/premiere-seance" className="text-brand hover:underline">
                  Comment se déroule une première séance ?
                </Link>
              </p>
            </div>
            <Button href="/a-propos" variant="secondary" className="mt-6">
              En savoir plus sur moi
            </Button>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "9", label: "méthodes proposées" },
                { n: "∞", label: "espèces animales" },
                { n: "3", label: "lieux de consultation" },
                { n: "1", label: "objectif : l'harmonie" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-warm-border/60 bg-white/80 p-6 text-center shadow-sm"
                >
                  <p className="font-display text-3xl font-bold text-brand">{stat.n}</p>
                  <p className="mt-1 text-xs text-warm-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
