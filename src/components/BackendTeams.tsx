import { backendTeamStrengths } from '../data/projects';

export function BackendTeams() {
  return (
    <section className="section-shell section-grid backend-teams" id="backend-teams">
      <div>
        <p className="section-kicker">What I bring to backend teams</p>
        <h2>Conhecimento prático para produto, operação e domínio.</h2>
      </div>
      <ul className="bring-list">
        {backendTeamStrengths.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
