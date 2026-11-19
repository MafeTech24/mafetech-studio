import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "next-themes";
import { Toaster as Toaster$1 } from "sonner";
import * as React from "react";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { X, Menu, ChevronDown, Monitor, Search, Target, Workflow, Star, ChevronRight, ExternalLink, FileText, Rocket, HeadphonesIcon, Linkedin, MessageSquare } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const translations = {
  // Navbar
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.process": { es: "Proceso", en: "Process" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  // Hero
  "hero.label": { es: "Diseño web · Visibilidad digital · Estrategia", en: "Web design · Online visibility · Strategy" },
  "hero.title": { es: "Tu proyecto merece una web que trabaje para vos", en: "Your project deserves a website that works for you" },
  "hero.subtitle": { es: "Diseño y desarrollo sitios web pensados para atraer a quienes te están buscando, mostrar lo mejor de lo que hacés y ayudarte a crecer.", en: "I design and build websites that help the people looking for you discover your work and help you grow." },
  "hero.cta1": { es: "Contame tu proyecto", en: "Tell me about your project" },
  "hero.cta2": { es: "Ver mis trabajos", en: "See my work" },
  // Value Prop
  "value.title": { es: "Tu presencia digital, con un propósito", en: "Give your digital presence a purpose" },
  "value.card1.title": { es: "Una web que hable de vos", en: "A website that feels like you" },
  "value.card1.desc": { es: "Un sitio profesional, claro y diseñado a medida para mostrar lo que hacés y facilitar que las personas te contacten.", en: "A clear, professional website built around your work and designed to make it easy to get in touch." },
  "value.card2.title": { es: "Más oportunidades de que te encuentren", en: "More ways for people to find you" },
  "value.card2.desc": { es: "Trabajo el contenido y la estructura de tu web para mejorar su visibilidad en buscadores y herramientas de inteligencia artificial.", en: "I work on your site's content and structure to improve visibility in search engines and AI tools." },
  "value.card3.title": { es: "Una estrategia para crecer", en: "A strategy for growth" },
  "value.card3.desc": { es: "Te ayudo a ordenar tus ideas y definir acciones digitales que tengan sentido para tu proyecto.", en: "I help you organize your ideas and choose digital actions that fit your project." },
  // Services
  "services.title": { es: "¿Cómo puedo ayudarte?", en: "How can I help?" },
  "services.consult": { es: "Hablemos de lo que necesitás", en: "Let's talk about what you need" },
  // Projects
  "projects.title": { es: "Ideas que se convirtieron en sitios reales", en: "Ideas that became real websites" },
  "projects.view": { es: "Ver proyecto", en: "View project" },
  "projects.all": { es: "Ver todos los proyectos", en: "View all projects" },
  "projects.p1.name": { es: "LeadFlow AI", en: "LeadFlow AI" },
  "projects.p1.category": { es: "Automatización", en: "Automation" },
  "projects.p1.result": { es: "Pipeline de clasificación de leads con n8n + Gemini", en: "Lead classification pipeline with n8n + Gemini" },
  "projects.p2.name": { es: "ArquetipoIA", en: "ArquetipoIA" },
  "projects.p2.category": { es: "IA + React", en: "AI + React" },
  "projects.p2.result": { es: "Generador de buyer persona con React + Gemini", en: "Buyer persona generator with React + Gemini" },
  "projects.p3.name": { es: "El Rey del Norte", en: "El Rey del Norte" },
  "projects.p3.category": { es: "E-commerce", en: "E-commerce" },
  "projects.p3.result": { es: "Catálogo digital estratégico con Next.js", en: "Strategic digital catalog with Next.js" },
  "projects.p4.name": { es: "Furnarius Eventos", en: "Furnarius Eventos" },
  "projects.p4.category": { es: "Sitio web", en: "Website" },
  "projects.p4.result": { es: "Sitio web institucional con Lovable", en: "Institutional website with Lovable" },
  "projects.categories.all": { es: "Todos", en: "All" },
  "projects.categories.webApp": { es: "Aplicación Web", en: "Web App" },
  "projects.categories.webDev": { es: "Desarrollo Web", en: "Web Development" },
  "projects.categories.automation": { es: "Automatizaciones", en: "Automations" },
  "projects.categories.ecommerce": { es: "E-commerce", en: "E-commerce" },
  "projects.details": { es: "Ver detalles", en: "View details" },
  "projects.problem": { es: "Problema", en: "Problem" },
  "projects.solution": { es: "Solución", en: "Solution" },
  "projects.stack": { es: "Stack", en: "Stack" },
  "projects.contribution": { es: "Mi contribución", en: "My contribution" },
  "projects.livedemo": { es: "Ver demo en vivo", en: "View live demo" },
  "projects.repo": { es: "Ver repositorio", en: "View repository" },
  "projects.docs": { es: "Documentación", en: "Documentation" },
  "projects.featured": { es: "Destacado", en: "Featured" },
  // Why
  "why.label": { es: "¿POR QUÉ MAFETECH?", en: "WHY MAFETECH?" },
  "why.title": { es: "Automation Developer con visión de negocio", en: "Automation Developer with business vision" },
  // Process
  "process.title": { es: "Así hacemos realidad tu proyecto", en: "How we bring your project to life" },
  "process.s1.title": { es: "Nos conocemos", en: "We get to know each other" },
  "process.s1.desc": { es: "Conversamos sobre tu negocio, tus ideas y lo que te gustaría lograr.", en: "We talk about your business, your ideas, and what you want to achieve." },
  "process.s2.title": { es: "Definimos una propuesta", en: "We define a proposal" },
  "process.s2.desc": { es: "Te presento una propuesta personalizada con el alcance del trabajo y los próximos pasos.", en: "I put together a tailored proposal with the scope and next steps." },
  "process.s3.title": { es: "Creamos tu solución", en: "We build your solution" },
  "process.s3.desc": { es: "Desarrollo el proyecto y comparto avances para que puedas seguir el proceso.", en: "I build the project and share updates along the way." },
  "process.s4.title": { es: "Lanzamos y seguimos", en: "We launch and follow up" },
  "process.s4.desc": { es: "Una vez listo, ponemos el proyecto en marcha y te explico cómo usarlo. También podemos acordar el acompañamiento posterior que necesites.", en: "Once it's ready, we launch it and I show you how to use it. We can also agree on any ongoing support you need." },
  // About
  "about.label": { es: "SOBRE MÍ", en: "ABOUT ME" },
  "about.name": { es: "Hola, soy Mafe", en: "Hi, I'm Mafe" },
  "about.role": { es: "Automation Developer · n8n · AI · Desarrolladora de Software", en: "Automation Developer · n8n · AI · Software Developer" },
  "about.p1": { es: "Soy María Fernanda Moreno, desarrolladora web y creadora de MafeTech.", en: "I'm María Fernanda Moreno, web developer and creator of MafeTech." },
  "about.p2": { es: "Me encanta transformar ideas en sitios web personalizados. Trabajo con profesionales, emprendedores, comercios y empresas, y también con hoteles, alojamientos, academias y centros educativos. Combino desarrollo, estrategia digital y tecnología para crear soluciones claras, funcionales y pensadas para crecer.", en: "I love turning ideas into custom websites. I work with professionals, entrepreneurs, shops and businesses, as well as hotels, other accommodation providers, language schools, and education centers. I combine development, digital strategy, and technology to build clear, practical websites that can grow with you." },
  // CTA
  // Contact
  "contact.title": { es: "¿Tenés una idea para tu negocio?", en: "Have an idea for your business?" },
  "contact.name": { es: "Nombre", en: "Name" },
  "contact.email": { es: "Email", en: "Email" },
  "contact.phone": { es: "Teléfono", en: "Phone" },
  "contact.service": { es: "Tipo de servicio", en: "Service type" },
  "contact.message": { es: "Mensaje", en: "Message" },
  "contact.send": { es: "Enviar mensaje", en: "Send message" },
  "contact.response": { es: "Respondemos en menos de 24 horas", en: "We respond in less than 24 hours" },
  "contact.select": { es: "Seleccionar servicio", en: "Select service" },
  "contact.s1": { es: "Presencia Digital", en: "Digital Presence" },
  "contact.s2": { es: "Todo en Uno", en: "All-in-One" },
  "contact.s3": { es: "Ecosistema Inteligente", en: "Smart Ecosystem" },
  "contact.s4": { es: "Otro / No estoy seguro", en: "Other / Not sure" },
  "contact.whatsapp": { es: "Hablemos", en: "Let's talk" },
  // Footer
  "footer.desc": { es: "Diseño web, SEO, automatización y estrategia digital.", en: "Web design, SEO, automation, and digital strategy." },
  "footer.nav": { es: "Navegación", en: "Navigation" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.location": { es: "© 2026 MafeTech. Todos los derechos reservados.", en: "© 2026 MafeTech. All rights reserved." },
  "hero.support": { es: "También te acompaño para mejorar tu visibilidad en Google y en herramientas de inteligencia artificial, con una estrategia digital adaptada a tus objetivos.", en: "I also help you improve your visibility on Google and in AI tools, with a digital strategy tailored to your goals." },
  "hero.scroll": { es: "Ir a la propuesta de valor", en: "Scroll to the next section" },
  "value.intro": { es: "No alcanza con estar en internet: necesitás una presencia que te represente, genere confianza y facilite que las personas te elijan.", en: "Your online presence should reflect who you are, build trust, and help people choose you." },
  "services.web.title": { es: "Diseño y desarrollo web", en: "Web design and development" },
  "services.web.desc": { es: "Creo sitios web, tiendas online y páginas de servicios que combinan diseño, claridad y funcionalidad. Cada proyecto se adapta a tu negocio y a lo que necesitás lograr.", en: "I build websites, online stores, and service pages that combine design, clarity, and usability. Each project is tailored to your business and goals." },
  "services.seo.title": { es: "SEO optimizado y visibilidad digital", en: "SEO optimization and online visibility" },
  "services.seo.desc": { es: "Optimizo tu sitio para que los buscadores puedan comprenderlo mejor y para que tus potenciales clientes encuentren información útil sobre lo que ofrecés. También trabajo su contenido y estructura pensando en las búsquedas y respuestas con inteligencia artificial.", en: "I optimize your website so search engines can understand it and potential clients can find useful information about what you offer. I also work on content and structure with AI search and answers in mind." },
  "services.strategy.title": { es: "Estrategia de marketing digital", en: "Digital marketing strategy" },
  "services.strategy.desc": { es: "Te ayudo a conocer mejor a tus clientes, definir objetivos y construir un plan de acción para tu presencia digital.", en: "I help you understand your clients, set goals, and build an action plan for your online presence." },
  "services.automation.examples": { es: "Ver casos de automatización", en: "Explore automation examples" },
  "services.automation.title": { es: "Automatización de procesos", en: "Process automation" },
  "services.automation.desc": { es: "Conecto herramientas y simplifico tareas repetitivas para que puedas dedicarle más tiempo a tu negocio. Por ejemplo, organizar consultas, enviar respuestas o mantener información actualizada.", en: "I connect tools and simplify repetitive tasks, such as organizing inquiries, sending replies, or keeping information up to date." },
  "projects.intro": { es: "Cada sitio web tiene su historia, sus clientes y sus objetivos. Estos son algunos de los proyectos en los que trabajé para transformar ideas en experiencias digitales.", en: "Every website has a story, an audience, and a purpose. Here are some of the projects where I turned ideas into digital experiences." },
  "projects.clients": { es: "Trabajos con clientes", en: "Client work" },
  "projects.demos": { es: "Proyectos de muestra", en: "Demo projects" },
  "projects.visit": { es: "Explorar proyecto", en: "Explore project" },
  "projects.pending": { es: "Sitio en preparación", en: "Website in progress" },
  "process.cta": { es: "Empecemos a conversar", en: "Let's start talking" },
  "about.p3": { es: "También puedo ayudarte a mejorar tu visibilidad online y a simplificar procesos, siempre buscando que la tecnología tenga un propósito concreto para vos.", en: "I can help you improve your online visibility and simplify processes with technology that serves a clear purpose." },
  "about.p4": { es: "Trabajo de manera cercana y transparente. Primero conversamos sobre lo que ofrecés y lo que querés lograr con tu web. A partir de esa charla preparo varias maquetas para que elijas la que más te guste y la personalicemos a tu medida.", en: "I work closely with you and keep the process transparent. We start by talking about what you offer and what you want your website to achieve. Then I prepare several mockups so you can choose the one you like best and we can tailor it to your preferences." },
  "about.p5": { es: "Seguimos en contacto hasta la entrega. Te muestro los avances, incorporo los cambios que acordamos y optimizo el SEO de tu web al 100 %. Según lo que necesites, también puedo automatizar tareas o asesorarte en marketing digital.", en: "We stay in touch through delivery. I share progress, make the changes we agree on, and fully optimize your site's SEO. Depending on what you need, I can also automate tasks or advise you on digital marketing." },
  "contact.intro": { es: "Ya sea que necesites una web desde cero, quieras mejorar la que tenés o estés buscando una forma de organizar tu presencia digital, me encantaría escucharte.", en: "Whether you need a new website, want to improve the one you have, or want to organize your digital presence, I'd love to hear from you." },
  "contact.invite": { es: "Contame qué hacés y qué te gustaría lograr. Juntas podemos encontrar el mejor punto de partida.", en: "Tell me what you do and what you'd like to achieve. Together, we can find the right starting point." },
  "faq.title": { es: "Preguntas frecuentes", en: "Frequently asked questions" },
  "faq.1.q": { es: "¿Qué necesito para empezar a crear mi sitio web?", en: "What do I need to start building my website?" },
  "faq.1.a": { es: "Podemos empezar con una charla sobre tu proyecto, a quién querés llegar y qué te gustaría lograr. Si ya tenés fotos, textos o un sitio, los revisamos juntos. Trabajo de forma remota, así que podemos coordinar el proyecto desde donde estés.", en: "We can start by talking about your project, your audience, and your goals. If you already have photos, copy, or a website, we can review them together. I work remotely, so we can coordinate the project wherever you are." },
  "faq.2.q": { es: "¿Podés mejorar una página que ya tengo?", en: "Can you improve my existing website?" },
  "faq.2.a": { es: "Sí. Puedo revisar tu sitio actual y proponerte mejoras en el diseño, el contenido o la forma en que las personas lo encuentran y lo usan.", en: "Yes. I can review your current website and suggest improvements to design, content, discoverability, or usability." },
  "faq.3.q": { es: "¿Qué es el SEO y por qué le sirve a mi negocio?", en: "What is SEO and why is it useful for my business?" },
  "faq.3.a": { es: "El SEO mejora el contenido y la estructura de tu web para que los buscadores entiendan qué ofrecés y las personas puedan encontrarte cuando lo buscan. Hoy tus potenciales clientes también buscan en herramientas de inteligencia artificial y dentro de las redes sociales. Una estrategia de visibilidad conecta tu sitio con perfiles y publicaciones que dejen claro qué hacés y a quién podés ayudar.", en: "SEO improves your website’s content and structure so search engines understand what you offer and people can find you when they look for it. Potential clients also search with AI tools and on social media. A visibility strategy brings together your website, social profiles, and posts to make it clear what you do and who you can help." },
  "faq.4.q": { es: "¿Qué podés hacer para mejorar la visibilidad de mi negocio?", en: "What can you do to help people find my business online?" },
  "faq.4.a": { es: "Reviso cómo está organizada tu web, qué información falta y qué palabras usan tus clientes para buscar lo que ofrecés. Con eso, mejoro el contenido y la estructura para facilitar que los buscadores y las herramientas de IA entiendan tu sitio. Si también trabajamos tu estrategia digital, podemos alinear tus perfiles y publicaciones con lo que comunicás en tu web.", en: "I review how your site is organized, what information is missing, and what words your customers use to search for what you offer. I then improve your content and structure so search engines and AI tools can better understand your site. If we also work on your digital strategy, we can make your social profiles and posts consistent with your website." },
  "faq.5.q": { es: "¿Cómo se define el presupuesto y el plazo?", en: "How do you estimate the cost and timeline?" },
  "faq.5.a": { es: "Dependen del alcance del proyecto y de lo que ya tengas preparado, como textos, fotos o un sitio existente. Después de la primera charla, te presento una propuesta con lo que incluye el trabajo, el presupuesto y el plazo estimado.", en: "They depend on the scope of the project and what you already have, such as copy, photos, or an existing website. After our first conversation, I send you a proposal outlining what is included, the cost, and the estimated timeline." }
};
const LanguageContext = createContext(void 0);
const LanguageProvider = ({ children, lang }) => {
  const t = (key) => {
    var _a;
    return ((_a = translations[key]) == null ? void 0 : _a[lang]) || key;
  };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value: { lang, t }, children });
};
const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
function BrandMark() {
  return /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#6531c5] to-[#8832bc] text-sm font-bold text-white", children: "MF" }),
    /* @__PURE__ */ jsxs("span", { className: "font-sans text-lg font-bold tracking-tight text-foreground", children: [
      "Mafe",
      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Tech" })
    ] })
  ] });
}
const Navbar = () => {
  const { lang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#contacto", label: t("nav.contact") }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsx("a", { href: "#inicio", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsx(BrandMark, {}) }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:flex items-center gap-8", children: links.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              onClick: () => setMobileOpen(false),
              className: "text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3] transition-colors text-sm font-medium",
              children: link.label
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center border border-border rounded-full overflow-hidden text-xs font-mono", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/",
                  lang: "es",
                  hrefLang: "es",
                  "aria-label": "Español",
                  "aria-current": lang === "es" ? "page" : void 0,
                  className: `px-3 py-1.5 transition-colors ${lang === "es" ? "bg-[color:var(--control-accent)] text-white" : "text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3]"}`,
                  children: "ES"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "/en/",
                  lang: "en",
                  hrefLang: "en",
                  "aria-label": "English",
                  "aria-current": lang === "en" ? "page" : void 0,
                  className: `px-3 py-1.5 transition-colors ${lang === "en" ? "bg-[color:var(--control-accent)] text-white" : "text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3]"}`,
                  children: "EN"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "md:hidden text-foreground p-1",
                onClick: () => setMobileOpen(!mobileOpen),
                "aria-label": "Toggle menu",
                children: mobileOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
              }
            )
          ] })
        ] }),
        mobileOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden bg-background/95 backdrop-blur-xl border-t border-border", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-6 flex flex-col gap-4", children: links.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            onClick: () => setMobileOpen(false),
            className: "text-white hover:text-[#aa4df3] focus-visible:text-[#aa4df3] transition-colors text-base font-medium text-left py-2",
            children: link.label
          },
          link.href
        )) }) })
      ]
    }
  );
};
const Hero = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs("section", { id: "inicio", className: "relative grid min-h-screen grid-rows-[minmax(0,1fr)_auto_minmax(5rem,1fr)] overflow-hidden grid-bg", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative row-start-2 container mx-auto px-4 md:px-8 text-center max-w-4xl pt-16 md:pt-20", children: [
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "label-caps mb-6 py-4 md:leading-loose",
          children: t("hero.label")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h1,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.15 },
          className: "text-4xl sm:text-5xl md:text-7xl font-normal tracking-tight leading-tight mb-6 text-foreground",
          children: t("hero.title")
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.3 },
          className: "copy-size text-muted-foreground max-w-2xl mx-auto mb-4 font-sans font-medium",
          children: t("hero.subtitle")
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "copy-size text-muted-foreground max-w-2xl mx-auto mb-10 font-sans font-medium", children: t("hero.support") }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.45 },
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [
            /* @__PURE__ */ jsx("a", { href: "#contacto", className: "btn-primary text-base", children: t("hero.cta1") }),
            /* @__PURE__ */ jsx("a", { href: "#proyectos", className: "btn-outline text-base", children: t("hero.cta2") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#valor",
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-scroll-indicator",
        "aria-label": t("hero.scroll"),
        children: /* @__PURE__ */ jsx(ChevronDown, { size: 28 })
      }
    )
  ] });
};
const ScrollAnimation = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y: 30 },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
      transition: { duration: 0.6, delay, ease: "easeOut" },
      className,
      children
    }
  );
};
const cards = [
  { icon: Monitor, titleKey: "value.card1.title", descKey: "value.card1.desc" },
  { icon: Search, titleKey: "value.card2.title", descKey: "value.card2.desc" },
  { icon: Target, titleKey: "value.card3.title", descKey: "value.card3.desc" }
];
const ecosystemCopy = {
  es: {
    title: "Tu web,  tu ecosistema digital",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "Para un ",
        /* @__PURE__ */ jsx("strong", { children: "profesional, emprendedor o comerciante" }),
        ", tener presencia digital es fundamental para facilitar que las personas te encuentren, entiendan qué ofrecés y sepan cómo dar el próximo paso. Pueden descubrirte en redes, en un buscador o al consultar una herramienta de inteligencia artificial. Tu web reúne TODO lo que necesitan para conocerte mejor, ver tus trabajos, explorar tus servicios y contactarte."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Cada canal cumple una función. Tus redes te ayudan a mostrar lo que ofreces y conversar con tu público. Desde ellas podes llevar a las personas a tu web para ampliar la información, pedir un turno, reservar o escribirte por WhatsApp. Y desde tu sitio también pueden ir a tus redes y seguir en contacto con vos." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Eso es un ",
        /* @__PURE__ */ jsx("strong", { children: "ecosistema digital" }),
        ". Según lo que necesite tu proyecto, te ayudo a conectar tu web, tus redes y tus canales de atención. Si recibís muchas consultas o repetís los mismos pasos todos los días, también podemos ",
        /* @__PURE__ */ jsx("strong", { children: "automatizar" }),
        " parte de ese recorrido. Y si necesitas definir a quién querés llegar, qué comunicar y en qué canales enfocarte, puedo ayudarte a armar un ",
        /* @__PURE__ */ jsx("strong", { children: "plan de marketing digital personalizado" }),
        "."
      ] })
    ] })
  },
  en: {
    title: "Your website, your digital ecosystem",
    body: /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "For a ",
        /* @__PURE__ */ jsx("strong", { children: "professional, entrepreneur or business owner" }),
        ", having an online presence is essential. It makes it easier for people to find you, understand what you offer, and know what to do next. They can discover you on social media, through a search engine, or by using an AI tool. Your website brings together EVERYTHING they need to learn more about you, see your work, explore your services, and get in touch."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Each channel has a role. Social media helps you show what you offer and talk with your audience. From there, you can bring people to your website to learn more, make an appointment or reservation, or message you on WhatsApp. From your website, they can also visit your social profiles and stay in touch." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "That’s a ",
        /* @__PURE__ */ jsx("strong", { children: "digital ecosystem" }),
        ". Depending on your project, I help you connect your website, social profiles, and customer contact channels. If you receive a lot of inquiries or repeat the same steps every day, we can also ",
        /* @__PURE__ */ jsx("strong", { children: "automate" }),
        " part of that journey. And if you need to decide who you want to reach, what to say, and which channels to focus on, I can help you put together a ",
        /* @__PURE__ */ jsx("strong", { children: "personalized digital marketing plan" }),
        "."
      ] })
    ] })
  }
};
const ValueProposition = () => {
  const { lang, t } = useLanguage();
  const ecosystem = ecosystemCopy[lang];
  return /* @__PURE__ */ jsx("section", { id: "valor", className: "bg-[radial-gradient(ellipse_at_top,#211a31_0%,#1a1626_58%,#15131d_100%)] py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
    /* @__PURE__ */ jsxs(ScrollAnimation, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-serif font-normal tracking-tight text-center text-foreground mb-4", children: t("value.title") }),
      /* @__PURE__ */ jsx("p", { className: "text-center copy-size font-sans font-medium text-[#b8bfcd] max-w-2xl mx-auto mb-16", children: t("value.intro") })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: cards.map((card, i) => /* @__PURE__ */ jsx(ScrollAnimation, { delay: i * 0.15, children: /* @__PURE__ */ jsxs("div", { className: "group card-glow h-full rounded-2xl border border-[#3e3649] bg-gradient-to-b from-[#15141a] to-[#100f14] px-6 py-8 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--icon-accent)] bg-transparent", children: /* @__PURE__ */ jsx(card.icon, { className: "card-glow-icon text-[color:var(--icon-accent)]", size: 22, strokeWidth: 1.7, "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mb-3 text-balance font-serif text-2xl font-normal leading-snug tracking-tight text-foreground", children: t(card.titleKey) }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-xs font-sans card-description text-[#c2c7d1]", children: t(card.descKey) })
    ] }) }, card.titleKey)) }),
    /* @__PURE__ */ jsxs("div", { id: "ecosistema-digital", className: "mx-auto mt-16 max-w-5xl rounded-2xl border border-border bg-card/45 px-6 py-8 md:px-10 md:py-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "mb-5 text-balance text-center text-2xl font-medium md:text-3xl", children: ecosystem.title }),
      /* @__PURE__ */ jsx("div", { className: "copy-size mx-auto max-w-3xl space-y-4 text-justify hyphens-auto text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground", children: ecosystem.body })
    ] })
  ] }) });
};
const services = [
  { key: "web", Icon: Monitor },
  { key: "seo", Icon: Search },
  { key: "automation", Icon: Workflow },
  { key: "strategy", Icon: Target }
];
function Services() {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "servicios", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
    /* @__PURE__ */ jsx(ScrollAnimation, { children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-medium text-center mb-16", children: t("services.title") }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto", children: services.map(({ key, Icon }, index) => /* @__PURE__ */ jsx(ScrollAnimation, { delay: index * 0.1, children: /* @__PURE__ */ jsxs("article", { className: "card-glow bg-card border border-border rounded-xl p-8 h-full", children: [
      /* @__PURE__ */ jsx(Icon, { className: "card-glow-icon mb-5 text-[color:var(--icon-accent)]", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-medium mb-3", children: t(`services.${key}.title`) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground card-description", children: t(`services.${key}.desc`) }),
      key === "automation" && /* @__PURE__ */ jsx("a", { href: "#casos-automatizacion", className: "mt-4 inline-block font-medium text-primary hover:underline", children: t("services.automation.examples") })
    ] }) }, key)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx("a", { className: "btn-primary inline-block", href: "#contacto", children: t("services.consult") }) })
  ] }) });
}
const hubspot = "/assets/admisiones-hubspot-7NVpGEld.jpg";
const academy = "/assets/automatizacionAcademiaMake--ckbDOBe.jpg";
const invoices = "/assets/aiEmailProcessing-C7oe8sf5.jpg";
const meetings = "/assets/n8n-workflow-pG95rAlO.jpg";
const leadFlow = "/assets/leadFlowAI-CKC3QMzo.jpg";
const payments = "/assets/dashboardTransaccionesFintech-XQfvumQ3.jpg";
const referrals = "/assets/triageHospitalario-DE2ZU6j5.jpg";
const comments = "/assets/sentimientosGemini-C9fxltuq.jpg";
const copy = {
  es: {
    title: "Automatizaciones para problemas de todos los días",
    featured: {
      title: "Gestión de consultas de admisión en HubSpot",
      context: "Prototipo probado · HubSpot CRM y CMS, n8n y Gemini",
      description: "Cuando llega una consulta de admisión, el sistema registra en HubSpot su prioridad, el motivo, el estado y la persona responsable de atenderla.",
      outcome: "Si alguien está cerca de inscribirse, abre una oportunidad. Si todavía está evaluando opciones, crea una tarea de seguimiento para un asesor. Las consultas de baja prioridad quedan registradas y los casos que el sistema no puede clasificar pasan a revisión manual."
    },
    examples: [
      {
        title: "Inscripciones para una academia de idiomas",
        image: academy,
        description: "Diseñé una propuesta que responde preguntas frecuentes, envía los accesos cuando se confirma el pago y avisa al equipo si un alumno deja de entrar.",
        demo: "Ver la demo interactiva"
      },
      {
        title: "Registro de facturas y documentos",
        image: invoices,
        description: "El sistema guarda los adjuntos que llegan por correo y carga sus datos en una planilla, para que el equipo pueda encontrarlos sin volver a escribirlos a mano."
      },
      {
        title: "De la reunión a las tareas",
        image: meetings,
        description: "A partir de una grabación, el sistema prepara un resumen con las decisiones y agrega las tareas acordadas al tablero del equipo."
      },
      {
        title: "Qué consultas atender primero",
        image: leadFlow,
        description: "LeadFlow registra las consultas comerciales en una planilla y avisa por correo al equipo cuando llega una que conviene atender pronto."
      },
      {
        title: "Tablero para entender tus pagos",
        image: payments,
        description: "Conecté una planilla a Looker Studio para consultar montos por fecha, estado, método de pago y país desde un tablero interactivo."
      },
      {
        title: "Derivaciones hospitalarias con revisión médica",
        image: referrals,
        description: "Diseñé un prototipo que reúne derivaciones de distintos canales, organiza la información y señala los casos dudosos para que los revise el equipo médico."
      },
      {
        title: "Análisis de comentarios en redes sociales",
        image: comments,
        description: "Probé un sistema que clasifica publicaciones de X como positivas, negativas o neutras y arma un reporte para revisar qué se dice sobre una marca."
      }
    ]
  },
  en: {
    title: "Automation for everyday problems",
    featured: {
      title: "Managing admissions inquiries in HubSpot",
      context: "Tested prototype · HubSpot CRM and CMS, n8n, and Gemini",
      description: "When an admissions inquiry comes in, the system records its priority, the reason, its status, and the person responsible for following up in HubSpot.",
      outcome: "If someone is ready to enroll, it opens a deal. If they are still weighing their options, it creates a follow-up task for an advisor. Low-priority inquiries stay on record, and cases the system cannot classify go to manual review."
    },
    examples: [
      {
        title: "Enrollment for a language academy",
        image: academy,
        description: "I designed a proposal to answer common questions, send course access after payment is confirmed, and notify staff when a student stops logging in.",
        demo: "Open the interactive demo"
      },
      {
        title: "Recording invoices and documents",
        image: invoices,
        description: "The system saves email attachments and records their details in a spreadsheet, so the team can find the information without typing it in again."
      },
      {
        title: "From meeting notes to tasks",
        image: meetings,
        description: "The system summarizes decisions from a meeting recording and adds the agreed tasks to the team's board."
      },
      {
        title: "Deciding which inquiries to handle first",
        image: leadFlow,
        description: "LeadFlow records sales inquiries in a spreadsheet and emails the team when one needs a prompt response."
      },
      {
        title: "A dashboard for understanding payments",
        image: payments,
        description: "I connected a spreadsheet to Looker Studio so teams can explore amounts by date, status, payment method, and country in one interactive dashboard."
      },
      {
        title: "Hospital referrals with clinical review",
        image: referrals,
        description: "I designed a prototype that collects referrals from different channels, organizes the information, and flags unclear cases for review by the medical team."
      },
      {
        title: "Analyzing social media comments",
        image: comments,
        description: "I tested a system that classifies posts on X as positive, negative, or neutral and creates a report on what people are saying about a brand."
      }
    ]
  }
};
const academyDemo = "https://showcase-de-automatizaciones-y-webs.vercel.app/automatizacion-academia-idiomas.html";
function AutomationCases({ separated }) {
  const { lang } = useLanguage();
  const { title, featured, examples } = copy[lang];
  return /* @__PURE__ */ jsxs("section", { "aria-labelledby": "automation-title", className: `mx-auto max-w-5xl ${separated ? "mt-16" : ""}`, children: [
    /* @__PURE__ */ jsx("h3", { id: "automation-title", className: "mb-6 text-2xl font-medium md:text-3xl", children: title }),
    /* @__PURE__ */ jsxs("article", { className: "card-glow grid overflow-hidden rounded-xl border border-primary/40 bg-card md:grid-cols-[minmax(0,2fr)_minmax(0,5fr)]", children: [
      /* @__PURE__ */ jsx("img", { src: hubspot, alt: "", loading: "lazy", className: "h-60 w-full bg-background object-contain md:h-full md:max-h-96" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-2 text-2xl font-medium", children: featured.title }),
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm font-medium text-primary", children: featured.context }),
        /* @__PURE__ */ jsx("p", { className: "card-description text-muted-foreground", children: featured.description }),
        /* @__PURE__ */ jsx("p", { className: "card-description mt-3 text-muted-foreground", children: featured.outcome })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-5 sm:grid-cols-2", children: examples.map((example) => /* @__PURE__ */ jsxs("article", { className: "card-glow overflow-hidden rounded-xl border border-border bg-card", children: [
      /* @__PURE__ */ jsx("img", { src: example.image, alt: "", loading: "lazy", className: "h-48 w-full bg-background object-contain" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-3 text-xl font-medium", children: example.title }),
        /* @__PURE__ */ jsx("p", { className: "card-description text-muted-foreground", children: example.description }),
        example.demo && /* @__PURE__ */ jsxs("a", { href: academyDemo, target: "_blank", rel: "noopener noreferrer", className: "mt-3 inline-block font-medium text-primary hover:underline", children: [
          example.demo,
          " ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "↗" })
        ] })
      ] })
    ] }, example.title)) })
  ] });
}
const tonio = "/assets/tonioMiniMarket-Bu38WNxK.jpg";
const arquetipoIA = "/assets/arquetipoIA-C2bFGe_w.jpg";
const bannerPrettyLady = "/assets/bannerPrettyLady-DCy-BoDN.jpg";
const furniture = "/assets/amoblamientosElReyNorte-EW3IndPb.jpg";
const patitasFelices = "/assets/patitasFelices-CpzV6GqG.jpg";
const emilyHair = "/assets/emilyHair-DsX3KvVD.jpg";
const furnarius = "/assets/furnarius-C7dAaZtK.jpg";
const projects = [
  // ── Desarrollo Web ─────────────────────────────────────────────────────────
  {
    id: "arquetipo-ia",
    category: "Aplicación Web",
    title: "ArquetipoIA — Generador de Buyer Personas con Gemini AI",
    problem: "Freelancers y agencias de LATAM pierden tiempo construyendo buyer personas manualmente, sin una herramienta accesible, en español y adaptada a la realidad del mercado regional.",
    solution: "Aplicación web con modelo freemium que genera buyer personas detallados a partir de datos del negocio del usuario, impulsada por Gemini AI. Incluye analítica con PostHog, arquitectura escalable en Supabase y deploy en Vercel.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini AI", "Supabase", "PostHog", "Vercel"],
    contribution: "• Diseño e implementación completa de la aplicación frontend\n• Integración con Gemini AI para generación estructurada de buyer personas\n• Implementación de modelo freemium con límites por usuario\n• Analytics con PostHog para tracking de uso y conversión\n• Persistencia de datos en Supabase\n• Deploy en Vercel con dominio personalizado\n• Proyecto final del curso 'Creación de Productos desde Cero con IA' — Coderhouse",
    image: arquetipoIA,
    liveUrl: "https://arquetipo-ia-entrega-final.vercel.app/"
  },
  {
    id: "patitas-felices-grooming-web-app",
    category: "Desarrollo Web",
    title: "Patitas Felices — Plataforma Web de Grooming con Sistema de Turnos e Integración WhatsApp",
    problem: "Las peluquerías caninas suelen gestionar turnos manualmente por WhatsApp o teléfono, generando pérdida de información y consultas incompletas. Muchas carecen de presencia digital profesional.",
    solution: "Aplicación web profesional en React + TypeScript que digitaliza la reserva de turnos con captura estructurada de datos de la mascota y generación automática de mensajes para WhatsApp. Incluye galería interactiva de transformaciones.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Radix UI", "WhatsApp Deep Linking"],
    contribution: "• Implementación de sistema de reserva con captura estructurada de datos de la mascota\n• Integración con WhatsApp mediante generación automática de mensajes formateados\n• Desarrollo de galería interactiva 'Antes y Después' con lógica dinámica\n• Interfaz responsive mobile-first con animaciones Framer Motion\n• Deploy completo en Vercel con CI desde GitHub",
    image: patitasFelices,
    liveUrl: "https://patitasfelices-spa.vercel.app/"
  },
  {
    id: "emily-hair-studio-web-app",
    category: "Desarrollo Web",
    title: "Emily Hair Studio — Plataforma Web con Diagnóstico Inteligente e Integración WhatsApp",
    problem: "Los salones de belleza reciben consultas incompletas por WhatsApp, generando múltiples intercambios innecesarios y pérdida de tiempo operativo. Muchos carecen de presencia digital optimizada para conversión.",
    solution: "Aplicación web que digitaliza la pre-consulta mediante un sistema de diagnóstico capilar inteligente. Captura datos estructurados, permite adjuntar imágenes y genera automáticamente un mensaje formateado para WhatsApp.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "WhatsApp Deep Linking"],
    contribution: "• Desarrollo de sistema de diagnóstico interactivo con validación y generación dinámica de mensajes\n• Integración con WhatsApp mediante deep linking y payload estructurado\n• Carga de imágenes desde el cliente como parte del flujo de diagnóstico\n• Animaciones avanzadas con Framer Motion\n• Deploy en Vercel con pipeline de CI desde GitHub",
    image: emilyHair,
    liveUrl: "https://emilyhairstudio.vercel.app/"
  },
  {
    id: "furnariusEventos",
    category: "Desarrollo Web",
    title: "Furnarius Eventos — Sitio Web Institucional",
    problem: "Empresa del rubro eventos sin presencia digital profesional, lo que limitaba su visibilidad, comunicación de servicios y captación de nuevos clientes.",
    solution: "Experiencia web inmersiva utilizando IA para la generación de prototipos visuales de alta fidelidad. Comunicación clara de servicios personalizados y vitrina de proyectos ejecutados.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
    contribution: "• Relevamiento estratégico de objetivos de negocio y CX\n• Uso de IA Generativa para recursos gráficos de alto impacto\n• Arquitectura de UI orientada a la generación de leads\n• Optimización de performance para carga de galerías de alta resolución",
    image: furnarius,
    liveUrl: "https://furnarius-eventos.vercel.app/"
  },
  // ── E-commerce ─────────────────────────────────────────────────────────────
  {
    id: "tonio-minimarket",
    category: "E-commerce",
    title: "Tonio MiniMarket — E-commerce con Checkout Inteligente y Delivery con Geolocalización",
    problem: "Despensa y pollería del barrio sin presencia digital, con pedidos gestionados por WhatsApp manualmente. Necesitaban un canal de ventas online accesible para adultos mayores y clientes del barrio.",
    solution: "Aplicación web de minimarket con catálogo de 60+ productos en 7 categorías, checkout en 3 pasos, cálculo automático de costo de delivery por distancia usando Haversine + OpenStreetMap Nominatim, pago en efectivo/transferencia y persistencia completa en Supabase.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "WhatsApp Deep Linking", "OpenStreetMap Nominatim", "Haversine", "html2canvas", "Vercel"],
    contribution: "• Catálogo con 60+ productos y sistema de ofertas con carrusel de imágenes\n• Checkout en 3 pasos con formulario de cliente y toggle delivery/retiro\n• Cálculo de costo de delivery en tiempo real con Haversine + Nominatim\n• Integración con Supabase para persistencia de pedidos\n• Generación de ticket en html2canvas y dispatch dual por WhatsApp\n• UX optimizada para adultos mayores y usuarios con poca experiencia digital",
    image: tonio,
    liveUrl: "https://toniominimarketnew.vercel.app/"
  },
  {
    id: "pretty-lady-boutique",
    category: "E-commerce",
    title: "Pretty Lady Boutique — E-commerce Premium con Personal Shopper IA",
    problem: "Necesidad de demostrar una experiencia e-commerce de moda femenina premium con asistencia inteligente integrada, diferenciada por diseño sofisticado y funcionalidad real.",
    solution: "E-commerce full con estética glassmorphism, chatbot personal shopper con Gemini 2.5 Flash conectado al inventario real en Supabase, carrito completo con variantes de talla y color, checkout simulado y dashboard de productos en tiempo real.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Supabase", "Gemini 2.5 Flash", "React Query", "Vercel"],
    contribution: "• Integración de chatbot Personal Shopper con Gemini 2.5 Flash conectado al inventario real de Supabase\n• Carrito con gestión de variantes (talla/color) y persistencia\n• Diseño premium con glassmorphism y animaciones Framer Motion\n• Gestión de inventario en tiempo real con Supabase PostgreSQL\n• Diseño 100% responsive mobile-first\n• Deploy en Vercel con pipeline de CI desde GitHub",
    image: bannerPrettyLady,
    liveUrl: "https://pretty-lady-boutique.vercel.app/"
  },
  {
    id: "amoblamientos-rey-norte",
    category: "E-commerce",
    title: "Amoblamientos El Rey del Norte — Catálogo Digital con IA y WhatsApp",
    problem: "Mueblería artesanal de Córdoba sin presencia digital, con catálogo disperso y sin canal centralizado para mostrar productos a medida ni captar consultas de nuevos clientes.",
    solution: "Landing page premium con catálogo filtrable por categoría (Cocinas, Baño, Dormitorio, Living, Almacenaje, Exterior), detalle individual de cada producto, integración directa con WhatsApp y Google Maps.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "WhatsApp Deep Linking", "Google Maps", "Vercel", "Lovable (IA)"],
    contribution: "• Relevamiento del negocio y catalogación completa de productos desde imágenes\n• Catálogo filtrable por categoría con detalle de materiales y dimensiones\n• Integración de WhatsApp flotante para consultas directas\n• Embed de Google Maps para localización del local\n• Optimización mobile-first",
    image: furniture,
    liveUrl: "https://amoblamientoselreydelnorte.vercel.app/"
  },
  {
    id: "artesaniaVeta",
    category: "E-commerce",
    title: "Artesanía & Veta — E-commerce de Lujo con IA Integrada",
    problem: "Necesidad de transformar un catálogo estático en una experiencia de compra premium y personalizada que incluya herramientas de asistencia inteligente.",
    solution: "Plataforma e-commerce de alta gama iniciada con Vibe Coding y refinada manualmente. Incluye chatbot inteligente y un Diseñador de muebles asistido por IA (Google AI Studio).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Google AI Studio", "Vercel", "Lovable (IA)"],
    contribution: "• Desarrollo de arquitectura e-commerce y refinamiento manual en TypeScript\n• Diseño e integración de interfaz para Chatbot y Diseñador de muebles asistido por IA\n• Implementación de la lógica de conexión con Google AI Studio\n• Gestión de base de datos con Supabase para administración dinámica de productos",
    image: new URL("../assets/artesani&beta.jpg", import.meta.url).href,
    liveUrl: "https://artesaniaveta.vercel.app/"
  }
  /*
    {
      id: "pixelymoda",
      category: "E-commerce",
      title: "Pixel&Moda — E-commerce (Proyecto Final React)",
      problem:
        "Proyecto académico que requería migrar un e-commerce a React, aplicando buenas prácticas de desarrollo frontend y una arquitectura escalable.",
      solution:
        "Aplicación e-commerce en React con enfoque en componentización, reutilización de componentes y manejo de estado, priorizando mantenibilidad y experiencia de usuario.",
      stack: ["React", "Vite", "JavaScript", "Bootstrap", "GitHub"],
      contribution:
        "• Diseño de la arquitectura de componentes\n• Implementación de routing y navegación\n• Manejo de estado global para el carrito de compras\n• Desarrollo de componentes reutilizables\n• Optimización de rendimiento y experiencia de usuario",
      image: logoPyM,
      liveUrl: "https://pixelymoda.vercel.app/",
    },       
  {
      id: "dulceybella",
      title: "Dulce y Bella - Distribuidora de Perfumes (Proyecto Final JS)",
      problem: "Proyecto académico: crear un e-commerce funcional con JS puro.",
      solution: "Catálogo de productos, carrito de compras y flujo de compra completo.",
      stack: ["JavaScript", "HTML", "bootstrap", "Github", "Vercel"],
      contribution: "Desarrollo completo del frontend y lógica del carrito.",
      liveUrl: "https://dulceybellaperfumes.vercel.app/",
      //repoUrl: "https://github.com/MafeTech24/proyectoFinalMorenoMariaFernanda",
      image: "dulceybella.jpg",
  }*/
];
const lawOffice = "/assets/cristianMartinez-CUxdTT99.png";
const abyco = "/assets/abyco-Cb3Nzcmc.jpg";
const silviaYJose = "/assets/silviayJose-BJ5pPxeQ.jpg";
const fundacion = "/assets/fundacion-por-un-mundo-mejor-CDraheqd.jpg";
const anaParis = "/assets/ana-paris-social-D39XRVKg.png";
const anabellaBrasca = "/assets/anabella-brasca-DmLDQeiO.jpg";
const clients = [
  { title: "Fundación Por Un Mundo Mejor", url: "https://maqueta-fundacion-completo.vercel.app/", image: fundacion, showFullImage: true },
  { title: "Tonio MiniMarket", url: "https://www.toniominimarket.com.ar/", image: tonio, showFullImage: true },
  { title: "Lic. Ana Paris", url: "https://www.licenciadaanaparis.com/", image: anaParis, showFullImage: true },
  { title: "Dra. Anabella Brasca", url: "https://anibrasca4.vercel.app/", image: anabellaBrasca, showFullImage: true },
  { title: "Amoblamientos El Rey del Norte", url: "https://amoblamientoselreydelnorte.vercel.app/", image: furniture },
  { title: "Estudio Jurídico Dr. Cristian Martínez", url: "https://cristianmartinez-abogado.vercel.app/", image: lawOffice },
  { title: "AB&CO · Abogados y Contadores", url: "https://abogadosycontadores-asesoriaintegra.vercel.app/", image: abyco },
  { title: "Silvia Mariella y José Tomás", url: "https://silviamariella-josetomas.vercel.app/", image: silviaYJose }
];
const demoProjects = [
  "emily-hair-studio-web-app",
  "patitas-felices-grooming-web-app",
  "artesaniaVeta",
  "furnariusEventos",
  "arquetipo-ia",
  "pretty-lady-boutique"
].flatMap((id) => projects.filter((project) => project.id === id));
const automationHash = "#casos-automatizacion";
const CATEGORIES = [
  { key: "projects.categories.all", value: "Todos" },
  { key: "projects.categories.webApp", value: "Aplicación Web" },
  { key: "projects.categories.webDev", value: "Desarrollo Web" },
  { key: "projects.categories.ecommerce", value: "E-commerce" },
  { key: "projects.categories.automation", value: "Automatizaciones" }
];
const categoryColor = {
  "Aplicación Web": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Desarrollo Web": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "E-commerce": "bg-purple-500/20 text-purple-300 border-purple-500/30"
};
const Projects = () => {
  var _a;
  const { t } = useLanguage();
  const [view, setView] = useState("clients");
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState(null);
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
    var _a2;
    if (view === "demos" && active === "Automatizaciones" && window.location.hash === automationHash) {
      (_a2 = document.getElementById("casos-automatizacion")) == null ? void 0 : _a2.scrollIntoView();
    }
  }, [view, active]);
  const clearAutomationLink = () => {
    if (window.location.hash === automationHash) {
      window.history.replaceState(window.history.state, "", "#proyectos");
    }
  };
  const filtered = demoProjects.filter((project) => active === "Todos" || project.category === active);
  return /* @__PURE__ */ jsxs("section", { id: "proyectos", className: "py-24 md:py-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
      /* @__PURE__ */ jsxs(ScrollAnimation, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-center text-foreground mb-4", children: t("projects.title") }),
        /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground font-sans mb-12 max-w-2xl mx-auto copy-size", children: t("projects.intro") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-10", children: ["clients", "demos"].map((option) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-pressed": view === option,
          onClick: () => {
            if (option === "clients") {
              clearAutomationLink();
              setActive("Todos");
            }
            setView(option);
          },
          className: view === option ? "btn-primary" : "btn-outline",
          children: t(`projects.${option}`)
        },
        option
      )) }),
      view === "clients" ? /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto", children: clients.map((client) => /* @__PURE__ */ jsxs("article", { className: "card-glow bg-card border border-border rounded-xl overflow-hidden flex flex-col", children: [
        client.image && /* @__PURE__ */ jsx(
          "img",
          {
            src: client.image,
            alt: client.title,
            loading: "lazy",
            className: `w-full h-44 ${client.showFullImage ? "bg-background object-contain" : "object-cover object-top"}`
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-5 flex-1 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium", children: client.title }),
          client.url && /* @__PURE__ */ jsxs("a", { href: client.url, target: "_blank", rel: "noopener noreferrer", className: "text-primary text-sm mt-auto hover:underline", children: [
            t("projects.visit"),
            " ",
            /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "↗" })
          ] })
        ] })
      ] }, client.title)) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ScrollAnimation, { delay: 0.1, children: /* @__PURE__ */ jsx("div", { id: "casos-automatizacion", className: "flex flex-wrap justify-center gap-2 mb-12", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-pressed": active === cat.value,
            onClick: () => {
              if (cat.value !== "Automatizaciones") clearAutomationLink();
              setActive(cat.value);
            },
            className: `px-5 py-2 rounded-full text-sm font-sans font-medium border transition-all duration-200 ${active === cat.value ? "bg-primary text-primary-foreground border-primary shadow-[0_0_16px_hsl(265_100%_76%/0.35)]" : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`,
            children: t(cat.key)
          },
          cat.value
        )) }) }),
        active !== "Automatizaciones" && /* @__PURE__ */ jsx(
          motion.div,
          {
            layout: true,
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto",
            children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((project, i) => {
              var _a2;
              return /* @__PURE__ */ jsxs(
                motion.div,
                {
                  layout: true,
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.95 },
                  transition: { duration: 0.25, delay: i * 0.04 },
                  onClick: () => setSelected(project),
                  className: "group card-glow relative bg-card border border-border rounded-xl overflow-hidden cursor-pointer",
                  children: [
                    project.isFeatured && /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 z-10", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 bg-primary text-primary-foreground text-[10px] font-bold font-sans px-3 py-1 rounded-full", children: [
                      /* @__PURE__ */ jsx(Star, { size: 10 }),
                      " Destacado"
                    ] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "relative h-44 overflow-hidden bg-muted", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: project.image,
                          alt: project.title,
                          className: "w-full h-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                      /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-primary font-sans font-medium", children: [
                        t("projects.details"),
                        " ",
                        /* @__PURE__ */ jsx(ChevronRight, { size: 12 })
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
                      /* @__PURE__ */ jsx("span", { className: `inline-block text-[10px] font-bold font-sans uppercase tracking-wider px-2 py-0.5 rounded-full border mb-3 ${categoryColor[project.category]}`, children: t(((_a2 = CATEGORIES.find((c) => c.value === project.category)) == null ? void 0 : _a2.key) || "") }),
                      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-foreground font-sans line-clamp-2 mb-3 leading-snug", children: project.title }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-1 mb-4", children: [
                        project.stack.slice(0, 4).map((tech) => /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "text-[10px] font-sans bg-muted text-muted-foreground px-2 py-0.5 rounded",
                            children: tech
                          },
                          tech
                        )),
                        project.stack.length > 4 && /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-sans text-muted-foreground px-1 py-0.5", children: [
                          "+",
                          project.stack.length - 4
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 pt-1 border-t border-border", children: [
                        project.liveUrl && /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: project.liveUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: (e) => e.stopPropagation(),
                            className: "inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-sans transition-colors",
                            children: [
                              /* @__PURE__ */ jsx(ExternalLink, { size: 12 }),
                              " ",
                              t("projects.livedemo")
                            ]
                          }
                        ),
                        project.documentUrl && /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: project.documentUrl,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: (e) => e.stopPropagation(),
                            className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-sans transition-colors",
                            children: [
                              /* @__PURE__ */ jsx(FileText, { size: 12 }),
                              " Docs"
                            ]
                          }
                        )
                      ] })
                    ] })
                  ]
                },
                project.id
              );
            }) })
          }
        ),
        (active === "Todos" || active === "Automatizaciones") && /* @__PURE__ */ jsx(AutomationCases, { separated: active === "Todos" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: selected && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setSelected(null),
          className: "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        },
        "backdrop"
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95, y: 20 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95, y: 20 },
          transition: { duration: 0.25, ease: "easeOut" },
          className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "pointer-events-auto bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl",
              onClick: (e) => e.stopPropagation(),
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative h-52 overflow-hidden rounded-t-2xl bg-muted flex-shrink-0", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: selected.image,
                      alt: selected.title,
                      className: "w-full h-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" }),
                  selected.isFeatured && /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold font-sans px-3 py-1 rounded-full", children: [
                    /* @__PURE__ */ jsx(Star, { size: 11 }),
                    " ",
                    t("projects.featured")
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setSelected(null),
                      className: "absolute top-4 right-4 bg-black/40 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors",
                      children: /* @__PURE__ */ jsx(X, { size: 16 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-6 space-y-5", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: `inline-block text-[10px] font-bold font-sans uppercase tracking-wider px-2 py-0.5 rounded-full border mb-2 ${categoryColor[selected.category]}`, children: t(((_a = CATEGORIES.find((c) => c.value === selected.category)) == null ? void 0 : _a.key) || "") }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground font-sans leading-snug", children: selected.title })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-primary uppercase tracking-wider font-sans mb-1", children: t("projects.problem") }),
                    /* @__PURE__ */ jsx("p", { className: "card-description text-muted-foreground font-sans", children: selected.problem })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-primary uppercase tracking-wider font-sans mb-1", children: t("projects.solution") }),
                    /* @__PURE__ */ jsx("p", { className: "card-description text-muted-foreground font-sans", children: selected.solution })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-primary uppercase tracking-wider font-sans mb-2", children: t("projects.stack") }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5", children: selected.stack.map((tech) => /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "text-xs font-sans bg-muted text-muted-foreground px-2.5 py-1 rounded-md border border-border",
                        children: tech
                      },
                      tech
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-primary uppercase tracking-wider font-sans mb-2", children: t("projects.contribution") }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: selected.contribution.split("\n").map((line, i) => /* @__PURE__ */ jsx("p", { className: "card-description text-muted-foreground font-sans", children: line }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 pt-2 border-t border-border", children: [
                    selected.liveUrl && /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: selected.liveUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-primary inline-flex items-center gap-2 text-sm",
                        children: [
                          /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
                          " ",
                          t("projects.livedemo")
                        ]
                      }
                    ),
                    selected.documentUrl && /* @__PURE__ */ jsxs(
                      "a",
                      {
                        href: selected.documentUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "btn-outline inline-flex items-center gap-2 text-sm",
                        children: [
                          /* @__PURE__ */ jsx(FileText, { size: 14 }),
                          " ",
                          t("projects.docs")
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        },
        "modal"
      )
    ] }) })
  ] });
};
const steps = [
  { icon: Search, num: "01", titleKey: "process.s1.title", descKey: "process.s1.desc" },
  { icon: FileText, num: "02", titleKey: "process.s2.title", descKey: "process.s2.desc" },
  { icon: Rocket, num: "03", titleKey: "process.s3.title", descKey: "process.s3.desc" },
  { icon: HeadphonesIcon, num: "04", titleKey: "process.s4.title", descKey: "process.s4.desc" }
];
const Process = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "proceso", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
    /* @__PURE__ */ jsx(ScrollAnimation, { children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-medium text-center text-foreground text-balance mb-12", children: t("process.title") }) }),
    /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: steps.map((step, i) => /* @__PURE__ */ jsx(ScrollAnimation, { delay: i * 0.12, children: /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "size-[3.75rem] md:size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(step.icon, { className: "size-6 md:size-7 text-[color:var(--icon-accent)]", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-primary font-mono text-sm md:text-base font-semibold", children: step.num }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl md:text-[1.375rem] font-medium leading-snug text-balance text-foreground my-2", children: t(step.titleKey) }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground card-description font-sans", children: t(step.descKey) })
    ] }) }, step.num)) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx("a", { className: "btn-outline inline-block px-9 py-3.5 text-[1.0625rem]", href: "#contacto", children: t("process.cta") }) })
  ] }) });
};
const AboutMe = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "sobre-mi", className: "py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx(ScrollAnimation, { children: /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "label-caps mb-4", children: t("about.label") }),
      /* @__PURE__ */ jsx("h2", { className: "mb-4 font-serif text-3xl font-normal tracking-tight text-foreground md:text-5xl", children: t("about.name") }),
      /* @__PURE__ */ jsx("p", { className: "font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-4", children: t("about.p1") }),
      /* @__PURE__ */ jsx("p", { className: "font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-8", children: t("about.p2") }),
      /* @__PURE__ */ jsx("p", { className: "font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-4", children: t("about.p3") }),
      /* @__PURE__ */ jsx("p", { className: "font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-4", children: t("about.p4") }),
      /* @__PURE__ */ jsx("p", { className: "font-sans text-[1.0625rem] md:text-lg leading-7 text-muted-foreground mb-8", children: t("about.p5") }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/mafetechdev/", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-primary transition-colors", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { size: 20, className: "text-[color:var(--icon-accent)]", "aria-hidden": "true" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(ScrollAnimation, { delay: 0.2, children: /* @__PURE__ */ jsx("div", { className: "sticky top-8 max-w-[85%] mx-auto md:max-w-none", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/sobreMi3.jpg",
        alt: "María Fernanda Moreno",
        width: 1200,
        height: 1500,
        loading: "lazy",
        className: "w-full h-auto object-contain rounded-2xl transition-transform duration-500 hover:scale-105"
      }
    ) }) })
  ] }) }) });
};
function FAQ() {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "preguntas", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8 max-w-3xl", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-medium text-center mb-12", children: t("faq.title") }),
    [1, 2, 3, 4, 5].map((id) => /* @__PURE__ */ jsxs("details", { className: "border-b border-border py-5", children: [
      /* @__PURE__ */ jsx("summary", { className: "cursor-pointer font-semibold marker:text-primary", children: t(`faq.${id}.q`) }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground copy-size", children: t(`faq.${id}.a`) })
    ] }, id))
  ] }) });
}
const Contact = () => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx("section", { id: "contacto", className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
    /* @__PURE__ */ jsxs(ScrollAnimation, { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-center text-foreground mb-4", children: t("contact.title") }),
      /* @__PURE__ */ jsxs("div", { className: "text-center text-muted-foreground font-sans copy-size max-w-2xl mx-auto mb-12 space-y-3", children: [
        /* @__PURE__ */ jsx("p", { children: t("contact.intro") }),
        /* @__PURE__ */ jsx("p", { children: t("contact.invite") })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ScrollAnimation, { delay: 0.1, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6 max-w-md mx-auto", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://wa.me/5493518103272?text=Hola%20Mafe%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20tus%20servicios",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn-primary w-full flex items-center justify-center gap-2 text-base py-4",
          children: [
            /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
            " ",
            t("contact.whatsapp")
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center gap-3 pt-4 border-t border-border w-full", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://www.linkedin.com/in/mafetechdev/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans text-sm",
          children: [
            /* @__PURE__ */ jsx(Linkedin, { size: 16, className: "text-[color:var(--icon-accent)]", "aria-hidden": "true" }),
            "LinkedIn"
          ]
        }
      ) })
    ] }) })
  ] }) });
};
const Footer = () => {
  const { t } = useLanguage();
  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#proyectos", label: t("nav.projects") },
    { href: "#proceso", label: t("nav.process") },
    { href: "#contacto", label: t("nav.contact") }
  ];
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 md:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(BrandMark, {}) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm font-sans", children: t("footer.desc") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-foreground font-sans font-semibold text-sm mb-4", children: t("footer.nav") }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: navLinks.map((link) => /* @__PURE__ */ jsx(
          "a",
          {
            href: link.href,
            className: "block text-muted-foreground hover:text-primary transition-colors text-sm font-sans",
            children: link.label
          },
          link.href
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-foreground font-sans font-semibold text-sm mb-4", children: t("footer.contact") }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/mafetechdev/", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-primary transition-colors", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { size: 18, className: "text-[color:var(--icon-accent)]", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/5493518103272", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-primary transition-colors", "aria-label": "WhatsApp", children: /* @__PURE__ */ jsx(MessageSquare, { size: 18 }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "section-divider mb-8" }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs font-sans", children: t("footer.location") }) })
  ] }) });
};
const WhatsAppButton = () => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/5493518103272?text=Hola%20Mafe,%20quiero%20consultar%20sobre%20un%20servicio",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[color:var(--control-accent)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200",
      "aria-label": "WhatsApp",
      children: /* @__PURE__ */ jsx(MessageSquare, { size: 26, className: "text-foreground" })
    }
  );
};
const Index = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(ValueProposition, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(Projects, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(AboutMe, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx("div", { className: "section-divider" }),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(WhatsAppButton, {})
  ] });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "mb-4 text-4xl font-bold", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" })
  ] }) });
};
const queryClient = new QueryClient();
const App = ({ lang = "es", prerender = false }) => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(LanguageProvider, { lang, children: [
  /* @__PURE__ */ jsx(Toaster, {}),
  prerender ? /* @__PURE__ */ jsx(Index, {}) : /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Index, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/en/", element: /* @__PURE__ */ jsx(Index, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] }) })
] }) }) });
function render(lang) {
  return renderToString(/* @__PURE__ */ jsx(App, { lang, prerender: true }));
}
export {
  render
};
