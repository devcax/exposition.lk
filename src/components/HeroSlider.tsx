import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Exposition',
      subtitle: 'University Magazine Excellence',
      description: 'Discover groundbreaking research, inspiring stories, and the future of education through our comprehensive magazine platform',
    },
    {
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Research & Innovation',
      subtitle: 'Showcasing Academic Brilliance',
      description: 'Explore cutting-edge discoveries and innovative solutions that shape tomorrow\'s world',
    },
    {
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Community Impact',
      subtitle: 'Building Academic Excellence',
      description: 'Connecting knowledge with real-world solutions and fostering meaningful partnerships',
    },
  ];

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
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className={`transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-amber-600/20 backdrop-blur-sm border border-amber-600/30 rounded-full text-amber-400 text-sm font-medium mb-4">
                Academic Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-amber-200 to-amber-300 bg-clip-text text-transparent leading-tight">
                {slides[currentSlide].title}
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-amber-400 mb-4 font-light">
              {slides[currentSlide].subtitle}
            </p>
            
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/25">
                <div className="flex items-center space-x-3">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>E-Magazine</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>
              
              <button className="group relative overflow-hidden border-2 border-amber-600/50 hover:border-amber-500 text-white hover:text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-amber-500 transition-all duration-300 z-20 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20 rounded-full text-white hover:text-amber-500 transition-all duration-300 z-20 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative overflow-hidden transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-amber-600 rounded-full' 
                : 'w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs font-medium rotate-90 origin-center whitespace-nowrap">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;