import { Linkedin, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const techStack = ["React", "Next.js", "TypeScript", "n8n", "Make", "Gemini AI", "Tailwind CSS"];

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollAnimation>
            <div>
              <p className="label-caps mb-4">{t("about.label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t("about.name")}</h2>
              <p className="text-primary font-sans font-medium mb-6">{t("about.role")}</p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">{t("about.p1")}</p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8">{t("about.p2")}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {techStack.map((tech) => (
                  <span key={tech} className="bg-card border border-border rounded-full px-3 py-1 text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Portfolio">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-card border border-border rounded-2xl aspect-[4/5] flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary font-serif">MF</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
