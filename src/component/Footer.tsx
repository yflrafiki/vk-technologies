import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const quickLinks = [
  ['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact'],
] as const;

const serviceList = [
  'Air Conditioning', 'CCTV & Security', 'Building & Construction',
  'Civil Engineering', 'Security Fencing', 'Electrical Works',
];

const contactBits = [
  { text: 'Accra, Ghana', mono: false },
  { text: '+233 24 4657 280', mono: true },
  { text: 'zivengineeringtechsolutions@gmail.com', mono: false },
  { text: 'Mon – Sat: 8AM – 6PM', mono: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-12 footer__main">
        <div className="footer__brand">
          <Link to="/" aria-label="Ziv Engineering Tech Solutions — home" style={{ display: 'inline-block' }}>
            <img src={logo} alt="Ziv Engineering Tech Solutions" />
          </Link>
          <p>Your trusted partner for engineering, construction, and technology solutions across Ghana.</p>
        </div>

        <nav className="footer__col footer__col--links" aria-label="Footer navigation">
          <h2 className="eyebrow">Quick Links</h2>
          {quickLinks.map(([to, label]) => (
            <Link key={to} to={to} className="footer__link">{label}</Link>
          ))}
        </nav>

        <div className="footer__col footer__col--services">
          <h2 className="eyebrow">Services</h2>
          {serviceList.map(s => (
            <Link key={s} to="/services" className="footer__link">{s}</Link>
          ))}
        </div>

        <div className="footer__col footer__col--contact">
          <h2 className="eyebrow">Contact Us</h2>
          <ul className="footer__contact">
            {contactBits.map(c => (
              <li key={c.text} className={c.mono ? 'mono' : undefined}>{c.text}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="footer__base">
          <p>© {new Date().getFullYear()} Ziv Engineering Tech Solutions. All rights reserved.</p>
          <p>Built with precision &amp; passion</p>
        </div>
      </div>
    </footer>
  );
}
