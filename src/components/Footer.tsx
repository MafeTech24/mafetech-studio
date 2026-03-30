import { Linkedin, Github, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

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
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                MF
              </span>
              <span className="text-foreground font-sans font-bold text-lg">
                Mafe<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed">{t("footer.desc")}</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-foreground font-sans font-semibold text-sm mb-4">{t("footer.nav")}</h4>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm font-sans"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-sans font-semibold text-sm mb-4">{t("footer.contact")}</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://wa.me/5493513456789" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageSquare size={18} />
              </a>
            </div>
            <p className="text-muted-foreground text-xs font-sans">mafetech@gmail.com</p>
          </div>
        </div>

        <div className="section-divider mb-8" />
        <div className="text-center">
          <p className="text-muted-foreground text-xs font-sans">
            © {new Date().getFullYear()} MafeTech. {t("footer.location")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
