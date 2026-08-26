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
        <p>{project.overview}</p>
      </header>

      <div className="project-hero-placeholder">Project photos will go here</div>

      <section className="project-details">
        <div>
          <h2>What it does</h2>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Built with</h2>
          <ul className="tags">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </section>

      <p className="work-note">
        This project page will grow as we add screenshots, technical decisions,
        and lessons from the build.
      </p>
    </main>
  );
}
