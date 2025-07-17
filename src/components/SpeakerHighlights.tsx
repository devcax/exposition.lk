import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const speakers = [
  {
    name: "Andy Lark",
    title: "Global Brand & Marketing Expert",
    photo: "/assets/speakers/1.jpeg",
    highlight: "Amazon bestselling author & futurist",
    expertise: ["Brand Strategy", "Digital Marketing", "Customer Experience"],
  },
  {
    name: "Dr. Maya Patel",
    title: "AI Researcher",
    photo: "/assets/speakers/2.jpg",
    highlight: "Leading expert in ethical AI",
    expertise: ["Artificial Intelligence", "Healthcare AI", "Sustainable Tech"],
  },
  {
    name: "Prof. John Smith",
    title: "Dean of Engineering",
    photo: "/assets/speakers/3.jpg",
    highlight: "Pioneer in sustainable engineering",
    expertise: ["Green Technology", "Innovation", "Engineering Leadership"],
  },
  {
    name: "Ms. Aisha Rahman",
    title: "Tech Entrepreneur",
    photo: "/assets/speakers/4.jpg",
    highlight: "Champion for diversity in tech",
    expertise: ["Startups", "Women in Tech", "Innovation Strategy"],
  },
];

const SpeakerHighlights = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === "next") {
        setCurrent((prev) => (prev + 1) % speakers.length);
      } else {
        setCurrent((prev) => (prev - 1 + speakers.length) % speakers.length);
      }
      setIsTransitioning(false);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        navigate("next");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const speaker = speakers[current];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Keynote Highlights
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet our keynote speakers
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Speaker Card */}
          <div
            className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 transition-opacity duration-200 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5 h-[300px] lg:h-[400px] relative overflow-hidden">
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-amber-400 text-lg mb-4">{speaker.title}</p>
                  <p className="text-gray-300 text-lg mb-6">
                    {speaker.highlight}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {speaker.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate("prev")}
                      className="p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                      aria-label="Previous Speaker"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => navigate("next")}
                      className="p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                      aria-label="Next Speaker"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex gap-2">
                    {speakers.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => !isTransitioning && setCurrent(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === current
                            ? "w-8 bg-amber-400"
                            : "w-2 bg-gray-600 hover:bg-gray-500"
                        }`}
                        aria-label={`Go to speaker ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

    {/* Speaker Preview Strip */}
    <div className="mt-16">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 text-sm uppercase tracking-wider">All Speakers</h3>
        <div className="h-px bg-gray-800 flex-1 ml-4"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {speakers.map((s, idx) => (
          <button
            key={idx}
            onClick={() => !isTransitioning && setCurrent(idx)}
            className="group text-left"
          >
            <div className={`relative mb-3 overflow-hidden rounded-lg ${
              idx === current ? "ring-2 ring-amber-400" : ""
            }`}>
              <div className="aspect-[3/4] overflow-hidden bg-gray-800">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h4 className={`font-semibold text-sm mb-1 transition-colors ${
              idx === current ? "text-amber-400" : "text-white group-hover:text-amber-400"
            }`}>
              {s.name}
            </h4>
            <p className="text-gray-500 text-xs">{s.title}</p>
          </button>
        ))}
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerHighlights;
