import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative grid min-h-screen grid-rows-[minmax(0,1fr)_auto_minmax(5rem,1fr)] overflow-hidden grid-bg">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative row-start-2 container mx-auto px-4 md:px-8 text-center max-w-4xl pt-16 md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="label-caps mb-6 py-4 md:leading-loose"
        >
          {t("hero.label")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight leading-tight mb-6 text-foreground"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="copy-size text-muted-foreground max-w-2xl mx-auto mb-4 font-sans font-medium"
        >
          {t("hero.subtitle")}
        </motion.p>

        <p className="copy-size text-muted-foreground max-w-2xl mx-auto mb-10 font-sans font-medium">
          {t("hero.support")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={"#contacto"} className="btn-primary text-base">
            {t("hero.cta1")}
          </a>
          <a href={"#proyectos"} className="btn-outline text-base">
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href={"#valor"}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-scroll-indicator"
        aria-label={t("hero.scroll")}
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
