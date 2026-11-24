import { ArrowUpRight, Plus } from "lucide-react";
import arusuvaiPreview from "@/assets/arusuvai-cloud-kitchen-preview.jpg";

const projectFeatures = [
  "Menu and signature dishes",
  "Weekly and monthly meal plans",
  "Catering, events and bulk orders",
  "Food gallery and testimonials",
  "FAQ and WhatsApp enquiries",
];

const developmentHighlights = [
  "Responsive presentation for the menu, plans and services.",
  "Clear paths between food offerings, catering information and enquiries.",
  "Direct WhatsApp contact options for customer questions and requests.",
];

const ProjectsSection = () => (
  <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
    <div className="section-heading work-heading" data-reveal>
      <div>
        <p className="section-index">Featured project / 01</p>
        <h2 id="work-title">Selected <span>work</span></h2>
      </div>
      <p className="section-intro">A closer look at a live business website, from its menu and meal plans to customer enquiries.</p>
    </div>

    <article className="work-ledger arusuvai-project" data-reveal aria-labelledby="arusuvai-title">
      <div className="project-visual">
        <a
          className="project-preview"
          href="https://arusuvai-cloudkitchen.netlify.app/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the Arusuvai Cloud Kitchen website"
        >
          <img
            src={arusuvaiPreview}
            alt="Arusuvai's official brand preview, featuring its name and South Indian meal offering"
            width="1200"
            height="630"
            loading="lazy"
            decoding="async"
          />
          <span className="project-preview-hint">View live website <ArrowUpRight size={15} aria-hidden="true" /></span>
        </a>
        <div className="project-visual-caption">
          <span>Official project preview</span>
          <span>Business website</span>
        </div>
      </div>

      <div className="ledger-copy project-copy">
        <div className="project-meta"><span>Frontend development</span><span>Responsive experience</span></div>
        <h3 id="arusuvai-title">Arusuvai<br />Cloud Kitchen</h3>
        <p className="project-overview">A digital storefront for a South Indian cloud kitchen in Saligramam, Chennai. It brings the food offering, meal plans and catering information together with clear ways to get in touch.</p>

        <div className="project-actions">
          <a className="button button-primary project-live-link" href="https://arusuvai-cloudkitchen.netlify.app/" target="_blank" rel="noreferrer">
            Visit live project <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <details className="project-details">
          <summary>
            <span>Explore project details</span>
            <Plus className="project-disclosure-icon" size={17} aria-hidden="true" />
          </summary>
          <div className="project-details-content">
            <section className="project-detail-block">
              <h4>Purpose</h4>
              <p>Present the cloud kitchen's menu and services in one place, then guide visitors toward a meal plan, catering enquiry or direct contact.</p>
            </section>

            <section className="project-detail-block">
              <h4>What the site presents</h4>
              <ul className="project-features">
                {projectFeatures.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </section>

            <section className="project-detail-block project-development">
              <h4>Development focus</h4>
              <ul>
                {developmentHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>
          </div>
        </details>
      </div>
    </article>
  </section>
);

export default ProjectsSection;
