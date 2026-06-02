import { featuredProjects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="section-heading">
        <p className="section-kicker">Featured Projects</p>
        <h2>Projetos que mostram backend além do CRUD.</h2>
      </div>
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
