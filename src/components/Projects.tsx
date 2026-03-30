import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const projectData = [
  { nameKey: "projects.p1.name", catKey: "projects.p1.category", resultKey: "projects.p1.result", color: "from-primary/20 to-emerald-500/10" },
  { nameKey: "projects.p2.name", catKey: "projects.p2.category", resultKey: "projects.p2.result", color: "from-cyan-500/20 to-primary/10" },
  { nameKey: "projects.p3.name", catKey: "projects.p3.category", resultKey: "projects.p3.result", color: "from-teal-500/20 to-primary/10" },
  { nameKey: "projects.p4.name", catKey: "projects.p4.category", resultKey: "projects.p4.result", color: "from-emerald-500/20 to-cyan-500/10" },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            {t("projects.title")}
          </h2>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projectData.map((project, i) => (
            <ScrollAnimation key={project.nameKey} delay={i * 0.1}>
              <div className="group card-glow bg-card border border-border rounded-xl overflow-hidden h-full">
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                  <span className="text-3xl font-bold text-foreground/80 font-serif">{t(project.nameKey)}</span>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <span className="label-caps text-[10px]">{t(project.catKey)}</span>
                  <p className="text-muted-foreground text-sm mt-2 font-sans">{t(project.resultKey)}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-sans font-medium text-sm hover:gap-3 transition-all"
            >
              {t("projects.all")} <ArrowRight size={16} />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
