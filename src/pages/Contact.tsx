import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Building2, Phone, MessageSquare, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        message: formData.message,
        to_email: 'taylorraphael0624@gmail.com',
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
              { icon: Mail, label: 'Email', value: 'info@vkengineeringtechsolutions.com' },
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

            <div style={{ marginTop: 'clamp(1.5rem, 3vw, 2rem)' }}>
              <p style={{ 
                fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)', 
                color: 'var(--accent)', 
                fontWeight: 700, 
                letterSpacing: '0.1em', 
                marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' 
              }}>SERVICES WE HANDLE</p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: 'clamp(0.4rem, 1vw, 0.6rem)' 
              }}>
                {['Air Conditioning', 'CCTV', 'Construction', 'Civil Engineering', 'Security Fencing', 'Housing', 'Electrical', 'Solar Power'].map(s => (
                  <span key={s} style={{ 
                    background: 'rgba(0, 0, 0, 0.2)', 
                    border: '1px solid var(--border)', 
                    color: 'var(--text)', 
                    borderRadius: 8, 
                    padding: 'clamp(0.4rem, 0.8vw, 0.55rem) clamp(0.6rem, 1vw, 0.8rem)', 
                    fontSize: 'clamp(0.8rem, 1.2vw, 0.95rem)', 
                    fontWeight: 600,
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>
                    {s}
                  </span>
                ))}
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
                ✓ Message sent successfully! We'll get back to you soon.
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
                  }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
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