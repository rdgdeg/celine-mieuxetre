import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteLayout from "@/layouts/SiteLayout";
import SectionWave from "@/components/SectionWave";
import HeroSection from "@/sections/HeroSection";
import PillarsSection from "@/sections/PillarsSection";
import MethodsPreviewSection from "@/sections/MethodsPreviewSection";
import ApproachSection from "@/sections/ApproachSection";
import AboutPreviewSection from "@/sections/AboutPreviewSection";
import BlogPreviewSection from "@/sections/BlogPreviewSection";
import FaqPreviewSection from "@/sections/FaqPreviewSection";
import ContactSection from "@/sections/ContactSection";

export default function Landing() {
  const location = useLocation();

  useLayoutEffect(() => {
    const raw = location.hash.replace(/^#/, "");
    const refresh = () => ScrollTrigger.refresh();
    if (!raw) {
      refresh();
      return;
    }
    const el = document.getElementById(raw);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        requestAnimationFrame(refresh);
      });
    } else refresh();
  }, [location.hash, location.pathname]);

  return (
    <SiteLayout scrollTop={false}>
      <HeroSection />
      <SectionWave fill="fill-cream-alt" />
      <PillarsSection />
      <SectionWave fill="fill-cream" flip />
      <MethodsPreviewSection />
      <ApproachSection />
      <SectionWave fill="fill-cream-alt" flip />
      <AboutPreviewSection />
      <BlogPreviewSection />
      <SectionWave fill="fill-cream" />
      <FaqPreviewSection />
      <ContactSection />
    </SiteLayout>
  );
}
