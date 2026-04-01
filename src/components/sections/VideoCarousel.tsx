"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  quote: string;
}

const VideoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const videos: Video[] = [
    {
      id: "HD-0_-QQHFg",
      title: "Bliss is in Knowing Yourself",
      description:
        "Unlocking it can unlock a powerful new state of being. It can reshape your mental, emotional, and mechanical habits and addictions to the present moment responses and personal...",
      quote:
        '"Guide for discovering human greatness where miracles become an everyday possibility"',
    },
    {
      id: "zIm4OFOSwvA",
      title: "Extraordinary",
      description:
        "The experience with the Self transcends humans from ordinary to extraordinary beings. We are born impeccably astonishing and once we form a relationship with the Self, it demystifies the essence of life, uncovering the wisdom and power of being human.",
      quote:
        '"Guide for discovering human greatness where miracles become an everyday possibility"',
    },
    {
      id: "eF-zfnVHroc",
      title: "Unlock Greatness",
      description:
        "Unlock your inner greatness. What if you could bring more clarity in your life? One tool...",
      quote: '"The Art of Resilience, Unlocking the extraordinary within"',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getYouTubeEmbedUrl = (videoId: string): string =>
    `https://www.youtube.com/embed/${videoId}`;

  const getThumbnailUrl = (videoId: string): string =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const getPrevIndex = () => (currentSlide - 1 + videos.length) % videos.length;
  const getNextIndex = () => (currentSlide + 1) % videos.length;

  // Prevent horizontal scroll gestures from triggering layout shifts
  useEffect(() => {
    const preventHorizontalScroll = (e: WheelEvent) => {
      if (e.deltaX !== 0) e.preventDefault();
    };

    window.addEventListener("wheel", preventHorizontalScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventHorizontalScroll);
    };
  }, []);

  return (
    <div className="w-full bg-white pt-2 py-8 mb-0 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-2">
        <div className="text-[#6433F6] text-[12px] font-semibold uppercase tracking-widest bg-white px-5 py-2 rounded-full inline-block mb-8 shadow-md border border-gray-200">
          BLOGS/VIDEOS
        </div>
      </div>

      <div className="relative max-w-8xl mx-auto px-4 overflow-x-hidden">
        <div className="relative overflow-hidden">
          <div className="flex items-stretch justify-center w-full h-full min-h-[520px]">
            {/* Previous Video */}
            <div className="w-[550px] h-full flex-shrink-0 opacity-60 transform -translate-x-15 flex flex-col justify-center">
              <h2 className="text-xl font-normal text-gray-500 mb-6 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                {videos[getPrevIndex()].title}
              </h2>
              <div className="relative w-full h-72 rounded-xl overflow-hidden bg-gray-100 border-8 border-white shadow-2xl">
                <img
                  src={getThumbnailUrl(videos[getPrevIndex()].id)}
                  alt="Preview Thumbnail"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="mt-6 text-center px-2">
                <p className="text-sm font-semibold text-[#000000] mb-3">
                  {videos[getPrevIndex()].quote}
                </p>
                <p className="text-xs text-[#000000] leading-6">
                  {videos[getPrevIndex()].description}
                </p>
              </div>
            </div>

            {/* Center Video */}
            <div className="w-[600px] flex-shrink-0 relative mx-4 z-20 h-full flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-black mb-6 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                {videos[currentSlide].title}
              </h2>
              <div className="relative w-full h-72 rounded-xl border-2 border-gray-100 shadow-xl">
                <div className="p-2 w-full h-full bg-gray-100 rounded-xl">
                  <iframe
                    key={videos[currentSlide].id} // important: re-render only when ID changes
                    src={getYouTubeEmbedUrl(videos[currentSlide].id)}
                    className="w-full h-full rounded-xl"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Navigation buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-400 shadow-md hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center z-30 transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-400 shadow-md hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center z-30 transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className="mt-6 px-4">
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-sm font-semibold text-[#000000] mb-4 leading-relaxed">
                    {videos[currentSlide].quote}
                  </p>
                  <p className="text-xs text-[#000000] leading-6">
                    {videos[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Next Video */}
            <div className="w-[550px] h-full flex-shrink-0 opacity-60 transform translate-x-15 flex flex-col justify-center">
              <h2 className="text-xl font-normal text-gray-500 mb-6 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                {videos[getNextIndex()].title}
              </h2>
              <div className="relative w-full h-72 rounded-xl overflow-hidden border-2 border-gray-100 shadow-xl">
                <img
                  src={getThumbnailUrl(videos[getNextIndex()].id)}
                  alt="Next Thumbnail"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="mt-6 text-center px-2">
                <p className="text-sm font-semibold text-[#000000] mb-3">
                  {videos[getNextIndex()].quote}
                </p>
                <p className="text-xs text-[#000000] leading-6">
                  {videos[getNextIndex()].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
