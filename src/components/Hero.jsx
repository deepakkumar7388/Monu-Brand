import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero({ profile }) {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navHeight = 75;
      const targetPos = aboutSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Soft Depth Glow */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '45%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 166, 75, 0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Main Hero Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1560px',
          minHeight: 'calc(100vh - 100px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 'clamp(16px, 3vw, 48px)',
          paddingRight: 'clamp(16px, 3vw, 48px)',
          boxSizing: 'border-box'
        }}
      >
        <div className="hero-editorial-layout">
          {/* Desktop Left Wing: "MONU" in Royal 24K Gold */}
          <div className="hero-left-wing desktop-only">
            <h1 className="hero-monu-title">
              MONU
            </h1>
          </div>

          {/* Central Portrait: High-Resolution Masked Portrait */}
          <div className="hero-portrait-wrap">
            <img
              src={profile.personal.avatar}
              alt={profile.personal.fullName}
              className="hero-portrait-img"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
            {/* Seamless Edge Blending Vignette */}
            <div className="hero-portrait-vignette" />
          </div>

          {/* Desktop Right Wing: Subtitle + "BRAND" in Crisp White */}
          <div className="hero-right-wing desktop-only">
            <div className="hero-role-subtitle">
              <span>The Local Legend • Ek Naam. Apni Pehchaan.</span>
            </div>

            <h1 className="hero-brand-title">
              BRAND
            </h1>
          </div>

          {/* Mobile-Only Unified Name Block: Stacked Vertically (Upar Niche) */}
          <div className="hero-mobile-block mobile-only">
            <div className="hero-role-subtitle">
              <span>The Local Legend • Ek Naam. Apni Pehchaan.</span>
            </div>

            <h1 className="hero-mobile-title-stacked">
              <span className="hero-monu-title">MONU</span>
              <span className="hero-brand-title">BRAND</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Sleek Gold Accent Bar (as shown in reference image) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, #8C6F27 15%, #E6CB82 50%, #8C6F27 85%, transparent 100%)',
          boxShadow: '0 0 16px rgba(230, 203, 130, 0.45)',
          zIndex: 10
        }}
      />

      {/* Subtle Minimal Scroll Cue */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll down"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'transparent',
          border: 'none',
          color: 'rgba(230, 203, 130, 0.65)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          zIndex: 11,
          transition: 'all 0.3s ease',
          padding: '8px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#F5D77F';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(230, 203, 130, 0.65)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '0.65rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            opacity: 0.8
          }}
        >
          Explore
        </span>
        <ChevronDown size={16} />
      </button>

      {/* Responsive Scoped Styles */}
      <style>{`
        .hero-editorial-layout {
          position: relative;
          width: 100%;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        /* Left Wing: MONU (Gold) */
        .hero-left-wing {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          z-index: 4;
          padding-right: 12px;
          margin-right: -3vw;
        }

        .hero-monu-title {
          font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: clamp(3.2rem, 7.8vw, 7.8rem);
          line-height: 0.9;
          letter-spacing: clamp(2px, 0.7vw, 8px);
          margin: 0;
          padding: 0;
          text-transform: uppercase;
          background: linear-gradient(135deg, #FFF9E6 0%, #F5D77F 25%, #C9A64B 55%, #E6CB82 80%, #9E7922 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 4px 22px rgba(201, 166, 75, 0.4));
          text-shadow: 0 0 30px rgba(201, 166, 75, 0.25);
          user-select: none;
          white-space: nowrap;
        }

        /* Central Portrait */
        .hero-portrait-wrap {
          flex: 0 0 auto;
          position: relative;
          z-index: 2;
          width: clamp(280px, 34vw, 490px);
          height: clamp(480px, 78vh, 760px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          mask-image: radial-gradient(ellipse 65% 72% at 50% 48%, black 45%, rgba(0,0,0,0.85) 68%, transparent 98%);
          -webkit-mask-image: radial-gradient(ellipse 65% 72% at 50% 48%, black 45%, rgba(0,0,0,0.85) 68%, transparent 98%);
          filter: contrast(1.08) brightness(1.02);
          transform: translateZ(0);
        }

        .hero-portrait-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 50% 50%, transparent 50%, #000000 100%);
          opacity: 0.35;
        }

        /* Right Wing: BRAND (White) + Subtitle */
        .hero-right-wing {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          z-index: 4;
          padding-left: 12px;
          margin-left: -3vw;
        }

        .hero-role-subtitle {
          font-family: 'Inter', -apple-system, sans-serif;
          font-weight: 700;
          font-size: clamp(0.85rem, 1.25vw, 1.15rem);
          letter-spacing: 1.5px;
          color: #E6CB82;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
          user-select: none;
          white-space: nowrap;
        }

        .hero-brand-title {
          font-family: 'Cinzel', 'Playfair Display', Georgia, serif;
          font-weight: 800;
          font-size: clamp(3.2rem, 7.8vw, 7.8rem);
          line-height: 0.9;
          letter-spacing: clamp(2px, 0.7vw, 8px);
          margin: 0;
          padding: 0;
          text-transform: uppercase;
          color: #FFFFFF;
          text-shadow: 0 4px 25px rgba(0, 0, 0, 0.95), 0 0 20px rgba(255, 255, 255, 0.15);
          user-select: none;
          white-space: nowrap;
        }

        /* Medium / Tablet Screens (< 1024px) */
        @media (max-width: 1024px) {
          .hero-portrait-wrap {
            width: clamp(260px, 40vw, 380px);
            height: clamp(440px, 70vh, 580px);
          }
          .hero-left-wing {
            margin-right: -5vw;
          }
          .hero-right-wing {
            margin-left: -5vw;
          }
          .hero-monu-title,
          .hero-brand-title {
            font-size: clamp(2.4rem, 6.5vw, 4.8rem);
          }
        }

        /* Mobile View (< 768px) */
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: flex !important;
          }

          .hero-editorial-layout {
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            padding-bottom: 54px;
            min-height: calc(100vh - 90px);
            position: relative;
          }

          /* Portrait on Mobile: Clean Upper Center Placement */
          .hero-portrait-wrap {
            position: absolute;
            top: 2%;
            left: 50%;
            transform: translateX(-50%);
            width: 86vw;
            max-width: 360px;
            height: 58vh;
            max-height: 460px;
            z-index: 2;
          }

          /* Mobile Bottom Block: Subtitle + Stacked Name (Upar Niche) */
          .hero-mobile-block {
            position: relative;
            z-index: 6;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 0 16px;
            margin-top: auto;
          }

          .hero-mobile-block .hero-role-subtitle {
            font-size: clamp(0.72rem, 3.2vw, 0.88rem);
            letter-spacing: 1.5px;
            color: #E6CB82;
            margin-bottom: 6px;
            white-space: normal;
            text-align: center;
            max-width: 90%;
            line-height: 1.35;
          }

          .hero-mobile-title-stacked {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            width: 100%;
          }

          .hero-mobile-title-stacked .hero-monu-title {
            font-size: clamp(2.8rem, 13vw, 4.4rem);
            letter-spacing: clamp(3px, 1.2vw, 8px);
            line-height: 0.92;
            margin-bottom: 2px;
            white-space: nowrap;
          }

          .hero-mobile-title-stacked .hero-brand-title {
            font-size: clamp(2.8rem, 13vw, 4.4rem);
            letter-spacing: clamp(3px, 1.2vw, 8px);
            line-height: 0.92;
            margin: 0;
            white-space: nowrap;
          }
        }

        /* Small Phones (< 380px) */
        @media (max-width: 380px) {
          .hero-portrait-wrap {
            height: 52vh;
            max-height: 400px;
          }
          .hero-mobile-title-stacked .hero-monu-title,
          .hero-mobile-title-stacked .hero-brand-title {
            font-size: 2.4rem;
            letter-spacing: 3px;
          }
        }
      `}</style>
    </section>
  );
}
