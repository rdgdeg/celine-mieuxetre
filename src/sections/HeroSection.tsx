import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Button from "@/components/Button";
import ScrollIndicator from "@/components/ScrollIndicator";
import { HERO_LOCATIONS, HERO_TAGS } from "@/data/site";
import { SITE_IMAGES } from "@/data/images";

const LEAVES = ["🌿", "🍃", "🌸"];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleAccentRef = useRef<HTMLSpanElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(
          [
            labelRef.current,
            titleRef.current,
            introRef.current,
            ctaRef.current,
            citiesRef.current,
            imageRef.current,
            frameRef.current,
          ],
          { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
        );
        if (citiesRef.current?.children.length) {
          gsap.set(citiesRef.current.children, { opacity: 1, y: 0, scale: 1 });
        }
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 28, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
        0.1
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 44, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75 },
          "-=0.4"
        )
        .fromTo(
          titleAccentRef.current,
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.7, ease: "power2.out" },
          "-=0.55"
        )
        .fromTo(
          introRef.current,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.45"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.4)" },
          "-=0.35"
        );

      if (citiesRef.current?.children.length) {
        gsap.set(citiesRef.current, { opacity: 1 });
        tl.fromTo(
          citiesRef.current.children,
          { opacity: 0, y: 18, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.45,
            ease: "back.out(1.3)",
          },
          "-=0.3"
        );
      }

      tl.fromTo(
        frameRef.current,
        { opacity: 0, scale: 0.88, rotate: -2, y: 40 },
        { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 1, ease: "power3.out" },
        0.25
      ).fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
        "-=0.75"
      );

      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative min-h-screen max-h-[960px] overflow-hidden bg-gradient-to-br from-cream via-mist-soft to-lavender/10"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_-10%,rgba(168,152,212,0.25),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(124,107,170,0.12),transparent_50%)]" />
        <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-gradient-to-bl from-lavender/40 via-lavender-light/30 to-brand-light/20 blur-3xl animate-hero-blob motion-reduce:animate-none" />
        <div className="absolute -left-16 bottom-32 h-72 w-72 rounded-full bg-gradient-to-tr from-brand/15 via-lavender/20 to-mist/60 blur-3xl animate-hero-blob-slow motion-reduce:animate-none" />

        {LEAVES.map((leaf, i) => (
          <span
            key={leaf}
            className={`absolute text-2xl opacity-30 md:text-3xl ${
              i === 0
                ? "left-[8%] top-[22%] floating-leaf"
                : i === 1
                  ? "right-[12%] top-[38%] floating-leaf-delayed"
                  : "left-[18%] bottom-[28%] floating-leaf"
            }`}
          >
            {leaf}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-6 pt-[calc(72px+1.25rem)] lg:pt-[calc(72px+2rem)]">
        <div className="grid w-full grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-6 xl:gap-12">
          <div className="order-2 flex w-full flex-col lg:order-1 lg:col-span-6 lg:max-w-xl xl:max-w-[28rem]">
            <span
              ref={labelRef}
              className="mb-4 inline-block origin-left rounded-full border border-brand/20 bg-white/75 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark shadow-sm backdrop-blur-md opacity-0"
            >
              Soins énergétiques · Humains & animaux
            </span>

            <h1
              ref={titleRef}
              className="mb-5 font-display text-4xl font-bold leading-[1.06] text-ink opacity-0 md:text-5xl lg:text-[3.5rem]"
            >
              Retrouver l&apos;harmonie,
              <br />
              <span
                ref={titleAccentRef}
                className="inline-block bg-gradient-to-r from-brand via-lavender to-lavender-light bg-clip-text text-transparent opacity-0"
              >
                pour vous et vos animaux
              </span>
            </h1>

            <div ref={introRef} className="mb-8 max-w-[540px] space-y-3 opacity-0">
              <p className="border-l-[3px] border-lavender/80 pl-4 text-base leading-relaxed text-warm-text-secondary md:text-[17px]">
                Je suis Céline Belin, praticienne en soins énergétiques à Bernissart,
                Silly et Mons. J&apos;accompagne humains et compagnons à quatre pattes
                avec douceur — en cabinet ou à distance.
              </p>
              <p className="flex flex-wrap items-center gap-2 text-sm">
                {HERO_TAGS.map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-full px-3 py-1 font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
                      i % 3 === 0
                        ? "bg-brand/10 text-brand ring-1 ring-brand/15"
                        : i % 3 === 1
                          ? "bg-lavender/15 text-brand-dark ring-1 ring-lavender/25"
                          : "bg-mist/80 text-warm-text-secondary ring-1 ring-warm-border/50"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </p>
            </div>

            <div ref={ctaRef} className="mb-10 flex flex-nowrap items-center gap-2 opacity-0 sm:gap-4">
              <Button href="/contact" shine className="px-5 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm">
                Me contacter
              </Button>
              <Button
                variant="secondary"
                href="/#methodes"
                className="px-5 py-3 text-xs sm:px-8 sm:py-3.5 sm:text-sm"
              >
                Découvrir mes méthodes
              </Button>
            </div>

            <div ref={citiesRef} className="flex flex-wrap gap-2.5 opacity-0 md:gap-3">
              {HERO_LOCATIONS.map((loc) => (
                <span
                  key={loc}
                  className="rounded-full border border-lavender/35 bg-white/85 px-4 py-2 text-sm text-warm-text-secondary shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:text-brand hover:shadow-card motion-reduce:transition-none"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={parallaxRef}
            className="order-1 flex justify-center will-change-transform lg:order-2 lg:col-span-6 lg:justify-end"
          >
            <div
              ref={frameRef}
              className="group relative w-full max-w-[340px] opacity-0 sm:max-w-[380px] lg:max-w-[420px]"
            >
              <div
                className="absolute -inset-2 rounded-[1.4rem] bg-gradient-to-br from-lavender via-brand to-lavender-light opacity-70 blur-md transition-opacity duration-500 group-hover:opacity-90 motion-reduce:opacity-60"
                aria-hidden
              />
              <div className="relative rounded-2xl bg-gradient-to-br from-white via-mist-soft to-lavender/10 p-[3px] shadow-hero-frame ring-1 ring-brand/15">
                <div className="overflow-hidden rounded-[0.9rem] bg-ink/10">
                  <img
                    ref={imageRef}
                    src={SITE_IMAGES.hero}
                    alt={SITE_IMAGES.heroAlt}
                    className="w-full object-cover opacity-0 transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator targetId="piliers" />
    </section>
  );
}
