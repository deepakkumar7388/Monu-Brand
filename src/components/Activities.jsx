import React from 'react';
import { HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function Activities({ profile, onOpenLightbox }) {
  const items = profile.activities.items;

  return (
    <section
      id="activities"
      style={{
        paddingTop: '110px',
        paddingBottom: '100px',
        position: 'relative',
        backgroundColor: '#080808'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            <HeartHandshake size={14} color="#C9A64B" />
            <span>{profile.activities.subtitle}</span>
          </div>

          <h2 className="section-title">
            Logon Ke Beech. <span className="gold-gradient-text">Leadership & Seva.</span>
          </h2>

          <p className="section-subtitle">
            {profile.activities.intro}
          </p>
        </div>

        {/* Activities Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '26px'
          }}
        >
          {items.map((act, index) => (
            <div
              key={act.id}
              className="luxury-card"
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onClick={() => onOpenLightbox(items, index)}
              >
                <img
                  src={act.image}
                  alt={act.title}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: act.objectPosition || 'center top',
                    display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(12,12,12,0.95) 0%, transparent 60%)'
                  }}
                />

                {/* Badge Top Left */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(15, 14, 12, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(201, 166, 75, 0.35)',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.72rem',
                    letterSpacing: '1px',
                    color: '#E6CB82',
                    textTransform: 'uppercase'
                  }}
                >
                  {act.badge}
                </div>
              </div>

              <div
                style={{
                  padding: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#C9A64B',
                      marginBottom: '6px'
                    }}
                  >
                    ✦ {act.category}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.25rem',
                      color: '#F5F0E6',
                      fontWeight: 600,
                      marginBottom: '8px'
                    }}
                  >
                    {act.title}
                  </h3>

                  <p
                    style={{
                      color: '#B8B0A2',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      marginBottom: '16px'
                    }}
                  >
                    {act.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(201, 166, 75, 0.15)',
                    fontSize: '0.8rem',
                    color: '#E6CB82',
                    fontWeight: 600
                  }}
                >
                  <CheckCircle2 size={14} color="#C9A64B" />
                  <span>{act.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
