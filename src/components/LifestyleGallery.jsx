import React, { useState } from 'react';
import { Camera, ZoomIn, Sparkles, Filter } from 'lucide-react';

export default function LifestyleGallery({ profile, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = profile.gallery.categories || ['All', 'Portraits', 'Brotherhood', 'Roots & Village', 'Swag & Rides'];

  const filteredItems = activeCategory === 'All'
    ? profile.gallery.items
    : profile.gallery.items.filter(item => {
        if (Array.isArray(item.category)) {
          return item.category.includes(activeCategory);
        }
        return item.category === activeCategory;
      });

  return (
    <section
      id="gallery"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        position: 'relative',
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(201, 166, 75, 0.15)',
        borderBottom: '1px solid rgba(201, 166, 75, 0.15)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div className="section-badge">
            <Camera size={14} color="#C9A64B" />
            <span>{profile.gallery.subtitle}</span>
          </div>

          <h2 className="section-title">
            Lifestyle & Moments. <span className="gold-gradient-text">Visual Chronicle.</span>
          </h2>

          <p className="section-subtitle">
            Yaari, andaaz aur apno ke sang yaadgar lamhe.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '45px'
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 22px',
                  borderRadius: '30px',
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.8rem',
                  letterSpacing: '1.8px',
                  fontWeight: isActive ? 700 : 500,
                  textTransform: 'uppercase',
                  border: isActive ? '1px solid #F5D77F' : '1px solid rgba(201, 166, 75, 0.25)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(201, 166, 75, 0.3), rgba(230, 203, 130, 0.15))'
                    : 'rgba(20, 20, 20, 0.6)',
                  color: isActive ? '#F5D77F' : '#B8B0A2',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 16px rgba(201, 166, 75, 0.3)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredItems.map((item, index) => {
            const isWide = item.image.includes('img-18') || item.image.includes('img-9') || item.image.includes('img-17');
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(filteredItems, index)}
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  aspectRatio: isWide ? '16/10' : '4/5',
                  cursor: 'pointer',
                  border: '1px solid rgba(201, 166, 75, 0.25)',
                  background: '#121212',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.7)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(230, 203, 130, 0.7)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.9), 0 0 25px rgba(201, 166, 75, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.25)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.7)';
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
                    transition: 'transform 0.7s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Hover Dark Overlay with Details */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.4) 40%, transparent 70%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '22px',
                    opacity: 0.95,
                    transition: 'opacity 0.3s ease'
                  }}
                >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '6px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: '0.72rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      color: '#F5D77F'
                    }}
                  >
                    ✦ {Array.isArray(item.category) ? item.category.join(' • ') : item.category}
                  </span>
                  <div
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      background: 'rgba(201, 166, 75, 0.2)',
                      border: '1px solid rgba(201, 166, 75, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F5D77F'
                    }}
                  >
                    <ZoomIn size={14} />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.2rem',
                    color: '#F5F0E6',
                    fontWeight: 600,
                    marginBottom: '4px'
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: '#B8B0A2',
                    lineHeight: '1.4'
                  }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
