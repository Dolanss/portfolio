import { openSourceItems } from '../data/projects';

const workflowSteps = ['Fork', 'Study', 'Proposal', 'Improvement'];

export function OpenSource() {
  return (
    <section className="section-shell open-source" id="open-source">
      <div className="section-heading">
        <p className="section-kicker">Open Source</p>
        <h2>Leitura de código e contribuição no ecossistema Java.</h2>
        <p>
          Study/contribution forks com foco em proposed improvements, test reliability,
          Spring Boot integration behavior e leitura de código em projetos Java.
        </p>
      </div>
      <div className="oss-grid">
        {openSourceItems.map((item) => (
          <article className="oss-card" key={item.name}>
            <div className="project-card-main">
              <h3>{item.name}</h3>
              <a
                className="project-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${item.name} no GitHub`}
              >
                GitHub
              </a>
            </div>
            <p>{item.description}</p>
            <div className="oss-workflow" aria-label="Open source workflow">
              {workflowSteps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <div className="detail-block">
              <strong>Foco</strong>
              <span>{item.focus.join(' · ')}</span>
            </div>
            <div className="tag-row" aria-label={`Tags técnicas de ${item.name}`}>
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
