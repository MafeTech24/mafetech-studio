import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/543512005107?text=Hola%20Mafe,%20quiero%20consultar%20sobre%20un%20servicio"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="WhatsApp"
    >
      <MessageSquare size={26} className="text-foreground" />
    </a>
  );
};

export default WhatsAppButton;
