import { Navigate, useParams } from "react-router";
import MethodPageLayout from "@/components/MethodPageLayout";
import { getMethod } from "@/data/methods";

function renderSectionContent(section: {
  paragraphs?: string[];
  list?: string[];
}) {
  return (
    <>
      {section.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {section.list && (
        <ul className="list-disc pl-6 space-y-2 marker:text-brand">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function MethodPage() {
  const { slug } = useParams();
  const method = getMethod(slug);

  if (!method) {
    return <Navigate to="/methodes" replace />;
  }

  return (
    <MethodPageLayout
      title={method.title}
      subtitle={method.subtitle}
      intro={
        <>
          {method.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
          {(method.forHumans || method.forAnimals) && (
            <p className="text-sm">
              {method.forHumans && method.forAnimals
                ? "Pour humains et animaux."
                : method.forAnimals
                  ? "Principalement pour les animaux."
                  : "Pour les humains."}
              {method.distancePreferred && " Séances à distance privilégiées."}
            </p>
          )}
        </>
      }
      sections={method.sections.map((s) => ({
        title: s.title,
        content: renderSectionContent(s),
      }))}
      image={method.image}
      imageAlt={method.imageAlt}
      pricing={method.pricing}
    />
  );
}
