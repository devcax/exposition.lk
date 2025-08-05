import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  onPrev,
  onNext,
}) => (
  <div className="group absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6 md:px-8 lg:px-12">
    <button
      onClick={onPrev}
      className="opacity-0 group-hover:opacity-100 p-4 md:p-5 text-white/70 hover:text-white transition-all duration-300 ease-in-out bg-black/20 hover:bg-black/50 backdrop-blur-md rounded-full hover:-translate-y-1 hover:shadow-xl"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
    </button>
    <button
      onClick={onNext}
      className="opacity-0 group-hover:opacity-100 p-4 md:p-5 text-white/70 hover:text-white transition-all duration-300 ease-in-out bg-black/20 hover:bg-black/50 backdrop-blur-md rounded-full hover:-translate-y-1 hover:shadow-xl"
      aria-label="Next slide"
    >
      <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
    </button>
  </div>
);

export default SliderNavigation;
