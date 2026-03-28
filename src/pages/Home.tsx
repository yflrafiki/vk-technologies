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
        padding: 'clamp(5rem, 15vw, 7rem) clamp(1rem, 5vw, 2rem) clamp(3rem, 8vw, 4rem)',
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
          width: 'clamp(300px, 50vw, 600px)', 
          height: 'clamp(300px, 50vw, 600px)', 
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(240,165,0,0.08) 0%, transparent 70%)',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(240,165,0,0.1)', border: '1px solid var(--border)',
            borderRadius: 100, padding: 'clamp(0.3rem, 1vw, 0.4rem) clamp(0.8rem, 2vw, 1.2rem)', 
            marginBottom: 'clamp(1rem, 3vw, 2rem)',
            fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
            <span style={{ color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.1em' }}>
              TRUSTED ENGINEERING SOLUTIONS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 8vw, 7rem)',
            lineHeight: 1, letterSpacing: '0.02em', 
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
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
            color: 'var(--muted)', 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            maxWidth: 560,
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', 
            lineHeight: 1.8,
          }}>
            VK Engineering Tech Solutions delivers world-class engineering, construction, electrical, and security solutions. We bring expertise, reliability, and innovation to every project.
          </p>

          <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1rem)', flexWrap: 'wrap' }}>
            <Link to="/services" style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              color: '#000', fontWeight: 700, padding: 'clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.5rem, 3vw, 2rem)',
              borderRadius: 10, fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', letterSpacing: '0.08em',
              display: 'inline-block',
              border: 'none',
              cursor: 'pointer',
              transition: 'var(--transition)',
            }}>EXPLORE SERVICES</Link>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(100px, 20vw, 150px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)', 
            marginTop: 'clamp(3rem, 8vw, 5rem)', 
            maxWidth: 700,
          }}>
            {stats.map(s => (
              <div key={s.label} style={{
                borderLeft: '2px solid var(--accent)', 
                paddingLeft: 'clamp(0.75rem, 1.5vw, 1rem)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  color: 'var(--accent)', 
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{ 
                  color: 'var(--muted)', 
                  fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)', 
                  marginTop: '0.3rem',
                  whiteSpace: 'nowrap',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section style={{ 
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
        background: 'var(--bg)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(2rem, 5vw, 4rem)' 
          }}>
            <p style={{ 
              color: 'var(--accent)', 
              fontWeight: 600, 
              letterSpacing: '0.15em', 
              fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)', 
              marginBottom: '0.5rem' 
            }}>
              WHAT WE DO
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
              letterSpacing: '0.05em',
            }}>
              OUR CORE SERVICES
            </h2>
          </div>

          <div style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(140px, 45vw, 280px), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
          }}>
            {highlights.map((h, i) => (
              <div key={h.title} style={{
                background: 'var(--surface)', 
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', 
                padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                transition: 'var(--transition)', 
                cursor: 'default',
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
                <div style={{ 
                  fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', 
                  marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' 
                }}>
                  {h.icon}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
                  letterSpacing: '0.05em', 
                  marginBottom: 'clamp(0.4rem, 0.8vw, 0.6rem)' 
                }}>
                  {h.title}
                </h3>
                <p style={{ 
                  color: 'var(--muted)', 
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', 
                  lineHeight: 1.7 
                }}>
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(2rem, 5vw, 3rem)' }}>
            <Link to="/services" style={{
              background: 'transparent', 
              color: 'var(--accent)',
              border: '1px solid var(--accent)', 
              fontWeight: 600,
              padding: 'clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.5rem, 3vw, 2.5rem)', 
              borderRadius: 10,
              letterSpacing: '0.08em', 
              display: 'inline-block', 
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              transition: 'var(--transition)',
            }}>
              VIEW ALL SERVICES →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1rem, 5vw, 2rem)',
        background: 'linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%)',
        borderTop: '1px solid var(--border)', 
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(1.4rem, 4vw, 3rem)',
            letterSpacing: '0.05em', 
            marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
          }}>
            READY TO START YOUR PROJECT?
          </h2>
          <p style={{ 
            color: 'var(--muted)', 
            marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)', 
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' 
          }}>
            Talk to our team today and let's bring your vision to life.
          </p>
          <Link to="/contact" style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
            color: '#000', 
            fontWeight: 700, 
            padding: 'clamp(0.7rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)',
            borderRadius: 10, 
            fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)', 
            letterSpacing: '0.08em',
            display: 'inline-block',
            transition: 'var(--transition)',
          }}>
            CONTACT US TODAY
          </Link>
        </div>
      </section>
    </main>
  );
}