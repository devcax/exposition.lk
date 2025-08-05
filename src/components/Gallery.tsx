import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, X } from "lucide-react";

// --- DATA ---
const segmentsData = [
  {
    id: "mag",
    title: "Exposition Magazine",
    description: "The official publication bridging management and IT.",
    imageUrl: "/assets/segments/magazine.png",
    detailedDescription:
      "The Exposition Magazine is our flagship publication featuring insightful articles from industry professionals, showcasing groundbreaking student projects, and exploring the intersection of business management and information technology.",
    keyFeatures: [
      "In-depth industry articles",
      "Student project showcases",
      "Expert interviews",
      "Latest tech trends",
    ],
    targetAudience:
      "Students, faculty, and industry professionals seeking insights into the convergence of technology and business management.",
  },
  {
    id: "int",
    title: "Expert Interviews",
    description: "Engaging one-on-one conversations with industry leaders.",
    imageUrl: "/assets/segments/Interviews.png",
    detailedDescription:
      "Our Expert Interviews series brings you face-to-face with the brightest minds in tech and business sectors, offering invaluable insights and inspiration for students and faculty alike.",
    keyFeatures: [
      "Insights from top executives",
      "Career development advice",
      "Future technology discussions",
      "Personal success stories",
    ],
    targetAudience:
      "Aspiring students and professionals looking for mentorship and career guidance from industry veterans.",
  },
  {
    id: "ind",
    title: "Industrial Week",
    description: "A week-long series connecting students with industry.",
    imageUrl:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    detailedDescription:
      "Industrial Week is an immersive experience designed to bridge the gap between classroom theory and industry practice through factory tours, demonstrations, and professional talks.",
    keyFeatures: [
      "Company site visits",
      "Live technology demos",
      "Networking with engineers",
      "Understanding supply chains",
    ],
    targetAudience:
      "Students across all engineering and management disciplines seeking real-world exposure to industrial practices.",
  },
  {
    id: "edi",
    title: "Edify",
    description: "Celebrating the synergy between academia and industry.",
    imageUrl: "/assets/segments/Edify.png",
    detailedDescription:
      "Edify is a special platform dedicated to celebrating meaningful collaborations between our university and industry partners, highlighting successful joint research projects and initiatives.",
    keyFeatures: [
      "Showcase of collaborative projects",
      "Recognition of industry partners",
      "Student internship experiences",
      "Funding and research opportunities",
    ],
    targetAudience:
      "University faculty, research students, and corporate partners interested in academic-industry collaboration.",
  },
  {
    id: "how",
    title: "How You Did It",
    description: "Inspiring sessions where mentors share career journeys.",
    imageUrl: "/assets/segments/howYouDidIt.png",
    detailedDescription:
      "'How You Did It' features inspiring talks from successful alumni and respected mentors who share their personal career stories and key decisions that led to their success.",
    keyFeatures: [
      "Alumni success stories",
      "Practical career advice",
      "Q&A with mentors",
      "Networking opportunities",
    ],
    targetAudience:
      "Final year students and recent graduates preparing to enter the professional world.",
  },
  {
    id: "wor",
    title: "Student Workshops",
    description:
      "Interactive, skill-building workshops for practical knowledge.",
    imageUrl:
      "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    detailedDescription:
      "Our workshops are hands-on, interactive sessions focused on developing practical, in-demand skills led by experts covering software development, data analysis, and project management.",
    keyFeatures: [
      "Hands-on coding sessions",
      "Project management simulations",
      "Data analysis training",
      "Public speaking practice",
    ],
    targetAudience:
      "Students looking to acquire specific, job-ready skills to enhance their employability.",
  },
  {
    id: "for",
    title: "Industrial Forum",
    description: "A dynamic forum to discuss the latest industry trends.",
    imageUrl: "/assets/segments/forum.png",
    detailedDescription:
      "The Industrial Forum brings together students, academics, and industry professionals for dynamic discussions featuring panel discussions and keynote speeches on technological advancements.",
    keyFeatures: [
      "Panel discussions with experts",
      "Keynote speeches on innovation",
      "Debates on industry challenges",
      "High-level networking",
    ],
    targetAudience:
      "Senior students, academics, researchers, and industry leaders interested in shaping the future of technology.",
  },
  {
    id: "car",
    title: "Career Fair",
    description: "Connecting talented students with leading companies.",
    imageUrl:
      "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    detailedDescription:
      "The annual Career Fair is our premier networking event, providing a direct link between our talented students and top-tier companies for internships and full-time positions.",
    keyFeatures: [
      "Booths from top companies",
      "On-the-spot interviews",
      "Resume review sessions",
      "Direct access to recruiters",
    ],
    targetAudience:
      "All students seeking internships and graduate employment opportunities across various industries.",
  },
];

