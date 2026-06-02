import { links } from '../data/projects';

const footerLinks = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'Email', href: `mailto:${links.email}` },
  { label: 'WhatsApp', href: links.whatsapp },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <strong>Gabriel Oliveira</strong>
        <span>Building backend systems for fiscal, ERP and distributed environments.</span>
      </div>
      <div className="footer-stack" aria-label="Stack principal">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>RabbitMQ</span>
        <span>Redis</span>
        <span>GCP</span>
      </div>
      <nav className="footer-links" aria-label="Links rápidos do rodapé">
        {footerLinks.map((link) => (
          <a
            href={link.href}
            key={link.label}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <span className="footer-copy">© {new Date().getFullYear()} Gabriel Oliveira</span>
    </footer>
  );
}
