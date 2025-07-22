import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../../data/products';

const ProductsGrid: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
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
      y: -8,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section bg-gray-100" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Discover our range of sustainable biomass solutions designed for efficiency and environmental responsibility.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              className="card overflow-hidden transition-all duration-300 group relative"
              variants={itemVariants}
              whileHover="hover"
              custom={cardHoverVariants}
            >
              <div className="relative overflow-hidden h-40 sm:h-48 md:h-56 lg:h-64">
                <motion.img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-primary-500 text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm shadow-lg">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-3 sm:p-4 lg:p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors duration-300">{product.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3">{product.description}</p>
                <Link 
                  to={`/products/${product.id}`}
                  className="text-primary-500 font-medium inline-flex items-center group-hover:text-primary-700 transition-colors duration-300 text-xs sm:text-sm lg:text-base"
                >
                  Learn more
                  <motion.svg 
                    className="ml-2 w-3 h-3 sm:w-4 sm:h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-6 sm:mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/products" className="btn-primary text-sm sm:text-base">
              View All Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsGrid;