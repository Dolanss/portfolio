import { techGroups } from '../data/projects';

export function TechStack() {
  return (
    <section className="section-shell" id="stack">
      <div className="section-heading">
        <p className="section-kicker">Tech Stack</p>
        <h2>Stack alinhada a vagas Java/Spring, ERP, fiscal e sistemas distribuídos.</h2>
      </div>
      <div className="tech-grid">
        {techGroups.map((group) => (
          <article className="tech-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="badge-list">
              {group.items.map((item) => (
                <span className="badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
