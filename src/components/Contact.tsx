import { MessageSquare, Linkedin, Instagram, Facebook, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT, whatsappLink } from "@/data/contact";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
  const { t } = useLanguage();

  const linkClass = "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm";
  const iconClass = "text-[color:var(--icon-accent)]";

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <div className="text-center text-muted-foreground font-sans copy-size max-w-2xl mx-auto mb-12 space-y-3">
            <p>{t("contact.intro")}</p>
            <p>{t("contact.invite")}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <a
              href={whatsappLink("Hola Mafe, me interesa saber más sobre tus servicios")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4"
            >
              <MessageSquare size={18} aria-hidden="true" /> {t("contact.whatsapp")}
            </a>

            <a
              href={CONTACT.phoneHref}
              className={`${linkClass} text-base`}
              aria-label={`${t("contact.call")}: ${CONTACT.phoneDisplay}`}
            >
              <Phone size={18} className={iconClass} aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 border-t border-border w-full">
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Linkedin size={16} className={iconClass} aria-hidden="true" />
                LinkedIn
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Instagram size={16} className={iconClass} aria-hidden="true" />
                Instagram
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <Facebook size={16} className={iconClass} aria-hidden="true" />
                Facebook
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;