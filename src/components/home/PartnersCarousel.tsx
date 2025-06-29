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
                  className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    rotateY: 5,
                    transition: { 
                      duration: 0.4,
                      ease: "easeOut"
                    }
                  }}
                >
                  {/* Company Logo */}
                  <motion.img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-500"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -2, 2, 0],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut"
                      }
                    }}
                  />
                  
                  {/* Animated Background Gradient on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary-100/50 via-accent-100/30 to-primary-200/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ scale: 0, rotate: 45 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 0,
                      transition: { duration: 0.5 }
                    }}
                  />
                  
                  {/* Subtle Border Animation */}
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary-300 transition-all duration-500"
                    whileHover={{
                      borderColor: ["transparent", "#92ce9a", "#48944f", "#92ce9a"],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.div>

                {/* Company Name Tooltip - Shows on hover */}
                <motion.div
                  className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ y: 20, scale: 0.5 }}
                  whileHover={{ 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.4,
                      ease: "backOut"
                    }
                  }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg shadow-xl"
                    whileHover={{
                      scale: [1, 1.05, 1],
                      transition: {
                        duration: 0.6,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <span className="text-sm font-semibold">{partner.name}</span>
                  </motion.div>
                  
                  {/* Animated Arrow */}
                  <motion.div 
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary-600 rotate-45"
                    whileHover={{
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 0.4,
                        ease: "easeInOut"
                      }
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