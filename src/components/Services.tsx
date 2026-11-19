import { Monitor, Search, Target, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const services = [
  { key: "web", Icon: Monitor },
  { key: "seo", Icon: Search },
  { key: "automation", Icon: Workflow },
  { key: "strategy", Icon: Target },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-medium text-center mb-16">{t("services.title")}</h2>
        </ScrollAnimation>
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map(({ key, Icon }, index) => (
            <ScrollAnimation key={key} delay={index * 0.1}>
              <article className="card-glow bg-card border border-border rounded-xl p-8 h-full">
                <Icon className="card-glow-icon mb-5 text-[color:var(--icon-accent)]" aria-hidden="true" />
                <h3 className="text-2xl font-medium mb-3">{t(`services.${key}.title`)}</h3>
                <p className="text-muted-foreground card-description">{t(`services.${key}.desc`)}</p>
                {key === "automation" && (
                  <a href="#casos-automatizacion" className="mt-4 inline-block font-medium text-primary hover:underline">
                    {t("services.automation.examples")}
                  </a>
                )}
              </article>
            </ScrollAnimation>
          ))}
        </div>
        <div className="text-center mt-10">
          <a className="btn-primary inline-block" href="#contacto">{t("services.consult")}</a>
        </div>
      </div>
    </section>
  );
}
