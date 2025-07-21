import React, { useEffect, useRef } from "react";
import { Quote, Award, Briefcase, Mail } from "lucide-react";

const speakers = [
  {
    name: "Dulith Herath",
    designation: "Founder & CEO, Kapruka",
    exposition: "Pioneering e-commerce and logistics in Sri Lanka.",
    photo: "/interviewee/dulith.webp",
    category: "E-commerce",
  },
  {
    name: "Santhush Weeraman",
    designation: "Artist & Entrepreneur",
    exposition: "A leading figure in the music and entertainment industry.",
    photo: "/interviewee/santhush.webp",
    category: "Entertainment",
  },
  {
    name: "Dilshan Abeygunawardana",
    designation: "Founder, Saraii Village",
    exposition: "Innovator in sustainable and eco-friendly tourism.",
    photo: "/interviewee/dilshan.webp",
    category: "Tourism",
  },
  {
    name: "Kasun Kalhara",
    designation: "Musician & Composer",
    exposition: "Renowned for his unique blend of musical styles.",
    photo: "/interviewee/kasunkalhara.jpg",
    category: "Music",
  },
  {
    name: "Priyanka Jayawardena",
    designation: "Tech Innovation Leader",
    exposition:
      "Driving digital transformation across Southeast Asia with cutting-edge solutions.",
    photo: "/interviewee/priyanka.jpg",
    category: "Technology",
  },
  {
    name: "Roshan Fernando",
    designation: "Sustainable Agriculture Expert",
    exposition:
      "Revolutionizing farming practices through organic and sustainable methodologies.",
    photo: "/interviewee/roshan.jpg",
    category: "Agriculture",
  },
  {
    name: "Nadeeka Silva",
    designation: "Social Impact Entrepreneur",
    exposition:
      "Creating meaningful change through innovative social enterprises and community programs.",
    photo: "/interviewee/nadeeka.jpg",
    category: "Social Impact",
  },
];

const AutoScrollingSpeakers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPausedRef = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Reduced speed from 1 to 0.5
    const containerWidth = scrollContainer.scrollWidth / 2;

    const animate = () => {
      if (!isPausedRef.current && scrollContainer) {
        scrollPosition += scrollSpeed;

        if (scrollPosition >= containerWidth) {
          scrollPosition = 0;
        }

        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const SpeakerCard = ({
    speaker,
    index,
  }: {
    speaker: (typeof speakers)[0];
    index: number;
  }) => (
    <div key={`speaker-${index}`} className="flex-shrink-0 w-80 mx-3 py-4">
      <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 h-full transition-all duration-500 hover:scale-[1.02] hover:border-[#aa7d39]/50 hover:shadow-xl hover:shadow-[#aa7d39]/10 hover:z-20 relative">
        {/* Category Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black text-xs font-semibold rounded-full">
            {speaker.category}
          </span>
          <Quote className="h-5 w-5 text-[#e3c767] opacity-50" />
        </div>

        {/* Speaker Info */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              className="h-16 w-16 object-cover rounded-full ring-2 ring-gray-600 transition-all duration-300"
              src={speaker.photo}
              alt={speaker.name}
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  speaker.name
                )}&background=aa7d39&color=000000&size=64&bold=true`;
              }}
            />
            <div className="absolute -bottom-1 -right-1 w-8 h-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full flex items-center justify-center">
              <span className="text-black text-xs font-bold">21</span>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white mb-1 truncate">
              {speaker.name}
            </h3>
            <p className="text-[#aa7d39] text-sm font-medium flex items-center gap-1">
              <Briefcase className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{speaker.designation}</span>
            </p>
          </div>
        </div>

        {/* Quote */}
        <blockquote className="relative">
          <p className="text-gray-300 text-sm leading-relaxed pl-4 border-l-2 border-[#aa7d39]/50 italic">
            "{speaker.exposition}"
          </p>
        </blockquote>

        {/* Bottom decoration - Replaced stars with "ISSUE 21" */}
        <div className="mt-4 pt-3 border-t border-gray-700/50 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[#aa7d39] text-xs font-bold tracking-wider">
              ISSUE 21
            </span>
          </div>
          <Award className="h-4 w-4 text-[#e3c767] opacity-50" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#aa7d39]/20 to-[#e3c767]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Interview{" "}
            <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights from industry pioneers and thought leaders who are shaping
            the future of their respective fields
          </p>
        </div>

        {/* Auto-scrolling Container */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-30 pointer-events-none"></div>

          {/* Scrolling wrapper with better overflow handling */}
          <div className="overflow-hidden py-2">
            <div
              ref={scrollRef}
              className="flex"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ width: "max-content" }}
            >
              {/* First set of speakers */}
              {speakers.map((speaker, index) => (
                <SpeakerCard
                  key={`first-${index}`}
                  speaker={speaker}
                  index={index}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {speakers.map((speaker, index) => (
                <SpeakerCard
                  key={`second-${index}`}
                  speaker={speaker}
                  index={index + speakers.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to be Featured?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our interview series and share your insights with our
              community of innovators and thought leaders.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
              <Mail className="h-5 w-5" />
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollingSpeakers;
