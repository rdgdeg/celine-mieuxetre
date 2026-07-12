import SiteLayout from "@/layouts/SiteLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { Link } from "react-router";

const principles = [
  {
    title: "Complémentarité, jamais substitution",
    content:
      "Mes soins énergétiques ne remplacent jamais un avis médical ou vétérinaire. Je peux accompagner en parallèle, mais je ne pose pas de diagnostic ni ne prescris de traitement.",
  },
  {
    title: "Transparence et honnêteté",
    content:
      "Si une méthode ne me semble pas adaptée à votre situation, je vous le dis. Si je ne parviens pas à me connecter à un animal, je vous le dis aussi. Pas de promesses miracles.",
  },
  {
    title: "Consentement et confort",
    content:
      "Vous pouvez interrompre une séance à tout moment. Pour les animaux, je respecte leur rythme et leur retrait. Aucune contrainte.",
  },
  {
    title: "Confidentialité",
    content:
      "Ce qui est partagé en séance reste entre nous. Je ne divulgue aucune information sans votre accord explicite.",
  },
  {
    title: "Distinction psychologie / soins énergétiques",
    content:
      "La psychologie relève d'un cadre thérapeutique agréé (site séparé). Les soins énergétiques relèvent du bien-être. Les deux peuvent se compléter, mais restent distincts.",
  },
];

export default function Ethique() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Cadre"
            title="Éthique & déontologie"
            subtitle="Mon engagement envers vous, vos animaux et un accompagnement responsable."
            className="mb-12"
          />

          <div className="space-y-6">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.06}>
                <section className="rounded-2xl border border-warm-border/60 bg-white/80 p-6 md:p-8 shadow-sm">
                  <h2 className="font-display text-lg font-semibold text-ink mb-3">
                    {p.title}
                  </h2>
                  <p className="text-warm-text-secondary leading-relaxed">{p.content}</p>
                </section>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-10 text-sm text-warm-text-secondary text-center">
            Des questions ? Consultez la{" "}
            <Link to="/faq" className="text-brand hover:underline">
              FAQ
            </Link>{" "}
            ou{" "}
            <Link to="/contact" className="text-brand hover:underline">
              contactez-moi
            </Link>
            .
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
