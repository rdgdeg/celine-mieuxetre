import { Link } from "react-router";
import { LOCATIONS, SEO_AREAS, SITE, METHOD_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-warm-border bg-brand-dark text-white">
      <div className="harmony-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-semibold text-peach-light">
              Harmonie
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              et Mieux-Être
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {SITE.practitioner} — soins énergétiques pour humains et animaux,
              en Hainaut et à distance.
            </p>
            <p className="mt-4 text-xs text-white/40">
              Activité distincte de{" "}
              <a
                href={SITE.psyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach-light/90 underline-offset-2 hover:underline"
              >
                mon cabinet de psychologie
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-peach-light/80">
              Explorer
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/methodes" className="hover:text-white">Méthodes</Link></li>
              <li><Link to="/quand-consulter" className="hover:text-white">Quand consulter</Link></li>
              <li><Link to="/premiere-seance" className="hover:text-white">Première séance</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-peach-light/80">
              Méthodes
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              {METHOD_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/methodes" className="text-peach-light/90 hover:text-white">
                  Voir toutes →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-peach-light/80">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">{SITE.phone}</a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>{loc.city}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="organic-divider my-8 opacity-30" />

        <p className="mb-6 text-center text-xs text-white/35">
          {SEO_AREAS.join(" · ")}
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/45">
          <Link to="/mentions-legales" className="hover:text-white">Mentions légales</Link>
          <Link to="/politique-confidentialite" className="hover:text-white">Confidentialité</Link>
          <Link to="/plan-du-site" className="hover:text-white">Plan du site</Link>
          <Link to="/ethique" className="hover:text-white">Éthique</Link>
        </div>

        <p className="mt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} {SITE.name} — {SITE.practitioner}
        </p>
      </div>
    </footer>
  );
}
