import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((target) => {
      target.classList.add("reveal-pending");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
