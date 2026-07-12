import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { gsap } from "@/lib/gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [location.pathname]);

  return <div ref={ref}>{children}</div>;
}
