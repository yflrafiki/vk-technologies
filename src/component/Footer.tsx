import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '../assets/logo.png';
import Reveal from './fx/Reveal';

const quickLinks = [
  ['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact'],
] as const;

const serviceList = [
  'Air Conditioning', 'CCTV & Security', 'Building & Construction',
  'Civil Engineering', 'Security Fencing', 'Electrical Works',
];

const contactBits = [
  { icon: MapPin, text: 'Accra, Ghana' },
  { icon: Phone, text: '+233 24 4657 280' },
  { icon: Mail, text: 'zivengineeringtechsolutions@gmail.com' },
  { icon: Clock, text: 'Mon – Sat: 8AM – 6PM' },
];

const colHead: React.CSSProperties = {
  fontFamily: 'var(--font-tech)',
  fontSize: '0.72rem',
  fontWeight: 600,
  letterSpacing: '0.24em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: '1.1rem',
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 3vw, 2rem)' }}>
        <Reveal
          stagger
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <div>
            <Link to="/" aria-label="Ziv Engineering Tech Solutions — home" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              <img src={logo} alt="Ziv Engineering Tech Solutions" style={{ height: 46, width: 'auto' }} />
            </Link>
            <p style={{ color: 'var(--muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>
              Your trusted partner for engineering, construction, and technology solutions across Ghana.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 style={colHead}>Quick Links</h4>
            {quickLinks.map(([to, label]) => (
              <Link key={to} to={to} className="footer__link">{label}</Link>
            ))}
          </nav>

          <div>
            <h4 style={colHead}>Services</h4>
            {serviceList.map(s => (
              <Link key={s} to="/services" className="footer__link">{s}</Link>
            ))}
          </div>

          <div>
            <h4 style={colHead}>Contact Us</h4>
            {contactBits.map(c => (
              <div key={c.text} style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start', marginBottom: '0.7rem' }}>
                <c.icon size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                <span style={{ color: 'var(--muted)', fontSize: '0.88rem', wordBreak: 'break-word' }}>{c.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="footer__watermark" aria-hidden="true">ZIV ENGINEERING</div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div
          className="container"
          style={{
            paddingBlock: '1.2rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '0.6rem',
            fontFamily: 'var(--font-tech)', fontSize: '0.72rem',
            letterSpacing: '0.08em', color: 'var(--muted)',
          }}
        >
          <p>© {new Date().getFullYear()} Ziv Engineering Tech Solutions. All rights reserved.</p>
          <p>Built with precision &amp; passion</p>
        </div>
      </div>
    </footer>
  );
}
