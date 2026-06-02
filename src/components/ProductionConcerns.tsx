import { productionConcerns } from '../data/projects';

export function ProductionConcerns() {
  return (
    <section className="section-shell production-section" id="production">
      <div className="section-heading">
        <p className="section-kicker">Production Concerns</p>
        <h2>Detalhes que importam quando backend sai do ambiente local.</h2>
      </div>
      <div className="production-grid">
        {productionConcerns.map((item) => (
          <article className="production-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
