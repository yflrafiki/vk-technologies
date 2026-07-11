import { useState, useEffect, useRef } from 'react';
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
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();

  // blur-on-scroll + hide on scroll down / reveal on scroll up
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        const delta = y - lastY.current;
        if (y > 140 && delta > 4) setHidden(true);
        else if (delta < -4 || y <= 140) setHidden(false);
        lastY.current = y;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''} ${hidden && !open ? 'nav--hidden' : ''}`}
        aria-label="Main navigation"
      >
        <Link to="/" className="nav__logo" aria-label="Ziv Engineering Tech Solutions — home">
          <img src={logo} alt="Ziv Engineering Tech Solutions" />
        </Link>

        <div className="nav__links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav__link ${location.pathname === l.to ? 'nav__link--active' : ''}`}
              aria-current={location.pathname === l.to ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          className="nav__burger"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`} aria-hidden={!open}>
        {links.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav__mobile-link ${location.pathname === l.to ? 'nav__mobile-link--active' : ''}`}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            <span className="idx">0{i + 1}</span>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
