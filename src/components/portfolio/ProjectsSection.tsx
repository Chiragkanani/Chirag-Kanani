import { ArrowUpRight } from "lucide-react";
import arusuvaiPreview from "@/assets/arusuvai-cloud-kitchen-preview.jpg";

const projectFeatures = [
  "Signature dishes and menu",
  "Weekly and monthly meal plans",
  "Catering, events and bulk orders",
  "Food gallery and testimonials",
  "FAQ and WhatsApp enquiries",
];

const ProjectsSection = () => (
  <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
    <div className="section-heading work-heading" data-reveal>
      <div>
        <p className="section-index">Business-focused frontend work</p>
        <h2 id="work-title">Selected <span>work</span></h2>
      </div>
      <p className="section-intro">A responsive storefront bringing a South Indian kitchen’s menu, meal plans, catering and customer enquiries into one clear visit.</p>
    </div>

    <article className="work-ledger arusuvai-project" data-reveal aria-labelledby="arusuvai-title">
      <a
        className="project-preview"
        href="https://arusuvai-cloudkitchen.netlify.app/"
        target="_blank"
        rel="noreferrer"
        aria-label="Open the Arusuvai Cloud Kitchen website"
      >
        <img
          src={arusuvaiPreview}
          alt="Arusuvai’s official website preview, featuring its South Indian cloud kitchen identity and meal offering"
          width="1200"
          height="630"
          loading="lazy"
          decoding="async"
        />
        <span className="project-preview-hint">Open live website <ArrowUpRight size={15} aria-hidden="true" /></span>
      </a>

      <div className="ledger-copy project-copy">
        <div className="project-meta"><span>Business website</span><span>Frontend development</span><span>Responsive website</span></div>
        <h3 id="arusuvai-title">Arusuvai<br />Cloud Kitchen</h3>
        <p className="project-overview">A digital storefront for a South Indian cloud kitchen in Saligramam, Chennai. It introduces the kitchen and guides visitors from its dishes and meal plans to catering, pickup and enquiries.</p>

        <h4 className="project-feature-heading">What the site presents</h4>
        <ul className="project-features">
          {projectFeatures.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>

        <p className="project-focus"><span>Development focus</span>Responsive presentation, clear content hierarchy, customer-oriented navigation and a direct enquiry flow.</p>
        <a className="button button-primary project-live-link" href="https://arusuvai-cloudkitchen.netlify.app/" target="_blank" rel="noreferrer">
          Visit live project <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  </section>
);

export default ProjectsSection;
