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
        className="relative bg-cover bg-center py-32 min-h-[70vh] flex items-center"
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
              className="text-xl md:text-2xl text-gray-100 max-w-3xl"
              variants={itemVariants}
            >
              Leading the transition to sustainable biomass energy solutions since 2010.
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
                At Nature Biomass Solutions, we're dedicated to revolutionizing the energy industry by providing sustainable biomass alternatives that reduce environmental impact while meeting modern energy needs.
              </motion.p>
              <motion.p 
                className="text-lg mb-6 text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                Our mission is to accelerate the global transition away from fossil fuels by making biomass energy solutions accessible, efficient, and economically viable for businesses across all sectors.
              </motion.p>
              <motion.p 
                className="text-lg mb-8 text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                We believe that sustainable energy is not just an environmental imperative but also a tremendous business opportunity. By harnessing the power of biomass, we help our clients reduce their carbon footprint while improving their bottom line.
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
              Our Values
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-700 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              These core principles guide everything we do at Nature Biomass Solutions.
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
                description: "We're committed to environmental responsibility in everything we do, from sourcing materials to designing energy-efficient systems."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "We constantly push the boundaries of biomass technology to deliver more efficient, cost-effective, and environmentally friendly solutions."
              },
              {
                icon: "🤝",
                title: "Partnership",
                description: "We build long-term relationships with our clients, partners, and communities, working together to create a more sustainable future."
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
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-primary-800"
              variants={itemVariants}
            >
              Our Journey
            </motion.h2>
            <div className="space-y-16">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  description: "Nature Biomass Solutions was established with a vision to revolutionize the biomass energy sector, starting with a small team of engineers and environmental scientists."
                },
                {
                  year: "2013",
                  title: "First Major Installation",
                  description: "Completed our first large-scale industrial biomass boiler installation, reducing the client's carbon emissions by 60% and energy costs by 40%."
                },
                {
                  year: "2017",
                  title: "International Expansion",
                  description: "Expanded operations into European and Asian markets, establishing key partnerships with biomass suppliers and local energy companies."
                },
                {
                  year: "2020",
                  title: "Innovation Award",
                  description: "Received the Global Clean Energy Innovation Award for our high-efficiency biomass conversion technology."
                },
                {
                  year: "2023",
                  title: "Carbon Neutral Certification",
                  description: "Achieved carbon neutral status for all operations and launched our comprehensive Electrification Roadmap service to help clients transition to clean energy."
                }
              ].map((milestone, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col md:flex-row gap-8 items-center"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="md:w-1/4 flex flex-col items-center md:items-start"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-2xl font-bold py-4 px-6 rounded-xl shadow-lg">
                      {milestone.year}
                    </div>
                  </motion.div>
                  <motion.div 
                    className="md:w-3/4 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-2xl font-display font-bold mb-4 text-primary-800">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
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