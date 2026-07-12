import { Link } from "react-router";
import {
  Sparkles,
  Hand,
  Zap,
  Heart,
  Activity,
  MessageCircle,
  PawPrint,
  Flower2,
  HandHeart,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import TiltCard from "@/components/TiltCard";
import { METHODS_PREVIEW } from "@/data/site";

const ICONS: Record<string, LucideIcon> = {
  Sparkles,
  Hand,
  Zap,
  Heart,
  Activity,
  MessageCircle,
  PawPrint,
  Flower2,
  HandHeart,
};

export default function MethodsPreviewSection() {
  const preview = METHODS_PREVIEW.slice(0, 6);

  return (
    <section id="methodes" className="relative py-24 bg-cream overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-lavender/8 blur-3xl"
        aria-hidden
      />
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <ScrollReveal blur={false} scale={1}>
          <SectionHeader
            animated
            label="Mes méthodes"
            title="9 approches pour votre harmonie"
            subtitle="Tarifs sur demande — contactez-moi pour en discuter."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map(({ icon, title, description, href }, i) => {
            const Icon = ICONS[icon] ?? Sparkles;
            return (
              <ScrollReveal key={title} delay={i * 0.06} distance={28}>
                <TiltCard intensity={8}>
                  <Link
                    to={href}
                    className="group card-shine block h-full rounded-2xl border border-warm-border/70 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:shadow-card-hover"
                  >
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-lavender/15 group-hover:scale-105 transition-transform">
                        <Icon size={24} className="text-brand" />
                      </div>
                      <ArrowUpRight size={18} className="text-brand/40 group-hover:text-brand transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-warm-text mb-2 group-hover:text-brand transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-warm-text-secondary leading-relaxed">{description}</p>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15} blur={false} scale={1}>
          <p className="mt-12 text-center">
            <Link
              to="/methodes"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
            >
              Voir les 9 méthodes
              <ArrowUpRight size={16} />
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
