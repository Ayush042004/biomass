import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ImageCarousel from '../components/home/ImageCarousel';
import ProductsGrid from '../components/home/ProductsGrid';
import StatsBanner from '../components/home/StatsBanner';
import PartnersCarousel from '../components/home/PartnersCarousel';
import NewsletterForm from '../components/forms/NewsletterForm';

const HomePage: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const rotatingTexts = [
    "Sustainable Biomass Solutions for a Cleaner Future",
    "Leading Innovation in Renewable Energy Technology",
    "Transforming Waste into Clean Energy Solutions",
    "Building Tomorrow's Sustainable Energy Infrastructure"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
//card features
  const stats = [
    {
      number: "46%",
      label: "Biofuel Production ↑",
      description: "Increase in sustainable biofuel production through our solutions"
    },
    {
      number: "$117B",
      label: "Market Value",
      description: "Projected biomass market value by 2030"
    },
    {
      number: "3.5%",
      label: "Transport Energy Share",
      description: "Biomass contribution to global transport energy"
    },
    {
      number: "72%",
      label: "Emission Reduction",
      description: "Average CO2 reduction achieved with our systems"
    }
  ];

  const testimonials = [
    {
      quote: "Nature Bio Works has been instrumental in supporting our shift toward clean energy. Their biomass briquettes and RDF fuels have helped us significantly reduce our carbon footprint and meet internal ESG benchmarks — all without compromising operational efficiency.",
      author: "Sarah Chen",
      role: "Sustainability Head, Leading Beverage Manufacturer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5
    },
    {
      quote: "Their team brought deep technical expertise and a turnkey solution to the table. From fuel supply to boiler integration, the entire transition was seamless — a rare combination of reliability, innovation, and environmental commitment.",
      author: "Emma Thompson",
      role: "Energy Manager, Global Consumer Goods Company",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
      rating: 5
    },
    {
      quote: "Nature Bio Works has consistently delivered high-quality biomass fuel solutions at scale. Their ability to convert waste into energy not only meets regulatory expectations but supports our long-term sustainability roadmap.",
      author: "David Park",
      role: "VP - Environment & Compliance, Major Infrastructure Group",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      rating: 5
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Image Carousel Section */}
      <ImageCarousel />
      
      {/* Hero Section with Rotating Text */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="h-12 sm:h-16 md:h-20 flex items-center justify-center"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-primary-300 px-4">
                {rotatingTexts[currentTextIndex]}
              </h1>
            </motion.div>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 text-primary-100 max-w-3xl mx-auto text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Leading the way in renewable energy with innovative biomass technologies that reduce emissions and increase efficiency.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn-accent text-center inline-block text-sm sm:text-base">
                  About Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/research" className="btn-outline border-white text-white hover:bg-white/10 text-center inline-block text-sm sm:text-base">
                  Research & Development
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <StatsBanner stats={stats} />

      <section className="section">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">About Nature Bio Works</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
              Established in 2021, Nature Bio Works has been a pioneer in delivering advanced sustainable energy solutions. We specialize in enabling industrial and institutional clients to transition seamlessly from fossil fuels to high-efficiency biomass technologies. 
              Our operations are driven by a deep commitment to environmental stewardship, supported by state-of-the-art engineering and innovative waste-to-energy systems.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="btn-primary text-sm sm:text-base">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg"
                alt="About Nature Biomass"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <ProductsGrid />
      
      <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Discover how our biomass solutions have transformed businesses worldwide.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute top-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                    <motion.img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="ml-2 sm:ml-3 lg:ml-4">
                      <h3 className="font-semibold text-sm sm:text-base lg:text-lg">{testimonial.author}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="text-yellow-400 text-xs sm:text-sm"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            ★
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed text-xs sm:text-sm lg:text-base">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <PartnersCarousel />
      
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Stay Updated</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 lg:mb-8 px-4">
              Subscribe to our newsletter to get the latest updates on biomass solutions, industry news, and exclusive offers.
            </p>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;