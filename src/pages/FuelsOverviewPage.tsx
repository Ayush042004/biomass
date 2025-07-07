import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fuels } from '../data/fuels';

const FuelsOverviewPage: React.FC = () => {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.section 
        className="relative bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-4xl text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight px-4"
              variants={itemVariants}
            >
              Biomass Fuels
            </motion.h1>
            <motion.p 
              className="text-xs sm:text-sm md:text-base lg:text-xl text-gray-100 max-w-3xl px-4"
              variants={itemVariants}
            >
              Discover our range of sustainable biomass fuel solutions.
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
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-primary-800"
              variants={itemVariants}
            >
              Sustainable Fuel Solutions
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
              variants={itemVariants}
            >
              High-quality biomass fuels designed for optimal energy production and environmental responsibility.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fuels.map((fuel, _) => (
              <motion.div
                key={fuel.id}
                variants={cardVariants}
                whileHover="hover"
              >
                <Link 
                  to={`/fuels/${fuel.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                      <img 
                        src={fuel.image}
                        alt={fuel.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 bg-primary-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                        {fuel.calorificValue} kcal/kg
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white font-semibold text-sm sm:text-base md:text-lg bg-primary-500 px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full">
                          Learn More
                        </span>
                      </motion.div>
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                      <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">
                        {fuel.name}
                      </h2>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{fuel.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary-500 font-medium group-hover:text-primary-600 transition-colors inline-flex items-center text-xs sm:text-sm md:text-base">
                          View Details 
                          <motion.span
                            className="ml-2"
                            initial={{ x: 0 }}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            →
                          </motion.span>
                        </span>
                        <span className="bg-primary-100 text-primary-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {fuel.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(72, 148, 79, 0.9), rgba(72, 148, 79, 0.8)), url(https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center text-white"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 md:mb-6 px-4"
              variants={itemVariants}
            >
              Ready to Switch to Biomass?
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto px-4"
              variants={itemVariants}
            >
              Contact us to learn how our biomass fuels can help reduce your carbon footprint and energy costs.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact" className="btn-accent text-sm sm:text-base md:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default FuelsOverviewPage;