import { MessageSquare, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-center text-muted-foreground font-sans text-sm mb-12">
            {t("contact.response")}
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
            <a
              href="https://wa.me/543512005107?text=Hola%20Mafe%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20tus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4"
            >
              <MessageSquare size={18} /> {t("contact.whatsapp")}
            </a>

            <div className="flex flex-col items-center gap-3 pt-4 border-t border-border w-full">
              <a
                href="mailto:mafe4024@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
              >
                <Mail size={16} className="text-primary" />
                mafe4024@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mafetechdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
              >
                <Linkedin size={16} className="text-primary" />
                LinkedIn
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
