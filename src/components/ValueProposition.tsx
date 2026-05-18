import { Zap, Bot, Monitor } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const cards = [
  { icon: Zap, titleKey: "value.card1.title", descKey: "value.card1.desc" },
  { icon: Bot, titleKey: "value.card2.title", descKey: "value.card2.desc" },
  { icon: Monitor, titleKey: "value.card3.title", descKey: "value.card3.desc" },
];

const ValueProposition = () => {
  const { t } = useLanguage();

  return (
    <section id="valor" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            {t("value.title")}
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <ScrollAnimation key={card.titleKey} delay={i * 0.15}>
              <div className="card-glow bg-card border border-border rounded-xl p-8 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <card.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-sans">{t(card.titleKey)}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{t(card.descKey)}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
