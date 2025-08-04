import React, { useEffect, useRef } from "react";

const PreviousPartners = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const animationRef1 = useRef<number>();
  const animationRef2 = useRef<number>();
  const isPausedRef = useRef(false);

  // Sample partner logos - you can replace these with actual partner logos
  const partners = [
    {
      name: "TechCorp",
      logo: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "InnovateLab",
      logo: "https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Digital Solutions",
      logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Future Systems",
      logo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Smart Industries",
      logo: "https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Global Tech",
      logo: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "NextGen Corp",
      logo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Innovation Hub",
      logo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Tech Pioneers",
      logo: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
    {
      name: "Digital Dynamics",
      logo: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    },
  ];

  // Split partners into two groups for the two carousels
  const partnersRow1 = partners.slice(0, Math.ceil(partners.length / 2));
  const partnersRow2 = partners.slice(Math.ceil(partners.length / 2));

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    const scrollSpeed = 0.5;
    const containerWidth1 = scrollContainer1.scrollWidth / 2;
    const containerWidth2 = scrollContainer2.scrollWidth / 2;

    const animate = () => {
      if (!isPausedRef.current) {
        if (scrollContainer1) {
          scrollPosition1 += scrollSpeed;
          if (scrollPosition1 >= containerWidth1) {
            scrollPosition1 = 0;
          }
          scrollContainer1.style.transform = `translateX(-${scrollPosition1}px)`;
        }

        if (scrollContainer2) {
          scrollPosition2 -= scrollSpeed; // Opposite direction
          if (scrollPosition2 <= -containerWidth2) {
            scrollPosition2 = 0;
          }
          scrollContainer2.style.transform = `translateX(${scrollPosition2}px)`;
        }
      }

      animationRef1.current = requestAnimationFrame(animate);
    };

    animationRef1.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef1.current) {
        cancelAnimationFrame(animationRef1.current);
      }
      if (animationRef2.current) {
        cancelAnimationFrame(animationRef2.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  const PartnerLogo = ({ partner, index }: { partner: any; index: number }) => (
    <div
      key={`partner-${index}`}
      className="flex-shrink-0 w-48 h-24 mx-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-[#e3c767]/50 transition-all duration-300 hover:scale-105 group"
    >
      <div className="w-full h-full flex items-center justify-center p-4 relative overflow-hidden">
        {/* Logo placeholder - replace with actual logos */}
        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden">
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
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
    <section className="py-16 md:py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#e3c767]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#aa7d39]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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

        {/* First Carousel - Left to Right */}
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
              {/* First set */}
              {partnersRow1.map((partner, index) => (
                <PartnerLogo key={`row1-first-${index}`} partner={partner} index={index} />
              ))}
              {/* Duplicate set for seamless loop */}
              {partnersRow1.map((partner, index) => (
                <PartnerLogo key={`row1-second-${index}`} partner={partner} index={index + partnersRow1.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Carousel - Right to Left */}
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
              ref={scrollRef2}
              className="flex"
              style={{ width: "max-content" }}
            >
              {/* First set */}
              {partnersRow2.map((partner, index) => (
                <PartnerLogo key={`row2-first-${index}`} partner={partner} index={index} />
              ))}
              {/* Duplicate set for seamless loop */}
              {partnersRow2.map((partner, index) => (
                <PartnerLogo key={`row2-second-${index}`} partner={partner} index={index + partnersRow2.length} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-gray-400 text-sm">Total Partners</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-400 text-sm">Years of Partnership</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-gray-400 text-sm">Industries Covered</div>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent mb-2">
              95%
            </div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Partner Network?
            </h3>
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

export default PreviousPartners;