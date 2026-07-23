import React, { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { AudioSynthesizer } from './components/AudioSynthesizer';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GallerySection } from './components/GallerySection';
import { DownloadSection } from './components/DownloadSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { ChangelogModal } from './components/ChangelogModal';

export default function App() {
  const [changelogOpen, setChangelogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080709] text-gray-100 relative selection:bg-red-900 selection:text-white font-sans overflow-x-hidden">
      {/* Interactive Background Particle & Fog Effects */}
      <BackgroundEffects />

      {/* Web Audio API Horror Soundscape Generator */}
      <AudioSynthesizer />

      {/* Top Header Navigation */}
      <Navbar onOpenChangelog={() => setChangelogOpen(true)} />

      {/* Main One-Page Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <GallerySection />
        <DownloadSection />
        <FAQSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Patch Notes Modal */}
      <ChangelogModal
        isOpen={changelogOpen}
        onClose={() => setChangelogOpen(false)}
      />
    </div>
  );
}
