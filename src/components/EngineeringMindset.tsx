import { engineeringMindset } from '../data/projects';

export function EngineeringMindset() {
  return (
    <section className="section-shell" id="mindset">
      <div className="section-heading">
        <p className="section-kicker">Engineering Mindset</p>
        <h2>Preferências de engenharia para serviços que precisam continuar rodando.</h2>
      </div>
      <div className="mindset-grid">
        {engineeringMindset.map((item) => (
          <article className="mindset-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
