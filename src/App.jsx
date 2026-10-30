import React, { useState } from 'react';
import { profileData } from './data/profileData';
import GoldParticles from './components/GoldParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Brotherhood from './components/Brotherhood';
import Hometown from './components/Hometown';
import Activities from './components/Activities';
import LifestyleGallery from './components/LifestyleGallery';
import Legacy from './components/Legacy';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

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
        <Brotherhood
          profile={profileData}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Hometown & Heritage — Apni Mitti */}
        <Hometown profile={profileData} />

        {/* Community & Leadership — Logon Ke Beech */}
        <Activities
          profile={profileData}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Lifestyle & Moments Gallery */}
        <LifestyleGallery
          profile={profileData}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Final Dramatic Closing — The Legacy & Direct Contact */}
        <Legacy profile={profileData} />
      </main>

      {/* Luxury Monogram Footer */}
      <Footer profile={profileData} />

      {/* Global Full-screen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}

export default App;
