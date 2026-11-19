import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider, type Lang } from "@/contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = ({ lang = "es", prerender = false }: { lang?: Lang; prerender?: boolean }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider lang={lang}>
        <Sonner />
        {prerender ? <Index /> : <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>}
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
