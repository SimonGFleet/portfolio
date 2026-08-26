import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="project-page">
      <Link className="back-link" to="/">
        ← All projects
      </Link>

      <header className="project-heading">
        <p className="eyebrow">{project.category}</p>
        <h1>{project.name}</h1>
        {project.tagline && <p className="project-tagline">{project.tagline}</p>}
        {project.introduction ? (
          <div className="project-introduction">
            {project.introduction.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="project-overview">{project.overview}</p>
        )}
      </header>

      {project.callToAction && (
        <p className="project-cta">
          {project.callToAction.before}
          <a href={project.callToAction.href}>{project.callToAction.linkLabel}</a>
          {project.callToAction.after}
        </p>
      )}

      {project.statusLine && <p className="project-status">{project.statusLine}</p>}

      {project.images ? (
        <section className="project-gallery" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading">Inside the app</h2>
          <div className="project-gallery-grid">
            {project.images.map((image) => {
              const imageUrl = `${import.meta.env.BASE_URL}${image.src}`;

              return (
                <figure key={image.src}>
                  <a href={imageUrl} target="_blank" rel="noreferrer">
                    <img src={imageUrl} alt={image.alt} />
                  </a>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      ) : (
        <div className="project-hero-placeholder">Project photos will go here</div>
      )}

      <section className="project-details">
        <div>
          <h2>Built with</h2>
          <ul className="tags">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.caseStudy ? (
        <section className="case-study" aria-label={`${project.name} case study`}>
          {project.caseStudy.map((section) => (
            <article className="case-study-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </section>
      ) : (
        <p className="work-note">
          This project page will grow as we add screenshots, technical decisions,
          and lessons from the build.
        </p>
      )}
    </main>
  );
}
