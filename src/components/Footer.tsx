import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook', color: 'hover:text-blue-400' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'E-Magazine', href: '#magazine' },
    { name: 'Events', href: '#structure' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Partnerships', href: '#partnerships' },
    { name: 'Contact', href: '#contact' },
  ];

  const partnershipLinks = [
    { name: 'Title Partner', href: '#' },
    { name: 'Platinum Partner', href: '#' },
    { name: 'Gold Partner', href: '#' },
    { name: 'Silver Partner', href: '#' },
    { name: 'Bronze Partner', href: '#' },
    { name: 'Partnership Guide', href: '#' },
    { name: 'Apply Now', href: '#' },
  ];

  const resources = [
    { name: 'Media Kit', href: '#' },
    { name: 'Brand Guidelines', href: '#' },
    { name: 'Press Releases', href: '#' },
    { name: 'Annual Reports', href: '#' },
    { name: 'Research Papers', href: '#' },
    { name: 'Alumni Network', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-amber-600/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <img 
                  src="/public/EXPO LOGO.png" 
                  alt="Exposition Logo" 
                  className="h-12 w-auto group-hover:scale-110 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
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
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Celebrating academic excellence and fostering innovation through compelling storytelling, meaningful partnerships, and community engagement that shapes the future of education.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-600/50 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-semibold rounded-r-xl transition-all duration-300 transform hover:scale-105">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500"></div>
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

          {/* Partnership Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Partnerships
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500"></div>
            </h3>
            <ul className="space-y-3">
              {partnershipLinks.map((link, index) => (
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

          {/* Resources & Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Resources
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-600 to-amber-500"></div>
            </h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-amber-500 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="p-2 bg-amber-600/20 rounded-lg group-hover:bg-amber-600/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-amber-500" />
                </div>
                <span className="text-sm">123 University Ave, Academic City</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="p-2 bg-amber-600/20 rounded-lg group-hover:bg-amber-600/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-amber-500" />
                </div>
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <div className="p-2 bg-amber-600/20 rounded-lg group-hover:bg-amber-600/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-amber-500" />
                </div>
                <span className="text-sm">magazine@exposition.lk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
              <span>© 2024 Exposition. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>for academic excellence.</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 text-sm transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;