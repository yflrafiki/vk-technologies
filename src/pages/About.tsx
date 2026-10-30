import { useEffect } from 'react';
import { Target, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import { setCanonicalURL } from '../utils/canonical';
import Reveal from '../component/fx/Reveal';
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
  useEffect(() => { setCanonicalURL('/about'); }, []);

  return (
    <main>
      {/* ============ HEAD ============ */}
      <header className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <span className="eyebrow">Who we are</span>
            <h1 id="about-heading" className="h1">ENGINEERED ON TRUST</h1>
            <p className="lead">
              Founded with a vision to transform Ghana's engineering landscape, Ziv Engineering Tech
              Solutions has grown into a trusted multi-disciplinary firm delivering excellence in
              construction, electrical works, security, and more.
            </p>
          </div>
        </div>
      </header>

      {/* ============ STORY ============ */}
      <section aria-labelledby="story-heading">
        <div className="container grid-12 story">
          <Reveal className="story__text">
            <span className="eyebrow">Our story</span>
            <h2 id="story-heading" className="h2">OVER A DECADE OF BUILDING EXCELLENCE</h2>
            <div className="prose">
              <p>
                Ziv Engineering Tech Solutions was established with a simple but powerful mission:
                to provide reliable, high-quality engineering and construction services to
                individuals, businesses, and institutions across Ghana.
              </p>
              <p>
                From our humble beginnings in Accra, we've grown into a comprehensive technology
                and construction firm with a skilled team capable of handling complex, large-scale
                projects while maintaining the personal touch our clients appreciate.
              </p>
              <p>
                Today, we proudly serve hundreds of satisfied clients with a portfolio spanning
                residential housing, commercial buildings, industrial facilities, and critical
                infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="story__media">
            <figure>
              <img src={buildingImg} alt="A construction project delivered by Ziv Engineering Tech Solutions" loading="lazy" />
            </figure>
          </div>

          <dl className="figures">
            {figures.map(s => (
              <div key={s.label}>
                <dt className="lbl">{s.label}</dt>
                <dd className="num">{s.num}{s.suffix}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="values" aria-labelledby="values-heading">
        <div className="container">
          <div className="values__head">
            <span className="eyebrow">What drives us</span>
            <h2 id="values-heading" className="h2">OUR CORE VALUES</h2>
          </div>

          <Reveal as="ol" stagger className="values__list">
            {values.map((v, i) => (
              <li key={v.title}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="h3">{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </main>
  );
}
