import { ArrowRight, Check, Lightbulb, ScanSearch, Wrench } from "lucide-react";

const steps = [
  ["Understand", "Clarify the need, audience and expected result."],
  ["Explore", "Compare suitable tools and ways to solve the problem."],
  ["Plan", "Set implementation priorities and technical direction."],
  ["Build", "Develop the interface, backend, APIs or mobile features."],
  ["Validate", "Review behavior, troubleshoot and refine the work."],
  ["Deliver", "Share a functional result and communicate what’s next."],
];

const phases = [
  { icon: ScanSearch, title: "Research", text: "Explore unfamiliar frameworks, understand existing code and compare implementation options." },
  { icon: Lightbulb, title: "Plan", text: "Turn useful findings into a practical approach, prototype or development plan." },
  { icon: Wrench, title: "Implement", text: "Use assistance for code generation, refinement and repetitive tasks while directing the engineering work." },
  { icon: Check, title: "Review", text: "Debug, validate behavior, improve documentation and take responsibility for the final code." },
];

const ProcessSection = () => (
  <section className="approach-section section-wrap" id="approach" aria-labelledby="approach-title">
    <div className="section-heading" data-reveal>
      <div>
        <p className="section-index">How I work</p>
        <h2 id="approach-title">A flexible path to <span>the right result.</span></h2>
      </div>
      <p className="section-intro">Every project has its own constraints. This is a useful way to think through the work, not a rigid checklist.</p>
    </div>

    <ol className="process-grid" data-reveal>
      {steps.map(([title, text], index) => (
        <li className="process-step" key={title}>
          <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ol>

    <div className="ai-panel" data-reveal>
      <div className="ai-panel-heading">
        <p className="section-index">A modern engineering workflow</p>
        <h3 className="title-stack">AI can speed up the work. <span>Engineering still leads.</span></h3>
        <p>I use AI-assisted tools to move through research, implementation and debugging with more range. I stay accountable for the decisions, the code and the final behavior.</p>
      </div>
      <ol className="ai-loop">
        {phases.map(({ icon: Icon, title, text }, index) => (
          <li className="ai-phase" key={title}>
            <div className="phase-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon size={18} aria-hidden="true" />
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
            {index < phases.length - 1 && <ArrowRight className="phase-arrow" size={16} aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <div className="ai-footer"><span>AI supports the loop</span><span className="ai-footer-line" aria-hidden="true" /><span>My judgment closes it</span></div>
    </div>
  </section>
);

export default ProcessSection;
