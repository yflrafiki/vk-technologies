import { useEffect, useRef } from 'react';
import { Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import { setCanonicalURL } from '../utils/canonical';
import { gsap, prefersReducedMotion } from '../lib/motion';
import Reveal from '../component/fx/Reveal';
import TiltCard from '../component/fx/TiltCard';
import buildingImg from '../assets/building.png';

const values = [
  { icon: Target, title: 'Precision', desc: 'Every project is executed with meticulous attention to detail and engineering accuracy.' },
  { icon: Heart, title: 'Integrity', desc: 'We build trust through honest communication, fair pricing, and delivering on promises.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace the latest technologies and methods to deliver modern, effective solutions.' },
  { icon: CheckCircle, title: 'Reliability', desc: 'Timely delivery and consistent quality you can count on, every single time.' },
];

const figures = [
  { num: 10, suffix: '+', label: 'Years in Operation' },
  { num: 500, suffix: '+', label: 'Completed Projects' },
  { num: 50, suffix: '+', label: 'Skilled Professionals' },
  { num: 10, suffix: '', label: 'Service Specializations' },
];

export default function About() {
  const figuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setCanonicalURL('/about'); }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      const nums = figuresRef.current?.querySelectorAll<HTMLElement>('[data-count]') ?? [];
      nums.forEach(el => {
        const target = Number(el.dataset.count);
        const counter = { v: 0 };
        gsap.to(counter, {
          v: target,
          duration: 2,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          onUpdate: () => { el.textContent = String(Math.round(counter.v)); },
        });
      });
    }, figuresRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="page-enter" style={{ paddingTop: 76 }}>
      {/* ============ HERO ============ */}
      <section className="section" style={{ overflow: 'hidden', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }} aria-labelledby="about-heading">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__rays" aria-hidden="true" style={{ top: '-45%' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 860 }}>
          <Reveal>
            <span className="tech-label tech-label--center">Who we are</span>
          </Reveal>
          <Reveal as="h1" kind="chars" delay={0.12} id="about-heading" className="display display-xl" style={{ margin: 'clamp(0.8rem, 2vw, 1.4rem) 0' }}>
            ENGINEERED ON TRUST
          </Reveal>
          <Reveal as="p" delay={0.35} className="lead">
            Founded with a vision to transform Ghana's engineering landscape, Ziv Engineering Tech
            Solutions has grown into a trusted multi-disciplinary firm delivering excellence in
            construction, electrical works, security, and more.
          </Reveal>
        </div>
      </section>

      {/* ============ STORY ============ */}
      <section className="section" aria-labelledby="story-heading">
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          <div>
            <Reveal>
              <span className="tech-label">Our story</span>
              <h2 id="story-heading" className="display display-lg" style={{ margin: '0.9rem 0 1.4rem' }}>
                OVER A DECADE OF <span className="text-molten">BUILDING EXCELLENCE</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead" style={{ marginBottom: '1.1rem', fontSize: '1rem' }}>
                Ziv Engineering Tech Solutions was established with a simple but powerful mission:
                to provide reliable, high-quality engineering and construction services to
                individuals, businesses, and institutions across Ghana.
              </p>
              <p className="lead" style={{ marginBottom: '1.1rem', fontSize: '1rem' }}>
                From our humble beginnings in Accra, we've grown into a comprehensive technology
                and construction firm with a skilled team capable of handling complex, large-scale
                projects while maintaining the personal touch our clients appreciate.
              </p>
              <p className="lead" style={{ fontSize: '1rem' }}>
                Today, we proudly serve hundreds of satisfied clients with a portfolio spanning
                residential housing, commercial buildings, industrial facilities, and critical
                infrastructure.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal kind="mask" style={{ aspectRatio: '4 / 3', marginBottom: 'var(--gap)' }}>
              <img src={buildingImg} alt="A construction project delivered by Ziv Engineering Tech Solutions" loading="lazy" />
            </Reveal>
            <div
              ref={figuresRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--gap)',
              }}
            >
              {figures.map(s => (
                <TiltCard key={s.label} max={4} style={{ padding: 'clamp(1.2rem, 2vw, 1.8rem)', textAlign: 'center' }}>
                  <div className="display display-md text-steel">
                    <span data-count={s.num}>{s.num}</span>{s.suffix}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-tech)', color: 'var(--muted)',
                    fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginTop: '0.5rem', lineHeight: 1.4,
                  }}>
                    {s.label}
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="section" style={{ background: 'var(--bg-raised)' }} aria-labelledby="values-heading">
        <div className="container">
          <Reveal style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="tech-label tech-label--center">What drives us</span>
            <h2 id="values-heading" className="display display-lg" style={{ marginTop: '0.8rem' }}>
              OUR CORE <span className="text-molten">VALUES</span>
            </h2>
          </Reveal>

          <Reveal stagger className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))' }}>
            {values.map(v => (
              <TiltCard key={v.title} style={{ padding: 'var(--space-card)' }}>
                <div className="icon-forge" style={{ marginBottom: '1.2rem' }}>
                  <v.icon size={26} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="display display-sm" style={{ marginBottom: '0.5rem', color: 'var(--accent)' }}>{v.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{v.desc}</p>
              </TiltCard>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
