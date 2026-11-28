import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

/** Renders a route to static HTML at build time (used by scripts/prerender.mjs). */
export const render = (url: string) =>
  renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>,
  );
