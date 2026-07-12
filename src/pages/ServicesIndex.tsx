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
import SiteLayout from "@/layouts/SiteLayout";
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

export default function ServicesIndex() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="relative px-6 pt-24 md:pt-28 pb-16 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-lavender/10 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-[1200px] relative">
          <ScrollReveal blur={false} scale={1}>
            <SectionHeader
              label="Mes méthodes"
              title="9 approches pour votre harmonie"
              subtitle="Humains et animaux — en cabinet ou à distance. Tarifs sur demande."
              className="mb-14"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {METHODS_PREVIEW.map(({ icon, title, description, href }, i) => {
              const Icon = ICONS[icon] ?? Sparkles;
              return (
                <ScrollReveal key={title} delay={i * 0.06} distance={28}>
                  <TiltCard intensity={8}>
                    <Link
                      to={href}
                      className="group card-shine block h-full rounded-2xl border border-warm-border/70 bg-white/90 p-8 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:shadow-card-hover"
                    >
                      <div className="mb-5 flex items-start justify-between">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-lavender/15 transition-all duration-300 group-hover:from-brand/25 group-hover:to-lavender/25 group-hover:scale-105">
                          <Icon size={28} className="text-brand" />
                        </div>
                        <ArrowUpRight
                          size={20}
                          className="text-brand/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                        />
                      </div>
                      <h2 className="font-display text-xl font-semibold text-warm-text mb-3 group-hover:text-brand transition-colors">
                        {title}
                      </h2>
                      <p className="text-sm text-warm-text-secondary leading-relaxed">
                        {description}
                      </p>
                    </Link>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
