import React, { useState } from 'react';
import { Users, Heart, Sparkles, ZoomIn, Calendar, Tag } from 'lucide-react';

export default function Brotherhood({ profile, onOpenLightbox }) {
  const [likes, setLikes] = useState({
    b1: 248,
    b2: 312,
    b3: 189,
    b4: 274
  });

  const handleLike = (e, id) => {
    e.stopPropagation();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section
      id="brotherhood"
      style={{
        paddingTop: '120px',
        paddingBottom: '110px',
        position: 'relative',
        backgroundColor: '#080808'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-badge">
            <Users size={14} color="#C9A64B" />
            <span>{profile.brotherhood.subtitle}</span>
          </div>

          <h2 className="section-title">
            Yaaron Ka Yaar. <span className="gold-gradient-text">Brothers for Life.</span>
          </h2>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '1.45rem',
              color: '#F5D77F',
              letterSpacing: '0.5px',
              marginTop: '12px'
            }}
          >
            {profile.brotherhood.featuredQuote}
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}
        >
          {profile.brotherhood.items.map((item, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={item.id}
                className="luxury-card"
                onClick={() => onOpenLightbox(profile.brotherhood.items, index)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gridColumn: isFeatured ? 'span 1' : 'span 1'
                }}
              >
                {/* Image Container with Zoom & Hover Actions */}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: item.objectPosition || 'center top',
                      display: 'block',
                      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />

                  {/* Dark Gradient Vignette */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Tag Pill Top-Left */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: 'rgba(12, 11, 10, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(201, 166, 75, 0.35)',
                      borderRadius: '20px',
                      padding: '4px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Tag size={12} color="#F5D77F" />
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '0.72rem',
                        letterSpacing: '1px',
                        color: '#E6CB82',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Top-Right Lightbox Indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'rgba(12, 11, 10, 0.75)',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(201, 166, 75, 0.3)',
                      color: '#F5D77F'
                    }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Card Content & Caption */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flex: 1
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: '#C9A64B',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                          fontFamily: "'Cinzel', serif"
                        }}
                      >
                        ✦ {item.occasion}
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.75rem',
                          color: '#8C8270'
                        }}
                      >
                        <Calendar size={12} />
                        {item.year}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: '#F5F0E6',
                        marginBottom: '10px',
                        lineHeight: '1.3'
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.94rem',
                        color: '#B8B0A2',
                        lineHeight: '1.6',
                        marginBottom: '20px'
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>

                  {/* Footer Action: Respect Yaari Reaction */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(201, 166, 75, 0.15)'
                    }}
                  >
                    <button
                      onClick={(e) => handleLike(e, item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'transparent',
                        border: 'none',
                        color: '#E6CB82',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        fontFamily: "'Inter', sans-serif",
                        transition: 'transform 0.2s ease'
                      }}
                      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
                      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      title="Salute Brotherhood"
                    >
                      <Heart size={16} fill="#C9A64B" color="#C9A64B" />
                      <span>{likes[item.id] || 0} Yaari Respect</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
