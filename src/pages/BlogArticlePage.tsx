import { useMemo } from "react";
import { Navigate, useParams } from "react-router";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { getBlogPost } from "@/data/blogPosts";
import { articleBodies } from "@/content/blog/registry";
import { usePageSeo } from "@/hooks/usePageSeo";
import {
  absoluteUrl,
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/lib/seo";

export default function BlogArticlePage() {
  const { slug } = useParams();
  const meta = getBlogPost(slug);
  const Body = slug ? articleBodies[slug] : undefined;

  const seoConfig = useMemo(() => {
    if (!meta) return null;
    const path = `/blog/${meta.slug}`;
    const image = absoluteUrl(meta.image);
    const faq = meta.faq?.length
      ? buildFaqJsonLd(meta.faq)
      : null;

    return {
      title: `${meta.title} | ${meta.authorName}`,
      description: meta.metaDescription,
      path,
      image,
      type: "article" as const,
      publishedTime: meta.dateIso,
      modifiedTime: meta.dateIso,
      jsonLd: [
        buildArticleJsonLd({
          title: meta.title,
          description: meta.metaDescription,
          path,
          image,
          datePublished: meta.dateIso,
        }),
        buildBreadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: meta.title, path },
        ]),
        ...(faq ? [faq] : []),
      ],
    };
  }, [meta]);

  usePageSeo(seoConfig);

  if (!meta || !Body) {
    return <Navigate to="/" replace />;
  }

  return (
    <BlogArticleLayout meta={meta}>
      <Body />
    </BlogArticleLayout>
  );
}
