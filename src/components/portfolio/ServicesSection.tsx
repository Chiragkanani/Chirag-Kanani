import { Check, Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "End-to-end web application development with modern frameworks and best practices.",
      icon: Code,
      features: [
        "Custom web applications",
        "Frontend & backend development",
        "Responsive design implementation",
        "Modern framework integration"
      ],
      highlighted: true
    },
    {
      title: "API Development & Integration",
      description: "Robust RESTful APIs and seamless third-party service integrations.",
      icon: Zap,
      features: [
        "RESTful API development",
        "Third-party integrations",
        "API documentation",
        "Performance optimization"
      ],
      highlighted: false
    },
    {
      title: "Database Design & Optimization",
      description: "Efficient database architecture and query optimization for scalable applications.",
      icon: Database,
      features: [
        "Database schema design",
        "Query optimization",
        "Data migration services",
        "Performance monitoring"
      ],
      highlighted: false
    },
    {
      title: "Dynamic Web Applications",
      description: "Interactive and dynamic web applications with real-time features.",
      icon: Globe,
      features: [
        "Single Page Applications (SPA)",
        "Real-time functionality",
        "Interactive user interfaces",
        "Progressive Web Apps (PWA)"
      ],
      highlighted: false
    },
    {
      title: "Scalable Solutions",
      description: "Building applications that grow with your business needs and handle increased traffic.",
      icon: Smartphone,
      features: [
        "Microservices architecture",
        "Cloud deployment",
        "Load balancing",
        "Auto-scaling solutions"
      ],
      highlighted: false
    },
    {
      title: "Performance Optimization",
      description: "Speed optimization and performance tuning for exceptional user experience.",
      icon: Shield,
      features: [
        "Code optimization",
        "Caching strategies",
        "Bundle size reduction",
        "SEO optimization"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life with modern technologies and best practices
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group glass p-8 rounded-2xl hover-float transition-all duration-300 ${
                service.highlighted ? 'ring-2 ring-primary/50 neon-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                {service.highlighted && (
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </div>
                )}
              </div>
              
              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-3 pt-4">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                      style={{ animationDelay: `${(index * 4 + featureIndex) * 0.1}s` }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life with clean, efficient, and scalable solutions.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg neon-glow hover-float transition-all">
                Get Started Today
              </button>
              <button className="px-6 py-3 glass rounded-lg hover-float transition-all">
                View Portfolio
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;