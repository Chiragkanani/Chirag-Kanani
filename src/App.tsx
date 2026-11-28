import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

/**
 * Router-agnostic app shell: the browser entry wraps it in a BrowserRouter,
 * and the prerender entry wraps it in a MemoryRouter.
 */
const App = () => {
  // Tells the page loader in index.html that the app is interactive.
  useEffect(() => {
    document.documentElement.setAttribute("data-app-ready", "");
  }, []);

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
