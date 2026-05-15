// ─── Project image imports ──────────────────────────────────────────────────
import sentimientosGemini from "../assets/sentimientosGemini.jpg";
import triageHospitalario from "../assets/triageHospitalario.jpg";
import tonioMiniMarket from "../assets/tonioMiniMarket.jpg";
import arquetipoIA from "../assets/arquetipoIA.jpg";
import bannerPrettyLady from "../assets/bannerPrettyLady.jpg";
import amoblamientosElReyNorte from "../assets/amoblamientosElReyNorte.jpg";
import leadFlowAI from "../assets/leadFlowAI.jpg";
import aiEmailProcessing from "../assets/aiEmailProcessing.jpg";
import errorHandler from "../assets/errorHandler.jpg";
import flujoExitoso from "../assets/7.flujoExitoso.jpg";
import chatbotFurnarius from "../assets/chatbotFurnarius.jpg";
import conexionLLMS from "../assets/conexionLLMS.jpg";
import patitasFelices from "../assets/patitasFelices.jpg";
import emilyHair from "../assets/emilyHair.jpg";
import furnarius from "../assets/furnarius.jpg";
import elReyNorte from "../assets/elReyNorte.jpg";
// artesani&beta.jpg — special char handled via URL
import logoPyM from "../assets/logoPyM.jpg";
import n8nWorkflow from "../assets/n8n-workflow.jpg";

