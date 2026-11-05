export default function Header({ name, links }) {
  return (
    <header className="site-header">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">C.</span>
        <div><h1>{name}</h1><p>Historias que se viven en pantalla.</p></div>
      </div>
      <nav aria-label="Principal">
        <ul>{links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
      </nav>
    </header>
  );
}
