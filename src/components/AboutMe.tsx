import { Linkedin, Instagram, Facebook, MessageSquare, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT, whatsappLink } from "@/data/contact";
import ScrollAnimation from "./ScrollAnimation";

const AboutMe = () => {
  const { t } = useLanguage();

  const iconLink = "text-muted-foreground hover:text-primary transition-colors";
  const iconClass = "text-[color:var(--icon-accent)]";

  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <ScrollAnimation>
            <div>
              <p className="label-caps mb-4">{t("about.label")}</p>
              <h2 className="mb-4 font-serif text-3xl font-normal tracking-tight text-foreground md:text-5xl">{t("about.name")}</h2>
              <p className="font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-4">{t("about.p1")}</p>
              <p className="font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-8">{t("about.p2")}</p>

              <p className="font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-4">{t("about.p3")}</p>
              <p className="font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-4">{t("about.p4")}</p>
              <p className="font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-8">{t("about.p5")}</p>

              <div className="flex items-center gap-5">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
                  <Linkedin size={20} className={iconClass} aria-hidden="true" />
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Instagram">
                  <Instagram size={20} className={iconClass} aria-hidden="true" />
                </a>
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="Facebook">
                  <Facebook size={20} className={iconClass} aria-hidden="true" />
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="WhatsApp">
                  <MessageSquare size={20} className={iconClass} aria-hidden="true" />
                </a>
                <a href={CONTACT.phoneHref} className={iconLink} aria-label={`${t("contact.call")}: ${CONTACT.phoneDisplay}`}>
                  <Phone size={20} className={iconClass} aria-hidden="true" />
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="sticky top-8 max-w-[85%] mx-auto md:max-w-none">
              <img
                src="/sobreMi3.jpg"
                alt="María Fernanda Moreno"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;