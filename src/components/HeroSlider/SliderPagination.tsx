import React from "react";
import { Slide } from "../../config/slider.config";

interface SliderPaginationProps {
  slides: Slide[];
  currentSlide: number;
  onDotClick: (index: number) => void;
}

const SliderPagination: React.FC<SliderPaginationProps> = ({
  slides,
  currentSlide,
  onDotClick,
}) => (
  <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 backdrop-blur-sm bg-black/10 px-6 py-3 rounded-full">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => onDotClick(index)}
        className={`transition-all duration-300 ease-in-out h-1.5 md:h-2 rounded-full hover:-translate-y-0.5 hover:shadow-lg ${
          index === currentSlide
            ? "w-12 md:w-16 bg-[#f1b759] shadow-lg shadow-[#f1b759]/30"
            : "w-6 md:w-8 bg-white/40 hover:bg-white/70"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
);

export default SliderPagination;
