import { renderToString } from "react-dom/server";
import App from "./App";
import type { Lang } from "./contexts/LanguageContext";

export function render(lang: Lang) {
  return renderToString(<App lang={lang} prerender />);
}
