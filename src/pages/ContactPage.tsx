import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        setError('Please fill out all required fields');
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <motion.section 
        className="relative bg-cover bg-center py-12 sm:py-16 md:py-20 lg:py-24 min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-white leading-tight px-4"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-3xl px-4"
              variants={itemVariants}
            >
              Get in touch with our team to discuss how we can help with your biomass energy needs.
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 lg:p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-4 sm:mb-6 lg:mb-8 text-primary-800">Contact Information</h2>
                
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: "Our Office",
                      content: (
                        <>
                          B-44,1st Floor,<br />
                          Noida Sector 64, Gautam Buddha Nagar<br />
                          Uttar Pradesh, India
                        </>
                      )
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: (
                        <>
                          012-0444-4600, +91 98736 94143 , 9625979877<br />
                          <span className="text-gray-500 text-xs sm:text-sm">Monday-Friday, 9am-5pm IST</span>
                        </>
                      )
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: (
                        <>
                          Info@naturebioworks.in<br />
                          <span className="text-gray-500 text-xs sm:text-sm">We respond within 24 hours</span>
                        </>
                      )
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary-500" />
                      </div>
                      <div className="ml-2 sm:ml-3 lg:ml-4">
                        <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-primary-800">{item.title}</h3>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-600">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 lg:p-8"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-4 sm:mb-6 lg:mb-8 text-primary-800">Get in Touch</h2>
                
                {isSuccess ? (
                  <motion.div 
                    className="bg-green-100 text-green-700 p-3 sm:p-4 md:p-6 rounded-xl mb-4 sm:mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-bold text-xs sm:text-sm md:text-base">Message Sent!</h3>
                    <p className="text-xs sm:text-sm md:text-base">Thank you for reaching out. One of our representatives will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6"
                      variants={itemVariants}
                    >
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                          required
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6"
                      variants={itemVariants}
                    >
                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                        />
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-3 sm:mb-4 md:mb-6"
                      variants={itemVariants}
                    >
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="consultation">Request Consultation</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                    
                    <motion.div 
                      className="mb-3 sm:mb-4 md:mb-6"
                      variants={itemVariants}
                    >
                      <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                        required
                      ></textarea>
                    </motion.div>
                    
                    {error && (
                      <motion.div 
                        className="mb-3 sm:mb-4 md:mb-6 text-red-500 text-xs sm:text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {error}
                      </motion.div>
                    )}
                    
                    <motion.button
                      type="submit"
                      className="btn-primary w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4"
                      disabled={isSubmitting}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </motion.form>
                )}
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
            className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-3 sm:mb-4 md:mb-6 text-primary-800"
              variants={itemVariants}
            >
              Our Location
            </motion.h2>
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-700 max-w-3xl mx-auto px-4"
              variants={itemVariants}
            >
              Visit our headquarters to discuss your biomass needs in person.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8272.302707160778!2d77.37043668769347!3d28.614410635538114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a067afde25%3A0x82d24bd1cd9ffc00!2sNATURE%20BIO%20WORKS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1751179347612!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nature Bio Works Office Location"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactPage;