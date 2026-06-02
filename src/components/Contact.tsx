import { links } from '../data/projects';

const contactItems = [
  { label: 'GitHub', value: 'github.com/Dolanss', href: links.github },
  { label: 'LinkedIn', value: 'gabrielfsdoliveira', href: links.linkedin },
  { label: 'Email', value: links.email, href: `mailto:${links.email}` },
  { label: 'Telefone', value: links.phoneDisplay, href: links.phoneHref },
  { label: 'WhatsApp', value: links.phoneDisplay, href: links.whatsapp },
];

export function Contact() {
  return (
    <section className="section-shell contact" id="contact">
      <div>
        <p className="section-kicker">Contato</p>
        <h2>Open to Backend Java/Spring opportunities.</h2>
        <p className="contact-copy">
          Conversas sobre ERP, fiscal/contábil, fintech, mensageria, APIs e sistemas distribuídos.
        </p>
      </div>
      <div className="contact-grid">
        {contactItems.map((item) => (
          <a
            className="contact-item"
            href={item.href}
            key={item.label}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={`${item.label}: ${item.value}`}
          >
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}
