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
  ChevronDown,
  ChevronUp,
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
    className={`relative bg-gray-900/40 backdrop-blur-sm border rounded-xl p-6 cursor-pointer premium-transition premium-glow ${
      isSelected
        ? "border-[#e3c767] shadow-lg shadow-[#e3c767]/20 premium-scale-subtle"
        : "border-gray-800 hover:border-[#e3c767]/60 hover:shadow-xl hover:shadow-[#e3c767]/30 premium-scale-hover"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${partnership.color} premium-transition premium-float`}
          >
            <div className="h-6 w-6 premium-rotate">
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
            <h4 className="text-lg font-semibold text-white premium-transition">
              {partnership.level}
            </h4>
            {partnership.investment && (
              <p className="text-[#e3c767] font-medium premium-pulse">
                {partnership.investment}
              </p>
            )}
          </div>
        </div>
        <div
          className={`p-2 rounded-full premium-transition premium-rotate ${
            isSelected
              ? "bg-[#e3c767]/20 text-[#e3c767] shadow-lg shadow-[#e3c767]/30"
              : "bg-gray-800 text-gray-600 hover:bg-[#e3c767]/20 hover:text-[#e3c767] hover:shadow-lg hover:shadow-[#e3c767]/30"
          }`}
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <p className="text-gray-400 text-sm line-clamp-2 mb-4 premium-transition">
        {partnership.description}
      </p>

      {/* Enhanced Premium Button */}
      <div className="mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm premium-transition premium-shimmer-effect relative overflow-hidden ${
            isSelected
              ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-lg hover:shadow-xl hover:shadow-[#e3c767]/40 premium-scale-hover"
              : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gradient-to-r hover:from-[#aa7d39]/80 hover:to-[#e3c767]/80 hover:border-[#e3c767] hover:text-black hover:shadow-lg hover:shadow-[#e3c767]/30 premium-scale-hover"
          }`}
        >
          <span className="relative z-10 premium-transition">Read More</span>
          <ChevronRight className="w-4 h-4 premium-transition premium-rotate inline-block ml-2" />
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
  const [showComparison, setShowComparison] = useState(false);

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
        icon: <Crown />,
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
        icon: <Briefcase />,
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
        icon: <Gem />,
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
        icon: <Star />,
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
        icon: <Zap />,
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
        icon: <Shield />,
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
        icon: <Target />,
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e3c767]/5 rounded-full blur-3xl premium-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#aa7d39]/5 rounded-full blur-3xl premium-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with premium fade-in */}
        <div className="text-center mb-16 premium-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 premium-float">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Partnership Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto premium-fade-in premium-delay-200">
            Join our community of partners and create lasting impact through
            strategic collaboration
          </p>
        </div>

        {/* Modern Tab Navigation with premium animations */}
        <div className="max-w-3xl mx-auto mb-12 premium-fade-in premium-delay-300">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-1.5 flex premium-glow">
            {categories.map((cat, index) => (
              <button
                key={cat.key}
                onClick={() => handleTabChange(cat.key)}
                className={`flex-1 px-6 py-3 rounded-full text-sm font-medium premium-transition ${
                  activeTab === cat.key
                    ? "bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black shadow-lg premium-scale-hover"
                    : "text-gray-400 hover:text-white premium-scale-hover"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="premium-transition">{cat.label}</span>
                <span className="ml-2 text-xs opacity-70 premium-pulse">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Partnership Grid with staggered animations */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-4">
              {partnerships[activeTab].map((partnership, index) => (
                <div
                  key={partnership.id}
                  className={`premium-fade-in premium-delay-${
                    ((index % 4) + 1) * 100
                  }`}
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

          {/* Info Panel with slide animation */}
          <div className="lg:col-span-1 premium-slide-right premium-delay-400">
            <div className="sticky top-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6 premium-glow premium-transition">
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
                className="w-full py-3 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#e3c767]/20 premium-transition flex items-center justify-center gap-2 premium-scale-hover"
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
              <button className="text-[#e3c767] font-medium text-sm hover:underline flex items-center gap-1 premium-transition">
                Contact Us <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Modal with animations */}
        {(showModal || modalLoading) && selectedPartnership && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 premium-transition ${
              showModal ? "bg-black/80 backdrop-blur-sm" : "bg-black/20"
            }`}
          >
            <div
              className={`bg-gray-900 mt-20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto premium-transition transform ${
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
                    <p className="text-gray-400 premium-pulse">
                      Loading partnership details...
                    </p>
                  </div>
                </div>
              ) : (
                // Modal content with entrance animations
                <div className="p-8 premium-fade-in">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4 premium-slide-left">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${selectedPartnership.color} shadow-lg shadow-[#e3c767]/20 premium-scale-subtle `}
                      >
                        <div className="h-8 w-8 flex items-center justify-center">
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
                        <h3 className="text-3xl font-bold text-white premium-slide-right">
                          {selectedPartnership.level}
                        </h3>
                        {selectedPartnership.investment && (
                          <p className="text-[#e3c767] text-xl font-semibold premium-slide-right premium-delay-100">
                            {selectedPartnership.investment}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white premium-transition premium-scale-hover premium-fade-in"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Recognition Statement with animation */}
                  {selectedPartnership.detailedContent?.recognition && (
                    <div className="mb-8 p-6 bg-gradient-to-r from-[#aa7d39]/10 to-[#e3c767]/10 rounded-xl border border-[#aa7d39]/30 premium-slide-up premium-delay-200">
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
                            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 premium-slide-up"
                            style={{
                              animationDelay: `${(sectionIdx + 3) * 100}ms`,
                            }}
                          >
                            <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] rounded-full premium-pulse" />
                              {section.title}
                            </h4>
                            <ul className="space-y-3">
                              {section.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="flex items-start gap-3 text-gray-300 leading-relaxed premium-fade-in"
                                  style={{
                                    animationDelay: `${
                                      (sectionIdx + 3) * 100 + itemIdx * 50
                                    }ms`,
                                  }}
                                >
                                  <div className="w-5 h-5 rounded-full bg-[#e3c767]/20 flex items-center justify-center flex-shrink-0 mt-1 premium-transition premium-scale-hover">
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
                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700 premium-slide-up premium-delay-500">
                    <button className="flex-1 py-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-xl hover:shadow-xl hover:shadow-[#e3c767]/30 premium-transition text-lg premium-scale-hover relative overflow-hidden group">
                      <span className="relative z-10">Become a Partner</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] opacity-0 group-hover:opacity-100 premium-transition" />
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl premium-transition premium-scale-hover"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Partnership Comparison Toggle Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold rounded-xl hover:shadow-xl hover:shadow-[#e3c767]/30 premium-transition premium-scale-hover relative overflow-hidden group"
          >
            <span className="relative z-10">Compare Partnership Packages</span>
            <div className="relative z-10 premium-transition">
              {showComparison ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] opacity-0 group-hover:opacity-100 premium-transition" />
          </button>
        </div>

        {/* Partnership Summary with Smooth Animation */}
        <div
          className={`overflow-hidden premium-transition ${
            showComparison
              ? "max-h-[5000px] opacity-100 mt-8"
              : "max-h-0 opacity-0 mt-0"
          }`}
          style={{
            transitionDuration: "0.8s",
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <div className={`premium-transition ${showComparison ? "premium-fade-in" : ""}`}>
            <PartnershipSummary />
          </div>
        </div>
      </div>

      {/* Premium Minimalistic CSS */}
      <style jsx>{`
        /* Premium Minimalistic Keyframes */
        @keyframes premium-fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes premium-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes premium-scale-subtle {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes premium-pulse-gentle {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes premium-slide-left {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes premium-slide-right {
          from {
            opacity: 0;
            transform: translateX(15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes premium-slide-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes premium-glow-subtle {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(227, 199, 103, 0);
          }
          50% {
            box-shadow: 0 0 20px rgba(227, 199, 103, 0.1);
          }
        }

        @keyframes premium-shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }

        @keyframes premium-rotate-gentle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Premium Animation Classes */
        .premium-fade-in {
          animation: premium-fade-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .premium-float {
          animation: premium-float 4s ease-in-out infinite;
        }

        .premium-scale-hover:hover {
          animation: premium-scale-subtle 0.8s ease-in-out;
        }

        .premium-scale-subtle {
          animation: premium-scale-subtle 0.8s ease-in-out;
        }

        .premium-pulse {
          animation: premium-pulse-gentle 2.5s ease-in-out infinite;
        }

        .premium-slide-left {
          animation: premium-slide-left 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .premium-slide-right {
          animation: premium-slide-right 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .premium-slide-up {
          animation: premium-slide-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
          opacity: 0;
        }

        .premium-glow:hover {
          animation: premium-glow-subtle 1.5s ease-in-out infinite;
        }

        .premium-shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: premium-shimmer 2s infinite;
        }

        .premium-rotate:hover {
          animation: premium-rotate-gentle 0.6s
            cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Stagger delays for sequence animations */
        .premium-delay-100 {
          animation-delay: 100ms;
        }
        .premium-delay-200 {
          animation-delay: 200ms;
        }
        .premium-delay-300 {
          animation-delay: 300ms;
        }
        .premium-delay-400 {
          animation-delay: 400ms;
        }
        .premium-delay-500 {
          animation-delay: 500ms;
        }

        /* Smooth transitions for all interactive elements */
        .premium-transition {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-reverse {
          animation-direction: reverse;
        }
      `}</style>
    </section>
  );
};

export default PartnershipTree;
