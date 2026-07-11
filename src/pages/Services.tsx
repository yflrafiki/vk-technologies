import { useEffect } from 'react';
import { setCanonicalURL } from '../utils/canonical';
import Reveal from '../component/fx/Reveal';
import TiltCard from '../component/fx/TiltCard';
import cctvImg from '../assets/cctv.png';
import civilImg from '../assets/civil.png';
import fencingImg from '../assets/fencing.png';
import housingImg from '../assets/housing.png';
import electricalImg from '../assets/electrical.png';
import plumbingImg from '../assets/plumb.png';
import energyImg from '../assets/power.png';
import dstvImg from '../assets/dstv.png';
import androidImg from '../assets/android.png';
import condition from '../assets/air.jpeg';
import constr from '../assets/constraction 2.jpeg';

const services = [
  {
    image: condition,
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
    image: constr,
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
    image: plumbingImg,
    title: 'Plumbing Services',
    desc: 'Expert plumbing solutions for residential and commercial properties. We handle installations, repairs, and maintenance of water systems, drainage, and fixtures.',
    items: ['Pipe Installation & Repair', 'Leak Detection & Fixing', 'Water Heater Installation', 'Drainage Systems', 'Bathroom Fixtures', 'Emergency Plumbing'],
  },
  {
    image: energyImg,
    title: 'Power & Energy Solutions',
    desc: 'We provide complete power infrastructure solutions including solar energy systems, inverters, UPS systems, and backup power to ensure uninterrupted supply.',
    items: ['Solar Panel Systems', 'Inverter Installation', 'UPS Systems', 'Power Factor Correction', 'Transformer Installation', 'Energy Monitoring'],
  },
  {
    image: dstvImg,
    title: 'DSTV Installation',
    desc: 'Professional DSTV satellite dish installation and setup for crystal clear TV reception. We handle signal alignment, decoder connection, and multi-room setups.',
    items: ['Satellite Dish Installation', 'Signal Alignment', 'Decoder Setup', 'Multi-Room Distribution', 'Signal Boosters', 'Maintenance & Repairs'],
  },
  {
    image: androidImg,
    title: 'Android TV & TV Stick Jailbreaking',
    desc: 'Unlock the full potential of your Android TV boxes and streaming sticks with custom firmware, app installations, and performance optimizations.',
    items: ['Custom ROM Installation', 'App Store Unlocking', 'Performance Optimization', 'Kodi Setup', 'VPN Configuration', 'Remote Support'],
  },
];

export default function Services() {
  useEffect(() => { setCanonicalURL('/services'); }, []);

  return (
    <main className="page-enter" style={{ paddingTop: 76 }}>
      {/* ============ HERO ============ */}
      <section className="section" style={{ overflow: 'hidden', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }} aria-labelledby="services-heading">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__rays" aria-hidden="true" style={{ top: '-45%' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 860 }}>
          <Reveal>
            <span className="tech-label tech-label--center">What we offer</span>
          </Reveal>
          <Reveal as="h1" kind="chars" delay={0.12} id="services-heading" className="display display-xl" style={{ margin: 'clamp(0.8rem, 2vw, 1.4rem) 0' }}>
            PRECISION IN EVERY TRADE
          </Reveal>
          <Reveal as="p" delay={0.35} className="lead">
            Eleven specialized disciplines, one accountable team. Engineering, construction,
            and technology services — all under one roof.
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES GRID ============ */}
      <section className="section" style={{ paddingTop: 'clamp(1rem, 3vw, 2rem)' }}>
        <div
          className="container card-grid"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'clamp(1.25rem, 2.5vw, 2rem)' }}
        >
          {services.map((s, i) => (
            <TiltCard key={s.title} max={3} style={{ padding: 'clamp(1.1rem, 2vw, 1.6rem)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--font-tech)', fontSize: '0.68rem', letterSpacing: '0.24em', color: 'var(--muted)', marginBottom: '0.9rem' }}>
                {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
              </div>
              <Reveal kind="mask" delay={(i % 3) * 0.08} style={{ aspectRatio: '16 / 10', marginBottom: '1.2rem' }}>
                <img src={s.image} alt={s.title} loading="lazy" />
              </Reveal>
              <h2 className="display display-sm" style={{ marginBottom: '0.6rem' }}>{s.title}</h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.93rem', lineHeight: 1.65, marginBottom: '1.1rem', flex: 1 }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {s.items.map(item => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section" style={{ background: 'var(--bg-raised)', textAlign: 'center' }} aria-labelledby="services-cta">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal as="h2" kind="chars" id="services-cta" className="display display-lg" style={{ marginBottom: '1rem' }}>
            NEED SOMETHING SPECIFIC?
          </Reveal>
          <Reveal as="p" delay={0.15} className="lead">
            Every project is different. Tell us what you're building and we'll scope it with you.
          </Reveal>
        </div>
      </section>
    </main>
  );
}
