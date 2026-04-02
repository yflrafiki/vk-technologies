import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const getTimeTheme = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getTimeTheme);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTheme(getTimeTheme());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: 'clamp(0.5rem, 2vw, 2rem)',
      background: scrolled ? 'rgba(10,12,16,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'var(--transition)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      minHeight: '70px',
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.25rem, 1vw, 0.5rem)' }}>
        <img
          src={logo}
          alt="Ziv Engineering Tech Solutions"
          style={{
            height: 'clamp(36px, 8vw, 52px)',
            width: 'auto',
            objectFit: 'contain',
            flexShrink: 0,
          }}
        />
      </Link>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: 'clamp(1.5rem, 3vw, 2.5rem)', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <Link key={l.to} to={l.to} style={{
            fontWeight: 500, 
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', 
            letterSpacing: '0.05em',
            color: location.pathname === l.to ? 'var(--accent)' : 'var(--muted)',
            transition: 'var(--transition)',
            position: 'relative',
            whiteSpace: 'nowrap',
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
        flexShrink: 0,
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
          padding: 'clamp(1.5rem, 4vw, 2rem)', 
          display: 'flex', flexDirection: 'column', 
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          borderBottom: '1px solid var(--border)',
          maxHeight: 'calc(100vh - 70px)',
          overflowY: 'auto',
          zIndex: 999,
        }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
                fontFamily: 'var(--font-display)', 
                letterSpacing: '0.1em',
                color: location.pathname === l.to ? 'var(--accent)' : 'var(--text)',
              }}
            >{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          .logo-text { display: none !important; }
        }
        
        @media (min-width: 769px) {
          .logo-text { display: inline !important; }
        }
      `}</style>
    </nav>
  );
}