import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- DATA ---
const segmentsData = [
  {
    id: "mag",
    title: "Exposition Magazine",
    description: "The official publication bridging management and IT.",
    imageUrl: "/assets/segments/magazine.jpg",
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
    imageUrl: "/assets/segments/Interviews.jpg",
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
    imageUrl: "/assets/segments/Edify.jpg",
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
    imageUrl: "/assets/segments/howYouDidIt.jpg",
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
    imageUrl: "/assets/segments/forum.jpg",
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

// --- FLOATING CARD COMPONENT ---
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

  const radius = 400;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius - radius;
  const rotateY = (angle * 180) / Math.PI;

  const distanceFromCenter = Math.abs(relativeIndex);
  const scale = 1 - distanceFromCenter * 0.15;
  const opacity = 1 - distanceFromCenter * 0.25;
  const isActive = index === activeIndex;

  return (
    <motion.div
      className="absolute w-96 h-[26rem] cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        left: "50%",
        top: "50%",
        marginLeft: "-192px",
        marginTop: "-208px",
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
        scale: scale + 0.1,
        transform: `translateX(${x}px) translateZ(${
          z + 30
        }px) rotateY(${rotateY}deg)`,
        transition: { duration: 0.3 },
      }}
    >
      <div className="w-full h-full bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={segment.imageUrl}
            alt={segment.title}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {isActive && (
            <motion.div
              className="absolute top-3 right-3 w-2 h-2 rounded-full"
              style={{ backgroundColor: "#e3c767" }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>
        <div className="p-6 flex flex-col justify-between h-52">
          <div>
            <h3
              className="text-lg font-bold mb-3 text-white line-clamp-2"
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg, #e3c767, #aa7d39)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }
                  : {}
              }
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
            className="w-full text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 text-sm"
            style={{
              background: isActive
                ? "linear-gradient(to right, #e3c767, #aa7d39)"
                : "linear-gradient(to right, #d4b960, #9a7235)",
              boxShadow: isActive
                ? "0 6px 20px rgba(227, 199, 103, 0.3)"
                : "0 2px 10px rgba(227, 199, 103, 0.2)",
            }}
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

// --- TIMELINE COMPONENT ---
const Timeline = ({ segments, activeIndex, onSelect }) => {
  return (
    <div className="flex justify-center items-center mt-12 space-x-4">
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
              index === activeIndex ? "border-amber-500" : "border-gray-600"
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
            className={`text-xs mt-2 transition-colors duration-300 ${
              index === activeIndex ? "text-amber-400" : "text-gray-500"
            }`}
            animate={{
              y: index === activeIndex ? -2 : 0,
            }}
          >
            {segment.title.split(" ")[0]}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

// --- ENHANCED MODAL ---
const SegmentModal = ({ segment, onClose }) => {
  if (!segment) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col min-h-0">
            <div className="w-full h-80 relative flex-shrink-0">
              <motion.img
                src={segment.imageUrl}
                alt={segment.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-white bg-gray-800/50 backdrop-blur-sm rounded-full p-3 hover:bg-amber-600/30 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            {/* Content Section */}
            <div className="w-full p-8 overflow-y-auto">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2
                  className="text-4xl font-bold mb-6 text-white"
                  style={{
                    background: "linear-gradient(135deg, #e3c767, #aa7d39)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {segment.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {segment.detailedDescription}
                </p>
              </motion.div>
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3
                    className="text-xl font-bold mb-4 text-white"
                    style={{
                      background: "linear-gradient(135deg, #e3c767, #aa7d39)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {segment.keyFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <span className="text-amber-500 mr-3 mt-1">✦</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3
                    className="text-xl font-bold mb-4 text-white"
                    style={{
                      background: "linear-gradient(135deg, #e3c767, #aa7d39)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Target Audience
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
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

// --- MAIN GALLERY COMPONENT ---
const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

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
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNavigation = (direction) => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => {
      const newIndex = prev + direction;
      return (newIndex + segmentsData.length) % segmentsData.length;
    });
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleTimelineSelect = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-7xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #e3c767, #aa7d39)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Event Universe
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Navigate through our immersive event ecosystem
          </p>
        </motion.div>

        <div className="relative mb-16 h-[500px]">
          <AnimatePresence>
            <motion.div
              key="main-hero-static"
              className="absolute inset-0 bg-gray-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-700/50"
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

        <div className="text-center -mt-8 mb-16">
          <motion.button
            onClick={() => setSelectedSegment(mainHeroData)}
            className="text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
            style={{
              background: "linear-gradient(to right, #e3c767, #aa7d39)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More About Our Mission
          </motion.button>
        </div>

        <div className="relative h-96 mb-16" style={{ perspective: "1000px" }}>
          <button
            onClick={() => handleNavigation(-1)}
            className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm rounded-full p-4 text-white hover:bg-amber-600/20 transition-all duration-300 border border-gray-700/50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => handleNavigation(1)}
            className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gray-800/50 backdrop-blur-sm rounded-full p-4 text-white hover:bg-amber-600/20 transition-all duration-300 border border-gray-700/50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
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

        <Timeline
          segments={segmentsData}
          activeIndex={activeIndex}
          onSelect={handleTimelineSelect}
        />

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-3 text-gray-400">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: isAutoPlaying ? "#e3c767" : "#6B7280",
                boxShadow: isAutoPlaying
                  ? "0 0 15px rgba(227, 199, 103, 0.5)"
                  : "none",
              }}
              animate={isAutoPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>{isAutoPlaying ? "Auto-rotating" : "Manual control"}</span>
          </div>
        </div>
      </div>

      <SegmentModal
        segment={selectedSegment}
        onClose={() => setSelectedSegment(null)}
      />
    </div>
  );
};

export default Gallery;
