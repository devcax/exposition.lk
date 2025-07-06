import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Gem, Star, Shield, Crown, ChevronRight } from 'lucide-react';

type Partnership = {
  id: string;
  level: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
  investment?: string;
  description: string;
};

interface PartnershipCardProps {
  partnership: Partnership;
  isLarge?: boolean;
}

const PartnershipCard: React.FC<PartnershipCardProps> = ({ partnership, isLarge = false }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="group relative overflow-hidden backdrop-blur-xl border-2 rounded-2xl transition-all transform hover:scale-105 cursor-pointer"
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
  </motion.div>
);

const PartnershipTree: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'monetary' | 'career' | 'resource'>('monetary');

  const categories = [
    { label: 'Monetary Partners', key: 'monetary' },
    { label: 'Career Fair Partners', key: 'career' },
    { label: 'Resource Partners', key: 'resource' },
  ] as const;

  const partnerships: Record<typeof activeTab, Partnership[]> = {
    monetary: [
      {
        id: 'title',
        level: 'Title Partner',
        icon: <Crown className="h-8 w-8" />,
        color: 'from-purple-500 to-purple-700',
        bgColor: 'rgba(147, 51, 234, 0.1)',
        investment: 'Rs 600,000',
        description: 'Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives',
      },
      {
        id: 'platinum',
        level: 'Platinum Partner',
        icon: <Gem className="h-8 w-8" />,
        color: 'from-gray-400 to-gray-600',
        bgColor: 'rgba(156, 163, 175, 0.1)',
        investment: 'Rs 400,000',
        description: 'Premium partnership with extensive benefits and significant brand exposure',
      },
      {
        id: 'gold',
        level: 'Gold Partner',
        icon: <Star className="h-8 w-8" />,
        color: 'from-[#f1b759] to-[#f1b759]',
        bgColor: 'rgba(241, 183, 89, 0.1)',
        investment: 'Rs 300,000',
        description: 'Established partnership with significant engagement and meaningful collaboration',
      },
      {
        id: 'silver',
        level: 'Silver Partner',
        icon: <Shield className="h-8 w-8" />,
        color: 'from-gray-300 to-gray-500',
        bgColor: 'rgba(156, 163, 175, 0.1)',
        investment: 'Rs 150,000',
        description: 'Growing partnership with development potential and meaningful engagement opportunities',
      },
      {
        id: 'bronze',
        level: 'Bronze Partner',
        icon: <Award className="h-8 w-8" />,
        color: 'from-orange-400 to-orange-600',
        bgColor: 'rgba(249, 115, 22, 0.1)',
        investment: 'Rs 100,000',
        description: 'Entry-level partnership with growth opportunities and community engagement',
      },
      {
        id: 'co',
        level: 'Co Partner',
        icon: <Star className="h-8 w-8" />,
        color: 'from-green-400 to-green-600',
        bgColor: 'rgba(34, 197, 94, 0.1)',
        investment: 'Rs 50,000',
        description: 'Collaborative partnership with shared initiatives and mutual benefit opportunities',
      },
    ],
    career: [
      {
        id: 'premium',
        level: 'Premium Partner',
        icon: <Crown className="h-6 w-6" />,
        color: 'from-purple-500 to-purple-700',
        bgColor: 'rgba(147, 51, 234, 0.1)',
        investment: 'Rs 100,000',
        description: 'Premium booth placement, priority access to students, and enhanced visibility',
      },
      {
        id: 'standard',
        level: 'Standard Partner',
        icon: <Star className="h-6 w-6" />,
        color: 'from-blue-500 to-blue-700',
        bgColor: 'rgba(59, 130, 246, 0.1)',
        investment: 'Rs 50,000',
        description: 'Standard booth space, student interaction opportunities, and networking access',
      },
    ],
    resource: [
      {
        id: 'printing',
        level: 'Printing Partner',
        icon: <Award className="h-6 w-6" />,
        color: 'from-indigo-500 to-indigo-700',
        bgColor: 'rgba(99, 102, 241, 0.1)',
        description: 'High-quality printing services for magazines and promotional materials',
      },
      {
        id: 'photography',
        level: 'Photography Partner',
        icon: <Gem className="h-6 w-6" />,
        color: 'from-pink-500 to-pink-700',
        bgColor: 'rgba(236, 72, 153, 0.1)',
        description: 'Professional photography coverage for events and content creation',
      },
      {
        id: 'digital',
        level: 'Digital Media Partner',
        icon: <Shield className="h-6 w-6" />,
        color: 'from-cyan-500 to-cyan-700',
        bgColor: 'rgba(6, 182, 212, 0.1)',
        description: 'Digital marketing, social media strategy, and content optimization',
      },
      {
        id: 'food',
        level: 'Food & Beverage Partner',
        icon: <Star className="h-6 w-6" />,
        color: 'from-red-500 to-red-700',
        bgColor: 'rgba(239, 68, 68, 0.1)',
        description: 'Catering services for events, workshops, and networking sessions',
      },
      {
        id: 'copartner',
        level: 'Co Partner',
        icon: <Crown className="h-6 w-6" />,
        color: 'from-green-500 to-green-700',
        bgColor: 'rgba(34, 197, 94, 0.1)',
        description: 'Collaborative partnerships for mutual benefit and shared initiatives',
      },
    ],
  };

  const handleReadMore = (categoryKey: typeof activeTab) => {
    alert(`Read more about ${categoryKey} partners!`);
  };

  return (
    <section id="partnerships" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#aa7d39]/20 border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-6">
            Partnership Ecosystem
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
            Partnerships
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === cat.key
                  ? 'bg-[#e3c767] text-black shadow-lg'
                  : 'bg-white/10 text-white hover:bg-[#e3c767]/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards & Read More */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-8">
              {partnerships[activeTab].map((p) => (
                <PartnershipCard key={p.id} partnership={p} isLarge />
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => handleReadMore(activeTab)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black font-semibold shadow-lg hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#e3c767]/50"
              >
                Read More
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PartnershipTree;
