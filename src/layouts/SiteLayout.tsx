import { useLayoutEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";

interface SiteLayoutProps {
  children: React.ReactNode;
  scrollTop?: boolean;
  className?: string;
}

export default function SiteLayout({
  children,
  scrollTop = true,
  className = "min-h-screen bg-cream",
}: SiteLayoutProps) {
  useLayoutEffect(() => {
    if (scrollTop) window.scrollTo(0, 0);
  }, [scrollTop]);

  return (
    <div className={className}>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
}
