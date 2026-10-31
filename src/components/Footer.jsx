import React from 'react';
import { ArrowUp, Crown, Heart, Code2, ExternalLink } from 'lucide-react';

const InstagramIcon = ({ size = 13, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer
      style={{
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(201, 166, 75, 0.25)',
        paddingTop: '60px',
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            marginBottom: '40px'
          }}
        >
          {/* Monogram Badge */}
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              border: '1px solid #C9A64B',
              background: 'linear-gradient(135deg, #181510 0%, #0D0C0A 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(201, 166, 75, 0.3)'
            }}
          >
            <Crown size={14} color="#E6CB82" />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.88rem',
                fontWeight: 800,
                color: '#F5D77F'
              }}
            >
              MB
            </span>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.4rem',
                fontWeight: 700,
                letterSpacing: '4px',
                color: '#F5F0E6'
              }}
            >
              {profile.personal.name}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.78rem',
                letterSpacing: '2.5px',
                color: '#C9A64B',
                textTransform: 'uppercase',
                marginTop: '2px'
              }}
            >
              {profile.personal.title} — {profile.personal.hometown}
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: '#B8B0A2',
              maxWidth: '500px'
            }}
          >
            “Apni Mitti. Apne Log. Apna Andaaz.”
          </p>

          {/* Back To Top Action */}
          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '30px',
              background: 'rgba(20, 18, 14, 0.8)',
              border: '1px solid rgba(201, 166, 75, 0.35)',
              color: '#F5D77F',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#F5D77F';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(201, 166, 75, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.35)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Lead Architect & Developer Credit Card (Built Solo by Deepak Kumar) */}
        {profile.developer && (
          <div
            style={{
              margin: '0 auto 35px',
              maxWidth: '720px',
              background: 'linear-gradient(135deg, rgba(25, 20, 14, 0.85), rgba(12, 12, 12, 0.95))',
              border: '1px solid rgba(201, 166, 75, 0.35)',
              borderRadius: '12px',
              padding: '18px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(201, 166, 75, 0.15)',
                  border: '1px solid rgba(201, 166, 75, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F5D77F'
                }}
              >
                <Code2 size={20} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.72rem',
                    letterSpacing: '1.5px',
                    color: '#C9A64B',
                    textTransform: 'uppercase'
                  }}
                >
                  Architected &amp; Built Solo By
                </div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#F5F0E6'
                  }}
                >
                  {profile.developer.name}{' '}
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontFamily: "'Inter', sans-serif",
                      color: '#8C8270',
                      fontWeight: 400
                    }}
                  >
                    • {profile.developer.tagline}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href={profile.developer.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 14px',
                  borderRadius: '20px',
                  background: 'rgba(201, 166, 75, 0.15)',
                  border: '1px solid rgba(201, 166, 75, 0.4)',
                  color: '#F5D77F',
                  fontSize: '0.76rem',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>Portfolio</span>
                <ExternalLink size={12} />
              </a>

              {profile.developer.instagramUrl && (
                <a
                  href={profile.developer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '7px 14px',
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.15), rgba(131, 58, 180, 0.15))',
                    border: '1px solid rgba(225, 48, 108, 0.4)',
                    color: '#F8BBD0',
                    fontSize: '0.76rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <InstagramIcon size={13} />
                  <span>Instagram</span>
                </a>
              )}

              <a
                href={profile.developer.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 14px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#E6E0D4',
                  fontSize: '0.76rem',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <span>Avensoft</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}

        {/* Bottom Credits & Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(201, 166, 75, 0.15)',
            paddingTop: '25px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            fontSize: '0.8rem',
            color: '#7A7468'
          }}
        >
          <div>
            © {new Date().getFullYear()} {profile.personal.fullName}. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Crafted with</span>
            <Heart size={12} fill="#C9A64B" color="#C9A64B" />
            <span style={{ color: '#B8B0A2' }}>for Royal Desi Identity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
