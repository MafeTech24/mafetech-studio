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
  "hero.label": { es: "AUTOMATION DEVELOPER · n8n · AI · REACT & TYPESCRIPT", en: "AUTOMATION DEVELOPER · n8n · AI · REACT & TYPESCRIPT" },
  "hero.title": { es: "Automatizo procesos. Conecto sistemas. Desarrollo soluciones.", en: "I automate processes. Connect systems. Build solutions." },
  "hero.subtitle": {
    es: "Automation Developer especializada en Workflow Automation con n8n, AI Automation con Gemini y desarrollo de aplicaciones web con React & TypeScript. Trabajo con pymes de Argentina, Latinoamérica y España.",
    en: "Automation Developer specialized in Workflow Automation with n8n, AI Automation with Gemini and web apps with React & TypeScript. I work with SMBs from Argentina, Latin America and Spain.",
  },
  "hero.cta1": { es: "Ver servicios", en: "View services" },
  "hero.cta2": { es: "Hablemos", en: "Let's talk" },

  // Value Prop
  "value.title": { es: "Automatización + Web. En una sola mano.", en: "Automation + Web. In one hand." },
  "value.card1.title": { es: "Workflow Automation con n8n", en: "Workflow Automation with n8n" },
  "value.card1.desc": {
    es: "Diseño e implemento pipelines de automatización con n8n que conectan tus herramientas, clasifican leads, procesan documentos y eliminan tareas manuales.",
    en: "I design and implement automation pipelines with n8n that connect your tools, classify leads, process documents and eliminate manual tasks.",
  },
  "value.card2.title": { es: "AI Automation con Gemini", en: "AI Automation with Gemini" },
  "value.card2.desc": {
    es: "Integro modelos de IA (Gemini, GPT) a tus workflows para análisis inteligente de datos, chatbots en WhatsApp, clasificación automática y procesamiento multimodal.",
    en: "I integrate AI models (Gemini, GPT) into your workflows for smart data analysis, WhatsApp chatbots, automatic classification and multimodal processing.",
  },
  "value.card3.title": { es: "React & TypeScript Web Apps", en: "React & TypeScript Web Apps" },
  "value.card3.desc": {
    es: "Desarrollo sitios web, e-commerce y aplicaciones con React y TypeScript, conectados a automatizaciones y bases de datos en tiempo real.",
    en: "I build websites, e-commerce and apps with React and TypeScript, connected to automations and real-time databases.",
  },

  // Services
  "services.title": { es: "Servicios de Automation y Desarrollo Web", en: "Automation & Web Development Services" },
  "services.consult": { es: "Consultar", en: "Inquire" },
  "services.popular": { es: "Más elegido", en: "Most popular" },
  "services.p1.name": { es: "Workflow Automation", en: "Workflow Automation" },
  "services.p1.price": { es: "$600–900 USD", en: "$600–900 USD" },
  "services.p1.items": {
    es: "Diseño de pipeline con n8n|Integración de APIs y webhooks|Conexión con Google Workspace|Notificaciones automáticas|Documentación técnica incluida",
    en: "n8n pipeline design|API and webhook integration|Google Workspace connection|Automatic notifications|Technical documentation included",
  },
  "services.p2.name": { es: "AI Automation + Web", en: "AI Automation + Web" },
  "services.p2.price": { es: "$1.800–2.500 USD", en: "$1,800–2,500 USD" },
  "services.p2.items": {
    es: "Workflows inteligentes con Gemini o GPT|Sitio web o app con React & TypeScript|Integración WhatsApp y CRM|Automatización de leads y formularios|Soporte prioritario 3 meses",
    en: "Smart workflows with Gemini or GPT|Website or app with React & TypeScript|WhatsApp and CRM integration|Lead and form automation|Priority support 3 months",
  },
  "services.p3.name": { es: "Ecosistema Inteligente", en: "Smart Ecosystem" },
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

  // Why
  "why.label": { es: "¿POR QUÉ MAFETECH?", en: "WHY MAFETECH?" },
  "why.title": { es: "Automation Developer con visión de negocio", en: "Automation Developer with business vision" },
  "why.b1": { es: "Especialización real en n8n y AI Automation: workflows de producción, no prototipos", en: "Real n8n and AI Automation expertise: production-grade workflows, not prototypes" },
  "why.b2": { es: "n8n self-hosted disponible: tus datos en tus servidores, cumpliendo Ley 25.326", en: "Self-hosted n8n available: your data on your servers, GDPR-compatible" },
  "why.b3": { es: "Perfil híbrido único: Automation Developer + Frontend React en una sola persona", en: "Unique hybrid profile: Automation Developer + React Frontend in one person" },
  "why.b4": { es: "Documentación técnica completa en cada proyecto. Sin letra chica, sin dependencias", en: "Full technical documentation on every project. No fine print, no lock-in" },

  // Process
  "process.title": { es: "Cómo trabajamos", en: "How we work" },
  "process.s1.title": { es: "Diagnóstico gratuito", en: "Free diagnosis" },
  "process.s1.desc": { es: "15 minutos para identificar oportunidades de mejora en tu negocio.", en: "15 minutes to identify improvement opportunities in your business." },
  "process.s2.title": { es: "Propuesta personalizada", en: "Custom proposal" },
  "process.s2.desc": { es: "3 opciones de alcance y precio adaptadas a tu realidad.", en: "3 scope and pricing options adapted to your reality." },
  "process.s3.title": { es: "Implementación por sprints", en: "Sprint implementation" },
  "process.s3.desc": { es: "Entregables cada 2 semanas. Siempre sabés en qué estamos.", en: "Deliverables every 2 weeks. You always know where we stand." },
  "process.s4.title": { es: "Entrega + soporte", en: "Delivery + support" },
  "process.s4.desc": { es: "Documentación completa y continuidad asegurada.", en: "Complete documentation and ensured continuity." },

  // About
  "about.label": { es: "SOBRE MÍ", en: "ABOUT ME" },
  "about.name": { es: "María Fernanda Moreno", en: "María Fernanda Moreno" },
  "about.role": { es: "Automation Developer · n8n · AI · React & TypeScript", en: "Automation Developer · n8n · AI · React & TypeScript" },
  "about.p1": {
    es: "Soy Automation Developer especializada en Workflow Automation con n8n, AI Automation con Gemini y desarrollo de aplicaciones web con React y TypeScript. Trabajo de forma remota desde Córdoba, Argentina con pymes de Argentina, Latinoamérica y España.",
    en: "I'm an Automation Developer specialized in Workflow Automation with n8n, AI Automation with Gemini and web app development with React and TypeScript. I work remotely from Córdoba, Argentina with SMBs across Argentina, Latin America and Spain.",
  },
  "about.p2": {
    es: "Diseño pipelines que automatizan procesos reales: clasificación de leads, procesamiento de documentos, chatbots en WhatsApp y sistemas de IA conectados a tu negocio. Sin costos ocultos, con documentación completa.",
    en: "I design pipelines that automate real processes: lead classification, document processing, WhatsApp chatbots and AI systems connected to your business. No hidden costs, with full documentation.",
  },

  // CTA
  "cta.title": { es: "¿Querés automatizar procesos en tu negocio?", en: "Want to automate processes in your business?" },
  "cta.subtitle": { es: "Empezamos con un diagnóstico gratuito de 15 minutos para identificar qué podés automatizar.", en: "We start with a free 15-minute diagnosis to identify what you can automate." },
  "cta.btn1": { es: "Agendar diagnóstico", en: "Schedule diagnosis" },
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

  // Footer
  "footer.desc": {
    es: "Automation Developer · Workflow Automation con n8n · AI Automation · React & TypeScript. Córdoba, Argentina — LATAM — España.",
    en: "Automation Developer · Workflow Automation with n8n · AI Automation · React & TypeScript. Córdoba, Argentina — LATAM — Spain.",
  },
  "footer.nav": { es: "Navegación", en: "Navigation" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.location": { es: "Córdoba, Argentina · Atención remota para Argentina, Latinoamérica y España", en: "Córdoba, Argentina · Remote services for Argentina, Latin America and Spain" },
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
