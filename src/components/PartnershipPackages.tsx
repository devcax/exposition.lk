import React, { useState, useEffect } from "react";
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
} from "lucide-react";

const packagesData = {
  monetary: [
    {
      id: "title",
      name: "Title Partner",
      icon: <Crown className="h-10 w-10" />,
      price: "Rs 600,000",
      period: "/year",
      description:
        "Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives",
      features: [
        "Company logo on all marketing materials",
        "Dedicated article in each magazine issue",
        "Speaking slot at all major events",
        "VIP access to exclusive networking events",
        "Custom content creation services",
        "Social media spotlight features",
        "Board meeting attendance rights",
        "Annual partnership review meeting",
        "Premium booth at career fairs",
        "Access to student recruitment database",
        "Research collaboration opportunities",
        "Media interview coordination",
      ],
      highlight: true,
      gradient: "from-purple-500 to-purple-700",
      popular: true,
    },
    {
      id: "platinum",
      name: "Platinum Partner",
      icon: <Diamond className="h-10 w-10" />,
      price: "Rs 400,000",
      period: "/year",
      description:
        "Premium partnership with extensive benefits and significant brand exposure",
      features: [
        "Logo placement on major materials",
        "Quarterly magazine features",
        "Event speaking opportunities",
        "Networking event invitations",
        "Research collaboration opportunities",
        "Media coverage in press releases",
        "Student internship program access",
        "Annual impact report inclusion",
        "Career fair participation",
        "Alumni network engagement",
      ],
      gradient: "from-gray-400 to-gray-600",
    },
    {
      id: "gold",
      name: "Gold Partner",
      icon: <Star className="h-10 w-10" />,
      price: "Rs 300,000",
      period: "/year",
      description:
        "Established partnership with significant engagement and meaningful collaboration",
      features: [
        "Brand visibility in publications",
        "Event participation opportunities",
        "Student program sponsorship",
        "Newsletter feature articles",
        "Career fair participation",
        "Alumni network access",
        "Social media mentions",
        "Quarterly progress updates",
        "Workshop hosting opportunities",
        "Student project partnerships",
      ],
      gradient: "from-[#aa7d39] to-[#e3c767]",
    },
    {
      id: "silver",
      name: "Silver Partner",
      icon: <Shield className="h-10 w-10" />,
      price: "Rs 150,000",
      period: "/year",
      description:
        "Growing partnership with development potential and meaningful engagement opportunities",
      features: [
        "Logo placement opportunities",
        "Event invitation privileges",
        "Internship program coordination",
        "Social media collaboration",
        "Student project sponsorship",
        "Newsletter mentions",
        "Basic networking access",
        "Annual summary report",
        "Community event participation",
        "Local media coverage",
      ],
      gradient: "from-gray-300 to-gray-500",
    },
    {
      id: "bronze",
      name: "Bronze Partner",
      icon: <Award className="h-10 w-10" />,
      price: "Rs 100,000",
      period: "/year",
      description:
        "Entry-level partnership with growth opportunities and community engagement",
      features: [
        "Community event participation",
        "Student project support",
        "Local visibility opportunities",
        "Volunteer program access",
        "Newsletter acknowledgments",
        "Basic social media mentions",
        "Annual appreciation certificate",
        "Networking event invitations",
        "Student mentorship programs",
        "Local media recognition",
      ],
      gradient: "from-orange-400 to-orange-600",
    },
  ],
  career: [
    {
      id: "career-premium",
      name: "Premium Career Partner",
      icon: <Crown className="h-10 w-10" />,
      price: "Rs 100,000",
      period: "/event",
      description:
        "Premium booth placement, priority access to students, and enhanced visibility at the Career Fair.",
      features: [
        "Priority booth location",
        "Pre-event promotion to students",
        "Company branding on all fair materials",
        "Access to student resume database",
        "Dedicated networking session",
      ],
      gradient: "from-[#aa7d39] to-[#e3c767]",
      popular: true,
    },
    {
      id: "career-standard",
      name: "Standard Career Partner",
      icon: <Star className="h-10 w-10" />,
      price: "Rs 50,000",
      period: "/event",
      description:
        "Standard booth space, student interaction opportunities, and networking access.",
      features: [
        "Standard booth space",
        "Company logo on event page",
        "Access to general networking areas",
        "Opportunity to collect resumes",
        "Inclusion in event booklet",
      ],
      gradient: "from-gray-400 to-gray-600",
    },
  ],
  resource: [
    {
      id: "resource-printing",
      name: "Printing Partner",
      icon: <Award className="h-10 w-10" />,
      price: "In-Kind",
      period: "",
      description:
        "Provide high-quality printing services for magazines, brochures, and promotional materials.",
      features: [
        "Logo on all printed materials",
        'Official "Printing Partner" title',
        "Social media and website recognition",
        "VIP event invitations",
      ],
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: "resource-digital",
      name: "Digital Media Partner",
      icon: <Zap className="h-10 w-10" />,
      price: "In-Kind",
      period: "",
      description:
        "Support with digital marketing, social media strategy, and content optimization.",
      features: [
        'Official "Digital Media Partner" title',
        "Co-branded digital campaigns",
        "Prominent logo on website & social media",
        "Access to exclusive content",
      ],
      gradient: "from-green-400 to-green-600",
    },
  ],
};

