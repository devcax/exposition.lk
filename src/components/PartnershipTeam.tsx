import React from "react";
import { Mail, Phone } from "lucide-react";

interface Member {
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  linkedin: string;
}

const members: Member[] = [
  {
    name: "Lavindu Binuwara",
    title: "Editors-in-Chief",
    email: "lavindubinuwara1@gmail.com",
    phone: "+94 71 684 6120",
    image: "/assets/team/lavindu.png",
    linkedin: "https://www.linkedin.com/in/lavindubinuwara",
  },
  {
    name: "Hashani Uduwage",
    title: "Editors-in-Chief",
    email: "uduwageh@gmail.com",
    phone: "+94 77 247 4149",
    image: "/assets/team/hashani.png",
    linkedin: "https://www.linkedin.com/in/hashaniuduwage",
  },
  {
    name: "Akila Benaragama",
    title: "Partnership Coordinator",
    email: "akilabenaragama@gmail.com",
    phone: "+94 77 582 6664",
    image: "/assets/team/akila.png",
    linkedin: "https://www.linkedin.com/in/akilabenaragama",
  },
  {
    name: "Nevindi Munasinghe",
    title: "Partnership Coordinator",
    email: "nevindimunasinghe@gmail.com",
    phone: "+94 77 247 4149",
    image: "/assets/team/nevindi.png",
    linkedin: "https://www.linkedin.com/in/nevindimunasinghe",
  },
];

const PartnershipTeam: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#e3c767] via-[#aa7d39] to-[#B78F5A] bg-clip-text text-transparent">
              Partnership Team
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet our dedicated partnership team who will work closely with you
            to ensure your partnership goals are achieved
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-700 hover:border-[#e3c767]/50 transition-all overflow-hidden group"
            >
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
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-12 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#e3c767] to-[#aa7d39] bg-clip-text text-transparent">
              Want to Partner With Us?
            </span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a customized partnership that
            delivers exceptional value for your organization and our university
            community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-[#e3c767]/20 transition-all">
              Contact Partnership Team
            </button>
            <button className="px-8 py-3.5 bg-transparent border border-[#e3c767]/50 text-[#e3c767] rounded-lg font-semibold hover:bg-[#e3c767]/10 hover:border-[#e3c767] transition-all">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTeam;
