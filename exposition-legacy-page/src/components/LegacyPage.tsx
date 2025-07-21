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

  // Calculate overall statistics
  const totalArticles = magazineIssues.reduce(
    (sum, issue) => sum + issue.statistics.totalArticles,
    0
  );
  const totalWriters = magazineIssues.reduce(
    (sum, issue) => sum + issue.statistics.contributingWriters,
    0
  );
  const totalUniversities = Math.max(
    ...magazineIssues.map((issue) => issue.statistics.universitiesRepresented)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#e3c767]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#aa7d39]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e3c767]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-16">
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-gray-400 hover:text-[#e3c767] transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          <div className="text-center">
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
        </div>

        {/* Overall Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <Calendar className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {magazineIssues.length}
            </div>
            <div className="text-gray-400">Issues Published</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <BookOpen className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {totalArticles}+
            </div>
            <div className="text-gray-400">Total Articles</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <TrendingUp className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {totalWriters}+
            </div>
            <div className="text-gray-400">Contributing Writers</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800">
            <Award className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {totalUniversities}+
            </div>
            <div className="text-gray-400">Universities</div>
          </div>
        </div>

        {/* Magazine Issues Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {magazineIssues.map((issue) => (
            <MagazineCard
              key={issue.id}
              issue={issue}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Legacy Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#aa7d39]/10 to-[#e3c767]/10 rounded-2xl border border-[#aa7d39]/30 p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Academic Legacy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              For over two decades, Exposition Magazine has been at the
              forefront of academic discourse, bringing together brilliant minds
              from around the world to explore the most pressing challenges and
              opportunities of our time. Each issue represents a milestone in
              our journey to bridge the gap between academic excellence and
              real-world impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-[#e3c767]/20 rounded-full px-6 py-3 text-[#e3c767] font-medium">
                Academic Excellence
              </div>
              <div className="bg-[#e3c767]/20 rounded-full px-6 py-3 text-[#e3c767] font-medium">
                Global Perspective
              </div>
              <div className="bg-[#e3c767]/20 rounded-full px-6 py-3 text-[#e3c767] font-medium">
                Innovation Focus
              </div>
              <div className="bg-[#e3c767]/20 rounded-full px-6 py-3 text-[#e3c767] font-medium">
                Future Leadership
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <IssueModal issue={selectedIssue} onClose={closeModal} />
    </div>
  );
};

export default LegacyPage;
