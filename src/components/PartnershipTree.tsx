import React from 'react';
import { Award, Gem, Star, Shield, Crown } from 'lucide-react';

// Type for partnership objects
type Partnership = {
  id: string;
  level: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
  investment?: string;
  description: string;
};

// Props for the card component
interface PartnershipCardProps {
  partnership: Partnership;
  isLarge?: boolean;
}

// Card component
const PartnershipCard: React.FC<PartnershipCardProps> = ({ partnership, isLarge = false }) => (
  <div
    className="group relative overflow-hidden backdrop-blur-xl border-2 rounded-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
    style={{
      minHeight: isLarge ? '280px' : '220px',
      padding: '1.5rem',
      borderColor: '#f1b759',
      backgroundColor: partnership.bgColor,
    }}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${partnership.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
    <div className="relative z-10 text-center h-full flex flex-col justify-center">
      <div
        className={`inline-flex items-center justify-center ${isLarge ? 'w-20 h-20' : 'w-16 h-16'} bg-gradient-to-br ${partnership.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}
      >
        {partnership.icon}
      </div>
      <h4 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold text-white mb-3 group-hover:text-[#e3c767] transition-colors duration-300`}>
        {partnership.level}
      </h4>
      {partnership.investment && (
        <p className="text-[#e3c767] font-medium text-lg mb-4">{partnership.investment}</p>
      )}
      <p className="text-gray-300 text-sm leading-relaxed flex-grow">{partnership.description}</p>
    </div>
  </div>
);

const PartnershipTree: React.FC = () => {
  const monetaryPartnerships: Partnership[] = [
    {
      id: 'title',
      level: 'Title Partner',
      icon: <Crown className="h-8 w-8" />,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-500/10',
      investment: 'Rs 600,000',
      description: 'Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives',
    },
    {
      id: 'platinum',
      level: 'Platinum Partner',
      icon: <Gem className="h-8 w-8" />,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-400/10',
      investment: 'Rs 400,000',
      description: 'Premium partnership with extensive benefits and significant brand exposure',
    },
    {
      id: 'gold',
      level: 'Gold Partner',
      icon: <Star className="h-8 w-8" />,
      color: 'from-[#f1b759] to-[#f1b759]',
      bgColor: 'bg-[#f1b759]/10',
      investment: 'Rs 300,000',
      description: 'Established partnership with significant engagement and meaningful collaboration',
    },
    {
      id: 'silver',
      level: 'Silver Partner',
      icon: <Shield className="h-8 w-8" />,
      color: 'from-gray-300 to-gray-500',
      bgColor: 'bg-gray-400/10',
      investment: 'Rs 150,000',
      description: 'Growing partnership with development potential and meaningful engagement opportunities',
    },
    {
      id: 'bronze',
      level: 'Bronze Partner',
      icon: <Award className="h-8 w-8" />,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10',
      investment: 'Rs 100,000',
      description: 'Entry-level partnership with growth opportunities and community engagement',
    },
    {
      id: 'co',
      level: 'Co Partner',
      icon: <Star className="h-8 w-8" />,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/10',
      investment: 'Rs 50,000',
      description: 'Collaborative partnership with shared initiatives and mutual benefit opportunities',
    },
  ];

  const careerFairPartnerships: Partnership[] = [
    {
      id: 'premium',
      level: 'Premium Partner',
      icon: <Crown className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-500/10',
      investment: 'Rs 100,000',
      description: 'Premium booth placement, priority access to students, and enhanced visibility',
    },
    {
      id: 'standard',
      level: 'Standard Partner',
      icon: <Star className="h-6 w-6" />,
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-500/10',
      investment: 'Rs 50,000',
      description: 'Standard booth space, student interaction opportunities, and networking access',
    },
  ];

  const resourcePartnerships: Partnership[] = [
    {
      id: 'printing',
      level: 'Printing Partner',
      icon: <Award className="h-6 w-6" />,
      color: 'from-indigo-500 to-indigo-700',
      bgColor: 'bg-indigo-500/10',
      description: 'High-quality printing services for magazines and promotional materials',
    },
    {
      id: 'photography',
      level: 'Photography Partner',
      icon: <Gem className="h-6 w-6" />,
      color: 'from-pink-500 to-pink-700',
      bgColor: 'bg-pink-500/10',
      description: 'Professional photography coverage for events and content creation',
    },
    {
      id: 'digital',
      level: 'Digital Media Partner',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-500/10',
      description: 'Digital marketing, social media strategy, and content optimization',
    },
    {
      id: 'food',
      level: 'Food & Beverage Partner',
      icon: <Star className="h-6 w-6" />,
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-500/10',
      description: 'Catering services for events, workshops, and networking sessions',
    },
    {
      id: 'copartner',
      level: 'Co Partner',
      icon: <Crown className="h-6 w-6" />,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-500/10',
      description: 'Collaborative partnerships for mutual benefit and shared initiatives',
    },
  ];

  return (
    <section id='partnerships' className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Monetary Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e3c767]">
              Monetary Partners
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Strategic financial partnerships that drive innovation and growth across all university initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monetaryPartnerships.map((partnership) => (
              <PartnershipCard key={partnership.id} partnership={partnership} isLarge />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-[#f1b759] to-[#aa7d39] text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 text-lg">
              Read More About Monetary Partnerships
            </button>
          </div>
        </div>

        {/* Career Fair Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e3c767]">
              Career Fair Partners
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Connect with top talent through our comprehensive career fair partnership opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {careerFairPartnerships.map((partnership) => (
              <PartnershipCard key={partnership.id} partnership={partnership} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 text-lg">
              Read More About Career Fair Partnerships
            </button>
          </div>
        </div>

        {/* Resource Partners */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e3c767]">
              Resource Partners
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Essential service partnerships that support our operations and enhance student experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcePartnerships.map((partnership) => (
              <PartnershipCard key={partnership.id} partnership={partnership} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 text-lg">
              Read More About Resource Partnerships
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTree;
