import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: 'https://www.facebook.com/imssa.uok/',
      label: 'Facebook',
      color: 'hover:text-blue-400',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://lk.linkedin.com/company/imssauok',
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/imssa.uok/',
      label: 'Instagram',
      color: 'hover:text-pink-400',
    },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'E-Magazine', href: '#magazine' },
    { name: 'Events', href: '#structure' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-amber-600/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-8 gap-y-2 mb-16">
          {/* Exposition Section */}
          <div>
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <img
                  src="/public/EXPO LOGO.png"
                  alt="Exposition Logo"
                  className="h-32 w-auto group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'block';
                  }}
                />
                <span className="hidden text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
                  Exposition
                </span>
                <div className="absolute inset-0 bg-amber-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Celebrating academic excellence and fostering innovation through compelling storytelling, meaningful partnerships,
              and community engagement that shapes the future of education.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Contact Info */}
          <div className="flex flex-col md:flex-row gap-20">
            {/* Quick Links */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#f1b759] hover:bg-[#e8a940]"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-amber-500 transition-all duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Contact
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#f1b759] hover:bg-[#e8a940]"></div>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <div className="p-2 bg-[#f1b759]/20 rounded-lg group-hover:bg-[#f1b759]/30 transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="text-sm">123 University Ave, Academic City</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <div className="p-2 bg-[#f1b759]/20 rounded-lg group-hover:bg-[#f1b759]/30 transition-colors duration-300">
                    <Phone className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 group">
                  <div className="p-2 bg-[#f1b759]/20 rounded-lg group-hover:bg-[#f1b759]/30 transition-colors duration-300">
                    <Mail className="h-4 w-4 text-amber-500" />
                  </div>
                  <span className="text-sm">magazine@exposition.lk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Exposition. </span>
              <span>All Rights Reserved.</span>
            </div>
            {/* <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
                Accessibility
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
