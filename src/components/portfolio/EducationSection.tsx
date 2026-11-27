import collegeLogo from "@/assets/gec-bhavnagar-logo.png";

const EducationSection = () => (
  <section className="education-section section-wrap" id="education" aria-labelledby="education-title">
    <div className="education-heading" data-reveal>
      <p className="section-index">Education</p>
      <h2 id="education-title">Academic <span>foundation.</span></h2>
    </div>
    <div className="education-list" data-reveal>
      <article className="education-row" data-reveal>
        <div className="education-logo-frame">
          <img src={collegeLogo} alt="Government Engineering College, Bhavnagar logo" width="225" height="224" loading="lazy" decoding="async" />
        </div>
        <div className="education-details">
          <h3>Bachelor of Engineering (BE)</h3>
          <p>Computer Engineering</p>
          <span>Government Engineering College (GEC), Bhavnagar</span>
        </div>
        <div className="education-dates">
          <time dateTime="2020-03">March 2020</time>
          <span aria-hidden="true"> — </span>
          <time dateTime="2024-03">March 2024</time>
        </div>
      </article>
    </div>
  </section>
);

export default EducationSection;
