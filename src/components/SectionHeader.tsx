import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
  animated?: boolean;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
  className,
  animated = false,
}: SectionHeaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const labelEl = root.querySelector("[data-anim-label]");
    const titleEl = root.querySelector("[data-anim-title]");
    const lineEl = root.querySelector("[data-anim-line]");
    const subtitleEl = root.querySelector("[data-anim-subtitle]");

    gsap.set([labelEl, titleEl, subtitleEl].filter(Boolean), { opacity: 0, y: 22 });
    if (lineEl) {
      gsap.set(lineEl, {
        scaleX: 0,
        transformOrigin: align === "center" ? "center center" : "left center",
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: { trigger: root, start: "top 88%", once: true },
      defaults: { ease: "power3.out" },
    });

    if (labelEl) tl.to(labelEl, { opacity: 1, y: 0, duration: 0.5 });
    if (titleEl) tl.to(titleEl, { opacity: 1, y: 0, duration: 0.55 }, "-=0.35");
    if (lineEl) tl.to(lineEl, { scaleX: 1, duration: 0.65, ease: "power2.inOut" }, "-=0.28");
    if (subtitleEl) tl.to(subtitleEl, { opacity: 1, y: 0, duration: 0.5 }, "-=0.22");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [animated, align, label, title, subtitle]);

  return (
    <div
      ref={rootRef}
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "mb-12",
        className
      )}
    >
      <span
        data-anim-label={animated ? "" : undefined}
        className={cn(
          "inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.1em] mb-4",
          animated && "opacity-0",
          light ? "bg-white/15 text-white/80" : "bg-brand/10 text-brand-dark"
        )}
      >
        {label}
      </span>
      <h2
        data-anim-title={animated ? "" : undefined}
        className={cn(
          "font-display text-3xl md:text-[42px] font-semibold leading-tight mb-4",
          animated && "opacity-0",
          light ? "text-white" : "text-warm-text"
        )}
      >
        {title}
      </h2>
      <div
        data-anim-line={animated ? "" : undefined}
        className={cn(
          "w-[60px] h-[3px] rounded-full mb-4",
          align === "center" ? "mx-auto" : "",
          light ? "bg-white/30" : "bg-gradient-to-r from-brand via-brand-light to-sky",
          animated && "origin-left"
        )}
      />
      {subtitle && (
        <p
          data-anim-subtitle={animated ? "" : undefined}
          className={cn(
            "text-base max-w-[600px]",
            align === "center" ? "mx-auto" : "",
            animated && "opacity-0",
            light ? "text-white/70" : "text-warm-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
