import React from 'react';
import { ArrowUp, Crown, Heart } from 'lucide-react';

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
