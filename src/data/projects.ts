// ─── Project image imports ──────────────────────────────────────────────────
import tonioMiniMarket from "../assets/tonioMiniMarket.jpg";
import arquetipoIA from "../assets/arquetipoIA.jpg";
import bannerPrettyLady from "../assets/bannerPrettyLady.jpg";
import amoblamientosElReyNorte from "../assets/amoblamientosElReyNorte.jpg";
import patitasFelices from "../assets/patitasFelices.jpg";
import emilyHair from "../assets/emilyHair.jpg";
import furnarius from "../assets/furnarius.jpg";
// artesani&beta.jpg — special char handled via URL

export type ProjectCategory = "Aplicación Web" | "Desarrollo Web" | "E-commerce";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  problem: string;
  solution: string;
  stack: string[];
  contribution: string;
  image: string;
  isFeatured?: boolean;
  liveUrl?: string;
  repoUrl?: string;
  documentUrl?: string;
}

export const projects: Project[] = [


  // ── Desarrollo Web ─────────────────────────────────────────────────────────
  {
    id: "arquetipo-ia",
    category: "Aplicación Web",
    title: "ArquetipoIA — Generador de Buyer Personas con Gemini AI",
    problem:
      "Freelancers y agencias de LATAM pierden tiempo construyendo buyer personas manualmente, sin una herramienta accesible, en español y adaptada a la realidad del mercado regional.",
    solution:
      "Aplicación web con modelo freemium que genera buyer personas detallados a partir de datos del negocio del usuario, impulsada por Gemini AI. Incluye analítica con PostHog, arquitectura escalable en Supabase y deploy en Vercel.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Gemini AI", "Supabase", "PostHog", "Vercel"],
    contribution:
      "• Diseño e implementación completa de la aplicación frontend\n• Integración con Gemini AI para generación estructurada de buyer personas\n• Implementación de modelo freemium con límites por usuario\n• Analytics con PostHog para tracking de uso y conversión\n• Persistencia de datos en Supabase\n• Deploy en Vercel con dominio personalizado\n• Proyecto final del curso 'Creación de Productos desde Cero con IA' — Coderhouse",
    image: arquetipoIA,
    liveUrl: "https://arquetipo-ia-entrega-final.vercel.app/",
  },
  {
    id: "patitas-felices-grooming-web-app",
    category: "Desarrollo Web",
    title: "Patitas Felices — Plataforma Web de Grooming con Sistema de Turnos e Integración WhatsApp",
    problem:
      "Las peluquerías caninas suelen gestionar turnos manualmente por WhatsApp o teléfono, generando pérdida de información y consultas incompletas. Muchas carecen de presencia digital profesional.",
    solution:
      "Aplicación web profesional en React + TypeScript que digitaliza la reserva de turnos con captura estructurada de datos de la mascota y generación automática de mensajes para WhatsApp. Incluye galería interactiva de transformaciones.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Radix UI", "WhatsApp Deep Linking"],
    contribution:
      "• Implementación de sistema de reserva con captura estructurada de datos de la mascota\n• Integración con WhatsApp mediante generación automática de mensajes formateados\n• Desarrollo de galería interactiva 'Antes y Después' con lógica dinámica\n• Interfaz responsive mobile-first con animaciones Framer Motion\n• Deploy completo en Vercel con CI desde GitHub",
    image: patitasFelices,
    liveUrl: "https://patitasfelices-spa.vercel.app/",   
  },
  {
    id: "emily-hair-studio-web-app",
    category: "Desarrollo Web",
    title: "Emily Hair Studio — Plataforma Web con Diagnóstico Inteligente e Integración WhatsApp",
    problem:
      "Los salones de belleza reciben consultas incompletas por WhatsApp, generando múltiples intercambios innecesarios y pérdida de tiempo operativo. Muchos carecen de presencia digital optimizada para conversión.",
    solution:
      "Aplicación web que digitaliza la pre-consulta mediante un sistema de diagnóstico capilar inteligente. Captura datos estructurados, permite adjuntar imágenes y genera automáticamente un mensaje formateado para WhatsApp.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "WhatsApp Deep Linking"],
    contribution:
      "• Desarrollo de sistema de diagnóstico interactivo con validación y generación dinámica de mensajes\n• Integración con WhatsApp mediante deep linking y payload estructurado\n• Carga de imágenes desde el cliente como parte del flujo de diagnóstico\n• Animaciones avanzadas con Framer Motion\n• Deploy en Vercel con pipeline de CI desde GitHub",
    image: emilyHair,
    liveUrl: "https://emilyhairstudio.vercel.app/",
  },
  {
    id: "furnariusEventos",
    category: "Desarrollo Web",
    title: "Furnarius Eventos — Sitio Web Institucional",
    problem:
      "Empresa del rubro eventos sin presencia digital profesional, lo que limitaba su visibilidad, comunicación de servicios y captación de nuevos clientes.",
    solution:
      "Experiencia web inmersiva utilizando IA para la generación de prototipos visuales de alta fidelidad. Comunicación clara de servicios personalizados y vitrina de proyectos ejecutados.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
    contribution:
      "• Relevamiento estratégico de objetivos de negocio y CX\n• Uso de IA Generativa para recursos gráficos de alto impacto\n• Arquitectura de UI orientada a la generación de leads\n• Optimización de performance para carga de galerías de alta resolución",
    image: furnarius,
    liveUrl: "https://furnarius-eventos.vercel.app/",
  },

  // ── E-commerce ─────────────────────────────────────────────────────────────
  {
    id: "tonio-minimarket",
    category: "E-commerce",
    title: "Tonio MiniMarket — E-commerce con Checkout Inteligente y Delivery con Geolocalización",
    problem:
      "Despensa y pollería del barrio sin presencia digital, con pedidos gestionados por WhatsApp manualmente. Necesitaban un canal de ventas online accesible para adultos mayores y clientes del barrio.",
    solution:
      "Aplicación web de minimarket con catálogo de 60+ productos en 7 categorías, checkout en 3 pasos, cálculo automático de costo de delivery por distancia usando Haversine + OpenStreetMap Nominatim, pago en efectivo/transferencia y persistencia completa en Supabase.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "WhatsApp Deep Linking", "OpenStreetMap Nominatim", "Haversine", "html2canvas", "Vercel"],
    contribution:
      "• Catálogo con 60+ productos y sistema de ofertas con carrusel de imágenes\n• Checkout en 3 pasos con formulario de cliente y toggle delivery/retiro\n• Cálculo de costo de delivery en tiempo real con Haversine + Nominatim\n• Integración con Supabase para persistencia de pedidos\n• Generación de ticket en html2canvas y dispatch dual por WhatsApp\n• UX optimizada para adultos mayores y usuarios con poca experiencia digital",
    image: tonioMiniMarket,
    liveUrl: "https://toniominimarketnew.vercel.app/",
  },
  {
    id: "pretty-lady-boutique",
    category: "E-commerce",
    title: "Pretty Lady Boutique — E-commerce Premium con Personal Shopper IA",
    problem:
      "Necesidad de demostrar una experiencia e-commerce de moda femenina premium con asistencia inteligente integrada, diferenciada por diseño sofisticado y funcionalidad real.",
    solution:
      "E-commerce full con estética glassmorphism, chatbot personal shopper con Gemini 2.5 Flash conectado al inventario real en Supabase, carrito completo con variantes de talla y color, checkout simulado y dashboard de productos en tiempo real.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Shadcn/UI", "Framer Motion", "Supabase", "Gemini 2.5 Flash", "React Query", "Vercel"],
    contribution:
      "• Integración de chatbot Personal Shopper con Gemini 2.5 Flash conectado al inventario real de Supabase\n• Carrito con gestión de variantes (talla/color) y persistencia\n• Diseño premium con glassmorphism y animaciones Framer Motion\n• Gestión de inventario en tiempo real con Supabase PostgreSQL\n• Diseño 100% responsive mobile-first\n• Deploy en Vercel con pipeline de CI desde GitHub",
    image: bannerPrettyLady,
    liveUrl: "https://pretty-lady-boutique.vercel.app/",
  },
  {
    id: "amoblamientos-rey-norte",
    category: "E-commerce",
    title: "Amoblamientos El Rey del Norte — Catálogo Digital con IA y WhatsApp",
    problem:
      "Mueblería artesanal de Córdoba sin presencia digital, con catálogo disperso y sin canal centralizado para mostrar productos a medida ni captar consultas de nuevos clientes.",
    solution:
      "Landing page premium con catálogo filtrable por categoría (Cocinas, Baño, Dormitorio, Living, Almacenaje, Exterior), detalle individual de cada producto, integración directa con WhatsApp y Google Maps.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "WhatsApp Deep Linking", "Google Maps", "Vercel", "Lovable (IA)"],
    contribution:
      "• Relevamiento del negocio y catalogación completa de productos desde imágenes\n• Catálogo filtrable por categoría con detalle de materiales y dimensiones\n• Integración de WhatsApp flotante para consultas directas\n• Embed de Google Maps para localización del local\n• Optimización mobile-first",
    image: amoblamientosElReyNorte,
    liveUrl: "https://amoblamientoselreydelnorte.vercel.app/",
  },

  {
    id: "artesaniaVeta",
    category: "E-commerce",
    title: "Artesanía & Veta — E-commerce de Lujo con IA Integrada",
    problem:
      "Necesidad de transformar un catálogo estático en una experiencia de compra premium y personalizada que incluya herramientas de asistencia inteligente.",
    solution:
      "Plataforma e-commerce de alta gama iniciada con Vibe Coding y refinada manualmente. Incluye chatbot inteligente y un Diseñador de muebles asistido por IA (Google AI Studio).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Google AI Studio", "Vercel", "Lovable (IA)"],
    contribution:
      "• Desarrollo de arquitectura e-commerce y refinamiento manual en TypeScript\n• Diseño e integración de interfaz para Chatbot y Diseñador de muebles asistido por IA\n• Implementación de la lógica de conexión con Google AI Studio\n• Gestión de base de datos con Supabase para administración dinámica de productos",
    image: new URL("../assets/artesani&beta.jpg", import.meta.url).href,
    liveUrl: "https://artesaniaveta.vercel.app/",
  },/*
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
