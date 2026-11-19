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
          <h2 className="text-3xl md:text-5xl font-medium text-center text-foreground text-balance mb-12">
            {t("process.title")}
          </h2>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, i) => (
            <ScrollAnimation key={step.num} delay={i * 0.12}>
              <div className="text-center p-6">
                <div className="size-[3.75rem] md:size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="size-6 md:size-7 text-[color:var(--icon-accent)]" aria-hidden="true" />
                </div>
                <span className="text-primary font-mono text-sm md:text-base font-semibold">{step.num}</span>
                <h3 className="font-serif text-xl md:text-[1.375rem] font-medium leading-snug text-balance text-foreground my-2">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground card-description font-sans">{t(step.descKey)}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
        <div className="text-center mt-10">
          <a className="btn-outline inline-block px-9 py-3.5 text-[1.0625rem]" href="#contacto">{t("process.cta")}</a>
        </div>
      </div>
    </section>
  );
};

export default Process;
