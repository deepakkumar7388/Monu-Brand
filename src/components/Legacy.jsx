import React, { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, Check, Crown, Sparkles, Globe } from 'lucide-react';

// Custom precision Brand Icons in SVG
const InstagramIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill={color}></polygon>
  </svg>
);

const FacebookIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Legacy({ profile }) {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', message: '' });
    }, 750);
  };

  const socialIcons = {
    Instagram: InstagramIcon,
    WhatsApp: MessageCircle,
    YouTube: YoutubeIcon,
    Facebook: FacebookIcon
  };

  return (
    <section
      id="legacy"
      style={{
        paddingTop: '130px',
        paddingBottom: '120px',
        position: 'relative',
        backgroundColor: '#080808',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Radial Gold Lighting */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201, 166, 75, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Tag & Main Dramatic Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <Crown size={14} color="#C9A64B" />
            <span>{profile.legacy.tag}</span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)',
              fontWeight: 900,
              letterSpacing: '1px',
              color: '#F5F0E6',
              marginBottom: '16px',
              lineHeight: 1.1
            }}
          >
            <span className="gold-gradient-text">{profile.legacy.heading}</span>
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)',
              color: '#E6CB82',
              letterSpacing: '1px',
              marginBottom: '32px'
            }}
          >
            {profile.legacy.quote}
          </p>

          {/* Royal Signature */}
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '3.4rem',
                fontWeight: 700,
                color: '#F5D77F',
                letterSpacing: '4px',
                textShadow: '0 0 25px rgba(245, 215, 127, 0.4)'
              }}
            >
              {profile.legacy.signature}
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.8rem',
                letterSpacing: '3px',
                color: '#8C8270',
                textTransform: 'uppercase',
                marginTop: '-8px'
              }}
            >
              {profile.legacy.signatureTitle}
            </div>
          </div>
        </div>

        {/* Contact and Direct Tribute Box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'start',
            maxWidth: '1080px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Direct Connect Details & Socials */}
          <div
            className="luxury-card"
            style={{
              padding: '36px 30px'
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.8rem',
                letterSpacing: '2.5px',
                color: '#C9A64B',
                textTransform: 'uppercase'
              }}
            >
              Direct Connect
            </span>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: '#F5F0E6',
                fontWeight: 600,
                margin: '10px 0 16px 0'
              }}
            >
              Connect With Monu Brand
            </h3>

            <p style={{ color: '#B8B0A2', fontSize: '0.94rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Direct sandesh bheinjiye ya official handles ke zariye judiye.
            </p>

            <div style={{ marginBottom: '28px', background: 'rgba(20, 18, 14, 0.7)', border: '1px solid rgba(201, 166, 75, 0.25)', borderRadius: '6px', padding: '14px 18px' }}>
              <div style={{ fontSize: '0.72rem', color: '#8C8270', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '4px' }}>
                Territory & Belt
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", color: '#E6CB82', fontSize: '0.9rem', fontWeight: 600 }}>
                {profile.legacy.contactInfo.address}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.75rem',
                  letterSpacing: '2px',
                  color: '#8C8270',
                  textTransform: 'uppercase',
                  marginBottom: '14px'
                }}
              >
                Official Handles
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {profile.legacy.socialLinks.map((social) => {
                  const Icon = socialIcons[social.name] || Globe;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 18px',
                        borderRadius: '6px',
                        background: 'rgba(20, 18, 14, 0.8)',
                        border: '1px solid rgba(201, 166, 75, 0.3)',
                        color: '#F5F0E6',
                        fontSize: '0.82rem',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#F5D77F';
                        e.currentTarget.style.color = '#F5D77F';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.3)';
                        e.currentTarget.style.color = '#F5F0E6';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Icon size={15} color="#C9A64B" />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Send Message / Tribute Form */}
          <div
            className="gold-corner-box luxury-card"
            style={{
              padding: '36px 30px'
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.8rem',
                letterSpacing: '2.5px',
                color: '#C9A64B',
                textTransform: 'uppercase'
              }}
            >
              Send A Message
            </span>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: '#F5F0E6',
                fontWeight: 600,
                margin: '10px 0 20px 0'
              }}
            >
              Paigham / Greetings
            </h3>

            {submitted ? (
              <div
                style={{
                  background: 'rgba(201, 166, 75, 0.1)',
                  border: '1px solid #C9A64B',
                  borderRadius: '6px',
                  padding: '24px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: '#C9A64B',
                    color: '#0A0A0A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px auto'
                  }}
                >
                  <Check size={24} />
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#F5D77F', marginBottom: '6px' }}>
                  Aapka Sandesh Mil Gaya!
                </h4>
                <p style={{ color: '#B8B0A2', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Shukriya. Monu Bhai and the team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#C9A64B',
                    fontSize: '0.82rem',
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '1px',
                      color: '#B8B0A2',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(12, 11, 10, 0.85)',
                      border: '1px solid rgba(201, 166, 75, 0.3)',
                      borderRadius: '4px',
                      color: '#F5F0E6',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif"
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#F5D77F')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 166, 75, 0.3)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '1px',
                      color: '#B8B0A2',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Contact / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(12, 11, 10, 0.85)',
                      border: '1px solid rgba(201, 166, 75, 0.3)',
                      borderRadius: '4px',
                      color: '#F5F0E6',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif"
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#F5D77F')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 166, 75, 0.3)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      fontFamily: "'Cinzel', serif",
                      letterSpacing: '1px',
                      color: '#B8B0A2',
                      marginBottom: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    Your Message / Sandesh *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your words or invitation here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(12, 11, 10, 0.85)',
                      border: '1px solid rgba(201, 166, 75, 0.3)',
                      borderRadius: '4px',
                      color: '#F5F0E6',
                      fontSize: '0.92rem',
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif",
                      resize: 'vertical'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#F5D77F')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(201, 166, 75, 0.3)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold-primary"
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={15} />
                  <span>{loading ? 'Sending...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
