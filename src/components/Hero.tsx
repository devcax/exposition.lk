import React, { useState } from "react";
import {
  ArrowRight,
  Play,
  Download,
  BookOpen,
  Users,
  Award,
} from "lucide-react";
import LegacyPage from "./LegacyPage";

const Hero: React.FC = () => {
  const [showLegacy, setShowLegacy] = useState(false);

  const handleLegacyClick = () => {
    setShowLegacy(true);
  };

  const handleBackToHome = () => {
    setShowLegacy(false);
  };

  if (showLegacy) {
    return <LegacyPage onBack={handleBackToHome} />;
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e3c767]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#aa7d39]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e3c767]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center mb-16">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                EXPOSITION
              </span>
              <span className="block bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                MAGAZINE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              Bridging academic excellence with real-world impact through
              <span className="text-[#e3c767] font-semibold">
                {" "}
                innovative discourse
              </span>
              ,
              <span className="text-[#e3c767] font-semibold">
                {" "}
                global collaboration
              </span>
              , and
              <span className="text-[#e3c767] font-semibold">
                {" "}
                future leadership
              </span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={handleLegacyClick}
                className="group bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-[#e3c767]/25 transition-all duration-300 flex items-center gap-3 text-lg"
              >
                <BookOpen className="w-5 h-5" />
                <span>Our Legacy</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button className="group border-2 border-[#e3c767] text-[#e3c767] font-semibold px-8 py-4 rounded-full hover:bg-[#e3c767] hover:text-black transition-all duration-300 flex items-center gap-3 text-lg">
                <Download className="w-5 h-5" />
                <span>Latest Issue</span>
              </button>

              <button className="group text-gray-400 hover:text-white font-medium px-6 py-4 rounded-full transition-all duration-300 flex items-center gap-3">
                <Play className="w-5 h-5" />
                <span>Watch Trailer</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">21+</div>
                <div className="text-gray-400">Issues Published</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Contributing Writers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Global Readers</div>
              </div>
            </div>
          </div>

          {/* Featured Content Preview */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Current Issue Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-[#e3c767]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-[#e3c767]" />
                  <span className="text-sm font-medium text-[#e3c767]">
                    CURRENT ISSUE
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Issue 21 - Innovation & Leadership
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Exploring the future of technology and sustainable development
                </p>
                <button className="text-[#e3c767] font-medium text-sm hover:underline">
                  Read More →
                </button>
              </div>

              {/* Upcoming Events Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-[#e3c767]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#e3c767]" />
                  <span className="text-sm font-medium text-[#e3c767]">
                    UPCOMING
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Industrial Week 2025
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Join industry leaders and academics for a week of innovation
                </p>
                <button className="text-[#e3c767] font-medium text-sm hover:underline">
                  Learn More →
                </button>
              </div>

              {/* Partnership Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 hover:border-[#e3c767]/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-[#e3c767]" />
                  <span className="text-sm font-medium text-[#e3c767]">
                    PARTNERSHIPS
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Become a Partner
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Collaborate with us to shape the future of academic discourse
                </p>
                <button className="text-[#e3c767] font-medium text-sm hover:underline">
                  Explore Options →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#e3c767] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
