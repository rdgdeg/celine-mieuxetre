import SiteLayout from "@/layouts/SiteLayout";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/data/blogPosts";

export default function BlogIndex() {
  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            label="Blog"
            title="Bien-être, énergie & compagnons"
            subtitle="Articles rédigés par Céline Belin : soins énergétiques, animaux, Fleurs de Bach et hygiène énergétique."
            className="mb-14"
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {getAllBlogPosts().map((article) => (
              <BlogCard key={article.slug} article={article} headingLevel="h2" />
            ))}
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
