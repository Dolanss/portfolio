const navItems = [
  { label: 'Sobre', href: '#about' },
  { label: 'Foco', href: '#focus' },
  { label: 'Arquitetura', href: '#architecture' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Produção', href: '#production' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Contato', href: '#contact' },
];

export function Header() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      <header className="site-header" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="Ir para o início">
          <span className="brand-mark">GO</span>
          <span>Gabriel Oliveira</span>
        </a>
        <nav className="nav-links" aria-label="Seções do portfólio">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
