import React from "react";
import { Slide } from "../../config/slider.config";

interface SlideBackgroundProps {
  slides: Slide[];
  currentSlide: number;
  isAnimating: boolean;
}

const SlideBackground: React.FC<SlideBackgroundProps> = ({
  slides,
  currentSlide,
  isAnimating,
}) => (
  <div className="absolute inset-0">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className={`w-full h-full object-cover ${
            index === currentSlide && isAnimating ? "animate-kenburns" : ""
          }`}
        />
        {/* Strong black overlay for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Enhanced gradient overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        {/* Additional center vignette for focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60" />
      </div>
    ))}
  </div>
);

export default SlideBackground;
