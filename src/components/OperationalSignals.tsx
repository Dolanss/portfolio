import { operationalSignals } from '../data/projects';

export function OperationalSignals() {
  return (
    <section className="section-shell signal-section" aria-labelledby="signals-title">
      <div className="section-heading compact-heading">
        <p className="section-kicker">Sinais de experiência</p>
        <h2 id="signals-title">Impacto descrito de forma conservadora.</h2>
      </div>
      <div className="signal-grid">
        {operationalSignals.map((signal) => (
          <div className="signal-item" key={signal}>
            {signal}
          </div>
        ))}
      </div>
    </section>
  );
}
