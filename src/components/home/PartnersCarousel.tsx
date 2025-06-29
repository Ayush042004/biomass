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
    <section className="section bg-gradient-to-br from-gray-50 to-gray-100" ref={ref}>
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
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.p 
              className="text-sm text-gray-500 flex items-center justify-center gap-2"
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
          className="mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                className="relative group cursor-pointer"
                variants={itemVariants}
              >
                {/* Partner Card */}
                <motion.div
                  className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Company Logo */}
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                  
                  {/* Subtle Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                {/* Company Name Tooltip - Only shows on logo hover */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-10"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ 
                    opacity: 0, 
                    y: 10, 
                    scale: 0.8
                  }}
                  whileHover={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  className="group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 opacity-0 translate-y-2 scale-90 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sm font-semibold">{partner.name}</span>
                  </div>
                  
                  {/* Small Arrow pointing up */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-500 rotate-45" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;