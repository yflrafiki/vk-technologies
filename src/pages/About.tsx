const values = [
  { icon: '', title: 'Precision', desc: 'Every project is executed with meticulous attention to detail and engineering accuracy.' },
  { icon: '', title: 'Integrity', desc: 'We build trust through honest communication, fair pricing, and delivering on promises.' },
  { icon: '', title: 'Innovation', desc: 'We embrace the latest technologies and methods to deliver modern, effective solutions.' },
  { icon: '', title: 'Reliability', desc: 'Timely delivery and consistent quality you can count on, every single time.' },
];

// const team = [
//   { name: 'Victor K.', role: 'Founder & CEO', emoji: '👨‍💼' },
//   { name: 'Kwame A.', role: 'Lead Engineer', emoji: '👷' },
//   { name: 'Abena M.', role: 'Project Manager', emoji: '👩‍💼' },
//   { name: 'Kofi B.', role: 'Electrical Specialist', emoji: '👨‍🔧' },
// ];

export default function About() {
  return (
    <main style={{ paddingTop: '70px' }}>
      {/* Hero */}
      <section style={{
        padding: '6rem 2rem 4rem',
        background: 'linear-gradient(135deg, var(--bg) 0%, var(--surface) 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.95rem', marginBottom: '1rem' }}>WHO WE ARE</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.05em', marginBottom: '1.5rem',
          }}>
            ABOUT <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>VK Engineering Tech Solutions</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.9 }}>
            Founded with a vision to transform Ghana's engineering landscape, VK Engineering Tech Solutions has grown into a trusted multi-disciplinary firm delivering excellence in construction, electrical works, security, and more.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          <div>
            <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.95rem', marginBottom: '1rem' }}>OUR STORY</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
              OVER A DECADE OF BUILDING EXCELLENCE
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1.05rem' }}>
              VK Engineering Tech Solutions was established with a simple but powerful mission: to provide reliable, high-quality engineering and construction services to individuals, businesses, and institutions across Ghana.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1.2rem', fontSize: '1.05rem' }}>
              From our humble beginnings in Accra, we've grown into a comprehensive technology and construction firm with a skilled team capable of handling complex, large-scale projects while maintaining the personal touch our clients appreciate.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '1.05rem' }}>
              Today, we are proud to serve hundreds of satisfied clients with a portfolio spanning residential housing, commercial buildings, industrial facilities, and critical infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { num: '10+', label: 'Years in Operation' },
              { num: '500+', label: 'Completed Projects' },
              { num: '50+', label: 'Skilled Professionals' },
              { num: '10', label: 'Service Specializations' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '2rem', textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                  color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem',
                }}>{s.num}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 2rem', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.95rem', marginBottom: '0.5rem' }}>WHAT DRIVES US</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.05em' }}>OUR CORE VALUES</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: 'var(--surface2)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '2rem',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.05em', marginBottom: '0.6rem', color: 'var(--accent)' }}>{v.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section style={{ padding: '6rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.15em', fontSize: '0.85rem', marginBottom: '0.5rem' }}>THE PEOPLE BEHIND THE WORK</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.05em' }}>MEET OUR TEAM</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {team.map(m => (
              <div key={m.name} style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '2.5rem 1.5rem',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--surface2), var(--surface))',
                  border: '2px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', margin: '0 auto 1rem',
                }}>{m.emoji}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>{m.name}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}