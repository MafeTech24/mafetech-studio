import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  return (
    <section id="preguntas" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-12">{t("faq.title")}</h2>
        {[1, 2, 3, 4, 5].map((id) => (
          <details className="border-b border-border py-5" key={id}>
            <summary className="cursor-pointer font-semibold marker:text-primary">{t(`faq.${id}.q`)}</summary>
            <p className="mt-3 text-muted-foreground copy-size">{t(`faq.${id}.a`)}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
