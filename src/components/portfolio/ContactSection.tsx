import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import contactIcon from "@/assets/contact-icon.webp";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to create something amazing.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Start a Conversation</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with innovative teams. 
                Whether you need a full-stack application, API development, or technical consultation, 
                I'm here to help bring your vision to life.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 glass p-4 rounded-xl hover-float">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">hello@developer.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl hover-float">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl hover-float">
                <div className="w-10 h-10 bg-tech/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-tech" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Remote / Available Worldwide</div>
                </div>
              </div>
            </div>
            
            {/* Animated Contact Icon */}
            <div className="relative pt-8">
              <div className="relative w-48 h-48 mx-auto">
                <img 
                  src={contactIcon}
                  alt="Contact illustration"
                  className="w-full h-full object-contain animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-xl animate-pulse-glow" />
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Send me a message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="glass border-glass-border focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="glass border-glass-border focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject *</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, consultation, etc."
                  required
                  className="glass border-glass-border focus:ring-primary focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  rows={5}
                  required
                  className="glass border-glass-border focus:ring-primary focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full neon-glow hover-float group"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              I typically respond within 24 hours
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;