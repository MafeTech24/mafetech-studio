import { Monitor, Search, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";

const cards = [
  { icon: Monitor, titleKey: "value.card1.title", descKey: "value.card1.desc" },
  { icon: Search, titleKey: "value.card2.title", descKey: "value.card2.desc" },
  { icon: Target, titleKey: "value.card3.title", descKey: "value.card3.desc" },
];

const ecosystemCopy = {
  es: {
    title: "Tu web, tu ecosistema digital",
    body: (
      <>
        <p>{"Para un "}<strong>profesional, emprendedor o comerciante</strong>{", tener presencia digital es fundamental para facilitar que las personas te encuentren, entiendan qué ofrecés y sepan cómo dar el próximo paso. Pueden descubrirte en redes, en un buscador o al consultar una herramienta de inteligencia artificial. Tu web reúne TODO lo que necesitan para conocerte mejor, ver tus trabajos, explorar tus servicios y contactarte."}</p>
        <p>{"Cada canal cumple una función. Tus redes te ayudan a mostrar lo que ofrecés y conversar con tu público. Desde ellas podés llevar a las personas a tu web para ampliar la información, pedir un turno, reservar o escribirte por WhatsApp. Y desde tu sitio también pueden ir a tus redes y seguir en contacto con vos."}</p>
        <p>{"Eso es un "}<strong>ecosistema digital</strong>{". Según lo que necesite tu proyecto, te ayudo a conectar tu web, tus redes y tus canales de atención. Si recibís muchas consultas o repetís los mismos pasos todos los días, también podemos "}<strong>automatizar</strong>{" parte de ese recorrido. Y si necesitás definir a quién querés llegar, qué comunicar y en qué canales enfocarte, puedo ayudarte a armar un "}<strong>plan de marketing digital personalizado</strong>{"."}</p>
      </>
    ),
  },
  en: {
    title: "Your website, your digital ecosystem",
    body: (
      <>
        <p>{"For a "}<strong>professional, entrepreneur or business owner</strong>{", having an online presence is essential. It makes it easier for people to find you, understand what you offer, and know what to do next. They can discover you on social media, through a search engine, or by using an AI tool. Your website brings together EVERYTHING they need to learn more about you, see your work, explore your services, and get in touch."}</p>
        <p>{"Each channel has a role. Social media helps you show what you offer and talk with your audience. From there, you can bring people to your website to learn more, make an appointment or reservation, or message you on WhatsApp. From your website, they can also visit your social profiles and stay in touch."}</p>
        <p>{"That’s a "}<strong>digital ecosystem</strong>{". Depending on your project, I help you connect your website, social profiles, and customer contact channels. If you receive a lot of inquiries or repeat the same steps every day, we can also "}<strong>automate</strong>{" part of that journey. And if you need to decide who you want to reach, what to say, and which channels to focus on, I can help you put together a "}<strong>personalized digital marketing plan</strong>{"."}</p>
      </>
    ),
  },
};

const ValueProposition = () => {
  const { lang, t } = useLanguage();
  const ecosystem = ecosystemCopy[lang];

  return (
    <section id="valor" className="bg-[radial-gradient(ellipse_at_top,#211a31_0%,#1a1626_58%,#15131d_100%)] py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-center text-foreground mb-4">
            {t("value.title")}
          </h2>
          <p className="text-center copy-size font-sans font-medium text-[#b8bfcd] max-w-2xl mx-auto mb-16">{t("value.intro")}</p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <ScrollAnimation key={card.titleKey} delay={i * 0.15}>
              <div className="group card-glow h-full rounded-2xl border border-[#3e3649] bg-gradient-to-b from-[#15141a] to-[#100f14] px-6 py-8 text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--icon-accent)] bg-transparent">
                  <card.icon className="card-glow-icon text-[color:var(--icon-accent)]" size={22} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-balance font-serif text-2xl font-normal leading-snug tracking-tight text-foreground">{t(card.titleKey)}</h3>
                <p className="mx-auto max-w-xs font-sans card-description text-[#c2c7d1]">{t(card.descKey)}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div id="ecosistema-digital" className="mx-auto mt-16 max-w-5xl rounded-2xl border border-border bg-card/45 px-6 py-8 md:px-10 md:py-10">
          <h3 className="mb-5 text-balance text-center text-2xl font-medium md:text-3xl">{ecosystem.title}</h3>
          <div className="copy-size mx-auto max-w-3xl space-y-4 text-justify hyphens-auto text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground">
            {ecosystem.body}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
