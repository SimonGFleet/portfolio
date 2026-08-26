import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <main>
      <section className="intro">
        <h2>I build software from ideas through to working products.</h2>
        <p>
          I'm Simon Fleet, a software engineer with a maths background working mainly in Python and Typescript.
          Below is a selection of projects I've built:
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
