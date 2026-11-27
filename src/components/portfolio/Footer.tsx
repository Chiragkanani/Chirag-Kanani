import { ArrowUpRight, ArrowUp } from "lucide-react";
import ProfilePhoto from "@/components/portfolio/ProfilePhoto";

const Footer = () => (
  <footer className="site-footer">
    <section className="footer-cta" aria-labelledby="footer-cta-title" data-reveal>
      <div className="footer-cta-content">
        <ProfilePhoto className="footer-cta-avatar" loading="lazy" />
        <div className="footer-cta-copy">
          <p className="section-index">Start a conversation</p>
          <h2 id="footer-cta-title">Have a product idea?<br /><span>Let’s turn it into something useful.</span></h2>
        </div>
      </div>
      <a className="button button-primary" href="#contact">
        Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
    <div className="footer-main" data-reveal>
      <a className="wordmark footer-wordmark" href="#home"><span>Chirag Kanani</span></a>
      <p>Senior full stack developer<br />Web · mobile · AI-assisted engineering</p>
      <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></nav>
      <a className="footer-email" href="mailto:chiragkanani2003@gmail.com">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Chirag Kanani</span><div><a href="https://www.linkedin.com/in/chiragkanani07/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Chiragkanani" target="_blank" rel="noreferrer">GitHub</a></div><a className="back-top" href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
  </footer>
);

export default Footer;
