import heroImage from '../assets/backend-systems-hero.png';
import { heroBadges, heroIndicators, links } from '../data/projects';

const contactLinks = [
  { label: 'GitHub', href: links.github, aria: 'Abrir GitHub de Gabriel Oliveira' },
  { label: 'LinkedIn', href: links.linkedin, aria: 'Abrir LinkedIn de Gabriel Oliveira' },
  { label: 'Email', href: `mailto:${links.email}`, aria: 'Enviar email para Gabriel Oliveira' },
  { label: 'WhatsApp', href: links.whatsapp, aria: 'Enviar mensagem para Gabriel Oliveira no WhatsApp' },
];

export function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-content">
        <p className="eyebrow">Java Backend Developer · Spring Boot · ERP · Fiscal</p>
        <h1>Gabriel Oliveira</h1>
        <p className="hero-role">Backend Developer | Java | Spring Boot | Distributed Systems</p>
        <div className="hero-keywords" aria-label="Principais focos técnicos">
          {heroBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <p className="hero-copy">
          Construo APIs e serviços Java para fluxos fiscais, financeiros e ERP: integrações
          SEFAZ/SOAP, regras de negócio, mensageria, processamento assíncrono e bancos relacionais.
        </p>
        <div className="hero-meta" aria-label="Disponibilidade e localização">
          <span>Open to Backend Java/Spring opportunities</span>
          <span>Londrina - PR, Brazil</span>
          <a href={links.phoneHref} aria-label={`Ligar para Gabriel Oliveira: ${links.phoneDisplay}`}>
            {links.phoneDisplay}
          </a>
        </div>
        <div className="hero-indicators" aria-label="Indicadores técnicos">
          {heroIndicators.map((indicator) => (
            <span key={indicator}>{indicator}</span>
          ))}
        </div>
        <div className="hero-actions" aria-label="Links principais">
          {contactLinks.map((link) => (
            <a
              className={link.label === 'GitHub' ? 'button button-primary' : 'button button-secondary'}
              href={link.href}
              key={link.label}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={link.aria}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="hero-visual" aria-label="Visual abstrato de arquitetura backend">
        <img
          src={heroImage}
          alt="Visual técnico abstrato com serviços distribuídos, dados financeiros e infraestrutura cloud."
        />
        <div className="signal-panel" aria-hidden="true">
          <span>REST · MQ · SQL</span>
          <small>Spring Boot em domínios fiscais e financeiros</small>
        </div>
      </div>
    </section>
  );
}
