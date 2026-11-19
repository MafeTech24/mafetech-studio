import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, X, Star, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";
import AutomationCases from "./AutomationCases";
import { projects, type ProjectCategory } from "@/data/projects";
import tonio from "@/assets/tonioMiniMarket.jpg";
import furniture from "@/assets/amoblamientosElReyNorte.jpg";
import lawOffice from "@/assets/cristianMartinez.png";
import abyco from "@/assets/abyco.jpg";
import silviaYJose from "@/assets/silviayJose.jpg";

import fundacion from "@/assets/fundacion-por-un-mundo-mejor.jpg";
import anaParis from "@/assets/ana-paris-social.png";
import anabellaBrasca from "@/assets/anabella-brasca.jpg";

const clients = [
  { title: "Fundación Por Un Mundo Mejor", url: "https://maqueta-fundacion-completo.vercel.app/", image: fundacion, showFullImage: true },
  { title: "Tonio MiniMarket", url: "https://www.toniominimarket.com.ar/", image: tonio, showFullImage: true },
  { title: "Lic. Ana Paris", url: "https://www.licenciadaanaparis.com/", image: anaParis, showFullImage: true },
  { title: "Dra. Anabella Brasca", url: "https://anibrasca4.vercel.app/", image: anabellaBrasca, showFullImage: true },
  { title: "Amoblamientos El Rey del Norte", url: "https://amoblamientoselreydelnorte.vercel.app/", image: furniture },
  { title: "Estudio Jurídico Dr. Cristian Martínez", url: "https://cristianmartinez-abogado.vercel.app/", image: lawOffice },
  { title: "AB&CO · Abogados y Contadores", url: "https://abogadosycontadores-asesoriaintegra.vercel.app/", image: abyco },
  { title: "Silvia Mariella y José Tomás", url: "https://silviamariella-josetomas.vercel.app/", image: silviaYJose },
];

const demoProjects = [
  "emily-hair-studio-web-app",
  "patitas-felices-grooming-web-app",
  "artesaniaVeta",
  "furnariusEventos",
  "arquetipo-ia",
  "pretty-lady-boutique",
].flatMap((id) => projects.filter((project) => project.id === id));

type ProjectFilter = ProjectCategory | "Todos" | "Automatizaciones";
const automationHash = "#casos-automatizacion";

const CATEGORIES: { key: string; value: ProjectFilter }[] = [
  { key: "projects.categories.all", value: "Todos" },
  { key: "projects.categories.webApp", value: "Aplicación Web" },
  { key: "projects.categories.webDev", value: "Desarrollo Web" },
  { key: "projects.categories.ecommerce", value: "E-commerce" },
  { key: "projects.categories.automation", value: "Automatizaciones" },
];

