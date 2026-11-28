import { Monitor, Plug, Smartphone, Sparkles, type LucideIcon } from "lucide-react";

const services: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: Monitor,
    title: "Web applications",
    text: "Build responsive customer-facing products, dashboards, internal tools, and complete web applications across the interface, application logic, and data layer.",
  },
  {
    icon: Smartphone,
    title: "Mobile applications",
    text: "Build cross-platform mobile experiences with Flutter or Capacitor when the project fits, including app-store-ready flows and device integrations.",
  },
  {
    icon: Plug,
    title: "APIs & integrations",
    text: "Design and connect APIs, databases, payment flows, authentication, and third-party services so product features work reliably together.",
  },
  {
    icon: Sparkles,
    title: "Practical AI features",
    text: "Add useful AI-assisted search, analysis, workflows, or integrations, with clear boundaries, review steps, and responsible handling of user data.",
  },
];

const ServicesSection = () => (
  <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
    <div className="section-heading" data-reveal>
      <div>
        <p className="section-index">Ways I can contribute</p>
        <h2 id="services-title" className="title-stack">Useful skills. <span>Applied where needed.</span></h2>
      </div>
      <p className="section-intro">From a focused feature to a full application, I can join at the stage that makes sense for the team.</p>
    </div>
    <ul className="service-grid" data-reveal>
      {services.map(({ icon: Icon, title, text }, index) => (
        <li className="service-card" key={title}>
          <div className="service-card-top">
            <span className="service-count">{String(index + 1).padStart(2, "0")}</span>
            <Icon className="service-icon" size={20} aria-hidden="true" />
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default ServicesSection;
