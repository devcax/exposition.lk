import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Send } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: 'https://www.facebook.com/imssa.uok/',
      label: 'Facebook',
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://lk.linkedin.com/company/imssauok',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: 'https://www.instagram.com/imssa.uok/',
      label: 'Instagram',
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
    <footer id="contact" className="bg-black relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black pointer-events-none"></div>
      
      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          {/* Main Footer Grid */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <img
                  src="/expo/assets/expo-logo.png"
                  alt="Exposition"
                  className="h-24 w-auto mb-6"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const next = img.nextElementSibling as HTMLElement | null;
                    if (next) next.style.display = 'block';
                  }}
                />
                <h2 className="hidden text-2xl font-bold text-[#f1b759] mb-6">
                  Exposition
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Celebrating academic excellence through compelling storytelling and meaningful partnerships.
                </p>
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-[#f1b759] text-gray-400 hover:text-black rounded-sm transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-medium text-lg mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services/Resources */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-medium text-lg mb-6">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors duration-300">
                      Digital Archives
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors duration-300">
                      Submission Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors duration-300">
                      Editorial Calendar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors duration-300">
                      Media Kit
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors duration-300">
                      Advertise With Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-medium text-lg mb-6">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#f1b759] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">University of Kelaniya</p>
                      <p className="text-gray-400 text-sm">Dalugama, Kelaniya 11600</p>
                      <p className="text-gray-400 text-sm">Sri Lanka</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#f1b759] flex-shrink-0" />
                    <p className="text-gray-400 text-sm">+94 11 290 3903</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#f1b759] flex-shrink-0" />
                    <a href="mailto:magazine@exposition.lk" className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors">
                      magazine@exposition.lk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Exposition. All Rights Reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-[#f1b759] text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-[#f1b759] text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-[#f1b759] text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;