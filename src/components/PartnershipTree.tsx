import React, { useState, useEffect } from 'react';
import { Building2, Users, Award, Globe, Target, Handshake, Crown, Star, Shield, Heart, Gem, Camera, Printer, Monitor, Coffee, Utensils, ArrowDown } from 'lucide-react';

const PartnershipTree = () => {
  const [activePartnership, setActivePartnership] = useState(0);
  const [selectedPartnership, setSelectedPartnership] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  // Monetary partnerships based on your hierarchy
  const monetaryPartnerships = [
    {
      id: 'title',
      level: 'Title Partner',
      icon: <Crown className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-700',
      borderColor: 'border-purple-500/50',
      bgColor: 'bg-purple-500/10',
      investment: 'Rs 600,000',
      position: 'top',
      description: 'Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives',
      benefits: [
        'Company logo on all marketing materials',
        'Dedicated article in each magazine issue',
        'Speaking slot at all major events',
        'VIP access to exclusive networking events',
        'Custom content creation services',
        'Social media spotlight features'
      ]
    },
    {
      id: 'platinum',
      level: 'Platinum',
      icon: <Gem className="h-8 w-8" />,
      color: 'from-gray-400 to-gray-600',
      borderColor: 'border-gray-400/50',
      bgColor: 'bg-gray-400/10',
      investment: 'Rs 400,000',
      position: 'left',
      description: 'Premium partnership with extensive benefits and significant brand exposure',
      benefits: [
        'Logo placement on major materials',
        'Quarterly magazine features',
        'Event speaking opportunities',
        'Networking event invitations',
        'Research collaboration opportunities',
        'Media coverage in press releases'
      ]
    },
    {
      id: 'gold',
      level: 'Gold',
      icon: <Star className="h-8 w-8" />,
      color: 'from-[#aa7d39] to-[#e3c767]',
      borderColor: 'border-[#aa7d39]/50',
      bgColor: 'bg-[#aa7d39]/10',
      investment: 'Rs 300,000',
      position: 'right',
      description: 'Established partnership with significant engagement and meaningful collaboration',
      benefits: [
        'Brand visibility in publications',
        'Event participation opportunities',
        'Student program sponsorship',
        'Newsletter feature articles',
        'Career fair participation',
        'Alumni network access'
      ]
    },
    {
      id: 'silver',
      level: 'Silver',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-gray-300 to-gray-500',
      borderColor: 'border-gray-400/50',
      bgColor: 'bg-gray-400/10',
      investment: 'Rs 150,000',
      position: 'left',
      description: 'Growing partnership with development potential and meaningful engagement opportunities',
      benefits: [
        'Logo placement opportunities',
        'Event invitation privileges',
        'Internship program coordination',
        'Social media collaboration',
        'Student project sponsorship',
        'Newsletter mentions'
      ]
    },
    {
      id: 'bronze',
      level: 'Bronze',
      icon: <Award className="h-8 w-8" />,
      color: 'from-orange-400 to-orange-600',
      borderColor: 'border-orange-500/50',
      bgColor: 'bg-orange-500/10',
      investment: 'Rs 100,000',
      position: 'right',
      description: 'Entry-level partnership with growth opportunities and community engagement',
      benefits: [
        'Community event participation',
        'Student project support',
        'Local visibility opportunities',
        'Volunteer program access',
        'Newsletter acknowledgments',
        'Basic social media mentions'
      ]
    }
  ];

  // Resource partnerships
  const resourcePartnerships = [
    {
      name: 'Printing Partner',
      icon: <Printer className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-700',
      description: 'High-quality printing services for magazines and promotional materials'
    },
    {
      name: 'Photography Partner',
      icon: <Camera className="h-6 w-6" />,
      color: 'from-pink-500 to-pink-700',
      description: 'Professional photography coverage for events and content creation'
    },
    {
      name: 'Digital Media Partner',
      icon: <Monitor className="h-6 w-6" />,
      color: 'from-cyan-500 to-cyan-700',
      description: 'Digital marketing, social media management, and online presence'
    },
    {
      name: 'Food & Beverage Partner',
      icon: <Coffee className="h-6 w-6" />,
      color: 'from-red-500 to-red-700',
      description: 'Catering services for events, workshops, and networking sessions'
    },
    {
      name: 'Co Partner',
      icon: <Handshake className="h-6 w-6" />,
      color: 'from-teal-500 to-teal-700',
      description: 'Collaborative partnerships for mutual benefit and shared initiatives'
    }
  ];

  // Career fair partnerships
  const careerFairPartnerships = [
    {
      name: 'Premium Partner',
      investment: 'Rs 100,000',
      color: 'from-violet-500 to-violet-700',
      description: 'Premium booth placement, priority access to students, and enhanced visibility'
    },
    {
      name: 'Standard Partner',
      investment: 'Rs 50,000',
      color: 'from-blue-500 to-blue-700',
      description: 'Standard booth space, student interaction opportunities, and networking access'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('.partnership-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartnership((prev) => (prev + 1) % monetaryPartnerships.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [monetaryPartnerships.length]);

  const scrollToPartnershipPackages = () => {
    const element = document.querySelector('#partnership-packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContactSection = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="partnerships" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#aa7d39]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#aa7d39]/20 backdrop-blur-sm border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-6">
            Partnership Ecosystem
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Partnerships
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building meaningful relationships across different levels of engagement, fostering innovation and mutual growth
          </p>
        </div>

        {/* Monetary Partnerships Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">
              Monetary Partners
            </span>
          </h3>
          
          {/* Hierarchy Tree Structure */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Trunk */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#aa7d39] via-[#e3c767] to-[#aa7d39] rounded-full hidden lg:block">
              <div className="absolute inset-0 bg-[#e3c767] rounded-full animate-pulse opacity-50"></div>
            </div>
            
            <div className="space-y-16">
              {monetaryPartnerships.map((partnership, index) => (
                <div
                  key={index}
                  data-index={index}
                  className={`partnership-item flex items-center transition-all duration-700 ${
                    partnership.position === 'left' ? 'lg:flex-row' : 
                    partnership.position === 'right' ? 'lg:flex-row-reverse' : 
                    'lg:justify-center'
                  } flex-col lg:flex-row ${
                    visibleItems.includes(index) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {partnership.position !== 'top' && <div className="w-full lg:w-5/12"></div>}
                  
                  {/* Connection Point */}
                  <div className="w-full lg:w-2/12 flex justify-center mb-4 lg:mb-0">
                    <div className={`relative w-6 h-6 rounded-full border-4 border-black z-10 transition-all duration-500 ${
                      activePartnership === index 
                        ? `bg-gradient-to-r ${partnership.color} shadow-lg scale-125` 
                        : 'bg-gray-600'
                    } hidden lg:block`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${partnership.color} rounded-full animate-ping opacity-0 transition-opacity duration-500 ${
                        activePartnership === index ? 'opacity-75' : ''
                      }`}></div>
                    </div>
                  </div>
                  
                  <div className={`w-full ${partnership.position === 'top' ? 'lg:w-6/12' : 'lg:w-5/12'} ${
                    partnership.position === 'left' ? 'lg:pr-8' : partnership.position === 'right' ? 'lg:pl-8' : ''
                  }`}>
                    <div className={`group relative overflow-hidden backdrop-blur-xl border-2 rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                      activePartnership === index 
                        ? `${partnership.borderColor} ${partnership.bgColor} shadow-xl` 
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                    }`}
                    onClick={scrollToPartnershipPackages}
                    style={{ 
                      minHeight: partnership.position === 'top' ? '280px' : '240px',
                      padding: partnership.position === 'top' ? '2rem' : '1.5rem'
                    }}
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${partnership.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      <div className="relative z-10 text-center h-full flex flex-col justify-center">
                        <div className={`inline-flex items-center justify-center ${partnership.position === 'top' ? 'w-24 h-24' : 'w-20 h-20'} bg-gradient-to-br ${partnership.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                          {partnership.icon}
                        </div>
                        
                        <h4 className={`${partnership.position === 'top' ? 'text-2xl' : 'text-xl'} font-bold text-white mb-3 group-hover:text-[#e3c767] transition-colors duration-300`}>
                          {partnership.level}
                        </h4>
                        
                        <p className={`text-[#e3c767] font-medium ${partnership.position === 'top' ? 'text-xl' : 'text-lg'} mb-4`}>{partnership.investment}</p>
                        
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                          {partnership.description}
                        </p>
                        
                        <button className={`px-6 py-3 bg-gradient-to-r ${partnership.color} text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-300 mx-auto`}>
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resource Partnerships Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              Resource Partners
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            {resourcePartnerships.map((partner, index) => (
              <div key={index} className="group text-center">
                <div className={`relative overflow-hidden bg-gradient-to-br ${partner.color} rounded-2xl p-6 mb-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl h-32 flex flex-col justify-center`}>
                  <div className="flex items-center justify-center text-white mb-2">
                    {partner.icon}
                  </div>
                  <h4 className="text-white font-medium text-sm">
                    {partner.name}
                  </h4>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={scrollToContactSection}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              Read More About Resource Partnerships
            </button>
          </div>
        </div>

        {/* Career Fair Partners Section */}
        <div className="text-center mb-20">
          <h3 className="text-3xl font-bold mb-12">
            <span className="bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent">
              Career Fair Partners
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            {careerFairPartnerships.map((partner, index) => (
              <div key={index} className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 transform hover:scale-105 h-64 flex flex-col justify-between">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${partner.color} opacity-10 rounded-full blur-2xl`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl text-white mb-4`}>
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{partner.name}</h4>
                  <p className="text-[#e3c767] font-medium mb-4">{partner.investment}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={scrollToContactSection}
              className="px-6 py-3 bg-gradient-to-r from-violet-500 to-violet-700 text-white rounded-lg font-medium hover:scale-105 transition-transform duration-300"
            >
              Read More About Career Fair Partnerships
            </button>
          </div>
        </div>

        {/* Partnership Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '35+', label: 'Active Partners' },
            { number: 'Rs 2.5M+', label: 'Total Investment' },
            { number: '150+', label: 'Joint Projects' },
            { number: '95%', label: 'Renewal Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipTree;