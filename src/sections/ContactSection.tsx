import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeader from "@/components/SectionHeader";
import { LOCATIONS, SEO_AREAS, SITE } from "@/data/site";

const subjectLabels: Record<string, string> = {
  rdv: "Demande de rendez-vous",
  animaux: "Question animaux / communication",
  humains: "Question soins humains",
  autre: "Autre demande",
};

interface ContactSectionProps {
  standalone?: boolean;
}

export default function ContactSection({ standalone = false }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subj =
      (formData.subject && subjectLabels[formData.subject]) ||
      "Message depuis Harmonie et Mieux-Être";
    const body = [
      `Nom : ${formData.name}`,
      `Email : ${formData.email}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className={`py-24 bg-cream-alt pb-28 lg:pb-24 ${standalone ? "pt-24 md:pt-28" : ""}`}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch">
          <div className="flex min-h-0 flex-col lg:h-full">
            <ScrollReveal>
              <SectionHeader
                animated
                label="Me contacter"
                title="Prenons contact"
                subtitle="Je vous réponds sous 48 h en général. Les tarifs sont sur chaque page méthode."
                align="left"
                className="mb-8 lg:mb-10"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="flex min-h-0 flex-1 flex-col">
              <form
                onSubmit={handleSubmit}
                className="flex min-h-0 flex-1 flex-col gap-5"
              >
                <div className="grid shrink-0 gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Nom *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-border bg-white text-warm-text placeholder:text-warm-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-border bg-white text-warm-text placeholder:text-warm-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>

                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full shrink-0 px-5 py-3.5 rounded-xl border border-warm-border bg-white text-warm-text focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Sujet de votre message</option>
                  <option value="rdv">Demande de rendez-vous</option>
                  <option value="animaux">Question animaux / communication</option>
                  <option value="humains">Question soins humains</option>
                  <option value="autre">Autre</option>
                </select>

                <textarea
                  placeholder="Votre message..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] w-full flex-1 resize-none rounded-xl border border-warm-border bg-white px-5 py-3.5 text-warm-text placeholder:text-warm-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all lg:min-h-[180px]"
                />

                <p className="text-xs text-warm-text-secondary">
                  L&apos;envoi ouvre votre messagerie avec un message prérempli. Aucune
                  donnée n&apos;est stockée sur ce site.
                </p>

                <button
                  type="submit"
                  className="mt-auto inline-flex shrink-0 items-center self-start px-8 py-3.5 bg-brand text-sm font-semibold text-white rounded-full hover:bg-brand-light hover:-translate-y-0.5 hover:shadow-cta active:bg-brand-dark active:translate-y-0 transition-all duration-300"
                >
                  {submitted ? "Messagerie ouverte — à vous d'envoyer" : "Ouvrir ma messagerie"}
                </button>
              </form>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2} className="flex min-h-0 lg:h-full">
            <div className="flex h-full min-h-[280px] w-full flex-col rounded-2xl border border-warm-border/60 bg-white p-8 shadow-card lg:min-h-0 lg:p-10">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand" />
                  </div>
                  <div>
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="font-semibold text-warm-text hover:text-brand transition-colors"
                    >
                      {SITE.phone}
                    </a>
                    <p className="text-sm text-warm-text-secondary">
                      Appels, SMS et WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-brand" />
                  </div>
                  <div>
                    <a
                      href={SITE.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-warm-text hover:text-brand transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-semibold text-warm-text hover:text-brand transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {LOCATIONS.map((loc) => (
                  <div key={loc.id} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand" />
                    </div>
                    <div>
                      <p className="font-semibold text-warm-text">
                        {loc.name} — {loc.city}
                      </p>
                      <p className="text-sm text-warm-text-secondary">
                        {loc.address}, {loc.postalCode} {loc.city}
                      </p>
                      {loc.schedule && (
                        <p className="text-xs text-brand mt-1">{loc.schedule}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <Facebook size={18} className="text-brand" />
                  </div>
                  <div>
                    <a
                      href={SITE.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-warm-text hover:text-brand transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <p className="text-xs text-warm-text-light pt-2 border-t border-warm-border/40">
                  Zones desservies : {SEO_AREAS.join(" · ")}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 bg-gradient-to-r from-brand-dark via-brand to-lavender rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-banner">
            <p className="font-display text-xl md:text-2xl text-white text-center md:text-left">
              Prêt(e) à retrouver l&apos;harmonie ?
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white text-sm font-semibold rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 whitespace-nowrap"
            >
              {SITE.pricingNote} — me contacter
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
