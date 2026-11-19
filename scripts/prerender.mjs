import { mkdir, readFile, writeFile } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";

const origin = "https://www.mafetech.net/";
const dist = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");
const indexable = process.argv.includes("--indexable");
const pages = {
  es: {
    path: "",
    title: "MafeTech | Diseño web a medida y SEO en Córdoba",
    description: "Diseño sitios web personalizados y trabajo su posicionamiento en buscadores y herramientas de IA. También ofrezco automatización y estrategia digital desde Córdoba.",
    locale: "es_AR",
    alternateLocale: "en_US",
    services: ["Diseño y desarrollo web a medida", "SEO y visibilidad digital", "Automatización de procesos", "Estrategia de marketing digital"],
  },
  en: {
    path: "en/",
    title: "MafeTech | Custom Web Design and SEO in Córdoba",
    description: "I design custom websites and improve their visibility in search engines and AI tools. I also offer automation and digital strategy from Córdoba, Argentina.",
    locale: "en_US",
    alternateLocale: "es_AR",
    services: ["Custom website design and development", "SEO and digital visibility", "Process automation", "Digital marketing strategy"],
  },
};

const businessId = origin + "#mafetech";
const founderId = origin + "#maria-fernanda-moreno";
const siteId = origin + "#website";

for (const [lang, page] of Object.entries(pages)) {
  const url = new URL(page.path, origin).href;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": founderId,
        name: "María Fernanda Moreno",
        url: origin + "#sobre-mi",
        sameAs: ["https://www.linkedin.com/in/mafetechdev/"],
      },
      {
        "@type": "Organization",
        "@id": businessId,
        name: "MafeTech",
        url: origin,
        logo: origin + "mafetech-social.jpg",
        founder: { "@id": founderId },
        location: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Córdoba",
            addressRegion: "Córdoba",
            addressCountry: "AR",
          },
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        name: "MafeTech",
        url: origin,
        inLanguage: ["es", "en"],
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": url + "#webpage",
        url,
        name: page.title,
        description: page.description,
        inLanguage: lang,
        isPartOf: { "@id": siteId },
        about: { "@id": businessId },
      },
      ...page.services.map((name) => ({
        "@type": "Service",
        name,
        url: url + "#servicios",
        provider: { "@id": businessId },
      })),
    ],
  };

  const html = template
    .replace('<html lang="es"', '<html lang="' + lang + '"')
    .replaceAll(pages.es.title, page.title)
    .replaceAll(pages.es.description, page.description)
    .replace('<link rel="canonical" href="' + origin, '<link rel="canonical" href="' + url)
    .replace('<meta property="og:url" content="' + origin, '<meta property="og:url" content="' + url)
    .replace('property="og:locale" content="es_AR"', 'property="og:locale" content="' + page.locale + '"')
    .replace('property="og:locale:alternate" content="en_US"', 'property="og:locale:alternate" content="' + page.alternateLocale + '"')
    .replace("noindex, nofollow", indexable ? "index, follow, max-image-preview:large" : "noindex, follow")
    .replace("<!-- structured-data -->", () => '<script type="application/ld+json">' + JSON.stringify(schema).replaceAll("<", "\\u003c") + '</script>')
    .replace('<div id="root"></div>', () => '<div id="root">' + render(lang) + '</div>');

  const directory = new URL(page.path, dist);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
}

