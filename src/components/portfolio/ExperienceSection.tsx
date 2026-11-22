const roles = [
  { company: "Softtechover", title: "Senior Software Developer", dates: "November 2024 — Present" },
  { company: "eSparkBiz", title: "Software Engineer", dates: "January 2024 — November 2024" },
];

const ExperienceSection = () => (
  <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
    <div className="experience-heading"><p className="section-index">Professional experience</p><h2 id="experience-title">Experience across<br /><span>software teams.</span></h2></div>
    <div className="experience-list">
      {roles.map((role, index) => <article className="experience-row" key={role.company}>
        <span className="experience-marker" aria-hidden="true">0{index + 1}</span>
        <div className="experience-role"><h3>{role.title}</h3><p>{role.company}</p></div>
        <p className="experience-description">Full-time software development across application delivery and technical problem-solving.</p>
        <time>{role.dates}</time>
      </article>)}
    </div>
  </section>
);

export default ExperienceSection;
