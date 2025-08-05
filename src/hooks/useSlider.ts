import { useState, useEffect, useCallback } from "react";

export const useSlider = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const handleSetCurrentSlide = useCallback((newSlide: number) => {
    const newSlideIndex = (newSlide + totalSlides) % totalSlides;
    setDirection(newSlideIndex > currentSlide ? 1 : -1);
    setCurrentSlide(newSlideIndex);
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return { currentSlide, nextSlide, prevSlide, setCurrentSlide: handleSetCurrentSlide, direction };
};
