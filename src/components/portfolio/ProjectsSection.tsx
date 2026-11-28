import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Layers, Plus } from "lucide-react";
import { caseStudyHref, projectFromHash, projects, type ProjectItem } from "@/data/projects";
import ProjectDetailModal from "@/components/portfolio/ProjectDetailModal";
import PortfolioImage from "@/components/portfolio/PortfolioImage";

const featuredProjects = projects.filter((project) => project.tier === "featured");
const additionalProjects = projects.filter((project) => project.tier === "additional");

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  // True when the open case study added its own history entry (opened from a link on this page),
  // so closing it can step back instead of navigating away from the site.
  const openedInPageRef = useRef(false);

  useEffect(() => {
    const syncFromHash = (fromNavigation: boolean) => {
      const project = projectFromHash(window.location.hash);
      if (fromNavigation) openedInPageRef.current = Boolean(project);
      setSelectedProject(project);
    };
    syncFromHash(false);
    const onHashChange = () => syncFromHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const closeProject = useCallback(() => {
    if (openedInPageRef.current) {
      openedInPageRef.current = false;
      window.history.back();
      return;
    }
    // Landed directly on a case-study link: drop the hash without leaving the page.
    window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
    setSelectedProject(null);
  }, []);

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
          const screenLabel = shotCount === 1 ? "screen" : "screens";
          const previewImage = primaryShot?.src ?? project.coverImage;
          const previewAlt = primaryShot?.alt ?? project.coverAlt;
          const previewOrientation = primaryShot?.orientation ?? (project.coverImage ? "landscape" : undefined);

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
                <a
                  className="project-preview"
                  href={caseStudyHref(project.slug)}
                  aria-label={shotCount > 0
                    ? `Open the ${project.name} case study (${shotCount} ${screenLabel})`
                    : `Open the ${project.name} case study`}
                >
                  <span className="project-frame">
                    <span className="project-frame-bar" aria-hidden="true">
                      <span className="project-frame-dots">
                        <span />
                        <span />
                        <span />
                      </span>
                      <span className="project-frame-domain">{project.domainLabel ?? project.name}</span>
                      <span className="project-frame-counter">{shotCount > 0 ? `${shotCount} ${screenLabel}` : "Case study"}</span>
                    </span>
                    {previewImage && (
                      <span
                        className={`project-frame-media${previewOrientation ? ` project-frame-media--${previewOrientation}` : ""}`}
                      >
                        <PortfolioImage
                          src={previewImage}
                          alt={previewAlt ?? ""}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    )}
                  </span>
                  <span className="project-preview-hint" aria-hidden="true">
                    <Layers size={14} aria-hidden="true" />
                    {shotCount > 0 ? `View case study · ${shotCount} ${screenLabel}` : "View case study"}
                  </span>
                </a>

                <div className="project-visual-caption">
                  <span>{primaryShot?.label ?? project.coverLabel ?? "Application interface"}</span>
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
                  <a className="button button-primary project-explore-btn" href={caseStudyHref(project.slug)}>
                    Explore case study
                    <Plus size={16} aria-hidden="true" />
                  </a>

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
                  <a className="button button-quiet" href={caseStudyHref(project.slug)}>
                    Details <Plus size={15} aria-hidden="true" />
                  </a>
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
          Tell me about it <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={closeProject} />
    </section>
  );
};

export default ProjectsSection;
