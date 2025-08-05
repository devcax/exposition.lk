import { AnimatePresence } from "framer-motion";
import { useSlider } from "../hooks/useSlider";
import { SLIDER_DATA } from "../config/slider.config";
import SlideBackground from "./HeroSlider/SlideBackground";
import SliderContent from "./HeroSlider/SliderContent";
import SliderNavigation from "./HeroSlider/SliderNavigation";
import SliderPagination from "./HeroSlider/SliderPagination";
import IntroCurtain from "./HeroSlider/IntroCurtain";
import { useState } from "react";

const HeroSlider = () => {
  const { currentSlide, nextSlide, prevSlide, setCurrentSlide, direction } =
    useSlider(SLIDER_DATA.length);
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-black group"
    >
      <AnimatePresence>
        {!isIntroFinished && (
          <IntroCurtain onAnimationComplete={() => setIsIntroFinished(true)} />
        )}
      </AnimatePresence>

      {isIntroFinished && (
        <>
          <div className="grain-overlay" />
          <SlideBackground
            slides={SLIDER_DATA}
            currentSlide={currentSlide}
            isAnimating={true}
          />

          <div className="relative h-full flex items-center justify-center pb-24 pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-28">
            <div className="text-center px-6 md:px-8 lg:px-12 w-full max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto py-8 mb-16 mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16">
              <AnimatePresence custom={direction} mode="wait">
                <SliderContent
                  key={currentSlide}
                  slideData={SLIDER_DATA[currentSlide]}
                  direction={direction}
                />
              </AnimatePresence>
            </div>
          </div>

          <SliderNavigation onPrev={prevSlide} onNext={nextSlide} />

          <SliderPagination
            slides={SLIDER_DATA}
            currentSlide={currentSlide}
            onDotClick={setCurrentSlide}
          />
        </>
      )}
    </section>
  );
};

export default HeroSlider;
