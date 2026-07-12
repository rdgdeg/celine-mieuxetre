import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { SITE_IMAGES } from "@/data/images";
import { SITE } from "@/data/site";

export default function AboutPreviewSection() {
  return (
    <section id="a-propos" className="py-24 bg-cream-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" delay={0.1} className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand/15 to-lavender/20 blur-md" />
              <img
                src={SITE_IMAGES.about}
                alt={SITE_IMAGES.aboutAlt}
                className="relative rounded-2xl w-full object-cover shadow-hero-frame ring-1 ring-brand/15"
                loading="lazy"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <SectionHeader
              animated
              label="À propos"
              title={`${SITE.practitioner}, praticienne en soins énergétiques`}
              align="left"
              className="mb-6"
            />
            <p className="text-warm-text-secondary leading-relaxed mb-4">
              J&apos;accompagne humains et animaux depuis plusieurs années, avec passion et
              humilité. Mon cabinet principal est à Bernissart ; je reçois aussi à Silly et
              Mons pour les humains.
            </p>
            <p className="text-warm-text-secondary leading-relaxed mb-6">
              Je suis aussi psychologue agréée — deux activités complémentaires, deux sites
              distincts. Ici, place aux soins énergétiques et au bien-être.
            </p>
            <Button href="/a-propos" variant="secondary">
              Mon parcours
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
