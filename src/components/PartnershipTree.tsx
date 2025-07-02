import React from 'react';
import { Award, Gem, Star, Shield, Crown } from 'lucide-react';

const PartnershipTree = () => {
  const monetaryPartnerships = [
    {
      id: 'title',
      level: 'Title Partner',
      icon: <Crown className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-700',
      // Removed borderColor here to enforce gold border globally
      bgColor: 'bg-purple-500/10',
      investment: 'Rs 600,000',
      description:
        'Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives',
    },
    {
      id: 'platinum',
      level: 'Platinum',
      icon: <Gem className="h-8 w-8" />,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-400/10',
      investment: 'Rs 400,000',
      description: 'Premium partnership with extensive benefits and significant brand exposure',
    },
    {
      id: 'gold',
      level: 'Gold',
      icon: <Star className="h-8 w-8" />,
      color: 'from-[#f1b759] to-[#f1b759]',
      bgColor: 'bg-[#f1b759]/10',
      investment: 'Rs 300,000',
      description: 'Established partnership with significant engagement and meaningful collaboration',
    },
    {
      id: 'silver',
      level: 'Silver',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-gray-300 to-gray-500',
      bgColor: 'bg-gray-400/10',
      investment: 'Rs 150,000',
      description: 'Growing partnership with development potential and meaningful engagement opportunities',
    },
    {
      id: 'bronze',
      level: 'Bronze',
      icon: <Award className="h-8 w-8" />,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10',
      investment: 'Rs 100,000',
      description: 'Entry-level partnership with growth opportunities and community engagement',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#aa7d39]/20 backdrop-blur-sm border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-6">
            Partnership Ecosystem
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Partnerships
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {monetaryPartnerships.map((partnership, index) => (
            <div
              key={index}
              className="group relative overflow-hidden backdrop-blur-xl border-2 rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
              style={{
                minHeight: '240px',
                padding: '1.5rem',
                // Center only the 2nd row cards (index 3,4) on large screens (3 cols)
                justifySelf: index >= 3 ? 'center' : 'stretch',
                borderColor: '#f1b759', // Gold border for all cards
                backgroundColor: partnership.bgColor,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${partnership.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              ></div>
              <div className="relative z-10 text-center h-full flex flex-col justify-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${partnership.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
                >
                  {partnership.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#e3c767] transition-colors duration-300">
                  {partnership.level}
                </h4>
                <p className="text-[#e3c767] font-medium text-lg mb-4">{partnership.investment}</p>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{partnership.description}</p>
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${partnership.color} text-white rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-300 mx-auto`}
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipTree;
