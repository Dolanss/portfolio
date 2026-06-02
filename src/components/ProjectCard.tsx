import { ArchitectureDiagram } from './ArchitectureDiagram';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card-main">
        <div>
          <p className="card-label">Caso técnico</p>
          <h3>{project.name}</h3>
        </div>
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir repositório ${project.name} no GitHub`}
        >
          GitHub
        </a>
      </div>
      <p>{project.description}</p>
      <ArchitectureDiagram type={project.diagram} labels={project.architecture} title={`${project.name} architecture`} />
      <div className="detail-block">
        <strong>Problema técnico</strong>
        <span>{project.problem}</span>
      </div>
      <div className="detail-block">
        <strong>Solução aplicada</strong>
        <span>{project.solution}</span>
      </div>
      <div className="detail-block">
        <strong>Stack</strong>
        <div className="stack-list" aria-label={`Stack de ${project.name}`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="detail-block impact-block">
        <strong>Impacto operacional</strong>
        <span>{project.impact}</span>
      </div>
      <div className="demonstrates-block">
        <strong>What this demonstrates</strong>
        <span>{project.demonstrates}</span>
      </div>
      <div className="tag-row" aria-label={`Tags técnicas de ${project.name}`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
