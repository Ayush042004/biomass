import React from 'react';

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
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden h-64 sm:h-80">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary-500 font-medium mb-4">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;