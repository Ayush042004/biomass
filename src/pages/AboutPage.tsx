import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.section 
        className="relative bg-cover bg-center py-20 min-h-[70vh] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
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
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-white leading-tight"
              variants={itemVariants}
            >
              About Us
            </motion.h1>
            <motion.p 
              className="text-sm md:text-xl text-gray-100 max-w-3xl mt-20"
              variants={itemVariants}
            >
               Established in 2021, Nature Bio Works has been a pioneer in delivering advanced sustainable energy solutions. We specialize in enabling industrial and institutional clients to transition seamlessly from fossil 
               fuels to high-efficiency biomass technologies. Our operations are driven by a deep commitment to environmental stewardship, supported by state-of-the-art engineering and innovative waste-to-energy systems.
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary-800">Our Mission</h2>
              <motion.p 
                className="text-lg mb-6 text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                At Nature Bio Works, our mission is to lead the transition toward a cleaner, more sustainable energy future by delivering high-performance biomass solutions that address both environmental and industrial challenges.
              </motion.p>
              <motion.p 
                className="text-lg mb-6 text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                We are committed to replacing fossil fuels with renewable, carbon-neutral biomass fuels—enabling industries to significantly reduce emissions while maintaining operational efficiency and cost-effectiveness.
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-gray-700 leading-relaxed"
                variants={itemVariants} 
              >
                We view sustainable energy not only as an environmental necessity but as a strategic lever for business growth. Through innovation, engineering excellence, and deep sectoral expertise, we empower our clients to meet their ESG goals, reduce their carbon footprint, and unlock new value from waste.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link to="/contact" className="btn-primary">
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={imageVariants}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Biomass energy plant" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section bg-gradient-to-br from-primary-50 to-primary-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-800"
              variants={itemVariants}
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-700 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              At Nature Bio Works, our work is anchored in principles that reflect our long-term commitment to environmental stewardship, technical excellence, and shared progress.

            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                description: "We are unwavering in our commitment to climate-positive action. From waste sourcing to system deployment, every solution we deliver is designed to minimize environmental impact and maximize resource efficiency."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We challenge conventional norms by continuously advancing biomass technologies. Our solutions are driven by R&D, precision engineering, and a deep understanding of energy transition needs."
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We believe real impact is made through collaboration. Whether with corporates, governments, farmers, or communities — we co-create solutions that are resilient, inclusive, and future-ready."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="text-4xl mb-6"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-bold mb-4 text-primary-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

     

      <motion.section 
        className="section relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(72, 148, 79, 0.9), rgba(72, 148, 79, 0.8)), url(https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
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
              className="text-4xl md:text-5xl font-display font-bold mb-6"
              variants={itemVariants}
            >
              Ready to Join the Clean Energy Revolution?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Contact us today to learn how our biomass solutions can help your business reduce emissions and costs.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                Get Your Electrification Roadmap
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutPage;