import { ArrowDownRight } from "lucide-react";

const services = [
  ["Full stack web development", "Build a complete web application across its interface, business logic and data layer."],
  ["Frontend development", "Create responsive, interactive interfaces with clear structure and thoughtful behavior."],
  ["Backend systems", "Implement server-side functionality, application logic and data handling."],
  ["Mobile applications", "Develop cross-platform apps with Flutter or Capacitor where the project fits."],
  ["API development & integration", "Connect applications through REST APIs and third-party services."],
  ["Database development", "Shape data models and queries around the application’s needs."],
  ["Application enhancement", "Extend an existing product with new features and improvements."],
  ["Bug fixing & maintenance", "Investigate issues, improve reliability and keep applications moving."],
  ["AI-assisted engineering", "Bring modern AI tools into research, implementation and debugging workflows."],
];

const ServicesSection = () => (
  <section className="expertise-section section-wrap" id="expertise" aria-labelledby="expertise-title">
    <div className="expertise-top">
      <div><p className="section-index">Ways I can contribute</p><h2 id="expertise-title">Useful skills.<br /><span>Applied where needed.</span></h2></div>
      <p>From a focused feature to a full application, I can join at the stage that makes sense for the team.</p>
    </div>
    <div className="service-list">
      {services.map(([title, text], index) => <details className="service-row" key={title}>
        <summary><span className="service-count">{String(index + 1).padStart(2, "0")}</span><span className="service-title">{title}</span><span className="service-detail">{text}</span><ArrowDownRight className="service-arrow" size={19} aria-hidden="true" /></summary>
      </details>)}
    </div>
  </section>
);

export default ServicesSection;
