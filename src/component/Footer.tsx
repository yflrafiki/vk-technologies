import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      borderRadius: '0 0 18px 18px',
      padding: '3rem 1.5rem 1.5rem',
      color: 'var(--text)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.4rem',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{
              width: 34, height: 34,
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '0.92rem', color: '#000',
            }}>VK</div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', letterSpacing: '0.08em' }}>
              ENGINEERING TECH SOLUTIONS
            </span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Your trusted partner for engineering, construction, and technology solutions across Ghana.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '0.9rem', fontSize: '1rem' }}>QUICK LINKS</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link key={to} to={to} style={{ display: 'block', color: 'var(--muted)', marginBottom: '0.5rem', fontSize: '0.93rem', transition: 'var(--transition)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              → {label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '0.8rem', fontSize: '1rem' }}>SERVICES</h4>
          {['Air Conditioning', 'CCTV & Security', 'Building & Construction', 'Civil Engineering', 'Security Fencing', 'Electrical Works'].map(s => (
            <p key={s} style={{ color: 'var(--muted)', marginBottom: '0.45rem', fontSize: '0.92rem' }}>→ {s}</p>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '0.8rem', fontSize: '1rem' }}>CONTACT US</h4>
          {[
            ['📍', 'Accra, Ghana'],
            ['📞', '+233 24 4657 280'],
            ['✉️', 'info@vkengineeringtechsolutions.com'],
            ['🕐', 'Mon – Sat: 8AM – 6PM'],
          ].map(([icon, text]) => (
            <div key={text} style={{ display: 'flex', gap: '0.7rem', marginBottom: '0.65rem' }}>
              <span>{icon}</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: 1200, margin: '2.5rem auto 0',
        borderTop: '1px solid var(--border)', paddingTop: '1.2rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} VK Engineering Tech Solutions. All rights reserved.
        </p>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
          Built with precision & passion 🔥
        </p>
      </div>
    </footer>
  );
}