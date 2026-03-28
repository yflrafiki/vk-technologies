import { Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import React from 'react';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every project is executed with meticulous attention to detail and engineering accuracy.' },
  { icon: Heart, title: 'Integrity', desc: 'We build trust through honest communication, fair pricing, and delivering on promises.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace the latest technologies and methods to deliver modern, effective solutions.' },
  { icon: CheckCircle, title: 'Reliability', desc: 'Timely delivery and consistent quality you can count on, every single time.' },
];

export default function About() {
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
          }}>WHO WE ARE</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            letterSpacing: '0.05em', 
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
          }}>
            ABOUT <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>VK Engineering Tech Solutions</span>
          </h1>
          <p style={{ 
            color: 'var(--muted)', 
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', 
            lineHeight: 1.9  
          }}>
            Founded with a vision to transform Ghana's engineering landscape, VK Engineering Tech Solutions has grown into a trusted multi-disciplinary firm delivering excellence in construction, electrical works, security, and more.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ 
        padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 5vw, 2rem)',
        background: 'var(--bg)' 
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)', 
          alignItems: 'center',
        }}>
          <div>
            <p style={{ 
              color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.15em', 
              fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)', 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' 
            }}>OUR STORY</p>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.3rem, 3.5vw, 3rem)', 
              letterSpacing: '0.05em', 
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)' 
            }}>
              OVER A DECADE OF BUILDING EXCELLENCE
            </h2>
            <p style={{ 
              color: 'var(--muted)', 
              lineHeight: 1.8, 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1.2rem)', 
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' 
            }}>
              VK Engineering Tech Solutions was established with a simple but powerful mission: to provide reliable, high-quality engineering and construction services to individuals, businesses, and institutions across Ghana.
            </p>
            <p style={{ 
              color: 'var(--muted)', 
              lineHeight: 1.8, 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1.2rem)', 
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' 
            }}>
              From our humble beginnings in Accra, we've grown into a comprehensive technology and construction firm with a skilled team capable of handling complex, large-scale projects while maintaining the personal touch our clients appreciate.
            </p>
            <p style={{ 
              color: 'var(--muted)', 
              lineHeight: 1.8, 
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' 
            }}>
              Today, we are proud to serve hundreds of satisfied clients with a portfolio spanning residential housing, commercial buildings, industrial facilities, and critical infrastructure.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(140px, 40vw, 160px), 1fr))',
            gap: 'clamp(0.75rem, 1.5vw, 1rem)' 
          }}>
            {[
              { num: '10+', label: 'Years in Operation' },
              { num: '500+', label: 'Completed Projects' },
              { num: '50+', label: 'Skilled Professionals' },
              { num: '10', label: 'Service Specializations' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'var(--surface)', 
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', 
                padding: 'clamp(1rem, 2vw, 2rem)', 
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  color: 'var(--accent)', 
                  lineHeight: 1, 
                  marginBottom: '0.5rem',
                }}>{s.num}</div>
                <div style={{ 
                  color: 'var(--muted)', 
                  fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)',
                  lineHeight: 1.3,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ 
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)', 
        background: 'var(--surface)', 
        borderTop: '1px solid var(--border)', 
        borderBottom: '1px solid var(--border)' 
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 3.5rem)' }}>
            <p style={{ 
              color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.15em', 
              fontSize: 'clamp(0.8rem, 1.3vw, 0.95rem)', 
              marginBottom: 'clamp(0.4rem, 0.8vw, 0.5rem)' 
            }}>WHAT DRIVES US</p>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.3rem, 3.5vw, 3rem)', 
              letterSpacing: '0.05em' 
            }}>OUR CORE VALUES</h2>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(140px, 45vw, 260px), 1fr))', 
            gap: 'clamp(0.75rem, 1.5vw, 1.5rem)' 
          }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: 'var(--surface2)', 
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', 
                padding: 'clamp(1rem, 2vw, 2rem)',
              }}>
                <div style={{ marginBottom: 'clamp(0.6rem, 1.2vw, 1rem)' }}>
                  {React.createElement(v.icon, { size: 36, strokeWidth: 1.5, color: 'var(--accent)' })}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.5rem)', 
                  letterSpacing: '0.05em', 
                  marginBottom: 'clamp(0.35rem, 0.7vw, 0.6rem)', 
                  color: 'var(--accent)' 
                }}>{v.title}</h3>
                <p style={{ 
                  color: 'var(--muted)', 
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', 
                  lineHeight: 1.7 
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}