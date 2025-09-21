import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import heroImage from "@/assets/hero-developer.webp";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-pulse-glow opacity-50" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-neon-purple rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-tech rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>Available For New Projects</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-2xl lg:text-3xl block mb-2 text-muted-foreground font-normal">
                  Hi, I'm <span className="gradient-text">Chirag Kanani</span>
                </span>
                <span className="gradient-text">🚀 Full Stack</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Building{" "}
                <span className="text-primary font-semibold">Scalable</span> &
                <span className="text-secondary font-semibold"> Efficient</span>{" "}
                Web Solutions With Modern Technologies
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="group hover-float neon-glow"
              >
                View Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("#projects")}
                variant="outline"
                size="lg"
                className="glass hover-float"
              >
                <Code className="w-4 h-4 mr-2" />
                See Projects
              </Button>
            </div>

            {/* Tech Stack Highlights */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Vue.js",
                "Laravel",
                "React.js",
                "Express.js",
                "Node.js",
                "PHP",
                "MySQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium glass rounded-lg hover-float"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern developer workspace with aesthetic setup"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>

            {/* Floating code elements */}
            <div
              className="absolute -top-4 -right-4 glass p-3 rounded-lg animate-float"
              style={{ animationDelay: "1s" }}
            >
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 glass p-3 rounded-lg animate-float"
              style={{ animationDelay: "2s" }}
            >
              <span className="text-sm font-mono text-secondary">{"</>"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
