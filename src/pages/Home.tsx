import { useEffect } from 'react';
import { Wind, Camera, Hammer, Zap, Shield, Home as HomeIcon, ArrowRight, ArrowUpRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setCanonicalURL } from '../utils/canonical';
import Reveal from '../component/fx/Reveal';
import MagneticButton from '../component/fx/Magnetic';
import heroImg from '../assets/constraction.jpeg';
import vid3 from '../assets/vidoe/WhatsApp Video 2026-03-31 at 11.37.52 PM (2).mp4';
import vid4 from '../assets/vidoe/WhatsApp Video 2026-03-31 at 11.37.52 PM.mp4';
import vid5 from '../assets/vidoe/WhatsApp Video 2026-03-31 at 11.38.38 PM.mp4';
import vid6 from '../assets/vidoe/WhatsApp Video 2026-04-02 at 10.21.45 PM.mp4';

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Projects Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Expert Team Members' },
];

const highlights = [
  { icon: Wind, title: 'Air Conditioning', desc: 'Professional installation, maintenance & repair of all AC systems.' },
  { icon: Camera, title: 'CCTV & Security', desc: 'Advanced surveillance solutions to protect what matters most.' },
  { icon: Hammer, title: 'Construction', desc: 'Full building and civil engineering services from ground up.' },
  { icon: Zap, title: 'Electrical Works', desc: 'Complete electrical installations, wiring & power solutions.' },
  { icon: Shield, title: 'Security Fencing', desc: 'Perimeter protection with robust, durable fencing systems.' },
  { icon: HomeIcon, title: 'Housing', desc: 'Quality residential construction and housing development.' },
];

const marqueeItems = [
  'Air Conditioning', 'CCTV & Surveillance', 'Construction', 'Civil Engineering',
  'Electrical Works', 'Security Fencing', 'Housing', 'Plumbing', 'Solar & Power',
];

const videos = [
  { title: 'Project Highlights', src: vid3 },
  { title: 'Engineering Solutions', src: vid4 },
  { title: 'Latest Projects', src: vid5 },
  { title: 'On-Site Craftsmanship', src: vid6 },
];

const TIKTOK = 'https://www.tiktok.com/@zivengineeringtechsol';

export default function Home() {
  useEffect(() => { setCanonicalURL('/'); }, []);

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__text">
          <span className="eyebrow">Your trusted partner in modern solutions</span>

          <h1 id="hero-heading" className="display">
            BUILDING GHANA'S FUTURE ONE PROJECT AT A TIME
          </h1>

          <p className="lead">
            Ziv Engineering Tech Solutions delivers world-class engineering, construction,
            electrical, and security solutions — expertise, reliability, and innovation on every site.
          </p>

          <div className="hero__actions">
            <MagneticButton to="/services" variant="forge">
              Explore Services <ArrowRight size={18} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton to="/contact" variant="ghost">
              <PhoneCall size={16} aria-hidden="true" /> Talk to Us
            </MagneticButton>
          </div>

          <dl className="figures">
            {stats.map(s => (
              <div key={s.label}>
                <dt className="lbl">{s.label}</dt>
                <dd className="num">{s.value}{s.suffix}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media">
          <img src={heroImg} alt="Engineers in hard hats reviewing a multi-storey building under construction" />
          <p className="hero__tag">
            <strong>Accra, Ghana</strong>
            +233 24 4657 280
          </p>
        </div>
      </section>

      {/* ============ TRADES STRIP ============ */}
      <div className="container">
        <div className="trades">
          <ul aria-label="Trades we cover">
            {marqueeItems.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* ============ SERVICE INDEX ============ */}
      <section className="ledger-section" aria-labelledby="core-services">
        <div className="container grid-12">
          <Reveal className="ledger-section__head">
            <span className="eyebrow">What we do</span>
            <h2 id="core-services" className="h2">OUR CORE SERVICES</h2>
            <MagneticButton to="/services" variant="ghost">
              View All Services <ArrowRight size={16} aria-hidden="true" />
            </MagneticButton>
          </Reveal>

          <Reveal as="ol" stagger className="ledger">
            {highlights.map((h, i) => (
              <li key={h.title}>
                <Link to="/services" className="ledger__row">
                  <span className="n">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <h3 className="h3">{h.title}</h3>
                    <p>{h.desc}</p>
                  </span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ============ VIDEOS ============ */}
      <section className="band--ink" aria-labelledby="featured-videos">
        <div className="container">
          <div className="band__head">
            <div>
              <span className="eyebrow">Our work in action</span>
              <h2 id="featured-videos" className="h2">FEATURED FOOTAGE</h2>
            </div>
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="on-ink-link">
              TikTok <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="footage">
            {videos.map((video, i) => (
              <figure key={video.title + i} className="footage__item">
                <div className="footage__frame">
                  <video src={video.src} controls preload="metadata" aria-label={video.title} />
                </div>
                <figcaption className="footage__cap">
                  <h3>{video.title}</h3>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="call" aria-labelledby="cta-heading">
        <div className="container">
          <div className="grid-12 call__inner">
            <div className="call__copy">
              <h2 id="cta-heading" className="h2">READY TO START YOUR PROJECT?</h2>
              <p className="lead">Talk to our team today and let's bring your vision to life.</p>
            </div>
            <div className="call__action">
              <span className="eyebrow">Call</span>
              <a href="tel:+233244657280" className="call__number">+233 24 4657 280</a>
              <div>
                <MagneticButton to="/contact" variant="forge">
                  Contact Us Today <ArrowRight size={18} aria-hidden="true" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
