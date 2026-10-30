import React from 'react';
import { Crown, Users, Sprout, ShieldCheck, Quote, Award, HeartHandshake } from 'lucide-react';

export default function About({ profile }) {
  const iconMap = {
    Crown: Crown,
    Users: Users,
    Sprout: Sprout,
    ShieldCheck: ShieldCheck
  };

  return (
    <section
      id="about"
      style={{
        paddingTop: '120px',
        paddingBottom: '110px',
        position: 'relative',
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(201, 166, 75, 0.15)',
        borderBottom: '1px solid rgba(201, 166, 75, 0.15)'
      }}
    >
      {/* Background Watermark Monogram */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          fontFamily: "'Cinzel', serif",
          fontSize: '28vw',
          fontWeight: 900,
          color: 'rgba(201, 166, 75, 0.02)',
          lineHeight: 0.8,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        MB
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Editorial Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <div className="section-badge">
            <Quote size={13} color="#C9A64B" />
            <span>{profile.about.subtitle}</span>
          </div>

          <h2 className="section-title">
            Rooted in Soil. <span className="gold-gradient-text">Forged in Character.</span>
          </h2>

          <p className="section-subtitle">
            {profile.about.headline}
          </p>
        </div>

        {/* Editorial Grid: Portrait on Left, Detailed Story on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '80px'
          }}
        >
          {/* Left: Regal Editorial Portrait */}
          <div style={{ position: 'relative' }}>
            <div
              className="gold-corner-box"
              style={{
                borderRadius: '8px',
                padding: '12px',
                background: 'rgba(18, 18, 18, 0.8)',
                border: '1px solid rgba(201, 166, 75, 0.3)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  borderRadius: '6px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={profile.personal.aboutPortrait}
                  alt={`${profile.personal.name} Haveli Portrait`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8, 8, 8, 0.85) 0%, transparent 60%)'
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px'
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: '1.25rem',
                      color: '#F5D77F',
                      lineHeight: '1.4',
                      marginBottom: '8px'
                    }}
                  >
                    “Apne logon ke beech jo samman milta hai, uski koi keemat nahi ho sakti.”
                  </p>
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.8rem',
                      letterSpacing: '2px',
                      color: '#B8B0A2',
                      textTransform: 'uppercase'
                    }}
                  >
                    — Monu Brand
                  </span>
                </div>
              </div>
            </div>

            {/* Clean Origin Info Pill */}
            <div
              style={{
                marginTop: '16px',
                background: 'rgba(20, 18, 14, 0.7)',
                border: '1px solid rgba(201, 166, 75, 0.25)',
                borderRadius: '6px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: '#8C8270', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Origin & Belt
              </div>
              <div style={{ fontFamily: "'Cinzel', serif", color: '#E6CB82', fontWeight: 600, fontSize: '0.92rem' }}>
                {profile.personal.hometown}
              </div>
            </div>
          </div>

          {/* Right: Detailed Biography & Pillars */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}
            >
              <span
                style={{
                  height: '1px',
                  width: '40px',
                  background: '#C9A64B'
                }}
              />
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.82rem',
                  letterSpacing: '3px',
                  color: '#C9A64B',
                  textTransform: 'uppercase'
                }}
              >
                Asal Pehchaan
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
                fontWeight: 700,
                color: '#F5F0E6',
                lineHeight: '1.25',
                marginBottom: '22px'
              }}
            >
              Dil Se Desi. <span className="shimmer-text">Kirdar Se Shandaar.</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '38px' }}>
              {profile.about.storyParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  style={{
                    color: '#B8B0A2',
                    fontSize: '1.02rem',
                    lineHeight: '1.8'
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Signature Box */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(25, 22, 16, 0.8), rgba(15, 15, 15, 0.95))',
                borderLeft: '3px solid #C9A64B',
                borderTop: '1px solid rgba(201, 166, 75, 0.2)',
                borderRight: '1px solid rgba(201, 166, 75, 0.2)',
                borderBottom: '1px solid rgba(201, 166, 75, 0.2)',
                borderRadius: '0 8px 8px 0',
                padding: '24px 28px',
                position: 'relative'
              }}
            >
              <Quote
                size={34}
                color="#C9A64B"
                style={{ position: 'absolute', top: '16px', right: '20px', opacity: 0.2 }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.35rem',
                  fontStyle: 'italic',
                  color: '#F5D77F',
                  lineHeight: '1.5',
                  marginBottom: '10px'
                }}
              >
                “{profile.personal.signatureQuote}”
              </p>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  color: '#E6CB82',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                {profile.personal.signatureAuthor}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Character Grid */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.82rem',
                letterSpacing: '3px',
                color: '#C9A64B',
                textTransform: 'uppercase'
              }}
            >
              Asool & Pehchaan
            </span>
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: '#F5F0E6',
                marginTop: '6px'
              }}
            >
              Pillars of Monu Brand
            </h4>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {profile.about.pillars.map((pillar, index) => {
              const IconComponent = iconMap[pillar.icon] || Award;
              return (
                <div
                  key={index}
                  className="luxury-card"
                  style={{
                    padding: '30px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'rgba(201, 166, 75, 0.12)',
                      border: '1px solid rgba(201, 166, 75, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComponent size={22} color="#F5D77F" />
                  </div>

                  <h5
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#F5F0E6'
                    }}
                  >
                    {pillar.title}
                  </h5>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: '#B8B0A2',
                      lineHeight: '1.65'
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Metrics & Impact Counter Bar */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(22, 19, 14, 0.85) 0%, rgba(12, 12, 12, 0.95) 100%)',
            border: '1px solid rgba(201, 166, 75, 0.3)',
            borderRadius: '10px',
            padding: '36px 30px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              textAlign: 'center'
            }}
          >
            {profile.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  borderRight: i < profile.stats.length - 1 ? '1px solid rgba(201, 166, 75, 0.15)' : 'none',
                  padding: '0 15px'
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}
                  className="gold-gradient-text"
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.85rem',
                    letterSpacing: '1.5px',
                    fontWeight: 600,
                    color: '#F5F0E6',
                    textTransform: 'uppercase',
                    marginBottom: '4px'
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#8C8270'
                  }}
                >
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
