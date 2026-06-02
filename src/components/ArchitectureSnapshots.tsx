import { architectureFlows } from '../data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export function ArchitectureSnapshots() {
  return (
    <section className="section-shell" id="architecture">
      <div className="section-heading">
        <p className="section-kicker">Architecture snapshots</p>
        <h2>Fluxos que aparecem em sistemas corporativos reais.</h2>
      </div>
      <div className="architecture-grid">
        {architectureFlows.map((flow) => (
          <article className="architecture-card" key={flow.title}>
            <ArchitectureDiagram type={flow.diagram} title={flow.title} />
            <div>
              <h3>{flow.title}</h3>
              <p>{flow.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
