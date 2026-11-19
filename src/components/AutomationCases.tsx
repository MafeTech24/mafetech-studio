import { useLanguage } from "@/contexts/LanguageContext";
import hubspot from "@/assets/admisiones-hubspot.jpg";
import academy from "@/assets/automatizacionAcademiaMake.jpg";
import invoices from "@/assets/aiEmailProcessing.jpg";
import meetings from "@/assets/n8n-workflow.jpg";
import leadFlow from "@/assets/leadFlowAI.jpg";
import payments from "@/assets/dashboardTransaccionesFintech.jpg";
import referrals from "@/assets/triageHospitalario.jpg";
import comments from "@/assets/sentimientosGemini.jpg";

const copy = {
  es: {
    title: "Automatizaciones para problemas de todos los días",
    featured: {
      title: "Gestión de consultas de admisión en HubSpot",
      context: "Prototipo probado · HubSpot CRM y CMS, n8n y Gemini",
      description: "Cuando llega una consulta de admisión, el sistema registra en HubSpot su prioridad, el motivo, el estado y la persona responsable de atenderla.",
      outcome: "Si alguien está cerca de inscribirse, abre una oportunidad. Si todavía está evaluando opciones, crea una tarea de seguimiento para un asesor. Las consultas de baja prioridad quedan registradas y los casos que el sistema no puede clasificar pasan a revisión manual.",
    },
    examples: [
      {
        title: "Inscripciones para una academia de idiomas",
        image: academy,
        description: "Diseñé una propuesta que responde preguntas frecuentes, envía los accesos cuando se confirma el pago y avisa al equipo si un alumno deja de entrar.",
        demo: "Ver la demo interactiva",
      },
      {
        title: "Registro de facturas y documentos",
        image: invoices,
        description: "El sistema guarda los adjuntos que llegan por correo y carga sus datos en una planilla, para que el equipo pueda encontrarlos sin volver a escribirlos a mano.",
      },
      {
        title: "De la reunión a las tareas",
        image: meetings,
        description: "A partir de una grabación, el sistema prepara un resumen con las decisiones y agrega las tareas acordadas al tablero del equipo.",
      },
      {
        title: "Qué consultas atender primero",
        image: leadFlow,
        description: "LeadFlow registra las consultas comerciales en una planilla y avisa por correo al equipo cuando llega una que conviene atender pronto.",
      },
      {
        title: "Tablero para entender tus pagos",
        image: payments,
        description: "Conecté una planilla a Looker Studio para consultar montos por fecha, estado, método de pago y país desde un tablero interactivo.",
      },
      {
        title: "Derivaciones hospitalarias con revisión médica",
        image: referrals,
        description: "Diseñé un prototipo que reúne derivaciones de distintos canales, organiza la información y señala los casos dudosos para que los revise el equipo médico.",
      },
      {
        title: "Análisis de comentarios en redes sociales",
        image: comments,
        description: "Probé un sistema que clasifica publicaciones de X como positivas, negativas o neutras y arma un reporte para revisar qué se dice sobre una marca.",
      },
    ],
  },
  en: {
    title: "Automation for everyday problems",
    featured: {
      title: "Managing admissions inquiries in HubSpot",
      context: "Tested prototype · HubSpot CRM and CMS, n8n, and Gemini",
      description: "When an admissions inquiry comes in, the system records its priority, the reason, its status, and the person responsible for following up in HubSpot.",
      outcome: "If someone is ready to enroll, it opens a deal. If they are still weighing their options, it creates a follow-up task for an advisor. Low-priority inquiries stay on record, and cases the system cannot classify go to manual review.",
    },
    examples: [
      {
        title: "Enrollment for a language academy",
        image: academy,
        description: "I designed a proposal to answer common questions, send course access after payment is confirmed, and notify staff when a student stops logging in.",
        demo: "Open the interactive demo",
      },
      {
        title: "Recording invoices and documents",
        image: invoices,
        description: "The system saves email attachments and records their details in a spreadsheet, so the team can find the information without typing it in again.",
      },
      {
        title: "From meeting notes to tasks",
        image: meetings,
        description: "The system summarizes decisions from a meeting recording and adds the agreed tasks to the team's board.",
      },
      {
        title: "Deciding which inquiries to handle first",
        image: leadFlow,
        description: "LeadFlow records sales inquiries in a spreadsheet and emails the team when one needs a prompt response.",
      },
      {
        title: "A dashboard for understanding payments",
        image: payments,
        description: "I connected a spreadsheet to Looker Studio so teams can explore amounts by date, status, payment method, and country in one interactive dashboard.",
      },
      {
        title: "Hospital referrals with clinical review",
        image: referrals,
        description: "I designed a prototype that collects referrals from different channels, organizes the information, and flags unclear cases for review by the medical team.",
      },
      {
        title: "Analyzing social media comments",
        image: comments,
        description: "I tested a system that classifies posts on X as positive, negative, or neutral and creates a report on what people are saying about a brand.",
      },
    ],
  },
};

const academyDemo = "https://showcase-de-automatizaciones-y-webs.vercel.app/automatizacion-academia-idiomas.html";

export default function AutomationCases({ separated }: { separated: boolean }) {
  const { lang } = useLanguage();
  const { title, featured, examples } = copy[lang];

  return (
    <section aria-labelledby="automation-title" className={`mx-auto max-w-5xl ${separated ? "mt-16" : ""}`}>
      <h3 id="automation-title" className="mb-6 text-2xl font-medium md:text-3xl">{title}</h3>
      <article className="card-glow grid overflow-hidden rounded-xl border border-primary/40 bg-card md:grid-cols-[minmax(0,2fr)_minmax(0,5fr)]">
        <img src={hubspot} alt="" loading="lazy" className="h-60 w-full bg-background object-contain md:h-full md:max-h-96" />
        <div className="p-6 md:p-8">
          <h4 className="mb-2 text-2xl font-medium">{featured.title}</h4>
          <p className="mb-4 text-sm font-medium text-primary">{featured.context}</p>
          <p className="card-description text-muted-foreground">{featured.description}</p>
          <p className="card-description mt-3 text-muted-foreground">{featured.outcome}</p>
        </div>
      </article>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {examples.map((example) => (
          <article key={example.title} className="card-glow overflow-hidden rounded-xl border border-border bg-card">
            <img src={example.image} alt="" loading="lazy" className="h-48 w-full bg-background object-contain" />
            <div className="p-6">
              <h4 className="mb-3 text-xl font-medium">{example.title}</h4>
              <p className="card-description text-muted-foreground">{example.description}</p>
              {example.demo && (
                <a href={academyDemo} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-medium text-primary hover:underline">
                  {example.demo} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
