import React, { useState, useEffect } from 'react';
import { Check, Star, Crown, Diamond, Shield, ArrowRight, Zap, Target, Award, Users, Mail, Phone, Linkedin } from 'lucide-react';

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
      description: 'Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives',
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
      description: 'Premium partnership with extensive benefits and significant brand exposure',
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
      description: 'Established partnership with significant engagement and meaningful collaboration',
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
      borderGradient: 'from-[#aa7d39] to-[#e3c767]',
      bgGradient: 'from-[#aa7d39]/10 to-[#e3c767]/5',
    },
    {
      id: 'silver',
      name: 'Silver Partner',
      icon: <Shield className="h-10 w-10" />,
      price: 'Rs 150,000',
      period: '/year',
      description: 'Growing partnership with development potential and meaningful engagement opportunities',
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
      description: 'Entry-level partnership with growth opportunities and community engagement',
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

  // Partnership team members from the image
  const teamMembers = [
    {
      name: 'Lavindu Binuwara',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'lavindubinuwara1@gmail.com',
      phone: '+94 71 684 6120',
      linkedin: 'Linkedin - Lavindu Binuwara'
    },
    {
      name: 'Hashani Uduwage',
      role: 'Editor-in-Chief',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'uduwageh@gmail.com',
      phone: '+94 77 247 4149',
      linkedin: 'Linkedin - Hashani Uduwage'
    },
    {
      name: 'Akila Benaragama',
      role: 'Partnership Coordinator',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'akilabenaragama@gmail.com',
      phone: '+94 77 582 6664',
      linkedin: 'Linkedin - Akila Benaragama'
    },
    {
      name: 'Nevindi Munasinghe',
      role: 'Partnership Coordinator',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      email: 'nevindimunasinghe@gmail.com',
      phone: '071 684 6120',
      linkedin: 'Linkedin - Nevindi Munasinghe'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisiblePackages(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const packageElements = document.querySelectorAll('.package-card');
    packageElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partnership-packages" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#aa7d39]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-[#aa7d39]/20 backdrop-blur-sm border border-[#aa7d39]/30 rounded-full text-[#e3c767] text-sm font-medium mb-6">
            Partnership Investment
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Partnership Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the partnership level that aligns with your organization's goals, budget, and desired impact within our academic community
          </p>
        </div>

        {/* Package Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              data-index={index}
              className={`package-card group relative overflow-hidden backdrop-blur-xl border-2 rounded-3xl transition-all duration-700 transform cursor-pointer ${
                visiblePackages.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } ${
                selectedPackage === pkg.id
                  ? `border-[#aa7d39] shadow-2xl shadow-[#aa7d39]/20 scale-105`
                  : 'border-gray-700/50 hover:border-gray-600/50 hover:scale-105'
              } ${pkg.highlight ? 'lg:scale-110' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                minHeight: '700px'
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Zap className="inline h-4 w-4 mr-1" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className={`relative p-6 h-full flex flex-col ${pkg.popular ? 'pt-12' : ''}`}>
                {/* Icon */}
                <div className={`relative mb-6 w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-3xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {pkg.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Package Name */}
                <h3 className="text-xl font-bold text-white text-center mb-4 group-hover:text-[#e3c767] transition-colors duration-300">
                  {pkg.name}
                </h3>
                
                {/* Price */}
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-base">{pkg.period}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-center mb-6 text-sm leading-relaxed">
                  {pkg.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.features.slice(0, 8).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-[#e3c767] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-xs leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 8 && (
                    <li className="text-gray-400 text-xs italic">
                      +{pkg.features.length - 8} more benefits...
                    </li>
                  )}
                </ul>
                
                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mt-auto ${
                    selectedPackage === pkg.id
                      ? 'bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black hover:from-[#e3c767] hover:to-[#aa7d39] shadow-lg shadow-[#aa7d39]/25'
                      : 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-600/50'
                  }`}
                >
                  <span className="text-sm">{selectedPackage === pkg.id ? 'Selected Package' : 'Choose Package'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-500 transform translate-x-16 -translate-y-16`}></div>
            </div>
          ))}
        </div>

        {/* Selected Package Comprehensive Overview */}
        {selectedPackage && (
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-[#aa7d39]/20 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {packages.find(p => p.id === selectedPackage)?.name} Details
                </h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Comprehensive overview of benefits and opportunities included in your selected partnership package
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Target className="h-12 w-12 text-[#e3c767] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Strategic Impact</h4>
                  <p className="text-gray-300 text-sm">Maximum visibility and brand recognition across all university channels</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-[#e3c767] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Exclusive Access</h4>
                  <p className="text-gray-300 text-sm">Priority access to events, networking opportunities, and collaboration projects</p>
                </div>
                <div className="text-center">
                  <Star className="h-12 w-12 text-[#e3c767] mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Measurable ROI</h4>
                  <p className="text-gray-300 text-sm">Detailed analytics and reporting on partnership impact and engagement metrics</p>
                </div>
              </div>

              {/* Detailed Benefits from Image 3 */}
              <div className="bg-gray-900/50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 text-center">
                  Recognition as "Official Title Partner" for Exposition Issue 21, Edify and Industrial Week 2025/26
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-semibold text-[#e3c767] mb-3">Industrial Week & Career Fair 2025/26</h5>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Featuring the company logo on all event materials, including banners, interactive sessions, and promotional items throughout Industrial Week and the Career Fair</li>
                      <li>• Opportunity to conduct sessions or promotional activities throughout the day, offering extensive engagement without time limitations</li>
                      <li>• A prime location booth at the Career Fair, ensuring maximum visibility and engagement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-[#e3c767] mb-3">Exposition Magazine Launching Ceremony</h5>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Opportunity to deliver a speech for a total time duration of 10 minutes</li>
                      <li>• Display a promotional video during the event for a total duration of 5 minutes</li>
                      <li>• Privilege to display 8 banners at the event venue to enhance brand visibility</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <h5 className="text-lg font-semibold text-[#e3c767] mb-3">Exposition Magazine</h5>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• A full-page advertisement on the magazine's back cover, which offers the highest visibility</li>
                      <li>• Featuring the company logo in the designated "Partnerships" section of the magazine</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-[#e3c767] mb-3">Exposition Website</h5>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• The company logo will be displayed in the partnerships' corner of the Exposition website for one year</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-[#e3c767] mb-3">Edify Blog</h5>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• The company logo will be displayed in the partnerships' corner of the blog footer</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-[#e3c767] mb-3">Podcast Series</h5>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Company recognition and branding integration throughout the podcast series</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Partnership Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                Partnership Team
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet our dedicated partnership team who will work closely with you to ensure your partnership goals are achieved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-[#aa7d39]/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-[#aa7d39]/30 group-hover:border-[#e3c767]/50 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#e3c767] transition-colors duration-300">
                    {member.name}
                  </h4>
                  
                  <p className="text-[#e3c767] text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
                      <Mail className="h-3 w-3" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
                      <Phone className="h-3 w-3" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-300 text-xs">
                      <Linkedin className="h-3 w-3" />
                      <span>{member.linkedin}</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-[#aa7d39]/20 rounded-3xl p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#aa7d39]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                  Ready to Partner With Us?
                </span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss how we can create a customized partnership that delivers exceptional value for your organization and our university community
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#aa7d39] to-[#e3c767] hover:from-[#e3c767] hover:to-[#aa7d39] text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#aa7d39]/25">
                  <div className="flex items-center space-x-3">
                    <span>Contact Partnership Team</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </button>
                <button className="group relative overflow-hidden border-2 border-[#aa7d39]/50 hover:border-[#e3c767] text-white hover:text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="relative z-10">Download Partnership Guide</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPackages;