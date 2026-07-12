import type { ReactNode } from "react";
import { Link } from "react-router";
import { BLOG_POSTS } from "@/data/blogPosts";

export const linkArticle =
  "font-medium text-brand underline-offset-2 hover:underline";

/** Lien vers un autre article du blog (maillage interne SEO). */
export function LinkBlog({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <Link to={`/blog/${slug}`} className={linkArticle}>
      {children}
    </Link>
  );
}

/** Lien interne : ancre sur l'accueil (`/#…`) ou route du site (ex. `/contact`). */
export function LinkPage({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={linkArticle}>
      {children}
    </Link>
  );
}

/** Bloc de liens vers les pages principales du site. */
export function MaillagePagesSite() {
  return (
    <nav
      className="my-10 rounded-2xl border border-warm-border/70 bg-white/90 p-6 md:p-8 shadow-xs"
      aria-labelledby="maillage-site-heading"
    >
      <h2
        id="maillage-site-heading"
        className="font-display text-lg font-semibold text-ink md:text-xl"
      >
        Sur mon site
      </h2>
      <p className="mt-3 text-[15px] leading-relaxed text-warm-text-secondary md:text-base">
        Vous y trouverez le détail de mes{" "}
        <LinkPage to="/methodes">méthodes</LinkPage> (Reiki, Lahochi, communication
        animale…), la page{" "}
        <LinkPage to="/quand-consulter">quand consulter</LinkPage>,{" "}
        <LinkPage to="/premiere-seance">première séance</LinkPage>, le{" "}
        <LinkPage to="/blog">blog</LinkPage>, la{" "}
        <LinkPage to="/faq">FAQ</LinkPage> et un{" "}
        <LinkPage to="/contact">formulaire pour me contacter</LinkPage>.
      </p>
    </nav>
  );
}

/** Autres billets du blog (sauf l'article courant). */
export function LireAussi({ excludeSlug }: { excludeSlug: string }) {
  const items = BLOG_POSTS.filter((p) => p.slug !== excludeSlug);

  return (
    <aside
      className="my-10 rounded-2xl border border-brand/20 bg-mist-soft/90 p-6 md:p-8"
      aria-labelledby="lire-aussi-heading"
    >
      <h2
        id="lire-aussi-heading"
        className="font-display text-lg font-semibold text-ink md:text-xl"
      >
        D&apos;autres billets que j&apos;ai rédigés
      </h2>
      <ul className="mt-4 list-none space-y-3 pl-0">
        {items.map(({ slug, title }) => (
          <li key={slug}>
            <Link
              to={`/blog/${slug}`}
              className="inline-flex text-brand transition hover:text-brand-dark hover:underline"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** Illustration cohérente dans le corps des articles. */
export function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-warm-border/60 bg-white shadow-card">
      <img
        src={src}
        alt={alt}
        className="aspect-[16/10] w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      {caption && (
        <figcaption className="border-t border-warm-border/50 bg-mist-soft/50 px-4 py-3 text-sm leading-relaxed text-warm-text-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  return (
    <div className="border-b border-warm-border/80 py-4 last:border-0">
      <h3 className="font-display text-base font-semibold text-ink md:text-lg">{question}</h3>
      <div className="mt-2 text-[15px] leading-relaxed text-warm-text-secondary md:text-base">
        {children}
      </div>
    </div>
  );
}
