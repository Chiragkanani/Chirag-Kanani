import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const MIN_PRELOADER_DURATION_MS = 750;
const PRELOADER_EXIT_DURATION_MS = 450;

const App = () => {
  useEffect(() => {
    const preloader = document.getElementById("portfolio-preloader");
    const root = document.getElementById("root");

    if (!preloader) {
      root?.removeAttribute("aria-hidden");
      return;
    }

    let removeTimer: number | undefined;
    const hideTimer = window.setTimeout(() => {
      root?.removeAttribute("aria-hidden");
      preloader.classList.add("is-exiting");
      removeTimer = window.setTimeout(() => preloader.remove(), PRELOADER_EXIT_DURATION_MS);
    }, Math.max(0, MIN_PRELOADER_DURATION_MS - performance.now()));

    return () => {
      window.clearTimeout(hideTimer);
      if (removeTimer !== undefined) window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
