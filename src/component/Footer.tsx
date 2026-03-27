import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)', borderTop: '1px solid var(--border)',
      padding: '4rem 2rem 2rem',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '3rem',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{
              width: 36, height: 36,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#000',
            }}>VK</div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', letterSpacing: '0.1em' }}>
              ENGINEERING TECH SOLUTIONS
            </span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Your trusted partner for engineering, construction, and technology solutions across Ghana.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>QUICK LINKS</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} style={{ display: 'block', color: 'var(--muted)', marginBottom: '0.6rem', fontSize: '1.05rem', transition: 'var(--transition)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              → {label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>SERVICES</h4>
          {['Air Conditioning', 'CCTV & Security', 'Building & Construction', 'Civil Engineering', 'Security Fencing', 'Electrical Works'].map(s => (
            <p key={s} style={{ color: 'var(--muted)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>→ {s}</p>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.1rem' }}>CONTACT US</h4>
          {[
            ['📍', 'Accra, Ghana'],
            ['📞', '+233 24 4657 280'],
            ['✉️', 'info@vkengineeringtechsolutions.com'],
            ['🕐', 'Mon – Sat: 8AM – 6PM'],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', gap: '0.7rem', marginBottom: '0.7rem' }}>
              <span>{icon}</span>
              <span style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: 1200, margin: '3rem auto 0',
        borderTop: '1px solid var(--border)', paddingTop: '1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          © {new Date().getFullYear()} VK Engineering Tech Solutions. All rights reserved.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
          Built with precision & passion 🔥
        </p>
      </div>
    </footer>
  );
}