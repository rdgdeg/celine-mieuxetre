import Button from "@/components/Button";
import { HERO_LOCATIONS, HERO_TAGS } from "@/data/site";
import { SITE_IMAGES } from "@/data/images";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-cream pt-[72px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_90%_0%,rgba(240,196,176,0.35),transparent_50%),radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(184,201,176,0.2),transparent_45%)]"
        aria-hidden
      />

      <div className="harmony-container relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1fr_340px] lg:gap-16 xl:grid-cols-[1.1fr_380px]">
        <div className="max-w-xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-brand/20 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-dark backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
            Soins énergétiques · Nature & bien-être
          </p>

          <h1 className="mb-6 font-display text-[2.75rem] font-semibold leading-[1.08] text-ink md:text-5xl lg:text-[3.25rem]">
            Prenez soin de vous
            <br />
            <span className="text-brand">et de vos animaux</span>
            <br />
            <span className="text-2xl font-medium italic text-warm-text-secondary md:text-3xl">
              naturellement
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-warm-text-secondary md:text-lg">
            Je suis Céline Belin. Sous le nom{" "}
            <strong className="font-medium text-warm-text">Harmonie et Mieux-Être</strong>,
            j&apos;accompagne humains et compagnons à quatre pattes à Bernissart, en
            Hainaut — en cabinet ou à distance.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-cream-warm px-3 py-1.5 text-sm font-medium text-warm-text-secondary ring-1 ring-warm-border/80"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact" shine className="rounded-xl px-7">
              Me contacter
            </Button>
            <Button variant="secondary" href="/methodes" className="rounded-xl px-7">
              Mes méthodes
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-2 border-t border-warm-border/60 pt-8">
            {HERO_LOCATIONS.map((loc) => (
              <span
                key={loc}
                className="text-sm text-warm-text-light before:mr-2 before:text-brand before:content-['•'] first:before:content-none first:before:mr-0"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none">
          <div
            className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-peach/40 blur-2xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-sage/20 blur-2xl"
            aria-hidden
          />
          <figure className="relative">
            <div className="overflow-hidden rounded-[2rem_1rem_2rem_1rem] bg-cream-warm shadow-hero-frame ring-1 ring-warm-border/80">
              <img
                src={SITE_IMAGES.hero}
                alt={SITE_IMAGES.heroAlt}
                className="aspect-[3/4] w-full object-cover object-top"
                loading="eager"
                width={380}
                height={507}
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-warm-text-light lg:text-left">
              Céline Belin — Bernissart & Hainaut
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
