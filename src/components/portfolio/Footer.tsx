import { ArrowUp, ArrowUpRight, Linkedin, MessageCircle } from "lucide-react";
import { contactEmail, whatsappUrl } from "@/data/contact";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-main">
      <a className="wordmark footer-wordmark" href="#home"><span>Chirag Kanani</span></a>
      <p className="footer-tagline">Senior full stack developer<br />Web · mobile · AI-assisted engineering</p>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="footer-email" href={`mailto:${contactEmail}`}>Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
    </div>
    <div className="footer-bottom">
      {/* The build year and the visitor's year can differ, so don't treat it as a hydration error. */}
      <span suppressHydrationWarning>© {new Date().getFullYear()} Chirag Kanani</span>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/chiragkanani07/" target="_blank" rel="noreferrer">
          <Linkedin size={15} aria-hidden="true" /><span>LinkedIn</span>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={15} aria-hidden="true" /><span>WhatsApp</span>
        </a>
      </div>
      <a className="back-top" href="#home">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
    </div>
  </footer>
);

export default Footer;
