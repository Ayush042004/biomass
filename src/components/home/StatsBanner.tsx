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
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Our Impact</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Making a difference with sustainable biomass solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden"
                variants={itemVariants}
                whileHover="hover"
                custom={cardHoverVariants}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-600">
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
                  <div className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</div>
                  <p className="text-gray-600">{stat.description}</p>
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