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
                  className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 border-2 border-transparent"
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    borderColor: "#48944f", // Green border on hover
                    boxShadow: "0 10px 25px rgba(72, 148, 79, 0.2)",
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  initial={{
                    scale: 1,
                    y: 0,
                    borderColor: "transparent"
                  }}
                >
                  {/* Company Logo */}
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </motion.div>

                {/* Company Name - Shows on hover with larger size */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-20"
                  initial={{ 
                    opacity: 0, 
                    y: 10, 
                    scale: 0.8 
                  }}
                  whileHover={{ 
                    opacity: 1,
                    y: 0, 
                    scale: 1.2, // Make text 20% larger
                    transition: { 
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  animate={{
                    opacity: 0,
                    y: 10,
                    scale: 0.8
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeIn"
                  }}
                >
                  <motion.div 
                    className="bg-white text-primary-800 px-4 py-2 rounded-lg shadow-lg border-2 border-transparent"
                    whileHover={{
                      borderColor: "#48944f", // Green border on name hover
                      backgroundColor: "#f0f9f1", // Light green background
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                    initial={{
                      borderColor: "transparent",
                      backgroundColor: "#ffffff"
                    }}
                  >
                    <span className="text-base font-semibold">{partner.name}</span>
                  </motion.div>
                  
                  {/* Arrow pointing up */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l-2 border-t-2 border-primary-500" />
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