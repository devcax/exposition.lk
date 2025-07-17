import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const speakers = [
  {
    name: "Andy Lark",
    title: "Global Brand & Marketing Expert",
    photo: "/assets/speakers/1.jpeg",
    highlight: "Amazon bestselling author & futurist",
    expertise: ["Brand Strategy", "Digital Marketing", "Customer Experience"],
    quote:
      "The future of marketing lies in creating authentic human connections through technology.",
  },
  {
    name: "Dr. Maya Patel",
    title: "AI Researcher",
    photo: "/assets/speakers/2.jpg",
    highlight: "Leading expert in ethical AI",
    expertise: ["Artificial Intelligence", "Healthcare AI", "Sustainable Tech"],
    quote: "AI should augment human capabilities, not replace human values.",
  },
  {
    name: "Prof. John Smith",
    title: "Dean of Engineering",
    photo: "/assets/speakers/3.jpg",
    highlight: "Pioneer in sustainable engineering",
    expertise: ["Green Technology", "Innovation", "Engineering Leadership"],
    quote:
      "Sustainable engineering is not just about the environment, it's about our future.",
  },
  {
    name: "Ms. Aisha Rahman",
    title: "Tech Entrepreneur",
    photo: "/assets/speakers/4.jpg",
    highlight: "Champion for diversity in tech",
    expertise: ["Startups", "Women in Tech", "Innovation Strategy"],
    quote: "Diversity in tech isn't just right, it's essential for innovation.",
  },
];

const InterviewHighlight = () => {
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
    }, 5000);

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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Keynote Speakers
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Industry leaders sharing their vision for the future
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative max-w-6xl mx-auto">
          {/* Speaker Showcase */}
          <div
            className={`transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Speaker Info */}
              <div className="order-2 lg:order-1">
                <div className="mb-8">
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3">
                    {speaker.name}
                  </h3>
                  <p className="text-amber-400 text-xl mb-2">{speaker.title}</p>
                  <p className="text-gray-400 text-lg">{speaker.highlight}</p>
                </div>

                {/* Quote */}
                <div className="mb-8 relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-amber-500/20" />
                  <p className="text-gray-300 text-lg italic pl-8 pr-4">
                    "{speaker.quote}"
                  </p>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-3">
                  {speaker.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300 text-sm hover:border-amber-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Large Circular Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                    <img
                      src={speaker.photo}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-amber-500/20 scale-110"></div>
                  <div className="absolute inset-0 rounded-full border border-amber-500/10 scale-125"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Circular Previews */}
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
              <button
                onClick={() => navigate("prev")}
                className="pointer-events-auto p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-all hover:scale-110 shadow-lg"
                aria-label="Previous Speaker"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigate("next")}
                className="pointer-events-auto p-3 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-all hover:scale-110 shadow-lg"
                aria-label="Next Speaker"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Circular Speaker Previews */}
            <div className="flex items-center justify-center gap-4 md:gap-8 py-8">
              {speakers.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => !isTransitioning && setCurrent(idx)}
                  className={`group relative transition-all duration-300 ${
                    idx === current
                      ? "scale-110"
                      : "scale-100 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`relative ${
                      idx === current
                        ? "w-24 h-24 md:w-28 md:h-28"
                        : "w-20 h-20 md:w-24 md:h-24"
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full overflow-hidden border-3 transition-all duration-300 ${
                        idx === current
                          ? "border-amber-400 shadow-lg shadow-amber-400/30"
                          : "border-gray-700 group-hover:border-gray-600"
                      }`}
                    >
                      <img
                        src={s.photo}
                        alt={s.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {idx === current && (
                      <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 scale-110 animate-pulse"></div>
                    )}
                  </div>

                  {/* Name tooltip on hover */}
                  <div
                    className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transition-opacity ${
                      idx === current
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <p className="text-xs text-gray-400">
                      {s.name.split(" ")[0]}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {speakers.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === current ? "w-8 bg-amber-400" : "w-1.5 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewHighlight;
