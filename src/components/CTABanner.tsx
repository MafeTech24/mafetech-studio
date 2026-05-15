import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const CTABanner = () => {
  const { t } = useLanguage();
  const whatsappUrl = "https://wa.me/543512005107?text=Hola%20Mafe,%20quiero%20agendar%20una%20auditoría";

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="relative container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-muted-foreground font-sans text-lg mb-10">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              {t("cta.btn1")}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
              {t("cta.btn2")}
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTABanner;
