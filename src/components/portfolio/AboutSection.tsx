import { Code, Coffee, Heart, Lightbulb,Leaf } from "lucide-react";
import aboutImage from "@/assets/about-illustration.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="About me illustration"
                className="w-full h-auto rounded-2xl hover-float"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
            
            {/* Floating icons */}
            <div className="absolute top-8 -right-4 glass p-3 rounded-full animate-float">
              <Coffee className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute bottom-12 -left-4 glass p-3 rounded-full animate-float" style={{ animationDelay: '1s' }}>
              <Lightbulb className="w-5 h-5 text-secondary" />
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Hello! I'm a passionate <span className="text-foreground font-semibold">Full Stack Developer</span> with 
                a love for creating efficient, scalable web solutions. I specialize in building modern applications 
                that combine robust backend architecture with intuitive user experiences.
              </p>
              
              <p>
                My journey in web development started with a curiosity about how things work under the hood. 
                Today, I work with cutting-edge technologies like <span className="text-primary">Laravel</span>, 
                <span className="text-secondary"> Vue.js</span>, 
                <span className="text-orange-400"> React.js</span>, and <span className="text-tech">Node.js</span> to 
                bring ideas to life.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center glass p-4 rounded-xl hover-float">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center glass p-4 rounded-xl hover-float">
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center glass p-4 rounded-xl hover-float">
                <div className="text-2xl font-bold text-tech">100%</div>
                <div className="text-sm text-muted-foreground">Satisfied</div>
              </div>
            </div>
            
            {/* Values */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover-float">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover-float">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm">Fast Learner</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover-float">
                <Leaf className="w-4 h-4 text-tech" />
                <span className="text-sm">Innovation</span>
              </div>
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover-float">
                <Lightbulb className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;