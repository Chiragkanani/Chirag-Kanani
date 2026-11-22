const AboutSection = () => (
  <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
    <div className="about-aside" data-reveal>
      <p className="section-index">The person behind the process</p>
      <h2 id="about-title">Curious by nature.<br /><span>Practical by craft.</span></h2>
      <p className="about-scope">Interfaces <span>·</span> APIs <span>·</span> Data <span>·</span> Mobile</p>
    </div>
    <div className="about-story" data-reveal>
      <p className="about-lede">I’m Chirag, a Senior Full Stack Developer building useful software across web, backend and mobile.</p>
      <p>I work across interfaces, APIs, databases and application logic, choosing tools to fit the requirements instead of forcing every problem into one stack. My experience spans Vue, React, Node, Laravel, Flutter and Capacitor.</p>
      <p>AI-assisted tools are part of how I explore unfamiliar code, research options, debug and move implementation forward. I bring the engineering judgment: I review the output, validate the behavior and take responsibility for what ships.</p>
      <div className="about-values"><span>Understand the problem</span><span>Choose what fits</span><span>Deliver working software</span></div>
    </div>
  </section>
);

export default AboutSection;
