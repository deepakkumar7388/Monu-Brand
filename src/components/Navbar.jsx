import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Sparkles, MessageCircle } from 'lucide-react';

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Brotherhood', href: '#brotherhood', id: 'brotherhood' },
    { name: 'Hometown', href: '#hometown', id: 'hometown' },
    { name: 'Activities', href: '#activities', id: 'activities' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Legacy', href: '#legacy', id: 'legacy' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Scroll progress
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = winHeight > 0 ? (scrollY / winHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section highlight
      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPosition = scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 166, 75, 0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.7)' : 'none'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: scrolled ? '74px' : '90px',
            transition: 'height 0.4s ease',
            width: '100%',
            paddingLeft: 'clamp(16px, 3.5vw, 32px)',
            paddingRight: 'clamp(16px, 3.5vw, 32px)',
            maxWidth: '1400px',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxSizing: 'border-box'
          }}
        >
          {/* Brand Logo - Matches Reference Image ("Hale KIVRAK" style) */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            {/* Small Crown Monogram Icon */}
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '1px solid rgba(201, 166, 75, 0.45)',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #181510 0%, #0D0C0A 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 16px rgba(201, 166, 75, 0.25)',
                flexShrink: 0
              }}
            >
              <Crown size={13} color="#E6CB82" style={{ marginBottom: '-1px' }} />
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  letterSpacing: '1px',
                  color: '#F5D77F'
                }}
              >
                MB
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(1.15rem, 4vw, 1.45rem)',
                  fontWeight: 800,
                  letterSpacing: '2.5px',
                  background: 'linear-gradient(135deg, #FFF8DF 0%, #F5D77F 40%, #C9A64B 80%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 2px 10px rgba(201, 166, 75, 0.4))'
                }}
              >
                MONU
              </span>
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(1.15rem, 4vw, 1.45rem)',
                  fontWeight: 800,
                  letterSpacing: '2.5px',
                  color: '#FFFFFF'
                }}
              >
                BRAND
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px'
            }}
            className="md-flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.84rem',
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: isActive ? '#F5D77F' : '#B8B0A2',
                    position: 'relative',
                    padding: '8px 0',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#F5D77F';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '#B8B0A2';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent, #F5D77F, transparent)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(245, 215, 127, 0.7)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: WhatsApp Connect */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <a
              href="https://wa.me/9151552421"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm-flex"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '4px',
                background: 'linear-gradient(135deg, rgba(201, 166, 75, 0.2), rgba(201, 166, 75, 0.05))',
                border: '1px solid rgba(201, 166, 75, 0.4)',
                color: '#E6CB82',
                fontFamily: "'Cinzel', serif",
                fontSize: '0.75rem',
                letterSpacing: '1.8px',
                fontWeight: 600,
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#F5D77F';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(201, 166, 75, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 166, 75, 0.4)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <MessageCircle size={14} />
              <span>Connect</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md-hidden"
              style={{
                background: 'rgba(20, 20, 20, 0.8)',
                border: '1px solid rgba(201, 166, 75, 0.35)',
                color: '#F5F0E6',
                borderRadius: '6px',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} color="#F5D77F" /> : <Menu size={22} color="#F5D77F" />}
            </button>
          </div>
        </div>

        {/* Golden Scroll Progress Bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: `${scrollProgress}%`,
            height: '2px',
            background: 'linear-gradient(90deg, #9E7922, #C9A64B, #FFF0C9)',
            boxShadow: '0 0 10px rgba(245, 215, 127, 0.8)',
            transition: 'width 0.1s linear'
          }}
        />

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              right: 0,
              bottom: 0,
              height: 'calc(100vh - 74px)',
              backgroundColor: 'rgba(8, 8, 8, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: '30px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              zIndex: 99
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '0.75rem',
                  letterSpacing: '3px',
                  color: '#C9A64B',
                  marginBottom: '10px',
                  textTransform: 'uppercase'
                }}
              >
                ✦ Navigation
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.4rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#F5D77F' : '#E8E2D5',
                      textDecoration: 'none',
                      padding: '8px 0',
                      borderBottom: '1px solid rgba(201, 166, 75, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles size={16} color="#F5D77F" />}
                  </a>
                );
              })}
            </div>

            <div
              style={{
                paddingTop: '20px',
                borderTop: '1px solid rgba(201, 166, 75, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <a
                href="https://wa.me/9151552421"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Direct WhatsApp Connect
              </a>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: '0.8rem',
                  color: '#8C8270',
                  marginTop: '6px'
                }}
              >
                Apni Mitti. Apne Log. Apna Andaaz.
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Responsive layout helper style */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-hidden { display: none !important; }
        }
        @media (max-width: 767px) {
          .md-flex { display: none !important; }
          .md-hidden { display: flex !important; }
          .hidden { display: none !important; }
        }
        @media (min-width: 640px) {
          .sm-flex { display: inline-flex !important; }
        }
        @media (max-width: 639px) {
          .sm-flex { display: none !important; }
        }
      `}</style>
    </>
  );
}
