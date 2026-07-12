import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { METHOD_LINKS } from "@/data/site";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Quand consulter", to: "/quand-consulter" },
  { label: "Blog", to: "/blog" },
  { label: "À propos", to: "/a-propos" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

const navLinkClass =
  "relative text-sm font-medium text-warm-text-secondary transition-colors duration-200 hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-300 hover:after:w-full";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const panel = mobilePanelRef.current;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel) return;

      const focusable = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => firstLinkRef.current?.focus());

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMethodsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl shadow-nav border-b border-brand/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-6 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-lg font-semibold text-warm-text sm:text-xl"
          onClick={closeMobile}
        >
          Harmonie et Mieux-Être
        </Link>

        <div className="hidden lg:flex items-center gap-5">
          <Link to="/" className={navLinkClass}>
            Accueil
          </Link>

          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-warm-text-secondary hover:text-brand transition-colors duration-200"
              aria-haspopup="true"
            >
              Méthodes
              <ChevronDown size={16} className="transition group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-0 mt-2 w-56 rounded-xl border border-warm-border/60 bg-white py-2 shadow-card transition-all duration-200">
              <Link
                to="/methodes"
                className="block px-4 py-2.5 text-sm font-medium text-brand border-b border-warm-border/40"
              >
                Toutes les méthodes
              </Link>
              {METHOD_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2.5 text-sm text-warm-text-secondary hover:bg-mist-soft hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-6 py-2.5 bg-brand text-white text-sm font-semibold rounded-full btn-shine hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-cta transition-all duration-300"
        >
          Me contacter
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden p-2 text-warm-text"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>

      {mobileOpen && (
        <div
          ref={mobilePanelRef}
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="lg:hidden fixed inset-0 top-[72px] bg-cream/98 backdrop-blur-xl z-40 overflow-y-auto"
        >
          <div className="flex flex-col items-center gap-4 pt-8 pb-12">
            <Link
              ref={firstLinkRef}
              to="/"
              className="text-lg font-medium text-warm-text hover:text-brand transition-colors"
              onClick={closeMobile}
            >
              Accueil
            </Link>

            <button
              type="button"
              className="flex items-center gap-2 text-lg font-medium text-warm-text"
              onClick={() => setMethodsOpen((o) => !o)}
              aria-expanded={methodsOpen}
            >
              Méthodes
              <ChevronDown
                size={20}
                className={`transition ${methodsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {methodsOpen && (
              <div className="flex flex-col items-center gap-3">
                <Link
                  to="/methodes"
                  className="text-base font-medium text-brand"
                  onClick={closeMobile}
                >
                  Toutes les méthodes
                </Link>
                {METHOD_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-base text-warm-text-secondary hover:text-brand"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-lg font-medium text-warm-text hover:text-brand transition-colors"
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="mt-4 inline-flex items-center px-8 py-3 bg-brand text-white font-semibold rounded-full"
              onClick={closeMobile}
            >
              Me contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
