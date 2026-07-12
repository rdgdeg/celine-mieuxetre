import { Link } from "react-router";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPreviewSection() {
  const preview = BLOG_POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal blur={false} scale={1}>
          <SectionHeader
            label="Blog"
            title="À lire pour avancer"
            subtitle="Soins énergétiques, animaux, Fleurs de Bach et hygiène énergétique."
          />
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {preview.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.08}>
              <BlogCard article={article} headingLevel="h3" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15} blur={false} scale={1}>
          <p className="mt-10 text-center">
            <Link to="/blog" className="text-brand font-semibold hover:underline">
              Tous les articles →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
