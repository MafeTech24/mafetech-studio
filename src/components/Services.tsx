import { Check, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const Services = () => {
  const { t } = useLanguage();

  const packages = [
    { nameKey: "services.p1.name", priceKey: "services.p1.price", itemsKey: "services.p1.items", featured: false },
    { nameKey: "services.p2.name", priceKey: "services.p2.price", itemsKey: "services.p2.items", featured: true },
    { nameKey: "services.p3.name", priceKey: "services.p3.price", itemsKey: "services.p3.items", featured: false },
  ];

  const whatsappUrl = "https://wa.me/543512005107?text=Hola%20Mafe,%20me%20interesa%20un%20servicio";

  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            {t("services.title")}
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {packages.map((pkg, i) => (
            <ScrollAnimation key={pkg.nameKey} delay={i * 0.15}>
              <div
                className={`relative card-glow rounded-xl p-8 h-full flex flex-col ${
                  pkg.featured
                    ? "bg-card border-2 border-primary shadow-[0_0_40px_hsl(165_100%_42%/0.1)]"
                    : "bg-card border border-border"
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold font-sans px-4 py-1 rounded-full">
                      <Star size={12} /> {t("services.popular")}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{t(pkg.nameKey)}</h3>
                <ul className="flex-1 space-y-3 mb-8">
                  {t(pkg.itemsKey)
                    .split("|")
                    .map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center ${pkg.featured ? "btn-primary" : "btn-outline"}`}
                >
                  {t("services.consult")}
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
