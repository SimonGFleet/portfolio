import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <main>
      <section className="intro">
        <p className="eyebrow">Software portfolio</p>
        <h1>I build useful software around real-world problems.</h1>
        <p>
          I’m Simon Fleet. These projects cover mobile products, business
          operations, personal analytics, and market simulation.
        </p>
      </section>

      <section className="projects-section" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Selected projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
