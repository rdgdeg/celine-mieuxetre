import { Link } from "react-router";
import { LOCATIONS, SEO_AREAS, SITE, METHOD_LINKS } from "@/data/site";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Méthodes", to: "/methodes" },
  { label: "Quand consulter", to: "/quand-consulter" },
  { label: "Blog", to: "/blog" },
  { label: "À propos", to: "/a-propos" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-1">
              {SITE.name}
            </h3>
            <p className="text-sm text-warm-text-light mb-3">
              {SITE.practitioner} — Soins énergétiques
            </p>
            <p className="text-sm text-white/50 leading-relaxed">{SITE.tagline}</p>
            <p className="text-xs text-white/40 mt-3">
              <a
                href={SITE.psyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
              >
                Site psychologie →
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Méthodes
            </h4>
            <ul className="flex flex-col gap-2.5">
              {METHOD_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="text-sm text-white/60">
                  {loc.city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs text-white/30 text-center mb-6">
          Zones desservies : {SEO_AREAS.join(" · ")}
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[13px] text-white/50">
          <Link to="/mentions-legales" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
          <Link
            to="/politique-confidentialite"
            className="hover:text-white transition-colors"
          >
            Politique de confidentialité
          </Link>
          <Link to="/plan-du-site" className="hover:text-white transition-colors">
            Plan du site
          </Link>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6 text-center space-y-2">
          <p className="text-[13px] text-white/40">
            &copy; {new Date().getFullYear()} {SITE.name} — {SITE.practitioner}. Tous
            droits réservés.
          </p>
          <p className="text-[13px] text-white/35">
            Site réalisé par{" "}
            <a
              href="https://ldmedia.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              LD Media — Agence de communication à Ath
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
