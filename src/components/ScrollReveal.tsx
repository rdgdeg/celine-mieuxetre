import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  blur?: boolean;
  scale?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 36,
  duration = 0.75,
  blur = true,
  scale = 0.97,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" });
      return;
    }

    const x =
      direction === "left" ? -distance : direction === "right" ? distance : 0;
    const y =
      direction === "up" ? distance : direction === "down" ? -distance : 0;

    gsap.set(el, {
      opacity: 0,
      x,
      y,
      scale,
      filter: blur ? "blur(6px)" : "blur(0px)",
    });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
        });
      },
      once: true,
    });

    return () => trigger.kill();
  }, [delay, direction, distance, duration, blur, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
