'use client';

import Image from 'next/image';
import Header from '../layouts/Header';
import HeroSection from './HeroSection';

const HeaderHeroWrapper = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-purple-50 to-purple-100">
          <Image
            src="/images/hero-background.jpg"
            alt="Abstract purple geometric background"
            fill
            className="object-cover opacity-80"
          />
        </div>

        {/* Fade to white at bottom */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default HeaderHeroWrapper;
