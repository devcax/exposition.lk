import React from "react";
import { Mail, Phone } from "lucide-react";
import { Member } from "../data/teamMembers";

interface PartnershipMemberCardProps {
  member: Member;
}

const PartnershipMemberCard: React.FC<PartnershipMemberCardProps> = ({ member }) => {
  return (
    <div className="relative rounded-2xl border border-slate-700 hover:border-[#e3c767]/50 transition-all overflow-hidden group">
      {/* Background gradient for the entire card */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>

      {/* Profile Image with Seamless Fade */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Multiple gradient overlays for seamless blend */}
        <div className="absolute inset-0">
          {/* Top subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20"></div>
          {/* Main gradient that matches card background */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 via-slate-900/70 to-transparent"
            style={{
              background:
                "linear-gradient(to top, rgb(15 23 42) 0%, rgb(15 23 42 / 0.95) 25%, rgb(15 23 42 / 0.70) 50%, transparent 100%)",
            }}
          ></div>
          {/* Additional gradient for smoother transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 -mt-20">
        {/* Name and Title */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-[#e3c767] font-medium text-sm">
            {member.title}
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <a
            href={`mailto:${member.email}`}
            className="flex items-center gap-3 p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all group/link border border-slate-700/50"
          >
            <Mail className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
            <span className="text-sm text-gray-300 group-hover/link:text-white transition-colors truncate">
              {member.email}
            </span>
          </a>
          <a
            href={`tel:${member.phone}`}
            className="flex items-center gap-3 p-3 bg-slate-800/30 backdrop-blur-sm rounded-lg hover:bg-slate-800/50 transition-all group/link border border-slate-700/50"
          >
            <Phone className="w-4 h-4 text-[#e3c767] flex-shrink-0" />
            <span className="text-sm text-gray-300 group-hover/link:text-white transition-colors">
              {member.phone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnershipMemberCard;