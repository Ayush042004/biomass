import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [fuelsDropdownOpen, setFuelsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsDropdownOpen(false);
    setFuelsDropdownOpen(false);
  }, [location]);

  const handleDropdownEnter = useCallback((setter: (value: boolean) => void) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setter(true);
  }, [dropdownTimeout]);

  const handleDropdownLeave = useCallback((setter: (value: boolean) => void) => {
    const timeout = setTimeout(() => {
      setter(false);
    }, 200);
    setDropdownTimeout(timeout);
  }, []);

  const toggleDropdown = useCallback((current: boolean, setter: (value: boolean) => void) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setter(!current);
  }, [dropdownTimeout]);

  const productLinks = [
    { name: 'Steam Boilers', path: '/products/steam-boilers' },
    { name: 'Wood Fired Hot Air Generators', path: '/products/hot-air-generators' },
    { name: 'Electric Hot Water Boilers', path: '/products/electric-hot-water' },
    { name: 'Steam Generators', path: '/products/steam-generators' },
    { name: 'Thermic Fluid Heater', path: '/products/thermic-fluid' },
    { name: 'Hot Water Generators', path: '/products/hot-water-generators' },
  ];

  const fuelLinks = [
    { name: 'Biomass Briquettes', path: '/fuels/briquettes' },
    { name: 'Biomass Pellets', path: '/fuels/pellets' },
    { name: 'Biomass  Chips', path: '/fuels/wood-chips' },
    { name: 'Cashew Nuts Shell (CNS)', path: '/fuels/cashew-nut-shell' },
  ];

  const isProductActive = location.pathname.startsWith('/products');
  const isFuelActive = location.pathname.startsWith('/fuels');

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: {
      opacity: 0,
      x: -20
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full py-2 sm:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Name - Left Side */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 -ml-2 sm:-ml-4 lg:-ml-6"
            >
              <Link to="/" className="flex items-center">
                <Logo size={85} color='white' />
                <span className="ml-1 text-base sm:text-lg lg:text-xl font-bold text-primary-800 font-display tracking-tight">Nature Bio Works</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-center">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link to="/" className="nav-link font-semibold hover:text-primary-500 text-sm xl:text-base">
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link to="/about" className="nav-link font-semibold hover:text-primary-500 text-sm xl:text-base">
                  About Us
                </Link>
              </motion.div>

              {/* Products Dropdown */}
              <div className="relative">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/products"
                    className={`nav-link font-semibold hover:text-primary-500 flex items-center text-sm xl:text-base ${
                      isProductActive ? 'text-primary-500' : ''
                    }`}
                    onMouseEnter={() => handleDropdownEnter(setProductsDropdownOpen)}
                    onMouseLeave={() => handleDropdownLeave(setProductsDropdownOpen)}
                    onClick={() => toggleDropdown(productsDropdownOpen, setProductsDropdownOpen)}
                  >
                    Products & Services
                    <motion.div
                      animate={{ rotate: productsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                    </motion.div>
                  </Link>
                </motion.div>
                <AnimatePresence>
                  {productsDropdownOpen && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 xl:w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onMouseEnter={() => handleDropdownEnter(setProductsDropdownOpen)}
                      onMouseLeave={() => handleDropdownLeave(setProductsDropdownOpen)}
                    >
                      {productLinks.map((link, index) => (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={link.path}
                            className={`block px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium ${
                              location.pathname === link.path ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Biomass Fuels Dropdown */}
              <div className="relative">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    to="/fuels"
                    className={`nav-link font-semibold hover:text-primary-500 flex items-center text-sm xl:text-base ${
                      isFuelActive ? 'text-primary-500' : ''
                    }`}
                    onMouseEnter={() => handleDropdownEnter(setFuelsDropdownOpen)}
                    onMouseLeave={() => handleDropdownLeave(setFuelsDropdownOpen)}
                    onClick={() => toggleDropdown(fuelsDropdownOpen, setFuelsDropdownOpen)}
                  >
                    Biomass Fuels
                    <motion.div
                      animate={{ rotate: fuelsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4" />
                    </motion.div>
                  </Link>
                </motion.div>
                <AnimatePresence>
                  {fuelsDropdownOpen && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 xl:w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onMouseEnter={() => handleDropdownEnter(setFuelsDropdownOpen)}
                      onMouseLeave={() => handleDropdownLeave(setFuelsDropdownOpen)}
                    >
                      {fuelLinks.map((link, index) => (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            to={link.path}
                            className={`block px-3 xl:px-4 py-2 text-sm xl:text-base text-gray-800 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200 font-medium ${
                              location.pathname === link.path ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                          >
                            {link.name}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link to="/team" className="nav-link font-semibold hover:text-primary-500 text-sm xl:text-base">
                  Team
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link to="/research" className="nav-link font-semibold hover:text-primary-500 text-sm xl:text-base">
                  Research & Development
                </Link>
              </motion.div>
            </nav>

            {/* Contact Us Button - Right Side */}
            <div className="hidden lg:block flex-shrink-0 -mr-2 sm:-mr-4 lg:-mr-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary text-sm xl:text-base">
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} className="sm:w-5 sm:h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white shadow-lg border-t border-gray-100"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto py-4 px-4 sm:px-6">
              <nav className="flex flex-col space-y-3 sm:space-y-4">
                <motion.div variants={mobileItemVariants}>
                  <Link to="/" className="py-2 px-2 font-semibold hover:text-primary-500 transition-colors duration-200 text-sm sm:text-base">
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Link to="/about" className="py-2 px-2 font-semibold hover:text-primary-500 transition-colors duration-200 text-sm sm:text-base">
                    About Us
                  </Link>
                </motion.div>

                {/* Mobile Products Menu */}
                <motion.div className="py-2" variants={mobileItemVariants}>
                  <button
                    className={`flex items-center justify-between w-full font-semibold hover:text-primary-500 transition-colors duration-200 px-2 text-sm sm:text-base ${
                      isProductActive ? 'text-primary-500' : ''
                    }`}
                    onClick={() => toggleDropdown(productsDropdownOpen, setProductsDropdownOpen)}
                  >
                    Products & Services
                    <motion.div
                      animate={{ rotate: productsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {productsDropdownOpen && (
                      <motion.div 
                        className="pl-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {productLinks.map((link, index) => (
                          <motion.div
                            key={link.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={link.path}
                              className={`block py-2 px-2 text-gray-800 hover:text-primary-500 transition-colors duration-200 font-medium text-sm sm:text-base ${
                                location.pathname === link.path ? 'text-primary-500' : ''
                              }`}
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Mobile Fuels Menu */}
                <motion.div className="py-2" variants={mobileItemVariants}>
                  <button
                    className={`flex items-center justify-between w-full font-semibold hover:text-primary-500 transition-colors duration-200 px-2 text-sm sm:text-base ${
                      isFuelActive ? 'text-primary-500' : ''
                    }`}
                    onClick={() => toggleDropdown(fuelsDropdownOpen, setFuelsDropdownOpen)}
                  >
                    Biomass Fuels
                    <motion.div
                      animate={{ rotate: fuelsDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {fuelsDropdownOpen && (
                      <motion.div 
                        className="pl-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {fuelLinks.map((link, index) => (
                          <motion.div
                            key={link.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={link.path}
                              className={`block py-2 px-2 text-gray-800 hover:text-primary-500 transition-colors duration-200 font-medium text-sm sm:text-base ${
                                location.pathname === link.path ? 'text-primary-500' : ''
                              }`}
                            >
                              {link.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div variants={mobileItemVariants}>
                  <Link to="/team" className="py-2 px-2 font-semibold hover:text-primary-500 transition-colors duration-200 text-sm sm:text-base">
                    Team
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants}>
                  <Link to="/research" className="py-2 px-2 font-semibold hover:text-primary-500 transition-colors duration-200 text-sm sm:text-base">
                    Research & Development
                  </Link>
                </motion.div>
                <motion.div variants={mobileItemVariants} className="pt-2">
                  <Link to="/contact" className="btn-primary text-center mt-4 w-full text-sm sm:text-base">
                    Contact Us
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;