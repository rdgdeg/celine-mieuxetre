import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { BlogPostMeta } from "@/data/blogPosts";

interface BlogCardProps {
  article: BlogPostMeta;
  headingLevel?: "h2" | "h3";
  reveal?: boolean;
}

export default function BlogCard({ article, headingLevel = "h3" }: BlogCardProps) {
  const [imgError, setImgError] = useState(false);
  const TitleTag = headingLevel;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-warm-border/70 bg-white shadow-blog transition duration-500 hover:-translate-y-2 hover:border-sky/50 hover:shadow-blog-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <Link
        to={`/blog/${article.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-br from-mist via-brand-light/20 to-brand/10"
      >
        {!imgError ? (
          <img
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={750}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand/15 to-mist p-6 text-center"
            role="img"
            aria-label={article.imageAlt}
          >
            <span className="font-display text-sm font-semibold text-brand-dark">
              {article.topics[0] ?? "Article"}
            </span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {article.readTime}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time
          className="mb-2 text-xs font-medium uppercase tracking-wider text-lavender"
          dateTime={article.dateIso}
        >
          {article.date}
        </time>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {article.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-brand/8 px-2.5 py-0.5 text-[11px] font-medium text-brand-dark"
            >
              {topic}
            </span>
          ))}
        </div>
        <TitleTag className="font-display text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
          <Link to={`/blog/${article.slug}`}>{article.title}</Link>
        </TitleTag>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-warm-text-secondary">
          {article.excerpt}
        </p>
        <Link
          to={`/blog/${article.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-light"
        >
          Lire l&apos;article
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
