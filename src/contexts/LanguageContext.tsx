import React, { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { es: "Inicio", en: "Home" },
  "nav.services": { es: "Servicios", en: "Services" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.process": { es: "Proceso", en: "Process" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.label": { es: "AUTOMATION DEVELOPER · n8n · AI · REACT - TYPESCRIPT · MERN · LOW-CODE - NO-CODE · WORKFLOWS · VIBECODING", en: "AUTOMATION DEVELOPER · n8n · AI · REACT - TYPESCRIPT · MERN · LOW-CODE - NO-CODE · WORKFLOWS · VIBECODING" },
  "hero.title": { es: "Automatizo procesos. Conecto sistemas. Desarrollo soluciones.", en: "I automate processes. Connect systems. Build solutions." },
  "hero.subtitle": {
    es: "Automation Developer especializada en Workflow Automation con n8n, AI Automation con Gemini y Desarrollo de Aplicaciones.",
    en: "Automation Developer specialized in Workflow Automation with n8n, AI Automation with Gemini, and Application Development.",
  },
  "hero.cta1": { es: "Ver servicios", en: "View services" },
  "hero.cta2": { es: "Hablemos", en: "Let's talk" },

  // Value Prop
  "value.title": { es: "Automatización + Web.", en: "Automation + Web. In one hand." },
  "value.card1.title": { es: "Workflow Automation con n8n", en: "Workflow Automation with n8n" },
  "value.card1.desc": {
    es: "Conectá tus herramientas y eliminá tareas repetitivas. Tus leads se clasifican solos, tus documentos se procesan automáticamente y tu equipo se enfoca en lo que importa.",
    en: "Connect your tools and eliminate repetitive tasks. Your leads get classified automatically, documents get processed on their own, and your team focuses on what matters.",
  },
  "value.card2.title": { es: "AI Automation con Gemini", en: "AI Automation with Gemini" },
  "value.card2.desc": {
    es: "Sumá inteligencia artificial a tus procesos. Analizá datos, respondé clientes por WhatsApp y tomá decisiones automáticas — sin código complejo, sin intervención manual.",
    en: "Add artificial intelligence to your processes. Analyze data, respond to clients via WhatsApp and make automatic decisions — no complex code, no manual intervention.",
  },
  "value.card3.title": { es: "Sitios Web & Aplicaciones", en: "Websites & Applications" },
  "value.card3.desc": {
    es: "Diseño y desarrollo tu sitio web, e-commerce o aplicación desde cero. Rápido, moderno y listo para crecer — con o sin automatizaciones integradas.",
    en: "Design and develop your website, e-commerce or application from scratch. Fast, modern and ready to grow — with or without integrated automations.",
  },

  // Services
  "services.title": { es: "¿Qué necesitás?", en: "What do you need?" },
  "services.consult": { es: "Hablemos", en: "Let's talk" },
  "services.popular": { es: "Más elegido", en: "Most popular" },
  "services.p1.name": { es: "Automatización de Procesos", en: "Process Automation" },
  "services.p1.price": { es: "$600–900 USD", en: "$600–900 USD" },
  "services.p1.items": {
    es: "Diseño de pipeline con n8n|Integración de APIs y webhooks|Conexión con Google Workspace|Notificaciones automáticas|Documentación técnica incluida",
    en: "n8n pipeline design|API and webhook integration|Google Workspace connection|Automatic notifications|Technical documentation included",
  },
  "services.p2.name": { es: "Automatización + Sitio Web", en: "Automation + Website" },
  "services.p2.price": { es: "$1.800–2.500 USD", en: "$1,800–2,500 USD" },
  "services.p2.items": {
    es: "Workflows inteligentes con Gemini o GPT|Sitio web o app con React & TypeScript|Integración WhatsApp y CRM|Automatización de leads y formularios|Soporte prioritario 3 meses",
    en: "Smart workflows with Gemini or GPT|Website or app with React & TypeScript|WhatsApp and CRM integration|Lead and form automation|Priority support 3 months",
  },
  "services.p3.name": { es: "Solución Completa con IA", en: "Complete AI Solution" },
  "services.p3.price": { es: "$3.500–5.000 USD", en: "$3,500–5,000 USD" },
  "services.p3.items": {
    es: "Todo lo del plan anterior|Agentes de IA con RAG y Human-in-the-Loop|Dashboard de métricas en tiempo real|Automatización end-to-end de procesos críticos|Soporte y evolución 6 meses",
    en: "Everything from previous plan|AI agents with RAG and Human-in-the-Loop|Real-time metrics dashboard|End-to-end automation of critical processes|Support and evolution 6 months",
  },

  // Projects
  "projects.title": { es: "Resultados reales", en: "Real results" },
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
  "why.b1": { es: "Especialización real en n8n y AI Automation: workflows de producción, no prototipos", en: "Real n8n and AI Automation expertise: production-grade workflows, not prototypes" },
  "why.b2": { es: "n8n self-hosted disponible: tus datos en tus servidores, cumpliendo Ley 25.326", en: "Self-hosted n8n available: your data on your servers, GDPR-compatible" },
  "why.b3": { es: "Perfil híbrido: Automation Developer + Frontend React.", en: "Hybrid profile: Automation Developer + Frontend React." },
  "why.b4": { es: "Documentación técnica completa en cada proyecto. Sin letra chica, sin dependencias", en: "Full technical documentation on every project. No fine print, no lock-in" },

  // Process
  "process.title": { es: "Simple. Rápido. Sin sorpresas.", en: "Simple. Fast. No surprises." },
  "process.s1.title": { es: "Diagnóstico gratuito", en: "Free diagnosis" },
  "process.s1.desc": { es: "15 minutos para identificar oportunidades de mejora en tu negocio.", en: "15 minutes to identify improvement opportunities in your business." },
  "process.s2.title": { es: "Propuesta personalizada", en: "Custom proposal" },
  "process.s2.desc": { es: "Propuesta personalizada según tu negocio y presupuesto.", en: "Custom proposal based on your business and budget." },
  "process.s3.title": { es: "Implementación por sprints", en: "Sprint implementation" },
  "process.s3.desc": { es: "Entregables cada 2 semanas. Siempre sabés en qué estamos.", en: "Deliverables every 2 weeks. You always know where we stand." },
  "process.s4.title": { es: "Entrega + soporte", en: "Delivery + support" },
  "process.s4.desc": { es: "Documentación completa y continuidad asegurada.", en: "Complete documentation and ensured continuity." },

  // About
  "about.label": { es: "SOBRE MÍ", en: "ABOUT ME" },
  "about.name": { es: "María Fernanda Moreno", en: "María Fernanda Moreno" },
  "about.role": { es: "Automation Developer · n8n · AI · Desarrolladora de Software", en: "Automation Developer · n8n · AI · Software Developer" },
  "about.p1": {
    es: "Soy especialista en automatización de procesos e IA, y también desarrollo sitios web y aplicaciones.",
    en: "I specialize in process automation and AI, and I also develop websites and applications.",
  },
  "about.p2": {
    es: "Y si todavía no tenés presencia digital, también te ayudo a crear tu sitio web — porque hoy, si no estás en internet, no existís. También ayudo a negocios a trabajar más inteligente: eliminando tareas repetitivas, respondiendo clientes automáticamente por WhatsApp y conectando todas sus herramientas digitales. Todo con total transparencia y sin sorpresas.",
    en: "And if you still don't have a digital presence, I also help you create your website — because today, if you're not on the internet, you don't exist. I also help businesses work smarter: eliminating repetitive tasks, answering clients automatically via WhatsApp, and connecting all their digital tools. Everything with total transparency and no surprises.",
  },

  // CTA
  "cta.title": { es: "¿Listo para dar el siguiente paso?", en: "Ready to take the next step?" },
  "cta.subtitle": { es: "Empezamos con un diagnóstico gratuito de 15 minutos para identificar qué podés automatizar o cómo mejorar tu presencia digital.", en: "We start with a free 15-minute diagnosis to identify what you can automate or how to improve your digital presence." },
  "cta.btn1": { es: "Hablemos", en: "Let's talk" },
  "cta.btn2": { es: "WhatsApp directo", en: "Direct WhatsApp" },

  // Contact
  "contact.title": { es: "Contacto", en: "Contact" },
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
  "contact.whatsapp": { es: "Hablemos por WhatsApp", en: "Let's talk on WhatsApp" },

  // Footer
  "footer.desc": {
    es: "Automatizo procesos. Desarrollo sitios web. Conecto tu negocio con la tecnología.",
    en: "I automate processes. I build websites. I connect your business with technology.",
  },
  "footer.nav": { es: "Navegación", en: "Navigation" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.location": { es: "© 2026 MafeTech. Todos los derechos reservados.", en: "© 2026 MafeTech. All rights reserved." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
