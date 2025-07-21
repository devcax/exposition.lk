import React, { useState } from "react";
import {
  Award,
  Gem,
  Star,
  Shield,
  Crown,
  ChevronRight,
  X,
  ArrowRight,
  Camera,
  Printer,
  Monitor,
  Coffee,
  Handshake,
  Users,
  Building2,
} from "lucide-react";
import PartnershipSummary from "./PartnershipSummary";

// Fixed GradientIcon component with fallback
const GradientIcon = ({ id, children, fromColor, toColor }) => {
  const gradientId = `grad-${id}`;

  // Fallback for missing gradient colors
  const fallbackFromColor = fromColor || "#aa7d39";
  const fallbackToColor = toColor || "#e3c767";

  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: fallbackFromColor, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: fallbackToColor, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      {React.cloneElement(children, {
        fill: `url(#${gradientId})`,
        stroke: "none",
      })}
    </>
  );
};

type Partnership = {
  id: string;
  level: string;
  icon: JSX.Element;
  iconGradient: [string, string];
  color: string;
  bgColor: string;
  investment?: string;
  description: string;
  benefits?: string[];
};

interface PartnershipCardProps {
  partnership: Partnership;
  onSelect: () => void;
  isSelected: boolean;
}

const PartnershipCard: React.FC<PartnershipCardProps> = ({
  partnership,
  onSelect,
  isSelected,
}) => (
  <div
    onClick={onSelect}
    className={`relative bg-gray-900/40 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
      isSelected
        ? "border-[#e3c767] shadow-lg shadow-[#e3c767]/20"
        : "border-gray-800 hover:border-gray-700"
    }`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div
          className={`p-3 rounded-lg bg-gradient-to-br ${partnership.color}`}
        >
          <div className="h-6 w-6">
            <GradientIcon
              id={partnership.id}
              fromColor={partnership.iconGradient[0]}
              toColor={partnership.iconGradient[1]}
            >
              {partnership.icon}
            </GradientIcon>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">
            {partnership.level}
          </h4>
          {partnership.investment && (
            <p className="text-[#e3c767] font-medium">
              {partnership.investment}
            </p>
          )}
        </div>
      </div>
      <ArrowRight
        className={`w-5 h-5 transition-colors ${
          isSelected ? "text-[#e3c767]" : "text-gray-600"
        }`}
      />
    </div>
    <p className="text-gray-400 text-sm line-clamp-2">
      {partnership.description}
    </p>
  </div>
);

const PartnershipTree: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "monetary" | "career" | "resource"
  >("monetary");
  const [selectedPartnership, setSelectedPartnership] =
    useState<Partnership | null>(null);
  const [showModal, setShowModal] = useState(false);

  const categories = [
    { label: "Monetary Partners", key: "monetary", count: 5 },
    { label: "Career Fair Partners", key: "career", count: 2 },
    { label: "Resource Partners", key: "resource", count: 5 },
  ] as const;

  const partnerships: Record<typeof activeTab, Partnership[]> = {
    monetary: [
      {
        id: "title",
        level: "Title Partner",
        icon: <Crown />,
        iconGradient: ["#a758cf", "#361d54"],
        color: "from-[#a758cf]/20 to-[#361d54]/20",
        bgColor: "rgba(167, 88, 207, 0.1)",
        investment: "Rs 600,000",
        description:
          "Ultimate partnership with maximum visibility and comprehensive impact across all university initiatives",
        benefits: [
          "Company logo on all marketing materials",
          "Dedicated article in each magazine issue",
          "Speaking slot at all major events",
          "VIP access to exclusive networking events",
          "Board meeting attendance rights",
          "Priority booth placement at career fair",
          "Access to alumni database",
        ],
      },
      {
        id: "platinum",
        level: "Platinum Partner",
        icon: <Gem />,
        iconGradient: ["#757886", "#151517"],
        color: "from-[#757886]/20 to-[#151517]/20",
        bgColor: "rgba(117, 120, 134, 0.1)",
        investment: "Rs 400,000",
        description:
          "Premium partnership with extensive benefits and significant brand exposure",
        benefits: [
          "Logo placement on major materials",
          "Quarterly magazine features",
          "Event speaking opportunities",
          "Research collaboration opportunities",
          "Career fair participation",
          "Student mentorship programs",
        ],
      },
      {
        id: "gold",
        level: "Gold Partner",
        icon: <Star />,
        iconGradient: ["#e3c767", "#aa7d39"],
        color: "from-[#e3c767]/20 to-[#aa7d39]/20",
        bgColor: "rgba(227, 199, 103, 0.1)",
        investment: "Rs 300,000",
        description:
          "Established partnership with significant engagement and meaningful collaboration",
        benefits: [
          "Brand visibility in publications",
          "Event participation opportunities",
          "Career fair participation",
          "Alumni network access",
          "Workshop hosting opportunities",
        ],
      },
      {
        id: "silver",
        level: "Silver Partner",
        icon: <Shield />,
        iconGradient: ["#dddddd", "#898989"],
        color: "from-[#dddddd]/20 to-[#898989]/20",
        bgColor: "rgba(221, 221, 221, 0.1)",
        investment: "Rs 150,000",
        description:
          "Growing partnership with development potential and meaningful engagement opportunities",
        benefits: [
          "Website logo placement",
          "Social media mentions",
          "Career fair access",
          "Newsletter features",
        ],
      },
      {
        id: "bronze",
        level: "Bronze Partner",
        icon: <Award />,
        iconGradient: ["#ea9477", "#be5e40"],
        color: "from-[#ea9477]/20 to-[#be5e40]/20",
        bgColor: "rgba(234, 148, 119, 0.1)",
        investment: "Rs 100,000",
        description:
          "Entry-level partnership with growth opportunities and community engagement",
        benefits: [
          "Social media recognition",
          "Event acknowledgment",
          "Basic networking access",
          "Newsletter mentions",
        ],
      },
    ],
    career: [
      {
        id: "premium-career",
        level: "Premium Career Partner",
        icon: <Building2 />,
        iconGradient: ["#e3c767", "#aa7d39"],
        color: "from-[#e3c767]/20 to-[#aa7d39]/20",
        bgColor: "rgba(227, 199, 103, 0.1)",
        investment: "Rs 100,000",
        description:
          "Premium booth placement, priority access to students, and enhanced visibility at career fair",
        benefits: [
          "Prime booth location (corner/center)",
          "Priority student interaction sessions",
          "Pre-event student resume access",
          "Company presentation slot",
          "VIP networking lunch access",
          "Post-event candidate database",
          "Logo on all career fair materials",
          "Social media promotion",
        ],
      },
      {
        id: "standard-career",
        level: "Standard Career Partner",
        icon: <Users />,
        iconGradient: ["#aa7d39", "#B78F5A"],
        color: "from-[#aa7d39]/20 to-[#B78F5A]/20",
        bgColor: "rgba(170, 125, 57, 0.1)",
        investment: "Rs 50,000",
        description:
          "Standard booth space, student interaction opportunities, and networking access",
        benefits: [
          "Standard booth space",
          "Student interaction sessions",
          "Company brochure distribution",
          "Basic networking access",
          "Event acknowledgment",
          "Social media mentions",
        ],
      },
    ],
    resource: [
      {
        id: "printing",
        level: "Printing Partner",
        icon: <Printer />,
        iconGradient: ["#aa7d39", "#e3c767"],
        color: "from-[#aa7d39]/20 to-[#e3c767]/20",
        bgColor: "rgba(170, 125, 57, 0.1)",
        description:
          "High-quality printing services for magazines and promotional materials",
        benefits: [
          "Magazine printing partnership",
          "Event material printing",
          "Banner and poster production",
          "Marketing collateral design",
          "Brand visibility on printed materials",
          "Social media recognition",
        ],
      },
      {
        id: "photography",
        level: "Photography Partner",
        icon: <Camera />,
        iconGradient: ["#e3c767", "#B78F5A"],
        color: "from-[#e3c767]/20 to-[#B78F5A]/20",
        bgColor: "rgba(227, 199, 103, 0.1)",
        description:
          "Professional photography coverage for events and content creation",
        benefits: [
          "Event photography coverage",
          "Portrait sessions for magazine",
          "Social media content creation",
          "Brand photography opportunities",
          "Portfolio building collaboration",
          "Photo credit recognition",
        ],
      },
      {
        id: "digital",
        level: "Digital Media Partner",
        icon: <Monitor />,
        iconGradient: ["#B78F5A", "#aa7d39"],
        color: "from-[#B78F5A]/20 to-[#aa7d39]/20",
        bgColor: "rgba(183, 143, 90, 0.1)",
        description:
          "Digital marketing, social media strategy, and content optimization",
        benefits: [
          "Social media management",
          "Digital marketing campaigns",
          "Website development support",
          "Content creation collaboration",
          "SEO optimization services",
          "Analytics and reporting",
        ],
      },
      {
        id: "food",
        level: "Food & Beverage Partner",
        icon: <Coffee />,
        iconGradient: ["#aa7d39", "#e3c767"],
        color: "from-[#aa7d39]/20 to-[#e3c767]/20",
        bgColor: "rgba(170, 125, 57, 0.1)",
        description:
          "Catering services for events, workshops, and networking sessions",
        benefits: [
          "Event catering services",
          "Workshop refreshment sponsorship",
          "VIP networking lunch provision",
          "Brand visibility at events",
          "Menu customization opportunities",
          "Sustainability partnership",
        ],
      },
      {
        id: "copartner",
        level: "Strategic Co-Partner",
        icon: <Handshake />,
        iconGradient: ["#e3c767", "#B78F5A"],
        color: "from-[#e3c767]/20 to-[#B78F5A]/20",
        bgColor: "rgba(227, 199, 103, 0.1)",
        description:
          "Collaborative partnerships for mutual benefit and shared initiatives",
        benefits: [
          "Joint event collaboration",
          "Shared resource access",
          "Co-branding opportunities",
          "Cross-promotion benefits",
          "Knowledge sharing sessions",
          "Innovation lab partnerships",
        ],
      },
    ],
  };

  const handleSelectPartnership = (partnership: Partnership) => {
    setSelectedPartnership(partnership);
    setShowModal(true);
  };

  // Reset selection when switching tabs
  const handleTabChange = (newTab: typeof activeTab) => {
    setActiveTab(newTab);
    setSelectedPartnership(null);
  };

  return (
    <section
      id="partnerships"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Partnership Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our community of partners and create lasting impact through
            strategic collaboration
          </p>
        </div>

        {/* Modern Tab Navigation */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-1.5 flex">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleTabChange(cat.key)}
                className={`flex-1 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === cat.key
                    ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-2 text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Partnership Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cards Section */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              {partnerships[activeTab].map((partnership) => (
                <PartnershipCard
                  key={partnership.id}
                  partnership={partnership}
                  onSelect={() => handleSelectPartnership(partnership)}
                  isSelected={selectedPartnership?.id === partnership.id}
                />
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Partnership Proposal
              </h3>

              <p className="text-gray-400 mb-6">
                Download our comprehensive partnership proposal containing all
                available packages, benefits, and collaboration opportunities.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ChevronRight className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
                  <span>All partnership tiers & pricing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ChevronRight className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
                  <span>Detailed benefits breakdown</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ChevronRight className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
                  <span>Terms & conditions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ChevronRight className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
                  <span>Application process guide</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <ChevronRight className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
                  <span>Contact information</span>
                </div>
              </div>

              <button
                onClick={() => {
                  // Add download logic here
                  console.log("Downloading: Partnership_Proposal_Complete.pdf");
                  // You can replace this with actual download logic
                }}
                className="w-full py-3 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all flex items-center justify-center gap-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Complete Proposal
              </button>

              {/* Optional: Show file size and format */}
              <p className="text-gray-500 text-xs text-center mt-2">
                PDF • 2.3 MB • Updated Dec 2024
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-6 bg-gradient-to-r from-[#aa7d39]/10 to-[#e3c767]/10 rounded-xl border border-[#aa7d39]/30 p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                Need Custom Partnership?
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Let's discuss how we can create a tailored partnership
              </p>
              <button className="text-[#e3c767] font-medium text-sm hover:underline flex items-center gap-1">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && selectedPartnership && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${selectedPartnership.color}`}
                    >
                      <div className="h-8 w-8">
                        <GradientIcon
                          id={`modal-${selectedPartnership.id}`}
                          fromColor={selectedPartnership.iconGradient[0]}
                          toColor={selectedPartnership.iconGradient[1]}
                        >
                          {selectedPartnership.icon}
                        </GradientIcon>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {selectedPartnership.level}
                      </h3>
                      {selectedPartnership.investment && (
                        <p className="text-[#e3c767] text-lg">
                          {selectedPartnership.investment}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-300 mb-6">
                  {selectedPartnership.description}
                </p>

                {selectedPartnership.benefits && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">
                      Included Benefits
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {selectedPartnership.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <div className="w-6 h-6 rounded-full bg-[#e3c767]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ChevronRight className="w-4 h-4 text-[#e3c767]" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all">
                    Become a Partner
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <PartnershipSummary />
      </div>
    </section>
  );
};

export default PartnershipTree;
