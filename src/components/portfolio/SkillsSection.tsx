const groups = [
  { name: "Frontend", items: ["Vue.js", "React.js", "JavaScript", "TypeScript"] },
  { name: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
  { name: "Mobile", items: ["Flutter", "Capacitor"] },
  { name: "Data", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { name: "Across the stack", items: ["REST APIs", "API integrations", "Git", "GitHub", "AI-assisted tools"] },
];

const SkillsSection = () => (
  <section className="stack-section section-wrap" id="skills" aria-labelledby="stack-title">
    <div className="section-heading" data-reveal>
      <div>
        <p className="section-index">Tools I work with</p>
        <h2 id="stack-title">The stack stays <span>adaptable.</span></h2>
      </div>
      <p className="section-intro">Technologies I’ve worked with across professional software development.</p>
    </div>
    <div className="stack-groups" data-reveal>
      {groups.map((group, index) => (
        <div className="stack-group" key={group.name}>
          <span className="stack-order">{String(index + 1).padStart(2, "0")}</span>
          <h3>{group.name}</h3>
          <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