// Static data for the main hero section
const mainHeroData = {
  id: "main-hero",
  title: "Welcome to the Event Universe",
  description:
    "An immersive journey through our core events and initiatives. Click 'Read More' to discover our mission.",
  imageUrl: "/assets/Structure/main.png",
  detailedDescription:
    "The Exposition 'Event Universe' is a comprehensive ecosystem designed to foster innovation, collaboration, and professional growth. It serves as a dynamic bridge between academic theory and real-world industry practice. Through a diverse array of events—from our flagship magazine and insightful expert interviews to hands-on workshops and large-scale industrial forums—we provide students, faculty, and professionals with unparalleled opportunities to learn, network, and showcase their talents. Our mission is to cultivate a vibrant community where knowledge is not just acquired but actively applied, and where the next generation of leaders and innovators is born. Each segment of our universe is carefully crafted to deliver unique value, contributing to a holistic experience that prepares participants for the challenges and opportunities of the future.",
  keyFeatures: [
    "Holistic Event Ecosystem",
    "Academia-Industry Bridge",
    "Skill Development",
    "Networking Opportunities",
  ],
  targetAudience:
    "Students, academics, researchers, and industry professionals passionate about the intersection of technology, management, and innovation.",
};

// --- DESKTOP FLOATING CARD COMPONENT ---
const FloatingCard = ({
  segment,
  onReadMore,
  index,
  activeIndex,
  onClick,
  totalCards,
}) => {
  const relativeIndex =
    ((index - activeIndex + totalCards) % totalCards) -
    Math.floor(totalCards / 2);

  const angleStep = (2 * Math.PI) / totalCards;
  const angle = relativeIndex * angleStep;

  const radius = 380;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius - radius;
  const rotateY = (angle * 180) / Math.PI;

  const distanceFromCenter = Math.abs(relativeIndex);
  const scale = 1 - distanceFromCenter * 0.15;
  const opacity = 1 - distanceFromCenter * 0.25;
  const isActive = index === activeIndex;

  return (
    <motion.div
      className="absolute w-80 h-96 cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        left: "50%",
        top: "50%",
        marginLeft: "-160px",
        marginTop: "-192px",
      }}
      animate={{
        transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg)`,
        opacity,
        scale,
        zIndex: totalCards - distanceFromCenter,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onClick={onClick}
      whileHover={{
        scale: scale + 0.08,
        transform: `translateX(${x}px) translateZ(${
          z + 30
        }px) rotateY(${rotateY}deg)`,
        transition: { duration: 0.3 },
      }}
    >
      <div className="w-full h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={segment.imageUrl}
            alt={segment.title}
            className={`w-full h-full object-cover ${
              segment.id === "int" || segment.id === "edi" ? "object-top" : ""
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {isActive && (
            <motion.div
              className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#e3c767]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
        <div className="p-6 flex flex-col justify-between h-48">
          <div>
            <h3
              className={`text-lg font-bold mb-3 text-white line-clamp-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {segment.title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-3">
              {segment.description}
            </p>
          </div>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore(segment);
            }}
            className={`w-full text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
              isActive
                ? "bg-gradient-to-r from-[#e3c767] to-[#aa7d39] shadow-lg"
                : "bg-gradient-to-r from-[#d4b960] to-[#9a7235] shadow-md"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// --- MOBILE CARD COMPONENT ---
const MobileCard = ({ segment, onReadMore, isActive }) => {
  return (
    <motion.div
      className="w-full max-w-sm mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={segment.imageUrl}
          alt={segment.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {isActive && (
          <motion.div
            className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#e3c767]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      <div className="p-6">
        <h3
          className={`text-xl font-bold mb-3 text-white ${
            isActive
              ? "bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent"
              : ""
          }`}
        >
          {segment.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {segment.description}
        </p>
        <motion.button
          onClick={() => onReadMore(segment)}
          className="w-full bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black font-bold px-4 py-3 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Explore More
        </motion.button>
      </div>
    </motion.div>
  );
};

// --- RESPONSIVE TIMELINE COMPONENT ---
const Timeline = ({ segments, activeIndex, onSelect, isMobile }) => {
  if (isMobile) {
    return (
      <div className="flex justify-center items-center mt-8 px-4">
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
          {segments.map((segment, index) => (
            <motion.button
              key={segment.id}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer p-2"
              onClick={() => onSelect(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full border-2 ${
                  index === activeIndex ? "border-[#e3c767]" : "border-gray-600"
                }`}
                style={{
                  background:
                    index === activeIndex
                      ? "linear-gradient(to right, #e3c767, #aa7d39)"
                      : "transparent",
                }}
                animate={{
                  scale: index === activeIndex ? 1.2 : 1,
                  boxShadow:
                    index === activeIndex
                      ? "0 0 15px rgba(227, 199, 103, 0.5)"
                      : "0 0 0px rgba(227, 199, 103, 0)",
                }}
              />
              <motion.span
                className={`text-xs mt-2 text-center transition-colors duration-300 ${
                  index === activeIndex ? "text-[#e3c767]" : "text-gray-500"
                } max-w-12`}
                animate={{ y: index === activeIndex ? -2 : 0 }}
              >
                {segment.title.split(" ")[0]}
              </motion.span>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center mt-12 space-x-6">
      {segments.map((segment, index) => (
        <motion.div
          key={segment.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onSelect(index)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={`w-4 h-4 rounded-full border-2 ${
              index === activeIndex ? "border-[#e3c767]" : "border-gray-600"
            }`}
            style={{
              background:
                index === activeIndex
                  ? "linear-gradient(to right, #e3c767, #aa7d39)"
                  : "transparent",
            }}
            animate={{
              scale: index === activeIndex ? 1.2 : 1,
              boxShadow:
                index === activeIndex
                  ? "0 0 20px rgba(227, 199, 103, 0.5)"
                  : "0 0 0px rgba(227, 199, 103, 0)",
            }}
          />
          <motion.span
            className={`text-sm mt-3 transition-colors duration-300 text-center max-w-20 ${
              index === activeIndex ? "text-[#e3c767]" : "text-gray-500"
            }`}
            animate={{ y: index === activeIndex ? -2 : 0 }}
          >
            {segment.title.split(" ")[0]}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

// --- ENHANCED RESPONSIVE MODAL ---
const SegmentModal = ({ segment, onClose }) => {
  if (!segment) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center z-50 p-4 overflow-y-auto"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col my-4"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col min-h-0">
            {/* Header Image */}
            <div className="w-full h-48 md:h-80 relative flex-shrink-0">
              <motion.img
                src={segment.imageUrl}
                alt={segment.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-3 hover:bg-[#e3c767]/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 md:p-8 overflow-y-auto">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                  {segment.title}
                </h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {segment.detailedDescription}
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {/* Key Features */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50">
                  <h3 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {segment.keyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start text-gray-300 text-sm md:text-base"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <span className="text-[#e3c767] mr-3 mt-1 text-lg">
                          ✦
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-700/50">
                  <h3 className="text-lg md:text-xl font-bold mb-4 bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
                    Target Audience
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {segment.targetAudience}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// --- MAIN RESPONSIVE GALLERY COMPONENT ---
const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !selectedSegment) {
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % segmentsData.length);
      }, 4000);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, selectedSegment]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleNavigation = (direction) => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => {
      const newIndex = prev + direction;
      return (newIndex + segmentsData.length) % segmentsData.length;
    });
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleTimelineSelect = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#e3c767]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-[#aa7d39]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Event Universe
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Navigate through our immersive event ecosystem
            </p>
          </motion.div>

          {/* Main Hero Section */}
          <div className="relative mb-8 md:mb-16 h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence>
              <motion.div
                key="main-hero-static"
                className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={mainHeroData.imageUrl}
                  alt="Event Overview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mission Button */}
          <div className="text-center mb-8 md:mb-16">
            <motion.button
              onClick={() => setSelectedSegment(mainHeroData)}
              className="bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 text-base md:text-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More About Our Mission
            </motion.button>
          </div>

          {/* Cards Section */}
          {isMobile ? (
            // Mobile Layout
            <div className="space-y-6 mb-8">
              <div className="flex items-center justify-between px-4">
                <button
                  onClick={() => handleNavigation(-1)}
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-white hover:bg-[#e3c767]/20 transition-all duration-300 border border-gray-700/50"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-center">
                  <span className="text-[#e3c767] text-sm font-medium">
                    {activeIndex + 1} of {segmentsData.length}
                  </span>
                </div>

                <button
                  onClick={() => handleNavigation(1)}
                  className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-white hover:bg-[#e3c767]/20 transition-all duration-300 border border-gray-700/50"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <MobileCard
                  key={activeIndex}
                  segment={segmentsData[activeIndex]}
                  onReadMore={setSelectedSegment}
                  isActive={true}
                />
              </AnimatePresence>
            </div>
          ) : (
            // Desktop Layout - 3D Carousel
            <div
              className="relative h-[450px] mb-16"
              style={{ perspective: "1200px" }}
            >
              <button
                onClick={() => handleNavigation(-1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm rounded-full p-4 text-white hover:bg-[#e3c767]/20 transition-all duration-300 border border-gray-700/50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => handleNavigation(1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm rounded-full p-4 text-white hover:bg-[#e3c767]/20 transition-all duration-300 border border-gray-700/50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {segmentsData.map((segment, index) => (
                <FloatingCard
                  key={segment.id}
                  segment={segment}
                  index={index}
                  activeIndex={activeIndex}
                  onReadMore={setSelectedSegment}
                  onClick={() => handleCardClick(index)}
                  totalCards={segmentsData.length}
                />
              ))}
            </div>
          )}

          {/* Timeline */}
          <Timeline
            segments={segmentsData}
            activeIndex={activeIndex}
            onSelect={handleTimelineSelect}
            isMobile={isMobile}
          />

          {/* Auto-play Controls */}
          <div className="text-center mt-6 md:mt-8">
            <div className="inline-flex items-center space-x-3 text-gray-400">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 hover:border-[#e3c767]/50 transition-all duration-300"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
                <span className="text-sm">
                  {isAutoPlaying ? "Pause" : "Play"}
                </span>
              </button>

              <motion.div
                className="w-3 h-3 rounded-full bg-[#e3c767]"
                animate={
                  isAutoPlaying
                    ? { scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }
                    : { scale: 1, opacity: 0.5 }
                }
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <SegmentModal
        segment={selectedSegment}
        onClose={() => setSelectedSegment(null)}
      />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
