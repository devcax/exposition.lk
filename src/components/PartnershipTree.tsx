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
} from "lucide-react";
import PartnershipSummary from "./PartnershipSummary";

// New GradientIcon component to handle SVG gradient fills
const GradientIcon = ({ id, children, fromColor, toColor }) => {
  const gradientId = `grad-${id}`;
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: fromColor, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: toColor, stopOpacity: 1 }}
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
    { label: "Monetary Partners", key: "monetary", count: 6 },
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
      },
    ],
    career: [
      {
        id: "premium",
        level: "Premium Partner",
        icon: <Crown />,
        color: "from-[#e3c767] to-[#aa7d39]",
        bgColor: "rgba(227, 199, 103, 0.1)",
        investment: "Rs 100,000",
        description:
          "Premium booth placement, priority access to students, and enhanced visibility",
      },
      {
        id: "standard",
        level: "Standard Partner",
        icon: <Star />,
        color: "from-[#aa7d39] to-[#B78F5A]",
        bgColor: "rgba(170, 125, 57, 0.1)",
        investment: "Rs 50,000",
        description:
          "Standard booth space, student interaction opportunities, and networking access",
      },
    ],
    resource: [
      {
        id: "printing",
        level: "Printing Partner",
        icon: <Award />,
        color: "from-[#aa7d39] to-[#e3c767]",
        bgColor: "rgba(170, 125, 57, 0.1)",
        description:
          "High-quality printing services for magazines and promotional materials",
      },
      {
        id: "photography",
        level: "Photography Partner",
        icon: <Gem />,
        color: "from-[#e3c767] to-[#B78F5A]",
        bgColor: "rgba(227, 199, 103, 0.1)",
        description:
          "Professional photography coverage for events and content creation",
      },
      {
        id: "digital",
        level: "Digital Media Partner",
        icon: <Shield />,
        color: "from-[#B78F5A] to-[#aa7d39]",
        bgColor: "rgba(183, 143, 90, 0.1)",
        description:
          "Digital marketing, social media strategy, and content optimization",
      },
      {
        id: "food",
        level: "Food & Beverage Partner",
        icon: <Star />,
        color: "from-[#aa7d39] to-[#e3c767]",
        bgColor: "rgba(170, 125, 57, 0.1)",
        description:
          "Catering services for events, workshops, and networking sessions",
      },
      {
        id: "copartner",
        level: "Co Partner",
        icon: <Crown />,
        color: "from-[#e3c767] to-[#B78F5A]",
        bgColor: "rgba(227, 199, 103, 0.1)",
        description:
          "Collaborative partnerships for mutual benefit and shared initiatives",
      },
    ],
  };

  const handleSelectPartnership = (partnership: Partnership) => {
    setSelectedPartnership(partnership);
    setShowModal(true);
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
                onClick={() => setActiveTab(cat.key)}
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
                Partnership Benefits
              </h3>
              {selectedPartnership ? (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${selectedPartnership.color}`}
                    >
                      <div className="h-6 w-6">
                        <GradientIcon
                          id={`selected-${selectedPartnership.id}`}
                          fromColor={selectedPartnership.iconGradient[0]}
                          toColor={selectedPartnership.iconGradient[1]}
                        >
                          {selectedPartnership.icon}
                        </GradientIcon>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {selectedPartnership.level}
                      </h4>
                      {selectedPartnership.investment && (
                        <p className="text-[#e3c767]">
                          {selectedPartnership.investment}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {selectedPartnership.description}
                  </p>
                  {selectedPartnership.benefits && (
                    <ul className="space-y-2">
                      {selectedPartnership.benefits
                        .slice(0, 4)
                        .map((benefit, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-300"
                          >
                            <ChevronRight className="w-4 h-4 text-[#e3c767] mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                    </ul>
                  )}
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-6 w-full py-3 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all"
                  >
                    View Full Details
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">
                    Select a partnership package to view details
                  </p>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gray-800 flex items-center justify-center">
                    <Award className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              )}
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
