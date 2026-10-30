import React from 'react';
import { MapPin, Compass, Landmark, Sparkles, Sprout, Milestone } from 'lucide-react';

export default function Hometown({ profile }) {
  return (
    <section
      id="hometown"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        position: 'relative',
        backgroundColor: '#0A0A0A',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <MapPin size={14} color="#C9A64B" />
            <span>{profile.hometown.subtitle}</span>
          </div>

          <h2 className="section-title">
            The Soil That Made The Man. <span className="gold-gradient-text">{profile.personal.hometown}</span>
          </h2>

          <p className="section-subtitle">
            {profile.hometown.description}
          </p>
        </div>

        {/* Cinematic Panoramic Banner */}
        <div
          className="gold-corner-box"
          style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '70px',
            border: '1px solid rgba(201, 166, 75, 0.3)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)'
          }}
        >
          <div style={{ position: 'relative', height: 'clamp(260px, 32vw, 380px)', width: '100%' }}>
            <img
              src={profile.hometown.coverImage}
              alt="Hometown Landscape"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 40%',
                display: 'block'
              }}
            />
            {/* Dark Gradient Mask */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.25) 50%, rgba(8, 8, 8, 0.6) 100%)'
              }}
            />

            {/* Overlaid Banner Text & Badges */}
            <div
              style={{
                position: 'absolute',
                bottom: '36px',
                left: '36px',
                right: '36px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '20px'
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.85rem',
                    letterSpacing: '3px',
                    color: '#F5D77F',
                    textTransform: 'uppercase'
                  }}
                >
                  ✦ Ancestral Heritage
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                    color: '#F5F0E6',
                    fontWeight: 700,
                    lineHeight: 1.15,
                    marginTop: '4px'
                  }}
                >
                  {profile.hometown.title}
                </h3>
              </div>

              {/* Grid of Key Hometown Details */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}
              >
                {profile.hometown.details.map((detail, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(15, 14, 12, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(201, 166, 75, 0.3)',
                      borderRadius: '6px',
                      padding: '10px 18px'
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', color: '#8C8270', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {detail.label}
                    </div>
                    <div style={{ fontFamily: "'Cinzel', serif", color: '#E6CB82', fontSize: '0.9rem', fontWeight: 600 }}>
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Territory Anthem & Village Strongholds Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(20, 18, 14, 0.85) 0%, rgba(10, 10, 10, 0.95) 100%)',
            border: '1px solid rgba(201, 166, 75, 0.35)',
            borderRadius: '10px',
            padding: 'clamp(28px, 4vw, 48px)',
            marginBottom: '70px',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Golden Glow Accent */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201, 166, 75, 0.12) 0%, transparent 70%)',
              filter: 'blur(30px)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ textAlign: 'center', marginBottom: '26px' }}>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '0.8rem',
                letterSpacing: '3px',
                color: '#C9A64B',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px'
              }}
            >
              ✦ Apna Ilaaka ✦
            </span>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
                color: '#F5F0E6',
                fontWeight: 700
              }}
            >
              Ilaaka Koi Bhi Ho… <span className="gold-gradient-text">Naam Ek Hi Chalega.</span>
            </h3>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                color: '#E6CB82',
                fontStyle: 'italic',
                marginTop: '10px',
                marginBottom: '0'
              }}
            >
              “Pandeypur se Drummondganj tak — har gaon apna, har banda apna bhai.”
            </p>
          </div>

          {/* Interactive Village Strongholds Badges */}
          <div style={{ borderTop: '1px solid rgba(201, 166, 75, 0.2)', paddingTop: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.72rem',
                  letterSpacing: '2.5px',
                  color: '#B8B0A2',
                  textTransform: 'uppercase'
                }}
              >
                Connected Territory Strongholds (11 Hubs)
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {(profile.personal.territoryVillages || []).map((village, vIdx) => (
                <div
                  key={vIdx}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    borderRadius: '24px',
                    background: 'rgba(201, 166, 75, 0.06)',
                    border: '1px solid rgba(201, 166, 75, 0.28)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#F5D77F';
                    e.currentTarget.style.background = 'rgba(201, 166, 75, 0.16)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.28)';
                    e.currentTarget.style.background = 'rgba(201, 166, 75, 0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <MapPin size={12} color="#C9A64B" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: '#F5F0E6' }}>
                    {village.en}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#B8B0A2', marginLeft: '2px' }}>
                    ({village.hi})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
