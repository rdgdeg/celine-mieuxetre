import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Mail } from "lucide-react";

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-warm-border bg-cream/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <Link
        to="/contact"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-semibold text-white shadow-cta"
      >
        <Mail className="h-4 w-4" aria-hidden />
        Me contacter
      </Link>
    </div>
  );
}
