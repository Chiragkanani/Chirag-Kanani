import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", section: "home" },
  { label: "Work", href: "#work", section: "work" },
  { label: "Expertise", href: "#expertise", section: "expertise" },
  { label: "Approach", href: "#approach", section: "approach" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "About", href: "#about", section: "about" },
];

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = [...navItems.map((item) => item.section), "skills", "workflow", "contact"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
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
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => {
    if (menuOpen) menuToggleRef.current?.focus();
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label="Chirag Kanani, home"><span>Chirag Kanani</span></a>
        <button ref={menuToggleRef} className={`menu-toggle${menuOpen ? " is-open" : ""}`} type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
          <span className="menu-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => {
            const isCurrent = active === item.section || (item.section === "approach" && active === "workflow") || (item.section === "expertise" && active === "skills");
            return <a key={item.section} href={item.href} aria-current={isCurrent ? "location" : undefined} onClick={closeMenu}>{item.label}</a>;
          })}
          <a className="nav-contact" href="#contact" aria-current={active === "contact" ? "location" : undefined} onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
      <div className="reading-line" aria-hidden="true" />
    </header>
  );
};

export default Navigation;
