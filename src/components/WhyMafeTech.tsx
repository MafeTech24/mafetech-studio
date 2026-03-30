import { Shield, Server, BarChart3, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const bullets = [
  { icon: Shield, key: "why.b1" },
  { icon: Server, key: "why.b2" },
  { icon: BarChart3, key: "why.b3" },
  { icon: FileText, key: "why.b4" },
];

const WhyMafeTech = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollAnimation>
            <div>
              <p className="label-caps mb-4">{t("why.label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t("why.title")}</h2>
              <div className="space-y-5">
                {bullets.map((b) => (
                  <div key={b.key} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <b.icon className="text-primary" size={20} />
                    </div>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">{t(b.key)}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-card border border-border rounded-2xl aspect-square flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary font-serif">MF</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyMafeTech;
