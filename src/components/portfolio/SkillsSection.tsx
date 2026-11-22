const groups = [
  { name: "Frontend", items: ["Vue.js", "React.js", "JavaScript", "TypeScript"] },
  { name: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel"] },
  { name: "Mobile", items: ["Flutter", "Capacitor"] },
  { name: "Data", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { name: "Across the stack", items: ["REST APIs", "API integrations", "Git", "GitHub", "AI-assisted tools"] },
];

const SkillsSection = () => (
  <section className="stack-section section-wrap" aria-labelledby="stack-title">
    <div className="stack-heading"><p className="section-index">Tools I work with</p><h2 id="stack-title">The stack stays <span>adaptable.</span></h2><p>Technologies I’ve worked with across professional software development.</p></div>
    <div className="stack-groups">
      {groups.map((group, index) => <div className="stack-group" key={group.name}>
        <span className="stack-order">0{index + 1}</span><h3>{group.name}</h3>
        <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>)}
    </div>
  </section>
);

export default SkillsSection;
