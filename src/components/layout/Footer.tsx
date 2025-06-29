import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Logo size ={60} color="white" />
              <span className="ml-2 text-xl font-bold font-display tracking-tight">Nature Bio Works</span>
            </Link>
            <p className="text-gray-400 mb-4 text-body leading-relaxed">
              Sustainable biomass solutions for a cleaner future. Delivering innovative renewable energy systems since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Naturebioworks" target="_blank" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/naturebioworks/" target="_blank" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:Info@naturebioworks.in" className="text-gray-400 hover:text-primary-300 transition-colors duration-200" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 font-display tracking-tight">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 font-display tracking-tight">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Biomass Technology
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Sustainable Energy
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Process Innovation
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors font-medium">
                  Environmental Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 font-display tracking-tight">Contact Info</h3>
            <div className="space-y-3">
              <p className="text-gray-400 font-medium">
              B-44,1st Floor,
              Noida Sector 64, Gautam Buddha Nagar
              Uttar Pradesh, India
              </p>
              <p className="text-gray-400 font-medium">
              012-0444-4600, +91 98736 94143 , 9625979877
              </p>
              <p className="text-gray-400 font-medium">
              Info@naturebioworks.in
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-medium">
              © {new Date().getFullYear()} Nature Bio Works. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary-300 font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary-300 font-medium">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 text-sm hover:text-primary-300 font-medium">
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