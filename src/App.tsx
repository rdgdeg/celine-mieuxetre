import { Routes, Route } from "react-router";
import PageTransition from "@/components/PageTransition";
import CookieBanner from "@/components/CookieBanner";
import SeoManager from "@/components/SeoManager";
import Landing from "@/pages/Landing";
import ServicesIndex from "@/pages/ServicesIndex";
import MethodPage from "@/pages/MethodPage";
import QuandConsulter from "@/pages/QuandConsulter";
import PremiereSeance from "@/pages/PremiereSeance";
import Ethique from "@/pages/Ethique";
import APropos from "@/pages/APropos";
import FaqPage from "@/pages/FaqPage";
import ContactPage from "@/pages/ContactPage";
import BlogArticlePage from "@/pages/BlogArticlePage";
import BlogIndex from "@/pages/BlogIndex";
import MentionsLegales from "@/pages/MentionsLegales";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import PlanDuSite from "@/pages/PlanDuSite";

export default function App() {
  return (
    <PageTransition>
      <SeoManager />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/methodes" element={<ServicesIndex />} />
        <Route path="/methodes/:slug" element={<MethodPage />} />
        <Route path="/quand-consulter" element={<QuandConsulter />} />
        <Route path="/premiere-seance" element={<PremiereSeance />} />
        <Route path="/ethique" element={<Ethique />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogArticlePage />} />
        <Route path="/plan-du-site" element={<PlanDuSite />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>
      <CookieBanner />
    </PageTransition>
  );
}