const PartnershipPackages = () => {
  const [activeTab, setActiveTab] = useState("monetary");
  const [selectedPackage, setSelectedPackage] = useState("title");
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset and initialize when tab changes
  useEffect(() => {
    const currentPackages = packagesData[activeTab];
    if (currentPackages && currentPackages.length > 0) {
      setSelectedPackage(currentPackages[0].id);
    }

    // Reset loaded state to trigger animation
    setIsLoaded(false);

    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const packages = packagesData[activeTab] || [];

  if (packages.length === 0) {
    return (
      <div className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading packages...</div>
      </div>
    );
  }

  // For monetary tab, separate highlighted and regular packages
  const highlightedPackages =
    activeTab === "monetary" ? packages.filter((pkg) => pkg.highlight) : [];
  const displayPackages =
    activeTab === "monetary"
      ? packages.filter((pkg) => !pkg.highlight)
      : packages;

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
            Partnership{" "}
            <span className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect partnership level that aligns with your
            organization's goals and investment capacity
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2 flex gap-2">
            {Object.keys(packagesData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Partners
              </button>
            ))}
          </div>
        </div>

        {/* Featured Package - Only for monetary tab */}
        {activeTab === "monetary" && highlightedPackages.length > 0 && (
          <div className="mb-16">
            {highlightedPackages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative overflow-hidden rounded-3xl border-2 p-8 transition-all duration-700 backdrop-blur-xl cursor-pointer mx-auto max-w-4xl transform ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${
                  selectedPackage === pkg.id
                    ? "border-[#aa7d39] shadow-2xl shadow-[#aa7d39]/20"
                    : "border-gray-700 hover:border-[#aa7d39]/50"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div
                      className={`w-20 h-20 flex items-center justify-center rounded-2xl mb-6 text-white bg-gradient-to-br ${pkg.gradient} mx-auto md:mx-0`}
                    >
                      {pkg.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {pkg.name}
                    </h3>
                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-gray-400 text-lg">
                        {pkg.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg mb-6">
                      {pkg.description}
                    </p>
                    <button
                      className={`px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 transition mx-auto md:mx-0 ${
                        selectedPackage === pkg.id
                          ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-lg"
                          : "bg-gray-800 text-white border border-gray-600 hover:border-[#aa7d39]"
                      }`}
                    >
                      {selectedPackage === pkg.id
                        ? "Selected Package"
                        : "Choose Package"}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="bg-gray-800/50 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {pkg.features.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#aa7d39] to-[#e3c767] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-black" />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {pkg.features.length > 6 && (
                        <div className="text-center pt-2">
                          <span className="text-[#e3c767] text-sm font-medium">
                            +{pkg.features.length - 6} additional premium
                            benefits
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Packages Grid */}
        <div
          className={`grid gap-8 ${
            activeTab === "career" || activeTab === "resource"
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {displayPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative overflow-hidden rounded-2xl border-2 p-6 flex flex-col transition-all duration-700 backdrop-blur-xl cursor-pointer h-full transform ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                selectedPackage === pkg.id
                  ? "border-[#aa7d39] shadow-xl shadow-[#aa7d39]/10 scale-105"
                  : "border-gray-700 hover:border-gray-600 hover:scale-105"
              }`}
              style={{
                transitionDelay: `${
                  activeTab === "monetary"
                    ? highlightedPackages.length * 100 + index * 100
                    : index * 100
                }ms`,
              }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-white bg-gradient-to-br ${pkg.gradient} mx-auto`}
                >
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 text-sm">{pkg.period}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {pkg.description}
                </p>
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
                    ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black"
                    : "bg-gray-800 text-white border border-gray-600 hover:border-gray-500"
                }`}
              >
                {selectedPackage === pkg.id ? "Selected" : "Choose Plan"}
                {pkg.price !== "In-Kind" && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>

        {/* Selected Package Details Section */}
        {selectedPackage && (
          <div className="mt-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
                {(() => {
                  const selected = packages.find(
                    (pkg) => pkg.id === selectedPackage
                  );
                  if (!selected) return null;

                  return (
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Partnership Proposal Cover */}
                      <div className="relative group">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-600 shadow-2xl transform transition-transform group-hover:scale-105">
                          <div className="text-center">
                            {/* Header */}
                            <div className="mb-6">
                              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full flex items-center justify-center">
                                <Crown className="h-8 w-8 text-black" />
                              </div>
                              <h4 className="text-xl font-bold text-white mb-2">
                                EXPOSITION.LK
                              </h4>
                              <div className="w-20 h-px bg-gradient-to-r from-[#aa7d39] to-[#e3c767] mx-auto"></div>
                            </div>

                            {/* Title */}
                            <h5 className="text-2xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent mb-4">
                              {selected.name}
                            </h5>
                            <h6 className="text-xl font-bold text-white mb-6">
                              PROPOSAL 2025
                            </h6>

                            {/* Content Preview */}
                            <div className="space-y-2 text-left">
                              {selected.features
                                .slice(0, 4)
                                .map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center gap-2 text-gray-300 text-sm"
                                  >
                                    <div className="w-2 h-2 bg-[#aa7d39] rounded-full"></div>
                                    <span>{feature}</span>
                                  </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-6 pt-4 border-t border-gray-700">
                              <p className="text-gray-400 text-xs">
                                University of Moratuwa
                              </p>
                              <p className="text-gray-400 text-xs">
                                Faculty of Engineering
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full opacity-60"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full opacity-60"></div>
                      </div>

                      {/* Package Details */}
                      <div>
                        <div className="mb-6">
                          <div
                            className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 text-white bg-gradient-to-br ${selected.gradient}`}
                          >
                            {selected.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {selected.name}
                          </h3>
                          <div className="mb-4">
                            <span className="text-3xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent">
                              {selected.price}
                            </span>
                            <span className="text-gray-400 text-lg">
                              {selected.period}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-6">
                            {selected.description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                          <a
                            href={`/partnership-proposal-${selected.id}.pdf`}
                            download={`${selected.name}_Partnership_Proposal_2025.pdf`}
                            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black px-6 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Download {selected.name} Proposal
                          </a>

                          <a
                            href={`mailto:partnerships@exposition.lk?subject=${selected.name} Partnership Inquiry`}
                            className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
                          >
                            <Mail className="h-4 w-4" />
                            Inquire About {selected.name}
                          </a>
                        </div>

                        {/* Features List */}
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-white mb-3">
                            Key Benefits
                          </h4>
                          <div className="space-y-2 max-h-48 overflow-y-auto">
                            {selected.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#e3c767] mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Partnership Proposal Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Partnership Proposal
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Download our comprehensive partnership proposal to learn more
              about collaboration opportunities, benefits, and detailed package
              information.
            </p>

            {/* Partnership Proposal Cover */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative group">
                {/* Proposal Cover Image */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-600 shadow-2xl transform transition-transform group-hover:scale-105">
                  <div className="text-center">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full flex items-center justify-center">
                        <Crown className="h-8 w-8 text-black" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        EXPOSITION.LK
                      </h4>
                      <div className="w-20 h-px bg-gradient-to-r from-[#aa7d39] to-[#e3c767] mx-auto"></div>
                    </div>

                    {/* Title */}
                    <h5 className="text-2xl font-bold bg-gradient-to-r from-[#aa7d39] to-[#e3c767] bg-clip-text text-transparent mb-4">
                      Partnership
                    </h5>
                    <h6 className="text-xl font-bold text-white mb-6">
                      PROPOSAL 2025
                    </h6>

                    {/* Content Preview */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-[#aa7d39] rounded-full"></div>
                        <span>Partnership Levels & Benefits</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-[#aa7d39] rounded-full"></div>
                        <span>Event Sponsorship Opportunities</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-[#aa7d39] rounded-full"></div>
                        <span>Brand Visibility & ROI</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-[#aa7d39] rounded-full"></div>
                        <span>Success Stories & Testimonials</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <p className="text-gray-400 text-xs">
                        University of Moratuwa
                      </p>
                      <p className="text-gray-400 text-xs">
                        Faculty of Engineering
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/partnership-proposal.pdf"
                download="Exposition_Partnership_Proposal_2025.pdf"
                className="flex items-center gap-3 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Partnership Proposal
              </a>

              <a
                href="mailto:partnerships@exposition.lk?subject=Partnership Inquiry"
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-4 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 hover:bg-gray-700 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                Contact Us
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Have questions? Email us at{" "}
                <a
                  href="mailto:partnerships@exposition.lk"
                  className="text-[#e3c767] hover:underline"
                >
                  partnerships@exposition.lk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipPackages;
