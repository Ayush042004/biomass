import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSuccess(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4">
      {isSuccess ? (
        <motion.div 
          className="bg-primary-100 text-primary-800 p-3 sm:p-4 md:p-6 rounded-lg text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            ✓
          </motion.div>
          <p className="font-semibold text-xs sm:text-sm md:text-base">Thank you for subscribing to our newsletter!</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 font-medium"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              type="submit"
              className="btn-primary px-3 sm:px-4 md:px-6 py-2 sm:py-3 whitespace-nowrap font-semibold w-full text-xs sm:text-sm md:text-base"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full"
                />
              ) : (
                'Subscribe'
              )}
            </motion.button>
          </div>
          {error && (
            <motion.p 
              className="text-red-400 text-xs sm:text-sm font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.p>
          )}
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;