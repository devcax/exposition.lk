import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    'https://exposition.lk/static/media/ga15.ff0e01d3c075891814ff.jpg',
    'https://exposition.lk/static/media/ga17.2c83b8d6f98a77c4c098.jpg',
    'https://exposition.lk/static/media/ga16.c54d2b2285a14f24a765.jpg',
  ];

  const slideLogo = '/assets/logo.png';
  const slideSubtitle = 'University Magazine Excellence';
  const slideDescription = 'Discover groundbreaking research, inspiring stories, and the future of education through our comprehensive magazine platform';

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt="Exposition" 
              className="w-full h-full object-cover"
            />
            {/* Multiple overlay layers for better visibility */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />
            {/* Center spotlight effect */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
<div className="relative h-full flex items-center justify-center">
  <div className="text-center px-4 w-full max-w-4xl mx-auto py-8">
    <div className={`transition-all duration-700 flex flex-col items-center justify-center ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      {/* Logo Container with max height */}
      <div className="mb-6 md:mb-8 flex items-center justify-center" style={{ maxHeight: '40vh' }}>
        <img 
          src={slideLogo} 
          alt="Exposition Logo"
          className="h-48 md:h-64 lg:h-80 xl:h-96 w-auto object-contain drop-shadow-2xl"
        />
      </div>
      
      {/* Text Content with reduced spacing */}
      <div className="space-y-3 md:space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#f1b759] font-light tracking-wide drop-shadow-lg">
          {slideSubtitle}
        </h2>
        
        <p className="text-sm md:text-base lg:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
          {slideDescription}
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#f1b759] hover:bg-[#d1a93a] text-black px-6 md:px-8 py-3 md:py-4 rounded-sm transition-colors duration-300 font-medium tracking-wide shadow-lg text-sm md:text-base"
        >
          E-Magazine
          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href="#"
          className="inline-flex items-center gap-2 border border-white/50 hover:border-[#f1b759] hover:bg-[#f1b759] hover:text-black text-white px-6 md:px-8 py-3 md:py-4 rounded-sm transition-all duration-300 font-medium tracking-wide backdrop-blur-sm shadow-lg text-sm md:text-base"
        >
          Our Legacy
        </a>
      </div>
    </div>
  </div>
</div>

      {/* Navigation */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8">
        <button
          onClick={prevSlide}
          className="p-3 text-white/80 hover:text-white transition-colors duration-300 bg-black/20 backdrop-blur-sm rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 text-white/80 hover:text-white transition-colors duration-300 bg-black/20 backdrop-blur-sm rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-1.5 bg-[#f1b759]' 
                : 'w-8 h-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;