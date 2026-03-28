import acImg from '../assets/air.png';
import cctvImg from '../assets/cctv.png';
import constructionImg from '../assets/building.png';
import civilImg from '../assets/civil.png';
import fencingImg from '../assets/fencing.png';
import housingImg from '../assets/housing.png';
import electricalImg from '../assets/electrical.png';
import energyImg from '../assets/power.png';

const services = [
  {
    image: acImg,
    title: 'Air Conditioning Installation & Servicing',
    desc: 'We supply, install, and maintain all types of air conditioning systems — split units, cassette ACs, ducted systems, and VRF systems — for homes, offices, and commercial buildings.',
    items: ['Split Unit Installation', 'Ducted AC Systems', 'AC Servicing & Repair', 'Preventive Maintenance', 'Refrigerant Refilling', 'Energy Efficiency Audits'],
  },
  {
    image: cctvImg,
    title: 'CCTV Camera & Surveillance',
    desc: 'Advanced CCTV and IP camera surveillance systems designed to secure your property 24/7. We handle design, supply, installation, and remote monitoring setup.',
    items: ['HD/4K Camera Installation', 'IP Network Cameras', 'DVR/NVR Setup', 'Remote Monitoring', 'Night Vision Systems', 'Access Control Integration'],
  },
  {
    image: constructionImg,
    title: 'Building & Construction',
    desc: 'From concept to completion, we handle full-scale building projects including residential, commercial, and industrial structures with unmatched craftsmanship.',
    items: ['Residential Buildings', 'Commercial Structures', 'Renovations & Extensions', 'Interior Finishing', 'Roofing Works', 'Foundation & Structural Works'],
  },
  {
    image: civilImg,
    title: 'Civil Engineering',
    desc: 'Professional civil engineering services covering roads, drainage, earthworks, and infrastructure. Our engineers deliver safe, durable, code-compliant solutions.',
    items: ['Road Construction', 'Drainage Systems', 'Earthworks & Grading', 'Retaining Walls', 'Culverts & Bridges', 'Site Surveying'],
  },
  {
    image: fencingImg,
    title: 'Security Fencing',
    desc: 'We design and install robust perimeter security solutions for homes, businesses, estates, and industrial facilities — combining safety with aesthetics.',
    items: ['Chain Link Fencing', 'Palisade & Barbed Wire', 'Electric Fence Systems', 'Sliding & Swing Gates', 'Razor Wire Installation', 'Gate Automation'],
  },
  {
    image: housingImg,
    title: 'Housing Development',
    desc: 'End-to-end housing development solutions from land preparation and architectural design through construction and handover. Your dream home, our expertise.',
    items: ['Custom Home Building', 'Estate Development', 'Architectural Design', 'Interior Design', 'Landscaping', 'Property Development'],
  },
  {
    image: electricalImg,
    title: 'Electrical Works',
    desc: 'Comprehensive electrical services for all building types. From new installations to upgrades and fault-finding, our certified electricians handle it all safely and efficiently.',
    items: ['Wiring & Rewiring', 'Distribution Boards', 'Solar PV Installation', 'Generator Installation', 'Street Lighting', 'Industrial Electrical Systems'],
  },
  {           
    image: energyImg,
    title: 'Power & Energy Solutions',
    desc: 'We provide complete power infrastructure solutions including solar energy systems, inverters, UPS systems, and backup power to ensure uninterrupted supply.',
    items: ['Solar Panel Systems', 'Inverter Installation', 'UPS Systems', 'Power Factor Correction', 'Transformer Installation', 'Energy Monitoring'],
  },
];

export default function Services() {
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
          }}>WHAT WE OFFER</p>
          <h1 style={{
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 6vw, 5rem)',
            letterSpacing: '0.05em', 
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
          }}>
            OUR <span style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>SERVICES</span>
          </h1>
          <p style={{ 
            color: 'var(--muted)', 
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', 
            lineHeight: 1.9 
          }}>
            We offer a comprehensive range of engineering, construction, and technology services — all under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ 
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
        background: 'var(--bg)' 
      }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(150px, 45vw, 280px), 1fr))',
          gap: 'clamp(1rem, 2vw, 2rem)' 
        }}>
          {services.map((s) => (
            <div key={s.title} style={{
              background: 'var(--surface)', 
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', 
              padding: 'clamp(1rem, 2.5vw, 2.5rem)', 
              overflow: 'hidden',
              position: 'relative', 
              transition: 'var(--transition)',
              display: 'flex',
              flexDirection: 'column',
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
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
              }} />
              <div style={{ 
                width: '100%', 
                height: 'clamp(120px, 30vw, 180px)', 
                marginBottom: 'clamp(0.75rem, 1.5vw, 1.2rem)', 
                overflow: 'hidden', 
                borderRadius: 12 
              }}>
                <img src={s.image} alt={s.title} style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} />
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', 
                fontSize: 'clamp(1rem, 2vw, 1.6rem)',
                letterSpacing: '0.03em', 
                marginBottom: 'clamp(0.5rem, 1.2vw, 1rem)', 
                lineHeight: 1.2,
              }}>
                {s.title}
              </h2>
              <p style={{ 
                color: 'var(--muted)', 
                fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)', 
                lineHeight: 1.6, 
                marginBottom: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                flex: 1,
              }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {s.items.map(item => (
                  <span key={item} style={{
                    background: 'rgba(240,165,0,0.08)', 
                    border: '1px solid var(--border)',
                    color: 'var(--text)', 
                    fontSize: 'clamp(0.7rem, 0.9vw, 0.88rem)', 
                    padding: 'clamp(0.2rem, 0.3vw, 0.3rem) clamp(0.4rem, 0.8vw, 0.8rem)',
                    borderRadius: 100, 
                    fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}