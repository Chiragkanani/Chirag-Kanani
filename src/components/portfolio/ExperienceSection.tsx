import collegeLogo from "@/assets/gec-bhavnagar-logo.webp";
import PortfolioImage from "@/components/portfolio/PortfolioImage";

interface Role {
  company: string;
  title: string;
  start: { label: string; dateTime: string };
  end: { label: string; dateTime?: string };
  current?: boolean;
}

const roles: Role[] = [
  {
    company: "Softtechover",
    title: "Senior Software Developer",
    start: { label: "November 2024", dateTime: "2024-11" },
    end: { label: "Present" },
    current: true,
  },
  {
    company: "eSparkBiz",
    title: "Software Engineer",
    start: { label: "January 2024", dateTime: "2024-01" },
    end: { label: "November 2024", dateTime: "2024-11" },
  },
];

const ExperienceSection = () => (
  <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
    <div className="experience-heading" data-reveal>
      <p className="section-index">Professional experience</p>
      <h2 id="experience-title" className="title-stack">Experience across <span>software teams.</span></h2>
    </div>

    <div className="experience-body" data-reveal>
      <ol className="timeline" aria-label="Roles">
        {roles.map((role) => (
          <li className={`timeline-item${role.current ? " is-current" : ""}`} key={role.company}>
            <span className="timeline-marker" aria-hidden="true" />
            <div className="timeline-body">
              <h3>{role.title}</h3>
              <p>{role.company}</p>
            </div>
            <p className="timeline-dates">
              <time dateTime={role.start.dateTime}>{role.start.label}</time>
              <span aria-hidden="true"> — </span>
              {role.end.dateTime ? <time dateTime={role.end.dateTime}>{role.end.label}</time> : <span>{role.end.label}</span>}
            </p>
            {role.current && <span className="timeline-badge">Current</span>}
          </li>
        ))}
      </ol>

      <p className="timeline-group-label" id="education-title">Education</p>
      <ol className="timeline timeline--education" aria-labelledby="education-title">
        <li className="timeline-item timeline-item--education">
          <span className="education-logo-frame" aria-hidden="true">
            <PortfolioImage src={collegeLogo} alt="" width="160" height="159" loading="lazy" decoding="async" />
          </span>
          <div className="timeline-body">
            <h3>Bachelor of Engineering (BE)</h3>
            <p>Computer Engineering · Government Engineering College (GEC), Bhavnagar</p>
          </div>
          <p className="timeline-dates">
            <time dateTime="2020-03">March 2020</time>
            <span aria-hidden="true"> — </span>
            <time dateTime="2024-03">March 2024</time>
          </p>
        </li>
      </ol>
    </div>
  </section>
);

export default ExperienceSection;
