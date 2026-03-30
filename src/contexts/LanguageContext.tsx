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
  "hero.label": { es: "FULL STACK · IA · AUTOMATIZACIÓN", en: "FULL STACK · AI · AUTOMATION" },
  "hero.title": { es: "Tu negocio. Automatizado. Online. Creciendo.", en: "Your business. Automated. Online. Growing." },
  "hero.subtitle": {
    es: "Combino desarrollo web, automatización con IA y marketing digital para transformar pymes en negocios de alto rendimiento. Resultados medibles en 90 días.",
    en: "I combine web development, AI automation and digital marketing to transform SMBs into high-performance businesses. Measurable results in 90 days.",
  },
  "hero.cta1": { es: "Ver servicios", en: "View services" },
  "hero.cta2": { es: "Hablemos", en: "Let's talk" },

  // Value Prop
  "value.title": { es: "Una sola mano. Tres soluciones.", en: "One hand. Three solutions." },
  "value.card1.title": { es: "Sitio web que convierte", en: "Websites that convert" },
  "value.card1.desc": {
    es: "Diseño y desarrollo sitios web enfocados en convertir visitantes en clientes. Rápidos, responsivos y optimizados para SEO.",
    en: "I design and develop websites focused on converting visitors into clients. Fast, responsive and SEO optimized.",
  },
  "value.card2.title": { es: "Automatización con IA", en: "AI Automation" },
  "value.card2.desc": {
    es: "Automatizo procesos repetitivos con n8n, Make e inteligencia artificial. Menos trabajo manual, más resultados.",
    en: "I automate repetitive processes with n8n, Make and AI. Less manual work, more results.",
  },
  "value.card3.title": { es: "Marketing digital estratégico", en: "Strategic digital marketing" },
  "value.card3.desc": {
    es: "Estrategias de marketing digital con métricas claras. SEO, contenido y campañas que generan leads reales.",
    en: "Digital marketing strategies with clear metrics. SEO, content and campaigns that generate real leads.",
  },

  // Services
  "services.title": { es: "Servicios diseñados para crecer", en: "Services designed to grow" },
  "services.consult": { es: "Consultar", en: "Inquire" },
  "services.popular": { es: "Más elegido", en: "Most popular" },
  "services.p1.name": { es: "Presencia Digital", en: "Digital Presence" },
  "services.p1.price": { es: "$600–900 USD", en: "$600–900 USD" },
  "services.p1.items": {
    es: "Landing page profesional|Integración WhatsApp|SEO básico|Diseño responsive|Entrega en 2 semanas",
    en: "Professional landing page|WhatsApp integration|Basic SEO|Responsive design|Delivery in 2 weeks",
  },
  "services.p2.name": { es: "Todo en Uno", en: "All-in-One" },
  "services.p2.price": { es: "$1.800–2.500 USD", en: "$1,800–2,500 USD" },
  "services.p2.items": {
    es: "Sitio web completo (hasta 5 páginas)|Automatización de procesos con IA|Plan de marketing digital 90 días|CRM básico integrado|Soporte prioritario 3 meses",
    en: "Complete website (up to 5 pages)|AI process automation|90-day digital marketing plan|Basic integrated CRM|Priority support 3 months",
  },
  "services.p3.name": { es: "Ecosistema Inteligente", en: "Smart Ecosystem" },
  "services.p3.price": { es: "$3.500–5.000 USD", en: "$3,500–5,000 USD" },
  "services.p3.items": {
    es: "Todo lo del plan anterior|CRM avanzado personalizado|Agentes de IA entrenados|Dashboard de métricas en tiempo real|Soporte y evolución 6 meses",
    en: "Everything from previous plan|Custom advanced CRM|Trained AI agents|Real-time metrics dashboard|Support and evolution 6 months",
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
  "why.title": { es: "La diferencia está en los detalles", en: "The difference is in the details" },
  "why.b1": { es: "Perfil único en Argentina: web + automatización + marketing en una sola persona", en: "Unique profile in Argentina: web + automation + marketing in one person" },
  "why.b2": { es: "Datos en tus servidores: n8n self-hosted, cumplimiento Ley 25.326", en: "Data on your servers: self-hosted n8n, data privacy compliance" },
  "why.b3": { es: "ROI en 90 días: resultados medibles desde el primer mes", en: "ROI in 90 days: measurable results from month one" },
  "why.b4": { es: "Transparencia total: documentación completa, sin letra chica", en: "Full transparency: complete documentation, no fine print" },

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
  "about.role": { es: "Fundadora de MafeTech", en: "Founder of MafeTech" },
  "about.p1": {
    es: "Soy desarrolladora full stack y especialista en automatización con IA. Desde Córdoba, Argentina, trabajo con pymes y emprendedores de toda Latinoamérica y el mundo.",
    en: "I'm a full stack developer and AI automation specialist. From Córdoba, Argentina, I work with SMBs and entrepreneurs across Latin America and globally.",
  },
  "about.p2": {
    es: "Mi enfoque es simple: cada negocio merece herramientas digitales que funcionen de verdad. Sin intermediarios, sin costos ocultos, con resultados medibles.",
    en: "My approach is simple: every business deserves digital tools that actually work. No middlemen, no hidden costs, with measurable results.",
  },

  // CTA
  "cta.title": { es: "¿Listo para transformar tu negocio?", en: "Ready to transform your business?" },
  "cta.subtitle": { es: "Empezamos con una auditoría gratuita de 15 minutos.", en: "We start with a free 15-minute audit." },
  "cta.btn1": { es: "Agendar auditoría", en: "Schedule audit" },
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
    es: "Transformamos tu negocio con web, automatización e IA — todo en una sola mano.",
    en: "We transform your business with web, automation & AI — all in one place.",
  },
  "footer.nav": { es: "Navegación", en: "Navigation" },
  "footer.contact": { es: "Contacto", en: "Contact" },
  "footer.location": { es: "Córdoba, Argentina · Trabajamos con clientes en LATAM y global", en: "Córdoba, Argentina · Working with clients in LATAM and globally" },
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
