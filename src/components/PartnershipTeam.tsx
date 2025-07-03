import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

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
    name: 'Lavindu Binuwara',
    title: 'Editor-in-Chief',
    email: 'lavindubinuwara1@gmail.com',
    phone: '+94 71 684 6120',
    image: '/team/lavindu.jpg',
    linkedin: 'https://www.linkedin.com/in/lavindubinuwara',
  },
  {
    name: 'Hashani Uduwage',
    title: 'Editor-in-Chief',
    email: 'uduwageh@gmail.com',
    phone: '+94 77 247 4149',
    image: '/team/hashani.jpg',
    linkedin: 'https://www.linkedin.com/in/hashaniuduwage',
  },
  {
    name: 'Akila Benaragama',
    title: 'Partnership Coordinator',
    email: 'akilabenaragama@gmail.com',
    phone: '+94 77 582 6664',
    image: '/team/akila.jpg',
    linkedin: 'https://www.linkedin.com/in/akilabenaragama',
  },
  {
    name: 'Nevindi Munasinghe',
    title: 'Partnership Coordinator',
    email: 'nevindimunasinghe@gmail.com',
    phone: '071 684 6120',
    image: '/team/nevindi.jpg',
    linkedin: 'https://www.linkedin.com/in/nevindimunasinghe',
  },
];

const PartnershipTeam: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#e3c767] to-[#aa7d39]">
            Partnership Team
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Meet our dedicated partnership team who will work closely with you to ensure your partnership goals are achieved
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-[#e3c767]/50 transition-all hover:scale-105"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#e3c767]/20 hover:border-[#e3c767]/50 transition-all">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#e3c767] font-medium">{member.title}</p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#e3c767] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-[#e3c767] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{member.phone}</span>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#e3c767] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn - {member.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800 border border-slate-700 p-10 rounded-2xl text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e3c767] to-[#aa7d39] mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Let's discuss how we can create a customized partnership that delivers exceptional
            value for your organization and our university community
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#e3c767] to-[#aa7d39] text-black rounded-lg font-semibold hover:scale-105 transition">
              Contact Partnership Team
            </button>
            <button className="px-6 py-3 border border-[#e3c767] text-[#e3c767] rounded-lg font-semibold hover:bg-[#e3c767] hover:text-black transition">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipTeam;
