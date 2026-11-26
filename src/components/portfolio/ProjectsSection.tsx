import { useState } from "react";
import { ArrowUpRight, Layers, Plus } from "lucide-react";
import { projects, type ProjectItem } from "@/data/projects";
import ProjectDetailModal from "@/components/portfolio/ProjectDetailModal";

const featuredProjects = projects.filter((project) => project.tier === "featured");
const additionalProjects = projects.filter((project) => project.tier === "additional");

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading work-heading" data-reveal>
        <div>
          <p className="section-index">Selected work / {String(projects.length).padStart(2, "0")}</p>
          <h2 id="work-title">Selected <span>work</span></h2>
        </div>
        <p className="section-intro">
          Real websites and software interfaces—focused on structure, usability, and production implementation.
        </p>
      </div>

      <div className="work-featured-list">
        {featuredProjects.map((project, index) => {
          const primaryShot = project.screenshots[0];
          const shotCount = project.screenshots.length;
          const screenshotLabel = shotCount === 1 ? "screenshot" : "screenshots";
          const viewLabel = shotCount === 1 ? "view" : "views";

          return (
            <article
              key={project.slug}
              id={`project-${project.slug}`}
              tabIndex={-1}
              className={`work-ledger${index % 2 === 1 ? " work-ledger--reversed" : ""}`}
              data-reveal
              aria-labelledby={`project-title-${project.slug}`}
            >
              <div className="project-visual">
                <button
                  type="button"
                  className="project-preview"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Inspect ${project.name} ${screenshotLabel} and case study (${shotCount} ${viewLabel})`}
                >
                  <div className="project-frame">
                    <div className="project-frame-bar" aria-hidden="true">
                      <div className="project-frame-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="project-frame-domain">{project.domainLabel ?? project.name}</span>
                      <span className="project-frame-counter">{shotCount} {viewLabel}</span>
                    </div>
                    {primaryShot && (
                      <div
                        className={`project-frame-media${primaryShot.orientation ? ` project-frame-media--${primaryShot.orientation}` : ""}`}
                      >
                        <img
                          src={primaryShot.src}
                          alt={primaryShot.alt}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                  </div>
                  <span className="project-preview-hint">
                    <Layers size={14} aria-hidden="true" />
                    Inspect project · {shotCount} {screenshotLabel}
                  </span>
                </button>

                <div className="project-visual-caption">
                  <span>{primaryShot?.label ?? "Application interface"}</span>
                  <span>{project.type}</span>
                </div>
              </div>

              <div className="ledger-copy project-copy">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <h3 id={`project-title-${project.slug}`}>{project.name}</h3>
                <p className="project-overview">{project.summary}</p>

                <ul className="project-tech-list" aria-label="Technologies used">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  <button
                    type="button"
                    className="button button-primary project-explore-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    Explore case study
                    <Plus size={16} aria-hidden="true" />
                  </button>

                  {project.liveUrl && (
                    <a
                      className="button button-quiet project-live-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit live site <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {additionalProjects.length > 0 && (
        <div className="work-archive" data-reveal aria-label="Additional projects">
          <div className="work-archive-head">
            <p className="section-index">More builds</p>
            <p>Smaller utilities, client websites, and focused engineering work.</p>
          </div>
          <div className="work-archive-list">
            {additionalProjects.map((project) => (
              <article key={project.slug} className="work-archive-row">
                <span className="work-archive-num">{project.number}</span>
                <div className="work-archive-main">
                  <div className="work-archive-title">
                    <h3>{project.name}</h3>
                    <span>{project.category}</span>
                  </div>
                  <p>{project.summary}</p>
                  <ul className="project-tech-list project-tech-list--compact" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="work-archive-actions">
                  <button
                    type="button"
                    className="button button-quiet"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details <Plus size={15} aria-hidden="true" />
                  </button>
                  {project.liveUrl && (
                    <a
                      className="text-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.name} live site`}
                    >
                      Live <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      <div className="work-cta" data-reveal>
        <p>Have a product or feature in mind?</p>
        <a className="button button-quiet" href="#contact">
          Tell me about it <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;
