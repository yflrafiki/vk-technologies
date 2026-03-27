import { Link } from 'react-router-dom';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '50+', label: 'Expert Team Members' },
];

const highlights = [
  { icon: '', title: 'Air Conditioning', desc: 'Professional installation, maintenance & repair of all AC systems.' },
  { icon: '', title: 'CCTV & Security', desc: 'Advanced surveillance solutions to protect what matters most.' },
  { icon: '', title: 'Construction', desc: 'Full building and civil engineering services from ground up.' },
  { icon: '', title: 'Electrical Works', desc: 'Complete electrical installations, wiring & power solutions.' },
  { icon: '', title: 'Security Fencing', desc: 'Perimeter protection with robust, durable fencing systems.' },
  { icon: '', title: 'Housing', desc: 'Quality residential construction and housing development.' },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)',
        padding: '7rem 2rem 4rem',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '-10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,165,0,0.08) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(240,165,0,0.1)', border: '1px solid var(--border)',
            borderRadius: 100, padding: '0.4rem 1.2rem', marginBottom: '2rem',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.1em' }}>
              TRUSTED ENGINEERING SOLUTIONS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
            lineHeight: 1, letterSpacing: '0.02em', marginBottom: '1.5rem',
            maxWidth: 800,
          }}>
            BUILDING GHANA'S{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>FUTURE</span>{' '}
            ONE PROJECT AT A TIME
          </h1>

          <p style={{
            color: 'var(--muted)', fontSize: '1.25rem', maxWidth: 560,
            marginBottom: '2.5rem', lineHeight: 1.8,
          }}>
            VK Engineering Tech Solutions delivers world-class engineering, construction, electrical, and security solutions. We bring expertise, reliability, and innovation to every project.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/services" style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              color: '#000', fontWeight: 700, padding: '0.9rem 2rem',
              borderRadius: 10, fontSize: '1.05rem', letterSpacing: '0.08em',
              display: 'inline-block',
            }}>EXPLORE SERVICES</Link>
            
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '1.5rem', marginTop: '5rem', maxWidth: 700,
          }}>
            {stats.map(s => (
              <div key={s.label} style={{
                borderLeft: '2px solid var(--accent)', paddingLeft: '1rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.2rem',
                  color: 'var(--accent)', lineHeight: 1,
                }}>{s.value}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.95rem', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              WHAT WE DO
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '0.05em',
            }}>OUR CORE SERVICES</h2>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}>
            {highlights.map((h, i) => (
              <div key={h.title} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '2rem',
                transition: 'var(--transition)', cursor: 'default',
                animationDelay: `${i * 0.1}s`,
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                  (e.currentTarget as HTMLElement).style.transform = 'none';
                }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{h.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{h.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" style={{
              background: 'transparent', color: 'var(--accent)',
              border: '1px solid var(--accent)', fontWeight: 600,
              padding: '0.9rem 2.5rem', borderRadius: 10,
              letterSpacing: '0.08em', display: 'inline-block', fontSize: '1.05rem',
              transition: 'var(--transition)',
            }}>VIEW ALL SERVICES →</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        padding: '5rem 2rem',
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '0.05em', marginBottom: '1rem',
          }}>READY TO START YOUR PROJECT?</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1.15rem' }}>
            Talk to our team today and let's bring your vision to life.
          </p>
          <Link to="/contact" style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            color: '#000', fontWeight: 700, padding: '1rem 2.5rem',
            borderRadius: 10, fontSize: '1.1rem', letterSpacing: '0.08em',
            display: 'inline-block',
          }}>CONTACT US TODAY</Link>
        </div>
      </section>
    </main>
  );
}