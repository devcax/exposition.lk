import { useEffect, useRef } from "react";
import { partnerLogos } from "../data/partnerLogos";

// The main component for displaying previous partners
const PreviousPartners = () => {
  // A ref to hold the scrolling container for the first carousel
  const scrollRef1 = useRef<HTMLDivElement>(null);
  // A ref to hold the scrolling container for the second carousel
  const scrollRef2 = useRef<HTMLDivElement>(null);
  // A ref to hold the animation frame ID, to cancel it on cleanup
  const animationRef = useRef<number>();
  // A ref to track if the animation is paused (e.g., on hover)
  const isPausedRef = useRef(false);

  // Use the imported partner logos
  const partners = partnerLogos;

  // Split partners into two rows for the two carousels
  const partnersRow1 = partners.slice(0, Math.ceil(partners.length / 2));
  const partnersRow2 = partners.slice(Math.ceil(partners.length / 2));

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let scrollPosition1 = 0;
    // Initialize the second carousel's position to its end for a rightward scroll
    let scrollPosition2 = scrollContainer2.scrollWidth / 2;
    const scrollSpeed = 0.2;

    const animate = () => {
      if (!isPausedRef.current) {
        // Get the width of one set of logos (half the total scroll width)
        const containerWidth1 = scrollContainer1.scrollWidth / 2;
        const containerWidth2 = scrollContainer2.scrollWidth / 2;

        // --- First Carousel Animation (scrolls left) ---
        if (containerWidth1 > 0) {
          scrollPosition1 += scrollSpeed;
          // When the scroll position exceeds the width of one set, reset it to 0
          if (scrollPosition1 >= containerWidth1) {
            scrollPosition1 = 0;
          }
          scrollContainer1.style.transform = `translateX(-${scrollPosition1}px)`;
        }

        // --- Second Carousel Animation (scrolls right) ---
        if (containerWidth2 > 0) {
          scrollPosition2 -= scrollSpeed; // Decrement position to move right
          // When the scroll position reaches the start, reset it to the end
          if (scrollPosition2 <= 0) {
            scrollPosition2 = containerWidth2;
          }
          // The transform is negative, moving from -width to 0, which results in a rightward scroll
          scrollContainer2.style.transform = `translateX(-${scrollPosition2}px)`;
        }
      }
      // Request the next animation frame
      animationRef.current = requestAnimationFrame(animate);
    };

    // Set the initial transform for the second carousel before starting the animation
    scrollContainer2.style.transform = `translateX(-${scrollPosition2}px)`;
    // Start the animation loop
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation when the component unmounts
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Pause the animation on mouse enter
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  // Resume the animation on mouse leave
  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  // A reusable component to render each partner's logo
  const PartnerLogo = ({
    partner,
    index,
  }: {
    partner: { src: string; alt: string };
    index: number;
  }) => (
    <div
      key={`partner-${index}`}
      className="flex-shrink-0 w-48 h-24 mx-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[#e3c767]/50 transition-all duration-300 hover:scale-105 group"
    >
      <img
        src={partner.src}
        alt={partner.alt}
        className="w-full h-full object-contain p-4"
      />
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden font-sans">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#e3c767]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#aa7d39]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-2 text-white">
            Our Previous <span className="text-[#E3C767]">Partners</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            We are grateful for the support of our past partners who have helped
            make our event a success.
          </p>
          <div
            className="relative w-full overflow-hidden scroller-fade"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* First row of logos, duplicated for seamless scrolling */}
            <div ref={scrollRef1} className="flex w-max">
              {[...partnersRow1, ...partnersRow1].map((partner, index) => (
                <PartnerLogo partner={partner} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Carousel */}
        <div
          className="relative w-full overflow-hidden mt-8 scroller-fade"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Second row of logos, duplicated for seamless scrolling */}
          <div ref={scrollRef2} className="flex w-max">
            {[...partnersRow2, ...partnersRow2].map((partner, index) => (
              <PartnerLogo partner={partner} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousPartners;
