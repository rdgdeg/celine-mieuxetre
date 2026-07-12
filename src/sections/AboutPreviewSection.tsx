import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { SITE_IMAGES } from "@/data/images";
import { SITE } from "@/data/site";

export default function AboutPreviewSection() {
  return (
    <section id="a-propos" className="bg-cream-warm py-20 md:py-24">
      <div className="harmony-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal className="order-2 lg:order-1">
            <figure>
              <div className="overflow-hidden rounded-[1.5rem_0.75rem_1.5rem_0.75rem] shadow-hero-frame ring-1 ring-warm-border">
                <img
                  src={SITE_IMAGES.portrait}
                  alt={SITE_IMAGES.portraitAlt}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                  width={480}
                  height={600}
                />
              </div>
            </figure>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <SectionHeader
              label="Qui suis-je"
              title={`${SITE.practitioner}`}
              subtitle="Praticienne en soins énergétiques — une approche naturelle, humaine et bienveillante."
              align="left"
              className="mb-6"
            />
            <div className="space-y-4 text-warm-text-secondary leading-relaxed">
              <p>
                Depuis plusieurs années, j&apos;accompagne humains et animaux vers un
                mieux-être énergétique. Mon cabinet principal est à Bernissart ; je
                reçois aussi à Silly et Mons pour les humains.
              </p>
              <p>
                Je suis également psychologue agréée —{" "}
                <strong className="font-medium text-warm-text">deux activités distinctes</strong>,
                deux sites. Ici, c&apos;est l&apos;univers Harmonie et Mieux-Être : Reiki,
                shiatsu, kinésiologie, communication animale…
              </p>
            </div>
            <Button href="/a-propos" variant="outline" className="mt-8 rounded-xl">
              En savoir plus
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
