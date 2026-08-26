import { Link } from "react-router-dom";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.cardImages ? (
        <div className="project-card-images">
          {project.cardImages.map((image) => (
            <div className="project-card-image" key={image.src}>
              <img
                src={`${import.meta.env.BASE_URL}${image.src}`}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="image-placeholder" aria-label="Project image placeholder">
          Image to come
        </div>
      )}
      <div className="project-card-info">
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
      </div>
    </article>
  );
}
