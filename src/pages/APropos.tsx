import SiteLayout from "@/layouts/SiteLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { SITE_IMAGES } from "@/data/images";
import { SITE } from "@/data/site";

export default function APropos() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="harmony-container py-24 md:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeader
              label="À propos"
              title={`Je suis ${SITE.practitioner}`}
              subtitle="Praticienne Harmonie et Mieux-Être — soins énergétiques pour humains et animaux."
              align="left"
              className="mb-8"
            />
            <div className="space-y-4 leading-relaxed text-warm-text-secondary">
              <p>
                J&apos;accompagne depuis plusieurs années humains et animaux vers un
                mieux-être énergétique et émotionnel. Reiki, Lahochi, shiatsu,
                kinésiologie, communication animale, Fleurs de Bach… Je combine ces
                approches selon vos besoins, toujours avec douceur et respect.
              </p>
              <p>
                Mon cabinet principal est à Bernissart (2 rue des Iguanodons). Je reçois
                aussi à Silly et Mons pour les humains. Pour les animaux, je privilégie
                le travail à distance — ils restent chez eux, dans leur confort.
              </p>
              <p>
                Je suis aussi psychologue agréée. Les deux activités sont complémentaires
                mais <strong className="font-medium text-warm-text">distinctes</strong>.
                Pour la psychothérapie, rendez-vous sur{" "}
                <a
                  href={SITE.psyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand underline-offset-2 hover:underline"
                >
                  mon site psychologie
                </a>
                .
              </p>
            </div>
            <Button href="/contact" shine className="mt-8 rounded-xl">
              Me contacter
            </Button>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <figure className="sticky top-28">
              <div className="overflow-hidden rounded-[1.5rem_0.75rem_1.5rem_0.75rem] shadow-hero-frame ring-1 ring-warm-border">
                <img
                  src={SITE_IMAGES.portrait}
                  alt={SITE_IMAGES.portraitAlt}
                  className="aspect-[4/5] w-full object-cover object-top"
                  loading="lazy"
                  width={520}
                  height={650}
                />
              </div>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </SiteLayout>
  );
}
