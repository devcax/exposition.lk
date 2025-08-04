import React, { useEffect, useRef } from "react";
import { Award, Briefcase, Mail } from "lucide-react";

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
    const scrollSpeed = 0.5;
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
    <div key={`speaker-${index}`} className="flex-shrink-0 w-[480px] mx-3 py-4">
      <div className="bg-gray-800/30 border border-gray-700 rounded-2xl p-6 h-[180px] transition-all duration-500 hover:scale-[1.02] hover:border-[#aa7d39]/50 hover:shadow-xl hover:shadow-[#aa7d39]/10 hover:z-20 relative flex items-center space-x-6 overflow-hidden">
        {/* Left Side: Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-28 h-28 object-cover rounded-xl ring-2 ring-gray-600"
            src={speaker.photo}
            alt={speaker.name}
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                speaker.name
              )}&background=aa7d39&color=000000&size=400x192&bold=true`;
            }}
          />
        </div>

        {/* Right Side: Details Section */}
        <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
          {/* Top part: Info and description */}
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white leading-tight truncate">
              {speaker.name}
            </h3>
            <p className="text-[#aa7d39] text-sm font-medium flex items-center gap-2">
              <Briefcase className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{speaker.designation}</span>
            </p>
            <p className="text-gray-300 text-sm leading-snug line-clamp-2 pt-1">
              {speaker.exposition}
            </p>
          </div>

          {/* Bottom part: Category and Issue */}
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black text-xs font-semibold rounded-full">
              {speaker.category}
            </span>
            <span className="text-[#aa7d39] text-xs font-bold tracking-wider flex items-center gap-2">
              ISSUE 21
              <Award className="h-4 w-4 text-[#e3c767]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* This is the line that was removed:
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#aa7d39]/20 to-[#e3c767]/10 rounded-full"></div>
        */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full"></div>
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
          {/* Scrolling wrapper with gradient mask */}
          <div
            className="overflow-hidden py-2"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
            }}
          >
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
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
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
