import { Linkedin, Instagram, Facebook, MessageSquare, Phone } from "lucide-react";
import BrandMark from "./BrandMark";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT, whatsappLink } from "@/data/contact";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#contacto", label: t("nav.contact") },
  ];

  const iconLink = "text-muted-foreground hover:text-primary transition-colors";
  const iconClass = "text-[color:var(--icon-accent)]";

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
            <div className="flex items-center gap-4">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
                <Linkedin size={18} className={iconClass} aria-hidden="true" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Instagram">
                <Instagram size={18} className={iconClass} aria-hidden="true" />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Facebook">
                <Facebook size={18} className={iconClass} aria-hidden="true" />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="WhatsApp">
                <MessageSquare size={18} className={iconClass} aria-hidden="true" />
              </a>
              <a href={CONTACT.phoneHref} className={iconLink} aria-label={`${t("contact.call")}: ${CONTACT.phoneDisplay}`}>
                <Phone size={18} className={iconClass} aria-hidden="true" />
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