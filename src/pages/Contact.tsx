import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Building2, Phone, MessageSquare, Mail, Clock, Send } from 'lucide-react';
import { setCanonicalURL } from '../utils/canonical';
import Reveal from '../component/fx/Reveal';
import MagneticButton from '../component/fx/Magnetic';

const contactRows = [
  { icon: MapPin, label: 'Location', value: 'Accra, Greater Accra Region, Ghana' },
  { icon: Building2, label: 'Address', value: 'CJ 233, Koney Rambo Street, GD - 131 - 8189' },
  { icon: Phone, label: 'Phone', value: '+233 24 4657 280 / +233 54 9266 505' },
  { icon: MessageSquare, label: 'Whatsapp', value: '+233 24 4657 280' },
  { icon: Mail, label: 'Email', value: 'zivengineeringtechsolutions@gmail.com' },
  { icon: Clock, label: 'Working Hours', value: 'Monday – Saturday: 8:00 AM – 6:00 PM' },
];

const serviceOptions = [
  'AC Installation & Servicing', 'CCTV & Surveillance', 'Building & Construction',
  'Civil Engineering', 'Security Fencing', 'Housing Projects', 'Electrical Works',
  'Plumbing Works', 'Dstv Installation', 'Power and Energy', 'Android TV & TV Stick Jailbreaking',
];

const iconBox: React.CSSProperties = {
  width: 46, height: 46, flexShrink: 0,
  background: 'var(--accent-soft)',
  border: '1px solid var(--border-accent)',
  borderRadius: 12,
  display: 'grid', placeItems: 'center',
  color: 'var(--accent)',
};

export default function Contact() {
  useEffect(() => { setCanonicalURL('/contact'); }, []);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => { emailjs.init('zPveAVVOft33ATShu'); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields (Name, Email, Message)');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send('service_gxl5b6s', 'template_q3lod1m', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        service: formData.service,
        message: formData.message,
        to_email: 'taylorraphael0624@gmail.com',
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to send message. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-enter" style={{ paddingTop: 76 }}>
      {/* ============ HERO ============ */}
      <section className="section" style={{ overflow: 'hidden', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }} aria-labelledby="contact-heading">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__rays" aria-hidden="true" style={{ top: '-45%' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 820 }}>
          <Reveal>
            <span className="tech-label tech-label--center">Let's talk</span>
          </Reveal>
          <Reveal as="h1" kind="chars" delay={0.12} id="contact-heading" className="display display-xl" style={{ margin: 'clamp(0.8rem, 2vw, 1.4rem) 0' }}>
            START THE CONVERSATION
          </Reveal>
          <Reveal as="p" delay={0.35} className="lead">
            Ready to start your project? Have a question? Our team is here to help.
          </Reveal>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="section" style={{ paddingTop: 'clamp(1rem, 3vw, 2rem)' }}>
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'start',
          }}
        >
          {/* -------- info panel -------- */}
          <Reveal className="glass" style={{ padding: 'var(--space-card)' }}>
            <h2 className="display display-md" style={{ marginBottom: '0.6rem' }}>CONTACT INFORMATION</h2>
            <p className="lead" style={{ fontSize: '0.95rem', marginBottom: '1.8rem' }}>
              Reach out to us through any of the following channels.
            </p>

            {contactRows.map(c => (
              <div key={c.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1.4rem' }}>
                <div style={iconBox}><c.icon size={22} aria-hidden="true" /></div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-tech)', fontSize: '0.68rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.25rem',
                  }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: '0.98rem', lineHeight: 1.5, wordBreak: 'break-word' }}>{c.value}</div>
                </div>
              </div>
            ))}

            {/* socials */}
            {[
              { label: 'TikTok', handle: '@zivengineeringtechsol', href: 'https://www.tiktok.com/@zivengineeringtechsol',
                path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z' },
              { label: 'Instagram', handle: '@zivengineeringtech', href: 'https://www.instagram.com/zivengineeringtech',
                path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                 style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.4rem' }}>
                <div style={iconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-tech)', fontSize: '0.68rem', letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.25rem',
                  }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.98rem' }}>{s.handle}</div>
                </div>
              </a>
            ))}

            <div style={{ marginTop: '1.8rem' }}>
              <span className="tech-label" style={{ marginBottom: '0.8rem' }}>Our location</span>
              <Reveal kind="mask" style={{ minHeight: 240, marginTop: '0.8rem' }}>
                <iframe
                  title="Ziv Engineering Tech Solutions Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.812296779905!2d-0.14730550000000003!3d5.740148099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf79000d5a6733%3A0xfc2578783091f213!2sZiv%20Engineering%20Tech%20Solutions!5e0!3m2!1sen!2sgh!4v1775163689423!5m2!1sen!2sgh"
                  width="100%" height="260"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Reveal>
            </div>
          </Reveal>

          {/* -------- form panel -------- */}
          <Reveal delay={0.12} className="glass" style={{ padding: 'var(--space-card)' }}>
            <h3 className="display display-md" style={{ marginBottom: '1.4rem' }}>
              SEND US A <span className="text-molten">MESSAGE</span>
            </h3>

            {submitted && (
              <div className="alert alert--ok" role="status" style={{ marginBottom: '1.2rem' }}>
                ✓ Message sent successfully. We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="alert alert--err" role="alert" style={{ marginBottom: '1.2rem' }}>
                ✕ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '1rem' }}>
                <div className="field">
                  <label htmlFor="cf-name">Name *</label>
                  <input id="cf-name" type="text" name="name" value={formData.name} onChange={handleChange}
                         placeholder="Your name" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="cf-email">Email *</label>
                  <input id="cf-email" type="email" name="email" value={formData.email} onChange={handleChange}
                         placeholder="your@email.com" autoComplete="email" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '1rem' }}>
                <div className="field">
                  <label htmlFor="cf-phone">Phone</label>
                  <input id="cf-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}
                         placeholder="+233 ..." autoComplete="tel" />
                </div>
                <div className="field">
                  <label htmlFor="cf-service">Service</label>
                  <select id="cf-service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-message">Message *</label>
                <textarea id="cf-message" name="message" value={formData.message} onChange={handleChange}
                          placeholder="Tell us about your project..." rows={5} required />
              </div>

              <MagneticButton type="submit" variant="forge" disabled={loading} className="w-full">
                {loading ? 'Sending…' : <>Send Message <Send size={15} aria-hidden="true" /></>}
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
