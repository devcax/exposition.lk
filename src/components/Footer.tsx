import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ExternalLink,
  Heart,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      href: "https://www.facebook.com/Exposition.MIT",
      label: "Facebook",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/company/theexposition",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://www.instagram.com/exposition_lk/",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { name: "Events", href: "#structure" },
    { name: "Event Structure", href: "#structure" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#f1b759]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#f1b759]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-9 gap-12 lg:gap-8">
              {/* Brand Column - Larger space */}
              <div className="lg:col-span-4">
                <div className="flex flex-col items-start">
                  {/* Logos */}
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src="/expo/assets/expo-logo.png"
                      alt="Exposition"
                      className="h-20 w-auto"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                      }}
                    />
                    <div className="w-px h-16 bg-gray-700"></div>
                    <img
                      src="/assets/logo.png"
                      alt="University Logo"
                      className="h-20 w-auto"
                    />
                  </div>

                  <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                    Celebrating academic excellence through compelling
                    storytelling and meaningful partnerships. Join us in shaping
                    the future of education and innovation.
                  </p>

                  {/* Social Links with better styling */}
                  <div>
                    <p className="text-white font-medium mb-4">Follow Us</p>
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-12 h-12 flex items-center justify-center bg-gray-800/50 hover:bg-[#f1b759] text-gray-400 hover:text-black rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-[#f1b759]"
                        >
                          <div className="transform group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-2">
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  Quick Links
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f1b759] to-transparent"></div>
                </h3>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="group flex items-center text-gray-400 hover:text-[#f1b759] text-sm transition-all duration-300"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-3">
                <h3 className="text-white font-semibold text-lg mb-6 relative">
                  Contact Info
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#f1b759] to-transparent"></div>
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                    <MapPin className="h-5 w-5 text-[#f1b759] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm font-medium mb-1">
                        University of Kelaniya
                      </p>
                      <p className="text-gray-400 text-sm">
                        Dalugama, Kelaniya 11600
                      </p>
                      <p className="text-gray-400 text-sm">Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                    <Phone className="h-5 w-5 text-[#f1b759] flex-shrink-0" />
                    <a
                      href="tel:+94112903903"
                      className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors"
                    >
                      +94 11 290 3903
                    </a>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50">
                    <Mail className="h-5 w-5 text-[#f1b759] flex-shrink-0" />
                    <a
                      href="mailto:magazine@exposition.lk"
                      className="text-gray-400 hover:text-[#f1b759] text-sm transition-colors"
                    >
                      magazine@exposition.lk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>©2025 Exposition.</span>
                {/* <Heart className="h-4 w-4 text-red-500 fill-current" /> */}
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#f1b759] text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#f1b759] text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-[#f1b759] text-sm transition-colors"
                >
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
