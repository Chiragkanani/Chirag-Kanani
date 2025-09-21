import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@developer.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-glass-border">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/10 to-transparent" />
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">DevPortfolio</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Passionate Full Stack Developer creating scalable web solutions with modern technologies. 
              Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover-float group transition-all duration-300 hover:neon-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground">Email</div>
                hello@developer.com
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground">Location</div>
                Remote / Worldwide
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium text-foreground">Response Time</div>
                Within 24 hours
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-glass-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} DevPortfolio. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>by a passionate developer</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center hover-float neon-glow transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <div className="w-4 h-4 border-t-2 border-r-2 border-primary transform rotate-[-45deg] group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;