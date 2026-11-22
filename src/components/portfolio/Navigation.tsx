import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work", section: "work" },
  { label: "Approach", href: "#approach", section: "approach" },
  { label: "Expertise", href: "#expertise", section: "expertise" },
  { label: "About", href: "#about", section: "about" },
];

const Navigation = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", ...navItems.map((item) => item.section), "experience", "contact"]
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
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Chirag Kanani, home"><span className="wordmark-symbol">c<span>.</span></span><span>Chirag Kanani</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.section} href={item.href} aria-current={active === item.section ? "location" : undefined} onClick={closeMenu}>{item.label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14} aria-hidden="true" /></a>
        </nav>
      </div>
      <div className="reading-line" aria-hidden="true" />
    </header>
  );
};

export default Navigation;
