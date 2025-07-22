import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { partners } from '../../data/partners';

const PartnersCarousel: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section bg-gradient-to-br from-slate-50 to-slate-200" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Partners</h2>
          <p className="section-subtitle">
          Trusted by national brands and global MNCs for reliable biomass fuel supply and turnkey boiler systems.
          </p>
          
          {/* Hover Hint */}
          <motion.div
            className="text-center mb-4 sm:mb-6 lg:mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.p 
              className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2"
              animate={{ 
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                👆
              </motion.span>
              Hover over logos to see company names
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-6 sm:mt-8 lg:mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-16">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="relative group cursor-pointer"
                variants={itemVariants}
              >
                {/* Partner Card */}
                <div className="w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 lg:w-32 lg:h-20 xl:w-40 xl:h-24 flex items-center justify-center p-2 sm:p-3 md:p-4 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 border-2 border-transparent group-hover:border-primary-500 group-hover:scale-110 group-hover:-translate-y-2">
                  {/* Company Logo */}
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                  />
                </div>

                {/* Company Name Tooltip - Shows on hover */}
                <div className="absolute -bottom-10 sm:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-white text-primary-800 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg shadow-lg border-2 border-transparent group-hover:border-primary-500 group-hover:bg-primary-50 transition-all duration-300">
                    <span className="text-xs sm:text-sm md:text-base inline-block transition-transform duration-300">
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Arrow pointing up to the logo */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l-2 border-t-2 border-transparent group-hover:border-primary-500 group-hover:bg-primary-50 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;