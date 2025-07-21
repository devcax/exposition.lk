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
  Briefcase,
  Zap,
  Palette,
  Globe,
  Target,
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
  detailedContent?: {
    recognition?: string;
    sections?: {
      title: string;
      items: string[];
    }[];
  };
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
    className={`relative bg-gray-900/40 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-[1.02] group ${
      isSelected
        ? "border-[#e3c767] shadow-lg shadow-[#e3c767]/20 scale-[1.02]"
        : "border-gray-800 hover:border-[#e3c767]/60 hover:shadow-xl hover:shadow-[#e3c767]/30"
    }`}
    style={{
      background: isSelected
        ? "linear-gradient(135deg, rgba(227, 199, 103, 0.05), rgba(170, 125, 57, 0.05))"
        : undefined,
    }}
  >
    {/* Glowing border animation on hover */}
    <div
      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        !isSelected
          ? "bg-gradient-to-r from-[#e3c767]/20 via-[#aa7d39]/20 to-[#e3c767]/20 blur-xl"
          : ""
      }`}
    />

    {/* Inner glow effect */}
    <div
      className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        !isSelected ? "shadow-inner shadow-[#e3c767]/10" : ""
      }`}
    />

    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${partnership.color} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#e3c767]/30`}
          >
            <div className="h-6 w-6 transition-transform duration-500 group-hover:rotate-12">
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
            <h4 className="text-lg font-semibold text-white transition-all duration-300 group-hover:text-[#e3c767]">
              {partnership.level}
            </h4>
            {partnership.investment && (
              <p className="text-[#e3c767] font-medium transition-all duration-300 group-hover:text-[#aa7d39]">
                {partnership.investment}
              </p>
            )}
          </div>
        </div>
        <div
          className={`p-2 rounded-full transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-45 ${
            isSelected
              ? "bg-[#e3c767]/20 text-[#e3c767] shadow-lg shadow-[#e3c767]/30"
              : "bg-gray-800 text-gray-600 group-hover:bg-[#e3c767]/20 group-hover:text-[#e3c767] group-hover:shadow-lg group-hover:shadow-[#e3c767]/30"
          }`}
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <p className="text-gray-400 text-sm line-clamp-2 mb-4 transition-colors duration-300 group-hover:text-gray-300">
        {partnership.description}
      </p>

      {/* Enhanced Premium Read More Button */}
      <div className="mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-500 transform flex items-center justify-center gap-2 group-button overflow-hidden relative ${
            isSelected
              ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-lg hover:shadow-xl hover:shadow-[#e3c767]/40 scale-105"
              : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gradient-to-r hover:from-[#aa7d39]/80 hover:to-[#e3c767]/80 hover:border-[#e3c767] hover:text-black hover:shadow-lg hover:shadow-[#e3c767]/30 hover:scale-105"
          }`}
        >
          {/* Shimmer effect for non-selected buttons */}
          {!isSelected && (
            <div className="absolute inset-0 -translate-x-full group-button-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          )}

          <span className="relative z-10 transition-all duration-300">
            Read More
          </span>
          <ChevronRight
            className={`w-4 h-4 transition-all duration-500 transform group-button-hover:translate-x-1 relative z-10 ${
              isSelected
                ? "text-black"
                : "text-gray-400 group-button-hover:text-black"
            }`}
          />
        </button>
      </div>
    </div>
  </div>
);

// Enhanced Modal with loading animation
const PartnershipTree: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "monetary" | "career" | "resource"
  >("monetary");
  const [selectedPartnership, setSelectedPartnership] =
    useState<Partnership | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const categories = [
    { label: "Monetary Partners", key: "monetary", count: 5 },
    { label: "Career Fair Partners", key: "career", count: 2 },
    { label: "Resource Partners", key: "resource", count: 5 },
  ] as const;

  // Enhanced partnership data with detailed modal content
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
        detailedContent: {
          recognition:
            "The recognition will be given as the 'Official Title Partner' for Exposition Issue 21, Edify and Industrial Week 2025/26.",
          sections: [
            {
              title: "Industrial Week & Career Fair 2025/26",
              items: [
                "Featuring the company logo on all event materials, including banners, interactive sessions, and promotional items throughout Industrial Week and the Career Fair.",
                "Ability to distribute company-branded merchandise such as pens, notebooks, tote bags, or brochures to all event attendees throughout Industrial Week and Career Fair.",
                "Opportunity to conduct sessions or promotional activities throughout the day, offering extensive engagement without time limitations.",
                "A prime location booth at the Career Fair, ensuring maximum visibility and engagement.",
                "Full access to a curated digital resume book of all student attendees, enabling efficient post-event recruitment.",
                "Branding on session slides and all e-certificates shared digitally by students, particularly on platforms like LinkedIn which is an excellent source of organic visibility.",
                "Entry into an exclusive networking lounge where company representatives can engage directly with top-performing students and key university figures.",
                "A professionally designed, sponsor-branded email to be sent to all participants. Can include job/internship ads, company story, calls to action.",
                "Access to place a Sponsor-branded selfie/photo booth where attendees can take pictures and share them on social media, furthering brand exposure.",
              ],
            },
            {
              title: "Exposition Magazine Launching Ceremony",
              items: [
                "Opportunity to deliver a speech for a total time duration of 10 minutes.",
                "Display a promotional video during the event for a total duration of 5 minutes.",
                "Privilege to display 8 banners at the event venue to enhance brand visibility.",
              ],
            },
            {
              title: "Edify Blog",
              items: [
                "The company logo will be displayed in the partnerships' corner of the blog footer.",
              ],
            },
          ],
        },
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
        detailedContent: {
          recognition:
            "Recognition as 'Platinum Partner' across all Exposition initiatives and events.",
          sections: [
            {
              title: "Industrial Week & Career Fair 2025/26",
              items: [
                "Company logo placement on event materials and promotional items.",
                "Standard booth location at the Career Fair with professional setup.",
                "Access to student resume database for recruitment purposes.",
                "Opportunity to conduct 2-hour interactive sessions or workshops.",
                "Branded merchandise distribution during events.",
                "Professional networking opportunities with students and faculty.",
              ],
            },
            {
              title: "Exposition Magazine",
              items: [
                "Quarterly feature articles about company initiatives and achievements.",
                "Logo placement in magazine advertisements section.",
                "Opportunity to sponsor specific magazine sections.",
              ],
            },
            {
              title: "Digital Presence",
              items: [
                "Company profile on Exposition website partnerships page.",
                "Social media mentions and features throughout the year.",
                "Newsletter inclusions and digital marketing support.",
              ],
            },
          ],
        },
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
        icon: <Crown />, // Premium crown icon like Title Partner
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
        detailedContent: {
          recognition:
            "Premium positioning as a leading career partner for Industrial Week & Career Fair 2025/26.",
          sections: [
            {
              title: "Career Fair Benefits",
              items: [
                "Prime corner or center booth location ensuring maximum student traffic.",
                "Priority 30-minute presentation slot during main career fair program.",
                "Pre-event access to anonymized student resumes and portfolios.",
                "Dedicated company page in the career fair digital brochure.",
                "VIP access to networking lunch with top-performing students and faculty.",
                "Post-event detailed analytics and candidate contact information.",
              ],
            },
            {
              title: "Student Engagement",
              items: [
                "Priority scheduling for student interaction sessions.",
                "Access to mock interview sessions with interested candidates.",
                "Opportunity to conduct skills assessment workshops.",
                "Direct communication channel with student placement office.",
              ],
            },
            {
              title: "Marketing & Promotion",
              items: [
                "Company logo on all career fair promotional materials.",
                "Social media promotion across university platforms.",
                "Featured company spotlight in pre-event marketing campaigns.",
                "Professional photography coverage of your booth and activities.",
              ],
            },
          ],
        },
      },
      {
        id: "standard-career",
        level: "Standard Career Partner",
        icon: <Briefcase />, // Professional briefcase icon
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
        icon: <Gem />, // Premium gem icon like Platinum
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
        icon: <Star />, // Premium star icon like Gold
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
        icon: <Zap />, // Dynamic lightning icon for digital/tech
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
        icon: <Shield />, // Premium shield icon like Silver
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
        icon: <Target />, // Premium target icon for strategic partnerships
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
    setModalLoading(true);
    setSelectedPartnership(partnership);

    // Simulate loading time for enhanced UX
    setTimeout(() => {
      setShowModal(true);
      setModalLoading(false);
    }, 300);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setSelectedPartnership(null);
    }, 300);
  };

  // Reset selection when switching tabs
  const handleTabChange = (newTab: typeof activeTab) => {
    setActiveTab(newTab);
    setSelectedPartnership(null);
  };

  return (
    <section
      id="partnerships"
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e3c767]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#aa7d39]/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              {partnerships[activeTab].map((partnership, index) => (
                <div
                  key={partnership.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-fade-in-up"
                >
                  <PartnershipCard
                    partnership={partnership}
                    onSelect={() => handleSelectPartnership(partnership)}
                    isSelected={selectedPartnership?.id === partnership.id}
                  />
                </div>
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

        {/* Enhanced Modal with animations */}
        {(showModal || modalLoading) && selectedPartnership && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
              showModal ? "bg-black/80 backdrop-blur-sm" : "bg-black/20"
            }`}
          >
            <div
              className={`bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-500 transform ${
                showModal
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 translate-y-4"
              }`}
            >
              {modalLoading ? (
                // Loading state
                <div className="p-8 flex items-center justify-center min-h-[400px]">
                  <div className="text-center">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 border-4 border-gray-600 rounded-full animate-spin border-t-[#e3c767]" />
                      <div className="absolute inset-2 border-2 border-gray-700 rounded-full animate-spin animate-reverse border-t-[#aa7d39]" />
                    </div>
                    <p className="text-gray-400 animate-pulse">
                      Loading partnership details...
                    </p>
                  </div>
                </div>
              ) : (
                // Modal content with entrance animations
                <div className="p-8 animate-fade-in">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 animate-slide-in-left">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${selectedPartnership.color} shadow-lg shadow-[#e3c767]/20 animate-bounce-in`}
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
                        <h3 className="text-3xl font-bold text-white animate-slide-in-right">
                          {selectedPartnership.level}
                        </h3>
                        {selectedPartnership.investment && (
                          <p className="text-[#e3c767] text-xl font-semibold animate-slide-in-right delay-100">
                            {selectedPartnership.investment}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 animate-fade-in"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Recognition Statement with animation */}
                  {selectedPartnership.detailedContent?.recognition && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-[#aa7d39]/10 to-[#e3c767]/10 rounded-xl border border-[#aa7d39]/30 animate-slide-in-up delay-200">
                      <h4 className="text-lg font-semibold text-[#e3c767] mb-3">
                        Partnership Recognition
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedPartnership.detailedContent.recognition}
                      </p>
                    </div>
                  )}

                  {/* Detailed Sections with staggered animations */}
                  {selectedPartnership.detailedContent?.sections && (
                    <div className="space-y-8">
                      {selectedPartnership.detailedContent.sections.map(
                        (section, sectionIdx) => (
                          <div
                            key={sectionIdx}
                            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 animate-slide-in-up"
                            style={{
                              animationDelay: `${(sectionIdx + 3) * 100}ms`,
                            }}
                          >
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full animate-pulse" />
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="flex items-start gap-3 text-gray-300 leading-relaxed animate-fade-in"
                                  style={{
                                    animationDelay: `${
                                      (sectionIdx + 3) * 100 + itemIdx * 50
                                    }ms`,
                                  }}
                                >
                                  <div className="w-5 h-5 rounded-full bg-[#e3c767]/20 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-[#e3c767]/30 hover:scale-110">
                                    <ChevronRight className="w-3 h-3 text-[#e3c767]" />
                                  </div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Fallback to original benefits if no detailed content */}
                  {!selectedPartnership.detailedContent &&
                    selectedPartnership.benefits && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">
                          Included Benefits
                        </h4>
                        <ul className="space-y-3">
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

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700 animate-slide-in-up delay-500">
                    <button className="flex-1 py-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-xl hover:shadow-xl hover:shadow-[#e3c767]/30 transition-all duration-500 text-lg transform hover:scale-105 relative overflow-hidden group">
                      <span className="relative z-10">Become a Partner</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <PartnershipSummary />
      </div>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .group-button-hover:hover .group-button-hover\:translate-x-full {
          transform: translateX(100%);
        }

        .animate-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default PartnershipTree;
