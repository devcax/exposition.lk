import React, { useState, useEffect, useRef } from "react";
import { teamMembers } from "../data/teamMembers";
import PartnershipMemberCard from "./PartnershipMemberCard";

const PartnershipTeam: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Duplicate members for a seamless loop.
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrameId: number;
    let scrollX = 0;
    const speed = 0.5; // Adjust for speed

    const animate = () => {
      scrollX -= speed;
      // If scrolled past the first set of items, reset
      if (Math.abs(scrollX) >= scroller.scrollWidth / 2) {
        scrollX = 0;
      }
      scroller.style.transform = `translateX(${scrollX}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    if (!isHovered) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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

        {/* Team Cards Marquee */}
        <div
          className="relative w-full overflow-hidden scroller-fade"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollerRef} className="flex w-max">
            {duplicatedMembers.map((member, index) => (
              <div key={index} className="w-[22vw] flex-shrink-0 px-3">
                <PartnershipMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-12 rounded-2xl text-center max-w-4xl mx-auto mt-20">
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
