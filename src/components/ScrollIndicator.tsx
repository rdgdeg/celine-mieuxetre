import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function ScrollIndicator({ targetId = "a-propos" }: { targetId?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tween = gsap.to(el, {
      y: 8,
      duration: 1.4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <a
      ref={ref}
      href={`#${targetId}`}
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-brand/70 transition-colors hover:text-brand motion-reduce:animate-none"
      aria-label="Défiler vers le contenu"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Découvrir</span>
      <ChevronDown className="h-5 w-5" strokeWidth={2} />
    </a>
  );
}
