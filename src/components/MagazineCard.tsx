import React from "react";
import { MagazineIssue } from "../types/magazine";

interface MagazineCardProps {
  issue: MagazineIssue;
  onViewDetails: (issue: MagazineIssue) => void;
}

const MagazineCard: React.FC<MagazineCardProps> = ({
  issue,
  onViewDetails,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img
        src={issue.coverImage}
        alt={issue.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{issue.title}</h3>
        <p className="text-gray-400">{issue.publicationDate}</p>
        <button
          onClick={() => onViewDetails(issue)}
          className="mt-2 bg-[#e3c767] text-black font-semibold py-2 px-4 rounded hover:bg-[#aa7d39] transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MagazineCard;
