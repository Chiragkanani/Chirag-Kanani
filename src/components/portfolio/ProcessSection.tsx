import { ArrowRight, Check, Lightbulb, ScanSearch, Wrench } from "lucide-react";

const phases = [
  { icon: ScanSearch, title: "Research", text: "Explore unfamiliar frameworks, understand existing code and compare implementation options." },
  { icon: Lightbulb, title: "Plan", text: "Turn useful findings into a practical approach, prototype or development plan." },
  { icon: Wrench, title: "Implement", text: "Use assistance for code generation, refinement and repetitive tasks while directing the engineering work." },
  { icon: Check, title: "Review", text: "Debug, validate behavior, improve documentation and take responsibility for the final code." },
];

const steps = [
  ["Understand", "Clarify the need, audience and expected result."],
  ["Explore", "Compare suitable tools and ways to solve the problem."],
  ["Plan", "Set implementation priorities and technical direction."],
  ["Build", "Develop the interface, backend, APIs or mobile features."],
  ["Validate", "Review behavior, troubleshoot and refine the work."],
  ["Deliver", "Share a functional result and communicate what’s next."],
];

const ProcessSection = () => (
  <>
    <section className="ai-section section-wrap" id="approach" aria-labelledby="ai-title">
      <div className="ai-heading" data-reveal>
        <p className="section-index">A modern engineering workflow</p>
        <h2 id="ai-title">AI can speed up the work.<br /><span>Engineering still leads.</span></h2>
        <p>I use AI-assisted tools to move through research, implementation and debugging with more range. I stay accountable for the decisions, the code and the final behavior.</p>
      </div>
      <div className="ai-loop" data-reveal>
        {phases.map(({ icon: Icon, title, text }, index) => (
          <article className="ai-phase" key={title} data-reveal>
            <div className="phase-top"><span>0{index + 1}</span><Icon size={18} aria-hidden="true" /></div>
            <h3>{title}</h3><p>{text}</p>
            {index < phases.length - 1 && <ArrowRight className="phase-arrow" size={18} aria-hidden="true" />}
          </article>
        ))}
        <div className="ai-footer"><span>AI supports the loop</span><span className="ai-footer-line" /><span>My judgment closes it</span></div>
      </div>
    </section>
    <section className="process-section section-wrap" id="workflow" aria-labelledby="process-title">
      <div className="process-heading" data-reveal>
        <p className="section-index">How I work</p>
        <h2 id="process-title">A flexible path<br />to <span>the right result.</span></h2>
        <p>Every project has its own constraints. This is a useful way to think through the work, not a rigid checklist.</p>
      </div>
      <ol className="process-list" data-reveal>
        {steps.map(([title, text], index) => <li key={title}>
          <span className="process-number">0{index + 1}</span>
          <div><h3>{title}</h3><p>{text}</p></div>
          <span className="process-dot" aria-hidden="true" />
        </li>)}
      </ol>
    </section>
  </>
);

export default ProcessSection;
