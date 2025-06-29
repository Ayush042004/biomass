import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResearchPage: React.FC = () => {
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
        className="relative bg-cover bg-center py-20 min-h-[70vh] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
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
              Research & Development
            </motion.h1>
            <motion.h5 className='text-1xl md:text-3xl text-gray-100 max-w-3xl mt-5'>
            Engineering the Future of Circular Bioenergy
            </motion.h5>
            <motion.p 
              className="text-sm md:text-xl text-gray-100 max-w-3xl mt-5"
              variants={itemVariants}
            >
              At Nature Bio Works, innovation isn’t a department — it’s the foundation of our mission. Our in-house R&D capabilities are focused on developing next-generation biomass and waste-to-energy technologies that are scalable, efficient, and climate-resilient.
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
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-primary-800">Innovation at Our Core</h2>
              <motion.p 
                className="text-lg mb-8 text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
             Our R&D team blends environmental science with precision engineering to deliver disruptive solutions in biomass utilization and waste valorization.
              </motion.p>
              <div className="space-y-6">
                {[
                  {
                    number: "1",
                    title: " Thermal Conversion Technologies",
                    description: "Advancing torrefaction and pyrolysis techniques to create high-density, low-emission biofuels from agricultural and municipal waste streams."
                  },
                  {
                    number: "2",
                    title: " Waste Segregation & Preprocessing",
                    description: "Developing smart systems for real-time sorting, moisture control, and contamination removal to improve input quality and energy yield."
                  },
                  {
                    number: "3",
                    title: "Emission Management & Compliance Tech",
                    description: "Designing modular pollution control systems including bag filters, ID/FD fans, and wet scrubbers aligned with CPCB and EU standards."
                  },
                  {
                    number: "4",
                    title: "Decentralized Bioenergy Units",
                    description: "Prototyping compact, rooftop-scale biogas and pellet units for institutional campuses and rural clusters — reducing energy inequity."
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className="flex-shrink-0 mt-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                        {item.number}
                      </div>
                    </motion.div>
                    <div className="ml-6">
                      <h3 className="text-xl font-display font-semibold mb-2 text-primary-800">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                  alt="Research and Development"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Research Projects</div>
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
              Ongoing Research Initiatives
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-700 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Exploring cutting-edge solutions for tomorrow's energy challenges.
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
                icon: "🔬",
                title: "Fuel Performance Optimization",
                description: "Analyzing torrefied vs. non-torrefied pellets across various feedstocks to enhance combustion efficiency and lifecycle performance.",
                progress: 85
              },
              {
                icon: "🌿",
                title: "Carbon Impact & Biochar Utilization",
                description: "Studying carbon sequestration potential of biochar and its application in regenerative agriculture and soil restoration.",
                progress: 70
              },
              {
                icon: "🤖",
                title: "Automation & AI in Waste Management",
                description: "Building AI-driven systems for predictive maintenance, fuel quality monitoring, and process automation within pellet plants.",
                progress: 60
              },
              {
                icon: "📈",
                title: " Policy-Linked Tech Integration",
                description: "Aligning R&D with India’s SATAT, Swachh Bharat, and Net Zero targets — ensuring our technologies qualify for MNRE and RBI-linked incentives.",
                progress: 90
              }
            ].map((project, index) => (
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
                  {project.icon}
                </motion.div>
                <h3 className="text-2xl font-display font-bold mb-4 text-primary-800">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                    />
                  </div>
                </div>
                <Link to="/contact" className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="section relative bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(72, 148, 79, 0.9), rgba(72, 148, 79, 0.8)), url(https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
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
              Partner with Us
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Join us in developing the next generation of sustainable biomass solutions.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/contact" className="btn-accent text-lg px-8 py-4">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ResearchPage;