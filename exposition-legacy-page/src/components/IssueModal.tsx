import React from "react";
import { MagazineIssue } from "../types/magazine";
import {
  X,
  Download,
  Users,
  BookOpen,
  University,
  Calendar,
  MapPin,
  Star,
} from "lucide-react";

interface IssueModalProps {
  issue: MagazineIssue | null;
  onClose: () => void;
}

const IssueModal: React.FC<IssueModalProps> = ({ issue, onClose }) => {
  if (!issue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-800">
        <div className="relative">
          {/* Header with background */}
          <div
            className="h-64 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${issue.backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#e3c767] text-black font-bold px-6 py-2 rounded-full text-2xl">
                  {issue.year}
                </div>
                <div className="bg-black/60 backdrop-blur-sm text-[#e3c767] px-4 py-2 rounded-full text-sm font-medium border border-[#e3c767]/30">
                  {issue.theme}
                </div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-2">
                {issue.title}
              </h2>
              <p className="text-xl text-[#e3c767]">
                Keynote: {issue.keynoteNames}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <Users className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">
                  {issue.attendeesCount}
                </div>
                <div className="text-gray-400">Attendees</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <BookOpen className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">
                  {issue.statistics.totalArticles}
                </div>
                <div className="text-gray-400">Articles</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <Users className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">
                  {issue.statistics.contributingWriters}
                </div>
                <div className="text-gray-400">Writers</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
                <University className="w-8 h-8 text-[#e3c767] mx-auto mb-3" />
                <div className="text-2xl font-bold text-white">
                  {issue.statistics.universitiesRepresented}
                </div>
                <div className="text-gray-400">Universities</div>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-[#e3c767]" />
                  <span className="font-medium">
                    Published: {issue.publicationDate}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#e3c767]" />
                  <span className="font-medium">Reach: {issue.reachScope}</span>
                </div>
              </div>
              <div className="text-right">
                <button className="bg-gradient-to-r from-[#aa7d39] to-[#e3c767] text-black font-semibold py-3 px-6 rounded-full hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all duration-300 flex items-center gap-2 ml-auto">
                  <Download className="w-4 h-4" />
                  Download Issue
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                About This Issue
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {issue.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Key Highlights
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {issue.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <Star className="w-5 h-5 text-[#e3c767] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Articles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Featured Articles
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {issue.articles.map((article, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800/30 rounded-xl p-6 border border-gray-700"
                  >
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {article.title}
                    </h4>
                    <p className="text-[#e3c767] text-sm mb-3">
                      By {article.author}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueModal;
