import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-3 sm:mb-4">
              <Logo size={40} color="white" />
              <span className="ml-2 text-base sm:text-lg lg:text-xl font-bold font-display tracking-tight">Nature Bio Works</span>
            </Link>
            <p className="text-gray-400 mb-3 sm:mb-4 text-body leading-relaxed text-sm sm:text-base">
              Sustainable biomass solutions for a cleaner future. Delivering innovative renewable energy systems since 2021.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://x.com/Naturebioworks" target="_blank" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="Twitter">
                <Twitter size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/naturebioworks/" target="_blank" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={16} className="sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:Info@naturebioworks.in" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="Email">
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-display tracking-tight">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-display tracking-tight">Research Areas</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Biomass Technology
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Sustainable Energy
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Process Innovation
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium text-sm sm:text-base">
                  Environmental Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-display tracking-tight">Contact Info</h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-400 font-medium text-sm sm:text-base">
              B-44,1st Floor,
              Noida Sector 64, Gautam Buddha Nagar
              Uttar Pradesh, India
              </p>
              <p className="text-gray-400 font-medium text-sm sm:text-base">
              012-0444-4600, +91 98736 94143 , 9625979877
              </p>
              <p className="text-gray-400 font-medium text-sm sm:text-base">
              Info@naturebioworks.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm mb-0 font-medium text-center sm:text-left">
              © {new Date().getFullYear()} Nature Bio Works. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-xs sm:text-sm hover:text-primary-300 font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 text-xs sm:text-sm hover:text-primary-300 font-medium">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 text-xs sm:text-sm hover:text-primary-300 font-medium">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;