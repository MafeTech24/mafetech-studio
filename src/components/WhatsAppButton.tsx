import { MessageSquare } from "lucide-react";
import { whatsappLink } from "@/data/contact";

const WhatsAppButton = () => {
  return (
    <a
      href={whatsappLink("Hola Mafe, quiero consultar sobre un servicio")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[color:var(--control-accent)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <MessageSquare size={26} className="text-foreground" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;