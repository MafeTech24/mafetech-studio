import React, { createContext, useContext, ReactNode } from "react";

export type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;

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
  "faq.5.a": { es: "Dependen del alcance del proyecto y de lo que ya tengas preparado, como textos, fotos o un sitio existente. Después de la primera charla, te presento una propuesta con lo que incluye el trabajo, el presupuesto y el plazo estimado.", en: "They depend on the scope of the project and what you already have, such as copy, photos, or an existing website. After our first conversation, I send you a proposal outlining what is included, the cost, and the estimated timeline." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, lang }: { children: ReactNode; lang: Lang }) => {


  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
