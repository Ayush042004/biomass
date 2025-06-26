import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111721/1_zfe0xv.png',
    title: 'Sustainable Energy Solutions',
    subtitle: 'Powering the future with clean biomass technology'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111713/2_wh5q4j.png',
    title: 'Advanced Biomass Systems',
    subtitle: 'Efficient and environmentally friendly energy production'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/3_p4zkh7.png',
    title: 'Industrial Solutions',
    subtitle: 'Custom biomass systems for every industry'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/4_vjwfto.png',
    title: 'Research & Innovation',
    subtitle: 'Pushing the boundaries of biomass technology'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111715/5_w53mql.png',
    title: 'Global Impact',
    subtitle: 'Making a difference worldwide'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111716/6_uzmto2.png',
    title: 'Expert Team',
    subtitle: 'Dedicated professionals at your service'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dhckg4kuj/image/upload/v1749111714/7_gjspem.png',
    title: 'Sustainable Future',
    subtitle: 'Building a cleaner world together'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
    title: 'Clean Energy Innovation',
    subtitle: 'Leading the renewable energy revolution'
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg',
    title: 'Environmental Excellence',
    subtitle: 'Committed to a greener tomorrow'
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
    title: 'Technology Leadership',
    subtitle: 'Pioneering biomass solutions'
  }
];

const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.1
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8
      }
    }
  };

  const textVariants = {
    enter: {
      opacity: 0,
      y: 50
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-custom text-white text-center">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {slides[currentSlide].title}
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl"
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;