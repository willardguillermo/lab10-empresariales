export default function Footer({ contact }) {
  return (
    <footer className="site-footer" id="contacto">
      <div><p className="eyebrow">Nos vemos en el cine</p><p>{contact.address}</p></div>
      <div><p><a href={`tel:${contact.phone}`}>{contact.phone}</a></p><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
      <p className="footer-note">Cartelera de práctica · DAE / Semana 09<br />Contacto ficticio para el laboratorio.</p>
    </footer>
  );
}
