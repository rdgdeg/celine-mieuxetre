import { Link } from "react-router";
import SiteLayout from "@/layouts/SiteLayout";
import SectionHeader from "@/components/SectionHeader";
import { sitemapSections } from "@/data/sitemap";
import { SITE, SEO_AREAS } from "@/data/site";

const sectionTitles = {
  principal: "Pages principales",
  methodes: "Méthodes",
  blog: "Blog",
  legal: "Informations légales",
} as const;

export default function PlanDuSite() {
  const sections = sitemapSections();

  return (
    <SiteLayout className="min-h-screen bg-cream pb-28 lg:pb-0">
      <div className="px-6 pt-24 md:pt-28 pb-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            label="Navigation"
            title="Plan du site"
            subtitle={`Toutes les pages de ${SITE.name}, praticienne en soins énergétiques.`}
            className="mb-12"
          />

          {(Object.keys(sections) as (keyof typeof sections)[]).map((key) => (
            <section key={key} className="mb-10">
              <h2 className="font-display text-xl font-semibold text-ink mb-4">
                {sectionTitles[key]}
              </h2>
              <ul className="space-y-2.5">
                {sections[key].map((entry) => (
                  <li key={entry.path}>
                    <Link
                      to={entry.path}
                      className="text-brand hover:text-brand-dark hover:underline text-[15px]"
                    >
                      {entry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="mt-12 text-sm text-warm-text-secondary leading-relaxed">
            <strong className="text-warm-text">Zones desservies :</strong>{" "}
            {SEO_AREAS.join(" · ")}. Soins énergétiques pour humains et animaux — en
            cabinet ou à distance.
          </p>
        </div>
      </div>
    </SiteLayout>
  );
}
