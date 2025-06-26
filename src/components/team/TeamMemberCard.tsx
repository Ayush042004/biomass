import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  photo,
  bio,
}) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-64 sm:h-80">
        <motion.img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <motion.div 
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl font-display font-bold mb-1 text-primary-800">{name}</h3>
        <p className="text-primary-500 font-medium mb-4">{role}</p>
        <p className="text-gray-600 leading-relaxed">{bio}</p>
      </motion.div>
    </motion.div>
  );
};

export default TeamMemberCard;