"use client";

import React from 'react';
import { ArrowUpRight } from "lucide-react";

const PublicationSection = () => {
  const handleClaimBook = () => {
    // Add your book claiming logic here
    console.log('Claim book clicked');
  };

  return (
    <div className="bg-white font-dm-sans mb-0">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-14 lg:py-16 flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24">
        <div className="flex-shrink-0 w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src="/images/Books.jpg"
            alt="Three books titled 'Art of Resilience' with blue and white covers placed on a white shelf with a white spherical decorative object"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        
        <div className="w-full md:w-1/2 max-w-xl">
          <h2 className="text-[#6433F6] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-3">
            Publication
          </h2>
          <p className="text-[#424242] text-sm sm:text-base md:text-base mb-4 sm:mb-6 leading-relaxed font-normal tracking-tight">
            Art of Resilience, is a testament to my unwavering belief in the extraordinary ability to break through limitations and lead consciously.
          </p>
          <button
            onClick={handleClaimBook}
            aria-label="Claim Your Book"
            className="inline-flex items-center justify-center bg-[#6433F6] text-white text-sm sm:text-base md:text-base font-semibold px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-sm hover:shadow-md transition-all gap-1"
            type="button"
          >
            Claim Your Book
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 gap-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PublicationSection;