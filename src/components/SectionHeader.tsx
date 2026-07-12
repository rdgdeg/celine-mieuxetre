import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "mb-10",
        className
      )}
    >
      <span
        className={cn(
          "mb-3 inline-block text-xs font-bold uppercase tracking-[0.14em]",
          light ? "text-peach-light" : "text-brand"
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "font-display text-3xl font-semibold leading-tight md:text-[2.5rem]",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-12 rounded-full",
          align === "center" ? "mx-auto" : "",
          light ? "bg-peach-light/50" : "bg-brand"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-[560px] text-base leading-relaxed",
            align === "center" ? "mx-auto" : "",
            light ? "text-white/75" : "text-warm-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
