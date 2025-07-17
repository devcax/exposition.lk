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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#aa7d39]/20 to-[#e3c767]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Partnership <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">Packages</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect partnership level that aligns with your organization's goals and investment capacity
          </p>
        </div>

        {/* Featured Package - Title Partner */}
        <div className="mb-16">
          {packages.filter(pkg => pkg.id === 'title').map((pkg, index) => (
            <div
              key={pkg.id}
              data-index={index}
              className={`package-card relative overflow-hidden rounded-3xl border-2 p-8 transition duration-700 backdrop-blur-xl cursor-pointer mx-auto max-w-4xl ${
                visiblePackages.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                selectedPackage === pkg.id
                  ? 'border-[#aa7d39] shadow-2xl shadow-[#aa7d39]/20'
                  : 'border-gray-700 hover:border-[#aa7d39]/50'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  MOST POPULAR
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-6 text-white bg-gradient-to-br ${pkg.gradient} mx-auto md:mx-0`}>
                    {pkg.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400 text-lg">{pkg.period}</span>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">{pkg.description}</p>
                  <button
                    className={`px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition mx-auto md:mx-0 ${
                      selectedPackage === pkg.id
                        ? 'bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-lg'
                        : 'bg-gray-800 text-white border border-gray-600 hover:border-[#aa7d39]'
                    }`}
                  >
                    {selectedPackage === pkg.id ? 'Selected Package' : 'Choose Package'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="bg-gray-800/50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {pkg.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#aa7d39] to-[#e3c767] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-black" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    <div className="text-center pt-2">
                      <span className="text-[#e3c767] text-sm font-medium">
                        +{pkg.features.length - 6} additional premium benefits
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.filter(pkg => pkg.id !== 'title').map((pkg, index) => (
            <div
              key={pkg.id}
              data-index={index + 1}
              className={`package-card relative overflow-hidden rounded-2xl border-2 p-6 flex flex-col transition duration-700 backdrop-blur-xl cursor-pointer h-full ${
                visiblePackages.includes(index + 1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${
                selectedPackage === pkg.id
                  ? 'border-[#aa7d39] shadow-xl shadow-[#aa7d39]/10 transform scale-105'
                  : 'border-gray-700 hover:border-gray-600 hover:transform hover:scale-105'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-white bg-gradient-to-br ${pkg.gradient} mx-auto`}>
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-sm">{pkg.period}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{pkg.description}</p>
              </div>

              <div className="flex-grow">
                <div className="space-y-3">
                  {pkg.features.slice(0, 5).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#e3c767] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {pkg.features.length > 5 && (
                    <div className="text-center pt-2">
                      <span className="text-[#e3c767] text-xs font-medium">
                        +{pkg.features.length - 5} more benefits
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <button
                className={`mt-6 w-full py-3 rounded-xl font-semibold text-sm flex justify-center items-center gap-2 transition ${
                  selectedPackage === pkg.id
                    ? 'bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black'
                    : 'bg-gray-800 text-white border border-gray-600 hover:border-gray-500'
                }`}
              >
                {selectedPackage === pkg.id ? 'Selected' : 'Choose Plan'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Partnership?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We understand that every organization has unique needs. Let's discuss a tailored partnership that perfectly aligns with your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:partnerships@exposition.lk" className="flex items-center gap-2 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <a href="tel:+94123456789" className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </
};

export default PartnershipPackages;
