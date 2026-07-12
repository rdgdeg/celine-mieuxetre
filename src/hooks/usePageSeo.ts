import { useEffect } from "react";
import { applyPageSeo, type PageSeoConfig } from "@/lib/seo";

export function usePageSeo(config: PageSeoConfig | null | undefined) {
  useEffect(() => {
    if (!config) return;
    applyPageSeo(config);
  }, [config]);
}
