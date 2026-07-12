import { PawPrint, User, Wifi } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";

const pillars = [
  {
    icon: User,
    title: "Humains",
    description:
      "Reiki, Lahochi, shiatsu, kinésiologie, Fleurs de Bach… En cabinet à Bernissart, Silly ou Mons.",
  },
  {
    icon: PawPrint,
    title: "Animaux",
    description:
      "Reiki, communication animale, Fleurs de Bach. Toutes espèces — chiens, chats, chevaux, NAC.",
  },
  {
    icon: Wifi,
    title: "À distance",
    description:
      "Pour les animaux surtout : ils restent chez eux, détendus. Efficace et pratique.",
  },
];

export default function PillarsSection() {
  return (
    <section id="piliers" className="py-24 bg-cream-alt">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal blur={false} scale={1}>
          <SectionHeader
            animated
            label="Mon approche"
            title="Humains, animaux & distance"
            subtitle="Trois piliers qui guident ma pratique au quotidien."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pillars.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={title} delay={i * 0.08}>
              <div className="rounded-2xl border border-warm-border/60 bg-white/80 p-8 shadow-card text-center h-full">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/15 to-lavender/15">
                  <Icon size={26} className="text-brand" />
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-3">{title}</h3>
                <p className="text-sm text-warm-text-secondary leading-relaxed">{description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
