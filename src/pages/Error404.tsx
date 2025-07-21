import React, { useEffect, useState } from "react";
import { Home, Compass } from "lucide-react";
import { useNavigate } from "react-router";

const Error404 = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-[#e3c767]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div
          className={`mb-4 sm:mb-6 transform transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[18rem] font-black leading-none">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              404
            </span>
          </div>
        </div>

        {/* Error Icon */}
        <div
          className={`mb-4 sm:mb-6 transform transition-all duration-1000 delay-200 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-900/50 backdrop-blur-sm rounded-full border border-[#e3c767]/30">
            <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-[#e3c767]" />
          </div>
        </div>

        {/* Error Message */}
        <div
          className={`mb-6 sm:mb-8 transform transition-all duration-1000 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4 px-4">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Button */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={handleGoHome}
            className="group flex items-center gap-3 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:from-[#f4d03f] hover:to-[#e3c767] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mx-auto"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Go Home</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-3 h-3 sm:w-4 sm:h-4 bg-[#e3c767]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 sm:w-3 sm:h-3 bg-[#aa7d39]/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-4 h-4 sm:w-5 sm:h-5 bg-[#B78F5A]/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-32 w-1 h-1 sm:w-2 sm:h-2 bg-[#e3c767]/40 rounded-full animate-pulse delay-1500"></div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4">
        <p className="text-gray-500 text-xs sm:text-sm">
          If you believe this is an error, please contact our support team
        </p>
      </div>
    </div>
  );
};

export default Error404;