import React, { useState } from "react";
import { Check, X, ChevronLeft, ChevronRight } from "lucide-react";

const PartnershipSummary = () => {
  const [activePartnership, setActivePartnership] = useState(0);

  // Partnership tiers with gradient colors
  const partnerships = [
    {
      id: "title",
      name: "TITLE PARTNER",
      gradient: { from: "#a758cf", to: "#361d54" },
      textColor: "text-white",
    },
    {
      id: "platinum",
      name: "PLATINUM PARTNER",
      gradient: { from: "#757886", to: "#151517" },
      textColor: "text-white",
    },
    {
      id: "gold",
      name: "GOLD PARTNER",
      gradient: { from: "#e3c767", to: "#aa7d39" },
      textColor: "text-white",
    },
    {
      id: "silver",
      name: "SILVER PARTNER",
      gradient: { from: "#dddddd", to: "#898989" },
      textColor: "text-black",
    },
    {
      id: "bronze",
      name: "BRONZE PARTNER",
      gradient: { from: "#ea9477", to: "#be5e40" },
      textColor: "text-white",
    },
  ];

  // Deliverables with exact features from the image
  const deliverables = [
    {
      title: "Partnership Introduction Post",
      features: [true, true, true, true, true],
    },
    {
      title: "Organization logo on official websites and social media pages",
      features: [true, true, true, false, true],
    },
    {
      title:
        "Organization logo on marketing materials, website, YouTube video conclusions and the partnership section of the magazine",
      features: [true, true, true, true, true],
    },
    {
      title: "Speech at the launching ceremony of Exposition Issue 21",
      features: [true, false, false, false, false],
    },
    {
      title: 'Opportunity to conduct a "How You Did It" Session',
      features: [true, false, false, false, false],
    },
    {
      title: "Advertisement in the Exposition Magazine",
      features: [
        { type: "text", value: "Full Page Back Cover" },
        { type: "text", value: "Full Page" },
        { type: "text", value: "Half Page" },
        { type: "text", value: "Half Page" },
        { type: "text", value: "Half Page" },
      ],
    },
    {
      title: "Duration of the introductory/ promotional video",
      features: [
        { type: "text", value: "5 mins" },
        { type: "text", value: "3 mins" },
        { type: "text", value: "2 mins" },
        { type: "text", value: "1 min" },
        { type: "text", value: "30 sec" },
      ],
    },
    {
      title:
        "Banners to be displayed at the Exposition magazine launch ceremony",
      features: [
        { type: "text", value: "08" },
        { type: "text", value: "05" },
        { type: "text", value: "03" },
        { type: "text", value: "02" },
        { type: "text", value: "01" },
      ],
    },
    {
      title: "Duration of the sessions/workshops done at the industrial week",
      features: [
        { type: "text", value: "Full Day" },
        { type: "text", value: "Half Day" },
        { type: "text", value: "One Hour" },
        false,
        false,
      ],
    },
    {
      title: "Exhibition booth/ space at the Career Fair",
      features: [true, true, true, true, false],
    },
  ];

  const renderFeatureCell = (feature: any, partnershipIndex: number) => {
    const partnership = partnerships[partnershipIndex];

    if (feature === true) {
      return (
        <div className="flex justify-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center`}
            style={{
              background: `linear-gradient(to right, ${partnership.gradient.from}, ${partnership.gradient.to})`,
            }}
          >
            <Check className={`h-5 w-5 ${partnership.textColor}`} />
          </div>
        </div>
      );
    } else if (feature === false) {
      return (
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <X className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      );
    } else if (typeof feature === "object" && feature.type === "text") {
      return (
        <div
          className={`text-center py-2 px-3 ${partnership.textColor} rounded text-sm font-medium`}
          style={{
            background: `linear-gradient(to right, ${partnership.gradient.from}, ${partnership.gradient.to})`,
          }}
        >
          {feature.value}
        </div>
      );
    }

    return null;
  };

  const renderMobileFeature = (feature: any, partnershipIndex: number) => {
    const partnership = partnerships[partnershipIndex];

    if (feature === true) {
      return (
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}
            style={{
              background: `linear-gradient(to right, ${partnership.gradient.from}, ${partnership.gradient.to})`,
            }}
          >
            <Check className={`h-4 w-4 ${partnership.textColor}`} />
          </div>
          <span className="text-green-400 text-sm">Included</span>
        </div>
      );
    } else if (feature === false) {
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
            <X className="h-4 w-4 text-gray-400" />
          </div>
          <span className="text-gray-500 text-sm">Not included</span>
        </div>
      );
    } else if (typeof feature === "object" && feature.type === "text") {
      return (
        <div
          className={`inline-flex py-1.5 px-3 ${partnership.textColor} rounded text-sm font-medium`}
          style={{
            background: `linear-gradient(to right, ${partnership.gradient.from}, ${partnership.gradient.to})`,
          }}
        >
          {feature.value}
        </div>
      );
    }

    return null;
  };

  return (
    <section
      id="partnership-packages"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto  relative z-10">
        {/* Mobile View - Card Based */}
        <div className="lg:hidden">
          {/* Partnership Selector */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() =>
                setActivePartnership(
                  (prev) =>
                    (prev - 1 + partnerships.length) % partnerships.length
                )
              }
              className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 mx-4">
              <div
                className={`${partnerships[activePartnership].textColor} py-4 px-6 rounded-lg text-center`}
                style={{
                  background: `linear-gradient(to right, ${partnerships[activePartnership].gradient.from}, ${partnerships[activePartnership].gradient.to})`,
                }}
              >
                <h3 className="text-lg font-bold">
                  {partnerships[activePartnership].name}
                </h3>
              </div>
            </div>

            <button
              onClick={() =>
                setActivePartnership((prev) => (prev + 1) % partnerships.length)
              }
              className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Partnership Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {partnerships.map((_, index) => (
              <button
                key={index}
                onClick={() => setActivePartnership(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activePartnership
                    ? "w-8"
                    : "w-2 bg-gray-600"
                }`}
                style={
                  index === activePartnership
                    ? {
                        background: `linear-gradient(to right, ${partnerships[index].gradient.from}, ${partnerships[index].gradient.to})`,
                      }
                    : {}
                }
              />
            ))}
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 border border-gray-800"
              >
                <h4 className="text-white font-medium mb-3 text-sm leading-relaxed">
                  {deliverable.title}
                </h4>
                <div className="pl-2">
                  {renderMobileFeature(
                    deliverable.features[activePartnership],
                    activePartnership
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View - Table */}
        <div className="hidden lg:block">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            {/* Table Container */}
            <div className="overflow-x-auto">
              <div className="min-w-[900px]">
                {/* Table Header */}
                <div className="grid grid-cols-6 gap-3 mb-6">
                  <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">
                    Deliverables
                  </div>
                  {partnerships.map((partnership) => (
                    <div key={partnership.id} className="text-center">
                      <div
                        className={`${partnership.textColor} py-3 px-2 rounded-lg font-bold text-sm`}
                        style={{
                          background: `linear-gradient(to right, ${partnership.gradient.from}, ${partnership.gradient.to})`,
                        }}
                      >
                        {partnership.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                  {deliverables.map((deliverable, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="grid grid-cols-6 gap-3 items-center py-3 border-b border-gray-800 last:border-0"
                    >
                      <div className="text-gray-300 text-sm pr-4">
                        {deliverable.title}
                      </div>
                      {deliverable.features.map((feature, colIndex) => (
                        <div
                          key={colIndex}
                          className="flex justify-center items-center min-h-[50px]"
                        >
                          {renderFeatureCell(feature, colIndex)}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Mobile Tabs View (Optional) */}
        {/* Uncomment below for a tab-based mobile view instead of carousel */}
        {/* 
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
            {partnerships.map((partnership, index) => (
              <button
                key={partnership.id}
                onClick={() => setActivePartnership(index)}
                className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  index === activePartnership
                    ? `${partnership.bgColor} ${partnership.textColor}`
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {partnership.name}
              </button>
            ))}
          </div>
          
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
        */}
      </div>
    </section>
  );
};

export default PartnershipSummary;
