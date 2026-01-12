"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  quote: string;
}

const VideoCarouselOne: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState<boolean>(false);

  // YouTube channel URL - Update this with your channel URL
  const youtubeChannelUrl = "https://www.youtube.com/watch?v=IuXt9oV0A0Q";

  const videos: Video[] = [
    {
      id: "rQ9CaNNBPsc",
      title: "TEDx",
      description:
        "An invitation to transcend the limits of identity and awaken to the deeper field of Living Intelligence.  Neerja Bhatia is a compassionate guide and visionary thinker with over 25 years of experience inspiring transformative growth in leaders from startups to Fortune 500 companies. She has worked with leaders and teams at organizations such as Red Hat, McKinsey, Meta, and Phillips. Neerja is the creator of the Field of Living Intelligence framework, a heartfelt methodology rooted in consciousness studies, Eastern wisdom, and authentic leadership that awakens the true self hidden beneath layers of noise and expectation.",
      quote:
        '"The Great Remembering: Unlabeling Through Living Intelligence | Neerja Bhatia | TEDxApex"',
    }
  ];

  const getYouTubeEmbedUrl = (videoId: string): string =>
    `https://www.youtube.com/embed/${videoId}`;

  // Reset description expansion when slide changes
  useEffect(() => {
    setIsDescriptionExpanded(false);
  }, [currentSlide]);

  return (
    <div className="w-full bg-white pt-2 py-8 mb-0 flex justify-center items-center">
            {/* Center Video */}
            <div className="w-[900px] flex-shrink-0 relative mx-4 z-20 h-full flex flex-col justify-center">
              <h2 className="text-xl font-semibold text-black mb-6 text-center whitespace-nowrap overflow-hidden text-ellipsis font-size-4xl">
                <span className="text-6xl font-bold">
                  {videos[currentSlide].title}
                </span>
              </h2>
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-[500px] rounded-xl border-2 border-gray-100 shadow-xl block cursor-pointer group"
              >
                <div className="p-2 w-full h-full bg-gray-100 rounded-xl">
                  <iframe
                    src={getYouTubeEmbedUrl(videos[currentSlide].id)}
                    className="w-full h-full rounded-xl pointer-events-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Clickable overlay */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors duration-200 rounded-xl z-10"></div>
              </a>
              <div className="mt-6 px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-md font-semibold text-[#000000] mb-4 leading-relaxed">
                    {videos[currentSlide].quote}
                  </p>
                  <div className="relative">
                    <p
                      className={`text-base text-[#000000] leading-7 ${
                        !isDescriptionExpanded ? "line-clamp-2" : ""
                      }`}
                    >
                      {videos[currentSlide].description}
                    </p>
                    {!isDescriptionExpanded && (
                      <button
                        onClick={() => setIsDescriptionExpanded(true)}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-1 inline-block"
                      >
                        View more
                      </button>
                    )}
                    {isDescriptionExpanded && (
                      <div className="mt-2">
                        <button
                          onClick={() => setIsDescriptionExpanded(false)}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View less
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

  );
};

export default VideoCarouselOne;
