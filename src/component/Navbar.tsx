import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '0 2rem',
      background: scrolled ? 'rgba(10,12,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'var(--transition)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '70px',
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: 40, height: 40,
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#000',
          fontWeight: 900,
        }}>VK</div>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1.5rem',
          letterSpacing: '0.1em', color: 'var(--text)',
        }}>TECHNOLOGIES</span>
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '2.5rem' }} className="desktop-nav">
        {links.map(l => (
          <Link key={l.to} to={l.to} style={{
            fontWeight: 500, fontSize: '1.1rem', letterSpacing: '0.05em',
            color: location.pathname === l.to ? 'var(--accent)' : 'var(--muted)',
            transition: 'var(--transition)',
            position: 'relative',
          }}>
            {l.label}
            {location.pathname === l.to && (
              <span style={{
                position: 'absolute', bottom: -4, left: 0, right: 0,
                height: 2, background: 'var(--accent)', borderRadius: 2,
              }} />
            )}
          </Link>
        ))}
      </div>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" style={{
        display: 'none', background: 'none', border: 'none',
        cursor: 'pointer', padding: '0.5rem', color: 'var(--text)',
      }} className="hamburger">
        <div style={{
          width: 24, height: 2, background: open ? 'var(--accent)' : 'var(--text)',
          transition: 'var(--transition)',
          transform: open ? 'rotate(45deg) translateY(8px)' : 'none',
        }} />
        <div style={{
          width: 24, height: 2, background: 'var(--text)', margin: '5px 0',
          opacity: open ? 0 : 1, transition: 'var(--transition)',
        }} />
        <div style={{
          width: 24, height: 2, background: open ? 'var(--accent)' : 'var(--text)',
          transition: 'var(--transition)',
          transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none',
        }} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 70, left: 0, right: 0,
          background: 'rgba(10,12,16,0.98)', backdropFilter: 'blur(20px)',
          padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
          borderBottom: '1px solid var(--border)',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontSize: '1.4rem', fontFamily: 'var(--font-display)', letterSpacing: '0.1em',
              color: location.pathname === l.to ? 'var(--accent)' : 'var(--text)',
            }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}