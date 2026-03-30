import { Search, FileText, Rocket, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const steps = [
  { icon: Search, num: "01", titleKey: "process.s1.title", descKey: "process.s1.desc" },
  { icon: FileText, num: "02", titleKey: "process.s2.title", descKey: "process.s2.desc" },
  { icon: Rocket, num: "03", titleKey: "process.s3.title", descKey: "process.s3.desc" },
  { icon: HeadphonesIcon, num: "04", titleKey: "process.s4.title", descKey: "process.s4.desc" },
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            {t("process.title")}
          </h2>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <ScrollAnimation key={step.num} delay={i * 0.12}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="text-primary" size={22} />
                </div>
                <span className="text-primary font-mono text-xs font-bold">{step.num}</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-2 font-sans">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground text-sm font-sans">{t(step.descKey)}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
