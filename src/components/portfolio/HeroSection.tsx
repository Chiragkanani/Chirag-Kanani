import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    id: "web",
    label: "Web",
    shortLabel: "Apps & platforms",
    description: "Customer-facing products, business websites, and full-stack applications.",
    projects: [
      { name: "Arusuvai", slug: "arusuvai-cloud-kitchen" },
      { name: "WillWolf", slug: "willwolf" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    shortLabel: "iOS & Android",
    description: "Mobile product experiences built around real user journeys.",
    projects: [
      { name: "NALVS", slug: "nalvs" },
      { name: "ActiviKid", slug: "activikid" },
    ],
  },
  {
    id: "apis",
    label: "APIs",
    shortLabel: "Backend & data",
    description: "Backend services, data, payments, and integrations connected to the product.",
    projects: [
      { name: "WillWolf", slug: "willwolf" },
      { name: "ActiviKid", slug: "activikid" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    shortLabel: "Product features",
    description: "AI features integrated into a product experience, not added for novelty.",
    projects: [
      { name: "NALVS", slug: "nalvs" },
      { name: "ActiviKid", slug: "activikid" },
    ],
  },
];

const HeroSection = () => {
  const [activeCapabilityId, setActiveCapabilityId] = useState(capabilities[0].id);
  const activeCapability = capabilities.find(({ id }) => id === activeCapabilityId) ?? capabilities[0];

  return (
  <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-kicker"><span className="signal-dot" /> <span>Chirag Kanani</span><span className="hero-kicker-divider" aria-hidden="true" />Senior Full Stack Developer</p>
        <h1 id="hero-title">I turn product ideas<br /><span>into dependable software.</span></h1>
        <p className="hero-intro">I partner with startups, SMBs, and agencies to build web apps, mobile apps, APIs, and practical AI integrations—from MVP through production. I choose tools to fit the problem and stay accountable for the details.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">Discuss your project <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="button button-quiet" href="#work">See selected work <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="hero-footnote">
          <span>Open to focused freelance & contract work</span>
          <span className="footnote-separator" aria-hidden="true" />
          <span>Remote collaboration</span>
        </div>
      </div>

      <div className="system-visual" role="group" aria-labelledby="capability-map-title">
        <div className="system-head">
          <span id="capability-map-title">Capabilities in practice</span>
          <span className="system-live">Select an area</span>
        </div>
        <div className="system-canvas">
          <div className="system-orbit orbit-one" aria-hidden="true" />
          <div className="system-orbit orbit-two" aria-hidden="true" />
          <div className="system-axis axis-x" aria-hidden="true" />
          <div className="system-axis axis-y" aria-hidden="true" />
          {capabilities.map((capability, index) => (
            <button
              key={capability.id}
              type="button"
              className={`system-node node-${capability.id}${activeCapability.id === capability.id ? " is-active" : ""}`}
              aria-pressed={activeCapability.id === capability.id}
              aria-controls="capability-map-detail"
              onClick={() => setActiveCapabilityId(capability.id)}
            >
              <small>0{index + 1}</small>
              <b>{capability.label}</b>
              <span>{capability.shortLabel}</span>
            </button>
          ))}
          <div className="system-core" aria-hidden="true"><i>PRODUCT<br />ENGINEERING</i></div>
          <span className="system-mark mark-a" aria-hidden="true">01 / 04</span>
          <span className="system-mark mark-b" aria-hidden="true">WEB · MOBILE · API</span>
        </div>
        <div className="system-detail" id="capability-map-detail" aria-live="polite" aria-atomic="true">
          <p>{activeCapability.description}</p>
          <div className="system-project-links" aria-label={`Related ${activeCapability.label} projects`}>
            {activeCapability.projects.map((project) => (
              <a key={project.slug} href={`#project-${project.slug}`}>
                {project.name} <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <p className="system-caption">Choose a capability to jump to related project work.</p>
      </div>
    </div>
    <div className="hero-index" aria-hidden="true"><span>WEB · MOBILE · SYSTEMS</span><span>RESEARCH · BUILD</span></div>
  </section>
  );
};

export default HeroSection;
