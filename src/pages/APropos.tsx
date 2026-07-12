import SiteLayout from "@/layouts/SiteLayout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { SITE_IMAGES } from "@/data/images";
import { SITE } from "@/data/site";

export default function APropos() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <SectionHeader
                label="À propos"
                title={`Je suis ${SITE.practitioner}`}
                subtitle="Praticienne en soins énergétiques, passionnée par l'harmonie entre humains et animaux."
                align="left"
                className="mb-8"
              />
              <div className="space-y-4 text-warm-text-secondary leading-relaxed">
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
                  mais distinctes. Pour la psychothérapie, rendez-vous sur{" "}
                  <a
                    href={SITE.psyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    mon site psychologie
                  </a>
                  .
                </p>
              </div>
              <Button href="/contact" shine className="mt-8">
                Me contacter
              </Button>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand/20 to-lavender/20 blur-md" />
                <img
                  src={SITE_IMAGES.about}
                  alt={SITE_IMAGES.aboutAlt}
                  className="relative rounded-2xl w-full object-cover shadow-hero-frame ring-1 ring-brand/15"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
