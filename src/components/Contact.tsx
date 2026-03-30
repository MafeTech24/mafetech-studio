import { useState, FormEvent } from "react";
import { Send, MessageSquare, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollAnimation from "./ScrollAnimation";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Por favor completá los campos requeridos");
      return;
    }
    toast.success("Mensaje enviado — te responderemos pronto");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputClass = "w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground font-sans text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors";

  return (
    <section id="contacto" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
            {t("contact.title")}
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <ScrollAnimation className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder={t("contact.name")}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                maxLength={100}
              />
              <input
                type="email"
                placeholder={t("contact.email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                maxLength={255}
              />
              <input
                type="tel"
                placeholder={t("contact.phone")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                maxLength={20}
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className={inputClass}
              >
                <option value="">{t("contact.select")}</option>
                <option value="presencia">{t("contact.s1")}</option>
                <option value="todo-en-uno">{t("contact.s2")}</option>
                <option value="ecosistema">{t("contact.s3")}</option>
                <option value="otro">{t("contact.s4")}</option>
              </select>
              <textarea
                placeholder={t("contact.message")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={inputClass + " resize-none"}
                maxLength={1000}
              />
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={16} /> {t("contact.send")}
              </button>
            </form>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} className="md:col-span-2">
            <div className="space-y-6">
              <p className="text-muted-foreground font-sans text-sm">{t("contact.response")}</p>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5493513456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  <MessageSquare size={18} className="text-primary" />
                  WhatsApp directo
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  <Linkedin size={18} className="text-primary" />
                  LinkedIn
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-muted-foreground font-sans text-xs">
                  mafetech@gmail.com
                </p>
                <p className="text-muted-foreground font-sans text-xs mt-1">
                  Córdoba, Argentina
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
