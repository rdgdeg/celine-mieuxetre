import { useEffect, useState } from "react";
import { Link } from "react-router";

const CONSENT_KEY = "celine-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(CONSENT_KEY) !== "accepted");
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-warm-border/60 bg-cream/95 px-4 py-4 shadow-nav backdrop-blur-xl sm:px-6"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p id="cookie-banner-title" className="text-sm font-semibold text-ink">
            Ce site utilise des cookies
          </p>
          <p id="cookie-banner-desc" className="mt-1 text-sm leading-relaxed text-warm-text-secondary">
            Nous utilisons un cookie technique pour mémoriser votre choix concernant
            cette bannière. En continuant, vous acceptez notre{" "}
            <Link
              to="/politique-confidentialite"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-light active:bg-brand-dark"
        >
          J&apos;accepte
        </button>
      </div>
    </div>
  );
}
