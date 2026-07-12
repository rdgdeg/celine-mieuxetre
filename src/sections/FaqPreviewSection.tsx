import { Link } from "react-router";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { FAQ_ITEMS } from "@/data/faq";

export default function FaqPreviewSection() {
  const preview = FAQ_ITEMS.slice(0, 4);

  return (
    <section id="faq" className="py-24 bg-cream-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal blur={false} scale={1}>
          <SectionHeader
            animated
            label="Questions fréquentes"
            title="Vous vous posez peut-être ces questions"
          />
        </ScrollReveal>

        <div className="mx-auto max-w-3xl mt-10 rounded-2xl border border-warm-border/70 bg-white/80 px-6 md:px-8 shadow-sm">
          {preview.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.05}>
              <div className="border-b border-warm-border/80 py-5 last:border-0">
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm text-warm-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.12} blur={false} scale={1}>
          <p className="mt-8 text-center">
            <Link to="/faq" className="text-brand font-semibold hover:underline">
              Voir toutes les questions →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
