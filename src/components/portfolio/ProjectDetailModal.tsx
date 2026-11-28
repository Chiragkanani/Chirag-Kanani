import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectItem } from "@/data/projects";
import PortfolioImage from "@/components/portfolio/PortfolioImage";

interface ProjectDetailModalProps {
  /** The case study to show; `null` closes the dialog (with an exit animation). */
  project: ProjectItem | null;
  /** Asks the owner to close the dialog (it controls the URL); the dialog animates out once `project` becomes null. */
  onClose: () => void;
}

const MODAL_EXIT_MS = 200;

const ProjectDetailModal = ({ project, onClose }: ProjectDetailModalProps) => {
  const [renderedProject, setRenderedProject] = useState<ProjectItem | null>(project);
  const [isClosing, setIsClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const galleryTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const isRenderedRef = useRef(Boolean(project));
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    if (project) {
      isRenderedRef.current = true;
      setRenderedProject(project);
      setIsClosing(false);
      setActiveIndex(0);
      return;
    }

    if (!isRenderedRef.current) return;
    const finishClose = () => {
      isRenderedRef.current = false;
      setIsClosing(false);
      setRenderedProject(null);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      closeTimerRef.current = null;
      finishClose();
    }, MODAL_EXIT_MS);
  }, [project]);

  useEffect(() => () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!renderedProject) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 10);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((element) => element.offsetParent !== null);

        if (focusableElements.length === 0) {
          event.preventDefault();
          dialogRef.current.focus();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const focusIsOutsideDialog = !dialogRef.current.contains(document.activeElement);
        if (focusIsOutsideDialog) {
          event.preventDefault();
          (event.shiftKey ? lastElement : firstElement).focus();
        } else if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
      if (renderedProject.screenshots.length <= 1) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % renderedProject.screenshots.length);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex(
          (current) => (current - 1 + renderedProject.screenshots.length) % renderedProject.screenshots.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus({ preventScroll: true });
    };
  }, [renderedProject]);

  if (!renderedProject) return null;

  const screenshots = renderedProject.screenshots;
  const activeShot = screenshots[activeIndex] ?? screenshots[0];
  const hasMultipleShots = screenshots.length > 1;
  const surfaceIndexes = new Map<string, number>();
  screenshots.forEach((shot, index) => {
    if (shot.surface && !surfaceIndexes.has(shot.surface)) surfaceIndexes.set(shot.surface, index);
  });
  const surfaces = Array.from(surfaceIndexes, ([surface, index]) => ({ surface, index }));

  const showPrev = () => {
    setActiveIndex((current) => (current - 1 + screenshots.length) % screenshots.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % screenshots.length);
  };

  return (
    <div
      className={`project-modal-backdrop${isClosing ? " is-closing" : ""}`}
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={`project-modal${isClosing ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
      >
        <header className="project-modal-header">
          <div className="project-modal-title-group">
            <p className="project-modal-kicker">
              <span>Project {renderedProject.number}</span>
              <span>{renderedProject.category}</span>
            </p>
            <h2 id="project-modal-title">{renderedProject.name}</h2>
          </div>

          <div className="project-modal-header-actions">
            {renderedProject.liveUrl && (
              <a
                className="button button-primary project-modal-live"
                href={renderedProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit live site <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            {renderedProject.repoUrl && (
              <a
                className="button button-quiet project-modal-repo"
                href={renderedProject.repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                Source <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            )}
            <button
              ref={closeButtonRef}
              type="button"
              className="project-modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="project-modal-body">
          {activeShot && (
            <section className="project-gallery" aria-label="Project screenshots">
              {surfaces.length > 1 && (
                <div className="project-surfaces" role="group" aria-label="View product surface">
                  {surfaces.map(({ surface, index }) => (
                    <button
                      key={surface}
                      type="button"
                      className="project-surface-button"
                      aria-pressed={activeShot.surface === surface}
                      onClick={() => setActiveIndex(index)}
                    >
                      {surface}
                    </button>
                  ))}
                </div>
              )}
              <div className="project-gallery-stage">
                <div className="project-frame-bar" aria-hidden="true">
                  <div className="project-frame-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="project-frame-domain">{renderedProject.domainLabel ?? renderedProject.name}</span>
                  <span className="project-frame-counter">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={`project-gallery-viewport${activeShot.orientation ? ` project-gallery-viewport--${activeShot.orientation}` : ""}`}
                  id="project-gallery-panel"
                  role={hasMultipleShots ? "tabpanel" : undefined}
                  aria-labelledby={hasMultipleShots ? `project-gallery-tab-${activeIndex}` : undefined}
                >
                  <PortfolioImage
                    key={activeShot.src}
                    src={activeShot.src}
                    alt={activeShot.alt}
                    decoding="async"
                  />
                </div>

                <div className="project-gallery-bar">
                  <div className="project-gallery-caption">
                    <strong>{activeShot.label}</strong>
                    <span>{activeShot.caption}</span>
                  </div>
                  {hasMultipleShots && (
                    <div className="project-gallery-controls">
                      <button
                        type="button"
                        className="gallery-nav-btn"
                        onClick={showPrev}
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft size={18} aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        className="gallery-nav-btn"
                        onClick={showNext}
                        aria-label="Next screenshot"
                      >
                        <ChevronRight size={18} aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {hasMultipleShots && (
                <div className="project-gallery-thumbs" role="tablist" aria-label="Select screenshot">
                  {screenshots.map((shot, index) => (
                    <button
                      key={shot.label}
                      ref={(element) => { galleryTabRefs.current[index] = element; }}
                      type="button"
                      role="tab"
                      id={`project-gallery-tab-${index}`}
                      aria-selected={index === activeIndex}
                      aria-controls="project-gallery-panel"
                      tabIndex={index === activeIndex ? 0 : -1}
                      className={`gallery-thumb${index === activeIndex ? " is-active" : ""}${shot.orientation ? ` gallery-thumb--${shot.orientation}` : ""}`}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(event) => {
                        let nextIndex: number | null = null;
                        if (event.key === "ArrowRight") nextIndex = (index + 1) % screenshots.length;
                        if (event.key === "ArrowLeft") nextIndex = (index - 1 + screenshots.length) % screenshots.length;
                        if (event.key === "Home") nextIndex = 0;
                        if (event.key === "End") nextIndex = screenshots.length - 1;
                        if (nextIndex !== null) {
                          event.preventDefault();
                          event.stopPropagation();
                          setActiveIndex(nextIndex);
                          galleryTabRefs.current[nextIndex]?.focus();
                        }
                      }}
                    >
                      <PortfolioImage src={shot.src} alt="" loading="lazy" decoding="async" />
                      <span>
                        <small>{String(index + 1).padStart(2, "0")}</small>
                        {shot.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          )}

          <div className="project-modal-content">
            <div className="project-modal-main">
              <section className="project-modal-block">
                <h3>Overview</h3>
                <p>{renderedProject.overview}</p>
              </section>

              <section className="project-modal-block">
                <h3>Purpose &amp; problem</h3>
                <p>{renderedProject.purpose}</p>
              </section>

              <section className="project-modal-block project-contributions">
                <h3>My contributions</h3>
                <ul>
                  {renderedProject.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </section>

              <section className="project-modal-block">
                <h3>Key features</h3>
                <ul className="project-features">
                  {renderedProject.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              {renderedProject.integrations && renderedProject.integrations.length > 0 && (
                <section className="project-modal-block">
                  <h3>Connected integrations</h3>
                  <ul className="project-integration-grid">
                    {renderedProject.integrations.map((integration) => {
                      const Icon = integration.icon;
                      const content = (
                        <>
                          <span className="project-integration-mark" aria-hidden="true">
                            {integration.logo ? (
                              <PortfolioImage src={integration.logo} alt="" loading="lazy" />
                            ) : Icon ? (
                              <Icon size={20} strokeWidth={1.75} />
                            ) : (
                              <span>{integration.monogram ?? integration.name.slice(0, 1)}</span>
                            )}
                          </span>
                          <span className="project-integration-copy">
                            <strong>{integration.name}</strong>
                            <small>{integration.description}</small>
                          </span>
                        </>
                      );

                      return (
                        <li key={integration.name}>
                          {integration.url ? (
                            <a className="project-integration-card" href={integration.url} target="_blank" rel="noreferrer">
                              {content}
                            </a>
                          ) : (
                            <div className="project-integration-card">{content}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            </div>

            {/* Kept short so it can stay in view (sticky) while the main column scrolls. */}
            <aside className="project-modal-aside" aria-label="Project details">
              <section className="project-modal-block">
                <h3>Technologies</h3>
                <ul className="project-tech-list" aria-label="Technologies used">
                  {renderedProject.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </section>

              {renderedProject.links && renderedProject.links.length > 0 && (
                <section className="project-modal-block">
                  <h3>Project links</h3>
                  <ul className="project-link-list">
                    {renderedProject.links.map((link) => (
                      <li key={link.url}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
