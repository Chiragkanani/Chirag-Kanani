import { Database, Globe, Code, Server, Smartphone, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillIcon = (name: string) =>
    `https://skillicons.dev/icons?i=${name.toLowerCase()}&theme=light`;

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Globe,
      technologies: [
        { name: "C", color: "bg-yellow-400", icon: "c" },
        { name: "JavaScript", color: "bg-yellow-400", icon: "javascript" },
        { name: "TypeScript", color: "bg-blue-600", icon: "typescript" },
        { name: "PHP", color: "bg-purple-600", icon: "php" },
      ],
    },
    {
      title: "Frontend",
      icon: Globe,
      technologies: [
        { name: "Vue.js", color: "bg-green-500", icon: "vue" },
        { name: "Nuxt", color: "bg-blue-500", icon: "nuxt" },
        { name: "Vuetify", color: "bg-blue-500", icon: "vuetify" },
        { name: "Pinia", color: "bg-blue-500", icon: "pinia" },
        { name: "React", color: "bg-blue-400", icon: "react" },
        { name: "Redux", color: "bg-blue-400", icon: "redux" },
        { name: "HTML5", color: "bg-orange-500", icon: "html" },
        { name: "CSS3", color: "bg-blue-500", icon: "css" },
        { name: "Tailwind CSS", color: "bg-cyan-400", icon: "tailwind" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      technologies: [
        { name: "Laravel", color: "bg-red-500", icon: "laravel" },
        { name: "Node.js", color: "bg-green-600", icon: "nodejs" },
        { name: "Express.js", color: "bg-gray-600", icon: "express" },
        { name: "Nest.js", color: "bg-gray-600", icon: "nestjs" },
      ],
    },
    {
      title: "Database",
      icon: Database,
      technologies: [
        { name: "MySQL", color: "bg-blue-600", icon: "mysql" },
        { name: "PostgreSQL", color: "bg-blue-700", icon: "postgres" },
        { name: "MongoDB", color: "bg-green-700", icon: "mongodb" },
        { name: "Redis", color: "bg-red-600", icon: "redis" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Zap,
      technologies: [
        { name: "Git", color: "bg-orange-600", icon: "git" },
        { name: "Docker", color: "bg-blue-500", icon: "docker" },
        { name: "AWS", color: "bg-orange-500", icon: "aws" },
        { name: "Linux", color: "bg-indigo-500", icon: "linux" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web
            applications
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass p-6 rounded-2xl hover-float group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted/50 mb-4 group-hover:scale-110 transition-transform text-primary">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <div key={tech.name} className="text-center group/tech">
                    <div
                      className={`w-10 h-10 rounded-lg ${tech.color} mx-auto mb-2 flex items-center justify-center group-hover/tech:scale-110 transition-transform`}
                    >
                      <img
                        src={skillIcon(tech?.icon || "")}
                        alt={tech.icon || tech.name}
                        className="w-12 h-12"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs font-medium group-hover/tech:text-primary transition-colors">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Full Stack Development",
              "API Development",
              "Database Design",
              "Bux Fixing",
              "Performance Optimization",
              "Code Review",
              "Team Leadership",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
