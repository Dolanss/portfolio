import { engineeringFocus } from '../data/projects';

export function EngineeringFocus() {
  return (
    <section className="section-shell" id="focus">
      <div className="section-heading">
        <p className="section-kicker">Engineering Focus</p>
        <h2>Onde Gabriel costuma gerar valor em times backend.</h2>
      </div>
      <div className="focus-grid">
        {engineeringFocus.map((item) => (
          <article className="focus-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
