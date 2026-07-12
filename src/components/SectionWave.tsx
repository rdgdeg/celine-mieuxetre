type SectionWaveProps = {
  /** Couleur de remplissage (classe Tailwind ou hex) */
  fill?: string;
  flip?: boolean;
  className?: string;
};

export default function SectionWave({
  fill = "fill-cream",
  flip = false,
  className = "",
}: SectionWaveProps) {
  return (
    <div
      className={`pointer-events-none relative -mt-px w-full overflow-hidden leading-[0] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={`block h-12 w-full md:h-16 ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          className={fill}
        />
      </svg>
    </div>
  );
}
