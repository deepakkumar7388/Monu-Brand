import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ isOpen, images = [], currentIndex = 0, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || {};

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(5, 5, 5, 0.96)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
          zIndex: 10
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: '#E6CB82',
              letterSpacing: '3px',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            MONU ARCHIVE
          </span>
          <span
            style={{
              color: '#8C8270',
              fontSize: '0.8rem',
              borderLeft: '1px solid rgba(201, 166, 75, 0.3)',
              paddingLeft: '15px'
            }}
          >
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(25, 25, 25, 0.8)',
            border: '1px solid rgba(201, 166, 75, 0.4)',
            color: '#F5F0E6',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#E6CB82';
            e.currentTarget.style.transform = 'rotate(90deg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.4)';
            e.currentTarget.style.transform = 'rotate(0deg)';
          }}
          title="Close (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        style={{
          maxWidth: '92vw',
          maxHeight: '80vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid rgba(201, 166, 75, 0.35)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 35px rgba(201, 166, 75, 0.15)'
          }}
        >
          <img
            src={currentItem.image}
            alt={currentItem.title || 'Monu Portfolio'}
            style={{
              maxHeight: '75vh',
              maxWidth: '88vw',
              objectFit: 'contain',
              display: 'block',
              transition: 'opacity 0.3s ease'
            }}
          />
        </div>

        {/* Caption & Metadata */}
        {(currentItem.title || currentItem.caption) && (
          <div
            style={{
              marginTop: '16px',
              textAlign: 'center',
              maxWidth: '650px',
              padding: '0 20px'
            }}
          >
            {currentItem.title && (
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F5F0E6',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '6px'
                }}
              >
                {currentItem.title}
              </h3>
            )}
            {currentItem.caption && (
              <p
                style={{
                  color: '#B8B0A2',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}
              >
                {currentItem.caption}
              </p>
            )}
            {currentItem.occasion && (
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  color: '#C9A64B',
                  fontSize: '0.78rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}
              >
                ✦ {currentItem.occasion}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(20, 20, 20, 0.85)',
              border: '1px solid rgba(201, 166, 75, 0.4)',
              color: '#F5F0E6',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#F5D77F';
              e.currentTarget.style.background = 'rgba(40, 35, 25, 0.95)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.4)';
              e.currentTarget.style.background = 'rgba(20, 20, 20, 0.85)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            title="Previous (Left Arrow)"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(20, 20, 20, 0.85)',
              border: '1px solid rgba(201, 166, 75, 0.4)',
              color: '#F5F0E6',
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#F5D77F';
              e.currentTarget.style.background = 'rgba(40, 35, 25, 0.95)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.4)';
              e.currentTarget.style.background = 'rgba(20, 20, 20, 0.85)';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            title="Next (Right Arrow)"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}
    </div>
  );
}
