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

const Index = () => (
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

export default Index;
