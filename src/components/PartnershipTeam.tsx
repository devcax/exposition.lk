import React, { useState, useEffect } from "react";
import { teamMembers } from "../data/teamMembers";
import PartnershipMemberCard from "./PartnershipMemberCard";

const PartnershipTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const membersPerView = 4;
  const totalSlides = Math.ceil(teamMembers.length / membersPerView);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  const getCurrentMembers = () => {
    const startIndex = currentIndex * membersPerView;
    return teamMembers.slice(startIndex, startIndex + membersPerView);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Partnership Team
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet our dedicated partnership team who will work closely with you
            to ensure your partnership goals are achieved
          </p>
        </div>

        {/* Team Cards */}
        <div 
          className="mb-24 relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="relative h-[500px]">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${totalSlides * 100}%`,
              }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
                    {teamMembers
                      .slice(slideIndex * membersPerView, (slideIndex + 1) * membersPerView)
                      .map((member, idx) => (
                        <PartnershipMemberCard
                          key={`${slideIndex}-${idx}`}
                          member={member}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#e3c767]"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Status Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isAutoPlaying ? 'bg-[#e3c767] animate-pulse' : 'bg-gray-600'
                }`}
              />
              <span>{isAutoPlaying ? 'Auto-scrolling' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-12 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Want to Partner With Us?
            </span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a customized partnership that
            delivers exceptional value for your organization and our university
            community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all">
              Contact Partnership Team
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-[#e3c767]/50 text-[#e3c767] rounded-lg font-semibold hover:bg-[#e3c767]/10 hover:border-[#e3c767] transition-all">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTeam;