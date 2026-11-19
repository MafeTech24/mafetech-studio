import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const lang = /^\/en\/?$/.test(window.location.pathname) ? "en" : "es";
document.documentElement.lang = lang;
const app = <App lang={lang} />;

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
