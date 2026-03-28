import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)',
      borderTop: '1px solid var(--border)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
      borderRadius: '0 0 18px 18px',
      padding: 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 5vw, 1.5rem)',
      color: 'var(--text)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'clamp(1.5rem, 3vw, 2.4rem)',
      }}>
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(0.35rem, 0.8vw, 0.5rem)', 
            marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' 
          }}>
            <div style={{
              width: 'clamp(28px, 6vw, 34px)', 
              height: 'clamp(28px, 6vw, 34px)',
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              borderRadius: 8, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(0.75rem, 1.5vw, 0.92rem)', 
              color: '#000',
              flexShrink: 0,
            }}>
              VK
            </div>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', 
              letterSpacing: '0.08em' 
            }}>
              ENGINEERING TECH SOLUTIONS
            </span>
          </div>
          <p style={{ 
            color: 'var(--muted)', 
            fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)', 
            lineHeight: 1.7  
          }}>
            Your trusted partner for engineering, construction, and technology solutions across Ghana.
          </p>
        </div>

        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-display)', 
            letterSpacing: '0.08em', 
            color: 'var(--accent)', 
            marginBottom: 'clamp(0.6rem, 1.2vw, 0.9rem)', 
            fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' 
          }}>QUICK LINKS</h4>
          {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/contact', 'Contact']].map(([to, label]) => (
            <Link 
              key={to} 
              to={to} 
              style={{ 
                display: 'block', 
                color: 'var(--muted)', 
                marginBottom: 'clamp(0.3rem, 0.6vw, 0.5rem)', 
                fontSize: 'clamp(0.8rem, 1.1vw, 0.93rem)', 
                transition: 'var(--transition)' 
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
              → {label}
            </Link>
          ))}
        </div>

        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-display)', 
            letterSpacing: '0.08em', 
            color: 'var(--accent)', 
            marginBottom: 'clamp(0.6rem, 1.2vw, 0.8rem)', 
            fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' 
          }}>SERVICES</h4>
          {['Air Conditioning', 'CCTV & Security', 'Building & Construction', 'Civil Engineering', 'Security Fencing', 'Electrical Works'].map(s => (
            <p 
              key={s} 
              style={{ 
                color: 'var(--muted)', 
                marginBottom: 'clamp(0.3rem, 0.6vw, 0.45rem)', 
                fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)' 
              }}>
              → {s}
            </p>
          ))}
        </div>

        <div>
          <h4 style={{ 
            fontFamily: 'var(--font-display)', 
            letterSpacing: '0.08em', 
            color: 'var(--accent)', 
            marginBottom: 'clamp(0.6rem, 1.2vw, 0.8rem)', 
            fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' 
          }}>CONTACT US</h4>
          {[
            ['📍', 'Accra, Ghana'],
            ['📞', '+233 24 4657 280'],
            ['✉️', 'info@vkengineeringtechsolutions.com'],
            ['🕐', 'Mon – Sat: 8AM – 6PM'],
          ].map(([icon, text]) => (
            <div 
              key={text} 
              style={{ 
                display: 'flex', 
                gap: 'clamp(0.5rem, 1vw, 0.7rem)', 
                marginBottom: 'clamp(0.4rem, 0.8vw, 0.65rem)',
                minWidth: 0,
              }}>
              <span style={{ flexShrink: 0 }}>{icon}</span>
              <span 
                style={{ 
                  color: 'var(--muted)', 
                  fontSize: 'clamp(0.8rem, 1.1vw, 0.92rem)',
                  wordBreak: 'break-word',
                }}>
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: 1200, 
        margin: 'clamp(1.5rem, 3vw, 2.5rem) auto 0',
        borderTop: '1px solid var(--border)', 
        paddingTop: 'clamp(0.75rem, 1.5vw, 1.2rem)',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap', 
        gap: 'clamp(0.5rem, 1vw, 0.75rem)',
      }}>
        <p style={{ 
          color: 'var(--muted)', 
          fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
          wordBreak: 'break-word',
        }}>
          © {new Date().getFullYear()} VK Engineering Tech Solutions. All rights reserved.
        </p>
        <p style={{ 
          color: 'var(--muted)', 
          fontSize: 'clamp(0.75rem, 1vw, 0.85rem)',
          whiteSpace: 'nowrap',
        }}>
          Built with precision & passion 🔥
        </p>
      </div>
    </footer>
  );
}