export type ProjectCategory = "Automatización" | "Desarrollo Web" | "E-commerce";

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
  // ── Automatización ─────────────────────────────────────────────────────────
  {
    id: "triage-hospitalario-hitl",
    isFeatured: true,
    category: "Automatización",
    title: "Sistema de Triage Automático de Derivaciones Hospitalarias con IA y Human-in-the-Loop",
    problem:
      "En hospitales argentinos, la clasificación manual de derivaciones médicas entrantes toma entre 48 y 72 horas, genera errores de clasificación, sobrecarga de especialidades y falta de trazabilidad para auditorías regulatorias.",
    solution:
      "Sistema de automatización avanzado que recibe derivaciones desde múltiples canales (HIS/EHR vía FHIR, PDFs, WhatsApp), las procesa de forma multimodal (texto + imágenes RX/TC), consulta guías clínicas actualizadas mediante RAG sobre base vectorial, genera clasificación con score de confianza y escala los casos ambiguos a revisión médica humana. Ciclo de auto-mejora continua basado en feedback de médicos revisores.",
    stack: ["n8n (self-hosted Docker)", "Gemini 2.5 Flash", "Gemini 2.5 Pro", "Supabase pgvector", "RAG", "LlamaCloud", "NotebookLM", "Retool (HITL)", "Grafana + Loki", "FHIR R4", "JavaScript", "Docker Compose"],
    contribution:
      "• Diseño de arquitectura multimodal con 5 capas: ingesta, orquestación n8n, RAG vectorial, HITL y observabilidad\n• Implementación de pipeline RAG con indexación offline (batch semanal) y consulta online (<3s p95)\n• Integración multimodal texto + imagen (RX/TC) con Gemini 2.5 Flash\n• Sistema HITL en Retool con criterios de escalación explícitos y SLA diferenciado por urgencia\n• Pipeline de evaluación automática semanal con métricas accuracy y F1\n• Observabilidad completa con logs estructurados JSON, Grafana + Loki y alertas PagerDuty\n• Anonimización de datos clínicos cumpliendo Ley 25.326\n• Documentación técnica profesional de 15 páginas con diagramas de arquitectura\n• Proyecto Final Integrador — AI Automation Avanzado, Coderhouse",
    image: triageHospitalario,
    documentUrl: "https://docs.google.com/document/d/1glkRixnXd3rUrWGr4Au9xSsqLFpNz2D3kgqsVnKby4U/edit?usp=sharing",
  },
  {
    id: "leadflow-ai-n8n",
    category: "Automatización",
    title: "LeadFlow AI — Pipeline de Clasificación Inteligente de Leads con n8n y Gemini AI",
    problem:
      "La clasificación manual de leads comerciales consume tiempo del equipo de ventas y genera demoras en el seguimiento de oportunidades urgentes. Sin automatización, los leads calientes pueden perderse entre decenas de consultas sin priorización.",
    solution:
      "Pipeline de automatización con n8n de arquitectura modular que captura leads vía webhook, valida y normaliza el input, clasifica automáticamente con Gemini AI (score 1–10, hot/warm/cold), persiste en Google Sheets y envía alertas por email cuando detecta un lead caliente.",
    stack: ["n8n", "JavaScript", "Gemini AI", "Google Sheets API", "Gmail API", "Webhooks", "REST APIs", "Modular Architecture"],
    contribution:
      "• Diseño de arquitectura modular con 3 sub-workflows reutilizables e independientes\n• Integración con Gemini 2.0 Flash para clasificación estructurada con schema forzado\n• Persistencia automática en Google Sheets con trazabilidad completa por execution_id\n• Sistema de alertas por Gmail para leads con categoría HOT\n• Pipeline probado end-to-end con datos reales en n8n Cloud\n• Documentación profesional con README, .env.example y setup en 5 minutos",
    image: leadFlowAI,
    repoUrl: "https://github.com/MafeTech24/LeadFlow-AI",
  },
  {
    id: "ai-email-document-intelligence-n8n",
    category: "Automatización",
    title: "AI Document Intelligence Pipeline — Automatización End-to-End de Documentos desde Email con OCR e IA",
    problem:
      "El procesamiento manual de facturas y documentos administrativos consume tiempo, es propenso a errores y limita la escalabilidad operativa. Las empresas necesitan automatizar la captura, análisis y registro de documentos recibidos por email sin intervención humana.",
    solution:
      "Pipeline de Document Intelligence con n8n que monitorea emails entrantes, detecta adjuntos automáticamente, extrae texto mediante OCR, analiza el contenido con IA y registra los datos estructurados en Google Sheets, almacenando los archivos originales en Google Drive.",
    stack: ["n8n", "JavaScript", "Gmail API", "Google Sheets API", "Google Drive API", "OCR Integration", "AI Integration", "Email Automation"],
    contribution:
      "• Integración con Gmail API para captura automática de documentos entrantes\n• Implementación de extracción de texto mediante OCR para PDF e imágenes\n• Integración de IA para análisis y estructuración de datos\n• Desarrollo de lógica de clasificación automática mediante nodos Switch\n• Persistencia estructurada en Google Sheets para auditoría\n• Almacenamiento automático en Google Drive\n• Manejo de errores y fallback para archivos inválidos",
    image: aiEmailProcessing,
    repoUrl: "https://github.com/MafeTech24/ai-email-document-processing-n8n",
  },
  {
    id: "production-grade-error-handling-n8n",
    category: "Automatización",
    title: "Sistema Global de Manejo de Errores y Alertas en Tiempo Real para Automatizaciones",
    problem:
      "Las automatizaciones suelen fallar en silencio, generando pérdida de datos e interrupciones operativas. Sin un sistema centralizado de monitoreo, los errores pueden pasar desapercibidos durante horas o días.",
    solution:
      "Sistema global con n8n que captura automáticamente cualquier fallo en workflows, normaliza los datos del error, los registra en Google Sheets para auditoría persistente y envía alertas en tiempo real vía email.",
    stack: ["n8n", "JavaScript", "Google Sheets API", "Gmail API", "Error Monitoring", "Observability", "Reliability Engineering"],
    contribution:
      "• Implementación de Error Trigger para captura automática de fallos en tiempo real\n• Lógica de normalización de errores en JavaScript\n• Persistencia de logs en Google Sheets para auditoría completa\n• Integración de sistema de alertas automáticas vía Gmail\n• Configuración segura mediante variables de entorno\n• Arquitectura reusable para cualquier workflow",
    image: errorHandler,
    repoUrl: "https://github.com/MafeTech24/production-grade-error-handling-n8n",
  },
  {
    id: "gemini-document-processing-pipeline",
    category: "Automatización",
    title: "Sistema Backend de Procesamiento Documental con Gemini AI, Supabase y Confidence Scoring",
    problem:
      "La recepción de documentos desde múltiples sistemas requiere validación, normalización y almacenamiento confiable. Sin un pipeline automatizado, los datos pueden perderse, duplicarse o procesarse incorrectamente.",
    solution:
      "Pipeline backend con n8n que recibe documentos vía webhook, extrae datos estructurados con Gemini AI, calcula un puntaje de confianza automático, registra los resultados en Supabase y genera dashboards en Google Sheets.",
    stack: ["n8n", "Gemini AI", "Supabase", "Google Sheets API", "JavaScript", "REST APIs", "Confidence Scoring", "Backend Architecture"],
    contribution:
      "• Diseño de arquitectura backend API-First\n• Integración con Gemini AI para extracción inteligente de datos\n• Implementación de confidence scoring automático\n• Persistencia estructurada en Supabase\n• Dashboards en Google Sheets para monitoreo en tiempo real\n• Pipeline reusable listo para producción",
    image: flujoExitoso,
    repoUrl: "https://github.com/MafeTech24/n8n-procesamientoDocsEnd2End",
  },
  {
    id: "analisis-sentimientos-gemini",
    category: "Automatización",
    title: "Sistema de Análisis de Sentimientos de Tweets con n8n y Gemini",
    problem:
      "Las empresas necesitan monitorear en tiempo real el tono de las menciones en redes sociales, pero el análisis manual es lento y no escala.",
    solution:
      "Pipeline de automatización en n8n que captura tweets vía webhook, los clasifica por sentimiento (positivo, negativo, neutro) usando Gemini AI y genera reportes estructurados automáticamente. Implementado en instancia Docker local.",
    stack: ["n8n", "Gemini AI", "JavaScript", "Docker", "Webhooks", "JSON", "GitHub"],
    contribution:
      "• Diseño e implementación del pipeline completo en n8n\n• Integración con Gemini AI para clasificación de sentimientos\n• Configuración de instancia n8n self-hosted en Docker\n• Debugging de integración Gemini (token requirements, JSON parsing)\n• Documentación técnica y publicación en GitHub\n• Proyecto final de la Carrera AI Automation — Coderhouse",
    image: sentimientosGemini,
  },
  {
    id: "chatbot-furnarius",
    category: "Automatización",
    title: "Asistente Inteligente de CX — Chatbot de Audio y Texto con IA",
    problem:
      "Falta de respuesta inmediata a consultas complejas de ambientación y mobiliario, afectando la conversión de clientes potenciales.",
    solution:
      "Flujo de IA conversacional que procesa entradas de audio y texto, automatizando la calificación de leads y la respuesta personalizada mediante modelos de lenguaje avanzados.",
    stack: ["n8n", "Webhooks", "IA / LLM", "HTTP Request", "WhatsApp API"],
    contribution:
      "• Diseño de flujo lógico para el procesamiento de archivos de audio\n• Implementación de nodos de decisión (Switch) para rutas de atención\n• Integración de agentes de IA para respuestas naturales y contextuales\n• Optimización de la experiencia del usuario (CX) en el canal de contacto",
    image: chatbotFurnarius,
  },
  {
    id: "chatbot-llm-oracle",
    category: "Automatización",
    title: "Arquitectura de Chatbot con Lógica de Datos Asíncrona",
    problem:
      "Dificultad de los sistemas tradicionales para gestionar consultas complejas que requieren tiempos de procesamiento variables sin bloquear la experiencia del usuario.",
    solution:
      "Motor de consultas inteligente que conecta con LLMs de última generación. Implementa nodos de espera y división de datos para garantizar respuestas precisas y fluidas en cualquier volumen de demanda.",
    stack: ["n8n", "LLM Integration", "Advanced Logic Nodes", "JSON Manipulation"],
    contribution:
      "• Desarrollo de una interfaz de comunicación fluida con agentes de IA\n• Implementación de lógica de 'Split Out' para descomponer consultas complejas\n• Gestión de latencia mediante nodos de espera controlada\n• Arquitectura certificada bajo estándares de Oracle Next Education",
    image: conexionLLMS,
  },
  {
    id: "n8n-reuniones",
    category: "Automatización",
    title: "Sistema de Actas e Insights con IA (Google Workspace)",
    problem:
      "Procesamiento manual de grabaciones de reuniones, resultando en pérdida de información crítica y falta de seguimiento de tareas.",
    solution:
      "Arquitectura de flujo automatizado que transforma audio en documentos de gestión. Utiliza IA para extraer puntos clave y actualizar tableros Kanban de forma autónoma.",
    stack: ["n8n", "Google Drive", "Google Docs", "Google Sheets", "IA (LLM)"],
    contribution:
      "• Ingeniería de prompts para la extracción precisa de tareas\n• Integración de APIs de Google para gestión documental\n• Diseño de lógica de actualización asíncrona en Sheets\n• Testing de precisión en transcripción y categorización",
    image: n8nWorkflow,
  },

  // ── Desarrollo Web ─────────────────────────────────────────────────────────
  {
    id: "arquetipo-ia",
    category: "Desarrollo Web",
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
    repoUrl: "https://github.com/MafeTech24/patitasFelices",
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
    repoUrl: "https://github.com/MafeTech24/emilyHair",
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
    id: "elReydelNorte",
    category: "E-commerce",
    title: "Amoblamientos El Rey del Norte — Catálogo Digital Estratégico (v1)",
    problem:
      "Falta de un canal centralizado para exhibir stock, lo que generaba procesos de venta lentos y una imagen de marca informal frente a la competencia.",
    solution:
      "Catálogo interactivo optimizado para conversión con interfaz visualmente imponente que organiza productos por categorías, facilitando la decisión de compra del cliente final.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub", "Lovable (IA)"],
    contribution:
      "• Consultoría de negocio para definir la jerarquía de productos\n• Diseño de UI enfocado en la visualización de alta calidad\n• Estructura escalable para actualización constante de stock\n• Optimización de velocidad de carga para dispositivos móviles",
    image: elReyNorte,
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
