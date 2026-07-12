import { useMemo } from "react";
import { useLocation } from "react-router";
import { usePageSeo } from "@/hooks/usePageSeo";
import { getStaticPageSeo, HOME_SEO } from "@/data/pageSeo";

/** Applique le SEO des pages statiques (hors articles blog). */
export default function SeoManager() {
  const { pathname } = useLocation();

  const config = useMemo(() => {
    if (pathname.startsWith("/blog/")) return null;
    return pathname === "/" ? HOME_SEO : getStaticPageSeo(pathname) ?? null;
  }, [pathname]);

  usePageSeo(config);

  return null;
}
