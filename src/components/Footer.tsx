import { Linkedin, MessageSquare } from "lucide-react";
import BrandMark from "./BrandMark";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <BrandMark />
            </div>
            <p className="text-muted-foreground text-sm font-sans">{t("footer.desc")}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-foreground font-sans font-semibold text-sm mb-4">{t("footer.nav")}</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-sans"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-sans font-semibold text-sm mb-4">{t("footer.contact")}</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.linkedin.com/in/mafetechdev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} className="text-[color:var(--icon-accent)]" aria-hidden="true" />
              </a>

              <a href="https://wa.me/5493518103272" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider mb-8" />
        <div className="text-center">
          <p className="text-muted-foreground text-xs font-sans">
            {t("footer.location")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
