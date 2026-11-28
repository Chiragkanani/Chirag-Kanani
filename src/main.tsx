import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Production HTML is prerendered (scripts/prerender.mjs) and tagged with the route it was rendered for.
// Hydrate only when that matches the current URL; otherwise (dev server, or a host that falls back
// to index.html for unknown paths) render from scratch.
const currentRoute = window.location.pathname === "/" ? "home" : "not-found";
if (container.hasChildNodes() && container.dataset.route === currentRoute) {
  hydrateRoot(container, app);
} else {
  container.replaceChildren();
  createRoot(container).render(app);
}
