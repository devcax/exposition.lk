import React, { useState, useEffect } from 'react';
import {
  Check,
  Star,
  Crown,
  Diamond,
  Shield,
  ArrowRight,
  Zap,
  Target,
  Award,
  Mail,
  Phone,
  Linkedin,
} from 'lucide-react';

const PartnershipPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState('title');
  const [visiblePackages, setVisiblePackages] = useState<number[]>([]);

  const packages = [
    {
      id: 'title',
      name: 'Title Partner',
      icon: <Crown className="h-10 w-10" />,
      price: 'Rs 600,000',
      period: '/year',
      description:
        'Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives',
      features: [
        'Company logo on all marketing materials',
        'Dedicated article in each magazine issue',
        'Speaking slot at all major events',
        'VIP access to exclusive networking events',
        'Custom content creation services',
        'Social media spotlight features',
        'Board meeting attendance rights',
        'Annual partnership review meeting',
        'Premium booth at career fairs',
        'Access to student recruitment database',
        'Research collaboration opportunities',
        'Media interview coordination',
      ],
      highlight: true,
      gradient: 'from-purple-500 to-purple-700',
      borderGradient: 'from-purple-500 to-purple-400',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      popular: true,
    },
    {
      id: 'platinum',
      name: 'Platinum Partner',
      icon: <Diamond className="h-10 w-10" />,
      price: 'Rs 400,000',
      period: '/year',
      description:
        'Premium partnership with extensive benefits and significant brand exposure',
      features: [
        'Logo placement on major materials',
        'Quarterly magazine features',
        'Event speaking opportunities',
        'Networking event invitations',
        'Research collaboration opportunities',
        'Media coverage in press releases',
        'Student internship program access',
        'Annual impact report inclusion',
        'Career fair participation',
        'Alumni network engagement',
      ],
      gradient: 'from-gray-400 to-gray-600',
      borderGradient: 'from-gray-400 to-gray-300',
      bgGradient: 'from-gray-400/10 to-gray-500/5',
    },
    {
      id: 'gold',
      name: 'Gold Partner',
      icon: <Star className="h-10 w-10" />,
      price: 'Rs 300,000',
      period: '/year',
      description:
        'Established partnership with significant engagement and meaningful collaboration',
      features: [
        'Brand visibility in publications',
        'Event participation opportunities',
        'Student program sponsorship',
        'Newsletter feature articles',
        'Career fair participation',
        'Alumni network access',
        'Social media mentions',
        'Quarterly progress updates',
        'Workshop hosting opportunities',
        'Student project partnerships',
      ],
      gradient: 'from-[#aa7d39] to-[#e3c767]',
      borderGradient: '', // Removed custom border color
      bgGradient: 'from-[#aa7d39]/10 to-[#e3c767]/5',
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      icon: <Shield className="h-10 w-10" />,
      price: 'Rs 150,000',
      period: '/year',
      description:
        'Growing partnership with development potential and meaningful engagement opportunities',
      features: [
        'Logo placement opportunities',
        'Event invitation privileges',
        'Internship program coordination',
        'Social media collaboration',
        'Student project sponsorship',
        'Newsletter mentions',
        'Basic networking access',
        'Annual summary report',
        'Community event participation',
        'Local media coverage',
      ],
      gradient: 'from-gray-300 to-gray-500',
      borderGradient: 'from-gray-400 to-gray-300',
      bgGradient: 'from-gray-400/10 to-gray-500/5',
    },
    {
      id: 'bronze',
      name: 'Bronze Partner',
      icon: <Award className="h-10 w-10" />,
      price: 'Rs 100,000',
      period: '/year',
      description:
        'Entry-level partnership with growth opportunities and community engagement',
      features: [
        'Community event participation',
        'Student project support',
        'Local visibility opportunities',
        'Volunteer program access',
        'Newsletter acknowledgments',
        'Basic social media mentions',
        'Annual appreciation certificate',
        'Networking event invitations',
        'Student mentorship programs',
        'Local media recognition',
      ],
      gradient: 'from-orange-400 to-orange-600',
      borderGradient: 'from-orange-500 to-orange-400',
      bgGradient: 'from-orange-500/10 to-orange-600/5',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePackages((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const packageElements = document.querySelectorAll('.package-card');
    packageElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Partnership Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              data-index={index}
              className={`package-card relative overflow-hidden rounded-3xl border-2 p-6 flex flex-col justify-between transition duration-700 backdrop-blur-xl cursor-pointer ${
                visiblePackages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                selectedPackage === pkg.id
                  ? 'border-[#aa7d39] shadow-xl scale-105'
                  : 'border-gray-700 hover:scale-105'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-white bg-gradient-to-br ${pkg.gradient}`}>{pkg.icon}</div>
                <h3 className="text-xl font-bold text-white text-center mb-2">{pkg.name}</h3>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-base"> {pkg.period}</span>
                </div>
                <p className="text-sm text-gray-300 text-center mb-4">{pkg.description}</p>
              </div>
              <ul className="text-sm text-gray-300 space-y-2 flex-grow">
                {pkg.features.slice(0, 8).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-[#e3c767] mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.features.length > 8 && (
                  <li className="italic text-xs text-gray-400">
                    +{pkg.features.length - 8} more benefits...
                  </li>
                )}
              </ul>
              <button
                className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm flex justify-center items-center gap-2 transition ${
                  selectedPackage === pkg.id
                    ? 'bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black'
                    : 'bg-gray-800 text-white border border-gray-600'
                }`}
              >
                {selectedPackage === pkg.id ? 'Selected Package' : 'Choose Package'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipPackages;
