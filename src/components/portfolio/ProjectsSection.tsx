import { ArrowUpRight, CircleDashed } from "lucide-react";

const ProjectsSection = () => (
  <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
    <div className="section-heading work-heading">
      <div>
        <p className="section-index">A record of the work</p>
        <h2 id="work-title">Selected <span>work</span></h2>
      </div>
      <p className="section-intro">Good engineering is easier to trust when the work can speak for itself. I’m preparing concise case studies with the context, contribution and artifacts behind each project.</p>
    </div>
    <div className="work-ledger">
      <div className="ledger-art" aria-hidden="true">
        <div className="ledger-ring ring-large" /><div className="ledger-ring ring-small" />
        <div className="ledger-cross cross-one" /><div className="ledger-cross cross-two" />
        <span className="ledger-cursor">CASE STUDY / FORMAT</span>
        <div className="ledger-monogram">W<span>.</span></div>
        <span className="ledger-coordinates">BRIEF → BUILD → RELEASE</span>
      </div>
      <div className="ledger-copy">
        <div className="ledger-status"><CircleDashed size={16} aria-hidden="true" /> Case studies in preparation</div>
        <h3>Real work.<br />Proper context.</h3>
        <p>The current portfolio repository didn’t include verified project names, screenshots or public demo links. I’ve removed the placeholder examples and will add case studies once the project details are confirmed.</p>
        <a className="text-link" href="#contact">Ask me about relevant experience <ArrowUpRight size={16} aria-hidden="true" /></a>
        <div className="ledger-fields" aria-label="Case study details to be added">
          <span>Problem</span><span>Contribution</span><span>Technology</span><span>Outcome</span>
        </div>
      </div>
    </div>
    <p className="work-note">I share project details only when the work and links are accurate and appropriate to publish.</p>
  </section>
);

export default ProjectsSection;
