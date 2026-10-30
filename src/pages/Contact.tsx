import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Building2, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { setCanonicalURL } from '../utils/canonical';
import MagneticButton from '../component/fx/Magnetic';

const contactRows = [
  { icon: MapPin, label: 'Location', value: 'Accra, Greater Accra Region, Ghana' },
  { icon: Building2, label: 'Address', value: 'CJ 233, Koney Rambo Street, GD - 131 - 8189' },
  { icon: Phone, label: 'Phone', value: '+233 24 4657 280 / +233 59 348 9680' },
  { icon: MessageSquare, label: 'Whatsapp', value: '+233 24 4657 280' },
  { icon: Mail, label: 'Email', value: 'zivengineeringtechsolutions@gmail.com' },
  { icon: Clock, label: 'Working Hours', value: 'Monday – Saturday: 8:00 AM – 5:30 PM' },
];

const serviceOptions = [
  'AC Installation & Servicing', 'CCTV & Surveillance', 'Building & Construction',
  'Civil Engineering', 'Security Fencing', 'Housing Projects', 'Electrical Works',
  'Plumbing Works', 'Dstv Installation', 'Power and Energy', 'Android TV & TV Stick Jailbreaking',
];

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

  const socials = [
    { label: 'TikTok', handle: '@zivengineeringtechsol', href: 'https://www.tiktok.com/@zivengineeringtechsol' },
    { label: 'Instagram', handle: '@zivengineeringtech', href: 'https://www.instagram.com/zivengineeringtech' },
  ];

  return (
    <main>
      {/* ============ HEAD ============ */}
      <header className="page-head">
        <div className="container">
          <div className="page-head__inner">
            <span className="eyebrow">Let's talk</span>
            <h1 id="contact-heading" className="h1">START THE CONVERSATION</h1>
            <p className="lead">
              Ready to start your project? Have a question? Our team is here to help.
            </p>
          </div>
        </div>
      </header>

      {/* ============ FORM + DETAILS ============ */}
      <section aria-labelledby="contact-heading">
        <div className="container grid-12 contact">
          {/* -------- form -------- */}
          <div className="contact__form">
            <h2 className="h2">SEND US A MESSAGE</h2>

            {submitted && (
              <div className="alert alert--ok" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                <span>Message sent successfully. We'll get back to you soon.</span>
              </div>
            )}
            {error && (
              <div className="alert alert--err" role="alert">
                <AlertCircle size={18} aria-hidden="true" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="form">
              <div className="form__row">
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

              <div className="form__row">
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

              <div className="form__foot">
                <MagneticButton type="submit" variant="forge" disabled={loading}>
                  {loading ? 'Sending…' : <>Send Message <Send size={16} aria-hidden="true" /></>}
                </MagneticButton>
                <p aria-hidden="true">* required</p>
              </div>
            </form>
          </div>

          {/* -------- details -------- */}
          <aside className="contact__details" aria-labelledby="contact-info">
            <h2 id="contact-info" className="h3">CONTACT INFORMATION</h2>
            <p className="muted" style={{ marginBottom: 'var(--s-5)' }}>
              Reach out to us through any of the following channels.
            </p>

            <dl className="details">
              {contactRows.map(c => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>{c.value}</dd>
                </div>
              ))}
              {socials.map(s => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd><a href={s.href} target="_blank" rel="noopener noreferrer">{s.handle}</a></dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="map" aria-labelledby="map-label">
        <div className="container map__label">
          <span id="map-label" className="eyebrow">Our location</span>
        </div>
        <iframe
          title="Ziv Engineering Tech Solutions Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.812296779905!2d-0.14730550000000003!3d5.740148099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf79000d5a6733%3A0xfc2578783091f213!2sZiv%20Engineering%20Tech%20Solutions!5e0!3m2!1sen!2sgh!4v1775163689423!5m2!1sen!2sgh"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
