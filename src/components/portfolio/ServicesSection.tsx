import { useState } from "react";
import { ArrowDownRight } from "lucide-react";

const services = [
  ["Web applications", "Build responsive customer-facing products, dashboards, internal tools, and complete web applications across the interface, application logic, and data layer."],
  ["Mobile applications", "Build cross-platform mobile experiences with Flutter or Capacitor when the project fits, including app-store-ready flows and device integrations."],
  ["APIs & integrations", "Design and connect APIs, databases, payment flows, authentication, and third-party services so product features work reliably together."],
  ["Practical AI features", "Add useful AI-assisted search, analysis, workflows, or integrations, with clear boundaries, review steps, and responsible handling of user data."],
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
