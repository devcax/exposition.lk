import React, { useState, useEffect } from 'react';
import { BookOpen, Mic, Briefcase, Users, Calendar, ArrowRight, Wrench, Building, Edit, FileText, Clock } from 'lucide-react';

const EventStructure = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  const categories = [
    {
      title: 'Exposition Magazine',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Our flagship publication showcasing academic excellence and innovation',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Research Articles',
        'Student Features',
        'Faculty Spotlights',
        'Innovation Stories'
      ]
    },
    {
      title: 'Interviews',
      icon: <Mic className="h-8 w-8" />,
      description: 'In-depth conversations with leading academics and industry experts',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Expert Interviews',
        'Research Discussions',
        'Industry Insights',
        'Student Voices'
      ]
    },
    {
      title: 'Workshops',
      icon: <Wrench className="h-8 w-8" />,
      description: 'Hands-on learning experiences and skill development sessions',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Skill Development',
        'Research Methods',
        'Professional Training',
        'Creative Workshops'
      ]
    },
    {
      title: 'Industrial Forum',
      icon: <Building className="h-8 w-8" />,
      description: 'Bridging academia and industry through collaborative events',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Industry Partnerships',
        'Technology Showcases',
        'Innovation Discussions',
        'Networking Events'
      ]
    },
    {
      title: 'Career Fair',
      icon: <Users className="h-8 w-8" />,
      description: 'Connecting students with leading employers and career opportunities',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Job Opportunities',
        'Internship Programs',
        'Company Presentations',
        'Resume Reviews'
      ]
    },
    {
      title: 'Edify',
      icon: <Edit className="h-8 w-8" />,
      description: 'Inter-university article competition fostering academic writing excellence',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Article Competition',
        'Academic Writing',
        'Inter-University',
        'Student Excellence'
      ]
    },
    {
      title: 'Blog',
      icon: <FileText className="h-8 w-8" />,
      description: 'Digital platform for sharing insights, stories, and academic content',
      color: 'from-[#aa7d39] to-[#e3c767]',
      bgColor: 'bg-[#aa7d39]/10',
      borderColor: 'border-[#aa7d39]/30',
      items: [
        'Digital Content',
        'Academic Insights',
        'Student Stories',
        'Research Updates'
      ]
    }
  ];

  const timelineEvents = [
    {
      month: 'August',
      title: 'Interview Start',
      description: 'Begin conducting interviews with industry experts and academics',
      icon: <Mic className="h-6 w-6" />,
      color: 'from-[#aa7d39] to-[#e3c767]',
      date: 'August 2024'
    },
    {
      month: 'September',
      title: 'Edify Competition',
      description: 'Inter-university article competition launches',
      icon: <Edit className="h-6 w-6" />,
      color: 'from-[#aa7d39] to-[#e3c767]',
      date: 'September 2024'
    },
    {
      month: 'December 14-21',
      title: 'Industrial Week',
      description: 'Career fair, workshops, and industry partnerships',
      icon: <Building className="h-6 w-6" />,
      color: 'from-[#aa7d39] to-[#e3c767]',
      date: 'December 14-21, 2024'
    },
    {
      month: 'December 21',
      title: 'Magazine Launch',
      description: 'Official launch of Exposition Magazine',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'from-[#aa7d39] to-[#e3c767]',
      date: 'December 21, 2024'
    }
  ];

  const featuredContent = [
    {
      title: 'Magazine',
      subtitle: 'Read More',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'magazine'
    },
    {
      title: 'Podcast',
      subtitle: 'Read More',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'podcast'
    },
    {
      title: 'Edify',
      subtitle: 'Read More',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'edify'
    },
    {
      title: 'Blog',
      subtitle: 'Read More',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'blog'
    },
    {
      title: 'Industrial Week',
      subtitle: 'Read More',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'industrial'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('.structure-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [categories.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineItem((prev) => (prev + 1) % timelineEvents.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [timelineEvents.length]);

  return (
    <section id="structure" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
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
            A comprehensive ecosystem of academic content, industry connections, and professional development opportunities
          </p>
        </div>

        {/* Event Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#aa7d39]/20 backdrop-blur-sm border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              <span>Event Timeline</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                2024-2025 Academic Year
              </span>
            </h3>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#aa7d39] via-[#e3c767] to-[#aa7d39] rounded-full transform -translate-y-1/2 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#e3c767] rounded-full animate-pulse opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-700 transform ${
                    activeTimelineItem === index ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="flex justify-center mb-4 md:mb-8">
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-500 ${
                      activeTimelineItem === index ? 'scale-125 shadow-2xl' : ''
                    }`}>
                      {event.icon}
                      <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-full animate-ping opacity-0 transition-opacity duration-500 ${
                        activeTimelineItem === index ? 'opacity-75' : ''
                      }`}></div>
                    </div>
                  </div>

                  {/* Event Card */}
                  <div className={`relative overflow-hidden backdrop-blur-xl border-2 rounded-2xl p-6 transition-all duration-500 ${
                    activeTimelineItem === index
                      ? `border-[#aa7d39] bg-[#aa7d39]/10 shadow-xl shadow-[#aa7d39]/20`
                      : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                  }`}>
                    <div className="text-center">
                      <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                        activeTimelineItem === index ? 'text-[#e3c767]' : 'text-white'
                      }`}>
                        {event.month}
                      </h4>
                      <h5 className="text-white font-semibold mb-2">{event.title}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <span className="text-xs text-gray-400 font-medium">
                        {event.date}
                      </span>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              onMouseEnter={() => setActiveCategory(index)}
              className={`relative px-5 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-black shadow-lg`
                  : 'bg-transparent text-gray-300 hover:text-white border border-gray-700/50 hover:border-[#aa7d39]/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`${activeCategory === index ? 'text-black' : 'text-[#e3c767]'}`}>
                  {category.icon}
                </div>
                <span className="text-sm">{category.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Details */}
        <div className="mb-20">
          <div className={`relative overflow-hidden backdrop-blur-xl border-2 rounded-3xl p-8 transition-all duration-500 ${
            categories[activeCategory].borderColor
          } ${categories[activeCategory].bgColor}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${categories[activeCategory].color} rounded-3xl text-white mb-6`}>
                {categories[activeCategory].icon}
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                {categories[activeCategory].title}
              </h3>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                {categories[activeCategory].description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories[activeCategory].items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${categories[activeCategory].color} rounded-full mr-3`}></div>
                    <span className="text-sm">{item}</span>
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
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
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

export default EventStructure;