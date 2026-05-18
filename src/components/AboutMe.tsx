import { Linkedin, Shield, Server, BarChart3, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";


const bullets = [
  { icon: Shield, key: "why.b1" },
  { icon: Server, key: "why.b2" },
  { icon: BarChart3, key: "why.b3" },
  { icon: FileText, key: "why.b4" },
];

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          <ScrollAnimation>
            <div>
              <p className="label-caps mb-4">{t("about.label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t("about.name")}</h2>
              <p className="text-primary font-sans font-medium mb-6">{t("about.role")}</p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">{t("about.p1")}</p>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-8">{t("about.p2")}</p>

              <div className="space-y-4 mb-8">
                {bullets.map((b) => (
                  <div key={b.key} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <b.icon className="text-primary" size={18} />
                    </div>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">{t(b.key)}</p>
                  </div>
                ))}
              </div>



              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/mafetechdev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>

              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="sticky top-8 max-w-[85%] mx-auto md:max-w-none">
              <img 
                src="/mafe-moreno.png" 
                alt="María Fernanda Moreno — Automation Developer" 
                className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
