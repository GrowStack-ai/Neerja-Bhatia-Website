"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";

const TEDxEventSection = () => {
  const handleReserveSeat = () => {
    // Add your reservation logic here
    console.log('Reserve seat clicked');
  };

  return (
    <div className="bg-white text-black font-dm-sans mt-0 pt-0 ml-10">
     <main className="max-w-7xl mx-auto px-6 pt-6 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 pt-0">
          <section className="lg:w-1/2 max-w-xl">
            <span className="inline-block text-[12px] font-semibold text-[#6433F6] bg-white rounded-full px-5 py-1 mb-4 shadow-[0_0_5px_rgba(92,77,255,0.3)] tracking-wider">
              EVENT
            </span>
            <h1 className=" text-5xl font-extrabold leading-tight mb-2 ">
              TEDxApex 2025
            </h1>
            <h2 className="text-[30px] bg-gradient-to-b from-[#2A0A89] via-[#2A0A89] to-[#CDBCFF] bg-clip-text text-transparent font-medium mb-6">
              Journey to Remembering
            </h2>
            <p className="text-[18px] leading-tight mb-4 ">
              This November, I&apos;ll take the{' '}
              <a className="text-[#6433F6] hover:underline font-semibold" href="# font-dm-sans text-[30px]">
                TEDxApex
              </a>{' '}
              stage to share something close to my heart —{' '}
              <em>Journey to Remembering</em>.
              <br />
              It&apos;s not about becoming someone new, but{' '}
              <a className="text-[#6433F6] hover:underline font-semibold" href="#">
                returning to who we were
              </a>{' '}
              before the world told us who to be.
              <br />
              This talk is an invitation to listen inward, shed the noise, and reconnect with your truest self —{' '}
              <a className="text-[#6433F6] hover:underline font-semibold" href="#">
                the field of living intelligence within.
              </a>
            </p>
            <ul className="mb-8 space-y-4 text-[18px]">
              <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#E6E0FF]">
                <Image src="/images/calender.png" width={20} height={20} className="w-5 h-5 object-contain" alt="calendar icon" />
              </span>
              <span className="text-[16px] text-gray-800">November 6, 2025</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#E6E0FF]">
                <Image src="/images/location.png" width={20} height={20} className="w-5 h-5 object-contain" alt="location icon" />
              </span>
              <span className="text-[16px] text-gray-800">Apex, North Carolina</span>
            </li>
          </ul>
            <div className="flex flex-wrap items-center gap-x-2 font-DM_Sans">
              <p className="bg-gradient-to-b from-[#401AB3] via-[#401AB3] to-[#CDBCFF] bg-clip-text text-transparent font-semibold mb-0 text-[25px]">
                Tickets are now live
              </p>
              <p className="mb-0 text-[20px]">
                — I&apos;d be honored to have you there.
              </p>
            </div>
            <button 
              onClick={handleReserveSeat}
              className="inline-flex items-center gap-2 bg-[#6433F6] text-[#FFFFFF] text-base font-semibold rounded-full px-6 py-4 hover:bg-[#4b3f9b] transition mt-6" 
              type="button"
            >
              Reserve Your Seat
              <ArrowUpRight className="w-6 h-6 gap-1" />
            </button>
          </section>
          <section className="lg:w-1/2 mt-10 lg:mt-0">
            <Image 
              alt="Large red TEDx letters on a stage with a dark black background and purple light reflection on the floor" 
              className="rounded-xl w-full object-cover" 
              height={350}
              loading="lazy" 
              src="/images/tedximage.png" 
              width={550}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default TEDxEventSection;