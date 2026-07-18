import { useEffect, useRef } from "react";
import { Link } from "react-router";
import SiteLayout from "@/layouts/SiteLayout";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import { gsap } from "@/lib/gsap";
import { SITE } from "@/data/site";
import { formatMethodPrice, type MethodPricing } from "@/data/methods";

export type MethodSection = {
  title: string;
  content: React.ReactNode;
};

interface MethodPageLayoutProps {
  title: string;
  subtitle?: string;
  intro: React.ReactNode;
  sections: MethodSection[];
  breadcrumbLabel?: string;
  image?: string;
  imageAlt?: string;
  pricing?: MethodPricing;
}

export default function MethodPageLayout({
  title,
  subtitle,
  intro,
  sections,
  breadcrumbLabel,
  image,
  imageAlt,
  pricing,
}: MethodPageLayoutProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }, el);
    return () => ctx.revert();
  }, [title, subtitle]);

  const ctaPricing = pricing ? formatMethodPrice(pricing) : SITE.pricingNote;

  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-24">
      <div className="relative px-6 pt-24 pb-20 md:pt-28 md:pb-24 lg:pb-28 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-lavender/12 blur-3xl"
          aria-hidden
        />
        <div className="mx-auto max-w-3xl relative">
          <ScrollReveal blur={false} scale={1} distance={12}>
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-warm-text-secondary">
              <Link to="/" className="hover:text-brand transition-colors">
                Accueil
              </Link>
              <span className="mx-2">/</span>
              <Link to="/methodes" className="hover:text-brand transition-colors">
                Méthodes
              </Link>
              <span className="mx-2">/</span>
              <span className="text-warm-text">{breadcrumbLabel ?? title}</span>
            </nav>
          </ScrollReveal>

          {image && (
            <ScrollReveal blur={false} scale={1} distance={16}>
              <figure className="mb-10 overflow-hidden rounded-2xl shadow-card ring-1 ring-warm-border/60">
                <img
                  src={image}
                  alt={imageAlt ?? title}
                  className="aspect-[3/2] w-full object-cover"
                  loading="eager"
                  width={960}
                  height={640}
                />
              </figure>
            </ScrollReveal>
          )}

          <header ref={headerRef} className="mb-12">
            <h1 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-[2.75rem] leading-tight opacity-0">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-lg text-warm-text-secondary leading-relaxed opacity-0">
                {subtitle}
              </p>
            )}
            {pricing && (
              <p className="mt-5 inline-flex items-baseline gap-2 rounded-full border border-brand/20 bg-brand/8 px-4 py-2 text-sm font-medium text-brand opacity-0">
                <span className="font-display text-lg text-ink">
                  {pricing.amount}&nbsp;€
                </span>
                <span className="text-warm-text-secondary">· {pricing.duration}</span>
              </p>
            )}
            <div className="mt-6 text-base leading-relaxed text-warm-text-secondary space-y-4 opacity-0">
              {intro}
            </div>
          </header>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.06} distance={24}>
                <section className="rounded-2xl border border-warm-border/50 bg-white/60 p-6 md:p-8 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-card">
                  <h2 className="font-display text-xl font-semibold text-ink md:text-2xl mb-4">
                    {section.title}
                  </h2>
                  <div className="text-base leading-relaxed text-warm-text-secondary space-y-4">
                    {section.content}
                  </div>
                </section>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="mt-16 mb-2 rounded-2xl bg-gradient-to-r from-brand-dark via-brand to-lavender p-8 text-center shadow-banner">
              <p className="font-display text-xl text-white mb-2">
                Envie d&apos;en savoir plus ?
              </p>
              <p className="text-sm text-white/80 mb-6">{ctaPricing}</p>
              <div className="flex flex-nowrap justify-center items-center gap-3">
                <Button
                  href="/contact"
                  shine
                  className="px-5 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm"
                >
                  Me contacter
                </Button>
                <Button
                  variant="secondary"
                  href="/premiere-seance"
                  className="px-5 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm border-white/40 text-white hover:bg-white/10"
                >
                  Première séance
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
