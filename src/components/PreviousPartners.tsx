import React, { useEffect, useRef } from "react";

// The main component for displaying previous partners
const App = () => {
  // A ref to hold the scrolling container for the first carousel
  const scrollRef1 = useRef<HTMLDivElement>(null);
  // A ref to hold the scrolling container for the second carousel
  const scrollRef2 = useRef<HTMLDivElement>(null);
  // A ref to hold the animation frame ID, to cancel it on cleanup
  const animationRef = useRef<number>();
  // A ref to track if the animation is paused (e.g., on hover)
  const isPausedRef = useRef(false);

  // Sample partner data. Replace with your actual partner logos and names.
  const partners = [
    { name: "TechCorp", logo: "https://placehold.co/200x100/1E293B/E3C767?text=TechCorp" },
    { name: "InnovateLab", logo: "https://placehold.co/200x100/1E293B/E3C767?text=InnovateLab" },
    { name: "Digital Solutions", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Digital+Solutions" },
    { name: "Future Systems", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Future+Systems" },
    { name: "Smart Industries", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Smart+Industries" },
    { name: "Global Tech", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Global+Tech" },
    { name: "NextGen Corp", logo: "https://placehold.co/200x100/1E293B/E3C767?text=NextGen+Corp" },
    { name: "Innovation Hub", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Innovation+Hub" },
    { name: "Tech Pioneers", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Tech+Pioneers" },
    { name: "Digital Dynamics", logo: "https://placehold.co/200x100/1E293B/E3C767?text=Digital+Dynamics" },
  ];

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
  const PartnerLogo = ({ partner, index }: { partner: any; index: number }) => (
    <div
      key={`partner-${index}`}
      className="flex-shrink-0 w-48 h-24 mx-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[#e3c767]/50 transition-all duration-300 hover:scale-105 group"
    >
      <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            // Fallback in case the image fails to load
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = "none";
              const parent = img.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-[#e3c767] font-bold text-sm">${partner.name}</span>`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Hover overlay with partner name */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-[#e3c767] font-semibold text-sm text-center px-2">
            {partner.name}
          </span>
        </div>
      </div>
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Our Previous Partners
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Trusted by leading organizations who have partnered with us to create meaningful impact
          </p>
        </div>

        {/* First Carousel - scrolls left */}
        <div className="mb-8">
          <div
            className="overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, white 5%, white 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, white 5%, white 95%, transparent)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={scrollRef1}
              className="flex"
              style={{ width: "max-content" }}
            >
              {/* Render the first set of logos */}
              {partnersRow1.map((partner, index) => (
                <PartnerLogo key={`row1-first-${index}`} partner={partner} index={index} />
              ))}
              {/* Render a duplicate set for a seamless loop */}
              {partnersRow1.map((partner, index) => (
                <PartnerLogo key={`row1-second-${index}`} partner={partner} index={index + partnersRow1.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Carousel - scrolls right */}
        <div className="mb-8">
          <div
            className="overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, white 5%, white 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, white 5%, white 95%, transparent)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* The structure is now identical to the first carousel, the JS handles the direction */}
            <div
              ref={scrollRef2}
              className="flex"
              style={{ width: "max-content" }}
            >
              {/* Render the second set of logos */}
              {partnersRow2.map((partner, index) => (
                <PartnerLogo key={`row2-first-${index}`} partner={partner} index={index} />
              ))}
              {/* Render a duplicate set for a seamless loop */}
              {partnersRow2.map((partner, index) => (
                <PartnerLogo key={`row2-second-${index}`} partner={partner} index={index + partnersRow2.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-gray-400 text-sm">Total Partners</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">20+</div>
            <div className="text-gray-400 text-sm">Years of Partnership</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-400 text-sm">Industries Covered</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">95%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Join Our Partner Network?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Become part of our growing community of partners and create lasting impact together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black font-semibold rounded-xl hover:shadow-xl hover:shadow-[#e3c767]/30 transition-all duration-300 hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
