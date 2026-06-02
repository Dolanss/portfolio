const highlights = [
  'APIs REST e serviços Java/Spring Boot para sistemas corporativos.',
  'Integrações fiscais com SEFAZ/SOAP, emissão fiscal e processamento de XML.',
  'RabbitMQ e Redis para filas, cache, desacoplamento e rotinas assíncronas.',
  'Modelagem de regras fiscais e financeiras com foco em manutenção do domínio.',
  'SQL, JPA/Hibernate e bancos relacionais em fluxos transacionais.',
  'Docker, GCP, logs, métricas e deploy de aplicações cloud-native.',
  'Automações para reduzir trabalho manual em rotinas operacionais.',
];

export function ExperienceHighlights() {
  return (
    <section className="section-shell section-grid highlights" id="experience">
      <div>
        <p className="section-kicker">Experience Highlights</p>
        <h2>Experiência que conversa com o trabalho de Backend Pleno.</h2>
      </div>
      <ul className="highlight-list">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </section>
  );
}
