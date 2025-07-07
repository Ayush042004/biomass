import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface StatsBannerProps {
  stats: Stat[];
}

const StatsBanner: React.FC<StatsBannerProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const parseNumber = (numStr: string) => {
    const cleanNum = numStr.replace(/[^0-9.-]/g, '');
    return parseFloat(cleanNum);
  };

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-8 sm:py-12 md:py-16 lg:py-20" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-primary-800">Our Impact</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto px-4">
            Making a difference with sustainable biomass solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => {
            const numericValue = parseNumber(stat.number);
            const suffix = stat.number.replace(/[0-9.-]/g, '');
            
            return (
              <motion.div 
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden"
                variants={itemVariants}
                whileHover="hover"
                custom={cardHoverVariants}
              >
                <div className="absolute top-0 right-0 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-primary-600">
                    {inView && (
                      <CountUp
                        end={numericValue}
                        duration={2.5}
                        separator=","
                        suffix={suffix}
                        decimals={stat.number.includes('.') ? 1 : 0}
                      />
                    )}
                  </div>
                  <div className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-gray-800">{stat.label}</div>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600">{stat.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBanner;