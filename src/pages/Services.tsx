import { useEffect } from 'react';
import { setCanonicalURL } from '../utils/canonical';
import Reveal from '../component/fx/Reveal';
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

  const num = (i: number) => String(i + 1).padStart(2, '0');

  return (
    <main>
      {/* ============ HEAD ============ */}
      <header className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <span className="eyebrow">What we offer</span>
            <h1 id="services-heading" className="h1">PRECISION IN EVERY TRADE</h1>
            <p className="lead">
              Eleven specialized disciplines, one accountable team. Engineering, construction,
              and technology services — all under one roof.
            </p>
          </div>
        </div>
      </header>

      {/* ============ SERVICES ============ */}
      <section className="svc" aria-labelledby="services-heading">
        <div className="container grid-12">
          <nav className="svc__index" aria-label="Services on this page">
            <span className="eyebrow" style={{ marginBottom: 'var(--s-3)' }}>Index</span>
            <ol>
              {services.map((s, i) => (
                <li key={s.title}>
                  <a href={`#service-${num(i)}`}>
                    <span className="n">{num(i)}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="svc__list">
            {services.map((s, i) => (
              <article key={s.title} id={`service-${num(i)}`} className="svc-entry" aria-labelledby={`service-${num(i)}-title`}>
                <Reveal className="svc-entry__head">
                  <span className="n">{num(i)} / {String(services.length).padStart(2, '0')}</span>
                  <h2 id={`service-${num(i)}-title`} className="h3">{s.title}</h2>
                </Reveal>
                <div className="svc-entry__body">
                  <div className="svc-entry__img">
                    <img src={s.image} alt={s.title} loading="lazy" />
                  </div>
                  <div>
                    <p>{s.desc}</p>
                    <span className="eyebrow scope__title">Scope</span>
                    <ul className="scope">
                      {s.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NOTE ============ */}
      <section className="svc-note" aria-labelledby="services-cta">
        <div className="container grid-12 svc-note__inner">
          <h2 id="services-cta" className="h2">NEED SOMETHING SPECIFIC?</h2>
          <p className="lead">
            Every project is different. Tell us what you're building and we'll scope it with you.
          </p>
        </div>
      </section>
    </main>
  );
}
