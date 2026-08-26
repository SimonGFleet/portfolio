import { Link } from "react-router-dom";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="image-placeholder" aria-label="Project image placeholder">
        Image to come
      </div>
      <p className="eyebrow">{project.category}</p>
      <h2>{project.name}</h2>
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Technologies">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <Link className="text-link" to={`/projects/${project.slug}`}>
        View project <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
