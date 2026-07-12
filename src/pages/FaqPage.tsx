import SiteLayout from "@/layouts/SiteLayout";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import { FAQ_ITEMS } from "@/data/faq";

export default function FaqPage() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Questions fréquentes"
            title="FAQ"
            subtitle="Les réponses aux questions que l'on me pose le plus souvent."
            className="mb-12"
          />

          <div className="rounded-2xl border border-warm-border/70 bg-white/80 px-6 md:px-8 shadow-sm">
            {FAQ_ITEMS.map((item, i) => (
              <ScrollReveal key={item.question} delay={i * 0.04}>
                <div className="border-b border-warm-border/80 py-6 last:border-0">
                  <h2 className="font-display text-base font-semibold text-ink md:text-lg">
                    {item.question}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-warm-text-secondary md:text-base">
                    {item.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="mt-12 text-center">
              <p className="text-warm-text-secondary mb-6">
                Votre question n&apos;est pas dans la liste ?
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