const categoryColor: Record<ProjectCategory, string> = {
  "Aplicación Web": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Desarrollo Web": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "E-commerce": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

const Projects = () => {
  const { t } = useLanguage();
  const [view, setView] = useState<"clients" | "demos">("clients");
  const [active, setActive] = useState<ProjectFilter>("Todos");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  useEffect(() => {
    const syncAutomationLink = () => {
      if (window.location.hash === automationHash) {
        setView("demos");
        setActive("Automatizaciones");
      }
    };

    syncAutomationLink();
    window.addEventListener("hashchange", syncAutomationLink);
    return () => window.removeEventListener("hashchange", syncAutomationLink);
  }, []);

  useEffect(() => {
    if (view === "demos" && active === "Automatizaciones" && window.location.hash === automationHash) {
      document.getElementById("casos-automatizacion")?.scrollIntoView();
    }
  }, [view, active]);

  const clearAutomationLink = () => {
    if (window.location.hash === automationHash) {
      window.history.replaceState(window.history.state, "", "#proyectos");
    }
  };

  const filtered = demoProjects.filter((project) => active === "Todos" || project.category === active);

  return (
    <section id="proyectos" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        {/* Title */}
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-center text-muted-foreground font-sans mb-12 max-w-2xl mx-auto copy-size">
            {t("projects.intro")}
          </p>
        </ScrollAnimation>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(["clients", "demos"] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={view === option}
              onClick={() => {
                if (option === "clients") {
                  clearAutomationLink();
                  setActive("Todos");
                }
                setView(option);
              }}
              className={view === option ? "btn-primary" : "btn-outline"}
            >
              {t(`projects.${option}`)}
            </button>
          ))}
        </div>

        {view === "clients" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {clients.map((client) => (
              <article key={client.title} className="card-glow bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                {client.image && (
                  <img
                    src={client.image}
                    alt={client.title}
                    loading="lazy"
                    className={`w-full h-44 ${client.showFullImage ? "bg-background object-contain" : "object-cover object-top"}`}
                  />
                )}
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <h3 className="text-xl font-medium">{client.title}</h3>
                  {client.url && (
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="text-primary text-sm mt-auto hover:underline">
                      {t("projects.visit")} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <>
        {/* Filter tabs */}
        <ScrollAnimation delay={0.1}>
          <div id="casos-automatizacion" className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                type="button"
                aria-pressed={active === cat.value}
                onClick={() => {
                  if (cat.value !== "Automatizaciones") clearAutomationLink();
                  setActive(cat.value);
                }}
                className={`px-5 py-2 rounded-full text-sm font-sans font-medium border transition-all duration-200 ${
                  active === cat.value
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_16px_hsl(265_100%_76%/0.35)]"
                    : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {t(cat.key)}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {active !== "Automatizaciones" && (
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                onClick={() => setSelected(project)}
                className="group card-glow relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Featured badge */}
                {project.isFeatured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-bold font-sans px-3 py-1 rounded-full">
                      <Star size={10} /> Destacado
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-sans font-medium">
                      {t("projects.details")} <ChevronRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className={`inline-block text-[10px] font-bold font-sans uppercase tracking-wider px-2 py-0.5 rounded-full border mb-3 ${categoryColor[project.category]}`}>
                    {t(CATEGORIES.find(c => c.value === project.category)?.key || "")}
                  </span>
                  <h3 className="text-sm font-bold text-foreground font-sans line-clamp-2 mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Stack chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-sans bg-muted text-muted-foreground px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] font-sans text-muted-foreground px-1 py-0.5">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-1 border-t border-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-sans transition-colors"
                      >
                        <ExternalLink size={12} /> {t("projects.livedemo")}
                      </a>
                    )}

                    {project.documentUrl && (
                      <a
                        href={project.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-sans transition-colors"
                      >
                        <FileText size={12} /> Docs
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        )}
        {(active === "Todos" || active === "Automatizaciones") && (
          <AutomationCases separated={active === "Todos"} />
        )}
          </>
        )}
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="pointer-events-auto bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header image */}
                <div className="relative h-52 overflow-hidden rounded-t-2xl bg-muted flex-shrink-0">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {selected.isFeatured && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold font-sans px-3 py-1 rounded-full">
                        <Star size={11} /> {t("projects.featured")}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-5">
                  <div>
                    <span className={`inline-block text-[10px] font-bold font-sans uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${categoryColor[selected.category]}`}>
                      {t(CATEGORIES.find(c => c.value === selected.category)?.key || "")}
                    </span>
                    <h3 className="text-lg font-bold text-foreground font-sans leading-snug">
                      {selected.title}
                    </h3>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider font-sans mb-1">{t("projects.problem")}</p>
                    <p className="card-description text-muted-foreground font-sans">{selected.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider font-sans mb-1">{t("projects.solution")}</p>
                    <p className="card-description text-muted-foreground font-sans">{selected.solution}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider font-sans mb-2">{t("projects.stack")}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-sans bg-muted text-muted-foreground px-2.5 py-1 rounded-md border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider font-sans mb-2">{t("projects.contribution")}</p>
                    <div className="space-y-1">
                      {selected.contribution.split("\n").map((line, i) => (
                        <p key={i} className="card-description text-muted-foreground font-sans">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Action links */}
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                    {selected.liveUrl && (
                      <a
                        href={selected.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 text-sm"
                      >
                        <ExternalLink size={14} /> {t("projects.livedemo")}
                      </a>
                    )}

                    {selected.documentUrl && (
                      <a
                        href={selected.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2 text-sm"
                      >
                        <FileText size={14} /> {t("projects.docs")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
