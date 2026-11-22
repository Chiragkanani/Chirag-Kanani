import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main" data-reveal>
      <a className="wordmark footer-wordmark" href="#home"><span>Chirag Kanani</span></a>
      <p>Senior full stack developer<br />Web · mobile · AI-assisted engineering</p>
      <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#expertise">Expertise</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
      <a className="footer-email" href="mailto:chiragkanani2003@gmail.com">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Chirag Kanani</span><div><a href="https://www.linkedin.com/in/chiragkanani07/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Chiragkanani" target="_blank" rel="noreferrer">GitHub</a></div><a className="back-top" href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
  </footer>
);

export default Footer;
