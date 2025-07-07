import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FAQ from 'react-faq-component';
import { products } from '../../data/products';

const HotWaterGeneratorsPage: React.FC = () => {
  const hotWaterGenerator = products.find(product => product.id === 'hot-water-generators')!;

  const faqData = {
    rows: hotWaterGenerator.faqs.map(faq => ({
      title: faq.question,
      content: faq.answer
    }))
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.section 
        className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight px-4"
              variants={itemVariants}
            >
              {hotWaterGenerator.title}
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary-100 max-w-3xl mx-auto px-4"
              variants={itemVariants}
            >
              {hotWaterGenerator.description}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img 
                  src={hotWaterGenerator.image}
                  alt={hotWaterGenerator.title}
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                Product Features
              </h2>
              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {hotWaterGenerator.details?.map((detail, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 text-xs sm:text-sm">
                        ✓
                      </div>
                    </div>
                    <div className="ml-3 sm:ml-4">
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 group-hover:text-primary-700 transition-colors duration-300">
                        {detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="section bg-gradient-to-br from-gray-50 to-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.h2 
            className="section-title bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Applications
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Industrial Heating",
                description: "Perfect for manufacturing facilities requiring reliable hot water for various processes."
              },
              {
                title: "Commercial Buildings",
                description: "Ideal for hotels, hospitals, and office complexes requiring consistent hot water supply."
              },
              {
                title: "Agricultural Processing",
                description: "Essential for food processing and agricultural operations requiring hot water."
              }
            ].map((application, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl group cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-primary-800 relative z-10">
                    {application.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors duration-300">
                    {application.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.h2 
            className="section-title bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Specifications
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl"
                >
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-primary-800 mb-2">Water Temperature</h3>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600">Up to 90°C</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl"
                >
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-accent-800 mb-2">Capacity Range</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-accent-600">Up to 1000 LPH</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section bg-gradient-to-br from-gray-50 to-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.h2 
            className="section-title bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <FAQ 
                data={faqData}
                styles={{
                  bgColor: 'transparent',
                  titleTextColor: '#1a1a1a',
                  rowTitleColor: '#1a1a1a',
                  rowContentColor: '#4a4a4a',
                  arrowColor: '#48944f',
                  rowTitleTextSize: '16px',
                  rowContentTextSize: '14px',
                }}
                config={{
                  animate: true,
                  openOnload: 0,
                  expandIcon: '+',
                  collapseIcon: '-',
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section bg-gradient-to-r from-primary-600 to-primary-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/90 to-primary-900/90"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 px-4"
              variants={itemVariants}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-100 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-4"
              variants={itemVariants}
            >
              Contact us to learn more about our hot water generator solutions and get a customized quote for your needs.
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-white text-primary-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base md:text-lg"
              >
                Request a Quote
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HotWaterGeneratorsPage;