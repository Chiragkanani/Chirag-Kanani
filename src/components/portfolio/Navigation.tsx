import { useEffect, useRef, useState } from "react";
import { ArrowRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// Listed in the same order the sections appear on the page.
const navItems = [
  { label: "Work", href: "#work", section: "work" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "About", href: "#about", section: "about" },
  { label: "Services", href: "#services", section: "services" },
  { label: "Approach", href: "#approach", section: "approach" },
];

/** Sections without their own nav item highlight the closest related one. */
const sectionAliases: Record<string, string> = { skills: "services" };

const DESKTOP_NAV_QUERY = "(min-width: 901px)";

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", resolvedTheme === "light" ? "#f7f8fb" : "#111411");
  }, [resolvedTheme]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const ids = ["home", ...navItems.map((item) => item.section), ...Object.keys(sectionAliases), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(sectionAliases[visible.target.id] ?? visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
      document.documentElement.style.setProperty("--reading-progress", `${progress}%`);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      document.documentElement.style.removeProperty("--reading-progress");
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    // Widening the window past the breakpoint swaps in the desktop nav; drop the open state.
    const desktopQuery = window.matchMedia(DESKTOP_NAV_QUERY);
    const onBreakpointChange = () => {
      if (desktopQuery.matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    desktopQuery.addEventListener("change", onBreakpointChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      desktopQuery.removeEventListener("change", onBreakpointChange);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    if (menuOpen) menuToggleRef.current?.focus();
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label="Chirag Kanani, home">
          <span>Chirag Kanani</span>
        </a>
        <button
          ref={menuToggleRef}
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.section} href={item.href} aria-current={active === item.section ? "location" : undefined} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" aria-current={active === "contact" ? "location" : undefined} onClick={closeMenu}>
            Let’s talk <ArrowRight size={15} aria-hidden="true" />
          </a>
          {/* Both icons are rendered and CSS shows the right one, so server and client markup always match. */}
          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle light and dark theme"
            title="Toggle light and dark theme"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          >
            <Sun className="theme-icon theme-icon--sun" size={17} aria-hidden="true" />
            <Moon className="theme-icon theme-icon--moon" size={17} aria-hidden="true" />
            <span className="theme-toggle-label" aria-hidden="true">Theme</span>
          </button>
        </nav>
      </div>
      <div className="reading-line" aria-hidden="true" />
    </header>
  );
};

export default Navigation;
