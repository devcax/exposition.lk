import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Mic,
  Briefcase,
  Users,
  Calendar,
  ArrowRight,
  Wrench,
  Building,
  Edit,
  FileText,
  Clock,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import edify from "/assets/Event Structure/edify.jpg";
import interviews from "/assets/Event Structure/Interviews.jpg";
import workshops from "/assets/Event Structure/Workshops.jpg";
import industrialWeek from "/assets/Event Structure/Industrial Week.jpg";
import magazine from "/assets/Event Structure/magazine.jpg";
import industrialForum from "/assets/Event Structure/industrial forum.jpg";



const EventStructure = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedNodes, setExpandedNodes] = useState<number[]>([0, 1, 2]);

  const treeStructure = [
    {
      id: 0,
      title: "Academic Publications",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Research and editorial content",
      color: "from-[#aa7d39] to-[#e3c767]",
      bgColor: "bg-[#aa7d39]/10",
      borderColor: "border-[#aa7d39]/30",
      children: [
        {
          title: "Exposition Magazine",
          icon: <BookOpen className="h-5 w-5" />,
          description:
            "Our flagship publication showcasing academic excellence",
          items: [
            "Research Articles",
            "Student Features",
            "Faculty Spotlights",
            "Innovation Stories",
          ],
        },
        {
          title: "Blog",
          icon: <FileText className="h-5 w-5" />,
          description: "Digital platform for insights and academic content",
          items: [
            "Digital Content",
            "Academic Insights",
            "Student Stories",
            "Research Updates",
          ],
        },
        {
          title: "Edify Competition",
          icon: <Edit className="h-5 w-5" />,
          description: "Inter-university article competition",
          items: [
            "Article Competition",
            "Academic Writing",
            "Inter-University",
            "Student Excellence",
          ],
        },
      ],
    },
    {
      id: 1,
      title: "Interactive Content",
      icon: <Mic className="h-6 w-6" />,
      description: "Engaging multimedia experiences",
      color: "from-[#aa7d39] to-[#e3c767]",
      bgColor: "bg-[#aa7d39]/10",
      borderColor: "border-[#aa7d39]/30",
      children: [
        {
          title: "Interviews",
          icon: <Mic className="h-5 w-5" />,
          description: "In-depth conversations with experts",
          items: [
            "Expert Interviews",
            "Research Discussions",
            "Industry Insights",
            "Student Voices",
          ],
        },
        {
          title: "Workshops",
          icon: <Wrench className="h-5 w-5" />,
          description: "Hands-on learning experiences",
          items: [
            "Skill Development",
            "Research Methods",
            "Professional Training",
            "Creative Workshops",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Professional Development",
      icon: <Users className="h-6 w-6" />,
      description: "Career and industry connections",
      color: "from-[#aa7d39] to-[#e3c767]",
      bgColor: "bg-[#aa7d39]/10",
      borderColor: "border-[#aa7d39]/30",
      children: [
        {
          title: "Industrial Forum",
          icon: <Building className="h-5 w-5" />,
          description: "Bridging academia and industry",
          items: [
            "Industry Partnerships",
            "Technology Showcases",
            "Innovation Discussions",
            "Networking Events",
          ],
        },
        {
          title: "Career Fair",
          icon: <Users className="h-5 w-5" />,
          description: "Connecting students with employers",
          items: [
            "Job Opportunities",
            "Internship Programs",
            "Company Presentations",
            "Resume Reviews",
          ],
        },
      ],
    },
  ];

  const featuredContent = [
    {
      title: "Magazine",
      subtitle: "Read More",
      image: ma
      category: "magazine",
    },
    {
      title: "Podcast",
      subtitle: "Read More",
      image:
        interviews
      category: "podcast",
    },
    {
      title: "Edify",
      subtitle: "Read More",
      image:
       edify
      category: "edify",
    },
    {
      title: "Industrial Forum",
      subtitle: "Read More",
      image:
        industrialForum
      category: "blog",
    },
    {
      title: "Industrial Week",
      subtitle: "Read More",
      image:
        "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "industrial",
    },
  ];

  const toggleNode = (nodeId: number) => {
    setExpandedNodes((prev) =>
      prev.includes(nodeId)
        ? prev.filter((id) => id !== nodeId)
        : [...prev, nodeId]
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".structure-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="structure"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#aa7d39]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#aa7d39]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#aa7d39]/20 backdrop-blur-sm border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-6">
            Event Structure
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Exposition Structure
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive ecosystem of academic content, industry connections,
            and professional development opportunities
          </p>
        </div>

        {/* Tree Structure Navigation */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Academic Structure
                </h3>
                <p className="text-gray-400">
                  Explore our comprehensive event categories
                </p>
              </div>

              {/* Tree Navigation */}
              <div className="space-y-4">
                {treeStructure.map((node, nodeIndex) => (
                  <div key={node.id} className="relative">
                    {/* Parent Node */}
                    <div
                      className={`flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#aa7d39]/10 ${
                        expandedNodes.includes(node.id)
                          ? "bg-[#aa7d39]/10 border border-[#aa7d39]/30"
                          : "bg-gray-800/30 border border-gray-700/30"
                      }`}
                      onClick={() => toggleNode(node.id)}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${node.color} rounded-xl flex items-center justify-center text-white`}
                        >
                          {node.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">
                            {node.title}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {node.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-[#e3c767]">
                        {expandedNodes.includes(node.id) ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )}
                      </div>
                    </div>

                    {/* Child Nodes */}
                    {expandedNodes.includes(node.id) && (
                      <div className="ml-8 mt-4 space-y-3">
                        {node.children.map((child, childIndex) => (
                          <div
                            key={childIndex}
                            className="relative pl-6 border-l-2 border-[#aa7d39]/30"
                          >
                            {/* Connection Line */}
                            <div className="absolute -left-2 top-6 w-4 h-px bg-[#aa7d39]/30"></div>

                            <div className="bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl p-4 hover:border-[#aa7d39]/30 transition-all duration-300">
                              <div className="flex items-start space-x-3">
                                <div
                                  className={`w-8 h-8 bg-gradient-to-br ${node.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                                >
                                  {child.icon}
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-semibold text-white mb-2">
                                    {child.title}
                                  </h5>
                                  <p className="text-sm text-gray-400 mb-3">
                                    {child.description}
                                  </p>
                                  <div className="grid grid-cols-2 gap-2 text-xs">
                                    {child.items.map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="flex items-center text-gray-300"
                                      >
                                        <div
                                          className={`w-1.5 h-1.5 bg-gradient-to-r ${node.color} rounded-full mr-2`}
                                        ></div>
                                        <span>{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              data-index={index}
              className={`structure-card group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } hover:scale-105`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-3xl h-80">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{content.title}</h3>
                    <div className="flex items-center text-[#e3c767] font-medium group-hover:text-[#aa7d39] transition-colors duration-300">
                      <span>{content.subtitle}</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#aa7d39]/50 rounded-3xl transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
  const relativeIndex = index - activeIndex;
  const angleStep = (2 * Math.PI) / totalCards;
  const angle = relativeIndex * angleStep;

  const radius = 400;
  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius - radius;
  const rotateY = (angle * 180) / Math.PI;

  const distanceFromCenter = Math.abs(relativeIndex);
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
        opacity: isActive ? 1 : opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      onClick={onClick}
    >
      <div className="w-full h-full bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50">
        <div className="relative h-52 overflow-hidden">
          <motion.img
            src={segment.imageUrl}
            alt={segment.title}
            className="w-full h-full object-cover rounded-t-2xl"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <div className="p-6 flex flex-col justify-between h-52">
          <div>
            <h3
              className="text-lg font-bold mb-3 text-white line-clamp-2"
              style={{ WebkitLineClamp: 2, overflow: "hidden" }}
            >
              {segment.title}
            </h3>
            <p className="text-sm text-gray-400 line-clamp-3">
              {segment.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              {segment.date} • {segment.category}
            </div>
            <button
              onClick={onReadMore}
              className="text-xs font-semibold text-[#aa7d39] hover:underline"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventStructure;
