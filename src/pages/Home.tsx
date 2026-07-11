import { useEffect, useRef } from 'react';
import { Wind, Camera, Hammer, Zap, Shield, Home as HomeIcon, ArrowRight, PhoneCall } from 'lucide-react';
import { setCanonicalURL } from '../utils/canonical';
import { gsap, prefersReducedMotion } from '../lib/motion';
import Reveal from '../component/fx/Reveal';
import TiltCard from '../component/fx/TiltCard';
import MagneticButton from '../component/fx/Magnetic';
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
  const heroRef = useRef<HTMLElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setCanonicalURL('/'); }, []);

  // mouse parallax: normalized cursor position drives CSS vars on the hero
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        hero.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      });
    };
    hero.addEventListener('mousemove', onMove);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // pinned zoom-away: hero content scales down + blurs as you scroll past
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.to(heroInnerRef.current, {
        scale: 0.92,
        opacity: 0.25,
        filter: 'blur(6px)',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom 30%',
          scrub: 0.6,
        },
      });
      // counters
      const nums = statsRef.current?.querySelectorAll<HTMLElement>('[data-count]') ?? [];
      nums.forEach(el => {
        const target = Number(el.dataset.count);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 2,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = String(Math.round(counter.v)); },
        });
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="page-enter">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="hero" aria-label="Introduction">
        <div className="hero__grid" aria-hidden="true" />
        <div className="parallax-layer parallax parallax--1" aria-hidden="true">
          <div className="hero__rays" />
        </div>
        <div className="parallax-layer parallax parallax--2" aria-hidden="true">
          <div className="hero__glow" />
        </div>

        <div className="hero__objects" aria-hidden="true">
          <div className="parallax-layer parallax parallax--2">
            <div className="float-obj obj-ring" />
          </div>
          <div className="parallax-layer parallax parallax--3">
            <div className="float-obj obj-hex" />
            <div className="float-obj obj-cube">
              <i /><i /><i /><i /><i /><i />
            </div>
          </div>
          <div className="parallax-layer parallax parallax--1">
            <div className="float-obj obj-beam" />
          </div>
        </div>

        <div ref={heroInnerRef} className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Reveal delay={0.1}>
            <span className="badge-live">
              <span className="dot" aria-hidden="true" />
              Your trusted partner in modern solutions
            </span>
          </Reveal>

          <Reveal as="h1" kind="chars" delay={0.2} className="display display-xl" style={{ maxWidth: 900, margin: 'clamp(1.2rem, 3vw, 2rem) 0' }}>
            BUILDING GHANA'S FUTURE ONE PROJECT AT A TIME
          </Reveal>

          <Reveal as="p" delay={0.45} className="lead" style={{ maxWidth: 560, marginBottom: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
            Ziv Engineering Tech Solutions delivers world-class engineering, construction,
            electrical, and security solutions — expertise, reliability, and innovation on every site.
          </Reveal>

          <Reveal delay={0.6} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <MagneticButton to="/services" variant="forge">
              Explore Services <ArrowRight size={16} aria-hidden="true" />
            </MagneticButton>
            <MagneticButton to="/contact" variant="ghost">
              <PhoneCall size={15} aria-hidden="true" /> Talk to Us
            </MagneticButton>
          </Reveal>

          <Reveal delay={0.75}>
            <div
              ref={statsRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(110px, 20vw, 150px), 1fr))',
                gap: 'var(--gap)',
                marginTop: 'clamp(3rem, 7vw, 4.5rem)',
                maxWidth: 720,
              }}
            >
              {stats.map(s => (
                <div key={s.label} className="stat-block">
                  <div className="num text-steel">
                    <span data-count={s.value}>{s.value}</span>{s.suffix}
                  </div>
                  <div className="lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="scroll-hint" aria-hidden="true">Scroll</div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" aria-hidden="true">
        {[0, 1].map(t => (
          <div key={t} className="marquee__track">
            {marqueeItems.map(item => (
              <span key={item} className="marquee__item">{item}</span>
            ))}
          </div>
        ))}
      </div>

      {/* ============ SERVICES HIGHLIGHTS ============ */}
      <section className="section" aria-labelledby="core-services">
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="tech-label tech-label--center">What we do</span>
            <h2 id="core-services" className="display display-lg" style={{ marginTop: '0.8rem' }}>
              OUR CORE <span className="text-molten">SERVICES</span>
            </h2>
          </Reveal>

          <Reveal stagger className="card-grid">
            {highlights.map(h => (
              <TiltCard key={h.title} style={{ padding: 'var(--space-card)' }}>
                <div className="icon-forge" style={{ marginBottom: '1.2rem' }}>
                  <h.icon size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="display display-sm" style={{ marginBottom: '0.5rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{h.desc}</p>
              </TiltCard>
            ))}
          </Reveal>

          <Reveal style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
            <MagneticButton to="/services" variant="ghost">
              View All Services <ArrowRight size={15} aria-hidden="true" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      {/* ============ VIDEOS ============ */}
      <section className="section" style={{ background: 'var(--bg-raised)' }} aria-labelledby="featured-videos">
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="tech-label tech-label--center">Our work in action</span>
            <h2 id="featured-videos" className="display display-lg" style={{ marginTop: '0.8rem' }}>
              FEATURED <span className="text-molten">FOOTAGE</span>
            </h2>
          </Reveal>

          <div
            className="card-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))' }}
          >
            {videos.map((video, i) => (
              <TiltCard key={video.title + i} max={3} style={{ padding: 'clamp(1rem, 2vw, 1.4rem)' }}>
                <Reveal kind="mask" delay={i * 0.08} className="video-frame" style={{ aspectRatio: '4 / 3', marginBottom: '1rem' }}>
                  <video src={video.src} controls preload="metadata" aria-label={video.title} />
                </Reveal>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                  <h3 className="display display-sm">{video.title}</h3>
                  <a
                    href={TIKTOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chip"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em' }}
                  >
                    TikTok <ArrowRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section" aria-labelledby="cta-heading" style={{ overflow: 'hidden' }}>
        <div className="hero__rays" aria-hidden="true" style={{ top: '-40%' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 820 }}>
          <Reveal as="h2" kind="chars" className="display display-lg" style={{ marginBottom: '1rem' }}>
            READY TO START YOUR PROJECT?
          </Reveal>
          <Reveal as="p" delay={0.15} className="lead" style={{ marginBottom: '2.2rem' }}>
            Talk to our team today and let's bring your vision to life.
          </Reveal>
          <Reveal delay={0.3}>
            <MagneticButton to="/contact" variant="forge">
              Contact Us Today <ArrowRight size={16} aria-hidden="true" />
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
