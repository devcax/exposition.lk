import React, { useState } from "react";
import { ArrowLeft, Calendar, BookOpen, TrendingUp, Award } from "lucide-react";
import { MagazineIssue } from "../types/magazine";
import { magazineIssues } from "../data/magazineIssues";
import MagazineCard from "./MagazineCard";
import IssueModal from "./IssueModal";

interface LegacyPageProps {
  onBack: () => void;
}

const LegacyPage: React.FC<LegacyPageProps> = ({ onBack }) => {
  const [selectedIssue, setSelectedIssue] = useState<MagazineIssue | null>(
    null
  );

  const handleViewDetails = (issue: MagazineIssue) => {
    setSelectedIssue(issue);
  };

  const closeModal = () => {
    setSelectedIssue(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-[#e3c767] transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Distinguished Issues
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Explore our carefully curated collection of publications that have
            shaped academic discourse over two decades
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {magazineIssues.map((issue) => (
            // <MagazineCard
            //   key={issue.id}
            //   issue={issue}
            //   onViewDetails={handleViewDetails}
            // />
          ))}
        </div>
      </div>

      <IssueModal issue={selectedIssue} onClose={closeModal} />
    </div>
  );
};

export default LegacyPage;

// In your Hero.tsx, update the handleLegacyClick function:
const handleLegacyClick = () => {
  console.log("Legacy button clicked!"); // Add this line
  setShowLegacy(true);
};
