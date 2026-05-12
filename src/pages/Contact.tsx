import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Building2, Phone, MessageSquare, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('zPveAVVOft33ATShu'); // Public key from EmailJS
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
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
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Failed to send message. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

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
          }}>LET'S TALK</p>
          <h1 style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: 'clamp(2rem, 6vw, 5rem)', 
            letterSpacing: '0.05em', 
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)' 
          }}>
            GET IN <span style={{ 
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>TOUCH</span>
          </h1>
          <p style={{ 
            color: 'var(--muted)', 
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', 
            lineHeight: 1.9 
          }}>
            Ready to start your project? Have a question? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ 
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
        background: 'var(--bg)' 
      }}>
        <div style={{ 
          maxWidth: 1100, 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 50vw, 500px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)', 
          alignItems: 'start' 
        }}>
          <div style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--border)', 
            borderRadius: 16, 
            padding: 'clamp(1.25rem, 2.5vw, 2.5rem)', 
            boxShadow: '0 18px 40px rgba(0, 0, 0, 0.15)' 
          }}>
            <h2 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
              letterSpacing: '0.05em', 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)' 
            }}>CONTACT INFORMATION</h2>
            <p style={{ 
              color: 'var(--muted)', 
              marginBottom: 'clamp(1rem, 2vw, 1.8rem)', 
              fontSize: 'clamp(0.95rem, 1.3vw, 1.05rem)' 
            }}>Reach out to us through any of the following channels.</p>

            {[
              { icon: MapPin, label: 'Location', value: 'Accra, Greater Accra Region, Ghana' },
              { icon: Building2, label: 'Address', value: 'CJ 233, Koney Rambo Street, GD - 131 - 8189' },
              { icon: Phone, label: 'Phone', value: '+233 24 4657 280 / +233 54 9266 505' },
              { icon: MessageSquare, label: 'Whatsapp', value: '+233 24 4657 280' },
              { icon: Mail, label: 'Email', value: 'zivengineeringtechsolutions@gmail.com' },
              { icon: Clock, label: 'Working Hours', value: 'Monday – Saturday: 8:00 AM – 6:00 PM' },
            ].map(c => (
              <div key={c.label} style={{ 
                display: 'flex', 
                gap: 'clamp(0.75rem, 1.5vw, 1.2rem)', 
                alignItems: 'flex-start', 
                marginBottom: 'clamp(1rem, 2vw, 1.8rem)' 
              }}>
                <div style={{ 
                  width: 44, height: 44, minWidth: 44, 
                  background: 'rgba(240,165,0,0.15)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 10, 
                  display: 'grid', 
                  placeItems: 'center', 
                  flexShrink: 0,
                }}>
                  <c.icon size={24} color="var(--accent)" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ 
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)', 
                    color: 'var(--accent)', 
                    fontWeight: 700, 
                    marginBottom: '0.2rem',
                    wordBreak: 'break-word',
                  }}>
                    {c.label}
                  </div>
                  <div style={{ 
                    color: 'var(--text)', 
                    fontSize: 'clamp(0.9rem, 1.3vw, 1.08rem)', 
                    lineHeight: 1.5,
                    wordBreak: 'break-word',
                  }}>
                    {c.value}
                  </div>
                </div>
              </div>
            ))}

            {/* TikTok */}
            <div style={{ display: 'flex', gap: 'clamp(0.75rem, 1.5vw, 1.2rem)', alignItems: 'flex-start', marginBottom: 'clamp(1rem, 2vw, 1.8rem)' }}>
              <a href="https://www.tiktok.com/@zivengineeringtechsol" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                <div style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(240,165,0,0.15)', border: '1px solid var(--border)', borderRadius: 10, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </div>
              </a>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.2rem' }}>TikTok</div>
                <a href="https://www.tiktok.com/@zivengineeringtechsol" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 'clamp(0.9rem, 1.3vw, 1.08rem)', lineHeight: 1.5, textDecoration: 'none', wordBreak: 'break-word' }}>
                  @zivengineeringtechsol
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div style={{ display: 'flex', gap: 'clamp(0.75rem, 1.5vw, 1.2rem)', alignItems: 'flex-start', marginBottom: 'clamp(1rem, 2vw, 1.8rem)' }}>
              <a href="https://www.instagram.com/zivengineeringtech" target="_blank" rel="noopener noreferrer" style={{ display: 'contents' }}>
                <div style={{ width: 44, height: 44, minWidth: 44, background: 'rgba(240,165,0,0.15)', border: '1px solid var(--border)', borderRadius: 10, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.2rem' }}>Instagram</div>
                <a href="https://www.instagram.com/zivengineeringtech" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text)', fontSize: 'clamp(0.9rem, 1.3vw, 1.08rem)', lineHeight: 1.5, textDecoration: 'none', wordBreak: 'break-word' }}>
                  @zivengineeringtech
                </a>
              </div>
            </div>

            <div style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)', 
                color: 'var(--accent)', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' 
              }}>OUR LOCATION</p>
              <div style={{
                width: '100%',
                minHeight: 240,
                border: '1px solid var(--border)',
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              }}>
                <iframe
                  title="VK Technologies Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.812296779905!2d-0.14730550000000003!3d5.740148099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf79000d5a6733%3A0xfc2578783091f213!2sZiv%20Engineering%20Tech%20Solutions!5e0!3m2!1sen!2sgh!4v1775163689423!5m2!1sen!2sgh"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

           
          </div>

          <div style={{ 
            background: 'var(--surface)', 
            border: '1px solid var(--border)', 
            borderRadius: 16, 
            padding: 'clamp(1.25rem, 2.5vw, 2.5rem)', 
            boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)' 
          }}>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', 
              letterSpacing: '0.04em', 
              marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)', 
              color: 'var(--accent)' 
            }}>SEND US A MESSAGE</h3>
            
            {submitted && (
              <div style={{
                background: 'rgba(240, 165, 0, 0.15)',
                border: '1px solid var(--accent)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                color: 'var(--accent)',
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              }}>
                ✓ Message sent successfully We'll get back to you soon.
              </div>
            )}

            {error && (
              <div style={{
                background: 'rgba(255, 100, 100, 0.15)',
                border: '1px solid #ff6464',
                borderRadius: 'var(--radius)',
                padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#ff6464',
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              }}>
                ✕ {error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(140px, 45vw, 200px), 1fr))', gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(0.75rem, 1.5vw, 1rem)',
                      color: 'var(--text)',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'var(--transition)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(0.75rem, 1.5vw, 1rem)',
                      color: 'var(--text)',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'var(--transition)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(140px, 45vw, 200px), 1fr))', gap: 'clamp(0.75rem, 1.5vw, 1rem)' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+233 ..."
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(0.75rem, 1.5vw, 1rem)',
                      color: 'var(--text)',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'var(--transition)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{
                    fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    marginBottom: '0.4rem',
                  }}>Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(0.75rem, 1.5vw, 1rem)',
                      color: 'var(--text)',
                      fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'var(--transition)',
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <option value="">Select a service...</option>
                    <option value="AC Installation & Servicing">AC Installation & Servicing</option>
                    <option value="CCTV & Surveillance">CCTV & Surveillance</option>
                    <option value="Building & Construction">Building & Construction</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Security Fencing">Security Fencing</option>
                    <option value="Housing Projects">Housing Projects</option>
                    <option value="Electrical Works">Electrical Works</option>
                    <option value="Plumbing Works">Plumbing Works</option>
                    <option value="Dstv Installation">Dstv Installation</option>
                    <option value="Power and Energy">Power and Energy</option>
                    <option value="Android TV & TV Stick Jailbreaking">Android TV & TV Stick Jailbreaking</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{
                  fontSize: 'clamp(0.85rem, 1.1vw, 0.95rem)',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '0.4rem',
                }}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    padding: 'clamp(0.6rem, 1.2vw, 0.8rem) clamp(0.75rem, 1.5vw, 1rem)',
                    color: 'var(--text)',
                    fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    transition: 'var(--transition)',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: loading ? 'var(--muted)' : 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  color: '#000',
                  fontWeight: 700,
                  padding: 'clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.5rem, 3vw, 2rem)',
                  borderRadius: 10,
                  fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                  letterSpacing: '0.08em',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'var(--transition)',
                  opacity: loading ? 0.6 : 1,
                  width: '100%',
                }}
                onMouseEnter={(e) => !loading && (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}