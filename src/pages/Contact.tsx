export default function Contact() {

  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 6rem) clamp(1rem, 5vw, 2rem) clamp(3rem, 8vw, 4rem)',
        background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ 
            color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', 
            fontSize: 'clamp(0.8rem, 1.5vw, 0.95rem)', 
            marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' 
          }}>LET'S TALK</p>
          <h1 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 6vw, 5rem)', 
            letterSpacing: '0.05em', 
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)' 
          }}>
            GET IN <span style={{ 
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>TOUCH</span>
          </h1>
          <p style={{ 
            color: 'var(--muted)', 
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', 
            lineHeight: 1.9 
          }}>
            Ready to start your project? Have a question? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ 
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
        background: 'var(--bg)' 
      }}>
        <div style={{ 
          maxWidth: 1100, 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 50vw, 500px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)', 
          alignItems: 'start' 
        }}>
          <div style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--border)', 
            borderRadius: 16, 
            padding: 'clamp(1.25rem, 2.5vw, 2.5rem)', 
            boxShadow: '0 18px 40px rgba(0, 0, 0, 0.15)' 
          }}>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              letterSpacing: '0.05em', 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' 
            }}>CONTACT INFORMATION</h2>
            <p style={{ 
              color: 'var(--muted)', 
              marginBottom: 'clamp(1rem, 2vw, 1.8rem)', 
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' 
            }}>Reach out to us through any of the following channels.</p>

            {[
              { icon: '📍', label: 'Location', value: 'Accra, Greater Accra Region, Ghana' },
              { icon: '🏢', label: 'Address', value: 'CJ 233, Koney Rambo Street, GD - 131 - 8189' },
              { icon: '📞', label: 'Phone', value: '+233 24 4657 280 / +233 54 9266 505' },
              { icon: '💬', label: 'Whatsapp', value: '+233 24 4657 280' },
              { icon: '✉️', label: 'Email', value: 'info@vkengineeringtechsolutions.com' },
              { icon: '🕐', label: 'Working Hours', value: 'Monday – Saturday: 8:00 AM – 6:00 PM' },
            ].map(c => (
              <div key={c.label} style={{ 
                display: 'flex', 
                gap: 'clamp(0.75rem, 1.5vw, 1.2rem)', 
                alignItems: 'flex-start', 
                marginBottom: 'clamp(1rem, 2vw, 1.8rem)' 
              }}>
                <div style={{ 
                  width: 44, height: 44, minWidth: 44, 
                  background: 'rgba(240,165,0,0.15)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 10, 
                  display: 'grid', 
                  placeItems: 'center', 
                  fontSize: '1.4rem',
                  flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ 
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)', 
                    color: 'var(--accent)', 
                    fontWeight: 700, 
                    marginBottom: '0.2rem',
                    wordBreak: 'break-word',
                  }}>
                    {c.label}
                  </div>
                  <div style={{ 
                    color: 'var(--text)', 
                    fontSize: 'clamp(0.9rem, 1.3vw, 1.08rem)', 
                    lineHeight: 1.5,
                    wordBreak: 'break-word',
                  }}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)', 
                color: 'var(--accent)', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' 
              }}>SERVICES WE HANDLE</p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 'clamp(0.4rem, 1vw, 0.6rem)' 
              }}>
                {['Air Conditioning', 'CCTV', 'Construction', 'Civil Engineering', 'Security Fencing', 'Housing', 'Electrical', 'Solar Power'].map(s => (
                  <span key={s} style={{ 
                    background: 'rgba(0, 0, 0, 0.2)', 
                    border: '1px solid var(--border)', 
                    color: 'var(--text)', 
                    borderRadius: 8, 
                    padding: 'clamp(0.4rem, 0.8vw, 0.55rem) clamp(0.6rem, 1vw, 0.8rem)', 
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', 
                    fontWeight: 600,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--border)', 
            borderRadius: 16, 
            padding: 'clamp(1.25rem, 2.5vw, 2.5rem)', 
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)' 
          }}>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', 
              letterSpacing: '0.04em', 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', 
              color: 'var(--accent)' 
            }}>GET STARTED</h3>
            <p style={{ 
              color: 'var(--muted)', 
              fontSize: 'clamp(0.95rem, 1.3vw, 1.03rem)', 
              lineHeight: 1.7, 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)' 
            }}>
              Have a project in mind? Contact VK Technologies now for a free consultation and quote. We can support all stages from design to completion.
            </p>
            <ul style={{ 
              listStyle: 'disc inside', 
              color: 'var(--text)', 
              fontSize: 'clamp(0.9rem, 1.2vw, 1.01rem)', 
              lineHeight: 1.7,
              paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
            }}>
              <li>Fast response time within business hours</li>
              <li>Local expertise across Ghana</li>
              <li>Quality-focused project delivery</li>
              <li>Transparent estimates and timelines</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}