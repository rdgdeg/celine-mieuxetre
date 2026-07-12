import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { METHOD_LINKS } from "@/data/site";

const navLinks = [
  { label: "Quand consulter", to: "/quand-consulter" },
  { label: "Blog", to: "/blog" },
  { label: "À propos", to: "/a-propos" },
  { label: "FAQ", to: "/faq" },
] as const;

const navLinkClass =
  "text-sm font-medium text-warm-text-secondary transition-colors hover:text-brand";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [methodsOpen, setMethodsOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    requestAnimationFrame(() => firstLinkRef.current?.focus());
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMethodsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-warm-border/70 bg-cream/95 shadow-nav backdrop-blur-md"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="harmony-container flex h-[68px] items-center justify-between">
        <Link to="/" onClick={closeMobile} className="group flex flex-col leading-none">
          <span className="font-display text-xl font-semibold text-brand-dark transition-colors group-hover:text-brand">
            Harmonie
          </span>
          <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-text-light">
            et Mieux-Être
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          <div className="relative group">
            <button
              type="button"
              className={`${navLinkClass} flex items-center gap-1`}
              aria-haspopup="true"
            >
              Méthodes
              <ChevronDown size={15} className="transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-52 rounded-xl border border-warm-border bg-white py-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:opacity-100">
              <Link
                to="/methodes"
                className="block border-b border-warm-border/50 px-4 py-2.5 text-sm font-semibold text-brand"
              >
                Toutes les méthodes
              </Link>
              {METHOD_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-warm-text-secondary hover:bg-cream-alt hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition hover:bg-brand-light"
          >
            Contact
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="rounded-lg p-2 text-warm-text lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          ref={mobilePanelRef}
          className="border-t border-warm-border/60 bg-cream px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link ref={firstLinkRef} to="/" className="text-base font-medium" onClick={closeMobile}>
              Accueil
            </Link>
            <button
              type="button"
              className="flex items-center justify-between text-base font-medium"
              onClick={() => setMethodsOpen((o) => !o)}
            >
              Méthodes
              <ChevronDown size={18} className={methodsOpen ? "rotate-180" : ""} />
            </button>
            {methodsOpen && (
              <div className="ml-3 flex flex-col gap-2 border-l-2 border-peach pl-4">
                <Link to="/methodes" className="text-sm font-semibold text-brand" onClick={closeMobile}>
                  Toutes les méthodes
                </Link>
                {METHOD_LINKS.map((link) => (
                  <Link key={link.href} to={link.href} className="text-sm text-warm-text-secondary" onClick={closeMobile}>
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-base font-medium" onClick={closeMobile}>
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-xl bg-brand py-3 text-center text-sm font-semibold text-white"
              onClick={closeMobile}
            >
              Me contacter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
