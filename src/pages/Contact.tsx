export default function Contact() {

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
          <p style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.95rem', marginBottom: '1rem' }}>LET'S TALK</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
            GET IN <span style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>TOUCH</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1.9 }}>
            Ready to start your project? Have a question? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 2rem', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2.5rem', boxShadow: '0 18px 40px rgba(0, 0, 0, 0.15)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>CONTACT INFORMATION</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '1.8rem', fontSize: '1.05rem' }}>Reach out to us through any of the following channels.</p>

            {[
              { icon: '📍', label: 'Location', value: 'Accra, Greater Accra Region, Ghana' },
              { icon: '🏢', label: 'Address', value: 'CJ 233, Koney Rambo Street, GD - 131 - 8189' },
              { icon: '📞', label: 'Phone', value: '+233 24 4657 280 / +233 54 9266 505' },
              { icon: '💬', label: 'Whatsapp', value: '+233 24 4657 280' },
              { icon: '✉️', label: 'Email', value: 'info@vkengineeringtechsolutions.com' },
              { icon: '🕐', label: 'Working Hours', value: 'Monday – Saturday: 8:00 AM – 6:00 PM' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start', marginBottom: '1.8rem' }}>
                <div style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(240,165,0,0.15)', border: '1px solid var(--border)', borderRadius: 10, display: 'grid', placeItems: 'center', fontSize: '1.4rem' }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.2rem' }}>{c.label}</div>
                  <div style={{ color: 'var(--text)', fontSize: '1.08rem', lineHeight: 1.5 }}>{c.value}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.75rem' }}>SERVICES WE HANDLE</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.6rem' }}>
                {['Air Conditioning', 'CCTV', 'Construction', 'Civil Engineering', 'Security Fencing', 'Housing', 'Electrical', 'Solar Power'].map(s => (
                  <span key={s} style={{ background: 'rgba(0, 0, 0, 0.2)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: 8, padding: '0.55rem 0.8rem', fontSize: '0.95rem', fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, padding: '2.5rem', boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.85rem', letterSpacing: '0.04em', marginBottom: '1rem', color: 'var(--accent)' }}>GET STARTED</h3>
            <p style={{ color: 'var(--muted)', fontSize: '1.03rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Have a project in mind? Contact VK Technologies now for a free consultation and quote. We can support all stages from design to completion.
            </p>
            <ul style={{ listStyle: 'disc inside', color: 'var(--text)', fontSize: '1.01rem', lineHeight: 1.7 }}>
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