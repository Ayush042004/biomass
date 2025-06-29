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
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Partner Card */}
                <motion.div
                  className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Company Logo */}
                  <motion.img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Subtle Glow Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover Indicator - appears on first logo only */}
                  {index === 0 && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="text-white text-xs">?</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Company Name at Bottom */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                >
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-semibold">{partner.name}</span>
                  </div>
                  
                  {/* Small Arrow pointing up */}
                  <motion.div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-500 rotate-45"
                    initial={{ scale: 0 }}
                    whileHover={{ 
                      scale: 1,
                      transition: { delay: 0.1, duration: 0.2 }
                    }}
                  />
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