import { useLayoutEffect } from "react";
import { Link } from "react-router";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-cream pb-28 lg:pb-0">
      <Navigation />
      <main className="flex-1 px-6 pt-24 md:pt-28">
        <div className="mx-auto max-w-2xl">
          <Link
            to="/"
            className="mb-8 inline-block text-sm font-medium text-brand transition hover:text-brand-dark"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="mb-8 font-display text-3xl font-semibold text-ink md:text-4xl">
            {title}
          </h1>
          <div className="space-y-4 text-base leading-relaxed text-warm-text-secondary">
            {children}
          </div>
        </div>
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
