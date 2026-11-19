import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { lang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <BrandMark />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href} onClick={() => setMobileOpen(false)}
              className="text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3] transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Lang toggle + mobile menu */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-border rounded-full overflow-hidden text-xs font-mono">
            <a
              href="/" lang="es" hrefLang="es" aria-label="Español" aria-current={lang === "es" ? "page" : undefined}
              className={`px-3 py-1.5 transition-colors ${lang === "es" ? "bg-[color:var(--control-accent)] text-white" : "text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3]"}`}
            >
              ES
            </a>
            <a
              href="/en/" lang="en" hrefLang="en" aria-label="English" aria-current={lang === "en" ? "page" : undefined}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-[color:var(--control-accent)] text-white" : "text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3]"}`}
            >
              EN
            </a>
          </div>

          <button type="button"
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href} onClick={() => setMobileOpen(false)}
                className="text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3] transition-colors text-base font-medium text-left py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
