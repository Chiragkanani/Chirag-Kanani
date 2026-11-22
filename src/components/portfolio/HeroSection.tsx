import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroSection = () => (
  <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="hero-kicker"><span className="signal-dot" /> Senior full stack developer</p>
        <h1 id="hero-title">I build<br className="narrow-break" /> software<br /><span>that moves work forward.</span></h1>
        <p className="hero-intro">Web and mobile products, from interface to API. I adapt to the problem, choose practical tools, and use AI-assisted workflows to move from idea to working software.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
          <a className="button button-quiet" href="#contact">Let’s collaborate <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="hero-footnote">
          <span>Open to freelance, contract & project work</span>
          <span className="footnote-separator" aria-hidden="true" />
          <span>Remote collaboration</span>
        </div>
      </div>

      <div className="system-visual" role="img" aria-label="A diagram of an engineering workflow: understand, explore, build, and review">
        <div className="system-head"><span>Engineering loop</span><span className="system-live"><i /> Adaptive by design</span></div>
        <div className="system-canvas" aria-hidden="true">
          <div className="system-orbit orbit-one" />
          <div className="system-orbit orbit-two" />
          <div className="system-axis axis-x" />
          <div className="system-axis axis-y" />
          <div className="system-node node-brief"><small>01</small><b>Understand</b><span>the real need</span></div>
          <div className="system-node node-explore"><small>02</small><b>Explore</b><span>possible paths</span></div>
          <div className="system-node node-build"><small>03</small><b>Build</b><span>the right pieces</span></div>
          <div className="system-node node-review"><small>04</small><b>Review</b><span>and refine</span></div>
          <div className="system-core"><span>CK</span><i>ENGINEERING<br />WITH INTENT</i></div>
          <span className="system-mark mark-a">01 / 04</span>
          <span className="system-mark mark-b">WEB · MOBILE · API</span>
        </div>
        <p className="system-caption">A clear path from requirements to a working release.</p>
      </div>
    </div>
    <div className="hero-index" aria-hidden="true"><span>CK / 2026</span><span>01 — 08</span></div>
  </section>
);

export default HeroSection;
