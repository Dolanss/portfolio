export function About() {
  return (
    <section className="section-shell section-grid" id="about">
      <div>
        <p className="section-kicker">Resumo</p>
        <h2>Backend Java para sistemas fiscais, financeiros e ERP.</h2>
      </div>
      <div className="section-copy">
        <p>
          Gabriel Oliveira trabalha com backend Java/Spring Boot, modelagem de regras de negócio,
          APIs REST e integração entre sistemas corporativos.
        </p>
        <p>
          Tem experiência em rotinas de ERP, fiscal/contábil e financeiro, incluindo processamento
          de arquivos fiscais, XMLs, integrações SOAP/SEFAZ, persistência com JPA/Hibernate e SQL.
        </p>
        <p>
          No dia a dia, combina RabbitMQ, Redis, Docker, GCP, testes e observabilidade para manter
          serviços mais simples de evoluir, debugar e operar.
        </p>
      </div>
    </section>
  );
}
