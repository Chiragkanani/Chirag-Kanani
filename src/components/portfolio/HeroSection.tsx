import { useEffect, useState, type ImgHTMLAttributes } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import ProfilePhoto from "@/components/portfolio/ProfilePhoto";
import PortfolioImage from "@/components/portfolio/PortfolioImage";
import { caseStudyHref, projects, type ProjectItem } from "@/data/projects";

const showcase = projects.filter((project) => project.tier === "featured");

// React 18 only forwards the lowercase attribute name (React 19 adds `fetchPriority`).
const highPriority = { fetchpriority: "high" } as ImgHTMLAttributes<HTMLImageElement>;

const previewOf = (project: ProjectItem) => {
  const shot = project.screenshots[0];
  return {
    src: shot?.src ?? project.coverImage,
    orientation: shot?.orientation === "square" || shot?.orientation === "portrait" ? "contain" : "cover",
  };
};

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = showcase[activeIndex];
  const preview = previewOf(activeProject);

  // Warm the cache for the other previews once the page is idle, on layouts that show the preview.
  useEffect(() => {
    if (!window.matchMedia("(min-width: 681px)").matches) return;
    const warm = () => {
      showcase.slice(1).forEach((project) => {
        const { src } = previewOf(project);
        if (!src) return;
        const image = new Image();
        image.decoding = "async";
        image.src = src;
      });
    };
    // Safari has no requestIdleCallback; fall back to a delayed warm-up there.
    if (typeof window.requestIdleCallback === "function") {
      const handle = window.requestIdleCallback(warm, { timeout: 4000 });
      return () => window.cancelIdleCallback(handle);
    }
    const timer = window.setTimeout(warm, 2500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-kicker">
            <ProfilePhoto className="hero-avatar" loading="eager" />
            <span className="hero-kicker-copy">
              <span className="hero-kicker-name">Chirag Kanani</span>
              <span className="hero-kicker-role">Senior Full Stack Developer</span>
            </span>
          </div>
          <h1 id="hero-title">I turn product ideas <span>into dependable software.</span></h1>
          <p className="hero-intro">I partner with startups, SMBs, and agencies to build web apps, mobile apps, APIs, and practical AI integrations—from MVP through production. I choose tools to fit the problem and stay accountable for the details.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Discuss your project <ArrowRight size={16} aria-hidden="true" /></a>
            <a className="button button-quiet" href="#work">See selected work <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote">
            <span>Open to focused freelance & contract work</span>
            <span className="footnote-separator" aria-hidden="true" />
            <span>Remote collaboration</span>
          </div>
        </div>

        <div className="hero-work">
          <div className="hero-work-head">
            <p className="hero-work-title" id="hero-work-title">Selected work</p>
            <span>{String(showcase.length).padStart(2, "0")} case studies</span>
          </div>

          {/* Pointer shortcut only; keyboard and screen-reader users get the same links in the list below. */}
          <a
            className="hero-work-preview"
            href={caseStudyHref(activeProject.slug)}
            tabIndex={-1}
            aria-hidden="true"
          >
            <span className="project-frame hero-work-frame">
              <span className="project-frame-bar">
                <span className="project-frame-dots"><span /><span /><span /></span>
                <span className="project-frame-domain">{activeProject.domainLabel ?? activeProject.name}</span>
                <span className="project-frame-counter">Open case study</span>
              </span>
              <span className={`hero-work-media hero-work-media--${preview.orientation}`}>
                {preview.src && (
                  <PortfolioImage
                    key={activeProject.slug}
                    src={preview.src}
                    alt=""
                    width={1440}
                    height={720}
                    loading="eager"
                    decoding="async"
                    {...(activeIndex === 0 ? highPriority : {})}
                  />
                )}
              </span>
            </span>
          </a>

          <ol className="hero-work-list" aria-labelledby="hero-work-title">
            {showcase.map((project, index) => (
              <li key={project.slug}>
                <a
                  className={`hero-work-item${index === activeIndex ? " is-active" : ""}`}
                  href={caseStudyHref(project.slug)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="hero-work-num">{project.number}</span>
                  <span className="hero-work-name">{project.name}</span>
                  <span className="hero-work-type">{project.type}</span>
                  <ArrowRight className="hero-work-arrow" size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
