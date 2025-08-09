import React, { useState, useEffect, useRef } from "react";
import { teamMembers } from "../data/teamMembers";
import PartnershipMemberCard from "./PartnershipMemberCard";

const PartnershipTeam: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef(0);

  // Duplicate members for a seamless loop.
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  // Auto-scroll effect
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    const speed = 0.5; // Adjust for speed

    const animate = () => {
      if (!isDragging) {
        autoScrollRef.current -= speed;
        // If scrolled past the first set of items, reset
        if (Math.abs(autoScrollRef.current) >= scroller.scrollWidth / 2) {
          autoScrollRef.current = 0;
        }
        scroller.style.transform = `translateX(${autoScrollRef.current}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (!isHovered && !isDragging) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isDragging]);

  // Manual scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(autoScrollRef.current);
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollerRef.current) return;

    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 2; // Multiply for faster scroll
    const newScrollLeft = scrollLeft + walk;

    // Update both the visual position and the auto-scroll reference
    autoScrollRef.current = newScrollLeft;
    scrollerRef.current.style.transform = `translateX(${newScrollLeft}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    if (scrollerRef.current) {
      scrollerRef.current.style.cursor = "grab";
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(autoScrollRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollerRef.current) return;

    const x = e.touches[0].pageX;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft + walk;

    autoScrollRef.current = newScrollLeft;
    scrollerRef.current.style.transform = `translateX(${newScrollLeft}px)`;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Meet our dedicated team who will work make this event success
          </p>
        </div>

        {/* Team Cards Marquee */}
        <div
          className="relative w-full overflow-hidden scroller-fade"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={scrollerRef}
            className="flex w-max cursor-grab select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={index}
                className="w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw] flex-shrink-0 px-2 sm:px-3"
              >
                <PartnershipMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Manual Scroll Hint */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-500 text-xs sm:text-sm px-4">
            🖱️ Drag to scroll manually or hover to pause auto-scroll
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-6 sm:p-8 lg:p-12 rounded-2xl text-center max-w-4xl mx-auto mt-12 sm:mt-16 lg:mt-20 mx-4 sm:mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Want to Partner With Us?
            </span>
          </h3>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how we can create a customized partnership that
            delivers exceptional value for your organization and our university
            community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all text-sm sm:text-base">
              Contact Partnership Team
            </button>
            <button
              onClick={() => {
                // Direct download from Google Drive
                const downloadUrl =
                  "https://drive.google.com/uc?export=download&id=1otx54CB4Ep2hrchycUHuzlBs9w35ciyU";
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.download = "Exposition_Partnership_Proposal.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border border-[#e3c767]/50 text-[#e3c767] rounded-lg font-semibold hover:bg-[#e3c767]/10 hover:border-[#e3c767] transition-all text-sm sm:text-base"
            >
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTeam;
