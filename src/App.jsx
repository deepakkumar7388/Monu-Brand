import React, { useState, lazy, Suspense } from 'react';
import { profileData } from './data/profileData';
import GoldParticles from './components/GoldParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

// Lazy-loaded sections — only downloaded when user scrolls near them
const Brotherhood = lazy(() => import('./components/Brotherhood'));
const Hometown = lazy(() => import('./components/Hometown'));
const Activities = lazy(() => import('./components/Activities'));
const LifestyleGallery = lazy(() => import('./components/LifestyleGallery'));
const Legacy = lazy(() => import('./components/Legacy'));
const Footer = lazy(() => import('./components/Footer'));
const LightboxModal = lazy(() => import('./components/LightboxModal'));

// Minimal gold shimmer while lazy sections are loading
const SectionLoader = () => (
  <div style={{
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#080808',
    color: 'rgba(201, 166, 75, 0.5)',
    fontFamily: "'Cinzel', serif",
    fontSize: '0.75rem',
    letterSpacing: '3px',
    textTransform: 'uppercase'
  }}>
    ✦
  </div>
);

function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  const handleOpenLightbox = (images, index = 0) => {
    setLightboxState({
      isOpen: true,
      images,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNextImage = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const handlePrevImage = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#080808' }}>
      {/* Ambient Floating Gold Dust Particles */}
      <GoldParticles />

      {/* Luxury Navigation Bar */}
      <Navbar profile={profileData} />

      {/* Main Content Sections */}
      <main>
        {/* Full-Screen Cinematic Hero */}
        <Hero profile={profileData} />

        {/* Editorial About — Meri Pehchaan */}
        <About profile={profileData} />

        {/* Brotherhood — Yaaron Ka Yaar */}
        <Suspense fallback={<SectionLoader />}>
          <Brotherhood
            profile={profileData}
            onOpenLightbox={handleOpenLightbox}
          />
        </Suspense>

        {/* Hometown & Heritage — Apni Mitti */}
        <Suspense fallback={<SectionLoader />}>
          <Hometown profile={profileData} />
        </Suspense>

        {/* Community & Leadership — Logon Ke Beech */}
        <Suspense fallback={<SectionLoader />}>
          <Activities
            profile={profileData}
            onOpenLightbox={handleOpenLightbox}
          />
        </Suspense>

        {/* Lifestyle & Moments Gallery */}
        <Suspense fallback={<SectionLoader />}>
          <LifestyleGallery
            profile={profileData}
            onOpenLightbox={handleOpenLightbox}
          />
        </Suspense>

        {/* Final Dramatic Closing — The Legacy & Direct Contact */}
        <Suspense fallback={<SectionLoader />}>
          <Legacy profile={profileData} />
        </Suspense>
      </main>

      {/* Luxury Monogram Footer */}
      <Suspense fallback={<SectionLoader />}>
        <Footer profile={profileData} />
      </Suspense>

      {/* Global Full-screen Lightbox Modal */}
      <Suspense fallback={null}>
        <LightboxModal
          isOpen={lightboxState.isOpen}
          images={lightboxState.images}
          currentIndex={lightboxState.currentIndex}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      </Suspense>
    </div>
  );
}

export default App;
