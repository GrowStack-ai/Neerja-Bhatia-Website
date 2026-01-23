
import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6 bg-white top-2 translate-x-11">
      <div className="flex flex-col lg:flex-row items-end gap-14 min-h-[600px]">
        {/* Left Content Section */}
        <div className="flex-1 max-w-lg flex flex-col justify-between h-full">
          <div>
            {/* About Badge */}
            <div className="inline-block">
              <span className="text-[#6433F6] text-[12px] font-semibold bg-[#FFFFFF] px-5 py-1 rounded-full text-xs  tracking-wider uppercase inline-block shadow-md border border-gray-100">
                ABOUT
              </span>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl font-bold text-black mt-6 mb-4 leading-tight">
              Neerja Bhatia
            </h1>

            <div className="mb-16 tracking-tight">
              <p className=" text-[20px] font-normal bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] text-transparent bg-clip-text font-dm-sans">
                Conscious Leadership Coach | Facilitator | Author |
              </p>
              <p className=" text-[20px] font-normal bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] text-transparent bg-clip-text font-dm-sans">
                Creator of the Living Intelligence Framework
              </p>
            </div>
          </div>

          {/* Bio Paragraphs - Positioned at bottom */}
          <div className="space-y-4 text-[#000000] text-sm leading-[1.2] font-dm-sans mt-10 tracking-tight font-normal">
            <p>
              Neerja Bhatia is a compassionate guide and visionary thinker with over 20 years of inspiring
              profound, transformative growth. Her frameworks and methodologies are heartfelt practical tools
              rooted in Consciousness Studies, Eastern Wisdom, and Authentic Leadership that awakens the
              true self hidden beneath layers of noise and expectation.
            </p>

            <p>
              In a world filled with noise and relentless pressure, Neerja reminds us that clarity isn&apos;t something to
              be hunted or found outside—it&apos;s something we carry within, waiting to be remembered. Her work
              invites leaders and change-makers to listen inward, trust their innate wisdom, and return to the
              stillness where authentic guidance resides.
            </p>

            <p>
              Through coaching, facilitation, and her writing, Neerja encourages a gentle shift: from striving and
              controlling to trusting and remembering—the inner journey that leads to true clarity, courageous
              leadership, and heartfelt authenticity.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 relative min-h-[500px]">

          <div className="absolute bottom-0 right-0 w-full max-w-lg h-full flex items-end justify-center mb-14">
            <Image
              src="/images/neerja-portrait.jpg"
              alt="Portrait of Neerja Bhatia wearing black top and glasses with necklace, smiling"
              width={600}
              height={600}
              className="w-full h-[600px] object-contain object-center scale-125"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;

