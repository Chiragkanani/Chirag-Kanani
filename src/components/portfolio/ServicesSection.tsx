import { useState } from "react";
import { ArrowDownRight } from "lucide-react";

const services = [
  ["Full stack web development", "Build a complete web application across its interface, business logic and data layer."],
  ["Frontend development", "Create responsive, interactive interfaces with clear structure and thoughtful behavior."],
  ["Backend systems", "Implement server-side functionality, application logic and data handling."],
  ["Mobile applications", "Develop cross-platform apps with Flutter or Capacitor where the project fits."],
  ["API development & integration", "Connect applications through REST APIs and third-party services."],
  ["Database development", "Shape data models and queries around the application’s needs."],
  ["Feature development", "Add focused functionality that fits an existing product and its technical direction."],
  ["Application enhancement", "Extend an existing product with new features and improvements."],
  ["Bug fixing", "Investigate issues and troubleshoot unexpected application behavior."],
  ["Application maintenance", "Improve reliability and keep existing applications moving."],
  ["AI-assisted engineering", "Bring modern AI tools into research, implementation and debugging workflows."],
];

const ServicesSection = () => {
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});

  const toggleRow = (index: number) => {
    setOpenRows((current) => ({ ...current, [index]: !current[index] }));
  };

  return (
    <section className="expertise-section section-wrap" id="expertise" aria-labelledby="expertise-title">
      <div className="expertise-top" data-reveal>
        <div>
          <p className="section-index">Ways I can contribute</p>
          <h2 id="expertise-title">Useful skills.<br /><span>Applied where needed.</span></h2>
        </div>
        <p>From a focused feature to a full application, I can join at the stage that makes sense for the team.</p>
      </div>
      <div className="service-list" data-reveal>
        {services.map(([title, text], index) => {
          const isOpen = Boolean(openRows[index]);
          const triggerId = `service-trigger-${index}`;
          const panelId = `service-panel-${index}`;

          return (
            <div className={`service-row${isOpen ? " is-open" : ""}`} key={title} data-reveal>
              <button
                type="button"
                id={triggerId}
                className="service-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleRow(index)}
              >
                <span className="service-count">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-title">{title}</span>
                <ArrowDownRight className="service-arrow" size={19} aria-hidden="true" />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isOpen}
                className="service-panel"
              >
                <div className="service-panel-inner">
                  <p className="service-detail">{text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
