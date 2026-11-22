import { ArrowUpRight, CircleDashed } from "lucide-react";

const ProjectsSection = () => (
  <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
    <div className="section-heading work-heading" data-reveal>
      <div>
        <p className="section-index">Selected work · published with context</p>
        <h2 id="work-title">Selected <span>work</span></h2>
      </div>
      <p className="section-intro">Good engineering is easier to trust when the work can speak for itself. I publish project details only when the contribution and supporting material are verified.</p>
    </div>
    <div className="work-ledger" data-reveal>
      <div className="ledger-art" aria-hidden="true">
        <div className="ledger-ring ring-large" /><div className="ledger-ring ring-small" />
        <div className="ledger-cross cross-one" /><div className="ledger-cross cross-two" />
        <span className="ledger-cursor">CASE STUDY / PRACTICE</span>
        <div className="ledger-statement">Proof<br /><span>with</span><br />context.</div>
        <span className="ledger-coordinates">CONTRIBUTION · STACK · OUTCOME</span>
      </div>
      <div className="ledger-copy">
        <div className="ledger-status"><CircleDashed size={16} aria-hidden="true" /> Project details are not published yet</div>
        <h3>Good work needs<br />good context.</h3>
        <p>I publish case studies only when the project, my contribution and supporting visuals can be represented accurately. This section stays clear of sample projects and unverified claims. Get in touch to discuss a particular kind of development support.</p>
        <a className="text-link" href="#contact">Discuss a project <ArrowUpRight size={16} aria-hidden="true" /></a>
        <div className="ledger-fields" aria-label="Case study details to be added">
          <span>Problem</span><span>Contribution</span><span>Technology</span><span>Outcome</span>
        </div>
      </div>
    </div>
    <p className="work-note" data-reveal>Each published case study will establish the problem, contribution, technologies and outcome wherever those details can be shared.</p>
  </section>
);

export default ProjectsSection;
